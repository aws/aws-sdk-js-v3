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
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
export const THROTTLING_RETRY_DELAY_BASE = 500;
