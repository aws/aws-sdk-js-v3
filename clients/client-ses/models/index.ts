import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains the name and value of a tag that you can provide to <code>SendEmail</code> or
 *                 <code>SendRawEmail</code> to apply to an email.</p>
 *         <p>Message tags, which you use with configuration sets, enable you to publish email
 *             sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface MessageTag {
  __type?: "MessageTag";
  /**
   * <p>The name of the tag. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * <p>The value of the tag. The value must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Value: string | undefined;
}

export namespace MessageTag {
  export function isa(o: any): o is MessageTag {
    return _smithy.isa(o, "MessageTag");
  }
}

/**
 * <p>Indicates that email sending is disabled for your entire Amazon SES account.</p>
 *         <p>You can enable or disable email sending for your Amazon SES account using <a>UpdateAccountSendingEnabled</a>.</p>
 */
export interface AccountSendingPausedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "AccountSendingPausedException";
  $fault: "client";
  message?: string;
}

export namespace AccountSendingPausedException {
  export function isa(o: any): o is AccountSendingPausedException {
    return _smithy.isa(o, "AccountSendingPausedException");
  }
}

/**
 * <p>When included in a receipt rule, this action adds a header to the received
 *             email.</p>
 *         <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface AddHeaderAction {
  __type?: "AddHeaderAction";
  /**
   * <p>The name of the header to add. Must be between 1 and 50 characters, inclusive, and
   *             consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.</p>
   */
  HeaderName: string | undefined;

  /**
   * <p>Must be less than 2048 characters, and must not contain newline characters ("\r" or
   *             "\n").</p>
   */
  HeaderValue: string | undefined;
}

export namespace AddHeaderAction {
  export function isa(o: any): o is AddHeaderAction {
    return _smithy.isa(o, "AddHeaderAction");
  }
}

/**
 * <p>Indicates that a resource could not be created because of a naming conflict.</p>
 */
export interface AlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p>Indicates that a resource could not be created because the resource name already
   *             exists.</p>
   */
  Name?: string;

  message?: string;
}

export namespace AlreadyExistsException {
  export function isa(o: any): o is AlreadyExistsException {
    return _smithy.isa(o, "AlreadyExistsException");
  }
}

export enum BehaviorOnMXFailure {
  RejectMessage = "RejectMessage",
  UseDefaultValue = "UseDefaultValue"
}

/**
 * <p>Represents the body of the message. You can specify text, HTML, or both. If you use
 *             both, then the message should display correctly in the widest variety of email
 *             clients.</p>
 */
export interface Body {
  __type?: "Body";
  /**
   * <p>The content of the message, in HTML format. Use this for email clients that can
   *             process HTML. You can include clickable links, formatted text, and much more in an HTML
   *             message.</p>
   */
  Html?: Content;

  /**
   * <p>The content of the message, in text format. Use this for text-based email clients, or
   *             clients on high-latency networks (such as mobile devices).</p>
   */
  Text?: Content;
}

export namespace Body {
  export function isa(o: any): o is Body {
    return _smithy.isa(o, "Body");
  }
}

/**
 * <p>When included in a receipt rule, this action rejects the received email by returning a
 *             bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service
 *             (Amazon SNS).</p>
 *         <p>For information about sending a bounce message in response to a received email, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface BounceAction {
  __type?: "BounceAction";
  /**
   * <p>Human-readable text to include in the bounce message.</p>
   */
  Message: string | undefined;

  /**
   * <p>The email address of the sender of the bounced email. This is the address from which
   *             the bounce message will be sent.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The SMTP reply code, as defined by <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   */
  SmtpReplyCode: string | undefined;

  /**
   * <p>The SMTP enhanced status code, as defined by <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a>.</p>
   */
  StatusCode?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is
   *             taken. An example of an Amazon SNS topic ARN is
   *                 <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about
   *             Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;
}

export namespace BounceAction {
  export function isa(o: any): o is BounceAction {
    return _smithy.isa(o, "BounceAction");
  }
}

export enum BounceType {
  ContentRejected = "ContentRejected",
  DoesNotExist = "DoesNotExist",
  ExceededQuota = "ExceededQuota",
  MessageTooLarge = "MessageTooLarge",
  TemporaryFailure = "TemporaryFailure",
  Undefined = "Undefined"
}

/**
 * <p>Recipient-related information to include in the Delivery Status Notification (DSN)
 *             when an email that Amazon SES receives on your behalf bounces.</p>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface BouncedRecipientInfo {
  __type?: "BouncedRecipientInfo";
  /**
   * <p>The reason for the bounce. You must provide either this parameter or
   *                 <code>RecipientDsnFields</code>.</p>
   */
  BounceType?: BounceType | string;

  /**
   * <p>The email address of the recipient of the bounced email.</p>
   */
  Recipient: string | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to receive
   *             email for the recipient of the bounced email. For more information about sending
   *             authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  RecipientArn?: string;

  /**
   * <p>Recipient-related DSN fields, most of which would normally be filled in automatically
   *             when provided with a <code>BounceType</code>. You must provide either this parameter or
   *                 <code>BounceType</code>.</p>
   */
  RecipientDsnFields?: RecipientDsnFields;
}

export namespace BouncedRecipientInfo {
  export function isa(o: any): o is BouncedRecipientInfo {
    return _smithy.isa(o, "BouncedRecipientInfo");
  }
}

/**
 * <p>An array that contains one or more Destinations, as well as the tags and replacement
 *             data associated with each of those Destinations.</p>
 */
export interface BulkEmailDestination {
  __type?: "BulkEmailDestination";
  /**
   * <p>Represents the destination of the message, consisting of To:, CC:, and BCC:
   *             fields.</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                     <i>local part</i> of a destination email address (the part of the
   *                 email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the <i>domain part</i> of an address (the
   *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
   *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p>
   *         </note>
   */
  Destination: Destination | undefined;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using <code>SendBulkTemplatedEmail</code>. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events.</p>
   */
  ReplacementTags?: Array<MessageTag>;

  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  ReplacementTemplateData?: string;
}

export namespace BulkEmailDestination {
  export function isa(o: any): o is BulkEmailDestination {
    return _smithy.isa(o, "BulkEmailDestination");
  }
}

/**
 * <p>An object that contains the response from the <code>SendBulkTemplatedEmail</code>
 *             operation.</p>
 */
export interface BulkEmailDestinationStatus {
  __type?: "BulkEmailDestinationStatus";
  /**
   * <p>A description of an error that prevented a message being sent using the
   *                 <code>SendBulkTemplatedEmail</code> operation.</p>
   */
  Error?: string;

  /**
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   */
  MessageId?: string;

  /**
   * <p>The status of a message sent using the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   *         <p>Possible values for this parameter include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Success</code>: Amazon SES accepted the message, and will attempt to deliver
   *                     it to the recipients.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MessageRejected</code>: The message was rejected because it contained a
   *                     virus.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MailFromDomainNotVerified</code>: The sender's email address or domain
   *                     was not verified.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ConfigurationSetDoesNotExist</code>: The configuration set you specified
   *                     does not exist.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TemplateDoesNotExist</code>: The template you specified does not
   *                     exist.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AccountSuspended</code>: Your account has been shut down because of
   *                     issues related to your email sending practices.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AccountThrottled</code>: The number of emails you can send has been
   *                     reduced because your account has exceeded its allocated sending limit.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AccountDailyQuotaExceeded</code>: You have reached or exceeded the
   *                     maximum number of emails you can send from your account in a 24-hour
   *                     period.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InvalidSendingPoolName</code>: The configuration set you specified
   *                     refers to an IP pool that does not exist.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AccountSendingPaused</code>: Email sending for the Amazon SES account was
   *                     disabled using the <a>UpdateAccountSendingEnabled</a>
   *                     operation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ConfigurationSetSendingPaused</code>: Email sending for this
   *                     configuration set was disabled using the <a>UpdateConfigurationSetSendingEnabled</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InvalidParameterValue</code>: One or more of the parameters you
   *                     specified when calling this operation was invalid. See the error message for
   *                     additional information.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TransientFailure</code>: Amazon SES was unable to process your request
   *                     because of a temporary issue.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code>: Amazon SES was unable to process your request. See the error
   *                     message for additional information.</p>
   *             </li>
   *          </ul>
   */
  Status?: BulkEmailStatus | string;
}

export namespace BulkEmailDestinationStatus {
  export function isa(o: any): o is BulkEmailDestinationStatus {
    return _smithy.isa(o, "BulkEmailDestinationStatus");
  }
}

export enum BulkEmailStatus {
  AccountDailyQuotaExceeded = "AccountDailyQuotaExceeded",
  AccountSendingPaused = "AccountSendingPaused",
  AccountSuspended = "AccountSuspended",
  AccountThrottled = "AccountThrottled",
  ConfigurationSetDoesNotExist = "ConfigurationSetDoesNotExist",
  ConfigurationSetSendingPaused = "ConfigurationSetSendingPaused",
  Failed = "Failed",
  InvalidParameterValue = "InvalidParameterValue",
  InvalidSendingPoolName = "InvalidSendingPoolName",
  MailFromDomainNotVerified = "MailFromDomainNotVerified",
  MessageRejected = "MessageRejected",
  Success = "Success",
  TemplateDoesNotExist = "TemplateDoesNotExist",
  TransientFailure = "TransientFailure"
}

/**
 * <p>Indicates that the delete operation could not be completed.</p>
 */
export interface CannotDeleteException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CannotDeleteException";
  $fault: "client";
  /**
   * <p>Indicates that a resource could not be deleted because no resource with the specified
   *             name exists.</p>
   */
  Name?: string;

  message?: string;
}

export namespace CannotDeleteException {
  export function isa(o: any): o is CannotDeleteException {
    return _smithy.isa(o, "CannotDeleteException");
  }
}

/**
 * <p>Represents a request to create a receipt rule set by cloning an existing one. You use
 *             receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CloneReceiptRuleSetRequest {
  __type?: "CloneReceiptRuleSetRequest";
  /**
   * <p>The name of the rule set to clone.</p>
   */
  OriginalRuleSetName: string | undefined;

  /**
   * <p>The name of the rule set to create. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Start and end with a letter or number.</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  RuleSetName: string | undefined;
}

export namespace CloneReceiptRuleSetRequest {
  export function isa(o: any): o is CloneReceiptRuleSetRequest {
    return _smithy.isa(o, "CloneReceiptRuleSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CloneReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "CloneReceiptRuleSetResponse";
}

export namespace CloneReceiptRuleSetResponse {
  export function isa(o: any): o is CloneReceiptRuleSetResponse {
    return _smithy.isa(o, "CloneReceiptRuleSetResponse");
  }
}

/**
 * <p>Contains information associated with an Amazon CloudWatch event destination to which email
 *             sending events are published.</p>
 *         <p>Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which
 *             enable you to publish email sending events. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CloudWatchDestination {
  __type?: "CloudWatchDestination";
  /**
   * <p>A list of dimensions upon which to categorize your emails when you publish email
   *             sending events to Amazon CloudWatch.</p>
   */
  DimensionConfigurations: Array<CloudWatchDimensionConfiguration> | undefined;
}

export namespace CloudWatchDestination {
  export function isa(o: any): o is CloudWatchDestination {
    return _smithy.isa(o, "CloudWatchDestination");
  }
}

/**
 * <p>Contains the dimension configuration to use when you publish email sending events to
 *             Amazon CloudWatch.</p>
 *         <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CloudWatchDimensionConfiguration {
  __type?: "CloudWatchDimensionConfiguration";
  /**
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you do not provide
   *             the value of the dimension when you send an email. The default value must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DefaultDimensionValue: string | undefined;

  /**
   * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name
   *             must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DimensionName: string | undefined;

  /**
   * <p>The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. If you
   *             want Amazon SES to use the message tags that you specify using an
   *                 <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the
   *                 <code>SendEmail</code>/<code>SendRawEmail</code> API, choose
   *             <code>messageTag</code>. If you want Amazon SES to use your own email headers, choose
   *                 <code>emailHeader</code>.</p>
   */
  DimensionValueSource: DimensionValueSource | string | undefined;
}

export namespace CloudWatchDimensionConfiguration {
  export function isa(o: any): o is CloudWatchDimensionConfiguration {
    return _smithy.isa(o, "CloudWatchDimensionConfiguration");
  }
}

/**
 * <p>The name of the configuration set.</p>
 *         <p>Configuration sets let you create groups of rules that you can apply to the emails you
 *             send using Amazon SES. For more information about using configuration sets, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html">Using Amazon SES Configuration Sets</a> in the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/">Amazon SES Developer Guide</a>.</p>
 */
export interface ConfigurationSet {
  __type?: "ConfigurationSet";
  /**
   * <p>The name of the configuration set. The name must meet the following
   *             requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes
   *                     (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain 64 characters or fewer.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;
}

export namespace ConfigurationSet {
  export function isa(o: any): o is ConfigurationSet {
    return _smithy.isa(o, "ConfigurationSet");
  }
}

/**
 * <p>Indicates that the configuration set could not be created because of a naming
 *             conflict.</p>
 */
export interface ConfigurationSetAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ConfigurationSetAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  message?: string;
}

export namespace ConfigurationSetAlreadyExistsException {
  export function isa(o: any): o is ConfigurationSetAlreadyExistsException {
    return _smithy.isa(o, "ConfigurationSetAlreadyExistsException");
  }
}

export enum ConfigurationSetAttribute {
  DELIVERY_OPTIONS = "deliveryOptions",
  EVENT_DESTINATIONS = "eventDestinations",
  REPUTATION_OPTIONS = "reputationOptions",
  TRACKING_OPTIONS = "trackingOptions"
}

/**
 * <p>Indicates that the configuration set does not exist.</p>
 */
export interface ConfigurationSetDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ConfigurationSetDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  message?: string;
}

export namespace ConfigurationSetDoesNotExistException {
  export function isa(o: any): o is ConfigurationSetDoesNotExistException {
    return _smithy.isa(o, "ConfigurationSetDoesNotExistException");
  }
}

/**
 * <p>Indicates that email sending is disabled for the configuration set.</p>
 *         <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
 */
export interface ConfigurationSetSendingPausedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ConfigurationSetSendingPausedException";
  $fault: "client";
  /**
   * <p>The name of the configuration set for which email sending is disabled.</p>
   */
  ConfigurationSetName?: string;

  message?: string;
}

export namespace ConfigurationSetSendingPausedException {
  export function isa(o: any): o is ConfigurationSetSendingPausedException {
    return _smithy.isa(o, "ConfigurationSetSendingPausedException");
  }
}

/**
 * <p>Represents textual data, plus an optional character set specification.</p>
 *         <p>By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol.
 *             If the text must contain any other characters, then you must also specify a character
 *             set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.</p>
 */
export interface Content {
  __type?: "Content";
  /**
   * <p>The character set of the content.</p>
   */
  Charset?: string;

  /**
   * <p>The textual data of the content.</p>
   */
  Data: string | undefined;
}

export namespace Content {
  export function isa(o: any): o is Content {
    return _smithy.isa(o, "Content");
  }
}

/**
 * <p>Represents a request to create a configuration set event destination. A configuration
 *             set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service
 *             in which Amazon SES publishes the email sending events associated with a configuration set.
 *             For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CreateConfigurationSetEventDestinationRequest {
  __type?: "CreateConfigurationSetEventDestinationRequest";
  /**
   * <p>The name of the configuration set that the event destination should be associated
   *             with.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An object that describes the AWS service that email sending event information will
   *             be published to.</p>
   */
  EventDestination: EventDestination | undefined;
}

export namespace CreateConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "CreateConfigurationSetEventDestinationRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "CreateConfigurationSetEventDestinationResponse";
}

export namespace CreateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is CreateConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "CreateConfigurationSetEventDestinationResponse");
  }
}

/**
 * <p>Represents a request to create a configuration set. Configuration sets enable you to
 *             publish email sending events. For information about using configuration sets, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CreateConfigurationSetRequest {
  __type?: "CreateConfigurationSetRequest";
  /**
   * <p>A data structure that contains the name of the configuration set.</p>
   */
  ConfigurationSet: ConfigurationSet | undefined;
}

export namespace CreateConfigurationSetRequest {
  export function isa(o: any): o is CreateConfigurationSetRequest {
    return _smithy.isa(o, "CreateConfigurationSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateConfigurationSetResponse extends $MetadataBearer {
  __type?: "CreateConfigurationSetResponse";
}

export namespace CreateConfigurationSetResponse {
  export function isa(o: any): o is CreateConfigurationSetResponse {
    return _smithy.isa(o, "CreateConfigurationSetResponse");
  }
}

/**
 * <p>Represents a request to create an open and click tracking option object in a
 *             configuration set. </p>
 */
export interface CreateConfigurationSetTrackingOptionsRequest {
  __type?: "CreateConfigurationSetTrackingOptionsRequest";
  /**
   * <p>The name of the configuration set that the tracking options should be associated
   *             with.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This
   *             domain captures open and click events generated by Amazon SES emails.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring
   *                 Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TrackingOptions: TrackingOptions | undefined;
}

export namespace CreateConfigurationSetTrackingOptionsRequest {
  export function isa(
    o: any
  ): o is CreateConfigurationSetTrackingOptionsRequest {
    return _smithy.isa(o, "CreateConfigurationSetTrackingOptionsRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateConfigurationSetTrackingOptionsResponse
  extends $MetadataBearer {
  __type?: "CreateConfigurationSetTrackingOptionsResponse";
}

export namespace CreateConfigurationSetTrackingOptionsResponse {
  export function isa(
    o: any
  ): o is CreateConfigurationSetTrackingOptionsResponse {
    return _smithy.isa(o, "CreateConfigurationSetTrackingOptionsResponse");
  }
}

/**
 * <p>Represents a request to create a custom verification email template.</p>
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  __type?: "CreateCustomVerificationEmailTemplateRequest";
  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;
}

export namespace CreateCustomVerificationEmailTemplateRequest {
  export function isa(
    o: any
  ): o is CreateCustomVerificationEmailTemplateRequest {
    return _smithy.isa(o, "CreateCustomVerificationEmailTemplateRequest");
  }
}

/**
 * <p>Represents a request to create a new IP address filter. You use IP address filters
 *             when you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CreateReceiptFilterRequest {
  __type?: "CreateReceiptFilterRequest";
  /**
   * <p>A data structure that describes the IP address filter to create, which consists of a
   *             name, an IP address range, and whether to allow or block mail from it.</p>
   */
  Filter: ReceiptFilter | undefined;
}

export namespace CreateReceiptFilterRequest {
  export function isa(o: any): o is CreateReceiptFilterRequest {
    return _smithy.isa(o, "CreateReceiptFilterRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateReceiptFilterResponse extends $MetadataBearer {
  __type?: "CreateReceiptFilterResponse";
}

export namespace CreateReceiptFilterResponse {
  export function isa(o: any): o is CreateReceiptFilterResponse {
    return _smithy.isa(o, "CreateReceiptFilterResponse");
  }
}

/**
 * <p>Represents a request to create a receipt rule. You use receipt rules to receive email
 *             with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CreateReceiptRuleRequest {
  __type?: "CreateReceiptRuleRequest";
  /**
   * <p>The name of an existing rule after which the new rule will be placed. If this
   *             parameter is null, the new rule will be inserted at the beginning of the rule
   *             list.</p>
   */
  After?: string;

  /**
   * <p>A data structure that contains the specified rule's name, actions, recipients,
   *             domains, enabled status, scan status, and TLS policy.</p>
   */
  Rule: ReceiptRule | undefined;

  /**
   * <p>The name of the rule set that the receipt rule will be added to.</p>
   */
  RuleSetName: string | undefined;
}

export namespace CreateReceiptRuleRequest {
  export function isa(o: any): o is CreateReceiptRuleRequest {
    return _smithy.isa(o, "CreateReceiptRuleRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateReceiptRuleResponse extends $MetadataBearer {
  __type?: "CreateReceiptRuleResponse";
}

export namespace CreateReceiptRuleResponse {
  export function isa(o: any): o is CreateReceiptRuleResponse {
    return _smithy.isa(o, "CreateReceiptRuleResponse");
  }
}

/**
 * <p>Represents a request to create an empty receipt rule set. You use receipt rule sets to
 *             receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CreateReceiptRuleSetRequest {
  __type?: "CreateReceiptRuleSetRequest";
  /**
   * <p>The name of the rule set to create. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Start and end with a letter or number.</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  RuleSetName: string | undefined;
}

export namespace CreateReceiptRuleSetRequest {
  export function isa(o: any): o is CreateReceiptRuleSetRequest {
    return _smithy.isa(o, "CreateReceiptRuleSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface CreateReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "CreateReceiptRuleSetResponse";
}

export namespace CreateReceiptRuleSetResponse {
  export function isa(o: any): o is CreateReceiptRuleSetResponse {
    return _smithy.isa(o, "CreateReceiptRuleSetResponse");
  }
}

/**
 * <p>Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface CreateTemplateRequest {
  __type?: "CreateTemplateRequest";
  /**
   * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
   *             part.</p>
   */
  Template: Template | undefined;
}

export namespace CreateTemplateRequest {
  export function isa(o: any): o is CreateTemplateRequest {
    return _smithy.isa(o, "CreateTemplateRequest");
  }
}

export interface CreateTemplateResponse extends $MetadataBearer {
  __type?: "CreateTemplateResponse";
}

export namespace CreateTemplateResponse {
  export function isa(o: any): o is CreateTemplateResponse {
    return _smithy.isa(o, "CreateTemplateResponse");
  }
}

export enum CustomMailFromStatus {
  Failed = "Failed",
  Pending = "Pending",
  Success = "Success",
  TemporaryFailure = "TemporaryFailure"
}

/**
 * <p>Indicates that custom verification email template provided content is invalid.</p>
 */
export interface CustomVerificationEmailInvalidContentException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CustomVerificationEmailInvalidContentException";
  $fault: "client";
  message?: string;
}

export namespace CustomVerificationEmailInvalidContentException {
  export function isa(
    o: any
  ): o is CustomVerificationEmailInvalidContentException {
    return _smithy.isa(o, "CustomVerificationEmailInvalidContentException");
  }
}

/**
 * <p>Contains information about a custom verification email template.</p>
 */
export interface CustomVerificationEmailTemplate {
  __type?: "CustomVerificationEmailTemplate";
  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;
}

export namespace CustomVerificationEmailTemplate {
  export function isa(o: any): o is CustomVerificationEmailTemplate {
    return _smithy.isa(o, "CustomVerificationEmailTemplate");
  }
}

/**
 * <p>Indicates that a custom verification email template with the name you specified
 *             already exists.</p>
 */
export interface CustomVerificationEmailTemplateAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CustomVerificationEmailTemplateAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Indicates that the provided custom verification email template with the specified
   *             template name already exists.</p>
   */
  CustomVerificationEmailTemplateName?: string;

  message?: string;
}

export namespace CustomVerificationEmailTemplateAlreadyExistsException {
  export function isa(
    o: any
  ): o is CustomVerificationEmailTemplateAlreadyExistsException {
    return _smithy.isa(
      o,
      "CustomVerificationEmailTemplateAlreadyExistsException"
    );
  }
}

/**
 * <p>Indicates that a custom verification email template with the name you specified does
 *             not exist.</p>
 */
export interface CustomVerificationEmailTemplateDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CustomVerificationEmailTemplateDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that the provided custom verification email template does not exist.</p>
   */
  CustomVerificationEmailTemplateName?: string;

  message?: string;
}

export namespace CustomVerificationEmailTemplateDoesNotExistException {
  export function isa(
    o: any
  ): o is CustomVerificationEmailTemplateDoesNotExistException {
    return _smithy.isa(
      o,
      "CustomVerificationEmailTemplateDoesNotExistException"
    );
  }
}

/**
 * <p>Represents a request to delete a configuration set event destination. Configuration
 *             set event destinations are associated with configuration sets, which enable you to
 *             publish email sending events. For information about using configuration sets, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  __type?: "DeleteConfigurationSetEventDestinationRequest";
  /**
   * <p>The name of the configuration set from which to delete the event destination.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination to delete.</p>
   */
  EventDestinationName: string | undefined;
}

export namespace DeleteConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "DeleteConfigurationSetEventDestinationRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "DeleteConfigurationSetEventDestinationResponse";
}

export namespace DeleteConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "DeleteConfigurationSetEventDestinationResponse");
  }
}

/**
 * <p>Represents a request to delete a configuration set. Configuration sets enable you to
 *             publish email sending events. For information about using configuration sets, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteConfigurationSetRequest {
  __type?: "DeleteConfigurationSetRequest";
  /**
   * <p>The name of the configuration set to delete.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetRequest {
  export function isa(o: any): o is DeleteConfigurationSetRequest {
    return _smithy.isa(o, "DeleteConfigurationSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteConfigurationSetResponse extends $MetadataBearer {
  __type?: "DeleteConfigurationSetResponse";
}

export namespace DeleteConfigurationSetResponse {
  export function isa(o: any): o is DeleteConfigurationSetResponse {
    return _smithy.isa(o, "DeleteConfigurationSetResponse");
  }
}

/**
 * <p>Represents a request to delete open and click tracking options in a configuration set.
 *         </p>
 */
export interface DeleteConfigurationSetTrackingOptionsRequest {
  __type?: "DeleteConfigurationSetTrackingOptionsRequest";
  /**
   * <p>The name of the configuration set from which you want to delete the tracking
   *             options.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetTrackingOptionsRequest {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetTrackingOptionsRequest {
    return _smithy.isa(o, "DeleteConfigurationSetTrackingOptionsRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteConfigurationSetTrackingOptionsResponse
  extends $MetadataBearer {
  __type?: "DeleteConfigurationSetTrackingOptionsResponse";
}

export namespace DeleteConfigurationSetTrackingOptionsResponse {
  export function isa(
    o: any
  ): o is DeleteConfigurationSetTrackingOptionsResponse {
    return _smithy.isa(o, "DeleteConfigurationSetTrackingOptionsResponse");
  }
}

/**
 * <p>Represents a request to delete an existing custom verification email template.</p>
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  __type?: "DeleteCustomVerificationEmailTemplateRequest";
  /**
   * <p>The name of the custom verification email template that you want to delete.</p>
   */
  TemplateName: string | undefined;
}

export namespace DeleteCustomVerificationEmailTemplateRequest {
  export function isa(
    o: any
  ): o is DeleteCustomVerificationEmailTemplateRequest {
    return _smithy.isa(o, "DeleteCustomVerificationEmailTemplateRequest");
  }
}

/**
 * <p>Represents a request to delete a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteIdentityPolicyRequest {
  __type?: "DeleteIdentityPolicyRequest";
  /**
   * <p>The identity that is associated with the policy that you want to delete. You can
   *             specify the identity by using its name or by using its Amazon Resource Name (ARN).
   *             Examples: <code>user@example.com</code>, <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   *         <p>To successfully call this API, you must own the identity.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The name of the policy to be deleted.</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteIdentityPolicyRequest {
  export function isa(o: any): o is DeleteIdentityPolicyRequest {
    return _smithy.isa(o, "DeleteIdentityPolicyRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteIdentityPolicyResponse extends $MetadataBearer {
  __type?: "DeleteIdentityPolicyResponse";
}

export namespace DeleteIdentityPolicyResponse {
  export function isa(o: any): o is DeleteIdentityPolicyResponse {
    return _smithy.isa(o, "DeleteIdentityPolicyResponse");
  }
}

/**
 * <p>Represents a request to delete one of your Amazon SES identities (an email address or
 *             domain).</p>
 */
export interface DeleteIdentityRequest {
  __type?: "DeleteIdentityRequest";
  /**
   * <p>The identity to be removed from the list of identities for the AWS Account.</p>
   */
  Identity: string | undefined;
}

export namespace DeleteIdentityRequest {
  export function isa(o: any): o is DeleteIdentityRequest {
    return _smithy.isa(o, "DeleteIdentityRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteIdentityResponse extends $MetadataBearer {
  __type?: "DeleteIdentityResponse";
}

export namespace DeleteIdentityResponse {
  export function isa(o: any): o is DeleteIdentityResponse {
    return _smithy.isa(o, "DeleteIdentityResponse");
  }
}

/**
 * <p>Represents a request to delete an IP address filter. You use IP address filters when
 *             you receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteReceiptFilterRequest {
  __type?: "DeleteReceiptFilterRequest";
  /**
   * <p>The name of the IP address filter to delete.</p>
   */
  FilterName: string | undefined;
}

export namespace DeleteReceiptFilterRequest {
  export function isa(o: any): o is DeleteReceiptFilterRequest {
    return _smithy.isa(o, "DeleteReceiptFilterRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteReceiptFilterResponse extends $MetadataBearer {
  __type?: "DeleteReceiptFilterResponse";
}

export namespace DeleteReceiptFilterResponse {
  export function isa(o: any): o is DeleteReceiptFilterResponse {
    return _smithy.isa(o, "DeleteReceiptFilterResponse");
  }
}

/**
 * <p>Represents a request to delete a receipt rule. You use receipt rules to receive email
 *             with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteReceiptRuleRequest {
  __type?: "DeleteReceiptRuleRequest";
  /**
   * <p>The name of the receipt rule to delete.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The name of the receipt rule set that contains the receipt rule to delete.</p>
   */
  RuleSetName: string | undefined;
}

export namespace DeleteReceiptRuleRequest {
  export function isa(o: any): o is DeleteReceiptRuleRequest {
    return _smithy.isa(o, "DeleteReceiptRuleRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteReceiptRuleResponse extends $MetadataBearer {
  __type?: "DeleteReceiptRuleResponse";
}

export namespace DeleteReceiptRuleResponse {
  export function isa(o: any): o is DeleteReceiptRuleResponse {
    return _smithy.isa(o, "DeleteReceiptRuleResponse");
  }
}

/**
 * <p>Represents a request to delete a receipt rule set and all of the receipt rules it
 *             contains. You use receipt rule sets to receive email with Amazon SES. For more information,
 *             see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteReceiptRuleSetRequest {
  __type?: "DeleteReceiptRuleSetRequest";
  /**
   * <p>The name of the receipt rule set to delete.</p>
   */
  RuleSetName: string | undefined;
}

export namespace DeleteReceiptRuleSetRequest {
  export function isa(o: any): o is DeleteReceiptRuleSetRequest {
    return _smithy.isa(o, "DeleteReceiptRuleSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface DeleteReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "DeleteReceiptRuleSetResponse";
}

export namespace DeleteReceiptRuleSetResponse {
  export function isa(o: any): o is DeleteReceiptRuleSetResponse {
    return _smithy.isa(o, "DeleteReceiptRuleSetResponse");
  }
}

/**
 * <p>Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteTemplateRequest {
  __type?: "DeleteTemplateRequest";
  /**
   * <p>The name of the template to be deleted.</p>
   */
  TemplateName: string | undefined;
}

export namespace DeleteTemplateRequest {
  export function isa(o: any): o is DeleteTemplateRequest {
    return _smithy.isa(o, "DeleteTemplateRequest");
  }
}

export interface DeleteTemplateResponse extends $MetadataBearer {
  __type?: "DeleteTemplateResponse";
}

export namespace DeleteTemplateResponse {
  export function isa(o: any): o is DeleteTemplateResponse {
    return _smithy.isa(o, "DeleteTemplateResponse");
  }
}

/**
 * <p>Represents a request to delete an email address from the list of email addresses you
 *             have attempted to verify under your AWS account.</p>
 */
export interface DeleteVerifiedEmailAddressRequest {
  __type?: "DeleteVerifiedEmailAddressRequest";
  /**
   * <p>An email address to be removed from the list of verified addresses.</p>
   */
  EmailAddress: string | undefined;
}

export namespace DeleteVerifiedEmailAddressRequest {
  export function isa(o: any): o is DeleteVerifiedEmailAddressRequest {
    return _smithy.isa(o, "DeleteVerifiedEmailAddressRequest");
  }
}

/**
 * <p>Specifies whether messages that use the configuration set are required to use
 *             Transport Layer Security (TLS).</p>
 */
export interface DeliveryOptions {
  __type?: "DeliveryOptions";
  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy | string;
}

export namespace DeliveryOptions {
  export function isa(o: any): o is DeliveryOptions {
    return _smithy.isa(o, "DeliveryOptions");
  }
}

/**
 * <p>Represents a request to return the metadata and receipt rules for the receipt rule set
 *             that is currently active. You use receipt rule sets to receive email with Amazon SES. For
 *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DescribeActiveReceiptRuleSetRequest {
  __type?: "DescribeActiveReceiptRuleSetRequest";
}

export namespace DescribeActiveReceiptRuleSetRequest {
  export function isa(o: any): o is DescribeActiveReceiptRuleSetRequest {
    return _smithy.isa(o, "DescribeActiveReceiptRuleSetRequest");
  }
}

/**
 * <p>Represents the metadata and receipt rules for the receipt rule set that is currently
 *             active.</p>
 */
export interface DescribeActiveReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "DescribeActiveReceiptRuleSetResponse";
  /**
   * <p>The metadata for the currently active receipt rule set. The metadata consists of the
   *             rule set name and a timestamp of when the rule set was created.</p>
   */
  Metadata?: ReceiptRuleSetMetadata;

  /**
   * <p>The receipt rules that belong to the active rule set.</p>
   */
  Rules?: Array<ReceiptRule>;
}

export namespace DescribeActiveReceiptRuleSetResponse {
  export function isa(o: any): o is DescribeActiveReceiptRuleSetResponse {
    return _smithy.isa(o, "DescribeActiveReceiptRuleSetResponse");
  }
}

/**
 * <p>Represents a request to return the details of a configuration set. Configuration sets
 *             enable you to publish email sending events. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DescribeConfigurationSetRequest {
  __type?: "DescribeConfigurationSetRequest";
  /**
   * <p>A list of configuration set attributes to return.</p>
   */
  ConfigurationSetAttributeNames?: Array<ConfigurationSetAttribute | string>;

  /**
   * <p>The name of the configuration set to describe.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace DescribeConfigurationSetRequest {
  export function isa(o: any): o is DescribeConfigurationSetRequest {
    return _smithy.isa(o, "DescribeConfigurationSetRequest");
  }
}

/**
 * <p>Represents the details of a configuration set. Configuration sets enable you to
 *             publish email sending events. For information about using configuration sets, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DescribeConfigurationSetResponse extends $MetadataBearer {
  __type?: "DescribeConfigurationSetResponse";
  /**
   * <p>The configuration set object associated with the specified configuration set.</p>
   */
  ConfigurationSet?: ConfigurationSet;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS).</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * <p>A list of event destinations associated with the configuration set. </p>
   */
  EventDestinations?: Array<EventDestination>;

  /**
   * <p>An object that represents the reputation settings for the configuration set. </p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>The name of the custom open and click tracking domain associated with the
   *             configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;
}

export namespace DescribeConfigurationSetResponse {
  export function isa(o: any): o is DescribeConfigurationSetResponse {
    return _smithy.isa(o, "DescribeConfigurationSetResponse");
  }
}

/**
 * <p>Represents a request to return the details of a receipt rule. You use receipt rules to
 *             receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DescribeReceiptRuleRequest {
  __type?: "DescribeReceiptRuleRequest";
  /**
   * <p>The name of the receipt rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The name of the receipt rule set that the receipt rule belongs to.</p>
   */
  RuleSetName: string | undefined;
}

export namespace DescribeReceiptRuleRequest {
  export function isa(o: any): o is DescribeReceiptRuleRequest {
    return _smithy.isa(o, "DescribeReceiptRuleRequest");
  }
}

/**
 * <p>Represents the details of a receipt rule.</p>
 */
export interface DescribeReceiptRuleResponse extends $MetadataBearer {
  __type?: "DescribeReceiptRuleResponse";
  /**
   * <p>A data structure that contains the specified receipt rule's name, actions, recipients,
   *             domains, enabled status, scan status, and Transport Layer Security (TLS) policy.</p>
   */
  Rule?: ReceiptRule;
}

export namespace DescribeReceiptRuleResponse {
  export function isa(o: any): o is DescribeReceiptRuleResponse {
    return _smithy.isa(o, "DescribeReceiptRuleResponse");
  }
}

/**
 * <p>Represents a request to return the details of a receipt rule set. You use receipt rule
 *             sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DescribeReceiptRuleSetRequest {
  __type?: "DescribeReceiptRuleSetRequest";
  /**
   * <p>The name of the receipt rule set to describe.</p>
   */
  RuleSetName: string | undefined;
}

export namespace DescribeReceiptRuleSetRequest {
  export function isa(o: any): o is DescribeReceiptRuleSetRequest {
    return _smithy.isa(o, "DescribeReceiptRuleSetRequest");
  }
}

/**
 * <p>Represents the details of the specified receipt rule set.</p>
 */
export interface DescribeReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "DescribeReceiptRuleSetResponse";
  /**
   * <p>The metadata for the receipt rule set, which consists of the rule set name and the
   *             timestamp of when the rule set was created.</p>
   */
  Metadata?: ReceiptRuleSetMetadata;

  /**
   * <p>A list of the receipt rules that belong to the specified receipt rule set.</p>
   */
  Rules?: Array<ReceiptRule>;
}

export namespace DescribeReceiptRuleSetResponse {
  export function isa(o: any): o is DescribeReceiptRuleSetResponse {
    return _smithy.isa(o, "DescribeReceiptRuleSetResponse");
  }
}

/**
 * <p>Represents the destination of the message, consisting of To:, CC:, and BCC:
 *             fields.</p>
 *         <note>
 *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
 *                     <i>local part</i> of a destination email address (the part of the
 *                 email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
 *                     characters</a>. If the <i>domain part</i> of an address (the
 *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
 *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p>
 *         </note>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>The recipients to place on the BCC: line of the message.</p>
   */
  BccAddresses?: Array<string>;

  /**
   * <p>The recipients to place on the CC: line of the message.</p>
   */
  CcAddresses?: Array<string>;

  /**
   * <p>The recipients to place on the To: line of the message.</p>
   */
  ToAddresses?: Array<string>;
}

export namespace Destination {
  export function isa(o: any): o is Destination {
    return _smithy.isa(o, "Destination");
  }
}

export enum DimensionValueSource {
  EMAIL_HEADER = "emailHeader",
  LINK_TAG = "linkTag",
  MESSAGE_TAG = "messageTag"
}

export enum DsnAction {
  DELAYED = "delayed",
  DELIVERED = "delivered",
  EXPANDED = "expanded",
  FAILED = "failed",
  RELAYED = "relayed"
}

/**
 * <p>Contains information about the event destination that the specified email sending
 *             events will be published to.</p>
 *         <note>
 *             <p>When you create or update an event destination, you must provide one, and only
 *                 one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p>
 *         </note>
 *         <p>Event destinations are associated with configuration sets, which enable you to publish
 *             email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about
 *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface EventDestination {
  __type?: "EventDestination";
  /**
   * <p>An object that contains the names, default values, and sources of the dimensions
   *             associated with an Amazon CloudWatch event destination.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * <p>Sets whether Amazon SES publishes events to this destination when you send an email with
   *             the associated configuration set. Set to <code>true</code> to enable publishing to this
   *             destination; set to <code>false</code> to prevent publishing to this destination. The
   *             default value is <code>false</code>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An object that contains the delivery stream ARN and the IAM role ARN associated with
   *             an Amazon Kinesis Firehose event destination.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>The type of email sending events to publish to the event destination.</p>
   */
  MatchingEventTypes: Array<EventType | string> | undefined;

  /**
   * <p>The name of the event destination. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * <p>An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event
   *             destination.</p>
   */
  SNSDestination?: SNSDestination;
}

export namespace EventDestination {
  export function isa(o: any): o is EventDestination {
    return _smithy.isa(o, "EventDestination");
  }
}

/**
 * <p>Indicates that the event destination could not be created because of a naming
 *             conflict.</p>
 */
export interface EventDestinationAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "EventDestinationAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;

  message?: string;
}

export namespace EventDestinationAlreadyExistsException {
  export function isa(o: any): o is EventDestinationAlreadyExistsException {
    return _smithy.isa(o, "EventDestinationAlreadyExistsException");
  }
}

/**
 * <p>Indicates that the event destination does not exist.</p>
 */
export interface EventDestinationDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "EventDestinationDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;

  message?: string;
}

export namespace EventDestinationDoesNotExistException {
  export function isa(o: any): o is EventDestinationDoesNotExistException {
    return _smithy.isa(o, "EventDestinationDoesNotExistException");
  }
}

export enum EventType {
  BOUNCE = "bounce",
  CLICK = "click",
  COMPLAINT = "complaint",
  DELIVERY = "delivery",
  OPEN = "open",
  REJECT = "reject",
  RENDERING_FAILURE = "renderingFailure",
  SEND = "send"
}

/**
 * <p>Additional X-headers to include in the Delivery Status Notification (DSN) when an
 *             email that Amazon SES receives on your behalf bounces.</p>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface ExtensionField {
  __type?: "ExtensionField";
  /**
   * <p>The name of the header to add. Must be between 1 and 50 characters, inclusive, and
   *             consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the header to add. Must be less than 2048 characters, and must not
   *             contain newline characters ("\r" or "\n").</p>
   */
  Value: string | undefined;
}

export namespace ExtensionField {
  export function isa(o: any): o is ExtensionField {
    return _smithy.isa(o, "ExtensionField");
  }
}

/**
 * <p>Indicates that the sender address specified for a custom verification email is not
 *             verified, and is therefore not eligible to send the custom verification email. </p>
 */
export interface FromEmailAddressNotVerifiedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FromEmailAddressNotVerifiedException";
  $fault: "client";
  /**
   * <p>Indicates that the from email address associated with the custom verification email
   *             template is not verified.</p>
   */
  FromEmailAddress?: string;

  message?: string;
}

export namespace FromEmailAddressNotVerifiedException {
  export function isa(o: any): o is FromEmailAddressNotVerifiedException {
    return _smithy.isa(o, "FromEmailAddressNotVerifiedException");
  }
}

/**
 * <p>Represents a request to return the email sending status for your Amazon SES account in the
 *             current AWS Region.</p>
 */
export interface GetAccountSendingEnabledResponse extends $MetadataBearer {
  __type?: "GetAccountSendingEnabledResponse";
  /**
   * <p>Describes whether email sending is enabled or disabled for your Amazon SES account in the
   *             current AWS Region.</p>
   */
  Enabled?: boolean;
}

export namespace GetAccountSendingEnabledResponse {
  export function isa(o: any): o is GetAccountSendingEnabledResponse {
    return _smithy.isa(o, "GetAccountSendingEnabledResponse");
  }
}

/**
 * <p>Represents a request to retrieve an existing custom verification email
 *             template.</p>
 */
export interface GetCustomVerificationEmailTemplateRequest {
  __type?: "GetCustomVerificationEmailTemplateRequest";
  /**
   * <p>The name of the custom verification email template that you want to retrieve.</p>
   */
  TemplateName: string | undefined;
}

export namespace GetCustomVerificationEmailTemplateRequest {
  export function isa(o: any): o is GetCustomVerificationEmailTemplateRequest {
    return _smithy.isa(o, "GetCustomVerificationEmailTemplateRequest");
  }
}

/**
 * <p>The content of the custom verification email template.</p>
 */
export interface GetCustomVerificationEmailTemplateResponse
  extends $MetadataBearer {
  __type?: "GetCustomVerificationEmailTemplateResponse";
  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The content of the custom verification email.</p>
   */
  TemplateContent?: string;

  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;
}

export namespace GetCustomVerificationEmailTemplateResponse {
  export function isa(o: any): o is GetCustomVerificationEmailTemplateResponse {
    return _smithy.isa(o, "GetCustomVerificationEmailTemplateResponse");
  }
}

/**
 * <p>Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For
 *             domain identities, this request also returns the DKIM tokens that are required for Easy
 *             DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
 *             For more information about Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
 */
export interface GetIdentityDkimAttributesRequest {
  __type?: "GetIdentityDkimAttributesRequest";
  /**
   * <p>A list of one or more verified identities - email addresses, domains, or both.</p>
   */
  Identities: Array<string> | undefined;
}

export namespace GetIdentityDkimAttributesRequest {
  export function isa(o: any): o is GetIdentityDkimAttributesRequest {
    return _smithy.isa(o, "GetIdentityDkimAttributesRequest");
  }
}

/**
 * <p>Represents the status of Amazon SES Easy DKIM signing for an identity. For domain
 *             identities, this response also contains the DKIM tokens that are required for Easy DKIM
 *             signing, and whether Amazon SES successfully verified that these tokens were
 *             published.</p>
 */
export interface GetIdentityDkimAttributesResponse extends $MetadataBearer {
  __type?: "GetIdentityDkimAttributesResponse";
  /**
   * <p>The DKIM attributes for an email address or a domain.</p>
   */
  DkimAttributes: { [key: string]: IdentityDkimAttributes } | undefined;
}

export namespace GetIdentityDkimAttributesResponse {
  export function isa(o: any): o is GetIdentityDkimAttributesResponse {
    return _smithy.isa(o, "GetIdentityDkimAttributesResponse");
  }
}

/**
 * <p>Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of
 *             identities. For information about using a custom MAIL FROM domain, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface GetIdentityMailFromDomainAttributesRequest {
  __type?: "GetIdentityMailFromDomainAttributesRequest";
  /**
   * <p>A list of one or more identities.</p>
   */
  Identities: Array<string> | undefined;
}

export namespace GetIdentityMailFromDomainAttributesRequest {
  export function isa(o: any): o is GetIdentityMailFromDomainAttributesRequest {
    return _smithy.isa(o, "GetIdentityMailFromDomainAttributesRequest");
  }
}

/**
 * <p>Represents the custom MAIL FROM attributes for a list of identities.</p>
 */
export interface GetIdentityMailFromDomainAttributesResponse
  extends $MetadataBearer {
  __type?: "GetIdentityMailFromDomainAttributesResponse";
  /**
   * <p>A map of identities to custom MAIL FROM attributes.</p>
   */
  MailFromDomainAttributes:
    | { [key: string]: IdentityMailFromDomainAttributes }
    | undefined;
}

export namespace GetIdentityMailFromDomainAttributesResponse {
  export function isa(
    o: any
  ): o is GetIdentityMailFromDomainAttributesResponse {
    return _smithy.isa(o, "GetIdentityMailFromDomainAttributesResponse");
  }
}

/**
 * <p>Represents a request to return the notification attributes for a list of identities
 *             you verified with Amazon SES. For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface GetIdentityNotificationAttributesRequest {
  __type?: "GetIdentityNotificationAttributesRequest";
  /**
   * <p>A list of one or more identities. You can specify an identity by using its name or by
   *             using its Amazon Resource Name (ARN). Examples: <code>user@example.com</code>,
   *                 <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   */
  Identities: Array<string> | undefined;
}

export namespace GetIdentityNotificationAttributesRequest {
  export function isa(o: any): o is GetIdentityNotificationAttributesRequest {
    return _smithy.isa(o, "GetIdentityNotificationAttributesRequest");
  }
}

/**
 * <p>Represents the notification attributes for a list of identities.</p>
 */
export interface GetIdentityNotificationAttributesResponse
  extends $MetadataBearer {
  __type?: "GetIdentityNotificationAttributesResponse";
  /**
   * <p>A map of Identity to IdentityNotificationAttributes.</p>
   */
  NotificationAttributes:
    | { [key: string]: IdentityNotificationAttributes }
    | undefined;
}

export namespace GetIdentityNotificationAttributesResponse {
  export function isa(o: any): o is GetIdentityNotificationAttributesResponse {
    return _smithy.isa(o, "GetIdentityNotificationAttributesResponse");
  }
}

/**
 * <p>Represents a request to return the requested sending authorization policies for an
 *             identity. Sending authorization is an Amazon SES feature that enables you to authorize other
 *             senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface GetIdentityPoliciesRequest {
  __type?: "GetIdentityPoliciesRequest";
  /**
   * <p>The identity for which the policies will be retrieved. You can specify an identity by
   *             using its name or by using its Amazon Resource Name (ARN). Examples:
   *                 <code>user@example.com</code>, <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   *         <p>To successfully call this API, you must own the identity.</p>
   */
  Identity: string | undefined;

  /**
   * <p>A list of the names of policies to be retrieved. You can retrieve a maximum of 20
   *             policies at a time. If you do not know the names of the policies that are attached to
   *             the identity, you can use <code>ListIdentityPolicies</code>.</p>
   */
  PolicyNames: Array<string> | undefined;
}

export namespace GetIdentityPoliciesRequest {
  export function isa(o: any): o is GetIdentityPoliciesRequest {
    return _smithy.isa(o, "GetIdentityPoliciesRequest");
  }
}

/**
 * <p>Represents the requested sending authorization policies.</p>
 */
export interface GetIdentityPoliciesResponse extends $MetadataBearer {
  __type?: "GetIdentityPoliciesResponse";
  /**
   * <p>A map of policy names to policies.</p>
   */
  Policies: { [key: string]: string } | undefined;
}

export namespace GetIdentityPoliciesResponse {
  export function isa(o: any): o is GetIdentityPoliciesResponse {
    return _smithy.isa(o, "GetIdentityPoliciesResponse");
  }
}

/**
 * <p>Represents a request to return the Amazon SES verification status of a list of identities.
 *             For domain identities, this request also returns the verification token. For information
 *             about verifying identities with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface GetIdentityVerificationAttributesRequest {
  __type?: "GetIdentityVerificationAttributesRequest";
  /**
   * <p>A list of identities.</p>
   */
  Identities: Array<string> | undefined;
}

export namespace GetIdentityVerificationAttributesRequest {
  export function isa(o: any): o is GetIdentityVerificationAttributesRequest {
    return _smithy.isa(o, "GetIdentityVerificationAttributesRequest");
  }
}

/**
 * <p>The Amazon SES verification status of a list of identities. For domain identities, this
 *             response also contains the verification token.</p>
 */
export interface GetIdentityVerificationAttributesResponse
  extends $MetadataBearer {
  __type?: "GetIdentityVerificationAttributesResponse";
  /**
   * <p>A map of Identities to IdentityVerificationAttributes objects.</p>
   */
  VerificationAttributes:
    | { [key: string]: IdentityVerificationAttributes }
    | undefined;
}

export namespace GetIdentityVerificationAttributesResponse {
  export function isa(o: any): o is GetIdentityVerificationAttributesResponse {
    return _smithy.isa(o, "GetIdentityVerificationAttributesResponse");
  }
}

/**
 * <p>Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails
 *             you have sent in the last 24 hours.</p>
 */
export interface GetSendQuotaResponse extends $MetadataBearer {
  __type?: "GetSendQuotaResponse";
  /**
   * <p>The maximum number of emails the user is allowed to send in a 24-hour interval. A
   *             value of -1 signifies an unlimited quota.</p>
   */
  Max24HourSend?: number;

  /**
   * <p>The maximum number of emails that Amazon SES can accept from the user's account per
   *             second.</p>
   *         <note>
   *             <p>The rate at which Amazon SES accepts the user's messages might be less than the maximum
   *                 send rate.</p>
   *         </note>
   */
  MaxSendRate?: number;

  /**
   * <p>The number of emails sent during the previous 24 hours.</p>
   */
  SentLast24Hours?: number;
}

export namespace GetSendQuotaResponse {
  export function isa(o: any): o is GetSendQuotaResponse {
    return _smithy.isa(o, "GetSendQuotaResponse");
  }
}

/**
 * <p>Represents a list of data points. This list contains aggregated data from the previous
 *             two weeks of your sending activity with Amazon SES.</p>
 */
export interface GetSendStatisticsResponse extends $MetadataBearer {
  __type?: "GetSendStatisticsResponse";
  /**
   * <p>A list of data points, each of which represents 15 minutes of activity.</p>
   */
  SendDataPoints?: Array<SendDataPoint>;
}

export namespace GetSendStatisticsResponse {
  export function isa(o: any): o is GetSendStatisticsResponse {
    return _smithy.isa(o, "GetSendStatisticsResponse");
  }
}

export interface GetTemplateRequest {
  __type?: "GetTemplateRequest";
  /**
   * <p>The name of the template you want to retrieve.</p>
   */
  TemplateName: string | undefined;
}

export namespace GetTemplateRequest {
  export function isa(o: any): o is GetTemplateRequest {
    return _smithy.isa(o, "GetTemplateRequest");
  }
}

export interface GetTemplateResponse extends $MetadataBearer {
  __type?: "GetTemplateResponse";
  /**
   * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
   *             part.</p>
   */
  Template?: Template;
}

export namespace GetTemplateResponse {
  export function isa(o: any): o is GetTemplateResponse {
    return _smithy.isa(o, "GetTemplateResponse");
  }
}

/**
 * <p>Represents the DKIM attributes of a verified email address or a domain.</p>
 */
export interface IdentityDkimAttributes {
  __type?: "IdentityDkimAttributes";
  /**
   * <p>Is true if DKIM signing is enabled for email sent from the identity. It's false
   *             otherwise. The default value is true.</p>
   */
  DkimEnabled: boolean | undefined;

  /**
   * <p>A set of character strings that represent the domain's identity. Using these tokens,
   *             you need to create DNS CNAME records that point to DKIM public keys that are hosted by
   *             Amazon SES. Amazon Web Services eventually detects that you've updated your DNS records. This detection
   *             process might take up to 72 hours. After successful detection, Amazon SES is able to
   *             DKIM-sign email originating from that domain. (This only applies to domain identities,
   *             not email address identities.)</p>
   *         <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  DkimTokens?: Array<string>;

  /**
   * <p>Describes whether Amazon SES has successfully verified the DKIM DNS records (tokens)
   *             published in the domain name's DNS. (This only applies to domain identities, not email
   *             address identities.)</p>
   */
  DkimVerificationStatus: VerificationStatus | string | undefined;
}

export namespace IdentityDkimAttributes {
  export function isa(o: any): o is IdentityDkimAttributes {
    return _smithy.isa(o, "IdentityDkimAttributes");
  }
}

/**
 * <p>Represents the custom MAIL FROM domain attributes of a verified identity (email
 *             address or domain).</p>
 */
export interface IdentityMailFromDomainAttributes {
  __type?: "IdentityMailFromDomainAttributes";
  /**
   * <p>The action that Amazon SES takes if it cannot successfully read the required MX record when
   *             you send an email. A value of <code>UseDefaultValue</code> indicates that if Amazon SES
   *             cannot read the required MX record, it uses amazonses.com (or a subdomain of that) as
   *             the MAIL FROM domain. A value of <code>RejectMessage</code> indicates that if Amazon SES
   *             cannot read the required MX record, Amazon SES returns a
   *                 <code>MailFromDomainNotVerified</code> error and does not send the email.</p>
   *         <p>The custom MAIL FROM setup states that result in this behavior are
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>.</p>
   */
  BehaviorOnMXFailure: BehaviorOnMXFailure | string | undefined;

  /**
   * <p>The custom MAIL FROM domain that the identity is configured to use.</p>
   */
  MailFromDomain: string | undefined;

  /**
   * <p>The state that indicates whether Amazon SES has successfully read the MX record required
   *             for custom MAIL FROM domain setup. If the state is <code>Success</code>, Amazon SES uses the
   *             specified custom MAIL FROM domain when the verified identity sends an email. All other
   *             states indicate that Amazon SES takes the action described by
   *                 <code>BehaviorOnMXFailure</code>.</p>
   */
  MailFromDomainStatus: CustomMailFromStatus | string | undefined;
}

export namespace IdentityMailFromDomainAttributes {
  export function isa(o: any): o is IdentityMailFromDomainAttributes {
    return _smithy.isa(o, "IdentityMailFromDomainAttributes");
  }
}

/**
 * <p>Represents the notification attributes of an identity, including whether an identity
 *             has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications,
 *             and whether feedback forwarding is enabled for bounce and complaint
 *             notifications.</p>
 */
export interface IdentityNotificationAttributes {
  __type?: "IdentityNotificationAttributes";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish bounce
   *             notifications.</p>
   */
  BounceTopic: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish complaint
   *             notifications.</p>
   */
  ComplaintTopic: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES will publish delivery
   *             notifications.</p>
   */
  DeliveryTopic: string | undefined;

  /**
   * <p>Describes whether Amazon SES will forward bounce and complaint notifications as email.
   *                 <code>true</code> indicates that Amazon SES will forward bounce and complaint
   *             notifications as email, while <code>false</code> indicates that bounce and complaint
   *             notifications will be published only to the specified bounce and complaint Amazon SNS
   *             topics.</p>
   */
  ForwardingEnabled: boolean | undefined;

  /**
   * <p>Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of
   *             type <code>Bounce</code>. A value of <code>true</code> specifies that Amazon SES will include
   *             headers in bounce notifications, and a value of <code>false</code> specifies that Amazon SES
   *             will not include headers in bounce notifications.</p>
   */
  HeadersInBounceNotificationsEnabled?: boolean;

  /**
   * <p>Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of
   *             type <code>Complaint</code>. A value of <code>true</code> specifies that Amazon SES will
   *             include headers in complaint notifications, and a value of <code>false</code> specifies
   *             that Amazon SES will not include headers in complaint notifications.</p>
   */
  HeadersInComplaintNotificationsEnabled?: boolean;

  /**
   * <p>Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of
   *             type <code>Delivery</code>. A value of <code>true</code> specifies that Amazon SES will
   *             include headers in delivery notifications, and a value of <code>false</code> specifies
   *             that Amazon SES will not include headers in delivery notifications.</p>
   */
  HeadersInDeliveryNotificationsEnabled?: boolean;
}

export namespace IdentityNotificationAttributes {
  export function isa(o: any): o is IdentityNotificationAttributes {
    return _smithy.isa(o, "IdentityNotificationAttributes");
  }
}

export type IdentityType = "Domain" | "EmailAddress";

/**
 * <p>Represents the verification attributes of a single identity.</p>
 */
export interface IdentityVerificationAttributes {
  __type?: "IdentityVerificationAttributes";
  /**
   * <p>The verification status of the identity: "Pending", "Success", "Failed", or
   *             "TemporaryFailure".</p>
   */
  VerificationStatus: VerificationStatus | string | undefined;

  /**
   * <p>The verification token for a domain identity. Null for email address
   *             identities.</p>
   */
  VerificationToken?: string;
}

export namespace IdentityVerificationAttributes {
  export function isa(o: any): o is IdentityVerificationAttributes {
    return _smithy.isa(o, "IdentityVerificationAttributes");
  }
}

/**
 * <p>Indicates that the Amazon CloudWatch destination is invalid. See the error message for
 *             details.</p>
 */
export interface InvalidCloudWatchDestinationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidCloudWatchDestinationException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;

  message?: string;
}

export namespace InvalidCloudWatchDestinationException {
  export function isa(o: any): o is InvalidCloudWatchDestinationException {
    return _smithy.isa(o, "InvalidCloudWatchDestinationException");
  }
}

/**
 * <p>Indicates that the configuration set is invalid. See the error message for
 *             details.</p>
 */
export interface InvalidConfigurationSetException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidConfigurationSetException";
  $fault: "client";
  message?: string;
}

export namespace InvalidConfigurationSetException {
  export function isa(o: any): o is InvalidConfigurationSetException {
    return _smithy.isa(o, "InvalidConfigurationSetException");
  }
}

/**
 * <p>Indicates that provided delivery option is invalid.</p>
 */
export interface InvalidDeliveryOptionsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidDeliveryOptionsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidDeliveryOptionsException {
  export function isa(o: any): o is InvalidDeliveryOptionsException {
    return _smithy.isa(o, "InvalidDeliveryOptionsException");
  }
}

/**
 * <p>Indicates that the Amazon Kinesis Firehose destination is invalid. See the error
 *             message for details.</p>
 */
export interface InvalidFirehoseDestinationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidFirehoseDestinationException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;

  message?: string;
}

export namespace InvalidFirehoseDestinationException {
  export function isa(o: any): o is InvalidFirehoseDestinationException {
    return _smithy.isa(o, "InvalidFirehoseDestinationException");
  }
}

/**
 * <p>Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could
 *             not execute the provided function, possibly due to permissions issues. For information
 *             about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface InvalidLambdaFunctionException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidLambdaFunctionException";
  $fault: "client";
  /**
   * <p>Indicates that the ARN of the function was not found.</p>
   */
  FunctionArn?: string;

  message?: string;
}

export namespace InvalidLambdaFunctionException {
  export function isa(o: any): o is InvalidLambdaFunctionException {
    return _smithy.isa(o, "InvalidLambdaFunctionException");
  }
}

/**
 * <p>Indicates that the provided policy is invalid. Check the error stack for more
 *             information about what caused the error.</p>
 */
export interface InvalidPolicyException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidPolicyException";
  $fault: "client";
  message?: string;
}

export namespace InvalidPolicyException {
  export function isa(o: any): o is InvalidPolicyException {
    return _smithy.isa(o, "InvalidPolicyException");
  }
}

/**
 * <p>Indicates that one or more of the replacement values you provided is invalid. This
 *             error may occur when the TemplateData object contains invalid JSON.</p>
 */
export interface InvalidRenderingParameterException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidRenderingParameterException";
  $fault: "client";
  TemplateName?: string;
  message?: string;
}

export namespace InvalidRenderingParameterException {
  export function isa(o: any): o is InvalidRenderingParameterException {
    return _smithy.isa(o, "InvalidRenderingParameterException");
  }
}

/**
 * <p>Indicates that the provided Amazon S3 bucket or AWS KMS encryption key is invalid, or
 *             that Amazon SES could not publish to the bucket, possibly due to permissions issues. For
 *             information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface InvalidS3ConfigurationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidS3ConfigurationException";
  $fault: "client";
  /**
   * <p>Indicated that the S3 Bucket was not found.</p>
   */
  Bucket?: string;

  message?: string;
}

export namespace InvalidS3ConfigurationException {
  export function isa(o: any): o is InvalidS3ConfigurationException {
    return _smithy.isa(o, "InvalidS3ConfigurationException");
  }
}

/**
 * <p>Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is
 *             invalid. See the error message for details.</p>
 */
export interface InvalidSNSDestinationException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidSNSDestinationException";
  $fault: "client";
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;

  message?: string;
}

export namespace InvalidSNSDestinationException {
  export function isa(o: any): o is InvalidSNSDestinationException {
    return _smithy.isa(o, "InvalidSNSDestinationException");
  }
}

/**
 * <p>Indicates that the provided Amazon SNS topic is invalid, or that Amazon SES could not
 *             publish to the topic, possibly due to permissions issues. For information about giving
 *             permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface InvalidSnsTopicException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidSnsTopicException";
  $fault: "client";
  /**
   * <p>Indicates that the topic does not exist.</p>
   */
  Topic?: string;

  message?: string;
}

export namespace InvalidSnsTopicException {
  export function isa(o: any): o is InvalidSnsTopicException {
    return _smithy.isa(o, "InvalidSnsTopicException");
  }
}

/**
 * <p>Indicates that the template that you specified could not be rendered. This issue may
 *             occur when a template refers to a partial that does not exist.</p>
 */
export interface InvalidTemplateException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidTemplateException";
  $fault: "client";
  TemplateName?: string;
  message?: string;
}

export namespace InvalidTemplateException {
  export function isa(o: any): o is InvalidTemplateException {
    return _smithy.isa(o, "InvalidTemplateException");
  }
}

/**
 * <p>Indicates that the custom domain to be used for open and click tracking redirects is
 *             invalid. This error appears most often in the following situations:</p>
 *         <ul>
 *             <li>
 *                 <p>When the tracking domain you specified is not verified in Amazon SES.</p>
 *             </li>
 *             <li>
 *                 <p>When the tracking domain you specified is not a valid domain or
 *                     subdomain.</p>
 *             </li>
 *          </ul>
 */
export interface InvalidTrackingOptionsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidTrackingOptionsException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTrackingOptionsException {
  export function isa(o: any): o is InvalidTrackingOptionsException {
    return _smithy.isa(o, "InvalidTrackingOptionsException");
  }
}

export type InvocationType = "Event" | "RequestResponse";

/**
 * <p>Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event
 *             destination.</p>
 *         <p>Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable
 *             you to publish email sending events. For information about using configuration sets, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface KinesisFirehoseDestination {
  __type?: "KinesisFirehoseDestination";
  /**
   * <p>The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.</p>
   */
  DeliveryStreamARN: string | undefined;

  /**
   * <p>The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose
   *             stream.</p>
   */
  IAMRoleARN: string | undefined;
}

export namespace KinesisFirehoseDestination {
  export function isa(o: any): o is KinesisFirehoseDestination {
    return _smithy.isa(o, "KinesisFirehoseDestination");
  }
}

/**
 * <p>When included in a receipt rule, this action calls an AWS Lambda function and,
 *             optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
 *         <p>To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of
 *             another account, Amazon SES must have permission to access those resources. For information
 *             about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>For information about using AWS Lambda actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-lambda.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface LambdaAction {
  __type?: "LambdaAction";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function. An example of an AWS Lambda
   *             function ARN is <code>arn:aws:lambda:us-west-2:account-id:function:MyFunction</code>.
   *             For more information about AWS Lambda, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">AWS Lambda Developer Guide</a>.</p>
   */
  FunctionArn: string | undefined;

  /**
   * <p>The invocation type of the AWS Lambda function. An invocation type of
   *                 <code>RequestResponse</code> means that the execution of the function will
   *             immediately result in a response, and a value of <code>Event</code> means that the
   *             function will be invoked asynchronously. The default value is <code>Event</code>. For
   *             information about AWS Lambda invocation types, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html">AWS Lambda Developer Guide</a>.</p>
   *         <important>
   *             <p>There is a 30-second timeout on <code>RequestResponse</code> invocations. You
   *                 should use <code>Event</code> invocation in most cases. Use
   *                     <code>RequestResponse</code> only when you want to make a mail flow decision,
   *                 such as whether to stop the receipt rule or the receipt rule set.</p>
   *         </important>
   */
  InvocationType?: InvocationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is
   *             taken. An example of an Amazon SNS topic ARN is
   *                 <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about
   *             Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;
}

export namespace LambdaAction {
  export function isa(o: any): o is LambdaAction {
    return _smithy.isa(o, "LambdaAction");
  }
}

/**
 * <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 * <p>Represents a request to list the configuration sets associated with your AWS account.
 *             Configuration sets enable you to publish email sending events. For information about
 *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListConfigurationSetsRequest {
  __type?: "ListConfigurationSetsRequest";
  /**
   * <p>The number of configuration sets to return.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token returned from a previous call to <code>ListConfigurationSets</code> to
   *             indicate the position of the configuration set in the configuration set list.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsRequest {
  export function isa(o: any): o is ListConfigurationSetsRequest {
    return _smithy.isa(o, "ListConfigurationSetsRequest");
  }
}

/**
 * <p>A list of configuration sets associated with your AWS account. Configuration sets
 *             enable you to publish email sending events. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListConfigurationSetsResponse extends $MetadataBearer {
  __type?: "ListConfigurationSetsResponse";
  /**
   * <p>A list of configuration sets.</p>
   */
  ConfigurationSets?: Array<ConfigurationSet>;

  /**
   * <p>A token indicating that there are additional configuration sets available to be
   *             listed. Pass this token to successive calls of <code>ListConfigurationSets</code>.
   *         </p>
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsResponse {
  export function isa(o: any): o is ListConfigurationSetsResponse {
    return _smithy.isa(o, "ListConfigurationSetsResponse");
  }
}

/**
 * <p>Represents a request to list the existing custom verification email templates for your
 *             account.</p>
 *         <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html">Using Custom
 *                 Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  __type?: "ListCustomVerificationEmailTemplatesRequest";
  /**
   * <p>The maximum number of custom verification email templates to return. This value must
   *             be at least 1 and less than or equal to 50. If you do not specify a value, or if you
   *             specify a value less than 1 or greater than 50, the operation will return up to 50
   *             results.</p>
   */
  MaxResults?: number;

  /**
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES
   *             account.</p>
   */
  NextToken?: string;
}

export namespace ListCustomVerificationEmailTemplatesRequest {
  export function isa(
    o: any
  ): o is ListCustomVerificationEmailTemplatesRequest {
    return _smithy.isa(o, "ListCustomVerificationEmailTemplatesRequest");
  }
}

/**
 * <p>A paginated list of custom verification email templates.</p>
 */
export interface ListCustomVerificationEmailTemplatesResponse
  extends $MetadataBearer {
  __type?: "ListCustomVerificationEmailTemplatesResponse";
  /**
   * <p>A list of the custom verification email templates that exist in your account.</p>
   */
  CustomVerificationEmailTemplates?: Array<CustomVerificationEmailTemplate>;

  /**
   * <p>A token indicating that there are additional custom verification email templates
   *             available to be listed. Pass this token to a subsequent call to
   *                 <code>ListTemplates</code> to retrieve the next 50 custom verification email
   *             templates.</p>
   */
  NextToken?: string;
}

export namespace ListCustomVerificationEmailTemplatesResponse {
  export function isa(
    o: any
  ): o is ListCustomVerificationEmailTemplatesResponse {
    return _smithy.isa(o, "ListCustomVerificationEmailTemplatesResponse");
  }
}

/**
 * <p>Represents a request to return a list of all identities (email addresses and domains)
 *             that you have attempted to verify under your AWS account, regardless of verification
 *             status.</p>
 */
export interface ListIdentitiesRequest {
  __type?: "ListIdentitiesRequest";
  /**
   * <p>The type of the identities to list. Possible values are "EmailAddress" and "Domain".
   *             If this parameter is omitted, then all identities will be listed.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The maximum number of identities per page. Possible values are 1-1000
   *             inclusive.</p>
   */
  MaxItems?: number;

  /**
   * <p>The token to use for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListIdentitiesRequest {
  export function isa(o: any): o is ListIdentitiesRequest {
    return _smithy.isa(o, "ListIdentitiesRequest");
  }
}

/**
 * <p>A list of all identities that you have attempted to verify under your AWS account,
 *             regardless of verification status.</p>
 */
export interface ListIdentitiesResponse extends $MetadataBearer {
  __type?: "ListIdentitiesResponse";
  /**
   * <p>A list of identities.</p>
   */
  Identities: Array<string> | undefined;

  /**
   * <p>The token used for pagination.</p>
   */
  NextToken?: string;
}

export namespace ListIdentitiesResponse {
  export function isa(o: any): o is ListIdentitiesResponse {
    return _smithy.isa(o, "ListIdentitiesResponse");
  }
}

/**
 * <p>Represents a request to return a list of sending authorization policies that are
 *             attached to an identity. Sending authorization is an Amazon SES feature that enables you to
 *             authorize other senders to use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
 */
export interface ListIdentityPoliciesRequest {
  __type?: "ListIdentityPoliciesRequest";
  /**
   * <p>The identity that is associated with the policy for which the policies will be listed.
   *             You can specify an identity by using its name or by using its Amazon Resource Name
   *             (ARN). Examples: <code>user@example.com</code>, <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   *         <p>To successfully call this API, you must own the identity.</p>
   */
  Identity: string | undefined;
}

export namespace ListIdentityPoliciesRequest {
  export function isa(o: any): o is ListIdentityPoliciesRequest {
    return _smithy.isa(o, "ListIdentityPoliciesRequest");
  }
}

/**
 * <p>A list of names of sending authorization policies that apply to an identity.</p>
 */
export interface ListIdentityPoliciesResponse extends $MetadataBearer {
  __type?: "ListIdentityPoliciesResponse";
  /**
   * <p>A list of names of policies that apply to the specified identity.</p>
   */
  PolicyNames: Array<string> | undefined;
}

export namespace ListIdentityPoliciesResponse {
  export function isa(o: any): o is ListIdentityPoliciesResponse {
    return _smithy.isa(o, "ListIdentityPoliciesResponse");
  }
}

/**
 * <p>Represents a request to list the IP address filters that exist under your AWS account.
 *             You use IP address filters when you receive email with Amazon SES. For more information, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListReceiptFiltersRequest {
  __type?: "ListReceiptFiltersRequest";
}

export namespace ListReceiptFiltersRequest {
  export function isa(o: any): o is ListReceiptFiltersRequest {
    return _smithy.isa(o, "ListReceiptFiltersRequest");
  }
}

/**
 * <p>A list of IP address filters that exist under your AWS account.</p>
 */
export interface ListReceiptFiltersResponse extends $MetadataBearer {
  __type?: "ListReceiptFiltersResponse";
  /**
   * <p>A list of IP address filter data structures, which each consist of a name, an IP
   *             address range, and whether to allow or block mail from it.</p>
   */
  Filters?: Array<ReceiptFilter>;
}

export namespace ListReceiptFiltersResponse {
  export function isa(o: any): o is ListReceiptFiltersResponse {
    return _smithy.isa(o, "ListReceiptFiltersResponse");
  }
}

/**
 * <p>Represents a request to list the receipt rule sets that exist under your AWS account.
 *             You use receipt rule sets to receive email with Amazon SES. For more information, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListReceiptRuleSetsRequest {
  __type?: "ListReceiptRuleSetsRequest";
  /**
   * <p>A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate
   *             the position in the receipt rule set list.</p>
   */
  NextToken?: string;
}

export namespace ListReceiptRuleSetsRequest {
  export function isa(o: any): o is ListReceiptRuleSetsRequest {
    return _smithy.isa(o, "ListReceiptRuleSetsRequest");
  }
}

/**
 * <p>A list of receipt rule sets that exist under your AWS account.</p>
 */
export interface ListReceiptRuleSetsResponse extends $MetadataBearer {
  __type?: "ListReceiptRuleSetsResponse";
  /**
   * <p>A token indicating that there are additional receipt rule sets available to be listed.
   *             Pass this token to successive calls of <code>ListReceiptRuleSets</code> to retrieve up
   *             to 100 receipt rule sets at a time.</p>
   */
  NextToken?: string;

  /**
   * <p>The metadata for the currently active receipt rule set. The metadata consists of the
   *             rule set name and the timestamp of when the rule set was created.</p>
   */
  RuleSets?: Array<ReceiptRuleSetMetadata>;
}

export namespace ListReceiptRuleSetsResponse {
  export function isa(o: any): o is ListReceiptRuleSetsResponse {
    return _smithy.isa(o, "ListReceiptRuleSetsResponse");
  }
}

export interface ListTemplatesRequest {
  __type?: "ListTemplatesRequest";
  /**
   * <p>The maximum number of templates to return. This value must be at least 1 and less than
   *             or equal to 10. If you do not specify a value, or if you specify a value less than 1 or
   *             greater than 10, the operation will return up to 10 results.</p>
   */
  MaxItems?: number;

  /**
   * <p>A token returned from a previous call to <code>ListTemplates</code> to indicate the
   *             position in the list of email templates.</p>
   */
  NextToken?: string;
}

export namespace ListTemplatesRequest {
  export function isa(o: any): o is ListTemplatesRequest {
    return _smithy.isa(o, "ListTemplatesRequest");
  }
}

export interface ListTemplatesResponse extends $MetadataBearer {
  __type?: "ListTemplatesResponse";
  /**
   * <p>A token indicating that there are additional email templates available to be listed.
   *             Pass this token to a subsequent call to <code>ListTemplates</code> to retrieve the next
   *             50 email templates.</p>
   */
  NextToken?: string;

  /**
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES
   *             account.</p>
   */
  TemplatesMetadata?: Array<TemplateMetadata>;
}

export namespace ListTemplatesResponse {
  export function isa(o: any): o is ListTemplatesResponse {
    return _smithy.isa(o, "ListTemplatesResponse");
  }
}

/**
 * <p>A list of email addresses that you have verified with Amazon SES under your AWS
 *             account.</p>
 */
export interface ListVerifiedEmailAddressesResponse extends $MetadataBearer {
  __type?: "ListVerifiedEmailAddressesResponse";
  /**
   * <p>A list of email addresses that have been verified.</p>
   */
  VerifiedEmailAddresses?: Array<string>;
}

export namespace ListVerifiedEmailAddressesResponse {
  export function isa(o: any): o is ListVerifiedEmailAddressesResponse {
    return _smithy.isa(o, "ListVerifiedEmailAddressesResponse");
  }
}

/**
 * <p> Indicates that the message could not be sent because Amazon SES could not read the MX
 *             record required to use the specified MAIL FROM domain. For information about editing the
 *             custom MAIL FROM domain settings for an identity, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from-edit.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface MailFromDomainNotVerifiedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "MailFromDomainNotVerifiedException";
  $fault: "client";
  message?: string;
}

export namespace MailFromDomainNotVerifiedException {
  export function isa(o: any): o is MailFromDomainNotVerifiedException {
    return _smithy.isa(o, "MailFromDomainNotVerifiedException");
  }
}

/**
 * <p>Represents the message to be sent, composed of a subject and a body.</p>
 */
export interface Message {
  __type?: "Message";
  /**
   * <p>The message body.</p>
   */
  Body: Body | undefined;

  /**
   * <p>The subject of the message: A short summary of the content, which will appear in the
   *             recipient's inbox.</p>
   */
  Subject: Content | undefined;
}

export namespace Message {
  export function isa(o: any): o is Message {
    return _smithy.isa(o, "Message");
  }
}

/**
 * <p>Message-related information to include in the Delivery Status Notification (DSN) when
 *             an email that Amazon SES receives on your behalf bounces.</p>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface MessageDsn {
  __type?: "MessageDsn";
  /**
   * <p>When the message was received by the reporting mail transfer agent (MTA), in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  ArrivalDate?: Date;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<ExtensionField>;

  /**
   * <p>The reporting MTA that attempted to deliver the message, formatted as specified in
   *                 <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>
   *                 (<code>mta-name-type; mta-name</code>). The default value is <code>dns;
   *                 inbound-smtp.[region].amazonaws.com</code>.</p>
   */
  ReportingMta: string | undefined;
}

export namespace MessageDsn {
  export function isa(o: any): o is MessageDsn {
    return _smithy.isa(o, "MessageDsn");
  }
}

/**
 * <p>Indicates that the action failed, and the message could not be sent. Check the error
 *             stack for more information about what caused the error.</p>
 */
export interface MessageRejected
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "MessageRejected";
  $fault: "client";
  message?: string;
}

export namespace MessageRejected {
  export function isa(o: any): o is MessageRejected {
    return _smithy.isa(o, "MessageRejected");
  }
}

/**
 * <p>Indicates that one or more of the replacement values for the specified template was
 *             not specified. Ensure that the TemplateData object contains references to all of the
 *             replacement tags in the specified template.</p>
 */
export interface MissingRenderingAttributeException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "MissingRenderingAttributeException";
  $fault: "client";
  TemplateName?: string;
  message?: string;
}

export namespace MissingRenderingAttributeException {
  export function isa(o: any): o is MissingRenderingAttributeException {
    return _smithy.isa(o, "MissingRenderingAttributeException");
  }
}

export type NotificationType = "Bounce" | "Complaint" | "Delivery";

/**
 * <p>Indicates that the account has not been granted production access.</p>
 */
export interface ProductionAccessNotGrantedException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "ProductionAccessNotGrantedException";
  $fault: "client";
  message?: string;
}

export namespace ProductionAccessNotGrantedException {
  export function isa(o: any): o is ProductionAccessNotGrantedException {
    return _smithy.isa(o, "ProductionAccessNotGrantedException");
  }
}

/**
 * <p>A request to modify the delivery options for a configuration set.</p>
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  __type?: "PutConfigurationSetDeliveryOptionsRequest";
  /**
   * <p>The name of the configuration set that you want to specify the delivery options
   *             for.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS).</p>
   */
  DeliveryOptions?: DeliveryOptions;
}

export namespace PutConfigurationSetDeliveryOptionsRequest {
  export function isa(o: any): o is PutConfigurationSetDeliveryOptionsRequest {
    return _smithy.isa(o, "PutConfigurationSetDeliveryOptionsRequest");
  }
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetDeliveryOptionsResponse
  extends $MetadataBearer {
  __type?: "PutConfigurationSetDeliveryOptionsResponse";
}

export namespace PutConfigurationSetDeliveryOptionsResponse {
  export function isa(o: any): o is PutConfigurationSetDeliveryOptionsResponse {
    return _smithy.isa(o, "PutConfigurationSetDeliveryOptionsResponse");
  }
}

/**
 * <p>Represents a request to add or update a sending authorization policy for an identity.
 *             Sending authorization is an Amazon SES feature that enables you to authorize other senders to
 *             use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface PutIdentityPolicyRequest {
  __type?: "PutIdentityPolicyRequest";
  /**
   * <p>The identity that the policy will apply to. You can specify an identity by using its
   *             name or by using its Amazon Resource Name (ARN). Examples:
   *             <code>user@example.com</code>, <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   *         <p>To successfully call this API, you must own the identity.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *         <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>. </p>
   */
  Policy: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;
}

export namespace PutIdentityPolicyRequest {
  export function isa(o: any): o is PutIdentityPolicyRequest {
    return _smithy.isa(o, "PutIdentityPolicyRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface PutIdentityPolicyResponse extends $MetadataBearer {
  __type?: "PutIdentityPolicyResponse";
}

export namespace PutIdentityPolicyResponse {
  export function isa(o: any): o is PutIdentityPolicyResponse {
    return _smithy.isa(o, "PutIdentityPolicyResponse");
  }
}

/**
 * <p>Represents the raw data of the message.</p>
 */
export interface RawMessage {
  __type?: "RawMessage";
  /**
   * <p>The raw data of the message. This data needs to base64-encoded if you are accessing
   *             Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an AWS
   *             SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must
   *             ensure that the message format complies with Internet email standards regarding email
   *             header fields, MIME types, and MIME encoding.</p>
   *         <p>The To:, CC:, and BCC: headers in the raw message can contain a group list.</p>
   *         <p>If you are using <code>SendRawEmail</code> with sending authorization, you can include
   *             X-headers in the raw message to specify the "Source," "From," and "Return-Path"
   *             addresses. For more information, see the documentation for <code>SendRawEmail</code>. </p>
   *         <important>
   *             <p>Do not include these X-headers in the DKIM signature, because they are removed by
   *                 Amazon SES before sending the email.</p>
   *         </important>
   *         <p>For more information, go to the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer
   *             Guide</a>.</p>
   */
  Data: Uint8Array | undefined;
}

export namespace RawMessage {
  export function isa(o: any): o is RawMessage {
    return _smithy.isa(o, "RawMessage");
  }
}

/**
 * <p>An action that Amazon SES can take when it receives an email on behalf of one or more email
 *             addresses or domains that you own. An instance of this data type can represent only one
 *             action.</p>
 *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ReceiptAction {
  __type?: "ReceiptAction";
  /**
   * <p>Adds a header to the received email.</p>
   */
  AddHeaderAction?: AddHeaderAction;

  /**
   * <p>Rejects the received email by returning a bounce response to the sender and,
   *             optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
   */
  BounceAction?: BounceAction;

  /**
   * <p>Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.</p>
   */
  LambdaAction?: LambdaAction;

  /**
   * <p>Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a
   *             notification to Amazon SNS.</p>
   */
  S3Action?: S3Action;

  /**
   * <p>Publishes the email content within a notification to Amazon SNS.</p>
   */
  SNSAction?: SNSAction;

  /**
   * <p>Terminates the evaluation of the receipt rule set and optionally publishes a
   *             notification to Amazon SNS.</p>
   */
  StopAction?: StopAction;

  /**
   * <p>Calls Amazon WorkMail and, optionally, publishes a notification to Amazon
   *             Amazon SNS.</p>
   */
  WorkmailAction?: WorkmailAction;
}

export namespace ReceiptAction {
  export function isa(o: any): o is ReceiptAction {
    return _smithy.isa(o, "ReceiptAction");
  }
}

/**
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail
 *             originating from an IP address or range of IP addresses.</p>
 *         <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
 */
export interface ReceiptFilter {
  __type?: "ReceiptFilter";
  /**
   * <p>A structure that provides the IP addresses to block or allow, and whether to block or
   *             allow incoming mail from them.</p>
   */
  IpFilter: ReceiptIpFilter | undefined;

  /**
   * <p>The name of the IP address filter. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Start and end with a letter or number.</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;
}

export namespace ReceiptFilter {
  export function isa(o: any): o is ReceiptFilter {
    return _smithy.isa(o, "ReceiptFilter");
  }
}

export enum ReceiptFilterPolicy {
  Allow = "Allow",
  Block = "Block"
}

/**
 * <p>A receipt IP address filter enables you to specify whether to accept or reject mail
 *             originating from an IP address or range of IP addresses.</p>
 *         <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-ip-filters.html">Amazon SES Developer Guide</a>.</p>
 */
export interface ReceiptIpFilter {
  __type?: "ReceiptIpFilter";
  /**
   * <p>A single IP address or a range of IP addresses that you want to block or allow,
   *             specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single
   *             email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For
   *             more information about CIDR notation, see <a href="https://tools.ietf.org/html/rfc2317">RFC 2317</a>.</p>
   */
  Cidr: string | undefined;

  /**
   * <p>Indicates whether to block or allow incoming mail from the specified IP
   *             addresses.</p>
   */
  Policy: ReceiptFilterPolicy | string | undefined;
}

export namespace ReceiptIpFilter {
  export function isa(o: any): o is ReceiptIpFilter {
    return _smithy.isa(o, "ReceiptIpFilter");
  }
}

/**
 * <p>Receipt rules enable you to specify which actions Amazon SES should take when it receives
 *             mail on behalf of one or more email addresses or domains that you own.</p>
 *         <p>Each receipt rule defines a set of email addresses or domains that it applies to. If
 *             the email addresses or domains match at least one recipient address of the message,
 *             Amazon SES executes all of the receipt rule's actions on the message.</p>
 *         <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ReceiptRule {
  __type?: "ReceiptRule";
  /**
   * <p>An ordered list of actions to perform on messages that match at least one of the
   *             recipient email addresses or domains specified in the receipt rule.</p>
   */
  Actions?: Array<ReceiptAction>;

  /**
   * <p>If <code>true</code>, the receipt rule is active. The default value is
   *                 <code>false</code>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the receipt rule. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Start and end with a letter or number.</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * <p>The recipient domains and email addresses that the receipt rule applies to. If this
   *             field is not specified, this rule will match all recipients under all verified
   *             domains.</p>
   */
  Recipients?: Array<string>;

  /**
   * <p>If <code>true</code>, then messages that this receipt rule applies to are scanned for
   *             spam and viruses. The default value is <code>false</code>.</p>
   */
  ScanEnabled?: boolean;

  /**
   * <p>Specifies whether Amazon SES should require that incoming email is delivered over a
   *             connection encrypted with Transport Layer Security (TLS). If this parameter is set to
   *                 <code>Require</code>, Amazon SES will bounce emails that are not received over TLS. The
   *             default is <code>Optional</code>.</p>
   */
  TlsPolicy?: TlsPolicy | string;
}

export namespace ReceiptRule {
  export function isa(o: any): o is ReceiptRule {
    return _smithy.isa(o, "ReceiptRule");
  }
}

/**
 * <p>Information about a receipt rule set.</p>
 *         <p>A receipt rule set is a collection of rules that specify what Amazon SES should do with
 *             mail it receives on behalf of your account's verified domains.</p>
 *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface ReceiptRuleSetMetadata {
  __type?: "ReceiptRuleSetMetadata";
  /**
   * <p>The date and time the receipt rule set was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name of the receipt rule set. The name must:</p>
   *         <ul>
   *             <li>
   *                 <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>Start and end with a letter or number.</p>
   *             </li>
   *             <li>
   *                 <p>Contain less than 64 characters.</p>
   *             </li>
   *          </ul>
   */
  Name?: string;
}

export namespace ReceiptRuleSetMetadata {
  export function isa(o: any): o is ReceiptRuleSetMetadata {
    return _smithy.isa(o, "ReceiptRuleSetMetadata");
  }
}

/**
 * <p>Recipient-related information to include in the Delivery Status Notification (DSN)
 *             when an email that Amazon SES receives on your behalf bounces.</p>
 *         <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface RecipientDsnFields {
  __type?: "RecipientDsnFields";
  /**
   * <p>The action performed by the reporting mail transfer agent (MTA) as a result of its
   *             attempt to deliver the message to the recipient address. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.</p>
   */
  Action: DsnAction | string | undefined;

  /**
   * <p>An extended explanation of what went wrong; this is usually an SMTP response. See
   *                 <a href="https://tools.ietf.org/html/rfc3463">RFC 3463</a> for the correct
   *             formatting of this parameter.</p>
   */
  DiagnosticCode?: string;

  /**
   * <p>Additional X-headers to include in the DSN.</p>
   */
  ExtensionFields?: Array<ExtensionField>;

  /**
   * <p>The email address that the message was ultimately delivered to. This corresponds to
   *             the <code>Final-Recipient</code> in the DSN. If not specified,
   *                 <code>FinalRecipient</code> will be set to the <code>Recipient</code> specified in
   *             the <code>BouncedRecipientInfo</code> structure. Either <code>FinalRecipient</code> or
   *             the recipient in <code>BouncedRecipientInfo</code> must be a recipient of the original
   *             bounced message.</p>
   *         <note>
   *             <p>Do not prepend the <code>FinalRecipient</code> email address with <code>rfc
   *                     822;</code>, as described in <a href="https://tools.ietf.org/html/rfc3798">RFC 3798</a>.</p>
   *         </note>
   */
  FinalRecipient?: string;

  /**
   * <p>The time the final delivery attempt was made, in <a href="https://www.ietf.org/rfc/rfc0822.txt">RFC 822</a> date-time format.</p>
   */
  LastAttemptDate?: Date;

  /**
   * <p>The MTA to which the remote MTA attempted to deliver the message, formatted as
   *             specified in <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>
   *                 (<code>mta-name-type; mta-name</code>). This parameter typically applies only to
   *             propagating synchronous bounces.</p>
   */
  RemoteMta?: string;

  /**
   * <p>The status code that indicates what went wrong. This is required by <a href="https://tools.ietf.org/html/rfc3464">RFC 3464</a>.</p>
   */
  Status: string | undefined;
}

export namespace RecipientDsnFields {
  export function isa(o: any): o is RecipientDsnFields {
    return _smithy.isa(o, "RecipientDsnFields");
  }
}

/**
 * <p>Represents a request to reorder the receipt rules within a receipt rule set. You use
 *             receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface ReorderReceiptRuleSetRequest {
  __type?: "ReorderReceiptRuleSetRequest";
  /**
   * <p>A list of the specified receipt rule set's receipt rules in the order that you want to
   *             put them.</p>
   */
  RuleNames: Array<string> | undefined;

  /**
   * <p>The name of the receipt rule set to reorder.</p>
   */
  RuleSetName: string | undefined;
}

export namespace ReorderReceiptRuleSetRequest {
  export function isa(o: any): o is ReorderReceiptRuleSetRequest {
    return _smithy.isa(o, "ReorderReceiptRuleSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface ReorderReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "ReorderReceiptRuleSetResponse";
}

export namespace ReorderReceiptRuleSetResponse {
  export function isa(o: any): o is ReorderReceiptRuleSetResponse {
    return _smithy.isa(o, "ReorderReceiptRuleSetResponse");
  }
}

/**
 * <p>Contains information about the reputation settings for a configuration set.</p>
 */
export interface ReputationOptions {
  __type?: "ReputationOptions";
  /**
   * <p>The date and time at which the reputation metrics for the configuration set were last
   *             reset. Resetting these metrics is known as a <i>fresh start</i>.</p>
   *         <p>When you disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a> and later re-enable it, the
   *             reputation metrics for the configuration set (but not for the entire Amazon SES account) are
   *             reset.</p>
   *         <p>If email sending for the configuration set has never been disabled and later
   *             re-enabled, the value of this attribute is <code>null</code>.</p>
   */
  LastFreshStart?: Date;

  /**
   * <p>Describes whether or not Amazon SES publishes reputation metrics for the configuration set,
   *             such as bounce and complaint rates, to Amazon CloudWatch.</p>
   *         <p>If the value is <code>true</code>, reputation metrics are published. If the value is
   *                 <code>false</code>, reputation metrics are not published. The default value is
   *                 <code>false</code>.</p>
   */
  ReputationMetricsEnabled?: boolean;

  /**
   * <p>Describes whether email sending is enabled or disabled for the configuration set. If
   *             the value is <code>true</code>, then Amazon SES will send emails that use the configuration
   *             set. If the value is <code>false</code>, Amazon SES will not send emails that use the
   *             configuration set. The default value is <code>true</code>. You can change this setting
   *             using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
   */
  SendingEnabled?: boolean;
}

export namespace ReputationOptions {
  export function isa(o: any): o is ReputationOptions {
    return _smithy.isa(o, "ReputationOptions");
  }
}

/**
 * <p>Indicates that the provided receipt rule does not exist.</p>
 */
export interface RuleDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "RuleDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that the named receipt rule does not exist.</p>
   */
  Name?: string;

  message?: string;
}

export namespace RuleDoesNotExistException {
  export function isa(o: any): o is RuleDoesNotExistException {
    return _smithy.isa(o, "RuleDoesNotExistException");
  }
}

/**
 * <p>Indicates that the provided receipt rule set does not exist.</p>
 */
export interface RuleSetDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "RuleSetDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that the named receipt rule set does not exist.</p>
   */
  Name?: string;

  message?: string;
}

export namespace RuleSetDoesNotExistException {
  export function isa(o: any): o is RuleSetDoesNotExistException {
    return _smithy.isa(o, "RuleSetDoesNotExistException");
  }
}

/**
 * <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service
 *             (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
 *         <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt
 *             your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission
 *             to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <note>
 *             <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including
 *                 headers) is 30 MB. Emails larger than that will bounce.</p>
 *         </note>
 *         <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>
 */
export interface S3Action {
  __type?: "S3Action";
  /**
   * <p>The name of the Amazon S3 bucket that incoming email will be saved to.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The customer master key that Amazon SES should use to encrypt your emails before saving
   *             them to the Amazon S3 bucket. You can use the default master key or a custom master key you
   *             created in AWS KMS as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>To use the default master key, provide an ARN in the form of
   *                         <code>arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses</code>.
   *                     For example, if your AWS account ID is 123456789012 and you want to use the
   *                     default master key in the US West (Oregon) region, the ARN of the default master
   *                     key would be <code>arn:aws:kms:us-west-2:123456789012:alias/aws/ses</code>. If
   *                     you use the default master key, you don't need to perform any extra steps to
   *                     give Amazon SES permission to use the key.</p>
   *             </li>
   *             <li>
   *                 <p>To use a custom master key you created in AWS KMS, provide the ARN of the
   *                     master key and ensure that you add a statement to your key's policy to give
   *                     Amazon SES permission to use it. For more information about giving permissions, see
   *                     the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES
   *                         Developer Guide</a>.</p>
   *             </li>
   *          </ul>
   *         <p>For more information about key policies, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">AWS KMS Developer Guide</a>. If
   *             you do not specify a master key, Amazon SES will not encrypt your emails.</p>
   *         <important>
   *             <p>Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail
   *                 is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side
   *                 encryption. This means that you must use the Amazon S3 encryption client to decrypt the
   *                 email after retrieving it from Amazon S3, as the service has no access to use your AWS
   *                 KMS keys for decryption. This encryption client is currently available with the
   *                     <a href="http://aws.amazon.com/sdk-for-java/">AWS SDK for Java</a> and <a href="http://aws.amazon.com/sdk-for-ruby/">AWS SDK for Ruby</a> only. For more
   *                 information about client-side encryption using AWS KMS master keys, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 Developer Guide</a>.</p>
   *         </important>
   */
  KmsKeyArn?: string;

  /**
   * <p>The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that
   *             enables you to store similar data under the same directory in a bucket.</p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p>The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. An
   *             example of an Amazon SNS topic ARN is
   *             <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about
   *             Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;
}

export namespace S3Action {
  export function isa(o: any): o is S3Action {
    return _smithy.isa(o, "S3Action");
  }
}

/**
 * <p>When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service
 *             (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS
 *             notifications. Amazon SNS notifications for all other actions simply provide information
 *             about the email. They do not include the email content itself.</p>
 *         <p>If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to
 *             publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a
 *             policy to the topic to give Amazon SES permissions to access it. For information about giving
 *             permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <important>
 *             <p>You can only publish emails that are 150 KB or less (including the header) to
 *                 Amazon SNS. Larger emails will bounce. If you anticipate emails larger than 150 KB, use
 *                 the S3 action instead.</p>
 *         </important>
 *         <p>For information about using a receipt rule to publish an Amazon SNS notification, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-sns.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SNSAction {
  __type?: "SNSAction";
  /**
   * <p>The encoding to use for the email within the Amazon SNS notification. UTF-8 is easier to
   *             use, but may not preserve all special characters when a message was encoded with a
   *             different encoding format. Base64 preserves all special characters. The default value is
   *             UTF-8.</p>
   */
  Encoding?: SNSActionEncoding | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. An example of an Amazon SNS
   *             topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more
   *             information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn: string | undefined;
}

export namespace SNSAction {
  export function isa(o: any): o is SNSAction {
    return _smithy.isa(o, "SNSAction");
  }
}

export enum SNSActionEncoding {
  Base64 = "Base64",
  UTF8 = "UTF-8"
}

/**
 * <p>Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p>
 *         <p>Event destinations, such as Amazon SNS, are associated with configuration sets, which
 *             enable you to publish email sending events. For information about using configuration
 *             sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SNSDestination {
  __type?: "SNSDestination";
  /**
   * <p>The ARN of the Amazon SNS topic that email sending events will be published to. An example
   *             of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For
   *             more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicARN: string | undefined;
}

export namespace SNSDestination {
  export function isa(o: any): o is SNSDestination {
    return _smithy.isa(o, "SNSDestination");
  }
}

/**
 * <p>Represents a request to send a bounce message to the sender of an email you received
 *             through Amazon SES.</p>
 */
export interface SendBounceRequest {
  __type?: "SendBounceRequest";
  /**
   * <p>The address to use in the "From" header of the bounce message. This must be an
   *             identity that you have verified with Amazon SES.</p>
   */
  BounceSender: string | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             address in the "From" header of the bounce. For more information about sending
   *             authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  BounceSenderArn?: string;

  /**
   * <p>A list of recipients of the bounced message, including the information required to
   *             create the Delivery Status Notifications (DSNs) for the recipients. You must specify at
   *             least one <code>BouncedRecipientInfo</code> in the list.</p>
   */
  BouncedRecipientInfoList: Array<BouncedRecipientInfo> | undefined;

  /**
   * <p>Human-readable text for the bounce message to explain the failure. If not specified,
   *             the text will be auto-generated based on the bounced recipient information.</p>
   */
  Explanation?: string;

  /**
   * <p>Message-related DSN fields. If not specified, Amazon SES will choose the values.</p>
   */
  MessageDsn?: MessageDsn;

  /**
   * <p>The message ID of the message to be bounced.</p>
   */
  OriginalMessageId: string | undefined;
}

export namespace SendBounceRequest {
  export function isa(o: any): o is SendBounceRequest {
    return _smithy.isa(o, "SendBounceRequest");
  }
}

/**
 * <p>Represents a unique message ID.</p>
 */
export interface SendBounceResponse extends $MetadataBearer {
  __type?: "SendBounceResponse";
  /**
   * <p>The message ID of the bounce message.</p>
   */
  MessageId?: string;
}

export namespace SendBounceResponse {
  export function isa(o: any): o is SendBounceResponse {
    return _smithy.isa(o, "SendBounceResponse");
  }
}

/**
 * <p>Represents a request to send a templated email to multiple destinations using Amazon SES.
 *             For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendBulkTemplatedEmailRequest {
  __type?: "SendBulkTemplatedEmailRequest";
  /**
   * <p>The name of the configuration set to use when you send an email using
   *                 <code>SendBulkTemplatedEmail</code>.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send to
   *             a destination using <code>SendBulkTemplatedEmail</code>.</p>
   */
  DefaultTags?: Array<MessageTag>;

  /**
   * <p>A list of replacement values to apply to the template when replacement data is not
   *             specified in a Destination object. These values act as a default or fallback option when
   *             no other data is available.</p>
   *         <p>The template data is a JSON object, typically consisting of key-value pairs in which
   *             the keys correspond to replacement tags in the email template.</p>
   */
  DefaultTemplateData?: string;

  /**
   * <p>One or more <code>Destination</code> objects. All of the recipients in a
   *                 <code>Destination</code> will receive the same version of the email. You can specify
   *             up to 50 <code>Destination</code> objects within a <code>Destinations</code>
   *             array.</p>
   */
  Destinations: Array<BulkEmailDestination> | undefined;

  /**
   * <p>The reply-to email address(es) for the message. If the recipient replies to the
   *             message, each reply-to address will receive the reply.</p>
   */
  ReplyToAddresses?: Array<string>;

  /**
   * <p>The email address that bounces and complaints will be forwarded to when feedback
   *             forwarding is enabled. If the message cannot be delivered to the recipient, then an
   *             error message will be returned from the recipient's ISP; this message will then be
   *             forwarded to the email address specified by the <code>ReturnPath</code> parameter. The
   *                 <code>ReturnPath</code> parameter is never overwritten. This email address must be
   *             either individually verified with Amazon SES, or from a domain that has been verified with
   *             Amazon SES. </p>
   */
  ReturnPath?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>ReturnPath</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to use <code>feedback@example.com</code>, then you
   *             would specify the <code>ReturnPathArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  ReturnPathArn?: string;

  /**
   * <p>The email address that is sending the email. This email address must be either
   *             individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *             For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>If you are sending on behalf of another user and have been permitted to do so by a
   *             sending authorization policy, then you must also specify the <code>SourceArn</code>
   *             parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                     <i>local part</i> of a source email address (the part of the email
   *                 address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the <i>domain part</i> of an address (the
   *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
   *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly
   *                     name</i>) may contain non-ASCII characters. These characters must be
   *                 encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word
   *                 syntax uses the following form:
   *                 <code>=?charset?encoding?encoded-text?=</code>.</p>
   *         </note>
   */
  Source: string | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to send for
   *             the email address specified in the <code>Source</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to send from <code>user@example.com</code>, then you
   *             would specify the <code>SourceArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>Source</code> to be <code>user@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  SourceArn?: string;

  /**
   * <p>The template to use when sending this email.</p>
   */
  Template: string | undefined;

  /**
   * <p>The ARN of the template to use when sending this email.</p>
   */
  TemplateArn?: string;
}

export namespace SendBulkTemplatedEmailRequest {
  export function isa(o: any): o is SendBulkTemplatedEmailRequest {
    return _smithy.isa(o, "SendBulkTemplatedEmailRequest");
  }
}

export interface SendBulkTemplatedEmailResponse extends $MetadataBearer {
  __type?: "SendBulkTemplatedEmailResponse";
  /**
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code>
   *             action.</p>
   */
  Status: Array<BulkEmailDestinationStatus> | undefined;
}

export namespace SendBulkTemplatedEmailResponse {
  export function isa(o: any): o is SendBulkTemplatedEmailResponse {
    return _smithy.isa(o, "SendBulkTemplatedEmailResponse");
  }
}

/**
 * <p>Represents a request to send a custom verification email to a specified
 *             recipient.</p>
 */
export interface SendCustomVerificationEmailRequest {
  __type?: "SendCustomVerificationEmailRequest";
  /**
   * <p>Name of a configuration set to use when sending the verification email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The email address to verify.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The name of the custom verification email template to use when sending the
   *             verification email.</p>
   */
  TemplateName: string | undefined;
}

export namespace SendCustomVerificationEmailRequest {
  export function isa(o: any): o is SendCustomVerificationEmailRequest {
    return _smithy.isa(o, "SendCustomVerificationEmailRequest");
  }
}

/**
 * <p>The response received when attempting to send the custom verification email.</p>
 */
export interface SendCustomVerificationEmailResponse extends $MetadataBearer {
  __type?: "SendCustomVerificationEmailResponse";
  /**
   * <p>The unique message identifier returned from the
   *                 <code>SendCustomVerificationEmail</code> operation.</p>
   */
  MessageId?: string;
}

export namespace SendCustomVerificationEmailResponse {
  export function isa(o: any): o is SendCustomVerificationEmailResponse {
    return _smithy.isa(o, "SendCustomVerificationEmailResponse");
  }
}

/**
 * <p>Represents sending statistics data. Each <code>SendDataPoint</code> contains
 *             statistics for a 15-minute period of sending activity. </p>
 */
export interface SendDataPoint {
  __type?: "SendDataPoint";
  /**
   * <p>Number of emails that have bounced.</p>
   */
  Bounces?: number;

  /**
   * <p>Number of unwanted emails that were rejected by recipients.</p>
   */
  Complaints?: number;

  /**
   * <p>Number of emails that have been sent.</p>
   */
  DeliveryAttempts?: number;

  /**
   * <p>Number of emails rejected by Amazon SES.</p>
   */
  Rejects?: number;

  /**
   * <p>Time of the data point.</p>
   */
  Timestamp?: Date;
}

export namespace SendDataPoint {
  export function isa(o: any): o is SendDataPoint {
    return _smithy.isa(o, "SendDataPoint");
  }
}

/**
 * <p>Represents a request to send a single formatted email using Amazon SES. For more
 *             information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendEmailRequest {
  __type?: "SendEmailRequest";
  /**
   * <p>The name of the configuration set to use when you send an email using
   *                 <code>SendEmail</code>.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The destination for this email, composed of To:, CC:, and BCC: fields.</p>
   */
  Destination: Destination | undefined;

  /**
   * <p>The message to be sent.</p>
   */
  Message: Message | undefined;

  /**
   * <p>The reply-to email address(es) for the message. If the recipient replies to the
   *             message, each reply-to address will receive the reply.</p>
   */
  ReplyToAddresses?: Array<string>;

  /**
   * <p>The email address that bounces and complaints will be forwarded to when feedback
   *             forwarding is enabled. If the message cannot be delivered to the recipient, then an
   *             error message will be returned from the recipient's ISP; this message will then be
   *             forwarded to the email address specified by the <code>ReturnPath</code> parameter. The
   *                 <code>ReturnPath</code> parameter is never overwritten. This email address must be
   *             either individually verified with Amazon SES, or from a domain that has been verified with
   *             Amazon SES. </p>
   */
  ReturnPath?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>ReturnPath</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to use <code>feedback@example.com</code>, then you
   *             would specify the <code>ReturnPathArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  ReturnPathArn?: string;

  /**
   * <p>The email address that is sending the email. This email address must be either
   *             individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *             For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>If you are sending on behalf of another user and have been permitted to do so by a
   *             sending authorization policy, then you must also specify the <code>SourceArn</code>
   *             parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                     <i>local part</i> of a source email address (the part of the email
   *                 address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the <i>domain part</i> of an address (the
   *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
   *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly
   *                     name</i>) may contain non-ASCII characters. These characters must be
   *                 encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word
   *                 syntax uses the following form:
   *                 <code>=?charset?encoding?encoded-text?=</code>.</p>
   *         </note>
   */
  Source: string | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to send for
   *             the email address specified in the <code>Source</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to send from <code>user@example.com</code>, then you
   *             would specify the <code>SourceArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>Source</code> to be <code>user@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  SourceArn?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using <code>SendEmail</code>. Tags correspond to characteristics of the email that you
   *             define, so that you can publish email sending events.</p>
   */
  Tags?: Array<MessageTag>;
}

export namespace SendEmailRequest {
  export function isa(o: any): o is SendEmailRequest {
    return _smithy.isa(o, "SendEmailRequest");
  }
}

/**
 * <p>Represents a unique message ID.</p>
 */
export interface SendEmailResponse extends $MetadataBearer {
  __type?: "SendEmailResponse";
  /**
   * <p>The unique message identifier returned from the <code>SendEmail</code> action. </p>
   */
  MessageId: string | undefined;
}

export namespace SendEmailResponse {
  export function isa(o: any): o is SendEmailResponse {
    return _smithy.isa(o, "SendEmailResponse");
  }
}

/**
 * <p>Represents a request to send a single raw email using Amazon SES. For more information, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Amazon SES Developer Guide</a>.</p>
 */
export interface SendRawEmailRequest {
  __type?: "SendRawEmailRequest";
  /**
   * <p>The name of the configuration set to use when you send an email using
   *                 <code>SendRawEmail</code>.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>A list of destinations for the message, consisting of To:, CC:, and BCC:
   *             addresses.</p>
   */
  Destinations?: Array<string>;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to specify a
   *             particular "From" address in the header of the raw email.</p>
   *         <p>Instead of using this parameter, you can use the X-header <code>X-SES-FROM-ARN</code>
   *             in the raw message of the email. If you use both the <code>FromArn</code> parameter and
   *             the corresponding X-header, Amazon SES uses the value of the <code>FromArn</code>
   *             parameter.</p>
   *         <note>
   *             <p>For information about when to use this parameter, see the description of
   *                     <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p>
   *         </note>
   */
  FromArn?: string;

  /**
   * <p>The raw email message itself. The message has to meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>The message has to contain a header and a body, separated by a blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                 <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                 <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                 <p>Attachments must be of a content type that Amazon SES supports. For a list on
   *                     unsupported content types, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types.html">Unsupported Attachment
   *                         Types</a> in the <i>Amazon SES Developer Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>The entire message must be base64-encoded.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, we highly recommend that you encode that
   *                     content. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-raw.html">Sending Raw Email</a> in the <i>Amazon SES Developer
   *                     Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC
   *                         5321</a>, the maximum length of each line of text, including the
   *                     <CRLF>, must not exceed 1,000 characters.</p>
   *             </li>
   *          </ul>
   */
  RawMessage: RawMessage | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>ReturnPath</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to use <code>feedback@example.com</code>, then you
   *             would specify the <code>ReturnPathArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p>
   *         <p>Instead of using this parameter, you can use the X-header
   *                 <code>X-SES-RETURN-PATH-ARN</code> in the raw message of the email. If you use both
   *             the <code>ReturnPathArn</code> parameter and the corresponding X-header, Amazon SES uses the
   *             value of the <code>ReturnPathArn</code> parameter.</p>
   *         <note>
   *             <p>For information about when to use this parameter, see the description of
   *                     <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p>
   *         </note>
   */
  ReturnPathArn?: string;

  /**
   * <p>The identity's email address. If you do not provide a value for this parameter, you
   *             must specify a "From" address in the raw text of the message. (You can also specify
   *             both.)</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in<a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                     <i>local part</i> of a source email address (the part of the email
   *                 address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the <i>domain part</i> of an address (the
   *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
   *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly
   *                     name</i>) may contain non-ASCII characters. These characters must be
   *                 encoded using MIME encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word
   *                 syntax uses the following form:
   *                 <code>=?charset?encoding?encoded-text?=</code>.</p>
   *         </note>
   *
   *         <p>If you specify the <code>Source</code> parameter and have feedback forwarding enabled,
   *             then bounces and complaints will be sent to this email address. This takes precedence
   *             over any Return-Path header that you might include in the raw text of the
   *             message.</p>
   */
  Source?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to send for
   *             the email address specified in the <code>Source</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to send from <code>user@example.com</code>, then you
   *             would specify the <code>SourceArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>Source</code> to be <code>user@example.com</code>.</p>
   *         <p>Instead of using this parameter, you can use the X-header
   *                 <code>X-SES-SOURCE-ARN</code> in the raw message of the email. If you use both the
   *                 <code>SourceArn</code> parameter and the corresponding X-header, Amazon SES uses the
   *             value of the <code>SourceArn</code> parameter.</p>
   *         <note>
   *             <p>For information about when to use this parameter, see the description of
   *                     <code>SendRawEmail</code> in this guide, or see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-delegate-sender-tasks-email.html">Amazon SES Developer Guide</a>.</p>
   *         </note>
   */
  SourceArn?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using <code>SendRawEmail</code>. Tags correspond to characteristics of the email that
   *             you define, so that you can publish email sending events.</p>
   */
  Tags?: Array<MessageTag>;
}

export namespace SendRawEmailRequest {
  export function isa(o: any): o is SendRawEmailRequest {
    return _smithy.isa(o, "SendRawEmailRequest");
  }
}

/**
 * <p>Represents a unique message ID.</p>
 */
export interface SendRawEmailResponse extends $MetadataBearer {
  __type?: "SendRawEmailResponse";
  /**
   * <p>The unique message identifier returned from the <code>SendRawEmail</code> action.
   *         </p>
   */
  MessageId: string | undefined;
}

export namespace SendRawEmailResponse {
  export function isa(o: any): o is SendRawEmailResponse {
    return _smithy.isa(o, "SendRawEmailResponse");
  }
}

/**
 * <p>Represents a request to send a templated email using Amazon SES. For more information, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendTemplatedEmailRequest {
  __type?: "SendTemplatedEmailRequest";
  /**
   * <p>The name of the configuration set to use when you send an email using
   *                 <code>SendTemplatedEmail</code>.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The destination for this email, composed of To:, CC:, and BCC: fields. A Destination
   *             can include up to 50 recipients across these three fields.</p>
   */
  Destination: Destination | undefined;

  /**
   * <p>The reply-to email address(es) for the message. If the recipient replies to the
   *             message, each reply-to address will receive the reply.</p>
   */
  ReplyToAddresses?: Array<string>;

  /**
   * <p>The email address that bounces and complaints will be forwarded to when feedback
   *             forwarding is enabled. If the message cannot be delivered to the recipient, then an
   *             error message will be returned from the recipient's ISP; this message will then be
   *             forwarded to the email address specified by the <code>ReturnPath</code> parameter. The
   *                 <code>ReturnPath</code> parameter is never overwritten. This email address must be
   *             either individually verified with Amazon SES, or from a domain that has been verified with
   *             Amazon SES. </p>
   */
  ReturnPath?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>ReturnPath</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to use <code>feedback@example.com</code>, then you
   *             would specify the <code>ReturnPathArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>ReturnPath</code> to be <code>feedback@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  ReturnPathArn?: string;

  /**
   * <p>The email address that is sending the email. This email address must be either
   *             individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *             For information about verifying identities, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-addresses-and-domains.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>If you are sending on behalf of another user and have been permitted to do so by a
   *             sending authorization policy, then you must also specify the <code>SourceArn</code>
   *             parameter. For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer Guide</a>.</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                     <i>local part</i> of a source email address (the part of the email
   *                 address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the <i>domain part</i> of an address (the
   *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
   *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>. The sender name (also known as the <i>friendly
   *                     name</i>) may contain non-ASCII characters. These characters must be
   *                 encoded using MIME encoded-word syntax, as described in<a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>. MIME encoded-word
   *                 syntax uses the following form:
   *                 <code>=?charset?encoding?encoded-text?=</code>.</p>
   *         </note>
   */
  Source: string | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to send for
   *             the email address specified in the <code>Source</code> parameter.</p>
   *         <p>For example, if the owner of <code>example.com</code> (which has ARN
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>) attaches a
   *             policy to it that authorizes you to send from <code>user@example.com</code>, then you
   *             would specify the <code>SourceArn</code> to be
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>, and the
   *                 <code>Source</code> to be <code>user@example.com</code>.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  SourceArn?: string;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using <code>SendTemplatedEmail</code>. Tags correspond to characteristics of the email
   *             that you define, so that you can publish email sending events.</p>
   */
  Tags?: Array<MessageTag>;

  /**
   * <p>The template to use when sending this email.</p>
   */
  Template: string | undefined;

  /**
   * <p>The ARN of the template to use when sending this email.</p>
   */
  TemplateArn?: string;

  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  TemplateData: string | undefined;
}

export namespace SendTemplatedEmailRequest {
  export function isa(o: any): o is SendTemplatedEmailRequest {
    return _smithy.isa(o, "SendTemplatedEmailRequest");
  }
}

export interface SendTemplatedEmailResponse extends $MetadataBearer {
  __type?: "SendTemplatedEmailResponse";
  /**
   * <p>The unique message identifier returned from the <code>SendTemplatedEmail</code>
   *             action. </p>
   */
  MessageId: string | undefined;
}

export namespace SendTemplatedEmailResponse {
  export function isa(o: any): o is SendTemplatedEmailResponse {
    return _smithy.isa(o, "SendTemplatedEmailResponse");
  }
}

/**
 * <p>Represents a request to set a receipt rule set as the active receipt rule set. You use
 *             receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface SetActiveReceiptRuleSetRequest {
  __type?: "SetActiveReceiptRuleSetRequest";
  /**
   * <p>The name of the receipt rule set to make active. Setting this value to null disables
   *             all email receiving.</p>
   */
  RuleSetName?: string;
}

export namespace SetActiveReceiptRuleSetRequest {
  export function isa(o: any): o is SetActiveReceiptRuleSetRequest {
    return _smithy.isa(o, "SetActiveReceiptRuleSetRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetActiveReceiptRuleSetResponse extends $MetadataBearer {
  __type?: "SetActiveReceiptRuleSetResponse";
}

export namespace SetActiveReceiptRuleSetResponse {
  export function isa(o: any): o is SetActiveReceiptRuleSetResponse {
    return _smithy.isa(o, "SetActiveReceiptRuleSetResponse");
  }
}

/**
 * <p>Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For
 *             more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer Guide</a>.</p>
 */
export interface SetIdentityDkimEnabledRequest {
  __type?: "SetIdentityDkimEnabledRequest";
  /**
   * <p>Sets whether DKIM signing is enabled for an identity. Set to <code>true</code> to
   *             enable DKIM signing for this identity; <code>false</code> to disable it. </p>
   */
  DkimEnabled: boolean | undefined;

  /**
   * <p>The identity for which DKIM signing should be enabled or disabled.</p>
   */
  Identity: string | undefined;
}

export namespace SetIdentityDkimEnabledRequest {
  export function isa(o: any): o is SetIdentityDkimEnabledRequest {
    return _smithy.isa(o, "SetIdentityDkimEnabledRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetIdentityDkimEnabledResponse extends $MetadataBearer {
  __type?: "SetIdentityDkimEnabledResponse";
}

export namespace SetIdentityDkimEnabledResponse {
  export function isa(o: any): o is SetIdentityDkimEnabledResponse {
    return _smithy.isa(o, "SetIdentityDkimEnabledResponse");
  }
}

/**
 * <p>Represents a request to enable or disable whether Amazon SES forwards you bounce and
 *             complaint notifications through email. For information about email feedback forwarding,
 *             see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-email.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SetIdentityFeedbackForwardingEnabledRequest {
  __type?: "SetIdentityFeedbackForwardingEnabledRequest";
  /**
   * <p>Sets whether Amazon SES will forward bounce and complaint notifications as email.
   *                 <code>true</code> specifies that Amazon SES will forward bounce and complaint
   *             notifications as email, in addition to any Amazon SNS topic publishing otherwise specified.
   *                 <code>false</code> specifies that Amazon SES will publish bounce and complaint
   *             notifications only through Amazon SNS. This value can only be set to <code>false</code> when
   *             Amazon SNS topics are set for both <code>Bounce</code> and <code>Complaint</code>
   *             notification types.</p>
   */
  ForwardingEnabled: boolean | undefined;

  /**
   * <p>The identity for which to set bounce and complaint notification forwarding. Examples:
   *                 <code>user@example.com</code>, <code>example.com</code>.</p>
   */
  Identity: string | undefined;
}

export namespace SetIdentityFeedbackForwardingEnabledRequest {
  export function isa(
    o: any
  ): o is SetIdentityFeedbackForwardingEnabledRequest {
    return _smithy.isa(o, "SetIdentityFeedbackForwardingEnabledRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetIdentityFeedbackForwardingEnabledResponse
  extends $MetadataBearer {
  __type?: "SetIdentityFeedbackForwardingEnabledResponse";
}

export namespace SetIdentityFeedbackForwardingEnabledResponse {
  export function isa(
    o: any
  ): o is SetIdentityFeedbackForwardingEnabledResponse {
    return _smithy.isa(o, "SetIdentityFeedbackForwardingEnabledResponse");
  }
}

/**
 * <p>Represents a request to set whether Amazon SES includes the original email headers in the
 *             Amazon SNS notifications of a specified type. For information about notifications, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SetIdentityHeadersInNotificationsEnabledRequest {
  __type?: "SetIdentityHeadersInNotificationsEnabledRequest";
  /**
   * <p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the
   *             specified notification type. A value of <code>true</code> specifies that Amazon SES will
   *             include headers in notifications, and a value of <code>false</code> specifies that Amazon SES
   *             will not include headers in notifications.</p>
   *         <p>This value can only be set when <code>NotificationType</code> is already set to use a
   *             particular Amazon SNS topic.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The identity for which to enable or disable headers in notifications. Examples:
   *                 <code>user@example.com</code>, <code>example.com</code>.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The notification type for which to enable or disable headers in notifications. </p>
   */
  NotificationType: NotificationType | string | undefined;
}

export namespace SetIdentityHeadersInNotificationsEnabledRequest {
  export function isa(
    o: any
  ): o is SetIdentityHeadersInNotificationsEnabledRequest {
    return _smithy.isa(o, "SetIdentityHeadersInNotificationsEnabledRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetIdentityHeadersInNotificationsEnabledResponse
  extends $MetadataBearer {
  __type?: "SetIdentityHeadersInNotificationsEnabledResponse";
}

export namespace SetIdentityHeadersInNotificationsEnabledResponse {
  export function isa(
    o: any
  ): o is SetIdentityHeadersInNotificationsEnabledResponse {
    return _smithy.isa(o, "SetIdentityHeadersInNotificationsEnabledResponse");
  }
}

/**
 * <p>Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for
 *             a verified identity. For information about using a custom MAIL FROM domain, see the
 *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface SetIdentityMailFromDomainRequest {
  __type?: "SetIdentityMailFromDomainRequest";
  /**
   * <p>The action that you want Amazon SES to take if it cannot successfully read the required MX
   *             record when you send an email. If you choose <code>UseDefaultValue</code>, Amazon SES will
   *             use amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose
   *                 <code>RejectMessage</code>, Amazon SES will return a
   *                 <code>MailFromDomainNotVerified</code> error and not send the email.</p>
   *         <p>The action specified in <code>BehaviorOnMXFailure</code> is taken when the custom MAIL
   *             FROM domain setup is in the <code>Pending</code>, <code>Failed</code>, and
   *                 <code>TemporaryFailure</code> states.</p>
   */
  BehaviorOnMXFailure?: BehaviorOnMXFailure | string;

  /**
   * <p>The verified identity for which you want to enable or disable the specified custom
   *             MAIL FROM domain.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM
   *             domain must 1) be a subdomain of the verified identity, 2) not be used in a "From"
   *             address if the MAIL FROM domain is the destination of email feedback forwarding (for
   *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html">Amazon SES Developer Guide</a>), and
   *             3) not be used to receive emails. A value of <code>null</code> disables the custom MAIL
   *             FROM setting for the identity.</p>
   */
  MailFromDomain?: string;
}

export namespace SetIdentityMailFromDomainRequest {
  export function isa(o: any): o is SetIdentityMailFromDomainRequest {
    return _smithy.isa(o, "SetIdentityMailFromDomainRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetIdentityMailFromDomainResponse extends $MetadataBearer {
  __type?: "SetIdentityMailFromDomainResponse";
}

export namespace SetIdentityMailFromDomainResponse {
  export function isa(o: any): o is SetIdentityMailFromDomainResponse {
    return _smithy.isa(o, "SetIdentityMailFromDomainResponse");
  }
}

/**
 * <p>Represents a request to specify the Amazon SNS topic to which Amazon SES will publish bounce,
 *             complaint, or delivery notifications for emails sent with that identity as the Source.
 *             For information about Amazon SES notifications, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications-via-sns.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SetIdentityNotificationTopicRequest {
  __type?: "SetIdentityNotificationTopicRequest";
  /**
   * <p>The identity (email address or domain) that you want to set the Amazon SNS topic
   *             for.</p>
   *         <important>
   *             <p>You can only specify a verified identity for this parameter.</p>
   *         </important>
   *         <p>You can specify an identity by using its name or by using its Amazon Resource Name
   *             (ARN). The following examples are all valid identities: <code>sender@example.com</code>,
   *                 <code>example.com</code>,
   *                 <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   */
  Identity: string | undefined;

  /**
   * <p>The type of notifications that will be published to the specified Amazon SNS topic.</p>
   */
  NotificationType: NotificationType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from
   *             the request or a null value is passed, <code>SnsTopic</code> is cleared and publishing
   *             is disabled.</p>
   */
  SnsTopic?: string;
}

export namespace SetIdentityNotificationTopicRequest {
  export function isa(o: any): o is SetIdentityNotificationTopicRequest {
    return _smithy.isa(o, "SetIdentityNotificationTopicRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetIdentityNotificationTopicResponse extends $MetadataBearer {
  __type?: "SetIdentityNotificationTopicResponse";
}

export namespace SetIdentityNotificationTopicResponse {
  export function isa(o: any): o is SetIdentityNotificationTopicResponse {
    return _smithy.isa(o, "SetIdentityNotificationTopicResponse");
  }
}

/**
 * <p>Represents a request to set the position of a receipt rule in a receipt rule set. You
 *             use receipt rule sets to receive email with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer Guide</a>.</p>
 */
export interface SetReceiptRulePositionRequest {
  __type?: "SetReceiptRulePositionRequest";
  /**
   * <p>The name of the receipt rule after which to place the specified receipt rule.</p>
   */
  After?: string;

  /**
   * <p>The name of the receipt rule to reposition.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The name of the receipt rule set that contains the receipt rule to reposition.</p>
   */
  RuleSetName: string | undefined;
}

export namespace SetReceiptRulePositionRequest {
  export function isa(o: any): o is SetReceiptRulePositionRequest {
    return _smithy.isa(o, "SetReceiptRulePositionRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface SetReceiptRulePositionResponse extends $MetadataBearer {
  __type?: "SetReceiptRulePositionResponse";
}

export namespace SetReceiptRulePositionResponse {
  export function isa(o: any): o is SetReceiptRulePositionResponse {
    return _smithy.isa(o, "SetReceiptRulePositionResponse");
  }
}

/**
 * <p>When included in a receipt rule, this action terminates the evaluation of the receipt
 *             rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p>
 *         <p>For information about setting a stop action in a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-stop.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface StopAction {
  __type?: "StopAction";
  /**
   * <p>The scope of the StopAction. The only acceptable value is <code>RuleSet</code>.</p>
   */
  Scope: StopScope | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is
   *             taken. An example of an Amazon SNS topic ARN is
   *                 <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about
   *             Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;
}

export namespace StopAction {
  export function isa(o: any): o is StopAction {
    return _smithy.isa(o, "StopAction");
  }
}

export enum StopScope {
  RULE_SET = "RuleSet"
}

/**
 * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
 *             part.</p>
 */
export interface Template {
  __type?: "Template";
  /**
   * <p>The HTML body of the email.</p>
   */
  HtmlPart?: string;

  /**
   * <p>The subject line of the email.</p>
   */
  SubjectPart?: string;

  /**
   * <p>The name of the template. You will refer to this name when you send email using the
   *                 <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code>
   *             operations.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The email body that will be visible to recipients whose email clients do not display
   *             HTML.</p>
   */
  TextPart?: string;
}

export namespace Template {
  export function isa(o: any): o is Template {
    return _smithy.isa(o, "Template");
  }
}

/**
 * <p>Indicates that the Template object you specified does not exist in your Amazon SES
 *             account.</p>
 */
export interface TemplateDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TemplateDoesNotExistException";
  $fault: "client";
  TemplateName?: string;
  message?: string;
}

export namespace TemplateDoesNotExistException {
  export function isa(o: any): o is TemplateDoesNotExistException {
    return _smithy.isa(o, "TemplateDoesNotExistException");
  }
}

/**
 * <p>Contains information about an email template.</p>
 */
export interface TemplateMetadata {
  __type?: "TemplateMetadata";
  /**
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name of the template.</p>
   */
  Name?: string;
}

export namespace TemplateMetadata {
  export function isa(o: any): o is TemplateMetadata {
    return _smithy.isa(o, "TemplateMetadata");
  }
}

export interface TestRenderTemplateRequest {
  __type?: "TestRenderTemplateRequest";
  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  TemplateData: string | undefined;

  /**
   * <p>The name of the template that you want to render.</p>
   */
  TemplateName: string | undefined;
}

export namespace TestRenderTemplateRequest {
  export function isa(o: any): o is TestRenderTemplateRequest {
    return _smithy.isa(o, "TestRenderTemplateRequest");
  }
}

export interface TestRenderTemplateResponse extends $MetadataBearer {
  __type?: "TestRenderTemplateResponse";
  /**
   * <p>The complete MIME message rendered by applying the data in the TemplateData parameter
   *             to the template specified in the TemplateName parameter.</p>
   */
  RenderedTemplate?: string;
}

export namespace TestRenderTemplateResponse {
  export function isa(o: any): o is TestRenderTemplateResponse {
    return _smithy.isa(o, "TestRenderTemplateResponse");
  }
}

export enum TlsPolicy {
  Optional = "Optional",
  Require = "Require"
}

/**
 * <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This
 *             domain captures open and click events generated by Amazon SES emails.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring
 *                 Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES
 *                 Developer Guide</i>.</p>
 */
export interface TrackingOptions {
  __type?: "TrackingOptions";
  /**
   * <p>The custom subdomain that will be used to redirect email recipients to the Amazon SES
   *             event tracking domain.</p>
   */
  CustomRedirectDomain?: string;
}

export namespace TrackingOptions {
  export function isa(o: any): o is TrackingOptions {
    return _smithy.isa(o, "TrackingOptions");
  }
}

/**
 * <p>Indicates that the configuration set you specified already contains a TrackingOptions
 *             object.</p>
 */
export interface TrackingOptionsAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TrackingOptionsAlreadyExistsException";
  $fault: "client";
  /**
   * <p>Indicates that a TrackingOptions object already exists in the specified configuration
   *             set.</p>
   */
  ConfigurationSetName?: string;

  message?: string;
}

export namespace TrackingOptionsAlreadyExistsException {
  export function isa(o: any): o is TrackingOptionsAlreadyExistsException {
    return _smithy.isa(o, "TrackingOptionsAlreadyExistsException");
  }
}

/**
 * <p>Indicates that the TrackingOptions object you specified does not exist.</p>
 */
export interface TrackingOptionsDoesNotExistException
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TrackingOptionsDoesNotExistException";
  $fault: "client";
  /**
   * <p>Indicates that a TrackingOptions object does not exist in the specified configuration
   *             set.</p>
   */
  ConfigurationSetName?: string;

  message?: string;
}

export namespace TrackingOptionsDoesNotExistException {
  export function isa(o: any): o is TrackingOptionsDoesNotExistException {
    return _smithy.isa(o, "TrackingOptionsDoesNotExistException");
  }
}

/**
 * <p>Represents a request to enable or disable the email sending capabilities for your
 *             entire Amazon SES account.</p>
 */
export interface UpdateAccountSendingEnabledRequest {
  __type?: "UpdateAccountSendingEnabledRequest";
  /**
   * <p>Describes whether email sending is enabled or disabled for your Amazon SES account in the
   *             current AWS Region.</p>
   */
  Enabled?: boolean;
}

export namespace UpdateAccountSendingEnabledRequest {
  export function isa(o: any): o is UpdateAccountSendingEnabledRequest {
    return _smithy.isa(o, "UpdateAccountSendingEnabledRequest");
  }
}

/**
 * <p>Represents a request to update the event destination of a configuration set.
 *             Configuration sets enable you to publish email sending events. For information about
 *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  __type?: "UpdateConfigurationSetEventDestinationRequest";
  /**
   * <p>The name of the configuration set that contains the event destination that you want to
   *             update.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The event destination object that you want to apply to the specified configuration
   *             set.</p>
   */
  EventDestination: EventDestination | undefined;
}

export namespace UpdateConfigurationSetEventDestinationRequest {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationRequest {
    return _smithy.isa(o, "UpdateConfigurationSetEventDestinationRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface UpdateConfigurationSetEventDestinationResponse
  extends $MetadataBearer {
  __type?: "UpdateConfigurationSetEventDestinationResponse";
}

export namespace UpdateConfigurationSetEventDestinationResponse {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetEventDestinationResponse {
    return _smithy.isa(o, "UpdateConfigurationSetEventDestinationResponse");
  }
}

/**
 * <p>Represents a request to modify the reputation metric publishing settings for a
 *             configuration set.</p>
 */
export interface UpdateConfigurationSetReputationMetricsEnabledRequest {
  __type?: "UpdateConfigurationSetReputationMetricsEnabledRequest";
  /**
   * <p>The name of the configuration set that you want to update.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>Describes whether or not Amazon SES will publish reputation metrics for the configuration
   *             set, such as bounce and complaint rates, to Amazon CloudWatch.</p>
   */
  Enabled: boolean | undefined;
}

export namespace UpdateConfigurationSetReputationMetricsEnabledRequest {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetReputationMetricsEnabledRequest {
    return _smithy.isa(
      o,
      "UpdateConfigurationSetReputationMetricsEnabledRequest"
    );
  }
}

/**
 * <p>Represents a request to enable or disable the email sending capabilities for a
 *             specific configuration set.</p>
 */
export interface UpdateConfigurationSetSendingEnabledRequest {
  __type?: "UpdateConfigurationSetSendingEnabledRequest";
  /**
   * <p>The name of the configuration set that you want to update.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>Describes whether email sending is enabled or disabled for the configuration set.
   *         </p>
   */
  Enabled: boolean | undefined;
}

export namespace UpdateConfigurationSetSendingEnabledRequest {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetSendingEnabledRequest {
    return _smithy.isa(o, "UpdateConfigurationSetSendingEnabledRequest");
  }
}

/**
 * <p>Represents a request to update the tracking options for a configuration set. </p>
 */
export interface UpdateConfigurationSetTrackingOptionsRequest {
  __type?: "UpdateConfigurationSetTrackingOptionsRequest";
  /**
   * <p>The name of the configuration set for which you want to update the custom tracking
   *             domain.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>A domain that is used to redirect email recipients to an Amazon SES-operated domain. This
   *             domain captures open and click events generated by Amazon SES emails.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/configure-custom-open-click-domains.html">Configuring
   *                 Custom Domains to Handle Open and Click Tracking</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TrackingOptions: TrackingOptions | undefined;
}

export namespace UpdateConfigurationSetTrackingOptionsRequest {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetTrackingOptionsRequest {
    return _smithy.isa(o, "UpdateConfigurationSetTrackingOptionsRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface UpdateConfigurationSetTrackingOptionsResponse
  extends $MetadataBearer {
  __type?: "UpdateConfigurationSetTrackingOptionsResponse";
}

export namespace UpdateConfigurationSetTrackingOptionsResponse {
  export function isa(
    o: any
  ): o is UpdateConfigurationSetTrackingOptionsResponse {
    return _smithy.isa(o, "UpdateConfigurationSetTrackingOptionsResponse");
  }
}

/**
 * <p>Represents a request to update an existing custom verification email template.</p>
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  __type?: "UpdateCustomVerificationEmailTemplateRequest";
  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent?: string;

  /**
   * <p>The name of the custom verification email template that you want to update.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;
}

export namespace UpdateCustomVerificationEmailTemplateRequest {
  export function isa(
    o: any
  ): o is UpdateCustomVerificationEmailTemplateRequest {
    return _smithy.isa(o, "UpdateCustomVerificationEmailTemplateRequest");
  }
}

/**
 * <p>Represents a request to update a receipt rule. You use receipt rules to receive email
 *             with Amazon SES. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-concepts.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface UpdateReceiptRuleRequest {
  __type?: "UpdateReceiptRuleRequest";
  /**
   * <p>A data structure that contains the updated receipt rule information.</p>
   */
  Rule: ReceiptRule | undefined;

  /**
   * <p>The name of the receipt rule set that the receipt rule belongs to.</p>
   */
  RuleSetName: string | undefined;
}

export namespace UpdateReceiptRuleRequest {
  export function isa(o: any): o is UpdateReceiptRuleRequest {
    return _smithy.isa(o, "UpdateReceiptRuleRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface UpdateReceiptRuleResponse extends $MetadataBearer {
  __type?: "UpdateReceiptRuleResponse";
}

export namespace UpdateReceiptRuleResponse {
  export function isa(o: any): o is UpdateReceiptRuleResponse {
    return _smithy.isa(o, "UpdateReceiptRuleResponse");
  }
}

export interface UpdateTemplateRequest {
  __type?: "UpdateTemplateRequest";
  /**
   * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
   *             part.</p>
   */
  Template: Template | undefined;
}

export namespace UpdateTemplateRequest {
  export function isa(o: any): o is UpdateTemplateRequest {
    return _smithy.isa(o, "UpdateTemplateRequest");
  }
}

export interface UpdateTemplateResponse extends $MetadataBearer {
  __type?: "UpdateTemplateResponse";
}

export namespace UpdateTemplateResponse {
  export function isa(o: any): o is UpdateTemplateResponse {
    return _smithy.isa(o, "UpdateTemplateResponse");
  }
}

export type VerificationStatus =
  | "Failed"
  | "NotStarted"
  | "Pending"
  | "Success"
  | "TemporaryFailure";

/**
 * <p>Represents a request to generate the CNAME records needed to set up Easy DKIM with
 *             Amazon SES. For more information about setting up Easy DKIM, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface VerifyDomainDkimRequest {
  __type?: "VerifyDomainDkimRequest";
  /**
   * <p>The name of the domain to be verified for Easy DKIM signing.</p>
   */
  Domain: string | undefined;
}

export namespace VerifyDomainDkimRequest {
  export function isa(o: any): o is VerifyDomainDkimRequest {
    return _smithy.isa(o, "VerifyDomainDkimRequest");
  }
}

/**
 * <p>Returns CNAME records that you must publish to the DNS server of your domain to set up
 *             Easy DKIM with Amazon SES.</p>
 */
export interface VerifyDomainDkimResponse extends $MetadataBearer {
  __type?: "VerifyDomainDkimResponse";
  /**
   * <p>A set of character strings that represent the domain's identity. If the identity is an
   *             email address, the tokens represent the domain of that address.</p>
   *         <p>Using these tokens, you need to create DNS CNAME records that point to DKIM public
   *             keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you've updated your DNS
   *             records. This detection process might take up to 72 hours. After successful detection,
   *             Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to
   *             domain identities, not email address identities.)</p>
   *         <p>For more information about creating DNS records using DKIM tokens, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  DkimTokens: Array<string> | undefined;
}

export namespace VerifyDomainDkimResponse {
  export function isa(o: any): o is VerifyDomainDkimResponse {
    return _smithy.isa(o, "VerifyDomainDkimResponse");
  }
}

/**
 * <p>Represents a request to begin Amazon SES domain verification and to generate the TXT
 *             records that you must publish to the DNS server of your domain to complete the
 *             verification. For information about domain verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface VerifyDomainIdentityRequest {
  __type?: "VerifyDomainIdentityRequest";
  /**
   * <p>The domain to be verified.</p>
   */
  Domain: string | undefined;
}

export namespace VerifyDomainIdentityRequest {
  export function isa(o: any): o is VerifyDomainIdentityRequest {
    return _smithy.isa(o, "VerifyDomainIdentityRequest");
  }
}

/**
 * <p>Returns a TXT record that you must publish to the DNS server of your domain to
 *             complete domain verification with Amazon SES.</p>
 */
export interface VerifyDomainIdentityResponse extends $MetadataBearer {
  __type?: "VerifyDomainIdentityResponse";
  /**
   * <p>A TXT record that you must place in the DNS settings of the domain to complete domain
   *             verification with Amazon SES.</p>
   *         <p>As Amazon SES searches for the TXT record, the domain's verification status is "Pending".
   *             When Amazon SES detects the record, the domain's verification status changes to "Success". If
   *             Amazon SES is unable to detect the record within 72 hours, the domain's verification status
   *             changes to "Failed." In that case, if you still want to verify the domain, you must
   *             restart the verification process from the beginning.</p>
   */
  VerificationToken: string | undefined;
}

export namespace VerifyDomainIdentityResponse {
  export function isa(o: any): o is VerifyDomainIdentityResponse {
    return _smithy.isa(o, "VerifyDomainIdentityResponse");
  }
}

/**
 * <p>Represents a request to begin email address verification with Amazon SES. For information
 *             about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface VerifyEmailAddressRequest {
  __type?: "VerifyEmailAddressRequest";
  /**
   * <p>The email address to be verified.</p>
   */
  EmailAddress: string | undefined;
}

export namespace VerifyEmailAddressRequest {
  export function isa(o: any): o is VerifyEmailAddressRequest {
    return _smithy.isa(o, "VerifyEmailAddressRequest");
  }
}

/**
 * <p>Represents a request to begin email address verification with Amazon SES. For information
 *             about email address verification, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface VerifyEmailIdentityRequest {
  __type?: "VerifyEmailIdentityRequest";
  /**
   * <p>The email address to be verified.</p>
   */
  EmailAddress: string | undefined;
}

export namespace VerifyEmailIdentityRequest {
  export function isa(o: any): o is VerifyEmailIdentityRequest {
    return _smithy.isa(o, "VerifyEmailIdentityRequest");
  }
}

/**
 * <p>An empty element returned on a successful request.</p>
 */
export interface VerifyEmailIdentityResponse extends $MetadataBearer {
  __type?: "VerifyEmailIdentityResponse";
}

export namespace VerifyEmailIdentityResponse {
  export function isa(o: any): o is VerifyEmailIdentityResponse {
    return _smithy.isa(o, "VerifyEmailIdentityResponse");
  }
}

/**
 * <p>When included in a receipt rule, this action calls Amazon WorkMail and, optionally,
 *             publishes a notification to Amazon Simple Notification Service (Amazon SNS). You will typically not use this action
 *             directly because Amazon WorkMail adds the rule automatically during its setup
 *             procedure.</p>
 *         <p>For information using a receipt rule to call Amazon WorkMail, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-workmail.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface WorkmailAction {
  __type?: "WorkmailAction";
  /**
   * <p>The ARN of the Amazon WorkMail organization. An example of an Amazon WorkMail
   *             organization ARN is
   *                 <code>arn:aws:workmail:us-west-2:123456789012:organization/m-68755160c4cb4e29a2b2f8fb58f359d7</code>.
   *             For information about Amazon WorkMail organizations, see the <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html">Amazon WorkMail
   *                 Administrator Guide</a>.</p>
   */
  OrganizationArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action
   *             is called. An example of an Amazon SNS topic ARN is
   *                 <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about
   *             Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;
}

export namespace WorkmailAction {
  export function isa(o: any): o is WorkmailAction {
    return _smithy.isa(o, "WorkmailAction");
  }
}
