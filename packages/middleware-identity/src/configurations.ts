import { SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  ChecksumConstructor,
  Credentials,
  HttpRequest,
  Identity,
  IdentityProvider,
  Provider,
  RegionInfoProvider,
  RequestSigner,
  RequestSigningArguments,
  Token,
  TokenProvider,
} from "@aws-sdk/types";

export const CREDENTIAL_EXPIRE_WINDOW = 300_000;

export interface AuthScheme {
  schemeId: string;
  identity: (identityResolverConfiguration: Record<string, any>) => IdentityProvider<Identity>;
  signer: Provider<HttpSigner<Identity>>;
  /**
   * @example "sigv4a" or "sigv4"
   * @deprecated
   */
  name?: "sigv4" | "sigv4a" | string;
  /**
   * @example "s3"
   * @deprecated
   */
  signingName?: string;
  /**
   * @example "us-east-1"
   * @deprecated
   */
  signingRegion?: string;
  /**
   * @example ["*"]
   * @exammple ["us-west-2", "us-east-1"]
   * @deprecated
   */
  signingRegionSet?: string[];
  /**
   * @deprecated this field was renamed to signingRegion.
   */
  signingScope?: never;
  /**
   * @deprecated
   */
  properties?: Record<string, unknown>;
}

export interface HttpSigner<IdentityT extends Identity> {
  sign(
    requestToSign: HttpRequest,
    identity: IdentityT,
    signingProperties?: Record<string, any> & RequestSigningArguments
  ): Promise<HttpRequest>;
}

export interface HttpAuthOption {
  schemeId: string;
  identityProperties: Record<string, any>;
  signerProperties: Record<string, any>;
}

interface AuthSchemeProvider<AuthParametersType> {
  (authParameters: AuthParametersType): Array<HttpAuthOption>;
}

interface ClientAuthParametersFromCodegen {}

export interface IdentityResolvedConfig {
  identity: IdentityProvider<Identity>;
  authSchemeProvider: AuthSchemeProvider<ClientAuthParametersFromCodegen>;
  authSchemes: AuthScheme[];
  identityProperties?: Record<string, any>;
  signingProperties?: Record<string, any>;
}

export interface IdentityInputConfig {
  /**
   * @deprecated Use {@link identity}
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * @deprecated Use {@link identity}
   */
  token?: Token | TokenProvider;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: Identity | IdentityProvider<Identity>;
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

export interface IdentityPreviouslyResolved {
  /**
   * Previously resolved Auth Scheme
   */
  authScheme?: AuthScheme;
  authSchemes?: AuthScheme[];
  authSchemeProvider?: AuthSchemeProvider<ClientAuthParametersFromCodegen>;
}

export interface AuthPreviouslyResolved extends IdentityPreviouslyResolved {
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
