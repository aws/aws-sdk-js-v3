import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An object that contains information about your account details.</p>
 */
export interface AccountDetails {
  __type?: "AccountDetails";
  /**
   * <p>The type of email your account is sending. The mail type can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MARKETING</code> – Most of your sending traffic is to keep your
   *                     customers informed of your latest offering.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TRANSACTIONAL</code> – Most of your sending traffic is to
   *                     communicate during a transaction with a customer.</p>
   *             </li>
   *          </ul>
   */
  MailType?: MailType | string;

  /**
   * <p>The URL of your website. This information helps us better understand the type of
   *             content that you plan to send.</p>
   */
  WebsiteURL?: string;

  /**
   * <p>A description of the types of email that you plan to send.</p>
   */
  UseCaseDescription?: string;

  /**
   * <p>Additional email addresses where updates are sent about your account review
   *             process.</p>
   */
  AdditionalContactEmailAddresses?: string[];

  /**
   * <p>The language you would prefer for the case. The contact language can be one of
   *                 <code>ENGLISH</code> or <code>JAPANESE</code>.</p>
   */
  ContactLanguage?: ContactLanguage | string;

  /**
   * <p>Information about the review of the latest details you submitted.</p>
   */
  ReviewDetails?: ReviewDetails;
}

export namespace AccountDetails {
  export const filterSensitiveLog = (obj: AccountDetails): any => ({
    ...obj,
    ...(obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING }),
    ...(obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING }),
    ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is AccountDetails => __isa(o, "AccountDetails");
}

/**
 * <p>The message can't be sent because the account's ability to send email has been
 *             permanently restricted.</p>
 */
export interface AccountSuspendedException extends __SmithyException, $MetadataBearer {
  name: "AccountSuspendedException";
  $fault: "client";
  message?: string;
}

export namespace AccountSuspendedException {
  export const filterSensitiveLog = (obj: AccountSuspendedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountSuspendedException => __isa(o, "AccountSuspendedException");
}

/**
 * <p>The resource specified in your request already exists.</p>
 */
export interface AlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AlreadyExistsException => __isa(o, "AlreadyExistsException");
}

/**
 * <p>The input you provided is invalid.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BadRequestException => __isa(o, "BadRequestException");
}

export enum BehaviorOnMxFailure {
  REJECT_MESSAGE = "REJECT_MESSAGE",
  USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE",
}

/**
 * <p>An object that contains information about a blacklisting event that impacts one of the
 *             dedicated IP addresses that is associated with your account.</p>
 */
export interface BlacklistEntry {
  __type?: "BlacklistEntry";
  /**
   * <p>Additional information about the blacklisting event, as provided by the blacklist
   *             maintainer.</p>
   */
  Description?: string;

  /**
   * <p>The time when the blacklisting event occurred, shown in Unix time format.</p>
   */
  ListingTime?: Date;

  /**
   * <p>The name of the blacklist that the IP address appears on.</p>
   */
  RblName?: string;
}

export namespace BlacklistEntry {
  export const filterSensitiveLog = (obj: BlacklistEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BlacklistEntry => __isa(o, "BlacklistEntry");
}

/**
 * <p>Represents the body of the email message.</p>
 */
export interface Body {
  __type?: "Body";
  /**
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that support HTML. HTML messages can include formatted text, hyperlinks, images,
   *             and more. </p>
   */
  Html?: Content;

  /**
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that don't support HTML, or clients where the recipient has disabled HTML
   *             rendering.</p>
   */
  Text?: Content;
}

export namespace Body {
  export const filterSensitiveLog = (obj: Body): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Body => __isa(o, "Body");
}

/**
 * <p>An object that contains the body of the message. You can specify a template
 *             message.</p>
 */
export interface BulkEmailContent {
  __type?: "BulkEmailContent";
  /**
   * <p>The template to use for the bulk email message.</p>
   */
  Template?: Template;
}

export namespace BulkEmailContent {
  export const filterSensitiveLog = (obj: BulkEmailContent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BulkEmailContent => __isa(o, "BulkEmailContent");
}

export interface BulkEmailEntry {
  __type?: "BulkEmailEntry";
  /**
   * <p>Represents the destination of the message, consisting of To:, CC:, and BCC:
   *             fields.</p>
   *         <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                 local part of a destination email address (the part of the email address that
   *                 precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the domain part of an address (the part after the @ sign)
   *                 contains non-ASCII characters, they must be encoded using Punycode, as described in
   *                     <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p>
   *         </note>
   */
  Destination: Destination | undefined;

  /**
   * <p>The <code>ReplacementEmailContent</code> associated with a
   *             <code>BulkEmailEntry</code>.</p>
   */
  ReplacementEmailContent?: ReplacementEmailContent;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendBulkTemplatedEmail</code> operation. Tags correspond to
   *             characteristics of the email that you define, so that you can publish email sending
   *             events.</p>
   */
  ReplacementTags?: MessageTag[];
}

export namespace BulkEmailEntry {
  export const filterSensitiveLog = (obj: BulkEmailEntry): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BulkEmailEntry => __isa(o, "BulkEmailEntry");
}

/**
 * <p>The result of the <code>SendBulkEmail</code> operation of each specified
 *                 <code>BulkEmailEntry</code>.</p>
 */
export interface BulkEmailEntryResult {
  __type?: "BulkEmailEntryResult";
  /**
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   */
  MessageId?: string;

  /**
   * <p>A description of an error that prevented a message being sent using the
   *                 <code>SendBulkTemplatedEmail</code> operation.</p>
   */
  Error?: string;

  /**
   * <p>The status of a message sent using the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   *         <p>Possible values for this parameter include:</p>
   *         <ul>
   *             <li>
   *                 <p>SUCCESS: Amazon SES accepted the message, and will attempt to deliver it to
   *                     the recipients.</p>
   *             </li>
   *             <li>
   *                 <p>MESSAGE_REJECTED: The message was rejected because it contained a
   *                     virus.</p>
   *             </li>
   *             <li>
   *                 <p>MAIL_FROM_DOMAIN_NOT_VERIFIED: The sender's email address or domain was not
   *                     verified.</p>
   *             </li>
   *             <li>
   *                 <p>CONFIGURATION_SET_DOES_NOT_EXIST: The configuration set you specified does not
   *                     exist.</p>
   *             </li>
   *             <li>
   *                 <p>TEMPLATE_DOES_NOT_EXIST: The template you specified does not exist.</p>
   *             </li>
   *             <li>
   *                 <p>ACCOUNT_SUSPENDED: Your account has been shut down because of issues related
   *                     to your email sending practices.</p>
   *             </li>
   *             <li>
   *                 <p>ACCOUNT_THROTTLED: The number of emails you can send has been reduced because
   *                     your account has exceeded its allocated sending limit.</p>
   *             </li>
   *             <li>
   *                 <p>ACCOUNT_DAILY_QUOTA_EXCEEDED: You have reached or exceeded the maximum number
   *                     of emails you can send from your account in a 24-hour period.</p>
   *             </li>
   *             <li>
   *                 <p>INVALID_SENDING_POOL_NAME: The configuration set you specified refers to an IP
   *                     pool that does not exist.</p>
   *             </li>
   *             <li>
   *                 <p>ACCOUNT_SENDING_PAUSED: Email sending for the Amazon SES account was disabled
   *                     using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html">UpdateAccountSendingEnabled</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>CONFIGURATION_SET_SENDING_PAUSED: Email sending for this configuration set was
   *                     disabled using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html">UpdateConfigurationSetSendingEnabled</a> operation.</p>
   *             </li>
   *             <li>
   *                 <p>INVALID_PARAMETER_VALUE: One or more of the parameters you specified when
   *                     calling this operation was invalid. See the error message for additional
   *                     information.</p>
   *             </li>
   *             <li>
   *                 <p>TRANSIENT_FAILURE: Amazon SES was unable to process your request because of a
   *                     temporary issue.</p>
   *             </li>
   *             <li>
   *                 <p>FAILED: Amazon SES was unable to process your request. See the error message
   *                     for additional information.</p>
   *             </li>
   *          </ul>
   */
  Status?: BulkEmailStatus | string;
}

export namespace BulkEmailEntryResult {
  export const filterSensitiveLog = (obj: BulkEmailEntryResult): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BulkEmailEntryResult => __isa(o, "BulkEmailEntryResult");
}

export enum BulkEmailStatus {
  ACCOUNT_DAILY_QUOTA_EXCEEDED = "ACCOUNT_DAILY_QUOTA_EXCEEDED",
  ACCOUNT_SENDING_PAUSED = "ACCOUNT_SENDING_PAUSED",
  ACCOUNT_SUSPENDED = "ACCOUNT_SUSPENDED",
  ACCOUNT_THROTTLED = "ACCOUNT_THROTTLED",
  CONFIGURATION_SET_NOT_FOUND = "CONFIGURATION_SET_NOT_FOUND",
  CONFIGURATION_SET_SENDING_PAUSED = "CONFIGURATION_SET_SENDING_PAUSED",
  FAILED = "FAILED",
  INVALID_PARAMETER = "INVALID_PARAMETER",
  INVALID_SENDING_POOL_NAME = "INVALID_SENDING_POOL_NAME",
  MAIL_FROM_DOMAIN_NOT_VERIFIED = "MAIL_FROM_DOMAIN_NOT_VERIFIED",
  MESSAGE_REJECTED = "MESSAGE_REJECTED",
  SUCCESS = "SUCCESS",
  TEMPLATE_NOT_FOUND = "TEMPLATE_NOT_FOUND",
  TRANSIENT_FAILURE = "TRANSIENT_FAILURE",
}

/**
 * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
 *             monitor and gain insights on your email sending metrics.</p>
 */
export interface CloudWatchDestination {
  __type?: "CloudWatchDestination";
  /**
   * <p>An array of objects that define the dimensions to use when you send email events to
   *             Amazon CloudWatch.</p>
   */
  DimensionConfigurations: CloudWatchDimensionConfiguration[] | undefined;
}

export namespace CloudWatchDestination {
  export const filterSensitiveLog = (obj: CloudWatchDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudWatchDestination => __isa(o, "CloudWatchDestination");
}

/**
 * <p>An object that defines the dimension configuration to use when you send email events
 *             to Amazon CloudWatch.</p>
 */
export interface CloudWatchDimensionConfiguration {
  __type?: "CloudWatchDimensionConfiguration";
  /**
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the
   *             value of the dimension when you send an email. This value has to meet the following
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
  DefaultDimensionValue: string | undefined;

  /**
   * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to
   *             meet the following criteria:</p>
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
  DimensionName: string | undefined;

  /**
   * <p>The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. If
   *             you want to use the message tags that you specify using an
   *                 <code>X-SES-MESSAGE-TAGS</code> header or a parameter to the <code>SendEmail</code>
   *             or <code>SendRawEmail</code> API, choose <code>messageTag</code>. If you want to use
   *             your own email headers, choose <code>emailHeader</code>. If you want to use link tags,
   *             choose <code>linkTags</code>.</p>
   */
  DimensionValueSource: DimensionValueSource | string | undefined;
}

export namespace CloudWatchDimensionConfiguration {
  export const filterSensitiveLog = (obj: CloudWatchDimensionConfiguration): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudWatchDimensionConfiguration => __isa(o, "CloudWatchDimensionConfiguration");
}

/**
 * <p>The resource is being modified by another operation or thread.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "server";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConcurrentModificationException => __isa(o, "ConcurrentModificationException");
}

/**
 * <p>If there is already an ongoing account details update under review.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ConflictException => __isa(o, "ConflictException");
}

export enum ContactLanguage {
  EN = "EN",
  JA = "JA",
}

/**
 * <p>An object that represents the content of the email, and optionally a character set
 *             specification.</p>
 */
export interface Content {
  __type?: "Content";
  /**
   * <p>The content of the message itself.</p>
   */
  Data: string | undefined;

  /**
   * <p>The character set for the content. Because of the constraints of the SMTP protocol,
   *             Amazon SES uses 7-bit ASCII by default. If the text includes characters outside of the ASCII
   *             range, you have to specify a character set. For example, you could specify
   *                 <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.</p>
   */
  Charset?: string;
}

export namespace Content {
  export const filterSensitiveLog = (obj: Content): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Content => __isa(o, "Content");
}

/**
 * <p>A request to add an event destination to a configuration set.</p>
 */
export interface CreateConfigurationSetEventDestinationRequest {
  __type?: "CreateConfigurationSetEventDestinationRequest";
  /**
   * <p>The name of the configuration set that you want to add an event destination to.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;

  /**
   * <p>A name that identifies the event destination within the configuration set.</p>
   */
  EventDestinationName: string | undefined;
}

export namespace CreateConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationSetEventDestinationRequest =>
    __isa(o, "CreateConfigurationSetEventDestinationRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetEventDestinationResponse {
  __type?: "CreateConfigurationSetEventDestinationResponse";
}

export namespace CreateConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationSetEventDestinationResponse =>
    __isa(o, "CreateConfigurationSetEventDestinationResponse");
}

/**
 * <p>A request to create a configuration set.</p>
 */
export interface CreateConfigurationSetRequest {
  __type?: "CreateConfigurationSetRequest";
  /**
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;
}

export namespace CreateConfigurationSetRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationSetRequest => __isa(o, "CreateConfigurationSetRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetResponse {
  __type?: "CreateConfigurationSetResponse";
}

export namespace CreateConfigurationSetResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateConfigurationSetResponse => __isa(o, "CreateConfigurationSetResponse");
}

/**
 * <p>Represents a request to create a custom verification email template.</p>
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  __type?: "CreateCustomVerificationEmailTemplateRequest";
  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName: string | undefined;
}

export namespace CreateCustomVerificationEmailTemplateRequest {
  export const filterSensitiveLog = (obj: CreateCustomVerificationEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCustomVerificationEmailTemplateRequest =>
    __isa(o, "CreateCustomVerificationEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateCustomVerificationEmailTemplateResponse {
  __type?: "CreateCustomVerificationEmailTemplateResponse";
}

export namespace CreateCustomVerificationEmailTemplateResponse {
  export const filterSensitiveLog = (obj: CreateCustomVerificationEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateCustomVerificationEmailTemplateResponse =>
    __isa(o, "CreateCustomVerificationEmailTemplateResponse");
}

/**
 * <p>A request to create a new dedicated IP pool.</p>
 */
export interface CreateDedicatedIpPoolRequest {
  __type?: "CreateDedicatedIpPoolRequest";
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

export namespace CreateDedicatedIpPoolRequest {
  export const filterSensitiveLog = (obj: CreateDedicatedIpPoolRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDedicatedIpPoolRequest => __isa(o, "CreateDedicatedIpPoolRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateDedicatedIpPoolResponse {
  __type?: "CreateDedicatedIpPoolResponse";
}

export namespace CreateDedicatedIpPoolResponse {
  export const filterSensitiveLog = (obj: CreateDedicatedIpPoolResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDedicatedIpPoolResponse => __isa(o, "CreateDedicatedIpPoolResponse");
}

/**
 * <p>A request to perform a predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will
 *             be handled by various email providers around the world. When you perform a predictive inbox placement test, you
 *             provide a sample message that contains the content that you plan to send to your
 *             customers. We send that message to special email addresses spread across several major
 *             email providers around the world. The test takes about 24 hours to complete. When the
 *             test is complete, you can use the <code>GetDeliverabilityTestReport</code> operation to
 *             view the results of the test.</p>
 */
export interface CreateDeliverabilityTestReportRequest {
  __type?: "CreateDeliverabilityTestReportRequest";
  /**
   * <p>The HTML body of the message that you sent when you performed the predictive inbox placement test.</p>
   */
  Content: EmailContent | undefined;

  /**
   * <p>A unique name that helps you to identify the predictive inbox placement test when you retrieve the
   *             results.</p>
   */
  ReportName?: string;

  /**
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the predictive inbox placement test.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The email address that the predictive inbox placement test email was sent from.</p>
   */
  FromEmailAddress: string | undefined;
}

export namespace CreateDeliverabilityTestReportRequest {
  export const filterSensitiveLog = (obj: CreateDeliverabilityTestReportRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeliverabilityTestReportRequest =>
    __isa(o, "CreateDeliverabilityTestReportRequest");
}

/**
 * <p>Information about the predictive inbox placement test that you created.</p>
 */
export interface CreateDeliverabilityTestReportResponse {
  __type?: "CreateDeliverabilityTestReportResponse";
  /**
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus: DeliverabilityTestStatus | string | undefined;

  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;
}

export namespace CreateDeliverabilityTestReportResponse {
  export const filterSensitiveLog = (obj: CreateDeliverabilityTestReportResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateDeliverabilityTestReportResponse =>
    __isa(o, "CreateDeliverabilityTestReportResponse");
}

/**
 * <p>Represents a request to create a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CreateEmailIdentityPolicyRequest {
  __type?: "CreateEmailIdentityPolicyRequest";
  /**
   * <p>The email identity for which you want to create a policy.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *         <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;
}

export namespace CreateEmailIdentityPolicyRequest {
  export const filterSensitiveLog = (obj: CreateEmailIdentityPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailIdentityPolicyRequest => __isa(o, "CreateEmailIdentityPolicyRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateEmailIdentityPolicyResponse {
  __type?: "CreateEmailIdentityPolicyResponse";
}

export namespace CreateEmailIdentityPolicyResponse {
  export const filterSensitiveLog = (obj: CreateEmailIdentityPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailIdentityPolicyResponse => __isa(o, "CreateEmailIdentityPolicyResponse");
}

/**
 * <p>A request to begin the verification process for an email identity (an email address or
 *             domain).</p>
 */
export interface CreateEmailIdentityRequest {
  __type?: "CreateEmailIdentityRequest";
  /**
   * <p>If your request includes this object, Amazon SES configures the identity to use Bring Your
   *             Own DKIM (BYODKIM) for DKIM authentication purposes, as opposed to the default method,
   *                 <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a>.</p>
   *         <p>You can only specify this object if the email identity is a domain, as opposed to an
   *             address.</p>
   */
  DkimSigningAttributes?: DkimSigningAttributes;

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

export namespace CreateEmailIdentityRequest {
  export const filterSensitiveLog = (obj: CreateEmailIdentityRequest): any => ({
    ...obj,
    ...(obj.DkimSigningAttributes && {
      DkimSigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.DkimSigningAttributes),
    }),
  });
  export const isa = (o: any): o is CreateEmailIdentityRequest => __isa(o, "CreateEmailIdentityRequest");
}

/**
 * <p>If the email identity is a domain, this object contains information about the DKIM
 *             verification status for the domain.</p>
 *         <p>If the email identity is an email address, this object is empty. </p>
 */
export interface CreateEmailIdentityResponse {
  __type?: "CreateEmailIdentityResponse";
  /**
   * <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * <p>An object that contains information about the DKIM attributes for the identity.</p>
   */
  DkimAttributes?: DkimAttributes;

  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: IdentityType | string;
}

export namespace CreateEmailIdentityResponse {
  export const filterSensitiveLog = (obj: CreateEmailIdentityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailIdentityResponse => __isa(o, "CreateEmailIdentityResponse");
}

/**
 * <p>Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface CreateEmailTemplateRequest {
  __type?: "CreateEmailTemplateRequest";
  /**
   * <p>The name of the template you want to create.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

export namespace CreateEmailTemplateRequest {
  export const filterSensitiveLog = (obj: CreateEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailTemplateRequest => __isa(o, "CreateEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateEmailTemplateResponse {
  __type?: "CreateEmailTemplateResponse";
}

export namespace CreateEmailTemplateResponse {
  export const filterSensitiveLog = (obj: CreateEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateEmailTemplateResponse => __isa(o, "CreateEmailTemplateResponse");
}

/**
 * <p>Contains information about a custom verification email template.</p>
 */
export interface CustomVerificationEmailTemplateMetadata {
  __type?: "CustomVerificationEmailTemplateMetadata";
  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;
}

export namespace CustomVerificationEmailTemplateMetadata {
  export const filterSensitiveLog = (obj: CustomVerificationEmailTemplateMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CustomVerificationEmailTemplateMetadata =>
    __isa(o, "CustomVerificationEmailTemplateMetadata");
}

/**
 * <p>An object that contains information about the volume of email sent on each day of the
 *             analysis period.</p>
 */
export interface DailyVolume {
  __type?: "DailyVolume";
  /**
   * <p>An object that contains inbox placement metrics for a specified day in the analysis
   *             period, broken out by the recipient's email provider.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];

  /**
   * <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   */
  StartDate?: Date;

  /**
   * <p>An object that contains inbox placement metrics for a specific day in the analysis
   *             period.</p>
   */
  VolumeStatistics?: VolumeStatistics;
}

export namespace DailyVolume {
  export const filterSensitiveLog = (obj: DailyVolume): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DailyVolume => __isa(o, "DailyVolume");
}

/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES
 *             account.</p>
 *         <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing
 *                 Dedicated IP Addresses</a> in the <i>Amazon SES Developer
 *             Guide</i>.</p>
 */
export interface DedicatedIp {
  __type?: "DedicatedIp";
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
   * <p>An IPv4 address.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The name of the dedicated IP pool that the IP address is associated with.</p>
   */
  PoolName?: string;

  /**
   * <p>Indicates how complete the dedicated IP warm-up process is. When this value equals 1,
   *             the address has completed the warm-up process and is ready for use.</p>
   */
  WarmupPercentage: number | undefined;
}

export namespace DedicatedIp {
  export const filterSensitiveLog = (obj: DedicatedIp): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DedicatedIp => __isa(o, "DedicatedIp");
}

/**
 * <p>A request to delete an event destination from a configuration set.</p>
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  __type?: "DeleteConfigurationSetEventDestinationRequest";
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

export namespace DeleteConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConfigurationSetEventDestinationRequest =>
    __isa(o, "DeleteConfigurationSetEventDestinationRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetEventDestinationResponse {
  __type?: "DeleteConfigurationSetEventDestinationResponse";
}

export namespace DeleteConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConfigurationSetEventDestinationResponse =>
    __isa(o, "DeleteConfigurationSetEventDestinationResponse");
}

/**
 * <p>A request to delete a configuration set.</p>
 */
export interface DeleteConfigurationSetRequest {
  __type?: "DeleteConfigurationSetRequest";
  /**
   * <p>The name of the configuration set that you want to delete.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace DeleteConfigurationSetRequest {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConfigurationSetRequest => __isa(o, "DeleteConfigurationSetRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetResponse {
  __type?: "DeleteConfigurationSetResponse";
}

export namespace DeleteConfigurationSetResponse {
  export const filterSensitiveLog = (obj: DeleteConfigurationSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteConfigurationSetResponse => __isa(o, "DeleteConfigurationSetResponse");
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
  export const filterSensitiveLog = (obj: DeleteCustomVerificationEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCustomVerificationEmailTemplateRequest =>
    __isa(o, "DeleteCustomVerificationEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteCustomVerificationEmailTemplateResponse {
  __type?: "DeleteCustomVerificationEmailTemplateResponse";
}

export namespace DeleteCustomVerificationEmailTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteCustomVerificationEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteCustomVerificationEmailTemplateResponse =>
    __isa(o, "DeleteCustomVerificationEmailTemplateResponse");
}

/**
 * <p>A request to delete a dedicated IP pool.</p>
 */
export interface DeleteDedicatedIpPoolRequest {
  __type?: "DeleteDedicatedIpPoolRequest";
  /**
   * <p>The name of the dedicated IP pool that you want to delete.</p>
   */
  PoolName: string | undefined;
}

export namespace DeleteDedicatedIpPoolRequest {
  export const filterSensitiveLog = (obj: DeleteDedicatedIpPoolRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDedicatedIpPoolRequest => __isa(o, "DeleteDedicatedIpPoolRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteDedicatedIpPoolResponse {
  __type?: "DeleteDedicatedIpPoolResponse";
}

export namespace DeleteDedicatedIpPoolResponse {
  export const filterSensitiveLog = (obj: DeleteDedicatedIpPoolResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteDedicatedIpPoolResponse => __isa(o, "DeleteDedicatedIpPoolResponse");
}

/**
 * <p>Represents a request to delete a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to
 *             use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DeleteEmailIdentityPolicyRequest {
  __type?: "DeleteEmailIdentityPolicyRequest";
  /**
   * <p>The email identity for which you want to delete a policy.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteEmailIdentityPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteEmailIdentityPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailIdentityPolicyRequest => __isa(o, "DeleteEmailIdentityPolicyRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityPolicyResponse {
  __type?: "DeleteEmailIdentityPolicyResponse";
}

export namespace DeleteEmailIdentityPolicyResponse {
  export const filterSensitiveLog = (obj: DeleteEmailIdentityPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailIdentityPolicyResponse => __isa(o, "DeleteEmailIdentityPolicyResponse");
}

/**
 * <p>A request to delete an existing email identity. When you delete an identity, you lose
 *             the ability to send email from that identity. You can restore your ability to send email
 *             by completing the verification process for the identity again.</p>
 */
export interface DeleteEmailIdentityRequest {
  __type?: "DeleteEmailIdentityRequest";
  /**
   * <p>The identity (that is, the email address or domain) that you want to delete.</p>
   */
  EmailIdentity: string | undefined;
}

export namespace DeleteEmailIdentityRequest {
  export const filterSensitiveLog = (obj: DeleteEmailIdentityRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailIdentityRequest => __isa(o, "DeleteEmailIdentityRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityResponse {
  __type?: "DeleteEmailIdentityResponse";
}

export namespace DeleteEmailIdentityResponse {
  export const filterSensitiveLog = (obj: DeleteEmailIdentityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailIdentityResponse => __isa(o, "DeleteEmailIdentityResponse");
}

/**
 * <p>Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteEmailTemplateRequest {
  __type?: "DeleteEmailTemplateRequest";
  /**
   * <p>The name of the template to be deleted.</p>
   */
  TemplateName: string | undefined;
}

export namespace DeleteEmailTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailTemplateRequest => __isa(o, "DeleteEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteEmailTemplateResponse {
  __type?: "DeleteEmailTemplateResponse";
}

export namespace DeleteEmailTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteEmailTemplateResponse => __isa(o, "DeleteEmailTemplateResponse");
}

/**
 * <p>A request to remove an email address from the suppression list for your
 *             account.</p>
 */
export interface DeleteSuppressedDestinationRequest {
  __type?: "DeleteSuppressedDestinationRequest";
  /**
   * <p>The suppressed email destination to remove from the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

export namespace DeleteSuppressedDestinationRequest {
  export const filterSensitiveLog = (obj: DeleteSuppressedDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSuppressedDestinationRequest =>
    __isa(o, "DeleteSuppressedDestinationRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteSuppressedDestinationResponse {
  __type?: "DeleteSuppressedDestinationResponse";
}

export namespace DeleteSuppressedDestinationResponse {
  export const filterSensitiveLog = (obj: DeleteSuppressedDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSuppressedDestinationResponse =>
    __isa(o, "DeleteSuppressedDestinationResponse");
}

export enum DeliverabilityDashboardAccountStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  PENDING_EXPIRATION = "PENDING_EXPIRATION",
}

/**
 * <p>An object that contains metadata related to a predictive inbox placement test.</p>
 */
export interface DeliverabilityTestReport {
  __type?: "DeliverabilityTestReport";
  /**
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus?: DeliverabilityTestStatus | string;

  /**
   * <p>The sender address that you specified for the predictive inbox placement test.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>A name that helps you identify a predictive inbox placement test report.</p>
   */
  ReportName?: string;

  /**
   * <p>The subject line for an email that you submitted in a predictive inbox placement test.</p>
   */
  Subject?: string;

  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId?: string;

  /**
   * <p>The date and time when the predictive inbox placement test was created, in Unix time format.</p>
   */
  CreateDate?: Date;
}

export namespace DeliverabilityTestReport {
  export const filterSensitiveLog = (obj: DeliverabilityTestReport): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeliverabilityTestReport => __isa(o, "DeliverabilityTestReport");
}

export enum DeliverabilityTestStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>Used to associate a configuration set with a dedicated IP pool.</p>
 */
export interface DeliveryOptions {
  __type?: "DeliveryOptions";
  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   */
  SendingPoolName?: string;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy | string;
}

export namespace DeliveryOptions {
  export const filterSensitiveLog = (obj: DeliveryOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeliveryOptions => __isa(o, "DeliveryOptions");
}

/**
 * <p>An object that describes the recipients for an email.</p>
 */
export interface Destination {
  __type?: "Destination";
  /**
   * <p>An array that contains the email addresses of the "To" recipients for the
   *             email.</p>
   */
  ToAddresses?: string[];

  /**
   * <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients
   *             for the email.</p>
   */
  BccAddresses?: string[];

  /**
   * <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for
   *             the email.</p>
   */
  CcAddresses?: string[];
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Destination => __isa(o, "Destination");
}

export enum DimensionValueSource {
  EMAIL_HEADER = "EMAIL_HEADER",
  LINK_TAG = "LINK_TAG",
  MESSAGE_TAG = "MESSAGE_TAG",
}

/**
 * <p>An object that contains information about the DKIM authentication status for an email
 *             identity.</p>
 *         <p>Amazon SES determines the authentication status by searching for specific records in the
 *             DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM
 *             authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration
 *             for your domain. If you provided a public key to perform DKIM authentication, Amazon SES
 *             tries to find a TXT record that uses the selector that you specified. The value of the
 *             TXT record must be a public key that's paired with the private key that you specified in
 *             the process of creating the identity</p>
 */
export interface DkimAttributes {
  __type?: "DkimAttributes";
  /**
   * <p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object
   *             contains a set of unique strings that you use to create a set of CNAME records that you
   *             add to the DNS configuration for your domain. When Amazon SES detects these records in the
   *             DNS configuration for your domain, the DKIM authentication process is complete.</p>
   *         <p>If you configured DKIM authentication for the domain by providing your own
   *             public-private key pair, then this object contains the selector for the public
   *             key.</p>
   *         <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the
   *             appropriate records in the DNS configuration of the domain for up to 72 hours.</p>
   */
  Tokens?: string[];

  /**
   * <p>A string that indicates how DKIM was configured for the identity. There are two
   *             possible values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AWS_SES</code> – Indicates that DKIM was configured for the
   *                     identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EXTERNAL</code> – Indicates that DKIM was configured for the
   *                     identity by using Bring Your Own DKIM (BYODKIM).</p>
   *             </li>
   *          </ul>
   */
  SigningAttributesOrigin?: DkimSigningAttributesOrigin | string;

  /**
   * <p>Describes whether or not Amazon SES has successfully located the DKIM records in the DNS
   *             records for the domain. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet detected the DKIM records in the DNS configuration for the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – The verification process failed. This typically
   *                     occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the DKIM authentication status of the domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – The DKIM verification process hasn't been
   *                     initiated for the domain.</p>
   *             </li>
   *          </ul>
   */
  Status?: DkimStatus | string;

  /**
   * <p>If the value is <code>true</code>, then the messages that you send from the identity
   *             are signed using DKIM. If the value is <code>false</code>, then the messages that you
   *             send from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;
}

export namespace DkimAttributes {
  export const filterSensitiveLog = (obj: DkimAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DkimAttributes => __isa(o, "DkimAttributes");
}

/**
 * <p>An object that contains information about the tokens used for setting up Bring Your
 *             Own DKIM (BYODKIM).</p>
 */
export interface DkimSigningAttributes {
  __type?: "DkimSigningAttributes";
  /**
   * <p>A string that's used to identify a public key in the DNS configuration for a
   *             domain.</p>
   */
  DomainSigningSelector: string | undefined;

  /**
   * <p>A private key that's used to generate a DKIM signature.</p>
   *         <p>The private key must use 1024-bit RSA encryption, and must be encoded using base64
   *             encoding.</p>
   */
  DomainSigningPrivateKey: string | undefined;
}

export namespace DkimSigningAttributes {
  export const filterSensitiveLog = (obj: DkimSigningAttributes): any => ({
    ...obj,
    ...(obj.DomainSigningPrivateKey && { DomainSigningPrivateKey: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is DkimSigningAttributes => __isa(o, "DkimSigningAttributes");
}

export enum DkimSigningAttributesOrigin {
  AWS_SES = "AWS_SES",
  EXTERNAL = "EXTERNAL",
}

export enum DkimStatus {
  FAILED = "FAILED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
}

/**
 * <p>An object that contains the deliverability data for a specific campaign. This data is
 *             available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface DomainDeliverabilityCampaign {
  __type?: "DomainDeliverabilityCampaign";
  /**
   * <p>The number of email messages that were delivered to recipients’ inboxes.</p>
   */
  InboxCount?: number;

  /**
   * <p>The URL of an image that contains a snapshot of the email message that was
   *             sent.</p>
   */
  ImageUrl?: string;

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
   * <p>The IP addresses that were used to send the email message.</p>
   */
  SendingIps?: string[];

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
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   */
  CampaignId?: string;

  /**
   * <p>The major email providers who handled the email message.</p>
   */
  Esps?: string[];

  /**
   * <p>The verified email address that the email message was sent from.</p>
   */
  FromAddress?: string;

  /**
   * <p>The subject line, or title, of the email message.</p>
   */
  Subject?: string;

  /**
   * <p>The last time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  LastSeenDateTime?: Date;

  /**
   * <p>The first time, in Unix time format, when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  FirstSeenDateTime?: Date;

  /**
   * <p>The percentage of email messages that were deleted by recipients, without being opened
   *             first. Due to technical limitations, this value only includes recipients who opened the
   *             message by using an email client that supports images.</p>
   */
  DeleteRate?: number;
}

export namespace DomainDeliverabilityCampaign {
  export const filterSensitiveLog = (obj: DomainDeliverabilityCampaign): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainDeliverabilityCampaign => __isa(o, "DomainDeliverabilityCampaign");
}

/**
 * <p>An object that contains information about the Deliverability dashboard subscription for a
 *             verified domain that you use to send email and currently has an active Deliverability dashboard
 *             subscription. If a Deliverability dashboard subscription is active for a domain, you gain access
 *             to reputation, inbox placement, and other metrics for the domain.</p>
 */
export interface DomainDeliverabilityTrackingOption {
  __type?: "DomainDeliverabilityTrackingOption";
  /**
   * <p>An object that contains information about the inbox placement data settings for the
   *             domain.</p>
   */
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;

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
}

export namespace DomainDeliverabilityTrackingOption {
  export const filterSensitiveLog = (obj: DomainDeliverabilityTrackingOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainDeliverabilityTrackingOption =>
    __isa(o, "DomainDeliverabilityTrackingOption");
}

/**
 * <p>An object that contains inbox placement data for email sent from one of your email
 *             domains to a specific email provider.</p>
 */
export interface DomainIspPlacement {
  __type?: "DomainIspPlacement";
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxPercentage?: number;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamRawCount?: number;

  /**
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamPercentage?: number;
}

export namespace DomainIspPlacement {
  export const filterSensitiveLog = (obj: DomainIspPlacement): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DomainIspPlacement => __isa(o, "DomainIspPlacement");
}

/**
 * <p>An object that defines the entire content of the email, including the message headers
 *             and the body content. You can create a simple email message, in which you specify the
 *             subject and the text and HTML versions of the message body. You can also create raw
 *             messages, in which you specify a complete MIME-formatted message. Raw messages can
 *             include attachments and custom headers.</p>
 */
export interface EmailContent {
  __type?: "EmailContent";
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
   *                 <p>If you include attachments, they must be in a file format that the Amazon SES API v2
   *                     supports.
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
   * <p>The simple email message. The message consists of a subject and a message body.</p>
   */
  Simple?: Message;

  /**
   * <p>The template to use for the email message.</p>
   */
  Template?: Template;
}

export namespace EmailContent {
  export const filterSensitiveLog = (obj: EmailContent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailContent => __isa(o, "EmailContent");
}

/**
 * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
 *             part.</p>
 */
export interface EmailTemplateContent {
  __type?: "EmailTemplateContent";
  /**
   * <p>The email body that will be visible to recipients whose email clients do not display
   *             HTML.</p>
   */
  Text?: string;

  /**
   * <p>The subject line of the email.</p>
   */
  Subject?: string;

  /**
   * <p>The HTML body of the email.</p>
   */
  Html?: string;
}

export namespace EmailTemplateContent {
  export const filterSensitiveLog = (obj: EmailTemplateContent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailTemplateContent => __isa(o, "EmailTemplateContent");
}

/**
 * <p>Contains information about an email template.</p>
 */
export interface EmailTemplateMetadata {
  __type?: "EmailTemplateMetadata";
  /**
   * <p>The name of the template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace EmailTemplateMetadata {
  export const filterSensitiveLog = (obj: EmailTemplateMetadata): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EmailTemplateMetadata => __isa(o, "EmailTemplateMetadata");
}

/**
 * <p>In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, complaints and delivery delays. <i>Event destinations</i> are places that
 *             you can send information about these events to. For example, you can send event data to
 *             Amazon SNS to receive notifications when you receive bounces or complaints, or you can use
 *             Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 */
export interface EventDestination {
  __type?: "EventDestination";
  /**
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;

  /**
   * <p>The types of events that Amazon SES sends to the specified event destinations.</p>
   */
  MatchingEventTypes: (EventType | string)[] | undefined;

  /**
   * <p>A name that identifies the event destination.</p>
   */
  Name: string | undefined;

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
}

export namespace EventDestination {
  export const filterSensitiveLog = (obj: EventDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventDestination => __isa(o, "EventDestination");
}

/**
 * <p>An object that defines the event destination. Specifically, it defines which services
 *             receive events from emails sent using the configuration set that the event destination
 *             is associated with. Also defines the types of events that are sent to the event
 *             destination.</p>
 */
export interface EventDestinationDefinition {
  __type?: "EventDestinationDefinition";
  /**
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;

  /**
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *         <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

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
   * <p>An array that specifies which events the Amazon SES API v2 should send to the destinations in
   *             this <code>EventDestinationDefinition</code>.</p>
   */
  MatchingEventTypes?: (EventType | string)[];

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;
}

export namespace EventDestinationDefinition {
  export const filterSensitiveLog = (obj: EventDestinationDefinition): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EventDestinationDefinition => __isa(o, "EventDestinationDefinition");
}

export enum EventType {
  BOUNCE = "BOUNCE",
  CLICK = "CLICK",
  COMPLAINT = "COMPLAINT",
  DELIVERY = "DELIVERY",
  DELIVERY_DELAY = "DELIVERY_DELAY",
  OPEN = "OPEN",
  REJECT = "REJECT",
  RENDERING_FAILURE = "RENDERING_FAILURE",
  SEND = "SEND",
}

/**
 * <p>A request to obtain information about the email-sending capabilities of your Amazon SES
 *             account.</p>
 */
export interface GetAccountRequest {
  __type?: "GetAccountRequest";
}

export namespace GetAccountRequest {
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetAccountRequest => __isa(o, "GetAccountRequest");
}

/**
 * <p>A list of details about the email-sending capabilities of your Amazon SES account in the
 *             current AWS Region.</p>
 */
export interface GetAccountResponse {
  __type?: "GetAccountResponse";
  /**
   * <p>An object that contains information about the per-day and per-second sending limits
   *             for your Amazon SES account in the current AWS Region.</p>
   */
  SendQuota?: SendQuota;

  /**
   * <p>Indicates whether or not email sending is enabled for your Amazon SES account in the
   *             current AWS Region.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>An object that contains information about the email address suppression preferences
   *             for your account in the current AWS Region.</p>
   */
  SuppressionAttributes?: SuppressionAttributes;

  /**
   * <p>An object that defines your account details.</p>
   */
  Details?: AccountDetails;

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

  /**
   * <p>The reputation status of your Amazon SES account. The status can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>HEALTHY</code> – There are no reputation-related issues that
   *                     currently impact your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROBATION</code> – We've identified potential issues with your
   *                     Amazon SES account. We're placing your account under review while you work on
   *                     correcting these issues.</p>
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
   * <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP
   *             addresses that are associated with your account.</p>
   */
  DedicatedIpAutoWarmupEnabled?: boolean;
}

export namespace GetAccountResponse {
  export const filterSensitiveLog = (obj: GetAccountResponse): any => ({
    ...obj,
    ...(obj.Details && { Details: AccountDetails.filterSensitiveLog(obj.Details) }),
  });
  export const isa = (o: any): o is GetAccountResponse => __isa(o, "GetAccountResponse");
}

/**
 * <p>A request to retrieve a list of the blacklists that your dedicated IP addresses appear
 *             on.</p>
 */
export interface GetBlacklistReportsRequest {
  __type?: "GetBlacklistReportsRequest";
  /**
   * <p>A list of IP addresses that you want to retrieve blacklist information about. You can
   *             only specify the dedicated IP addresses that you use to send email using Amazon SES or
   *             Amazon Pinpoint.</p>
   */
  BlacklistItemNames: string[] | undefined;
}

export namespace GetBlacklistReportsRequest {
  export const filterSensitiveLog = (obj: GetBlacklistReportsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBlacklistReportsRequest => __isa(o, "GetBlacklistReportsRequest");
}

/**
 * <p>An object that contains information about blacklist events.</p>
 */
export interface GetBlacklistReportsResponse {
  __type?: "GetBlacklistReportsResponse";
  /**
   * <p>An object that contains information about a blacklist that one of your dedicated IP
   *             addresses appears on.</p>
   */
  BlacklistReport: { [key: string]: BlacklistEntry[] } | undefined;
}

export namespace GetBlacklistReportsResponse {
  export const filterSensitiveLog = (obj: GetBlacklistReportsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetBlacklistReportsResponse => __isa(o, "GetBlacklistReportsResponse");
}

/**
 * <p>A request to obtain information about the event destinations for a configuration
 *             set.</p>
 */
export interface GetConfigurationSetEventDestinationsRequest {
  __type?: "GetConfigurationSetEventDestinationsRequest";
  /**
   * <p>The name of the configuration set that contains the event destination.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetEventDestinationsRequest {
  export const filterSensitiveLog = (obj: GetConfigurationSetEventDestinationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConfigurationSetEventDestinationsRequest =>
    __isa(o, "GetConfigurationSetEventDestinationsRequest");
}

/**
 * <p>Information about an event destination for a configuration set.</p>
 */
export interface GetConfigurationSetEventDestinationsResponse {
  __type?: "GetConfigurationSetEventDestinationsResponse";
  /**
   * <p>An array that includes all of the events destinations that have been configured for
   *             the configuration set.</p>
   */
  EventDestinations?: EventDestination[];
}

export namespace GetConfigurationSetEventDestinationsResponse {
  export const filterSensitiveLog = (obj: GetConfigurationSetEventDestinationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConfigurationSetEventDestinationsResponse =>
    __isa(o, "GetConfigurationSetEventDestinationsResponse");
}

/**
 * <p>A request to obtain information about a configuration set.</p>
 */
export interface GetConfigurationSetRequest {
  __type?: "GetConfigurationSetRequest";
  /**
   * <p>The name of the configuration set that you want to obtain more information
   *             about.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace GetConfigurationSetRequest {
  export const filterSensitiveLog = (obj: GetConfigurationSetRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConfigurationSetRequest => __isa(o, "GetConfigurationSetRequest");
}

/**
 * <p>Information about a configuration set.</p>
 */
export interface GetConfigurationSetResponse {
  __type?: "GetConfigurationSetResponse";
  /**
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;
}

export namespace GetConfigurationSetResponse {
  export const filterSensitiveLog = (obj: GetConfigurationSetResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetConfigurationSetResponse => __isa(o, "GetConfigurationSetResponse");
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
  export const filterSensitiveLog = (obj: GetCustomVerificationEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCustomVerificationEmailTemplateRequest =>
    __isa(o, "GetCustomVerificationEmailTemplateRequest");
}

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface GetCustomVerificationEmailTemplateResponse {
  __type?: "GetCustomVerificationEmailTemplateResponse";
  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The content of the custom verification email.</p>
   */
  TemplateContent?: string;

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
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;
}

export namespace GetCustomVerificationEmailTemplateResponse {
  export const filterSensitiveLog = (obj: GetCustomVerificationEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetCustomVerificationEmailTemplateResponse =>
    __isa(o, "GetCustomVerificationEmailTemplateResponse");
}

/**
 * <p>A request to obtain more information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpRequest {
  __type?: "GetDedicatedIpRequest";
  /**
   * <p>The IP address that you want to obtain more information about. The value you specify
   *             has to be a dedicated IP address that's assocaited with your AWS account.</p>
   */
  Ip: string | undefined;
}

export namespace GetDedicatedIpRequest {
  export const filterSensitiveLog = (obj: GetDedicatedIpRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDedicatedIpRequest => __isa(o, "GetDedicatedIpRequest");
}

/**
 * <p>Information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpResponse {
  __type?: "GetDedicatedIpResponse";
  /**
   * <p>An object that contains information about a dedicated IP address.</p>
   */
  DedicatedIp?: DedicatedIp;
}

export namespace GetDedicatedIpResponse {
  export const filterSensitiveLog = (obj: GetDedicatedIpResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDedicatedIpResponse => __isa(o, "GetDedicatedIpResponse");
}

/**
 * <p>A request to obtain more information about dedicated IP pools.</p>
 */
export interface GetDedicatedIpsRequest {
  __type?: "GetDedicatedIpsRequest";
  /**
   * <p>The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;

  /**
   * <p>A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the
   *             position of the dedicated IP pool in the list of IP pools.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the IP pool that the dedicated IP address is associated with.</p>
   */
  PoolName?: string;
}

export namespace GetDedicatedIpsRequest {
  export const filterSensitiveLog = (obj: GetDedicatedIpsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDedicatedIpsRequest => __isa(o, "GetDedicatedIpsRequest");
}

/**
 * <p>Information about the dedicated IP addresses that are associated with your AWS
 *             account.</p>
 */
export interface GetDedicatedIpsResponse {
  __type?: "GetDedicatedIpsResponse";
  /**
   * <p>A token that indicates that there are additional dedicated IP addresses to list. To
   *             view additional addresses, issue another request to <code>GetDedicatedIps</code>,
   *             passing this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of dedicated IP addresses that are associated with your AWS account.</p>
   */
  DedicatedIps?: DedicatedIp[];
}

export namespace GetDedicatedIpsResponse {
  export const filterSensitiveLog = (obj: GetDedicatedIpsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDedicatedIpsResponse => __isa(o, "GetDedicatedIpsResponse");
}

/**
 * <p>Retrieve information about the status of the Deliverability dashboard for your AWS account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface GetDeliverabilityDashboardOptionsRequest {
  __type?: "GetDeliverabilityDashboardOptionsRequest";
}

export namespace GetDeliverabilityDashboardOptionsRequest {
  export const filterSensitiveLog = (obj: GetDeliverabilityDashboardOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeliverabilityDashboardOptionsRequest =>
    __isa(o, "GetDeliverabilityDashboardOptionsRequest");
}

/**
 * <p>An object that shows the status of the Deliverability dashboard.</p>
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  __type?: "GetDeliverabilityDashboardOptionsResponse";
  /**
   * <p>The date, in Unix time format, when your current subscription to the Deliverability dashboard
   *             is scheduled to expire, if your subscription is scheduled to expire at the end of the
   *             current calendar month. This value is null if you have an active subscription that isn’t
   *             due to expire at the end of the month.</p>
   */
  SubscriptionExpiryDate?: Date;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that's scheduled to expire at the
   *             end of the current calendar month.</p>
   */
  PendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * <p>Specifies whether the Deliverability dashboard is enabled. If this value is <code>true</code>,
   *             the dashboard is enabled.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at
   *             the end of the current calendar month.</p>
   */
  ActiveSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * <p>The current status of your Deliverability dashboard subscription. If this value is
   *                 <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end
   *             of the current calendar month.</p>
   */
  AccountStatus?: DeliverabilityDashboardAccountStatus | string;
}

export namespace GetDeliverabilityDashboardOptionsResponse {
  export const filterSensitiveLog = (obj: GetDeliverabilityDashboardOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeliverabilityDashboardOptionsResponse =>
    __isa(o, "GetDeliverabilityDashboardOptionsResponse");
}

/**
 * <p>A request to retrieve the results of a predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportRequest {
  __type?: "GetDeliverabilityTestReportRequest";
  /**
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;
}

export namespace GetDeliverabilityTestReportRequest {
  export const filterSensitiveLog = (obj: GetDeliverabilityTestReportRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeliverabilityTestReportRequest =>
    __isa(o, "GetDeliverabilityTestReportRequest");
}

/**
 * <p>The results of the predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportResponse {
  __type?: "GetDeliverabilityTestReportResponse";
  /**
   * <p>An object that describes how the test email was handled by several email providers,
   *             including Gmail, Hotmail, Yahoo, AOL, and others.</p>
   */
  IspPlacements: IspPlacement[] | undefined;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the predictive inbox placement test.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An object that specifies how many test messages that were sent during the predictive inbox placement test were
   *             delivered to recipients' inboxes, how many were sent to recipients' spam folders, and
   *             how many weren't delivered.</p>
   */
  OverallPlacement: PlacementStatistics | undefined;

  /**
   * <p>An object that contains the message that you sent when you performed this
   *             predictive inbox placement test.</p>
   */
  Message?: string;

  /**
   * <p>An object that contains the results of the predictive inbox placement test.</p>
   */
  DeliverabilityTestReport: DeliverabilityTestReport | undefined;
}

export namespace GetDeliverabilityTestReportResponse {
  export const filterSensitiveLog = (obj: GetDeliverabilityTestReportResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDeliverabilityTestReportResponse =>
    __isa(o, "GetDeliverabilityTestReportResponse");
}

/**
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface GetDomainDeliverabilityCampaignRequest {
  __type?: "GetDomainDeliverabilityCampaignRequest";
  /**
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   */
  CampaignId: string | undefined;
}

export namespace GetDomainDeliverabilityCampaignRequest {
  export const filterSensitiveLog = (obj: GetDomainDeliverabilityCampaignRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainDeliverabilityCampaignRequest =>
    __isa(o, "GetDomainDeliverabilityCampaignRequest");
}

/**
 * <p>An object that contains all the deliverability data for a specific campaign. This data
 *             is available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
 */
export interface GetDomainDeliverabilityCampaignResponse {
  __type?: "GetDomainDeliverabilityCampaignResponse";
  /**
   * <p>An object that contains the deliverability data for the campaign.</p>
   */
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign | undefined;
}

export namespace GetDomainDeliverabilityCampaignResponse {
  export const filterSensitiveLog = (obj: GetDomainDeliverabilityCampaignResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainDeliverabilityCampaignResponse =>
    __isa(o, "GetDomainDeliverabilityCampaignResponse");
}

/**
 * <p>A request to obtain deliverability metrics for a domain.</p>
 */
export interface GetDomainStatisticsReportRequest {
  __type?: "GetDomainStatisticsReportRequest";
  /**
   * <p>The domain that you want to obtain deliverability metrics for.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The last day (in Unix time) that you want to obtain domain deliverability metrics for.
   *             The <code>EndDate</code> that you specify has to be less than or equal to 30 days after
   *             the <code>StartDate</code>.</p>
   */
  EndDate: Date | undefined;

  /**
   * <p>The first day (in Unix time) that you want to obtain domain deliverability metrics
   *             for.</p>
   */
  StartDate: Date | undefined;
}

export namespace GetDomainStatisticsReportRequest {
  export const filterSensitiveLog = (obj: GetDomainStatisticsReportRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainStatisticsReportRequest => __isa(o, "GetDomainStatisticsReportRequest");
}

/**
 * <p>An object that includes statistics that are related to the domain that you
 *             specified.</p>
 */
export interface GetDomainStatisticsReportResponse {
  __type?: "GetDomainStatisticsReportResponse";
  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. This
   *             object contains data for each day, starting on the <code>StartDate</code> and ending on
   *             the <code>EndDate</code>.</p>
   */
  DailyVolumes: DailyVolume[] | undefined;

  /**
   * <p>An object that contains deliverability metrics for the domain that you specified. The
   *             data in this object is a summary of all of the data that was collected from the
   *                 <code>StartDate</code> to the <code>EndDate</code>.</p>
   */
  OverallVolume: OverallVolume | undefined;
}

export namespace GetDomainStatisticsReportResponse {
  export const filterSensitiveLog = (obj: GetDomainStatisticsReportResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetDomainStatisticsReportResponse => __isa(o, "GetDomainStatisticsReportResponse");
}

/**
 * <p>A request to return the policies of an email identity.</p>
 */
export interface GetEmailIdentityPoliciesRequest {
  __type?: "GetEmailIdentityPoliciesRequest";
  /**
   * <p>The email identity that you want to retrieve policies for.</p>
   */
  EmailIdentity: string | undefined;
}

export namespace GetEmailIdentityPoliciesRequest {
  export const filterSensitiveLog = (obj: GetEmailIdentityPoliciesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailIdentityPoliciesRequest => __isa(o, "GetEmailIdentityPoliciesRequest");
}

/**
 * <p>Identity policies associated with email identity.</p>
 */
export interface GetEmailIdentityPoliciesResponse {
  __type?: "GetEmailIdentityPoliciesResponse";
  /**
   * <p>A map of policy names to policies.</p>
   */
  Policies?: { [key: string]: string };
}

export namespace GetEmailIdentityPoliciesResponse {
  export const filterSensitiveLog = (obj: GetEmailIdentityPoliciesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailIdentityPoliciesResponse => __isa(o, "GetEmailIdentityPoliciesResponse");
}

/**
 * <p>A request to return details about an email identity.</p>
 */
export interface GetEmailIdentityRequest {
  __type?: "GetEmailIdentityRequest";
  /**
   * <p>The email identity that you want to retrieve details for.</p>
   */
  EmailIdentity: string | undefined;
}

export namespace GetEmailIdentityRequest {
  export const filterSensitiveLog = (obj: GetEmailIdentityRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailIdentityRequest => __isa(o, "GetEmailIdentityRequest");
}

/**
 * <p>Details about an email identity.</p>
 */
export interface GetEmailIdentityResponse {
  __type?: "GetEmailIdentityResponse";
  /**
   * <p>The email identity type.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>An object that contains information about the Mail-From attributes for the email
   *             identity.</p>
   */
  MailFromAttributes?: MailFromAttributes;

  /**
   * <p>The feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  FeedbackForwardingStatus?: boolean;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the email identity.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A map of policy names to policies.</p>
   */
  Policies?: { [key: string]: string };

  /**
   * <p>An object that contains information about the DKIM attributes for the identity.</p>
   */
  DkimAttributes?: DkimAttributes;

  /**
   * <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;
}

export namespace GetEmailIdentityResponse {
  export const filterSensitiveLog = (obj: GetEmailIdentityResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailIdentityResponse => __isa(o, "GetEmailIdentityResponse");
}

/**
 * <p>Represents a request to display the template object (which includes the subject line,
 *             HTML part and text part) for the template you specify.</p>
 */
export interface GetEmailTemplateRequest {
  __type?: "GetEmailTemplateRequest";
  /**
   * <p>The name of the template you want to retrieve.</p>
   */
  TemplateName: string | undefined;
}

export namespace GetEmailTemplateRequest {
  export const filterSensitiveLog = (obj: GetEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailTemplateRequest => __isa(o, "GetEmailTemplateRequest");
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface GetEmailTemplateResponse {
  __type?: "GetEmailTemplateResponse";
  /**
   * <p>The name of the template you want to retrieve.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

export namespace GetEmailTemplateResponse {
  export const filterSensitiveLog = (obj: GetEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetEmailTemplateResponse => __isa(o, "GetEmailTemplateResponse");
}

/**
 * <p>A request to retrieve information about an email address that's on the suppression
 *             list for your account.</p>
 */
export interface GetSuppressedDestinationRequest {
  __type?: "GetSuppressedDestinationRequest";
  /**
   * <p>The email address that's on the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

export namespace GetSuppressedDestinationRequest {
  export const filterSensitiveLog = (obj: GetSuppressedDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSuppressedDestinationRequest => __isa(o, "GetSuppressedDestinationRequest");
}

/**
 * <p>Information about the suppressed email address.</p>
 */
export interface GetSuppressedDestinationResponse {
  __type?: "GetSuppressedDestinationResponse";
  /**
   * <p>An object containing information about the suppressed email address.</p>
   */
  SuppressedDestination: SuppressedDestination | undefined;
}

export namespace GetSuppressedDestinationResponse {
  export const filterSensitiveLog = (obj: GetSuppressedDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetSuppressedDestinationResponse => __isa(o, "GetSuppressedDestinationResponse");
}

/**
 * <p>Information about an email identity.</p>
 */
export interface IdentityInfo {
  __type?: "IdentityInfo";
  /**
   * <p>Indicates whether or not you can send email from the identity.</p>
   *         <p>An <i>identity</i> is an email address or domain that you send email
   *             from. Before you can send email from an identity, you have to demostrate that you own
   *             the identity, and that you authorize Amazon SES to send email from that identity.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>The address or domain of the identity.</p>
   */
  IdentityName?: string;

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
}

export namespace IdentityInfo {
  export const filterSensitiveLog = (obj: IdentityInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IdentityInfo => __isa(o, "IdentityInfo");
}

export enum IdentityType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  MANAGED_DOMAIN = "MANAGED_DOMAIN",
}

/**
 * <p>An object that contains information about the inbox placement data settings for a
 *             verified domain that’s associated with your AWS account. This data is available only
 *             if you enabled the Deliverability dashboard for the domain.</p>
 */
export interface InboxPlacementTrackingOption {
  __type?: "InboxPlacementTrackingOption";
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

export namespace InboxPlacementTrackingOption {
  export const filterSensitiveLog = (obj: InboxPlacementTrackingOption): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InboxPlacementTrackingOption => __isa(o, "InboxPlacementTrackingOption");
}

/**
 * <p>The specified request includes an invalid or expired token.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  message?: string;
}

export namespace InvalidNextTokenException {
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidNextTokenException => __isa(o, "InvalidNextTokenException");
}

/**
 * <p>An object that describes how email sent during the predictive inbox placement test was handled by a certain
 *             email provider.</p>
 */
export interface IspPlacement {
  __type?: "IspPlacement";
  /**
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * <p>An object that contains inbox placement metrics for a specific email provider.</p>
   */
  PlacementStatistics?: PlacementStatistics;
}

export namespace IspPlacement {
  export const filterSensitiveLog = (obj: IspPlacement): any => ({
    ...obj,
  });
  export const isa = (o: any): o is IspPlacement => __isa(o, "IspPlacement");
}

/**
 * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
 *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 */
export interface KinesisFirehoseDestination {
  __type?: "KinesisFirehoseDestination";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email
   *             events to the Amazon Kinesis Data Firehose stream.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email
   *             events to.</p>
   */
  DeliveryStreamArn: string | undefined;
}

export namespace KinesisFirehoseDestination {
  export const filterSensitiveLog = (obj: KinesisFirehoseDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is KinesisFirehoseDestination => __isa(o, "KinesisFirehoseDestination");
}

/**
 * <p>There are too many instances of the specified resource type.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

/**
 * <p>A request to obtain a list of configuration sets for your Amazon SES account in the current
 *             AWS Region.</p>
 */
export interface ListConfigurationSetsRequest {
  __type?: "ListConfigurationSetsRequest";
  /**
   * <p>The number of results to show in a single call to <code>ListConfigurationSets</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;

  /**
   * <p>A token returned from a previous call to <code>ListConfigurationSets</code> to
   *             indicate the position in the list of configuration sets.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationSetsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationSetsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationSetsRequest => __isa(o, "ListConfigurationSetsRequest");
}

/**
 * <p>A list of configuration sets in your Amazon SES account in the current AWS Region.</p>
 */
export interface ListConfigurationSetsResponse {
  __type?: "ListConfigurationSetsResponse";
  /**
   * <p>An array that contains all of the configuration sets in your Amazon SES account in the
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

export namespace ListConfigurationSetsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationSetsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListConfigurationSetsResponse => __isa(o, "ListConfigurationSetsResponse");
}

/**
 * <p>Represents a request to list the existing custom verification email templates for your
 *             account.</p>
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  __type?: "ListCustomVerificationEmailTemplatesRequest";
  /**
   * <p>The number of results to show in a single call to
   *                 <code>ListCustomVerificationEmailTemplates</code>. If the number of results is
   *             larger than the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *         <p>The value you specify has to be at least 1, and can be no more than 50.</p>
   */
  PageSize?: number;

  /**
   * <p>A token returned from a previous call to
   *                 <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the
   *             list of custom verification email templates.</p>
   */
  NextToken?: string;
}

export namespace ListCustomVerificationEmailTemplatesRequest {
  export const filterSensitiveLog = (obj: ListCustomVerificationEmailTemplatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCustomVerificationEmailTemplatesRequest =>
    __isa(o, "ListCustomVerificationEmailTemplatesRequest");
}

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface ListCustomVerificationEmailTemplatesResponse {
  __type?: "ListCustomVerificationEmailTemplatesResponse";
  /**
   * <p>A list of the custom verification email templates that exist in your account.</p>
   */
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];

  /**
   * <p>A token indicating that there are additional custom verification email templates
   *             available to be listed. Pass this token to a subsequent call to
   *                 <code>ListCustomVerificationEmailTemplates</code> to retrieve the next 50 custom
   *             verification email templates.</p>
   */
  NextToken?: string;
}

export namespace ListCustomVerificationEmailTemplatesResponse {
  export const filterSensitiveLog = (obj: ListCustomVerificationEmailTemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCustomVerificationEmailTemplatesResponse =>
    __isa(o, "ListCustomVerificationEmailTemplatesResponse");
}

/**
 * <p>A request to obtain a list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsRequest {
  __type?: "ListDedicatedIpPoolsRequest";
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

export namespace ListDedicatedIpPoolsRequest {
  export const filterSensitiveLog = (obj: ListDedicatedIpPoolsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDedicatedIpPoolsRequest => __isa(o, "ListDedicatedIpPoolsRequest");
}

/**
 * <p>A list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsResponse {
  __type?: "ListDedicatedIpPoolsResponse";
  /**
   * <p>A token that indicates that there are additional IP pools to list. To view additional
   *             IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token
   *             in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of all of the dedicated IP pools that are associated with your AWS account in
   *             the current Region.</p>
   */
  DedicatedIpPools?: string[];
}

export namespace ListDedicatedIpPoolsResponse {
  export const filterSensitiveLog = (obj: ListDedicatedIpPoolsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDedicatedIpPoolsResponse => __isa(o, "ListDedicatedIpPoolsResponse");
}

/**
 * <p>A request to list all of the predictive inbox placement tests that you've performed.</p>
 */
export interface ListDeliverabilityTestReportsRequest {
  __type?: "ListDeliverabilityTestReportsRequest";
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

export namespace ListDeliverabilityTestReportsRequest {
  export const filterSensitiveLog = (obj: ListDeliverabilityTestReportsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDeliverabilityTestReportsRequest =>
    __isa(o, "ListDeliverabilityTestReportsRequest");
}

/**
 * <p>A list of the predictive inbox placement test reports that are available for your account, regardless of
 *             whether or not those tests are complete.</p>
 */
export interface ListDeliverabilityTestReportsResponse {
  __type?: "ListDeliverabilityTestReportsResponse";
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

export namespace ListDeliverabilityTestReportsResponse {
  export const filterSensitiveLog = (obj: ListDeliverabilityTestReportsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDeliverabilityTestReportsResponse =>
    __isa(o, "ListDeliverabilityTestReportsResponse");
}

/**
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard.</p>
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  __type?: "ListDomainDeliverabilityCampaignsRequest";
  /**
   * <p>The maximum number of results to include in response to a single call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results
   *             is larger than the number that you specify in this parameter, the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   */
  PageSize?: number;

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
   * <p>The first day, in Unix time format, that you want to obtain deliverability data
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of a campaign in the list of campaigns.</p>
   */
  NextToken?: string;
}

export namespace ListDomainDeliverabilityCampaignsRequest {
  export const filterSensitiveLog = (obj: ListDomainDeliverabilityCampaignsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainDeliverabilityCampaignsRequest =>
    __isa(o, "ListDomainDeliverabilityCampaignsRequest");
}

/**
 * <p>An array of objects that provide deliverability data for all the campaigns that used a
 *             specific domain to send email during a specified time range. This data is available for
 *             a domain only if you enabled the Deliverability dashboard for the domain.</p>
 */
export interface ListDomainDeliverabilityCampaignsResponse {
  __type?: "ListDomainDeliverabilityCampaignsResponse";
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

export namespace ListDomainDeliverabilityCampaignsResponse {
  export const filterSensitiveLog = (obj: ListDomainDeliverabilityCampaignsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListDomainDeliverabilityCampaignsResponse =>
    __isa(o, "ListDomainDeliverabilityCampaignsResponse");
}

/**
 * <p>A request to list all of the email identities associated with your AWS account. This
 *             list includes identities that you've already verified, identities that are unverified,
 *             and identities that were verified in the past, but are no longer verified.</p>
 */
export interface ListEmailIdentitiesRequest {
  __type?: "ListEmailIdentitiesRequest";
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

export namespace ListEmailIdentitiesRequest {
  export const filterSensitiveLog = (obj: ListEmailIdentitiesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEmailIdentitiesRequest => __isa(o, "ListEmailIdentitiesRequest");
}

/**
 * <p>A list of all of the identities that you've attempted to verify, regardless of whether
 *             or not those identities were successfully verified.</p>
 */
export interface ListEmailIdentitiesResponse {
  __type?: "ListEmailIdentitiesResponse";
  /**
   * <p>An array that includes all of the email identities associated with your AWS
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

export namespace ListEmailIdentitiesResponse {
  export const filterSensitiveLog = (obj: ListEmailIdentitiesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEmailIdentitiesResponse => __isa(o, "ListEmailIdentitiesResponse");
}

/**
 * <p>Represents a request to list the email templates present in your Amazon SES account in the
 *             current AWS Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListEmailTemplatesRequest {
  __type?: "ListEmailTemplatesRequest";
  /**
   * <p>A token returned from a previous call to <code>ListEmailTemplates</code> to indicate
   *             the position in the list of email templates.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to <code>ListEmailTemplates</code>. If the number of
   *             results is larger than the number you specified in this parameter, then the response
   *             includes a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   *         <p>The value you specify has to be at least 1, and can be no more than 10.</p>
   */
  PageSize?: number;
}

export namespace ListEmailTemplatesRequest {
  export const filterSensitiveLog = (obj: ListEmailTemplatesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEmailTemplatesRequest => __isa(o, "ListEmailTemplatesRequest");
}

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface ListEmailTemplatesResponse {
  __type?: "ListEmailTemplatesResponse";
  /**
   * <p>A token indicating that there are additional email templates available to be listed.
   *             Pass this token to a subsequent <code>ListEmailTemplates</code> call to retrieve the
   *             next 10 email templates.</p>
   */
  NextToken?: string;

  /**
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES
   *             account.</p>
   */
  TemplatesMetadata?: EmailTemplateMetadata[];
}

export namespace ListEmailTemplatesResponse {
  export const filterSensitiveLog = (obj: ListEmailTemplatesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListEmailTemplatesResponse => __isa(o, "ListEmailTemplatesResponse");
}

/**
 * <p>A request to obtain a list of email destinations that are on the suppression list for
 *             your account.</p>
 */
export interface ListSuppressedDestinationsRequest {
  __type?: "ListSuppressedDestinationsRequest";
  /**
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list before a specific date. The date that you specify
   *             should be in Unix time format.</p>
   */
  EndDate?: Date;

  /**
   * <p>A token returned from a previous call to <code>ListSuppressedDestinations</code> to
   *             indicate the position in the list of suppressed email addresses.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to
   *                 <code>ListSuppressedDestinations</code>. If the number of results is larger than the
   *             number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   */
  PageSize?: number;

  /**
   * <p>The factors that caused the email address to be added to .</p>
   */
  Reasons?: (SuppressionListReason | string)[];

  /**
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list after a specific date. The date that you specify
   *             should be in Unix time format.</p>
   */
  StartDate?: Date;
}

export namespace ListSuppressedDestinationsRequest {
  export const filterSensitiveLog = (obj: ListSuppressedDestinationsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSuppressedDestinationsRequest => __isa(o, "ListSuppressedDestinationsRequest");
}

/**
 * <p>A list of suppressed email addresses.</p>
 */
export interface ListSuppressedDestinationsResponse {
  __type?: "ListSuppressedDestinationsResponse";
  /**
   * <p>A list of summaries, each containing a summary for a suppressed email
   *             destination.</p>
   */
  SuppressedDestinationSummaries?: SuppressedDestinationSummary[];

  /**
   * <p>A token that indicates that there are additional email addresses on the suppression
   *             list for your account. To view additional suppressed addresses, issue another request to
   *                 <code>ListSuppressedDestinations</code>, and pass this token in the
   *                 <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

export namespace ListSuppressedDestinationsResponse {
  export const filterSensitiveLog = (obj: ListSuppressedDestinationsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSuppressedDestinationsResponse =>
    __isa(o, "ListSuppressedDestinationsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tag
   *             information for.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>An array that lists all the tags that are associated with the resource. Each tag
   *             consists of a required tag key (<code>Key</code>) and an associated tag value
   *                 (<code>Value</code>)</p>
   */
  Tags: Tag[] | undefined;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>A list of attributes that are associated with a MAIL FROM domain.</p>
 */
export interface MailFromAttributes {
  __type?: "MailFromAttributes";
  /**
   * <p>The status of the MAIL FROM domain. This status can have the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – Amazon SES hasn't started searching for the MX record
   *                     yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – Amazon SES detected the required MX record for the
   *                     MAIL FROM domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – Amazon SES can't find the required MX record, or the
   *                     record no longer exists.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon SES from determining the status of the MAIL FROM domain.</p>
   *             </li>
   *          </ul>
   */
  MailFromDomainStatus: MailFromDomainStatus | string | undefined;

  /**
   * <p>The name of a domain that an email identity uses as a custom MAIL FROM domain.</p>
   */
  MailFromDomain: string | undefined;

  /**
   * <p>The action that you want to take if the required MX record can't be found when you
   *             send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent
   *             using <i>amazonses.com</i> as the MAIL FROM domain. When you set this
   *             value to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | string | undefined;
}

export namespace MailFromAttributes {
  export const filterSensitiveLog = (obj: MailFromAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MailFromAttributes => __isa(o, "MailFromAttributes");
}

/**
 * <p>The message can't be sent because the sending domain isn't verified.</p>
 */
export interface MailFromDomainNotVerifiedException extends __SmithyException, $MetadataBearer {
  name: "MailFromDomainNotVerifiedException";
  $fault: "client";
  message?: string;
}

export namespace MailFromDomainNotVerifiedException {
  export const filterSensitiveLog = (obj: MailFromDomainNotVerifiedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MailFromDomainNotVerifiedException =>
    __isa(o, "MailFromDomainNotVerifiedException");
}

export enum MailFromDomainStatus {
  FAILED = "FAILED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
}

export enum MailType {
  MARKETING = "MARKETING",
  TRANSACTIONAL = "TRANSACTIONAL",
}

/**
 * <p>Represents the email message that you're sending. The <code>Message</code> object
 *             consists of a subject line and a message body.</p>
 */
export interface Message {
  __type?: "Message";
  /**
   * <p>The body of the message. You can specify an HTML version of the message, a text-only
   *             version of the message, or both.</p>
   */
  Body: Body | undefined;

  /**
   * <p>The subject line of the email. The subject line can only contain 7-bit ASCII
   *             characters. However, you can specify non-ASCII characters in the subject line by using
   *             encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   */
  Subject: Content | undefined;
}

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Message => __isa(o, "Message");
}

/**
 * <p>The message can't be sent because it contains invalid content.</p>
 */
export interface MessageRejected extends __SmithyException, $MetadataBearer {
  name: "MessageRejected";
  $fault: "client";
  message?: string;
}

export namespace MessageRejected {
  export const filterSensitiveLog = (obj: MessageRejected): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageRejected => __isa(o, "MessageRejected");
}

/**
 * <p>Contains the name and value of a tag that you apply to an email. You can use message
 *             tags when you publish email sending events.
 *             </p>
 */
export interface MessageTag {
  __type?: "MessageTag";
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
}

export namespace MessageTag {
  export const filterSensitiveLog = (obj: MessageTag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is MessageTag => __isa(o, "MessageTag");
}

/**
 * <p>The resource you attempted to access doesn't exist.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NotFoundException => __isa(o, "NotFoundException");
}

/**
 * <p>An object that contains information about email that was sent from the selected
 *             domain.</p>
 */
export interface OverallVolume {
  __type?: "OverallVolume";
  /**
   * <p>An object that contains inbox and junk mail placement metrics for individual email
   *             providers.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];

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
}

export namespace OverallVolume {
  export const filterSensitiveLog = (obj: OverallVolume): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OverallVolume => __isa(o, "OverallVolume");
}

/**
 * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
 *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
 *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
 *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 */
export interface PinpointDestination {
  __type?: "PinpointDestination";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email
   *             events to.</p>
   */
  ApplicationArn?: string;
}

export namespace PinpointDestination {
  export const filterSensitiveLog = (obj: PinpointDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PinpointDestination => __isa(o, "PinpointDestination");
}

/**
 * <p>An object that contains inbox placement data for an email provider.</p>
 */
export interface PlacementStatistics {
  __type?: "PlacementStatistics";
  /**
   * <p>The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.</p>
   */
  InboxPercentage?: number;

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
}

export namespace PlacementStatistics {
  export const filterSensitiveLog = (obj: PlacementStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PlacementStatistics => __isa(o, "PlacementStatistics");
}

/**
 * <p>A request to enable or disable the automatic IP address warm-up feature.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  __type?: "PutAccountDedicatedIpWarmupAttributesRequest";
  /**
   * <p>Enables or disables the automatic warm-up feature for dedicated IP addresses that are
   *             associated with your Amazon SES account in the current AWS Region. Set to <code>true</code>
   *             to enable the automatic warm-up feature, or set to <code>false</code> to disable
   *             it.</p>
   */
  AutoWarmupEnabled?: boolean;
}

export namespace PutAccountDedicatedIpWarmupAttributesRequest {
  export const filterSensitiveLog = (obj: PutAccountDedicatedIpWarmupAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountDedicatedIpWarmupAttributesRequest =>
    __isa(o, "PutAccountDedicatedIpWarmupAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse {
  __type?: "PutAccountDedicatedIpWarmupAttributesResponse";
}

export namespace PutAccountDedicatedIpWarmupAttributesResponse {
  export const filterSensitiveLog = (obj: PutAccountDedicatedIpWarmupAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountDedicatedIpWarmupAttributesResponse =>
    __isa(o, "PutAccountDedicatedIpWarmupAttributesResponse");
}

/**
 * <p>A request to submit new account details.</p>
 */
export interface PutAccountDetailsRequest {
  __type?: "PutAccountDetailsRequest";
  /**
   * <p>Indicates whether or not your account should have production access in the current
   *             AWS Region.</p>
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

  /**
   * <p>The type of email your account will send.</p>
   */
  MailType: MailType | string | undefined;

  /**
   * <p>The language you would prefer to be contacted with.</p>
   */
  ContactLanguage?: ContactLanguage | string;

  /**
   * <p>A description of the types of email that you plan to send.</p>
   */
  UseCaseDescription: string | undefined;

  /**
   * <p>Additional email addresses that you would like to be notified regarding Amazon SES
   *             matters.</p>
   */
  AdditionalContactEmailAddresses?: string[];

  /**
   * <p>The URL of your website. This information helps us better understand the type of
   *             content that you plan to send.</p>
   */
  WebsiteURL: string | undefined;
}

export namespace PutAccountDetailsRequest {
  export const filterSensitiveLog = (obj: PutAccountDetailsRequest): any => ({
    ...obj,
    ...(obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING }),
    ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }),
    ...(obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is PutAccountDetailsRequest => __isa(o, "PutAccountDetailsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDetailsResponse {
  __type?: "PutAccountDetailsResponse";
}

export namespace PutAccountDetailsResponse {
  export const filterSensitiveLog = (obj: PutAccountDetailsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountDetailsResponse => __isa(o, "PutAccountDetailsResponse");
}

/**
 * <p>A request to change the ability of your account to send email.</p>
 */
export interface PutAccountSendingAttributesRequest {
  __type?: "PutAccountSendingAttributesRequest";
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

export namespace PutAccountSendingAttributesRequest {
  export const filterSensitiveLog = (obj: PutAccountSendingAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountSendingAttributesRequest =>
    __isa(o, "PutAccountSendingAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSendingAttributesResponse {
  __type?: "PutAccountSendingAttributesResponse";
}

export namespace PutAccountSendingAttributesResponse {
  export const filterSensitiveLog = (obj: PutAccountSendingAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountSendingAttributesResponse =>
    __isa(o, "PutAccountSendingAttributesResponse");
}

/**
 * <p>A request to change your account's suppression preferences.</p>
 */
export interface PutAccountSuppressionAttributesRequest {
  __type?: "PutAccountSuppressionAttributesRequest";
  /**
   * <p>A list that contains the reasons that email addresses will be automatically added to
   *             the suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: (SuppressionListReason | string)[];
}

export namespace PutAccountSuppressionAttributesRequest {
  export const filterSensitiveLog = (obj: PutAccountSuppressionAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountSuppressionAttributesRequest =>
    __isa(o, "PutAccountSuppressionAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSuppressionAttributesResponse {
  __type?: "PutAccountSuppressionAttributesResponse";
}

export namespace PutAccountSuppressionAttributesResponse {
  export const filterSensitiveLog = (obj: PutAccountSuppressionAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutAccountSuppressionAttributesResponse =>
    __isa(o, "PutAccountSuppressionAttributesResponse");
}

/**
 * <p>A request to associate a configuration set with a dedicated IP pool.</p>
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  __type?: "PutConfigurationSetDeliveryOptionsRequest";
  /**
   * <p>The name of the dedicated IP pool that you want to associate with the configuration
   *             set.</p>
   */
  SendingPoolName?: string;

  /**
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy | string;

  /**
   * <p>The name of the configuration set that you want to associate with a dedicated IP
   *             pool.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace PutConfigurationSetDeliveryOptionsRequest {
  export const filterSensitiveLog = (obj: PutConfigurationSetDeliveryOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetDeliveryOptionsRequest =>
    __isa(o, "PutConfigurationSetDeliveryOptionsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetDeliveryOptionsResponse {
  __type?: "PutConfigurationSetDeliveryOptionsResponse";
}

export namespace PutConfigurationSetDeliveryOptionsResponse {
  export const filterSensitiveLog = (obj: PutConfigurationSetDeliveryOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetDeliveryOptionsResponse =>
    __isa(o, "PutConfigurationSetDeliveryOptionsResponse");
}

/**
 * <p>A request to enable or disable tracking of reputation metrics for a configuration
 *             set.</p>
 */
export interface PutConfigurationSetReputationOptionsRequest {
  __type?: "PutConfigurationSetReputationOptionsRequest";
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

export namespace PutConfigurationSetReputationOptionsRequest {
  export const filterSensitiveLog = (obj: PutConfigurationSetReputationOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetReputationOptionsRequest =>
    __isa(o, "PutConfigurationSetReputationOptionsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetReputationOptionsResponse {
  __type?: "PutConfigurationSetReputationOptionsResponse";
}

export namespace PutConfigurationSetReputationOptionsResponse {
  export const filterSensitiveLog = (obj: PutConfigurationSetReputationOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetReputationOptionsResponse =>
    __isa(o, "PutConfigurationSetReputationOptionsResponse");
}

/**
 * <p>A request to enable or disable the ability of Amazon SES to send emails that use a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSendingOptionsRequest {
  __type?: "PutConfigurationSetSendingOptionsRequest";
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

export namespace PutConfigurationSetSendingOptionsRequest {
  export const filterSensitiveLog = (obj: PutConfigurationSetSendingOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetSendingOptionsRequest =>
    __isa(o, "PutConfigurationSetSendingOptionsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSendingOptionsResponse {
  __type?: "PutConfigurationSetSendingOptionsResponse";
}

export namespace PutConfigurationSetSendingOptionsResponse {
  export const filterSensitiveLog = (obj: PutConfigurationSetSendingOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetSendingOptionsResponse =>
    __isa(o, "PutConfigurationSetSendingOptionsResponse");
}

/**
 * <p>A request to change the account suppression list preferences for a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  __type?: "PutConfigurationSetSuppressionOptionsRequest";
  /**
   * <p>A list that contains the reasons that email addresses are automatically added to the
   *             suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     hard bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: (SuppressionListReason | string)[];

  /**
   * <p>The name of the configuration set that you want to change the suppression list
   *             preferences for.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace PutConfigurationSetSuppressionOptionsRequest {
  export const filterSensitiveLog = (obj: PutConfigurationSetSuppressionOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetSuppressionOptionsRequest =>
    __isa(o, "PutConfigurationSetSuppressionOptionsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSuppressionOptionsResponse {
  __type?: "PutConfigurationSetSuppressionOptionsResponse";
}

export namespace PutConfigurationSetSuppressionOptionsResponse {
  export const filterSensitiveLog = (obj: PutConfigurationSetSuppressionOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetSuppressionOptionsResponse =>
    __isa(o, "PutConfigurationSetSuppressionOptionsResponse");
}

/**
 * <p>A request to add a custom domain for tracking open and click events to a configuration
 *             set.</p>
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  __type?: "PutConfigurationSetTrackingOptionsRequest";
  /**
   * <p>The domain that you want to use to track open and click events.</p>
   */
  CustomRedirectDomain?: string;

  /**
   * <p>The name of the configuration set that you want to add a custom tracking domain
   *             to.</p>
   */
  ConfigurationSetName: string | undefined;
}

export namespace PutConfigurationSetTrackingOptionsRequest {
  export const filterSensitiveLog = (obj: PutConfigurationSetTrackingOptionsRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetTrackingOptionsRequest =>
    __isa(o, "PutConfigurationSetTrackingOptionsRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetTrackingOptionsResponse {
  __type?: "PutConfigurationSetTrackingOptionsResponse";
}

export namespace PutConfigurationSetTrackingOptionsResponse {
  export const filterSensitiveLog = (obj: PutConfigurationSetTrackingOptionsResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutConfigurationSetTrackingOptionsResponse =>
    __isa(o, "PutConfigurationSetTrackingOptionsResponse");
}

/**
 * <p>A request to move a dedicated IP address to a dedicated IP pool.</p>
 */
export interface PutDedicatedIpInPoolRequest {
  __type?: "PutDedicatedIpInPoolRequest";
  /**
   * <p>The IP address that you want to move to the dedicated IP pool. The value you specify
   *             has to be a dedicated IP address that's associated with your AWS account.</p>
   */
  Ip: string | undefined;

  /**
   * <p>The name of the IP pool that you want to add the dedicated IP address to. You have to
   *             specify an IP pool that already exists.</p>
   */
  DestinationPoolName: string | undefined;
}

export namespace PutDedicatedIpInPoolRequest {
  export const filterSensitiveLog = (obj: PutDedicatedIpInPoolRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDedicatedIpInPoolRequest => __isa(o, "PutDedicatedIpInPoolRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpInPoolResponse {
  __type?: "PutDedicatedIpInPoolResponse";
}

export namespace PutDedicatedIpInPoolResponse {
  export const filterSensitiveLog = (obj: PutDedicatedIpInPoolResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDedicatedIpInPoolResponse => __isa(o, "PutDedicatedIpInPoolResponse");
}

/**
 * <p>A request to change the warm-up attributes for a dedicated IP address. This operation
 *             is useful when you want to resume the warm-up process for an existing IP address.</p>
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  __type?: "PutDedicatedIpWarmupAttributesRequest";
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

export namespace PutDedicatedIpWarmupAttributesRequest {
  export const filterSensitiveLog = (obj: PutDedicatedIpWarmupAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDedicatedIpWarmupAttributesRequest =>
    __isa(o, "PutDedicatedIpWarmupAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpWarmupAttributesResponse {
  __type?: "PutDedicatedIpWarmupAttributesResponse";
}

export namespace PutDedicatedIpWarmupAttributesResponse {
  export const filterSensitiveLog = (obj: PutDedicatedIpWarmupAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDedicatedIpWarmupAttributesResponse =>
    __isa(o, "PutDedicatedIpWarmupAttributesResponse");
}

/**
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other AWS services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface PutDeliverabilityDashboardOptionRequest {
  __type?: "PutDeliverabilityDashboardOptionRequest";
  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             enabled the Deliverability dashboard for.</p>
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * <p>Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this
   *             value to <code>true</code>.</p>
   */
  DashboardEnabled: boolean | undefined;
}

export namespace PutDeliverabilityDashboardOptionRequest {
  export const filterSensitiveLog = (obj: PutDeliverabilityDashboardOptionRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDeliverabilityDashboardOptionRequest =>
    __isa(o, "PutDeliverabilityDashboardOptionRequest");
}

/**
 * <p>A response that indicates whether the Deliverability dashboard is enabled.</p>
 */
export interface PutDeliverabilityDashboardOptionResponse {
  __type?: "PutDeliverabilityDashboardOptionResponse";
}

export namespace PutDeliverabilityDashboardOptionResponse {
  export const filterSensitiveLog = (obj: PutDeliverabilityDashboardOptionResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutDeliverabilityDashboardOptionResponse =>
    __isa(o, "PutDeliverabilityDashboardOptionResponse");
}

/**
 * <p>A request to enable or disable DKIM signing of email that you send from an email
 *             identity.</p>
 */
export interface PutEmailIdentityDkimAttributesRequest {
  __type?: "PutEmailIdentityDkimAttributesRequest";
  /**
   * <p>The email identity that you want to change the DKIM settings for.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>Sets the DKIM signing configuration for the identity.</p>
   *         <p>When you set this value <code>true</code>, then the messages that are sent from the
   *             identity are signed using DKIM. If you set this value to <code>false</code>, your
   *             messages are sent without DKIM signing.</p>
   */
  SigningEnabled?: boolean;
}

export namespace PutEmailIdentityDkimAttributesRequest {
  export const filterSensitiveLog = (obj: PutEmailIdentityDkimAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityDkimAttributesRequest =>
    __isa(o, "PutEmailIdentityDkimAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityDkimAttributesResponse {
  __type?: "PutEmailIdentityDkimAttributesResponse";
}

export namespace PutEmailIdentityDkimAttributesResponse {
  export const filterSensitiveLog = (obj: PutEmailIdentityDkimAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityDkimAttributesResponse =>
    __isa(o, "PutEmailIdentityDkimAttributesResponse");
}

/**
 * <p>A request to change the DKIM attributes for an email identity.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesRequest {
  __type?: "PutEmailIdentityDkimSigningAttributesRequest";
  /**
   * <p>The method that you want to use to configure DKIM for the identity. There are two
   *             possible values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                         DKIM</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring
   *                     Your Own DKIM (BYODKIM).</p>
   *             </li>
   *          </ul>
   */
  SigningAttributesOrigin: DkimSigningAttributesOrigin | string | undefined;

  /**
   * <p>An object that contains information about the private key and selector that you want
   *             to use to configure DKIM for the identity. This object is only required if you want to
   *             configure Bring Your Own DKIM (BYODKIM) for the identity.</p>
   */
  SigningAttributes?: DkimSigningAttributes;

  /**
   * <p>The email identity that you want to configure DKIM for.</p>
   */
  EmailIdentity: string | undefined;
}

export namespace PutEmailIdentityDkimSigningAttributesRequest {
  export const filterSensitiveLog = (obj: PutEmailIdentityDkimSigningAttributesRequest): any => ({
    ...obj,
    ...(obj.SigningAttributes && {
      SigningAttributes: DkimSigningAttributes.filterSensitiveLog(obj.SigningAttributes),
    }),
  });
  export const isa = (o: any): o is PutEmailIdentityDkimSigningAttributesRequest =>
    __isa(o, "PutEmailIdentityDkimSigningAttributesRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 *         <p>The following data is returned in JSON format by the service.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
  __type?: "PutEmailIdentityDkimSigningAttributesResponse";
  /**
   * <p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object
   *             contains a set of unique strings that you use to create a set of CNAME records that you
   *             add to the DNS configuration for your domain. When Amazon SES detects these records in the
   *             DNS configuration for your domain, the DKIM authentication process is complete.</p>
   *         <p>If you configured DKIM authentication for the domain by providing your own
   *             public-private key pair, then this object contains the selector that's associated with
   *             your public key.</p>
   *         <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the
   *             appropriate records in the DNS configuration of the domain for up to 72 hours.</p>
   */
  DkimTokens?: string[];

  /**
   * <p>The DKIM authentication status of the identity. Amazon SES determines the authentication
   *             status by searching for specific records in the DNS configuration for your domain. If
   *             you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME
   *             records in the DNS configuration for your domain.</p>
   *         <p>If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT
   *             record that uses the selector that you specified. The value of the TXT record must be a
   *             public key that's paired with the private key that you specified in the process of
   *             creating the identity.</p>
   *         <p>The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet detected the DKIM records in the DNS configuration for the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – The verification process failed. This typically
   *                     occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the DKIM authentication status of the domain.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – The DKIM verification process hasn't been
   *                     initiated for the domain.</p>
   *             </li>
   *          </ul>
   */
  DkimStatus?: DkimStatus | string;
}

export namespace PutEmailIdentityDkimSigningAttributesResponse {
  export const filterSensitiveLog = (obj: PutEmailIdentityDkimSigningAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityDkimSigningAttributesResponse =>
    __isa(o, "PutEmailIdentityDkimSigningAttributesResponse");
}

/**
 * <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  __type?: "PutEmailIdentityFeedbackAttributesRequest";
  /**
   * <p>Sets the feedback forwarding configuration for the identity.</p>
   *         <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *         <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  EmailForwardingEnabled?: boolean;

  /**
   * <p>The email identity that you want to configure bounce and complaint feedback forwarding
   *             for.</p>
   */
  EmailIdentity: string | undefined;
}

export namespace PutEmailIdentityFeedbackAttributesRequest {
  export const filterSensitiveLog = (obj: PutEmailIdentityFeedbackAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityFeedbackAttributesRequest =>
    __isa(o, "PutEmailIdentityFeedbackAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityFeedbackAttributesResponse {
  __type?: "PutEmailIdentityFeedbackAttributesResponse";
}

export namespace PutEmailIdentityFeedbackAttributesResponse {
  export const filterSensitiveLog = (obj: PutEmailIdentityFeedbackAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityFeedbackAttributesResponse =>
    __isa(o, "PutEmailIdentityFeedbackAttributesResponse");
}

/**
 * <p>A request to configure the custom MAIL FROM domain for a verified identity.</p>
 */
export interface PutEmailIdentityMailFromAttributesRequest {
  __type?: "PutEmailIdentityMailFromAttributesRequest";
  /**
   * <p>The verified email identity that you want to set up the custom MAIL FROM domain
   *             for.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The action that you want to take if the required MX record isn't found when you send
   *             an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent
   *             using <i>amazonses.com</i> as the MAIL FROM domain. When you set this
   *             value to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure?: BehaviorOnMxFailure | string;

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
}

export namespace PutEmailIdentityMailFromAttributesRequest {
  export const filterSensitiveLog = (obj: PutEmailIdentityMailFromAttributesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityMailFromAttributesRequest =>
    __isa(o, "PutEmailIdentityMailFromAttributesRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityMailFromAttributesResponse {
  __type?: "PutEmailIdentityMailFromAttributesResponse";
}

export namespace PutEmailIdentityMailFromAttributesResponse {
  export const filterSensitiveLog = (obj: PutEmailIdentityMailFromAttributesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutEmailIdentityMailFromAttributesResponse =>
    __isa(o, "PutEmailIdentityMailFromAttributesResponse");
}

/**
 * <p>A request to add an email destination to the suppression list for your account.</p>
 */
export interface PutSuppressedDestinationRequest {
  __type?: "PutSuppressedDestinationRequest";
  /**
   * <p>The email address that should be added to the suppression list for your
   *             account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The factors that should cause the email address to be added to the suppression list
   *             for your account.</p>
   */
  Reason: SuppressionListReason | string | undefined;
}

export namespace PutSuppressedDestinationRequest {
  export const filterSensitiveLog = (obj: PutSuppressedDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutSuppressedDestinationRequest => __isa(o, "PutSuppressedDestinationRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutSuppressedDestinationResponse {
  __type?: "PutSuppressedDestinationResponse";
}

export namespace PutSuppressedDestinationResponse {
  export const filterSensitiveLog = (obj: PutSuppressedDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutSuppressedDestinationResponse => __isa(o, "PutSuppressedDestinationResponse");
}

/**
 * <p>Represents the raw content of an email message.</p>
 */
export interface RawMessage {
  __type?: "RawMessage";
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
   *                 <p>Attachments must be in a file format that the Amazon SES supports.</p>
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

export namespace RawMessage {
  export const filterSensitiveLog = (obj: RawMessage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RawMessage => __isa(o, "RawMessage");
}

/**
 * <p>The <code>ReplaceEmailContent</code> object to be used for a specific
 *                 <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified
 *             within this object.</p>
 */
export interface ReplacementEmailContent {
  __type?: "ReplacementEmailContent";
  /**
   * <p>The <code>ReplacementTemplate</code> associated with
   *                 <code>ReplacementEmailContent</code>.</p>
   */
  ReplacementTemplate?: ReplacementTemplate;
}

export namespace ReplacementEmailContent {
  export const filterSensitiveLog = (obj: ReplacementEmailContent): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplacementEmailContent => __isa(o, "ReplacementEmailContent");
}

/**
 * <p>An object which contains <code>ReplacementTemplateData</code> to be used for a
 *             specific <code>BulkEmailEntry</code>.</p>
 */
export interface ReplacementTemplate {
  __type?: "ReplacementTemplate";
  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  ReplacementTemplateData?: string;
}

export namespace ReplacementTemplate {
  export const filterSensitiveLog = (obj: ReplacementTemplate): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReplacementTemplate => __isa(o, "ReplacementTemplate");
}

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using this
 *             configuration set in the current AWS Region. </p>
 */
export interface ReputationOptions {
  __type?: "ReputationOptions";
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

export namespace ReputationOptions {
  export const filterSensitiveLog = (obj: ReputationOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReputationOptions => __isa(o, "ReputationOptions");
}

/**
 * <p>An object that contains information about your account details review.</p>
 */
export interface ReviewDetails {
  __type?: "ReviewDetails";
  /**
   * <p>The status of the latest review of your account. The status can be one of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – We have received your appeal and are in the
   *                     process of reviewing it.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>GRANTED</code> – Your appeal has been reviewed and your production
   *                     access has been granted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DENIED</code> – Your appeal has been reviewed and your production
   *                     access has been denied.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – An internal error occurred and we didn't receive
   *                     your appeal. You can submit your appeal again.</p>
   *             </li>
   *          </ul>
   */
  Status?: ReviewStatus | string;

  /**
   * <p>The associated support center case ID (if any).</p>
   */
  CaseId?: string;
}

export namespace ReviewDetails {
  export const filterSensitiveLog = (obj: ReviewDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReviewDetails => __isa(o, "ReviewDetails");
}

export enum ReviewStatus {
  DENIED = "DENIED",
  FAILED = "FAILED",
  GRANTED = "GRANTED",
  PENDING = "PENDING",
}

/**
 * <p>Represents a request to send email messages to multiple destinations using Amazon SES. For
 *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendBulkEmailRequest {
  __type?: "SendBulkEmailRequest";
  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events.</p>
   */
  DefaultEmailTags?: MessageTag[];

  /**
   * <p>The name of the configuration set that you want to use when sending the email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FromEmailAddress</code> parameter.</p>
   *         <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use sender@example.com, then you would specify the
   *                 <code>FromEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FromEmailAddress</code> to be sender@example.com.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * <p>The list of bulk email entry objects.</p>
   */
  BulkEmailEntries: BulkEmailEntry[] | undefined;

  /**
   * <p>An object that contains the body of the message. You can specify a template
   *             message.</p>
   */
  DefaultContent: BulkEmailContent | undefined;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FeedbackForwardingEmailAddress</code>
   *             parameter.</p>
   *         <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use feedback@example.com, then you would specify the
   *                 <code>FeedbackForwardingEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>The email address that you want to use as the "From" address for the email. The
   *             address that you specify has to be verified.</p>
   */
  FromEmailAddress?: string;
}

export namespace SendBulkEmailRequest {
  export const filterSensitiveLog = (obj: SendBulkEmailRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendBulkEmailRequest => __isa(o, "SendBulkEmailRequest");
}

/**
 * <p>The following data is returned in JSON format by the service.</p>
 */
export interface SendBulkEmailResponse {
  __type?: "SendBulkEmailResponse";
  /**
   * <p>A list of <code>BulkMailEntry</code> objects.</p>
   */
  BulkEmailEntryResults: BulkEmailEntryResult[] | undefined;
}

export namespace SendBulkEmailResponse {
  export const filterSensitiveLog = (obj: SendBulkEmailResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendBulkEmailResponse => __isa(o, "SendBulkEmailResponse");
}

/**
 * <p>Represents a request to send a custom verification email to a specified
 *             recipient.</p>
 */
export interface SendCustomVerificationEmailRequest {
  __type?: "SendCustomVerificationEmailRequest";
  /**
   * <p>The email address to verify.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>Name of a configuration set to use when sending the verification email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The name of the custom verification email template to use when sending the
   *             verification email.</p>
   */
  TemplateName: string | undefined;
}

export namespace SendCustomVerificationEmailRequest {
  export const filterSensitiveLog = (obj: SendCustomVerificationEmailRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendCustomVerificationEmailRequest =>
    __isa(o, "SendCustomVerificationEmailRequest");
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface SendCustomVerificationEmailResponse {
  __type?: "SendCustomVerificationEmailResponse";
  /**
   * <p>The unique message identifier returned from the
   *                 <code>SendCustomVerificationEmail</code> operation.</p>
   */
  MessageId?: string;
}

export namespace SendCustomVerificationEmailResponse {
  export const filterSensitiveLog = (obj: SendCustomVerificationEmailResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendCustomVerificationEmailResponse =>
    __isa(o, "SendCustomVerificationEmailResponse");
}

/**
 * <p>Represents a request to send a single formatted email using Amazon SES. For more
 *             information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendEmailRequest {
  __type?: "SendEmailRequest";
  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The name of the configuration set that you want to use when sending the email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FromEmailAddress</code> parameter.</p>
   *         <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use sender@example.com, then you would specify the
   *                 <code>FromEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FromEmailAddress</code> to be sender@example.com.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   *         <p>For Raw emails, the <code>FromEmailAddressIdentityArn</code> value overrides the
   *             X-SES-SOURCE-ARN and X-SES-FROM-ARN headers specified in raw email message
   *             content.</p>
   */
  FromEmailAddressIdentityArn?: string;

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

  /**
   * <p>The email address that you want to use as the "From" address for the email. The
   *             address that you specify has to be verified.
   *             </p>
   */
  FromEmailAddress?: string;

  /**
   * <p>This parameter is used only for sending authorization. It is the ARN of the identity
   *             that is associated with the sending authorization policy that permits you to use the
   *             email address specified in the <code>FeedbackForwardingEmailAddress</code>
   *             parameter.</p>
   *         <p>For example, if the owner of example.com (which has ARN
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com) attaches a policy to it that
   *             authorizes you to use feedback@example.com, then you would specify the
   *                 <code>FeedbackForwardingEmailAddressIdentityArn</code> to be
   *             arn:aws:ses:us-east-1:123456789012:identity/example.com, and the
   *                 <code>FeedbackForwardingEmailAddress</code> to be feedback@example.com.</p>
   *         <p>For more information about sending authorization, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  FeedbackForwardingEmailAddressIdentityArn?: string;

  /**
   * <p>An object that contains the recipients of the email message.</p>
   */
  Destination?: Destination;

  /**
   * <p>An object that contains the body of the message. You can send either a Simple message
   *             Raw message or a template Message.</p>
   */
  Content: EmailContent | undefined;

  /**
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events. </p>
   */
  EmailTags?: MessageTag[];
}

export namespace SendEmailRequest {
  export const filterSensitiveLog = (obj: SendEmailRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendEmailRequest => __isa(o, "SendEmailRequest");
}

/**
 * <p>A unique message ID that you receive when an email is accepted for sending.</p>
 */
export interface SendEmailResponse {
  __type?: "SendEmailResponse";
  /**
   * <p>A unique identifier for the message that is generated when the message is
   *             accepted.</p>
   *         <note>
   *             <p>It's possible for Amazon SES to accept a message without sending it. This can happen
   *                 when the message that you're trying to send has an attachment contains a virus, or
   *                 when you send a templated email that contains invalid personalization content, for
   *                 example.</p>
   *         </note>
   */
  MessageId?: string;
}

export namespace SendEmailResponse {
  export const filterSensitiveLog = (obj: SendEmailResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendEmailResponse => __isa(o, "SendEmailResponse");
}

/**
 * <p>Used to enable or disable email sending for messages that use this configuration set
 *             in the current AWS Region.</p>
 */
export interface SendingOptions {
  __type?: "SendingOptions";
  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

export namespace SendingOptions {
  export const filterSensitiveLog = (obj: SendingOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendingOptions => __isa(o, "SendingOptions");
}

/**
 * <p>The message can't be sent because the account's ability to send email is currently
 *             paused.</p>
 */
export interface SendingPausedException extends __SmithyException, $MetadataBearer {
  name: "SendingPausedException";
  $fault: "client";
  message?: string;
}

export namespace SendingPausedException {
  export const filterSensitiveLog = (obj: SendingPausedException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendingPausedException => __isa(o, "SendingPausedException");
}

/**
 * <p>An object that contains information about the per-day and per-second sending limits
 *             for your Amazon SES account in the current AWS Region.</p>
 */
export interface SendQuota {
  __type?: "SendQuota";
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
   * <p>The number of emails sent from your Amazon SES account in the current AWS Region over the
   *             past 24 hours.</p>
   */
  SentLast24Hours?: number;
}

export namespace SendQuota {
  export const filterSensitiveLog = (obj: SendQuota): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SendQuota => __isa(o, "SendQuota");
}

/**
 * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
 *             send notification when certain email events occur.</p>
 */
export interface SnsDestination {
  __type?: "SnsDestination";
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email
   *             events to. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer
   *                 Guide</a>.</p>
   */
  TopicArn: string | undefined;
}

export namespace SnsDestination {
  export const filterSensitiveLog = (obj: SnsDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SnsDestination => __isa(o, "SnsDestination");
}

/**
 * <p>An object that contains information about an email address that is on the suppression
 *             list for your account.</p>
 */
export interface SuppressedDestination {
  __type?: "SuppressedDestination";
  /**
   * <p>The email address that is on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;

  /**
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | string | undefined;

  /**
   * <p>An optional value that can contain additional information about the reasons that the
   *             address was added to the suppression list for your account.</p>
   */
  Attributes?: SuppressedDestinationAttributes;
}

export namespace SuppressedDestination {
  export const filterSensitiveLog = (obj: SuppressedDestination): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuppressedDestination => __isa(o, "SuppressedDestination");
}

/**
 * <p>An object that contains additional attributes that are related an email address that
 *             is on the suppression list for your account.</p>
 */
export interface SuppressedDestinationAttributes {
  __type?: "SuppressedDestinationAttributes";
  /**
   * <p>The unique identifier of the email message that caused the email address to be added
   *             to the suppression list for your account.</p>
   */
  MessageId?: string;

  /**
   * <p>A unique identifier that's generated when an email address is added to the suppression
   *             list for your account.</p>
   */
  FeedbackId?: string;
}

export namespace SuppressedDestinationAttributes {
  export const filterSensitiveLog = (obj: SuppressedDestinationAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuppressedDestinationAttributes => __isa(o, "SuppressedDestinationAttributes");
}

/**
 * <p>A summary that describes the suppressed email address.</p>
 */
export interface SuppressedDestinationSummary {
  __type?: "SuppressedDestinationSummary";
  /**
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | string | undefined;

  /**
   * <p>The email address that's on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;
}

export namespace SuppressedDestinationSummary {
  export const filterSensitiveLog = (obj: SuppressedDestinationSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuppressedDestinationSummary => __isa(o, "SuppressedDestinationSummary");
}

/**
 * <p>An object that contains information about the email address suppression preferences
 *             for your account in the current AWS Region.</p>
 */
export interface SuppressionAttributes {
  __type?: "SuppressionAttributes";
  /**
   * <p>A list that contains the reasons that email addresses will be automatically added to
   *             the suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: (SuppressionListReason | string)[];
}

export namespace SuppressionAttributes {
  export const filterSensitiveLog = (obj: SuppressionAttributes): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuppressionAttributes => __isa(o, "SuppressionAttributes");
}

export enum SuppressionListReason {
  BOUNCE = "BOUNCE",
  COMPLAINT = "COMPLAINT",
}

/**
 * <p>An object that contains information about the suppression list preferences for your
 *             account.</p>
 */
export interface SuppressionOptions {
  __type?: "SuppressionOptions";
  /**
   * <p>A list that contains the reasons that email addresses are automatically added to the
   *             suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: (SuppressionListReason | string)[];
}

export namespace SuppressionOptions {
  export const filterSensitiveLog = (obj: SuppressionOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SuppressionOptions => __isa(o, "SuppressionOptions");
}

/**
 * <p>An object that defines the tags that are associated with a resource.
 *                 A <i>tag</i> is a label that you optionally define and associate with
 *             a resource. Tags can help you categorize and manage resources in different ways, such as
 *             by purpose, owner, environment, or other criteria. A resource can have as many as 50
 *             tags.</p>
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
  __type?: "Tag";
  /**
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *             value is 256 characters. The minimum length is 0 characters. If you don't want a
   *             resource to have a specific tag value, don't specify a value for this parameter. If you
   *             don't specify a value, Amazon SES sets the value to an empty string.</p>
   */
  Value: string | undefined;

  /**
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *             128 characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>A list of the tags that you want to add to the resource. A tag consists of a required
   *             tag key (<code>Key</code>) and an associated tag value (<code>Value</code>). The maximum
   *             length of a tag key is 128 characters. The maximum length of a tag value is 256
   *             characters.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to add one or more tags
   *             to.</p>
   */
  ResourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

/**
 * <p>An object that defines the email template to use for an email message, and the values
 *             to use for any message variables in that template. An <i>email
 *                 template</i> is a type of message template that contains content that you
 *             want to define, save, and reuse in email messages that you send.</p>
 */
export interface Template {
  __type?: "Template";
  /**
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * <p>An object that defines the values to use for message variables in the template. This
   *             object is a set of key-value pairs. Each key defines a message variable in the template.
   *             The corresponding value defines the value to use for that variable.</p>
   */
  TemplateData?: string;

  /**
   * <p>The name of the template. You will refer to this name when you send email using the
   *                 <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
   *         </p>
   */
  TemplateName?: string;
}

export namespace Template {
  export const filterSensitiveLog = (obj: Template): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Template => __isa(o, "Template");
}

/**
 * <p>>Represents a request to create a preview of the MIME content of an email when
 *             provided with a template and a set of replacement data.</p>
 */
export interface TestRenderEmailTemplateRequest {
  __type?: "TestRenderEmailTemplateRequest";
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

export namespace TestRenderEmailTemplateRequest {
  export const filterSensitiveLog = (obj: TestRenderEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestRenderEmailTemplateRequest => __isa(o, "TestRenderEmailTemplateRequest");
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface TestRenderEmailTemplateResponse {
  __type?: "TestRenderEmailTemplateResponse";
  /**
   * <p>The complete MIME message rendered by applying the data in the
   *                 <code>TemplateData</code> parameter to the template specified in the TemplateName
   *             parameter.</p>
   */
  RenderedTemplate: string | undefined;
}

export namespace TestRenderEmailTemplateResponse {
  export const filterSensitiveLog = (obj: TestRenderEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestRenderEmailTemplateResponse => __isa(o, "TestRenderEmailTemplateResponse");
}

export enum TlsPolicy {
  OPTIONAL = "OPTIONAL",
  REQUIRE = "REQUIRE",
}

/**
 * <p>Too many requests have been made to the operation.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TooManyRequestsException => __isa(o, "TooManyRequestsException");
}

/**
 * <p>An object that defines the tracking options for a configuration set. When you use the
 *             Amazon SES API v2 to send an email, it contains an invisible image that's used to track when
 *             recipients open your email. If your email contains links, those links are changed
 *             slightly in order to track when recipients click them.</p>
 *         <p>These images and links include references to a domain operated by AWS. You can
 *             optionally configure the Amazon SES to use a domain that you operate for these images and
 *             links.</p>
 */
export interface TrackingOptions {
  __type?: "TrackingOptions";
  /**
   * <p>The domain that you want to use for tracking open and click events.</p>
   */
  CustomRedirectDomain: string | undefined;
}

export namespace TrackingOptions {
  export const filterSensitiveLog = (obj: TrackingOptions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TrackingOptions => __isa(o, "TrackingOptions");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
   *                 <code>/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
   *         </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

/**
 * <p>A request to change the settings for an event destination for a configuration
 *             set.</p>
 */
export interface UpdateConfigurationSetEventDestinationRequest {
  __type?: "UpdateConfigurationSetEventDestinationRequest";
  /**
   * <p>The name of the configuration set that contains the event destination that you want to
   *             modify.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;

  /**
   * <p>The name of the event destination that you want to modify.</p>
   */
  EventDestinationName: string | undefined;
}

export namespace UpdateConfigurationSetEventDestinationRequest {
  export const filterSensitiveLog = (obj: UpdateConfigurationSetEventDestinationRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateConfigurationSetEventDestinationRequest =>
    __isa(o, "UpdateConfigurationSetEventDestinationRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateConfigurationSetEventDestinationResponse {
  __type?: "UpdateConfigurationSetEventDestinationResponse";
}

export namespace UpdateConfigurationSetEventDestinationResponse {
  export const filterSensitiveLog = (obj: UpdateConfigurationSetEventDestinationResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateConfigurationSetEventDestinationResponse =>
    __isa(o, "UpdateConfigurationSetEventDestinationResponse");
}

/**
 * <p>Represents a request to update an existing custom verification email template.</p>
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  __type?: "UpdateCustomVerificationEmailTemplateRequest";
  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The name of the custom verification email template that you want to update.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-verify-address-custom.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;
}

export namespace UpdateCustomVerificationEmailTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateCustomVerificationEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCustomVerificationEmailTemplateRequest =>
    __isa(o, "UpdateCustomVerificationEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateCustomVerificationEmailTemplateResponse {
  __type?: "UpdateCustomVerificationEmailTemplateResponse";
}

export namespace UpdateCustomVerificationEmailTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateCustomVerificationEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateCustomVerificationEmailTemplateResponse =>
    __isa(o, "UpdateCustomVerificationEmailTemplateResponse");
}

/**
 * <p>Represents a request to update a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface UpdateEmailIdentityPolicyRequest {
  __type?: "UpdateEmailIdentityPolicyRequest";
  /**
   * <p>The name of the policy.</p>
   *
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The email identity for which you want to update policy.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *         <p> For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;
}

export namespace UpdateEmailIdentityPolicyRequest {
  export const filterSensitiveLog = (obj: UpdateEmailIdentityPolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailIdentityPolicyRequest => __isa(o, "UpdateEmailIdentityPolicyRequest");
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateEmailIdentityPolicyResponse {
  __type?: "UpdateEmailIdentityPolicyResponse";
}

export namespace UpdateEmailIdentityPolicyResponse {
  export const filterSensitiveLog = (obj: UpdateEmailIdentityPolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailIdentityPolicyResponse => __isa(o, "UpdateEmailIdentityPolicyResponse");
}

/**
 * <p>Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface UpdateEmailTemplateRequest {
  __type?: "UpdateEmailTemplateRequest";
  /**
   * <p>The name of the template you want to update.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

export namespace UpdateEmailTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateEmailTemplateRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailTemplateRequest => __isa(o, "UpdateEmailTemplateRequest");
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateEmailTemplateResponse {
  __type?: "UpdateEmailTemplateResponse";
}

export namespace UpdateEmailTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateEmailTemplateResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateEmailTemplateResponse => __isa(o, "UpdateEmailTemplateResponse");
}

/**
 * <p>An object that contains information about the amount of email that was delivered to
 *             recipients.</p>
 */
export interface VolumeStatistics {
  __type?: "VolumeStatistics";
  /**
   * <p>The total number of emails that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' spam or junk mail folders.</p>
   */
  ProjectedSpam?: number;

  /**
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' inboxes.</p>
   */
  ProjectedInbox?: number;

  /**
   * <p>The total number of emails that arrived in recipients' spam or junk mail
   *             folders.</p>
   */
  SpamRawCount?: number;
}

export namespace VolumeStatistics {
  export const filterSensitiveLog = (obj: VolumeStatistics): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VolumeStatistics => __isa(o, "VolumeStatistics");
}

export enum WarmupStatus {
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
}
