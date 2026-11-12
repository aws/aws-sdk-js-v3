import { CredentialsProviderError } from "@smithy/core/config";
import type { RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity } from "@smithy/types";

import { classifyCredentialCacheState } from "./classifyCredentialCacheState";
import {
  MANDATORY_REFRESH_WINDOW,
  nonRecoverableErrorCacheMs,
  refreshBackoffMs,
  selectAdvisoryWindowMs,
} from "./constants";
import { isNonRecoverable, type RefreshNonRecoverableError } from "./nonRecoverable";
import type {
  CredentialCacheState,
  CredentialRefreshCallOptions,
  CredentialRefreshProvider,
  CredentialRefreshProviderOptions,
} from "./types";

/**
 * Options the lifecycle passes to the source.
 */
type SourceOptions = CredentialRefreshCallOptions & {
  // Set when this refresh follows invalidate(), so a token-backed source such as Login gets new credentials.
  rejectedAccessKeyId?: string;
};

/**
 * Wraps a credential source in the credential refresh lifecycle.
 *
 * Advisory window: one caller refreshes while the others keep using the cached credentials.
 * Mandatory window or expired: callers wait for the refresh.
 *
 * If a refresh fails, the cached credentials are kept and returned, even after they expire.
 * A backoff of 1 to 10 minutes is then set from the credentials remaining lifetime, shorter
 * when expiration is near, and no refresh is attempted until it elapses.
 *
 * @internal
 *
 * @param source - credential source to wrap. Called once per refresh; any request retries happen inside it.
 * @param options - logger for the refresh failure warning.
 */
export const createCredentialRefreshProvider = <Identity extends AwsCredentialIdentity>(
  source: RuntimeConfigIdentityProvider<Identity>,
  options: CredentialRefreshProviderOptions = {}
): CredentialRefreshProvider<Identity> => {
  const logger = options.logger;

  let cached: Identity | undefined;

  let effectiveAdvisoryWindowMs: number | undefined;

  let nextRefreshAllowedAt: number | undefined;

  // A non-recoverable error, re-raised without contacting the source.
  let cachedError: RefreshNonRecoverableError | undefined;
  let cachedErrorExpiresAt: number | undefined;

  let initialFetch: Promise<Identity> | undefined;

  let inFlight: Promise<void> | undefined;

  let generation = 0;

  // Access key ID of cached credentials a service rejected, until a refresh replaces them.
  let rejectedAccessKeyId: string | undefined;

  // Static credentials have no expiration, so they're only refreshed when forceRefresh is set.
  const isStaticCredentials = (): boolean => cached !== undefined && cached.expiration === undefined;

  const currentState = (): CredentialCacheState => {
    if (cached === undefined) {
      return "none";
    }
    if (isStaticCredentials()) {
      return "valid";
    }
    return classifyCredentialCacheState(cached, Date.now(), {
      advisoryWindow: effectiveAdvisoryWindowMs!,
      mandatoryWindow: MANDATORY_REFRESH_WINDOW,
    });
  };

  const refreshNeeded = (): boolean => {
    const state = currentState();
    return state === "advisory" || state === "mandatory" || state === "expired";
  };

  const mandatoryRefreshNeeded = (): boolean => {
    const state = currentState();
    return state === "mandatory" || state === "expired";
  };

  const refreshRateLimited = (): boolean => nextRefreshAllowedAt !== undefined && Date.now() < nextRefreshAllowedAt;

  const nonRecoverableErrorCached = (): boolean => cachedError !== undefined && Date.now() < cachedErrorExpiresAt!;

  // Waits until no refresh is running, then runs `refresh` while holding the lock so no other call can start one.
  const waitThenRefresh = async <T>(refresh: () => Promise<T>): Promise<T> => {
    while (inFlight) {
      await inFlight;
    }
    let release!: () => void;
    inFlight = new Promise<void>((resolve) => {
      release = resolve;
    });
    try {
      return await refresh();
    } finally {
      inFlight = undefined;
      release();
    }
  };

  // Runs `refresh` only if no refresh is running, otherwise returns `useCached()` right away without waiting.
  const refreshUnlessInFlight = async <T>(refresh: () => Promise<T>, useCached: () => T): Promise<T> => {
    if (inFlight) {
      return useCached();
    }
    return waitThenRefresh(refresh);
  };

  const storeCredentials = (credentials: Identity): void => {
    cached = credentials;
    rejectedAccessKeyId = undefined;
    generation++;
    effectiveAdvisoryWindowMs =
      credentials.expiration === undefined
        ? undefined
        : selectAdvisoryWindowMs(credentials.expiration.getTime() - Date.now());
    nextRefreshAllowedAt = undefined;
    cachedError = undefined;
    cachedErrorExpiresAt = undefined;
  };

  // Logs a warning when a refresh fails, to the console if no logger is configured.
  const warnRefreshFailed = (message: string): void => {
    const useConsole = !logger || logger.constructor?.name === "NoOpLogger";
    (useConsole ? console : logger).warn?.(message);
  };

  // Adds rejectedAccessKeyId after an invalidation. Copies the options only when something changes.
  const toSourceOptions = (options: CredentialRefreshCallOptions | undefined): SourceOptions | undefined => {
    if (rejectedAccessKeyId !== undefined && cached?.accessKeyId === rejectedAccessKeyId) {
      return { ...options, rejectedAccessKeyId };
    }
    if ((options as SourceOptions | undefined)?.rejectedAccessKeyId === undefined) {
      return options;
    }
    const { rejectedAccessKeyId: _ignored, ...callerOptions } = options as SourceOptions;
    return callerOptions;
  };

  const enterRefreshBackoff = (reason: string): void => {
    // Scales with the cached credentials remaining lifetime.
    const remainingMs = cached?.expiration === undefined ? Infinity : cached.expiration.getTime() - Date.now();
    const backoffMs = refreshBackoffMs(remainingMs);
    nextRefreshAllowedAt = Date.now() + backoffMs;
    warnRefreshFailed(
      `Credential refresh failed: ${reason}. The SDK will continue using cached credentials. ` +
        `A refresh of these credentials will be attempted again after ${Math.round(backoffMs / 1000)} seconds.`
    );
  };

  const cacheNonRecoverableError = (error: RefreshNonRecoverableError): void => {
    cachedError = error;
    cachedErrorExpiresAt = Date.now() + nonRecoverableErrorCacheMs();
  };

  /**
   * Calls the credential source once and updates the cache from the result. Must hold the refresh lock.
   * New credentials are stored. A non-recoverable error is cached and thrown. Any other failure starts
   * the backoff and returns the cached credentials, or throws if nothing is cached yet.
   *
   * @param options - caller options forwarded to the source.
   * @param hasCachedFallback - whether cached credentials exist to fall back on (false only on the initial fetch).
   */
  const callSourceAndApply = async (
    options: CredentialRefreshCallOptions | undefined,
    hasCachedFallback: boolean
  ): Promise<Identity> => {
    let fresh: Identity | undefined;
    let failure: unknown;
    // Used in the warning if the refresh fails. A source that resolves with nothing keeps this one.
    let reason = "the credential source did not return credentials";

    try {
      fresh = await source(toSourceOptions(options));
    } catch (error) {
      failure = error;
      reason = (error as Error)?.message ?? String(error);
    }

    // Already-expired credentials count as a failed refresh. On the initial fetch they're cached, since nothing else is.
    if (
      hasCachedFallback &&
      fresh !== undefined &&
      fresh.expiration !== undefined &&
      fresh.expiration.getTime() <= Date.now()
    ) {
      reason = "the credential source returned credentials that have already expired";
      fresh = undefined;
    }

    if (fresh !== undefined) {
      storeCredentials(fresh);
      return fresh;
    }

    if (failure !== undefined && isNonRecoverable(failure)) {
      cacheNonRecoverableError(failure);
      throw failure;
    }

    if (!hasCachedFallback) {
      // Nothing to fall back on, so the source's own error is raised unchanged.
      // A source that returned nothing gets a CredentialsProviderError that stops the chain.
      throw (
        failure ??
        new CredentialsProviderError("The credential source did not return credentials.", {
          tryNextLink: false,
          logger,
        })
      );
    }

    enterRefreshBackoff(reason);
    return cached!;
  };

  const fetchInitialCredentials = (options?: CredentialRefreshCallOptions): Promise<Identity> => {
    initialFetch ??= waitThenRefresh(async () => {
      if (cached !== undefined) {
        return cached;
      }
      if (nonRecoverableErrorCached()) {
        throw cachedError;
      }
      return callSourceAndApply(options, false);
    }).finally(() => {
      initialFetch = undefined;
    });
    return initialFetch;
  };

  /**
   * Runs once the caller holds the refresh lock, for every refresh path.
   * The caller ahead may have refreshed, cached a non-recoverable error, or started the backoff while
   * this caller waited. Each check below handles one of those before the source is called.
   */
  const refreshUnderLock = async (
    options: CredentialRefreshCallOptions | undefined,
    stillNeeded: () => boolean
  ): Promise<Identity> => {
    // The previous lock holder may have already refreshed or set the backoff.
    if (!stillNeeded()) {
      return cached!;
    }
    if (nonRecoverableErrorCached()) {
      throw cachedError;
    }
    if (refreshRateLimited()) {
      return cached!;
    }
    return callSourceAndApply(options, true);
  };

  const getCredentials = async (options?: CredentialRefreshCallOptions): Promise<Identity> => {
    // State 1: nothing cached yet.
    if (cached === undefined) {
      return fetchInitialCredentials(options);
    }

    if (options?.forceRefresh) {
      const observedGeneration = generation;
      return waitThenRefresh(() => refreshUnderLock(options, () => generation === observedGeneration));
    }

    if (isStaticCredentials()) {
      return cached;
    }

    // State 2: cached credentials are outside every window.
    if (!refreshNeeded()) {
      return cached;
    }

    // Backoff not yet elapsed after a failure: use cached credentials without contacting the source.
    if (refreshRateLimited()) {
      return cached;
    }

    // State 3: advisory. Refresh without blocking, or use cached credentials if a refresh is already in flight.
    if (!mandatoryRefreshNeeded()) {
      return refreshUnlessInFlight(
        () => refreshUnderLock(options, refreshNeeded),
        () => cached!
      );
    }

    // States 4 and 5: mandatory or expired. Block, and reuse an in-flight attempt's result.
    return waitThenRefresh(() => refreshUnderLock(options, mandatoryRefreshNeeded));
  };

  const provider = getCredentials as typeof getCredentials & {
    invalidate: CredentialRefreshProvider<Identity>["invalidate"];
    memoized: true;
  };

  provider.invalidate = (rejectedIdentity) => {
    if (inFlight) {
      return;
    }
    if (cached === undefined || isStaticCredentials()) {
      return;
    }

    if (cached.accessKeyId !== rejectedIdentity.accessKeyId) {
      return;
    }
    cached = { ...cached, expiration: new Date(Date.now()) };
    rejectedAccessKeyId = cached.accessKeyId;
  };

  provider.memoized = true;

  return provider;
};
