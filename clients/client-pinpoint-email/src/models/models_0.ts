// smithy-typescript generated code
import type {
  BehaviorOnMxFailure,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestStatus,
  DimensionValueSource,
  DkimStatus,
  EventType,
  IdentityType,
  MailFromDomainStatus,
  TlsPolicy,
  WarmupStatus,
} from "./enums";

/**
 * Used to associate a configuration set with a dedicated IP pool.
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

  /**
   * The name of the dedicated IP pool that you want to associate with the configuration set.
   *
   * @public
   */
  SendingPoolName?: string | undefined;
}

/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
 *
 * @public
 */
export interface ReputationOptions {
  /**
   * If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.
   *
   * @public
   */
  ReputationMetricsEnabled?: boolean | undefined;

  /**
   * The date and time (in Unix time) when the reputation metrics were last given a fresh start. When your account is given a fresh start, your reputation metrics are calculated starting from the date of the fresh start.
   *
   * @public
   */
  LastFreshStart?: Date | undefined;
}

/**
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
 *
 * @public
 */
export interface SendingOptions {
  /**
   * If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;
}

/**
 * An object that defines the tags that are associated with a resource. A *tag* is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.
 *
 * Each tag consists of a required *tag key* and an associated *tag value*, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:
 *
 * - Tag keys and values are case sensitive.
 * - For each associated resource, each tag key must be unique and it can have only one value.
 * - The `aws:` prefix is reserved for use by AWS; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.
 * - You can associate tags with public or shared resources, but the tags are available only for your AWS account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified AWS Region for your AWS account.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don’t want a resource to have a specific tag value, don’t specify a value for this parameter. Amazon Pinpoint will set the value to an empty string.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An object that defines the tracking options for a configuration set. When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
 *
 * These images and links include references to a domain operated by AWS. You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.
 *
 * @public
 */
export interface TrackingOptions {
  /**
   * The domain that you want to use for tracking open and click events.
   *
   * @public
   */
  CustomRedirectDomain: string | undefined;
}

/**
 * A request to create a configuration set.
 *
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * An object that defines the open and click tracking options for emails that you send using the configuration set.
   *
   * @public
   */
  TrackingOptions?: TrackingOptions | undefined;

  /**
   * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
   *
   * @public
   */
  DeliveryOptions?: DeliveryOptions | undefined;

  /**
   * An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.
   *
   * @public
   */
  ReputationOptions?: ReputationOptions | undefined;

  /**
   * An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.
   *
   * @public
   */
  SendingOptions?: SendingOptions | undefined;

  /**
   * An array of objects that define the tags (keys and values) that you want to associate with the configuration set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateConfigurationSetResponse {}

/**
 * An object that defines the dimension configuration to use when you send Amazon Pinpoint email events to Amazon CloudWatch.
 *
 * @public
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:
   *
   * - It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - It can contain no more than 256 characters.
   *
   * @public
   */
  DimensionName: string | undefined;

  /**
   * The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch. If you want Amazon Pinpoint to use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, choose `messageTag`. If you want Amazon Pinpoint to use your own email headers, choose `emailHeader`. If you want Amazon Pinpoint to use link tags, choose `linkTags`.
   *
   * @public
   */
  DimensionValueSource: DimensionValueSource | undefined;

  /**
   * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:
   *
   * - It can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
   * - It can contain no more than 256 characters.
   *
   * @public
   */
  DefaultDimensionValue: string | undefined;
}

/**
 * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
 *
 * @public
 */
export interface CloudWatchDestination {
  /**
   * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
   *
   * @public
   */
  DimensionConfigurations: CloudWatchDimensionConfiguration[] | undefined;
}

/**
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
 *
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email events to the Amazon Kinesis Data Firehose stream.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events to.
   *
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
 *
 * @public
 */
export interface PinpointDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email events to.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
 *
 * @public
 */
export interface SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email events to. For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
   *
   * @public
   */
  TopicArn: string | undefined;
}

/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
 *
 * @public
 */
export interface EventDestinationDefinition {
  /**
   * If `true`, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition`.
   *
   * If `false`, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * An array that specifies which events Amazon Pinpoint should send to the destinations in this `EventDestinationDefinition`.
   *
   * @public
   */
  MatchingEventTypes?: EventType[] | undefined;

  /**
   * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
   *
   * @public
   */
  CloudWatchDestination?: CloudWatchDestination | undefined;

  /**
   * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
   *
   * @public
   */
  PinpointDestination?: PinpointDestination | undefined;
}

/**
 * A request to add an event destination to a configuration set.
 *
 * @public
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that you want to add an event destination to.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * A name that identifies the event destination within the configuration set.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * An object that defines the event destination.
   *
   * @public
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * A request to create a new dedicated IP pool.
 *
 * @public
 */
export interface CreateDedicatedIpPoolRequest {
  /**
   * The name of the dedicated IP pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * An object that defines the tags (keys and values) that you want to associate with the pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateDedicatedIpPoolResponse {}

/**
 * The raw email message.
 *
 * @public
 */
export interface RawMessage {
  /**
   * The raw email message. The message has to meet the following criteria:
   *
   * - The message has to contain a header and a body, separated by one blank line.
   * - All of the required header fields must be present in the message.
   * - Each part of a multipart MIME message must be formatted properly.
   * - Attachments must be in a file format that Amazon Pinpoint supports.
   * - The entire message must be Base64 encoded.
   * - If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.
   * - The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in [RFC 5321](https://tools.ietf.org/html/rfc5321).
   *
   * @public
   */
  Data: Uint8Array | undefined;
}

/**
 * An object that represents the content of the email, and optionally a character set specification.
 *
 * @public
 */
export interface Content {
  /**
   * The content of the message itself.
   *
   * @public
   */
  Data: string | undefined;

  /**
   * The character set for the content. Because of the constraints of the SMTP protocol, Amazon Pinpoint uses 7-bit ASCII by default. If the text includes characters outside of the ASCII range, you have to specify a character set. For example, you could specify `UTF-8`, `ISO-8859-1`, or `Shift_JIS`.
   *
   * @public
   */
  Charset?: string | undefined;
}

/**
 * Represents the body of the email message.
 *
 * @public
 */
export interface Body {
  /**
   * An object that represents the version of the message that is displayed in email clients that don't support HTML, or clients where the recipient has disabled HTML rendering.
   *
   * @public
   */
  Text?: Content | undefined;

  /**
   * An object that represents the version of the message that is displayed in email clients that support HTML. HTML messages can include formatted text, hyperlinks, images, and more.
   *
   * @public
   */
  Html?: Content | undefined;
}

/**
 * Represents the email message that you're sending. The `Message` object consists of a subject line and a message body.
 *
 * @public
 */
export interface Message {
  /**
   * The subject line of the email. The subject line can only contain 7-bit ASCII characters. However, you can specify non-ASCII characters in the subject line by using encoded-word syntax, as described in [RFC 2047](https://tools.ietf.org/html/rfc2047).
   *
   * @public
   */
  Subject: Content | undefined;

  /**
   * The body of the message. You can specify an HTML version of the message, a text-only version of the message, or both.
   *
   * @public
   */
  Body: Body | undefined;
}

/**
 * @public
 */
export interface Template {
  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.
   *
   * @public
   */
  TemplateData?: string | undefined;
}

/**
 * An object that defines the entire content of the email, including the message headers and the body content. You can create a simple email message, in which you specify the subject and the text and HTML versions of the message body. You can also create raw messages, in which you specify a complete MIME-formatted message. Raw messages can include attachments and custom headers.
 *
 * @public
 */
export interface EmailContent {
  /**
   * The simple email message. The message consists of a subject and a message body.
   *
   * @public
   */
  Simple?: Message | undefined;

  /**
   * The raw email message. The message has to meet the following criteria:
   *
   * - The message has to contain a header and a body, separated by one blank line.
   * - All of the required header fields must be present in the message.
   * - Each part of a multipart MIME message must be formatted properly.
   * - If you include attachments, they must be in a file format that Amazon Pinpoint supports.
   * - The entire message must be Base64 encoded.
   * - If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.
   * - The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in [RFC 5321](https://tools.ietf.org/html/rfc5321).
   *
   * @public
   */
  Raw?: RawMessage | undefined;

  /**
   * The template to use for the email message.
   *
   * @public
   */
  Template?: Template | undefined;
}

/**
 * A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the `GetDeliverabilityTestReport` operation to view the results of the test.
 *
 * @public
 */
export interface CreateDeliverabilityTestReportRequest {
  /**
   * A unique name that helps you to identify the predictive inbox placement test when you retrieve the results.
   *
   * @public
   */
  ReportName?: string | undefined;

  /**
   * The email address that the predictive inbox placement test email was sent from.
   *
   * @public
   */
  FromEmailAddress: string | undefined;

  /**
   * The HTML body of the message that you sent when you performed the predictive inbox placement test.
   *
   * @public
   */
  Content: EmailContent | undefined;

  /**
   * An array of objects that define the tags (keys and values) that you want to associate with the predictive inbox placement test.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Information about the predictive inbox placement test that you created.
 *
 * @public
 */
export interface CreateDeliverabilityTestReportResponse {
  /**
   * A unique string that identifies the predictive inbox placement test.
   *
   * @public
   */
  ReportId: string | undefined;

  /**
   * The status of the predictive inbox placement test. If the status is `IN_PROGRESS`, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is `COMPLETE`, then the test is finished, and you can use the `GetDeliverabilityTestReport` to view the results of the test.
   *
   * @public
   */
  DeliverabilityTestStatus: DeliverabilityTestStatus | undefined;
}

/**
 * A request to begin the verification process for an email identity (an email address or domain).
 *
 * @public
 */
export interface CreateEmailIdentityRequest {
  /**
   * The email address or domain that you want to verify.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * An array of objects that define the tags (keys and values) that you want to associate with the email identity.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An object that contains information about the DKIM configuration for an email identity.
 *
 * @public
 */
export interface DkimAttributes {
  /**
   * If the value is `true`, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. If the value is `false`, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.
   *
   * @public
   */
  SigningEnabled?: boolean | undefined;

  /**
   * Describes whether or not Amazon Pinpoint has successfully located the DKIM records in the DNS records for the domain. The status can be one of the following:
   *
   * - `PENDING` – Amazon Pinpoint hasn't yet located the DKIM records in the DNS configuration for the domain, but will continue to attempt to locate them.
   * - `SUCCESS` – Amazon Pinpoint located the DKIM records in the DNS configuration for the domain and determined that they're correct. Amazon Pinpoint can now send DKIM-signed email from the identity.
   * - `FAILED` – Amazon Pinpoint was unable to locate the DKIM records in the DNS settings for the domain, and won't continue to search for them.
   * - `TEMPORARY_FAILURE` – A temporary issue occurred, which prevented Amazon Pinpoint from determining the DKIM status for the domain.
   * - `NOT_STARTED` – Amazon Pinpoint hasn't yet started searching for the DKIM records in the DKIM records for the domain.
   *
   * @public
   */
  Status?: DkimStatus | undefined;

  /**
   * A set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon Pinpoint detects these records in the DNS configuration for your domain, the DKIM authentication process is complete. Amazon Pinpoint usually detects these records within about 72 hours of adding them to the DNS configuration for your domain.
   *
   * @public
   */
  Tokens?: string[] | undefined;
}

/**
 * If the email identity is a domain, this object contains tokens that you can use to create a set of CNAME records. To sucessfully verify your domain, you have to add these records to the DNS configuration for your domain.
 *
 * If the email identity is an email address, this object is empty.
 *
 * @public
 */
export interface CreateEmailIdentityResponse {
  /**
   * The email identity type.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html).
   *
   * @public
   */
  VerifiedForSendingStatus?: boolean | undefined;

  /**
   * An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.
   *
   * @public
   */
  DkimAttributes?: DkimAttributes | undefined;
}

/**
 * A request to delete a configuration set.
 *
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * The name of the configuration set that you want to delete.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteConfigurationSetResponse {}

/**
 * A request to delete an event destination from a configuration set.
 *
 * @public
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that contains the event destination that you want to delete.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name of the event destination that you want to delete.
   *
   * @public
   */
  EventDestinationName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * A request to delete a dedicated IP pool.
 *
 * @public
 */
export interface DeleteDedicatedIpPoolRequest {
  /**
   * The name of the dedicated IP pool that you want to delete.
   *
   * @public
   */
  PoolName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteDedicatedIpPoolResponse {}

/**
 * A request to delete an existing email identity. When you delete an identity, you lose the ability to use Amazon Pinpoint to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.
 *
 * @public
 */
export interface DeleteEmailIdentityRequest {
  /**
   * The identity (that is, the email address or domain) that you want to delete from your Amazon Pinpoint account.
   *
   * @public
   */
  EmailIdentity: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteEmailIdentityResponse {}

/**
 * A request to obtain information about the email-sending capabilities of your Amazon Pinpoint account.
 *
 * @public
 */
export interface GetAccountRequest {}

/**
 * An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.
 *
 * @public
 */
export interface SendQuota {
  /**
   * The maximum number of emails that you can send in the current AWS Region over a 24-hour period. This value is also called your *sending quota*.
   *
   * @public
   */
  Max24HourSend?: number | undefined;

  /**
   * The maximum number of emails that you can send per second in the current AWS Region. This value is also called your *maximum sending rate* or your *maximum TPS (transactions per second) rate*.
   *
   * @public
   */
  MaxSendRate?: number | undefined;

  /**
   * The number of emails sent from your Amazon Pinpoint account in the current AWS Region over the past 24 hours.
   *
   * @public
   */
  SentLast24Hours?: number | undefined;
}

/**
 * A list of details about the email-sending capabilities of your Amazon Pinpoint account in the current AWS Region.
 *
 * @public
 */
export interface GetAccountResponse {
  /**
   * An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.
   *
   * @public
   */
  SendQuota?: SendQuota | undefined;

  /**
   * Indicates whether or not email sending is enabled for your Amazon Pinpoint account in the current AWS Region.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;

  /**
   * Indicates whether or not the automatic warm-up feature is enabled for dedicated IP addresses that are associated with your account.
   *
   * @public
   */
  DedicatedIpAutoWarmupEnabled?: boolean | undefined;

  /**
   * The reputation status of your Amazon Pinpoint account. The status can be one of the following:
   *
   * - `HEALTHY` – There are no reputation-related issues that currently impact your account.
   * - `PROBATION` – We've identified some issues with your Amazon Pinpoint account. We're placing your account under review while you work on correcting these issues.
   * - `SHUTDOWN` – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.
   *
   * @public
   */
  EnforcementStatus?: string | undefined;

  /**
   * Indicates whether or not your account has production access in the current AWS Region.
   *
   * If the value is `false`, then your account is in the *sandbox*. When your account is in the sandbox, you can only send email to verified identities. Additionally, the maximum number of emails you can send in a 24-hour period (your sending quota) is 200, and the maximum number of emails you can send per second (your maximum sending rate) is 1.
   *
   * If the value is `true`, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.
   *
   * @public
   */
  ProductionAccessEnabled?: boolean | undefined;
}

/**
 * A request to retrieve a list of the blacklists that your dedicated IP addresses appear on.
 *
 * @public
 */
export interface GetBlacklistReportsRequest {
  /**
   * A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon Pinpoint or Amazon SES.
   *
   * @public
   */
  BlacklistItemNames: string[] | undefined;
}

/**
 * An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
 *
 * @public
 */
export interface BlacklistEntry {
  /**
   * The name of the blacklist that the IP address appears on.
   *
   * @public
   */
  RblName?: string | undefined;

  /**
   * The time when the blacklisting event occurred, shown in Unix time format.
   *
   * @public
   */
  ListingTime?: Date | undefined;

  /**
   * Additional information about the blacklisting event, as provided by the blacklist maintainer.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * An object that contains information about blacklist events.
 *
 * @public
 */
export interface GetBlacklistReportsResponse {
  /**
   * An object that contains information about a blacklist that one of your dedicated IP addresses appears on.
   *
   * @public
   */
  BlacklistReport: Record<string, BlacklistEntry[]> | undefined;
}

/**
 * A request to obtain information about a configuration set.
 *
 * @public
 */
export interface GetConfigurationSetRequest {
  /**
   * The name of the configuration set that you want to obtain more information about.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * Information about a configuration set.
 *
 * @public
 */
export interface GetConfigurationSetResponse {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * An object that defines the open and click tracking options for emails that you send using the configuration set.
   *
   * @public
   */
  TrackingOptions?: TrackingOptions | undefined;

  /**
   * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
   *
   * @public
   */
  DeliveryOptions?: DeliveryOptions | undefined;

  /**
   * An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.
   *
   * @public
   */
  ReputationOptions?: ReputationOptions | undefined;

  /**
   * An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.
   *
   * @public
   */
  SendingOptions?: SendingOptions | undefined;

  /**
   * An array of objects that define the tags (keys and values) that are associated with the configuration set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A request to obtain information about the event destinations for a configuration set.
 *
 * @public
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * The name of the configuration set that contains the event destination.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;
}

/**
 * In Amazon Pinpoint, *events* include message sends, deliveries, opens, clicks, bounces, and complaints. *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 *
 * @public
 */
export interface EventDestination {
  /**
   * A name that identifies the event destination.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If `true`, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition`.
   *
   * If `false`, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The types of events that Amazon Pinpoint sends to the specified event destinations.
   *
   * @public
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
   *
   * @public
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination | undefined;

  /**
   * An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
   *
   * @public
   */
  CloudWatchDestination?: CloudWatchDestination | undefined;

  /**
   * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
   *
   * @public
   */
  PinpointDestination?: PinpointDestination | undefined;
}

/**
 * Information about an event destination for a configuration set.
 *
 * @public
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * An array that includes all of the events destinations that have been configured for the configuration set.
   *
   * @public
   */
  EventDestinations?: EventDestination[] | undefined;
}

/**
 * A request to obtain more information about a dedicated IP address.
 *
 * @public
 */
export interface GetDedicatedIpRequest {
  /**
   * The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Pinpoint account.
   *
   * @public
   */
  Ip: string | undefined;
}

/**
 * Contains information about a dedicated IP address that is associated with your Amazon Pinpoint account.
 *
 * @public
 */
export interface DedicatedIp {
  /**
   * An IP address that is reserved for use by your Amazon Pinpoint account.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The warm-up status of a dedicated IP address. The status can have one of the following values:
   *
   * - `IN_PROGRESS` – The IP address isn't ready to use because the dedicated IP warm-up process is ongoing.
   * - `DONE` – The dedicated IP warm-up process is complete, and the IP address is ready to use.
   *
   * @public
   */
  WarmupStatus: WarmupStatus | undefined;

  /**
   * Indicates how complete the dedicated IP warm-up process is. When this value equals 1, the address has completed the warm-up process and is ready for use.
   *
   * @public
   */
  WarmupPercentage: number | undefined;

  /**
   * The name of the dedicated IP pool that the IP address is associated with.
   *
   * @public
   */
  PoolName?: string | undefined;
}

/**
 * Information about a dedicated IP address.
 *
 * @public
 */
export interface GetDedicatedIpResponse {
  /**
   * An object that contains information about a dedicated IP address.
   *
   * @public
   */
  DedicatedIp?: DedicatedIp | undefined;
}

/**
 * A request to obtain more information about dedicated IP pools.
 *
 * @public
 */
export interface GetDedicatedIpsRequest {
  /**
   * The name of the IP pool that the dedicated IP address is associated with.
   *
   * @public
   */
  PoolName?: string | undefined;

  /**
   * A token returned from a previous call to `GetDedicatedIps` to indicate the position of the dedicated IP pool in the list of IP pools.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `GetDedicatedIpsRequest`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about the dedicated IP addresses that are associated with your Amazon Pinpoint account.
 *
 * @public
 */
export interface GetDedicatedIpsResponse {
  /**
   * A list of dedicated IP addresses that are reserved for use by your Amazon Pinpoint account.
   *
   * @public
   */
  DedicatedIps?: DedicatedIp[] | undefined;

  /**
   * A token that indicates that there are additional dedicated IP addresses to list. To view additional addresses, issue another request to `GetDedicatedIps`, passing this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see [Amazon Pinpoint Pricing](http://aws.amazon.com/pinpoint/pricing/).
 *
 * @public
 */
export interface GetDeliverabilityDashboardOptionsRequest {}

/**
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your AWS account. This data is available only if you enabled the Deliverability dashboard for the domain (`PutDeliverabilityDashboardOption` operation).
 *
 * @public
 */
export interface InboxPlacementTrackingOption {
  /**
   * Specifies whether inbox placement data is being tracked for the domain.
   *
   * @public
   */
  Global?: boolean | undefined;

  /**
   * An array of strings, one for each major email provider that the inbox placement data applies to.
   *
   * @public
   */
  TrackedIsps?: string[] | undefined;
}

/**
 * An object that contains information about the Deliverability dashboard subscription for a verified domain that you use to send email and currently has an active Deliverability dashboard subscription. If a Deliverability dashboard subscription is active for a domain, you gain access to reputation, inbox placement, and other metrics for the domain.
 *
 * @public
 */
export interface DomainDeliverabilityTrackingOption {
  /**
   * A verified domain that’s associated with your AWS account and currently has an active Deliverability dashboard subscription.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The date, in Unix time format, when you enabled the Deliverability dashboard for the domain.
   *
   * @public
   */
  SubscriptionStartDate?: Date | undefined;

  /**
   * An object that contains information about the inbox placement data settings for the domain.
   *
   * @public
   */
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption | undefined;
}

/**
 * An object that shows the status of the Deliverability dashboard for your Amazon Pinpoint account.
 *
 * @public
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * Specifies whether the Deliverability dashboard is enabled for your Amazon Pinpoint account. If this value is `true`, the dashboard is enabled.
   *
   * @public
   */
  DashboardEnabled: boolean | undefined;

  /**
   * The date, in Unix time format, when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.
   *
   * @public
   */
  SubscriptionExpiryDate?: Date | undefined;

  /**
   * The current status of your Deliverability dashboard subscription. If this value is `PENDING_EXPIRATION`, your subscription is scheduled to expire at the end of the current calendar month.
   *
   * @public
   */
  AccountStatus?: DeliverabilityDashboardAccountStatus | undefined;

  /**
   * An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at the end of the current calendar month.
   *
   * @public
   */
  ActiveSubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined;

  /**
   * An array of objects, one for each verified domain that you use to send email and currently has an active Deliverability dashboard subscription that's scheduled to expire at the end of the current calendar month.
   *
   * @public
   */
  PendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined;
}

/**
 * A request to retrieve the results of a predictive inbox placement test.
 *
 * @public
 */
export interface GetDeliverabilityTestReportRequest {
  /**
   * A unique string that identifies the predictive inbox placement test.
   *
   * @public
   */
  ReportId: string | undefined;
}

/**
 * An object that contains metadata related to a predictive inbox placement test.
 *
 * @public
 */
export interface DeliverabilityTestReport {
  /**
   * A unique string that identifies the predictive inbox placement test.
   *
   * @public
   */
  ReportId?: string | undefined;

  /**
   * A name that helps you identify a predictive inbox placement test report.
   *
   * @public
   */
  ReportName?: string | undefined;

  /**
   * The subject line for an email that you submitted in a predictive inbox placement test.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The sender address that you specified for the predictive inbox placement test.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * The date and time when the predictive inbox placement test was created, in Unix time format.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The status of the predictive inbox placement test. If the status is `IN_PROGRESS`, then the predictive inbox placement test is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the test. If the status is `COMPLETE`, then the test is finished, and you can use the `GetDeliverabilityTestReport` to view the results of the test.
   *
   * @public
   */
  DeliverabilityTestStatus?: DeliverabilityTestStatus | undefined;
}

/**
 * An object that contains inbox placement data for an email provider.
 *
 * @public
 */
export interface PlacementStatistics {
  /**
   * The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.
   *
   * @public
   */
  InboxPercentage?: number | undefined;

  /**
   * The percentage of emails that arrived in recipients' spam or junk mail folders during the predictive inbox placement test.
   *
   * @public
   */
  SpamPercentage?: number | undefined;

  /**
   * The percentage of emails that didn't arrive in recipients' inboxes at all during the predictive inbox placement test.
   *
   * @public
   */
  MissingPercentage?: number | undefined;

  /**
   * The percentage of emails that were authenticated by using Sender Policy Framework (SPF) during the predictive inbox placement test.
   *
   * @public
   */
  SpfPercentage?: number | undefined;

  /**
   * The percentage of emails that were authenticated by using DomainKeys Identified Mail (DKIM) during the predictive inbox placement test.
   *
   * @public
   */
  DkimPercentage?: number | undefined;
}

/**
 * An object that describes how email sent during the predictive inbox placement test was handled by a certain email provider.
 *
 * @public
 */
export interface IspPlacement {
  /**
   * The name of the email provider that the inbox placement data applies to.
   *
   * @public
   */
  IspName?: string | undefined;

  /**
   * An object that contains inbox placement metrics for a specific email provider.
   *
   * @public
   */
  PlacementStatistics?: PlacementStatistics | undefined;
}

/**
 * The results of the predictive inbox placement test.
 *
 * @public
 */
export interface GetDeliverabilityTestReportResponse {
  /**
   * An object that contains the results of the predictive inbox placement test.
   *
   * @public
   */
  DeliverabilityTestReport: DeliverabilityTestReport | undefined;

  /**
   * An object that specifies how many test messages that were sent during the predictive inbox placement test were delivered to recipients' inboxes, how many were sent to recipients' spam folders, and how many weren't delivered.
   *
   * @public
   */
  OverallPlacement: PlacementStatistics | undefined;

  /**
   * An object that describes how the test email was handled by several email providers, including Gmail, Hotmail, Yahoo, AOL, and others.
   *
   * @public
   */
  IspPlacements: IspPlacement[] | undefined;

  /**
   * An object that contains the message that you sent when you performed this predictive inbox placement test.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * An array of objects that define the tags (keys and values) that are associated with the predictive inbox placement test.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (`PutDeliverabilityDashboardOption` operation).
 *
 * @public
 */
export interface GetDomainDeliverabilityCampaignRequest {
  /**
   * The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.
   *
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (`PutDeliverabilityDashboardOption` operation).
 *
 * @public
 */
export interface DomainDeliverabilityCampaign {
  /**
   * The unique identifier for the campaign. Amazon Pinpoint automatically generates and assigns this identifier to a campaign. This value is not the same as the campaign identifier that Amazon Pinpoint assigns to campaigns that you create and manage by using the Amazon Pinpoint API or the Amazon Pinpoint console.
   *
   * @public
   */
  CampaignId?: string | undefined;

  /**
   * The URL of an image that contains a snapshot of the email message that was sent.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The subject line, or title, of the email message.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The verified email address that the email message was sent from.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * The IP addresses that were used to send the email message.
   *
   * @public
   */
  SendingIps?: string[] | undefined;

  /**
   * The first time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.
   *
   * @public
   */
  FirstSeenDateTime?: Date | undefined;

  /**
   * The last time, in Unix time format, when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.
   *
   * @public
   */
  LastSeenDateTime?: Date | undefined;

  /**
   * The number of email messages that were delivered to recipients’ inboxes.
   *
   * @public
   */
  InboxCount?: number | undefined;

  /**
   * The number of email messages that were delivered to recipients' spam or junk mail folders.
   *
   * @public
   */
  SpamCount?: number | undefined;

  /**
   * The percentage of email messages that were opened by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.
   *
   * @public
   */
  ReadRate?: number | undefined;

  /**
   * The percentage of email messages that were deleted by recipients, without being opened first. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.
   *
   * @public
   */
  DeleteRate?: number | undefined;

  /**
   * The percentage of email messages that were opened and then deleted by recipients. Due to technical limitations, this value only includes recipients who opened the message by using an email client that supports images.
   *
   * @public
   */
  ReadDeleteRate?: number | undefined;

  /**
   * The projected number of recipients that the email message was sent to.
   *
   * @public
   */
  ProjectedVolume?: number | undefined;

  /**
   * The major email providers who handled the email message.
   *
   * @public
   */
  Esps?: string[] | undefined;
}

/**
 * An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (`PutDeliverabilityDashboardOption` operation).
 *
 * @public
 */
export interface GetDomainDeliverabilityCampaignResponse {
  /**
   * An object that contains the deliverability data for the campaign.
   *
   * @public
   */
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign | undefined;
}

/**
 * A request to obtain deliverability metrics for a domain.
 *
 * @public
 */
export interface GetDomainStatisticsReportRequest {
  /**
   * The domain that you want to obtain deliverability metrics for.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The first day (in Unix time) that you want to obtain domain deliverability metrics for.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * The last day (in Unix time) that you want to obtain domain deliverability metrics for. The `EndDate` that you specify has to be less than or equal to 30 days after the `StartDate`.
   *
   * @public
   */
  EndDate: Date | undefined;
}

/**
 * An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
 *
 * @public
 */
export interface DomainIspPlacement {
  /**
   * The name of the email provider that the inbox placement data applies to.
   *
   * @public
   */
  IspName?: string | undefined;

  /**
   * The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.
   *
   * @public
   */
  InboxRawCount?: number | undefined;

  /**
   * The total number of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.
   *
   * @public
   */
  SpamRawCount?: number | undefined;

  /**
   * The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' inboxes.
   *
   * @public
   */
  InboxPercentage?: number | undefined;

  /**
   * The percentage of messages that were sent from the selected domain to the specified email provider that arrived in recipients' spam or junk mail folders.
   *
   * @public
   */
  SpamPercentage?: number | undefined;
}

/**
 * An object that contains information about the amount of email that was delivered to recipients.
 *
 * @public
 */
export interface VolumeStatistics {
  /**
   * The total number of emails that arrived in recipients' inboxes.
   *
   * @public
   */
  InboxRawCount?: number | undefined;

  /**
   * The total number of emails that arrived in recipients' spam or junk mail folders.
   *
   * @public
   */
  SpamRawCount?: number | undefined;

  /**
   * An estimate of the percentage of emails sent from the current domain that will arrive in recipients' inboxes.
   *
   * @public
   */
  ProjectedInbox?: number | undefined;

  /**
   * An estimate of the percentage of emails sent from the current domain that will arrive in recipients' spam or junk mail folders.
   *
   * @public
   */
  ProjectedSpam?: number | undefined;
}

/**
 * An object that contains information about the volume of email sent on each day of the analysis period.
 *
 * @public
 */
export interface DailyVolume {
  /**
   * The date that the DailyVolume metrics apply to, in Unix time.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * An object that contains inbox placement metrics for a specific day in the analysis period.
   *
   * @public
   */
  VolumeStatistics?: VolumeStatistics | undefined;

  /**
   * An object that contains inbox placement metrics for a specified day in the analysis period, broken out by the recipient's email provider.
   *
   * @public
   */
  DomainIspPlacements?: DomainIspPlacement[] | undefined;
}

/**
 * An object that contains information about email that was sent from the selected domain.
 *
 * @public
 */
export interface OverallVolume {
  /**
   * An object that contains information about the numbers of messages that arrived in recipients' inboxes and junk mail folders.
   *
   * @public
   */
  VolumeStatistics?: VolumeStatistics | undefined;

  /**
   * The percentage of emails that were sent from the domain that were read by their recipients.
   *
   * @public
   */
  ReadRatePercent?: number | undefined;

  /**
   * An object that contains inbox and junk mail placement metrics for individual email providers.
   *
   * @public
   */
  DomainIspPlacements?: DomainIspPlacement[] | undefined;
}

/**
 * An object that includes statistics that are related to the domain that you specified.
 *
 * @public
 */
export interface GetDomainStatisticsReportResponse {
  /**
   * An object that contains deliverability metrics for the domain that you specified. The data in this object is a summary of all of the data that was collected from the `StartDate` to the `EndDate`.
   *
   * @public
   */
  OverallVolume: OverallVolume | undefined;

  /**
   * An object that contains deliverability metrics for the domain that you specified. This object contains data for each day, starting on the `StartDate` and ending on the `EndDate`.
   *
   * @public
   */
  DailyVolumes: DailyVolume[] | undefined;
}

/**
 * A request to return details about an email identity.
 *
 * @public
 */
export interface GetEmailIdentityRequest {
  /**
   * The email identity that you want to retrieve details for.
   *
   * @public
   */
  EmailIdentity: string | undefined;
}

/**
 * A list of attributes that are associated with a MAIL FROM domain.
 *
 * @public
 */
export interface MailFromAttributes {
  /**
   * The name of a domain that an email identity uses as a custom MAIL FROM domain.
   *
   * @public
   */
  MailFromDomain: string | undefined;

  /**
   * The status of the MAIL FROM domain. This status can have the following values:
   *
   * - `PENDING` – Amazon Pinpoint hasn't started searching for the MX record yet.
   * - `SUCCESS` – Amazon Pinpoint detected the required MX record for the MAIL FROM domain.
   * - `FAILED` – Amazon Pinpoint can't find the required MX record, or the record no longer exists.
   * - `TEMPORARY_FAILURE` – A temporary issue occurred, which prevented Amazon Pinpoint from determining the status of the MAIL FROM domain.
   *
   * @public
   */
  MailFromDomainStatus: MailFromDomainStatus | undefined;

  /**
   * The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to `UseDefaultValue`, Amazon Pinpoint uses *amazonses.com* as the MAIL FROM domain. When you set this value to `RejectMessage`, Amazon Pinpoint returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   *
   * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * @public
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | undefined;
}

/**
 * Details about an email identity.
 *
 * @public
 */
export interface GetEmailIdentityResponse {
  /**
   * The email identity type.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The feedback forwarding configuration for the identity.
   *
   * If the value is `true`, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.
   *
   * When you set this value to `false`, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).
   *
   * @public
   */
  FeedbackForwardingStatus?: boolean | undefined;

  /**
   * Specifies whether or not the identity is verified. In Amazon Pinpoint, you can only send email from verified email addresses or domains. For more information about verifying identities, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html).
   *
   * @public
   */
  VerifiedForSendingStatus?: boolean | undefined;

  /**
   * An object that contains information about the DKIM attributes for the identity. This object includes the tokens that you use to create the CNAME records that are required to complete the DKIM verification process.
   *
   * @public
   */
  DkimAttributes?: DkimAttributes | undefined;

  /**
   * An object that contains information about the Mail-From attributes for the email identity.
   *
   * @public
   */
  MailFromAttributes?: MailFromAttributes | undefined;

  /**
   * An array of objects that define the tags (keys and values) that are associated with the email identity.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A request to obtain a list of configuration sets for your Amazon Pinpoint account in the current AWS Region.
 *
 * @public
 */
export interface ListConfigurationSetsRequest {
  /**
   * A token returned from a previous call to `ListConfigurationSets` to indicate the position in the list of configuration sets.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListConfigurationSets`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.
 *
 * @public
 */
export interface ListConfigurationSetsResponse {
  /**
   * An array that contains all of the configuration sets in your Amazon Pinpoint account in the current AWS Region.
   *
   * @public
   */
  ConfigurationSets?: string[] | undefined;

  /**
   * A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to `ListConfigurationSets`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request to obtain a list of dedicated IP pools.
 *
 * @public
 */
export interface ListDedicatedIpPoolsRequest {
  /**
   * A token returned from a previous call to `ListDedicatedIpPools` to indicate the position in the list of dedicated IP pools.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListDedicatedIpPools`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A list of dedicated IP pools.
 *
 * @public
 */
export interface ListDedicatedIpPoolsResponse {
  /**
   * A list of all of the dedicated IP pools that are associated with your Amazon Pinpoint account.
   *
   * @public
   */
  DedicatedIpPools?: string[] | undefined;

  /**
   * A token that indicates that there are additional IP pools to list. To view additional IP pools, issue another request to `ListDedicatedIpPools`, passing this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request to list all of the predictive inbox placement tests that you've performed.
 *
 * @public
 */
export interface ListDeliverabilityTestReportsRequest {
  /**
   * A token returned from a previous call to `ListDeliverabilityTestReports` to indicate the position in the list of predictive inbox placement tests.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListDeliverabilityTestReports`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * The value you specify has to be at least 0, and can be no more than 1000.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A list of the predictive inbox placement test reports that are available for your account, regardless of whether or not those tests are complete.
 *
 * @public
 */
export interface ListDeliverabilityTestReportsResponse {
  /**
   * An object that contains a lists of predictive inbox placement tests that you've performed.
   *
   * @public
   */
  DeliverabilityTestReports: DeliverabilityTestReport[] | undefined;

  /**
   * A token that indicates that there are additional predictive inbox placement tests to list. To view additional predictive inbox placement tests, issue another request to `ListDeliverabilityTestReports`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (`PutDeliverabilityDashboardOption` operation) for the domain.
 *
 * @public
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * The first day, in Unix time format, that you want to obtain deliverability data for.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * The last day, in Unix time format, that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the `StartDate` parameter.
   *
   * @public
   */
  EndDate: Date | undefined;

  /**
   * The domain to obtain deliverability data for.
   *
   * @public
   */
  SubscribedDomain: string | undefined;

  /**
   * A token that’s returned from a previous call to the `ListDomainDeliverabilityCampaigns` operation. This token indicates the position of a campaign in the list of campaigns.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in response to a single call to the `ListDomainDeliverabilityCampaigns` operation. If the number of results is larger than the number that you specify in this parameter, the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (`PutDeliverabilityDashboardOption` operation) for the domain.
 *
 * @public
 */
export interface ListDomainDeliverabilityCampaignsResponse {
  /**
   * An array of responses, one for each campaign that used the domain to send email during the specified time range.
   *
   * @public
   */
  DomainDeliverabilityCampaigns: DomainDeliverabilityCampaign[] | undefined;

  /**
   * A token that’s returned from a previous call to the `ListDomainDeliverabilityCampaigns` operation. This token indicates the position of the campaign in the list of campaigns.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request to list all of the email identities associated with your Amazon Pinpoint account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.
 *
 * @public
 */
export interface ListEmailIdentitiesRequest {
  /**
   * A token returned from a previous call to `ListEmailIdentities` to indicate the position in the list of identities.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListEmailIdentities`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * The value you specify has to be at least 0, and can be no more than 1000.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about an email identity.
 *
 * @public
 */
export interface IdentityInfo {
  /**
   * The email identity type. The identity type can be one of the following:
   *
   * - `EMAIL_ADDRESS` – The identity is an email address.
   * - `DOMAIN` – The identity is a domain.
   * - `MANAGED_DOMAIN` – The identity is a domain that is managed by AWS.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The address or domain of the identity.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Indicates whether or not you can send email from the identity.
   *
   * In Amazon Pinpoint, an identity is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon Pinpoint to send email from that identity.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;
}

/**
 * A list of all of the identities that you've attempted to verify for use with Amazon Pinpoint, regardless of whether or not those identities were successfully verified.
 *
 * @public
 */
export interface ListEmailIdentitiesResponse {
  /**
   * An array that includes all of the identities associated with your Amazon Pinpoint account.
   *
   * @public
   */
  EmailIdentities?: IdentityInfo[] | undefined;

  /**
   * A token that indicates that there are additional configuration sets to list. To view additional configuration sets, issue another request to `ListEmailIdentities`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to retrieve tag information for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * An array that lists all the tags that are associated with the resource. Each tag consists of a required tag key (`Key`) and an associated tag value (`Value`)
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * A request to enable or disable the automatic IP address warm-up feature.
 *
 * @public
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon Pinpoint account in the current AWS Region. Set to `true` to enable the automatic warm-up feature, or set to `false` to disable it.
   *
   * @public
   */
  AutoWarmupEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse {}

/**
 * A request to change the ability of your account to send email.
 *
 * @public
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * Enables or disables your account's ability to send email. Set to `true` to enable email sending, or set to `false` to disable email sending.
   *
   * > **Note:** If AWS paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutAccountSendingAttributesResponse {}

/**
 * A request to associate a configuration set with a dedicated IP pool.
 *
 * @public
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * The name of the configuration set that you want to associate with a dedicated IP pool.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is `Require`, messages are only delivered if a TLS connection can be established. If the value is `Optional`, messages can be delivered in plain text if a TLS connection can't be established.
   *
   * @public
   */
  TlsPolicy?: TlsPolicy | undefined;

  /**
   * The name of the dedicated IP pool that you want to associate with the configuration set.
   *
   * @public
   */
  SendingPoolName?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetDeliveryOptionsResponse {}

/**
 * A request to enable or disable tracking of reputation metrics for a configuration set.
 *
 * @public
 */
export interface PutConfigurationSetReputationOptionsRequest {
  /**
   * The name of the configuration set that you want to enable or disable reputation metric tracking for.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.
   *
   * @public
   */
  ReputationMetricsEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetReputationOptionsResponse {}

/**
 * A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set.
 *
 * @public
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * The name of the configuration set that you want to enable or disable email sending for.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetSendingOptionsResponse {}

/**
 * A request to add a custom domain for tracking open and click events to a configuration set.
 *
 * @public
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * The name of the configuration set that you want to add a custom tracking domain to.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The domain that you want to use to track open and click events.
   *
   * @public
   */
  CustomRedirectDomain?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetTrackingOptionsResponse {}

/**
 * A request to move a dedicated IP address to a dedicated IP pool.
 *
 * @public
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * The IP address that you want to move to the dedicated IP pool. The value you specify has to be a dedicated IP address that's associated with your Amazon Pinpoint account.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The name of the IP pool that you want to add the dedicated IP address to. You have to specify an IP pool that already exists.
   *
   * @public
   */
  DestinationPoolName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutDedicatedIpInPoolResponse {}

/**
 * A request to change the warm-up attributes for a dedicated IP address. This operation is useful when you want to resume the warm-up process for an existing IP address.
 *
 * @public
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  /**
   * The dedicated IP address that you want to update the warm-up attributes for.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The warm-up percentage that you want to associate with the dedicated IP address.
   *
   * @public
   */
  WarmupPercentage: number | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutDedicatedIpWarmupAttributesResponse {}

/**
 * Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see [Amazon Pinpoint Pricing](http://aws.amazon.com/pinpoint/pricing/).
 *
 * @public
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * Specifies whether to enable the Deliverability dashboard for your Amazon Pinpoint account. To enable the dashboard, set this value to `true`.
   *
   * @public
   */
  DashboardEnabled: boolean | undefined;

  /**
   * An array of objects, one for each verified domain that you use to send email and enabled the Deliverability dashboard for.
   *
   * @public
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[] | undefined;
}

/**
 * A response that indicates whether the Deliverability dashboard is enabled for your Amazon Pinpoint account.
 *
 * @public
 */
export interface PutDeliverabilityDashboardOptionResponse {}

/**
 * A request to enable or disable DKIM signing of email that you send from an email identity.
 *
 * @public
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * The email identity that you want to change the DKIM settings for.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * Sets the DKIM signing configuration for the identity.
   *
   * When you set this value `true`, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to `false`, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.
   *
   * @public
   */
  SigningEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityDkimAttributesResponse {}

/**
 * A request to set the attributes that control how bounce and complaint events are processed.
 *
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * The email identity that you want to configure bounce and complaint feedback forwarding for.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * Sets the feedback forwarding configuration for the identity.
   *
   * If the value is `true`, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.
   *
   * When you set this value to `false`, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic or another event destination. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).
   *
   * @public
   */
  EmailForwardingEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityFeedbackAttributesResponse {}

/**
 * A request to configure the custom MAIL FROM domain for a verified identity.
 *
 * @public
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  /**
   * The verified email identity that you want to set up the custom MAIL FROM domain for.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must meet the following criteria:
   *
   * - It has to be a subdomain of the verified identity.
   * - It can't be used to receive email.
   * - It can't be used in a "From" address if the MAIL FROM domain is a destination for feedback forwarding emails.
   *
   * @public
   */
  MailFromDomain?: string | undefined;

  /**
   * The action that you want Amazon Pinpoint to take if it can't read the required MX record when you send an email. When you set this value to `UseDefaultValue`, Amazon Pinpoint uses *amazonses.com* as the MAIL FROM domain. When you set this value to `RejectMessage`, Amazon Pinpoint returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   *
   * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * @public
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutEmailIdentityMailFromAttributesResponse {}

/**
 * An object that describes the recipients for an email.
 *
 * @public
 */
export interface Destination {
  /**
   * An array that contains the email addresses of the "To" recipients for the email.
   *
   * @public
   */
  ToAddresses?: string[] | undefined;

  /**
   * An array that contains the email addresses of the "CC" (carbon copy) recipients for the email.
   *
   * @public
   */
  CcAddresses?: string[] | undefined;

  /**
   * An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.
   *
   * @public
   */
  BccAddresses?: string[] | undefined;
}

/**
 * Contains the name and value of a tag that you apply to an email. You can use message tags when you publish email sending events.
 *
 * @public
 */
export interface MessageTag {
  /**
   * The name of the message tag. The message tag name has to meet the following criteria:
   *
   * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
   * - It can contain no more than 256 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the message tag. The message tag value has to meet the following criteria:
   *
   * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
   * - It can contain no more than 256 characters.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * A request to send an email message.
 *
 * @public
 */
export interface SendEmailRequest {
  /**
   * The email address that you want to use as the "From" address for the email. The address that you specify has to be verified.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * An object that contains the recipients of the email message.
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * The "Reply-to" email addresses for the message. When the recipient replies to the message, each Reply-to address receives the reply.
   *
   * @public
   */
  ReplyToAddresses?: string[] | undefined;

  /**
   * The address that Amazon Pinpoint should send bounce and complaint notifications to.
   *
   * @public
   */
  FeedbackForwardingEmailAddress?: string | undefined;

  /**
   * An object that contains the body of the message. You can send either a Simple message or a Raw message.
   *
   * @public
   */
  Content: EmailContent | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using the `SendEmail` operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  EmailTags?: MessageTag[] | undefined;

  /**
   * The name of the configuration set that you want to use when sending the email.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * A unique message ID that you receive when Amazon Pinpoint accepts an email for sending.
 *
 * @public
 */
export interface SendEmailResponse {
  /**
   * A unique identifier for the message that is generated when Amazon Pinpoint accepts the message.
   *
   * > **Note:** It is possible for Amazon Pinpoint to accept a message without sending it. This can happen when the message you're trying to send has an attachment doesn't pass a virus check, or when you send a templated email that contains invalid personalization content, for example.
   *
   * @public
   */
  MessageId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to add one or more tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of the tags that you want to add to the resource. A tag consists of a required tag key (`Key`) and an associated tag value (`Value`). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove one or more tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags (tag keys) that you want to remove from the resource. When you specify a tag key, the action removes both that key and its associated tag value.
   *
   * To remove more than one tag from the resource, append the `TagKeys` parameter and argument for each additional tag to remove, separated by an ampersand. For example: `/v1/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2`
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * A request to change the settings for an event destination for a configuration set.
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  /**
   * The name of the configuration set that contains the event destination that you want to modify.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The name of the event destination that you want to modify.
   *
   * @public
   */
  EventDestinationName: string | undefined;

  /**
   * An object that defines the event destination.
   *
   * @public
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface UpdateConfigurationSetEventDestinationResponse {}
