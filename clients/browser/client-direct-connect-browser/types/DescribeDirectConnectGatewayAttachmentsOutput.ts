import { _UnmarshalledDirectConnectGatewayAttachment } from "./_DirectConnectGatewayAttachment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDirectConnectGatewayAttachmentsOutput shape
 */
export interface DescribeDirectConnectGatewayAttachmentsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The attachments.</p>
   */
  directConnectGatewayAttachments?: Array<
    _UnmarshalledDirectConnectGatewayAttachment
  >;

  /**
   * <p>The token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
