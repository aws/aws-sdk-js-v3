import {
  RequestSigner,
  Credentials,
  Provider,
  HashConstructor
} from "@aws-sdk/types";
import { SignatureV4 } from "@aws-sdk/signature-v4";

export interface AwsAuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * The signer to use when signing requests.
   */
  signer?: RequestSigner;

  /**
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * An offset value in milliseconds to apply to all signing times.
   */
  systemClockOffset?: number;
}
interface PreviouslyResolved {
  credentialDefaultProvider: (input: any) => Provider<Credentials>;
  region: string | Provider<string>;
  signingName: string;
  sha256: HashConstructor;
}
export interface AwsAuthResolvedConfig {
  credentials: Provider<Credentials>;
  signer: RequestSigner;
  signingEscapePath: boolean;
  systemClockOffset: number;
}
export function resolveAwsAuthConfig<T>(
  input: T & AwsAuthInputConfig & PreviouslyResolved
): T & AwsAuthResolvedConfig {
  let credentials =
    input.credentials || input.credentialDefaultProvider(input as any);
  const normalizedCreds = normalizeProvider(credentials);
  const signingEscapePath = input.signingEscapePath || false;
  return {
    ...input,
    signingEscapePath,
    credentials: normalizedCreds,
    signer: new SignatureV4({
      credentials: normalizedCreds,
      region: input.region,
      service: input.signingName,
      sha256: input.sha256,
      uriEscapePath: signingEscapePath
    })
  };
}

function normalizeProvider<T>(input: T | Provider<T>): Provider<T> {
  if (typeof input === "object") {
    const promisified = Promise.resolve(input);
    return () => promisified;
  }
  return input as Provider<T>;
}
