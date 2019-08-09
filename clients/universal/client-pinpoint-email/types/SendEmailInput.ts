import { _Destination } from "./_Destination";
import { _EmailContent } from "./_EmailContent";
import { _MessageTag } from "./_MessageTag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to send an email message.</p>
 */
export interface SendEmailInput {
  /**
   * <p>The email address that you want to use as the "From" address for the email. The address that you specify has to be verified. </p>
   */
  FromEmailAddress?: string;

  /**
   * <p>An object that contains the recipients of the email message.</p>
   */
  Destination: _Destination;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>The address that Amazon Pinpoint should send bounce and complaint notifications to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>An object that contains the body of the message. You can send either a Simple message or a Raw message.</p>
   */
  Content: _EmailContent;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send using the <code>SendEmail</code> operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events. </p>
   */
  EmailTags?: Array<_MessageTag> | Iterable<_MessageTag>;

  /**
   * <p>The name of the configuration set that you want to use when sending the email.</p>
   */
  ConfigurationSetName?: string;

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
