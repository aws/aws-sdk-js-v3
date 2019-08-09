import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.</p>
 */
export interface SendEmailOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier for the message that is generated when Amazon Pinpoint accepts the message.</p> <note> <p>It is possible for Amazon Pinpoint to accept a message without sending it. This can happen when the message you're trying to send has an attachment doesn't pass a virus check, or when you send a templated email that contains invalid personalization content, for example.</p> </note>
   */
  MessageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
