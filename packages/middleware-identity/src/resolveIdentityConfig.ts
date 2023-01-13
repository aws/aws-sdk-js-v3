import { AnonymousIdentity, AwsCredentialIdentity, Identity, IdentityProvider } from "@aws-sdk/types";

import { IdentityInputConfig, IdentityPreviouslyResolved, IdentityResolvedConfig } from "./configurations";
import { normalizeIdentityProvider } from "./util/provider/normalizeIdentityProvider";

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
  else if (input.authScheme) {
    // Get Identity Resolver from AuthScheme
  }

  // Default Identity
  if (identity === undefined) {
    identity = input.defaultIdentityProvider
      ? input.defaultIdentityProvider(input as any)
      : normalizeIdentityProvider({} as AnonymousIdentity);
  }

  return {
    ...input,
    identity,
  };
};
