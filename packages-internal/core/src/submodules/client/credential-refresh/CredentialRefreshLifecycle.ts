import { CredentialsProviderError } from "@smithy/core/config";
import type { RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity, Logger } from "@smithy/types";

import { classifyCredentialCacheState } from "./classifyCredentialCacheState";
import {
  MANDATORY_REFRESH_WINDOW,
  unrecoverableErrorCacheMs,
  refreshBackoffMs,
  selectAdvisoryWindowMs,
} from "./constants";
import { Mutex } from "./Mutex";
import { isUnrecoverable, type RefreshUnrecoverableError } from "./unrecoverable";
import type {
  CredentialCacheState,
  CredentialRefreshCallOptions,
  CredentialRefreshProviderOptions,
  CredentialSourceOptions,
} from "./types";

/**
 * State and logic of credential refresh lifecycle.
 *
 * @internal
 */
export class CredentialRefreshLifecycle<Identity extends AwsCredentialIdentity> {
  private cached: Identity | undefined;

  private effectiveAdvisoryWindowMs: number | undefined;

  private nextRefreshAllowedAt: number | undefined;

  // An unrecoverable error, re-raised without contacting the source.
  private cachedError: RefreshUnrecoverableError | undefined;
  private cachedErrorExpiresAt: number | undefined;

  private initialFetch: Promise<Identity> | undefined;

  // Held while a refresh runs, so only one refresh runs at a time.
  private readonly refreshLock = new Mutex();

  // Goes up by 1 each time new credentials are stored. A forceRefresh call compares it with the value
  // it saw on arrival to tell whether a refresh succeeded while it waited.
  private generation = 0;

  // Access key ID of cached credentials a service rejected, until a refresh replaces them.
  private rejectedAccessKeyId: string | undefined;

  // True after a refresh fails with an unrecoverable error. While true, the next advisory call
  // refreshes and waits instead of refreshing in the background, so it gets the error. A successful
  // refresh or other failure sets it back to false.
  private lastRefreshFailedUnrecoverably = false;

  private readonly source: RuntimeConfigIdentityProvider<Identity>;

  private readonly logger: Logger | undefined;

  public constructor({
    source,
    logger,
  }: CredentialRefreshProviderOptions & { source: RuntimeConfigIdentityProvider<Identity> }) {
    this.source = source;
    this.logger = logger;
  }

  /**
   * Returns credentials for a provider call. Uses the cached credentials, refreshes them, or fetches the first set,
   * depending on how close they are to expiry.
   */
  public async getCredentials(options?: CredentialRefreshCallOptions): Promise<Identity> {
    // An outer lifecycle reports credentials a service rejected, the same as calling invalidate().
    const callerRejectedAccessKeyId = (options as CredentialSourceOptions | undefined)?.rejectedAccessKeyId;
    if (callerRejectedAccessKeyId !== undefined) {
      this.invalidate({ accessKeyId: callerRejectedAccessKeyId });
    }

    // State 1: nothing cached yet.
    if (this.cached === undefined) {
      return this.fetchInitialCredentials(options);
    }

    if (options?.forceRefresh) {
      const observedGeneration = this.generation;
      return this.refreshLock.runExclusive(() =>
        this.refreshUnderLock(options, () => this.generation === observedGeneration)
      );
    }

    if (this.isStaticCredentials()) {
      return this.cached;
    }

    // State 2: cached credentials are outside every window.
    if (!this.refreshNeeded()) {
      return this.cached;
    }

    // Backoff not yet elapsed after a failure: use cached credentials without contacting the source.
    if (this.refreshRateLimited()) {
      return this.cached;
    }

    // State 3: advisory. The cached credentials are still valid, so callers don't wait for the refresh.
    if (!this.mandatoryRefreshNeeded()) {
      const refresh = () => this.refreshUnderLock(options, () => this.refreshNeeded());

      // After an unrecoverable failure, refresh while this caller waits, so it gets the error if it happens again.
      if (this.lastRefreshFailedUnrecoverably) {
        return this.refreshUnlessInFlight(refresh, () => this.cached!);
      }

      // Start the refresh without waiting for it. New credentials go into the cache for the next caller,
      // and an unrecoverable error is cached so the next caller gets it.
      if (!this.refreshLock.isLocked) {
        this.refreshLock.runExclusive(refresh).catch(() => {});
      }
      return this.cached;
    }

    // States 4 and 5: mandatory or expired. Block, and reuse an in-flight attempt's result.
    return this.refreshLock.runExclusive(() => this.refreshUnderLock(options, () => this.mandatoryRefreshNeeded()));
  }

  /**
   * Called when a service rejects credentials. If they're still the cached ones, marks them expired so the next
   * call refreshes.
   */
  public invalidate(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void {
    if (this.refreshLock.isLocked) {
      return;
    }
    if (this.cached === undefined || this.isStaticCredentials()) {
      return;
    }

    if (this.cached.accessKeyId !== rejectedIdentity.accessKeyId) {
      return;
    }
    this.cached = { ...this.cached, expiration: new Date(Date.now()) };
    this.rejectedAccessKeyId = this.cached.accessKeyId;
  }

  // Static credentials have no usable expiration, so they're only refreshed when forceRefresh is set.
  // An expiration that isn't a Date, such as a string, counts as none.
  private isStaticCredentials(): boolean {
    return this.cached !== undefined && this.cached.expiration?.getTime?.() === undefined;
  }

  // Which window the cached credentials are in right now: none, valid, advisory, mandatory or expired.
  private currentState(): CredentialCacheState {
    return classifyCredentialCacheState(this.cached, Date.now(), {
      advisoryWindow: this.effectiveAdvisoryWindowMs!,
      mandatoryWindow: MANDATORY_REFRESH_WINDOW,
    });
  }

  // True once the cached credentials reach the advisory window, which includes the mandatory window and expiry.
  private refreshNeeded(): boolean {
    const state = this.currentState();
    return state === "advisory" || state === "mandatory" || state === "expired";
  }

  // True in the mandatory window or after expiry, when callers must wait for the refresh.
  private mandatoryRefreshNeeded(): boolean {
    const state = this.currentState();
    return state === "mandatory" || state === "expired";
  }

  // True while the backoff after a failed refresh hasn't elapsed, so the source isn't called.
  private refreshRateLimited(): boolean {
    return this.nextRefreshAllowedAt !== undefined && Date.now() < this.nextRefreshAllowedAt;
  }

  // True for 1 to 5 seconds after an unrecoverable error, when it's thrown again without calling the source.
  private unrecoverableErrorCached(): boolean {
    return this.cachedError !== undefined && Date.now() < this.cachedErrorExpiresAt!;
  }

  // Runs `refresh` only if no refresh is running, otherwise returns `useCached()` right away without waiting.
  private async refreshUnlessInFlight<T>(refresh: () => Promise<T>, useCached: () => T): Promise<T> {
    if (this.refreshLock.isLocked) {
      return useCached();
    }
    return this.refreshLock.runExclusive(refresh);
  }

  private storeCredentials(credentials: Identity): void {
    this.cached = credentials;
    this.rejectedAccessKeyId = undefined;
    this.generation++;
    const expiresAtMs = credentials.expiration?.getTime?.();
    this.effectiveAdvisoryWindowMs =
      expiresAtMs === undefined ? undefined : selectAdvisoryWindowMs(expiresAtMs - Date.now());
    this.nextRefreshAllowedAt = undefined;
    this.cachedError = undefined;
    this.cachedErrorExpiresAt = undefined;
    this.lastRefreshFailedUnrecoverably = false;
  }

  // Logs a warning when a refresh fails, to the console if no logger is configured.
  private warnRefreshFailed(message: string): void {
    const logger = this.logger;
    const useConsole = !logger || logger.constructor?.name === "NoOpLogger";
    (useConsole ? console : logger).warn?.(message);
  }

  // Adds rejectedAccessKeyId after an invalidation. A caller's rejectedAccessKeyId is passed on,
  // since the source checks it against its own credentials.
  private toSourceOptions(options: CredentialRefreshCallOptions | undefined): CredentialSourceOptions | undefined {
    if (this.rejectedAccessKeyId !== undefined && this.cached?.accessKeyId === this.rejectedAccessKeyId) {
      return { ...options, rejectedAccessKeyId: this.rejectedAccessKeyId };
    }
    return options;
  }

  // Sets the backoff after a failed refresh and logs the warning with the error and the wait in seconds.
  private enterRefreshBackoff(reason: string): void {
    // Scales with the cached credentials remaining lifetime.
    const expiresAtMs = this.cached?.expiration?.getTime?.();
    const remainingMs = expiresAtMs === undefined ? Infinity : expiresAtMs - Date.now();
    const backoffMs = refreshBackoffMs(remainingMs);
    this.nextRefreshAllowedAt = Date.now() + backoffMs;
    this.lastRefreshFailedUnrecoverably = false;
    this.warnRefreshFailed(
      `Credential refresh failed: ${reason}. The SDK will continue using cached credentials. ` +
        `A refresh of these credentials will be attempted again after ${Math.round(backoffMs / 1000)} seconds.`
    );
  }

  // Keeps an unrecoverable error for 1 to 5 seconds so repeated calls get it without calling the source.
  private cacheUnrecoverableError(error: RefreshUnrecoverableError): void {
    this.cachedError = error;
    this.cachedErrorExpiresAt = Date.now() + unrecoverableErrorCacheMs();
    this.lastRefreshFailedUnrecoverably = true;
  }

  /**
   * Calls the credential source once and updates the cache from the result. Must hold the refresh lock.
   * New credentials are stored. An unrecoverable error is cached and thrown. Any other failure starts
   * the backoff and returns the cached credentials, or throws if nothing is cached yet.
   *
   * @param options - caller options forwarded to the source.
   * @param hasCachedFallback - whether cached credentials exist to fall back on (false only on the initial fetch).
   */
  private async callSourceAndApply(
    options: CredentialRefreshCallOptions | undefined,
    hasCachedFallback: boolean
  ): Promise<Identity> {
    let fresh: Identity | undefined;
    let failure: unknown;
    // Used in the warning if the refresh fails. A source that resolves with nothing keeps this one.
    let reason = "the credential source did not return credentials";

    try {
      fresh = await this.source(this.toSourceOptions(options));
    } catch (error) {
      failure = error;
      reason = (error as Error)?.message ?? String(error);
    }

    // Already-expired credentials count as a failed refresh. On the initial fetch they're cached, since nothing else is.
    const freshExpiresAtMs = fresh?.expiration?.getTime?.();
    if (hasCachedFallback && freshExpiresAtMs !== undefined && freshExpiresAtMs <= Date.now()) {
      reason = "the credential source returned credentials that have already expired";
      fresh = undefined;
    }

    if (fresh !== undefined) {
      this.storeCredentials(fresh);
      return fresh;
    }

    if (failure !== undefined && isUnrecoverable(failure)) {
      this.cacheUnrecoverableError(failure);
      throw failure;
    }

    if (!hasCachedFallback) {
      // Nothing to fall back on, so the source's own error is raised unchanged.
      // A source that returned nothing gets a CredentialsProviderError that stops the chain.
      throw (
        failure ??
        new CredentialsProviderError("The credential source did not return credentials.", {
          tryNextLink: false,
          logger: this.logger,
        })
      );
    }

    this.enterRefreshBackoff(reason);
    return this.cached!;
  }

  // Fetches the first credentials. Calls that arrive while it runs share the same fetch.
  private fetchInitialCredentials(options?: CredentialRefreshCallOptions): Promise<Identity> {
    this.initialFetch ??= this.refreshLock
      .runExclusive(async () => {
        if (this.cached !== undefined) {
          return this.cached;
        }
        if (this.unrecoverableErrorCached()) {
          throw this.cachedError;
        }
        return this.callSourceAndApply(options, false);
      })
      .finally(() => {
        this.initialFetch = undefined;
      });
    return this.initialFetch;
  }

  /**
   * Runs once the caller holds the refresh lock, for every refresh path.
   * The caller ahead may have refreshed, cached an unrecoverable error, or started the backoff while
   * this caller waited. Each check below handles one of those before the source is called.
   */
  private async refreshUnderLock(
    options: CredentialRefreshCallOptions | undefined,
    stillNeeded: () => boolean
  ): Promise<Identity> {
    // The previous lock holder may have already refreshed or set the backoff.
    if (!stillNeeded()) {
      return this.cached!;
    }
    if (this.unrecoverableErrorCached()) {
      throw this.cachedError;
    }
    if (this.refreshRateLimited()) {
      return this.cached!;
    }
    return this.callSourceAndApply(options, true);
  }
}
