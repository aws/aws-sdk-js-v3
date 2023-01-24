import { Identity, IdentityProvider } from "@aws-sdk/types";

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
  const identity: IdentityProvider<Identity> | undefined =
    input.identity !== undefined
      ? // Use overriding resolved identity
        normalizeIdentityProvider(input.identity)
      : // Will resolve to anonymous identity during identity resolution
        undefined;

  const authSchemes = input.authSchemes;

  const authSchemeProvider = input.authSchemeProvider;

  return {
    ...input,
    identity,
    authSchemes,
    authSchemeProvider,
  };
};
