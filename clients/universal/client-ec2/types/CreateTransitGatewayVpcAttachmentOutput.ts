import { _UnmarshalledTransitGatewayVpcAttachment } from "./_TransitGatewayVpcAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateTransitGatewayVpcAttachmentOutput shape
 */
export interface CreateTransitGatewayVpcAttachmentOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC attachment.</p>
   */
  TransitGatewayVpcAttachment?: _UnmarshalledTransitGatewayVpcAttachment;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
