// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SSMContactsServiceException as __BaseException } from "./SSMContactsServiceException";

/**
 * @public
 * @enum
 */
export const AcceptCodeValidation = {
  ENFORCE: "ENFORCE",
  IGNORE: "IGNORE",
} as const;

/**
 * @public
 */
export type AcceptCodeValidation = (typeof AcceptCodeValidation)[keyof typeof AcceptCodeValidation];

/**
 * @public
 * @enum
 */
export const AcceptType = {
  DELIVERED: "DELIVERED",
  READ: "READ",
} as const;

/**
 * @public
 */
export type AcceptType = (typeof AcceptType)[keyof typeof AcceptType];

/**
 * @public
 */
export interface AcceptPageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
   * @public
   */
  PageId: string | undefined;

  /**
   * <p>The ARN of the contact channel.</p>
   * @public
   */
  ContactChannelId?: string | undefined;

  /**
   * <p>The type indicates if the page was <code>DELIVERED</code> or <code>READ</code>.</p>
   * @public
   */
  AcceptType: AcceptType | undefined;

  /**
   * <p>Information provided by the user when the user acknowledges the page.</p>
   * @public
   */
  Note?: string | undefined;

  /**
   * <p>A 6-digit code used to acknowledge the page.</p>
   * @public
   */
  AcceptCode: string | undefined;

  /**
   * <p>An optional field that Incident Manager uses to <code>ENFORCE</code>
   *             <code>AcceptCode</code> validation when acknowledging an page. Acknowledgement can occur by
   *          replying to a page, or when entering the AcceptCode in the console. Enforcing AcceptCode
   *          validation causes Incident Manager to verify that the code entered by the user matches the
   *          code sent by Incident Manager with the page.</p>
   *          <p>Incident Manager can also <code>IGNORE</code>
   *             <code>AcceptCode</code> validation. Ignoring <code>AcceptCode</code> validation causes
   *          Incident Manager to accept any value entered for the <code>AcceptCode</code>.</p>
   * @public
   */
  AcceptCodeValidation?: AcceptCodeValidation | undefined;
}

/**
 * @public
 */
export interface AcceptPageResult {}

/**
 * <p>You don't have sufficient access to perform this operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Unexpected error occurred while processing the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Request references a resource that doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Hypothetical resource identifier that was not found
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   * @public
   */
  ResourceType: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Service Quotas requirement to identify originating service
   * @public
   */
  QuotaCode?: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota
   * @public
   */
  ServiceCode?: string | undefined;

  /**
   * Advice to clients on when the call can be safely retried
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Provides information about which field caused the exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that caused the exception.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Information about what caused the field to cause an exception.</p>
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Reason the request failed validation
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * The fields that caused the error
   * @public
   */
  Fields?: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Fields = opts.Fields;
  }
}

/**
 * @public
 */
export interface ActivateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The code sent to the contact channel when it was created in the contact.</p>
   * @public
   */
  ActivationCode: string | undefined;
}

/**
 * @public
 */
export interface ActivateContactChannelResult {}

/**
 * @public
 * @enum
 */
export const ActivationStatus = {
  ACTIVATED: "ACTIVATED",
  NOT_ACTIVATED: "NOT_ACTIVATED",
} as const;

/**
 * @public
 */
export type ActivationStatus = (typeof ActivationStatus)[keyof typeof ActivationStatus];

/**
 * <p>Information about the contact channel that Incident Manager uses to engage the
 *          contact.</p>
 * @public
 */
export interface ChannelTargetInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The number of minutes to wait to retry sending engagement in the case the engagement
   *          initially fails.</p>
   * @public
   */
  RetryIntervalInMinutes?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * <p>Information about a resource that another resource is related to or depends on.</p>
 *          <p>For example, if a contact is a member of a rotation, the rotation is a dependent entity
 *          of the contact.</p>
 * @public
 */
export interface DependentEntity {
  /**
   * <p>The type of relationship between one resource and the other resource that it is related
   *          to or depends on.</p>
   * @public
   */
  RelationType: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the dependent resources.</p>
   * @public
   */
  DependentResourceIds: string[] | undefined;
}

/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Identifier of the resource in use
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Type of the resource in use
   * @public
   */
  ResourceType: string | undefined;

  /**
   * List of dependent entities containing information on relation type and resourceArns linked to the resource in use
   * @public
   */
  DependentEntities?: DependentEntity[] | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.DependentEntities = opts.DependentEntities;
  }
}

/**
 * @public
 * @enum
 */
export const ContactType = {
  ESCALATION: "ESCALATION",
  ONCALL_SCHEDULE: "ONCALL_SCHEDULE",
  PERSONAL: "PERSONAL",
} as const;

/**
 * @public
 */
export type ContactType = (typeof ContactType)[keyof typeof ContactType];

/**
 * <p>A personal contact or escalation plan that Incident Manager engages during an
 *          incident.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The unique and identifiable alias of the contact or escalation plan.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>Refers to the type of contact. A single contact is type <code>PERSONAL</code> and an
   *          escalation plan is type <code>ESCALATION</code>.</p>
   * @public
   */
  Type: ContactType | undefined;
}

/**
 * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
 * @public
 */
export interface ContactChannelAddress {
  /**
   * <p>The format is dependent on the type of the contact channel. The following are the
   *          expected formats:</p>
   *          <ul>
   *             <li>
   *                <p>SMS - '+' followed by the country code and phone number</p>
   *             </li>
   *             <li>
   *                <p>VOICE - '+' followed by the country code and phone number</p>
   *             </li>
   *             <li>
   *                <p>EMAIL - any standard email format</p>
   *             </li>
   *          </ul>
   * @public
   */
  SimpleAddress?: string | undefined;
}

/**
 * <p>The method that Incident Manager uses to engage a contact.</p>
 * @public
 */
export interface ContactChannel {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelArn: string | undefined;

  /**
   * <p>The ARN of the contact that contains the contact channel.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the contact channel. Incident Manager supports three contact methods:</p>
   *          <ul>
   *             <li>
   *                <p>SMS</p>
   *             </li>
   *             <li>
   *                <p>VOICE</p>
   *             </li>
   *             <li>
   *                <p>EMAIL</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: ChannelType | undefined;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>A Boolean value describing if the contact channel has been activated or not. If the
   *          contact channel isn't activated, Incident Manager can't engage the contact through it.</p>
   * @public
   */
  ActivationStatus: ActivationStatus | undefined;
}

/**
 * <p>The contact that Incident Manager is engaging during an incident.</p>
 * @public
 */
export interface ContactTargetInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>A Boolean value determining if the contact's acknowledgement stops the progress of
   *          stages in the plan.</p>
   * @public
   */
  IsEssential: boolean | undefined;
}

/**
 * <p>Details about when an on-call rotation shift begins or ends.</p>
 * @public
 */
export interface HandOffTime {
  /**
   * <p>The hour when an on-call rotation shift begins or ends.</p>
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute when an on-call rotation shift begins or ends.</p>
   * @public
   */
  MinuteOfHour: number | undefined;
}

/**
 * <p>Information about when an on-call shift begins and ends.</p>
 * @public
 */
export interface CoverageTime {
  /**
   * <p>Information about when the on-call rotation shift begins.</p>
   * @public
   */
  Start?: HandOffTime | undefined;

  /**
   * <p>Information about when the on-call rotation shift ends.</p>
   * @public
   */
  End?: HandOffTime | undefined;
}

/**
 * <p>The contact or contact channel that's being engaged.</p>
 * @public
 */
export interface Target {
  /**
   * <p>Information about the contact channel Incident Manager is engaging.</p>
   * @public
   */
  ChannelTargetInfo?: ChannelTargetInfo | undefined;

  /**
   * <p>Information about the contact that Incident Manager is engaging.</p>
   * @public
   */
  ContactTargetInfo?: ContactTargetInfo | undefined;
}

/**
 * <p>A set amount of time that an escalation plan or engagement plan engages the specified
 *          contacts or contact methods.</p>
 * @public
 */
export interface Stage {
  /**
   * <p>The time to wait until beginning the next stage. The duration can only be set to 0 if a
   *          target is specified.</p>
   * @public
   */
  DurationInMinutes: number | undefined;

  /**
   * <p>The contacts or contact methods that the escalation plan or engagement plan is
   *          engaging.</p>
   * @public
   */
  Targets: Target[] | undefined;
}

/**
 * <p>Information about the stages and on-call rotation teams associated with an escalation
 *          plan or engagement plan.
 *          </p>
 * @public
 */
export interface Plan {
  /**
   * <p>A list of stages that the escalation plan or engagement plan uses to engage contacts and
   *          contact methods.</p>
   * @public
   */
  Stages?: Stage[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
   *       </p>
   * @public
   */
  RotationIds?: string[] | undefined;
}

/**
 * <p>A container of a key-value name pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>Name of the object key.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>Value of the tag.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * <p>The short name to quickly identify a contact or escalation plan. The contact alias must
   *          be unique and identifiable.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>To create an escalation plan use <code>ESCALATION</code>. To create a contact use
   *             <code>PERSONAL</code>.</p>
   * @public
   */
  Type: ContactType | undefined;

  /**
   * <p>A list of stages. A contact has an engagement plan with stages that contact specified
   *          contact channels. An escalation plan uses stages that contact specified contacts.</p>
   * @public
   */
  Plan: Plan | undefined;

  /**
   * <p>Adds a tag to the target. You can only tag resources created in the first Region of your
   *          replication set.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the created contact or escalation plan.</p>
   * @public
   */
  ContactArn: string | undefined;
}

/**
 * <p>The operation failed to due an encryption key error.</p>
 * @public
 */
export class DataEncryptionException extends __BaseException {
  readonly name: "DataEncryptionException" = "DataEncryptionException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DataEncryptionException, __BaseException>) {
    super({
      name: "DataEncryptionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DataEncryptionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Identifier of the resource affected
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Type of the resource affected
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * Service Quotas requirement to identify originating service
   * @public
   */
  QuotaCode: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota
   * @public
   */
  ServiceCode: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 */
export interface CreateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact you are adding the contact channel
   *          to.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Incident Manager supports three types of contact channels:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>VOICE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Type: ChannelType | undefined;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel. The format
   *          is dependent on the type of the contact channel. The following are the expected
   *          formats:</p>
   *          <ul>
   *             <li>
   *                <p>SMS - '+' followed by the country code and phone number</p>
   *             </li>
   *             <li>
   *                <p>VOICE - '+' followed by the country code and phone number</p>
   *             </li>
   *             <li>
   *                <p>EMAIL - any standard email format</p>
   *             </li>
   *          </ul>
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>If you want to activate the channel at a later time, you can choose to defer activation.
   *          Incident Manager can't engage your contact channel until it has been activated.</p>
   * @public
   */
  DeferActivation?: boolean | undefined;

  /**
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactChannelResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelArn: string | undefined;
}

/**
 * <p>Information about on-call rotations that recur monthly.</p>
 * @public
 */
export interface MonthlySetting {
  /**
   * <p>The day of the month when monthly recurring on-call rotations begin.</p>
   * @public
   */
  DayOfMonth: number | undefined;

  /**
   * <p>The time of day when a monthly recurring on-call shift rotation begins.</p>
   * @public
   */
  HandOffTime: HandOffTime | undefined;
}

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRI: "FRI",
  MON: "MON",
  SAT: "SAT",
  SUN: "SUN",
  THU: "THU",
  TUE: "TUE",
  WED: "WED",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * <p>Information about rotations that recur weekly.</p>
 * @public
 */
export interface WeeklySetting {
  /**
   * <p>The day of the week when weekly recurring on-call shift rotations begins.</p>
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * <p>The time of day when a weekly recurring on-call shift rotation begins.</p>
   * @public
   */
  HandOffTime: HandOffTime | undefined;
}

/**
 * <p>Information about when an on-call rotation is in effect and how long the rotation period
 *          lasts.</p>
 * @public
 */
export interface RecurrenceSettings {
  /**
   * <p>Information about on-call rotations that recur monthly.</p>
   * @public
   */
  MonthlySettings?: MonthlySetting[] | undefined;

  /**
   * <p>Information about on-call rotations that recur weekly.</p>
   * @public
   */
  WeeklySettings?: WeeklySetting[] | undefined;

  /**
   * <p>Information about on-call rotations that recur daily.</p>
   * @public
   */
  DailySettings?: HandOffTime[] | undefined;

  /**
   * <p>The number of contacts, or shift team members designated to be on call concurrently
   *          during a shift. For example, in an on-call schedule containing ten contacts, a value of
   *             <code>2</code> designates that two of them are on call at any given time.</p>
   * @public
   */
  NumberOfOnCalls: number | undefined;

  /**
   * <p>Information about the days of the week included in on-call rotation coverage.</p>
   * @public
   */
  ShiftCoverages?: Partial<Record<DayOfWeek, CoverageTime[]>> | undefined;

  /**
   * <p>The number of days, weeks, or months a single rotation lasts.</p>
   * @public
   */
  RecurrenceMultiplier: number | undefined;
}

/**
 * @public
 */
export interface CreateRotationRequest {
  /**
   * <p>The name of the rotation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts to add to the rotation.</p>
   *          <p>The order that you list the contacts in is their shift order in the rotation schedule.
   *          To change the order of the contact's shifts, use the <a>UpdateRotation</a>
   *          operation.</p>
   * @public
   */
  ContactIds: string[] | undefined;

  /**
   * <p>The date and time that the rotation goes into effect.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority
   *          (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more
   *          information, see the <a href="https://www.iana.org/time-zones">Time Zone
   *             Database</a> on the IANA website.</p>
   *          <note>
   *             <p>Designators for time zones that don’t support Daylight Savings Time rules, such as
   *             Pacific Standard Time (PST) and Pacific Daylight Time (PDT), are not supported.</p>
   *          </note>
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * <p>Information about the rule that specifies when a shift's team members rotate.</p>
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;

  /**
   * <p>Optional metadata to assign to the rotation. Tags enable you to categorize a resource in
   *          different ways, such as by purpose, owner, or environment. For more information, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/tagging.html">Tagging
   *             Incident Manager resources</a> in the <i>Incident Manager User
   *             Guide</i>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *          details.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the created rotation.</p>
   * @public
   */
  RotationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationOverrideRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation to create an override for.</p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts to replace those in the current on-call
   *          rotation with.</p>
   *          <p>If you want to include any current team members in the override shift, you must include
   *          their ARNs in the new contact ID list.</p>
   * @public
   */
  NewContactIds: string[] | undefined;

  /**
   * <p>The date and time when the override goes into effect.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The date and time when the override ends.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>A token that ensures that the operation is called only once with the specified
   *          details.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationOverrideResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the created rotation override.</p>
   * @public
   */
  RotationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface DeactivateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you're deactivating.</p>
   * @public
   */
  ContactChannelId: string | undefined;
}

/**
 * @public
 */
export interface DeactivateContactChannelResult {}

/**
 * @public
 */
export interface DeleteContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact that you're deleting.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactResult {}

/**
 * @public
 */
export interface DeleteContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactChannelResult {}

/**
 * @public
 */
export interface DeleteRotationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation to delete.</p>
   * @public
   */
  RotationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRotationResult {}

/**
 * @public
 */
export interface DeleteRotationOverrideRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation that was overridden.</p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation override to delete.</p>
   * @public
   */
  RotationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRotationOverrideResult {}

/**
 * @public
 */
export interface DescribeEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement you want the details of.</p>
   * @public
   */
  EngagementId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngagementResult {
  /**
   * <p>The ARN of the escalation plan or contacts involved in the engagement.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the engagement.</p>
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   * @public
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * <p>The ARN of the incident in which the engagement occurred.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>The time that the engagement started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the engagement ended.</p>
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePageRequest {
  /**
   * <p>The ID of the engagement to a contact channel.</p>
   * @public
   */
  PageId: string | undefined;
}

/**
 * @public
 */
export interface DescribePageResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
   * @public
   */
  PageArn: string | undefined;

  /**
   * <p>The ARN of the engagement that engaged the contact channel.</p>
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the contact that was engaged.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   * @public
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * <p>The ARN of the incident that engaged the contact channel.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>The time the engagement was sent to the contact channel.</p>
   * @public
   */
  SentTime?: Date | undefined;

  /**
   * <p>The time that the contact channel acknowledged the engagement.</p>
   * @public
   */
  ReadTime?: Date | undefined;

  /**
   * <p>The time that the contact channel received the engagement.</p>
   * @public
   */
  DeliveryTime?: Date | undefined;
}

/**
 * <p>Incident Manager reaching out to a contact or escalation plan to engage contact during an
 *          incident.</p>
 * @public
 */
export interface Engagement {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the escalation plan or contact that Incident Manager is engaging.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   * @public
   */
  Sender: string | undefined;

  /**
   * <p>The ARN of the incident that's engaging the contact.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>The time that the engagement began.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time that the engagement ended.</p>
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactResult {
  /**
   * <p>The ARN of the contact or escalation plan.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The alias of the contact or escalation plan. The alias is unique and
   *          identifiable.</p>
   * @public
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The type of contact, either <code>PERSONAL</code> or <code>ESCALATION</code>.</p>
   * @public
   */
  Type: ContactType | undefined;

  /**
   * <p>Details about the specific timing or stages and targets of the escalation plan or
   *          engagement plan.</p>
   * @public
   */
  Plan: Plan | undefined;
}

/**
 * @public
 */
export interface GetContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want information about.</p>
   * @public
   */
  ContactChannelId: string | undefined;
}

/**
 * @public
 */
export interface GetContactChannelResult {
  /**
   * <p>The ARN of the contact that the channel belongs to.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the contact channel.</p>
   * @public
   */
  ContactChannelArn: string | undefined;

  /**
   * <p>The name of the contact channel</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of contact channel. The type is <code>SMS</code>, <code>VOICE</code>, or
   *             <code>EMAIL</code>.</p>
   * @public
   */
  Type: ChannelType | undefined;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>A Boolean value indicating if the contact channel has been activated or not.</p>
   * @public
   */
  ActivationStatus?: ActivationStatus | undefined;
}

/**
 * @public
 */
export interface GetContactPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ContactArn: string | undefined;
}

/**
 * @public
 */
export interface GetContactPolicyResult {
  /**
   * <p>The ARN of the contact or escalation plan.</p>
   * @public
   */
  ContactArn?: string | undefined;

  /**
   * <p>Details about the resource policy attached to the contact or escalation plan.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRotationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation to retrieve information
   *          about.</p>
   * @public
   */
  RotationId: string | undefined;
}

/**
 * @public
 */
export interface GetRotationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation.</p>
   * @public
   */
  RotationArn: string | undefined;

  /**
   * <p>The name of the on-call rotation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts assigned to the on-call rotation
   *          team.</p>
   * @public
   */
  ContactIds: string[] | undefined;

  /**
   * <p>The specified start time for the on-call rotation.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The time zone that the rotation’s activity is based on, in Internet Assigned Numbers
   *          Authority (IANA) format.</p>
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * <p>Specifies how long a rotation lasts before restarting at the beginning of the shift
   *          order.</p>
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface GetRotationOverrideRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the overridden rotation to retrieve information
   *          about.</p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation override to retrieve information
   *          about.</p>
   * @public
   */
  RotationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface GetRotationOverrideResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the override to an on-call rotation.</p>
   * @public
   */
  RotationOverrideId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the on-call rotation that was overridden.</p>
   * @public
   */
  RotationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call
   *          rotation.</p>
   * @public
   */
  NewContactIds?: string[] | undefined;

  /**
   * <p>The date and time when the override goes into effect.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time when the override ends.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The date and time when the override was created.</p>
   * @public
   */
  CreateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListContactChannelsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of contact channels per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContactChannelsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of contact channels related to the specified contact.</p>
   * @public
   */
  ContactChannels: ContactChannel[] | undefined;
}

/**
 * @public
 */
export interface ListContactsRequest {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of contacts and escalation plans per page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Used to list only contacts who's aliases start with the specified prefix.</p>
   * @public
   */
  AliasPrefix?: string | undefined;

  /**
   * <p>The type of contact. A contact is type <code>PERSONAL</code> and an escalation plan is
   *          type <code>ESCALATION</code>.</p>
   * @public
   */
  Type?: ContactType | undefined;
}

/**
 * @public
 */
export interface ListContactsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the contacts and escalation plans in your Incident Manager account.</p>
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * <p>A range of between two set times</p>
 * @public
 */
export interface TimeRange {
  /**
   * <p>The start of the time range.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end of the time range.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEngagementsRequest {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of engagements per page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident you're listing engagements for.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>The time range to lists engagements for an incident.</p>
   * @public
   */
  TimeRangeValue?: TimeRange | undefined;
}

/**
 * @public
 */
export interface ListEngagementsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of each engagement that occurred during the specified time range of an
   *          incident.</p>
   * @public
   */
  Engagements: Engagement[] | undefined;
}

/**
 * @public
 */
export interface ListPageReceiptsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a specific contact channel.</p>
   * @public
   */
  PageId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of acknowledgements per page of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ReceiptType = {
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  READ: "READ",
  SENT: "SENT",
  STOP: "STOP",
} as const;

/**
 * @public
 */
export type ReceiptType = (typeof ReceiptType)[keyof typeof ReceiptType];

/**
 * <p>Records events during an engagement.</p>
 * @public
 */
export interface Receipt {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged.</p>
   * @public
   */
  ContactChannelArn?: string | undefined;

  /**
   * <p>The type follows the engagement cycle, <code>SENT</code>, <code>DELIVERED</code>, and
   *             <code>READ</code>.</p>
   * @public
   */
  ReceiptType: ReceiptType | undefined;

  /**
   * <p>Information provided during the page acknowledgement.</p>
   * @public
   */
  ReceiptInfo?: string | undefined;

  /**
   * <p>The time receipt was <code>SENT</code>, <code>DELIVERED</code>, or
   *          <code>READ</code>.</p>
   * @public
   */
  ReceiptTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPageReceiptsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of each acknowledgement.</p>
   * @public
   */
  Receipts?: Receipt[] | undefined;
}

/**
 * @public
 */
export interface ListPageResolutionsRequest {
  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact engaged for the incident.</p>
   * @public
   */
  PageId: string | undefined;
}

/**
 * <p>Information about the engagement resolution steps. The resolution starts from the first
 *          contact, which can be an escalation plan, then resolves to an on-call rotation, and finally
 *          to a personal contact.</p>
 *          <p>The <code>ResolutionContact</code> structure describes the information for each node or
 *          step in that process. It contains information about different contact types, such as the
 *          escalation, rotation, and personal contacts.</p>
 * @public
 */
export interface ResolutionContact {
  /**
   * <p>The Amazon Resource Name (ARN) of a contact in the engagement resolution process.
   *       </p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The type of contact for a resolution step.</p>
   * @public
   */
  Type: ContactType | undefined;

  /**
   * <p>The stage in the escalation plan that resolves to this contact.</p>
   * @public
   */
  StageIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListPageResolutionsResult {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the resolution for an engagement.</p>
   * @public
   */
  PageResolutions: ResolutionContact[] | undefined;
}

/**
 * @public
 */
export interface ListPagesByContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact you are retrieving engagements for.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of engagements to contact channels to list per page of results.
   *       </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Incident Manager engaging a contact's contact channel.</p>
 * @public
 */
export interface Page {
  /**
   * <p>The Amazon Resource Name (ARN) of the page to the contact channel.</p>
   * @public
   */
  PageArn: string | undefined;

  /**
   * <p>The ARN of the engagement that this page is part of.</p>
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the contact that Incident Manager is engaging.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   * @public
   */
  Sender: string | undefined;

  /**
   * <p>The ARN of the incident that's engaging the contact channel.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>The time that Incident Manager engaged the contact channel.</p>
   * @public
   */
  SentTime?: Date | undefined;

  /**
   * <p>The time the message was delivered to the contact channel.</p>
   * @public
   */
  DeliveryTime?: Date | undefined;

  /**
   * <p>The time that the contact channel acknowledged engagement.</p>
   * @public
   */
  ReadTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPagesByContactResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of engagements to a contact's contact channel.</p>
   * @public
   */
  Pages: Page[] | undefined;
}

/**
 * @public
 */
export interface ListPagesByEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   * @public
   */
  EngagementId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of engagements to contact channels to list per page of
   *          results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPagesByEngagementResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of engagements to contact channels.</p>
   * @public
   */
  Pages: Page[] | undefined;
}

/**
 * <p>Information about contacts and times that an on-call override replaces.</p>
 * @public
 */
export interface PreviewOverride {
  /**
   * <p>Information about contacts to add to an on-call rotation override.</p>
   * @public
   */
  NewMembers?: string[] | undefined;

  /**
   * <p>Information about the time a rotation override would begin.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>Information about the time a rotation override would end.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPreviewRotationShiftsRequest {
  /**
   * <p>The date and time a rotation would begin. The first shift is calculated from this date
   *          and time.</p>
   * @public
   */
  RotationStartTime?: Date | undefined;

  /**
   * <p>Used to filter the range of calculated shifts before sending the response back to the
   *          user. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time a rotation shift would end.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The contacts that would be assigned to a rotation.</p>
   * @public
   */
  Members: string[] | undefined;

  /**
   * <p>The time zone the rotation’s activity would be based on, in Internet Assigned Numbers
   *          Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul".
   *       </p>
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * <p>Information about how long a rotation would last before restarting at the beginning of
   *          the shift order.</p>
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;

  /**
   * <p>Information about changes that would be made in a rotation override.</p>
   * @public
   */
  Overrides?: PreviewOverride[] | undefined;

  /**
   * <p>A token to start the list. This token is used to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          can be specified in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about overrides to an on-call rotation shift.</p>
 * @public
 */
export interface ShiftDetails {
  /**
   * <p>The Amazon Resources Names (ARNs) of the contacts who were replaced in a shift when an
   *          override was created. If the override is deleted, these contacts are restored to the
   *          shift.</p>
   * @public
   */
  OverriddenContactIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ShiftType = {
  OVERRIDDEN: "OVERRIDDEN",
  REGULAR: "REGULAR",
} as const;

/**
 * @public
 */
export type ShiftType = (typeof ShiftType)[keyof typeof ShiftType];

/**
 * <p>Information about a shift that belongs to an on-call rotation.</p>
 * @public
 */
export interface RotationShift {
  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts who are part of the shift rotation.
   *       </p>
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * <p>The time a shift rotation begins.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The time a shift rotation ends.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The type of shift rotation.</p>
   * @public
   */
  Type?: ShiftType | undefined;

  /**
   * <p>Additional information about an on-call rotation shift.</p>
   * @public
   */
  ShiftDetails?: ShiftDetails | undefined;
}

/**
 * @public
 */
export interface ListPreviewRotationShiftsResult {
  /**
   * <p>Details about a rotation shift, including times, types, and contacts.</p>
   * @public
   */
  RotationShifts?: RotationShift[] | undefined;

  /**
   * <p>The token for the next set of items to return. This token is used to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRotationOverridesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation to retrieve information about.</p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The date and time for the beginning of a time range for listing overrides.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The date and time for the end of a time range for listing overrides.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about an override specified for an on-call rotation.</p>
 * @public
 */
export interface RotationOverride {
  /**
   * <p>The Amazon Resource Name (ARN) of the override to an on-call rotation.</p>
   * @public
   */
  RotationOverrideId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call
   *          rotation.</p>
   * @public
   */
  NewContactIds: string[] | undefined;

  /**
   * <p>The time a rotation override begins.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The time a rotation override ends.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The time a rotation override was created.</p>
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRotationOverridesResult {
  /**
   * <p>A list of rotation overrides in the specified time range.</p>
   * @public
   */
  RotationOverrides?: RotationOverride[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRotationsRequest {
  /**
   * <p>A filter to include rotations in list results based on their common prefix. For example,
   *          entering prod returns a list of all rotation names that begin with <code>prod</code>, such
   *          as <code>production</code> and <code>prod-1</code>.</p>
   * @public
   */
  RotationNamePrefix?: string | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Information about a rotation in an on-call schedule.</p>
 * @public
 */
export interface Rotation {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation.</p>
   * @public
   */
  RotationArn: string | undefined;

  /**
   * <p>The name of the rotation.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts assigned to the rotation team.</p>
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * <p>The date and time the rotation becomes active.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time zone the rotation’s activity is based on, in Internet Assigned Numbers
   *          Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul".
   *       </p>
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * <p>Information about when an on-call rotation is in effect and how long the rotation period
   *          lasts.</p>
   * @public
   */
  Recurrence?: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface ListRotationsResult {
  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about rotations that meet the filter criteria.</p>
   * @public
   */
  Rotations: Rotation[] | undefined;
}

/**
 * @public
 */
export interface ListRotationShiftsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation to retrieve shift information about.
   *       </p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The date and time for the beginning of the time range to list shifts for.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The date and time for the end of the time range to list shifts for.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>A token to start the list. Use this token to get the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return for this call. The call also returns a token that
   *          you can specify in a subsequent call to get the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRotationShiftsResult {
  /**
   * <p>Information about shifts that meet the filter criteria.</p>
   * @public
   */
  RotationShifts?: RotationShift[] | undefined;

  /**
   * <p>The token for the next set of items to return. Use this token to get the next set of
   *          results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * <p>The tags related to the contact or escalation plan.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutContactPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ContactArn: string | undefined;

  /**
   * <p>Details of the resource policy.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutContactPolicyResult {}

/**
 * @public
 */
export interface SendActivationCodeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   * @public
   */
  ContactChannelId: string | undefined;
}

/**
 * @public
 */
export interface SendActivationCodeResult {}

/**
 * @public
 */
export interface StartEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact being engaged.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   * @public
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * <p>The ARN of the incident that the engagement is part of.</p>
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartEngagementResult {
  /**
   * <p>The ARN of the engagement.</p>
   * @public
   */
  EngagementArn: string | undefined;
}

/**
 * @public
 */
export interface StopEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   * @public
   */
  EngagementId: string | undefined;

  /**
   * <p>The reason that you're stopping the engagement.</p>
   * @public
   */
  Reason?: string | undefined;
}

/**
 * @public
 */
export interface StopEngagementResult {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags that you are adding to the contact or escalation plan.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResult {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key of the tag that you want to remove.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResult {}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan you're updating.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A list of stages. A contact has an engagement plan with stages for specified contact
   *          channels. An escalation plan uses these stages to contact specified contacts.</p>
   * @public
   */
  Plan?: Plan | undefined;
}

/**
 * @public
 */
export interface UpdateContactResult {}

/**
 * @public
 */
export interface UpdateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want to update.</p>
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
   * @public
   */
  DeliveryAddress?: ContactChannelAddress | undefined;
}

/**
 * @public
 */
export interface UpdateContactChannelResult {}

/**
 * @public
 */
export interface UpdateRotationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the rotation to update.</p>
   * @public
   */
  RotationId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the contacts to include in the updated rotation. </p>
   *          <p>The order in which you list the contacts is their shift order in the rotation
   *          schedule.</p>
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * <p>The date and time the rotation goes into effect.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time zone to base the updated rotation’s activity on, in Internet Assigned Numbers
   *          Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For
   *          more information, see the <a href="https://www.iana.org/time-zones">Time Zone
   *             Database</a> on the IANA website.</p>
   *          <note>
   *             <p>Designators for time zones that don’t support Daylight Savings Time Rules, such as
   *             Pacific Standard Time (PST) and Pacific Daylight Time (PDT), aren't supported.</p>
   *          </note>
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * <p>Information about how long the updated rotation lasts before restarting at the beginning
   *          of the shift order.</p>
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface UpdateRotationResult {}
