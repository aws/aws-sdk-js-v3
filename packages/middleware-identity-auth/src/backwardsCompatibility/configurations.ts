import { SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  ChecksumConstructor,
  Credentials,
  Provider,
  RegionInfoProvider,
  RequestSigner,
  Token,
  TokenProvider,
} from "@aws-sdk/types";

export interface PopulateSigningInputConfig
  extends Partial<IdentityInputConfig>,
    Partial<AuthInputConfig>,
    Partial<AwsAuthInputConfig>,
    Partial<SigV4AuthInputConfig>,
    Partial<AuthPreviouslyResolved>,
    Partial<AwsAuthPreviouslyResolved> {}

export interface IdentityInputConfig {
  /**
   * @deprecated Use {@link identity}
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * @deprecated Use {@link identity}
   */
  token?: Token | TokenProvider;
}

export interface AuthInputConfig extends Pick<IdentityInputConfig, "credentials"> {
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

export interface SigV4AuthInputConfig extends AuthInputConfig {}

export interface AuthPreviouslyResolved {
  region: string | Provider<string>;
  sha256: ChecksumConstructor;
}

export interface AwsAuthPreviouslyResolved extends AuthPreviouslyResolved {
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  defaultSigningName?: string;
  serviceId: string;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}
