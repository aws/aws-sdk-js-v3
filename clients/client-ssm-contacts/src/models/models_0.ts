// smithy-typescript generated code
import type {
  AcceptCodeValidation,
  AcceptType,
  ActivationStatus,
  ChannelType,
  ContactType,
  DayOfWeek,
  ReceiptType,
  ShiftType,
} from "./enums";

/**
 * @public
 */
export interface AcceptPageRequest {
  /**
   * The Amazon Resource Name (ARN) of the engagement to a contact channel.
   *
   * @public
   */
  PageId: string | undefined;

  /**
   * The ARN of the contact channel.
   *
   * @public
   */
  ContactChannelId?: string | undefined;

  /**
   * The type indicates if the page was `DELIVERED` or `READ`.
   *
   * @public
   */
  AcceptType: AcceptType | undefined;

  /**
   * Information provided by the user when the user acknowledges the page.
   *
   * @public
   */
  Note?: string | undefined;

  /**
   * A 6-digit code used to acknowledge the page.
   *
   * @public
   */
  AcceptCode: string | undefined;

  /**
   * An optional field that Incident Manager uses to `ENFORCE` `AcceptCode` validation when acknowledging an page. Acknowledgement can occur by replying to a page, or when entering the AcceptCode in the console. Enforcing AcceptCode validation causes Incident Manager to verify that the code entered by the user matches the code sent by Incident Manager with the page.
   *
   * Incident Manager can also `IGNORE` `AcceptCode` validation. Ignoring `AcceptCode` validation causes Incident Manager to accept any value entered for the `AcceptCode`.
   *
   * @public
   */
  AcceptCodeValidation?: AcceptCodeValidation | undefined;
}

/**
 * @public
 */
export interface AcceptPageResult {}

/**
 * Provides information about which field caused the exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that caused the exception.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Information about what caused the field to cause an exception.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * @public
 */
export interface ActivateContactChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact channel.
   *
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * The code sent to the contact channel when it was created in the contact.
   *
   * @public
   */
  ActivationCode: string | undefined;
}

/**
 * @public
 */
export interface ActivateContactChannelResult {}

/**
 * Information about the contact channel that Incident Manager uses to engage the contact.
 *
 * @public
 */
export interface ChannelTargetInfo {
  /**
   * The Amazon Resource Name (ARN) of the contact channel.
   *
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * The number of minutes to wait before retrying to send engagement if the engagement initially failed.
   *
   * @public
   */
  RetryIntervalInMinutes?: number | undefined;
}

/**
 * Information about a resource that another resource is related to or depends on.
 *
 * For example, if a contact is a member of a rotation, the rotation is a dependent entity of the contact.
 *
 * @public
 */
export interface DependentEntity {
  /**
   * The type of relationship between one resource and the other resource that it is related to or depends on.
   *
   * @public
   */
  RelationType: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the dependent resources.
   *
   * @public
   */
  DependentResourceIds: string[] | undefined;
}

/**
 * A personal contact or escalation plan that Incident Manager engages during an incident.
 *
 * @public
 */
export interface Contact {
  /**
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The unique and identifiable alias of the contact or escalation plan.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The full name of the contact or escalation plan.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The type of contact.
   *
   * - `PERSONAL`: A single, individual contact.
   * - `ESCALATION`: An escalation plan.
   * - `ONCALL_SCHEDULE`: An on-call schedule.
   *
   * @public
   */
  Type: ContactType | undefined;
}

/**
 * The details that Incident Manager uses when trying to engage the contact channel.
 *
 * @public
 */
export interface ContactChannelAddress {
  /**
   * The format is dependent on the type of the contact channel. The following are the expected formats:
   *
   * - SMS - '+' followed by the country code and phone number
   * - VOICE - '+' followed by the country code and phone number
   * - EMAIL - any standard email format
   *
   * @public
   */
  SimpleAddress?: string | undefined;
}

/**
 * The method that Incident Manager uses to engage a contact.
 *
 * @public
 */
export interface ContactChannel {
  /**
   * The Amazon Resource Name (ARN) of the contact channel.
   *
   * @public
   */
  ContactChannelArn: string | undefined;

  /**
   * The ARN of the contact that contains the contact channel.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The name of the contact channel.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the contact channel. Incident Manager supports three contact methods:
   *
   * - SMS
   * - VOICE
   * - EMAIL
   *
   * @public
   */
  Type?: ChannelType | undefined;

  /**
   * The details that Incident Manager uses when trying to engage the contact channel.
   *
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * A Boolean value describing if the contact channel has been activated or not. If the contact channel isn't activated, Incident Manager can't engage the contact through it.
   *
   * @public
   */
  ActivationStatus: ActivationStatus | undefined;
}

/**
 * The contact that Incident Manager is engaging during an incident.
 *
 * @public
 */
export interface ContactTargetInfo {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * @public
   */
  ContactId?: string | undefined;

  /**
   * A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.
   *
   * @public
   */
  IsEssential: boolean | undefined;
}

/**
 * Details about when an on-call rotation shift begins or ends.
 *
 * @public
 */
export interface HandOffTime {
  /**
   * The hour when an on-call rotation shift begins or ends.
   *
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * The minute when an on-call rotation shift begins or ends.
   *
   * @public
   */
  MinuteOfHour: number | undefined;
}

/**
 * Information about when an on-call shift begins and ends.
 *
 * @public
 */
export interface CoverageTime {
  /**
   * Information about when the on-call rotation shift begins.
   *
   * @public
   */
  Start?: HandOffTime | undefined;

  /**
   * Information about when the on-call rotation shift ends.
   *
   * @public
   */
  End?: HandOffTime | undefined;
}

/**
 * The contact or contact channel that's being engaged.
 *
 * @public
 */
export interface Target {
  /**
   * Information about the contact channel that Incident Manager engages.
   *
   * @public
   */
  ChannelTargetInfo?: ChannelTargetInfo | undefined;

  /**
   * Information about the contact that Incident Manager engages.
   *
   * @public
   */
  ContactTargetInfo?: ContactTargetInfo | undefined;
}

/**
 * A set amount of time that an escalation plan or engagement plan engages the specified contacts or contact methods.
 *
 * @public
 */
export interface Stage {
  /**
   * The time to wait until beginning the next stage. The duration can only be set to 0 if a target is specified.
   *
   * @public
   */
  DurationInMinutes: number | undefined;

  /**
   * The contacts or contact methods that the escalation plan or engagement plan is engaging.
   *
   * @public
   */
  Targets: Target[] | undefined;
}

/**
 * Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.
 *
 * @public
 */
export interface Plan {
  /**
   * A list of stages that the escalation plan or engagement plan uses to engage contacts and contact methods.
   *
   * @public
   */
  Stages?: Stage[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the on-call rotations associated with the plan.
   *
   * @public
   */
  RotationIds?: string[] | undefined;
}

/**
 * A container of a key-value name pair.
 *
 * @public
 */
export interface Tag {
  /**
   * Name of the object key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * Value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * The short name to quickly identify a contact or escalation plan. The contact alias must be unique and identifiable.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The full name of the contact or escalation plan.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The type of contact to create.
   *
   * - `PERSONAL`: A single, individual contact.
   * - `ESCALATION`: An escalation plan.
   * - `ONCALL_SCHEDULE`: An on-call schedule.
   *
   * @public
   */
  Type: ContactType | undefined;

  /**
   * A list of stages. A contact has an engagement plan with stages that contact specified contact channels. An escalation plan uses stages that contact specified contacts.
   *
   * @public
   */
  Plan: Plan | undefined;

  /**
   * Adds a tag to the target. You can only tag resources created in the first Region of your replication set.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactResult {
  /**
   * The Amazon Resource Name (ARN) of the created contact or escalation plan.
   *
   * @public
   */
  ContactArn: string | undefined;
}

/**
 * @public
 */
export interface CreateContactChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The name of the contact channel.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Incident Manager supports three types of contact channels:
   *
   * - `SMS`
   * - `VOICE`
   * - `EMAIL`
   *
   * @public
   */
  Type: ChannelType | undefined;

  /**
   * The details that Incident Manager uses when trying to engage the contact channel. The format is dependent on the type of the contact channel. The following are the expected formats:
   *
   * - SMS - '+' followed by the country code and phone number
   * - VOICE - '+' followed by the country code and phone number
   * - EMAIL - any standard email format
   *
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * If you want to activate the channel at a later time, you can choose to defer activation. Incident Manager can't engage your contact channel until it has been activated.
   *
   * @public
   */
  DeferActivation?: boolean | undefined;

  /**
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateContactChannelResult {
  /**
   * The Amazon Resource Name (ARN) of the contact channel.
   *
   * @public
   */
  ContactChannelArn: string | undefined;
}

/**
 * Information about on-call rotations that recur monthly.
 *
 * @public
 */
export interface MonthlySetting {
  /**
   * The day of the month when monthly recurring on-call rotations begin.
   *
   * @public
   */
  DayOfMonth: number | undefined;

  /**
   * The time of day when a monthly recurring on-call shift rotation begins.
   *
   * @public
   */
  HandOffTime: HandOffTime | undefined;
}

/**
 * Information about rotations that recur weekly.
 *
 * @public
 */
export interface WeeklySetting {
  /**
   * The day of the week when weekly recurring on-call shift rotations begins.
   *
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * The time of day when a weekly recurring on-call shift rotation begins.
   *
   * @public
   */
  HandOffTime: HandOffTime | undefined;
}

/**
 * Information about when an on-call rotation is in effect and how long the rotation period lasts.
 *
 * @public
 */
export interface RecurrenceSettings {
  /**
   * Information about on-call rotations that recur monthly.
   *
   * @public
   */
  MonthlySettings?: MonthlySetting[] | undefined;

  /**
   * Information about on-call rotations that recur weekly.
   *
   * @public
   */
  WeeklySettings?: WeeklySetting[] | undefined;

  /**
   * Information about on-call rotations that recur daily.
   *
   * @public
   */
  DailySettings?: HandOffTime[] | undefined;

  /**
   * The number of contacts, or shift team members designated to be on call concurrently during a shift. For example, in an on-call schedule that contains ten contacts, a value of `2` designates that two of them are on call at any given time.
   *
   * @public
   */
  NumberOfOnCalls: number | undefined;

  /**
   * Information about the days of the week that the on-call rotation coverage includes.
   *
   * @public
   */
  ShiftCoverages?: Partial<Record<DayOfWeek, CoverageTime[]>> | undefined;

  /**
   * The number of days, weeks, or months a single rotation lasts.
   *
   * @public
   */
  RecurrenceMultiplier: number | undefined;
}

/**
 * @public
 */
export interface CreateRotationRequest {
  /**
   * The name of the rotation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts to add to the rotation.
   *
   * > **Note:** Only the `PERSONAL` contact type is supported. The contact types `ESCALATION` and `ONCALL_SCHEDULE` are not supported for this operation.
   *
   * The order that you list the contacts in is their shift order in the rotation schedule. To change the order of the contact's shifts, use the UpdateRotation operation.
   *
   * @public
   */
  ContactIds: string[] | undefined;

  /**
   * The date and time that the rotation goes into effect.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time zone to base the rotation’s activity on in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * > **Note:** Designators for time zones that don’t support Daylight Savings Time rules, such as Pacific Standard Time (PST), are not supported.
   *
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * Information about the rule that specifies when a shift's team members rotate.
   *
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;

  /**
   * Optional metadata to assign to the rotation. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For more information, see [Tagging Incident Manager resources](https://docs.aws.amazon.com/incident-manager/latest/userguide/tagging.html) in the *Incident Manager User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A token that ensures that the operation is called only once with the specified details.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationResult {
  /**
   * The Amazon Resource Name (ARN) of the created rotation.
   *
   * @public
   */
  RotationArn: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationOverrideRequest {
  /**
   * The Amazon Resource Name (ARN) of the rotation to create an override for.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts to replace those in the current on-call rotation with.
   *
   * If you want to include any current team members in the override shift, you must include their ARNs in the new contact ID list.
   *
   * @public
   */
  NewContactIds: string[] | undefined;

  /**
   * The date and time when the override goes into effect.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The date and time when the override ends.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * A token that ensures that the operation is called only once with the specified details.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRotationOverrideResult {
  /**
   * The Amazon Resource Name (ARN) of the created rotation override.
   *
   * @public
   */
  RotationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface DeactivateContactChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact channel you're deactivating.
   *
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
   * The Amazon Resource Name (ARN) of the contact that you're deleting.
   *
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
   * The Amazon Resource Name (ARN) of the contact channel.
   *
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
   * The Amazon Resource Name (ARN) of the on-call rotation to delete.
   *
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
   * The Amazon Resource Name (ARN) of the rotation that was overridden.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the on-call rotation override to delete.
   *
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
   * The Amazon Resource Name (ARN) of the engagement you want the details of.
   *
   * @public
   */
  EngagementId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEngagementResult {
  /**
   * The ARN of the escalation plan or contacts involved in the engagement.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The ARN of the engagement.
   *
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * The user that started the engagement.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The secure subject of the message that was sent to the contact. Use this field for engagements to `VOICE` and `EMAIL`.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The secure content of the message that was sent to the contact. Use this field for engagements to `VOICE` and `EMAIL`.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The insecure subject of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * The insecure content of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * The ARN of the incident in which the engagement occurred.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * The time that the engagement started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the engagement ended.
   *
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePageRequest {
  /**
   * The ID of the engagement to a contact channel.
   *
   * @public
   */
  PageId: string | undefined;
}

/**
 * @public
 */
export interface DescribePageResult {
  /**
   * The Amazon Resource Name (ARN) of the engagement to a contact channel.
   *
   * @public
   */
  PageArn: string | undefined;

  /**
   * The ARN of the engagement that engaged the contact channel.
   *
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * The ARN of the contact that was engaged.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The user that started the engagement.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The secure subject of the message that was sent to the contact. Use this field for engagements to `VOICE` and `EMAIL`.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The secure content of the message that was sent to the contact. Use this field for engagements to `VOICE` and `EMAIL`.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The insecure subject of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * The insecure content of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * The ARN of the incident that engaged the contact channel.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * The time the engagement was sent to the contact channel.
   *
   * @public
   */
  SentTime?: Date | undefined;

  /**
   * The time that the contact channel acknowledged the engagement.
   *
   * @public
   */
  ReadTime?: Date | undefined;

  /**
   * The time that the contact channel received the engagement.
   *
   * @public
   */
  DeliveryTime?: Date | undefined;
}

/**
 * Incident Manager reaching out to a contact or escalation plan to engage contact during an incident.
 *
 * @public
 */
export interface Engagement {
  /**
   * The Amazon Resource Name (ARN) of the engagement.
   *
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * The ARN of the escalation plan or contact that Incident Manager is engaging.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The user that started the engagement.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The ARN of the incident that's engaging the contact.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * The time that the engagement began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time that the engagement ended.
   *
   * @public
   */
  StopTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetContactRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactResult {
  /**
   * The ARN of the contact or escalation plan.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The alias of the contact or escalation plan. The alias is unique and identifiable.
   *
   * @public
   */
  Alias: string | undefined;

  /**
   * The full name of the contact or escalation plan.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The type of contact.
   *
   * @public
   */
  Type: ContactType | undefined;

  /**
   * Details about the specific timing or stages and targets of the escalation plan or engagement plan.
   *
   * @public
   */
  Plan: Plan | undefined;
}

/**
 * @public
 */
export interface GetContactChannelRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact channel you want information about.
   *
   * @public
   */
  ContactChannelId: string | undefined;
}

/**
 * @public
 */
export interface GetContactChannelResult {
  /**
   * The ARN of the contact that the channel belongs to.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The ARN of the contact channel.
   *
   * @public
   */
  ContactChannelArn: string | undefined;

  /**
   * The name of the contact channel
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of contact channel. The type is `SMS`, `VOICE`, or `EMAIL`.
   *
   * @public
   */
  Type: ChannelType | undefined;

  /**
   * The details that Incident Manager uses when trying to engage the contact channel.
   *
   * @public
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * A Boolean value indicating if the contact channel has been activated or not.
   *
   * @public
   */
  ActivationStatus?: ActivationStatus | undefined;
}

/**
 * @public
 */
export interface GetContactPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ContactArn: string | undefined;
}

/**
 * @public
 */
export interface GetContactPolicyResult {
  /**
   * The ARN of the contact or escalation plan.
   *
   * @public
   */
  ContactArn?: string | undefined;

  /**
   * Details about the resource policy attached to the contact or escalation plan.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRotationRequest {
  /**
   * The Amazon Resource Name (ARN) of the on-call rotation to retrieve information about.
   *
   * @public
   */
  RotationId: string | undefined;
}

/**
 * @public
 */
export interface GetRotationResult {
  /**
   * The Amazon Resource Name (ARN) of the on-call rotation.
   *
   * @public
   */
  RotationArn: string | undefined;

  /**
   * The name of the on-call rotation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts assigned to the on-call rotation team.
   *
   * @public
   */
  ContactIds: string[] | undefined;

  /**
   * The specified start time for the on-call rotation.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time zone that the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format.
   *
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * Specifies how long a rotation lasts before restarting at the beginning of the shift order.
   *
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface GetRotationOverrideRequest {
  /**
   * The Amazon Resource Name (ARN) of the overridden rotation to retrieve information about.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the on-call rotation override to retrieve information about.
   *
   * @public
   */
  RotationOverrideId: string | undefined;
}

/**
 * @public
 */
export interface GetRotationOverrideResult {
  /**
   * The Amazon Resource Name (ARN) of the override to an on-call rotation.
   *
   * @public
   */
  RotationOverrideId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the on-call rotation that was overridden.
   *
   * @public
   */
  RotationArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.
   *
   * @public
   */
  NewContactIds?: string[] | undefined;

  /**
   * The date and time when the override goes into effect.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time when the override ends.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The date and time when the override was created.
   *
   * @public
   */
  CreateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListContactChannelsRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of contact channels per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListContactChannelsResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of contact channels related to the specified contact.
   *
   * @public
   */
  ContactChannels: ContactChannel[] | undefined;
}

/**
 * @public
 */
export interface ListContactsRequest {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of contacts and escalation plans per page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Used to list only contacts who's aliases start with the specified prefix.
   *
   * @public
   */
  AliasPrefix?: string | undefined;

  /**
   * The type of contact.
   *
   * @public
   */
  Type?: ContactType | undefined;
}

/**
 * @public
 */
export interface ListContactsResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of the contacts and escalation plans in your Incident Manager account.
   *
   * @public
   */
  Contacts?: Contact[] | undefined;
}

/**
 * A range of between two set times
 *
 * @public
 */
export interface TimeRange {
  /**
   * The start of the time range.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The end of the time range.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEngagementsRequest {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of engagements per page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the incident you're listing engagements for.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * The time range to lists engagements for an incident.
   *
   * @public
   */
  TimeRangeValue?: TimeRange | undefined;
}

/**
 * @public
 */
export interface ListEngagementsResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of each engagement that occurred during the specified time range of an incident.
   *
   * @public
   */
  Engagements: Engagement[] | undefined;
}

/**
 * @public
 */
export interface ListPageReceiptsRequest {
  /**
   * The Amazon Resource Name (ARN) of the engagement to a specific contact channel.
   *
   * @public
   */
  PageId: string | undefined;

  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of acknowledgements per page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Records events during an engagement.
 *
 * @public
 */
export interface Receipt {
  /**
   * The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged.
   *
   * @public
   */
  ContactChannelArn?: string | undefined;

  /**
   * The type follows the engagement cycle, `SENT`, `DELIVERED`, and `READ`.
   *
   * @public
   */
  ReceiptType: ReceiptType | undefined;

  /**
   * Information provided during the page acknowledgement.
   *
   * @public
   */
  ReceiptInfo?: string | undefined;

  /**
   * The time receipt was `SENT`, `DELIVERED`, or `READ`.
   *
   * @public
   */
  ReceiptTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPageReceiptsResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of each acknowledgement.
   *
   * @public
   */
  Receipts?: Receipt[] | undefined;
}

/**
 * @public
 */
export interface ListPageResolutionsRequest {
  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the contact engaged for the incident.
   *
   * @public
   */
  PageId: string | undefined;
}

/**
 * Information about the engagement resolution steps. The resolution starts from the first contact, which can be an escalation plan, then resolves to an on-call rotation, and finally to a personal contact.
 *
 * The `ResolutionContact` structure describes the information for each node or step in that process. It contains information about different contact types, such as the escalation, rotation, and personal contacts.
 *
 * @public
 */
export interface ResolutionContact {
  /**
   * The Amazon Resource Name (ARN) of a contact in the engagement resolution process.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The type of contact for a resolution step.
   *
   * @public
   */
  Type: ContactType | undefined;

  /**
   * The stage in the escalation plan that resolves to this contact.
   *
   * @public
   */
  StageIndex?: number | undefined;
}

/**
 * @public
 */
export interface ListPageResolutionsResult {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about the resolution for an engagement.
   *
   * @public
   */
  PageResolutions: ResolutionContact[] | undefined;
}

/**
 * @public
 */
export interface ListPagesByContactRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact you are retrieving engagements for.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of engagements to contact channels to list per page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Incident Manager engaging a contact's contact channel.
 *
 * @public
 */
export interface Page {
  /**
   * The Amazon Resource Name (ARN) of the page to the contact channel.
   *
   * @public
   */
  PageArn: string | undefined;

  /**
   * The ARN of the engagement that this page is part of.
   *
   * @public
   */
  EngagementArn: string | undefined;

  /**
   * The ARN of the contact that Incident Manager is engaging.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * The user that started the engagement.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The ARN of the incident that's engaging the contact channel.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * The time that Incident Manager engaged the contact channel.
   *
   * @public
   */
  SentTime?: Date | undefined;

  /**
   * The time the message was delivered to the contact channel.
   *
   * @public
   */
  DeliveryTime?: Date | undefined;

  /**
   * The time that the contact channel acknowledged engagement.
   *
   * @public
   */
  ReadTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPagesByContactResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of engagements to a contact's contact channel.
   *
   * @public
   */
  Pages: Page[] | undefined;
}

/**
 * @public
 */
export interface ListPagesByEngagementRequest {
  /**
   * The Amazon Resource Name (ARN) of the engagement.
   *
   * @public
   */
  EngagementId: string | undefined;

  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of engagements to contact channels to list per page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPagesByEngagementResult {
  /**
   * The pagination token to continue to the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of engagements to contact channels.
   *
   * @public
   */
  Pages: Page[] | undefined;
}

/**
 * Information about contacts and times that an on-call override replaces.
 *
 * @public
 */
export interface PreviewOverride {
  /**
   * Information about contacts to add to an on-call rotation override.
   *
   * @public
   */
  NewMembers?: string[] | undefined;

  /**
   * Information about the time a rotation override would begin.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * Information about the time a rotation override would end.
   *
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPreviewRotationShiftsRequest {
  /**
   * The date and time a rotation would begin. The first shift is calculated from this date and time.
   *
   * @public
   */
  RotationStartTime?: Date | undefined;

  /**
   * Used to filter the range of calculated shifts before sending the response back to the user.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time a rotation shift would end.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The contacts that would be assigned to a rotation.
   *
   * @public
   */
  Members: string[] | undefined;

  /**
   * The time zone the rotation’s activity would be based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul".
   *
   * @public
   */
  TimeZoneId: string | undefined;

  /**
   * Information about how long a rotation would last before restarting at the beginning of the shift order.
   *
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;

  /**
   * Information about changes that would be made in a rotation override.
   *
   * @public
   */
  Overrides?: PreviewOverride[] | undefined;

  /**
   * A token to start the list. This token is used to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that can be specified in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about overrides to an on-call rotation shift.
 *
 * @public
 */
export interface ShiftDetails {
  /**
   * The Amazon Resources Names (ARNs) of the contacts who were replaced in a shift when an override was created. If the override is deleted, these contacts are restored to the shift.
   *
   * @public
   */
  OverriddenContactIds: string[] | undefined;
}

/**
 * Information about a shift that belongs to an on-call rotation.
 *
 * @public
 */
export interface RotationShift {
  /**
   * The Amazon Resource Names (ARNs) of the contacts who are part of the shift rotation.
   *
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * The time a shift rotation begins.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time a shift rotation ends.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The type of shift rotation.
   *
   * @public
   */
  Type?: ShiftType | undefined;

  /**
   * Additional information about an on-call rotation shift.
   *
   * @public
   */
  ShiftDetails?: ShiftDetails | undefined;
}

/**
 * @public
 */
export interface ListPreviewRotationShiftsResult {
  /**
   * Details about a rotation shift, including times, types, and contacts.
   *
   * @public
   */
  RotationShifts?: RotationShift[] | undefined;

  /**
   * The token for the next set of items to return. This token is used to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRotationOverridesRequest {
  /**
   * The Amazon Resource Name (ARN) of the rotation to retrieve information about.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The date and time for the beginning of a time range for listing overrides.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The date and time for the end of a time range for listing overrides.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about an override specified for an on-call rotation.
 *
 * @public
 */
export interface RotationOverride {
  /**
   * The Amazon Resource Name (ARN) of the override to an on-call rotation.
   *
   * @public
   */
  RotationOverrideId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts assigned to the override of the on-call rotation.
   *
   * @public
   */
  NewContactIds: string[] | undefined;

  /**
   * The time a rotation override begins.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The time a rotation override ends.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The time a rotation override was created.
   *
   * @public
   */
  CreateTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRotationOverridesResult {
  /**
   * A list of rotation overrides in the specified time range.
   *
   * @public
   */
  RotationOverrides?: RotationOverride[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRotationsRequest {
  /**
   * A filter to include rotations in list results based on their common prefix. For example, entering prod returns a list of all rotation names that begin with `prod`, such as `production` and `prod-1`.
   *
   * @public
   */
  RotationNamePrefix?: string | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Information about a rotation in an on-call schedule.
 *
 * @public
 */
export interface Rotation {
  /**
   * The Amazon Resource Name (ARN) of the rotation.
   *
   * @public
   */
  RotationArn: string | undefined;

  /**
   * The name of the rotation.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts assigned to the rotation team.
   *
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * The date and time the rotation becomes active.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time zone the rotation’s activity is based on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul".
   *
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * Information about when an on-call rotation is in effect and how long the rotation period lasts.
   *
   * @public
   */
  Recurrence?: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface ListRotationsResult {
  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Information about rotations that meet the filter criteria.
   *
   * @public
   */
  Rotations: Rotation[] | undefined;
}

/**
 * @public
 */
export interface ListRotationShiftsRequest {
  /**
   * The Amazon Resource Name (ARN) of the rotation to retrieve shift information about.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The date and time for the beginning of the time range to list shifts for.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time for the end of the time range to list shifts for.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * A token to start the list. Use this token to get the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListRotationShiftsResult {
  /**
   * Information about shifts that meet the filter criteria.
   *
   * @public
   */
  RotationShifts?: RotationShift[] | undefined;

  /**
   * The token for the next set of items to return. Use this token to get the next set of results.
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
   * The Amazon Resource Name (ARN) of the contact, escalation plan, rotation, or on-call schedule.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResult {
  /**
   * The tags related to the contact or escalation plan.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutContactPolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ContactArn: string | undefined;

  /**
   * Details of the resource policy.
   *
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
   * The Amazon Resource Name (ARN) of the contact channel.
   *
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
   * The Amazon Resource Name (ARN) of the contact being engaged.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The user that started the engagement.
   *
   * @public
   */
  Sender: string | undefined;

  /**
   * The secure subject of the message that was sent to the contact. Use this field for engagements to `VOICE` or `EMAIL`.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The secure content of the message that was sent to the contact. Use this field for engagements to `VOICE` or `EMAIL`.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The insecure subject of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicSubject?: string | undefined;

  /**
   * The insecure content of the message that was sent to the contact. Use this field for engagements to `SMS`.
   *
   * @public
   */
  PublicContent?: string | undefined;

  /**
   * The ARN of the incident that the engagement is part of.
   *
   * @public
   */
  IncidentId?: string | undefined;

  /**
   * A token ensuring that the operation is called only once with the specified details.
   *
   * @public
   */
  IdempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartEngagementResult {
  /**
   * The ARN of the engagement.
   *
   * @public
   */
  EngagementArn: string | undefined;
}

/**
 * @public
 */
export interface StopEngagementRequest {
  /**
   * The Amazon Resource Name (ARN) of the engagement.
   *
   * @public
   */
  EngagementId: string | undefined;

  /**
   * The reason that you're stopping the engagement.
   *
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
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags that you are adding to the contact or escalation plan.
   *
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
   * The Amazon Resource Name (ARN) of the contact or escalation plan.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key of the tag that you want to remove.
   *
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
   * The Amazon Resource Name (ARN) of the contact or escalation plan you're updating.
   *
   * @public
   */
  ContactId: string | undefined;

  /**
   * The full name of the contact or escalation plan.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * A list of stages. A contact has an engagement plan with stages for specified contact channels. An escalation plan uses these stages to contact specified contacts.
   *
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
   * The Amazon Resource Name (ARN) of the contact channel you want to update.
   *
   * @public
   */
  ContactChannelId: string | undefined;

  /**
   * The name of the contact channel.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The details that Incident Manager uses when trying to engage the contact channel.
   *
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
   * The Amazon Resource Name (ARN) of the rotation to update.
   *
   * @public
   */
  RotationId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the contacts to include in the updated rotation.
   *
   * > **Note:** Only the `PERSONAL` contact type is supported. The contact types `ESCALATION` and `ONCALL_SCHEDULE` are not supported for this operation.
   *
   * The order in which you list the contacts is their shift order in the rotation schedule.
   *
   * @public
   */
  ContactIds?: string[] | undefined;

  /**
   * The date and time the rotation goes into effect.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The time zone to base the updated rotation’s activity on, in Internet Assigned Numbers Authority (IANA) format. For example: "America/Los_Angeles", "UTC", or "Asia/Seoul". For more information, see the [Time Zone Database](https://www.iana.org/time-zones) on the IANA website.
   *
   * > **Note:** Designators for time zones that don’t support Daylight Savings Time Rules, such as Pacific Standard Time (PST), aren't supported.
   *
   * @public
   */
  TimeZoneId?: string | undefined;

  /**
   * Information about how long the updated rotation lasts before restarting at the beginning of the shift order.
   *
   * @public
   */
  Recurrence: RecurrenceSettings | undefined;
}

/**
 * @public
 */
export interface UpdateRotationResult {}
