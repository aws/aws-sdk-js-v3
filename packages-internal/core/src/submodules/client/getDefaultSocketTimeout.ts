const isDefaultSocketTimeoutEnabled = (): boolean =>
  typeof process === "object" && process?.env?.AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026 === "true";

/**
 * When AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026 is "true", returns the service's
 * `defaultSocketTimeout` for the client to offer its request handler. Returns undefined
 * for a caller's handler instance, which may be shared with other clients.
 *
 * @param requestHandler - the client's requestHandler input.
 * @param timeoutMs - the service default socket timeout, in milliseconds.
 *
 * @internal
 */
export const getDefaultSocketTimeout = (requestHandler: unknown, timeoutMs: number): number | undefined => {
  if (!isDefaultSocketTimeoutEnabled()) {
    return undefined;
  }
  if (typeof (requestHandler as { handle?: unknown } | null)?.handle === "function") {
    return undefined;
  }
  return timeoutMs;
};
