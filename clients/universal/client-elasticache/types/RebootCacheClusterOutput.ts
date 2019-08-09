import { _UnmarshalledCacheCluster } from "./_CacheCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RebootCacheClusterOutput shape
 */
export interface RebootCacheClusterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains all of the attributes of a specific cluster.</p>
   */
  CacheCluster?: _UnmarshalledCacheCluster;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
