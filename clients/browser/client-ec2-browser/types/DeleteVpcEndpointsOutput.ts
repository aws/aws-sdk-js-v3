import { _UnmarshalledUnsuccessfulItem } from "./_UnsuccessfulItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DeleteVpcEndpoints.</p>
 */
export interface DeleteVpcEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC endpoints that were not successfully deleted.</p>
   */
  Unsuccessful?: Array<_UnmarshalledUnsuccessfulItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
