import { isClockSkewed } from "./isClockSkewed";

/**
 * @internal
 *
 * Computes an updated system clock offset from a server Date header.
 *
 * When `timeRequestSent` is provided, uses the midpoint formula:
 *   elapsed        = timeResponseReceived - timeRequestSent
 *   midpoint       = (timeRequestSent + timeResponseReceived) / 2
 *   candidateSkew  = serverTime - midpoint
 *
 * When `timeRequestSent` is absent (legacy callers), falls back to:
 *   candidateSkew  = serverTime - timeResponseReceived
 *
 * Returns `currentSystemClockOffset` unchanged if the candidate skew does not
 * exceed the detection threshold.
 *
 * @param clockTime The string value of the Date response header.
 * @param currentSystemClockOffset The current system clock offset in milliseconds.
 * @param timeRequestSent The raw client time (ms) at which the request was sent.
 */
export const getUpdatedSystemClockOffset = (
  clockTime: string,
  currentSystemClockOffset: number,
  timeRequestSent?: number
): number => {
  const serverTime = Date.parse(clockTime);
  const timeResponseReceived = Date.now();

  const candidateSkew =
    timeRequestSent !== undefined
      ? serverTime - (timeRequestSent + timeResponseReceived) / 2
      : serverTime - timeResponseReceived;

  if (isClockSkewed(serverTime, currentSystemClockOffset)) {
    return candidateSkew;
  }
  return currentSystemClockOffset;
};
