import { _UnmarshalledReservedCacheNode } from "./_ReservedCacheNode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodes</code> operation.</p>
 */
export interface DescribeReservedCacheNodesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache nodes. Each element in the list contains detailed information about one node.</p>
   */
  ReservedCacheNodes?: Array<_UnmarshalledReservedCacheNode>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
