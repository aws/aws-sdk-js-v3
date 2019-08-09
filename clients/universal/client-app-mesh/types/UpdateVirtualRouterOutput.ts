import { _UnmarshalledVirtualRouterData } from "./_VirtualRouterData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVirtualRouterOutput shape
 */
export interface UpdateVirtualRouterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the virtual router that was updated.</p>
   */
  virtualRouter: _UnmarshalledVirtualRouterData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
