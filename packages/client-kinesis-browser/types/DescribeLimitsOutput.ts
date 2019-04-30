import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLimitsOutput shape
 */
export interface DescribeLimitsOutput {
  /**
   * <p>The maximum number of shards.</p>
   */
  ShardLimit: number;

  /**
   * <p>The number of open shards.</p>
   */
  OpenShardCount: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
