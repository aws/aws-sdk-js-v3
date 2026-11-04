// smithy-typescript generated code
import type {
  BehaviorOnMXFailure,
  BounceType,
  BulkEmailStatus,
  ConfigurationSetAttribute,
  CustomMailFromStatus,
  DimensionValueSource,
  DsnAction,
  EventType,
  IdentityType,
  InvocationType,
  NotificationType,
  ReceiptFilterPolicy,
  SNSActionEncoding,
  StopScope,
  TlsPolicy,
  VerificationStatus,
} from "./enums";

/**
 * When included in a receipt rule, this action adds a header to the received email.
 *
 * For information about adding a header using a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-add-header.html).
 *
 * @public
 */
export interface AddHeaderAction {
  /**
   * The name of the header to add to the incoming message. The name must contain at least one character, and can contain up to 50 characters. It consists of alphanumeric (a–z, A–Z, 0–9) characters and dashes.
   *
   * @public
   */
  HeaderName: string | undefined;

  /**
   * The content to include in the header. This value can contain up to 2048 characters. It can't contain newline (`\n`) or carriage return (`\r`) characters.
   *
   * @public
   */
  HeaderValue: string | undefined;
}

/**
 * Represents textual data, plus an optional character set specification.
 *
 * By default, the text must be 7-bit ASCII, due to the constraints of the SMTP protocol. If the text must contain any other characters, then you must also specify a character set. Examples include UTF-8, ISO-8859-1, and Shift_JIS.
 *
 * @public
 */
export interface Content {
  /**
   * The textual data of the content.
   *
   * @public
   */
  Data: string | undefined;

  /**
   * The character set of the content.
   *
   * @public
   */
  Charset?: string | undefined;
}

/**
 * Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
 *
 * @public
 */
export interface Body {
  /**
   * The content of the message, in text format. Use this for text-based email clients, or clients on high-latency networks (such as mobile devices).
   *
   * @public
   */
  Text?: Content | undefined;

  /**
   * The content of the message, in HTML format. Use this for email clients that can process HTML. You can include clickable links, formatted text, and much more in an HTML message.
   *
   * @public
   */
  Html?: Content | undefined;
}

/**
 * When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * For information about sending a bounce message in response to a received email, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-bounce.html).
 *
 * @public
 */
export interface BounceAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The SMTP reply code, as defined by [RFC 5321](https://tools.ietf.org/html/rfc5321).
   *
   * @public
   */
  SmtpReplyCode: string | undefined;

  /**
   * The SMTP enhanced status code, as defined by [RFC 3463](https://tools.ietf.org/html/rfc3463).
   *
   * @public
   */
  StatusCode?: string | undefined;

  /**
   * Human-readable text to include in the bounce message.
   *
   * @public
   */
  Message: string | undefined;

  /**
   * The email address of the sender of the bounced email. This is the address from which the bounce message is sent.
   *
   * @public
   */
  Sender: string | undefined;
}

/**
 * Additional X-headers to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.
 *
 * For information about receiving email through Amazon SES, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html).
 *
 * @public
 */
export interface ExtensionField {
  /**
   * The name of the header to add. Must be between 1 and 50 characters, inclusive, and consist of alphanumeric (a-z, A-Z, 0-9) characters and dashes only.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the header to add. Must contain 2048 characters or fewer, and must not contain newline characters ("\r" or "\n").
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.
 *
 * For information about receiving email through Amazon SES, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html).
 *
 * @public
 */
export interface RecipientDsnFields {
  /**
   * The email address that the message was ultimately delivered to. This corresponds to the `Final-Recipient` in the DSN. If not specified, `FinalRecipient` is set to the `Recipient` specified in the `BouncedRecipientInfo` structure. Either `FinalRecipient` or the recipient in `BouncedRecipientInfo` must be a recipient of the original bounced message.
   *
   * > **Note:** Do not prepend the `FinalRecipient` email address with `rfc 822;`, as described in [RFC 3798](https://tools.ietf.org/html/rfc3798).
   *
   * @public
   */
  FinalRecipient?: string | undefined;

  /**
   * The action performed by the reporting mail transfer agent (MTA) as a result of its attempt to deliver the message to the recipient address. This is required by [RFC 3464](https://tools.ietf.org/html/rfc3464).
   *
   * @public
   */
  Action: DsnAction | undefined;

  /**
   * The MTA to which the remote MTA attempted to deliver the message, formatted as specified in [RFC 3464](https://tools.ietf.org/html/rfc3464) (`mta-name-type; mta-name`). This parameter typically applies only to propagating synchronous bounces.
   *
   * @public
   */
  RemoteMta?: string | undefined;

  /**
   * The status code that indicates what went wrong. This is required by [RFC 3464](https://tools.ietf.org/html/rfc3464).
   *
   * @public
   */
  Status: string | undefined;

  /**
   * An extended explanation of what went wrong; this is usually an SMTP response. See [RFC 3463](https://tools.ietf.org/html/rfc3463) for the correct formatting of this parameter.
   *
   * @public
   */
  DiagnosticCode?: string | undefined;

  /**
   * The time the final delivery attempt was made, in [RFC 822](https://www.ietf.org/rfc/rfc0822.txt) date-time format.
   *
   * @public
   */
  LastAttemptDate?: Date | undefined;

  /**
   * Additional X-headers to include in the DSN.
   *
   * @public
   */
  ExtensionFields?: ExtensionField[] | undefined;
}

/**
 * Recipient-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.
 *
 * For information about receiving email through Amazon SES, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html).
 *
 * @public
 */
export interface BouncedRecipientInfo {
  /**
   * The email address of the recipient of the bounced email.
   *
   * @public
   */
  Recipient: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to receive email for the recipient of the bounced email. For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  RecipientArn?: string | undefined;

  /**
   * The reason for the bounce. You must provide either this parameter or `RecipientDsnFields`.
   *
   * @public
   */
  BounceType?: BounceType | undefined;

  /**
   * Recipient-related DSN fields, most of which would normally be filled in automatically when provided with a `BounceType`. You must provide either this parameter or `BounceType`.
   *
   * @public
   */
  RecipientDsnFields?: RecipientDsnFields | undefined;
}

/**
 * Represents the destination of the message, consisting of To:, CC:, and BCC: fields.
 *
 * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
 *
 * @public
 */
export interface Destination {
  /**
   * The recipients to place on the To: line of the message.
   *
   * @public
   */
  ToAddresses?: string[] | undefined;

  /**
   * The recipients to place on the CC: line of the message.
   *
   * @public
   */
  CcAddresses?: string[] | undefined;

  /**
   * The recipients to place on the BCC: line of the message.
   *
   * @public
   */
  BccAddresses?: string[] | undefined;
}

/**
 * Contains the name and value of a tag that you can provide to `SendEmail` or `SendRawEmail` to apply to an email.
 *
 * Message tags, which you use with configuration sets, enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface MessageTag {
  /**
   * The name of the tag. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Contain 256 characters or fewer.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the tag. The value must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Contain 256 characters or fewer.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An array that contains one or more Destinations, as well as the tags and replacement data associated with each of those Destinations.
 *
 * @public
 */
export interface BulkEmailDestination {
  /**
   * Represents the destination of the message, consisting of To:, CC:, and BCC: fields.
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using `SendBulkTemplatedEmail`. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  ReplacementTags?: MessageTag[] | undefined;

  /**
   * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  ReplacementTemplateData?: string | undefined;
}

/**
 * An object that contains the response from the `SendBulkTemplatedEmail` operation.
 *
 * @public
 */
export interface BulkEmailDestinationStatus {
  /**
   * The status of a message sent using the `SendBulkTemplatedEmail` operation.
   *
   * Possible values for this parameter include:
   *
   * - `Success`: Amazon SES accepted the message, and attempts to deliver it to the recipients.
   * - `MessageRejected`: The message was rejected because it contained a virus.
   * - `MailFromDomainNotVerified`: The sender's email address or domain was not verified.
   * - `ConfigurationSetDoesNotExist`: The configuration set you specified does not exist.
   * - `TemplateDoesNotExist`: The template you specified does not exist.
   * - `AccountSuspended`: Your account has been shut down because of issues related to your email sending practices.
   * - `AccountThrottled`: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.
   * - `AccountDailyQuotaExceeded`: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.
   * - `InvalidSendingPoolName`: The configuration set you specified refers to an IP pool that does not exist.
   * - `AccountSendingPaused`: Email sending for the Amazon SES account was disabled using the UpdateAccountSendingEnabled operation.
   * - `ConfigurationSetSendingPaused`: Email sending for this configuration set was disabled using the UpdateConfigurationSetSendingEnabled operation.
   * - `InvalidParameterValue`: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.
   * - `TransientFailure`: Amazon SES was unable to process your request because of a temporary issue.
   * - `Failed`: Amazon SES was unable to process your request. See the error message for additional information.
   *
   * @public
   */
  Status?: BulkEmailStatus | undefined;

  /**
   * A description of an error that prevented a message being sent using the `SendBulkTemplatedEmail` operation.
   *
   * @public
   */
  Error?: string | undefined;

  /**
   * The unique message identifier returned from the `SendBulkTemplatedEmail` operation.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * Represents a request to create a receipt rule set by cloning an existing one. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface CloneReceiptRuleSetRequest {
  /**
   * The name of the rule set to create. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Start and end with a letter or number.
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The name of the rule set to clone.
   *
   * @public
   */
  OriginalRuleSetName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CloneReceiptRuleSetResponse {}

/**
 * Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.
 *
 * For information about publishing email sending events to Amazon CloudWatch, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or colons (:).
   * - Contain 256 characters or fewer.
   *
   * @public
   */
  DimensionName: string | undefined;

  /**
   * The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail`/`SendRawEmail` API, specify `messageTag`. To use your own email headers, specify `emailHeader`. To put a custom tag on any link included in your email, specify `linkTag`.
   *
   * @public
   */
  DimensionValueSource: DimensionValueSource | undefined;

  /**
   * The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email. The default value must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), at signs (@), or periods (.).
   * - Contain 256 characters or fewer.
   *
   * @public
   */
  DefaultDimensionValue: string | undefined;
}

/**
 * Contains information associated with an Amazon CloudWatch event destination to which email sending events are published.
 *
 * Event destinations, such as Amazon CloudWatch, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface CloudWatchDestination {
  /**
   * A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.
   *
   * @public
   */
  DimensionConfigurations: CloudWatchDimensionConfiguration[] | undefined;
}

/**
 * The name of the configuration set.
 *
 * Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see [Using Amazon SES Configuration Sets](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/).
 *
 * @public
 */
export interface ConfigurationSet {
  /**
   * The name of the configuration set. The name must meet the following requirements:
   *
   * - Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * When included in a receipt rule, this action parses the received message and starts an email contact in Amazon Connect on your behalf.
 *
 * > **Note:** When you receive emails, the maximum email size (including headers) is 40 MB. Additionally, emails may only have up to 10 attachments. Emails larger than 40 MB or with more than 10 attachments will be bounced.
 *
 * We recommend that you configure this action via Amazon Connect.
 *
 * @public
 */
export interface ConnectAction {
  /**
   * The Amazon Resource Name (ARN) for the Amazon Connect instance that Amazon SES integrates with for starting email contacts.
   *
   * For more information about Amazon Connect instances, see the [Amazon Connect Administrator Guide](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html)
   *
   * @public
   */
  InstanceARN: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be used by Amazon Simple Email Service while starting email contacts to the Amazon Connect instance. This role should have permission to invoke `connect:StartEmailContact` for the given Amazon Connect instance.
   *
   * @public
   */
  IAMRoleARN: string | undefined;
}

/**
 * Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * A data structure that contains the name of the configuration set.
   *
   * @public
   */
  ConfigurationSet: ConfigurationSet | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateConfigurationSetResponse {}

/**
 * Contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
 *
 * Event destinations, such as Amazon Kinesis Firehose, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.
   *
   * @public
   */
  IAMRoleARN: string | undefined;

  /**
   * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
   *
   * @public
   */
  DeliveryStreamARN: string | undefined;
}

/**
 * Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
 *
 * Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface SNSDestination {
  /**
   * The ARN of the Amazon SNS topic for email sending events. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicARN: string | undefined;
}

/**
 * Contains information about an event destination.
 *
 * > **Note:** When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).
 *
 * Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface EventDestination {
  /**
   * The name of the event destination. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to `true` to enable publishing to this destination; set to `false` to prevent publishing to this destination. The default value is `false`.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The type of email sending events to publish to the event destination.
   *
   * - `send` - The call was successful and Amazon SES is attempting to deliver the email.
   * - `reject` - Amazon SES determined that the email contained a virus and rejected it.
   * - `bounce` - The recipient's mail server permanently rejected the email. This corresponds to a hard bounce.
   * - `complaint` - The recipient marked the email as spam.
   * - `delivery` - Amazon SES successfully delivered the email to the recipient's mail server.
   * - `open` - The recipient received the email and opened it in their email client.
   * - `click` - The recipient clicked one or more links in the email.
   * - `renderingFailure` - Amazon SES did not send the email because of a template rendering issue.
   *
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
   *
   * @public
   */
  CloudWatchDestination?: CloudWatchDestination | undefined;

  /**
   * An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
   *
   * @public
   */
  SNSDestination?: SNSDestination | undefined;
}

/**
 * Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an Amazon Web Services service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that the event destination should be associated with.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that describes the Amazon Web Services service that email sending event where information is published.
   *
   * @public
   */
  EventDestination: EventDestination | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
 *
 * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the *Amazon SES Developer Guide*.
 *
 * @public
 */
export interface TrackingOptions {
  /**
   * The custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
   *
   * @public
   */
  CustomRedirectDomain?: string | undefined;
}

/**
 * Represents a request to create an open and click tracking option object in a configuration set.
 *
 * @public
 */
export interface CreateConfigurationSetTrackingOptionsRequest {
  /**
   * The name of the configuration set that the tracking options should be associated with.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
   *
   * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TrackingOptions: TrackingOptions | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateConfigurationSetTrackingOptionsResponse {}

/**
 * Represents a request to create a custom verification email template.
 *
 * @public
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The email address that the custom verification email is sent from.
   *
   * @public
   */
  FromEmailAddress: string | undefined;

  /**
   * The subject line of the custom verification email.
   *
   * @public
   */
  TemplateSubject: string | undefined;

  /**
   * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see [Custom Verification Email Frequently Asked Questions](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TemplateContent: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   *
   * @public
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   *
   * @public
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
 *
 * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html).
 *
 * @public
 */
export interface ReceiptIpFilter {
  /**
   * Indicates whether to block or allow incoming mail from the specified IP addresses.
   *
   * @public
   */
  Policy: ReceiptFilterPolicy | undefined;

  /**
   * A single IP address or a range of IP addresses to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see [RFC 2317](https://tools.ietf.org/html/rfc2317).
   *
   * @public
   */
  Cidr: string | undefined;
}

/**
 * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
 *
 * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html).
 *
 * @public
 */
export interface ReceiptFilter {
  /**
   * The name of the IP address filter. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Start and end with a letter or number.
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
   *
   * @public
   */
  IpFilter: ReceiptIpFilter | undefined;
}

/**
 * Represents a request to create a new IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface CreateReceiptFilterRequest {
  /**
   * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
   *
   * @public
   */
  Filter: ReceiptFilter | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateReceiptFilterResponse {}

/**
 * When included in a receipt rule, this action calls an Amazon Web Services Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * To enable Amazon SES to call your Amazon Web Services Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * For information about using Amazon Web Services Lambda actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-lambda.html).
 *
 * @public
 */
export interface LambdaAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is executed. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function. An example of an Amazon Web Services Lambda function ARN is `arn:aws:lambda:us-west-2:account-id:function:MyFunction`. For more information about Amazon Web Services Lambda, see the [Amazon Web Services Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html).
   *
   * @public
   */
  FunctionArn: string | undefined;

  /**
   * The invocation type of the Amazon Web Services Lambda function. An invocation type of `RequestResponse` means that the execution of the function immediately results in a response, and a value of `Event` means that the function is invoked asynchronously. The default value is `Event`. For information about Amazon Web Services Lambda invocation types, see the [Amazon Web Services Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html).
   *
   * > **Important:** There is a 30-second timeout on `RequestResponse` invocations. You should use `Event` invocation in most cases. Use `RequestResponse` only to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set.
   *
   * @public
   */
  InvocationType?: InvocationType | undefined;
}

/**
 * When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * To enable Amazon SES to write emails to your Amazon S3 bucket, use an Amazon Web Services KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about granting permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * > **Note:** When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 40 MB. Emails larger than that bounces.
 *
 * For information about specifying Amazon S3 actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-s3.html).
 *
 * @public
 */
export interface S3Action {
  /**
   * The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The name of the Amazon S3 bucket for incoming email.
   *
   * @public
   */
  BucketName: string | undefined;

  /**
   * The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.
   *
   * @public
   */
  ObjectKeyPrefix?: string | undefined;

  /**
   * The customer managed key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket. You can use the Amazon Web Services managed key or a customer managed key that you created in Amazon Web Services KMS as follows:
   *
   * - To use the Amazon Web Services managed key, provide an ARN in the form of `arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses`. For example, if your Amazon Web Services account ID is 123456789012 and you want to use the Amazon Web Services managed key in the US West (Oregon) Region, the ARN of the Amazon Web Services managed key would be `arn:aws:kms:us-west-2:123456789012:alias/aws/ses`. If you use the Amazon Web Services managed key, you don't need to perform any extra steps to give Amazon SES permission to use the key.
   * - To use a customer managed key that you created in Amazon Web Services KMS, provide the ARN of the customer managed key and ensure that you add a statement to your key's policy to give Amazon SES permission to use it. For more information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
   *
   * For more information about key policies, see the [Amazon Web Services KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html). If you do not specify an Amazon Web Services KMS key, Amazon SES does not encrypt your emails.
   *
   * > **Important:** Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your Amazon Web Services KMS keys for decryption. This encryption client is currently available with the [Amazon Web Services SDK for Java](http://aws.amazon.com/sdk-for-java/) and [Amazon Web Services SDK for Ruby](http://aws.amazon.com/sdk-for-ruby/) only. For more information about client-side encryption using Amazon Web Services KMS managed keys, see the [Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html).
   *
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * The ARN of the IAM role to be used by Amazon Simple Email Service while writing to the Amazon S3 bucket, optionally encrypting your mail via the provided customer managed key, and publishing to the Amazon SNS topic. This role should have access to the following APIs:
   *
   * - `s3:PutObject`, `kms:Encrypt` and `kms:GenerateDataKey` for the given Amazon S3 bucket.
   * - `kms:GenerateDataKey` for the given Amazon Web Services KMS customer managed key.
   * - `sns:Publish` for the given Amazon SNS topic.
   *
   * > **Note:** If an IAM role ARN is provided, the role (and only the role) is used to access all the given resources (Amazon S3 bucket, Amazon Web Services KMS customer managed key and Amazon SNS topic). Therefore, setting up individual resource access permissions is not required.
   *
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS). This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.
 *
 * If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html).
 *
 * > **Important:** You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.
 *
 * For information about using a receipt rule to publish an Amazon SNS notification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-sns.html).
 *
 * @public
 */
export interface SNSAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn: string | undefined;

  /**
   * The encoding to use for the email within the Amazon SNS notification. UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.
   *
   * @public
   */
  Encoding?: SNSActionEncoding | undefined;
}

/**
 * When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
 *
 * For information about setting a stop action in a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-stop.html).
 *
 * @public
 */
export interface StopAction {
  /**
   * The scope of the StopAction. The only acceptable value is `RuleSet`.
   *
   * @public
   */
  Scope: StopScope | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn?: string | undefined;
}

/**
 * When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS). It usually isn't necessary to set this up manually, because Amazon WorkMail adds the rule automatically during its setup procedure.
 *
 * For information using a receipt rule to call Amazon WorkMail, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-workmail.html).
 *
 * @public
 */
export interface WorkmailAction {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called. You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
   *
   * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon WorkMail organization. Amazon WorkMail ARNs use the following format:
   *
   * `arn:aws:workmail:<region>:<awsAccountId>:organization/<workmailOrganizationId>`
   *
   * You can find the ID of your organization by using the [ListOrganizations](https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html) operation in Amazon WorkMail. Amazon WorkMail organization IDs begin with "`m-`", followed by a string of alphanumeric characters.
   *
   * For information about Amazon WorkMail organizations, see the [Amazon WorkMail Administrator Guide](https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html).
   *
   * @public
   */
  OrganizationArn: string | undefined;
}

/**
 * An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.
 *
 * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 *
 * @public
 */
export interface ReceiptAction {
  /**
   * Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.
   *
   * @public
   */
  S3Action?: S3Action | undefined;

  /**
   * Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
   *
   * @public
   */
  BounceAction?: BounceAction | undefined;

  /**
   * Calls Amazon WorkMail and, optionally, publishes a notification to Amazon Amazon SNS.
   *
   * @public
   */
  WorkmailAction?: WorkmailAction | undefined;

  /**
   * Calls an Amazon Web Services Lambda function, and optionally, publishes a notification to Amazon SNS.
   *
   * @public
   */
  LambdaAction?: LambdaAction | undefined;

  /**
   * Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.
   *
   * @public
   */
  StopAction?: StopAction | undefined;

  /**
   * Adds a header to the received email.
   *
   * @public
   */
  AddHeaderAction?: AddHeaderAction | undefined;

  /**
   * Publishes the email content within a notification to Amazon SNS.
   *
   * @public
   */
  SNSAction?: SNSAction | undefined;

  /**
   * Parses the received message and starts an email contact in Amazon Connect on your behalf.
   *
   * @public
   */
  ConnectAction?: ConnectAction | undefined;
}

/**
 * Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.
 *
 * Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.
 *
 * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html).
 *
 * @public
 */
export interface ReceiptRule {
  /**
   * The name of the receipt rule. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or periods (.).
   * - Start and end with a letter or number.
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If `true`, the receipt rule is active. The default value is `false`.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS). If this parameter is set to `Require`, Amazon SES bounces emails that are not received over TLS. The default is `Optional`.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;

  /**
   * The recipient domains and email addresses that the receipt rule applies to. If this field is not specified, this rule matches all recipients on all verified domains.
   *
   * @public
   */
  Recipients?: string[] | undefined;

  /**
   * An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.
   *
   * @public
   */
  Actions?: ReceiptAction[] | undefined;

  /**
   * If `true`, then messages that this receipt rule applies to are scanned for spam and viruses. The default value is `false`.
   *
   * @public
   */
  ScanEnabled?: boolean | undefined;
}

/**
 * Represents a request to create a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface CreateReceiptRuleRequest {
  /**
   * The name of the rule set where the receipt rule is added.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The name of an existing rule after which the new rule is placed. If this parameter is null, the new rule is inserted at the beginning of the rule list.
   *
   * @public
   */
  After?: string | undefined;

  /**
   * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
   *
   * @public
   */
  Rule: ReceiptRule | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateReceiptRuleResponse {}

/**
 * Represents a request to create an empty receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface CreateReceiptRuleSetRequest {
  /**
   * The name of the rule set to create. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Start and end with a letter or number.
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  RuleSetName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface CreateReceiptRuleSetResponse {}

/**
 * The content of the email, composed of a subject line and either an HTML part or a text-only part.
 *
 * @public
 */
export interface Template {
  /**
   * The name of the template. You use this name when you send email using the `SendTemplatedEmail` or `SendBulkTemplatedEmail` operations.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The subject line of the email.
   *
   * @public
   */
  SubjectPart?: string | undefined;

  /**
   * The email body that is visible to recipients whose email clients do not display HTML content.
   *
   * @public
   */
  TextPart?: string | undefined;

  /**
   * The HTML body of the email.
   *
   * @public
   */
  HtmlPart?: string | undefined;
}

/**
 * Represents a request to create an email template. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html).
 *
 * @public
 */
export interface CreateTemplateRequest {
  /**
   * The content of the email, composed of a subject line and either an HTML part or a text-only part.
   *
   * @public
   */
  Template: Template | undefined;
}

/**
 * @public
 */
export interface CreateTemplateResponse {}

/**
 * Contains information about a custom verification email template.
 *
 * @public
 */
export interface CustomVerificationEmailTemplate {
  /**
   * The name of the custom verification email template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The email address that the custom verification email is sent from.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * The subject line of the custom verification email.
   *
   * @public
   */
  TemplateSubject?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   *
   * @public
   */
  SuccessRedirectionURL?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   *
   * @public
   */
  FailureRedirectionURL?: string | undefined;
}

/**
 * Represents a request to delete a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * The name of the configuration set to delete.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteConfigurationSetResponse {}

/**
 * Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set from which to delete the event destination.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name of the event destination to delete.
   *
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * Represents a request to delete open and click tracking options in a configuration set.
 *
 * @public
 */
export interface DeleteConfigurationSetTrackingOptionsRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteConfigurationSetTrackingOptionsResponse {}

/**
 * Represents a request to delete an existing custom verification email template.
 *
 * @public
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template to delete.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * Represents a request to delete one of your Amazon SES identities (an email address or domain).
 *
 * @public
 */
export interface DeleteIdentityRequest {
  /**
   * The identity to be removed from the list of identities for the Amazon Web Services account.
   *
   * @public
   */
  Identity: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteIdentityResponse {}

/**
 * Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
 *
 * @public
 */
export interface DeleteIdentityPolicyRequest {
  /**
   * The identity that is associated with the policy to delete. You can specify the identity by using its name or by using its Amazon Resource Name (ARN). Examples: `user@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * To successfully call this operation, you must own the identity.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The name of the policy to be deleted.
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteIdentityPolicyResponse {}

/**
 * Represents a request to delete an IP address filter. You use IP address filters when you receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DeleteReceiptFilterRequest {
  /**
   * The name of the IP address filter to delete.
   *
   * @public
   */
  FilterName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteReceiptFilterResponse {}

/**
 * Represents a request to delete a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DeleteReceiptRuleRequest {
  /**
   * The name of the receipt rule set that contains the receipt rule to delete.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The name of the receipt rule to delete.
   *
   * @public
   */
  RuleName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteReceiptRuleResponse {}

/**
 * Represents a request to delete a receipt rule set and all of the receipt rules it contains. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DeleteReceiptRuleSetRequest {
  /**
   * The name of the receipt rule set to delete.
   *
   * @public
   */
  RuleSetName: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface DeleteReceiptRuleSetResponse {}

/**
 * Represents a request to delete an email template. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html).
 *
 * @public
 */
export interface DeleteTemplateRequest {
  /**
   * The name of the template to be deleted.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTemplateResponse {}

/**
 * Represents a request to delete an email address from the list of email addresses you have attempted to verify under your Amazon Web Services account.
 *
 * @public
 */
export interface DeleteVerifiedEmailAddressRequest {
  /**
   * An email address to be removed from the list of verified addresses.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
 *
 * @public
 */
export interface DeliveryOptions {
  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is `Require`, messages are only delivered if a TLS connection can be established. If the value is `Optional`, messages can be delivered in plain text if a TLS connection can't be established.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;
}

/**
 * Represents a request to return the metadata and receipt rules for the receipt rule set that is currently active. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DescribeActiveReceiptRuleSetRequest {}

/**
 * Information about a receipt rule set.
 *
 * A receipt rule set is a collection of rules that specify what Amazon SES should do with mail it receives on behalf of your account's verified domains.
 *
 * For information about setting up receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules).
 *
 * @public
 */
export interface ReceiptRuleSetMetadata {
  /**
   * The name of the receipt rule set. The name must meet the following requirements:
   *
   * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - Start and end with a letter or number.
   * - Contain 64 characters or fewer.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time the receipt rule set was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * Represents the metadata and receipt rules for the receipt rule set that is currently active.
 *
 * @public
 */
export interface DescribeActiveReceiptRuleSetResponse {
  /**
   * The metadata for the currently active receipt rule set. The metadata consists of the rule set name and a timestamp of when the rule set was created.
   *
   * @public
   */
  Metadata?: ReceiptRuleSetMetadata | undefined;

  /**
   * The receipt rules that belong to the active rule set.
   *
   * @public
   */
  Rules?: ReceiptRule[] | undefined;
}

/**
 * Represents a request to return the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface DescribeConfigurationSetRequest {
  /**
   * The name of the configuration set to describe.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * A list of configuration set attributes to return.
   *
   * @public
   */
  ConfigurationSetAttributeNames?: ConfigurationSetAttribute[] | undefined;
}

/**
 * Contains information about the reputation settings for a configuration set.
 *
 * @public
 */
export interface ReputationOptions {
  /**
   * Describes whether email sending is enabled or disabled for the configuration set. If the value is `true`, then Amazon SES sends emails that use the configuration set. If the value is `false`, Amazon SES does not send emails that use the configuration set. The default value is `true`. You can change this setting using UpdateConfigurationSetSendingEnabled.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;

  /**
   * Describes whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.
   *
   * If the value is `true`, reputation metrics are published. If the value is `false`, reputation metrics are not published. The default value is `false`.
   *
   * @public
   */
  ReputationMetricsEnabled?: boolean | undefined;

  /**
   * The date and time at which the reputation metrics for the configuration set were last reset. Resetting these metrics is known as a *fresh start*.
   *
   * When you disable email sending for a configuration set using UpdateConfigurationSetSendingEnabled and later re-enable it, the reputation metrics for the configuration set (but not for the entire Amazon SES account) are reset.
   *
   * If email sending for the configuration set has never been disabled and later re-enabled, the value of this attribute is `null`.
   *
   * @public
   */
  LastFreshStart?: Date | undefined;
}

/**
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface DescribeConfigurationSetResponse {
  /**
   * The configuration set object associated with the specified configuration set.
   *
   * @public
   */
  ConfigurationSet?: ConfigurationSet | undefined;

  /**
   * A list of event destinations associated with the configuration set.
   *
   * @public
   */
  EventDestinations?: EventDestination[] | undefined;

  /**
   * The name of the custom open and click tracking domain associated with the configuration set.
   *
   * @public
   */
  TrackingOptions?: TrackingOptions | undefined;

  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
   *
   * @public
   */
  DeliveryOptions?: DeliveryOptions | undefined;

  /**
   * An object that represents the reputation settings for the configuration set.
   *
   * @public
   */
  ReputationOptions?: ReputationOptions | undefined;
}

/**
 * Represents a request to return the details of a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DescribeReceiptRuleRequest {
  /**
   * The name of the receipt rule set that the receipt rule belongs to.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The name of the receipt rule.
   *
   * @public
   */
  RuleName: string | undefined;
}

/**
 * Represents the details of a receipt rule.
 *
 * @public
 */
export interface DescribeReceiptRuleResponse {
  /**
   * A data structure that contains the specified receipt rule's name, actions, recipients, domains, enabled status, scan status, and Transport Layer Security (TLS) policy.
   *
   * @public
   */
  Rule?: ReceiptRule | undefined;
}

/**
 * Represents a request to return the details of a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface DescribeReceiptRuleSetRequest {
  /**
   * The name of the receipt rule set to describe.
   *
   * @public
   */
  RuleSetName: string | undefined;
}

/**
 * Represents the details of the specified receipt rule set.
 *
 * @public
 */
export interface DescribeReceiptRuleSetResponse {
  /**
   * The metadata for the receipt rule set, which consists of the rule set name and the timestamp of when the rule set was created.
   *
   * @public
   */
  Metadata?: ReceiptRuleSetMetadata | undefined;

  /**
   * A list of the receipt rules that belong to the specified receipt rule set.
   *
   * @public
   */
  Rules?: ReceiptRule[] | undefined;
}

/**
 * Represents the DKIM attributes of a verified email address or a domain.
 *
 * @public
 */
export interface IdentityDkimAttributes {
  /**
   * Is true if DKIM signing is enabled for email sent from the identity. It's false otherwise. The default value is true.
   *
   * @public
   */
  DkimEnabled: boolean | undefined;

  /**
   * Describes whether Amazon SES has successfully verified the DKIM DNS records (tokens) published in the domain name's DNS. (This only applies to domain identities, not email address identities.)
   *
   * @public
   */
  DkimVerificationStatus: VerificationStatus | undefined;

  /**
   * A set of character strings that represent the domain's identity. Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you've updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)
   *
   * For more information about creating DNS records using DKIM tokens, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html).
   *
   * @public
   */
  DkimTokens?: string[] | undefined;
}

/**
 * Represents a request to return the email sending status for your Amazon SES account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface GetAccountSendingEnabledResponse {
  /**
   * Describes whether email sending is enabled or disabled for your Amazon SES account in the current Amazon Web Services Region.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Represents a request to retrieve an existing custom verification email template.
 *
 * @public
 */
export interface GetCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template to retrieve.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * The content of the custom verification email template.
 *
 * @public
 */
export interface GetCustomVerificationEmailTemplateResponse {
  /**
   * The name of the custom verification email template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The email address that the custom verification email is sent from.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * The subject line of the custom verification email.
   *
   * @public
   */
  TemplateSubject?: string | undefined;

  /**
   * The content of the custom verification email.
   *
   * @public
   */
  TemplateContent?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   *
   * @public
   */
  SuccessRedirectionURL?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   *
   * @public
   */
  FailureRedirectionURL?: string | undefined;
}

/**
 * Represents a request for the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this request also returns the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published. For more information about Easy DKIM, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html).
 *
 * @public
 */
export interface GetIdentityDkimAttributesRequest {
  /**
   * A list of one or more verified identities - email addresses, domains, or both.
   *
   * @public
   */
  Identities: string[] | undefined;
}

/**
 * Represents the status of Amazon SES Easy DKIM signing for an identity. For domain identities, this response also contains the DKIM tokens that are required for Easy DKIM signing, and whether Amazon SES successfully verified that these tokens were published.
 *
 * @public
 */
export interface GetIdentityDkimAttributesResponse {
  /**
   * The DKIM attributes for an email address or a domain.
   *
   * @public
   */
  DkimAttributes: Record<string, IdentityDkimAttributes> | undefined;
}

/**
 * Represents a request to return the Amazon SES custom MAIL FROM attributes for a list of identities. For information about using a custom MAIL FROM domain, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html).
 *
 * @public
 */
export interface GetIdentityMailFromDomainAttributesRequest {
  /**
   * A list of one or more identities.
   *
   * @public
   */
  Identities: string[] | undefined;
}

/**
 * Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
 *
 * @public
 */
export interface IdentityMailFromDomainAttributes {
  /**
   * The custom MAIL FROM domain that the identity is configured to use.
   *
   * @public
   */
  MailFromDomain: string | undefined;

  /**
   * The state that indicates whether Amazon SES has successfully read the MX record required for custom MAIL FROM domain setup. If the state is `Success`, Amazon SES uses the specified custom MAIL FROM domain when the verified identity sends an email. All other states indicate that Amazon SES takes the action described by `BehaviorOnMXFailure`.
   *
   * @public
   */
  MailFromDomainStatus: CustomMailFromStatus | undefined;

  /**
   * The action that Amazon SES takes if it cannot successfully read the required MX record when you send an email. A value of `UseDefaultValue` indicates that if Amazon SES cannot read the required MX record, it uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. A value of `RejectMessage` indicates that if Amazon SES cannot read the required MX record, Amazon SES returns a `MailFromDomainNotVerified` error and does not send the email.
   *
   * The custom MAIL FROM setup states that result in this behavior are `Pending`, `Failed`, and `TemporaryFailure`.
   *
   * @public
   */
  BehaviorOnMXFailure: BehaviorOnMXFailure | undefined;
}

/**
 * Represents the custom MAIL FROM attributes for a list of identities.
 *
 * @public
 */
export interface GetIdentityMailFromDomainAttributesResponse {
  /**
   * A map of identities to custom MAIL FROM attributes.
   *
   * @public
   */
  MailFromDomainAttributes: Record<string, IdentityMailFromDomainAttributes> | undefined;
}

/**
 * Represents a request to return the notification attributes for a list of identities you verified with Amazon SES. For information about Amazon SES notifications, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications.html).
 *
 * @public
 */
export interface GetIdentityNotificationAttributesRequest {
  /**
   * A list of one or more identities. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: `user@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * @public
   */
  Identities: string[] | undefined;
}

/**
 * Represents the notification attributes of an identity, including whether an identity has Amazon Simple Notification Service (Amazon SNS) topics set for bounce, complaint, and/or delivery notifications, and whether feedback forwarding is enabled for bounce and complaint notifications.
 *
 * @public
 */
export interface IdentityNotificationAttributes {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES publishes bounce notifications.
   *
   * @public
   */
  BounceTopic: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES publishes complaint notifications.
   *
   * @public
   */
  ComplaintTopic: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic where Amazon SES publishes delivery notifications.
   *
   * @public
   */
  DeliveryTopic: string | undefined;

  /**
   * Describes whether Amazon SES forwards bounce and complaint notifications as email. `true` indicates that Amazon SES forwards bounce and complaint notifications as email, while `false` indicates that bounce and complaint notifications are published only to the specified bounce and complaint Amazon SNS topics.
   *
   * @public
   */
  ForwardingEnabled: boolean | undefined;

  /**
   * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type `Bounce`. A value of `true` specifies that Amazon SES includes headers in bounce notifications, and a value of `false` specifies that Amazon SES does not include headers in bounce notifications.
   *
   * @public
   */
  HeadersInBounceNotificationsEnabled?: boolean | undefined;

  /**
   * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type `Complaint`. A value of `true` specifies that Amazon SES includes headers in complaint notifications, and a value of `false` specifies that Amazon SES does not include headers in complaint notifications.
   *
   * @public
   */
  HeadersInComplaintNotificationsEnabled?: boolean | undefined;

  /**
   * Describes whether Amazon SES includes the original email headers in Amazon SNS notifications of type `Delivery`. A value of `true` specifies that Amazon SES includes headers in delivery notifications, and a value of `false` specifies that Amazon SES does not include headers in delivery notifications.
   *
   * @public
   */
  HeadersInDeliveryNotificationsEnabled?: boolean | undefined;
}

/**
 * Represents the notification attributes for a list of identities.
 *
 * @public
 */
export interface GetIdentityNotificationAttributesResponse {
  /**
   * A map of Identity to IdentityNotificationAttributes.
   *
   * @public
   */
  NotificationAttributes: Record<string, IdentityNotificationAttributes> | undefined;
}

/**
 * Represents a request to return the requested sending authorization policies for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
 *
 * @public
 */
export interface GetIdentityPoliciesRequest {
  /**
   * The identity for which the policies are retrieved. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: `user@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * To successfully call this operation, you must own the identity.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * A list of the names of policies to be retrieved. You can retrieve a maximum of 20 policies at a time. If you do not know the names of the policies that are attached to the identity, you can use `ListIdentityPolicies`.
   *
   * @public
   */
  PolicyNames: string[] | undefined;
}

/**
 * Represents the requested sending authorization policies.
 *
 * @public
 */
export interface GetIdentityPoliciesResponse {
  /**
   * A map of policy names to policies.
   *
   * @public
   */
  Policies: Record<string, string> | undefined;
}

/**
 * Represents a request to return the Amazon SES verification status of a list of identities. For domain identities, this request also returns the verification token. For information about verifying identities with Amazon SES, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).
 *
 * @public
 */
export interface GetIdentityVerificationAttributesRequest {
  /**
   * A list of identities.
   *
   * @public
   */
  Identities: string[] | undefined;
}

/**
 * Represents the verification attributes of a single identity.
 *
 * @public
 */
export interface IdentityVerificationAttributes {
  /**
   * The verification status of the identity: "Pending", "Success", "Failed", or "TemporaryFailure".
   *
   * @public
   */
  VerificationStatus: VerificationStatus | undefined;

  /**
   * The verification token for a domain identity. Null for email address identities.
   *
   * @public
   */
  VerificationToken?: string | undefined;
}

/**
 * The Amazon SES verification status of a list of identities. For domain identities, this response also contains the verification token.
 *
 * @public
 */
export interface GetIdentityVerificationAttributesResponse {
  /**
   * A map of Identities to IdentityVerificationAttributes objects.
   *
   * @public
   */
  VerificationAttributes: Record<string, IdentityVerificationAttributes> | undefined;
}

/**
 * Represents your Amazon SES daily sending quota, maximum send rate, and the number of emails you have sent in the last 24 hours.
 *
 * @public
 */
export interface GetSendQuotaResponse {
  /**
   * The maximum number of emails the user is allowed to send in a 24-hour interval. A value of -1 signifies an unlimited quota.
   *
   * @public
   */
  Max24HourSend?: number | undefined;

  /**
   * The maximum number of emails that Amazon SES can accept from the user's account per second.
   *
   * > **Note:** The rate at which Amazon SES accepts the user's messages might be less than the maximum send rate.
   *
   * @public
   */
  MaxSendRate?: number | undefined;

  /**
   * The number of emails sent during the previous 24 hours.
   *
   * @public
   */
  SentLast24Hours?: number | undefined;
}

/**
 * Represents sending statistics data. Each `SendDataPoint` contains statistics for a 15-minute period of sending activity.
 *
 * @public
 */
export interface SendDataPoint {
  /**
   * Time of the data point.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * Number of emails that have been sent.
   *
   * @public
   */
  DeliveryAttempts?: number | undefined;

  /**
   * Number of emails that have bounced.
   *
   * @public
   */
  Bounces?: number | undefined;

  /**
   * Number of unwanted emails that were rejected by recipients.
   *
   * @public
   */
  Complaints?: number | undefined;

  /**
   * Number of emails rejected by Amazon SES.
   *
   * @public
   */
  Rejects?: number | undefined;
}

/**
 * Represents a list of data points. This list contains aggregated data from the previous two weeks of your sending activity with Amazon SES.
 *
 * @public
 */
export interface GetSendStatisticsResponse {
  /**
   * A list of data points, each of which represents 15 minutes of activity.
   *
   * @public
   */
  SendDataPoints?: SendDataPoint[] | undefined;
}

/**
 * @public
 */
export interface GetTemplateRequest {
  /**
   * The name of the template to retrieve.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * @public
 */
export interface GetTemplateResponse {
  /**
   * The content of the email, composed of a subject line and either an HTML part or a text-only part.
   *
   * @public
   */
  Template?: Template | undefined;
}

/**
 * Represents a request to list the configuration sets associated with your Amazon Web Services account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface ListConfigurationSetsRequest {
  /**
   * A token returned from a previous call to `ListConfigurationSets` to indicate the position of the configuration set in the configuration set list.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of configuration sets to return.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A list of configuration sets associated with your Amazon Web Services account. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface ListConfigurationSetsResponse {
  /**
   * A list of configuration sets.
   *
   * @public
   */
  ConfigurationSets?: ConfigurationSet[] | undefined;

  /**
   * A token indicating that there are additional configuration sets available to be listed. Pass this token to successive calls of `ListConfigurationSets`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list the existing custom verification email templates for your account.
 *
 * For more information about custom verification email templates, see [Using Custom Verification Email Templates](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
 *
 * @public
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  /**
   * An array the contains the name and creation time stamp for each template in your Amazon SES account.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of custom verification email templates to return. This value must be at least 1 and less than or equal to 50. If you do not specify a value, or if you specify a value less than 1 or greater than 50, the operation returns up to 50 results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A paginated list of custom verification email templates.
 *
 * @public
 */
export interface ListCustomVerificationEmailTemplatesResponse {
  /**
   * A list of the custom verification email templates that exist in your account.
   *
   * @public
   */
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplate[] | undefined;

  /**
   * A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to `ListTemplates` to retrieve the next 50 custom verification email templates.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to return a list of all identities (email addresses and domains) that you have attempted to verify under your Amazon Web Services account, regardless of verification status.
 *
 * @public
 */
export interface ListIdentitiesRequest {
  /**
   * The type of the identities to list. Possible values are "EmailAddress" and "Domain". If this parameter is omitted, then all identities are listed.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The token to use for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of identities per page. Possible values are 1-1000 inclusive.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * A list of all identities that you have attempted to verify under your Amazon Web Services account, regardless of verification status.
 *
 * @public
 */
export interface ListIdentitiesResponse {
  /**
   * A list of identities.
   *
   * @public
   */
  Identities: string[] | undefined;

  /**
   * The token used for pagination.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to return a list of sending authorization policies that are attached to an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
 *
 * @public
 */
export interface ListIdentityPoliciesRequest {
  /**
   * The identity that is associated with the policy for which the policies are listed. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: `user@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * To successfully call this operation, you must own the identity.
   *
   * @public
   */
  Identity: string | undefined;
}

/**
 * A list of names of sending authorization policies that apply to an identity.
 *
 * @public
 */
export interface ListIdentityPoliciesResponse {
  /**
   * A list of names of policies that apply to the specified identity.
   *
   * @public
   */
  PolicyNames: string[] | undefined;
}

/**
 * Represents a request to list the IP address filters that exist under your Amazon Web Services account. You use IP address filters when you receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface ListReceiptFiltersRequest {}

/**
 * A list of IP address filters that exist under your Amazon Web Services account.
 *
 * @public
 */
export interface ListReceiptFiltersResponse {
  /**
   * A list of IP address filter data structures, which each consist of a name, an IP address range, and whether to allow or block mail from it.
   *
   * @public
   */
  Filters?: ReceiptFilter[] | undefined;
}

/**
 * Represents a request to list the receipt rule sets that exist under your Amazon Web Services account. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface ListReceiptRuleSetsRequest {
  /**
   * A token returned from a previous call to `ListReceiptRuleSets` to indicate the position in the receipt rule set list.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of receipt rule sets that exist under your Amazon Web Services account.
 *
 * @public
 */
export interface ListReceiptRuleSetsResponse {
  /**
   * The metadata for the currently active receipt rule set. The metadata consists of the rule set name and the timestamp of when the rule set was created.
   *
   * @public
   */
  RuleSets?: ReceiptRuleSetMetadata[] | undefined;

  /**
   * A token indicating that there are additional receipt rule sets available to be listed. Pass this token to successive calls of `ListReceiptRuleSets` to retrieve up to 100 receipt rule sets at a time.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTemplatesRequest {
  /**
   * A token returned from a previous call to `ListTemplates` to indicate the position in the list of email templates.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of templates to return. This value must be at least 1 and less than or equal to 100. If more than 100 items are requested, the page size will automatically set to 100. If you do not specify a value, 10 is the default page size.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * Contains information about an email template.
 *
 * @public
 */
export interface TemplateMetadata {
  /**
   * The name of the template.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time and date the template was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListTemplatesResponse {
  /**
   * An array the contains the name and creation time stamp for each template in your Amazon SES account.
   *
   * @public
   */
  TemplatesMetadata?: TemplateMetadata[] | undefined;

  /**
   * A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent call to `ListTemplates` to retrieve the next set of email templates within your page size.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A list of email addresses that you have verified with Amazon SES under your Amazon Web Services account.
 *
 * @public
 */
export interface ListVerifiedEmailAddressesResponse {
  /**
   * A list of email addresses that have been verified.
   *
   * @public
   */
  VerifiedEmailAddresses?: string[] | undefined;
}

/**
 * Represents the message to be sent, composed of a subject and a body.
 *
 * @public
 */
export interface Message {
  /**
   * The subject of the message: A short summary of the content, which appears in the recipient's inbox.
   *
   * @public
   */
  Subject: Content | undefined;

  /**
   * The message body.
   *
   * @public
   */
  Body: Body | undefined;
}

/**
 * Message-related information to include in the Delivery Status Notification (DSN) when an email that Amazon SES receives on your behalf bounces.
 *
 * For information about receiving email through Amazon SES, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html).
 *
 * @public
 */
export interface MessageDsn {
  /**
   * The reporting MTA that attempted to deliver the message, formatted as specified in [RFC 3464](https://tools.ietf.org/html/rfc3464) (`mta-name-type; mta-name`). The default value is `dns; inbound-smtp.[region].amazonaws.com`.
   *
   * @public
   */
  ReportingMta: string | undefined;

  /**
   * When the message was received by the reporting mail transfer agent (MTA), in [RFC 822](https://www.ietf.org/rfc/rfc0822.txt) date-time format.
   *
   * @public
   */
  ArrivalDate?: Date | undefined;

  /**
   * Additional X-headers to include in the DSN.
   *
   * @public
   */
  ExtensionFields?: ExtensionField[] | undefined;
}

/**
 * A request to modify the delivery options for a configuration set.
 *
 * @public
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
   *
   * @public
   */
  DeliveryOptions?: DeliveryOptions | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetDeliveryOptionsResponse {}

/**
 * Represents a request to add or update a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
 *
 * @public
 */
export interface PutIdentityPolicyRequest {
  /**
   * The identity to which that the policy applies. You can specify an identity by using its name or by using its Amazon Resource Name (ARN). Examples: `user@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * To successfully call this operation, you must own the identity.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The name of the policy.
   *
   * The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The text of the policy in JSON format. The policy cannot exceed 4 KB.
   *
   * For information about the syntax of sending authorization policies, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization-policies.html).
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface PutIdentityPolicyResponse {}

/**
 * Represents the raw data of the message.
 *
 * @public
 */
export interface RawMessage {
  /**
   * The raw data of the message. This data needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services SDK, the SDK takes care of the base 64-encoding for you. In all cases, the client must ensure that the message format complies with Internet email standards regarding email header fields, MIME types, and MIME encoding.
   *
   * The To:, CC:, and BCC: headers in the raw message can contain a group list.
   *
   * If you are using `SendRawEmail` with sending authorization, you can include X-headers in the raw message to specify the "Source," "From," and "Return-Path" addresses. For more information, see the documentation for `SendRawEmail`.
   *
   * > **Important:** Do not include these X-headers in the DKIM signature, because they are removed by Amazon SES before sending the email.
   *
   * For more information, go to the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html).
   *
   * @public
   */
  Data: Uint8Array | undefined;
}

/**
 * Represents a request to reorder the receipt rules within a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface ReorderReceiptRuleSetRequest {
  /**
   * The name of the receipt rule set to reorder.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The specified receipt rule set's receipt rules, in order.
   *
   * @public
   */
  RuleNames: string[] | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface ReorderReceiptRuleSetResponse {}

/**
 * Represents a request to send a bounce message to the sender of an email you received through Amazon SES.
 *
 * @public
 */
export interface SendBounceRequest {
  /**
   * The message ID of the message to be bounced.
   *
   * @public
   */
  OriginalMessageId: string | undefined;

  /**
   * The address to use in the "From" header of the bounce message. This must be an identity that you have verified with Amazon SES.
   *
   * @public
   */
  BounceSender: string | undefined;

  /**
   * Human-readable text for the bounce message to explain the failure. If not specified, the text is auto-generated based on the bounced recipient information.
   *
   * @public
   */
  Explanation?: string | undefined;

  /**
   * Message-related DSN fields. If not specified, Amazon SES chooses the values.
   *
   * @public
   */
  MessageDsn?: MessageDsn | undefined;

  /**
   * A list of recipients of the bounced message, including the information required to create the Delivery Status Notifications (DSNs) for the recipients. You must specify at least one `BouncedRecipientInfo` in the list.
   *
   * @public
   */
  BouncedRecipientInfoList: BouncedRecipientInfo[] | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the address in the "From" header of the bounce. For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  BounceSenderArn?: string | undefined;
}

/**
 * Represents a unique message ID.
 *
 * @public
 */
export interface SendBounceResponse {
  /**
   * The message ID of the bounce message.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * Represents a request to send a templated email to multiple destinations using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html).
 *
 * @public
 */
export interface SendBulkTemplatedEmailRequest {
  /**
   * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).
   *
   * If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the `SourceArn` parameter. For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
   *
   * @public
   */
  Source: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the `Source` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to send from `user@example.com`, then you would specify the `SourceArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `Source` to be `user@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The email address that bounces and complaints are forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message is returned from the recipient's ISP; this message is forwarded to the email address specified by the `ReturnPath` parameter. The `ReturnPath` parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *
   * @public
   */
  ReturnPath?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `ReturnPath` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to use `feedback@example.com`, then you would specify the `ReturnPathArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `ReturnPath` to be `feedback@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  ReturnPathArn?: string | undefined;

  /**
   * The name of the configuration set to use when you send an email using `SendBulkTemplatedEmail`.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send to a destination using `SendBulkTemplatedEmail`.
   *
   * @public
   */
  DefaultTags?: MessageTag[] | undefined;

  /**
   * The template to use when sending this email.
   *
   * @public
   */
  Template: string | undefined;

  /**
   * The ARN of the template to use when sending this email.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A list of replacement values to apply to the template when replacement data is not specified in a Destination object. These values act as a default or fallback option when no other data is available.
   *
   * The template data is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  DefaultTemplateData: string | undefined;

  /**
   * One or more `Destination` objects. All of the recipients in a `Destination` receive the same version of the email. You can specify up to 50 `Destination` objects within a `Destinations` array.
   *
   * @public
   */
  Destinations: BulkEmailDestination[] | undefined;
}

/**
 * @public
 */
export interface SendBulkTemplatedEmailResponse {
  /**
   * One object per intended recipient. Check each response object and retry any messages with a failure status. (Note that order of responses will be respective to order of destinations in the request.)Receipt rules enable you to specify which actions
   *
   * @public
   */
  Status: BulkEmailDestinationStatus[] | undefined;
}

/**
 * Represents a request to send a custom verification email to a specified recipient.
 *
 * @public
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * The email address to verify.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The name of the custom verification email template to use when sending the verification email.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * Name of a configuration set to use when sending the verification email.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * The response received when attempting to send the custom verification email.
 *
 * @public
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * The unique message identifier returned from the `SendCustomVerificationEmail` operation.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * Represents a request to send a single formatted email using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-formatted.html).
 *
 * @public
 */
export interface SendEmailRequest {
  /**
   * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).
   *
   * If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the `SourceArn` parameter. For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The destination for this email, composed of To:, CC:, and BCC: fields.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The message to be sent.
   *
   * @public
   */
  Message: Message | undefined;

  /**
   * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The email address that bounces and complaints are forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message is returned from the recipient's ISP; this message is forwarded to the email address specified by the `ReturnPath` parameter. The `ReturnPath` parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *
   * @public
   */
  ReturnPath?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the `Source` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to send from `user@example.com`, then you would specify the `SourceArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `Source` to be `user@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `ReturnPath` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to use `feedback@example.com`, then you would specify the `ReturnPathArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `ReturnPath` to be `feedback@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  ReturnPathArn?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using `SendEmail`. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  Tags?: MessageTag[] | undefined;

  /**
   * The name of the configuration set to use when you send an email using `SendEmail`.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * Represents a unique message ID.
 *
 * @public
 */
export interface SendEmailResponse {
  /**
   * The unique message identifier returned from the `SendEmail` action.
   *
   * @public
   */
  MessageId: string | undefined;
}

/**
 * Represents a request to send a single raw email using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html).
 *
 * @public
 */
export interface SendRawEmailRequest {
  /**
   * The identity's email address. If you do not provide a value for this parameter, you must specify a "From" address in the raw text of the message. (You can also specify both.)
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in[RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
   *
   * If you specify the `Source` parameter and have feedback forwarding enabled, then bounces and complaints are sent to this email address. This takes precedence over any Return-Path header that you might include in the raw text of the message.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * A list of destinations for the message, consisting of To:, CC:, and BCC: addresses.
   *
   * @public
   */
  Destinations?: string[] | undefined;

  /**
   * The raw email message itself. The message has to meet the following criteria:
   *
   * - The message has to contain a header and a body, separated by a blank line.
   * - All of the required header fields must be present in the message.
   * - Each part of a multipart MIME message must be formatted properly.
   * - Attachments must be of a content type that Amazon SES supports. For a list on unsupported content types, see [Unsupported Attachment Types](https://docs.aws.amazon.com/ses/latest/dg/mime-types.html) in the *Amazon SES Developer Guide*.
   * - The entire message must be base64-encoded.
   * - If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, we highly recommend that you encode that content. For more information, see [Sending Raw Email](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html) in the *Amazon SES Developer Guide*.
   * - Per [RFC 5321](https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6), the maximum length of each line of text, including the <CRLF>, must not exceed 1,000 characters.
   *
   * @public
   */
  RawMessage: RawMessage | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to specify a particular "From" address in the header of the raw email.
   *
   * Instead of using this parameter, you can use the X-header `X-SES-FROM-ARN` in the raw message of the email. If you use both the `FromArn` parameter and the corresponding X-header, Amazon SES uses the value of the `FromArn` parameter.
   *
   * > **Note:** For information about when to use this parameter, see the description of `SendRawEmail` in this guide, or see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization-delegate-sender-tasks-email.html).
   *
   * @public
   */
  FromArn?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the `Source` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to send from `user@example.com`, then you would specify the `SourceArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `Source` to be `user@example.com`.
   *
   * Instead of using this parameter, you can use the X-header `X-SES-SOURCE-ARN` in the raw message of the email. If you use both the `SourceArn` parameter and the corresponding X-header, Amazon SES uses the value of the `SourceArn` parameter.
   *
   * > **Note:** For information about when to use this parameter, see the description of `SendRawEmail` in this guide, or see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization-delegate-sender-tasks-email.html).
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `ReturnPath` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to use `feedback@example.com`, then you would specify the `ReturnPathArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `ReturnPath` to be `feedback@example.com`.
   *
   * Instead of using this parameter, you can use the X-header `X-SES-RETURN-PATH-ARN` in the raw message of the email. If you use both the `ReturnPathArn` parameter and the corresponding X-header, Amazon SES uses the value of the `ReturnPathArn` parameter.
   *
   * > **Note:** For information about when to use this parameter, see the description of `SendRawEmail` in this guide, or see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization-delegate-sender-tasks-email.html).
   *
   * @public
   */
  ReturnPathArn?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using `SendRawEmail`. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  Tags?: MessageTag[] | undefined;

  /**
   * The name of the configuration set to use when you send an email using `SendRawEmail`.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * Represents a unique message ID.
 *
 * @public
 */
export interface SendRawEmailResponse {
  /**
   * The unique message identifier returned from the `SendRawEmail` action.
   *
   * @public
   */
  MessageId: string | undefined;
}

/**
 * Represents a request to send a templated email using Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-personalized-email-api.html).
 *
 * @public
 */
export interface SendTemplatedEmailRequest {
  /**
   * The email address that is sending the email. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES. For information about verifying identities, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html).
   *
   * If you are sending on behalf of another user and have been permitted to do so by a sending authorization policy, then you must also specify the `SourceArn` parameter. For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). for this reason, The email address string must be 7-bit ASCII. If you want to send to or from email addresses that contain Unicode characters in the domain part of an address, you must encode the domain using Punycode. Punycode is not permitted in the local part of the email address (the part before the @ sign) nor in the "friendly from" name. If you want to use Unicode characters in the "friendly from" name, you must encode the "friendly from" name using MIME encoded-word syntax, as described in [Sending raw email using the Amazon SES API](https://docs.aws.amazon.com/ses/latest/dg/send-email-raw.html). For more information about Punycode, see [RFC 3492](http://tools.ietf.org/html/rfc3492).
   *
   * @public
   */
  Source: string | undefined;

  /**
   * The destination for this email, composed of To:, CC:, and BCC: fields. A Destination can include up to 50 recipients across these three fields.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The reply-to email address(es) for the message. If the recipient replies to the message, each reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The email address that bounces and complaints are forwarded to when feedback forwarding is enabled. If the message cannot be delivered to the recipient, then an error message is returned from the recipient's ISP; this message is forwarded to the email address specified by the `ReturnPath` parameter. The `ReturnPath` parameter is never overwritten. This email address must be either individually verified with Amazon SES, or from a domain that has been verified with Amazon SES.
   *
   * @public
   */
  ReturnPath?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to send for the email address specified in the `Source` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to send from `user@example.com`, then you would specify the `SourceArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `Source` to be `user@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * This parameter is used only for sending authorization. It is the ARN of the identity that is associated with the sending authorization policy that permits you to use the email address specified in the `ReturnPath` parameter.
   *
   * For example, if the owner of `example.com` (which has ARN `arn:aws:ses:us-east-1:123456789012:identity/example.com`) attaches a policy to it that authorizes you to use `feedback@example.com`, then you would specify the `ReturnPathArn` to be `arn:aws:ses:us-east-1:123456789012:identity/example.com`, and the `ReturnPath` to be `feedback@example.com`.
   *
   * For more information about sending authorization, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/sending-authorization.html).
   *
   * @public
   */
  ReturnPathArn?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using `SendTemplatedEmail`. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  Tags?: MessageTag[] | undefined;

  /**
   * The name of the configuration set to use when you send an email using `SendTemplatedEmail`.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The template to use when sending this email.
   *
   * @public
   */
  Template: string | undefined;

  /**
   * The ARN of the template to use when sending this email.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  TemplateData: string | undefined;
}

/**
 * @public
 */
export interface SendTemplatedEmailResponse {
  /**
   * The unique message identifier returned from the `SendTemplatedEmail` action.
   *
   * @public
   */
  MessageId: string | undefined;
}

/**
 * Represents a request to set a receipt rule set as the active receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface SetActiveReceiptRuleSetRequest {
  /**
   * The name of the receipt rule set to make active. Setting this value to null disables all email receiving.
   *
   * @public
   */
  RuleSetName?: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetActiveReceiptRuleSetResponse {}

/**
 * Represents a request to enable or disable Amazon SES Easy DKIM signing for an identity. For more information about setting up Easy DKIM, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html).
 *
 * @public
 */
export interface SetIdentityDkimEnabledRequest {
  /**
   * The identity for which DKIM signing should be enabled or disabled.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * Sets whether DKIM signing is enabled for an identity. Set to `true` to enable DKIM signing for this identity; `false` to disable it.
   *
   * @public
   */
  DkimEnabled: boolean | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetIdentityDkimEnabledResponse {}

/**
 * Represents a request to enable or disable whether Amazon SES forwards you bounce and complaint notifications through email. For information about email feedback forwarding, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications-email.html).
 *
 * @public
 */
export interface SetIdentityFeedbackForwardingEnabledRequest {
  /**
   * The identity for which to set bounce and complaint notification forwarding. Examples: `user@example.com`, `example.com`.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * Sets whether Amazon SES forwards bounce and complaint notifications as email. `true` specifies that Amazon SES forwards bounce and complaint notifications as email, in addition to any Amazon SNS topic publishing otherwise specified. `false` specifies that Amazon SES publishes bounce and complaint notifications only through Amazon SNS. This value can only be set to `false` when Amazon SNS topics are set for both `Bounce` and `Complaint` notification types.
   *
   * @public
   */
  ForwardingEnabled: boolean | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetIdentityFeedbackForwardingEnabledResponse {}

/**
 * Represents a request to set whether Amazon SES includes the original email headers in the Amazon SNS notifications of a specified type. For information about notifications, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications-sns.html).
 *
 * @public
 */
export interface SetIdentityHeadersInNotificationsEnabledRequest {
  /**
   * The identity for which to enable or disable headers in notifications. Examples: `user@example.com`, `example.com`.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The notification type for which to enable or disable headers in notifications.
   *
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of `true` specifies that Amazon SES includes headers in notifications, and a value of `false` specifies that Amazon SES does not include headers in notifications.
   *
   * This value can only be set when `NotificationType` is already set to use a particular Amazon SNS topic.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetIdentityHeadersInNotificationsEnabledResponse {}

/**
 * Represents a request to enable or disable the Amazon SES custom MAIL FROM domain setup for a verified identity. For information about using a custom MAIL FROM domain, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html).
 *
 * @public
 */
export interface SetIdentityMailFromDomainRequest {
  /**
   * The verified identity.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The custom MAIL FROM domain for the verified identity to use. The MAIL FROM domain must 1) be a subdomain of the verified identity, 2) not be used in a "From" address if the MAIL FROM domain is the destination of email feedback forwarding (for more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html)), and 3) not be used to receive emails. A value of `null` disables the custom MAIL FROM setting for the identity.
   *
   * @public
   */
  MailFromDomain?: string | undefined;

  /**
   * The action for Amazon SES to take if it cannot successfully read the required MX record when you send an email. If you choose `UseDefaultValue`, Amazon SES uses amazonses.com (or a subdomain of that) as the MAIL FROM domain. If you choose `RejectMessage`, Amazon SES returns a `MailFromDomainNotVerified` error and not send the email.
   *
   * The action specified in `BehaviorOnMXFailure` is taken when the custom MAIL FROM domain setup is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * @public
   */
  BehaviorOnMXFailure?: BehaviorOnMXFailure | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetIdentityMailFromDomainResponse {}

/**
 * Represents a request to specify the Amazon SNS topic to which Amazon SES publishes bounce, complaint, or delivery notifications for emails sent with that identity as the source. For information about Amazon SES notifications, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity-using-notifications-sns.html).
 *
 * @public
 */
export interface SetIdentityNotificationTopicRequest {
  /**
   * The identity (email address or domain) for the Amazon SNS topic.
   *
   * > **Important:** You can only specify a verified identity for this parameter.
   *
   * You can specify an identity by using its name or by using its Amazon Resource Name (ARN). The following examples are all valid identities: `sender@example.com`, `example.com`, `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * @public
   */
  Identity: string | undefined;

  /**
   * The type of notifications that are published to the specified Amazon SNS topic.
   *
   * @public
   */
  NotificationType: NotificationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic. If the parameter is omitted from the request or a null value is passed, `SnsTopic` is cleared and publishing is disabled.
   *
   * @public
   */
  SnsTopic?: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetIdentityNotificationTopicResponse {}

/**
 * Represents a request to set the position of a receipt rule in a receipt rule set. You use receipt rule sets to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface SetReceiptRulePositionRequest {
  /**
   * The name of the receipt rule set that contains the receipt rule to reposition.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * The name of the receipt rule to reposition.
   *
   * @public
   */
  RuleName: string | undefined;

  /**
   * The name of the receipt rule after which to place the specified receipt rule.
   *
   * @public
   */
  After?: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface SetReceiptRulePositionResponse {}

/**
 * @public
 */
export interface TestRenderTemplateRequest {
  /**
   * The name of the template to render.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  TemplateData: string | undefined;
}

/**
 * @public
 */
export interface TestRenderTemplateResponse {
  /**
   * The complete MIME message rendered by applying the data in the TemplateData parameter to the template specified in the TemplateName parameter.
   *
   * @public
   */
  RenderedTemplate?: string | undefined;
}

/**
 * Represents a request to enable or disable the email sending capabilities for your entire Amazon SES account.
 *
 * @public
 */
export interface UpdateAccountSendingEnabledRequest {
  /**
   * Describes whether email sending is enabled or disabled for your Amazon SES account in the current Amazon Web Services Region.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html).
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that contains the event destination.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The event destination object.
   *
   * @public
   */
  EventDestination: EventDestination | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationResponse {}

/**
 * Represents a request to modify the reputation metric publishing settings for a configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetReputationMetricsEnabledRequest {
  /**
   * The name of the configuration set to update.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * Describes whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Represents a request to enable or disable the email sending capabilities for a specific configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetSendingEnabledRequest {
  /**
   * The name of the configuration set to update.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * Describes whether email sending is enabled or disabled for the configuration set.
   *
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * Represents a request to update the tracking options for a configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetTrackingOptionsRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * A domain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
   *
   * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TrackingOptions: TrackingOptions | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface UpdateConfigurationSetTrackingOptionsResponse {}

/**
 * Represents a request to update an existing custom verification email template.
 *
 * @public
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template to update.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The email address that the custom verification email is sent from.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * The subject line of the custom verification email.
   *
   * @public
   */
  TemplateSubject?: string | undefined;

  /**
   * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see [Custom Verification Email Frequently Asked Questions](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TemplateContent?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
   *
   * @public
   */
  SuccessRedirectionURL?: string | undefined;

  /**
   * The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
   *
   * @public
   */
  FailureRedirectionURL?: string | undefined;
}

/**
 * Represents a request to update a receipt rule. You use receipt rules to receive email with Amazon SES. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html).
 *
 * @public
 */
export interface UpdateReceiptRuleRequest {
  /**
   * The name of the receipt rule set that the receipt rule belongs to.
   *
   * @public
   */
  RuleSetName: string | undefined;

  /**
   * A data structure that contains the updated receipt rule information.
   *
   * @public
   */
  Rule: ReceiptRule | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface UpdateReceiptRuleResponse {}

/**
 * @public
 */
export interface UpdateTemplateRequest {
  /**
   * The content of the email, composed of a subject line and either an HTML part or a text-only part.
   *
   * @public
   */
  Template: Template | undefined;
}

/**
 * @public
 */
export interface UpdateTemplateResponse {}

/**
 * Represents a request to generate the CNAME records needed to set up Easy DKIM with Amazon SES. For more information about setting up Easy DKIM, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html).
 *
 * @public
 */
export interface VerifyDomainDkimRequest {
  /**
   * The name of the domain to be verified for Easy DKIM signing.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * Returns CNAME records that you must publish to the DNS server of your domain to set up Easy DKIM with Amazon SES.
 *
 * @public
 */
export interface VerifyDomainDkimResponse {
  /**
   * A set of character strings that represent the domain's identity. If the identity is an email address, the tokens represent the domain of that address.
   *
   * Using these tokens, you need to create DNS CNAME records that point to DKIM public keys that are hosted by Amazon SES. Amazon Web Services eventually detects that you've updated your DNS records. This detection process might take up to 72 hours. After successful detection, Amazon SES is able to DKIM-sign email originating from that domain. (This only applies to domain identities, not email address identities.)
   *
   * For more information about creating DNS records using DKIM tokens, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-easy.html).
   *
   * @public
   */
  DkimTokens: string[] | undefined;
}

/**
 * Represents a request to begin Amazon SES domain verification and to generate the TXT records that you must publish to the DNS server of your domain to complete the verification. For information about domain verification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#verify-domain-procedure).
 *
 * @public
 */
export interface VerifyDomainIdentityRequest {
  /**
   * The domain to be verified.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * Returns a TXT record that you must publish to the DNS server of your domain to complete domain verification with Amazon SES.
 *
 * @public
 */
export interface VerifyDomainIdentityResponse {
  /**
   * A TXT record that you must place in the DNS settings of the domain to complete domain verification with Amazon SES.
   *
   * As Amazon SES searches for the TXT record, the domain's verification status is "Pending". When Amazon SES detects the record, the domain's verification status changes to "Success". If Amazon SES is unable to detect the record within 72 hours, the domain's verification status changes to "Failed." In that case, to verify the domain, you must restart the verification process from the beginning. The domain's verification status also changes to "Success" when it is DKIM verified.
   *
   * @public
   */
  VerificationToken: string | undefined;
}

/**
 * Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#verify-email-addresses-procedure).
 *
 * @public
 */
export interface VerifyEmailAddressRequest {
  /**
   * The email address to be verified.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * Represents a request to begin email address verification with Amazon SES. For information about email address verification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#verify-email-addresses-procedure).
 *
 * @public
 */
export interface VerifyEmailIdentityRequest {
  /**
   * The email address to be verified.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * An empty element returned on a successful request.
 *
 * @public
 */
export interface VerifyEmailIdentityResponse {}
