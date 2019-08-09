import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * An object that that contains the Message ID of a Voice message that was sent successfully.
 */
export interface SendVoiceMessageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * A unique identifier for the voice message.
   */
  MessageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
