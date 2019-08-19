import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNodeOutput shape
 */
export interface CreateNodeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier of the node.</p>
   */
  NodeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
