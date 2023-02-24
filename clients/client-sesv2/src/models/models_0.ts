// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SESv2ServiceException as __BaseException } from "./SESv2ServiceException";

export enum ContactLanguage {
  EN = "EN",
  JA = "JA",
}

export enum MailType {
  MARKETING = "MARKETING",
  TRANSACTIONAL = "TRANSACTIONAL",
}

export enum ReviewStatus {
  DENIED = "DENIED",
  FAILED = "FAILED",
  GRANTED = "GRANTED",
  PENDING = "PENDING",
}

/**
 * <p>An object that contains information about your account details review.</p>
 */
export interface ReviewDetails {
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

/**
 * <p>An object that contains information about your account details.</p>
 */
export interface AccountDetails {
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
   * <p>The language you would prefer for the case. The contact language can be one of
   *                 <code>ENGLISH</code> or <code>JAPANESE</code>.</p>
   */
  ContactLanguage?: ContactLanguage | string;

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
   * <p>Information about the review of the latest details you submitted.</p>
   */
  ReviewDetails?: ReviewDetails;
}

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

export enum MetricDimensionName {
  CONFIGURATION_SET = "CONFIGURATION_SET",
  EMAIL_IDENTITY = "EMAIL_IDENTITY",
  ISP = "ISP",
}

export enum Metric {
  CLICK = "CLICK",
  COMPLAINT = "COMPLAINT",
  DELIVERY = "DELIVERY",
  DELIVERY_CLICK = "DELIVERY_CLICK",
  DELIVERY_COMPLAINT = "DELIVERY_COMPLAINT",
  DELIVERY_OPEN = "DELIVERY_OPEN",
  OPEN = "OPEN",
  PERMANENT_BOUNCE = "PERMANENT_BOUNCE",
  SEND = "SEND",
  TRANSIENT_BOUNCE = "TRANSIENT_BOUNCE",
}

export enum MetricNamespace {
  VDM = "VDM",
}

/**
 * <p>Represents a single metric data query to include in a batch.</p>
 */
export interface BatchGetMetricDataQuery {
  /**
   * <p>The query identifier.</p>
   */
  Id: string | undefined;

  /**
   * <p>The query namespace - e.g. <code>VDM</code>
   *          </p>
   */
  Namespace: MetricNamespace | string | undefined;

  /**
   * <p>The queried metric. This can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SEND</code> – Emails sent eligible for tracking
   *                     in the VDM dashboard. This excludes emails sent to the mailbox simulator and emails
   *                     addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLAINT</code> – Complaints received for your
   *                     account. This excludes complaints from the mailbox simulator, those originating from
   *                     your account-level suppression list (if enabled), and those for emails addressed to more
   *                     than one recipient</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PERMANENT_BOUNCE</code> – Permanent bounces - i.e. feedback received for
   *                     emails sent to non-existent mailboxes. Excludes bounces from the mailbox simulator, those
   *                     originating from your account-level suppression list (if enabled), and those for emails
   *                     addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TRANSIENT_BOUNCE</code> – Transient bounces - i.e. feedback received for
   *                     delivery failures excluding issues with non-existent mailboxes. Excludes bounces from the
   *                     mailbox simulator, and those for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>OPEN</code> – Unique open events for emails including open trackers.
   *                     Excludes opens for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CLICK</code> – Unique click events for emails including wrapped links.
   *                     Excludes clicks for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELIVERY</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator and for emails addressed to more
   *                     than one recipient.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELIVERY_OPEN</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails without open trackers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELIVERY_CLICK</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails without click trackers.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELIVERY_COMPLAINT</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails addressed to recipients hosted by ISPs with which Amazon SES does not have a
   *                     feedback loop agreement.</p>
   *             </li>
   *          </ul>
   */
  Metric: Metric | string | undefined;

  /**
   * <p>An object that contains mapping between <code>MetricDimensionName</code>
   *             and <code>MetricDimensionValue</code> to filter metrics by.</p>
   */
  Dimensions?: Record<string, string>;

  /**
   * <p>Represents the start date for the query interval.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>Represents the end date for the query interval.</p>
   */
  EndDate: Date | undefined;
}

/**
 * <p>Represents a request to retrieve a batch of metric data.</p>
 */
export interface BatchGetMetricDataRequest {
  /**
   * <p>A list of queries for metrics to be retrieved.</p>
   */
  Queries: BatchGetMetricDataQuery[] | undefined;
}

export enum QueryErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>An error corresponding to the unsuccessful processing of a single metric data query.</p>
 */
export interface MetricDataError {
  /**
   * <p>The query identifier.</p>
   */
  Id?: string;

  /**
   * <p>The query error code. Can be one of:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>INTERNAL_FAILURE</code> – Amazon SES has failed to process one of the queries.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ACCESS_DENIED</code> – You have insufficient access to retrieve metrics
   *                     based on the given query.</p>
   *             </li>
   *          </ul>
   */
  Code?: QueryErrorCode | string;

  /**
   * <p>The error message associated with the current query error.</p>
   */
  Message?: string;
}

/**
 * <p>The result of a single metric data query.</p>
 */
export interface MetricDataResult {
  /**
   * <p>The query identifier.</p>
   */
  Id?: string;

  /**
   * <p>A list of timestamps for the metric data results.</p>
   */
  Timestamps?: Date[];

  /**
   * <p>A list of values (cumulative / sum) for the metric data results.</p>
   */
  Values?: number[];
}

/**
 * <p>Represents the result of processing your metric data batch request</p>
 */
export interface BatchGetMetricDataResponse {
  /**
   * <p>A list of successfully retrieved <code>MetricDataResult</code>.</p>
   */
  Results?: MetricDataResult[];

  /**
   * <p>A list of <code>MetricDataError</code> encountered while processing your metric data batch request.</p>
   */
  Errors?: MetricDataError[];
}

/**
 * <p>The request couldn't be processed because an error occurred with the Amazon SES API v2.</p>
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
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

export enum BehaviorOnMxFailure {
  REJECT_MESSAGE = "REJECT_MESSAGE",
  USE_DEFAULT_VALUE = "USE_DEFAULT_VALUE",
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
   * <p>The time when the blacklisting event occurred.</p>
   */
  ListingTime?: Date;

  /**
   * <p>Additional information about the blacklisting event, as provided by the blacklist
   *             maintainer.</p>
   */
  Description?: string;
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
   *             Amazon SES uses 7-bit ASCII by default. If the text includes characters outside of the ASCII
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
 * <p>An object that defines the email template to use for an email message, and the values
 *             to use for any message variables in that template. An <i>email
 *                 template</i> is a type of message template that contains content that you
 *             want to define, save, and reuse in email messages that you send.</p>
 */
export interface Template {
  /**
   * <p>The name of the template. You will refer to this name when you send email using the
   *                 <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
   *         </p>
   */
  TemplateName?: string;

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
}

/**
 * <p>An object that contains the body of the message. You can specify a template
 *             message.</p>
 */
export interface BulkEmailContent {
  /**
   * <p>The template to use for the bulk email message.</p>
   */
  Template?: Template;
}

/**
 * <p>An object that describes the recipients for an email.</p>
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
 * <p>An object which contains <code>ReplacementTemplateData</code> to be used for a
 *             specific <code>BulkEmailEntry</code>.</p>
 */
export interface ReplacementTemplate {
  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  ReplacementTemplateData?: string;
}

/**
 * <p>The <code>ReplaceEmailContent</code> object to be used for a specific
 *                 <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified
 *             within this object.</p>
 */
export interface ReplacementEmailContent {
  /**
   * <p>The <code>ReplacementTemplate</code> associated with
   *                 <code>ReplacementEmailContent</code>.</p>
   */
  ReplacementTemplate?: ReplacementTemplate;
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

export interface BulkEmailEntry {
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
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendBulkTemplatedEmail</code> operation. Tags correspond to
   *             characteristics of the email that you define, so that you can publish email sending
   *             events.</p>
   */
  ReplacementTags?: MessageTag[];

  /**
   * <p>The <code>ReplacementEmailContent</code> associated with a
   *             <code>BulkEmailEntry</code>.</p>
   */
  ReplacementEmailContent?: ReplacementEmailContent;
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
 * <p>The result of the <code>SendBulkEmail</code> operation of each specified
 *                 <code>BulkEmailEntry</code>.</p>
 */
export interface BulkEmailEntryResult {
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
}

export enum DimensionValueSource {
  EMAIL_HEADER = "EMAIL_HEADER",
  LINK_TAG = "LINK_TAG",
  MESSAGE_TAG = "MESSAGE_TAG",
}

/**
 * <p>An object that defines the dimension configuration to use when you send email events
 *             to Amazon CloudWatch.</p>
 */
export interface CloudWatchDimensionConfiguration {
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
   * <p>The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To
   *             use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or
   *             a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose
   *                 <code>messageTag</code>. To use your own email headers, choose
   *                 <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.</p>
   */
  DimensionValueSource: DimensionValueSource | string | undefined;

  /**
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the
   *             value of the dimension when you send an email. This value has to meet the following
   *             criteria:</p>
   *         <ul>
   *             <li>
   *                 <p>Can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-), at signs (@), and periods (.).</p>
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

/**
 * <p>If there is already an ongoing account details update under review.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

export enum SubscriptionStatus {
  OPT_IN = "OPT_IN",
  OPT_OUT = "OPT_OUT",
}

/**
 * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
 */
export interface TopicPreference {
  /**
   * <p>The name of the topic.</p>
   */
  TopicName: string | undefined;

  /**
   * <p>The contact's subscription status to a topic which is either <code>OPT_IN</code> or
   *                 <code>OPT_OUT</code>.</p>
   */
  SubscriptionStatus: SubscriptionStatus | string | undefined;
}

/**
 * <p>A contact is the end-user who is receiving the email.</p>
 */
export interface Contact {
  /**
   * <p>The contact's email address.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * <p>The default topic preferences applied to the contact.</p>
   */
  TopicDefaultPreferences?: TopicPreference[];

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * <p>A timestamp noting the last time the contact's information was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * <p>A list that contains contacts that have subscribed to a particular topic or
 *             topics.</p>
 */
export interface ContactList {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName?: string;

  /**
   * <p>A timestamp noting the last time the contact list was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export enum ContactListImportAction {
  DELETE = "DELETE",
  PUT = "PUT",
}

/**
 * <p>An object that contains details about the action of a contact list.</p>
 */
export interface ContactListDestination {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>>The type of action to perform on the addresses. The following are the
   *             possible values:</p>
   *         <ul>
   *             <li>
   *                 <p>PUT: add the addresses to the contact list. If the record already exists, it
   *                     will override it with the new value.</p>
   *             </li>
   *             <li>
   *                 <p>DELETE: remove the addresses from the contact list.</p>
   *             </li>
   *          </ul>
   */
  ContactListImportAction: ContactListImportAction | string | undefined;
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
   * <p>The name of the dedicated IP pool to associate with the configuration set.</p>
   */
  SendingPoolName?: string;
}

/**
 * <p>Enable or disable collection of reputation metrics for emails that you send using this
 *             configuration set in the current Amazon Web Services Region. </p>
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
 *             in the current Amazon Web Services Region.</p>
 */
export interface SendingOptions {
  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
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
 *                 <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in
 *                     any tag keys or values that you define. In addition, you can't edit or remove
 *                     tag keys or values that use this prefix. Tags that use this prefix don’t count
 *                     against the limit of 50 tags per resource.</p>
 *             </li>
 *             <li>
 *                 <p>You can associate tags with public or shared resources, but the tags are
 *                     available only for your Amazon Web Services account, not any other accounts that share the
 *                     resource. In addition, the tags are available only for resources that are
 *                     located in the specified Amazon Web Services Region for your Amazon Web Services account.</p>
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
   *             value is 256 characters. The minimum length is 0 characters. If you don't want a
   *             resource to have a specific tag value, don't specify a value for this parameter. If you
   *             don't specify a value, Amazon SES sets the value to an empty string.</p>
   */
  Value: string | undefined;
}

/**
 * <p>An object that defines the tracking options for a configuration set. When you use the
 *             Amazon SES API v2 to send an email, it contains an invisible image that's used to track when
 *             recipients open your email. If your email contains links, those links are changed
 *             slightly in order to track when recipients click them.</p>
 *         <p>These images and links include references to a domain operated by Amazon Web Services. You can
 *             optionally configure the Amazon SES to use a domain that you operate for these images and
 *             links.</p>
 */
export interface TrackingOptions {
  /**
   * <p>The domain to use for tracking open and click events.</p>
   */
  CustomRedirectDomain: string | undefined;
}

export enum FeatureStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>An object containing additional settings for your VDM configuration as applicable to the Dashboard.</p>
 */
export interface DashboardOptions {
  /**
   * <p>Specifies the status of your VDM engagement metrics collection. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> – Amazon SES enables engagement metrics for the configuration set.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> – Amazon SES disables engagement metrics for the configuration set.</p>
   *             </li>
   *          </ul>
   */
  EngagementMetrics?: FeatureStatus | string;
}

/**
 * <p>An object containing additional settings for your VDM configuration as applicable to the Guardian.</p>
 */
export interface GuardianOptions {
  /**
   * <p>Specifies the status of your VDM optimized shared delivery. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> – Amazon SES enables optimized shared delivery for the configuration set.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> – Amazon SES disables optimized shared delivery for the configuration set.</p>
   *             </li>
   *          </ul>
   */
  OptimizedSharedDelivery?: FeatureStatus | string;
}

/**
 * <p>An object that defines the VDM settings that apply to emails that you send
 *             using the configuration set.</p>
 */
export interface VdmOptions {
  /**
   * <p>Specifies additional settings for your VDM configuration as applicable to the Dashboard.</p>
   */
  DashboardOptions?: DashboardOptions;

  /**
   * <p>Specifies additional settings for your VDM configuration as applicable to the Guardian.</p>
   */
  GuardianOptions?: GuardianOptions;
}

/**
 * <p>A request to create a configuration set.</p>
 */
export interface CreateConfigurationSetRequest {
  /**
   * <p>The name of the configuration set. The name can contain up to 64 alphanumeric
   *             characters, including letters, numbers, hyphens (-) and underscores (_) only.</p>
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
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) to associate with the
   *             configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   * <p>An object that defines the VDM options for emails that you send using the configuration set.</p>
   */
  VdmOptions?: VdmOptions;
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
 * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
 *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 */
export interface KinesisFirehoseDestination {
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
  SUBSCRIPTION = "SUBSCRIPTION",
}

/**
 * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
 *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
 *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
 *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 */
export interface PinpointDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project to send email events to.</p>
   */
  ApplicationArn?: string;
}

/**
 * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
 *             send notification when certain email events occur.</p>
 */
export interface SnsDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to. For
   *             more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
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
   * <p>An array that specifies which events the Amazon SES API v2 should send to the destinations in
   *             this <code>EventDestinationDefinition</code>.</p>
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
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * <p>A request to add an event destination to a configuration set.</p>
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * <p>The name of the configuration set .</p>
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

export interface CreateContactRequest {
  /**
   * <p>The name of the contact list to which the contact should be added.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>The contact's email address.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The contact's preferences for being opted-in to or opted-out of topics.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * <p>The attribute data attached to a contact.</p>
   */
  AttributesData?: string;
}

export interface CreateContactResponse {}

/**
 * <p>An interest group, theme, or label within a list. Lists can have multiple
 *             topics.</p>
 */
export interface Topic {
  /**
   * <p>The name of the topic.</p>
   */
  TopicName: string | undefined;

  /**
   * <p>The name of the topic the contact will see.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>A description of what the topic is about, which the contact will see.</p>
   */
  Description?: string;

  /**
   * <p>The default subscription status to be applied to a contact if the contact has not
   *             noted their preference for subscribing to a topic.</p>
   */
  DefaultSubscriptionStatus: SubscriptionStatus | string | undefined;
}

export interface CreateContactListRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;

  /**
   * <p>The tags associated with a contact list.</p>
   */
  Tags?: Tag[];
}

export interface CreateContactListResponse {}

/**
 * <p>Represents a request to create a custom verification email template.</p>
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateCustomVerificationEmailTemplateResponse {}

export enum ScalingMode {
  MANAGED = "MANAGED",
  STANDARD = "STANDARD",
}

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

  /**
   * <p>The type of scaling mode.</p>
   */
  ScalingMode?: ScalingMode | string;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateDedicatedIpPoolResponse {}

/**
 * <p>Represents the raw content of an email message.</p>
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
   * <p>The template to use for the email message.</p>
   */
  Template?: Template;
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

export enum DkimSigningKeyLength {
  RSA_1024_BIT = "RSA_1024_BIT",
  RSA_2048_BIT = "RSA_2048_BIT",
}

/**
 * <p>An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy DKIM</p>
 */
export interface DkimSigningAttributes {
  /**
   * <p>[Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a
   *             domain.</p>
   */
  DomainSigningSelector?: string;

  /**
   * <p>[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.</p>
   *         <p>The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using
   *             base64 encoding.</p>
   */
  DomainSigningPrivateKey?: string;

  /**
   * <p>[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.</p>
   */
  NextSigningKeyLength?: DkimSigningKeyLength | string;
}

/**
 * <p>A request to begin the verification process for an email identity (an email address or
 *             domain).</p>
 */
export interface CreateEmailIdentityRequest {
  /**
   * <p>The email address or domain to verify.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>An array of objects that define the tags (keys and values) to associate with the email
   *             identity.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If your request includes this object, Amazon SES configures the identity to use Bring Your
   *             Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be
   *             used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a>.</p>
   *         <p>You can only specify this object if the email identity is a domain, as opposed to an
   *             address.</p>
   */
  DkimSigningAttributes?: DkimSigningAttributes;

  /**
   * <p>The configuration set to use by default when sending from this identity. Note that any
   *             configuration set defined in the email sending request takes precedence. </p>
   */
  ConfigurationSetName?: string;
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
  /**
   * <p>If the value is <code>true</code>, then the messages that you send from the identity
   *             are signed using DKIM. If the value is <code>false</code>, then the messages that you
   *             send from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;

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
   * <p>A string that indicates how DKIM was configured for the identity. These are the
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
   * <p>[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.</p>
   */
  NextSigningKeyLength?: DkimSigningKeyLength | string;

  /**
   * <p>[Easy DKIM] The key length of the DKIM key pair in use.</p>
   */
  CurrentSigningKeyLength?: DkimSigningKeyLength | string;

  /**
   * <p>[Easy DKIM] The last time a key pair was generated for this identity.</p>
   */
  LastKeyGenerationTimestamp?: Date;
}

export enum IdentityType {
  DOMAIN = "DOMAIN",
  EMAIL_ADDRESS = "EMAIL_ADDRESS",
  MANAGED_DOMAIN = "MANAGED_DOMAIN",
}

/**
 * <p>If the email identity is a domain, this object contains information about the DKIM
 *             verification status for the domain.</p>
 *         <p>If the email identity is an email address, this object is empty. </p>
 */
export interface CreateEmailIdentityResponse {
  /**
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not
   *             supported.</p>
   */
  IdentityType?: IdentityType | string;

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
}

/**
 * <p>Represents a request to create a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CreateEmailIdentityPolicyRequest {
  /**
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *         <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateEmailIdentityPolicyResponse {}

/**
 * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
 *             part.</p>
 */
export interface EmailTemplateContent {
  /**
   * <p>The subject line of the email.</p>
   */
  Subject?: string;

  /**
   * <p>The email body that will be visible to recipients whose email clients do not display
   *             HTML.</p>
   */
  Text?: string;

  /**
   * <p>The HTML body of the email.</p>
   */
  Html?: string;
}

/**
 * <p>Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface CreateEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateEmailTemplateResponse {}

export enum DataFormat {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p>An object that contains details about the data source of the import job.</p>
 */
export interface ImportDataSource {
  /**
   * <p>An Amazon S3 URL in the format
   *                 s3://<i><bucket_name></i>/<i><object></i>.</p>
   */
  S3Url: string | undefined;

  /**
   * <p>The data format of the import job's data source.</p>
   */
  DataFormat: DataFormat | string | undefined;
}

export enum SuppressionListImportAction {
  DELETE = "DELETE",
  PUT = "PUT",
}

/**
 * <p>An object that contains details about the action of suppression list.</p>
 */
export interface SuppressionListDestination {
  /**
   * <p>The type of action to perform on the address. The following are possible values:</p>
   *         <ul>
   *             <li>
   *                 <p>PUT: add the addresses to the suppression list. If the record already exists,
   *                     it will override it with the new value.</p>
   *             </li>
   *             <li>
   *                 <p>DELETE: remove the addresses from the suppression list.</p>
   *             </li>
   *          </ul>
   */
  SuppressionListImportAction: SuppressionListImportAction | string | undefined;
}

/**
 * <p>An object that contains details about the resource destination the import job is going
 *             to target.</p>
 */
export interface ImportDestination {
  /**
   * <p>An object that contains the action of the import job towards suppression list.</p>
   */
  SuppressionListDestination?: SuppressionListDestination;

  /**
   * <p>An object that contains the action of the import job towards a contact list.</p>
   */
  ContactListDestination?: ContactListDestination;
}

/**
 * <p>Represents a request to create an import job from a data source for a data
 *             destination.</p>
 */
export interface CreateImportJobRequest {
  /**
   * <p>The destination for the import job.</p>
   */
  ImportDestination: ImportDestination | undefined;

  /**
   * <p>The data source for the import job.</p>
   */
  ImportDataSource: ImportDataSource | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateImportJobResponse {
  /**
   * <p>A string that represents the import job ID.</p>
   */
  JobId?: string;
}

/**
 * <p>Contains information about a custom verification email template.</p>
 */
export interface CustomVerificationEmailTemplateMetadata {
  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;
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
 * <p>An object containing additional settings for your VDM configuration as applicable to the Dashboard.</p>
 */
export interface DashboardAttributes {
  /**
   * <p>Specifies the status of your VDM engagement metrics collection. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> – Amazon SES enables engagement metrics for your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> – Amazon SES disables engagement metrics for your account.</p>
   *             </li>
   *          </ul>
   */
  EngagementMetrics?: FeatureStatus | string;
}

export enum WarmupStatus {
  DONE = "DONE",
  IN_PROGRESS = "IN_PROGRESS",
}

/**
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES
 *             account.</p>
 *         <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing
 *                 Dedicated IP Addresses</a> in the <i>Amazon SES Developer
 *             Guide</i>.</p>
 */
export interface DedicatedIp {
  /**
   * <p>An IPv4 address.</p>
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
 * <p>Contains information about a dedicated IP pool.</p>
 */
export interface DedicatedIpPool {
  /**
   * <p>The name of the dedicated IP pool.</p>
   */
  PoolName: string | undefined;

  /**
   * <p>The type of the dedicated IP pool.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>STANDARD</code> – A dedicated IP pool where the customer can control which IPs are part of the pool.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MANAGED</code> – A dedicated IP pool where the reputation and number of IPs is automatically managed by Amazon SES.</p>
   *             </li>
   *          </ul>
   */
  ScalingMode: ScalingMode | string | undefined;
}

/**
 * <p>A request to delete a configuration set.</p>
 */
export interface DeleteConfigurationSetRequest {
  /**
   * <p>The name of the configuration set.</p>
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
   * <p>The name of the configuration set that contains the event destination to
   *             delete.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination to delete.</p>
   */
  EventDestinationName: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

export interface DeleteContactRequest {
  /**
   * <p>The name of the contact list from which the contact should be removed.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>The contact's email address.</p>
   */
  EmailAddress: string | undefined;
}

export interface DeleteContactResponse {}

export interface DeleteContactListRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;
}

export interface DeleteContactListResponse {}

/**
 * <p>Represents a request to delete an existing custom verification email template.</p>
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  /**
   * <p>The name of the custom verification email template that you want to delete.</p>
   */
  TemplateName: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteCustomVerificationEmailTemplateResponse {}

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
 *             the ability to send email from that identity. You can restore your ability to send email
 *             by completing the verification process for the identity again.</p>
 */
export interface DeleteEmailIdentityRequest {
  /**
   * <p>The identity (that is, the email address or domain) to delete.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityResponse {}

/**
 * <p>Represents a request to delete a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to
 *             use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DeleteEmailIdentityPolicyRequest {
  /**
   * <p>The email identity.</p>
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

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityPolicyResponse {}

/**
 * <p>Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteEmailTemplateRequest {
  /**
   * <p>The name of the template to be deleted.</p>
   */
  TemplateName: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteEmailTemplateResponse {}

/**
 * <p>A request to remove an email address from the suppression list for your
 *             account.</p>
 */
export interface DeleteSuppressedDestinationRequest {
  /**
   * <p>The suppressed email destination to remove from the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteSuppressedDestinationResponse {}

export enum DeliverabilityDashboardAccountStatus {
  ACTIVE = "ACTIVE",
  DISABLED = "DISABLED",
  PENDING_EXPIRATION = "PENDING_EXPIRATION",
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
   * <p>The date and time when the predictive inbox placement test was created.</p>
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
 * <p>An object that contains the deliverability data for a specific campaign. This data is
 *             available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface DomainDeliverabilityCampaign {
  /**
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
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
   * <p>The first time when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  FirstSeenDateTime?: Date;

  /**
   * <p>The last time when the email message was delivered to any
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
 * <p>An object that contains information about the inbox placement data settings for a
 *             verified domain that’s associated with your Amazon Web Services account. This data is available only
 *             if you enabled the Deliverability dashboard for the domain.</p>
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
   * <p>A verified domain that’s associated with your Amazon Web Services account and currently has an
   *             active Deliverability dashboard subscription.</p>
   */
  Domain?: string;

  /**
   * <p>The date when you enabled the Deliverability dashboard for the
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
 * <p>Contains information about an email template.</p>
 */
export interface EmailTemplateMetadata {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * <p>In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, complaints and delivery delays. <i>Event destinations</i>
 *             are places that you can send information about these events to. For example, you can
 *             send event data to Amazon SNS to receive notifications when you receive bounces or
 *             complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
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
   * <p>The types of events that Amazon SES sends to the specified event destinations.</p>
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
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * <p>An object that contains the failure details about an import job.</p>
 */
export interface FailureInfo {
  /**
   * <p>An Amazon S3 presigned URL that contains all the failed records and related
   *             information.</p>
   */
  FailedRecordsS3Url?: string;

  /**
   * <p>A message about why the import job failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>A request to obtain information about the email-sending capabilities of your Amazon SES
 *             account.</p>
 */
export interface GetAccountRequest {}

/**
 * <p>An object that contains information about the per-day and per-second sending limits
 *             for your Amazon SES account in the current Amazon Web Services Region.</p>
 */
export interface SendQuota {
  /**
   * <p>The maximum number of emails that you can send in the current Amazon Web Services Region over a
   *             24-hour period. A value of -1 signifies an unlimited quota. (This value is also referred
   *             to as your <i>sending quota</i>.)</p>
   */
  Max24HourSend?: number;

  /**
   * <p>The maximum number of emails that you can send per second in the current Amazon Web Services Region.
   *             This value is also called your <i>maximum sending rate</i> or your
   *                 <i>maximum TPS (transactions per second) rate</i>.</p>
   */
  MaxSendRate?: number;

  /**
   * <p>The number of emails sent from your Amazon SES account in the current Amazon Web Services Region over the
   *             past 24 hours.</p>
   */
  SentLast24Hours?: number;
}

/**
 * <p>An object that contains information about the email address suppression preferences
 *             for your account in the current Amazon Web Services Region.</p>
 */
export interface SuppressionAttributes {
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

/**
 * <p>An object containing additional settings for your VDM configuration as applicable to the Guardian.</p>
 */
export interface GuardianAttributes {
  /**
   * <p>Specifies the status of your VDM optimized shared delivery. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> – Amazon SES enables optimized shared delivery for your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> – Amazon SES disables optimized shared delivery for your account.</p>
   *             </li>
   *          </ul>
   */
  OptimizedSharedDelivery?: FeatureStatus | string;
}

/**
 * <p>The VDM attributes that apply to your Amazon SES account.</p>
 */
export interface VdmAttributes {
  /**
   * <p>Specifies the status of your VDM configuration. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> – Amazon SES enables VDM for your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code> – Amazon SES disables VDM for your account.</p>
   *             </li>
   *          </ul>
   */
  VdmEnabled: FeatureStatus | string | undefined;

  /**
   * <p>Specifies additional settings for your VDM configuration as applicable to the Dashboard.</p>
   */
  DashboardAttributes?: DashboardAttributes;

  /**
   * <p>Specifies additional settings for your VDM configuration as applicable to the Guardian.</p>
   */
  GuardianAttributes?: GuardianAttributes;
}

/**
 * <p>A list of details about the email-sending capabilities of your Amazon SES account in the
 *             current Amazon Web Services Region.</p>
 */
export interface GetAccountResponse {
  /**
   * <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP
   *             addresses that are associated with your account.</p>
   */
  DedicatedIpAutoWarmupEnabled?: boolean;

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
   * <p>Indicates whether or not your account has production access in the current Amazon Web Services
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
   * <p>An object that contains information about the per-day and per-second sending limits
   *             for your Amazon SES account in the current Amazon Web Services Region.</p>
   */
  SendQuota?: SendQuota;

  /**
   * <p>Indicates whether or not email sending is enabled for your Amazon SES account in the
   *             current Amazon Web Services Region.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>An object that contains information about the email address suppression preferences
   *             for your account in the current Amazon Web Services Region.</p>
   */
  SuppressionAttributes?: SuppressionAttributes;

  /**
   * <p>An object that defines your account details.</p>
   */
  Details?: AccountDetails;

  /**
   * <p>The VDM attributes that apply to your Amazon SES account.</p>
   */
  VdmAttributes?: VdmAttributes;
}

/**
 * <p>A request to retrieve a list of the blacklists that your dedicated IP addresses appear
 *             on.</p>
 */
export interface GetBlacklistReportsRequest {
  /**
   * <p>A list of IP addresses that you want to retrieve blacklist information about. You can
   *             only specify the dedicated IP addresses that you use to send email using Amazon SES or
   *             Amazon Pinpoint.</p>
   */
  BlacklistItemNames: string[] | undefined;
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
   * <p>The name of the configuration set.</p>
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
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   * <p>An object that contains information about the VDM preferences for your configuration set.</p>
   */
  VdmOptions?: VdmOptions;
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
 * <p>Information about an event destination for a configuration set.</p>
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * <p>An array that includes all of the events destinations that have been configured for
   *             the configuration set.</p>
   */
  EventDestinations?: EventDestination[];
}

export interface GetContactRequest {
  /**
   * <p>The name of the contact list to which the contact belongs.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>The contact's email addres.</p>
   */
  EmailAddress: string | undefined;
}

export interface GetContactResponse {
  /**
   * <p>The name of the contact list to which the contact belongs.</p>
   */
  ContactListName?: string;

  /**
   * <p>The contact's email addres.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The contact's preference for being opted-in to or opted-out of a topic.></p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * <p>The default topic preferences applied to the contact.</p>
   */
  TopicDefaultPreferences?: TopicPreference[];

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * <p>The attribute data attached to a contact.</p>
   */
  AttributesData?: string;

  /**
   * <p>A timestamp noting when the contact was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>A timestamp noting the last time the contact's information was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export interface GetContactListRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;
}

export interface GetContactListResponse {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName?: string;

  /**
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;

  /**
   * <p>A timestamp noting when the contact list was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>A timestamp noting the last time the contact list was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The tags associated with a contact list.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>Represents a request to retrieve an existing custom verification email
 *             template.</p>
 */
export interface GetCustomVerificationEmailTemplateRequest {
  /**
   * <p>The name of the custom verification email template that you want to retrieve.</p>
   */
  TemplateName: string | undefined;
}

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface GetCustomVerificationEmailTemplateResponse {
  /**
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;

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
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;
}

/**
 * <p>A request to obtain more information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpRequest {
  /**
   * <p>The IP address that you want to obtain more information about. The value you specify
   *             has to be a dedicated IP address that's assocaited with your Amazon Web Services account.</p>
   */
  Ip: string | undefined;
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
 * <p>A request to obtain more information about a dedicated IP pool.</p>
 */
export interface GetDedicatedIpPoolRequest {
  /**
   * <p>The name of the dedicated IP pool to retrieve.</p>
   */
  PoolName: string | undefined;
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface GetDedicatedIpPoolResponse {
  /**
   * <p>An object that contains information about a dedicated IP pool.</p>
   */
  DedicatedIpPool?: DedicatedIpPool;
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
 * <p>Information about the dedicated IP addresses that are associated with your Amazon Web Services
 *             account.</p>
 */
export interface GetDedicatedIpsResponse {
  /**
   * <p>A list of dedicated IP addresses that are associated with your Amazon Web Services account.</p>
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
 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p>
 *
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface GetDeliverabilityDashboardOptionsRequest {}

/**
 * <p>An object that shows the status of the Deliverability dashboard.</p>
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * <p>Specifies whether the Deliverability dashboard is enabled. If this value is <code>true</code>,
   *             the dashboard is enabled.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * <p>The date  when your current subscription to the Deliverability dashboard
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
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   */
  CampaignId: string | undefined;
}

/**
 * <p>An object that contains all the deliverability data for a specific campaign. This data
 *             is available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
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
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;
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
   * <p>The action to take if the required MX record can't be found when you send an email.
   *             When you set this value to <code>USE_DEFAULT_VALUE</code>, the mail is sent using
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>REJECT_MESSAGE</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *         <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | string | undefined;
}

export enum VerificationStatus {
  FAILED = "FAILED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  TEMPORARY_FAILURE = "TEMPORARY_FAILURE",
}

/**
 * <p>Details about an email identity.</p>
 */
export interface GetEmailIdentityResponse {
  /**
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not
   *             supported.</p>
   */
  IdentityType?: IdentityType | string;

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
   * <p>An object that contains information about the Mail-From attributes for the email
   *             identity.</p>
   */
  MailFromAttributes?: MailFromAttributes;

  /**
   * <p>A map of policy names to policies.</p>
   */
  Policies?: Record<string, string>;

  /**
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the email identity.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration set used by default when sending from this identity.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>The verification status of the identity. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet been able to verify the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – The verification process failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the verification status of the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – The verification process hasn't been
   *                     initiated for the identity.</p>
   *             </li>
   *          </ul>
   */
  VerificationStatus?: VerificationStatus | string;
}

/**
 * <p>A request to return the policies of an email identity.</p>
 */
export interface GetEmailIdentityPoliciesRequest {
  /**
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * <p>Identity policies associated with email identity.</p>
 */
export interface GetEmailIdentityPoliciesResponse {
  /**
   * <p>A map of policy names to policies.</p>
   */
  Policies?: Record<string, string>;
}

/**
 * <p>Represents a request to display the template object (which includes the subject line,
 *             HTML part and text part) for the template you specify.</p>
 */
export interface GetEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface GetEmailTemplateResponse {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * <p>Represents a request for information about an import job using the import job
 *             ID.</p>
 */
export interface GetImportJobRequest {
  /**
   * <p>The ID of the import job.</p>
   */
  JobId: string | undefined;
}

export enum JobStatus {
  COMPLETED = "COMPLETED",
  CREATED = "CREATED",
  FAILED = "FAILED",
  PROCESSING = "PROCESSING",
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface GetImportJobResponse {
  /**
   * <p>A string that represents the import job ID.</p>
   */
  JobId?: string;

  /**
   * <p>The destination of the import job.</p>
   */
  ImportDestination?: ImportDestination;

  /**
   * <p>The data source of the import job.</p>
   */
  ImportDataSource?: ImportDataSource;

  /**
   * <p>The failure details about an import job.</p>
   */
  FailureInfo?: FailureInfo;

  /**
   * <p>The status of the import job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The time stamp of when the import job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time stamp of when the import job was completed.</p>
   */
  CompletedTimestamp?: Date;

  /**
   * <p>The current number of records processed.</p>
   */
  ProcessedRecordsCount?: number;

  /**
   * <p>The number of records that failed processing because of invalid input or other
   *             reasons.</p>
   */
  FailedRecordsCount?: number;
}

/**
 * <p>A request to retrieve information about an email address that's on the suppression
 *             list for your account.</p>
 */
export interface GetSuppressedDestinationRequest {
  /**
   * <p>The email address that's on the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * <p>An object that contains additional attributes that are related an email address that
 *             is on the suppression list for your account.</p>
 */
export interface SuppressedDestinationAttributes {
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

/**
 * <p>An object that contains information about an email address that is on the suppression
 *             list for your account.</p>
 */
export interface SuppressedDestination {
  /**
   * <p>The email address that is on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | string | undefined;

  /**
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;

  /**
   * <p>An optional value that can contain additional information about the reasons that the
   *             address was added to the suppression list for your account.</p>
   */
  Attributes?: SuppressedDestinationAttributes;
}

/**
 * <p>Information about the suppressed email address.</p>
 */
export interface GetSuppressedDestinationResponse {
  /**
   * <p>An object containing information about the suppressed email address.</p>
   */
  SuppressedDestination: SuppressedDestination | undefined;
}

/**
 * <p>Information about an email identity.</p>
 */
export interface IdentityInfo {
  /**
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> type is not supported
   *             for email identity types.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The address or domain of the identity.</p>
   */
  IdentityName?: string;

  /**
   * <p>Indicates whether or not you can send email from the identity.</p>
   *         <p>An <i>identity</i> is an email address or domain that you send email
   *             from. Before you can send email from an identity, you have to demostrate that you own
   *             the identity, and that you authorize Amazon SES to send email from that identity.</p>
   */
  SendingEnabled?: boolean;

  /**
   * <p>The verification status of the identity. The status can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet been able to verify the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code> – The verification process failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the verification status of the identity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NOT_STARTED</code> – The verification process hasn't been
   *                     initiated for the identity.</p>
   *             </li>
   *          </ul>
   */
  VerificationStatus?: VerificationStatus | string;
}

export enum ImportDestinationType {
  CONTACT_LIST = "CONTACT_LIST",
  SUPPRESSION_LIST = "SUPPRESSION_LIST",
}

/**
 * <p>A summary of the import job.</p>
 */
export interface ImportJobSummary {
  /**
   * <p>A string that represents the import job ID.</p>
   */
  JobId?: string;

  /**
   * <p>An object that contains details about the resource destination the import job is going
   *             to target.</p>
   */
  ImportDestination?: ImportDestination;

  /**
   * <p>The status of the import job.</p>
   */
  JobStatus?: JobStatus | string;

  /**
   * <p>The date and time when the import job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The current number of records processed.</p>
   */
  ProcessedRecordsCount?: number;

  /**
   * <p>The number of records that failed processing because of invalid input or other
   *             reasons.</p>
   */
  FailedRecordsCount?: number;
}

/**
 * <p>The specified request includes an invalid or expired token.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
  }
}

/**
 * <p>A request to obtain a list of configuration sets for your Amazon SES account in the current
 *             Amazon Web Services Region.</p>
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
 * <p>A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.</p>
 */
export interface ListConfigurationSetsResponse {
  /**
   * <p>An array that contains all of the configuration sets in your Amazon SES account in the
   *             current Amazon Web Services Region.</p>
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

export interface ListContactListsRequest {
  /**
   * <p>Maximum number of contact lists to return at once. Use this parameter to paginate
   *             results. If additional contact lists exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             lists.</p>
   */
  PageSize?: number;

  /**
   * <p>A string token indicating that there might be additional contact lists available to be
   *             listed. Use the token provided in the Response to use in the subsequent call to
   *             ListContactLists with the same parameters to retrieve the next page of contact
   *             lists.</p>
   */
  NextToken?: string;
}

export interface ListContactListsResponse {
  /**
   * <p>The available contact lists.</p>
   */
  ContactLists?: ContactList[];

  /**
   * <p>A string token indicating that there might be additional contact lists available to be
   *             listed. Copy this token to a subsequent call to <code>ListContactLists</code> with the
   *             same parameters to retrieve the next page of contact lists.</p>
   */
  NextToken?: string;
}

/**
 * <p>Used for filtering by a specific topic preference.</p>
 */
export interface TopicFilter {
  /**
   * <p>The name of a topic on which you wish to apply the filter.</p>
   */
  TopicName?: string;

  /**
   * <p>Notes that the default subscription status should be applied to a contact because the
   *             contact has not noted their preference for subscribing to a topic.</p>
   */
  UseDefaultIfPreferenceUnavailable?: boolean;
}

/**
 * <p>A filter that can be applied to a list of contacts.</p>
 */
export interface ListContactsFilter {
  /**
   * <p>The status by which you are filtering: <code>OPT_IN</code> or
   *             <code>OPT_OUT</code>.</p>
   */
  FilteredStatus?: SubscriptionStatus | string;

  /**
   * <p>Used for filtering by a specific topic preference.</p>
   */
  TopicFilter?: TopicFilter;
}

export interface ListContactsRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>A filter that can be applied to a list of contacts.</p>
   */
  Filter?: ListContactsFilter;

  /**
   * <p>The number of contacts that may be returned at once, which is dependent on if there
   *             are more or less contacts than the value of the PageSize. Use this parameter to
   *             paginate results. If additional contacts exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             contacts.</p>
   */
  PageSize?: number;

  /**
   * <p>A string token indicating that there might be additional contacts available to be
   *             listed. Use the token provided in the Response to use in the subsequent call to
   *             ListContacts with the same parameters to retrieve the next page of contacts.</p>
   */
  NextToken?: string;
}

export interface ListContactsResponse {
  /**
   * <p>The contacts present in a specific contact list.</p>
   */
  Contacts?: Contact[];

  /**
   * <p>A string token indicating that there might be additional contacts available to be
   *             listed. Copy this token to a subsequent call to <code>ListContacts</code> with the same
   *             parameters to retrieve the next page of contacts.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents a request to list the existing custom verification email templates for your
 *             account.</p>
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  /**
   * <p>A token returned from a previous call to
   *                 <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the
   *             list of custom verification email templates.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to
   *                 <code>ListCustomVerificationEmailTemplates</code>. If the number of results is
   *             larger than the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *         <p>The value you specify has to be at least 1, and can be no more than 50.</p>
   */
  PageSize?: number;
}

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface ListCustomVerificationEmailTemplatesResponse {
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
   * <p>A list of all of the dedicated IP pools that are associated with your Amazon Web Services account in
   *             the current Region.</p>
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
 *             enabled the Deliverability dashboard.</p>
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * <p>The first day that you want to obtain deliverability data
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * <p>The last day that you want to obtain deliverability data for.
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
 *             a domain only if you enabled the Deliverability dashboard for the domain.</p>
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
 * <p>A request to list all of the email identities associated with your Amazon Web Services account. This
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
 * <p>A list of all of the identities that you've attempted to verify, regardless of whether
 *             or not those identities were successfully verified.</p>
 */
export interface ListEmailIdentitiesResponse {
  /**
   * <p>An array that includes all of the email identities associated with your Amazon Web Services
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

/**
 * <p>Represents a request to list the email templates present in your Amazon SES account in the
 *             current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListEmailTemplatesRequest {
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

/**
 * <p>The following elements are returned by the service.</p>
 */
export interface ListEmailTemplatesResponse {
  /**
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES
   *             account.</p>
   */
  TemplatesMetadata?: EmailTemplateMetadata[];

  /**
   * <p>A token indicating that there are additional email templates available to be listed.
   *             Pass this token to a subsequent <code>ListEmailTemplates</code> call to retrieve the
   *             next 10 email templates.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents a request to list all of the import jobs for a data destination within the
 *             specified maximum number of import jobs.</p>
 */
export interface ListImportJobsRequest {
  /**
   * <p>The destination of the import job, which can be used to list import jobs that have a
   *             certain <code>ImportDestinationType</code>.</p>
   */
  ImportDestinationType?: ImportDestinationType | string;

  /**
   * <p>A string token indicating that there might be additional import jobs available to be
   *             listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the
   *             same parameters to retrieve the next page of import jobs.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of import jobs to return at once. Use this parameter to paginate
   *             results. If additional import jobs exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             addresses.</p>
   */
  PageSize?: number;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface ListImportJobsResponse {
  /**
   * <p>A list of the import job summaries.</p>
   */
  ImportJobs?: ImportJobSummary[];

  /**
   * <p>A string token indicating that there might be additional import jobs available to be
   *             listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the
   *             same parameters to retrieve the next page of import jobs.</p>
   */
  NextToken?: string;
}

/**
 * <p>An object used to specify a list or topic to which an email belongs, which will be
 *             used when a contact chooses to unsubscribe.</p>
 */
export interface ListManagementOptions {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>The name of the topic.</p>
   */
  TopicName?: string;
}

export enum ListRecommendationsFilterKey {
  IMPACT = "IMPACT",
  RESOURCE_ARN = "RESOURCE_ARN",
  STATUS = "STATUS",
  TYPE = "TYPE",
}

/**
 * <p>Represents a request to list the existing recommendations for your account.</p>
 */
export interface ListRecommendationsRequest {
  /**
   * <p>Filters applied when retrieving recommendations. Can eiter be an individual filter, or
   *               combinations of <code>STATUS</code> and <code>IMPACT</code> or
   *               <code>STATUS</code> and <code>TYPE</code>
   *          </p>
   */
  Filter?: Record<string, string>;

  /**
   * <p>A token returned from a previous call to <code>ListRecommendations</code> to
   *             indicate the position in the list of recommendations.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of results to show in a single call to
   *             <code>ListRecommendations</code>. If the number of results is larger than
   *             the number you specified in this parameter, then the response includes a
   *             <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *         <p>The value you specify has to be at least 1, and can be no more than 100.</p>
   */
  PageSize?: number;
}

export enum RecommendationImpact {
  HIGH = "HIGH",
  LOW = "LOW",
}

export enum RecommendationStatus {
  FIXED = "FIXED",
  OPEN = "OPEN",
}

export enum RecommendationType {
  DKIM = "DKIM",
  DMARC = "DMARC",
  SPF = "SPF",
}

/**
 * <p>A recommendation generated for your account.</p>
 */
export interface Recommendation {
  /**
   * <p>The resource affected by the recommendation,
   *             with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The recommendation type, with values like <code>DKIM</code>,
   *             <code>SPF</code> or <code>DMARC</code>.</p>
   */
  Type?: RecommendationType | string;

  /**
   * <p>The recommendation description / disambiguator - e.g. <code>DKIM1</code> and <code>DKIM2</code>
   *               are different recommendations about your DKIM setup.</p>
   */
  Description?: string;

  /**
   * <p>The recommendation status, with values like
   *             <code>OPEN</code> or <code>FIXED</code>.</p>
   */
  Status?: RecommendationStatus | string;

  /**
   * <p>The first time this issue was encountered and the recommendation was generated.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The last time the recommendation was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The recommendation impact, with values like
   *             <code>HIGH</code> or <code>LOW</code>.</p>
   */
  Impact?: RecommendationImpact | string;
}

/**
 * <p>Contains the response to your request to retrieve the list of recommendations for your account.</p>
 */
export interface ListRecommendationsResponse {
  /**
   * <p>The recommendations applicable to your account.</p>
   */
  Recommendations?: Recommendation[];

  /**
   * <p>A string token indicating that there might be additional recommendations available to be
   *             listed. Use the token provided in the <code>ListRecommendationsResponse</code> to use in the
   *             subsequent call to <code>ListRecommendations</code> with the same parameters to retrieve the
   *             next page of recommendations.</p>
   */
  NextToken?: string;
}

/**
 * <p>A request to obtain a list of email destinations that are on the suppression list for
 *             your account.</p>
 */
export interface ListSuppressedDestinationsRequest {
  /**
   * <p>The factors that caused the email address to be added to .</p>
   */
  Reasons?: (SuppressionListReason | string)[];

  /**
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list after a specific date.</p>
   */
  StartDate?: Date;

  /**
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list before a specific date.</p>
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
}

/**
 * <p>A summary that describes the suppressed email address.</p>
 */
export interface SuppressedDestinationSummary {
  /**
   * <p>The email address that's on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | string | undefined;

  /**
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;
}

/**
 * <p>A list of suppressed email addresses.</p>
 */
export interface ListSuppressedDestinationsResponse {
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
   *             associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code>
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
 * <p>A request to submit new account details.</p>
 */
export interface PutAccountDetailsRequest {
  /**
   * <p>The type of email your account will send.</p>
   */
  MailType: MailType | string | undefined;

  /**
   * <p>The URL of your website. This information helps us better understand the type of
   *             content that you plan to send.</p>
   */
  WebsiteURL: string | undefined;

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
   * <p>Indicates whether or not your account should have production access in the current
   *             Amazon Web Services Region.</p>
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
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDetailsResponse {}

/**
 * <p>A request to change the ability of your account to send email.</p>
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * <p>Enables or disables your account's ability to send email. Set to <code>true</code> to
   *             enable email sending, or set to <code>false</code> to disable email sending.</p>
   *         <note>
   *             <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation
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
 * <p>A request to change your account's suppression preferences.</p>
 */
export interface PutAccountSuppressionAttributesRequest {
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

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSuppressionAttributesResponse {}

/**
 * <p>A request to submit new account VDM attributes.</p>
 */
export interface PutAccountVdmAttributesRequest {
  /**
   * <p>The VDM attributes that you wish to apply to your Amazon SES account.</p>
   */
  VdmAttributes: VdmAttributes | undefined;
}

export interface PutAccountVdmAttributesResponse {}

/**
 * <p>A request to associate a configuration set with a dedicated IP pool.</p>
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * <p>The name of the configuration set to associate with a dedicated IP pool.</p>
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
   * <p>The name of the dedicated IP pool to associate with the configuration set.</p>
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
   * <p>The name of the configuration set.</p>
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
 * <p>A request to enable or disable the ability of Amazon SES to send emails that use a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * <p>The name of the configuration set to enable or disable email sending for.</p>
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
 * <p>A request to change the account suppression list preferences for a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  /**
   * <p>The name of the configuration set to change the suppression list preferences
   *             for.</p>
   */
  ConfigurationSetName: string | undefined;

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

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSuppressionOptionsResponse {}

/**
 * <p>A request to add a custom domain for tracking open and click events to a configuration
 *             set.</p>
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The domain to use to track open and click events.</p>
   */
  CustomRedirectDomain?: string;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetTrackingOptionsResponse {}

/**
 * <p>A request to add specific VDM settings to a configuration set.</p>
 */
export interface PutConfigurationSetVdmOptionsRequest {
  /**
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The VDM options to apply to the configuration set.</p>
   */
  VdmOptions?: VdmOptions;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetVdmOptionsResponse {}

/**
 * <p>A request to move a dedicated IP address to a dedicated IP pool.</p>
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * <p>The IP address that you want to move to the dedicated IP pool. The value you specify
   *             has to be a dedicated IP address that's associated with your Amazon Web Services account.</p>
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
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p>
 *         <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * <p>Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this
   *             value to <code>true</code>.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             enabled the Deliverability dashboard for.</p>
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[];
}

/**
 * <p>A response that indicates whether the Deliverability dashboard is enabled.</p>
 */
export interface PutDeliverabilityDashboardOptionResponse {}

/**
 * <p>A request to associate a configuration set with an email identity.</p>
 */
export interface PutEmailIdentityConfigurationSetAttributesRequest {
  /**
   * <p>The email address or domain to associate with a configuration set.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The configuration set to associate with an email identity.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface PutEmailIdentityConfigurationSetAttributesResponse {}

/**
 * <p>A request to enable or disable DKIM signing of email that you send from an email
 *             identity.</p>
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * <p>The email identity.</p>
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

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityDkimAttributesResponse {}

/**
 * <p>A request to change the DKIM attributes for an email identity.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The method to use to configure DKIM for the identity. There are the following possible
   *             values:</p>
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
   *             to use to configure DKIM for the identity for Bring Your Own DKIM (BYODKIM) for the
   *             identity, or, configures the key length to be used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
   */
  SigningAttributes?: DkimSigningAttributes;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 *         <p>The following data is returned in JSON format by the service.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
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
}

/**
 * <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

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
   * <p>The verified email identity.</p>
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
   * <p>The action to take if the required MX record isn't found when you send an email. When
   *             you set this value to <code>UseDefaultValue</code>, the mail is sent using
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>RejectMessage</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
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
 * <p>A request to add an email destination to the suppression list for your account.</p>
 */
export interface PutSuppressedDestinationRequest {
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

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutSuppressedDestinationResponse {}

/**
 * <p>Represents a request to send email messages to multiple destinations using Amazon SES. For
 *             more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendBulkEmailRequest {
  /**
   * <p>The email address to use as the "From" address for the email. The
   *             address that you specify has to be verified.</p>
   */
  FromEmailAddress?: string;

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
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

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
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendEmail</code> operation. Tags correspond to characteristics of the
   *             email that you define, so that you can publish email sending events.</p>
   */
  DefaultEmailTags?: MessageTag[];

  /**
   * <p>An object that contains the body of the message. You can specify a template
   *             message.</p>
   */
  DefaultContent: BulkEmailContent | undefined;

  /**
   * <p>The list of bulk email entry objects.</p>
   */
  BulkEmailEntries: BulkEmailEntry[] | undefined;

  /**
   * <p>The name of the configuration set to use when sending the email.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * <p>The following data is returned in JSON format by the service.</p>
 */
export interface SendBulkEmailResponse {
  /**
   * <p>One object per intended recipient. Check each response object and retry any messages
   *             with a failure status.</p>
   */
  BulkEmailEntryResults: BulkEmailEntryResult[] | undefined;
}

/**
 * <p>Represents a request to send a custom verification email to a specified
 *             recipient.</p>
 */
export interface SendCustomVerificationEmailRequest {
  /**
   * <p>The email address to verify.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The name of the custom verification email template to use when sending the
   *             verification email.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>Name of a configuration set to use when sending the verification email.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface SendCustomVerificationEmailResponse {
  /**
   * <p>The unique message identifier returned from the
   *                 <code>SendCustomVerificationEmail</code> operation.</p>
   */
  MessageId?: string;
}

/**
 * <p>Represents a request to send a single formatted email using Amazon SES. For more
 *             information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-formatted.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface SendEmailRequest {
  /**
   * <p>The email address to use as the "From" address for the email. The
   *             address that you specify has to be verified.
   *             </p>
   */
  FromEmailAddress?: string;

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
   * <p>An object that contains the recipients of the email message.</p>
   */
  Destination?: Destination;

  /**
   * <p>The "Reply-to" email addresses for the message. When the recipient replies to the
   *             message, each Reply-to address receives the reply.</p>
   */
  ReplyToAddresses?: string[];

  /**
   * <p>The address that you want bounce and complaint notifications to be sent to.</p>
   */
  FeedbackForwardingEmailAddress?: string;

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

  /**
   * <p>The name of the configuration set to use when sending the email.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>An object used to specify a list or topic to which an email belongs, which will be
   *             used when a contact chooses to unsubscribe.</p>
   */
  ListManagementOptions?: ListManagementOptions;
}

/**
 * <p>A unique message ID that you receive when an email is accepted for sending.</p>
 */
export interface SendEmailResponse {
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

/**
 * <p>>Represents a request to create a preview of the MIME content of an email when
 *             provided with a template and a set of replacement data.</p>
 */
export interface TestRenderEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  TemplateData: string | undefined;
}

/**
 * <p>The following element is returned by the service.</p>
 */
export interface TestRenderEmailTemplateResponse {
  /**
   * <p>The complete MIME message rendered by applying the data in the
   *                 <code>TemplateData</code> parameter to the template specified in the TemplateName
   *             parameter.</p>
   */
  RenderedTemplate: string | undefined;
}

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
   *                 <code>/v2/email/tags?ResourceArn=ResourceArn&TagKeys=Key1&TagKeys=Key2</code>
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
   * <p>The name of the configuration set that contains the event destination to
   *             modify.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * <p>The name of the event destination.</p>
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

export interface UpdateContactRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>The contact's email addres.</p>
   */
  EmailAddress: string | undefined;

  /**
   * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * <p>The attribute data attached to a contact.</p>
   */
  AttributesData?: string;
}

export interface UpdateContactResponse {}

export interface UpdateContactListRequest {
  /**
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;
}

export interface UpdateContactListResponse {}

/**
 * <p>Represents a request to update an existing custom verification email template.</p>
 */
export interface UpdateCustomVerificationEmailTemplateRequest {
  /**
   * <p>The name of the custom verification email template that you want to update.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateCustomVerificationEmailTemplateResponse {}

/**
 * <p>Represents a request to update a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface UpdateEmailIdentityPolicyRequest {
  /**
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * <p>The name of the policy.</p>
   *
   *         <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *         <p> For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;
}

/**
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface UpdateEmailIdentityPolicyResponse {}

/**
 * <p>Represents a request to update an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface UpdateEmailTemplateRequest {
  /**
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface UpdateEmailTemplateResponse {}

/**
 * @internal
 */
export const ReviewDetailsFilterSensitiveLog = (obj: ReviewDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountDetailsFilterSensitiveLog = (obj: AccountDetails): any => ({
  ...obj,
  ...(obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING }),
  ...(obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING }),
  ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetMetricDataQueryFilterSensitiveLog = (obj: BatchGetMetricDataQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetMetricDataRequestFilterSensitiveLog = (obj: BatchGetMetricDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDataErrorFilterSensitiveLog = (obj: MetricDataError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDataResultFilterSensitiveLog = (obj: MetricDataResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetMetricDataResponseFilterSensitiveLog = (obj: BatchGetMetricDataResponse): any => ({
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
export const TemplateFilterSensitiveLog = (obj: Template): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkEmailContentFilterSensitiveLog = (obj: BulkEmailContent): any => ({
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
export const ReplacementTemplateFilterSensitiveLog = (obj: ReplacementTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplacementEmailContentFilterSensitiveLog = (obj: ReplacementEmailContent): any => ({
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
export const BulkEmailEntryFilterSensitiveLog = (obj: BulkEmailEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BulkEmailEntryResultFilterSensitiveLog = (obj: BulkEmailEntryResult): any => ({
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
export const TopicPreferenceFilterSensitiveLog = (obj: TopicPreference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactListFilterSensitiveLog = (obj: ContactList): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactListDestinationFilterSensitiveLog = (obj: ContactListDestination): any => ({
  ...obj,
});

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
export const SuppressionOptionsFilterSensitiveLog = (obj: SuppressionOptions): any => ({
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
export const DashboardOptionsFilterSensitiveLog = (obj: DashboardOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardianOptionsFilterSensitiveLog = (obj: GuardianOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VdmOptionsFilterSensitiveLog = (obj: VdmOptions): any => ({
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
export const CreateContactRequestFilterSensitiveLog = (obj: CreateContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactResponseFilterSensitiveLog = (obj: CreateContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicFilterSensitiveLog = (obj: Topic): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactListRequestFilterSensitiveLog = (obj: CreateContactListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactListResponseFilterSensitiveLog = (obj: CreateContactListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomVerificationEmailTemplateRequestFilterSensitiveLog = (
  obj: CreateCustomVerificationEmailTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateCustomVerificationEmailTemplateResponseFilterSensitiveLog = (
  obj: CreateCustomVerificationEmailTemplateResponse
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
export const MessageFilterSensitiveLog = (obj: Message): any => ({
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
export const DkimSigningAttributesFilterSensitiveLog = (obj: DkimSigningAttributes): any => ({
  ...obj,
  ...(obj.DomainSigningPrivateKey && { DomainSigningPrivateKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEmailIdentityRequestFilterSensitiveLog = (obj: CreateEmailIdentityRequest): any => ({
  ...obj,
  ...(obj.DkimSigningAttributes && {
    DkimSigningAttributes: DkimSigningAttributesFilterSensitiveLog(obj.DkimSigningAttributes),
  }),
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
export const CreateEmailIdentityPolicyRequestFilterSensitiveLog = (obj: CreateEmailIdentityPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEmailIdentityPolicyResponseFilterSensitiveLog = (obj: CreateEmailIdentityPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmailTemplateContentFilterSensitiveLog = (obj: EmailTemplateContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEmailTemplateRequestFilterSensitiveLog = (obj: CreateEmailTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEmailTemplateResponseFilterSensitiveLog = (obj: CreateEmailTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportDataSourceFilterSensitiveLog = (obj: ImportDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuppressionListDestinationFilterSensitiveLog = (obj: SuppressionListDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportDestinationFilterSensitiveLog = (obj: ImportDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImportJobRequestFilterSensitiveLog = (obj: CreateImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateImportJobResponseFilterSensitiveLog = (obj: CreateImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomVerificationEmailTemplateMetadataFilterSensitiveLog = (
  obj: CustomVerificationEmailTemplateMetadata
): any => ({
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
export const DashboardAttributesFilterSensitiveLog = (obj: DashboardAttributes): any => ({
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
export const DedicatedIpPoolFilterSensitiveLog = (obj: DedicatedIpPool): any => ({
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
export const DeleteContactRequestFilterSensitiveLog = (obj: DeleteContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactResponseFilterSensitiveLog = (obj: DeleteContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactListRequestFilterSensitiveLog = (obj: DeleteContactListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactListResponseFilterSensitiveLog = (obj: DeleteContactListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomVerificationEmailTemplateRequestFilterSensitiveLog = (
  obj: DeleteCustomVerificationEmailTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomVerificationEmailTemplateResponseFilterSensitiveLog = (
  obj: DeleteCustomVerificationEmailTemplateResponse
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
export const DeleteEmailIdentityPolicyRequestFilterSensitiveLog = (obj: DeleteEmailIdentityPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailIdentityPolicyResponseFilterSensitiveLog = (obj: DeleteEmailIdentityPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailTemplateRequestFilterSensitiveLog = (obj: DeleteEmailTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEmailTemplateResponseFilterSensitiveLog = (obj: DeleteEmailTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuppressedDestinationRequestFilterSensitiveLog = (obj: DeleteSuppressedDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuppressedDestinationResponseFilterSensitiveLog = (
  obj: DeleteSuppressedDestinationResponse
): any => ({
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
export const DomainDeliverabilityCampaignFilterSensitiveLog = (obj: DomainDeliverabilityCampaign): any => ({
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
export const EmailTemplateMetadataFilterSensitiveLog = (obj: EmailTemplateMetadata): any => ({
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
export const FailureInfoFilterSensitiveLog = (obj: FailureInfo): any => ({
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
export const SuppressionAttributesFilterSensitiveLog = (obj: SuppressionAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GuardianAttributesFilterSensitiveLog = (obj: GuardianAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VdmAttributesFilterSensitiveLog = (obj: VdmAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountResponseFilterSensitiveLog = (obj: GetAccountResponse): any => ({
  ...obj,
  ...(obj.Details && { Details: AccountDetailsFilterSensitiveLog(obj.Details) }),
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
export const GetConfigurationSetEventDestinationsResponseFilterSensitiveLog = (
  obj: GetConfigurationSetEventDestinationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactRequestFilterSensitiveLog = (obj: GetContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactResponseFilterSensitiveLog = (obj: GetContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactListRequestFilterSensitiveLog = (obj: GetContactListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactListResponseFilterSensitiveLog = (obj: GetContactListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomVerificationEmailTemplateRequestFilterSensitiveLog = (
  obj: GetCustomVerificationEmailTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCustomVerificationEmailTemplateResponseFilterSensitiveLog = (
  obj: GetCustomVerificationEmailTemplateResponse
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
export const GetDedicatedIpResponseFilterSensitiveLog = (obj: GetDedicatedIpResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpPoolRequestFilterSensitiveLog = (obj: GetDedicatedIpPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDedicatedIpPoolResponseFilterSensitiveLog = (obj: GetDedicatedIpPoolResponse): any => ({
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
export const GetEmailIdentityPoliciesRequestFilterSensitiveLog = (obj: GetEmailIdentityPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEmailIdentityPoliciesResponseFilterSensitiveLog = (obj: GetEmailIdentityPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEmailTemplateRequestFilterSensitiveLog = (obj: GetEmailTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEmailTemplateResponseFilterSensitiveLog = (obj: GetEmailTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImportJobRequestFilterSensitiveLog = (obj: GetImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetImportJobResponseFilterSensitiveLog = (obj: GetImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuppressedDestinationRequestFilterSensitiveLog = (obj: GetSuppressedDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuppressedDestinationAttributesFilterSensitiveLog = (obj: SuppressedDestinationAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuppressedDestinationFilterSensitiveLog = (obj: SuppressedDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSuppressedDestinationResponseFilterSensitiveLog = (obj: GetSuppressedDestinationResponse): any => ({
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
export const ImportJobSummaryFilterSensitiveLog = (obj: ImportJobSummary): any => ({
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
export const ListContactListsRequestFilterSensitiveLog = (obj: ListContactListsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactListsResponseFilterSensitiveLog = (obj: ListContactListsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TopicFilterFilterSensitiveLog = (obj: TopicFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactsFilterFilterSensitiveLog = (obj: ListContactsFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactsRequestFilterSensitiveLog = (obj: ListContactsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactsResponseFilterSensitiveLog = (obj: ListContactsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomVerificationEmailTemplatesRequestFilterSensitiveLog = (
  obj: ListCustomVerificationEmailTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomVerificationEmailTemplatesResponseFilterSensitiveLog = (
  obj: ListCustomVerificationEmailTemplatesResponse
): any => ({
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
export const ListEmailIdentitiesResponseFilterSensitiveLog = (obj: ListEmailIdentitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEmailTemplatesRequestFilterSensitiveLog = (obj: ListEmailTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEmailTemplatesResponseFilterSensitiveLog = (obj: ListEmailTemplatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportJobsRequestFilterSensitiveLog = (obj: ListImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportJobsResponseFilterSensitiveLog = (obj: ListImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagementOptionsFilterSensitiveLog = (obj: ListManagementOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendationsRequestFilterSensitiveLog = (obj: ListRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendationFilterSensitiveLog = (obj: Recommendation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendationsResponseFilterSensitiveLog = (obj: ListRecommendationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuppressedDestinationsRequestFilterSensitiveLog = (obj: ListSuppressedDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuppressedDestinationSummaryFilterSensitiveLog = (obj: SuppressedDestinationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSuppressedDestinationsResponseFilterSensitiveLog = (obj: ListSuppressedDestinationsResponse): any => ({
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
export const PutAccountDetailsRequestFilterSensitiveLog = (obj: PutAccountDetailsRequest): any => ({
  ...obj,
  ...(obj.WebsiteURL && { WebsiteURL: SENSITIVE_STRING }),
  ...(obj.UseCaseDescription && { UseCaseDescription: SENSITIVE_STRING }),
  ...(obj.AdditionalContactEmailAddresses && { AdditionalContactEmailAddresses: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutAccountDetailsResponseFilterSensitiveLog = (obj: PutAccountDetailsResponse): any => ({
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
export const PutAccountSuppressionAttributesRequestFilterSensitiveLog = (
  obj: PutAccountSuppressionAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountSuppressionAttributesResponseFilterSensitiveLog = (
  obj: PutAccountSuppressionAttributesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountVdmAttributesRequestFilterSensitiveLog = (obj: PutAccountVdmAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAccountVdmAttributesResponseFilterSensitiveLog = (obj: PutAccountVdmAttributesResponse): any => ({
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
export const PutConfigurationSetSuppressionOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetSuppressionOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetSuppressionOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetSuppressionOptionsResponse
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
export const PutConfigurationSetVdmOptionsRequestFilterSensitiveLog = (
  obj: PutConfigurationSetVdmOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutConfigurationSetVdmOptionsResponseFilterSensitiveLog = (
  obj: PutConfigurationSetVdmOptionsResponse
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
export const PutEmailIdentityConfigurationSetAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityConfigurationSetAttributesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEmailIdentityConfigurationSetAttributesResponseFilterSensitiveLog = (
  obj: PutEmailIdentityConfigurationSetAttributesResponse
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
export const PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityDkimSigningAttributesRequest
): any => ({
  ...obj,
  ...(obj.SigningAttributes && { SigningAttributes: DkimSigningAttributesFilterSensitiveLog(obj.SigningAttributes) }),
});

/**
 * @internal
 */
export const PutEmailIdentityDkimSigningAttributesResponseFilterSensitiveLog = (
  obj: PutEmailIdentityDkimSigningAttributesResponse
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
export const PutSuppressedDestinationRequestFilterSensitiveLog = (obj: PutSuppressedDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutSuppressedDestinationResponseFilterSensitiveLog = (obj: PutSuppressedDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendBulkEmailRequestFilterSensitiveLog = (obj: SendBulkEmailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendBulkEmailResponseFilterSensitiveLog = (obj: SendBulkEmailResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendCustomVerificationEmailRequestFilterSensitiveLog = (obj: SendCustomVerificationEmailRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendCustomVerificationEmailResponseFilterSensitiveLog = (
  obj: SendCustomVerificationEmailResponse
): any => ({
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
export const TestRenderEmailTemplateRequestFilterSensitiveLog = (obj: TestRenderEmailTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestRenderEmailTemplateResponseFilterSensitiveLog = (obj: TestRenderEmailTemplateResponse): any => ({
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

/**
 * @internal
 */
export const UpdateContactRequestFilterSensitiveLog = (obj: UpdateContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactResponseFilterSensitiveLog = (obj: UpdateContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactListRequestFilterSensitiveLog = (obj: UpdateContactListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactListResponseFilterSensitiveLog = (obj: UpdateContactListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomVerificationEmailTemplateRequestFilterSensitiveLog = (
  obj: UpdateCustomVerificationEmailTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateCustomVerificationEmailTemplateResponseFilterSensitiveLog = (
  obj: UpdateCustomVerificationEmailTemplateResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmailIdentityPolicyRequestFilterSensitiveLog = (obj: UpdateEmailIdentityPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmailIdentityPolicyResponseFilterSensitiveLog = (obj: UpdateEmailIdentityPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmailTemplateRequestFilterSensitiveLog = (obj: UpdateEmailTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEmailTemplateResponseFilterSensitiveLog = (obj: UpdateEmailTemplateResponse): any => ({
  ...obj,
});
