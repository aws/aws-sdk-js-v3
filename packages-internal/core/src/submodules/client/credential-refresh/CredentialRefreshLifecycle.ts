import { CredentialsProviderError } from "@smithy/core/config";
import type { RuntimeConfigIdentityProvider } from "@aws-sdk/types";
import type { AwsCredentialIdentity, Logger } from "@smithy/types";

import { classifyCredentialCacheState } from "./classifyCredentialCacheState";
import {
  MANDATORY_REFRESH_WINDOW,
  nonRecoverableErrorCacheMs,
  refreshBackoffMs,
  selectAdvisoryWindowMs,
} from "./constants";
import { isNonRecoverable, type RefreshNonRecoverableError } from "./nonRecoverable";
import type { CredentialCacheState, CredentialRefreshCallOptions, CredentialSourceOptions } from "./types";

/**
 * State and logic of credential refresh lifecycle.
 *
 * @internal
 */
export class CredentialRefreshLifecycle<Identity extends AwsCredentialIdentity> {
  private cached: Identity | undefined;

  private effectiveAdvisoryWindowMs: number | undefined;

  private nextRefreshAllowedAt: number | undefined;

  // A non-recoverable error, re-raised without contacting the source.
  private cachedError: RefreshNonRecoverableError | undefined;
  private cachedErrorExpiresAt: number | undefined;

  private initialFetch: Promise<Identity> | undefined;

  private inFlight: Promise<void> | undefined;

  private generation = 0;

  // Access key ID of cached credentials a service rejected, until a refresh replaces them.
  private rejectedAccessKeyId: string | undefined;

  public constructor(
    private readonly source: RuntimeConfigIdentityProvider<Identity>,
    private readonly logger: Logger | undefined
  ) {}

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
      return this.waitThenRefresh(() => this.refreshUnderLock(options, () => this.generation === observedGeneration));
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

    // State 3: advisory. Refresh without blocking, or use cached credentials if a refresh is already in flight.
    if (!this.mandatoryRefreshNeeded()) {
      return this.refreshUnlessInFlight(
        () => this.refreshUnderLock(options, () => this.refreshNeeded()),
        () => this.cached!
      );
    }

    // States 4 and 5: mandatory or expired. Block, and reuse an in-flight attempt's result.
    return this.waitThenRefresh(() => this.refreshUnderLock(options, () => this.mandatoryRefreshNeeded()));
  }

  /**
   * Called when a service rejects credentials. If they're still the cached ones, marks them expired so the next
   * call refreshes.
   */
  public invalidate(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void {
    if (this.inFlight) {
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

  // True for 1 to 5 seconds after a non-recoverable error, when it's thrown again without calling the source.
  private nonRecoverableErrorCached(): boolean {
    return this.cachedError !== undefined && Date.now() < this.cachedErrorExpiresAt!;
  }

  // Waits until no refresh is running, then runs `refresh` while holding the lock so no other call can start one.
  private async waitThenRefresh<T>(refresh: () => Promise<T>): Promise<T> {
    while (this.inFlight) {
      await this.inFlight;
    }
    let release!: () => void;
    this.inFlight = new Promise<void>((resolve) => {
      release = resolve;
    });
    try {
      return await refresh();
    } finally {
      this.inFlight = undefined;
      release();
    }
  }

  // Runs `refresh` only if no refresh is running, otherwise returns `useCached()` right away without waiting.
  private async refreshUnlessInFlight<T>(refresh: () => Promise<T>, useCached: () => T): Promise<T> {
    if (this.inFlight) {
      return useCached();
    }
    return this.waitThenRefresh(refresh);
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
    this.warnRefreshFailed(
      `Credential refresh failed: ${reason}. The SDK will continue using cached credentials. ` +
        `A refresh of these credentials will be attempted again after ${Math.round(backoffMs / 1000)} seconds.`
    );
  }

  // Keeps a non-recoverable error for 1 to 5 seconds so repeated calls get it without calling the source.
  private cacheNonRecoverableError(error: RefreshNonRecoverableError): void {
    this.cachedError = error;
    this.cachedErrorExpiresAt = Date.now() + nonRecoverableErrorCacheMs();
  }

  /**
   * Calls the credential source once and updates the cache from the result. Must hold the refresh lock.
   * New credentials are stored. A non-recoverable error is cached and thrown. Any other failure starts
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

    if (failure !== undefined && isNonRecoverable(failure)) {
      this.cacheNonRecoverableError(failure);
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
    this.initialFetch ??= this.waitThenRefresh(async () => {
      if (this.cached !== undefined) {
        return this.cached;
      }
      if (this.nonRecoverableErrorCached()) {
        throw this.cachedError;
      }
      return this.callSourceAndApply(options, false);
    }).finally(() => {
      this.initialFetch = undefined;
    });
    return this.initialFetch;
  }

  /**
   * Runs once the caller holds the refresh lock, for every refresh path.
   * The caller ahead may have refreshed, cached a non-recoverable error, or started the backoff while
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
    if (this.nonRecoverableErrorCached()) {
      throw this.cachedError;
    }
    if (this.refreshRateLimited()) {
      return this.cached!;
    }
    return this.callSourceAndApply(options, true);
  }
}
