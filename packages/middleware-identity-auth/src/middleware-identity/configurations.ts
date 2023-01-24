import { AuthScheme, AuthSchemeProvider, Identity, IdentityProvider } from "@aws-sdk/types";

export interface IdentityResolvedConfig {
  identity: IdentityProvider<Identity> | undefined;
  authSchemeProvider: AuthSchemeProvider;
  authSchemes: AuthScheme[];
  identityProperties?: Record<string, any>;
  signingProperties?: Record<string, any>;
}

export interface IdentityInputConfig {
  /**
   * A representation of who is using the SDK client.
   */
  identity?: Identity | IdentityProvider<Identity>;
}

export interface IdentityPreviouslyResolved {
  authSchemes: AuthScheme[];
  authSchemeProvider: AuthSchemeProvider;
}
