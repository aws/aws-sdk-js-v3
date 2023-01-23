import { Identity, IdentityProvider } from "@aws-sdk/types";

import { AuthScheme } from "../../configurations";
import { normalizeIdentityProvider } from "../provider/normalizeIdentityProvider";
import { HttpBearerAuthSigner } from "../signer/HttpBearerAuthSigner";

export const HttpBearerAuthScheme: AuthScheme = {
  schemeId: "smithy.api#httpBearerAuth",
  identity(identityResolverConfiguration: Record<string, any>): IdentityProvider<Identity> {
    // if input has token
    if (identityResolverConfiguration.token) {
      return normalizeIdentityProvider(identityResolverConfiguration.token);
    }
    // if input already has identity
    if (identityResolverConfiguration.identity) {
      return normalizeIdentityProvider(identityResolverConfiguration.identity);
    }
    // default token provider
    if (identityResolverConfiguration.tokenDefaultProvider) {
      return identityResolverConfiguration.tokenDefaultProvider(identityResolverConfiguration);
    }
    // return anonymous identity
    return normalizeIdentityProvider({});
  },
  signer: async () => new HttpBearerAuthSigner(),
};
