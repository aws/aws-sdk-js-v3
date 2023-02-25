import { Provider, TokenIdentity, TokenIdentityProvider } from "@aws-sdk/types";

export interface ApiKeyInputConfig {
  /**
   * @deprecated
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  apiKey?: string | Provider<string>;

  /**
   * Token identity with API key to use when making requests.
   */
  identity?: TokenIdentity | TokenIdentityProvider;
}

export interface ApiKeyPreviouslyResolved {}

export interface ApiKeyResolvedConfig {
  /**
   * The API key to use when making requests.
   *
   * This is optional because some operations may not require an API key.
   */
  identity?: TokenIdentityProvider;
}
