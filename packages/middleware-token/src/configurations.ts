import { TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

export interface TokenInputConfig {
  /**
   * The token used to authenticate requests.
   */
  token?: TokenIdentity | TokenIdentityProvider;
}

export interface TokenPreviouslyResolved {
  tokenDefaultProvider: (input: any) => TokenIdentityProvider;
}

export interface TokenResolvedConfig {
  /**
   * Resolved value for input config {@link TokenInputConfig.token}
   */
  token: TokenIdentityProvider;
}
