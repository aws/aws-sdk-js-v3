import { _UnmarshalledReservedCacheNodesOffering } from "./_ReservedCacheNodesOffering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeReservedCacheNodesOfferings</code> operation.</p>
 */
export interface DescribeReservedCacheNodesOfferingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved cache node offerings. Each element in the list contains detailed information about one offering.</p>
   */
  ReservedCacheNodesOfferings?: Array<_UnmarshalledReservedCacheNodesOffering>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
