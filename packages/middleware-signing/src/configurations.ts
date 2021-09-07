import { memoize } from "@aws-sdk/property-provider";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import { Credentials, HashConstructor, Provider, RegionInfo, RegionInfoProvider, RequestSigner } from "@aws-sdk/types";

// 5 minutes buffer time the refresh the credential before it really expires
const CREDENTIAL_EXPIRE_WINDOW = 300000;

// AwsAuth v/s SigV4Auth
// AwsAuth: specific to SigV4 auth for AWS services
// SigV4Auth: SigV4 auth for non-AWS services

export interface AwsAuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * The signer to use when signing requests.
   */
  signer?: RequestSigner | Provider<RequestSigner>;

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
}

export interface SigV4AuthInputConfig {
  /**
   * The credentials used to sign requests.
   */
  credentials?: Credentials | Provider<Credentials>;

  /**
   * The signer to use when signing requests.
   */
  signer?: RequestSigner | Provider<RequestSigner>;

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
  regionInfoProvider: RegionInfoProvider;
  signingName?: string;
  serviceId: string;
  sha256: HashConstructor;
}

interface SigV4PreviouslyResolved {
  credentialDefaultProvider: (input: any) => Provider<Credentials>;
  region: string | Provider<string>;
  signingName: string;
  sha256: HashConstructor;
}

export interface AwsAuthResolvedConfig {
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.credentials}
   */
  credentials: Provider<Credentials>;
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.signer}
   */
  signer: Provider<RequestSigner>;
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.signingEscapePath}
   */
  signingEscapePath: boolean;
  /**
   * Resolved value for input config {@link AwsAuthInputConfig.systemClockOffset}
   */
  systemClockOffset: number;
}

export interface SigV4AuthResolvedConfig extends AwsAuthResolvedConfig {}

export const resolveAwsAuthConfig = <T>(
  input: T & AwsAuthInputConfig & PreviouslyResolved
): T & AwsAuthResolvedConfig => {
  const normalizedCreds = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    //if signer is supplied by user, normalize it to a function returning a promise for signer.
    signer = normalizeProvider(input.signer);
  } else {
    //construct a provider inferring signing from region.
    signer = () =>
      normalizeProvider(input.region)()
        .then(async (region) => [(await input.regionInfoProvider(region)) || {}, region] as [RegionInfo, string])
        .then(([regionInfo, region]) => {
          const { signingRegion, signingService } = regionInfo;
          //update client's singing region and signing service config if they are resolved.
          //signing region resolving order: user supplied signingRegion -> endpoints.json inferred region -> client region
          input.signingRegion = input.signingRegion || signingRegion || region;
          //signing name resolving order:
          //user supplied signingName -> endpoints.json inferred (credential scope -> model arnNamespace) -> model service id
          input.signingName = input.signingName || signingService || input.serviceId;

          return new SignatureV4({
            credentials: normalizedCreds,
            region: input.signingRegion,
            service: input.signingName,
            sha256,
            uriEscapePath: signingEscapePath,
          });
        });
  }

  return {
    ...input,
    systemClockOffset,
    signingEscapePath,
    credentials: normalizedCreds,
    signer,
  };
};

// TODO: reduce code duplication
export const resolveSigV4AuthConfig = <T>(
  input: T & SigV4AuthInputConfig & SigV4PreviouslyResolved
): T & SigV4AuthResolvedConfig => {
  const normalizedCreds = input.credentials
    ? normalizeCredentialProvider(input.credentials)
    : input.credentialDefaultProvider(input as any);
  const { signingEscapePath = true, systemClockOffset = input.systemClockOffset || 0, sha256 } = input;
  let signer: Provider<RequestSigner>;
  if (input.signer) {
    //if signer is supplied by user, normalize it to a function returning a promise for signer.
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

const normalizeProvider = <T>(input: T | Provider<T>): Provider<T> => {
  if (typeof input === "object") {
    const promisified = Promise.resolve(input);
    return () => promisified;
  }
  return input as Provider<T>;
};

const normalizeCredentialProvider = (credentials: Credentials | Provider<Credentials>): Provider<Credentials> => {
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
