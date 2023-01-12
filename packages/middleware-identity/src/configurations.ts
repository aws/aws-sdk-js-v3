import { AuthScheme, Credentials, Identity, IdentityProvider, Provider, Token, TokenProvider } from "@aws-sdk/types";

// 5 minutes buffer time the refresh the credential before it really expires
export const CREDENTIAL_EXPIRE_WINDOW = 300_000;

export interface IdentityInputConfig {
  // Signer will be discussed in later section.

  /**
   * @deprecated Use {@link identity}
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * @deprecated Use {@link identity}
   */
  token?: Token | TokenProvider;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: Identity | IdentityProvider<Identity>;

  /**
   * Default identity provider given {@link identity} is not present
   */
  defaultIdentityProvider?: (input: any) => IdentityProvider<Identity>;
}

export interface IdentityPreviouslyResolved {
  /**
   * Previously resolved Auth Scheme
   */
  authScheme?: AuthScheme;
}

export interface IdentityResolvedConfig {
  /**
   * Resolved value for input config {@link IdentityInputConfig.identity}
   */
  identity: IdentityProvider<Identity>;
}
