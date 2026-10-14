/**
 * JS-7140 default socket timeout: the opt-in gate and the helper that layers a
 * service default timeout under request handler input in generated clients.
 *
 * The gate reads the literal member expression
 * `process.env.AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026`, guarded by try/catch rather
 * than a `typeof process` check. Browser bundlers (esbuild `define`, webpack
 * `DefinePlugin`/`EnvironmentPlugin`, Vite `define`) replace that exact expression at
 * build time, which is how a browser application opts in. Without substitution, the
 * browser throws a ReferenceError, caught here as off.
 */

let memoizedEnabled: boolean | undefined;

/**
 * Returns true when AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026 is "true". Read once and memoized.
 *
 * @internal
 */
export const isDefaultSocketTimeoutEnabled = (): boolean => {
  if (memoizedEnabled === undefined) {
    memoizedEnabled = readDefaultSocketTimeoutEnv();
  }
  return memoizedEnabled;
};

/**
 * The unmemoized env read. Self-contained so tests can run it without `process`.
 *
 * @internal
 */
export const readDefaultSocketTimeoutEnv = (): boolean => {
  try {
    return process.env.AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026 === "true";
  } catch {
    return false;
  }
};

/**
 * Resets the memoized gate value. Test-only.
 *
 * @internal
 */
export const resetDefaultSocketTimeoutGateForTest = (): void => {
  memoizedEnabled = undefined;
};

/**
 * Layers a service default timeout under request handler input when the gate is on.
 * Caller keys always win, so an explicit caller timeout takes precedence. Plain
 * options and option providers receive the default; handler instances are returned
 * unchanged.
 *
 * @param requestHandler - the request handler input: caller-supplied, or the default provider.
 * @param timeoutMs - the service default, in milliseconds.
 * @param option - the handler option to set: `defaultSocketTimeout` for NodeHttpHandler
 * and NodeHttp2Handler, which apply it on their own idle timer when the caller has not
 * set one; `socketTimeout` for FetchHttpHandler.
 *
 * @internal
 */
export const withDefaultSocketTimeout = <T>(
  requestHandler: T,
  timeoutMs: number,
  option: "socketTimeout" | "defaultSocketTimeout" = "socketTimeout"
): T => {
  if (!isDefaultSocketTimeoutEnabled()) {
    return requestHandler;
  }
  // A handler instance (anything with handle(), as RequestHandler.create checks first),
  // including a callable one, is returned unchanged.
  if (typeof (requestHandler as { handle?: unknown } | null)?.handle === "function") {
    return requestHandler;
  }
  if (typeof requestHandler === "function") {
    const provider = requestHandler as unknown as () => Promise<object | void>;
    return (async () => withDefault((await provider()) ?? {}, option, timeoutMs)) as unknown as T;
  }
  if (typeof requestHandler === "object" && requestHandler !== null) {
    return withDefault(requestHandler, option, timeoutMs) as T;
  }
  return requestHandler;
};

/**
 * Copies the options and fills the option when the caller left it unset. A key that is
 * present but undefined counts as unset, so it does not disable the default.
 */
const withDefault = (options: object, option: string, timeoutMs: number): object => {
  const merged: Record<string, unknown> = { ...options };
  if (merged[option] === undefined) {
    merged[option] = timeoutMs;
  }
  return merged;
};
