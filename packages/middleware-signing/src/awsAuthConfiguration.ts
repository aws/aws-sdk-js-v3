import type { AwsCredentialIdentityProvider, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { memoize } from "@smithy/property-provider";
import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@smithy/signature-v4";
import {
  AuthScheme,
  AwsCredentialIdentity,
  ChecksumConstructor,
  HashConstructor,
  Logger,
  MemoizedProvider,
  Provider,
  RegionInfo,
  RegionInfoProvider,
  RequestSigner,
} from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

// 5 minutes buffer time the refresh the credential before it really expires
const CREDENTIAL_EXPIRE_WINDOW = 300000;

// AwsAuth v/s SigV4Auth
// AwsAuth: specific to SigV4 auth for AWS services
// SigV4Auth: SigV4 auth for non-AWS services

/**
 * @public
 * @deprecated only used in legacy auth.
 */
export interface AwsAuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;

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
   *
   * @internal
   */
  signerConstructor?: new (options: SignatureV4Init & SignatureV4CryptoInit) => RequestSigner;
}

/**
 * @public
 * @deprecated only used in legacy auth.
 */
export interface SigV4AuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;

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
 * @deprecated only used in legacy auth.
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
 * @deprecated only used in legacy auth.
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
 * @deprecated only used in legacy auth.
 */
export interface AwsAuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.credentials}
   * This provider MAY memoize the loaded credentials for certain period.
   * See {@link MemoizedProvider} for more information.
   */
  credentials: MemoizedProvider<AwsCredentialIdentity>;
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
 * @deprecated only used in legacy auth.
 */
export interface SigV4AuthResolvedConfig extends AwsAuthResolvedConfig {}

/**
 * @internal
 * @deprecated only used in legacy auth.
 */
export const resolveAwsAuthConfig = <T>(
  input: T & AwsAuthInputConfig & PreviouslyResolved
): T & AwsAuthResolvedConfig => {
  const normalizedCreds = createConfigBoundCredentialProvider(input);

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
            credentials: normalizedCreds,
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

      const isSigv4a = authScheme?.name === "sigv4a";

      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;

      let regionForSigner: string | undefined;

      if (isSigv4a) {
        regionForSigner = input.signingRegion || signingRegion;
      } else {
        // update client's signing region and signing service config if they are resolved.
        // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
        input.signingRegion = input.signingRegion || signingRegion;
        regionForSigner = input.signingRegion;
      }

      // signing name resolving order:
      // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
      input.signingName = input.signingName || signingService || input.serviceId;

      const params: SignatureV4Init & SignatureV4CryptoInit = {
        ...input,
        credentials: normalizedCreds,
        region: regionForSigner,
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
    credentials: normalizedCreds,
    signer,
  };
};

/**
 * @internal
 * @deprecated only used in legacy auth.
 */
export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4PreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const normalizedCreds = createConfigBoundCredentialProvider(input);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    // if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else {
    signer = normalizeProvider(
      new SignatureV4({
        credentials: normalizedCreds,
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
    credentials: normalizedCreds,
    signer,
  };
};

/**
 * @internal
 * @deprecated only used in legacy auth.
 */
const normalizeCredentialProvider = (
  credentials: AwsCredentialIdentity | Provider<AwsCredentialIdentity> | RuntimeConfigAwsCredentialIdentityProvider
): MemoizedProvider<AwsCredentialIdentity> => {
  if (typeof credentials === "function") {
    return memoize(
      credentials,
      (credentials) =>
        credentials.expiration !== undefined &&
        credentials.expiration.getTime() - Date.now() < CREDENTIAL_EXPIRE_WINDOW,
      (credentials) => credentials.expiration !== undefined
    );
  }
  return normalizeProvider(credentials);
};

/**
 * @internal
 * @deprecated only used in legacy auth.
 *
 * normalizes the credentials from the input config into a provider that has
 * a binding to the config itself.
 */
const createConfigBoundCredentialProvider = (input: {
  credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider | RuntimeConfigAwsCredentialIdentityProvider;
  credentialDefaultProvider: PreviouslyResolved["credentialDefaultProvider"];
  region: PreviouslyResolved["region"];
  profile?: string;
}): AwsCredentialIdentityProvider => {
  const normalizedCredentialsProvider = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(
        Object.assign({}, input, {
          parentClientConfig: input,
        })
      );
  const normalizedCreds = async () =>
    (normalizedCredentialsProvider as RuntimeConfigAwsCredentialIdentityProvider)({
      callerClientConfig: {
        region: normalizeProvider(input.region),
        profile: input.profile,
      },
    });
  return normalizedCreds;
};
