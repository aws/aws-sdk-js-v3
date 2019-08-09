import { _UnmarshalledVirtualNodeData } from "./_VirtualNodeData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVirtualNodeOutput shape
 */
export interface UpdateVirtualNodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the virtual node that was updated.</p>
   */
  virtualNode: _UnmarshalledVirtualNodeData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
