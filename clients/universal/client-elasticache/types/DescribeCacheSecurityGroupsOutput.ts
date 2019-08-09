import { _UnmarshalledCacheSecurityGroup } from "./_CacheSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.</p>
 */
export interface DescribeCacheSecurityGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache security groups. Each element in the list contains detailed information about one group.</p>
   */
  CacheSecurityGroups?: Array<_UnmarshalledCacheSecurityGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
