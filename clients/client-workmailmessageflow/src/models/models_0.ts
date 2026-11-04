// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

/**
 * @public
 */
export interface GetRawMessageContentRequest {
  /**
   * The identifier of the email message to retrieve.
   *
   * @public
   */
  messageId: string | undefined;
}

/**
 * @public
 */
export interface GetRawMessageContentResponse {
  /**
   * The raw content of the email message, in MIME format.
   *
   * @public
   */
  messageContent: StreamingBlobTypes | undefined;
}

/**
 * Amazon S3 object representing the updated message content, in MIME format.
 *
 * > **Note:** The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see [Updating message content with AWS Lambda](https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html).
 *
 * @public
 */
export interface S3Reference {
  /**
   * The S3 bucket name.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The S3 key object name.
   *
   * @public
   */
  key: string | undefined;

  /**
   * If you enable versioning for the bucket, you can specify the object version.
   *
   * @public
   */
  objectVersion?: string | undefined;
}

/**
 * Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:
 *
 * - Each part of a multipart MIME message must be formatted properly.
 * - Attachments must be of a content type that Amazon SES supports. For more information, see [Unsupported Attachment Types](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html).
 * - If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.
 * - Per [RFC 5321](https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6), the maximum length of each line of text, including the <CRLF>, must not exceed 1,000 characters.
 * - The message must contain all the required header fields. Check the returned error message for more information.
 * - The value of immutable headers must remain unchanged. Check the returned error message for more information.
 * - Certain unique headers can only appear once. Check the returned error message for more information.
 *
 * @public
 */
export interface RawMessageContent {
  /**
   * The S3 reference of an email message.
   *
   * @public
   */
  s3Reference: S3Reference | undefined;
}

/**
 * @public
 */
export interface PutRawMessageContentRequest {
  /**
   * The identifier of the email message being updated.
   *
   * @public
   */
  messageId: string | undefined;

  /**
   * Describes the raw message content of the updated email message.
   *
   * @public
   */
  content: RawMessageContent | undefined;
}

/**
 * @public
 */
export interface PutRawMessageContentResponse {}
