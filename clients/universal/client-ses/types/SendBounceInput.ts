import { _MessageDsn } from "./_MessageDsn";
import { _BouncedRecipientInfo } from "./_BouncedRecipientInfo";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to send a bounce message to the sender of an email you received through Amazon SES.</p>
 */
export interface SendBounceInput {
  /**
   * <p>The message ID of the message to be bounced.</p>
   */
  OriginalMessageId: string;

  /**
   * <p>The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.</p>
   */
  BounceSender: string;

  /**
   * <p>Human-readable text for the bounce message to explain the failure. If not specified, the text will be auto-generated based on the bounced recipient information.</p>
   */
  Explanation?: string;

  /**
   * <p>Message-related DSN fields. If not specified, Amazon SES will choose the values.</p>
   */
  MessageDsn?: _MessageDsn;

  /**
   * <p>A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one <code>BouncedRecipientInfo</code> in the list.</p>
   */
  BouncedRecipientInfoList:
    | Array<_BouncedRecipientInfo>
    | Iterable<_BouncedRecipientInfo>;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
   */
  BounceSenderArn?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
