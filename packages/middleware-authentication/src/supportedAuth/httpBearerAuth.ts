import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  AuthScheme,
  HttpAuthOption,
  HttpSigner,
  Identity,
  IdentityProvider,
  RequestSigningArguments,
  TokenIdentity,
} from "@aws-sdk/types";

import { normalizeIdentityProvider } from "../util/provider/normalizeIdentityProvider";
import { tokenDefaultProvider } from "../util/provider/tokenDefaultProvider";

/**
 * TODO(identityandauth)
 */
export const HttpBearerAuthSchemeId = "smithy.api#httpBearerAuth";

export const HttpBearerAuthScheme: AuthScheme = {
  schemeId: HttpBearerAuthSchemeId,
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

export const HttpBearerAuthOption: HttpAuthOption = {
  schemeId: HttpBearerAuthSchemeId,
  identityProperties: {
    tokenDefaultProvider,
  },
  signerProperties: {},
};

type HttpBearerAuthSignerOptions = Record<string, any> & RequestSigningArguments;

export class HttpBearerAuthSigner implements HttpSigner<TokenIdentity> {
  async sign<T>(
    requestToSign: HttpRequest,
    identity: TokenIdentity,
    signingProperties?: T & HttpBearerAuthSignerOptions
  ): Promise<HttpRequest> {
    const clonedRequest = requestToSign.clone();
    clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
    return clonedRequest;
  }
}
