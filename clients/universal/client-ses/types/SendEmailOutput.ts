import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a unique message ID.</p>
 */
export interface SendEmailOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique message identifier returned from the <code>SendEmail</code> action. </p>
   */
  MessageId: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
