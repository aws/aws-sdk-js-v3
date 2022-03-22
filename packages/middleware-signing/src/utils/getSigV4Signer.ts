import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Credentials, HashConstructor, MemoizedProvider, Provider } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

interface GetSigV4SignerOptions {
  region: string | Provider<string>;
  service: string;
  sha256: HashConstructor;
  uriEscapePath: boolean;
}

export const getSigV4Signer = (credentials: MemoizedProvider<Credentials>, options: GetSigV4SignerOptions) =>
  normalizeProvider(
    new SignatureV4({
      credentials,
      ...options,
    })
  );
