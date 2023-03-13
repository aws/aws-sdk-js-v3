import { Identity, IdentityProvider } from "@aws-sdk/types";

import { AuthenticationInputConfig, AuthenticationResolvedConfig } from "./configurations";
import { normalizeIdentityProvider } from "./util/provider/normalizeIdentityProvider";

/**
 * TODO(identityandauth)
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
