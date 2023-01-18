import { SignatureV4Init, SignatureV4CryptoInit } from "@aws-sdk/signature-v4";
import { AuthScheme, AwsCredentialIdentity, Credentials, HashConstructor, Identity, IdentityProvider, Logger, MemoizedProvider, Provider, RegionInfoProvider, RequestSigner, Token, TokenIdentity, TokenProvider } from "@aws-sdk/types";

// 5 minutes buffer time the refresh the credential before it really expires
export const CREDENTIAL_EXPIRE_WINDOW = 300_000;

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

  /**
   * @deprecated
   */
  sigV4EnumDiscriminator?: DEPRECATED_SIGV4_ENUM_DISCIMINATOR;
}

export interface AuthInputConfig extends Pick<IdentityInputConfig, "credentials" | "sigV4EnumDiscriminator"> {
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

export interface SigV4AuthInputConfig extends AuthInputConfig { }

/**
 * @internal
 * @deprecated
 */
type DEPRECATED_SIGV4_ENUM_DISCIMINATOR = "sigv4" | "sigv4a" | string;

export interface IdentityPreviouslyResolved {
  /**
   * Previously resolved Auth Scheme
   */
  authScheme?: AuthScheme;

  /**
   * Default identity provider given {@link identity} is not present
   */
  defaultIdentityProvider?: (input: any) => IdentityProvider<Identity>;

  /**
   * @deprecated
   */
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
}

export interface AuthPreviouslyResolved extends IdentityPreviouslyResolved {
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

export interface IdentityResolvedConfig {
  identity: IdentityProvider<Identity>;
  /**
   * @deprecated
   */
  credentials: IdentityProvider<AwsCredentialIdentity>;
  /**
   * @deprecated
   */
  token: IdentityProvider<TokenIdentity>;
}

export interface TokenResolvedConfig extends Pick<IdentityResolvedConfig, "token"> { }

export interface AuthResolvedConfig extends Pick<IdentityResolvedConfig, "identity" | "credentials"> {
  credentials: MemoizedProvider<AwsCredentialIdentity>;

  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;

  signingEscapePath: boolean;

  systemClockOffset: number;
}

export interface AwsAuthResolvedConfig extends AuthResolvedConfig { }

export interface SigV4AuthResolvedConfig extends AuthResolvedConfig { }
