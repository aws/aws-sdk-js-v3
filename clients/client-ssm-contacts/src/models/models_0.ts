// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SSMContactsServiceException as __BaseException } from "./SSMContactsServiceException";

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
   * <p>An optional field that Incident Manager uses to <code>ENFORCE</code>
   *             <code>AcceptCode</code> validation when acknowledging an page. Acknowledgement can occur by
   *          replying to a page, or when entering the AcceptCode in the console. Enforcing AcceptCode
   *          validation causes Incident Manager to verify that the code entered by the user matches the
   *          code sent by Incident Manager with the page.</p>
   *          <p>Incident Manager can also <code>IGNORE</code>
   *             <code>AcceptCode</code> validation. Ignoring <code>AcceptCode</code> validation causes
   *          Incident Manager to accept any value entered for the <code>AcceptCode</code>.</p>
   */
  AcceptCodeValidation?: AcceptCodeValidation | string;
}

export interface AcceptPageResult {}

/**
 * <p>You don't have sufficient access to perform this operation.</p>
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
 * <p>Unexpected error occurred while
 *          processing the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * Advice to clients on when the call can be safely retried
   */
  RetryAfterSeconds?: number;
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
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Hypothetical resource identifier that was not found
   */
  ResourceId: string | undefined;

  /**
   * Hypothetical resource type that was not found
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
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Reason the request failed validation
   */
  Reason?: ValidationExceptionReason | string;

  /**
   * The fields that caused the error
   */
  Fields?: ValidationExceptionField[];
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

export interface ActivateContactChannelResult {}

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

export enum ChannelType {
  EMAIL = "EMAIL",
  SMS = "SMS",
  VOICE = "VOICE",
}

/**
 * <p>Updating or deleting a resource causes an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * Identifier of the resource in use
   */
  ResourceId: string | undefined;

  /**
   * ype of the resource in use
   */
  ResourceType: string | undefined;
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
  }
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

/**
 * <p>The contact or contact channel that's being engaged.</p>
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
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   */
  IdempotencyToken?: string;
}

export interface CreateContactResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the created contact or escalation plan.</p>
   */
  ContactArn: string | undefined;
}

/**
 * <p>The operation failed to due an encryption key error.</p>
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
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   */
  IdempotencyToken?: string;
}

export interface CreateContactChannelResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelArn: string | undefined;
}

export interface DeactivateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you're deactivating.</p>
   */
  ContactChannelId: string | undefined;
}

export interface DeactivateContactChannelResult {}

export interface DeleteContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact that you're deleting.</p>
   */
  ContactId: string | undefined;
}

export interface DeleteContactResult {}

export interface DeleteContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;
}

export interface DeleteContactChannelResult {}

export interface DescribeEngagementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the engagement you want the details of.</p>
   */
  EngagementId: string | undefined;
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

export interface DescribePageRequest {
  /**
   * <p>The ID of the engagement to a contact channel.</p>
   */
  PageId: string | undefined;
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

export interface GetContactRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactId: string | undefined;
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

export interface GetContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want information about.</p>
   */
  ContactChannelId: string | undefined;
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

export interface GetContactPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ContactArn: string | undefined;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact or escalation plan.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResult {
  /**
   * <p>The tags related to the contact or escalation plan.</p>
   */
  Tags?: Tag[];
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

export interface PutContactPolicyResult {}

export interface SendActivationCodeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel.</p>
   */
  ContactChannelId: string | undefined;
}

export interface SendActivationCodeResult {}

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
   * <p>A token ensuring that the operation is called only once with the specified
   *          details.</p>
   */
  IdempotencyToken?: string;
}

export interface StartEngagementResult {
  /**
   * <p>The ARN of the engagement.</p>
   */
  EngagementArn: string | undefined;
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

export interface StopEngagementResult {}

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

export interface TagResourceResult {}

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

export interface UntagResourceResult {}

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

export interface UpdateContactResult {}

export interface UpdateContactChannelRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact channel you want to update.</p>
   */
  ContactChannelId: string | undefined;

  /**
   * <p>The name of the contact channel.</p>
   */
  Name?: string;

  /**
   * <p>The details that Incident Manager uses when trying to engage the contact channel. </p>
   */
  DeliveryAddress?: ContactChannelAddress;
}

export interface UpdateContactChannelResult {}

/**
 * @internal
 */
export const AcceptPageRequestFilterSensitiveLog = (obj: AcceptPageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceptPageResultFilterSensitiveLog = (obj: AcceptPageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateContactChannelRequestFilterSensitiveLog = (obj: ActivateContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivateContactChannelResultFilterSensitiveLog = (obj: ActivateContactChannelResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelTargetInfoFilterSensitiveLog = (obj: ChannelTargetInfo): any => ({
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
export const ContactChannelAddressFilterSensitiveLog = (obj: ContactChannelAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactChannelFilterSensitiveLog = (obj: ContactChannel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactTargetInfoFilterSensitiveLog = (obj: ContactTargetInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StageFilterSensitiveLog = (obj: Stage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlanFilterSensitiveLog = (obj: Plan): any => ({
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
export const CreateContactRequestFilterSensitiveLog = (obj: CreateContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactResultFilterSensitiveLog = (obj: CreateContactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactChannelRequestFilterSensitiveLog = (obj: CreateContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactChannelResultFilterSensitiveLog = (obj: CreateContactChannelResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateContactChannelRequestFilterSensitiveLog = (obj: DeactivateContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateContactChannelResultFilterSensitiveLog = (obj: DeactivateContactChannelResult): any => ({
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
export const DeleteContactResultFilterSensitiveLog = (obj: DeleteContactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactChannelRequestFilterSensitiveLog = (obj: DeleteContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactChannelResultFilterSensitiveLog = (obj: DeleteContactChannelResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngagementRequestFilterSensitiveLog = (obj: DescribeEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEngagementResultFilterSensitiveLog = (obj: DescribeEngagementResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePageRequestFilterSensitiveLog = (obj: DescribePageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePageResultFilterSensitiveLog = (obj: DescribePageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngagementFilterSensitiveLog = (obj: Engagement): any => ({
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
export const GetContactResultFilterSensitiveLog = (obj: GetContactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactChannelRequestFilterSensitiveLog = (obj: GetContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactChannelResultFilterSensitiveLog = (obj: GetContactChannelResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactPolicyRequestFilterSensitiveLog = (obj: GetContactPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactPolicyResultFilterSensitiveLog = (obj: GetContactPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactChannelsRequestFilterSensitiveLog = (obj: ListContactChannelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactChannelsResultFilterSensitiveLog = (obj: ListContactChannelsResult): any => ({
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
export const ListContactsResultFilterSensitiveLog = (obj: ListContactsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeRangeFilterSensitiveLog = (obj: TimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEngagementsRequestFilterSensitiveLog = (obj: ListEngagementsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEngagementsResultFilterSensitiveLog = (obj: ListEngagementsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPageReceiptsRequestFilterSensitiveLog = (obj: ListPageReceiptsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReceiptFilterSensitiveLog = (obj: Receipt): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPageReceiptsResultFilterSensitiveLog = (obj: ListPageReceiptsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPagesByContactRequestFilterSensitiveLog = (obj: ListPagesByContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PageFilterSensitiveLog = (obj: Page): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPagesByContactResultFilterSensitiveLog = (obj: ListPagesByContactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPagesByEngagementRequestFilterSensitiveLog = (obj: ListPagesByEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPagesByEngagementResultFilterSensitiveLog = (obj: ListPagesByEngagementResult): any => ({
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
export const ListTagsForResourceResultFilterSensitiveLog = (obj: ListTagsForResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutContactPolicyRequestFilterSensitiveLog = (obj: PutContactPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutContactPolicyResultFilterSensitiveLog = (obj: PutContactPolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendActivationCodeRequestFilterSensitiveLog = (obj: SendActivationCodeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendActivationCodeResultFilterSensitiveLog = (obj: SendActivationCodeResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartEngagementRequestFilterSensitiveLog = (obj: StartEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartEngagementResultFilterSensitiveLog = (obj: StartEngagementResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopEngagementRequestFilterSensitiveLog = (obj: StopEngagementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopEngagementResultFilterSensitiveLog = (obj: StopEngagementResult): any => ({
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
export const TagResourceResultFilterSensitiveLog = (obj: TagResourceResult): any => ({
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
export const UntagResourceResultFilterSensitiveLog = (obj: UntagResourceResult): any => ({
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
export const UpdateContactResultFilterSensitiveLog = (obj: UpdateContactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactChannelRequestFilterSensitiveLog = (obj: UpdateContactChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactChannelResultFilterSensitiveLog = (obj: UpdateContactChannelResult): any => ({
  ...obj,
});
