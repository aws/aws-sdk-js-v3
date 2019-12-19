export interface BucketEndpointInputConfig {
  /**
   * Whether the provided endpoint addresses an individual bucket.
   */
  bucketEndpoint?: boolean;
  /**
   * Whether to force path style URLs for S3 objects (e.g., https://s3.amazonaws.com/<bucketName>/<key> instead of https://<bucketName>.s3.amazonaws.com/<key>
   */
  forcePathStyle?: boolean;
  /**
   * Whether to use the S3 Transfer Acceleration endpoint by default
   */
  useAccelerateEndpoint?: boolean;
  /**
   * Enables IPv6/IPv4 dualstack endpoint. When a DNS lookup is performed on an endpoint of this type, it returns an “A” record with an IPv4 address and an “AAAA” record with an IPv6 address. In most cases the network stack in the client environment will automatically prefer the AAAA record and make a connection using the IPv6 address. Note, however, that currently on Windows, the IPv4 address will be preferred.
   */
  useDualstackEndpoint?: boolean;
}

export interface BucketEndpointResolvedConfig {
  bucketEndpoint: boolean;
  forcePathStyle: boolean;
  useAccelerateEndpoint: boolean;
  useDualstackEndpoint: boolean;
}

export function resolveBucketEndpointConfig<T>(
  input: T & BucketEndpointInputConfig
): T & BucketEndpointResolvedConfig {
  const {
    bucketEndpoint = false,
    forcePathStyle = false,
    useAccelerateEndpoint = false,
    useDualstackEndpoint = false
  } = input;
  return {
    ...input,
    bucketEndpoint,
    forcePathStyle,
    useAccelerateEndpoint,
    useDualstackEndpoint
  };
}
