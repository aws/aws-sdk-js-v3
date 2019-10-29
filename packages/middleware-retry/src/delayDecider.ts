import { MAXIMUM_RETRY_DELAY } from "./constants";

/**
 * Calculate a capped, fully-jittered exponential backoff time.
 */
export function defaultDelayDecider(
  delayBase: number,
  attempts: number
): number {
  return Math.floor(
    Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase)
  );
}
