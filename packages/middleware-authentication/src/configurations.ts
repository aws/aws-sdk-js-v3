import { AuthOptionsProvider, AuthScheme, Identity, IdentityProvider } from "@aws-sdk/types";

/**
 * TODO(identityandauth)
 */
export interface AuthenticationInputConfig extends Partial<Omit<AuthenticationResolvedConfig, "identity">> {
  /**
   * A representation of who is using the SDK client.
   */
  identity?: Identity | IdentityProvider<Identity>;
}

/**
 * TODO(identityandauth)
 */
export interface AuthenticationResolvedConfig {
  identity?: IdentityProvider<Identity>;
  authOptionsProvider?: AuthOptionsProvider;
  authSchemes?: AuthScheme[];
  identityProperties: Record<string, any>;
  signingProperties: Record<string, any>;
}
