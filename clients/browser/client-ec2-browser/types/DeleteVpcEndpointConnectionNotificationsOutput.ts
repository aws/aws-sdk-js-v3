import { _UnmarshalledUnsuccessfulItem } from "./_UnsuccessfulItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteVpcEndpointConnectionNotificationsOutput shape
 */
export interface DeleteVpcEndpointConnectionNotificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the notifications that could not be deleted successfully.</p>
   */
  Unsuccessful?: Array<_UnmarshalledUnsuccessfulItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
