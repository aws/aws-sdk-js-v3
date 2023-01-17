import { AnonymousIdentity, Identity, IdentityProvider } from "@aws-sdk/types";

import { IdentityInputConfig, IdentityPreviouslyResolved, IdentityResolvedConfig } from "./configurations";
import { normalizeIdentityProvider } from "./util/provider/normalizeIdentityProvider";

/**
 * Resolves identity in the following precedence:
 * 
 * - identity: user-provided identity
 * - token: backwards compatible token identity
 * - credentials: backwards compatible credentials identity
 * - authScheme: populated from AuthSchemeResolver from config
 * 
 * @param input configuration object
 * @returns input with an identity provider
 */
export const resolveIdentityConfig = <T>(
  input: T & IdentityInputConfig & IdentityPreviouslyResolved
): T & IdentityResolvedConfig => {
  let identity: IdentityProvider<Identity> | undefined = undefined;

  // Identity
  if (input.identity) {
    identity = normalizeIdentityProvider(input.identity);
  }
  // Token
  else if (input.token) {
    identity = normalizeIdentityProvider(input.token);
  }
  // Credentials
  else if (input.credentials) {
    identity = normalizeIdentityProvider(input.credentials);
  }
  // TODO(identityandauth): resolve identity from {@link IdentityPreviouslyResolved.AuthScheme}
  // else if (input.authScheme) {
  //   // Get Identity Resolver from AuthScheme
  // }

  // Default Identity
  if (identity === undefined && input.defaultIdentityProvider) {
    identity = input.defaultIdentityProvider(input as any);
  } else {
    throw new Error("identity is missing");
  }

  return {
    ...input,
    identity,
  };
};
