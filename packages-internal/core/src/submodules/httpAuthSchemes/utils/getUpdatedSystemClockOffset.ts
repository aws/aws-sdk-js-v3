/**
 * Computes an updated system clock offset from a server Date header.
 *
 * The candidate skew is the difference between the server time and the client
 * time when the response is received:
 *   candidateSkew = serverTime - timeResponseReceived
 *
 * The candidate is discarded if:
 *   - An Age header is present
 *   - elapsed > 15 minutes
 *
 * The candidate is recorded unconditionally when not
 * discarded. The detection threshold (4 min) is only used for retry decisions,
 * not for whether to update the offset.
 *
 * @internal
 * @param clockTime The string value of the Date response header.
 * @param currentSystemClockOffset The current system clock offset in milliseconds.
 * @param timeRequestSent The raw client time (ms) at which the request was sent.
 * @param ageHeader The value of the Age response header, if present.
 */
export const getUpdatedSystemClockOffset = (
  clockTime: string,
  currentSystemClockOffset: number,
  timeRequestSent?: number,
  ageHeader?: string
): number => {
  // Discard if response was served from a cache.
  if (ageHeader !== undefined) {
    return currentSystemClockOffset;
  }

  const serverTime = Date.parse(clockTime);
  const timeResponseReceived = Date.now();

  // Discard if the request took too long to trust the measurement.
  if (timeRequestSent !== undefined && timeResponseReceived - timeRequestSent > 900_000) {
    return currentSystemClockOffset;
  }

  return serverTime - timeResponseReceived;
};
