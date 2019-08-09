import { _UnmarshalledNode } from "./_Node";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNodeOutput shape
 */
export interface GetNodeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Properties of the node configuration.</p>
   */
  Node?: _UnmarshalledNode;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
