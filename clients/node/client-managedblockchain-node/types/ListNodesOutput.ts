import { _UnmarshalledNodeSummary } from "./_NodeSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNodesOutput shape
 */
export interface ListNodesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>NodeSummary</code> objects that contain configuration properties for each node.</p>
   */
  Nodes?: Array<_UnmarshalledNodeSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
