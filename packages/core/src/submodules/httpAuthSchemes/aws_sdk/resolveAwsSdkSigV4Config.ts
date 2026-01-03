import { setCredentialFeature } from "@aws-sdk/core/client";
import type { AttributedAwsCredentialIdentity, MergeFunctions } from "@aws-sdk/types";
import {
  doesIdentityRequireRefresh,
  isIdentityExpired,
  memoizeIdentityProvider,
  normalizeProvider,
} from "@smithy/core";
import { SignatureV4, SignatureV4CryptoInit, SignatureV4Init } from "@smithy/signature-v4";
import type {
  AuthScheme,
  AwsCredentialIdentity,
  AwsCredentialIdentityProvider,
  ChecksumConstructor,
  HashConstructor,
  MemoizedProvider,
  Provider,
  RegionInfo,
  RegionInfoProvider,
  RequestSigner,
} from "@smithy/types";

/**
 * @public
 */
export interface AwsSdkSigV4AuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: AwsCredentialIdentity | AwsCredentialIdentityProvider;

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
 * Used to indicate whether a credential provider function was memoized by this resolver.
 * @public
 */
export type AwsSdkSigV4Memoized = {
  /**
   * The credential provider has been memoized by the AWS SDK SigV4 config resolver.
   */
  memoized?: boolean;
  /**
   * The credential provider has the caller client config object bound to its arguments.
   */
  configBound?: boolean;
  /**
   * Function is wrapped with attribution transform.
   */
  attributed?: boolean;
};

/**
 * @internal
 */
export interface AwsSdkSigV4PreviouslyResolved {
  credentialDefaultProvider?: (input: any) => MemoizedProvider<AwsCredentialIdentity>;
  region: string | Provider<string>;
  sha256: ChecksumConstructor | HashConstructor;
  signingName?: string;
  regionInfoProvider?: RegionInfoProvider;
  defaultSigningName?: string;
  serviceId: string;
  useFipsEndpoint: Provider<boolean>;
  useDualstackEndpoint: Provider<boolean>;
}

/**
 * @internal
 */
export interface AwsSdkSigV4AuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.credentials}
   * This provider MAY memoize the loaded credentials for certain period.
   */
  credentials: MergeFunctions<AwsCredentialIdentityProvider, MemoizedProvider<AwsCredentialIdentity>> &
    AwsSdkSigV4Memoized;
  /**
   * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.signer}
   */
  signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
  /**
   * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.signingEscapePath}
   */
  signingEscapePath: boolean;
  /**
   * Resolved value for input config {@link AwsSdkSigV4AuthInputConfig.systemClockOffset}
   */
  systemClockOffset: number;
}

/**
 * @internal
 */
export const resolveAwsSdkSigV4Config = <T>(
  config: T & AwsSdkSigV4AuthInputConfig & AwsSdkSigV4PreviouslyResolved
): T & AwsSdkSigV4AuthResolvedConfig => {
  let inputCredentials = config.credentials;
  let isUserSupplied = !!config.credentials;
  let resolvedCredentials: AwsSdkSigV4AuthResolvedConfig["credentials"] | undefined = undefined;

  Object.defineProperty(config, "credentials", {
    set(credentials: AwsSdkSigV4AuthInputConfig["credentials"]) {
      if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
        isUserSupplied = true;
      }
      inputCredentials = credentials;
      const memoizedProvider = normalizeCredentialProvider(config, {
        credentials: inputCredentials,
        credentialDefaultProvider: config.credentialDefaultProvider,
      });
      const boundProvider = bindCallerConfig(config, memoizedProvider);
      if (isUserSupplied && !boundProvider.attributed) {
        // Check if the original input was a credential object
        const isCredentialObject = typeof inputCredentials === "object" && inputCredentials !== null;

        resolvedCredentials = async (options: Record<string, any> | undefined) => {
          const creds = await boundProvider(options);
          const attributedCreds = creds as AttributedAwsCredentialIdentity;

          // Only set CREDENTIALS_CODE if user provided a credential object
          if (isCredentialObject) {
            return setCredentialFeature(attributedCreds, "CREDENTIALS_CODE", "e");
          }
          return attributedCreds;
        };
        resolvedCredentials.memoized = boundProvider.memoized;
        resolvedCredentials.configBound = boundProvider.configBound;
        resolvedCredentials.attributed = true;
      } else {
        resolvedCredentials = boundProvider;
      }
    },
    get(): AwsSdkSigV4AuthResolvedConfig["credentials"] {
      return resolvedCredentials!;
    },
    enumerable: true,
    configurable: true,
  });

  // invoke setter so that resolvedCredentials is set.
  config.credentials = inputCredentials;

  // Populate sigv4 arguments
  const {
    // Default for signingEscapePath
    signingEscapePath = true,
    // Default for systemClockOffset
    systemClockOffset = config.systemClockOffset || 0,
    // No default for sha256 since it is platform dependent
    sha256,
  } = config;

  // Resolve signer
  let signer: (authScheme?: AuthScheme) => Promise<RequestSigner>;
  if (config.signer) {
    // if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(config.signer);
  } else if (config.regionInfoProvider) {
    // This branch is for endpoints V1.
    // construct a provider inferring signing from region.
    signer = () =>
      normalizeProvider(config.region)()
        .then(
          async (region) =>
            [
              (await config.regionInfoProvider!(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
              })) || {},
              region,
            ] as [RegionInfo, string]
        )
        .then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          // update client's singing region and signing service config if they are resolved.
          // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
          config.signingRegion = config.signingRegion || signingRegion || region;
          // signing name resolving order:
          // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
          config.signingName = config.signingName || signingService || config.serviceId;

          const params: SignatureV4Init & SignatureV4CryptoInit = {
            ...config,
            credentials: config.credentials as AwsSdkSigV4AuthResolvedConfig["credentials"],
            region: config.signingRegion,
            service: config.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
          };
          const SignerCtor = config.signerConstructor || SignatureV4;
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
          signingName: config.signingName || config.defaultSigningName!,
          signingRegion: await normalizeProvider(config.region)(),
          properties: {},
        },
        authScheme
      );

      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      // update client's singing region and signing service config if they are resolved.
      // signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
      config.signingRegion = config.signingRegion || signingRegion;
      // signing name resolving order:
      // user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
      config.signingName = config.signingName || signingService || config.serviceId;

      const params: SignatureV4Init & SignatureV4CryptoInit = {
        ...config,
        credentials: config.credentials as AwsSdkSigV4AuthResolvedConfig["credentials"],
        region: config.signingRegion,
        service: config.signingName,
        sha256,
        uriEscapePath: signingEscapePath,
      };

      const SignerCtor = config.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    };
  }

  const resolvedConfig = Object.assign(config, {
    systemClockOffset,
    signingEscapePath,
    signer,
  });

  return resolvedConfig as typeof resolvedConfig & {
    // this was set earlier with Object.defineProperty.
    credentials: AwsSdkSigV4AuthResolvedConfig["credentials"];
  };
};

/**
 * @internal
 * @deprecated renamed to {@link AwsSdkSigV4AuthInputConfig}
 */
export interface AWSSDKSigV4AuthInputConfig extends AwsSdkSigV4AuthInputConfig {}

/**
 * @internal
 * @deprecated renamed to {@link AwsSdkSigV4PreviouslyResolved}
 */
export interface AWSSDKSigV4PreviouslyResolved extends AwsSdkSigV4PreviouslyResolved {}

/**
 * @internal
 * @deprecated renamed to {@link AwsSdkSigV4AuthResolvedConfig}
 */
export interface AWSSDKSigV4AuthResolvedConfig extends AwsSdkSigV4AuthResolvedConfig {}

/**
 * @internal
 * @deprecated renamed to {@link resolveAwsSdkSigV4Config}
 */
export const resolveAWSSDKSigV4Config = resolveAwsSdkSigV4Config;

/**
 * Normalizes the credentials to a memoized provider and sets memoized=true on the function
 * object. This prevents multiple layering of the memoization process.
 */
function normalizeCredentialProvider(
  config: Parameters<typeof resolveAwsSdkSigV4Config>[0],
  {
    credentials,
    credentialDefaultProvider,
  }: Pick<Parameters<typeof resolveAwsSdkSigV4Config>[0], "credentials" | "credentialDefaultProvider">
): AwsSdkSigV4AuthResolvedConfig["credentials"] {
  let credentialsProvider: AwsSdkSigV4AuthResolvedConfig["credentials"] | undefined;

  if (credentials) {
    if (!(credentials as typeof credentials & AwsSdkSigV4Memoized)?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh)!;
    } else {
      credentialsProvider = credentials as AwsSdkSigV4AuthResolvedConfig["credentials"];
    }
  } else {
    // credentialDefaultProvider should always be populated, but in case
    // it isn't, set a default identity provider that throws an error
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider(
        credentialDefaultProvider(
          Object.assign({}, config as any, {
            parentClientConfig: config,
          })
        )
      );
    } else {
      credentialsProvider = async () => {
        throw new Error(
          "@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured."
        );
      };
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}

/**
 * Binds the caller client config as an argument to the credentialsProvider function.
 * Uses a state marker on the function to avoid doing this more than once.
 */
function bindCallerConfig(
  config: Parameters<typeof resolveAwsSdkSigV4Config>[0],
  credentialsProvider: AwsSdkSigV4AuthResolvedConfig["credentials"]
): AwsSdkSigV4AuthResolvedConfig["credentials"] {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn: typeof credentialsProvider = async (options: Parameters<typeof credentialsProvider>[0]) =>
    credentialsProvider({ ...options, callerClientConfig: config });
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
