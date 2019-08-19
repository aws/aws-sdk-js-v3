import { _UnmarshalledEndpointGroup } from "./_EndpointGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateEndpointGroupOutput shape
 */
export interface UpdateEndpointGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The information about the endpoint group that was updated.</p>
   */
  EndpointGroup?: _UnmarshalledEndpointGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
