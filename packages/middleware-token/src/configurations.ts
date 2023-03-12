import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

/**
 * @internal
 */
export interface TokenInputConfig {
  /**
   * @deprecated Use {@link identity}
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: TokenIdentity | TokenIdentityProvider;
}

/**
 * @internal
 */
export interface TokenResolvedConfig {
  /**
   * Resolved value for input config {@link TokenInputConfig.identity}
   */
  identity: TokenIdentityProvider;

  /**
   * @deprecated Use {@link identity}
   */
  token: TokenIdentityProvider;
}
