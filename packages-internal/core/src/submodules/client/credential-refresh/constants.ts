/**
 * Mandatory refresh window.
 * @internal
 */
export const MANDATORY_REFRESH_WINDOW = 60_000;

/**
 * Lower bound of the jittered backoff applied after a failed refresh.
 * @internal
 */
export const REFRESH_BACKOFF_MIN = 60_000;

/**
 * Largest upper bound of the backoff, reached once half the remaining lifetime exceeds it.
 * @internal
 */
export const REFRESH_BACKOFF_MAX = 600_000;

/**
 * Smallest upper bound of the backoff, so retries near or past expiration stay jittered.
 * @internal
 */
export const REFRESH_BACKOFF_MIN_UPPER_BOUND = 90_000;

/**
 * Lower bound of the short-lived cache applied to a non-recoverable error.
 * @internal
 */
export const NON_RECOVERABLE_ERROR_CACHE_MIN = 1_000;

/**
 * Upper bound of the short-lived cache applied to a non-recoverable error.
 * @internal
 */
export const NON_RECOVERABLE_ERROR_CACHE_MAX = 5_000;

/**
 * Upper bound of the backoff: half the remaining lifetime, kept between 90 seconds and 10 minutes.
 * @internal
 *
 * @param remainingMs - remaining lifetime of the cached credentials. Negative once expired,
 * `Infinity` when they have no expiration.
 */
export const refreshBackoffUpperBoundMs = (remainingMs: number): number =>
  Math.max(REFRESH_BACKOFF_MIN_UPPER_BOUND, Math.min(Math.max(remainingMs, 0) / 2, REFRESH_BACKOFF_MAX));

/**
 * Jittered wait before retrying a failed refresh, from 1 minute up to the upper bound above.
 * Credentials close to expiring are retried sooner.
 * @internal
 *
 * @param remainingMs - remaining lifetime of the cached credentials.
 */
export const refreshBackoffMs = (remainingMs: number): number =>
  REFRESH_BACKOFF_MIN + Math.floor(Math.random() * (refreshBackoffUpperBoundMs(remainingMs) - REFRESH_BACKOFF_MIN));

/**
 * Jittered 1 to 5 second window for re-raising a cached non-recoverable error.
 * @internal
 */
export const nonRecoverableErrorCacheMs = (): number =>
  NON_RECOVERABLE_ERROR_CACHE_MIN +
  Math.floor(Math.random() * (NON_RECOVERABLE_ERROR_CACHE_MAX - NON_RECOVERABLE_ERROR_CACHE_MIN));

/**
 * Selects the effective advisory refresh window based on credential lifetime.
 * @internal
 *
 * @param lifetimeMs - credential lifetime when the credentials were obtained.
 */
export const selectAdvisoryWindowMs = (lifetimeMs: number): number => {
  if (lifetimeMs <= 20 * 60_000) {
    return 5 * 60_000;
  }
  if (lifetimeMs < 90 * 60_000) {
    return 15 * 60_000;
  }
  return 60 * 60_000;
};
