import { _RawMessage } from "./_RawMessage";
import { _MessageTag } from "./_MessageTag";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to send a single raw email using Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.</p>
 */
export interface SendRawEmailInput {
  /**
   * <p>The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)</p> <note> <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the <i>local part</i> of a source email address (the part of the email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII characters</a>. If the <i>domain part</i> of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly name</i>) may contain non-ASCII characters. These characters must be encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word syntax uses the following form: <code>=?charset?encoding?encoded-text?=</code>.</p> </note> <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled, then bounces and complaints will be sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.</p>
   */
  Source?: string;

  /**
   * <p>A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.</p>
   */
  Destinations?: Array<string> | Iterable<string>;

  /**
   * <p>The raw email message itself. The message has to meet the following criteria:</p> <ul> <li> <p>The message has to contain a header and a body, separated by a blank line.</p> </li> <li> <p>All of the required header fields must be present in the message.</p> </li> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment Types</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>The entire message must be base64-encoded.</p> </li> <li> <p>If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer Guide</i>.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> </ul>
   */
  RawMessage: _RawMessage;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code> in the raw message of the email. If you use both the <code>FromArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
   */
  FromArn?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the <code>Source</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to send from <code>user@example.com</code>, then you would specify the <code>SourceArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>Source</code> to be <code>user@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>SourceArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
   */
  SourceArn?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the <code>ReturnPath</code> parameter.</p> <p>For example, if the owner of <code>example.com</code> (which has ARN <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a policy to it that authorizes you to use <code>feedback@example.com</code>, then you would specify the <code>ReturnPathArn</code> to be <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p> <p>Instead of using this parameter, you can use the X-header <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the value of the <code>ReturnPathArn</code> parameter.</p> <note> <p>For information about when to use this parameter, see the description of <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p> </note>
   */
  ReturnPathArn?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.</p>
   */
  Tags?: Array<_MessageTag> | Iterable<_MessageTag>;

  /**
   * <p>The name of the configuration set to use when you send an email using <code>SendRawEmail</code>.</p>
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
