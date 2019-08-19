import { _UnmarshalledVirtualRouterData } from "./_VirtualRouterData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteVirtualRouterOutput shape
 */
export interface DeleteVirtualRouterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The virtual router that was deleted.</p>
   */
  virtualRouter: _UnmarshalledVirtualRouterData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
