import { Identity, IdentityProvider } from "@aws-sdk/types";

import { AuthScheme } from "../../configurations";
import { normalizeIdentityProvider } from "../provider/normalizeIdentityProvider";
import { SigV4ASigner } from "../signer/SigV4ASigner";

export const SigV4AuthScheme: AuthScheme = {
  schemeId: "aws.auth#sigv4a",
  identity(identityResolverConfiguration: Record<string, any>): IdentityProvider<Identity> {
    // if input has credentials
    if (identityResolverConfiguration.credentials) {
      return normalizeIdentityProvider(identityResolverConfiguration.credentials);
    }
    // if input already has identity
    if (identityResolverConfiguration.identity) {
      return normalizeIdentityProvider(identityResolverConfiguration.identity);
    }
    // default credential provider
    if (identityResolverConfiguration.credentialDefaultProvider) {
      return identityResolverConfiguration.credentialDefaultProvider(identityResolverConfiguration);
    }
    // return anonymous identity
    return normalizeIdentityProvider({});
  },
  signer: async () => new SigV4ASigner(),
};
