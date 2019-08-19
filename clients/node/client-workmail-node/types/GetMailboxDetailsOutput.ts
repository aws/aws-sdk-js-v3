import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMailboxDetailsOutput shape
 */
export interface GetMailboxDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The maximum allowed mailbox size, in MB, for the specified user.</p>
   */
  MailboxQuota?: number;

  /**
   * <p>The current mailbox size, in MB, for the specified user.</p>
   */
  MailboxSize?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
