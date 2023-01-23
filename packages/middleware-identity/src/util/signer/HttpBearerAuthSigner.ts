import { RequestSigningArguments, TokenIdentity, HttpRequest } from "@aws-sdk/types";
import { HttpSigner } from "../../configurations.2";

type HttpBearerAuthSignerOptions =
  Record<string, any> &
  RequestSigningArguments;

export class HttpBearerAuthSigner implements HttpSigner<TokenIdentity> {
  async sign(
    requestToSign: HttpRequest,
    identity: TokenIdentity,
    signingProperties?: HttpBearerAuthSignerOptions
  ): Promise<HttpRequest> {
    requestToSign.headers["Authorization"] = `Bearer ${identity.token}`;
    return requestToSign;
  }
}
