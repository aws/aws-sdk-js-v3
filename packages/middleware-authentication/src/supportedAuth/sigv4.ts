import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HttpAuthOption,
  HttpRequest,
  HttpSigner,
  Identity,
  IdentityProvider,
  RequestSigningArguments,
} from "@aws-sdk/types";

import { normalizeIdentityProvider } from "../util/provider/normalizeIdentityProvider";

/**
 * TODO(identityandauth)
 */
export const SigV4AuthSchemeId = "aws.auth#sigv4";

export const SigV4AuthScheme: AuthScheme = {
  schemeId: SigV4AuthSchemeId,
  async identity(identityProperties: Record<string, any>): Promise<AwsCredentialIdentity> {
    // if input has credentials
    if (identityProperties.credentials) {
      return await normalizeIdentityProvider(identityProperties.credentials)(identityProperties);
    }
    // if input already has identity
    if (identityProperties.identity) {
      return await normalizeIdentityProvider(identityProperties.identity)(identityProperties);
    }
    // default credential provider
    if (identityProperties.credentialDefaultProvider) {
      return await identityProperties.credentialDefaultProvider(identityProperties)(identityProperties);
    }
    throw new Error("Credential is missing");
  },
  signer: async () => new SigV4Signer(),
};

export const SigV4AuthOption: HttpAuthOption = {
  schemeId: SigV4AuthSchemeId,
  identityProperties: {},
  signerProperties: {},
};

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
