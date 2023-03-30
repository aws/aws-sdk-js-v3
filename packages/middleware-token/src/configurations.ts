import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

/**
 * @internal
 */
export interface TokenInputConfig {
  /**
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;
}

/**
 * @internal
 */
export interface TokenResolvedConfig {
  /**
   * Resolved value for input config {@link TokenInputConfig.token}
   */
  token: TokenIdentityProvider;
}
