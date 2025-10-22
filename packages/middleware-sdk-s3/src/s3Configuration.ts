import type { Client, Command } from "@smithy/types";

import { S3ExpressIdentityProvider, S3ExpressIdentityProviderImpl } from "./s3-express";

/**
 * All endpoint parameters with built-in bindings of AWS::S3::*
 * @public
 */
export interface S3InputConfig {
  /**
   * Whether to force path style URLs for S3 objects
   * (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
   */
  forcePathStyle?: boolean;
  /**
   * Whether to use the S3 Transfer Acceleration endpoint by default
   */
  useAccelerateEndpoint?: boolean;
  /**
   * Whether multi-region access points (MRAP) should be disabled.
   */
  disableMultiregionAccessPoints?: boolean;
  /**
   * This feature was previously called the S3 Global Client.
   * This can result in additional latency as failed requests are retried
   * with a corrected region when receiving a permanent redirect error with status 301.
   * This feature should only be used as a last resort if you do not know the region of your bucket(s) ahead of time.
   */
  followRegionRedirects?: boolean;
  /**
   * Identity provider for an S3 feature.
   */
  s3ExpressIdentityProvider?: S3ExpressIdentityProvider;
  /**
   * Whether to use the bucket name as the endpoint for this client.
   */
  bucketEndpoint?: boolean;
  /**
   * This field configures the SDK's behavior around setting the `expect: 100-continue` header.
   *
   * Default: 2_097_152 (2 MB)
   *
   * When given as a boolean - always send or omit the header.
   * When given as a number - minimum byte threshold of the payload before setting the header.
   *                          Unmeasurable payload sizes (streams) will set the header too.
   *
   * The `expect: 100-continue` header is used to allow the server a chance to validate the PUT request
   * headers before the client begins to send the object payload. This avoids wasteful data transmission for a
   * request that is rejected.
   *
   * However, there is a trade-off where the request will take longer to complete.
   */
  expectContinueHeader?: boolean | number;
}

/**
 * This is a placeholder for the actual
 * S3Client type from \@aws-sdk/client-s3. It is not explicitly
 * imported to avoid a circular dependency.
 * @internal
 */
type PlaceholderS3Client = Client<any, any, any> & any;

/**
 * Placeholder for the constructor for CreateSessionCommand.
 * @internal
 */
type PlaceholderCreateSessionCommandCtor = { new (args: any): Command<any, any, any, any, any> };

export interface S3ResolvedConfig {
  forcePathStyle: boolean;
  useAccelerateEndpoint: boolean;
  disableMultiregionAccessPoints: boolean;
  followRegionRedirects: boolean;
  s3ExpressIdentityProvider: S3ExpressIdentityProvider;
  bucketEndpoint: boolean;
  expectContinueHeader: boolean | number;
}

export const resolveS3Config = <T>(
  input: T & S3InputConfig,
  {
    session,
  }: {
    session: [() => PlaceholderS3Client, PlaceholderCreateSessionCommandCtor];
  }
): T & S3ResolvedConfig => {
  const [s3ClientProvider, CreateSessionCommandCtor] = session;
  const {
    forcePathStyle,
    useAccelerateEndpoint,
    disableMultiregionAccessPoints,
    followRegionRedirects,
    s3ExpressIdentityProvider,
    bucketEndpoint,
    expectContinueHeader,
  } = input;

  return Object.assign(input, {
    forcePathStyle: forcePathStyle ?? false,
    useAccelerateEndpoint: useAccelerateEndpoint ?? false,
    disableMultiregionAccessPoints: disableMultiregionAccessPoints ?? false,
    followRegionRedirects: followRegionRedirects ?? false,
    s3ExpressIdentityProvider:
      s3ExpressIdentityProvider ??
      new S3ExpressIdentityProviderImpl(async (key: string) =>
        s3ClientProvider().send(
          new CreateSessionCommandCtor({
            Bucket: key,
          })
        )
      ),
    bucketEndpoint: bucketEndpoint ?? false,
    expectContinueHeader: expectContinueHeader ?? 2_097_152,
  });
};
