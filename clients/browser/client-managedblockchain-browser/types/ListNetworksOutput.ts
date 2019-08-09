import { _UnmarshalledNetworkSummary } from "./_NetworkSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNetworksOutput shape
 */
export interface ListNetworksOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>NetworkSummary</code> objects that contain configuration properties for each network.</p>
   */
  Networks?: Array<_UnmarshalledNetworkSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
