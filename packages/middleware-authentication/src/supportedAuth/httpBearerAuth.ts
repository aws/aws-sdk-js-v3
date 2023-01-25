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
  async identity(identityProperties?: Record<string, any>): Promise<TokenIdentity> {
    if (identityProperties.token) {
      return await normalizeIdentityProvider(identityProperties.token)(identityProperties);
    }
    // if input already has identity
    if (identityProperties.identity) {
      return await normalizeIdentityProvider(identityProperties.identity)(identityProperties);
    }
    // default token provider
    if (identityProperties.tokenDefaultProvider) {
      return await identityProperties.tokenDefaultProvider(identityProperties)(identityProperties);
    }
    throw new Error("Token is missing");
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
