import { _UnmarshalledVirtualServiceData } from "./_VirtualServiceData";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVirtualServiceOutput shape
 */
export interface UpdateVirtualServiceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A full description of the virtual service that was updated.</p>
   */
  virtualService: _UnmarshalledVirtualServiceData;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
