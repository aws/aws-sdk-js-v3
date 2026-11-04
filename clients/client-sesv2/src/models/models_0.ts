// smithy-typescript generated code
import type {
  AttachmentContentDisposition,
  AttachmentContentTransferEncoding,
  BehaviorOnMxFailure,
  BounceType,
  BulkEmailStatus,
  ConfigurationSetFilterKey,
  ContactLanguage,
  ContactListImportAction,
  DataFormat,
  DeliverabilityDashboardAccountStatus,
  DeliverabilityTestStatus,
  DeliveryEventType,
  DimensionValueSource,
  DkimSigningAttributesOrigin,
  DkimSigningKeyLength,
  DkimStatus,
  EmailAddressInsightsConfidenceVerdict,
  EngagementEventType,
  EventType,
  ExportSourceType,
  FeatureStatus,
  HttpsPolicy,
  IdentityCertificateStatus,
  IdentityFilterKey,
  IdentityType,
  ImportDestinationType,
  JobStatus,
  ListRecommendationsFilterKey,
  ListTenantResourcesFilterKey,
  ListTenantsFilterKey,
  MailFromDomainStatus,
  MailType,
  Metric,
  MetricAggregation,
  MetricDimensionName,
  MetricNamespace,
  PricingPlan,
  QueryErrorCode,
  RecommendationImpact,
  RecommendationStatus,
  RecommendationType,
  ReputationEntityFilterKey,
  ReputationEntityType,
  ResourceType,
  ReviewStatus,
  ScalingMode,
  SendingStatus,
  SignatureFormat,
  Status,
  SubscriptionStatus,
  SuppressionConfidenceVerdictThreshold,
  SuppressionListImportAction,
  SuppressionListReason,
  SuppressionListScope,
  TlsPolicy,
  VerificationError,
  VerificationStatus,
  WarmupStatus,
} from "./enums";

/**
 * An object that contains information about your account details review.
 *
 * @public
 */
export interface ReviewDetails {
  /**
   * The status of the latest review of your account. The status can be one of the following:
   *
   * - `PENDING` – We have received your appeal and are in the process of reviewing it.
   * - `GRANTED` – Your appeal has been reviewed and your production access has been granted.
   * - `DENIED` – Your appeal has been reviewed and your production access has been denied.
   * - `FAILED` – An internal error occurred and we didn't receive your appeal. You can submit your appeal again.
   *
   * @public
   */
  Status?: ReviewStatus | undefined;

  /**
   * The associated support center case ID (if any).
   *
   * @public
   */
  CaseId?: string | undefined;
}

/**
 * An object that contains information about your account details.
 *
 * @public
 */
export interface AccountDetails {
  /**
   * The type of email your account is sending. The mail type can be one of the following:
   *
   * - `MARKETING` – Most of your sending traffic is to keep your customers informed of your latest offering.
   * - `TRANSACTIONAL` – Most of your sending traffic is to communicate during a transaction with a customer.
   *
   * @public
   */
  MailType?: MailType | undefined;

  /**
   * The URL of your website. This information helps us better understand the type of content that you plan to send.
   *
   * @public
   */
  WebsiteURL?: string | undefined;

  /**
   * The language you would prefer for the case. The contact language can be one of `ENGLISH` or `JAPANESE`.
   *
   * @public
   */
  ContactLanguage?: ContactLanguage | undefined;

  /**
   * A description of the types of email that you plan to send.
   *
   * @deprecated Use case description is optional and deprecated.
   * @public
   */
  UseCaseDescription?: string | undefined;

  /**
   * Additional email addresses where updates are sent about your account review process.
   *
   * @public
   */
  AdditionalContactEmailAddresses?: string[] | undefined;

  /**
   * Information about the review of the latest details you submitted.
   *
   * @public
   */
  ReviewDetails?: ReviewDetails | undefined;
}

/**
 * Used to associate a configuration set with a MailManager archive.
 *
 * @public
 */
export interface ArchivingOptions {
  /**
   * The Amazon Resource Name (ARN) of the MailManager archive where the Amazon SES API v2 will archive sent emails.
   *
   * @public
   */
  ArchiveArn?: string | undefined;
}

/**
 * A request to associate an S/MIME certificate with an email identity.
 *
 * @public
 */
export interface AssociateEmailIdentityCertificateRequest {
  /**
   * The email identity, either an email address or a domain, to associate the certificate with.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The email address that the certificate applies to. This value is required when the email identity is a domain, and the address must belong to that domain or one of its subdomains. When the email identity is an email address, this value is optional. If you specify it, it must exactly match the email identity.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate to associate with the email identity.
   *
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface AssociateEmailIdentityCertificateResponse {}

/**
 * Contains metadata and attachment raw content.
 *
 * @public
 */
export interface Attachment {
  /**
   * The raw data of the attachment. It needs to be base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services SDK, the SDK takes care of the base 64-encoding for you.
   *
   * @public
   */
  RawContent: Uint8Array | undefined;

  /**
   * A standard descriptor indicating how the attachment should be rendered in the email. Supported values: `ATTACHMENT` or `INLINE`.
   *
   * @public
   */
  ContentDisposition?: AttachmentContentDisposition | undefined;

  /**
   * The file name for the attachment as it will appear in the email. Amazon SES restricts certain file extensions. To ensure attachments are accepted, check the [Unsupported attachment types](https://docs.aws.amazon.com/ses/latest/dg/mime-types.html) in the Amazon SES Developer Guide.
   *
   * @public
   */
  FileName: string | undefined;

  /**
   * A brief description of the attachment content.
   *
   * @public
   */
  ContentDescription?: string | undefined;

  /**
   * Unique identifier for the attachment, used for referencing attachments with INLINE disposition in HTML content.
   *
   * @public
   */
  ContentId?: string | undefined;

  /**
   * Specifies how the attachment is encoded. Supported values: `BASE64`, `QUOTED_PRINTABLE`, `SEVEN_BIT`.
   *
   * @public
   */
  ContentTransferEncoding?: AttachmentContentTransferEncoding | undefined;

  /**
   * The MIME type of the attachment.
   *
   * > **Note:** Example: `application/pdf`, `image/jpeg`
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * Represents a single metric data query to include in a batch.
 *
 * @public
 */
export interface BatchGetMetricDataQuery {
  /**
   * The query identifier.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The query namespace - e.g. `VDM`
   *
   * @public
   */
  Namespace: MetricNamespace | undefined;

  /**
   * The queried metric. This can be one of the following:
   *
   * - `SEND` – Emails sent eligible for tracking in the VDM dashboard. This excludes emails sent to the mailbox simulator and emails addressed to more than one recipient.
   * - `COMPLAINT` – Complaints received for your account. This excludes complaints from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient
   * - `PERMANENT_BOUNCE` – Permanent bounces - i.e. feedback received for emails sent to non-existent mailboxes. Excludes bounces from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient.
   * - `TRANSIENT_BOUNCE` – Transient bounces - i.e. feedback received for delivery failures excluding issues with non-existent mailboxes. Excludes bounces from the mailbox simulator, and those for emails addressed to more than one recipient.
   * - `OPEN` – Unique open events for emails including open trackers. Excludes opens for emails addressed to more than one recipient.
   * - `CLICK` – Unique click events for emails including wrapped links. Excludes clicks for emails addressed to more than one recipient.
   * - `DELIVERY` – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator and for emails addressed to more than one recipient.
   * - `DELIVERY_OPEN` – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without open trackers.
   * - `DELIVERY_CLICK` – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without click trackers.
   * - `DELIVERY_COMPLAINT` – Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails addressed to recipients hosted by ISPs with which Amazon SES does not have a feedback loop agreement.
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * An object that contains mapping between `MetricDimensionName` and `MetricDimensionValue` to filter metrics by.
   *
   * @public
   */
  Dimensions?: Partial<Record<MetricDimensionName, string>> | undefined;

  /**
   * Represents the start date for the query interval.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * Represents the end date for the query interval.
   *
   * @public
   */
  EndDate: Date | undefined;
}

/**
 * Represents a request to retrieve a batch of metric data.
 *
 * @public
 */
export interface BatchGetMetricDataRequest {
  /**
   * A list of queries for metrics to be retrieved.
   *
   * @public
   */
  Queries: BatchGetMetricDataQuery[] | undefined;
}

/**
 * An error corresponding to the unsuccessful processing of a single metric data query.
 *
 * @public
 */
export interface MetricDataError {
  /**
   * The query identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The query error code. Can be one of:
   *
   * - `INTERNAL_FAILURE` – Amazon SES has failed to process one of the queries.
   * - `ACCESS_DENIED` – You have insufficient access to retrieve metrics based on the given query.
   *
   * @public
   */
  Code?: QueryErrorCode | undefined;

  /**
   * The error message associated with the current query error.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The result of a single metric data query.
 *
 * @public
 */
export interface MetricDataResult {
  /**
   * The query identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A list of timestamps for the metric data results.
   *
   * @public
   */
  Timestamps?: Date[] | undefined;

  /**
   * A list of values (cumulative / sum) for the metric data results.
   *
   * @public
   */
  Values?: number[] | undefined;
}

/**
 * Represents the result of processing your metric data batch request
 *
 * @public
 */
export interface BatchGetMetricDataResponse {
  /**
   * A list of successfully retrieved `MetricDataResult`.
   *
   * @public
   */
  Results?: MetricDataResult[] | undefined;

  /**
   * A list of `MetricDataError` encountered while processing your metric data batch request.
   *
   * @public
   */
  Errors?: MetricDataError[] | undefined;
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
   * The time when the blacklisting event occurred.
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
   * The character set for the content. Because of the constraints of the SMTP protocol, Amazon SES uses 7-bit ASCII by default. If the text includes characters outside of the ASCII range, you have to specify a character set. For example, you could specify `UTF-8`, `ISO-8859-1`, or `Shift_JIS`.
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
 * Information about a `Bounce` event.
 *
 * @public
 */
export interface Bounce {
  /**
   * The type of the bounce, as determined by SES. Can be one of `UNDETERMINED`, `TRANSIENT`, or `PERMANENT`
   *
   * @public
   */
  BounceType?: BounceType | undefined;

  /**
   * The subtype of the bounce, as determined by SES.
   *
   * @public
   */
  BounceSubType?: string | undefined;

  /**
   * The status code issued by the reporting Message Transfer Authority (MTA). This field only appears if a delivery status notification (DSN) was attached to the bounce and the `Diagnostic-Code` was provided in the DSN.
   *
   * @public
   */
  DiagnosticCode?: string | undefined;
}

/**
 * Contains the name and value of a message header that you add to an email.
 *
 * @public
 */
export interface MessageHeader {
  /**
   * The name of the message header. The message header name has to meet the following criteria:
   *
   * - Can contain any printable ASCII character (33 - 126) except for colon (:).
   * - Can contain no more than 126 characters.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the message header. The message header value has to meet the following criteria:
   *
   * - Can contain any printable ASCII character.
   * - Can contain no more than 995 characters.
   * - The combined length of the header name and value must not exceed 996 characters.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
 *
 * @public
 */
export interface EmailTemplateContent {
  /**
   * The subject line of the email.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * The email body that will be visible to recipients whose email clients do not display HTML.
   *
   * @public
   */
  Text?: string | undefined;

  /**
   * The HTML body of the email.
   *
   * @public
   */
  Html?: string | undefined;
}

/**
 * An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An *email template* is a type of message template that contains content that you want to reuse in email messages that you send. You can specifiy the email template by providing the name or ARN of an *email template* previously saved in your Amazon SES account or by providing the full template content.
 *
 * @public
 */
export interface Template {
  /**
   * The name of the template. You will refer to this name when you send email using the `SendEmail` or `SendBulkEmail` operations.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the template.
   *
   * @public
   */
  TemplateArn?: string | undefined;

  /**
   * The content of the template.
   *
   * > **Note:** Amazon SES supports only simple substitions when you send email using the `SendEmail` or `SendBulkEmail` operations and you provide the full template content in the request.
   *
   * @public
   */
  TemplateContent?: EmailTemplateContent | undefined;

  /**
   * An object that defines the values to use for message variables in the template. This object is a set of key-value pairs. Each key defines a message variable in the template. The corresponding value defines the value to use for that variable.
   *
   * @public
   */
  TemplateData?: string | undefined;

  /**
   * The list of message headers that will be added to the email message.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * The List of attachments to include in your email. All recipients will receive the same attachments.
   *
   * @public
   */
  Attachments?: Attachment[] | undefined;
}

/**
 * An object that contains the body of the message. You can specify a template message.
 *
 * @public
 */
export interface BulkEmailContent {
  /**
   * The template to use for the bulk email message.
   *
   * @public
   */
  Template?: Template | undefined;
}

/**
 * An object that describes the recipients for an email.
 *
 * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the *local part* of a destination email address (the part of the email address that precedes the @ sign) may only contain [7-bit ASCII characters](https://en.wikipedia.org/wiki/Email_address#Local-part). If the *domain part* of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in [RFC3492](https://tools.ietf.org/html/rfc3492.html).
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
 * An object which contains `ReplacementTemplateData` to be used for a specific `BulkEmailEntry`.
 *
 * @public
 */
export interface ReplacementTemplate {
  /**
   * A list of replacement values to apply to the template. This parameter is a JSON object, typically consisting of key-value pairs in which the keys correspond to replacement tags in the email template.
   *
   * @public
   */
  ReplacementTemplateData?: string | undefined;
}

/**
 * The `ReplaceEmailContent` object to be used for a specific `BulkEmailEntry`. The `ReplacementTemplate` can be specified within this object.
 *
 * @public
 */
export interface ReplacementEmailContent {
  /**
   * The `ReplacementTemplate` associated with `ReplacementEmailContent`.
   *
   * @public
   */
  ReplacementTemplate?: ReplacementTemplate | undefined;
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
 * @public
 */
export interface BulkEmailEntry {
  /**
   * Represents the destination of the message, consisting of To:, CC:, and BCC: fields.
   *
   * > **Note:** Amazon SES does not support the SMTPUTF8 extension, as described in [RFC6531](https://tools.ietf.org/html/rfc6531). For this reason, the local part of a destination email address (the part of the email address that precedes the @ sign) may only contain [7-bit ASCII characters](https://en.wikipedia.org/wiki/Email_address#Local-part). If the domain part of an address (the part after the @ sign) contains non-ASCII characters, they must be encoded using Punycode, as described in [RFC3492](https://tools.ietf.org/html/rfc3492.html).
   *
   * @public
   */
  Destination: Destination | undefined;

  /**
   * A list of tags, in the form of name/value pairs, to apply to an email that you send using the `SendBulkTemplatedEmail` operation. Tags correspond to characteristics of the email that you define, so that you can publish email sending events.
   *
   * @public
   */
  ReplacementTags?: MessageTag[] | undefined;

  /**
   * The `ReplacementEmailContent` associated with a `BulkEmailEntry`.
   *
   * @public
   */
  ReplacementEmailContent?: ReplacementEmailContent | undefined;

  /**
   * The list of message headers associated with the `BulkEmailEntry` data type.
   *
   * - Headers Not Present in `BulkEmailEntry`: If a header is specified in [`Template`](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_Template.html) but not in `BulkEmailEntry`, the header from `Template` will be added to the outgoing email.
   * - Headers Present in `BulkEmailEntry`: If a header is specified in `BulkEmailEntry`, it takes precedence over any header of the same name specified in [`Template`](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_Template.html):
   *
   *   - If the header is also defined within `Template`, the value from `BulkEmailEntry` will replace the header's value in the email.
   *   - If the header is not defined within `Template`, it will simply be added to the email as specified in `BulkEmailEntry`.
   *
   * @public
   */
  ReplacementHeaders?: MessageHeader[] | undefined;
}

/**
 * The result of the `SendBulkEmail` operation of each specified `BulkEmailEntry`.
 *
 * @public
 */
export interface BulkEmailEntryResult {
  /**
   * The status of a message sent using the `SendBulkTemplatedEmail` operation.
   *
   * Possible values for this parameter include:
   *
   * - SUCCESS: Amazon SES accepted the message, and will attempt to deliver it to the recipients.
   * - MESSAGE_REJECTED: The message was rejected because it contained a virus.
   * - MAIL_FROM_DOMAIN_NOT_VERIFIED: The sender's email address or domain was not verified.
   * - CONFIGURATION_SET_DOES_NOT_EXIST: The configuration set you specified does not exist.
   * - TEMPLATE_DOES_NOT_EXIST: The template you specified does not exist.
   * - ACCOUNT_SUSPENDED: Your account has been shut down because of issues related to your email sending practices.
   * - ACCOUNT_THROTTLED: The number of emails you can send has been reduced because your account has exceeded its allocated sending limit.
   * - ACCOUNT_DAILY_QUOTA_EXCEEDED: You have reached or exceeded the maximum number of emails you can send from your account in a 24-hour period.
   * - INVALID_SENDING_POOL_NAME: The configuration set you specified refers to an IP pool that does not exist.
   * - ACCOUNT_SENDING_PAUSED: Email sending for the Amazon SES account was disabled using the [UpdateAccountSendingEnabled](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html) operation.
   * - CONFIGURATION_SET_SENDING_PAUSED: Email sending for this configuration set was disabled using the [UpdateConfigurationSetSendingEnabled](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html) operation.
   * - INVALID_PARAMETER_VALUE: One or more of the parameters you specified when calling this operation was invalid. See the error message for additional information.
   * - TRANSIENT_FAILURE: Amazon SES was unable to process your request because of a temporary issue.
   * - FAILED: Amazon SES was unable to process your request. See the error message for additional information.
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
 * Represents a request to cancel an export job using the export job ID.
 *
 * @public
 */
export interface CancelExportJobRequest {
  /**
   * The export job ID.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CancelExportJobResponse {}

/**
 * An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
 *
 * @public
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to meet the following criteria:
   *
   * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
   * - It can contain no more than 255 characters.
   *
   * @public
   */
  DimensionName: string | undefined;

  /**
   * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` or `SendRawEmail` API, choose `messageTag`. To use your own email headers, choose `emailHeader`. To use link tags, choose `linkTags`.
   *
   * @public
   */
  DimensionValueSource: DimensionValueSource | undefined;

  /**
   * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. This value has to meet the following criteria:
   *
   * - Can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-), at signs (@), and periods (.).
   * - It can contain no more than 255 characters.
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
 * Information about a `Complaint` event.
 *
 * @public
 */
export interface Complaint {
  /**
   * Can either be `null` or `OnAccountSuppressionList`. If the value is `OnAccountSuppressionList`, SES accepted the message, but didn't attempt to send it because it was on the account-level suppression list.
   *
   * @public
   */
  ComplaintSubType?: string | undefined;

  /**
   * The value of the `Feedback-Type` field from the feedback report received from the ISP.
   *
   * @public
   */
  ComplaintFeedbackType?: string | undefined;
}

/**
 * An object that overrides, for a single email sending request, the engagement tracking settings that would otherwise apply. Use these overrides to turn open tracking or click tracking on or off for an individual message, for example to suppress tracking in a transactional message that you send from an account or a configuration set that has tracking enabled.
 *
 * Without an override, engagement tracking is determined by your account-level `EngagementMetrics` setting, which you configure using the `PutAccountVdmAttributes` operation, by the `EngagementMetrics` setting of the configuration set that the message uses, which you configure using the `PutConfigurationSetVdmOptions` operation, and by whether that configuration set has an event destination whose `MatchingEventTypes` include the `OPEN` or `CLICK` event types.
 *
 * For more information about tracking open and click events, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/event-publishing.html).
 *
 * @public
 */
export interface TrackingConfigurationOverrides {
  /**
   * Specifies whether Amazon SES tracks when the recipient opens this message. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES tracks opens for this message, even when your account-level and configuration set settings don't enable open tracking.
   * - `DISABLED` – Amazon SES doesn't track opens for this message, even when your account-level or configuration set settings enable open tracking. Amazon SES doesn't add the tracking image to the message.
   *
   * If you don't specify this value, Amazon SES uses the open tracking setting that would otherwise apply to the message.
   *
   * @public
   */
  OpenTrackingEnabled?: FeatureStatus | undefined;

  /**
   * Specifies whether Amazon SES tracks when the recipient clicks a link in this message. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES tracks clicks for this message, even when your account-level and configuration set settings don't enable click tracking.
   * - `DISABLED` – Amazon SES doesn't track clicks for this message, even when your account-level or configuration set settings enable click tracking. Amazon SES doesn't rewrite the links in the message.
   *
   * If you don't specify this value, Amazon SES uses the click tracking setting that would otherwise apply to the message.
   *
   * > **Note:** Enabling open or click tracking with an override doesn't create an event destination. Amazon SES records the resulting open and click events in VDM, where you can review them using VDM metrics and Message Insights. To also receive these events at a destination that you own, the configuration set that the message uses must have an event destination that publishes open and click events.
   *
   * @public
   */
  ClickTrackingEnabled?: FeatureStatus | undefined;
}

/**
 * An object that overrides settings for a single email sending request. An override applies only to the message or messages in the request that contains it. It doesn't change your account-level settings, and it doesn't change the configuration set that the request uses.
 *
 * A setting that you don't override keeps the value that would otherwise apply to the message. Depending on the setting, that value comes from the configuration set that the message uses, from your account-level settings, or from the Amazon SES default.
 *
 * @public
 */
export interface ConfigurationOverrides {
  /**
   * An object that overrides the open and click tracking settings that would otherwise apply to the message.
   *
   * @public
   */
  Tracking?: TrackingConfigurationOverrides | undefined;
}

/**
 * The contact's preference for being opted-in to or opted-out of a topic.
 *
 * @public
 */
export interface TopicPreference {
  /**
   * The name of the topic.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The contact's subscription status to a topic which is either `OPT_IN` or `OPT_OUT`.
   *
   * @public
   */
  SubscriptionStatus: SubscriptionStatus | undefined;
}

/**
 * A contact is the end-user who is receiving the email.
 *
 * @public
 */
export interface Contact {
  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The contact's preference for being opted-in to or opted-out of a topic.
   *
   * @public
   */
  TopicPreferences?: TopicPreference[] | undefined;

  /**
   * The default topic preferences applied to the contact.
   *
   * @public
   */
  TopicDefaultPreferences?: TopicPreference[] | undefined;

  /**
   * A boolean value status noting if the contact is unsubscribed from all contact list topics.
   *
   * @public
   */
  UnsubscribeAll?: boolean | undefined;

  /**
   * A timestamp noting the last time the contact's information was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * A list that contains contacts that have subscribed to a particular topic or topics.
 *
 * @public
 */
export interface ContactList {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName?: string | undefined;

  /**
   * A timestamp noting the last time the contact list was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * An object that contains details about the action of a contact list.
 *
 * @public
 */
export interface ContactListDestination {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * >The type of action to perform on the addresses. The following are the possible values:
   *
   * - PUT: add the addresses to the contact list. If the record already exists, it will override it with the new value.
   * - DELETE: remove the addresses from the contact list.
   *
   * @public
   */
  ContactListImportAction: ContactListImportAction | undefined;
}

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
   * The name of the dedicated IP pool to associate with the configuration set.
   *
   * @public
   */
  SendingPoolName?: string | undefined;

  /**
   * The maximum amount of time, in seconds, that Amazon SES API v2 will attempt delivery of email. If specified, the value must greater than or equal to 300 seconds (5 minutes) and less than or equal to 50400 seconds (840 minutes).
   *
   * @public
   */
  MaxDeliverySeconds?: number | undefined;
}

/**
 * Specifies the default signing scheme, in which Amazon SES API v2 doesn't apply S/MIME signing to messages sent with the configuration set.
 *
 * @public
 */
export interface DefaultSigningScheme {}

/**
 * Specifies that Amazon SES API v2 signs messages sent with the configuration set using S/MIME.
 *
 * @public
 */
export interface SmimeSigningScheme {
  /**
   * The format of the S/MIME signature that Amazon SES API v2 applies to messages.
   *
   * @public
   */
  SignatureFormat?: SignatureFormat | undefined;
}

/**
 * Specifies the signing scheme to apply to messages sent with a configuration set. This is a union type, so you specify exactly one of its members.
 *
 * @public
 */
export type SigningScheme =
  | SigningScheme.DefaultSchemeMember
  | SigningScheme.SmimeSchemeMember
  | SigningScheme.$UnknownMember;

/**
 * @public
 */
export namespace SigningScheme {
  /**
   * Use the default signing behavior. When you select this option, Amazon SES API v2 doesn't add an S/MIME signature to messages sent with the configuration set.
   *
   * @public
   */
  export interface DefaultSchemeMember {
    DefaultScheme: DefaultSigningScheme;
    SmimeScheme?: never;
    $unknown?: never;
  }

  /**
   * Sign messages sent with the configuration set using S/MIME. For signing to apply, the email identity used to send a message must have an active S/MIME certificate association.
   *
   * @public
   */
  export interface SmimeSchemeMember {
    DefaultScheme?: never;
    SmimeScheme: SmimeSigningScheme;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DefaultScheme?: never;
    SmimeScheme?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DefaultScheme: (value: DefaultSigningScheme) => T;
    SmimeScheme: (value: SmimeSigningScheme) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An object that defines the message-level security options that apply to messages that you send using the configuration set. Currently, these options determine whether Amazon SES API v2 adds an S/MIME signature to your messages and, if so, the format of that signature.
 *
 * @public
 */
export interface MessageSecurityOptions {
  /**
   * The signing scheme that Amazon SES API v2 applies to messages sent with the configuration set.
   *
   * @public
   */
  SigningScheme?: SigningScheme | undefined;
}

/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.
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
 * Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.
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
 * Contains the confidence threshold settings for Auto Validation.
 *
 * @public
 */
export interface SuppressionConfidenceThreshold {
  /**
   * The confidence level threshold for suppression decisions.
   *
   * @public
   */
  ConfidenceVerdictThreshold: SuppressionConfidenceVerdictThreshold | undefined;
}

/**
 * Contains Auto Validation settings, allowing you to suppress sending to specific destination(s) if they do not meet required threshold. For details on Auto Validation, see [Auto Validation](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/email-validation.html).
 *
 * @public
 */
export interface SuppressionConditionThreshold {
  /**
   * Indicates whether Auto Validation is enabled for suppression. Set to `ENABLED` to enable the Auto Validation feature, or set to `DISABLED` to disable it.
   *
   * @public
   */
  ConditionThresholdEnabled: FeatureStatus | undefined;

  /**
   * The overall confidence threshold used to determine suppression decisions.
   *
   * @public
   */
  OverallConfidenceThreshold?: SuppressionConfidenceThreshold | undefined;
}

/**
 * Contains validation options for email address suppression.
 *
 * @public
 */
export interface SuppressionValidationOptions {
  /**
   * Specifies the condition threshold settings for suppression validation.
   *
   * @public
   */
  ConditionThreshold: SuppressionConditionThreshold | undefined;
}

/**
 * An object that contains information about the suppression list preferences for your account or for a specific tenant.
 *
 * @public
 */
export interface SuppressionOptions {
  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for your account or for a specific tenant. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account or for a specific tenant when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account or for a specific tenant when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * The suppression scope for the configuration set. This overrides the tenant or account suppression scope for emails sent using this configuration set. Can be one of the following:
   *
   * - `TENANT` – Use the tenant's suppression list.
   * - `ACCOUNT` – Use the account-level suppression list.
   *
   * @public
   */
  SuppressionScope?: SuppressionListScope | undefined;

  /**
   * Contains validation options for email address suppression.
   *
   * @public
   */
  ValidationOptions?: SuppressionValidationOptions | undefined;
}

/**
 * An object that defines the tags that are associated with a resource. A *tag* is a label that you optionally define and associate with a resource. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.
 *
 * Each tag consists of a required *tag key* and an associated *tag value*, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: _ . : / = + -. The following additional restrictions apply to tags:
 *
 * - Tag keys and values are case sensitive.
 * - For each associated resource, each tag key must be unique and it can have only one value.
 * - The `aws:` prefix is reserved for use by Amazon Web Services; you can’t use it in any tag keys or values that you define. In addition, you can't edit or remove tag keys or values that use this prefix. Tags that use this prefix don’t count against the limit of 50 tags per resource.
 * - You can associate tags with public or shared resources, but the tags are available only for your Amazon Web Services account, not any other accounts that share the resource. In addition, the tags are available only for resources that are located in the specified Amazon Web Services Region for your Amazon Web Services account.
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
   * The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don't want a resource to have a specific tag value, don't specify a value for this parameter. If you don't specify a value, Amazon SES sets the value to an empty string.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
 *
 * These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.
 *
 * @public
 */
export interface TrackingOptions {
  /**
   * The domain to use for tracking open and click events.
   *
   * @public
   */
  CustomRedirectDomain: string | undefined;

  /**
   * The https policy to use for tracking open and click events.
   *
   * @public
   */
  HttpsPolicy?: HttpsPolicy | undefined;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
 *
 * @public
 */
export interface DashboardOptions {
  /**
   * Specifies the status of your VDM engagement metrics collection. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES enables engagement metrics for the configuration set.
   * - `DISABLED` – Amazon SES disables engagement metrics for the configuration set.
   *
   * @public
   */
  EngagementMetrics?: FeatureStatus | undefined;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Guardian.
 *
 * @public
 */
export interface GuardianOptions {
  /**
   * Specifies the status of your VDM optimized shared delivery. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES enables optimized shared delivery for the configuration set.
   * - `DISABLED` – Amazon SES disables optimized shared delivery for the configuration set.
   *
   * @public
   */
  OptimizedSharedDelivery?: FeatureStatus | undefined;
}

/**
 * An object that defines the VDM settings that apply to emails that you send using the configuration set.
 *
 * @public
 */
export interface VdmOptions {
  /**
   * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
   *
   * @public
   */
  DashboardOptions?: DashboardOptions | undefined;

  /**
   * Specifies additional settings for your VDM configuration as applicable to the Guardian.
   *
   * @public
   */
  GuardianOptions?: GuardianOptions | undefined;
}

/**
 * A request to create a configuration set.
 *
 * @public
 */
export interface CreateConfigurationSetRequest {
  /**
   * The name of the configuration set. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.
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
   * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
   *
   * @public
   */
  ReputationOptions?: ReputationOptions | undefined;

  /**
   * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
   *
   * @public
   */
  SendingOptions?: SendingOptions | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the configuration set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An object that contains information about the suppression list preferences for the configuration set. You can optionally include a `SuppressionScope` to override the tenant or account suppression scope for emails sent using this configuration set.
   *
   * @public
   */
  SuppressionOptions?: SuppressionOptions | undefined;

  /**
   * An object that defines the VDM options for emails that you send using the configuration set.
   *
   * @public
   */
  VdmOptions?: VdmOptions | undefined;

  /**
   * An object that defines the MailManager archiving options for emails that you send using the configuration set.
   *
   * @public
   */
  ArchivingOptions?: ArchivingOptions | undefined;

  /**
   * The message security options to apply to the configuration set, such as the signing scheme used for messages that you send with the configuration set.
   *
   * @public
   */
  MessageSecurityOptions?: MessageSecurityOptions | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateConfigurationSetResponse {}

/**
 * An object that defines an Amazon EventBridge destination for email events. You can use Amazon EventBridge to send notifications when certain email events occur.
 *
 * @public
 */
export interface EventBridgeDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to. Only the default bus is supported.
   *
   * @public
   */
  EventBusArn: string | undefined;
}

/**
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
 *
 * @public
 */
export interface KinesisFirehoseDestination {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email events to.
   *
   * @public
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see [Transactional Messaging Charts](https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html) in the *Amazon Pinpoint User Guide*.
 *
 * @public
 */
export interface PinpointDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Pinpoint project to send email events to.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notifications when certain email events occur.
 *
 * @public
 */
export interface SnsDestination {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to. For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html).
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
   * An array that specifies which events the Amazon SES API v2 should send to the destinations in this `EventDestinationDefinition`.
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
   * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notifications when certain email events occur.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * An object that defines an Amazon EventBridge destination for email events. You can use Amazon EventBridge to send notifications when certain email events occur.
   *
   * @public
   */
  EventBridgeDestination?: EventBridgeDestination | undefined;

  /**
   * An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see [Transactional Messaging Charts](https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html) in the *Amazon Pinpoint User Guide*.
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
   * The name of the configuration set .
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
 * @public
 */
export interface CreateContactRequest {
  /**
   * The name of the contact list to which the contact should be added.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The contact's preferences for being opted-in to or opted-out of topics.
   *
   * @public
   */
  TopicPreferences?: TopicPreference[] | undefined;

  /**
   * A boolean value status noting if the contact is unsubscribed from all contact list topics.
   *
   * @public
   */
  UnsubscribeAll?: boolean | undefined;

  /**
   * The attribute data attached to a contact.
   *
   * @public
   */
  AttributesData?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactResponse {}

/**
 * An interest group, theme, or label within a list. Lists can have multiple topics.
 *
 * @public
 */
export interface Topic {
  /**
   * The name of the topic.
   *
   * @public
   */
  TopicName: string | undefined;

  /**
   * The name of the topic the contact will see.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * A description of what the topic is about, which the contact will see.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.
   *
   * @public
   */
  DefaultSubscriptionStatus: SubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface CreateContactListRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * An interest group, theme, or label within a list. A contact list can have multiple topics.
   *
   * @public
   */
  Topics?: Topic[] | undefined;

  /**
   * A description of what the contact list is about.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The tags associated with a contact list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateContactListResponse {}

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
   * The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see [Custom verification email frequently asked questions](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq) in the *Amazon SES Developer Guide*.
   *
   * @public
   */
  TemplateContent: string | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the custom verification email template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

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
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface CreateCustomVerificationEmailTemplateResponse {}

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

  /**
   * The type of scaling mode.
   *
   * @public
   */
  ScalingMode?: ScalingMode | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateDedicatedIpPoolResponse {}

/**
 * Represents the raw content of an email message.
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
   * - Attachments must be in a file format that the Amazon SES supports.
   * - The raw data of the message needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services SDK, the SDK takes care of the base 64-encoding for you.
   * - If any of the MIME parts in your message contain content that is outside of the 7-bit ASCII character range, you should encode that content to ensure that recipients' email clients render the message properly.
   * - The length of any single line of text in the message can't exceed 1,000 characters. This restriction is defined in [RFC 5321](https://tools.ietf.org/html/rfc5321).
   *
   * @public
   */
  Data: Uint8Array | undefined;
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

  /**
   * The list of message headers that will be added to the email message.
   *
   * @public
   */
  Headers?: MessageHeader[] | undefined;

  /**
   * The List of attachments to include in your email. All recipients will receive the same attachments.
   *
   * @public
   */
  Attachments?: Attachment[] | undefined;
}

/**
 * An object that defines the entire content of the email, including the message headers, body content, and attachments. For a simple email message, you specify the subject and provide both text and HTML versions of the message body. You can also add attachments to simple and templated messages. For a raw message, you provide a complete MIME-formatted message, which can include custom headers and attachments.
 *
 * @public
 */
export interface EmailContent {
  /**
   * The simple email message. The message consists of a subject, message body and attachments list.
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
   * - If you include attachments, they must be in a file format that the Amazon SES API v2 supports.
   * - The raw data of the message needs to base64-encoded if you are accessing Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services SDK, the SDK takes care of the base 64-encoding for you.
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
 * A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. We send that message to special email addresses spread across several major email providers around the world. The test takes about 24 hours to complete. When the test is complete, you can use the `GetDeliverabilityTestReport` operation to view the results of the test.
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
 * An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM
 *
 * @public
 */
export interface DkimSigningAttributes {
  /**
   * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
   *
   * @public
   */
  DomainSigningSelector?: string | undefined;

  /**
   * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature.
   *
   * The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
   *
   * @public
   */
  DomainSigningPrivateKey?: string | undefined;

  /**
   * [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
   *
   * @public
   */
  NextSigningKeyLength?: DkimSigningKeyLength | undefined;

  /**
   * The attribute to use for configuring DKIM for the identity depends on the operation:
   *
   * 1. For `PutEmailIdentityDkimSigningAttributes`:
   *
   *    - None of the values are allowed - use the [`SigningAttributesOrigin`](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_PutEmailIdentityDkimSigningAttributes.html#SES-PutEmailIdentityDkimSigningAttributes-request-SigningAttributesOrigin) parameter instead
   * 2. For `CreateEmailIdentity` when replicating a parent identity's DKIM configuration:
   *
   *    - Allowed values: All values except `AWS_SES` and `EXTERNAL`
   *
   * - `AWS_SES` – Configure DKIM for the identity by using Easy DKIM.
   * - `EXTERNAL` – Configure DKIM for the identity by using Bring Your Own DKIM (BYODKIM).
   * - `AWS_SES_<REGION>` – Configure DKIM for the identity by replicating the signing attributes of a parent identity in another Amazon Web Services Region, using [Deterministic Easy-DKIM (DEED)](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-deed.html). Replace `<REGION>` with the Amazon Web Services Region of the parent identity, in uppercase with each hyphen replaced by an underscore. You can specify any Amazon Web Services Region in which Amazon SES supports DEED. For example, to replicate from a parent identity in `us-east-1`, specify `AWS_SES_US_EAST_1`.
   *
   *   > **Note:** The parent identity must already exist in the specified Amazon Web Services Region and have Easy DKIM configured.
   *
   * @public
   */
  DomainSigningAttributesOrigin?: DkimSigningAttributesOrigin | undefined;
}

/**
 * A request to begin the verification process for an email identity (an email address or domain).
 *
 * @public
 */
export interface CreateEmailIdentityRequest {
  /**
   * The email address or domain to verify.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the email identity.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).
   *
   * You can only specify this object if the email identity is a domain, as opposed to an address.
   *
   * @public
   */
  DkimSigningAttributes?: DkimSigningAttributes | undefined;

  /**
   * The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;
}

/**
 * An object that contains information about the DKIM authentication status for an email identity.
 *
 * Amazon SES determines the authentication status by searching for specific records in the DNS configuration for the domain. If you used [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) to set up DKIM authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration for your domain. If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT record that uses the selector that you specified. The value of the TXT record must be a public key that's paired with the private key that you specified in the process of creating the identity
 *
 * @public
 */
export interface DkimAttributes {
  /**
   * If the value is `true`, then the messages that you send from the identity are signed using DKIM. If the value is `false`, then the messages that you send from the identity aren't DKIM-signed.
   *
   * @public
   */
  SigningEnabled?: boolean | undefined;

  /**
   * Describes whether or not Amazon SES has successfully located the DKIM records in the DNS records for the domain. The status can be one of the following:
   *
   * - `PENDING` – The verification process was initiated, but Amazon SES hasn't yet detected the DKIM records in the DNS configuration for the domain.
   * - `SUCCESS` – The verification process completed successfully.
   * - `FAILED` – The verification process failed. This typically occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the domain.
   * - `TEMPORARY_FAILURE` – A temporary issue is preventing Amazon SES from determining the DKIM authentication status of the domain.
   * - `NOT_STARTED` – The DKIM verification process hasn't been initiated for the domain.
   *
   * @public
   */
  Status?: DkimStatus | undefined;

  /**
   * If you used [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) to configure DKIM authentication for the domain, then this object contains a set of unique strings that you use to create a set of CNAME records that you add to the DNS configuration for your domain. When Amazon SES detects these records in the DNS configuration for your domain, the DKIM authentication process is complete.
   *
   * If you configured DKIM authentication for the domain by providing your own public-private key pair, then this object contains the selector for the public key.
   *
   * Regardless of the DKIM authentication method you use, Amazon SES searches for the appropriate records in the DNS configuration of the domain for up to 72 hours.
   *
   * @public
   */
  Tokens?: string[] | undefined;

  /**
   * The hosted zone where Amazon SES publishes the DKIM public key TXT records for this email identity. This value indicates the DNS zone that customers must reference when configuring their CNAME records for DKIM authentication.
   *
   * When configuring DKIM for your domain, create CNAME records in your DNS that point to the selectors in this hosted zone. For example:
   *
   * `selector1._domainkey.yourdomain.com CNAME selector1.<SigningHostedZone>`
   *
   * `selector2._domainkey.yourdomain.com CNAME selector2.<SigningHostedZone>`
   *
   * `selector3._domainkey.yourdomain.com CNAME selector3.<SigningHostedZone>`
   *
   * @public
   */
  SigningHostedZone?: string | undefined;

  /**
   * A string that indicates how DKIM was configured for the identity. These are the possible values:
   *
   * - `AWS_SES` – Indicates that DKIM was configured for the identity by using [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).
   * - `EXTERNAL` – Indicates that DKIM was configured for the identity by using Bring Your Own DKIM (BYODKIM).
   * - `AWS_SES_<REGION>` – Indicates that DKIM was configured for the identity by replicating the signing attributes of a parent identity in another Amazon Web Services Region, using [Deterministic Easy-DKIM (DEED)](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim-deed.html). `<REGION>` is the Amazon Web Services Region of the parent identity, in uppercase with each hyphen replaced by an underscore. Amazon SES uses this format for every Amazon Web Services Region in which it supports DEED. For example, a parent identity in `us-east-1` is reported as `AWS_SES_US_EAST_1`.
   *
   * @public
   */
  SigningAttributesOrigin?: DkimSigningAttributesOrigin | undefined;

  /**
   * [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
   *
   * @public
   */
  NextSigningKeyLength?: DkimSigningKeyLength | undefined;

  /**
   * [Easy DKIM] The key length of the DKIM key pair in use.
   *
   * @public
   */
  CurrentSigningKeyLength?: DkimSigningKeyLength | undefined;

  /**
   * [Easy DKIM] The last time a key pair was generated for this identity.
   *
   * @public
   */
  LastKeyGenerationTimestamp?: Date | undefined;
}

/**
 * If the email identity is a domain, this object contains information about the DKIM verification status for the domain.
 *
 * If the email identity is an email address, this object is empty.
 *
 * @public
 */
export interface CreateEmailIdentityResponse {
  /**
   * The email identity type. Note: the `MANAGED_DOMAIN` identity type is not supported.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * Specifies whether or not the identity is verified. You can only send email from verified email addresses or domains. For more information about verifying identities, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html).
   *
   * @public
   */
  VerifiedForSendingStatus?: boolean | undefined;

  /**
   * An object that contains information about the DKIM attributes for the identity.
   *
   * @public
   */
  DkimAttributes?: DkimAttributes | undefined;
}

/**
 * Represents a request to create a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html).
 *
 * @public
 */
export interface CreateEmailIdentityPolicyRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

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
   * For information about the syntax of sending authorization policies, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html).
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateEmailIdentityPolicyResponse {}

/**
 * Represents a request to create an email template. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * @public
 */
export interface CreateEmailTemplateRequest {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The content of the email template, composed of a subject line, an HTML part, and a text-only part.
   *
   * @public
   */
  TemplateContent: EmailTemplateContent | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the email template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface CreateEmailTemplateResponse {}

/**
 * An object containing Message Insights filters.
 *
 * If you specify multiple filters, the filters are joined by AND.
 *
 * If you specify multiple values for a filter, the values are joined by OR. Filter values are case-sensitive.
 *
 * `FromEmailAddress`, `Destination`, and `Subject` filters support partial match. A partial match is performed by using the `*` wildcard character placed at the beginning (suffix match), the end (prefix match) or both ends of the string (contains match). In order to match the literal characters `*` or `\`, they must be escaped using the `\` character. If no wildcard character is present, an exact match is performed.
 *
 * @public
 */
export interface MessageInsightsFilters {
  /**
   * The from address used to send the message.
   *
   * @public
   */
  FromEmailAddress?: string[] | undefined;

  /**
   * The recipient's email address.
   *
   * @public
   */
  Destination?: string[] | undefined;

  /**
   * The subject line of the message.
   *
   * @public
   */
  Subject?: string[] | undefined;

  /**
   * The recipient's ISP (e.g., `Gmail`, `Yahoo`, etc.).
   *
   * @public
   */
  Isp?: string[] | undefined;

  /**
   * The name of the tenant used when sending the message.
   *
   * @public
   */
  TenantName?: string[] | undefined;

  /**
   * The last delivery-related event for the email, where the ordering is as follows: `SEND` < `BOUNCE` < `DELIVERY` < `COMPLAINT`.
   *
   * @public
   */
  LastDeliveryEvent?: DeliveryEventType[] | undefined;

  /**
   * The last engagement-related event for the email, where the ordering is as follows: `OPEN` < `CLICK`.
   *
   * Engagement events are only available if [Engagement tracking](https://docs.aws.amazon.com/ses/latest/dg/vdm-settings.html) is enabled.
   *
   * @public
   */
  LastEngagementEvent?: EngagementEventType[] | undefined;
}

/**
 * An object that contains filters applied when performing the Message Insights export.
 *
 * @public
 */
export interface MessageInsightsDataSource {
  /**
   * Represents the start date for the export interval as a timestamp. The start date is inclusive.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * Represents the end date for the export interval as a timestamp. The end date is inclusive.
   *
   * @public
   */
  EndDate: Date | undefined;

  /**
   * Filters for results to be included in the export file.
   *
   * @public
   */
  Include?: MessageInsightsFilters | undefined;

  /**
   * Filters for results to be excluded from the export file.
   *
   * @public
   */
  Exclude?: MessageInsightsFilters | undefined;

  /**
   * The maximum number of results.
   *
   * > **Note:** If you don't specify `MaxResults`, the export returns a maximum of 1,000 results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * An object that contains a mapping between a `Metric` and `MetricAggregation`.
 *
 * @public
 */
export interface ExportMetric {
  /**
   * The metric to export, can be one of the following:
   *
   * - `SEND` - Emails sent eligible for tracking in the VDM dashboard. This excludes emails sent to the mailbox simulator and emails addressed to more than one recipient.
   * - `COMPLAINT` - Complaints received for your account. This excludes complaints from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient
   * - `PERMANENT_BOUNCE` - Permanent bounces - i.e., feedback received for emails sent to non-existent mailboxes. Excludes bounces from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those for emails addressed to more than one recipient.
   * - `TRANSIENT_BOUNCE` - Transient bounces - i.e., feedback received for delivery failures excluding issues with non-existent mailboxes. Excludes bounces from the mailbox simulator, and those for emails addressed to more than one recipient.
   * - `OPEN` - Unique open events for emails including open trackers. Excludes opens for emails addressed to more than one recipient.
   * - `CLICK` - Unique click events for emails including wrapped links. Excludes clicks for emails addressed to more than one recipient.
   * - `DELIVERY` - Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator and for emails addressed to more than one recipient.
   * - `DELIVERY_OPEN` - Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without open trackers.
   * - `DELIVERY_CLICK` - Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails without click trackers.
   * - `DELIVERY_COMPLAINT` - Successful deliveries for email sending attempts. Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient, and emails addressed to recipients hosted by ISPs with which Amazon SES does not have a feedback loop agreement.
   *
   * @public
   */
  Name?: Metric | undefined;

  /**
   * The aggregation to apply to a metric, can be one of the following:
   *
   * - `VOLUME` - The volume of events for this metric.
   * - `RATE` - The rate for this metric relative to the `SEND` metric volume.
   *
   * @public
   */
  Aggregation?: MetricAggregation | undefined;
}

/**
 * An object that contains details about the data source for the metrics export.
 *
 * @public
 */
export interface MetricsDataSource {
  /**
   * An object that contains a mapping between a `MetricDimensionName` and `MetricDimensionValue` to filter metrics by. Must contain a least 1 dimension but no more than 3 unique ones.
   *
   * @public
   */
  Dimensions: Partial<Record<MetricDimensionName, string[]>> | undefined;

  /**
   * The metrics namespace - e.g., `VDM`.
   *
   * @public
   */
  Namespace: MetricNamespace | undefined;

  /**
   * A list of `ExportMetric` objects to export.
   *
   * @public
   */
  Metrics: ExportMetric[] | undefined;

  /**
   * Represents the start date for the export interval as a timestamp.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * Represents the end date for the export interval as a timestamp.
   *
   * @public
   */
  EndDate: Date | undefined;
}

/**
 * An object that contains details about the data source of the export job. It can only contain one of `MetricsDataSource` or `MessageInsightsDataSource` object.
 *
 * @public
 */
export interface ExportDataSource {
  /**
   * An object that contains details about the data source for the metrics export.
   *
   * @public
   */
  MetricsDataSource?: MetricsDataSource | undefined;

  /**
   * An object that contains filters applied when performing the Message Insights export.
   *
   * @public
   */
  MessageInsightsDataSource?: MessageInsightsDataSource | undefined;
}

/**
 * An object that contains details about the destination of the export job.
 *
 * When you create an export job, specify only `DataFormat`. SES writes the export file to a location that it manages. After the job completes, call `GetExportJob` and use the `S3Url` that's returned to download the file. To store a copy in your own Amazon S3 bucket, upload the downloaded file to your bucket. Do not include `S3Url` in the `CreateExportJob` request.
 *
 * @public
 */
export interface ExportDestination {
  /**
   * The data format of the final export job file, can be one of the following:
   *
   * - `CSV` - A comma-separated values file.
   * - `JSON` - A Json file.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;

  /**
   * An Amazon S3 pre-signed URL that points to the generated export file.
   *
   * SES sets this value. It's returned only in the `GetExportJob` response, after the export job status is `COMPLETED`. The URL expires five minutes after `GetExportJob` returns it. Call `GetExportJob` again to get a new URL. If you include this field in a `CreateExportJob` request, the request fails with a `BadRequestException`.
   *
   * @public
   */
  S3Url?: string | undefined;
}

/**
 * Represents a request to create an export job from a data source to a data destination.
 *
 * @public
 */
export interface CreateExportJobRequest {
  /**
   * The data source for the export job.
   *
   * @public
   */
  ExportDataSource: ExportDataSource | undefined;

  /**
   * The destination for the export job. Specify only `DataFormat`. Do not include `S3Url` in this request. SES writes the export file to a location that it manages and returns the download URL in `GetExportJob`.
   *
   * @public
   */
  ExportDestination: ExportDestination | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateExportJobResponse {
  /**
   * A string that represents the export job ID.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * An object that contains details about the data source of the import job.
 *
 * @public
 */
export interface ImportDataSource {
  /**
   * An Amazon S3 URL in the format s3://*<bucket_name>*\/*<object>*.
   *
   * @public
   */
  S3Url: string | undefined;

  /**
   * The data format of the import job's data source.
   *
   * @public
   */
  DataFormat: DataFormat | undefined;
}

/**
 * An object that contains details about the action of suppression list.
 *
 * @public
 */
export interface SuppressionListDestination {
  /**
   * The type of action to perform on the address. The following are possible values:
   *
   * - PUT: add the addresses to the suppression list. If the record already exists, it will override it with the new value.
   * - DELETE: remove the addresses from the suppression list.
   *
   * @public
   */
  SuppressionListImportAction: SuppressionListImportAction | undefined;
}

/**
 * An object that contains details about the resource destination the import job is going to target.
 *
 * @public
 */
export interface ImportDestination {
  /**
   * An object that contains the action of the import job towards suppression list.
   *
   * @public
   */
  SuppressionListDestination?: SuppressionListDestination | undefined;

  /**
   * An object that contains the action of the import job towards a contact list.
   *
   * @public
   */
  ContactListDestination?: ContactListDestination | undefined;
}

/**
 * Represents a request to create an import job from a data source for a data destination.
 *
 * @public
 */
export interface CreateImportJobRequest {
  /**
   * The destination for the import job.
   *
   * @public
   */
  ImportDestination: ImportDestination | undefined;

  /**
   * The data source for the import job.
   *
   * @public
   */
  ImportDataSource: ImportDataSource | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface CreateImportJobResponse {
  /**
   * A string that represents the import job ID.
   *
   * @public
   */
  JobId?: string | undefined;
}

/**
 * An object that contains route configuration. Includes secondary region name.
 *
 * @public
 */
export interface RouteDetails {
  /**
   * The name of an AWS-Region to be a secondary region for the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * An object that contains configuration details of multi-region endpoint (global-endpoint).
 *
 * @public
 */
export interface Details {
  /**
   * A list of route configuration details. Must contain exactly one route configuration.
   *
   * @public
   */
  RoutesDetails: RouteDetails[] | undefined;
}

/**
 * Represents a request to create a multi-region endpoint (global-endpoint).
 *
 * @public
 */
export interface CreateMultiRegionEndpointRequest {
  /**
   * The name of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointName: string | undefined;

  /**
   * Contains details of a multi-region endpoint (global-endpoint) being created.
   *
   * @public
   */
  Details: Details | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the multi-region endpoint (global-endpoint).
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
export interface CreateMultiRegionEndpointResponse {
  /**
   * A status of the multi-region endpoint (global-endpoint) right after the create request.
   *
   * - `CREATING` – The resource is being provisioned.
   * - `READY` – The resource is ready to use.
   * - `FAILED` – The resource failed to be provisioned.
   * - `DELETING` – The resource is being deleted as requested.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The ID of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * An object that contains the suppression list preferences for a tenant.
 *
 * @public
 */
export interface TenantSuppressionAttributes {
  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for the tenant. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * The suppression scope for the tenant. Can be one of the following:
   *
   * - `TENANT` – The tenant uses its own suppression list.
   * - `ACCOUNT` – The tenant uses the account-level suppression list.
   *
   * > **Note:** If you don't specify a suppression scope, the tenant defaults to `ACCOUNT` scope and uses the account-level suppression list.
   *
   * @public
   */
  SuppressionScope?: SuppressionListScope | undefined;
}

/**
 * Represents a request to create a tenant.
 *
 * *Tenants* are logical containers that group related SES resources together. Each tenant can have its own set of resources like email identities, configuration sets, and templates, along with reputation metrics and sending status. This helps isolate and manage email sending for different customers or business units within your Amazon SES API v2 account.
 *
 * @public
 */
export interface CreateTenantRequest {
  /**
   * The name of the tenant to create. The name can contain up to 64 alphanumeric characters, including letters, numbers, hyphens (-) and underscores (_) only.
   *
   * @public
   */
  TenantName: string | undefined;

  /**
   * An array of objects that define the tags (keys and values) to associate with the tenant
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * An object that contains information about the suppression list preferences for the tenant. Use this to configure tenant-level suppression at creation time.
   *
   * @public
   */
  SuppressionAttributes?: TenantSuppressionAttributes | undefined;
}

/**
 * Information about a newly created tenant.
 *
 * @public
 */
export interface CreateTenantResponse {
  /**
   * The name of the tenant.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * A unique identifier for the tenant.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tenant.
   *
   * @public
   */
  TenantArn?: string | undefined;

  /**
   * The date and time when the tenant was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * An array of objects that define the tags (keys and values) associated with the tenant.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status of email sending capability for the tenant.
   *
   * @public
   */
  SendingStatus?: SendingStatus | undefined;

  /**
   * An object that contains the suppression list preferences for a tenant.
   *
   * @public
   */
  SuppressionAttributes?: TenantSuppressionAttributes | undefined;
}

/**
 * Represents a request to associate a resource with a tenant.
 *
 * Resources can be email identities, configuration sets, or email templates. When you associate a resource with a tenant, you can use that resource when sending emails on behalf of that tenant.
 *
 * @public
 */
export interface CreateTenantResourceAssociationRequest {
  /**
   * The name of the tenant to associate the resource with.
   *
   * @public
   */
  TenantName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource to associate with the tenant.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface CreateTenantResourceAssociationResponse {}

/**
 * Contains information about a custom verification email template.
 *
 * @public
 */
export interface CustomVerificationEmailTemplateMetadata {
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
 * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
 *
 * @public
 */
export interface DashboardAttributes {
  /**
   * Specifies the status of your VDM engagement metrics collection. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES enables engagement metrics for your account.
   * - `DISABLED` – Amazon SES disables engagement metrics for your account.
   *
   * @public
   */
  EngagementMetrics?: FeatureStatus | undefined;
}

/**
 * Contains information about a dedicated IP address that is associated with your Amazon SES account.
 *
 * To learn more about requesting dedicated IP addresses, see [Requesting and Relinquishing Dedicated IP Addresses](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html) in the *Amazon SES Developer Guide*.
 *
 * @public
 */
export interface DedicatedIp {
  /**
   * An IPv4 address.
   *
   * @public
   */
  Ip: string | undefined;

  /**
   * The warm-up status of a dedicated IP address. The status can have one of the following values:
   *
   * - `IN_PROGRESS` – The IP address isn't ready to use because the dedicated IP warm-up process is ongoing.
   * - `DONE` – The dedicated IP warm-up process is complete, and the IP address is ready to use.
   * - `NOT_APPLICABLE` – The warm-up status doesn't apply to this IP address. This status is used for IP addresses in managed dedicated IP pools, where Amazon SES automatically handles the warm-up process.
   *
   * @public
   */
  WarmupStatus: WarmupStatus | undefined;

  /**
   * Indicates the progress of your dedicated IP warm-up:
   *
   * - `0-100` – For standard dedicated IP addresses, this shows the warm-up completion percentage. A value of 100 means the IP address is fully warmed up and ready for use.
   * - `-1` – Appears for IP addresses in managed dedicated pools where Amazon SES automatically handles the warm-up process, making the percentage not applicable.
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
 * Contains information about a dedicated IP pool.
 *
 * @public
 */
export interface DedicatedIpPool {
  /**
   * The name of the dedicated IP pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The type of the dedicated IP pool.
   *
   * - `STANDARD` – A dedicated IP pool where you can control which IPs are part of the pool.
   * - `MANAGED` – A dedicated IP pool where the reputation and number of IPs are automatically managed by Amazon SES.
   *
   * @public
   */
  ScalingMode: ScalingMode | undefined;
}

/**
 * A request to delete a configuration set.
 *
 * @public
 */
export interface DeleteConfigurationSetRequest {
  /**
   * The name of the configuration set.
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
   * The name of the configuration set that contains the event destination to delete.
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
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface DeleteContactRequest {
  /**
   * The name of the contact list from which the contact should be removed.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactResponse {}

/**
 * @public
 */
export interface DeleteContactListRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactListResponse {}

/**
 * Represents a request to delete an existing custom verification email template.
 *
 * @public
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template that you want to delete.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface DeleteCustomVerificationEmailTemplateResponse {}

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
 * A request to delete an existing email identity. When you delete an identity, you lose the ability to send email from that identity. You can restore your ability to send email by completing the verification process for the identity again.
 *
 * @public
 */
export interface DeleteEmailIdentityRequest {
  /**
   * The identity (that is, the email address or domain) to delete.
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
 * Represents a request to delete a sending authorization policy for an identity. Sending authorization is an Amazon SES feature that enables you to authorize other senders to use your identities. For information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html).
 *
 * @public
 */
export interface DeleteEmailIdentityPolicyRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The name of the policy.
   *
   * The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteEmailIdentityPolicyResponse {}

/**
 * Represents a request to delete an email template. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * @public
 */
export interface DeleteEmailTemplateRequest {
  /**
   * The name of the template to be deleted.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface DeleteEmailTemplateResponse {}

/**
 * Represents a request to delete a multi-region endpoint (global-endpoint).
 *
 * @public
 */
export interface DeleteMultiRegionEndpointRequest {
  /**
   * The name of the multi-region endpoint (global-endpoint) to be deleted.
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteMultiRegionEndpointResponse {
  /**
   * A status of the multi-region endpoint (global-endpoint) right after the delete request.
   *
   * - `CREATING` – The resource is being provisioned.
   * - `READY` – The resource is ready to use.
   * - `FAILED` – The resource failed to be provisioned.
   * - `DELETING` – The resource is being deleted as requested.
   *
   * @public
   */
  Status?: Status | undefined;
}

/**
 * A request to remove an email address from the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface DeleteSuppressedDestinationRequest {
  /**
   * The suppressed email destination to remove from the suppression list for your account or for the specified tenant.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The name of the tenant whose suppression list you want to remove the address from. If you omit this parameter, the address is removed from the account-level suppression list.
   *
   * @public
   */
  TenantName?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DeleteSuppressedDestinationResponse {}

/**
 * Represents a request to delete a tenant.
 *
 * @public
 */
export interface DeleteTenantRequest {
  /**
   * The name of the tenant to delete.
   *
   * @public
   */
  TenantName: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface DeleteTenantResponse {}

/**
 * Represents a request to delete an association between a tenant and a resource.
 *
 * @public
 */
export interface DeleteTenantResourceAssociationRequest {
  /**
   * The name of the tenant to remove the resource association from.
   *
   * @public
   */
  TenantName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource to remove from the tenant association.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * @public
 */
export interface DeleteTenantResourceAssociationResponse {}

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
   * The date and time when the predictive inbox placement test was created.
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
 * A request to remove the association between an S/MIME certificate and an email identity.
 *
 * @public
 */
export interface DisassociateEmailIdentityCertificateRequest {
  /**
   * The email identity whose certificate association you want to remove.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * The email address whose certificate association you want to remove. This value is required when the email identity is a domain. When the email identity is an email address, this value is optional.
   *
   * @public
   */
  FromAddress?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface DisassociateEmailIdentityCertificateResponse {}

/**
 * An object that contains the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (`PutDeliverabilityDashboardOption` operation).
 *
 * @public
 */
export interface DomainDeliverabilityCampaign {
  /**
   * The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.
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
   * The first time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.
   *
   * @public
   */
  FirstSeenDateTime?: Date | undefined;

  /**
   * The last time when the email message was delivered to any recipient's inbox. This value can help you determine how long it took for a campaign to deliver an email message.
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
 * An object that contains information about the inbox placement data settings for a verified domain that’s associated with your Amazon Web Services account. This data is available only if you enabled the Deliverability dashboard for the domain.
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
   * A verified domain that’s associated with your Amazon Web Services account and currently has an active Deliverability dashboard subscription.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The date when you enabled the Deliverability dashboard for the domain.
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
 * Contains the overall validation verdict for an email address.
 *
 * @public
 */
export interface EmailAddressInsightsVerdict {
  /**
   * The confidence level of the validation verdict.
   *
   * @public
   */
  ConfidenceVerdict?: EmailAddressInsightsConfidenceVerdict | undefined;
}

/**
 * Contains individual validation checks performed on an email address.
 *
 * @public
 */
export interface EmailAddressInsightsMailboxEvaluations {
  /**
   * Checks that the email address follows proper RFC standards and contains valid characters in the correct format.
   *
   * @public
   */
  HasValidSyntax?: EmailAddressInsightsVerdict | undefined;

  /**
   * Checks that the domain exists, has valid DNS records, and is conﬁgured to receive email.
   *
   * @public
   */
  HasValidDnsRecords?: EmailAddressInsightsVerdict | undefined;

  /**
   * Checks that the mailbox exists and can receive messages without actually sending an email.
   *
   * @public
   */
  MailboxExists?: EmailAddressInsightsVerdict | undefined;

  /**
   * Identiﬁes role-based addresses (such as admin@, support@, or info@) that may have lower engagement rates.
   *
   * @public
   */
  IsRoleAddress?: EmailAddressInsightsVerdict | undefined;

  /**
   * Checks disposable or temporary email addresses that could negatively impact your sender reputation.
   *
   * @public
   */
  IsDisposable?: EmailAddressInsightsVerdict | undefined;

  /**
   * Checks if the input appears to be random text.
   *
   * @public
   */
  IsRandomInput?: EmailAddressInsightsVerdict | undefined;
}

/**
 * Contains a `Bounce` object if the event type is `BOUNCE`. Contains a `Complaint` object if the event type is `COMPLAINT`.
 *
 * @public
 */
export interface EventDetails {
  /**
   * Information about a `Bounce` event.
   *
   * @public
   */
  Bounce?: Bounce | undefined;

  /**
   * Information about a `Complaint` event.
   *
   * @public
   */
  Complaint?: Complaint | undefined;
}

/**
 * An object containing details about a specific event.
 *
 * @public
 */
export interface InsightsEvent {
  /**
   * The timestamp of the event.
   *
   * @public
   */
  Timestamp?: Date | undefined;

  /**
   * The type of event:
   *
   * - `SEND` - The send request was successful and SES will attempt to deliver the message to the recipient’s mail server. (If account-level or global suppression is being used, SES will still count it as a send, but delivery is suppressed.)
   * - `DELIVERY` - SES successfully delivered the email to the recipient's mail server. Excludes deliveries to the mailbox simulator, and those from emails addressed to more than one recipient.
   * - `BOUNCE` - Feedback received for delivery failures. Additional details about the bounce are provided in the `Details` object. Excludes bounces from the mailbox simulator, and those from emails addressed to more than one recipient.
   * - `COMPLAINT` - Complaint received for the email. Additional details about the complaint are provided in the `Details` object. This excludes complaints from the mailbox simulator, those originating from your account-level suppression list (if enabled), and those from emails addressed to more than one recipient.
   * - `OPEN` - Open event for emails including open trackers. Excludes opens for emails addressed to more than one recipient.
   * - `CLICK` - Click event for emails including wrapped links. Excludes clicks for emails addressed to more than one recipient.
   *
   * @public
   */
  Type?: EventType | undefined;

  /**
   * Details about bounce or complaint events.
   *
   * @public
   */
  Details?: EventDetails | undefined;
}

/**
 * An email's insights contain metadata and delivery information about a specific email.
 *
 * @public
 */
export interface EmailInsights {
  /**
   * The recipient of the email.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The recipient's ISP (e.g., `Gmail`, `Yahoo`, etc.).
   *
   * @public
   */
  Isp?: string | undefined;

  /**
   * A list of events associated with the sent email.
   *
   * @public
   */
  Events?: InsightsEvent[] | undefined;
}

/**
 * Contains information about an email template.
 *
 * @public
 */
export interface EmailTemplateMetadata {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The time and date the template was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * In the Amazon SES API v2, *events* include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays. *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
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
   * The types of events that Amazon SES sends to the specified event destinations.
   *
   * - `SEND` - The send request was successful and SES will attempt to deliver the message to the recipient’s mail server. (If account-level or global suppression is being used, SES will still count it as a send, but delivery is suppressed.)
   * - `REJECT` - SES accepted the email, but determined that it contained a virus and didn’t attempt to deliver it to the recipient’s mail server.
   * - `BOUNCE` - (*Hard bounce*) The recipient's mail server permanently rejected the email. (*Soft bounces* are only included when SES fails to deliver the email after retrying for a period of time.)
   * - `COMPLAINT` - The email was successfully delivered to the recipient’s mail server, but the recipient marked it as spam.
   * - `DELIVERY` - SES successfully delivered the email to the recipient's mail server.
   * - `OPEN` - The recipient received the message and opened it in their email client.
   * - `CLICK` - The recipient clicked one or more links in the email.
   * - `RENDERING_FAILURE` - The email wasn't sent because of a template rendering issue. This event type can occur when template data is missing, or when there is a mismatch between template parameters and data. (This event type only occurs when you send email using the [`SendEmail`](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html) or [`SendBulkEmail`](https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendBulkEmail.html) API operations.)
   * - `DELIVERY_DELAY` - The email couldn't be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.
   * - `SUBSCRIPTION` - The email was successfully delivered, but the recipient updated their subscription preferences by clicking on an *unsubscribe* link as part of your [subscription management](https://docs.aws.amazon.com/ses/latest/dg/sending-email-subscription-management.html).
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
   * An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notifications when certain email events occur.
   *
   * @public
   */
  SnsDestination?: SnsDestination | undefined;

  /**
   * An object that defines an Amazon EventBridge destination for email events. You can use Amazon EventBridge to send notifications when certain email events occur.
   *
   * @public
   */
  EventBridgeDestination?: EventBridgeDestination | undefined;

  /**
   * An object that defines an Amazon Pinpoint project destination for email events. You can send email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging dashboards that are built in to Amazon Pinpoint. For more information, see [Transactional Messaging Charts](https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html) in the *Amazon Pinpoint User Guide*.
   *
   * @public
   */
  PinpointDestination?: PinpointDestination | undefined;
}

/**
 * A summary of the export job.
 *
 * @public
 */
export interface ExportJobSummary {
  /**
   * The export job ID.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The source type of the export job.
   *
   * @public
   */
  ExportSourceType?: ExportSourceType | undefined;

  /**
   * The status of the export job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The timestamp of when the export job was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the export job was completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;
}

/**
 * Statistics about the execution of an export job.
 *
 * @public
 */
export interface ExportStatistics {
  /**
   * The number of records that were processed to generate the final export file.
   *
   * @public
   */
  ProcessedRecordsCount?: number | undefined;

  /**
   * The number of records that were exported to the final export file.
   *
   * This value might not be available for all export source types
   *
   * @public
   */
  ExportedRecordsCount?: number | undefined;
}

/**
 * An object that contains the failure details about a job.
 *
 * @public
 */
export interface FailureInfo {
  /**
   * An Amazon S3 pre-signed URL that contains all the failed records and related information.
   *
   * @public
   */
  FailedRecordsS3Url?: string | undefined;

  /**
   * A message about why the job failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * A request to obtain information about the email-sending capabilities of your Amazon SES account.
 *
 * @public
 */
export interface GetAccountRequest {}

/**
 * The pricing attributes that apply to your Amazon SES account, including the currently active pricing plan and any scheduled change.
 *
 * @public
 */
export interface PricingAttributes {
  /**
   * The pricing plan that is currently active on your Amazon SES account.
   *
   * @public
   */
  CurrentPlan?: PricingPlan | undefined;

  /**
   * The pricing plan that will become active at the start of the next monthly cycle, if a scheduled change has been requested. This field is empty when no scheduled change is pending.
   *
   * @public
   */
  NextPlan?: PricingPlan | undefined;
}

/**
 * An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface SendQuota {
  /**
   * The maximum number of emails that you can send in the current Amazon Web Services Region over a 24-hour period. A value of -1 signifies an unlimited quota. (This value is also referred to as your *sending quota*.)
   *
   * @public
   */
  Max24HourSend?: number | undefined;

  /**
   * The maximum number of emails that you can send per second in the current Amazon Web Services Region. This value is also called your *maximum sending rate* or your *maximum TPS (transactions per second) rate*.
   *
   * @public
   */
  MaxSendRate?: number | undefined;

  /**
   * The number of emails sent from your Amazon SES account in the current Amazon Web Services Region over the past 24 hours.
   *
   * @public
   */
  SentLast24Hours?: number | undefined;
}

/**
 * Structure containing validation attributes used for suppressing sending to specific destination on account level.
 *
 * @public
 */
export interface SuppressionValidationAttributes {
  /**
   * Specifies the condition threshold settings for account-level suppression.
   *
   * @public
   */
  ConditionThreshold: SuppressionConditionThreshold | undefined;
}

/**
 * An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface SuppressionAttributes {
  /**
   * A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * Structure containing validation attributes used for suppressing sending to specific destination on account level.
   *
   * @public
   */
  ValidationAttributes?: SuppressionValidationAttributes | undefined;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Guardian.
 *
 * @public
 */
export interface GuardianAttributes {
  /**
   * Specifies the status of your VDM optimized shared delivery. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES enables optimized shared delivery for your account.
   * - `DISABLED` – Amazon SES disables optimized shared delivery for your account.
   *
   * @public
   */
  OptimizedSharedDelivery?: FeatureStatus | undefined;
}

/**
 * The VDM attributes that apply to your Amazon SES account.
 *
 * @public
 */
export interface VdmAttributes {
  /**
   * Specifies the status of your VDM configuration. Can be one of the following:
   *
   * - `ENABLED` – Amazon SES enables VDM for your account.
   * - `DISABLED` – Amazon SES disables VDM for your account.
   *
   * @public
   */
  VdmEnabled: FeatureStatus | undefined;

  /**
   * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
   *
   * @public
   */
  DashboardAttributes?: DashboardAttributes | undefined;

  /**
   * Specifies additional settings for your VDM configuration as applicable to the Guardian.
   *
   * @public
   */
  GuardianAttributes?: GuardianAttributes | undefined;
}

/**
 * A list of details about the email-sending capabilities of your Amazon SES account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface GetAccountResponse {
  /**
   * Indicates whether or not the automatic warm-up feature is enabled for dedicated IP addresses that are associated with your account.
   *
   * @public
   */
  DedicatedIpAutoWarmupEnabled?: boolean | undefined;

  /**
   * The reputation status of your Amazon SES account. The status can be one of the following:
   *
   * - `HEALTHY` – There are no reputation-related issues that currently impact your account.
   * - `PROBATION` – We've identified potential issues with your Amazon SES account. We're placing your account under review while you work on correcting these issues.
   * - `SHUTDOWN` – Your account's ability to send email is currently paused because of an issue with the email sent from your account. When you correct the issue, you can contact us and request that your account's ability to send email is resumed.
   *
   * @public
   */
  EnforcementStatus?: string | undefined;

  /**
   * Indicates whether or not your account has production access in the current Amazon Web Services Region.
   *
   * If the value is `false`, then your account is in the *sandbox*. When your account is in the sandbox, you can only send email to verified identities.
   *
   * If the value is `true`, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.
   *
   * @public
   */
  ProductionAccessEnabled?: boolean | undefined;

  /**
   * An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current Amazon Web Services Region.
   *
   * @public
   */
  SendQuota?: SendQuota | undefined;

  /**
   * Indicates whether or not email sending is enabled for your Amazon SES account in the current Amazon Web Services Region.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;

  /**
   * An object that contains information about the email address suppression preferences for your account in the current Amazon Web Services Region.
   *
   * @public
   */
  SuppressionAttributes?: SuppressionAttributes | undefined;

  /**
   * An object that defines your account details.
   *
   * @public
   */
  Details?: AccountDetails | undefined;

  /**
   * The VDM attributes that apply to your Amazon SES account.
   *
   * @public
   */
  VdmAttributes?: VdmAttributes | undefined;

  /**
   * The pricing attributes that apply to your Amazon SES account, including the currently active pricing plan and any scheduled change.
   *
   * @public
   */
  PricingAttributes?: PricingAttributes | undefined;
}

/**
 * A request to retrieve a list of the blacklists that your dedicated IP addresses appear on.
 *
 * @public
 */
export interface GetBlacklistReportsRequest {
  /**
   * A list of IP addresses that you want to retrieve blacklist information about. You can only specify the dedicated IP addresses that you use to send email using Amazon SES or Amazon Pinpoint.
   *
   * @public
   */
  BlacklistItemNames: string[] | undefined;
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
   * The name of the configuration set.
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
   * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
   *
   * @public
   */
  ReputationOptions?: ReputationOptions | undefined;

  /**
   * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
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

  /**
   * An object that contains information about the suppression list preferences for your account or for a specific tenant.
   *
   * @public
   */
  SuppressionOptions?: SuppressionOptions | undefined;

  /**
   * An object that contains information about the VDM preferences for your configuration set.
   *
   * @public
   */
  VdmOptions?: VdmOptions | undefined;

  /**
   * An object that defines the MailManager archive where sent emails are archived that you send using the configuration set.
   *
   * @public
   */
  ArchivingOptions?: ArchivingOptions | undefined;

  /**
   * The message security options that are applied to the configuration set, such as the signing scheme used for messages that you send with the configuration set.
   *
   * @public
   */
  MessageSecurityOptions?: MessageSecurityOptions | undefined;
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
 * @public
 */
export interface GetContactRequest {
  /**
   * The name of the contact list to which the contact belongs.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 */
export interface GetContactResponse {
  /**
   * The name of the contact list to which the contact belongs.
   *
   * @public
   */
  ContactListName?: string | undefined;

  /**
   * The contact's email address.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The contact's preference for being opted-in to or opted-out of a topic.>
   *
   * @public
   */
  TopicPreferences?: TopicPreference[] | undefined;

  /**
   * The default topic preferences applied to the contact.
   *
   * @public
   */
  TopicDefaultPreferences?: TopicPreference[] | undefined;

  /**
   * A boolean value status noting if the contact is unsubscribed from all contact list topics.
   *
   * @public
   */
  UnsubscribeAll?: boolean | undefined;

  /**
   * The attribute data attached to a contact.
   *
   * @public
   */
  AttributesData?: string | undefined;

  /**
   * A timestamp noting when the contact was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * A timestamp noting the last time the contact's information was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetContactListRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;
}

/**
 * @public
 */
export interface GetContactListResponse {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName?: string | undefined;

  /**
   * An interest group, theme, or label within a list. A contact list can have multiple topics.
   *
   * @public
   */
  Topics?: Topic[] | undefined;

  /**
   * A description of what the contact list is about.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A timestamp noting when the contact list was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * A timestamp noting the last time the contact list was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The tags associated with a contact list.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents a request to retrieve an existing custom verification email template.
 *
 * @public
 */
export interface GetCustomVerificationEmailTemplateRequest {
  /**
   * The name of the custom verification email template that you want to retrieve.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * The following elements are returned by the service.
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
   * An array of objects that define the tags (keys and values) that are associated with the custom verification email template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

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
 * A request to obtain more information about a dedicated IP address.
 *
 * @public
 */
export interface GetDedicatedIpRequest {
  /**
   * The IP address that you want to obtain more information about. The value you specify has to be a dedicated IP address that's assocaited with your Amazon Web Services account.
   *
   * @public
   */
  Ip: string | undefined;
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
 * A request to obtain more information about a dedicated IP pool.
 *
 * @public
 */
export interface GetDedicatedIpPoolRequest {
  /**
   * The name of the dedicated IP pool to retrieve.
   *
   * @public
   */
  PoolName: string | undefined;
}

/**
 * The following element is returned by the service.
 *
 * @public
 */
export interface GetDedicatedIpPoolResponse {
  /**
   * An object that contains information about a dedicated IP pool.
   *
   * @public
   */
  DedicatedIpPool?: DedicatedIpPool | undefined;
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
 * Information about the dedicated IP addresses that are associated with your Amazon Web Services account.
 *
 * @public
 */
export interface GetDedicatedIpsResponse {
  /**
   * A list of dedicated IP addresses that are associated with your Amazon Web Services account.
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
 * Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.
 *
 * When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more information about the features and cost of a Deliverability dashboard subscription, see [Amazon Pinpoint Pricing](http://aws.amazon.com/pinpoint/pricing/).
 *
 * @public
 */
export interface GetDeliverabilityDashboardOptionsRequest {}

/**
 * An object that shows the status of the Deliverability dashboard.
 *
 * @public
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * Specifies whether the Deliverability dashboard is enabled. If this value is `true`, the dashboard is enabled.
   *
   * @public
   */
  DashboardEnabled: boolean | undefined;

  /**
   * The date when your current subscription to the Deliverability dashboard is scheduled to expire, if your subscription is scheduled to expire at the end of the current calendar month. This value is null if you have an active subscription that isn’t due to expire at the end of the month.
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
   * The unique identifier for the campaign. The Deliverability dashboard automatically generates and assigns this identifier to a campaign.
   *
   * @public
   */
  CampaignId: string | undefined;
}

/**
 * An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
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
 * A request to return validation insights about an email address.
 *
 * @public
 */
export interface GetEmailAddressInsightsRequest {
  /**
   * The email address to analyze for validation insights.
   *
   * @public
   */
  EmailAddress: string | undefined;
}

/**
 * Contains detailed validation information about an email address.
 *
 * @public
 */
export interface MailboxValidation {
  /**
   * Overall validity assessment with a conﬁdence verdict.
   *
   * @public
   */
  IsValid?: EmailAddressInsightsVerdict | undefined;

  /**
   * Specific validation checks performed on the email address.
   *
   * @public
   */
  Evaluations?: EmailAddressInsightsMailboxEvaluations | undefined;
}

/**
 * Validation insights about an email address.
 *
 * @public
 */
export interface GetEmailAddressInsightsResponse {
  /**
   * Detailed validation results for the email address.
   *
   * @public
   */
  MailboxValidation?: MailboxValidation | undefined;
}

/**
 * A request to return details about an email identity.
 *
 * @public
 */
export interface GetEmailIdentityRequest {
  /**
   * The email identity.
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
   * - `PENDING` – Amazon SES hasn't started searching for the MX record yet.
   * - `SUCCESS` – Amazon SES detected the required MX record for the MAIL FROM domain.
   * - `FAILED` – Amazon SES can't find the required MX record, or the record no longer exists.
   * - `TEMPORARY_FAILURE` – A temporary issue occurred, which prevented Amazon SES from determining the status of the MAIL FROM domain.
   *
   * @public
   */
  MailFromDomainStatus: MailFromDomainStatus | undefined;

  /**
   * The action to take if the required MX record can't be found when you send an email. When you set this value to `USE_DEFAULT_VALUE`, the mail is sent using *amazonses.com* as the MAIL FROM domain. When you set this value to `REJECT_MESSAGE`, the Amazon SES API v2 returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   *
   * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   *
   * @public
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | undefined;
}

/**
 * An object that contains information about the start of authority (SOA) record associated with the identity.
 *
 * @public
 */
export interface SOARecord {
  /**
   * Primary name server specified in the SOA record.
   *
   * @public
   */
  PrimaryNameServer?: string | undefined;

  /**
   * Administrative contact email from the SOA record.
   *
   * @public
   */
  AdminEmail?: string | undefined;

  /**
   * Serial number from the SOA record.
   *
   * @public
   */
  SerialNumber?: number | undefined;
}

/**
 * An object that contains additional information about the verification status for the identity.
 *
 * @public
 */
export interface VerificationInfo {
  /**
   * The last time a verification attempt was made for this identity.
   *
   * @public
   */
  LastCheckedTimestamp?: Date | undefined;

  /**
   * The last time a successful verification was made for this identity.
   *
   * @public
   */
  LastSuccessTimestamp?: Date | undefined;

  /**
   * Provides the reason for the failure describing why Amazon SES was not able to successfully verify the identity. Below are the possible values:
   *
   * - `INVALID_VALUE` – Amazon SES was able to find the record, but the value contained within the record was invalid. Ensure you have published the correct values for the record.
   * - `TYPE_NOT_FOUND` – The queried hostname exists but does not have the requested type of DNS record. Ensure that you have published the correct type of DNS record.
   * - `HOST_NOT_FOUND` – The queried hostname does not exist or was not reachable at the time of the request. Ensure that you have published the required DNS record(s).
   * - `SERVICE_ERROR` – A temporary issue is preventing Amazon SES from determining the verification status of the domain.
   * - `DNS_SERVER_ERROR` – The DNS server encountered an issue and was unable to complete the request.
   * - `REPLICATION_ACCESS_DENIED` – The verification failed because the user does not have the required permissions to replicate the DKIM key from the primary region. Ensure you have the necessary permissions in both primary and replica regions.
   * - `REPLICATION_PRIMARY_NOT_FOUND` – The verification failed because no corresponding identity was found in the specified primary region. Ensure the identity exists in the primary region before attempting replication.
   * - `REPLICATION_PRIMARY_BYO_DKIM_NOT_SUPPORTED` – The verification failed because the identity in the primary region is configured with Bring Your Own DKIM (BYODKIM). DKIM key replication is only supported for identities using Easy DKIM.
   * - `REPLICATION_REPLICA_AS_PRIMARY_NOT_SUPPORTED` – The verification failed because the specified primary identity is a replica of another identity, and multi-level replication is not supported; the primary identity must be a non-replica identity.
   * - `REPLICATION_PRIMARY_INVALID_REGION` – The verification failed due to an invalid primary region specified. Ensure you provide a valid Amazon Web Services region where Amazon SES is available and different from the replica region.
   *
   * @public
   */
  ErrorType?: VerificationError | undefined;

  /**
   * An object that contains information about the start of authority (SOA) record associated with the identity.
   *
   * @public
   */
  SOARecord?: SOARecord | undefined;
}

/**
 * Details about an email identity.
 *
 * @public
 */
export interface GetEmailIdentityResponse {
  /**
   * The email identity type. Note: the `MANAGED_DOMAIN` identity type is not supported.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The feedback forwarding configuration for the identity.
   *
   * If the value is `true`, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the `Return-Path` header of the original email.
   *
   * You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).
   *
   * @public
   */
  FeedbackForwardingStatus?: boolean | undefined;

  /**
   * Specifies whether or not the identity is verified. You can only send email from verified email addresses or domains. For more information about verifying identities, see the [Amazon Pinpoint User Guide](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html).
   *
   * @public
   */
  VerifiedForSendingStatus?: boolean | undefined;

  /**
   * An object that contains information about the DKIM attributes for the identity.
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
   * A map of policy names to policies.
   *
   * @public
   */
  Policies?: Record<string, string> | undefined;

  /**
   * An array of objects that define the tags (keys and values) that are associated with the email identity.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration set used by default when sending from this identity.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The verification status of the identity. The status can be one of the following:
   *
   * - `PENDING` – The verification process was initiated, but Amazon SES hasn't yet been able to verify the identity.
   * - `SUCCESS` – The verification process completed successfully.
   * - `FAILED` – The verification process failed.
   * - `TEMPORARY_FAILURE` – A temporary issue is preventing Amazon SES from determining the verification status of the identity.
   * - `NOT_STARTED` – The verification process hasn't been initiated for the identity.
   *
   * @public
   */
  VerificationStatus?: VerificationStatus | undefined;

  /**
   * An object that contains additional information about the verification status for the identity.
   *
   * @public
   */
  VerificationInfo?: VerificationInfo | undefined;
}

/**
 * A request to return the policies of an email identity.
 *
 * @public
 */
export interface GetEmailIdentityPoliciesRequest {
  /**
   * The email identity.
   *
   * @public
   */
  EmailIdentity: string | undefined;
}

/**
 * Identity policies associated with email identity.
 *
 * @public
 */
export interface GetEmailIdentityPoliciesResponse {
  /**
   * A map of policy names to policies.
   *
   * @public
   */
  Policies?: Record<string, string> | undefined;
}

/**
 * Represents a request to display the template object (which includes the subject line, HTML part and text part) for the template you specify.
 *
 * @public
 */
export interface GetEmailTemplateRequest {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * The following element is returned by the service.
 *
 * @public
 */
export interface GetEmailTemplateResponse {
  /**
   * The name of the template.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The content of the email template, composed of a subject line, an HTML part, and a text-only part.
   *
   * @public
   */
  TemplateContent: EmailTemplateContent | undefined;

  /**
   * An array of objects that define the tags (keys and values) that are associated with the email template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Represents a request to retrieve information about an export job using the export job ID.
 *
 * @public
 */
export interface GetExportJobRequest {
  /**
   * The export job ID.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface GetExportJobResponse {
  /**
   * The export job ID.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The type of source of the export job.
   *
   * @public
   */
  ExportSourceType?: ExportSourceType | undefined;

  /**
   * The status of the export job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The destination of the export job. When `JobStatus` is `COMPLETED`, this object includes `S3Url`, a pre-signed URL that you use to download the export file.
   *
   * @public
   */
  ExportDestination?: ExportDestination | undefined;

  /**
   * The data source of the export job.
   *
   * @public
   */
  ExportDataSource?: ExportDataSource | undefined;

  /**
   * The timestamp of when the export job was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The timestamp of when the export job was completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * The failure details about an export job.
   *
   * @public
   */
  FailureInfo?: FailureInfo | undefined;

  /**
   * The statistics about the export job.
   *
   * @public
   */
  Statistics?: ExportStatistics | undefined;
}

/**
 * Represents a request for information about an import job using the import job ID.
 *
 * @public
 */
export interface GetImportJobRequest {
  /**
   * The ID of the import job.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface GetImportJobResponse {
  /**
   * A string that represents the import job ID.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The destination of the import job.
   *
   * @public
   */
  ImportDestination?: ImportDestination | undefined;

  /**
   * The data source of the import job.
   *
   * @public
   */
  ImportDataSource?: ImportDataSource | undefined;

  /**
   * The failure details about an import job.
   *
   * @public
   */
  FailureInfo?: FailureInfo | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The time stamp of when the import job was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time stamp of when the import job was completed.
   *
   * @public
   */
  CompletedTimestamp?: Date | undefined;

  /**
   * The current number of records processed.
   *
   * @public
   */
  ProcessedRecordsCount?: number | undefined;

  /**
   * The number of records that failed processing because of invalid input or other reasons.
   *
   * @public
   */
  FailedRecordsCount?: number | undefined;
}

/**
 * A request to return information about a message.
 *
 * @public
 */
export interface GetMessageInsightsRequest {
  /**
   * A `MessageId` is a unique identifier for a message, and is returned when sending emails through Amazon SES.
   *
   * @public
   */
  MessageId: string | undefined;
}

/**
 * Information about a message.
 *
 * @public
 */
export interface GetMessageInsightsResponse {
  /**
   * A unique identifier for the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The from address used to send the message.
   *
   * @public
   */
  FromEmailAddress?: string | undefined;

  /**
   * The subject line of the message.
   *
   * @public
   */
  Subject?: string | undefined;

  /**
   * A list of tags, in the form of name/value pairs, that were applied to the email you sent, along with Amazon SES [Auto-Tags](https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html).
   *
   * @public
   */
  EmailTags?: MessageTag[] | undefined;

  /**
   * A set of insights associated with the message.
   *
   * @public
   */
  Insights?: EmailInsights[] | undefined;
}

/**
 * Represents a request to display the multi-region endpoint (global-endpoint).
 *
 * @public
 */
export interface GetMultiRegionEndpointRequest {
  /**
   * The name of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointName: string | undefined;
}

/**
 * An object which contains an AWS-Region and routing status.
 *
 * @public
 */
export interface Route {
  /**
   * The name of an AWS-Region.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface GetMultiRegionEndpointResponse {
  /**
   * The name of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The ID of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * Contains routes information for the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  Routes?: Route[] | undefined;

  /**
   * The status of the multi-region endpoint (global-endpoint).
   *
   * - `CREATING` – The resource is being provisioned.
   * - `READY` – The resource is ready to use.
   * - `FAILED` – The resource failed to be provisioned.
   * - `DELETING` – The resource is being deleted as requested.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The time stamp of when the multi-region endpoint (global-endpoint) was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time stamp of when the multi-region endpoint (global-endpoint) was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * Represents a request to retrieve information about a specific reputation entity.
 *
 * @public
 */
export interface GetReputationEntityRequest {
  /**
   * The unique identifier for the reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ReputationEntityReference: string | undefined;

  /**
   * The type of reputation entity. Currently, only `RESOURCE` type entities are supported.
   *
   * @public
   */
  ReputationEntityType: ReputationEntityType | undefined;
}

/**
 * An object that contains status information for a reputation entity, including the current status, cause description, and timestamp.
 *
 * @public
 */
export interface StatusRecord {
  /**
   * The current sending status. This can be one of the following:
   *
   * - `ENABLED` – Sending is allowed.
   * - `DISABLED` – Sending is prevented.
   * - `REINSTATED` – Sending is allowed even with active reputation findings.
   *
   * @public
   */
  Status?: SendingStatus | undefined;

  /**
   * A description of the reason for the current status, or null if no specific cause is available.
   *
   * @public
   */
  Cause?: string | undefined;

  /**
   * The timestamp when this status was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * An object that contains information about a reputation entity, including its reference, type, policy, status records, and reputation impact.
 *
 * @public
 */
export interface ReputationEntity {
  /**
   * The unique identifier for the reputation entity. For resource-type entities, this is the Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ReputationEntityReference?: string | undefined;

  /**
   * The type of reputation entity. Currently, only `RESOURCE` type entities are supported.
   *
   * @public
   */
  ReputationEntityType?: ReputationEntityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the reputation management policy applied to this entity. This is an Amazon Web Services Amazon SES-managed policy.
   *
   * @public
   */
  ReputationManagementPolicy?: string | undefined;

  /**
   * The customer-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.
   *
   * @public
   */
  CustomerManagedStatus?: StatusRecord | undefined;

  /**
   * The Amazon Web Services Amazon SES-managed status record for this reputation entity, including the current status, cause description, and last updated timestamp.
   *
   * @public
   */
  AwsSesManagedStatus?: StatusRecord | undefined;

  /**
   * The aggregate sending status that determines whether the entity is allowed to send emails. This status is derived from both the customer-managed and Amazon Web Services Amazon SES-managed statuses. If either the customer-managed status or the Amazon Web Services Amazon SES-managed status is `DISABLED`, the aggregate status will be `DISABLED` and the entity will not be allowed to send emails. When the customer-managed status is set to `REINSTATED`, the entity can continue sending even if there are active reputation findings, provided the Amazon Web Services Amazon SES-managed status also permits sending. The entity can only send emails when both statuses permit sending.
   *
   * @public
   */
  SendingStatusAggregate?: SendingStatus | undefined;

  /**
   * The reputation impact level for this entity, representing the highest impact reputation finding currently active. Reputation findings can be retrieved using the `ListRecommendations` operation.
   *
   * @public
   */
  ReputationImpact?: RecommendationImpact | undefined;
}

/**
 * Information about the requested reputation entity.
 *
 * @public
 */
export interface GetReputationEntityResponse {
  /**
   * The reputation entity information, including status records, policy configuration, and reputation impact.
   *
   * @public
   */
  ReputationEntity?: ReputationEntity | undefined;
}

/**
 * A request to retrieve information about an email address that's on the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface GetSuppressedDestinationRequest {
  /**
   * The email address that's on the suppression list for your account or for the specified tenant.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The name of the tenant whose suppression list you want to query. If you omit this parameter, the operation targets the account-level suppression list.
   *
   * @public
   */
  TenantName?: string | undefined;
}

/**
 * An object that contains additional attributes that are related an email address that is on the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface SuppressedDestinationAttributes {
  /**
   * The unique identifier of the email message that caused the email address to be added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * A unique identifier that's generated when an email address is added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  FeedbackId?: string | undefined;
}

/**
 * An object that contains information about an email address that is on the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface SuppressedDestination {
  /**
   * The email address that is on the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The reason that the address was added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  Reason: SuppressionListReason | undefined;

  /**
   * The date and time when the suppressed destination was last updated, shown in Unix time format.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;

  /**
   * An optional value that can contain additional information about the reasons that the address was added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  Attributes?: SuppressedDestinationAttributes | undefined;

  /**
   * The name of the tenant that the suppressed destination belongs to. This field is present only when the suppressed destination is on a tenant's suppression list.
   *
   * @public
   */
  TenantName?: string | undefined;
}

/**
 * Information about the suppressed email address.
 *
 * @public
 */
export interface GetSuppressedDestinationResponse {
  /**
   * An object containing information about the suppressed email address.
   *
   * @public
   */
  SuppressedDestination: SuppressedDestination | undefined;
}

/**
 * Represents a request to get information about a specific tenant.
 *
 * @public
 */
export interface GetTenantRequest {
  /**
   * The name of the tenant to retrieve information about.
   *
   * @public
   */
  TenantName: string | undefined;
}

/**
 * A structure that contains details about a tenant.
 *
 * @public
 */
export interface Tenant {
  /**
   * The name of the tenant.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * A unique identifier for the tenant.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tenant.
   *
   * @public
   */
  TenantArn?: string | undefined;

  /**
   * The date and time when the tenant was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * An array of objects that define the tags (keys and values) associated with the tenant.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The status of sending capability for the tenant:
   *
   * - `ENABLED` – Sending is allowed for the tenant.
   * - `DISABLED` – Sending is prevented for the tenant.
   * - `REINSTATED` – Sending is allowed even if there are active reputation findings.
   *
   * @public
   */
  SendingStatus?: SendingStatus | undefined;

  /**
   * An object that contains information about the suppression list preferences for the tenant.
   *
   * @public
   */
  SuppressionAttributes?: TenantSuppressionAttributes | undefined;
}

/**
 * Information about a specific tenant.
 *
 * @public
 */
export interface GetTenantResponse {
  /**
   * A structure that contains details about the tenant.
   *
   * @public
   */
  Tenant?: Tenant | undefined;
}

/**
 * An object that contains information about an S/MIME certificate that's associated with an email identity.
 *
 * @public
 */
export interface IdentityCertificate {
  /**
   * The email address that the certificate applies to.
   *
   * @public
   */
  FromAddress?: string | undefined;

  /**
   * The status of the certificate association. A status of `ACTIVE` indicates that the certificate is ready to use for signing.
   *
   * @public
   */
  Status?: IdentityCertificateStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Certificate Manager (ACM) certificate that's associated with the email identity.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The timestamp after which the certificate is no longer valid.
   *
   * @public
   */
  CertificateExpiryTime?: Date | undefined;
}

/**
 * Information about an email identity.
 *
 * @public
 */
export interface IdentityInfo {
  /**
   * The email identity type. Note: the `MANAGED_DOMAIN` type is not supported for email identity types.
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
   * An *identity* is an email address or domain that you send email from. Before you can send email from an identity, you have to demostrate that you own the identity, and that you authorize Amazon SES to send email from that identity.
   *
   * @public
   */
  SendingEnabled?: boolean | undefined;

  /**
   * The verification status of the identity. The status can be one of the following:
   *
   * - `PENDING` – The verification process was initiated, but Amazon SES hasn't yet been able to verify the identity.
   * - `SUCCESS` – The verification process completed successfully.
   * - `FAILED` – The verification process failed.
   * - `TEMPORARY_FAILURE` – A temporary issue is preventing Amazon SES from determining the verification status of the identity.
   * - `NOT_STARTED` – The verification process hasn't been initiated for the identity.
   *
   * @public
   */
  VerificationStatus?: VerificationStatus | undefined;
}

/**
 * A summary of the import job.
 *
 * @public
 */
export interface ImportJobSummary {
  /**
   * A string that represents a job ID.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * An object that contains details about the resource destination the import job is going to target.
   *
   * @public
   */
  ImportDestination?: ImportDestination | undefined;

  /**
   * The status of a job.
   *
   * - `CREATED` – Job has just been created.
   * - `PROCESSING` – Job is processing.
   * - `ERROR` – An error occurred during processing.
   * - `COMPLETED` – Job has completed processing successfully.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;

  /**
   * The date and time when the import job was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The current number of records processed.
   *
   * @public
   */
  ProcessedRecordsCount?: number | undefined;

  /**
   * The number of records that failed processing because of invalid input or other reasons.
   *
   * @public
   */
  FailedRecordsCount?: number | undefined;
}

/**
 * A request to obtain a list of configuration sets for your Amazon SES account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface ListConfigurationSetsRequest {
  /**
   * An object that contains filters to apply when listing configuration sets. You can filter by a substring of the configuration set name.
   *
   * @public
   */
  Filter?: Partial<Record<ConfigurationSetFilterKey, string>> | undefined;

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
 * A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface ListConfigurationSetsResponse {
  /**
   * An array that contains all of the configuration sets in your Amazon SES account in the current Amazon Web Services Region.
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
 * @public
 */
export interface ListContactListsRequest {
  /**
   * Maximum number of contact lists to return at once. Use this parameter to paginate results. If additional contact lists exist beyond the specified limit, the `NextToken` element is sent in the response. Use the `NextToken` value in subsequent requests to retrieve additional lists.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * A string token indicating that there might be additional contact lists available to be listed. Use the token provided in the Response to use in the subsequent call to ListContactLists with the same parameters to retrieve the next page of contact lists.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactListsResponse {
  /**
   * The available contact lists.
   *
   * @public
   */
  ContactLists?: ContactList[] | undefined;

  /**
   * A string token indicating that there might be additional contact lists available to be listed. Copy this token to a subsequent call to `ListContactLists` with the same parameters to retrieve the next page of contact lists.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Used for filtering by a specific topic preference.
 *
 * @public
 */
export interface TopicFilter {
  /**
   * The name of a topic on which you wish to apply the filter.
   *
   * @public
   */
  TopicName?: string | undefined;

  /**
   * Notes that the default subscription status should be applied to a contact because the contact has not noted their preference for subscribing to a topic.
   *
   * @public
   */
  UseDefaultIfPreferenceUnavailable?: boolean | undefined;
}

/**
 * A filter that can be applied to a list of contacts.
 *
 * @public
 */
export interface ListContactsFilter {
  /**
   * The status by which you are filtering: `OPT_IN` or `OPT_OUT`.
   *
   * @public
   */
  FilteredStatus?: SubscriptionStatus | undefined;

  /**
   * Used for filtering by a specific topic preference.
   *
   * @public
   */
  TopicFilter?: TopicFilter | undefined;
}

/**
 * @public
 */
export interface ListContactsRequest {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * A filter that can be applied to a list of contacts.
   *
   * @public
   */
  Filter?: ListContactsFilter | undefined;

  /**
   * The number of contacts that may be returned at once, which is dependent on if there are more or less contacts than the value of the PageSize. Use this parameter to paginate results. If additional contacts exist beyond the specified limit, the `NextToken` element is sent in the response. Use the `NextToken` value in subsequent requests to retrieve additional contacts.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * A string token indicating that there might be additional contacts available to be listed. Use the token provided in the Response to use in the subsequent call to ListContacts with the same parameters to retrieve the next page of contacts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactsResponse {
  /**
   * The contacts present in a specific contact list.
   *
   * @public
   */
  Contacts?: Contact[] | undefined;

  /**
   * A string token indicating that there might be additional contacts available to be listed. Copy this token to a subsequent call to `ListContacts` with the same parameters to retrieve the next page of contacts.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list the existing custom verification email templates for your account.
 *
 * @public
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  /**
   * A token returned from a previous call to `ListCustomVerificationEmailTemplates` to indicate the position in the list of custom verification email templates.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListCustomVerificationEmailTemplates`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * The value you specify has to be at least 1, and can be no more than 50.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The following elements are returned by the service.
 *
 * @public
 */
export interface ListCustomVerificationEmailTemplatesResponse {
  /**
   * A list of the custom verification email templates that exist in your account.
   *
   * @public
   */
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[] | undefined;

  /**
   * A token indicating that there are additional custom verification email templates available to be listed. Pass this token to a subsequent call to `ListCustomVerificationEmailTemplates` to retrieve the next 50 custom verification email templates.
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
   * A list of all of the dedicated IP pools that are associated with your Amazon Web Services account in the current Region.
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
 * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard.
 *
 * @public
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * The first day that you want to obtain deliverability data for.
   *
   * @public
   */
  StartDate: Date | undefined;

  /**
   * The last day that you want to obtain deliverability data for. This value has to be less than or equal to 30 days after the value of the `StartDate` parameter.
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
 * An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
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
 * A request to list all of the email identities associated with your Amazon Web Services account. This list includes identities that you've already verified, identities that are unverified, and identities that were verified in the past, but are no longer verified.
 *
 * @public
 */
export interface ListEmailIdentitiesRequest {
  /**
   * An object that contains filters to apply when listing email identities. You can filter by a substring of the identity name, by identity type, or by verification status.
   *
   * @public
   */
  Filter?: Partial<Record<IdentityFilterKey, string>> | undefined;

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
 * A list of all of the identities that you've attempted to verify, regardless of whether or not those identities were successfully verified.
 *
 * @public
 */
export interface ListEmailIdentitiesResponse {
  /**
   * An array that includes all of the email identities associated with your Amazon Web Services account.
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
 * A request to list the S/MIME certificates that are associated with an email identity.
 *
 * @public
 */
export interface ListEmailIdentityCertificatesRequest {
  /**
   * The email identity whose certificate associations you want to list.
   *
   * @public
   */
  EmailIdentity: string | undefined;

  /**
   * A token returned from a previous call to `ListEmailIdentityCertificates` to indicate the position in the list of certificates.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListEmailIdentityCertificates`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * Information about the S/MIME certificates that are associated with an email identity.
 *
 * @public
 */
export interface ListEmailIdentityCertificatesResponse {
  /**
   * An array that contains the certificate associations for the email identity. Each entry includes the from address, the certificate's status, its Amazon Resource Name (ARN), and its expiry time.
   *
   * @public
   */
  Certificates?: IdentityCertificate[] | undefined;

  /**
   * A token that indicates that there are additional certificates to list. To view additional certificates, issue another request to `ListEmailIdentityCertificates`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list the email templates present in your Amazon SES account in the current Amazon Web Services Region. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * @public
 */
export interface ListEmailTemplatesRequest {
  /**
   * A token returned from a previous call to `ListEmailTemplates` to indicate the position in the list of email templates.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListEmailTemplates`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * The value you specify has to be at least 1, and can be no more than 100.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * The following elements are returned by the service.
 *
 * @public
 */
export interface ListEmailTemplatesResponse {
  /**
   * An array the contains the name and creation time stamp for each template in your Amazon SES account.
   *
   * @public
   */
  TemplatesMetadata?: EmailTemplateMetadata[] | undefined;

  /**
   * A token indicating that there are additional email templates available to be listed. Pass this token to a subsequent `ListEmailTemplates` call to retrieve the next 10 email templates.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list all export jobs with filters.
 *
 * @public
 */
export interface ListExportJobsRequest {
  /**
   * The pagination token returned from a previous call to `ListExportJobs` to indicate the position in the list of export jobs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of export jobs to return at once. Use this parameter to paginate results. If additional export jobs exist beyond the specified limit, the `NextToken` element is sent in the response. Use the `NextToken` value in subsequent calls to `ListExportJobs` to retrieve additional export jobs.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * A value used to list export jobs that have a certain `ExportSourceType`.
   *
   * @public
   */
  ExportSourceType?: ExportSourceType | undefined;

  /**
   * A value used to list export jobs that have a certain `JobStatus`.
   *
   * @public
   */
  JobStatus?: JobStatus | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface ListExportJobsResponse {
  /**
   * A list of the export job summaries.
   *
   * @public
   */
  ExportJobs?: ExportJobSummary[] | undefined;

  /**
   * A string token indicating that there might be additional export jobs available to be listed. Use this token to a subsequent call to `ListExportJobs` with the same parameters to retrieve the next page of export jobs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list all of the import jobs for a data destination within the specified maximum number of import jobs.
 *
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * The destination of the import job, which can be used to list import jobs that have a certain `ImportDestinationType`.
   *
   * @public
   */
  ImportDestinationType?: ImportDestinationType | undefined;

  /**
   * A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to `ListImportJobs` with the same parameters to retrieve the next page of import jobs.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of import jobs to return at once. Use this parameter to paginate results. If additional import jobs exist beyond the specified limit, the `NextToken` element is sent in the response. Use the `NextToken` value in subsequent requests to retrieve additional addresses.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * A list of the import job summaries.
   *
   * @public
   */
  ImportJobs?: ImportJobSummary[] | undefined;

  /**
   * A string token indicating that there might be additional import jobs available to be listed. Copy this token to a subsequent call to `ListImportJobs` with the same parameters to retrieve the next page of import jobs.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * An object used to specify a list or topic to which an email belongs, which will be used when a contact chooses to unsubscribe.
 *
 * @public
 */
export interface ListManagementOptions {
  /**
   * The name of the contact list.
   *
   * @public
   */
  ContactListName: string | undefined;

  /**
   * The name of the topic.
   *
   * @public
   */
  TopicName?: string | undefined;
}

/**
 * Represents a request to list all the multi-region endpoints (global-endpoints) whose primary region is the AWS-Region where operation is executed.
 *
 * @public
 */
export interface ListMultiRegionEndpointsRequest {
  /**
   * A token returned from a previous call to `ListMultiRegionEndpoints` to indicate the position in the list of multi-region endpoints (global-endpoints).
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListMultiRegionEndpoints`. If the number of results is larger than the number you specified in this parameter, the response includes a `NextToken` element that you can use to retrieve the next page of results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * An object that contains multi-region endpoint (global-endpoint) properties.
 *
 * @public
 */
export interface MultiRegionEndpoint {
  /**
   * The name of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointName?: string | undefined;

  /**
   * The status of the multi-region endpoint (global-endpoint).
   *
   * - `CREATING` – The resource is being provisioned.
   * - `READY` – The resource is ready to use.
   * - `FAILED` – The resource failed to be provisioned.
   * - `DELETING` – The resource is being deleted as requested.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The ID of the multi-region endpoint (global-endpoint).
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * Primary and secondary regions between which multi-region endpoint splits sending traffic.
   *
   * @public
   */
  Regions?: string[] | undefined;

  /**
   * The time stamp of when the multi-region endpoint (global-endpoint) was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time stamp of when the multi-region endpoint (global-endpoint) was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * The following elements are returned by the service.
 *
 * @public
 */
export interface ListMultiRegionEndpointsResponse {
  /**
   * An array that contains key multi-region endpoint (global-endpoint) properties.
   *
   * @public
   */
  MultiRegionEndpoints?: MultiRegionEndpoint[] | undefined;

  /**
   * A token indicating that there are additional multi-region endpoints (global-endpoints) available to be listed. Pass this token to a subsequent `ListMultiRegionEndpoints` call to retrieve the next page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list the existing recommendations for your account.
 *
 * @public
 */
export interface ListRecommendationsRequest {
  /**
   * Filters applied when retrieving recommendations. Can eiter be an individual filter, or combinations of `STATUS` and `IMPACT` or `STATUS` and `TYPE`
   *
   * @public
   */
  Filter?: Partial<Record<ListRecommendationsFilterKey, string>> | undefined;

  /**
   * A token returned from a previous call to `ListRecommendations` to indicate the position in the list of recommendations.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListRecommendations`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * The value you specify has to be at least 1, and can be no more than 100.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A recommendation generated for your account.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The resource affected by the recommendation, with values like `arn:aws:ses:us-east-1:123456789012:identity/example.com`.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The recommendation type, with values like `DKIM`, `SPF`, `DMARC`, `BIMI`, or `COMPLAINT`.
   *
   * @public
   */
  Type?: RecommendationType | undefined;

  /**
   * The recommendation description / disambiguator - e.g. `DKIM1` and `DKIM2` are different recommendations about your DKIM setup.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The recommendation status, with values like `OPEN` or `FIXED`.
   *
   * @public
   */
  Status?: RecommendationStatus | undefined;

  /**
   * The first time this issue was encountered and the recommendation was generated.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The last time the recommendation was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The recommendation impact, with values like `HIGH` or `LOW`.
   *
   * @public
   */
  Impact?: RecommendationImpact | undefined;
}

/**
 * Contains the response to your request to retrieve the list of recommendations for your account.
 *
 * @public
 */
export interface ListRecommendationsResponse {
  /**
   * The recommendations applicable to your account.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * A string token indicating that there might be additional recommendations available to be listed. Use the token provided in the `ListRecommendationsResponse` to use in the subsequent call to `ListRecommendations` with the same parameters to retrieve the next page of recommendations.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list reputation entities with optional filtering.
 *
 * @public
 */
export interface ListReputationEntitiesRequest {
  /**
   * An object that contains filters to apply when listing reputation entities. You can filter by entity type, reputation impact, sending status, or entity reference prefix.
   *
   * @public
   */
  Filter?: Partial<Record<ReputationEntityFilterKey, string>> | undefined;

  /**
   * A token returned from a previous call to `ListReputationEntities` to indicate the position in the list of reputation entities.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListReputationEntities`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A list of reputation entities in your account.
 *
 * @public
 */
export interface ListReputationEntitiesResponse {
  /**
   * An array that contains information about the reputation entities in your account.
   *
   * @public
   */
  ReputationEntities?: ReputationEntity[] | undefined;

  /**
   * A token that indicates that there are additional reputation entities to list. To view additional reputation entities, issue another request to `ListReputationEntities`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list tenants associated with a specific resource.
 *
 * @public
 */
export interface ListResourceTenantsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list associated tenants for.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The number of results to show in a single call to `ListResourceTenants`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * A token returned from a previous call to `ListResourceTenants` to indicate the position in the list of resource tenants.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains information about a tenant associated with a resource.
 *
 * @public
 */
export interface ResourceTenantMetadata {
  /**
   * The name of the tenant associated with the resource.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * A unique identifier for the tenant associated with the resource.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The date and time when the resource was associated with the tenant.
   *
   * @public
   */
  AssociatedTimestamp?: Date | undefined;
}

/**
 * Information about tenants associated with a specific resource.
 *
 * @public
 */
export interface ListResourceTenantsResponse {
  /**
   * An array that contains information about each tenant associated with the resource.
   *
   * @public
   */
  ResourceTenants?: ResourceTenantMetadata[] | undefined;

  /**
   * A token that indicates that there are additional tenants to list. To view additional tenants, issue another request to `ListResourceTenants`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request to obtain a list of email destinations that are on the suppression list for your account or for a specific tenant.
 *
 * @public
 */
export interface ListSuppressedDestinationsRequest {
  /**
   * The name of the tenant whose suppression list you want to retrieve. If you omit this parameter, the operation targets the account-level suppression list.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * The factors that caused the email address to be added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  Reasons?: SuppressionListReason[] | undefined;

  /**
   * Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.
   *
   * @public
   */
  EndDate?: Date | undefined;

  /**
   * A token returned from a previous call to `ListSuppressedDestinations` to indicate the position in the list of suppressed email addresses.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListSuppressedDestinations`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A summary that describes the suppressed email address.
 *
 * @public
 */
export interface SuppressedDestinationSummary {
  /**
   * The email address that's on the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  EmailAddress: string | undefined;

  /**
   * The reason that the address was added to the suppression list for your account or for a specific tenant.
   *
   * @public
   */
  Reason: SuppressionListReason | undefined;

  /**
   * The date and time when the suppressed destination was last updated, shown in Unix time format.
   *
   * @public
   */
  LastUpdateTime: Date | undefined;
}

/**
 * A list of suppressed email addresses.
 *
 * @public
 */
export interface ListSuppressedDestinationsResponse {
  /**
   * A list of summaries, each containing a summary for a suppressed email destination.
   *
   * @public
   */
  SuppressedDestinationSummaries?: SuppressedDestinationSummary[] | undefined;

  /**
   * A token that indicates that there are additional email addresses on the suppression list for your account or for the specified tenant. To view additional suppressed addresses, issue another request to `ListSuppressedDestinations`, and pass this token in the `NextToken` parameter.
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
 * Represents a request to list resources associated with a specific tenant.
 *
 * @public
 */
export interface ListTenantResourcesRequest {
  /**
   * The name of the tenant to list resources for.
   *
   * @public
   */
  TenantName: string | undefined;

  /**
   * A map of filter keys and values for filtering the list of tenant resources. Currently, the only supported filter key is `RESOURCE_TYPE`.
   *
   * @public
   */
  Filter?: Partial<Record<ListTenantResourcesFilterKey, string>> | undefined;

  /**
   * The number of results to show in a single call to `ListTenantResources`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;

  /**
   * A token returned from a previous call to `ListTenantResources` to indicate the position in the list of tenant resources.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A structure that contains information about a resource associated with a tenant.
 *
 * @public
 */
export interface TenantResource {
  /**
   * The type of resource associated with the tenant. Valid values are `EMAIL_IDENTITY`, `CONFIGURATION_SET`, or `EMAIL_TEMPLATE`.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with the tenant.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * Information about resources associated with a specific tenant.
 *
 * @public
 */
export interface ListTenantResourcesResponse {
  /**
   * An array that contains information about each resource associated with the tenant.
   *
   * @public
   */
  TenantResources?: TenantResource[] | undefined;

  /**
   * A token that indicates that there are additional resources to list. To view additional resources, issue another request to `ListTenantResources`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a request to list all tenants associated with your account in the current Amazon Web Services Region.
 *
 * @public
 */
export interface ListTenantsRequest {
  /**
   * An object that contains filters to apply when listing tenants. You can filter by a substring of the tenant name or by sending status.
   *
   * @public
   */
  Filter?: Partial<Record<ListTenantsFilterKey, string>> | undefined;

  /**
   * A token returned from a previous call to `ListTenants` to indicate the position in the list of tenants.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of results to show in a single call to `ListTenants`. If the number of results is larger than the number you specified in this parameter, then the response includes a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  PageSize?: number | undefined;
}

/**
 * A structure that contains basic information about a tenant.
 *
 * @public
 */
export interface TenantInfo {
  /**
   * The name of the tenant.
   *
   * @public
   */
  TenantName?: string | undefined;

  /**
   * A unique identifier for the tenant.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the tenant.
   *
   * @public
   */
  TenantArn?: string | undefined;

  /**
   * The date and time when the tenant was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The status of sending capability for the tenant:
   *
   * - `ENABLED` – Sending is allowed for the tenant.
   * - `DISABLED` – Sending is prevented for the tenant.
   * - `REINSTATED` – Sending is allowed even if there are active reputation findings.
   *
   * @public
   */
  SendingStatus?: SendingStatus | undefined;
}

/**
 * Information about tenants associated with your account.
 *
 * @public
 */
export interface ListTenantsResponse {
  /**
   * An array that contains basic information about each tenant.
   *
   * @public
   */
  Tenants?: TenantInfo[] | undefined;

  /**
   * A token that indicates that there are additional tenants to list. To view additional tenants, issue another request to `ListTenants`, and pass this token in the `NextToken` parameter.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A request to enable or disable the automatic IP address warm-up feature.
 *
 * @public
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * Enables or disables the automatic warm-up feature for dedicated IP addresses that are associated with your Amazon SES account in the current Amazon Web Services Region. Set to `true` to enable the automatic warm-up feature, or set to `false` to disable it.
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
 * A request to submit new account details.
 *
 * @public
 */
export interface PutAccountDetailsRequest {
  /**
   * The type of email your account will send.
   *
   * @public
   */
  MailType: MailType | undefined;

  /**
   * The URL of your website. This information helps us better understand the type of content that you plan to send.
   *
   * @public
   */
  WebsiteURL: string | undefined;

  /**
   * The language you would prefer to be contacted with.
   *
   * @public
   */
  ContactLanguage?: ContactLanguage | undefined;

  /**
   * A description of the types of email that you plan to send.
   *
   * @deprecated Use case description is optional and deprecated.
   * @public
   */
  UseCaseDescription?: string | undefined;

  /**
   * Additional email addresses that you would like to be notified regarding Amazon SES matters.
   *
   * @public
   */
  AdditionalContactEmailAddresses?: string[] | undefined;

  /**
   * Indicates whether or not your account should have production access in the current Amazon Web Services Region.
   *
   * If the value is `false`, then your account is in the *sandbox*. When your account is in the sandbox, you can only send email to verified identities.
   *
   * If the value is `true`, then your account has production access. When your account has production access, you can send email to any address. The sending quota and maximum sending rate for your account vary based on your specific use case.
   *
   * @public
   */
  ProductionAccessEnabled?: boolean | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutAccountDetailsResponse {}

/**
 * A request to set the pricing plan for your Amazon SES account.
 *
 * @public
 */
export interface PutAccountPricingAttributesRequest {
  /**
   * The pricing plan to apply to your Amazon SES account. For details about each plan, see [Amazon SES Pricing](http://aws.amazon.com/ses/pricing/). Can be one of the following:
   *
   * - `NONE`
   * - `ESSENTIALS`
   * - `PRO`
   * - `ENTERPRISE`
   *
   * @public
   */
  Plan: PricingPlan | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error response if the request fails.
 *
 * @public
 */
export interface PutAccountPricingAttributesResponse {}

/**
 * A request to change the ability of your account to send email.
 *
 * @public
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * Enables or disables your account's ability to send email. Set to `true` to enable email sending, or set to `false` to disable email sending.
   *
   * > **Note:** If Amazon Web Services paused your account's ability to send email, you can't use this operation to resume your account's ability to send email.
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
 * A request to change your account's suppression preferences.
 *
 * @public
 */
export interface PutAccountSuppressionAttributesRequest {
  /**
   * A list that contains the reasons that email addresses will be automatically added to the suppression list for your account. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * An object that contains additional suppression attributes for your account.
   *
   * @public
   */
  ValidationAttributes?: SuppressionValidationAttributes | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutAccountSuppressionAttributesResponse {}

/**
 * A request to submit new account VDM attributes.
 *
 * @public
 */
export interface PutAccountVdmAttributesRequest {
  /**
   * The VDM attributes that you wish to apply to your Amazon SES account.
   *
   * @public
   */
  VdmAttributes: VdmAttributes | undefined;
}

/**
 * @public
 */
export interface PutAccountVdmAttributesResponse {}

/**
 * A request to associate a configuration set with a MailManager archive.
 *
 * @public
 */
export interface PutConfigurationSetArchivingOptionsRequest {
  /**
   * The name of the configuration set to associate with a MailManager archive.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MailManager archive that the Amazon SES API v2 sends email to.
   *
   * @public
   */
  ArchiveArn?: string | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetArchivingOptionsResponse {}

/**
 * A request to associate a configuration set with a dedicated IP pool.
 *
 * @public
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * The name of the configuration set to associate with a dedicated IP pool.
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
   * The name of the dedicated IP pool to associate with the configuration set.
   *
   * @public
   */
  SendingPoolName?: string | undefined;

  /**
   * The maximum amount of time, in seconds, that Amazon SES API v2 will attempt delivery of email. If specified, the value must greater than or equal to 300 seconds (5 minutes) and less than or equal to 50400 seconds (840 minutes).
   *
   * @public
   */
  MaxDeliverySeconds?: number | undefined;
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
   * The name of the configuration set.
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
 * A request to enable or disable the ability of Amazon SES to send emails that use a specific configuration set.
 *
 * @public
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * The name of the configuration set to enable or disable email sending for.
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
 * A request to change the suppression list preferences for a specific configuration set.
 *
 * @public
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  /**
   * The name of the configuration set to change the suppression list preferences for.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The suppression scope for the configuration set. This overrides the tenant or account suppression scope for emails sent using this configuration set. Can be one of the following:
   *
   * - `TENANT` – Use the tenant's suppression list.
   * - `ACCOUNT` – Use the account-level suppression list.
   *
   * @public
   */
  SuppressionScope?: SuppressionListScope | undefined;

  /**
   * A list that contains the reasons that email addresses are automatically added to the suppression list for your account or for a specific tenant. This list can contain any or all of the following:
   *
   * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account or for a specific tenant when a message sent to that address results in a complaint.
   * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account or for a specific tenant when a message sent to that address results in a hard bounce.
   *
   * @public
   */
  SuppressedReasons?: SuppressionListReason[] | undefined;

  /**
   * An object that contains information about the email address suppression preferences for the configuration set in the current Amazon Web Services Region.
   *
   * @public
   */
  ValidationOptions?: SuppressionValidationOptions | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetSuppressionOptionsResponse {}

/**
 * A request to add a custom domain for tracking open and click events to a configuration set.
 *
 * @public
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The domain to use to track open and click events.
   *
   * @public
   */
  CustomRedirectDomain?: string | undefined;

  /**
   * The https policy to use for tracking open and click events. If the value is OPTIONAL or HttpsPolicy is not specified, the open trackers use HTTP and click tracker use the original protocol of the link. If the value is REQUIRE, both open and click tracker uses HTTPS and if the value is REQUIRE_OPEN_ONLY open tracker uses HTTPS and link tracker is same as original protocol of the link.
   *
   * @public
   */
  HttpsPolicy?: HttpsPolicy | undefined;
}

/**
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
 *
 * @public
 */
export interface PutConfigurationSetTrackingOptionsResponse {}

/**
 * A request to add specific VDM settings to a configuration set.
 *
 * @public
 */
export interface PutConfigurationSetVdmOptionsRequest {
  /**
   * The name of the configuration set.
   *
   * @public
   */
  ConfigurationSetName: string | undefined;

  /**
   * The VDM options to apply to the configuration set.
   *
   * @public
   */
  VdmOptions?: VdmOptions | undefined;
}
