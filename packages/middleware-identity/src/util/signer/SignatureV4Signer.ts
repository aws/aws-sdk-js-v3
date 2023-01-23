import { SignatureV4Init, SignatureV4CryptoInit, SignatureV4 } from "@aws-sdk/signature-v4";
import { RequestSigningArguments, AwsCredentialIdentity, HttpRequest } from "@aws-sdk/types";
import { HttpSigner } from "../../configurations.2";

type SignatureV4SignerOptions =
  Record<string, any> &
  RequestSigningArguments &
  SignatureV4Init &
  SignatureV4CryptoInit;

export class SignatureV4Signer implements HttpSigner<AwsCredentialIdentity> {
  async sign(
    requestToSign: HttpRequest,
    identity: AwsCredentialIdentity,
    signingProperties?: SignatureV4SignerOptions
  ): Promise<HttpRequest> {
    return new SignatureV4({
      credentials: identity,
      ...signingProperties,
    }).sign(requestToSign, signingProperties);
  }
}
