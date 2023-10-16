// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SESv2ServiceException as __BaseException } from "./SESv2ServiceException";

/**
 * @public
 * @enum
 */
export const ContactLanguage = {
  EN: "EN",
  JA: "JA",
} as const;

/**
 * @public
 */
export type ContactLanguage = (typeof ContactLanguage)[keyof typeof ContactLanguage];

/**
 * @public
 * @enum
 */
export const MailType = {
  MARKETING: "MARKETING",
  TRANSACTIONAL: "TRANSACTIONAL",
} as const;

/**
 * @public
 */
export type MailType = (typeof MailType)[keyof typeof MailType];

/**
 * @public
 * @enum
 */
export const ReviewStatus = {
  DENIED: "DENIED",
  FAILED: "FAILED",
  GRANTED: "GRANTED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus];

/**
 * @public
 * <p>An object that contains information about your account details review.</p>
 */
export interface ReviewDetails {
  /**
   * @public
   * <p>The status of the latest review of your account. The status can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – We have received your appeal and are in the
   *                     process of reviewing it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GRANTED</code> – Your appeal has been reviewed and your production
   *                     access has been granted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DENIED</code> – Your appeal has been reviewed and your production
   *                     access has been denied.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – An internal error occurred and we didn't receive
   *                     your appeal. You can submit your appeal again.</p>
   *             </li>
   *          </ul>
   */
  Status?: ReviewStatus;

  /**
   * @public
   * <p>The associated support center case ID (if any).</p>
   */
  CaseId?: string;
}

/**
 * @public
 * <p>An object that contains information about your account details.</p>
 */
export interface AccountDetails {
  /**
   * @public
   * <p>The type of email your account is sending. The mail type can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MARKETING</code> – Most of your sending traffic is to keep your
   *                     customers informed of your latest offering.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSACTIONAL</code> – Most of your sending traffic is to
   *                     communicate during a transaction with a customer.</p>
   *             </li>
   *          </ul>
   */
  MailType?: MailType;

  /**
   * @public
   * <p>The URL of your website. This information helps us better understand the type of
   *             content that you plan to send.</p>
   */
  WebsiteURL?: string;

  /**
   * @public
   * <p>The language you would prefer for the case. The contact language can be one of
   *                 <code>ENGLISH</code> or <code>JAPANESE</code>.</p>
   */
  ContactLanguage?: ContactLanguage;

  /**
   * @public
   * <p>A description of the types of email that you plan to send.</p>
   */
  UseCaseDescription?: string;

  /**
   * @public
   * <p>Additional email addresses where updates are sent about your account review
   *             process.</p>
   */
  AdditionalContactEmailAddresses?: string[];

  /**
   * @public
   * <p>Information about the review of the latest details you submitted.</p>
   */
  ReviewDetails?: ReviewDetails;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const MetricDimensionName = {
  CONFIGURATION_SET: "CONFIGURATION_SET",
  EMAIL_IDENTITY: "EMAIL_IDENTITY",
  ISP: "ISP",
} as const;

/**
 * @public
 */
export type MetricDimensionName = (typeof MetricDimensionName)[keyof typeof MetricDimensionName];

/**
 * @public
 * @enum
 */
export const Metric = {
  CLICK: "CLICK",
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  DELIVERY_CLICK: "DELIVERY_CLICK",
  DELIVERY_COMPLAINT: "DELIVERY_COMPLAINT",
  DELIVERY_OPEN: "DELIVERY_OPEN",
  OPEN: "OPEN",
  PERMANENT_BOUNCE: "PERMANENT_BOUNCE",
  SEND: "SEND",
  TRANSIENT_BOUNCE: "TRANSIENT_BOUNCE",
} as const;

/**
 * @public
 */
export type Metric = (typeof Metric)[keyof typeof Metric];

/**
 * @public
 * @enum
 */
export const MetricNamespace = {
  VDM: "VDM",
} as const;

/**
 * @public
 */
export type MetricNamespace = (typeof MetricNamespace)[keyof typeof MetricNamespace];

/**
 * @public
 * <p>Represents a single metric data query to include in a batch.</p>
 */
export interface BatchGetMetricDataQuery {
  /**
   * @public
   * <p>The query identifier.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The query namespace - e.g. <code>VDM</code>
   *          </p>
   */
  Namespace: MetricNamespace | undefined;

  /**
   * @public
   * <p>The queried metric. This can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND</code> – Emails sent eligible for tracking
   *                     in the VDM dashboard. This excludes emails sent to the mailbox simulator and emails
   *                     addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> – Complaints received for your
   *                     account. This excludes complaints from the mailbox simulator, those originating from
   *                     your account-level suppression list (if enabled), and those for emails addressed to more
   *                     than one recipient</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERMANENT_BOUNCE</code> – Permanent bounces - i.e. feedback received for
   *                     emails sent to non-existent mailboxes. Excludes bounces from the mailbox simulator, those
   *                     originating from your account-level suppression list (if enabled), and those for emails
   *                     addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSIENT_BOUNCE</code> – Transient bounces - i.e. feedback received for
   *                     delivery failures excluding issues with non-existent mailboxes. Excludes bounces from the
   *                     mailbox simulator, and those for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPEN</code> – Unique open events for emails including open trackers.
   *                     Excludes opens for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLICK</code> – Unique click events for emails including wrapped links.
   *                     Excludes clicks for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator and for emails addressed to more
   *                     than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_OPEN</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails without open trackers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_CLICK</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails without click trackers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_COMPLAINT</code> – Successful deliveries for email sending attempts.
   *                     Excludes deliveries to the mailbox simulator, for emails addressed to more than one recipient,
   *                     and emails addressed to recipients hosted by ISPs with which Amazon SES does not have a
   *                     feedback loop agreement.</p>
   *             </li>
   *          </ul>
   */
  Metric: Metric | undefined;

  /**
   * @public
   * <p>An object that contains mapping between <code>MetricDimensionName</code>
   *             and <code>MetricDimensionValue</code> to filter metrics by.</p>
   */
  Dimensions?: Record<MetricDimensionName, string>;

  /**
   * @public
   * <p>Represents the start date for the query interval.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>Represents the end date for the query interval.</p>
   */
  EndDate: Date | undefined;
}

/**
 * @public
 * <p>Represents a request to retrieve a batch of metric data.</p>
 */
export interface BatchGetMetricDataRequest {
  /**
   * @public
   * <p>A list of queries for metrics to be retrieved.</p>
   */
  Queries: BatchGetMetricDataQuery[] | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;

/**
 * @public
 */
export type QueryErrorCode = (typeof QueryErrorCode)[keyof typeof QueryErrorCode];

/**
 * @public
 * <p>An error corresponding to the unsuccessful processing of a single metric data query.</p>
 */
export interface MetricDataError {
  /**
   * @public
   * <p>The query identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The query error code. Can be one of:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INTERNAL_FAILURE</code> – Amazon SES has failed to process one of the queries.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACCESS_DENIED</code> – You have insufficient access to retrieve metrics
   *                     based on the given query.</p>
   *             </li>
   *          </ul>
   */
  Code?: QueryErrorCode;

  /**
   * @public
   * <p>The error message associated with the current query error.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The result of a single metric data query.</p>
 */
export interface MetricDataResult {
  /**
   * @public
   * <p>The query identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A list of timestamps for the metric data results.</p>
   */
  Timestamps?: Date[];

  /**
   * @public
   * <p>A list of values (cumulative / sum) for the metric data results.</p>
   */
  Values?: number[];
}

/**
 * @public
 * <p>Represents the result of processing your metric data batch request</p>
 */
export interface BatchGetMetricDataResponse {
  /**
   * @public
   * <p>A list of successfully retrieved <code>MetricDataResult</code>.</p>
   */
  Results?: MetricDataResult[];

  /**
   * @public
   * <p>A list of <code>MetricDataError</code> encountered while processing your metric data batch request.</p>
   */
  Errors?: MetricDataError[];
}

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const BehaviorOnMxFailure = {
  REJECT_MESSAGE: "REJECT_MESSAGE",
  USE_DEFAULT_VALUE: "USE_DEFAULT_VALUE",
} as const;

/**
 * @public
 */
export type BehaviorOnMxFailure = (typeof BehaviorOnMxFailure)[keyof typeof BehaviorOnMxFailure];

/**
 * @public
 * <p>An object that contains information about a blacklisting event that impacts one of the
 *             dedicated IP addresses that is associated with your account.</p>
 */
export interface BlacklistEntry {
  /**
   * @public
   * <p>The name of the blacklist that the IP address appears on.</p>
   */
  RblName?: string;

  /**
   * @public
   * <p>The time when the blacklisting event occurred.</p>
   */
  ListingTime?: Date;

  /**
   * @public
   * <p>Additional information about the blacklisting event, as provided by the blacklist
   *             maintainer.</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>An object that represents the content of the email, and optionally a character set
 *             specification.</p>
 */
export interface Content {
  /**
   * @public
   * <p>The content of the message itself.</p>
   */
  Data: string | undefined;

  /**
   * @public
   * <p>The character set for the content. Because of the constraints of the SMTP protocol,
   *             Amazon SES uses 7-bit ASCII by default. If the text includes characters outside of the ASCII
   *             range, you have to specify a character set. For example, you could specify
   *                 <code>UTF-8</code>, <code>ISO-8859-1</code>, or <code>Shift_JIS</code>.</p>
   */
  Charset?: string;
}

/**
 * @public
 * <p>Represents the body of the email message.</p>
 */
export interface Body {
  /**
   * @public
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that don't support HTML, or clients where the recipient has disabled HTML
   *             rendering.</p>
   */
  Text?: Content;

  /**
   * @public
   * <p>An object that represents the version of the message that is displayed in email
   *             clients that support HTML. HTML messages can include formatted text, hyperlinks, images,
   *             and more. </p>
   */
  Html?: Content;
}

/**
 * @public
 * @enum
 */
export const BounceType = {
  PERMANENT: "PERMANENT",
  TRANSIENT: "TRANSIENT",
  UNDETERMINED: "UNDETERMINED",
} as const;

/**
 * @public
 */
export type BounceType = (typeof BounceType)[keyof typeof BounceType];

/**
 * @public
 * <p>Information about a <code>Bounce</code> event.</p>
 */
export interface Bounce {
  /**
   * @public
   * <p>The type of the bounce, as determined by SES.
   *             Can be one of <code>UNDETERMINED</code>, <code>TRANSIENT</code>, or <code>PERMANENT</code>
   *          </p>
   */
  BounceType?: BounceType;

  /**
   * @public
   * <p>The subtype of the bounce, as determined by SES.</p>
   */
  BounceSubType?: string;

  /**
   * @public
   * <p>The status code issued by the reporting Message Transfer Authority (MTA).
   *             This field only appears if a delivery status notification (DSN) was attached to the bounce
   *             and the <code>Diagnostic-Code</code> was provided in the DSN.
   *         </p>
   */
  DiagnosticCode?: string;
}

/**
 * @public
 * <p>An object that defines the email template to use for an email message, and the values
 *             to use for any message variables in that template. An <i>email
 *                 template</i> is a type of message template that contains content that you
 *             want to define, save, and reuse in email messages that you send.</p>
 */
export interface Template {
  /**
   * @public
   * <p>The name of the template. You will refer to this name when you send email using the
   *                 <code>SendTemplatedEmail</code> or <code>SendBulkTemplatedEmail</code> operations.
   *         </p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the template.</p>
   */
  TemplateArn?: string;

  /**
   * @public
   * <p>An object that defines the values to use for message variables in the template. This
   *             object is a set of key-value pairs. Each key defines a message variable in the template.
   *             The corresponding value defines the value to use for that variable.</p>
   */
  TemplateData?: string;
}

/**
 * @public
 * <p>An object that contains the body of the message. You can specify a template
 *             message.</p>
 */
export interface BulkEmailContent {
  /**
   * @public
   * <p>The template to use for the bulk email message.</p>
   */
  Template?: Template;
}

/**
 * @public
 * <p>An object that describes the recipients for an email.</p>
 *          <note>
 *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
 *                     <i>local part</i> of a destination email address (the part of the
 *                 email address that precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
 *                     characters</a>. If the <i>domain part</i> of an address (the
 *                 part after the @ sign) contains non-ASCII characters, they must be encoded using
 *                 Punycode, as described in <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p>
 *          </note>
 */
export interface Destination {
  /**
   * @public
   * <p>An array that contains the email addresses of the "To" recipients for the
   *             email.</p>
   */
  ToAddresses?: string[];

  /**
   * @public
   * <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for
   *             the email.</p>
   */
  CcAddresses?: string[];

  /**
   * @public
   * <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients
   *             for the email.</p>
   */
  BccAddresses?: string[];
}

/**
 * @public
 * <p>An object which contains <code>ReplacementTemplateData</code> to be used for a
 *             specific <code>BulkEmailEntry</code>.</p>
 */
export interface ReplacementTemplate {
  /**
   * @public
   * <p>A list of replacement values to apply to the template. This parameter is a JSON
   *             object, typically consisting of key-value pairs in which the keys correspond to
   *             replacement tags in the email template.</p>
   */
  ReplacementTemplateData?: string;
}

/**
 * @public
 * <p>The <code>ReplaceEmailContent</code> object to be used for a specific
 *                 <code>BulkEmailEntry</code>. The <code>ReplacementTemplate</code> can be specified
 *             within this object.</p>
 */
export interface ReplacementEmailContent {
  /**
   * @public
   * <p>The <code>ReplacementTemplate</code> associated with
   *                 <code>ReplacementEmailContent</code>.</p>
   */
  ReplacementTemplate?: ReplacementTemplate;
}

/**
 * @public
 * <p>Contains the name and value of a tag that you apply to an email. You can use message
 *             tags when you publish email sending events.
 *             </p>
 */
export interface MessageTag {
  /**
   * @public
   * <p>The name of the message tag. The message tag name has to meet the following
   *             criteria:</p>
   *          <ul>
   *             <li>
   *                <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the message tag. The message tag value has to meet the following
   *             criteria:</p>
   *          <ul>
   *             <li>
   *                <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface BulkEmailEntry {
  /**
   * @public
   * <p>Represents the destination of the message, consisting of To:, CC:, and BCC:
   *             fields.</p>
   *          <note>
   *             <p>Amazon SES does not support the SMTPUTF8 extension, as described in <a href="https://tools.ietf.org/html/rfc6531">RFC6531</a>. For this reason, the
   *                 local part of a destination email address (the part of the email address that
   *                 precedes the @ sign) may only contain <a href="https://en.wikipedia.org/wiki/Email_address#Local-part">7-bit ASCII
   *                     characters</a>. If the domain part of an address (the part after the @ sign)
   *                 contains non-ASCII characters, they must be encoded using Punycode, as described in
   *                     <a href="https://tools.ietf.org/html/rfc3492.html">RFC3492</a>.</p>
   *          </note>
   */
  Destination: Destination | undefined;

  /**
   * @public
   * <p>A list of tags, in the form of name/value pairs, to apply to an email that you send
   *             using the <code>SendBulkTemplatedEmail</code> operation. Tags correspond to
   *             characteristics of the email that you define, so that you can publish email sending
   *             events.</p>
   */
  ReplacementTags?: MessageTag[];

  /**
   * @public
   * <p>The <code>ReplacementEmailContent</code> associated with a
   *             <code>BulkEmailEntry</code>.</p>
   */
  ReplacementEmailContent?: ReplacementEmailContent;
}

/**
 * @public
 * @enum
 */
export const BulkEmailStatus = {
  ACCOUNT_DAILY_QUOTA_EXCEEDED: "ACCOUNT_DAILY_QUOTA_EXCEEDED",
  ACCOUNT_SENDING_PAUSED: "ACCOUNT_SENDING_PAUSED",
  ACCOUNT_SUSPENDED: "ACCOUNT_SUSPENDED",
  ACCOUNT_THROTTLED: "ACCOUNT_THROTTLED",
  CONFIGURATION_SET_NOT_FOUND: "CONFIGURATION_SET_NOT_FOUND",
  CONFIGURATION_SET_SENDING_PAUSED: "CONFIGURATION_SET_SENDING_PAUSED",
  FAILED: "FAILED",
  INVALID_PARAMETER: "INVALID_PARAMETER",
  INVALID_SENDING_POOL_NAME: "INVALID_SENDING_POOL_NAME",
  MAIL_FROM_DOMAIN_NOT_VERIFIED: "MAIL_FROM_DOMAIN_NOT_VERIFIED",
  MESSAGE_REJECTED: "MESSAGE_REJECTED",
  SUCCESS: "SUCCESS",
  TEMPLATE_NOT_FOUND: "TEMPLATE_NOT_FOUND",
  TRANSIENT_FAILURE: "TRANSIENT_FAILURE",
} as const;

/**
 * @public
 */
export type BulkEmailStatus = (typeof BulkEmailStatus)[keyof typeof BulkEmailStatus];

/**
 * @public
 * <p>The result of the <code>SendBulkEmail</code> operation of each specified
 *                 <code>BulkEmailEntry</code>.</p>
 */
export interface BulkEmailEntryResult {
  /**
   * @public
   * <p>The status of a message sent using the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   *          <p>Possible values for this parameter include:</p>
   *          <ul>
   *             <li>
   *                <p>SUCCESS: Amazon SES accepted the message, and will attempt to deliver it to
   *                     the recipients.</p>
   *             </li>
   *             <li>
   *                <p>MESSAGE_REJECTED: The message was rejected because it contained a
   *                     virus.</p>
   *             </li>
   *             <li>
   *                <p>MAIL_FROM_DOMAIN_NOT_VERIFIED: The sender's email address or domain was not
   *                     verified.</p>
   *             </li>
   *             <li>
   *                <p>CONFIGURATION_SET_DOES_NOT_EXIST: The configuration set you specified does not
   *                     exist.</p>
   *             </li>
   *             <li>
   *                <p>TEMPLATE_DOES_NOT_EXIST: The template you specified does not exist.</p>
   *             </li>
   *             <li>
   *                <p>ACCOUNT_SUSPENDED: Your account has been shut down because of issues related
   *                     to your email sending practices.</p>
   *             </li>
   *             <li>
   *                <p>ACCOUNT_THROTTLED: The number of emails you can send has been reduced because
   *                     your account has exceeded its allocated sending limit.</p>
   *             </li>
   *             <li>
   *                <p>ACCOUNT_DAILY_QUOTA_EXCEEDED: You have reached or exceeded the maximum number
   *                     of emails you can send from your account in a 24-hour period.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_SENDING_POOL_NAME: The configuration set you specified refers to an IP
   *                     pool that does not exist.</p>
   *             </li>
   *             <li>
   *                <p>ACCOUNT_SENDING_PAUSED: Email sending for the Amazon SES account was disabled
   *                     using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html">UpdateAccountSendingEnabled</a> operation.</p>
   *             </li>
   *             <li>
   *                <p>CONFIGURATION_SET_SENDING_PAUSED: Email sending for this configuration set was
   *                     disabled using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html">UpdateConfigurationSetSendingEnabled</a> operation.</p>
   *             </li>
   *             <li>
   *                <p>INVALID_PARAMETER_VALUE: One or more of the parameters you specified when
   *                     calling this operation was invalid. See the error message for additional
   *                     information.</p>
   *             </li>
   *             <li>
   *                <p>TRANSIENT_FAILURE: Amazon SES was unable to process your request because of a
   *                     temporary issue.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: Amazon SES was unable to process your request. See the error message
   *                     for additional information.</p>
   *             </li>
   *          </ul>
   */
  Status?: BulkEmailStatus;

  /**
   * @public
   * <p>A description of an error that prevented a message being sent using the
   *                 <code>SendBulkTemplatedEmail</code> operation.</p>
   */
  Error?: string;

  /**
   * @public
   * <p>The unique message identifier returned from the <code>SendBulkTemplatedEmail</code>
   *             operation.</p>
   */
  MessageId?: string;
}

/**
 * @public
 * <p>Represents a request to cancel an export job using the export job ID.</p>
 */
export interface CancelExportJobRequest {
  /**
   * @public
   * <p>The export job ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CancelExportJobResponse {}

/**
 * @public
 * @enum
 */
export const DimensionValueSource = {
  EMAIL_HEADER: "EMAIL_HEADER",
  LINK_TAG: "LINK_TAG",
  MESSAGE_TAG: "MESSAGE_TAG",
} as const;

/**
 * @public
 */
export type DimensionValueSource = (typeof DimensionValueSource)[keyof typeof DimensionValueSource];

/**
 * @public
 * <p>An object that defines the dimension configuration to use when you send email events
 *             to Amazon CloudWatch.</p>
 */
export interface CloudWatchDimensionConfiguration {
  /**
   * @public
   * <p>The name of an Amazon CloudWatch dimension associated with an email sending metric. The name has to
   *             meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>It can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-).</p>
   *             </li>
   *             <li>
   *                <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DimensionName: string | undefined;

  /**
   * @public
   * <p>The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. To
   *             use the message tags that you specify using an <code>X-SES-MESSAGE-TAGS</code> header or
   *             a parameter to the <code>SendEmail</code> or <code>SendRawEmail</code> API, choose
   *                 <code>messageTag</code>. To use your own email headers, choose
   *                 <code>emailHeader</code>. To use link tags, choose <code>linkTags</code>.</p>
   */
  DimensionValueSource: DimensionValueSource | undefined;

  /**
   * @public
   * <p>The default value of the dimension that is published to Amazon CloudWatch if you don't provide the
   *             value of the dimension when you send an email. This value has to meet the following
   *             criteria:</p>
   *          <ul>
   *             <li>
   *                <p>Can only contain ASCII letters (a–z, A–Z), numbers (0–9),
   *                     underscores (_), or dashes (-), at signs (@), and periods (.).</p>
   *             </li>
   *             <li>
   *                <p>It can contain no more than 256 characters.</p>
   *             </li>
   *          </ul>
   */
  DefaultDimensionValue: string | undefined;
}

/**
 * @public
 * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
 *             monitor and gain insights on your email sending metrics.</p>
 */
export interface CloudWatchDestination {
  /**
   * @public
   * <p>An array of objects that define the dimensions to use when you send email events to
   *             Amazon CloudWatch.</p>
   */
  DimensionConfigurations: CloudWatchDimensionConfiguration[] | undefined;
}

/**
 * @public
 * <p>Information about a <code>Complaint</code> event.</p>
 */
export interface Complaint {
  /**
   * @public
   * <p>
   *             Can either be <code>null</code> or <code>OnAccountSuppressionList</code>.
   *             If the value is <code>OnAccountSuppressionList</code>, SES accepted the message,
   *             but didn't attempt to send it because it was on the account-level suppression list.
   *         </p>
   */
  ComplaintSubType?: string;

  /**
   * @public
   * <p>
   *             The value of the <code>Feedback-Type</code> field from the feedback report received from the ISP.
   *         </p>
   */
  ComplaintFeedbackType?: string;
}

/**
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  OPT_IN: "OPT_IN",
  OPT_OUT: "OPT_OUT",
} as const;

/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
 */
export interface TopicPreference {
  /**
   * @public
   * <p>The name of the topic.</p>
   */
  TopicName: string | undefined;

  /**
   * @public
   * <p>The contact's subscription status to a topic which is either <code>OPT_IN</code> or
   *                 <code>OPT_OUT</code>.</p>
   */
  SubscriptionStatus: SubscriptionStatus | undefined;
}

/**
 * @public
 * <p>A contact is the end-user who is receiving the email.</p>
 */
export interface Contact {
  /**
   * @public
   * <p>The contact's email address.</p>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>The contact's preference for being opted-in to or opted-out of a topic.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * @public
   * <p>The default topic preferences applied to the contact.</p>
   */
  TopicDefaultPreferences?: TopicPreference[];

  /**
   * @public
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * @public
   * <p>A timestamp noting the last time the contact's information was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>A list that contains contacts that have subscribed to a particular topic or
 *             topics.</p>
 */
export interface ContactList {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName?: string;

  /**
   * @public
   * <p>A timestamp noting the last time the contact list was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const ContactListImportAction = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type ContactListImportAction = (typeof ContactListImportAction)[keyof typeof ContactListImportAction];

/**
 * @public
 * <p>An object that contains details about the action of a contact list.</p>
 */
export interface ContactListDestination {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>>The type of action to perform on the addresses. The following are the
   *             possible values:</p>
   *          <ul>
   *             <li>
   *                <p>PUT: add the addresses to the contact list. If the record already exists, it
   *                     will override it with the new value.</p>
   *             </li>
   *             <li>
   *                <p>DELETE: remove the addresses from the contact list.</p>
   *             </li>
   *          </ul>
   */
  ContactListImportAction: ContactListImportAction | undefined;
}

/**
 * @public
 * @enum
 */
export const TlsPolicy = {
  OPTIONAL: "OPTIONAL",
  REQUIRE: "REQUIRE",
} as const;

/**
 * @public
 */
export type TlsPolicy = (typeof TlsPolicy)[keyof typeof TlsPolicy];

/**
 * @public
 * <p>Used to associate a configuration set with a dedicated IP pool.</p>
 */
export interface DeliveryOptions {
  /**
   * @public
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy;

  /**
   * @public
   * <p>The name of the dedicated IP pool to associate with the configuration set.</p>
   */
  SendingPoolName?: string;
}

/**
 * @public
 * <p>Enable or disable collection of reputation metrics for emails that you send using this
 *             configuration set in the current Amazon Web Services Region. </p>
 */
export interface ReputationOptions {
  /**
   * @public
   * <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   */
  ReputationMetricsEnabled?: boolean;

  /**
   * @public
   * <p>The date and time (in Unix time) when the reputation metrics were last given a fresh
   *             start. When your account is given a fresh start, your reputation metrics are calculated
   *             starting from the date of the fresh start.</p>
   */
  LastFreshStart?: Date;
}

/**
 * @public
 * <p>Used to enable or disable email sending for messages that use this configuration set
 *             in the current Amazon Web Services Region.</p>
 */
export interface SendingOptions {
  /**
   * @public
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

/**
 * @public
 * @enum
 */
export const SuppressionListReason = {
  BOUNCE: "BOUNCE",
  COMPLAINT: "COMPLAINT",
} as const;

/**
 * @public
 */
export type SuppressionListReason = (typeof SuppressionListReason)[keyof typeof SuppressionListReason];

/**
 * @public
 * <p>An object that contains information about the suppression list preferences for your
 *             account.</p>
 */
export interface SuppressionOptions {
  /**
   * @public
   * <p>A list that contains the reasons that email addresses are automatically added to the
   *             suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: SuppressionListReason[];
}

/**
 * @public
 * <p>An object that defines the tags that are associated with a resource.
 *                 A <i>tag</i> is a label that you optionally define and associate with
 *             a resource. Tags can help you categorize and manage resources in different ways, such as
 *             by purpose, owner, environment, or other criteria. A resource can have as many as 50
 *             tags.</p>
 *          <p>Each tag consists of a required <i>tag key</i> and an
 *                 associated <i>tag value</i>, both of which you define. A tag key is a
 *             general label that acts as a category for a more specific tag value. A tag value acts as
 *             a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag
 *             value can contain as many as 256 characters. The characters can be Unicode letters,
 *             digits, white space, or one of the following symbols: _ . : / = + -. The following
 *             additional restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>For each associated resource, each tag key must be unique and it can have only
 *                     one value.</p>
 *             </li>
 *             <li>
 *                <p>The <code>aws:</code> prefix is reserved for use by Amazon Web Services; you can’t use it in
 *                     any tag keys or values that you define. In addition, you can't edit or remove
 *                     tag keys or values that use this prefix. Tags that use this prefix don’t count
 *                     against the limit of 50 tags per resource.</p>
 *             </li>
 *             <li>
 *                <p>You can associate tags with public or shared resources, but the tags are
 *                     available only for your Amazon Web Services account, not any other accounts that share the
 *                     resource. In addition, the tags are available only for resources that are
 *                     located in the specified Amazon Web Services Region for your Amazon Web Services account.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * @public
   * <p>One part of a key-value pair that defines a tag. The maximum length of a tag key is
   *             128 characters. The minimum length is 1 character.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The optional part of a key-value pair that defines a tag. The maximum length of a tag
   *             value is 256 characters. The minimum length is 0 characters. If you don't want a
   *             resource to have a specific tag value, don't specify a value for this parameter. If you
   *             don't specify a value, Amazon SES sets the value to an empty string.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>An object that defines the tracking options for a configuration set. When you use the
 *             Amazon SES API v2 to send an email, it contains an invisible image that's used to track when
 *             recipients open your email. If your email contains links, those links are changed
 *             slightly in order to track when recipients click them.</p>
 *          <p>These images and links include references to a domain operated by Amazon Web Services. You can
 *             optionally configure the Amazon SES to use a domain that you operate for these images and
 *             links.</p>
 */
export interface TrackingOptions {
  /**
   * @public
   * <p>The domain to use for tracking open and click events.</p>
   */
  CustomRedirectDomain: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * <p>An object containing additional settings for your VDM configuration as applicable to
 *             the Dashboard.</p>
 */
export interface DashboardOptions {
  /**
   * @public
   * <p>Specifies the status of your VDM engagement metrics collection. Can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Amazon SES enables engagement metrics for the
   *                     configuration set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Amazon SES disables engagement metrics for the
   *                     configuration set.</p>
   *             </li>
   *          </ul>
   */
  EngagementMetrics?: FeatureStatus;
}

/**
 * @public
 * <p>An object containing additional settings for your VDM configuration as applicable to
 *             the Guardian.</p>
 */
export interface GuardianOptions {
  /**
   * @public
   * <p>Specifies the status of your VDM optimized shared delivery. Can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Amazon SES enables optimized shared delivery for the
   *                     configuration set.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Amazon SES disables optimized shared delivery for the
   *                     configuration set.</p>
   *             </li>
   *          </ul>
   */
  OptimizedSharedDelivery?: FeatureStatus;
}

/**
 * @public
 * <p>An object that defines the VDM settings that apply to emails that you send using the
 *             configuration set.</p>
 */
export interface VdmOptions {
  /**
   * @public
   * <p>Specifies additional settings for your VDM configuration as applicable to the
   *             Dashboard.</p>
   */
  DashboardOptions?: DashboardOptions;

  /**
   * @public
   * <p>Specifies additional settings for your VDM configuration as applicable to the
   *             Guardian.</p>
   */
  GuardianOptions?: GuardianOptions;
}

/**
 * @public
 * <p>A request to create a configuration set.</p>
 */
export interface CreateConfigurationSetRequest {
  /**
   * @public
   * <p>The name of the configuration set. The name can contain up to 64 alphanumeric
   *             characters, including letters, numbers, hyphens (-) and underscores (_) only.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;

  /**
   * @public
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * @public
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * @public
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) to associate with the
   *             configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   * @public
   * <p>An object that defines the VDM options for emails that you send using the
   *             configuration set.</p>
   */
  VdmOptions?: VdmOptions;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetResponse {}

/**
 * @public
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
 * @public
 * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
 *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
 */
export interface KinesisFirehoseDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email
   *             events to the Amazon Kinesis Data Firehose stream.</p>
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email
   *             events to.</p>
   */
  DeliveryStreamArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  BOUNCE: "BOUNCE",
  CLICK: "CLICK",
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  DELIVERY_DELAY: "DELIVERY_DELAY",
  OPEN: "OPEN",
  REJECT: "REJECT",
  RENDERING_FAILURE: "RENDERING_FAILURE",
  SEND: "SEND",
  SUBSCRIPTION: "SUBSCRIPTION",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
 *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
 *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
 *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
 */
export interface PinpointDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Pinpoint project to send email events to.</p>
   */
  ApplicationArn?: string;
}

/**
 * @public
 * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
 *             send notification when certain email events occur.</p>
 */
export interface SnsDestination {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to. For
   *             more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn: string | undefined;
}

/**
 * @public
 * <p>An object that defines the event destination. Specifically, it defines which services
 *             receive events from emails sent using the configuration set that the event destination
 *             is associated with. Also defines the types of events that are sent to the event
 *             destination.</p>
 */
export interface EventDestinationDefinition {
  /**
   * @public
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *          <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>An array that specifies which events the Amazon SES API v2 should send to the destinations in
   *             this <code>EventDestinationDefinition</code>.</p>
   */
  MatchingEventTypes?: EventType[];

  /**
   * @public
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * @public
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * @public
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * @public
 * <p>A request to add an event destination to a configuration set.</p>
 */
export interface CreateConfigurationSetEventDestinationRequest {
  /**
   * @public
   * <p>The name of the configuration set .</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>A name that identifies the event destination within the configuration set.</p>
   */
  EventDestinationName: string | undefined;

  /**
   * @public
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: EventDestinationDefinition | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * @public
   * <p>The name of the contact list to which the contact should be added.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>The contact's email address.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The contact's preferences for being opted-in to or opted-out of topics.</p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * @public
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * @public
   * <p>The attribute data attached to a contact.</p>
   */
  AttributesData?: string;
}

/**
 * @public
 */
export interface CreateContactResponse {}

/**
 * @public
 * <p>An interest group, theme, or label within a list. Lists can have multiple
 *             topics.</p>
 */
export interface Topic {
  /**
   * @public
   * <p>The name of the topic.</p>
   */
  TopicName: string | undefined;

  /**
   * @public
   * <p>The name of the topic the contact will see.</p>
   */
  DisplayName: string | undefined;

  /**
   * @public
   * <p>A description of what the topic is about, which the contact will see.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The default subscription status to be applied to a contact if the contact has not
   *             noted their preference for subscribing to a topic.</p>
   */
  DefaultSubscriptionStatus: SubscriptionStatus | undefined;
}

/**
 * @public
 */
export interface CreateContactListRequest {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * @public
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags associated with a contact list.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateContactListResponse {}

/**
 * @public
 * <p>Represents a request to create a custom verification email template.</p>
 */
export interface CreateCustomVerificationEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * @public
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject: string | undefined;

  /**
   * @public
   * <p>The content of the custom verification email. The total size of the email must be less
   *             than 10 MB. The message body may contain HTML, with some limitations. For more
   *             information, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom-faq">Custom verification email frequently asked questions</a> in the <i>Amazon SES
   *                 Developer Guide</i>.</p>
   */
  TemplateContent: string | undefined;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL: string | undefined;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL: string | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateCustomVerificationEmailTemplateResponse {}

/**
 * @public
 * @enum
 */
export const ScalingMode = {
  MANAGED: "MANAGED",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ScalingMode = (typeof ScalingMode)[keyof typeof ScalingMode];

/**
 * @public
 * <p>A request to create a new dedicated IP pool.</p>
 */
export interface CreateDedicatedIpPoolRequest {
  /**
   * @public
   * <p>The name of the dedicated IP pool.</p>
   */
  PoolName: string | undefined;

  /**
   * @public
   * <p>An object that defines the tags (keys and values) that you want to associate with the
   *             pool.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The type of scaling mode.</p>
   */
  ScalingMode?: ScalingMode;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateDedicatedIpPoolResponse {}

/**
 * @public
 * <p>Represents the raw content of an email message.</p>
 */
export interface RawMessage {
  /**
   * @public
   * <p>The raw email message. The message has to meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                <p>Attachments must be in a file format that the Amazon SES supports.</p>
   *             </li>
   *             <li>
   *                <p>The raw data of the message needs to base64-encoded if you are accessing
   *                     Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services
   *                     SDK, the SDK takes care of the base 64-encoding for you.</p>
   *             </li>
   *             <li>
   *                <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   */
  Data: Uint8Array | undefined;
}

/**
 * @public
 * <p>Represents the email message that you're sending. The <code>Message</code> object
 *             consists of a subject line and a message body.</p>
 */
export interface Message {
  /**
   * @public
   * <p>The subject line of the email. The subject line can only contain 7-bit ASCII
   *             characters. However, you can specify non-ASCII characters in the subject line by using
   *             encoded-word syntax, as described in <a href="https://tools.ietf.org/html/rfc2047">RFC 2047</a>.</p>
   */
  Subject: Content | undefined;

  /**
   * @public
   * <p>The body of the message. You can specify an HTML version of the message, a text-only
   *             version of the message, or both.</p>
   */
  Body: Body | undefined;
}

/**
 * @public
 * <p>An object that defines the entire content of the email, including the message headers
 *             and the body content. You can create a simple email message, in which you specify the
 *             subject and the text and HTML versions of the message body. You can also create raw
 *             messages, in which you specify a complete MIME-formatted message. Raw messages can
 *             include attachments and custom headers.</p>
 */
export interface EmailContent {
  /**
   * @public
   * <p>The simple email message. The message consists of a subject and a message body.</p>
   */
  Simple?: Message;

  /**
   * @public
   * <p>The raw email message. The message has to meet the following criteria:</p>
   *          <ul>
   *             <li>
   *                <p>The message has to contain a header and a body, separated by one blank
   *                     line.</p>
   *             </li>
   *             <li>
   *                <p>All of the required header fields must be present in the message.</p>
   *             </li>
   *             <li>
   *                <p>Each part of a multipart MIME message must be formatted properly.</p>
   *             </li>
   *             <li>
   *                <p>If you include attachments, they must be in a file format that the Amazon SES API v2
   *                     supports.
   *                     </p>
   *             </li>
   *             <li>
   *                <p>The raw data of the message needs to base64-encoded if you are accessing
   *                     Amazon SES directly through the HTTPS interface. If you are accessing Amazon SES using an Amazon Web Services
   *                     SDK, the SDK takes care of the base 64-encoding for you.</p>
   *             </li>
   *             <li>
   *                <p>If any of the MIME parts in your message contain content that is outside of
   *                     the 7-bit ASCII character range, you should encode that content to ensure that
   *                     recipients' email clients render the message properly.</p>
   *             </li>
   *             <li>
   *                <p>The length of any single line of text in the message can't exceed 1,000
   *                     characters. This restriction is defined in <a href="https://tools.ietf.org/html/rfc5321">RFC 5321</a>.</p>
   *             </li>
   *          </ul>
   */
  Raw?: RawMessage;

  /**
   * @public
   * <p>The template to use for the email message.</p>
   */
  Template?: Template;
}

/**
 * @public
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
   * @public
   * <p>A unique name that helps you to identify the predictive inbox placement test when you retrieve the
   *             results.</p>
   */
  ReportName?: string;

  /**
   * @public
   * <p>The email address that the predictive inbox placement test email was sent from.</p>
   */
  FromEmailAddress: string | undefined;

  /**
   * @public
   * <p>The HTML body of the message that you sent when you performed the predictive inbox placement test.</p>
   */
  Content: EmailContent | undefined;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) that you want to associate
   *             with the predictive inbox placement test.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const DeliverabilityTestStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type DeliverabilityTestStatus = (typeof DeliverabilityTestStatus)[keyof typeof DeliverabilityTestStatus];

/**
 * @public
 * <p>Information about the predictive inbox placement test that you created.</p>
 */
export interface CreateDeliverabilityTestReportResponse {
  /**
   * @public
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;

  /**
   * @public
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus: DeliverabilityTestStatus | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
 * @enum
 */
export const DkimSigningKeyLength = {
  RSA_1024_BIT: "RSA_1024_BIT",
  RSA_2048_BIT: "RSA_2048_BIT",
} as const;

/**
 * @public
 */
export type DkimSigningKeyLength = (typeof DkimSigningKeyLength)[keyof typeof DkimSigningKeyLength];

/**
 * @public
 * <p>An object that contains configuration for Bring Your Own DKIM (BYODKIM), or, for Easy
 *             DKIM</p>
 */
export interface DkimSigningAttributes {
  /**
   * @public
   * <p>[Bring Your Own DKIM] A string that's used to identify a public key in the DNS
   *             configuration for a domain.</p>
   */
  DomainSigningSelector?: string;

  /**
   * @public
   * <p>[Bring Your Own DKIM] A private key that's used to generate a DKIM signature.</p>
   *          <p>The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using
   *             base64 encoding.</p>
   */
  DomainSigningPrivateKey?: string;

  /**
   * @public
   * <p>[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be
   *             changed at most once per day.</p>
   */
  NextSigningKeyLength?: DkimSigningKeyLength;
}

/**
 * @public
 * <p>A request to begin the verification process for an email identity (an email address or
 *             domain).</p>
 */
export interface CreateEmailIdentityRequest {
  /**
   * @public
   * <p>The email address or domain to verify.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) to associate with the email
   *             identity.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>If your request includes this object, Amazon SES configures the identity to use Bring Your
   *             Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be
   *             used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a>.</p>
   *          <p>You can only specify this object if the email identity is a domain, as opposed to an
   *             address.</p>
   */
  DkimSigningAttributes?: DkimSigningAttributes;

  /**
   * @public
   * <p>The configuration set to use by default when sending from this identity. Note that any
   *             configuration set defined in the email sending request takes precedence. </p>
   */
  ConfigurationSetName?: string;
}

/**
 * @public
 * @enum
 */
export const DkimSigningAttributesOrigin = {
  AWS_SES: "AWS_SES",
  EXTERNAL: "EXTERNAL",
} as const;

/**
 * @public
 */
export type DkimSigningAttributesOrigin =
  (typeof DkimSigningAttributesOrigin)[keyof typeof DkimSigningAttributesOrigin];

/**
 * @public
 * @enum
 */
export const DkimStatus = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;

/**
 * @public
 */
export type DkimStatus = (typeof DkimStatus)[keyof typeof DkimStatus];

/**
 * @public
 * <p>An object that contains information about the DKIM authentication status for an email
 *             identity.</p>
 *          <p>Amazon SES determines the authentication status by searching for specific records in the
 *             DNS configuration for the domain. If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to set up DKIM
 *             authentication, Amazon SES tries to find three unique CNAME records in the DNS configuration
 *             for your domain. If you provided a public key to perform DKIM authentication, Amazon SES
 *             tries to find a TXT record that uses the selector that you specified. The value of the
 *             TXT record must be a public key that's paired with the private key that you specified in
 *             the process of creating the identity</p>
 */
export interface DkimAttributes {
  /**
   * @public
   * <p>If the value is <code>true</code>, then the messages that you send from the identity
   *             are signed using DKIM. If the value is <code>false</code>, then the messages that you
   *             send from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;

  /**
   * @public
   * <p>Describes whether or not Amazon SES has successfully located the DKIM records in the DNS
   *             records for the domain. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet detected the DKIM records in the DNS configuration for the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The verification process failed. This typically
   *                     occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the DKIM authentication status of the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> – The DKIM verification process hasn't been
   *                     initiated for the domain.</p>
   *             </li>
   *          </ul>
   */
  Status?: DkimStatus;

  /**
   * @public
   * <p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object
   *             contains a set of unique strings that you use to create a set of CNAME records that you
   *             add to the DNS configuration for your domain. When Amazon SES detects these records in the
   *             DNS configuration for your domain, the DKIM authentication process is complete.</p>
   *          <p>If you configured DKIM authentication for the domain by providing your own
   *             public-private key pair, then this object contains the selector for the public
   *             key.</p>
   *          <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the
   *             appropriate records in the DNS configuration of the domain for up to 72 hours.</p>
   */
  Tokens?: string[];

  /**
   * @public
   * <p>A string that indicates how DKIM was configured for the identity. These are the
   *             possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_SES</code> – Indicates that DKIM was configured for the
   *                     identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXTERNAL</code> – Indicates that DKIM was configured for the
   *                     identity by using Bring Your Own DKIM (BYODKIM).</p>
   *             </li>
   *          </ul>
   */
  SigningAttributesOrigin?: DkimSigningAttributesOrigin;

  /**
   * @public
   * <p>[Easy DKIM] The key length of the future DKIM key pair to be generated. This can be
   *             changed at most once per day.</p>
   */
  NextSigningKeyLength?: DkimSigningKeyLength;

  /**
   * @public
   * <p>[Easy DKIM] The key length of the DKIM key pair in use.</p>
   */
  CurrentSigningKeyLength?: DkimSigningKeyLength;

  /**
   * @public
   * <p>[Easy DKIM] The last time a key pair was generated for this identity.</p>
   */
  LastKeyGenerationTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const IdentityType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  MANAGED_DOMAIN: "MANAGED_DOMAIN",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * <p>If the email identity is a domain, this object contains information about the DKIM
 *             verification status for the domain.</p>
 *          <p>If the email identity is an email address, this object is empty. </p>
 */
export interface CreateEmailIdentityResponse {
  /**
   * @public
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not
   *             supported.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * @public
   * <p>An object that contains information about the DKIM attributes for the identity.</p>
   */
  DkimAttributes?: DkimAttributes;
}

/**
 * @public
 * <p>Represents a request to create a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to use
 *             your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface CreateEmailIdentityPolicyRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>The name of the policy.</p>
   *          <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>The text of the policy in JSON format. The policy cannot exceed 4 KB.</p>
   *          <p>For information about the syntax of sending authorization policies, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-policies.html">Amazon SES Developer
   *                 Guide</a>.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateEmailIdentityPolicyResponse {}

/**
 * @public
 * <p>The content of the email, composed of a subject line, an HTML part, and a text-only
 *             part.</p>
 */
export interface EmailTemplateContent {
  /**
   * @public
   * <p>The subject line of the email.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>The email body that will be visible to recipients whose email clients do not display
   *             HTML.</p>
   */
  Text?: string;

  /**
   * @public
   * <p>The HTML body of the email.</p>
   */
  Html?: string;
}

/**
 * @public
 * <p>Represents a request to create an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES
 *                 Developer Guide</a>.</p>
 */
export interface CreateEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface CreateEmailTemplateResponse {}

/**
 * @public
 * @enum
 */
export const DeliveryEventType = {
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  PERMANENT_BOUNCE: "PERMANENT_BOUNCE",
  SEND: "SEND",
  TRANSIENT_BOUNCE: "TRANSIENT_BOUNCE",
  UNDETERMINED_BOUNCE: "UNDETERMINED_BOUNCE",
} as const;

/**
 * @public
 */
export type DeliveryEventType = (typeof DeliveryEventType)[keyof typeof DeliveryEventType];

/**
 * @public
 * @enum
 */
export const EngagementEventType = {
  CLICK: "CLICK",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type EngagementEventType = (typeof EngagementEventType)[keyof typeof EngagementEventType];

/**
 * @public
 * <p>An object containing Message Insights filters.</p>
 *          <p>If you specify multiple filters, the filters are joined by AND.</p>
 *          <p>If you specify multiple values for a filter, the values are joined by OR. Filter values are case-sensitive.</p>
 *          <p>
 *             <code>FromEmailAddress</code>, <code>Destination</code>, and <code>Subject</code> filters support partial match.
 *             A partial match is performed by using the <code>*</code> wildcard character placed at the beginning (suffix match), the end (prefix match)
 *             or both ends of the string (contains match).
 *             In order to match the literal characters <code>*</code> or <code>\</code>, they must be escaped using the <code>\</code> character.
 *             If no wildcard character is present, an exact match is performed.
 *         </p>
 */
export interface MessageInsightsFilters {
  /**
   * @public
   * <p>The from address used to send the message.</p>
   */
  FromEmailAddress?: string[];

  /**
   * @public
   * <p>The recipient's email address.</p>
   */
  Destination?: string[];

  /**
   * @public
   * <p>The subject line of the message.</p>
   */
  Subject?: string[];

  /**
   * @public
   * <p>The recipient's ISP (e.g., <code>Gmail</code>, <code>Yahoo</code>,
   *             etc.).</p>
   */
  Isp?: string[];

  /**
   * @public
   * <p>
   *             The last delivery-related event for the email, where the ordering is as follows:
   *             <code>SEND</code> < <code>BOUNCE</code> < <code>DELIVERY</code> < <code>COMPLAINT</code>.
   *         </p>
   */
  LastDeliveryEvent?: DeliveryEventType[];

  /**
   * @public
   * <p>
   *             The last engagement-related event for the email, where the ordering is as follows:
   *             <code>OPEN</code> < <code>CLICK</code>.
   *         </p>
   *          <p>
   *             Engagement events are only available if <a href="https://docs.aws.amazon.com/ses/latest/dg/vdm-settings.html">Engagement tracking</a>
   *             is enabled.
   *         </p>
   */
  LastEngagementEvent?: EngagementEventType[];
}

/**
 * @public
 * <p>An object that contains filters applied when performing the Message Insights export.</p>
 */
export interface MessageInsightsDataSource {
  /**
   * @public
   * <p>Represents the start date for the export interval as a timestamp. The start date is inclusive.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>Represents the end date for the export interval as a timestamp. The end date is inclusive.</p>
   */
  EndDate: Date | undefined;

  /**
   * @public
   * <p>Filters for results to be included in the export file.</p>
   */
  Include?: MessageInsightsFilters;

  /**
   * @public
   * <p>Filters for results to be excluded from the export file.</p>
   */
  Exclude?: MessageInsightsFilters;

  /**
   * @public
   * <p>The maximum number of results.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * @enum
 */
export const MetricAggregation = {
  RATE: "RATE",
  VOLUME: "VOLUME",
} as const;

/**
 * @public
 */
export type MetricAggregation = (typeof MetricAggregation)[keyof typeof MetricAggregation];

/**
 * @public
 * <p>An object that contains a mapping between a <code>Metric</code> and
 *             <code>MetricAggregation</code>.</p>
 */
export interface ExportMetric {
  /**
   * @public
   * <p>The metric to export, can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND</code> - Emails sent eligible for tracking in the VDM
   *                     dashboard. This excludes emails sent to the mailbox simulator and emails
   *                     addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> - Complaints received for your account. This
   *                     excludes complaints from the mailbox simulator, those originating from your
   *                     account-level suppression list (if enabled), and those for emails addressed to
   *                     more than one recipient</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PERMANENT_BOUNCE</code> - Permanent bounces - i.e., feedback
   *                     received for emails sent to non-existent mailboxes. Excludes bounces from the
   *                     mailbox simulator, those originating from your account-level suppression list
   *                     (if enabled), and those for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRANSIENT_BOUNCE</code> - Transient bounces - i.e., feedback
   *                     received for delivery failures excluding issues with non-existent mailboxes.
   *                     Excludes bounces from the mailbox simulator, and those for emails addressed to
   *                     more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPEN</code> - Unique open events for emails including open
   *                     trackers. Excludes opens for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLICK</code> - Unique click events for emails including wrapped
   *                     links. Excludes clicks for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY</code> - Successful deliveries for email sending
   *                     attempts. Excludes deliveries to the mailbox simulator and for emails addressed
   *                     to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_OPEN</code> - Successful deliveries for email sending
   *                     attempts. Excludes deliveries to the mailbox simulator, for emails addressed to
   *                     more than one recipient, and emails without open trackers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_CLICK</code> - Successful deliveries for email sending
   *                     attempts. Excludes deliveries to the mailbox simulator, for emails addressed to
   *                     more than one recipient, and emails without click trackers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_COMPLAINT</code> - Successful deliveries for email
   *                     sending attempts. Excludes deliveries to the mailbox simulator, for emails
   *                     addressed to more than one recipient, and emails addressed to recipients hosted
   *                     by ISPs with which Amazon SES does not have a feedback loop agreement.</p>
   *             </li>
   *          </ul>
   */
  Name?: Metric;

  /**
   * @public
   * <p>The aggregation to apply to a metric, can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VOLUME</code> - The volume of events for this metric.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RATE</code> - The rate for this metric relative to the
   *                     <code>SEND</code> metric volume.</p>
   *             </li>
   *          </ul>
   */
  Aggregation?: MetricAggregation;
}

/**
 * @public
 * <p>An object that contains details about the data source for the metrics export.</p>
 */
export interface MetricsDataSource {
  /**
   * @public
   * <p>An object that contains a mapping between a <code>MetricDimensionName</code> and
   *             <code>MetricDimensionValue</code> to filter metrics by. Must contain a least 1
   *             dimension but no more than 3 unique ones.</p>
   */
  Dimensions: Record<MetricDimensionName, string[]> | undefined;

  /**
   * @public
   * <p>The metrics namespace - e.g., <code>VDM</code>.</p>
   */
  Namespace: MetricNamespace | undefined;

  /**
   * @public
   * <p>A list of <code>ExportMetric</code> objects to export.</p>
   */
  Metrics: ExportMetric[] | undefined;

  /**
   * @public
   * <p>Represents the start date for the export interval as a timestamp.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>Represents the end date for the export interval as a timestamp.</p>
   */
  EndDate: Date | undefined;
}

/**
 * @public
 * <p>An object that contains details about the data source of the export job. It can only
 *             contain one of <code>MetricsDataSource</code> or <code>MessageInsightsDataSource</code> object.</p>
 */
export interface ExportDataSource {
  /**
   * @public
   * <p>An object that contains details about the data source for the metrics export.</p>
   */
  MetricsDataSource?: MetricsDataSource;

  /**
   * @public
   * <p>An object that contains filters applied when performing the Message Insights export.</p>
   */
  MessageInsightsDataSource?: MessageInsightsDataSource;
}

/**
 * @public
 * @enum
 */
export const DataFormat = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type DataFormat = (typeof DataFormat)[keyof typeof DataFormat];

/**
 * @public
 * <p>An object that contains details about the destination of the export job.</p>
 */
export interface ExportDestination {
  /**
   * @public
   * <p>The data format of the final export job file, can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CSV</code> - A comma-separated values file.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JSON</code> - A Json file.</p>
   *             </li>
   *          </ul>
   */
  DataFormat: DataFormat | undefined;

  /**
   * @public
   * <p>An Amazon S3 pre-signed URL that points to the generated export file.</p>
   */
  S3Url?: string;
}

/**
 * @public
 * <p>Represents a request to create an export job from a data source to a data
 *             destination.</p>
 */
export interface CreateExportJobRequest {
  /**
   * @public
   * <p>The data source for the export job.</p>
   */
  ExportDataSource: ExportDataSource | undefined;

  /**
   * @public
   * <p>The destination for the export job.</p>
   */
  ExportDestination: ExportDestination | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateExportJobResponse {
  /**
   * @public
   * <p>A string that represents the export job ID.</p>
   */
  JobId?: string;
}

/**
 * @public
 * <p>An object that contains details about the data source of the import job.</p>
 */
export interface ImportDataSource {
  /**
   * @public
   * <p>An Amazon S3 URL in the format
   *                 s3://<i><bucket_name></i>/<i><object></i>.</p>
   */
  S3Url: string | undefined;

  /**
   * @public
   * <p>The data format of the import job's data source.</p>
   */
  DataFormat: DataFormat | undefined;
}

/**
 * @public
 * @enum
 */
export const SuppressionListImportAction = {
  DELETE: "DELETE",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type SuppressionListImportAction =
  (typeof SuppressionListImportAction)[keyof typeof SuppressionListImportAction];

/**
 * @public
 * <p>An object that contains details about the action of suppression list.</p>
 */
export interface SuppressionListDestination {
  /**
   * @public
   * <p>The type of action to perform on the address. The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>PUT: add the addresses to the suppression list. If the record already exists,
   *                     it will override it with the new value.</p>
   *             </li>
   *             <li>
   *                <p>DELETE: remove the addresses from the suppression list.</p>
   *             </li>
   *          </ul>
   */
  SuppressionListImportAction: SuppressionListImportAction | undefined;
}

/**
 * @public
 * <p>An object that contains details about the resource destination the import job is going
 *             to target.</p>
 */
export interface ImportDestination {
  /**
   * @public
   * <p>An object that contains the action of the import job towards suppression list.</p>
   */
  SuppressionListDestination?: SuppressionListDestination;

  /**
   * @public
   * <p>An object that contains the action of the import job towards a contact list.</p>
   */
  ContactListDestination?: ContactListDestination;
}

/**
 * @public
 * <p>Represents a request to create an import job from a data source for a data
 *             destination.</p>
 */
export interface CreateImportJobRequest {
  /**
   * @public
   * <p>The destination for the import job.</p>
   */
  ImportDestination: ImportDestination | undefined;

  /**
   * @public
   * <p>The data source for the import job.</p>
   */
  ImportDataSource: ImportDataSource | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface CreateImportJobResponse {
  /**
   * @public
   * <p>A string that represents the import job ID.</p>
   */
  JobId?: string;
}

/**
 * @public
 * <p>Contains information about a custom verification email template.</p>
 */
export interface CustomVerificationEmailTemplateMetadata {
  /**
   * @public
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * @public
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;
}

/**
 * @public
 * <p>An object that contains inbox placement data for email sent from one of your email
 *             domains to a specific email provider.</p>
 */
export interface DomainIspPlacement {
  /**
   * @public
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * @public
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * @public
   * <p>The total number of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamRawCount?: number;

  /**
   * @public
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' inboxes.</p>
   */
  InboxPercentage?: number;

  /**
   * @public
   * <p>The percentage of messages that were sent from the selected domain to the specified
   *             email provider that arrived in recipients' spam or junk mail folders.</p>
   */
  SpamPercentage?: number;
}

/**
 * @public
 * <p>An object that contains information about the amount of email that was delivered to
 *             recipients.</p>
 */
export interface VolumeStatistics {
  /**
   * @public
   * <p>The total number of emails that arrived in recipients' inboxes.</p>
   */
  InboxRawCount?: number;

  /**
   * @public
   * <p>The total number of emails that arrived in recipients' spam or junk mail
   *             folders.</p>
   */
  SpamRawCount?: number;

  /**
   * @public
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' inboxes.</p>
   */
  ProjectedInbox?: number;

  /**
   * @public
   * <p>An estimate of the percentage of emails sent from the current domain that will arrive
   *             in recipients' spam or junk mail folders.</p>
   */
  ProjectedSpam?: number;
}

/**
 * @public
 * <p>An object that contains information about the volume of email sent on each day of the
 *             analysis period.</p>
 */
export interface DailyVolume {
  /**
   * @public
   * <p>The date that the DailyVolume metrics apply to, in Unix time.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>An object that contains inbox placement metrics for a specific day in the analysis
   *             period.</p>
   */
  VolumeStatistics?: VolumeStatistics;

  /**
   * @public
   * <p>An object that contains inbox placement metrics for a specified day in the analysis
   *             period, broken out by the recipient's email provider.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];
}

/**
 * @public
 * <p>An object containing additional settings for your VDM configuration as applicable to the Dashboard.</p>
 */
export interface DashboardAttributes {
  /**
   * @public
   * <p>Specifies the status of your VDM engagement metrics collection. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Amazon SES enables engagement metrics for your account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Amazon SES disables engagement metrics for your account.</p>
   *             </li>
   *          </ul>
   */
  EngagementMetrics?: FeatureStatus;
}

/**
 * @public
 * @enum
 */
export const WarmupStatus = {
  DONE: "DONE",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type WarmupStatus = (typeof WarmupStatus)[keyof typeof WarmupStatus];

/**
 * @public
 * <p>Contains information about a dedicated IP address that is associated with your Amazon SES
 *             account.</p>
 *          <p>To learn more about requesting dedicated IP addresses, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/dedicated-ip-case.html">Requesting and Relinquishing
 *                 Dedicated IP Addresses</a> in the <i>Amazon SES Developer
 *             Guide</i>.</p>
 */
export interface DedicatedIp {
  /**
   * @public
   * <p>An IPv4 address.</p>
   */
  Ip: string | undefined;

  /**
   * @public
   * <p>The warm-up status of a dedicated IP address. The status can have one of the following
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> – The IP address isn't ready to use because the
   *                     dedicated IP warm-up process is ongoing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DONE</code> – The dedicated IP warm-up process is complete, and
   *                     the IP address is ready to use.</p>
   *             </li>
   *          </ul>
   */
  WarmupStatus: WarmupStatus | undefined;

  /**
   * @public
   * <p>Indicates how complete the dedicated IP warm-up process is. When this value equals 1,
   *             the address has completed the warm-up process and is ready for use.</p>
   */
  WarmupPercentage: number | undefined;

  /**
   * @public
   * <p>The name of the dedicated IP pool that the IP address is associated with.</p>
   */
  PoolName?: string;
}

/**
 * @public
 * <p>Contains information about a dedicated IP pool.</p>
 */
export interface DedicatedIpPool {
  /**
   * @public
   * <p>The name of the dedicated IP pool.</p>
   */
  PoolName: string | undefined;

  /**
   * @public
   * <p>The type of the dedicated IP pool.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code> – A dedicated IP pool where you can
   *                     control which IPs are part of the pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MANAGED</code> – A dedicated IP pool where the reputation and
   *                     number of IPs are automatically managed by Amazon SES.</p>
   *             </li>
   *          </ul>
   */
  ScalingMode: ScalingMode | undefined;
}

/**
 * @public
 * <p>A request to delete a configuration set.</p>
 */
export interface DeleteConfigurationSetRequest {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetResponse {}

/**
 * @public
 * <p>A request to delete an event destination from a configuration set.</p>
 */
export interface DeleteConfigurationSetEventDestinationRequest {
  /**
   * @public
   * <p>The name of the configuration set that contains the event destination to
   *             delete.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The name of the event destination to delete.</p>
   */
  EventDestinationName: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteConfigurationSetEventDestinationResponse {}

/**
 * @public
 */
export interface DeleteContactRequest {
  /**
   * @public
   * <p>The name of the contact list from which the contact should be removed.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>The contact's email address.</p>
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
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactListResponse {}

/**
 * @public
 * <p>Represents a request to delete an existing custom verification email template.</p>
 */
export interface DeleteCustomVerificationEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the custom verification email template that you want to delete.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteCustomVerificationEmailTemplateResponse {}

/**
 * @public
 * <p>A request to delete a dedicated IP pool.</p>
 */
export interface DeleteDedicatedIpPoolRequest {
  /**
   * @public
   * <p>The name of the dedicated IP pool that you want to delete.</p>
   */
  PoolName: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteDedicatedIpPoolResponse {}

/**
 * @public
 * <p>A request to delete an existing email identity. When you delete an identity, you lose
 *             the ability to send email from that identity. You can restore your ability to send email
 *             by completing the verification process for the identity again.</p>
 */
export interface DeleteEmailIdentityRequest {
  /**
   * @public
   * <p>The identity (that is, the email address or domain) to delete.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityResponse {}

/**
 * @public
 * <p>Represents a request to delete a sending authorization policy for an identity. Sending
 *             authorization is an Amazon SES feature that enables you to authorize other senders to
 *             use your identities. For information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization-identity-owner-tasks-management.html">Amazon SES Developer Guide</a>.</p>
 */
export interface DeleteEmailIdentityPolicyRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>The name of the policy.</p>
   *          <p>The policy name cannot exceed 64 characters and can only include alphanumeric
   *             characters, dashes, and underscores.</p>
   */
  PolicyName: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteEmailIdentityPolicyResponse {}

/**
 * @public
 * <p>Represents a request to delete an email template. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface DeleteEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the template to be deleted.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface DeleteEmailTemplateResponse {}

/**
 * @public
 * <p>A request to remove an email address from the suppression list for your
 *             account.</p>
 */
export interface DeleteSuppressedDestinationRequest {
  /**
   * @public
   * <p>The suppressed email destination to remove from the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface DeleteSuppressedDestinationResponse {}

/**
 * @public
 * @enum
 */
export const DeliverabilityDashboardAccountStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  PENDING_EXPIRATION: "PENDING_EXPIRATION",
} as const;

/**
 * @public
 */
export type DeliverabilityDashboardAccountStatus =
  (typeof DeliverabilityDashboardAccountStatus)[keyof typeof DeliverabilityDashboardAccountStatus];

/**
 * @public
 * <p>An object that contains metadata related to a predictive inbox placement test.</p>
 */
export interface DeliverabilityTestReport {
  /**
   * @public
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId?: string;

  /**
   * @public
   * <p>A name that helps you identify a predictive inbox placement test report.</p>
   */
  ReportName?: string;

  /**
   * @public
   * <p>The subject line for an email that you submitted in a predictive inbox placement test.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>The sender address that you specified for the predictive inbox placement test.</p>
   */
  FromEmailAddress?: string;

  /**
   * @public
   * <p>The date and time when the predictive inbox placement test was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The status of the predictive inbox placement test. If the status is <code>IN_PROGRESS</code>, then the predictive inbox placement test
   *             is currently running. Predictive inbox placement tests are usually complete within 24 hours of creating the
   *             test. If the status is <code>COMPLETE</code>, then the test is finished, and you can use
   *             the <code>GetDeliverabilityTestReport</code> to view the results of the test.</p>
   */
  DeliverabilityTestStatus?: DeliverabilityTestStatus;
}

/**
 * @public
 * <p>An object that contains the deliverability data for a specific campaign. This data is
 *             available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface DomainDeliverabilityCampaign {
  /**
   * @public
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   */
  CampaignId?: string;

  /**
   * @public
   * <p>The URL of an image that contains a snapshot of the email message that was
   *             sent.</p>
   */
  ImageUrl?: string;

  /**
   * @public
   * <p>The subject line, or title, of the email message.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>The verified email address that the email message was sent from.</p>
   */
  FromAddress?: string;

  /**
   * @public
   * <p>The IP addresses that were used to send the email message.</p>
   */
  SendingIps?: string[];

  /**
   * @public
   * <p>The first time when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  FirstSeenDateTime?: Date;

  /**
   * @public
   * <p>The last time when the email message was delivered to any
   *             recipient's inbox. This value can help you determine how long it took for a campaign to
   *             deliver an email message.</p>
   */
  LastSeenDateTime?: Date;

  /**
   * @public
   * <p>The number of email messages that were delivered to recipients’ inboxes.</p>
   */
  InboxCount?: number;

  /**
   * @public
   * <p>The number of email messages that were delivered to recipients' spam or junk mail
   *             folders.</p>
   */
  SpamCount?: number;

  /**
   * @public
   * <p>The percentage of email messages that were opened by recipients. Due to technical
   *             limitations, this value only includes recipients who opened the message by using an
   *             email client that supports images.</p>
   */
  ReadRate?: number;

  /**
   * @public
   * <p>The percentage of email messages that were deleted by recipients, without being opened
   *             first. Due to technical limitations, this value only includes recipients who opened the
   *             message by using an email client that supports images.</p>
   */
  DeleteRate?: number;

  /**
   * @public
   * <p>The percentage of email messages that were opened and then deleted by recipients. Due
   *             to technical limitations, this value only includes recipients who opened the message by
   *             using an email client that supports images.</p>
   */
  ReadDeleteRate?: number;

  /**
   * @public
   * <p>The projected number of recipients that the email message was sent to.</p>
   */
  ProjectedVolume?: number;

  /**
   * @public
   * <p>The major email providers who handled the email message.</p>
   */
  Esps?: string[];
}

/**
 * @public
 * <p>An object that contains information about the inbox placement data settings for a
 *             verified domain that’s associated with your Amazon Web Services account. This data is available only
 *             if you enabled the Deliverability dashboard for the domain.</p>
 */
export interface InboxPlacementTrackingOption {
  /**
   * @public
   * <p>Specifies whether inbox placement data is being tracked for the domain.</p>
   */
  Global?: boolean;

  /**
   * @public
   * <p>An array of strings, one for each major email provider that the inbox placement data
   *             applies to.</p>
   */
  TrackedIsps?: string[];
}

/**
 * @public
 * <p>An object that contains information about the Deliverability dashboard subscription for a
 *             verified domain that you use to send email and currently has an active Deliverability dashboard
 *             subscription. If a Deliverability dashboard subscription is active for a domain, you gain access
 *             to reputation, inbox placement, and other metrics for the domain.</p>
 */
export interface DomainDeliverabilityTrackingOption {
  /**
   * @public
   * <p>A verified domain that’s associated with your Amazon Web Services account and currently has an
   *             active Deliverability dashboard subscription.</p>
   */
  Domain?: string;

  /**
   * @public
   * <p>The date when you enabled the Deliverability dashboard for the
   *             domain.</p>
   */
  SubscriptionStartDate?: Date;

  /**
   * @public
   * <p>An object that contains information about the inbox placement data settings for the
   *             domain.</p>
   */
  InboxPlacementTrackingOption?: InboxPlacementTrackingOption;
}

/**
 * @public
 * <p>
 *             Contains a <code>Bounce</code> object if the event type is <code>BOUNCE</code>.
 *             Contains a <code>Complaint</code> object if the event type is <code>COMPLAINT</code>.
 *         </p>
 */
export interface EventDetails {
  /**
   * @public
   * <p>Information about a <code>Bounce</code> event.</p>
   */
  Bounce?: Bounce;

  /**
   * @public
   * <p>Information about a <code>Complaint</code> event.</p>
   */
  Complaint?: Complaint;
}

/**
 * @public
 * <p>An object containing details about a specific event.</p>
 */
export interface InsightsEvent {
  /**
   * @public
   * <p>The timestamp of the event.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The type of event:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND</code> - The send request was successful and SES will
   *                     attempt to deliver the message to the recipient’s mail server. (If account-level
   *                     or global suppression is being used, SES will still count it as a send,
   *                     but delivery is suppressed.)
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY</code> - SES successfully delivered the email to the
   *                     recipient's mail server. Excludes deliveries to the mailbox simulator,
   *                     and those from emails addressed to more than one recipient.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> - Feedback received for delivery failures. Additional details about the bounce are provided in the <code>Details</code> object.
   *                     Excludes bounces from the mailbox simulator, and those from emails addressed to more than one recipient.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> - Complaint received for the email. Additional details about the complaint are provided in the <code>Details</code> object.
   *                     This excludes complaints from the mailbox simulator, those originating from
   *                     your account-level suppression list (if enabled), and those from emails addressed
   *                     to more than one recipient.
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPEN</code> - Open event for emails including open trackers.
   *                     Excludes opens for emails addressed to more than one recipient.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLICK</code> - Click event for emails including wrapped links.
   *                     Excludes clicks for emails addressed to more than one recipient.</p>
   *             </li>
   *          </ul>
   */
  Type?: EventType;

  /**
   * @public
   * <p>Details about bounce or complaint events.</p>
   */
  Details?: EventDetails;
}

/**
 * @public
 * <p>An email's insights contain metadata and delivery information about a specific email.</p>
 */
export interface EmailInsights {
  /**
   * @public
   * <p>The recipient of the email.</p>
   */
  Destination?: string;

  /**
   * @public
   * <p>The recipient's ISP (e.g., <code>Gmail</code>, <code>Yahoo</code>,
   *         etc.).</p>
   */
  Isp?: string;

  /**
   * @public
   * <p>A list of events associated with the sent email.</p>
   */
  Events?: InsightsEvent[];
}

/**
 * @public
 * <p>Contains information about an email template.</p>
 */
export interface EmailTemplateMetadata {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The time and date the template was created.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 * <p>In the Amazon SES API v2, <i>events</i> include message sends, deliveries, opens,
 *             clicks, bounces, complaints and delivery delays. <i>Event destinations</i>
 *             are places that you can send information about these events to. For example, you can
 *             send event data to Amazon SNS to receive notifications when you receive bounces or
 *             complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
 */
export interface EventDestination {
  /**
   * @public
   * <p>A name that identifies the event destination.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is
   *             enabled, the specified event types are sent to the destinations in this
   *                 <code>EventDestinationDefinition</code>.</p>
   *          <p>If <code>false</code>, the event destination is disabled. When the event destination
   *             is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * @public
   * <p>The types of events that Amazon SES sends to the specified event destinations.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SEND</code> - The send request was successful and SES will
   *                     attempt to deliver the message to the recipient’s mail server. (If account-level
   *                     or global suppression is being used, SES will still count it as a send,
   *                     but delivery is suppressed.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REJECT</code> - SES accepted the email, but determined that it
   *                     contained a virus and didn’t attempt to deliver it to the recipient’s mail
   *                     server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> - (<i>Hard bounce</i>) The recipient's
   *                     mail server permanently rejected the email. (<i>Soft bounces</i>
   *                     are only included when SES fails to deliver the email after retrying for
   *                     a period of time.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> - The email was successfully delivered to the
   *                     recipient’s mail server, but the recipient marked it as spam.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY</code> - SES successfully delivered the email to the
   *                     recipient's mail server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPEN</code> - The recipient received the message and opened it in their
   *                     email client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CLICK</code> - The recipient clicked one or more links in the
   *                     email.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RENDERING_FAILURE</code> - The email wasn't sent because of a
   *                     template rendering issue. This event type can occur when template data is
   *                     missing, or when there is a mismatch between template parameters and data. (This
   *                     event type only occurs when you send email using the <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html">
   *                      <code>SendTemplatedEmail</code>
   *                   </a> or <a href="https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html">
   *                      <code>SendBulkTemplatedEmail</code>
   *                   </a> API operations.) </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELIVERY_DELAY</code> - The email couldn't be delivered to the
   *                     recipient’s mail server because a temporary issue occurred. Delivery delays can
   *                     occur, for example, when the recipient's inbox is full, or when the
   *                     receiving email server experiences a transient issue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBSCRIPTION</code> - The email was successfully delivered, but the
   *                     recipient updated their subscription preferences by clicking on an
   *                         <i>unsubscribe</i> link as part of your <a href="https://docs.aws.amazon.com/ses/latest/dg/sending-email-subscription-management.html">subscription
   *                         management</a>.</p>
   *             </li>
   *          </ul>
   */
  MatchingEventTypes: EventType[] | undefined;

  /**
   * @public
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to
   *             stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: KinesisFirehoseDestination;

  /**
   * @public
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to
   *             monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: CloudWatchDestination;

  /**
   * @public
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to
   *             send notification when certain email events occur.</p>
   */
  SnsDestination?: SnsDestination;

  /**
   * @public
   * <p>An object that defines an Amazon Pinpoint project destination for email events. You can send
   *             email event data to a Amazon Pinpoint project to view metrics using the Transactional Messaging
   *             dashboards that are built in to Amazon Pinpoint. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/analytics-transactional-messages.html">Transactional
   *                 Messaging Charts</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
   */
  PinpointDestination?: PinpointDestination;
}

/**
 * @public
 * @enum
 */
export const ExportSourceType = {
  MESSAGE_INSIGHTS: "MESSAGE_INSIGHTS",
  METRICS_DATA: "METRICS_DATA",
} as const;

/**
 * @public
 */
export type ExportSourceType = (typeof ExportSourceType)[keyof typeof ExportSourceType];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * <p>A summary of the export job.</p>
 */
export interface ExportJobSummary {
  /**
   * @public
   * <p>The export job ID.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The source type of the export job.</p>
   */
  ExportSourceType?: ExportSourceType;

  /**
   * @public
   * <p>The status of the export job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>The timestamp of when the export job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp of when the export job was completed.</p>
   */
  CompletedTimestamp?: Date;
}

/**
 * @public
 * <p>Statistics about the execution of an export job.</p>
 */
export interface ExportStatistics {
  /**
   * @public
   * <p>The number of records that were processed to generate the final export file.</p>
   */
  ProcessedRecordsCount?: number;

  /**
   * @public
   * <p>The number of records that were exported to the final export file.</p>
   *          <p>This value might not be available for all export source types</p>
   */
  ExportedRecordsCount?: number;
}

/**
 * @public
 * <p>An object that contains the failure details about a job.</p>
 */
export interface FailureInfo {
  /**
   * @public
   * <p>An Amazon S3 pre-signed URL that contains all the failed records and related information.</p>
   */
  FailedRecordsS3Url?: string;

  /**
   * @public
   * <p>A message about why the job failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>A request to obtain information about the email-sending capabilities of your Amazon SES
 *             account.</p>
 */
export interface GetAccountRequest {}

/**
 * @public
 * <p>An object that contains information about the per-day and per-second sending limits
 *             for your Amazon SES account in the current Amazon Web Services Region.</p>
 */
export interface SendQuota {
  /**
   * @public
   * <p>The maximum number of emails that you can send in the current Amazon Web Services Region over a
   *             24-hour period. A value of -1 signifies an unlimited quota. (This value is also referred
   *             to as your <i>sending quota</i>.)</p>
   */
  Max24HourSend?: number;

  /**
   * @public
   * <p>The maximum number of emails that you can send per second in the current Amazon Web Services Region.
   *             This value is also called your <i>maximum sending rate</i> or your
   *                 <i>maximum TPS (transactions per second) rate</i>.</p>
   */
  MaxSendRate?: number;

  /**
   * @public
   * <p>The number of emails sent from your Amazon SES account in the current Amazon Web Services Region over the
   *             past 24 hours.</p>
   */
  SentLast24Hours?: number;
}

/**
 * @public
 * <p>An object that contains information about the email address suppression preferences
 *             for your account in the current Amazon Web Services Region.</p>
 */
export interface SuppressionAttributes {
  /**
   * @public
   * <p>A list that contains the reasons that email addresses will be automatically added to
   *             the suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: SuppressionListReason[];
}

/**
 * @public
 * <p>An object containing additional settings for your VDM configuration as applicable to the Guardian.</p>
 */
export interface GuardianAttributes {
  /**
   * @public
   * <p>Specifies the status of your VDM optimized shared delivery. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Amazon SES enables optimized shared delivery for your account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Amazon SES disables optimized shared delivery for your account.</p>
   *             </li>
   *          </ul>
   */
  OptimizedSharedDelivery?: FeatureStatus;
}

/**
 * @public
 * <p>The VDM attributes that apply to your Amazon SES account.</p>
 */
export interface VdmAttributes {
  /**
   * @public
   * <p>Specifies the status of your VDM configuration. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – Amazon SES enables VDM for your account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – Amazon SES disables VDM for your account.</p>
   *             </li>
   *          </ul>
   */
  VdmEnabled: FeatureStatus | undefined;

  /**
   * @public
   * <p>Specifies additional settings for your VDM configuration as applicable to the Dashboard.</p>
   */
  DashboardAttributes?: DashboardAttributes;

  /**
   * @public
   * <p>Specifies additional settings for your VDM configuration as applicable to the Guardian.</p>
   */
  GuardianAttributes?: GuardianAttributes;
}

/**
 * @public
 * <p>A list of details about the email-sending capabilities of your Amazon SES account in the
 *             current Amazon Web Services Region.</p>
 */
export interface GetAccountResponse {
  /**
   * @public
   * <p>Indicates whether or not the automatic warm-up feature is enabled for dedicated IP
   *             addresses that are associated with your account.</p>
   */
  DedicatedIpAutoWarmupEnabled?: boolean;

  /**
   * @public
   * <p>The reputation status of your Amazon SES account. The status can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HEALTHY</code> – There are no reputation-related issues that
   *                     currently impact your account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROBATION</code> – We've identified potential issues with your
   *                     Amazon SES account. We're placing your account under review while you work on
   *                     correcting these issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SHUTDOWN</code> – Your account's ability to send email is
   *                     currently paused because of an issue with the email sent from your account. When
   *                     you correct the issue, you can contact us and request that your account's
   *                     ability to send email is resumed.</p>
   *             </li>
   *          </ul>
   */
  EnforcementStatus?: string;

  /**
   * @public
   * <p>Indicates whether or not your account has production access in the current Amazon Web Services
   *             Region.</p>
   *          <p>If the value is <code>false</code>, then your account is in the
   *                 <i>sandbox</i>. When your account is in the sandbox, you can only send
   *             email to verified identities. Additionally, the maximum number of emails you can send in
   *             a 24-hour period (your sending quota) is 200, and the maximum number of emails you can
   *             send per second (your maximum sending rate) is 1.</p>
   *          <p>If the value is <code>true</code>, then your account has production access. When your
   *             account has production access, you can send email to any address. The sending quota and
   *             maximum sending rate for your account vary based on your specific use case.</p>
   */
  ProductionAccessEnabled?: boolean;

  /**
   * @public
   * <p>An object that contains information about the per-day and per-second sending limits
   *             for your Amazon SES account in the current Amazon Web Services Region.</p>
   */
  SendQuota?: SendQuota;

  /**
   * @public
   * <p>Indicates whether or not email sending is enabled for your Amazon SES account in the
   *             current Amazon Web Services Region.</p>
   */
  SendingEnabled?: boolean;

  /**
   * @public
   * <p>An object that contains information about the email address suppression preferences
   *             for your account in the current Amazon Web Services Region.</p>
   */
  SuppressionAttributes?: SuppressionAttributes;

  /**
   * @public
   * <p>An object that defines your account details.</p>
   */
  Details?: AccountDetails;

  /**
   * @public
   * <p>The VDM attributes that apply to your Amazon SES account.</p>
   */
  VdmAttributes?: VdmAttributes;
}

/**
 * @public
 * <p>A request to retrieve a list of the blacklists that your dedicated IP addresses appear
 *             on.</p>
 */
export interface GetBlacklistReportsRequest {
  /**
   * @public
   * <p>A list of IP addresses that you want to retrieve blacklist information about. You can
   *             only specify the dedicated IP addresses that you use to send email using Amazon SES or
   *             Amazon Pinpoint.</p>
   */
  BlacklistItemNames: string[] | undefined;
}

/**
 * @public
 * <p>An object that contains information about blacklist events.</p>
 */
export interface GetBlacklistReportsResponse {
  /**
   * @public
   * <p>An object that contains information about a blacklist that one of your dedicated IP
   *             addresses appears on.</p>
   */
  BlacklistReport: Record<string, BlacklistEntry[]> | undefined;
}

/**
 * @public
 * <p>A request to obtain information about a configuration set.</p>
 */
export interface GetConfigurationSetRequest {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 * <p>Information about a configuration set.</p>
 */
export interface GetConfigurationSetResponse {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>An object that defines the open and click tracking options for emails that you send
   *             using the configuration set.</p>
   */
  TrackingOptions?: TrackingOptions;

  /**
   * @public
   * <p>An object that defines the dedicated IP pool that is used to send emails that you send
   *             using the configuration set.</p>
   */
  DeliveryOptions?: DeliveryOptions;

  /**
   * @public
   * <p>An object that defines whether or not Amazon SES collects reputation metrics for the emails
   *             that you send that use the configuration set.</p>
   */
  ReputationOptions?: ReputationOptions;

  /**
   * @public
   * <p>An object that defines whether or not Amazon SES can send email that you send using the
   *             configuration set.</p>
   */
  SendingOptions?: SendingOptions;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the configuration set.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>An object that contains information about the suppression list preferences for your
   *             account.</p>
   */
  SuppressionOptions?: SuppressionOptions;

  /**
   * @public
   * <p>An object that contains information about the VDM preferences for your configuration
   *             set.</p>
   */
  VdmOptions?: VdmOptions;
}

/**
 * @public
 * <p>A request to obtain information about the event destinations for a configuration
 *             set.</p>
 */
export interface GetConfigurationSetEventDestinationsRequest {
  /**
   * @public
   * <p>The name of the configuration set that contains the event destination.</p>
   */
  ConfigurationSetName: string | undefined;
}

/**
 * @public
 * <p>Information about an event destination for a configuration set.</p>
 */
export interface GetConfigurationSetEventDestinationsResponse {
  /**
   * @public
   * <p>An array that includes all of the events destinations that have been configured for
   *             the configuration set.</p>
   */
  EventDestinations?: EventDestination[];
}

/**
 * @public
 */
export interface GetContactRequest {
  /**
   * @public
   * <p>The name of the contact list to which the contact belongs.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>The contact's email address.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 */
export interface GetContactResponse {
  /**
   * @public
   * <p>The name of the contact list to which the contact belongs.</p>
   */
  ContactListName?: string;

  /**
   * @public
   * <p>The contact's email address.</p>
   */
  EmailAddress?: string;

  /**
   * @public
   * <p>The contact's preference for being opted-in to or opted-out of a topic.></p>
   */
  TopicPreferences?: TopicPreference[];

  /**
   * @public
   * <p>The default topic preferences applied to the contact.</p>
   */
  TopicDefaultPreferences?: TopicPreference[];

  /**
   * @public
   * <p>A boolean value status noting if the contact is unsubscribed from all contact list
   *             topics.</p>
   */
  UnsubscribeAll?: boolean;

  /**
   * @public
   * <p>The attribute data attached to a contact.</p>
   */
  AttributesData?: string;

  /**
   * @public
   * <p>A timestamp noting when the contact was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>A timestamp noting the last time the contact's information was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetContactListRequest {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;
}

/**
 * @public
 */
export interface GetContactListResponse {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName?: string;

  /**
   * @public
   * <p>An interest group, theme, or label within a list. A contact list can have multiple
   *             topics.</p>
   */
  Topics?: Topic[];

  /**
   * @public
   * <p>A description of what the contact list is about.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A timestamp noting when the contact list was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>A timestamp noting the last time the contact list was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The tags associated with a contact list.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Represents a request to retrieve an existing custom verification email
 *             template.</p>
 */
export interface GetCustomVerificationEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the custom verification email template that you want to retrieve.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>The following elements are returned by the service.</p>
 */
export interface GetCustomVerificationEmailTemplateResponse {
  /**
   * @public
   * <p>The name of the custom verification email template.</p>
   */
  TemplateName?: string;

  /**
   * @public
   * <p>The email address that the custom verification email is sent from.</p>
   */
  FromEmailAddress?: string;

  /**
   * @public
   * <p>The subject line of the custom verification email.</p>
   */
  TemplateSubject?: string;

  /**
   * @public
   * <p>The content of the custom verification email.</p>
   */
  TemplateContent?: string;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is successfully verified.</p>
   */
  SuccessRedirectionURL?: string;

  /**
   * @public
   * <p>The URL that the recipient of the verification email is sent to if his or her address
   *             is not successfully verified.</p>
   */
  FailureRedirectionURL?: string;
}

/**
 * @public
 * <p>A request to obtain more information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpRequest {
  /**
   * @public
   * <p>The IP address that you want to obtain more information about. The value you specify
   *             has to be a dedicated IP address that's assocaited with your Amazon Web Services account.</p>
   */
  Ip: string | undefined;
}

/**
 * @public
 * <p>Information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpResponse {
  /**
   * @public
   * <p>An object that contains information about a dedicated IP address.</p>
   */
  DedicatedIp?: DedicatedIp;
}

/**
 * @public
 * <p>A request to obtain more information about a dedicated IP pool.</p>
 */
export interface GetDedicatedIpPoolRequest {
  /**
   * @public
   * <p>The name of the dedicated IP pool to retrieve.</p>
   */
  PoolName: string | undefined;
}

/**
 * @public
 * <p>The following element is returned by the service.</p>
 */
export interface GetDedicatedIpPoolResponse {
  /**
   * @public
   * <p>An object that contains information about a dedicated IP pool.</p>
   */
  DedicatedIpPool?: DedicatedIpPool;
}

/**
 * @public
 * <p>A request to obtain more information about dedicated IP pools.</p>
 */
export interface GetDedicatedIpsRequest {
  /**
   * @public
   * <p>The name of the IP pool that the dedicated IP address is associated with.</p>
   */
  PoolName?: string;

  /**
   * @public
   * <p>A token returned from a previous call to <code>GetDedicatedIps</code> to indicate the
   *             position of the dedicated IP pool in the list of IP pools.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to <code>GetDedicatedIpsRequest</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>Information about the dedicated IP addresses that are associated with your Amazon Web Services
 *             account.</p>
 */
export interface GetDedicatedIpsResponse {
  /**
   * @public
   * <p>A list of dedicated IP addresses that are associated with your Amazon Web Services account.</p>
   */
  DedicatedIps?: DedicatedIp[];

  /**
   * @public
   * <p>A token that indicates that there are additional dedicated IP addresses to list. To
   *             view additional addresses, issue another request to <code>GetDedicatedIps</code>,
   *             passing this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Web Services account.
 *             When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and
 *             other metrics for your domains. You also gain the ability to perform predictive inbox placement tests.</p>
 *          <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface GetDeliverabilityDashboardOptionsRequest {}

/**
 * @public
 * <p>An object that shows the status of the Deliverability dashboard.</p>
 */
export interface GetDeliverabilityDashboardOptionsResponse {
  /**
   * @public
   * <p>Specifies whether the Deliverability dashboard is enabled. If this value is <code>true</code>,
   *             the dashboard is enabled.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * @public
   * <p>The date  when your current subscription to the Deliverability dashboard
   *             is scheduled to expire, if your subscription is scheduled to expire at the end of the
   *             current calendar month. This value is null if you have an active subscription that isn’t
   *             due to expire at the end of the month.</p>
   */
  SubscriptionExpiryDate?: Date;

  /**
   * @public
   * <p>The current status of your Deliverability dashboard subscription. If this value is
   *                 <code>PENDING_EXPIRATION</code>, your subscription is scheduled to expire at the end
   *             of the current calendar month.</p>
   */
  AccountStatus?: DeliverabilityDashboardAccountStatus;

  /**
   * @public
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that isn’t scheduled to expire at
   *             the end of the current calendar month.</p>
   */
  ActiveSubscribedDomains?: DomainDeliverabilityTrackingOption[];

  /**
   * @public
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             currently has an active Deliverability dashboard subscription that's scheduled to expire at the
   *             end of the current calendar month.</p>
   */
  PendingExpirationSubscribedDomains?: DomainDeliverabilityTrackingOption[];
}

/**
 * @public
 * <p>A request to retrieve the results of a predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportRequest {
  /**
   * @public
   * <p>A unique string that identifies the predictive inbox placement test.</p>
   */
  ReportId: string | undefined;
}

/**
 * @public
 * <p>An object that contains inbox placement data for an email provider.</p>
 */
export interface PlacementStatistics {
  /**
   * @public
   * <p>The percentage of emails that arrived in recipients' inboxes during the predictive inbox placement test.</p>
   */
  InboxPercentage?: number;

  /**
   * @public
   * <p>The percentage of emails that arrived in recipients' spam or junk mail folders during
   *             the predictive inbox placement test.</p>
   */
  SpamPercentage?: number;

  /**
   * @public
   * <p>The percentage of emails that didn't arrive in recipients' inboxes at all during the
   *             predictive inbox placement test.</p>
   */
  MissingPercentage?: number;

  /**
   * @public
   * <p>The percentage of emails that were authenticated by using Sender Policy Framework
   *             (SPF) during the predictive inbox placement test.</p>
   */
  SpfPercentage?: number;

  /**
   * @public
   * <p>The percentage of emails that were authenticated by using DomainKeys Identified Mail
   *             (DKIM) during the predictive inbox placement test.</p>
   */
  DkimPercentage?: number;
}

/**
 * @public
 * <p>An object that describes how email sent during the predictive inbox placement test was handled by a certain
 *             email provider.</p>
 */
export interface IspPlacement {
  /**
   * @public
   * <p>The name of the email provider that the inbox placement data applies to.</p>
   */
  IspName?: string;

  /**
   * @public
   * <p>An object that contains inbox placement metrics for a specific email provider.</p>
   */
  PlacementStatistics?: PlacementStatistics;
}

/**
 * @public
 * <p>The results of the predictive inbox placement test.</p>
 */
export interface GetDeliverabilityTestReportResponse {
  /**
   * @public
   * <p>An object that contains the results of the predictive inbox placement test.</p>
   */
  DeliverabilityTestReport: DeliverabilityTestReport | undefined;

  /**
   * @public
   * <p>An object that specifies how many test messages that were sent during the predictive inbox placement test were
   *             delivered to recipients' inboxes, how many were sent to recipients' spam folders, and
   *             how many weren't delivered.</p>
   */
  OverallPlacement: PlacementStatistics | undefined;

  /**
   * @public
   * <p>An object that describes how the test email was handled by several email providers,
   *             including Gmail, Hotmail, Yahoo, AOL, and others.</p>
   */
  IspPlacements: IspPlacement[] | undefined;

  /**
   * @public
   * <p>An object that contains the message that you sent when you performed this
   *             predictive inbox placement test.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the predictive inbox placement test.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Retrieve all the deliverability data for a specific campaign. This data is available
 *             for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code>
 *             operation).</p>
 */
export interface GetDomainDeliverabilityCampaignRequest {
  /**
   * @public
   * <p>The unique identifier for the campaign. The Deliverability dashboard automatically generates
   *             and assigns this identifier to a campaign.</p>
   */
  CampaignId: string | undefined;
}

/**
 * @public
 * <p>An object that contains all the deliverability data for a specific campaign. This data
 *             is available for a campaign only if the campaign sent email by using a domain that the
 *             Deliverability dashboard is enabled for.</p>
 */
export interface GetDomainDeliverabilityCampaignResponse {
  /**
   * @public
   * <p>An object that contains the deliverability data for the campaign.</p>
   */
  DomainDeliverabilityCampaign: DomainDeliverabilityCampaign | undefined;
}

/**
 * @public
 * <p>A request to obtain deliverability metrics for a domain.</p>
 */
export interface GetDomainStatisticsReportRequest {
  /**
   * @public
   * <p>The domain that you want to obtain deliverability metrics for.</p>
   */
  Domain: string | undefined;

  /**
   * @public
   * <p>The first day (in Unix time) that you want to obtain domain deliverability metrics
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>The last day (in Unix time) that you want to obtain domain deliverability metrics for.
   *             The <code>EndDate</code> that you specify has to be less than or equal to 30 days after
   *             the <code>StartDate</code>.</p>
   */
  EndDate: Date | undefined;
}

/**
 * @public
 * <p>An object that contains information about email that was sent from the selected
 *             domain.</p>
 */
export interface OverallVolume {
  /**
   * @public
   * <p>An object that contains information about the numbers of messages that arrived in
   *             recipients' inboxes and junk mail folders.</p>
   */
  VolumeStatistics?: VolumeStatistics;

  /**
   * @public
   * <p>The percentage of emails that were sent from the domain that were read by their
   *             recipients.</p>
   */
  ReadRatePercent?: number;

  /**
   * @public
   * <p>An object that contains inbox and junk mail placement metrics for individual email
   *             providers.</p>
   */
  DomainIspPlacements?: DomainIspPlacement[];
}

/**
 * @public
 * <p>An object that includes statistics that are related to the domain that you
 *             specified.</p>
 */
export interface GetDomainStatisticsReportResponse {
  /**
   * @public
   * <p>An object that contains deliverability metrics for the domain that you specified. The
   *             data in this object is a summary of all of the data that was collected from the
   *                 <code>StartDate</code> to the <code>EndDate</code>.</p>
   */
  OverallVolume: OverallVolume | undefined;

  /**
   * @public
   * <p>An object that contains deliverability metrics for the domain that you specified. This
   *             object contains data for each day, starting on the <code>StartDate</code> and ending on
   *             the <code>EndDate</code>.</p>
   */
  DailyVolumes: DailyVolume[] | undefined;
}

/**
 * @public
 * <p>A request to return details about an email identity.</p>
 */
export interface GetEmailIdentityRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MailFromDomainStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;

/**
 * @public
 */
export type MailFromDomainStatus = (typeof MailFromDomainStatus)[keyof typeof MailFromDomainStatus];

/**
 * @public
 * <p>A list of attributes that are associated with a MAIL FROM domain.</p>
 */
export interface MailFromAttributes {
  /**
   * @public
   * <p>The name of a domain that an email identity uses as a custom MAIL FROM domain.</p>
   */
  MailFromDomain: string | undefined;

  /**
   * @public
   * <p>The status of the MAIL FROM domain. This status can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – Amazon SES hasn't started searching for the MX record
   *                     yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – Amazon SES detected the required MX record for the
   *                     MAIL FROM domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – Amazon SES can't find the required MX record, or the
   *                     record no longer exists.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue occurred, which
   *                     prevented Amazon SES from determining the status of the MAIL FROM domain.</p>
   *             </li>
   *          </ul>
   */
  MailFromDomainStatus: MailFromDomainStatus | undefined;

  /**
   * @public
   * <p>The action to take if the required MX record can't be found when you send an email.
   *             When you set this value to <code>USE_DEFAULT_VALUE</code>, the mail is sent using
   *                 <i>amazonses.com</i> as the MAIL FROM domain. When you set this value
   *             to <code>REJECT_MESSAGE</code>, the Amazon SES API v2 returns a
   *                 <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the
   *             email.</p>
   *          <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the
   *                 <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code>
   *             states.</p>
   */
  BehaviorOnMxFailure: BehaviorOnMxFailure | undefined;
}

/**
 * @public
 * @enum
 */
export const VerificationError = {
  DNS_SERVER_ERROR: "DNS_SERVER_ERROR",
  HOST_NOT_FOUND: "HOST_NOT_FOUND",
  INVALID_VALUE: "INVALID_VALUE",
  SERVICE_ERROR: "SERVICE_ERROR",
  TYPE_NOT_FOUND: "TYPE_NOT_FOUND",
} as const;

/**
 * @public
 */
export type VerificationError = (typeof VerificationError)[keyof typeof VerificationError];

/**
 * @public
 * <p>An object that contains information about the start of authority (SOA) record
 *             associated with the identity.</p>
 */
export interface SOARecord {
  /**
   * @public
   * <p>Primary name server specified in the SOA record.</p>
   */
  PrimaryNameServer?: string;

  /**
   * @public
   * <p>Administrative contact email from the SOA record.</p>
   */
  AdminEmail?: string;

  /**
   * @public
   * <p>Serial number from the SOA record.</p>
   */
  SerialNumber?: number;
}

/**
 * @public
 * <p>An object that contains additional information about the verification status for the
 *             identity.</p>
 */
export interface VerificationInfo {
  /**
   * @public
   * <p>The last time a verification attempt was made for this identity.</p>
   */
  LastCheckedTimestamp?: Date;

  /**
   * @public
   * <p>The last time a successful verification was made for this identity.</p>
   */
  LastSuccessTimestamp?: Date;

  /**
   * @public
   * <p>Provides the reason for the failure describing why Amazon SES was not able to successfully
   *             verify the identity. Below are the possible values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>INVALID_VALUE</code> – Amazon SES was able to find the record, but the
   *                     value contained within the record was invalid. Ensure you have published the
   *                     correct values for the record.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TYPE_NOT_FOUND</code> – The queried hostname exists but does not
   *                     have the requested type of DNS record. Ensure that you have published the
   *                     correct type of DNS record.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOST_NOT_FOUND</code> – The queried hostname does not exist or was
   *                     not reachable at the time of the request. Ensure that you have published the
   *                     required DNS record(s). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_ERROR</code> – A temporary issue is preventing Amazon SES from
   *                     determining the verification status of the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DNS_SERVER_ERROR</code> – The DNS server encountered an issue and
   *                     was unable to complete the request.</p>
   *             </li>
   *          </ul>
   */
  ErrorType?: VerificationError;

  /**
   * @public
   * <p>An object that contains information about the start of authority (SOA) record
   *             associated with the identity.</p>
   */
  SOARecord?: SOARecord;
}

/**
 * @public
 * @enum
 */
export const VerificationStatus = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;

/**
 * @public
 */
export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus];

/**
 * @public
 * <p>Details about an email identity.</p>
 */
export interface GetEmailIdentityResponse {
  /**
   * @public
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> identity type is not
   *             supported.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The feedback forwarding configuration for the identity.</p>
   *          <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *          <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  FeedbackForwardingStatus?: boolean;

  /**
   * @public
   * <p>Specifies whether or not the identity is verified. You can only send email from
   *             verified email addresses or domains. For more information about verifying identities,
   *             see the <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html">Amazon Pinpoint User Guide</a>.</p>
   */
  VerifiedForSendingStatus?: boolean;

  /**
   * @public
   * <p>An object that contains information about the DKIM attributes for the identity.</p>
   */
  DkimAttributes?: DkimAttributes;

  /**
   * @public
   * <p>An object that contains information about the Mail-From attributes for the email
   *             identity.</p>
   */
  MailFromAttributes?: MailFromAttributes;

  /**
   * @public
   * <p>A map of policy names to policies.</p>
   */
  Policies?: Record<string, string>;

  /**
   * @public
   * <p>An array of objects that define the tags (keys and values) that are associated with
   *             the email identity.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration set used by default when sending from this identity.</p>
   */
  ConfigurationSetName?: string;

  /**
   * @public
   * <p>The verification status of the identity. The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet been able to verify the identity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The verification process failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the verification status of the identity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> – The verification process hasn't been
   *                     initiated for the identity.</p>
   *             </li>
   *          </ul>
   */
  VerificationStatus?: VerificationStatus;

  /**
   * @public
   * <p>An object that contains additional information about the verification status for the
   *             identity.</p>
   */
  VerificationInfo?: VerificationInfo;
}

/**
 * @public
 * <p>A request to return the policies of an email identity.</p>
 */
export interface GetEmailIdentityPoliciesRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;
}

/**
 * @public
 * <p>Identity policies associated with email identity.</p>
 */
export interface GetEmailIdentityPoliciesResponse {
  /**
   * @public
   * <p>A map of policy names to policies.</p>
   */
  Policies?: Record<string, string>;
}

/**
 * @public
 * <p>Represents a request to display the template object (which includes the subject line,
 *             HTML part and text part) for the template you specify.</p>
 */
export interface GetEmailTemplateRequest {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;
}

/**
 * @public
 * <p>The following element is returned by the service.</p>
 */
export interface GetEmailTemplateResponse {
  /**
   * @public
   * <p>The name of the template.</p>
   */
  TemplateName: string | undefined;

  /**
   * @public
   * <p>The content of the email template, composed of a subject line, an HTML part, and a
   *             text-only part.</p>
   */
  TemplateContent: EmailTemplateContent | undefined;
}

/**
 * @public
 * <p>Represents a request to retrieve information about an export job using the export job
 *             ID.</p>
 */
export interface GetExportJobRequest {
  /**
   * @public
   * <p>The export job ID.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface GetExportJobResponse {
  /**
   * @public
   * <p>The export job ID.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The type of source of the export job.</p>
   */
  ExportSourceType?: ExportSourceType;

  /**
   * @public
   * <p>The status of the export job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>The destination of the export job.</p>
   */
  ExportDestination?: ExportDestination;

  /**
   * @public
   * <p>The data source of the export job.</p>
   */
  ExportDataSource?: ExportDataSource;

  /**
   * @public
   * <p>The timestamp of when the export job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp of when the export job was completed.</p>
   */
  CompletedTimestamp?: Date;

  /**
   * @public
   * <p>The failure details about an export job.</p>
   */
  FailureInfo?: FailureInfo;

  /**
   * @public
   * <p>The statistics about the export job.</p>
   */
  Statistics?: ExportStatistics;
}

/**
 * @public
 * <p>Represents a request for information about an import job using the import job
 *             ID.</p>
 */
export interface GetImportJobRequest {
  /**
   * @public
   * <p>The ID of the import job.</p>
   */
  JobId: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface GetImportJobResponse {
  /**
   * @public
   * <p>A string that represents the import job ID.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The destination of the import job.</p>
   */
  ImportDestination?: ImportDestination;

  /**
   * @public
   * <p>The data source of the import job.</p>
   */
  ImportDataSource?: ImportDataSource;

  /**
   * @public
   * <p>The failure details about an import job.</p>
   */
  FailureInfo?: FailureInfo;

  /**
   * @public
   * <p>The status of the import job.</p>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>The time stamp of when the import job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time stamp of when the import job was completed.</p>
   */
  CompletedTimestamp?: Date;

  /**
   * @public
   * <p>The current number of records processed.</p>
   */
  ProcessedRecordsCount?: number;

  /**
   * @public
   * <p>The number of records that failed processing because of invalid input or other
   *             reasons.</p>
   */
  FailedRecordsCount?: number;
}

/**
 * @public
 * <p>A request to return information about a message.</p>
 */
export interface GetMessageInsightsRequest {
  /**
   * @public
   * <p>
   *             A <code>MessageId</code> is a unique identifier for a message, and is
   *             returned when sending emails through Amazon SES.
   *         </p>
   */
  MessageId: string | undefined;
}

/**
 * @public
 * <p>Information about a message.</p>
 */
export interface GetMessageInsightsResponse {
  /**
   * @public
   * <p>A unique identifier for the message.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The from address used to send the message.</p>
   */
  FromEmailAddress?: string;

  /**
   * @public
   * <p>The subject line of the message.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>
   *             A list of tags, in the form of name/value pairs, that were applied to the email you sent, along with Amazon SES
   *             <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-using-event-publishing.html">Auto-Tags</a>.
   *         </p>
   */
  EmailTags?: MessageTag[];

  /**
   * @public
   * <p>A set of insights associated with the message.</p>
   */
  Insights?: EmailInsights[];
}

/**
 * @public
 * <p>A request to retrieve information about an email address that's on the suppression
 *             list for your account.</p>
 */
export interface GetSuppressedDestinationRequest {
  /**
   * @public
   * <p>The email address that's on the account suppression list.</p>
   */
  EmailAddress: string | undefined;
}

/**
 * @public
 * <p>An object that contains additional attributes that are related an email address that
 *             is on the suppression list for your account.</p>
 */
export interface SuppressedDestinationAttributes {
  /**
   * @public
   * <p>The unique identifier of the email message that caused the email address to be added
   *             to the suppression list for your account.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>A unique identifier that's generated when an email address is added to the suppression
   *             list for your account.</p>
   */
  FeedbackId?: string;
}

/**
 * @public
 * <p>An object that contains information about an email address that is on the suppression
 *             list for your account.</p>
 */
export interface SuppressedDestination {
  /**
   * @public
   * <p>The email address that is on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | undefined;

  /**
   * @public
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;

  /**
   * @public
   * <p>An optional value that can contain additional information about the reasons that the
   *             address was added to the suppression list for your account.</p>
   */
  Attributes?: SuppressedDestinationAttributes;
}

/**
 * @public
 * <p>Information about the suppressed email address.</p>
 */
export interface GetSuppressedDestinationResponse {
  /**
   * @public
   * <p>An object containing information about the suppressed email address.</p>
   */
  SuppressedDestination: SuppressedDestination | undefined;
}

/**
 * @public
 * <p>Information about an email identity.</p>
 */
export interface IdentityInfo {
  /**
   * @public
   * <p>The email identity type. Note: the <code>MANAGED_DOMAIN</code> type is not supported
   *             for email identity types.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The address or domain of the identity.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Indicates whether or not you can send email from the identity.</p>
   *          <p>An <i>identity</i> is an email address or domain that you send email
   *             from. Before you can send email from an identity, you have to demostrate that you own
   *             the identity, and that you authorize Amazon SES to send email from that identity.</p>
   */
  SendingEnabled?: boolean;

  /**
   * @public
   * <p>The verification status of the identity. The status can be one of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet been able to verify the identity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The verification process failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the verification status of the identity.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> – The verification process hasn't been
   *                     initiated for the identity.</p>
   *             </li>
   *          </ul>
   */
  VerificationStatus?: VerificationStatus;
}

/**
 * @public
 * @enum
 */
export const ImportDestinationType = {
  CONTACT_LIST: "CONTACT_LIST",
  SUPPRESSION_LIST: "SUPPRESSION_LIST",
} as const;

/**
 * @public
 */
export type ImportDestinationType = (typeof ImportDestinationType)[keyof typeof ImportDestinationType];

/**
 * @public
 * <p>A summary of the import job.</p>
 */
export interface ImportJobSummary {
  /**
   * @public
   * <p>A string that represents a job ID.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>An object that contains details about the resource destination the import job is going
   *             to target.</p>
   */
  ImportDestination?: ImportDestination;

  /**
   * @public
   * <p>The status of a job.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> – Job has just been created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PROCESSING</code> – Job is processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> – An error occurred during processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – Job has completed processing successfully.</p>
   *             </li>
   *          </ul>
   */
  JobStatus?: JobStatus;

  /**
   * @public
   * <p>The date and time when the import job was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The current number of records processed.</p>
   */
  ProcessedRecordsCount?: number;

  /**
   * @public
   * <p>The number of records that failed processing because of invalid input or other
   *             reasons.</p>
   */
  FailedRecordsCount?: number;
}

/**
 * @public
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
 * @public
 * <p>A request to obtain a list of configuration sets for your Amazon SES account in the current
 *             Amazon Web Services Region.</p>
 */
export interface ListConfigurationSetsRequest {
  /**
   * @public
   * <p>A token returned from a previous call to <code>ListConfigurationSets</code> to
   *             indicate the position in the list of configuration sets.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to <code>ListConfigurationSets</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>A list of configuration sets in your Amazon SES account in the current Amazon Web Services Region.</p>
 */
export interface ListConfigurationSetsResponse {
  /**
   * @public
   * <p>An array that contains all of the configuration sets in your Amazon SES account in the
   *             current Amazon Web Services Region.</p>
   */
  ConfigurationSets?: string[];

  /**
   * @public
   * <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *                 <code>ListConfigurationSets</code>, and pass this token in the
   *                 <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactListsRequest {
  /**
   * @public
   * <p>Maximum number of contact lists to return at once. Use this parameter to paginate
   *             results. If additional contact lists exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             lists.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>A string token indicating that there might be additional contact lists available to be
   *             listed. Use the token provided in the Response to use in the subsequent call to
   *             ListContactLists with the same parameters to retrieve the next page of contact
   *             lists.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactListsResponse {
  /**
   * @public
   * <p>The available contact lists.</p>
   */
  ContactLists?: ContactList[];

  /**
   * @public
   * <p>A string token indicating that there might be additional contact lists available to be
   *             listed. Copy this token to a subsequent call to <code>ListContactLists</code> with the
   *             same parameters to retrieve the next page of contact lists.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Used for filtering by a specific topic preference.</p>
 */
export interface TopicFilter {
  /**
   * @public
   * <p>The name of a topic on which you wish to apply the filter.</p>
   */
  TopicName?: string;

  /**
   * @public
   * <p>Notes that the default subscription status should be applied to a contact because the
   *             contact has not noted their preference for subscribing to a topic.</p>
   */
  UseDefaultIfPreferenceUnavailable?: boolean;
}

/**
 * @public
 * <p>A filter that can be applied to a list of contacts.</p>
 */
export interface ListContactsFilter {
  /**
   * @public
   * <p>The status by which you are filtering: <code>OPT_IN</code> or
   *             <code>OPT_OUT</code>.</p>
   */
  FilteredStatus?: SubscriptionStatus;

  /**
   * @public
   * <p>Used for filtering by a specific topic preference.</p>
   */
  TopicFilter?: TopicFilter;
}

/**
 * @public
 */
export interface ListContactsRequest {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>A filter that can be applied to a list of contacts.</p>
   */
  Filter?: ListContactsFilter;

  /**
   * @public
   * <p>The number of contacts that may be returned at once, which is dependent on if there
   *             are more or less contacts than the value of the PageSize. Use this parameter to
   *             paginate results. If additional contacts exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             contacts.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>A string token indicating that there might be additional contacts available to be
   *             listed. Use the token provided in the Response to use in the subsequent call to
   *             ListContacts with the same parameters to retrieve the next page of contacts.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactsResponse {
  /**
   * @public
   * <p>The contacts present in a specific contact list.</p>
   */
  Contacts?: Contact[];

  /**
   * @public
   * <p>A string token indicating that there might be additional contacts available to be
   *             listed. Copy this token to a subsequent call to <code>ListContacts</code> with the same
   *             parameters to retrieve the next page of contacts.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a request to list the existing custom verification email templates for your
 *             account.</p>
 */
export interface ListCustomVerificationEmailTemplatesRequest {
  /**
   * @public
   * <p>A token returned from a previous call to
   *                 <code>ListCustomVerificationEmailTemplates</code> to indicate the position in the
   *             list of custom verification email templates.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to
   *                 <code>ListCustomVerificationEmailTemplates</code>. If the number of results is
   *             larger than the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *          <p>The value you specify has to be at least 1, and can be no more than 50.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>The following elements are returned by the service.</p>
 */
export interface ListCustomVerificationEmailTemplatesResponse {
  /**
   * @public
   * <p>A list of the custom verification email templates that exist in your account.</p>
   */
  CustomVerificationEmailTemplates?: CustomVerificationEmailTemplateMetadata[];

  /**
   * @public
   * <p>A token indicating that there are additional custom verification email templates
   *             available to be listed. Pass this token to a subsequent call to
   *                 <code>ListCustomVerificationEmailTemplates</code> to retrieve the next 50 custom
   *             verification email templates.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A request to obtain a list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsRequest {
  /**
   * @public
   * <p>A token returned from a previous call to <code>ListDedicatedIpPools</code> to indicate
   *             the position in the list of dedicated IP pools.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to <code>ListDedicatedIpPools</code>.
   *             If the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>A list of dedicated IP pools.</p>
 */
export interface ListDedicatedIpPoolsResponse {
  /**
   * @public
   * <p>A list of all of the dedicated IP pools that are associated with your Amazon Web Services account in
   *             the current Region.</p>
   */
  DedicatedIpPools?: string[];

  /**
   * @public
   * <p>A token that indicates that there are additional IP pools to list. To view additional
   *             IP pools, issue another request to <code>ListDedicatedIpPools</code>, passing this token
   *             in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A request to list all of the predictive inbox placement tests that you've performed.</p>
 */
export interface ListDeliverabilityTestReportsRequest {
  /**
   * @public
   * <p>A token returned from a previous call to <code>ListDeliverabilityTestReports</code> to
   *             indicate the position in the list of predictive inbox placement tests.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to
   *                 <code>ListDeliverabilityTestReports</code>. If the number of results is larger than
   *             the number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *          <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>A list of the predictive inbox placement test reports that are available for your account, regardless of
 *             whether or not those tests are complete.</p>
 */
export interface ListDeliverabilityTestReportsResponse {
  /**
   * @public
   * <p>An object that contains a lists of predictive inbox placement tests that you've performed.</p>
   */
  DeliverabilityTestReports: DeliverabilityTestReport[] | undefined;

  /**
   * @public
   * <p>A token that indicates that there are additional predictive inbox placement tests to list. To view additional
   *             predictive inbox placement tests, issue another request to <code>ListDeliverabilityTestReports</code>, and pass
   *             this token in the <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Retrieve deliverability data for all the campaigns that used a specific domain to send
 *             email during a specified time range. This data is available for a domain only if you
 *             enabled the Deliverability dashboard.</p>
 */
export interface ListDomainDeliverabilityCampaignsRequest {
  /**
   * @public
   * <p>The first day that you want to obtain deliverability data
   *             for.</p>
   */
  StartDate: Date | undefined;

  /**
   * @public
   * <p>The last day that you want to obtain deliverability data for.
   *             This value has to be less than or equal to 30 days after the value of the
   *                 <code>StartDate</code> parameter.</p>
   */
  EndDate: Date | undefined;

  /**
   * @public
   * <p>The domain to obtain deliverability data for.</p>
   */
  SubscribedDomain: string | undefined;

  /**
   * @public
   * <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of a campaign in the list of campaigns.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to include in response to a single call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. If the number of results
   *             is larger than the number that you specify in this parameter, the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>An array of objects that provide deliverability data for all the campaigns that used a
 *             specific domain to send email during a specified time range. This data is available for
 *             a domain only if you enabled the Deliverability dashboard for the domain.</p>
 */
export interface ListDomainDeliverabilityCampaignsResponse {
  /**
   * @public
   * <p>An array of responses, one for each campaign that used the domain to send email during
   *             the specified time range.</p>
   */
  DomainDeliverabilityCampaigns: DomainDeliverabilityCampaign[] | undefined;

  /**
   * @public
   * <p>A token that’s returned from a previous call to the
   *                 <code>ListDomainDeliverabilityCampaigns</code> operation. This token indicates the
   *             position of the campaign in the list of campaigns.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A request to list all of the email identities associated with your Amazon Web Services account. This
 *             list includes identities that you've already verified, identities that are unverified,
 *             and identities that were verified in the past, but are no longer verified.</p>
 */
export interface ListEmailIdentitiesRequest {
  /**
   * @public
   * <p>A token returned from a previous call to <code>ListEmailIdentities</code> to indicate
   *             the position in the list of identities.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to <code>ListEmailIdentities</code>. If
   *             the number of results is larger than the number you specified in this parameter, then
   *             the response includes a <code>NextToken</code> element, which you can use to obtain
   *             additional results.</p>
   *          <p>The value you specify has to be at least 0, and can be no more than 1000.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>A list of all of the identities that you've attempted to verify, regardless of whether
 *             or not those identities were successfully verified.</p>
 */
export interface ListEmailIdentitiesResponse {
  /**
   * @public
   * <p>An array that includes all of the email identities associated with your Amazon Web Services
   *             account.</p>
   */
  EmailIdentities?: IdentityInfo[];

  /**
   * @public
   * <p>A token that indicates that there are additional configuration sets to list. To view
   *             additional configuration sets, issue another request to
   *             <code>ListEmailIdentities</code>, and pass this token in the <code>NextToken</code>
   *             parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a request to list the email templates present in your Amazon SES account in the
 *             current Amazon Web Services Region. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 */
export interface ListEmailTemplatesRequest {
  /**
   * @public
   * <p>A token returned from a previous call to <code>ListEmailTemplates</code> to indicate
   *             the position in the list of email templates.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to <code>ListEmailTemplates</code>. If the number of
   *             results is larger than the number you specified in this parameter, then the response
   *             includes a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   *          <p>The value you specify has to be at least 1, and can be no more than 100.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>The following elements are returned by the service.</p>
 */
export interface ListEmailTemplatesResponse {
  /**
   * @public
   * <p>An array the contains the name and creation time stamp for each template in your Amazon SES
   *             account.</p>
   */
  TemplatesMetadata?: EmailTemplateMetadata[];

  /**
   * @public
   * <p>A token indicating that there are additional email templates available to be listed.
   *             Pass this token to a subsequent <code>ListEmailTemplates</code> call to retrieve the
   *             next 10 email templates.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a request to list all export jobs with filters.</p>
 */
export interface ListExportJobsRequest {
  /**
   * @public
   * <p>The pagination token returned from a previous call to <code>ListExportJobs</code> to
   *             indicate the position in the list of export jobs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of export jobs to return at once. Use this parameter to paginate
   *             results. If additional export jobs exist beyond the specified limit, the
   *             <code>NextToken</code> element is sent in the response. Use the
   *             <code>NextToken</code> value in subsequent calls to <code>ListExportJobs</code> to
   *             retrieve additional export jobs.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>A value used to list export jobs that have a certain
   *             <code>ExportSourceType</code>.</p>
   */
  ExportSourceType?: ExportSourceType;

  /**
   * @public
   * <p>A value used to list export jobs that have a certain <code>JobStatus</code>.</p>
   */
  JobStatus?: JobStatus;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface ListExportJobsResponse {
  /**
   * @public
   * <p>A list of the export job summaries.</p>
   */
  ExportJobs?: ExportJobSummary[];

  /**
   * @public
   * <p>A string token indicating that there might be additional export jobs available to be
   *             listed. Use this token to a subsequent call to <code>ListExportJobs</code> with the same
   *             parameters to retrieve the next page of export jobs.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a request to list all of the import jobs for a data destination within the
 *             specified maximum number of import jobs.</p>
 */
export interface ListImportJobsRequest {
  /**
   * @public
   * <p>The destination of the import job, which can be used to list import jobs that have a
   *             certain <code>ImportDestinationType</code>.</p>
   */
  ImportDestinationType?: ImportDestinationType;

  /**
   * @public
   * <p>A string token indicating that there might be additional import jobs available to be
   *             listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the
   *             same parameters to retrieve the next page of import jobs.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Maximum number of import jobs to return at once. Use this parameter to paginate
   *             results. If additional import jobs exist beyond the specified limit, the
   *                 <code>NextToken</code> element is sent in the response. Use the
   *                 <code>NextToken</code> value in subsequent requests to retrieve additional
   *             addresses.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface ListImportJobsResponse {
  /**
   * @public
   * <p>A list of the import job summaries.</p>
   */
  ImportJobs?: ImportJobSummary[];

  /**
   * @public
   * <p>A string token indicating that there might be additional import jobs available to be
   *             listed. Copy this token to a subsequent call to <code>ListImportJobs</code> with the
   *             same parameters to retrieve the next page of import jobs.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An object used to specify a list or topic to which an email belongs, which will be
 *             used when a contact chooses to unsubscribe.</p>
 */
export interface ListManagementOptions {
  /**
   * @public
   * <p>The name of the contact list.</p>
   */
  ContactListName: string | undefined;

  /**
   * @public
   * <p>The name of the topic.</p>
   */
  TopicName?: string;
}

/**
 * @public
 * @enum
 */
export const ListRecommendationsFilterKey = {
  IMPACT: "IMPACT",
  RESOURCE_ARN: "RESOURCE_ARN",
  STATUS: "STATUS",
  TYPE: "TYPE",
} as const;

/**
 * @public
 */
export type ListRecommendationsFilterKey =
  (typeof ListRecommendationsFilterKey)[keyof typeof ListRecommendationsFilterKey];

/**
 * @public
 * <p>Represents a request to list the existing recommendations for your account.</p>
 */
export interface ListRecommendationsRequest {
  /**
   * @public
   * <p>Filters applied when retrieving recommendations. Can eiter be an individual filter, or
   *               combinations of <code>STATUS</code> and <code>IMPACT</code> or
   *               <code>STATUS</code> and <code>TYPE</code>
   *          </p>
   */
  Filter?: Record<ListRecommendationsFilterKey, string>;

  /**
   * @public
   * <p>A token returned from a previous call to <code>ListRecommendations</code> to
   *             indicate the position in the list of recommendations.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to
   *             <code>ListRecommendations</code>. If the number of results is larger than
   *             the number you specified in this parameter, then the response includes a
   *             <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   *          <p>The value you specify has to be at least 1, and can be no more than 100.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * @enum
 */
export const RecommendationImpact = {
  HIGH: "HIGH",
  LOW: "LOW",
} as const;

/**
 * @public
 */
export type RecommendationImpact = (typeof RecommendationImpact)[keyof typeof RecommendationImpact];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  FIXED: "FIXED",
  OPEN: "OPEN",
} as const;

/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  BIMI: "BIMI",
  DKIM: "DKIM",
  DMARC: "DMARC",
  SPF: "SPF",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * <p>A recommendation generated for your account.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The resource affected by the recommendation,
   *             with values like <code>arn:aws:ses:us-east-1:123456789012:identity/example.com</code>.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The recommendation type, with values like <code>DKIM</code>,
   *             <code>SPF</code>, <code>DMARC</code> or <code>BIMI</code>.</p>
   */
  Type?: RecommendationType;

  /**
   * @public
   * <p>The recommendation description / disambiguator - e.g. <code>DKIM1</code> and <code>DKIM2</code>
   *               are different recommendations about your DKIM setup.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The recommendation status, with values like
   *             <code>OPEN</code> or <code>FIXED</code>.</p>
   */
  Status?: RecommendationStatus;

  /**
   * @public
   * <p>The first time this issue was encountered and the recommendation was generated.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The last time the recommendation was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The recommendation impact, with values like
   *             <code>HIGH</code> or <code>LOW</code>.</p>
   */
  Impact?: RecommendationImpact;
}

/**
 * @public
 * <p>Contains the response to your request to retrieve the list of recommendations for your account.</p>
 */
export interface ListRecommendationsResponse {
  /**
   * @public
   * <p>The recommendations applicable to your account.</p>
   */
  Recommendations?: Recommendation[];

  /**
   * @public
   * <p>A string token indicating that there might be additional recommendations available to be
   *             listed. Use the token provided in the <code>ListRecommendationsResponse</code> to use in the
   *             subsequent call to <code>ListRecommendations</code> with the same parameters to retrieve the
   *             next page of recommendations.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A request to obtain a list of email destinations that are on the suppression list for
 *             your account.</p>
 */
export interface ListSuppressedDestinationsRequest {
  /**
   * @public
   * <p>The factors that caused the email address to be added to .</p>
   */
  Reasons?: SuppressionListReason[];

  /**
   * @public
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list after a specific date.</p>
   */
  StartDate?: Date;

  /**
   * @public
   * <p>Used to filter the list of suppressed email destinations so that it only includes
   *             addresses that were added to the list before a specific date.</p>
   */
  EndDate?: Date;

  /**
   * @public
   * <p>A token returned from a previous call to <code>ListSuppressedDestinations</code> to
   *             indicate the position in the list of suppressed email addresses.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of results to show in a single call to
   *                 <code>ListSuppressedDestinations</code>. If the number of results is larger than the
   *             number you specified in this parameter, then the response includes a
   *                 <code>NextToken</code> element, which you can use to obtain additional
   *             results.</p>
   */
  PageSize?: number;
}

/**
 * @public
 * <p>A summary that describes the suppressed email address.</p>
 */
export interface SuppressedDestinationSummary {
  /**
   * @public
   * <p>The email address that's on the suppression list for your account.</p>
   */
  EmailAddress: string | undefined;

  /**
   * @public
   * <p>The reason that the address was added to the suppression list for your account.</p>
   */
  Reason: SuppressionListReason | undefined;

  /**
   * @public
   * <p>The date and time when the suppressed destination was last updated, shown in Unix time
   *             format.</p>
   */
  LastUpdateTime: Date | undefined;
}

/**
 * @public
 * <p>A list of suppressed email addresses.</p>
 */
export interface ListSuppressedDestinationsResponse {
  /**
   * @public
   * <p>A list of summaries, each containing a summary for a suppressed email
   *             destination.</p>
   */
  SuppressedDestinationSummaries?: SuppressedDestinationSummary[];

  /**
   * @public
   * <p>A token that indicates that there are additional email addresses on the suppression
   *             list for your account. To view additional suppressed addresses, issue another request to
   *                 <code>ListSuppressedDestinations</code>, and pass this token in the
   *                 <code>NextToken</code> parameter.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource that you want to retrieve tag
   *             information for.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>An array that lists all the tags that are associated with the resource. Each tag
   *             consists of a required tag key (<code>Key</code>) and an associated tag value
   *                 (<code>Value</code>)</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>A request to enable or disable the automatic IP address warm-up feature.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesRequest {
  /**
   * @public
   * <p>Enables or disables the automatic warm-up feature for dedicated IP addresses that are
   *             associated with your Amazon SES account in the current Amazon Web Services Region. Set to <code>true</code>
   *             to enable the automatic warm-up feature, or set to <code>false</code> to disable
   *             it.</p>
   */
  AutoWarmupEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDedicatedIpWarmupAttributesResponse {}

/**
 * @public
 * <p>A request to submit new account details.</p>
 */
export interface PutAccountDetailsRequest {
  /**
   * @public
   * <p>The type of email your account will send.</p>
   */
  MailType: MailType | undefined;

  /**
   * @public
   * <p>The URL of your website. This information helps us better understand the type of
   *             content that you plan to send.</p>
   */
  WebsiteURL: string | undefined;

  /**
   * @public
   * <p>The language you would prefer to be contacted with.</p>
   */
  ContactLanguage?: ContactLanguage;

  /**
   * @public
   * <p>A description of the types of email that you plan to send.</p>
   */
  UseCaseDescription: string | undefined;

  /**
   * @public
   * <p>Additional email addresses that you would like to be notified regarding Amazon SES
   *             matters.</p>
   */
  AdditionalContactEmailAddresses?: string[];

  /**
   * @public
   * <p>Indicates whether or not your account should have production access in the current
   *             Amazon Web Services Region.</p>
   *          <p>If the value is <code>false</code>, then your account is in the
   *                 <i>sandbox</i>. When your account is in the sandbox, you can only send
   *             email to verified identities. Additionally, the maximum number of emails you can send in
   *             a 24-hour period (your sending quota) is 200, and the maximum number of emails you can
   *             send per second (your maximum sending rate) is 1.</p>
   *          <p>If the value is <code>true</code>, then your account has production access. When your
   *             account has production access, you can send email to any address. The sending quota and
   *             maximum sending rate for your account vary based on your specific use case.</p>
   */
  ProductionAccessEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountDetailsResponse {}

/**
 * @public
 * <p>A request to change the ability of your account to send email.</p>
 */
export interface PutAccountSendingAttributesRequest {
  /**
   * @public
   * <p>Enables or disables your account's ability to send email. Set to <code>true</code> to
   *             enable email sending, or set to <code>false</code> to disable email sending.</p>
   *          <note>
   *             <p>If Amazon Web Services paused your account's ability to send email, you can't use this operation
   *                 to resume your account's ability to send email.</p>
   *          </note>
   */
  SendingEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSendingAttributesResponse {}

/**
 * @public
 * <p>A request to change your account's suppression preferences.</p>
 */
export interface PutAccountSuppressionAttributesRequest {
  /**
   * @public
   * <p>A list that contains the reasons that email addresses will be automatically added to
   *             the suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: SuppressionListReason[];
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutAccountSuppressionAttributesResponse {}

/**
 * @public
 * <p>A request to submit new account VDM attributes.</p>
 */
export interface PutAccountVdmAttributesRequest {
  /**
   * @public
   * <p>The VDM attributes that you wish to apply to your Amazon SES account.</p>
   */
  VdmAttributes: VdmAttributes | undefined;
}

/**
 * @public
 */
export interface PutAccountVdmAttributesResponse {}

/**
 * @public
 * <p>A request to associate a configuration set with a dedicated IP pool.</p>
 */
export interface PutConfigurationSetDeliveryOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set to associate with a dedicated IP pool.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>Specifies whether messages that use the configuration set are required to use
   *             Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only
   *             delivered if a TLS connection can be established. If the value is <code>Optional</code>,
   *             messages can be delivered in plain text if a TLS connection can't be established.</p>
   */
  TlsPolicy?: TlsPolicy;

  /**
   * @public
   * <p>The name of the dedicated IP pool to associate with the configuration set.</p>
   */
  SendingPoolName?: string;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetDeliveryOptionsResponse {}

/**
 * @public
 * <p>A request to enable or disable tracking of reputation metrics for a configuration
 *             set.</p>
 */
export interface PutConfigurationSetReputationOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>If <code>true</code>, tracking of reputation metrics is enabled for the configuration
   *             set. If <code>false</code>, tracking of reputation metrics is disabled for the
   *             configuration set.</p>
   */
  ReputationMetricsEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetReputationOptionsResponse {}

/**
 * @public
 * <p>A request to enable or disable the ability of Amazon SES to send emails that use a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSendingOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set to enable or disable email sending for.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If
   *                 <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSendingOptionsResponse {}

/**
 * @public
 * <p>A request to change the account suppression list preferences for a specific
 *             configuration set.</p>
 */
export interface PutConfigurationSetSuppressionOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set to change the suppression list preferences
   *             for.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>A list that contains the reasons that email addresses are automatically added to the
   *             suppression list for your account. This list can contain any or all of the
   *             following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COMPLAINT</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a
   *                     complaint.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOUNCE</code> – Amazon SES adds an email address to the suppression
   *                     list for your account when a message sent to that address results in a hard
   *                     bounce.</p>
   *             </li>
   *          </ul>
   */
  SuppressedReasons?: SuppressionListReason[];
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetSuppressionOptionsResponse {}

/**
 * @public
 * <p>A request to add a custom domain for tracking open and click events to a configuration
 *             set.</p>
 */
export interface PutConfigurationSetTrackingOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The domain to use to track open and click events.</p>
   */
  CustomRedirectDomain?: string;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetTrackingOptionsResponse {}

/**
 * @public
 * <p>A request to add specific VDM settings to a configuration set.</p>
 */
export interface PutConfigurationSetVdmOptionsRequest {
  /**
   * @public
   * <p>The name of the configuration set.</p>
   */
  ConfigurationSetName: string | undefined;

  /**
   * @public
   * <p>The VDM options to apply to the configuration set.</p>
   */
  VdmOptions?: VdmOptions;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutConfigurationSetVdmOptionsResponse {}

/**
 * @public
 * <p>A request to move a dedicated IP address to a dedicated IP pool.</p>
 */
export interface PutDedicatedIpInPoolRequest {
  /**
   * @public
   * <p>The IP address that you want to move to the dedicated IP pool. The value you specify
   *             has to be a dedicated IP address that's associated with your Amazon Web Services account.</p>
   */
  Ip: string | undefined;

  /**
   * @public
   * <p>The name of the IP pool that you want to add the dedicated IP address to. You have to
   *             specify an IP pool that already exists.</p>
   */
  DestinationPoolName: string | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpInPoolResponse {}

/**
 * @public
 * <p>A request to convert a dedicated IP pool to a different scaling mode.</p>
 */
export interface PutDedicatedIpPoolScalingAttributesRequest {
  /**
   * @public
   * <p>The name of the dedicated IP pool.</p>
   */
  PoolName: string | undefined;

  /**
   * @public
   * <p>The scaling mode to apply to the dedicated IP pool.</p>
   *          <note>
   *             <p>Changing the scaling mode from <code>MANAGED</code> to <code>STANDARD</code> is not supported.</p>
   *          </note>
   */
  ScalingMode: ScalingMode | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpPoolScalingAttributesResponse {}

/**
 * @public
 * <p>A request to change the warm-up attributes for a dedicated IP address. This operation
 *             is useful when you want to resume the warm-up process for an existing IP address.</p>
 */
export interface PutDedicatedIpWarmupAttributesRequest {
  /**
   * @public
   * <p>The dedicated IP address that you want to update the warm-up attributes for.</p>
   */
  Ip: string | undefined;

  /**
   * @public
   * <p>The warm-up percentage that you want to associate with the dedicated IP
   *             address.</p>
   */
  WarmupPercentage: number | undefined;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutDedicatedIpWarmupAttributesResponse {}

/**
 * @public
 * <p>Enable or disable the Deliverability dashboard. When you enable the Deliverability dashboard, you gain
 *             access to reputation, deliverability, and other metrics for the domains that you use to
 *             send email using Amazon SES API v2. You also gain the ability to perform predictive inbox placement tests.</p>
 *          <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition
 *             to any other fees that you accrue by using Amazon SES and other Amazon Web Services services. For more
 *             information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
 */
export interface PutDeliverabilityDashboardOptionRequest {
  /**
   * @public
   * <p>Specifies whether to enable the Deliverability dashboard. To enable the dashboard, set this
   *             value to <code>true</code>.</p>
   */
  DashboardEnabled: boolean | undefined;

  /**
   * @public
   * <p>An array of objects, one for each verified domain that you use to send email and
   *             enabled the Deliverability dashboard for.</p>
   */
  SubscribedDomains?: DomainDeliverabilityTrackingOption[];
}

/**
 * @public
 * <p>A response that indicates whether the Deliverability dashboard is enabled.</p>
 */
export interface PutDeliverabilityDashboardOptionResponse {}

/**
 * @public
 * <p>A request to associate a configuration set with an email identity.</p>
 */
export interface PutEmailIdentityConfigurationSetAttributesRequest {
  /**
   * @public
   * <p>The email address or domain to associate with a configuration set.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>The configuration set to associate with an email identity.</p>
   */
  ConfigurationSetName?: string;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *             HTTP body.</p>
 */
export interface PutEmailIdentityConfigurationSetAttributesResponse {}

/**
 * @public
 * <p>A request to enable or disable DKIM signing of email that you send from an email
 *             identity.</p>
 */
export interface PutEmailIdentityDkimAttributesRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>Sets the DKIM signing configuration for the identity.</p>
   *          <p>When you set this value <code>true</code>, then the messages that are sent from the
   *             identity are signed using DKIM. If you set this value to <code>false</code>, your
   *             messages are sent without DKIM signing.</p>
   */
  SigningEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityDkimAttributesResponse {}

/**
 * @public
 * <p>A request to change the DKIM attributes for an email identity.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>The method to use to configure DKIM for the identity. There are the following possible
   *             values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS_SES</code> – Configure DKIM for the identity by using <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                         DKIM</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXTERNAL</code> – Configure DKIM for the identity by using Bring
   *                     Your Own DKIM (BYODKIM).</p>
   *             </li>
   *          </ul>
   */
  SigningAttributesOrigin: DkimSigningAttributesOrigin | undefined;

  /**
   * @public
   * <p>An object that contains information about the private key and selector that you want
   *             to use to configure DKIM for the identity for Bring Your Own DKIM (BYODKIM) for the
   *             identity, or, configures the key length to be used for <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a>.</p>
   */
  SigningAttributes?: DkimSigningAttributes;
}

/**
 * @public
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 *          <p>The following data is returned in JSON format by the service.</p>
 */
export interface PutEmailIdentityDkimSigningAttributesResponse {
  /**
   * @public
   * <p>The DKIM authentication status of the identity. Amazon SES determines the authentication
   *             status by searching for specific records in the DNS configuration for your domain. If
   *             you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy
   *                 DKIM</a> to set up DKIM authentication, Amazon SES tries to find three unique CNAME
   *             records in the DNS configuration for your domain.</p>
   *          <p>If you provided a public key to perform DKIM authentication, Amazon SES tries to find a TXT
   *             record that uses the selector that you specified. The value of the TXT record must be a
   *             public key that's paired with the private key that you specified in the process of
   *             creating the identity.</p>
   *          <p>The status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – The verification process was initiated, but Amazon SES
   *                     hasn't yet detected the DKIM records in the DNS configuration for the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCESS</code> – The verification process completed
   *                     successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – The verification process failed. This typically
   *                     occurs when Amazon SES fails to find the DKIM records in the DNS configuration of the
   *                     domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon SES
   *                     from determining the DKIM authentication status of the domain.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_STARTED</code> – The DKIM verification process hasn't been
   *                     initiated for the domain.</p>
   *             </li>
   *          </ul>
   */
  DkimStatus?: DkimStatus;

  /**
   * @public
   * <p>If you used <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html">Easy DKIM</a> to configure DKIM authentication for the domain, then this object
   *             contains a set of unique strings that you use to create a set of CNAME records that you
   *             add to the DNS configuration for your domain. When Amazon SES detects these records in the
   *             DNS configuration for your domain, the DKIM authentication process is complete.</p>
   *          <p>If you configured DKIM authentication for the domain by providing your own
   *             public-private key pair, then this object contains the selector that's associated with
   *             your public key.</p>
   *          <p>Regardless of the DKIM authentication method you use, Amazon SES searches for the
   *             appropriate records in the DNS configuration of the domain for up to 72 hours.</p>
   */
  DkimTokens?: string[];
}

/**
 * @public
 * <p>A request to set the attributes that control how bounce and complaint events are
 *             processed.</p>
 */
export interface PutEmailIdentityFeedbackAttributesRequest {
  /**
   * @public
   * <p>The email identity.</p>
   */
  EmailIdentity: string | undefined;

  /**
   * @public
   * <p>Sets the feedback forwarding configuration for the identity.</p>
   *          <p>If the value is <code>true</code>, you receive email notifications when bounce or
   *             complaint events occur. These notifications are sent to the address that you specified
   *             in the <code>Return-Path</code> header of the original email.</p>
   *          <p>You're required to have a method of tracking bounces and complaints. If you haven't
   *             set up another mechanism for receiving bounce or complaint notifications (for example,
   *             by setting up an event destination), you receive an email notification when these events
   *             occur (even if this setting is disabled).</p>
   */
  EmailForwardingEnabled?: boolean;
}

/**
 * @public
 * <p>An HTTP 200 response if the request succeeds, or an error message if the request
 *             fails.</p>
 */
export interface PutEmailIdentityFeedbackAttributesResponse {}

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
export const MessageInsightsFiltersFilterSensitiveLog = (obj: MessageInsightsFilters): any => ({
  ...obj,
  ...(obj.FromEmailAddress && { FromEmailAddress: SENSITIVE_STRING }),
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
  ...(obj.Subject && { Subject: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MessageInsightsDataSourceFilterSensitiveLog = (obj: MessageInsightsDataSource): any => ({
  ...obj,
  ...(obj.Include && { Include: MessageInsightsFiltersFilterSensitiveLog(obj.Include) }),
  ...(obj.Exclude && { Exclude: MessageInsightsFiltersFilterSensitiveLog(obj.Exclude) }),
});

/**
 * @internal
 */
export const ExportDataSourceFilterSensitiveLog = (obj: ExportDataSource): any => ({
  ...obj,
  ...(obj.MessageInsightsDataSource && {
    MessageInsightsDataSource: MessageInsightsDataSourceFilterSensitiveLog(obj.MessageInsightsDataSource),
  }),
});

/**
 * @internal
 */
export const CreateExportJobRequestFilterSensitiveLog = (obj: CreateExportJobRequest): any => ({
  ...obj,
  ...(obj.ExportDataSource && { ExportDataSource: ExportDataSourceFilterSensitiveLog(obj.ExportDataSource) }),
});

/**
 * @internal
 */
export const EmailInsightsFilterSensitiveLog = (obj: EmailInsights): any => ({
  ...obj,
  ...(obj.Destination && { Destination: SENSITIVE_STRING }),
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
export const GetExportJobResponseFilterSensitiveLog = (obj: GetExportJobResponse): any => ({
  ...obj,
  ...(obj.ExportDataSource && { ExportDataSource: ExportDataSourceFilterSensitiveLog(obj.ExportDataSource) }),
});

/**
 * @internal
 */
export const GetMessageInsightsResponseFilterSensitiveLog = (obj: GetMessageInsightsResponse): any => ({
  ...obj,
  ...(obj.FromEmailAddress && { FromEmailAddress: SENSITIVE_STRING }),
  ...(obj.Subject && { Subject: SENSITIVE_STRING }),
  ...(obj.Insights && { Insights: obj.Insights.map((item) => EmailInsightsFilterSensitiveLog(item)) }),
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
export const PutEmailIdentityDkimSigningAttributesRequestFilterSensitiveLog = (
  obj: PutEmailIdentityDkimSigningAttributesRequest
): any => ({
  ...obj,
  ...(obj.SigningAttributes && { SigningAttributes: DkimSigningAttributesFilterSensitiveLog(obj.SigningAttributes) }),
});
