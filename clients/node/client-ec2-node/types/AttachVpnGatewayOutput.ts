import { _UnmarshalledVpcAttachment } from "./_VpcAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of AttachVpnGateway.</p>
 */
export interface AttachVpnGatewayOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the attachment.</p>
   */
  VpcAttachment?: _UnmarshalledVpcAttachment;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
