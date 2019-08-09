import { _UnmarshalledTransitGatewayVpcAttachment } from "./_TransitGatewayVpcAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTransitGatewayVpcAttachmentsOutput shape
 */
export interface DescribeTransitGatewayVpcAttachmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC attachments.</p>
   */
  TransitGatewayVpcAttachments?: Array<
    _UnmarshalledTransitGatewayVpcAttachment
  >;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
