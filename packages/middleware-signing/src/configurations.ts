import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@aws-sdk/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  ChecksumConstructor,
  HashConstructor,
  Logger,
  MemoizedProvider,
  Provider,
  RegionInfo,
  RegionInfoProvider,
  RequestSigner,
} from "@aws-sdk/types";
import { normalizeIdentityProvider } from "@aws-sdk/util-auth";
import { normalizeProvider } from "@aws-sdk/util-middleware";

// AwsAuth v/s SigV4Auth
// AwsAuth: specific to SigV4 auth for AWS services
// SigV4Auth: SigV4 auth for non-AWS services

/**
 * @internal
 */
export interface AwsAuthInputConfig {
  /**
   * @deprecated Use {@link identity}
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: AwsCredentialIdentity | AwsCredentialIdentityProvider;

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

/**
 * @internal
 */
export interface SigV4AuthInputConfig {
  /**
   * @deprecated Use {@link identity}
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;

  /**
   * A representation of who is using the SDK client.
   */
  identity?: AwsCredentialIdentity | AwsCredentialIdentityProvider;

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

/**
 * @internal
 */
interface PreviouslyResolved {
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  regionInfoProvider?: RegionInfoProvider;
  signingName?: string;
  defaultSigningName?: string;
  serviceId: string;
  sha256: ChecksumConstructor | HashConstructor;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

/**
 * @internal
 */
interface SigV4PreviouslyResolved {
  credentialDefaultProvider: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  signingName: string;
  sha256: ChecksumConstructor | HashConstructor;
  logger?: Logger;
}

/**
 * @internal
 */
export interface AwsAuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.identity}
   * This provider MAY memoize the loaded credentials for certain period.
   * See {@link MemoizedProvider} for more information.
   */
  identity: AwsCredentialIdentityProvider;
  /**
   * @deprecated Use {@link identity}
   */
  credentials: AwsCredentialIdentityProvider;
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.signer}
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

/**
 * @internal
 */
export interface SigV4AuthResolvedConfig extends AwsAuthResolvedConfig { }

/**
 * @internal
 */
export const resolveAwsAuthConfig = <T>(
  input: T & AwsAuthInputConfig & PreviouslyResolved
): T & AwsAuthResolvedConfig => {
  let identity: AwsCredentialIdentityProvider | undefined = undefined;
  // Load from credentials for backwards compatibility
  if (input.credentials !== undefined) {
    identity = normalizeIdentityProvider(input.credentials);
  }
  // Load from identity if available and if credentials is not loaded
  if (identity === undefined && input.identity !== undefined) {
    // Will be checked in middleware to see if identity resolves to AwsCredentialIdentity
    identity = normalizeIdentityProvider(input.identity);
  }
  // Use default credential provider if credentials is not loaded
  if (identity === undefined) {
    identity = input.credentialDefaultProvider(input as any);
  }
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
  if (input.signer) {
    // if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else if (input.regionInfoProvider) {
    // This branch is for endpoints V1.
    // construct a provider inferring signing from region.
    signer = () =>
      normalizeProvider(input.region)()
        .then(
          async (region) =>
            [
              (await input.regionInfoProvider!(region, {
                useFipsEndpoint: await input.useFipsEndpoint(),
                useDualstackEndpoint: await input.useDualstackEndpoint(),
              })) || {},
              region,
            ] as [RegionInfo, string]
        )
        .then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          // update client's singing region and signing service config if they are resolved.
          // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
          input.signingRegion = input.signingRegion || signingRegion || region;
          // signing name resolving order:
          // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
          input.signingName = input.signingName || signingService || input.serviceId;

          const params: SignatureV4Init & SignatureV4CryptoInit = {
            ...input,
            credentials: identity as Provider<AwsCredentialIdentity>,
            region: input.signingRegion,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
          };
          const SignerCtor = input.signerConstructor || SignatureV4;
          return new SignerCtor(params);
        });
  } else {
    // This branch is for endpoints V2.
    // Handle endpoints v2 that resolved per-command
    // TODO: need total refactor for reference auth architecture.
    signer = async (authScheme?: AuthScheme) => {
      authScheme = Object.assign(
        {},
        {
          name: "sigv4",
          signingName: input.signingName || input.defaultSigningName!,
          signingRegion: await normalizeProvider(input.region)(),
          properties: {},
        },
        authScheme
      );

      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      // update client's singing region and signing service config if they are resolved.
      // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
      input.signingRegion = input.signingRegion || signingRegion;
      // signing name resolving order:
      // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
      input.signingName = input.signingName || signingService || input.serviceId;

      const params: SignatureV4Init & SignatureV4CryptoInit = {
        ...input,
        credentials: identity as Provider<AwsCredentialIdentity>,
        region: input.signingRegion,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath,
      };

      const SignerCtor = input.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    };
  }

  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    identity,
    credentials: identity,
    signer,
  };
};

// TODO: reduce code duplication
/**
 * @internal
 */
export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4PreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  let identity: AwsCredentialIdentityProvider | undefined = undefined;
  // Load from credentials for backwards compatibility
  if (input.credentials !== undefined) {
    identity = normalizeIdentityProvider(input.credentials);
  }
  // Load from identity if available and if credentials is not loaded
  if (identity === undefined && input.identity !== undefined) {
    // Will be checked in middleware to see if identity resolves to AwsCredentialIdentity
    identity = normalizeIdentityProvider(input.identity);
  }
  // Use default credential provider if credentials is not loaded
  if (identity === undefined) {
    identity = input.credentialDefaultProvider(input as any);
  }
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    // if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else {
    signer = normalizeProvider(
      new SignatureV4({
        credentials: identity,
        region: input.region,
        service: input.signingName,
        sha256,
        uriEscapePath: signingEscapePath,
      })
    );
  }
  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    identity,
    credentials: identity,
    signer,
  };
};
