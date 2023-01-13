import { SignatureV4 } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  HashConstructor,
  MemoizedProvider,
  Provider,
  RequestSigner,
} from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

export interface GetSigV4SignerOptions {
  region: string | Provider<string>;
  service: string;
  sha256: HashConstructor;
  uriEscapePath: boolean;
}

export const getSigV4Signer = (
  credentials: MemoizedProvider<AwsCredentialIdentity>,
  options: GetSigV4SignerOptions
): ((authScheme?: AuthScheme) => Promise<RequestSigner>) =>
  normalizeProvider(
    new SignatureV4({
      credentials,
      ...options,
    })
  );
