import { Provider, TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";
import { normalizeIdentityProvider } from "@aws-sdk/util-auth";
import { normalizeProvider } from "@aws-sdk/util-middleware";

/**
 * @internal
 */
export interface ApiKeyInputConfig {
  /**
   * @deprecated Use {@link identity}
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: string | Provider<string>;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: TokenIdentity | TokenIdentityProvider;
}

/**
 * @internal
 */
export interface ApiKeyPreviouslyResolved { }

/**
 * @internal
 */
export interface ApiKeyResolvedConfig {
  /**
   * Resolved value for input config {@link ApiKeyInputConfig.identity}
   */
  identity: TokenIdentityProvider | undefined;

  /**
   * @deprecated Use {@link identity}
   */
  apiKey: Provider<string> | undefined;
}

// We have to provide a resolve function when we have config, even if it doesn't
// actually do anything to the input value. "If any of inputConfig, resolvedConfig,
// or resolveFunction are set, then all of inputConfig, resolvedConfig, and
// resolveFunction must be set."
/**
 * @internal
 */
export const resolveApiKeyConfig = <T>(
  input: T & ApiKeyPreviouslyResolved & ApiKeyInputConfig
): T & ApiKeyResolvedConfig => {
  let identity: TokenIdentityProvider | undefined = undefined;
  // Load from apiKey for backwards compatibility
  if (input.apiKey !== undefined) {
    if (typeof input.apiKey === "function") {
      identity = normalizeIdentityProvider(async () => ({
        token: await (input.apiKey as Provider<string>)(),
      } as TokenIdentity));
    } else {
      identity = normalizeIdentityProvider({
        token: input.apiKey as string,
      } as TokenIdentity);
    }
  }
  // Load from identity if available and if apiKey is not loaded
  if (identity === undefined && input.identity !== undefined) {
    // Will be checked in middleware to see if identity resolves to TokenIdentity
    identity = normalizeIdentityProvider(input.identity) as TokenIdentityProvider;
  }
  return {
    ...input,
    identity,
    apiKey: identity === undefined ? undefined : async () => (await identity!()).token,
  };
};
