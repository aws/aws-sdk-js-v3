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
