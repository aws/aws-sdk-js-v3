import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum AcceptCodeValidation {
  ENFORCE = "ENFORCE",
  IGNORE = "IGNORE",
}

export enum AcceptType {
  DELIVERED = "DELIVERED",
  READ = "READ",
}

export interface AcceptPageRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
   */
  PageId: string | undefined;

  /**
   * <p>The ARN of the contact channel.</p>
   */
  ContactChannelId?: string;

  /**
   * <p>The type indicates if the page was <code>DELIVERED</code> or <code>READ</code>.</p>
   */
  AcceptType: AcceptType | string | undefined;

  /**
   * <p>Information provided by the user when the user acknowledges the page.</p>
   */
  Note?: string;

  /**
   * <p>The accept code is a 6-digit code used to acknowledge the page.</p>
   */
  AcceptCode: string | undefined;

  /**
   * <p>An
   *          optional field that Incident Manager uses to <code>ENFORCE</code>
   *             <code>AcceptCode</code> validation when acknowledging an page.
   *          Acknowledgement can occur by replying to a page, or when entering the AcceptCode in the
   *          console. Enforcing AcceptCode validation causes Incident Manager to verify that the code
   *          entered by the user matches the code sent by Incident Manager with the page.</p>
   *          <p>Incident Manager can also <code>IGNORE</code>
   *             <code>AcceptCode</code> validation. Ignoring <code>AcceptCode</code> validation causes
   *          Incident Manager to accept any value entered for the <code>AcceptCode</code>.</p>
   */
  AcceptCodeValidation?: AcceptCodeValidation | string;
}

export namespace AcceptPageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptPageRequest): any => ({
    ...obj,
  });
}

export interface AcceptPageResult {}

export namespace AcceptPageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AcceptPageResult): any => ({
    ...obj,
  });
}

/**
 * <p>You don't have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Unexpected error occurred while
 *          processing the request.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
  /**
   * Advice to clients on when the call can be safely retried
   */
  RetryAfterSeconds?: number;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Request references a resource that
 *          doesn't
 *          exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  /**
   * Hypothetical resource identifier that was not found
   */
  ResourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
   */
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  /**
   * Service Quotas requirement to identify originating service
   */
  QuotaCode?: string;

  /**
   * Service Quotas requirement to identify originating quota
   */
  ServiceCode?: string;

  /**
   * Advice to clients on when the call can be safely retried
   */
  RetryAfterSeconds?: number;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about which field caused the exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that caused the exception.</p>
   */
  Name: string | undefined;

  /**
   * <p>Information about what caused the field to cause an exception.</p>
   */
  Message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The input fails to satisfy the constraints specified by an
 *          AWS
 *          service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message: string | undefined;
  /**
   * Reason the request failed validation
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * The fields that caused the error
   */
  Fields?: ValidationExceptionField[];
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface ActivateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The code sent to the contact channel when it was created in the contact. </p>
   */
  ActivationCode: string | undefined;
}

export namespace ActivateContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateContactChannelRequest): any => ({
    ...obj,
  });
}

export interface ActivateContactChannelResult {}

export namespace ActivateContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ActivateContactChannelResult): any => ({
    ...obj,
  });
}

export enum ActivationStatus {
  ACTIVATED = "ACTIVATED",
  NOT_ACTIVATED = "NOT_ACTIVATED",
}

/**
 * <p>Information about the contact channel that Incident Manager uses to engage the
 *          contact.</p>
 */
export interface ChannelTargetInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The number of minutes to wait to retry sending engagement in the case the engagement
   *          initially fails.</p>
   */
  RetryIntervalInMinutes?: number;
}

export namespace ChannelTargetInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelTargetInfo): any => ({
    ...obj,
  });
}

export enum ChannelType {
  EMAIL = "EMAIL",
  SMS = "SMS",
  VOICE = "VOICE",
}

/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  /**
   * Identifier of the resource in use
   */
  ResourceId: string | undefined;

  /**
   * ype of the resource in use
   */
  ResourceType: string | undefined;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export enum ContactType {
  ESCALATION = "ESCALATION",
  PERSONAL = "PERSONAL",
}

/**
 * <p>A personal contact or escalation plan that Incident Manager engages during an
 *          incident.</p>
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The unique and identifiable alias of the contact or escalation plan.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   */
  DisplayName?: string;

  /**
   * <p>Refers to the type of contact. A single contact is type <code>PERSONAL</code> and an
   *          escalation plan is type <code>ESCALATION</code>.</p>
   */
  Type: ContactType | string | undefined;
}

export namespace Contact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Contact): any => ({
    ...obj,
  });
}

/**
 * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
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
   */
  SimpleAddress?: string;
}

export namespace ContactChannelAddress {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactChannelAddress): any => ({
    ...obj,
  });
}

/**
 * <p>The method that Incident Manager uses to engage a contact.</p>
 */
export interface ContactChannel {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelArn: string | undefined;

  /**
   * <p>The ARN of the contact that contains the contact channel.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
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
   */
  Type?: ChannelType | string;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel.</p>
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>A Boolean value describing if the contact channel has been activated or not. If the
   *          contact channel isn't activated, Incident Manager can't engage the contact through it. </p>
   */
  ActivationStatus: ActivationStatus | string | undefined;
}

export namespace ContactChannel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactChannel): any => ({
    ...obj,
  });
}

/**
 * <p>The contact that Incident Manager is engaging during an incident.</p>
 */
export interface ContactTargetInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   */
  ContactId?: string;

  /**
   * <p>A Boolean value determining if the contact's acknowledgement stops the progress of
   *          stages in the plan.</p>
   */
  IsEssential: boolean | undefined;
}

export namespace ContactTargetInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactTargetInfo): any => ({
    ...obj,
  });
}

/**
 * <p>The contact or contact channel that is being engaged.</p>
 */
export interface Target {
  /**
   * <p>Information about the contact channel Incident Manager is engaging.</p>
   */
  ChannelTargetInfo?: ChannelTargetInfo;

  /**
   * <p>Information about the contact that Incident Manager is engaging.</p>
   */
  ContactTargetInfo?: ContactTargetInfo;
}

export namespace Target {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Target): any => ({
    ...obj,
  });
}

/**
 * <p>A set amount of time that an escalation plan or engagement plan engages the specified
 *          contacts or contact methods.</p>
 */
export interface Stage {
  /**
   * <p>The time to wait until beginning the next stage. The duration can only be set to 0 if a
   *          target is specified.</p>
   */
  DurationInMinutes: number | undefined;

  /**
   * <p>The contacts or contact methods that the escalation plan or engagement plan is
   *          engaging.</p>
   */
  Targets: Target[] | undefined;
}

export namespace Stage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Stage): any => ({
    ...obj,
  });
}

/**
 * <p>The stages that an escalation plan or engagement plan engages contacts and contact
 *          methods in.</p>
 */
export interface Plan {
  /**
   * <p>A list of stages that the escalation plan or engagement plan uses to engage contacts and
   *          contact methods.</p>
   */
  Stages: Stage[] | undefined;
}

export namespace Plan {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Plan): any => ({
    ...obj,
  });
}

/**
 * <p>A container of a key-value name pair.</p>
 */
export interface Tag {
  /**
   * <p>Name of the
   *          object
   *          key.</p>
   */
  Key?: string;

  /**
   * <p>Value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateContactRequest {
  /**
   * <p>The short name to quickly identify a contact or escalation plan. The contact alias must
   *          be unique and identifiable. </p>
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.  </p>
   */
  DisplayName?: string;

  /**
   * <p>To create an escalation plan use <code>ESCALATION</code>. To create a contact use
   *             <code>PERSONAL</code>.</p>
   */
  Type: ContactType | string | undefined;

  /**
   * <p>A list of stages. A contact has an engagement plan with stages that contact specified
   *          contact channels. An escalation plan uses stages that contact specified contacts. </p>
   */
  Plan: Plan | undefined;

  /**
   * <p>Adds a tag to the target. You can only tag resources created in the first Region of your
   *          replication set. </p>
   */
  Tags?: Tag[];

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactRequest): any => ({
    ...obj,
  });
}

export interface CreateContactResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the created contact or escalation plan.</p>
   */
  ContactArn: string | undefined;
}

export namespace CreateContactResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactResult): any => ({
    ...obj,
  });
}

/**
 * <p>The action failed to due an encryption key error.</p>
 */
export interface DataEncryptionException extends __SmithyException, $MetadataBearer {
  name: "DataEncryptionException";
  $fault: "client";
  Message: string | undefined;
}

export namespace DataEncryptionException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataEncryptionException): any => ({
    ...obj,
  });
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message: string | undefined;
  /**
   * Identifier of the resource affected
   */
  ResourceId?: string;

  /**
   * Type of the resource affected
   */
  ResourceType?: string;

  /**
   * Service Quotas requirement to identify originating service
   */
  QuotaCode: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota
   */
  ServiceCode: string | undefined;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface CreateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
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
   */
  Type: ChannelType | string | undefined;

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
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>If you want to activate the channel at a later time, you can choose to defer activation.
   *          Incident Manager can't engage your contact channel until it has been activated.</p>
   */
  DeferActivation?: boolean;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  IdempotencyToken?: string;
}

export namespace CreateContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateContactChannelResult {
  /**
   * <p>The ARN of the contact channel.</p>
   */
  ContactChannelArn: string | undefined;
}

export namespace CreateContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactChannelResult): any => ({
    ...obj,
  });
}

export interface DeactivateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you're deactivating.</p>
   */
  ContactChannelId: string | undefined;
}

export namespace DeactivateContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateContactChannelRequest): any => ({
    ...obj,
  });
}

export interface DeactivateContactChannelResult {}

export namespace DeactivateContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeactivateContactChannelResult): any => ({
    ...obj,
  });
}

export interface DeleteContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact that you're deleting.</p>
   */
  ContactId: string | undefined;
}

export namespace DeleteContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactResult {}

export namespace DeleteContactResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactResult): any => ({
    ...obj,
  });
}

export interface DeleteContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;
}

export namespace DeleteContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactChannelResult {}

export namespace DeleteContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactChannelResult): any => ({
    ...obj,
  });
}

export interface DescribeEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement you want the details of.</p>
   */
  EngagementId: string | undefined;
}

export namespace DescribeEngagementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngagementRequest): any => ({
    ...obj,
  });
}

export interface DescribeEngagementResult {
  /**
   * <p>The ARN of the escalation plan or contacts involved in the engagement.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the engagement.</p>
   */
  EngagementArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicSubject?: string;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicContent?: string;

  /**
   * <p>The ARN of the incident in which the engagement occurred.</p>
   */
  IncidentId?: string;

  /**
   * <p>The time that the engagement started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the engagement ended.</p>
   */
  StopTime?: Date;
}

export namespace DescribeEngagementResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeEngagementResult): any => ({
    ...obj,
  });
}

export interface DescribePageRequest {
  /**
   * <p>The ID of the engagement to a contact channel.</p>
   */
  PageId: string | undefined;
}

export namespace DescribePageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePageRequest): any => ({
    ...obj,
  });
}

export interface DescribePageResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a contact channel.</p>
   */
  PageArn: string | undefined;

  /**
   * <p>The ARN of the engagement that engaged the contact channel.</p>
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the contact that was engaged.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> and <code>EMAIL</code>.</p>
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicSubject?: string;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicContent?: string;

  /**
   * <p>The ARN of the incident that engaged the contact channel.</p>
   */
  IncidentId?: string;

  /**
   * <p>The time the engagement was sent to the contact channel.</p>
   */
  SentTime?: Date;

  /**
   * <p>The time that the contact channel acknowledged the engagement.</p>
   */
  ReadTime?: Date;

  /**
   * <p>The time that the contact channel received the engagement.</p>
   */
  DeliveryTime?: Date;
}

export namespace DescribePageResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePageResult): any => ({
    ...obj,
  });
}

/**
 * <p>Incident Manager reaching out to a contact or escalation plan to engage contact during an
 *          incident.</p>
 */
export interface Engagement {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the escalation plan or contact that Incident Manager is engaging.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The ARN of the incident that's engaging the contact.</p>
   */
  IncidentId?: string;

  /**
   * <p>The time that the engagement began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time that the engagement ended.</p>
   */
  StopTime?: Date;
}

export namespace Engagement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Engagement): any => ({
    ...obj,
  });
}

export interface GetContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactId: string | undefined;
}

export namespace GetContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactRequest): any => ({
    ...obj,
  });
}

export interface GetContactResult {
  /**
   * <p>The ARN of the contact or escalation plan.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The alias of the contact or escalation plan. The alias is unique and
   *          identifiable.</p>
   */
  Alias: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   */
  DisplayName?: string;

  /**
   * <p>The type of contact, either <code>PERSONAL</code> or <code>ESCALATION</code>. </p>
   */
  Type: ContactType | string | undefined;

  /**
   * <p>Details about the specific timing or stages and targets of the escalation plan or
   *          engagement plan.</p>
   */
  Plan: Plan | undefined;
}

export namespace GetContactResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactResult): any => ({
    ...obj,
  });
}

export interface GetContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want information about.</p>
   */
  ContactChannelId: string | undefined;
}

export namespace GetContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactChannelRequest): any => ({
    ...obj,
  });
}

export interface GetContactChannelResult {
  /**
   * <p>The ARN of the contact that the channel belongs to.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The ARN of the contact channel.</p>
   */
  ContactChannelArn: string | undefined;

  /**
   * <p>The name of the contact channel</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of contact channel. The type is <code>SMS</code>, <code>VOICE</code>, or
   *             <code>EMAIL</code>.</p>
   */
  Type: ChannelType | string | undefined;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
   */
  DeliveryAddress: ContactChannelAddress | undefined;

  /**
   * <p>A Boolean value indicating if the contact channel has been activated or not.</p>
   */
  ActivationStatus?: ActivationStatus | string;
}

export namespace GetContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactChannelResult): any => ({
    ...obj,
  });
}

export interface GetContactPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactArn: string | undefined;
}

export namespace GetContactPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactPolicyRequest): any => ({
    ...obj,
  });
}

export interface GetContactPolicyResult {
  /**
   * <p>The ARN of the contact or escalation plan.</p>
   */
  ContactArn?: string;

  /**
   * <p>Details about the resource policy attached to the contact or escalation plan.</p>
   */
  Policy?: string;
}

export namespace GetContactPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactPolicyResult): any => ({
    ...obj,
  });
}

export interface ListContactChannelsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact. </p>
   */
  ContactId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of contact channels per page.</p>
   */
  MaxResults?: number;
}

export namespace ListContactChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactChannelsRequest): any => ({
    ...obj,
  });
}

export interface ListContactChannelsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of contact channels related to the specified contact.</p>
   */
  ContactChannels: ContactChannel[] | undefined;
}

export namespace ListContactChannelsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactChannelsResult): any => ({
    ...obj,
  });
}

export interface ListContactsRequest {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of contacts and escalation plans per page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>Used to list only contacts who's aliases start with the specified prefix.</p>
   */
  AliasPrefix?: string;

  /**
   * <p>The type of contact. A contact is type <code>PERSONAL</code> and an escalation plan is
   *          type <code>ESCALATION</code>.</p>
   */
  Type?: ContactType | string;
}

export namespace ListContactsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactsRequest): any => ({
    ...obj,
  });
}

export interface ListContactsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the contacts and escalation plans in your Incident Manager account.</p>
   */
  Contacts?: Contact[];
}

export namespace ListContactsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactsResult): any => ({
    ...obj,
  });
}

/**
 * <p>A range of between two set times</p>
 */
export interface TimeRange {
  /**
   * <p>The start of the time range.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time range.</p>
   */
  EndTime?: Date;
}

export namespace TimeRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeRange): any => ({
    ...obj,
  });
}

export interface ListEngagementsRequest {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of engagements per page of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the incident you're listing engagements for.</p>
   */
  IncidentId?: string;

  /**
   * <p>The time range to lists engagements for an incident.</p>
   */
  TimeRangeValue?: TimeRange;
}

export namespace ListEngagementsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEngagementsRequest): any => ({
    ...obj,
  });
}

export interface ListEngagementsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of each engagement that occurred during the specified time range of an
   *          incident.</p>
   */
  Engagements: Engagement[] | undefined;
}

export namespace ListEngagementsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEngagementsResult): any => ({
    ...obj,
  });
}

export interface ListPageReceiptsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement to a specific contact channel.</p>
   */
  PageId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of acknowledgements per page of results.</p>
   */
  MaxResults?: number;
}

export namespace ListPageReceiptsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPageReceiptsRequest): any => ({
    ...obj,
  });
}

export enum ReceiptType {
  DELIVERED = "DELIVERED",
  ERROR = "ERROR",
  READ = "READ",
  SENT = "SENT",
  STOP = "STOP",
}

/**
 * <p>Records events during an engagement.</p>
 */
export interface Receipt {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel Incident Manager engaged.</p>
   */
  ContactChannelArn?: string;

  /**
   * <p>The type follows the engagement cycle, <code>SENT</code>, <code>DELIVERED</code>, and
   *             <code>READ</code>.</p>
   */
  ReceiptType: ReceiptType | string | undefined;

  /**
   * <p>Information provided during the page acknowledgement.</p>
   */
  ReceiptInfo?: string;

  /**
   * <p>The time receipt was <code>SENT</code>, <code>DELIVERED</code>, or
   *          <code>READ</code>.</p>
   */
  ReceiptTime: Date | undefined;
}

export namespace Receipt {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Receipt): any => ({
    ...obj,
  });
}

export interface ListPageReceiptsResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of each acknowledgement.</p>
   */
  Receipts?: Receipt[];
}

export namespace ListPageReceiptsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPageReceiptsResult): any => ({
    ...obj,
  });
}

export interface ListPagesByContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact you are retrieving engagements for.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of engagements to contact channels to list per page of results. </p>
   */
  MaxResults?: number;
}

export namespace ListPagesByContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPagesByContactRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Incident Manager engaging a contact's contact channel.</p>
 */
export interface Page {
  /**
   * <p>The Amazon Resource Name (ARN) of the page to the contact channel.</p>
   */
  PageArn: string | undefined;

  /**
   * <p>The ARN of the engagement that this page is part of.</p>
   */
  EngagementArn: string | undefined;

  /**
   * <p>The ARN of the contact that Incident Manager is engaging.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The ARN of the incident that's engaging the contact channel.</p>
   */
  IncidentId?: string;

  /**
   * <p>The time that Incident Manager engaged the contact channel.</p>
   */
  SentTime?: Date;

  /**
   * <p>The time the message was delivered to the contact channel.</p>
   */
  DeliveryTime?: Date;

  /**
   * <p>The time that the contact channel acknowledged engagement.</p>
   */
  ReadTime?: Date;
}

export namespace Page {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Page): any => ({
    ...obj,
  });
}

export interface ListPagesByContactResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of engagements to a contact's contact channel.</p>
   */
  Pages: Page[] | undefined;
}

export namespace ListPagesByContactResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPagesByContactResult): any => ({
    ...obj,
  });
}

export interface ListPagesByEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   */
  EngagementId: string | undefined;

  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of engagements to contact channels to list per page of
   *          results.</p>
   */
  MaxResults?: number;
}

export namespace ListPagesByEngagementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPagesByEngagementRequest): any => ({
    ...obj,
  });
}

export interface ListPagesByEngagementResult {
  /**
   * <p>The pagination token to continue to the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of engagements to contact channels.</p>
   */
  Pages: Page[] | undefined;
}

export namespace ListPagesByEngagementResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPagesByEngagementResult): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResult {
  /**
   * <p>The tags related to the contact or escalation plan.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
    ...obj,
  });
}

export interface PutContactPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactArn: string | undefined;

  /**
   * <p>Details of the resource policy.</p>
   */
  Policy: string | undefined;
}

export namespace PutContactPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutContactPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutContactPolicyResult {}

export namespace PutContactPolicyResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutContactPolicyResult): any => ({
    ...obj,
  });
}

export interface SendActivationCodeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;
}

export namespace SendActivationCodeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendActivationCodeRequest): any => ({
    ...obj,
  });
}

export interface SendActivationCodeResult {}

export namespace SendActivationCodeResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendActivationCodeResult): any => ({
    ...obj,
  });
}

export interface StartEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact being engaged.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The user that started the engagement.</p>
   */
  Sender: string | undefined;

  /**
   * <p>The secure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The secure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>VOICE</code> or <code>EMAIL</code>.</p>
   */
  Content: string | undefined;

  /**
   * <p>The insecure subject of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicSubject?: string;

  /**
   * <p>The insecure content of the message that was sent to the contact. Use this field for
   *          engagements to <code>SMS</code>.</p>
   */
  PublicContent?: string;

  /**
   * <p>The ARN of the incident that the engagement is part of.</p>
   */
  IncidentId?: string;

  /**
   * <p>A token ensuring that the action is called only once with the specified details.</p>
   */
  IdempotencyToken?: string;
}

export namespace StartEngagementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEngagementRequest): any => ({
    ...obj,
  });
}

export interface StartEngagementResult {
  /**
   * <p>The ARN of the engagement.</p>
   */
  EngagementArn: string | undefined;
}

export namespace StartEngagementResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartEngagementResult): any => ({
    ...obj,
  });
}

export interface StopEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement.</p>
   */
  EngagementId: string | undefined;

  /**
   * <p>The reason that you're stopping the engagement. </p>
   */
  Reason?: string;
}

export namespace StopEngagementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEngagementRequest): any => ({
    ...obj,
  });
}

export interface StopEngagementResult {}

export namespace StopEngagementResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopEngagementResult): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags that you are adding to the contact or escalation plan.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResult {}

export namespace TagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResult): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key of the tag that you want to remove.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResult {}

export namespace UntagResourceResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResult): any => ({
    ...obj,
  });
}

export interface UpdateContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan you're updating.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The full name of the contact or escalation plan.</p>
   */
  DisplayName?: string;

  /**
   * <p>A list of stages. A contact has an engagement plan with stages for specified contact
   *          channels. An escalation plan uses these stages to contact specified contacts. </p>
   */
  Plan?: Plan;
}

export namespace UpdateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactResult {}

export namespace UpdateContactResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactResult): any => ({
    ...obj,
  });
}

export interface UpdateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want to update.</p>
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The name of the contact channel</p>
   */
  Name?: string;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
   */
  DeliveryAddress?: ContactChannelAddress;
}

export namespace UpdateContactChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactChannelResult {}

export namespace UpdateContactChannelResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactChannelResult): any => ({
    ...obj,
  });
}
