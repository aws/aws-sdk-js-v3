import { SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  ChecksumConstructor,
  HashConstructor,
  IdentityProvider,
  Logger,
  MemoizedProvider,
  Provider,
  RegionInfoProvider,
  RequestSigner,
} from "@aws-sdk/types";

// AwsAuth v/s SigV4Auth
// AwsAuth: specific to SigV4 auth for AWS services
// SigV4Auth: SigV4 auth for non-AWS services

export interface AuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | IdentityProvider<AwsCredentialIdentity>;

  /**
   * The signer to use when signing requests.
   */
  signer?: RequestSigner | ((authScheme?: AuthScheme) => Promise<RequestSigner>);

  /**
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * An offset value in milliseconds to apply to all signing times.
   */
  systemClockOffset?: number;
}

// AwsAuth: specific to SigV4 auth for AWS services
export interface AwsAuthInputConfig extends AuthInputConfig {
  /**
   * The region where you want to sign your request against. This
   * can be different to the region in the endpoint.
   */
  signingRegion?: string;

  /**
   * The injectable SigV4-compatible signer class constructor. If not supplied,
   * regular SignatureV4 constructor will be used.
   * @private
   */
  signerConstructor?: new (options: SignatureV4Init & SignatureV4CryptoInit) => RequestSigner;
}

// SigV4Auth: SigV4 auth for non-AWS services
export interface SigV4AuthInputConfig extends AuthInputConfig { }

export interface AuthPreviouslyResolved {
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  sha256: HashConstructor;
}

export interface AwsAuthPreviouslyResolved extends AuthPreviouslyResolved {
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  defaultSigningName?: string;
  serviceId: string;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

export interface SigV4AuthPreviouslyResolved extends AuthPreviouslyResolved {
  signingName: string;
  logger?: Logger;
}

export interface AuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.credentials}
   * This provider MAY memoize the loaded credentials for certain period.
   * See {@link MemoizedProvider} for more information.
   */
  credentials: MemoizedProvider<AwsCredentialIdentity>;

  /**
   * Resolved value for input config {@link AuthInputConfig.signer}
   */
  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;

  /**
   * Resolved value for input config {@link AwsAuthInputConfig.signingEscapePath}
   */
  signingEscapePath: boolean;

  /**
   * Resolved value for input config {@link AwsAuthInputConfig.systemClockOffset}
   */
  systemClockOffset: number;
}

export interface AwsAuthResolvedConfig extends AuthResolvedConfig { }

export interface SigV4AuthResolvedConfig extends AuthResolvedConfig { }
