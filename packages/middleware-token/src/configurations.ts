import { Token, TokenProvider } from "@aws-sdk/types";

export interface TokenInputConfig {
  /**
   * The token used to authenticate requests.
   */
  token?: Token | TokenProvider;
}

export interface TokenPreviouslyResolved {
  tokenDefaultProvider: (input: any) => TokenProvider;
}

export interface TokenResolvedConfig {
  /**
   * Resolved value for input config {@link TokenInputConfig.token}
   */
  token: TokenProvider;
}
