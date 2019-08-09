import { _UnmarshalledVirtualNodeData } from "./_VirtualNodeData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteVirtualNodeOutput shape
 */
export interface DeleteVirtualNodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The virtual node that was deleted.</p>
   */
  virtualNode: _UnmarshalledVirtualNodeData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
