/**
 * The base number of milliseconds to use in calculating a suitable cool-down
 * time when a retryable error is encountered.
 */
export const DEFAULT_RETRY_DELAY_BASE = 100;

/**
 * The maximum amount of time (in milliseconds) that will be used as a delay
 * between retry attempts.
 */
export const MAXIMUM_RETRY_DELAY = 20 * 1000;

/**
 * HTTP status codes that indicate the operation may be retried.
 */
export const RETRYABLE_STATUS_CODES = new Set<number>();
[429, 500, 502, 503, 504, 509].forEach(code =>
  RETRYABLE_STATUS_CODES.add(code)
);

/**
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
export const THROTTLING_RETRY_DELAY_BASE = 500;
