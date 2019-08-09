import { _UnmarshalledUnsuccessfulItem } from "./_UnsuccessfulItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RejectVpcEndpointConnectionsOutput shape
 */
export interface RejectVpcEndpointConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the endpoints that were not rejected, if applicable.</p>
   */
  Unsuccessful?: Array<_UnmarshalledUnsuccessfulItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
