import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import { AwsCredentialIdentity, HttpRequest, RequestSigningArguments } from "@aws-sdk/types";

import { HttpSigner } from "../../configurations";

type SigV4SignerOptions = Record<string, any> & RequestSigningArguments & SignatureV4Init & SignatureV4CryptoInit;

export class SigV4Signer implements HttpSigner<AwsCredentialIdentity> {
  async sign<T>(
    requestToSign: HttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties?: T & SigV4SignerOptions
  ): Promise<HttpRequest> {
    return new SignatureV4({
      credentials: identity,
      ...signingProperties,
    }).sign(requestToSign, signingProperties);
  }
}
