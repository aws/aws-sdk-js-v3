import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCacheOutput shape
 */
export interface DescribeCacheOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <a>ListGateways</a> operation to return a list of gateways for your account and region.</p>
   */
  GatewayARN?: string;

  /**
   * <p>An array of strings that identify disks that are to be configured as working storage. Each string have a minimum length of 1 and maximum length of 300. You can get the disk IDs from the <a>ListLocalDisks</a> API.</p>
   */
  DiskIds?: Array<string>;

  /**
   * <p>The amount of cache in bytes allocated to the a gateway.</p>
   */
  CacheAllocatedInBytes?: number;

  /**
   * <p>Percent use of the gateway's cache storage. This metric applies only to the gateway-cached volume setup. The sample is taken at the end of the reporting period.</p>
   */
  CacheUsedPercentage?: number;

  /**
   * <p>The file share's contribution to the overall percentage of the gateway's cache that has not been persisted to AWS. The sample is taken at the end of the reporting period.</p>
   */
  CacheDirtyPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are served from cache. The sample is taken at the end of the reporting period.</p>
   */
  CacheHitPercentage?: number;

  /**
   * <p>Percent of application read operations from the file shares that are not served from cache. The sample is taken at the end of the reporting period.</p>
   */
  CacheMissPercentage?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
