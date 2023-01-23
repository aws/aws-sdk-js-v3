import { HttpRequest, RequestSigningArguments, TokenIdentity } from "@aws-sdk/types";

import { HttpSigner } from "../../configurations";

type HttpBearerAuthSignerOptions = Record<string, any> & RequestSigningArguments;

export class HttpBearerAuthSigner implements HttpSigner<TokenIdentity> {
  async sign<T>(
    requestToSign: HttpRequest,
    identity: TokenIdentity,
    signingProperties?: T & HttpBearerAuthSignerOptions
  ): Promise<HttpRequest> {
    requestToSign.headers["Authorization"] = `Bearer ${identity.token}`;
    return requestToSign;
  }
}
