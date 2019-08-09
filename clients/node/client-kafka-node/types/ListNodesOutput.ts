import { _UnmarshalledNodeInfo } from "./_NodeInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListNodesOutput shape
 */
export interface ListNodesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The paginated results marker. When the result of a ListNodes operation is truncated, the call returns NextToken in the response.
   *                To get another batch of nodes, provide this token in your next request.</p>
   *
   */
  NextToken?: string;

  /**
   *
   *             <p>List containing a NodeInfo object.</p>
   *
   */
  NodeInfoList?: Array<_UnmarshalledNodeInfo>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
