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
  const identity: IdentityProvider<Identity> =
    // Use overriding resolved identity or anonymous identity
    normalizeIdentityProvider(input.identity || ({} as AnonymousIdentity));

  const authSchemes = input.authScheme
    ? // Use overriding resolved AuthScheme
      [input.authScheme]
    : // Choose from multiple AuthSchemes
      input.authSchemes || [];

  const authSchemeProvider = input.authSchemeProvider
    ? // Use overriding resolved HttpAuthOptions providers
      input.authSchemeProvider
    : // Empty HttpAuthOptions
      () => [];

  return {
    ...input,
    identity,
    authSchemes,
    authSchemeProvider,
  };
};
