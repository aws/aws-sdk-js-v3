import { Identity, IdentityProvider } from "@aws-sdk/types";

import { AuthenticationInputConfig, AuthenticationResolvedConfig } from "./configurations";
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
export const resolveAuthenticationConfig = <T>(
  input: T & AuthenticationInputConfig
): T & AuthenticationResolvedConfig => {
  const identity: IdentityProvider<Identity> | undefined =
    input.identity !== undefined
      ? // Use overriding resolved identity
        normalizeIdentityProvider(input.identity)
      : // Will resolve to anonymous identity during identity resolution
        undefined;

  const authSchemes = input.authSchemes;

  const authOptionsProvider = input.authOptionsProvider;

  const identityProperties = input.identityProperties || {};

  const signingProperties = input.signingProperties || {};

  return {
    ...input,
    identity,
    authSchemes,
    authOptionsProvider,
    identityProperties,
    signingProperties,
  };
};
