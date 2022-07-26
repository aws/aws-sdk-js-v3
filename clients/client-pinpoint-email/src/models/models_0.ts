// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { PinpointEmailServiceException as __BaseException } from "./PinpointEmailServiceException";

/**
 * <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 */
export class AccountSuspendedException extends __BaseException {
  readonly name: "AccountSuspendedException" = "AccountSuspendedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSuspendedException, __BaseException>) {
    super({
      name: "AccountSuspendedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSuspendedException.prototype);
  }
}

/**
 * <p>The resource specified in your request already exists.</p>
 */
export class AlreadyExistsException extends __BaseException {
  readonly name: "AlreadyExistsException" = "AlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsException, __BaseException>) {
    super({
      name: "AlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsException.prototype);
  }
}

/**
 * <p>The input you provided is invalid.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p>The resource is being modified by another operation or thread.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

export enum TlsPolicy {
  OPTIONAL = "OPTIONAL",
  REQUIRE = "REQUIRE",
}

/**
 * <p>Used to associate a configuration set with a dedicated IP pool.</p>
 */
export interface DeliveryOptions {
  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy | string;

  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   */
  SendingPoolName?: string;
}

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using this
 *             configuration set in the current AWS Region. </p>
 */
export interface ReputationOptions {
  /**
   * <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   */
  ReputationMetricsEnabled?: boolean;

  /**
   * <p>The date and time (in Unix time) when the reputation metrics were last given a fresh
   *             start. When your account is given a fresh start, your reputation metrics are calculated
   *             starting from the date of the fresh start.</p>
   */
  LastFreshStart?: Date;
}

/**
 * <p>Used to enable or disable email sending for messages that use this configuration set
 *             in the current AWS Region.</p>
 */
export interface SendingOptions {
  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

/**
 * <p>An object that defines the tags that are associated with a resource.
 *                 A <i>tag</i> is a label that you optionally define and associate with
 *             a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different
 *             ways, such as by purpose, owner, environment, or other criteria. A resource can have as
 *             many as 50 tags.</p>
 *         <p>Each tag consists of a required <i>tag key</i> and an
 *                 associated <i>tag value</i>, both of which you define. A tag key is a
 *             general label that acts as a category for a more specific tag value. A tag value acts as
 *             a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag
 *             value can contain as many as 256 characters. The characters can be Unicode letters,
 *             digits, white space, or one of the following symbols: _ . : / = + -. The following
 *             additional restrictions apply to tags:</p>
 *         <ul>
 *             <li>
 *                 <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                 <p>For each associated resource, each tag key must be unique and it can have only
 *                     one value.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>aws:</code> prefix is reserved for use by AWS; you can’t use it in
 *                     any tag keys or values that you define. In addition, you can't edit or remove
 *                     tag keys or values that use this prefix. Tags that use this prefix don’t count
 *                     against the limit of 50 tags per resource.</p>
 *             </li>
 *             <li>
 *                 <p>You can associate tags with public or shared resources, but the tags are
 *                     available only for your AWS account, not any other accounts that share the
 *                     resource. In addition, the tags are available only for resources that are
 *                     located in the specified AWS Region for your AWS account.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *             128 characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *             value is 256 characters. The minimum length is 0 characters. If you don’t want a
   *             resource to have a specific tag value, don’t specify a value for this parameter. Amazon Pinpoint
   *             will set the value to an empty string.</p>
   */
  Value: string | undefined;
}

/**
 * <p>An object that defines the tracking options for a configuration set. When you use
 *             Amazon Pinpoint to send an email, it contains an invisible image that's used to track when
 *             recipients open your email. If your email contains links, those links are changed
 *             slightly in order to track when recipients click them.</p>
 *         <p>These images and links include references to a domain operated by AWS. You can
 *             optionally configure Amazon Pinpoint to use a domain that you operate for these images and
 *             links.</p>
 */
export interface TrackingOptions {
  /**
   * <p>The domain that you want to use for tracking open and click events.</p>
   */
  CustomRedirectDomain: string | undefined;
}

/**
 * <p>A request to create a configuration set.</p>
 */
export interface CreateConfigurationSetRequest {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the configuration set.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetResponse {}

/**
 * <p>There are too many instances of the specified resource type.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The resource you attempted to access doesn't exist.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p>Too many requests have been made to the operation.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

export enum DimensionValueSource {
  EMAIL_HEADER = "EMAIL_HEADER",
  LINK_TAG = "LINK_TAG",
  MESSAGE_TAG = "MESSAGE_TAG",
}

/**
 * <p>An object that defines the dimension configuration to use when you send Amazon Pinpoint email
 *             events to Amazon CloudWatch.</p>
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to
   *             meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_),
   *                     or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DimensionName: string | undefined;

  /**
   * <p>The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you
   *             want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header
   *             or a parameter to the SendEmail/SendRawEmail API, choose <code>messageTag</code>. If you
   *             want Amazon Pinpoint to use your own email headers, choose <code>emailHeader</code>. If you want
   *             Amazon Pinpoint to use link tags, choose <code>linkTags</code>.</p>
   */
  DimensionValueSource: DimensionValueSource | string | undefined;

  /**
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the
   *             value of the dimension when you send an email. This value has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_),
   *                     or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DefaultDimensionValue: string | undefined;
}

/**
 * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
 *             monitor and gain insights on your email sending metrics.</p>
 */
export interface CloudWatchDestination {
  /**
   * <p>An array of objects that define the dimensions to use when you send email events to
   *             Amazon CloudWatch.</p>
   */
  DimensionConfigurations: CloudWatchDimensionConfiguration[] | undefined;
}

/**
 * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
 *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 */
export interface KinesisFirehoseDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email
   *             events to the Amazon Kinesis Data Firehose stream.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events
   *             to.</p>
   */
  DeliveryStreamArn: string | undefined;
}

export enum EventType {
  BOUNCE = "BOUNCE",
  CLICK = "CLICK",
  COMPLAINT = "COMPLAINT",
  DELIVERY = "DELIVERY",
  OPEN = "OPEN",
  REJECT = "REJECT",
  RENDERING_FAILURE = "RENDERING_FAILURE",
  SEND = "SEND",
}

/**
 * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events
 *             to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments
 *             for your campaigns.</p>
 */
export interface PinpointDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email
   *             events to.</p>
   */
  ApplicationArn?: string;
}

/**
 * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
 *             send notification when certain email events occur.</p>
 */
export interface SnsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email
   *             events to. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer
   *                 Guide</a>.</p>
   */
  TopicArn: string | undefined;
}

/**
 * <p>An object that defines the event destination. Specifically, it defines which services
 *             receive events from emails sent using the configuration set that the event destination
 *             is associated with. Also defines the types of events that are sent to the event
 *             destination.</p>
 */
export interface EventDestinationDefinition {
  /**
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An array that specifies which events Amazon Pinpoint should send to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   */
  MatchingEventTypes?: (EventType | string)[];

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events
   *             to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments
   *             for your campaigns.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * <p>A request to add an event destination to a configuration set.</p>
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * <p>The name of the configuration set that you want to add an event destination to.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>A name that identifies the event destination within the configuration set.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * <p>A request to create a new dedicated IP pool.</p>
 */
export interface CreateDedicatedIpPoolRequest {
  /**
   * <p>The name of the dedicated IP pool.</p>
   */
  PoolName: string | undefined;

  /**
   * <p>An object that defines the tags (keys and values) that you want to associate with the
   *             pool.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateDedicatedIpPoolResponse {}

/**
 * <p>The raw email message.</p>
 */
export interface RawMessage {
  /**
   * <p>The raw email message. The message has to meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                 <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                 <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                 <p>Attachments must be in a file format that Amazon Pinpoint supports.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The entire message must be Base64 encoded.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                 <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   */
  Data: Uint8Array | undefined;
}

/**
 * <p>An object that represents the content of the email, and optionally a character set
 *             specification.</p>
 */
export interface Content {
  /**
   * <p>The content of the message itself.</p>
   */
  Data: string | undefined;

  /**
   * <p>The character set for the content. Because of the constraints of the SMTP protocol,
   *             Amazon Pinpoint uses 7-bit ASCII by default. If the text includes characters outside of the ASCII
   *             range, you have to specify a character set. For example, you could specify
   *                 <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.</p>
   */
  Charset?: string;
}

/**
 * <p>Represents the body of the email message.</p>
 */
export interface Body {
  /**
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that don't support HTML, or clients where the recipient has disabled HTML
   *             rendering.</p>
   */
  Text?: Content;

  /**
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that support HTML. HTML messages can include formatted text, hyperlinks, images,
   *             and more. </p>
   */
  Html?: Content;
}

/**
 * <p>Represents the email message that you're sending. The <code>Message</code> object
 *             consists of a subject line and a message body.</p>
 */
export interface Message {
  /**
   * <p>The subject line of the email. The subject line can only contain 7-bit ASCII
   *             characters. However, you can specify non-ASCII characters in the subject line by using
   *             encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   */
  Subject: Content | undefined;

  /**
   * <p>The body of the message. You can specify an HTML version of the message, a text-only
   *             version of the message, or both.</p>
   */
  Body: Body | undefined;
}

export interface Template {
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.</p>
   */
  TemplateData?: string;
}

/**
 * <p>An object that defines the entire content of the email, including the message headers
 *             and the body content. You can create a simple email message, in which you specify the
 *             subject and the text and HTML versions of the message body. You can also create raw
 *             messages, in which you specify a complete MIME-formatted message. Raw messages can
 *             include attachments and custom headers.</p>
 */
export interface EmailContent {
  /**
   * <p>The simple email message. The message consists of a subject and a message body.</p>
   */
  Simple?: Message;

  /**
   * <p>The raw email message. The message has to meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                 <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                 <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                 <p>If you include attachments, they must be in a file format that Amazon Pinpoint supports.
   *                     </p>
   *             </li>
   *             <li>
   *                 <p>The entire message must be Base64 encoded.</p>
   *             </li>
   *             <li>
   *                 <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                 <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   */
  Raw?: RawMessage;

  /**
   * <p>The template to use for the email message.</p>
   */
  Template?: Template;
}

/**
 * <p>A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will
 *             be handled by various email providers around the world. When you perform a predictive inbox placement test, you
 *             provide a sample message that contains the content that you plan to send to your
 *             customers. Amazon Pinpoint then sends that message to special email addresses spread across
 *             several major email providers. After about 24 hours, the test is complete, and you can
 *             use the <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 */
export interface CreateDeliverabilityTestReportRequest {
  /**
   * <p>A unique name that helps you to identify the predictive inbox placement test when you retrieve the
   *             results.</p>
   */
  ReportName?: string;

  /**
   * <p>The email address that the predictive inbox placement test email was sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The HTML body of the message that you sent when you performed the predictive inbox placement test.</p>
   */
  Content: EmailContent | undefined;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the predictive inbox placement test.</p>
   */
  Tags?: Tag[];
}

export enum DeliverabilityTestStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>Information about the predictive inbox placement test that you created.</p>
 */
export interface CreateDeliverabilityTestReportResponse {
  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;

  /**
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus: DeliverabilityTestStatus | string | undefined;
}

/**
 * <p>The message can't be sent because the sending domain isn't verified.</p>
 */
export class MailFromDomainNotVerifiedException extends __BaseException {
  readonly name: "MailFromDomainNotVerifiedException" = "MailFromDomainNotVerifiedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MailFromDomainNotVerifiedException, __BaseException>) {
    super({
      name: "MailFromDomainNotVerifiedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MailFromDomainNotVerifiedException.prototype);
  }
}

/**
 * <p>The message can't be sent because it contains invalid content.</p>
 */
export class MessageRejected extends __BaseException {
  readonly name: "MessageRejected" = "MessageRejected";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MessageRejected, __BaseException>) {
    super({
      name: "MessageRejected",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MessageRejected.prototype);
  }
}

/**
 * <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 */
export class SendingPausedException extends __BaseException {
  readonly name: "SendingPausedException" = "SendingPausedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SendingPausedException, __BaseException>) {
    super({
      name: "SendingPausedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SendingPausedException.prototype);
  }
}

/**
 * <p>A request to begin the verification process for an email identity (an email address or
 *             domain).</p>
 */
export interface CreateEmailIdentityRequest {
  /**
   * <p>The email address or domain that you want to verify.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the email identity.</p>
   */
  Tags?: Tag[];
}

export enum DkimStatus {
  FAILED = "FAILED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
}

/**
 * <p>An object that contains information about the DKIM configuration for an email
 *             identity.</p>
 */
export interface DkimAttributes {
  /**
   * <p>If the value is <code>true</code>, then the messages that Amazon Pinpoint sends from the
   *             identity are DKIM-signed. If the value is <code>false</code>, then the messages that
   *             Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;

  /**
   * <p>Describes whether or not Amazon Pinpoint has successfully located the DKIM records in the DNS
   *             records for the domain. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – Amazon Pinpoint hasn't yet located the DKIM records in the
   *                     DNS configuration for the domain, but will continue to attempt to locate
   *                     them.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – Amazon Pinpoint located the DKIM records in the DNS
   *                     configuration for the domain and determined that they're correct. Amazon Pinpoint can now
   *                     send DKIM-signed email from the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – Amazon Pinpoint was unable to locate the DKIM records in the
   *                     DNS settings for the domain, and won't continue to search for them.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon Pinpoint from determining the DKIM status for the domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – Amazon Pinpoint hasn't yet started searching for the
   *                     DKIM records in the DKIM records for the domain.</p>
   *             </li>
   *          </ul>
   */
  Status?: DkimStatus | string;

  /**
   * <p>A set of unique strings that you use to create a set of CNAME records that you add to
   *             the DNS configuration for your domain. When Amazon Pinpoint detects these records in the DNS
   *             configuration for your domain, the DKIM authentication process is complete. Amazon Pinpoint
   *             usually detects these records within about 72 hours of adding them to the DNS
   *             configuration for your domain.</p>
   */
  Tokens?: string[];
}

export enum IdentityType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  MANAGED_DOMAIN = "MANAGED_DOMAIN",
}

/**
 * <p>If the email identity is a domain, this object contains tokens that you can use to
 *             create a set of CNAME records. To sucessfully verify your domain, you have to add these
 *             records to the DNS configuration for your domain.</p>
 *         <p>If the email identity is an email address, this object is empty. </p>
 */
export interface CreateEmailIdentityResponse {
  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email
   *             from verified email addresses or domains. For more information about verifying
   *             identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * <p>An object that contains information about the DKIM attributes for the identity. This
   *             object includes the tokens that you use to create the CNAME records that are required to
   *             complete the DKIM verification process.</p>
   */
  DkimAttributes?: DkimAttributes;
}

/**
 * <p>A request to delete a configuration set.</p>
 */
export interface DeleteConfigurationSetRequest {
  /**
   * <p>The name of the configuration set that you want to delete.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetResponse {}

/**
 * <p>A request to delete an event destination from a configuration set.</p>
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * <p>The name of the configuration set that contains the event destination that you want to
   *             delete.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination that you want to delete.</p>
   */
  EventDestinationName: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * <p>A request to delete a dedicated IP pool.</p>
 */
export interface DeleteDedicatedIpPoolRequest {
  /**
   * <p>The name of the dedicated IP pool that you want to delete.</p>
   */
  PoolName: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteDedicatedIpPoolResponse {}

/**
 * <p>A request to delete an existing email identity. When you delete an identity, you lose
 *             the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability
 *             to send email by completing the verification process for the identity again.</p>
 */
export interface DeleteEmailIdentityRequest {
  /**
   * <p>The identity (that is, the email address or domain) that you want to delete from your
   *             Amazon Pinpoint account.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityResponse {}

/**
 * <p>A request to obtain information about the email-sending capabilities of your Amazon Pinpoint
 *             account.</p>
 */
export interface GetAccountRequest {}

/**
 * <p>An object that contains information about the per-day and per-second sending limits
 *             for your Amazon Pinpoint account in the current AWS Region.</p>
 */
export interface SendQuota {
  /**
   * <p>The maximum number of emails that you can send in the current AWS Region over a
   *             24-hour period. This value is also called your <i>sending
   *             quota</i>.</p>
   */
  Max24HourSend?: number;

  /**
   * <p>The maximum number of emails that you can send per second in the current AWS Region.
   *             This value is also called your <i>maximum sending rate</i> or your
   *                 <i>maximum TPS (transactions per second) rate</i>.</p>
   */
  MaxSendRate?: number;

  /**
   * <p>The number of emails sent from your Amazon Pinpoint account in the current AWS Region over the
   *             past 24 hours.</p>
   */
  SentLast24Hours?: number;
}

/**
 * <p>A list of details about the email-sending capabilities of your Amazon Pinpoint account in the
 *             current AWS Region.</p>
 */
export interface GetAccountResponse {
  /**
   * <p>An object that contains information about the per-day and per-second sending limits
   *             for your Amazon Pinpoint account in the current AWS Region.</p>
   */
  SendQuota?: SendQuota;

  /**
   * <p>Indicates whether or not email sending is enabled for your Amazon Pinpoint account in the
   *             current AWS Region.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP
   *             addresses that are associated with your account.</p>
   */
  DedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * <p>The reputation status of your Amazon Pinpoint account. The status can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>HEALTHY</code> – There are no reputation-related issues that
   *                     currently impact your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROBATION</code> – We've identified some issues with your Amazon Pinpoint
   *                     account. We're placing your account under review while you work on correcting
   *                     these issues.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SHUTDOWN</code> – Your account's ability to send email is
   *                     currently paused because of an issue with the email sent from your account. When
   *                     you correct the issue, you can contact us and request that your account's
   *                     ability to send email is resumed.</p>
   *             </li>
   *          </ul>
   */
  EnforcementStatus?: string;

  /**
   * <p>Indicates whether or not your account has production access in the current AWS
   *             Region.</p>
   *         <p>If the value is <code>false</code>, then your account is in the
   *                 <i>sandbox</i>. When your account is in the sandbox, you can only send
   *             email to verified identities. Additionally, the maximum number of emails you can send in
   *             a 24-hour period (your sending quota) is 200, and the maximum number of emails you can
   *             send per second (your maximum sending rate) is 1.</p>
   *         <p>If the value is <code>true</code>, then your account has production access. When your
   *             account has production access, you can send email to any address. The sending quota and
   *             maximum sending rate for your account vary based on your specific use case.</p>
   */
  ProductionAccessEnabled?: boolean;
}

/**
 * <p>A request to retrieve a list of the blacklists that your dedicated IP addresses appear
 *             on.</p>
 */
export interface GetBlacklistReportsRequest {
  /**
   * <p>A list of IP addresses that you want to retrieve blacklist information about. You can
   *             only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or
   *             Amazon SES.</p>
   */
  BlacklistItemNames: string[] | undefined;
}

/**
 * <p>An object that contains information about a blacklisting event that impacts one of the
 *             dedicated IP addresses that is associated with your account.</p>
 */
export interface BlacklistEntry {
  /**
   * <p>The name of the blacklist that the IP address appears on.</p>
   */
  RblName?: string;

  /**
   * <p>The time when the blacklisting event occurred, shown in Unix time format.</p>
   */
  ListingTime?: Date;

  /**
   * <p>Additional information about the blacklisting event, as provided by the blacklist
   *             maintainer.</p>
   */
  Description?: string;
}

/**
 * <p>An object that contains information about blacklist events.</p>
 */
export interface GetBlacklistReportsResponse {
  /**
   * <p>An object that contains information about a blacklist that one of your dedicated IP
   *             addresses appears on.</p>
   */
  BlacklistReport: Record<string, BlacklistEntry[]> | undefined;
}

/**
 * <p>A request to obtain information about a configuration set.</p>
 */
export interface GetConfigurationSetRequest {
  /**
   * <p>The name of the configuration set that you want to obtain more information
   *             about.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * <p>Information about a configuration set.</p>
 */
export interface GetConfigurationSetResponse {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon Pinpoint can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the configuration set.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>A request to obtain information about the event destinations for a configuration
 *             set.</p>
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * <p>The name of the configuration set that contains the event destination.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, and complaints. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 */
export interface EventDestination {
  /**
   * <p>A name that identifies the event destination.</p>
   */
  Name: string | undefined;

  /**
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The types of events that Amazon Pinpoint sends to the specified event destinations.</p>
   */
  MatchingEventTypes: (EventType | string)[] | undefined;

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events
   *             to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments
   *             for your campaigns.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * <p>Information about an event destination for a configuration set.</p>
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * <p>An array that includes all of the events destinations that have been configured for
   *             the configuration set.</p>
   */
  EventDestinations?: EventDestination[];
}

/**
 * <p>A request to obtain more information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpRequest {
  /**
   * <p>The IP address that you want to obtain more information about. The value you specify
   *             has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.</p>
   */
  Ip: string | undefined;
}

export enum WarmupStatus {
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon Pinpoint
 *             account.</p>
 *         <p></p>
 */
export interface DedicatedIp {
  /**
   * <p>An IP address that is reserved for use by your Amazon Pinpoint account.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The warm-up status of a dedicated IP address. The status can have one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code> – The IP address isn't ready to use because the
   *                     dedicated IP warm-up process is ongoing.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DONE</code> – The dedicated IP warm-up process is complete, and
   *                     the IP address is ready to use.</p>
   *             </li>
   *          </ul>
   */
  WarmupStatus: WarmupStatus | string | undefined;

  /**
   * <p>Indicates how complete the dedicated IP warm-up process is. When this value equals 1,
   *             the address has completed the warm-up process and is ready for use.</p>
   */
  WarmupPercentage: number | undefined;

  /**
   * <p>The name of the dedicated IP pool that the IP address is associated with.</p>
   */
  PoolName?: string;
}

/**
 * <p>Information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpResponse {
  /**
   * <p>An object that contains information about a dedicated IP address.</p>
   */
  DedicatedIp?: DedicatedIp;
}

/**
 * <p>A request to obtain more information about dedicated IP pools.</p>
 */
export interface GetDedicatedIpsRequest {
  /**
   * <p>The name of the IP pool that the dedicated IP address is associated with.</p>
   */
  PoolName?: string;

  /**
   * <p>A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the
   *             position of the dedicated IP pool in the list of IP pools.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * <p>Information about the dedicated IP addresses that are associated with your Amazon Pinpoint
 *             account.</p>
 */
export interface GetDedicatedIpsResponse {
  /**
   * <p>A list of dedicated IP addresses that are reserved for use by your Amazon Pinpoint
   *             account.</p>
   */
  DedicatedIps?: DedicatedIp[];

  /**
   * <p>A token that indicates that there are additional dedicated IP addresses to list. To
   *             view additional addresses, issue another request to <code>GetDedicatedIps</code>,
   *             passing this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the
 *             ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface GetDeliverabilityDashboardOptionsRequest {}

export enum DeliverabilityDashboardAccountStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  PENDING_EXPIRATION = "PENDING_EXPIRATION",
}

/**
 * <p>An object that contains information about the inbox placement data settings for a
 *             verified domain that’s associated with your AWS account. This data is available only
 *             if you enabled the Deliverability dashboard for the domain
 *                 (<code>PutDeliverabilityDashboardOption</code> operation).</p>
 */
export interface InboxPlacementTrackingOption {
  /**
   * <p>Specifies whether inbox placement data is being tracked for the domain.</p>
   */
  Global?: boolean;

  /**
   * <p>An array of strings, one for each major email provider that the inbox placement data
   *             applies to.</p>
   */
  TrackedIsps?: string[];
}

/**
 * <p>An object that contains information about the Deliverability dashboard subscription for a
 *             verified domain that you use to send email and currently has an active Deliverability dashboard
 *             subscription. If a Deliverability dashboard subscription is active for a domain, you gain access
 *             to reputation, inbox placement, and other metrics for the domain.</p>
 */
export interface DomainDeliverabilityTrackingOption {
  /**
   * <p>A verified domain that’s associated with your AWS account and currently has an
   *             active Deliverability dashboard subscription.</p>
   */
  Domain?: string;

  /**
   * <p>The date, in Unix time format, when you enabled the Deliverability dashboard for the
   *             domain.</p>
   */
  SubscriptionStartDate?: Date;

  /**
   * <p>An object that contains information about the inbox placement data settings for the
   *             domain.</p>
   */
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
}

/**
 * <p>An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.</p>
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * <p>Specifies whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. If this value
   *             is <code>true</code>, the dashboard is enabled.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * <p>The date, in Unix time format, when your current subscription to the Deliverability dashboard
   *             is scheduled to expire, if your subscription is scheduled to expire at the end of the
   *             current calendar month. This value is null if you have an active subscription that isn’t
   *             due to expire at the end of the month.</p>
   */
  SubscriptionExpiryDate?: Date;

  /**
   * <p>The current status of your Deliverability dashboard subscription. If this value is
   *                 <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end
   *             of the current calendar month.</p>
   */
  AccountStatus?: DeliverabilityDashboardAccountStatus | string;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at
   *             the end of the current calendar month.</p>
   */
  ActiveSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that's scheduled to expire at the
   *             end of the current calendar month.</p>
   */
  PendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];
}

/**
 * <p>A request to retrieve the results of a predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportRequest {
  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;
}

/**
 * <p>An object that contains metadata related to a predictive inbox placement test.</p>
 */
export interface DeliverabilityTestReport {
  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId?: string;

  /**
   * <p>A name that helps you identify a predictive inbox placement test report.</p>
   */
  ReportName?: string;

  /**
   * <p>The subject line for an email that you submitted in a predictive inbox placement test.</p>
   */
  Subject?: string;

  /**
   * <p>The sender address that you specified for the predictive inbox placement test.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The date and time when the predictive inbox placement test was created, in Unix time format.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus?: DeliverabilityTestStatus | string;
}

/**
 * <p>An object that contains inbox placement data for an email provider.</p>
 */
export interface PlacementStatistics {
  /**
   * <p>The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.</p>
   */
  InboxPercentage?: number;

  /**
   * <p>The percentage of emails that arrived in recipients' spam or junk mail folders during
   *             the predictive inbox placement test.</p>
   */
  SpamPercentage?: number;

  /**
   * <p>The percentage of emails that didn't arrive in recipients' inboxes at all during the
   *             predictive inbox placement test.</p>
   */
  MissingPercentage?: number;

  /**
   * <p>The percentage of emails that were authenticated by using Sender Policy Framework
   *             (SPF) during the predictive inbox placement test.</p>
   */
  SpfPercentage?: number;

  /**
   * <p>The percentage of emails that were authenticated by using DomainKeys Identified Mail
   *             (DKIM) during the predictive inbox placement test.</p>
   */
  DkimPercentage?: number;
}

/**
 * <p>An object that describes how email sent during the predictive inbox placement test was handled by a certain
 *             email provider.</p>
 */
export interface IspPlacement {
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>An object that contains inbox placement metrics for a specific email provider.</p>
   */
  PlacementStatistics?: PlacementStatistics;
}

/**
 * <p>The results of the predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportResponse {
  /**
   * <p>An object that contains the results of the predictive inbox placement test.</p>
   */
  DeliverabilityTestReport: DeliverabilityTestReport | undefined;

  /**
   * <p>An object that specifies how many test messages that were sent during the predictive inbox placement test were
   *             delivered to recipients' inboxes, how many were sent to recipients' spam folders, and
   *             how many weren't delivered.</p>
   */
  OverallPlacement: PlacementStatistics | undefined;

  /**
   * <p>An object that describes how the test email was handled by several email providers,
   *             including Gmail, Hotmail, Yahoo, AOL, and others.</p>
   */
  IspPlacements: IspPlacement[] | undefined;

  /**
   * <p>An object that contains the message that you sent when you performed this
   *             predictive inbox placement test.</p>
   */
  Message?: string;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the predictive inbox placement test.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface GetDomainDeliverabilityCampaignRequest {
  /**
   * <p>The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this
   *             identifier to a campaign. This value is not the same as the campaign identifier that
   *             Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the
   *             Amazon Pinpoint console.</p>
   */
  CampaignId: string | undefined;
}

/**
 * <p>An object that contains the deliverability data for a specific campaign. This data is
 *             available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface DomainDeliverabilityCampaign {
  /**
   * <p>The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this
   *             identifier to a campaign. This value is not the same as the campaign identifier that
   *             Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the
   *             Amazon Pinpoint console.</p>
   */
  CampaignId?: string;

  /**
   * <p>The URL of an image that contains a snapshot of the email message that was
   *             sent.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The subject line, or title, of the email message.</p>
   */
  Subject?: string;

  /**
   * <p>The verified email address that the email message was sent from.</p>
   */
  FromAddress?: string;

  /**
   * <p>The IP addresses that were used to send the email message.</p>
   */
  SendingIps?: string[];

  /**
   * <p>The first time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  FirstSeenDateTime?: Date;

  /**
   * <p>The last time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  LastSeenDateTime?: Date;

  /**
   * <p>The number of email messages that were delivered to recipients’ inboxes.</p>
   */
  InboxCount?: number;

  /**
   * <p>The number of email messages that were delivered to recipients' spam or junk mail
   *             folders.</p>
   */
  SpamCount?: number;

  /**
   * <p>The percentage of email messages that were opened by recipients. Due to technical
   *             limitations, this value only includes recipients who opened the message by using an
   *             email client that supports images.</p>
   */
  ReadRate?: number;

  /**
   * <p>The percentage of email messages that were deleted by recipients, without being opened
   *             first. Due to technical limitations, this value only includes recipients who opened the
   *             message by using an email client that supports images.</p>
   */
  DeleteRate?: number;

  /**
   * <p>The percentage of email messages that were opened and then deleted by recipients. Due
   *             to technical limitations, this value only includes recipients who opened the message by
   *             using an email client that supports images.</p>
   */
  ReadDeleteRate?: number;

  /**
   * <p>The projected number of recipients that the email message was sent to.</p>
   */
  ProjectedVolume?: number;

  /**
   * <p>The major email providers who handled the email message.</p>
   */
  Esps?: string[];
}

/**
 * <p>An object that contains all the deliverability data for a specific campaign. This data
 *             is available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface GetDomainDeliverabilityCampaignResponse {
  /**
   * <p>An object that contains the deliverability data for the campaign.</p>
   */
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign | undefined;
}

/**
 * <p>A request to obtain deliverability metrics for a domain.</p>
 */
export interface GetDomainStatisticsReportRequest {
  /**
   * <p>The domain that you want to obtain deliverability metrics for.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The first day (in Unix time) that you want to obtain domain deliverability metrics
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>The last day (in Unix time) that you want to obtain domain deliverability metrics for.
   *             The <code>EndDate</code> that you specify has to be less than or equal to 30 days after
   *             the <code>StartDate</code>.</p>
   */
  EndDate: Date | undefined;
}

/**
 * <p>An object that contains inbox placement data for email sent from one of your email
 *             domains to a specific email provider.</p>
 */
export interface DomainIspPlacement {
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamRawCount?: number;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxPercentage?: number;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamPercentage?: number;
}

/**
 * <p>An object that contains information about the amount of email that was delivered to
 *             recipients.</p>
 */
export interface VolumeStatistics {
  /**
   * <p>The total number of emails that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>The total number of emails that arrived in recipients' spam or junk mail
   *             folders.</p>
   */
  SpamRawCount?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' inboxes.</p>
   */
  ProjectedInbox?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' spam or junk mail folders.</p>
   */
  ProjectedSpam?: number;
}

/**
 * <p>An object that contains information about the volume of email sent on each day of the
 *             analysis period.</p>
 */
export interface DailyVolume {
  /**
   * <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   */
  StartDate?: Date;

  /**
   * <p>An object that contains inbox placement metrics for a specific day in the analysis
   *             period.</p>
   */
  VolumeStatistics?: VolumeStatistics;

  /**
   * <p>An object that contains inbox placement metrics for a specified day in the analysis
   *             period, broken out by the recipient's email provider.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];
}

/**
 * <p>An object that contains information about email that was sent from the selected
 *             domain.</p>
 */
export interface OverallVolume {
  /**
   * <p>An object that contains information about the numbers of messages that arrived in
   *             recipients' inboxes and junk mail folders.</p>
   */
  VolumeStatistics?: VolumeStatistics;

  /**
   * <p>The percentage of emails that were sent from the domain that were read by their
   *             recipients.</p>
   */
  ReadRatePercent?: number;

  /**
   * <p>An object that contains inbox and junk mail placement metrics for individual email
   *             providers.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];
}

/**
 * <p>An object that includes statistics that are related to the domain that you
 *             specified.</p>
 */
export interface GetDomainStatisticsReportResponse {
  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. The
   *             data in this object is a summary of all of the data that was collected from the
   *                 <code>StartDate</code> to the <code>EndDate</code>.</p>
   */
  OverallVolume: OverallVolume | undefined;

  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. This
   *             object contains data for each day, starting on the <code>StartDate</code> and ending on
   *             the <code>EndDate</code>.</p>
   */
  DailyVolumes: DailyVolume[] | undefined;
}

/**
 * <p>A request to return details about an email identity.</p>
 */
export interface GetEmailIdentityRequest {
  /**
   * <p>The email identity that you want to retrieve details for.</p>
   */
  EmailIdentity: string | undefined;
}

export enum BehaviorOnMxFailure {
  REJECT_MESSAGE = "REJECT_MESSAGE",
  USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE",
}

export enum MailFromDomainStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
}

/**
 * <p>A list of attributes that are associated with a MAIL FROM domain.</p>
 */
export interface MailFromAttributes {
  /**
   * <p>The name of a domain that an email identity uses as a custom MAIL FROM domain.</p>
   */
  MailFromDomain: string | undefined;

  /**
   * <p>The status of the MAIL FROM domain. This status can have the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – Amazon Pinpoint hasn't started searching for the MX record
   *                     yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – Amazon Pinpoint detected the required MX record for the
   *                     MAIL FROM domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – Amazon Pinpoint can't find the required MX record, or the
   *                     record no longer exists.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.</p>
   *             </li>
   *          </ul>
   */
  MailFromDomainStatus: MailFromDomainStatus | string | undefined;

  /**
   * <p>The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom
   *             MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code>
   *             error, and doesn't attempt to deliver the email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | string | undefined;
}

/**
 * <p>Details about an email identity.</p>
 */
export interface GetEmailIdentityResponse {
  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or
   *             complaint events occur. Amazon Pinpoint sends this notification to the address that you specified
   *             in the Return-Path header of the original email.</p>
   *         <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other
   *             mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're
   *             required to have a method of tracking bounces and complaints. If you haven't set up
   *             another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email
   *             notification when these events occur (even if this setting is disabled).</p>
   */
  FeedbackForwardingStatus?: boolean;

  /**
   * <p>Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email
   *             from verified email addresses or domains. For more information about verifying
   *             identities, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * <p>An object that contains information about the DKIM attributes for the identity. This
   *             object includes the tokens that you use to create the CNAME records that are required to
   *             complete the DKIM verification process.</p>
   */
  DkimAttributes?: DkimAttributes;

  /**
   * <p>An object that contains information about the Mail-From attributes for the email
   *             identity.</p>
   */
  MailFromAttributes?: MailFromAttributes;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the email identity.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current
 *             AWS Region.</p>
 */
export interface ListConfigurationSetsRequest {
  /**
   * <p>A token returned from a previous call to <code>ListConfigurationSets</code> to
   *             indicate the position in the list of configuration sets.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to <code>ListConfigurationSets</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * <p>A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.</p>
 */
export interface ListConfigurationSetsResponse {
  /**
   * <p>An array that contains all of the configuration sets in your Amazon Pinpoint account in the
   *             current AWS Region.</p>
   */
  ConfigurationSets?: string[];

  /**
   * <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *                 <code>ListConfigurationSets</code>, and pass this token in the
   *                 <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * <p>A request to obtain a list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsRequest {
  /**
   * <p>A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate
   *             the position in the list of dedicated IP pools.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to <code>ListDedicatedIpPools</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * <p>A list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsResponse {
  /**
   * <p>A list of all of the dedicated IP pools that are associated with your Amazon Pinpoint
   *             account.</p>
   */
  DedicatedIpPools?: string[];

  /**
   * <p>A token that indicates that there are additional IP pools to list. To view additional
   *             IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token
   *             in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * <p>A request to list all of the predictive inbox placement tests that you've performed.</p>
 */
export interface ListDeliverabilityTestReportsRequest {
  /**
   * <p>A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to
   *             indicate the position in the list of predictive inbox placement tests.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to
   *                 <code>ListDeliverabilityTestReports</code>. If the number of results is larger than
   *             the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *         <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   */
  PageSize?: number;
}

/**
 * <p>A list of the predictive inbox placement test reports that are available for your account, regardless of
 *             whether or not those tests are complete.</p>
 */
export interface ListDeliverabilityTestReportsResponse {
  /**
   * <p>An object that contains a lists of predictive inbox placement tests that you've performed.</p>
   */
  DeliverabilityTestReports: DeliverabilityTestReport[] | undefined;

  /**
   * <p>A token that indicates that there are additional predictive inbox placement tests to list. To view additional
   *             predictive inbox placement tests, issue another request to <code>ListDeliverabilityTestReports</code>, and pass
   *             this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation)
 *             for the domain.</p>
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * <p>The first day, in Unix time format, that you want to obtain deliverability data
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>The last day, in Unix time format, that you want to obtain deliverability data for.
   *             This value has to be less than or equal to 30 days after the value of the
   *                 <code>StartDate</code> parameter.</p>
   */
  EndDate: Date | undefined;

  /**
   * <p>The domain to obtain deliverability data for.</p>
   */
  SubscribedDomain: string | undefined;

  /**
   * <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of a campaign in the list of campaigns.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to include in response to a single call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results
   *             is larger than the number that you specify in this parameter, the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   */
  PageSize?: number;
}

/**
 * <p>An array of objects that provide deliverability data for all the campaigns that used a
 *             specific domain to send email during a specified time range. This data is available for
 *             a domain only if you enabled the Deliverability dashboard
 *                 (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.</p>
 */
export interface ListDomainDeliverabilityCampaignsResponse {
  /**
   * <p>An array of responses, one for each campaign that used the domain to send email during
   *             the specified time range.</p>
   */
  DomainDeliverabilityCampaigns: DomainDeliverabilityCampaign[] | undefined;

  /**
   * <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of the campaign in the list of campaigns.</p>
   */
  NextToken?: string;
}

/**
 * <p>A request to list all of the email identities associated with your Amazon Pinpoint account. This
 *             list includes identities that you've already verified, identities that are unverified,
 *             and identities that were verified in the past, but are no longer verified.</p>
 */
export interface ListEmailIdentitiesRequest {
  /**
   * <p>A token returned from a previous call to <code>ListEmailIdentities</code> to indicate
   *             the position in the list of identities.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If
   *             the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *         <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   */
  PageSize?: number;
}

/**
 * <p>Information about an email identity.</p>
 */
export interface IdentityInfo {
  /**
   * <p>The email identity type. The identity type can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>EMAIL_ADDRESS</code> – The identity is an email address.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DOMAIN</code> – The identity is a domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MANAGED_DOMAIN</code> – The identity is a domain that is managed
   *                     by AWS.</p>
   *             </li>
   *          </ul>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The address or domain of the identity.</p>
   */
  IdentityName?: string;

  /**
   * <p>Indicates whether or not you can send email from the identity.</p>
   *         <p>In Amazon Pinpoint, an identity is an email address or domain that you send email from. Before
   *             you can send email from an identity, you have to demostrate that you own the identity,
   *             and that you authorize Amazon Pinpoint to send email from that identity.</p>
   */
  SendingEnabled?: boolean;
}

/**
 * <p>A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint,
 *             regardless of whether or not those identities were successfully verified.</p>
 */
export interface ListEmailIdentitiesResponse {
  /**
   * <p>An array that includes all of the identities associated with your Amazon Pinpoint
   *             account.</p>
   */
  EmailIdentities?: IdentityInfo[];

  /**
   * <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *             <code>ListEmailIdentities</code>, and pass this token in the <code>NextToken</code>
   *             parameter.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tag
   *             information for.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>An array that lists all the tags that are associated with the resource. Each tag
   *             consists of a required tag key (<code>Key</code>) and an associated tag value
   *                 (<code>Value</code>)</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>A request to enable or disable the automatic IP address warm-up feature.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * <p>Enables or disables the automatic warm-up feature for dedicated IP addresses that are
   *             associated with your Amazon Pinpoint account in the current AWS Region. Set to <code>true</code>
   *             to enable the automatic warm-up feature, or set to <code>false</code> to disable
   *             it.</p>
   */
  AutoWarmupEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse {}

/**
 * <p>A request to change the ability of your account to send email.</p>
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * <p>Enables or disables your account's ability to send email. Set to <code>true</code> to
   *             enable email sending, or set to <code>false</code> to disable email sending.</p>
   *         <note>
   *             <p>If AWS paused your account's ability to send email, you can't use this operation
   *                 to resume your account's ability to send email.</p>
   *         </note>
   */
  SendingEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSendingAttributesResponse {}

/**
 * <p>A request to associate a configuration set with a dedicated IP pool.</p>
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * <p>The name of the configuration set that you want to associate with a dedicated IP
   *             pool.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy | string;

  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   */
  SendingPoolName?: string;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetDeliveryOptionsResponse {}

/**
 * <p>A request to enable or disable tracking of reputation metrics for a configuration
 *             set.</p>
 */
export interface PutConfigurationSetReputationOptionsRequest {
  /**
   * <p>The name of the configuration set that you want to enable or disable reputation metric
   *             tracking for.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   */
  ReputationMetricsEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetReputationOptionsResponse {}

/**
 * <p>A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * <p>The name of the configuration set that you want to enable or disable email sending
   *             for.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSendingOptionsResponse {}

/**
 * <p>A request to add a custom domain for tracking open and click events to a configuration
 *             set.</p>
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * <p>The name of the configuration set that you want to add a custom tracking domain
   *             to.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The domain that you want to use to track open and click events.</p>
   */
  CustomRedirectDomain?: string;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetTrackingOptionsResponse {}

/**
 * <p>A request to move a dedicated IP address to a dedicated IP pool.</p>
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * <p>The IP address that you want to move to the dedicated IP pool. The value you specify
   *             has to be a dedicated IP address that's associated with your Amazon Pinpoint account.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The name of the IP pool that you want to add the dedicated IP address to. You have to
   *             specify an IP pool that already exists.</p>
   */
  DestinationPoolName: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpInPoolResponse {}

/**
 * <p>A request to change the warm-up attributes for a dedicated IP address. This operation
 *             is useful when you want to resume the warm-up process for an existing IP address.</p>
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  /**
   * <p>The dedicated IP address that you want to update the warm-up attributes for.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The warm-up percentage that you want to associate with the dedicated IP
   *             address.</p>
   */
  WarmupPercentage: number | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpWarmupAttributesResponse {}

/**
 * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the
 *             Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for
 *             the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform
 *             predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon Pinpoint. For more information about the
 *             features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * <p>Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the
   *             dashboard, set this value to <code>true</code>.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             enabled the Deliverability dashboard for.</p>
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[];
}

/**
 * <p>A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint
 *             account.</p>
 */
export interface PutDeliverabilityDashboardOptionResponse {}

/**
 * <p>A request to enable or disable DKIM signing of email that you send from an email
 *             identity.</p>
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * <p>The email identity that you want to change the DKIM settings for.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>Sets the DKIM signing configuration for the identity.</p>
   *         <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the
   *             identity are DKIM-signed. When you set this value to <code>false</code>, then the
   *             messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityDkimAttributesResponse {}

/**
 * <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * <p>The email identity that you want to configure bounce and complaint feedback forwarding
   *             for.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>Sets the feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, Amazon Pinpoint sends you email notifications when bounce or
   *             complaint events occur. Amazon Pinpoint sends this notification to the address that you specified
   *             in the Return-Path header of the original email.</p>
   *         <p>When you set this value to <code>false</code>, Amazon Pinpoint sends notifications through other
   *             mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're
   *             required to have a method of tracking bounces and complaints. If you haven't set up
   *             another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email
   *             notification when these events occur (even if this setting is disabled).</p>
   */
  EmailForwardingEnabled?: boolean;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityFeedbackAttributesResponse {}

/**
 * <p>A request to configure the custom MAIL FROM domain for a verified identity.</p>
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * <p>The verified email identity that you want to set up the custom MAIL FROM domain
   *             for.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p> The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM
   *             domain must meet the following criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It has to be a subdomain of the verified identity.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be used to receive email.</p>
   *             </li>
   *             <li>
   *                 <p>It can't be used in a "From" address if the MAIL FROM domain is a destination
   *                     for feedback forwarding emails.</p>
   *             </li>
   *          </ul>
   */
  MailFromDomain?: string;

  /**
   * <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record when
   *             you send an email. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code>
   *             error, and doesn't attempt to deliver the email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure | string;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityMailFromAttributesResponse {}

/**
 * <p>An object that describes the recipients for an email.</p>
 */
export interface Destination {
  /**
   * <p>An array that contains the email addresses of the "To" recipients for the
   *             email.</p>
   */
  ToAddresses?: string[];

  /**
   * <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for
   *             the email.</p>
   */
  CcAddresses?: string[];

  /**
   * <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients
   *             for the email.</p>
   */
  BccAddresses?: string[];
}

/**
 * <p>Contains the name and value of a tag that you apply to an email. You can use message
 *             tags when you publish email sending events.
 *             </p>
 */
export interface MessageTag {
  /**
   * <p>The name of the message tag. The message tag name has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * <p>The value of the message tag. The message tag value has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                 <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Value: string | undefined;
}

/**
 * <p>A request to send an email message.</p>
 */
export interface SendEmailRequest {
  /**
   * <p>The email address that you want to use as the "From" address for the email. The
   *             address that you specify has to be verified.
   *             </p>
   */
  FromEmailAddress?: string;

  /**
   * <p>An object that contains the recipients of the email message.</p>
   */
  Destination: Destination | undefined;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The address that Amazon Pinpoint should send bounce and complaint notifications to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>An object that contains the body of the message. You can send either a Simple message
   *             or a Raw message.</p>
   */
  Content: EmailContent | undefined;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events. </p>
   */
  EmailTags?: MessageTag[];

  /**
   * <p>The name of the configuration set that you want to use when sending the email.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * <p>A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.</p>
 */
export interface SendEmailResponse {
  /**
   * <p>A unique identifier for the message that is generated when Amazon Pinpoint accepts the
   *             message.</p>
   *         <note>
   *             <p>It is possible for Amazon Pinpoint to accept a message without sending it. This can happen
   *                 when the message you're trying to send has an attachment doesn't pass a virus check,
   *                 or when you send a templated email that contains invalid personalization content,
   *                 for example.</p>
   *         </note>
   */
  MessageId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add one or more tags
   *             to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of the tags that you want to add to the resource. A tag consists of a required
   *             tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *             length of a tag key is 128 characters. The maximum length of a tag value is 256
   *             characters.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove one or more
   *             tags from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags (tag keys) that you want to remove from the resource. When you specify a tag
   *             key, the action removes both that key and its associated tag value.</p>
   *         <p>To remove more than one tag from the resource, append the <code>TagKeys</code>
   *             parameter and argument for each additional tag to remove, separated by an ampersand. For
   *             example:
   *                 <code>/v1/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
   *         </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>A request to change the settings for an event destination for a configuration
 *             set.</p>
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * <p>The name of the configuration set that contains the event destination that you want to
   *             modify.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination that you want to modify.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * @internal
 */
export const DeliveryOptionsFilterSensitiveLog = (obj: DeliveryOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReputationOptionsFilterSensitiveLog = (obj: ReputationOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendingOptionsFilterSensitiveLog = (obj: SendingOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrackingOptionsFilterSensitiveLog = (obj: TrackingOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetRequestFilterSensitiveLog = (obj: CreateConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetResponseFilterSensitiveLog = (obj: CreateConfigurationSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchDimensionConfigurationFilterSensitiveLog = (obj: CloudWatchDimensionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchDestinationFilterSensitiveLog = (obj: CloudWatchDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseDestinationFilterSensitiveLog = (obj: KinesisFirehoseDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PinpointDestinationFilterSensitiveLog = (obj: PinpointDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnsDestinationFilterSensitiveLog = (obj: SnsDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDestinationDefinitionFilterSensitiveLog = (obj: EventDestinationDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: CreateConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: CreateConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDedicatedIpPoolRequestFilterSensitiveLog = (obj: CreateDedicatedIpPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDedicatedIpPoolResponseFilterSensitiveLog = (obj: CreateDedicatedIpPoolResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RawMessageFilterSensitiveLog = (obj: RawMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentFilterSensitiveLog = (obj: Content): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BodyFilterSensitiveLog = (obj: Body): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageFilterSensitiveLog = (obj: Message): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TemplateFilterSensitiveLog = (obj: Template): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmailContentFilterSensitiveLog = (obj: EmailContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeliverabilityTestReportRequestFilterSensitiveLog = (
  obj: CreateDeliverabilityTestReportRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDeliverabilityTestReportResponseFilterSensitiveLog = (
  obj: CreateDeliverabilityTestReportResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEmailIdentityRequestFilterSensitiveLog = (obj: CreateEmailIdentityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DkimAttributesFilterSensitiveLog = (obj: DkimAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEmailIdentityResponseFilterSensitiveLog = (obj: CreateEmailIdentityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetRequestFilterSensitiveLog = (obj: DeleteConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetResponseFilterSensitiveLog = (obj: DeleteConfigurationSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: DeleteConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: DeleteConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDedicatedIpPoolRequestFilterSensitiveLog = (obj: DeleteDedicatedIpPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDedicatedIpPoolResponseFilterSensitiveLog = (obj: DeleteDedicatedIpPoolResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailIdentityRequestFilterSensitiveLog = (obj: DeleteEmailIdentityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailIdentityResponseFilterSensitiveLog = (obj: DeleteEmailIdentityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountRequestFilterSensitiveLog = (obj: GetAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendQuotaFilterSensitiveLog = (obj: SendQuota): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountResponseFilterSensitiveLog = (obj: GetAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBlacklistReportsRequestFilterSensitiveLog = (obj: GetBlacklistReportsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlacklistEntryFilterSensitiveLog = (obj: BlacklistEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBlacklistReportsResponseFilterSensitiveLog = (obj: GetBlacklistReportsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetRequestFilterSensitiveLog = (obj: GetConfigurationSetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetResponseFilterSensitiveLog = (obj: GetConfigurationSetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetEventDestinationsRequestFilterSensitiveLog = (
  obj: GetConfigurationSetEventDestinationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDestinationFilterSensitiveLog = (obj: EventDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetConfigurationSetEventDestinationsResponseFilterSensitiveLog = (
  obj: GetConfigurationSetEventDestinationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpRequestFilterSensitiveLog = (obj: GetDedicatedIpRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DedicatedIpFilterSensitiveLog = (obj: DedicatedIp): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpResponseFilterSensitiveLog = (obj: GetDedicatedIpResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpsRequestFilterSensitiveLog = (obj: GetDedicatedIpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpsResponseFilterSensitiveLog = (obj: GetDedicatedIpsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeliverabilityDashboardOptionsRequestFilterSensitiveLog = (
  obj: GetDeliverabilityDashboardOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InboxPlacementTrackingOptionFilterSensitiveLog = (obj: InboxPlacementTrackingOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDeliverabilityTrackingOptionFilterSensitiveLog = (obj: DomainDeliverabilityTrackingOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeliverabilityDashboardOptionsResponseFilterSensitiveLog = (
  obj: GetDeliverabilityDashboardOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeliverabilityTestReportRequestFilterSensitiveLog = (obj: GetDeliverabilityTestReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeliverabilityTestReportFilterSensitiveLog = (obj: DeliverabilityTestReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementStatisticsFilterSensitiveLog = (obj: PlacementStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IspPlacementFilterSensitiveLog = (obj: IspPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeliverabilityTestReportResponseFilterSensitiveLog = (
  obj: GetDeliverabilityTestReportResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainDeliverabilityCampaignRequestFilterSensitiveLog = (
  obj: GetDomainDeliverabilityCampaignRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDeliverabilityCampaignFilterSensitiveLog = (obj: DomainDeliverabilityCampaign): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainDeliverabilityCampaignResponseFilterSensitiveLog = (
  obj: GetDomainDeliverabilityCampaignResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainStatisticsReportRequestFilterSensitiveLog = (obj: GetDomainStatisticsReportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainIspPlacementFilterSensitiveLog = (obj: DomainIspPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VolumeStatisticsFilterSensitiveLog = (obj: VolumeStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DailyVolumeFilterSensitiveLog = (obj: DailyVolume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OverallVolumeFilterSensitiveLog = (obj: OverallVolume): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDomainStatisticsReportResponseFilterSensitiveLog = (obj: GetDomainStatisticsReportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEmailIdentityRequestFilterSensitiveLog = (obj: GetEmailIdentityRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MailFromAttributesFilterSensitiveLog = (obj: MailFromAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEmailIdentityResponseFilterSensitiveLog = (obj: GetEmailIdentityResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationSetsRequestFilterSensitiveLog = (obj: ListConfigurationSetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConfigurationSetsResponseFilterSensitiveLog = (obj: ListConfigurationSetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDedicatedIpPoolsRequestFilterSensitiveLog = (obj: ListDedicatedIpPoolsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDedicatedIpPoolsResponseFilterSensitiveLog = (obj: ListDedicatedIpPoolsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeliverabilityTestReportsRequestFilterSensitiveLog = (
  obj: ListDeliverabilityTestReportsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDeliverabilityTestReportsResponseFilterSensitiveLog = (
  obj: ListDeliverabilityTestReportsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainDeliverabilityCampaignsRequestFilterSensitiveLog = (
  obj: ListDomainDeliverabilityCampaignsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainDeliverabilityCampaignsResponseFilterSensitiveLog = (
  obj: ListDomainDeliverabilityCampaignsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEmailIdentitiesRequestFilterSensitiveLog = (obj: ListEmailIdentitiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityInfoFilterSensitiveLog = (obj: IdentityInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEmailIdentitiesResponseFilterSensitiveLog = (obj: ListEmailIdentitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountDedicatedIpWarmupAttributesRequestFilterSensitiveLog = (
  obj: PutAccountDedicatedIpWarmupAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountDedicatedIpWarmupAttributesResponseFilterSensitiveLog = (
  obj: PutAccountDedicatedIpWarmupAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountSendingAttributesRequestFilterSensitiveLog = (obj: PutAccountSendingAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountSendingAttributesResponseFilterSensitiveLog = (
  obj: PutAccountSendingAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetDeliveryOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetDeliveryOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetDeliveryOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetDeliveryOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetReputationOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetReputationOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetReputationOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetReputationOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetSendingOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetSendingOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetSendingOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetSendingOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetTrackingOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetTrackingOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetTrackingOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetTrackingOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDedicatedIpInPoolRequestFilterSensitiveLog = (obj: PutDedicatedIpInPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDedicatedIpInPoolResponseFilterSensitiveLog = (obj: PutDedicatedIpInPoolResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDedicatedIpWarmupAttributesRequestFilterSensitiveLog = (
  obj: PutDedicatedIpWarmupAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDedicatedIpWarmupAttributesResponseFilterSensitiveLog = (
  obj: PutDedicatedIpWarmupAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDeliverabilityDashboardOptionRequestFilterSensitiveLog = (
  obj: PutDeliverabilityDashboardOptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDeliverabilityDashboardOptionResponseFilterSensitiveLog = (
  obj: PutDeliverabilityDashboardOptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityDkimAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityDkimAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityDkimAttributesResponseFilterSensitiveLog = (
  obj: PutEmailIdentityDkimAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityFeedbackAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityFeedbackAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityFeedbackAttributesResponseFilterSensitiveLog = (
  obj: PutEmailIdentityFeedbackAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityMailFromAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityMailFromAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityMailFromAttributesResponseFilterSensitiveLog = (
  obj: PutEmailIdentityMailFromAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationFilterSensitiveLog = (obj: Destination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageTagFilterSensitiveLog = (obj: MessageTag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendEmailRequestFilterSensitiveLog = (obj: SendEmailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendEmailResponseFilterSensitiveLog = (obj: SendEmailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationSetEventDestinationRequestFilterSensitiveLog = (
  obj: UpdateConfigurationSetEventDestinationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationSetEventDestinationResponseFilterSensitiveLog = (
  obj: UpdateConfigurationSetEventDestinationResponse
): any => ({
  ...obj,
});
