import { _UnmarshalledCodeGenNode } from "./_CodeGenNode";
import { _UnmarshalledCodeGenEdge } from "./_CodeGenEdge";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDataflowGraphOutput shape
 */
export interface GetDataflowGraphOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: Array<_UnmarshalledCodeGenNode>;

  /**
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: Array<_UnmarshalledCodeGenEdge>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
