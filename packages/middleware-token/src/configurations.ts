import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

export interface TokenInputConfig {
  /**
   * @deprecated
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;

  /**
   * The token identity used to authenticate requests.
   */
  identity?: TokenIdentity | TokenIdentityProvider;
}

export interface TokenResolvedConfig {
  /**
   * Resolved value for input config {@link TokenInputConfig.identity}
   */
  identity: TokenIdentityProvider;
}
