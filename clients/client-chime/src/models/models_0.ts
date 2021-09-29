import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum ErrorCode {
  AccessDenied = "AccessDenied",
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  Forbidden = "Forbidden",
  NotFound = "NotFound",
  PhoneNumberAssociationsExist = "PhoneNumberAssociationsExist",
  PreconditionFailed = "PreconditionFailed",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttled = "Throttled",
  Throttling = "Throttling",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}

/**
 * <p>You don't have permissions to perform the requested operation.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export enum AccountStatus {
  Active = "Active",
  Suspended = "Suspended",
}

export enum AccountType {
  EnterpriseDirectory = "EnterpriseDirectory",
  EnterpriseLWA = "EnterpriseLWA",
  EnterpriseOIDC = "EnterpriseOIDC",
  Team = "Team",
}

export enum License {
  Basic = "Basic",
  Plus = "Plus",
  Pro = "Pro",
  ProTrial = "ProTrial",
}

/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 */
export interface SigninDelegateGroup {
  /**
   * <p>The group name.</p>
   */
  GroupName?: string;
}

export namespace SigninDelegateGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SigninDelegateGroup): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  /**
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   */
  AccountType?: AccountType | string;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: (License | string)[];

  /**
   * <p>The status of the account.</p>
   */
  AccountStatus?: AccountStatus | string;

  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   */
  SigninDelegateGroups?: SigninDelegateGroup[];
}

export namespace Account {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
  });
}

/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or stop
 *             remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
 */
export interface AccountSettings {
  /**
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   */
  DisableRemoteControl?: boolean;

  /**
   * <p>Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.</p>
   */
  EnableDialOut?: boolean;
}

export namespace AccountSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
  /**
   * <p>Starts or stops Alexa for Business.</p>
   */
  IsAlexaForBusinessEnabled?: boolean;

  /**
   * <p>The ARN of the room resource.</p>
   */
  AlexaForBusinessRoomArn?: string;
}

export namespace AlexaForBusinessMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlexaForBusinessMetadata): any => ({
    ...obj,
    ...(obj.AlexaForBusinessRoomArn && { AlexaForBusinessRoomArn: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.</p>
 */
export interface AppInstance {
  /**
   * <p>The ARN of the messaging instance.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The name of an <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of an <code>AppInstance</code>.</p>
   */
  Metadata?: string;

  /**
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export namespace AppInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstance): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of a user.</p>
 */
export interface Identity {
  /**
   * <p>The ARN in an Identity.</p>
   */
  Arn?: string;

  /**
   * <p>The name in an Identity.</p>
   */
  Name?: string;
}

export namespace Identity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdmin {
  /**
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   */
  Admin?: Identity;

  /**
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The time at which an administrator was created.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace AppInstanceAdmin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceAdmin): any => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
}

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
}

export namespace AppInstanceAdminSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceAdminSummary): any => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
}

export enum AppInstanceDataType {
  Channel = "Channel",
  ChannelMessage = "ChannelMessage",
}

/**
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceSummary {
  /**
   * <p>The <code>AppInstance</code> ARN.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of the <code>AppInstance</code>.</p>
   */
  Metadata?: string;
}

export namespace AppInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
}

export namespace ChannelRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceRetentionSettings {
  /**
   * <p>The length of time in days to retain the messages in a channel.</p>
   */
  ChannelRetentionSettings?: ChannelRetentionSettings;
}

export namespace AppInstanceRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the streaming configuration of an <code>AppInstance</code>.</p>
 */
export interface AppInstanceStreamingConfiguration {
  /**
   * <p>The type of data to be streamed.</p>
   */
  AppInstanceDataType: AppInstanceDataType | string | undefined;

  /**
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

export namespace AppInstanceStreamingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceStreamingConfiguration): any => ({
    ...obj,
    ...(obj.ResourceArn && { ResourceArn: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUser {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export namespace AppInstanceUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceUser): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}

export namespace AppInstanceUserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceUserSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export enum ChannelMembershipType {
  DEFAULT = "DEFAULT",
  HIDDEN = "HIDDEN",
}

/**
 * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * <p>The type of <code>ChannelMembership</code>.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The time at which a message was last read.</p>
   */
  ReadMarkerTimestamp?: Date;
}

export namespace AppInstanceUserMembershipSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceUserMembershipSummary): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of
 *             the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace PhoneNumberError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberError): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException extends __SmithyException, $MetadataBearer {
  name: "ThrottledClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ThrottledClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottledClientException): any => ({
    ...obj,
  });
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnauthorizedClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedClientException): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface AssociatePhoneNumberWithUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber: string | undefined;
}

export namespace AssociatePhoneNumberWithUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
}

export interface AssociatePhoneNumberWithUserResponse {}

export namespace AssociatePhoneNumberWithUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumberWithUserResponse): any => ({
    ...obj,
  });
}

export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

export namespace AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountRequest): any => ({
    ...obj,
  });
}

export interface AssociateSigninDelegateGroupsWithAccountResponse {}

export namespace AssociateSigninDelegateGroupsWithAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSigninDelegateGroupsWithAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>
 * An Amazon Chime SDK meeting attendee. Includes a unique
 * <code>AttendeeId</code>
 * and
 * <code>JoinToken</code>
 * . The
 * <code>JoinToken</code>
 * allows a client to authenticate and join as the specified attendee. The
 * <code>JoinToken</code>
 * expires when the meeting ends or when
 * <a>DeleteAttendee</a>
 * is called. After that, the attendee is unable to join the meeting.
 * </p>
 *
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *             to the client so that no other client has access to the token except for the one
 *             authorized to represent the attendee.</p>
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

export namespace Attendee {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attendee): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

/**
 * <p>The membership information, including member ARNs, the channel ARN, and membership
 *          types.</p>
 */
export interface BatchChannelMemberships {
  /**
   * <p>The identifier of the member who invited another member.</p>
   */
  InvitedBy?: Identity;

  /**
   * <p>The membership types set for the channel users.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The users successfully added to the request.</p>
   */
  Members?: Identity[];

  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn?: string;
}

export namespace BatchChannelMemberships {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchChannelMemberships): any => ({
    ...obj,
    ...(obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
    ...(obj.Members && { Members: obj.Members.map((item) => Identity.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAttendeeRequestItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeRequestItem): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

export namespace BatchCreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace CreateAttendeeError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeError): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  });
}

export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace BatchCreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ResourceLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

export interface BatchCreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The ARNs of the members you want to add to the channel.</p>
   */
  MemberArns: string[] | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace BatchCreateChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateChannelMembershipRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 */
export interface BatchCreateChannelMembershipError {
  /**
   * <p>The ARN of the member that the service couldn't add.</p>
   */
  MemberArn?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace BatchCreateChannelMembershipError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateChannelMembershipError): any => ({
    ...obj,
  });
}

export interface BatchCreateChannelMembershipResponse {
  /**
   * <p>The list of channel memberships in the response.</p>
   */
  BatchChannelMemberships?: BatchChannelMemberships;

  /**
   * <p>If the action fails for one or more of the memberships in the request, a list of the
   *          memberships is returned, along with error codes and error messages.</p>
   */
  Errors?: BatchCreateChannelMembershipError[];
}

export namespace BatchCreateChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.BatchChannelMemberships && {
      BatchChannelMemberships: BatchChannelMemberships.filterSensitiveLog(obj.BatchChannelMemberships),
    }),
  });
}

export enum RoomMembershipRole {
  Administrator = "Administrator",
  Member = "Member",
}

/**
 * <p>Membership details, such as member ID and member role.</p>
 */
export interface MembershipItem {
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * <p>The member role.</p>
   */
  Role?: RoomMembershipRole | string;
}

export namespace MembershipItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MembershipItem): any => ({
    ...obj,
  });
}

export interface BatchCreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The list of membership items.</p>
   */
  MembershipItemList: MembershipItem[] | undefined;
}

export namespace BatchCreateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of errors returned when a member action results in an error.</p>
 */
export interface MemberError {
  /**
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace MemberError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MemberError): any => ({
    ...obj,
  });
}

export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}

export namespace BatchCreateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchCreateRoomMembershipResponse): any => ({
    ...obj,
  });
}

export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

export namespace BatchDeletePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchDeletePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeletePhoneNumberResponse): any => ({
    ...obj,
  });
}

export interface BatchSuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: string[] | undefined;
}

export namespace BatchSuspendUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSuspendUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or
 *     <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.</p>
 */
export interface UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

export namespace UserError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserError): any => ({
    ...obj,
  });
}

export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchSuspendUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchSuspendUserResponse): any => ({
    ...obj,
  });
}

export interface BatchUnsuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: string[] | undefined;
}

export namespace BatchUnsuspendUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUnsuspendUserRequest): any => ({
    ...obj,
  });
}

export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUnsuspendUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUnsuspendUserResponse): any => ({
    ...obj,
  });
}

export enum PhoneNumberProductType {
  BusinessCalling = "BusinessCalling",
  SipMediaApplicationDialIn = "SipMediaApplicationDialIn",
  VoiceConnector = "VoiceConnector",
}

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the
 * <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;
}

export namespace UpdatePhoneNumberRequestItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequestItem): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

export namespace BatchUpdatePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.UpdatePhoneNumberRequestItems && {
      UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
        UpdatePhoneNumberRequestItem.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace BatchUpdatePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
    ...obj,
  });
}

export enum UserType {
  PrivateUser = "PrivateUser",
  SharedDevice = "SharedDevice",
}

/**
 * <p>The user ID and user fields to update, used with the
 * <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user license type.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}

export namespace UpdateUserRequestItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequestItem): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
}

export interface BatchUpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs and details to update.</p>
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

export namespace BatchUpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateUserRequest): any => ({
    ...obj,
    ...(obj.UpdateUserRequestItems && {
      UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

export namespace BatchUpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchUpdateUserResponse): any => ({
    ...obj,
  });
}

export enum BotType {
  ChatBot = "ChatBot",
}

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The bot email address.</p>
   */
  BotEmail?: string;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;
}

export namespace Bot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Bot): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.BotEmail && { BotEmail: SENSITIVE_STRING }),
    ...(obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any
 *             Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface BusinessCallingSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace BusinessCallingSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BusinessCallingSettings): any => ({
    ...obj,
  });
}

export enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded",
}

export enum Capability {
  SMS = "SMS",
  Voice = "Voice",
}

export enum ChannelMode {
  RESTRICTED = "RESTRICTED",
  UNRESTRICTED = "UNRESTRICTED",
}

export enum ChannelPrivacy {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}

/**
 * <p>The details of a channel.</p>
 */
export interface Channel {
  /**
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * <p>The channel's privacy setting.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The channel's metadata.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUser</code> who created the channel.</p>
   */
  CreatedBy?: Identity;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> created the channel.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a member sent the last message in the channel.</p>
   */
  LastMessageTimestamp?: Date;

  /**
   * <p>The time at which a channel was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
}

/**
 * <p>The details of a channel ban.</p>
 */
export interface ChannelBan {
  /**
   * <p>The member being banned from the channel.</p>
   */
  Member?: Identity;

  /**
   * <p>The ARN of the channel from which a member is being banned.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The time at which the ban was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The <code>AppInstanceUser</code> who created the ban.</p>
   */
  CreatedBy?: Identity;
}

export namespace ChannelBan {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelBan): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
}

/**
 * <p>Summary of the details of a <code>ChannelBan</code>.</p>
 */
export interface ChannelBanSummary {
  /**
   * <p>The member being banned from a channel.</p>
   */
  Member?: Identity;
}

export namespace ChannelBanSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelBanSummary): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

/**
 * <p>The details of a channel member.</p>
 */
export interface ChannelMembership {
  /**
   * <p>The identifier of the member who invited another member.</p>
   */
  InvitedBy?: Identity;

  /**
   * <p>The membership type set for the channel member.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The data of the channel member.</p>
   */
  Member?: Identity;

  /**
   * <p>The ARN of the member's channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The time at which the channel membership was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a channel membership was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export namespace ChannelMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMembership): any => ({
    ...obj,
    ...(obj.InvitedBy && { InvitedBy: Identity.filterSensitiveLog(obj.InvitedBy) }),
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

/**
 * <p>Summary of the details of a <code>Channel</code>.</p>
 */
export interface ChannelSummary {
  /**
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * <p>The privacy setting of the channel.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The metadata of the channel.</p>
   */
  Metadata?: string;

  /**
   * <p>The time at which the last message in a channel was sent.</p>
   */
  LastMessageTimestamp?: Date;
}

export namespace ChannelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>Summary of the channel membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;

  /**
   * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}

export namespace ChannelMembershipForAppInstanceUserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMembershipForAppInstanceUserSummary): any => ({
    ...obj,
    ...(obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }),
  });
}

/**
 * <p>Summary of the details of a <code>ChannelMembership</code>.</p>
 */
export interface ChannelMembershipSummary {
  /**
   * <p>A member's summary data.</p>
   */
  Member?: Identity;
}

export namespace ChannelMembershipSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMembershipSummary): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

export enum ChannelMessagePersistenceType {
  NON_PERSISTENT = "NON_PERSISTENT",
  PERSISTENT = "PERSISTENT",
}

export enum ChannelMessageType {
  CONTROL = "CONTROL",
  STANDARD = "STANDARD",
}

/**
 * <p>The details of a message in a channel.</p>
 */
export interface ChannelMessage {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID of a message.</p>
   */
  MessageId?: string;

  /**
   * <p>The message content.</p>
   */
  Content?: string;

  /**
   * <p>The message metadata.</p>
   */
  Metadata?: string;

  /**
   * <p>The message type.</p>
   */
  Type?: ChannelMessageType | string;

  /**
   * <p>The time at which the message was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a message was edited.</p>
   */
  LastEditedTimestamp?: Date;

  /**
   * <p>The time at which a message was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The message sender.</p>
   */
  Sender?: Identity;

  /**
   * <p>Hides the content of a message.</p>
   */
  Redacted?: boolean;

  /**
   * <p>The persistence setting for a channel message.</p>
   */
  Persistence?: ChannelMessagePersistenceType | string;
}

export namespace ChannelMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessage): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }),
  });
}

/**
 * <p>Summary of the messages in a <code>Channel</code>.</p>
 */
export interface ChannelMessageSummary {
  /**
   * <p>The ID of the message.</p>
   */
  MessageId?: string;

  /**
   * <p>The content of the message.</p>
   */
  Content?: string;

  /**
   * <p>The metadata of the message.</p>
   */
  Metadata?: string;

  /**
   * <p>The type of message.</p>
   */
  Type?: ChannelMessageType | string;

  /**
   * <p>The time at which the message summary was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a message was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The time at which a message was last edited.</p>
   */
  LastEditedTimestamp?: Date;

  /**
   * <p>The message sender.</p>
   */
  Sender?: Identity;

  /**
   * <p>Indicates whether a message was redacted.</p>
   */
  Redacted?: boolean;
}

export namespace ChannelMessageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessageSummary): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }),
  });
}

/**
 * <p>Summary of the details of a moderated channel.</p>
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;
}

export namespace ChannelModeratedByAppInstanceUserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelModeratedByAppInstanceUserSummary): any => ({
    ...obj,
    ...(obj.ChannelSummary && { ChannelSummary: ChannelSummary.filterSensitiveLog(obj.ChannelSummary) }),
  });
}

/**
 * <p>The details of a channel moderator.</p>
 */
export interface ChannelModerator {
  /**
   * <p>The moderator's data.</p>
   */
  Moderator?: Identity;

  /**
   * <p>The ARN of the moderator's channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The time at which the moderator was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The <code>AppInstanceUser</code> who created the moderator.</p>
   */
  CreatedBy?: Identity;
}

export namespace ChannelModerator {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelModerator): any => ({
    ...obj,
    ...(obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) }),
    ...(obj.CreatedBy && { CreatedBy: Identity.filterSensitiveLog(obj.CreatedBy) }),
  });
}

/**
 * <p>Summary of the details of a <code>ChannelModerator</code>.</p>
 */
export interface ChannelModeratorSummary {
  /**
   * <p>The data for a moderator.</p>
   */
  Moderator?: Identity;
}

export namespace ChannelModeratorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelModeratorSummary): any => ({
    ...obj,
    ...(obj.Moderator && { Moderator: Identity.filterSensitiveLog(obj.Moderator) }),
  });
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.</p>
 */
export interface ConversationRetentionSettings {
  /**
   * <p>The number of days for which to retain conversation messages.</p>
   */
  RetentionDays?: number;
}

export namespace ConversationRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConversationRetentionSettings): any => ({
    ...obj,
  });
}

export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

export namespace CreateAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace CreateAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceResponse): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace CreateAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceAdmin?: Identity;

  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: Identity.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   */
  AppInstanceUserId: string | undefined;

  /**
   * <p>The user's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace CreateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserResponse): any => ({
    ...obj,
  });
}

export interface CreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
    ...obj,
    ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

export namespace CreateAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

export interface CreateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot display name.</p>
   */
  DisplayName: string | undefined;

  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   */
  Domain?: string;
}

export namespace CreateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotRequest): any => ({
    ...obj,
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  });
}

export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}

export namespace CreateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

export interface CreateChannelRequest {
  /**
   * <p>The ARN of the channel request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators,
   *          moderators, and channel members can add themselves and other members to unrestricted
   *          channels. Only administrators and moderators can add members to restricted channels.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private
   *          channels aren't discoverable by users outside the channel. Public channels are discoverable
   *          by anyone in the <code>AppInstance</code>.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The metadata of the creation request. Limited to 1KB and UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The client token for the request. An <code>Idempotency</code> token.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

export interface CreateChannelBanRequest {
  /**
   * <p>The ARN of the ban request.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelBanRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelBanResponse {
  /**
   * <p>The ARN of the response to the ban request.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban
   *          response.</p>
   */
  Member?: Identity;
}

export namespace CreateChannelBanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelBanResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member you want to add to the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type: ChannelMembershipType | string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelMembershipResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ARN and metadata of the member being added.</p>
   */
  Member?: Identity;
}

export namespace CreateChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace CreateChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelModeratorResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ARNs of the channel and the moderator.</p>
   */
  ChannelModerator?: Identity;
}

export namespace CreateChannelModeratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelModeratorResponse): any => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: Identity.filterSensitiveLog(obj.ChannelModerator) }),
  });
}

export enum MediaPipelineSinkType {
  S3Bucket = "S3Bucket",
}

export enum MediaPipelineSourceType {
  ChimeSdkMeeting = "ChimeSdkMeeting",
}

export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts will be captured. A Chime SDK Meeting
   *             is the only supported source.</p>
   */
  SourceType: MediaPipelineSourceType | string | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket. </p>
   */
  SinkType: MediaPipelineSinkType | string | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * <p>The token assigned to the client making the pipeline request.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMediaCapturePipelineRequest): any => ({
    ...obj,
    ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
    ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
}

export enum MediaPipelineStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Initializing = "Initializing",
  Stopped = "Stopped",
  Stopping = "Stopping",
}

/**
 * <p>A media capture pipeline object. A string consisting of an ID, source type, a source ARN, a sink type, and a sink ARN.</p>
 */
export interface MediaCapturePipeline {
  /**
   * <p>The ID of a media capture pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * <p>Source type from which media artifacts are saved. You must use <code>ChimeMeeting</code>.</p>
   */
  SourceType?: MediaPipelineSourceType | string;

  /**
   * <p>ARN of the source from which the media artifacts will be saved.</p>
   */
  SourceArn?: string;

  /**
   * <p>The status of the media capture pipeline.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 Bucket.</p>
   */
  SinkType?: MediaPipelineSinkType | string;

  /**
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   */
  SinkArn?: string;

  /**
   * <p>The time at which the capture pipeline was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the capture pipeline was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace MediaCapturePipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaCapturePipeline): any => ({
    ...obj,
    ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
    ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  });
}

export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export namespace CreateMediaCapturePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMediaCapturePipelineResponse): any => ({
    ...obj,
    ...(obj.MediaCapturePipeline && {
      MediaCapturePipeline: MediaCapturePipeline.filterSensitiveLog(obj.MediaCapturePipeline),
    }),
  });
}

/**
 * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
 *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
 *             Virginia) AWS Region (<code>us-east-1</code>). </p>
 */
export interface MeetingNotificationConfiguration {
  /**
   * <p>The SNS topic ARN.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The SQS queue ARN.</p>
   */
  SqsQueueArn?: string;
}

export namespace MeetingNotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeetingNotificationConfiguration): any => ({
    ...obj,
    ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
    ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>.
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
}

export namespace CreateMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
  });
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * <p>The screen data URL.</p>
   */
  ScreenDataUrl?: string;

  /**
   * <p>The screen sharing URL.</p>
   */
  ScreenSharingUrl?: string;

  /**
   * <p>The screen viewing URL.</p>
   */
  ScreenViewingUrl?: string;

  /**
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;

  /**
   * <p>The URL of the S3 bucket used to store the captured media.</p>
   */
  EventIngestionUrl?: string;
}

export namespace MediaPlacement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *     <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *     <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *                 <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *                 <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *                 <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;
}

export namespace Meeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Meeting): any => ({
    ...obj,
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingResponse {
  /**
   * <p>
   * The meeting information, including the meeting ID and
   * <code>MediaPlacement</code>
   * .
   * </p>
   */
  Meeting?: Meeting;
}

export namespace CreateMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>Phone number called when inviting someone to a meeting.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.</p>
   */
  JoinToken: string | undefined;
}

export namespace CreateMeetingDialOutRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingDialOutRequest): any => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
    ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
  });
}

export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   */
  TransactionId?: string;
}

export namespace CreateMeetingDialOutResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingDialOutResponse): any => ({
    ...obj,
  });
}

export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>
   * .
   * </p>
   *
   *          <p>
   * Available values:
   * <code>af-south-1</code>
   * ,
   * <code>ap-northeast-1</code>
   * ,
   * <code>ap-northeast-2</code>
   * ,
   * <code>ap-south-1</code>
   * ,
   * <code>ap-southeast-1</code>
   * ,
   * <code>ap-southeast-2</code>
   * ,
   * <code>ca-central-1</code>
   * ,
   * <code>eu-central-1</code>
   * ,
   * <code>eu-north-1</code>
   * ,
   * <code>eu-south-1</code>
   * ,
   * <code>eu-west-1</code>
   * ,
   * <code>eu-west-2</code>
   * ,
   * <code>eu-west-3</code>
   * ,
   * <code>sa-east-1</code>
   * ,
   * <code>us-east-1</code>
   * ,
   * <code>us-east-2</code>
   * ,
   * <code>us-west-1</code>
   * ,
   * <code>us-west-2</code>
   * .
   * </p>
   */
  MediaRegion?: string;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
   *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
   *             Virginia) AWS Region (<code>us-east-1</code>). </p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];
}

export namespace CreateMeetingWithAttendeesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
    ...obj,
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
    ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.NotificationsConfiguration && {
      NotificationsConfiguration: MeetingNotificationConfiguration.filterSensitiveLog(obj.NotificationsConfiguration),
    }),
    ...(obj.Attendees && {
      Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItem.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;

  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

export namespace CreateMeetingWithAttendeesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
    ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => Attendee.filterSensitiveLog(item)) }),
    ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeError.filterSensitiveLog(item)) }),
  });
}

export interface CreatePhoneNumberOrderRequest {
  /**
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace CreatePhoneNumberOrderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export enum OrderedPhoneNumberStatus {
  Acquired = "Acquired",
  Failed = "Failed",
  Processing = "Processing",
}

/**
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus | string;
}

export namespace OrderedPhoneNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OrderedPhoneNumber): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  });
}

export enum PhoneNumberOrderStatus {
  Failed = "Failed",
  Partial = "Partial",
  Processing = "Processing",
  Successful = "Successful",
}

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
  /**
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus | string;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone
   *             number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace PhoneNumberOrder {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberOrder): any => ({
    ...obj,
    ...(obj.OrderedPhoneNumbers && {
      OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumber.filterSensitiveLog(item)),
    }),
  });
}

export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace CreatePhoneNumberOrderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
}

export enum GeoMatchLevel {
  AreaCode = "AreaCode",
  Country = "Country",
}

/**
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  /**
   * <p>The country.</p>
   */
  Country: string | undefined;

  /**
   * <p>The area code.</p>
   */
  AreaCode: string | undefined;
}

export namespace GeoMatchParams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GeoMatchParams): any => ({
    ...obj,
  });
}

export enum NumberSelectionBehavior {
  AvoidSticky = "AvoidSticky",
  PreferSticky = "PreferSticky",
}

export interface CreateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

export namespace CreateProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
    ...obj,
    ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 */
export interface Participant {
  /**
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;
}

export namespace Participant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Participant): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
    ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }),
  });
}

export enum ProxySessionStatus {
  Closed = "Closed",
  InProgress = "InProgress",
  Open = "Open",
}

/**
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 */
export interface ProxySession {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;

  /**
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * <p>The status of the proxy session.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * <p>The created time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The ended time stamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;

  /**
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

export namespace ProxySession {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProxySession): any => ({
    ...obj,
    ...(obj.Participants && { Participants: obj.Participants.map((item) => Participant.filterSensitiveLog(item)) }),
  });
}

export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace CreateProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
}

export interface CreateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  ClientRequestToken?: string;
}

export namespace CreateRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The room name.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of the room creator.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace Room {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Room): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace CreateRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
}

export interface CreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}

export namespace CreateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export enum MemberType {
  Bot = "Bot",
  User = "User",
  Webhook = "Webhook",
}

/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;

  /**
   * <p>The member email address.</p>
   */
  Email?: string;

  /**
   * <p>The member name.</p>
   */
  FullName?: string;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
}

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
    ...(obj.FullName && { FullName: SENSITIVE_STRING }),
  });
}

/**
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  /**
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;

  /**
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace RoomMembership {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoomMembership): any => ({
    ...obj,
    ...(obj.Member && { Member: Member.filterSensitiveLog(obj.Member) }),
  });
}

export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace CreateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoomMembershipResponse): any => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
}

/**
 * <p>The endpoint assigned to the SIP media application.</p>
 */
export interface SipMediaApplicationEndpoint {
  /**
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function. The function must be created in the same AWS Region as the SIP media application.</p>
   */
  LambdaArn?: string;
}

export namespace SipMediaApplicationEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipMediaApplicationEndpoint): any => ({
    ...obj,
    ...(obj.LambdaArn && { LambdaArn: SENSITIVE_STRING }),
  });
}

export interface CreateSipMediaApplicationRequest {
  /**
   * <p>The AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;

  /**
   * <p>The SIP media application name.</p>
   */
  Name: string | undefined;

  /**
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

export namespace CreateSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.</p>
 */
export interface SipMediaApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * <p>The AWS Region in which the SIP media application is created.</p>
   */
  AwsRegion?: string;

  /**
   * <p>The name of the SIP media application.</p>
   */
  Name?: string;

  /**
   * <p>List of endpoints for SIP media application. Currently, only one endpoint per SIP media application is permitted.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];

  /**
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The SIP media application updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace SipMediaApplication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipMediaApplication): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace CreateSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>The phone number that the service should call.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The SIP headers added to an outbound call leg.</p>
   */
  SipHeaders?: { [key: string]: string };
}

export namespace CreateSipMediaApplicationCallRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallRequest): any => ({
    ...obj,
    ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
    ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
    ...(obj.SipHeaders && { SipHeaders: SENSITIVE_STRING }),
  });
}

/**
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 */
export interface SipMediaApplicationCall {
  /**
   * <p>The transaction ID of a call.</p>
   */
  TransactionId?: string;
}

export namespace SipMediaApplicationCall {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipMediaApplicationCall): any => ({
    ...obj,
  });
}

export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export namespace CreateSipMediaApplicationCallResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipMediaApplicationCallResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Target SIP media application and other details, such as priority and AWS Region, to be
 *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 */
export interface SipRuleTargetApplication {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * <p>Priority of the SIP media application in the target list.</p>
   */
  Priority?: number;

  /**
   * <p>The AWS Region of the target application.</p>
   */
  AwsRegion?: string;
}

export namespace SipRuleTargetApplication {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipRuleTargetApplication): any => ({
    ...obj,
  });
}

export enum SipRuleTriggerType {
  RequestUriHostname = "RequestUriHostname",
  ToPhoneNumber = "ToPhoneNumber",
}

export interface CreateSipRuleRequest {
  /**
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | string | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound
   *             host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the
   *     E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP
   *     request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the
   *     <code>ToPhoneNumber</code> value.</p>
   */
  TriggerValue: string | undefined;

  /**
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   */
  Disabled?: boolean;

  /**
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.</p>
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

export namespace CreateSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipRuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.</p>
 */
export interface SipRule {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId?: string;

  /**
   * <p>The name of the SIP rule.</p>
   */
  Name?: string;

  /**
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or
   *         <code>ToPhoneNumber</code>.</p>
   */
  TriggerType?: SipRuleTriggerType | string;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *             outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in
   *             E164 format. <code>SipRule</code> is triggered when a SIP rule requests host name or
   *                 <code>ToPhoneNumber</code> matches in the incoming SIP request.</p>
   */
  TriggerValue?: string;

  /**
   * <p>Target SIP media application and other details, such as priority and AWS Region, to be
   *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];

  /**
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the SIP rule was last updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace SipRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipRule): any => ({
    ...obj,
  });
}

export interface CreateSipRuleResponse {
  /**
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
}

export namespace CreateSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSipRuleResponse): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Email && { Email: SENSITIVE_STRING }),
  });
}

export enum InviteStatus {
  Accepted = "Accepted",
  Failed = "Failed",
  Pending = "Pending",
}

export enum RegistrationStatus {
  Registered = "Registered",
  Suspended = "Suspended",
  Unregistered = "Unregistered",
}

/**
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;

  /**
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;

  /**
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   */
  InvitedOn?: Date;

  /**
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
    ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
    ...(obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: SENSITIVE_STRING }),
    ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
}

export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
}

export enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
}

export interface CreateVoiceConnectorRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default value:
   * <code>us-east-1</code>
   * .
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export namespace CreateVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and encryption
 *             settings.</p>
 */
export interface VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default:
   * <code>us-east-1</code>.
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;

  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace VoiceConnector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnector): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace CreateVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
    ...obj,
  });
}

/**
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3
 * <code>VoiceConnectorItems</code>
 * per Amazon Chime Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.</p>
   */
  Priority: number | undefined;
}

export namespace VoiceConnectorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnectorItem): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorGroupRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}

export namespace CreateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice
 *             Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *             your group. This creates a fault tolerant mechanism for fallback in case of availability
 *             events.</p>
 */
export interface VoiceConnectorGroup {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * <p>The Amazon Chime Voice Connector group creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated Amazon Chime Voice Connector group time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

export namespace VoiceConnectorGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
    ...obj,
  });
}

export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace CreateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *             format.</p>
   */
  Username?: string;

  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}

export namespace Credential {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Credential): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace DeleteAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountResponse {}

export namespace DeleteAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export interface UnprocessableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnprocessableEntityException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnprocessableEntityException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessableEntityException): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceStreamingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DeleteAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace DeleteAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the <code>AppInstanceUser</code> was banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> that you want to reinstate.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelBanRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelMembershipRequest {
  /**
   * <p>The ARN of the channel from which you want to remove the user.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being deleted.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelMessageRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DeleteChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace DeleteEventsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media capture pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

export namespace DeleteMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMediaCapturePipelineRequest): any => ({
    ...obj,
  });
}

export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace DeleteMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
    ...obj,
  });
}

export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace DeletePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface DeleteProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

export namespace DeleteProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProxySessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The chat room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace DeleteRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoomRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;
}

export namespace DeleteRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace DeleteSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSipMediaApplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export namespace DeleteSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSipRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export namespace DeleteVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorOriginationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorOriginationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorProxyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorProxyRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorStreamingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export namespace DeleteVoiceConnectorTerminationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationRequest): any => ({
    ...obj,
  });
}

export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;
}

export namespace DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVoiceConnectorTerminationCredentialsRequest): any => ({
    ...obj,
    ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
  });
}

export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
}

export namespace DescribeAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
    ...obj,
    ...(obj.AppInstance && { AppInstance: AppInstance.filterSensitiveLog(obj.AppInstance) }),
  });
}

export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

export namespace DescribeAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdmin.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DescribeAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}

export namespace DescribeAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUser.filterSensitiveLog(obj.AppInstanceUser) }),
  });
}

export interface DescribeChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelResponse {
  /**
   * <p>The channel details.</p>
   */
  Channel?: Channel;
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
    ...(obj.Channel && { Channel: Channel.filterSensitiveLog(obj.Channel) }),
  });
}

export interface DescribeChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the user is banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelBanRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelBanResponse {
  /**
   * <p>The details of the ban.</p>
   */
  ChannelBan?: ChannelBan;
}

export namespace DescribeChannelBanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelBanResponse): any => ({
    ...obj,
    ...(obj.ChannelBan && { ChannelBan: ChannelBan.filterSensitiveLog(obj.ChannelBan) }),
  });
}

export interface DescribeChannelMembershipRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelMembershipResponse {
  /**
   * <p>The details of the membership.</p>
   */
  ChannelMembership?: ChannelMembership;
}

export namespace DescribeChannelMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipResponse): any => ({
    ...obj,
    ...(obj.ChannelMembership && { ChannelMembership: ChannelMembership.filterSensitiveLog(obj.ChannelMembership) }),
  });
}

export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * <p>The ARN of the channel to which the user belongs.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the user in a channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipForAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * <p>The channel to which a user belongs.</p>
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}

export namespace DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelMembershipForAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.ChannelMembership && {
      ChannelMembership: ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(obj.ChannelMembership),
    }),
  });
}

export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the moderated channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> in the moderated channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratedByAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channel.</p>
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}

export namespace DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratedByAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(obj.Channel) }),
  });
}

export interface DescribeChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace DescribeChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratorRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
}

export namespace DescribeChannelModeratorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelModeratorResponse): any => ({
    ...obj,
    ...(obj.ChannelModerator && { ChannelModerator: ChannelModerator.filterSensitiveLog(obj.ChannelModerator) }),
  });
}

export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace DisassociatePhoneNumberFromUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserRequest): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumberFromUserResponse {}

export namespace DisassociatePhoneNumberFromUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberFromUserResponse): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest): any => ({
    ...obj,
    ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
  });
}

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

export namespace DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}

export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate group names.</p>
   */
  GroupNames: string[] | undefined;
}

export namespace DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountRequest): any => ({
    ...obj,
  });
}

export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

export namespace DisassociateSigninDelegateGroupsFromAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSigninDelegateGroupsFromAccountResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;

  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   */
  CallingCountry: string | undefined;
}

export namespace DNISEmergencyCallingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DNISEmergencyCallingConfiguration): any => ({
    ...obj,
    ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
    ...(obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }),
  });
}

export enum EmailStatus {
  Failed = "Failed",
  NotSent = "NotSent",
  Sent = "Sent",
}

/**
 * <p>The emergency calling configuration details associated with an Amazon Chime Voice Connector.</p>
 */
export interface EmergencyCallingConfiguration {
  /**
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details.</p>
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
}

export namespace EmergencyCallingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmergencyCallingConfiguration): any => ({
    ...obj,
    ...(obj.DNIS && { DNIS: obj.DNIS.map((item) => DNISEmergencyCallingConfiguration.filterSensitiveLog(item)) }),
  });
}

export enum TranscribeMedicalLanguageCode {
  EN_US = "en-US",
}

export enum TranscribeMedicalRegion {
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_WEST_1 = "eu-west-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeMedicalSpecialty {
  Cardiology = "CARDIOLOGY",
  Neurology = "NEUROLOGY",
  Oncology = "ONCOLOGY",
  PrimaryCare = "PRIMARYCARE",
  Radiology = "RADIOLOGY",
  Urology = "UROLOGY",
}

export enum TranscribeMedicalType {
  Conversation = "CONVERSATION",
  Dictation = "DICTATION",
}

/**
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   */
  LanguageCode: TranscribeMedicalLanguageCode | string | undefined;

  /**
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   */
  Specialty: TranscribeMedicalSpecialty | string | undefined;

  /**
   * <p>The type of transcription.</p>
   */
  Type: TranscribeMedicalType | string | undefined;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeMedicalRegion | string;
}

export namespace EngineTranscribeMedicalSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineTranscribeMedicalSettings): any => ({
    ...obj,
  });
}

export enum TranscribeLanguageCode {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  PT_BR = "pt-BR",
  ZH_CN = "zh-CN",
}

export enum TranscribeRegion {
  AP_NORTHEAST_1 = "ap-northeast-1",
  AP_NORTHEAST_2 = "ap-northeast-2",
  AP_SOUTHEAST_2 = "ap-southeast-2",
  AUTO = "auto",
  CA_CENTRAL_1 = "ca-central-1",
  EU_CENTRAL_1 = "eu-central-1",
  EU_WEST_1 = "eu-west-1",
  EU_WEST_2 = "eu-west-2",
  SA_EAST_1 = "sa-east-1",
  US_EAST_1 = "us-east-1",
  US_EAST_2 = "us-east-2",
  US_WEST_2 = "us-west-2",
}

export enum TranscribeVocabularyFilterMethod {
  Mask = "mask",
  Remove = "remove",
  Tag = "tag",
}

/**
 * <p>Settings specific to the Amazon Transcribe engine.</p>
 */
export interface EngineTranscribeSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe engine.</p>
   */
  LanguageCode: TranscribeLanguageCode | string | undefined;

  /**
   * <p>The filtering method passed to Amazon Transcribe.</p>
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | string;

  /**
   * <p>The name of the vocabulary filter passed to Amazon Transcribe.</p>
   */
  VocabularyFilterName?: string;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe.</p>
   */
  VocabularyName?: string;

  /**
   * <p>The AWS Region passed to Amazon Transcribe. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeRegion | string;
}

export namespace EngineTranscribeSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineTranscribeSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

export namespace EventsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventsConfiguration): any => ({
    ...obj,
    ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
    ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
  });
}

export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
}

export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace GetAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountResponse): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

export namespace GetAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace GetAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export namespace GetAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace GetAppInstanceStreamingConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceStreamingConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

export namespace GetAppInstanceStreamingConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceStreamingConfigurationsResponse): any => ({
    ...obj,
    ...(obj.AppInstanceStreamingConfigurations && {
      AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
        AppInstanceStreamingConfiguration.filterSensitiveLog(item)
      ),
    }),
  });
}

export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

export namespace GetAttendeeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeRequest): any => ({
    ...obj,
  });
}

export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

export namespace GetAttendeeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAttendeeResponse): any => ({
    ...obj,
    ...(obj.Attendee && { Attendee: Attendee.filterSensitiveLog(obj.Attendee) }),
  });
}

export interface GetBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace GetBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBotRequest): any => ({
    ...obj,
  });
}

export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}

export namespace GetBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

export interface GetChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace GetChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageRequest): any => ({
    ...obj,
  });
}

export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
}

export namespace GetChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageResponse): any => ({
    ...obj,
    ...(obj.ChannelMessage && { ChannelMessage: ChannelMessage.filterSensitiveLog(obj.ChannelMessage) }),
  });
}

export interface GetEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

export namespace GetEventsConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

export namespace GetEventsConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventsConfigurationResponse): any => ({
    ...obj,
    ...(obj.EventsConfiguration && {
      EventsConfiguration: EventsConfiguration.filterSensitiveLog(obj.EventsConfiguration),
    }),
  });
}

/**
 * <p>The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for
 *             storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

export namespace VoiceConnectorSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnectorSettings): any => ({
    ...obj,
  });
}

export interface GetGlobalSettingsResponse {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

export namespace GetGlobalSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

export namespace GetMediaCapturePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMediaCapturePipelineRequest): any => ({
    ...obj,
  });
}

export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export namespace GetMediaCapturePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
    ...obj,
    ...(obj.MediaCapturePipeline && {
      MediaCapturePipeline: MediaCapturePipeline.filterSensitiveLog(obj.MediaCapturePipeline),
    }),
  });
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export namespace GetMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingRequest): any => ({
    ...obj,
  });
}

export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export namespace GetMeetingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMeetingResponse): any => ({
    ...obj,
    ...(obj.Meeting && { Meeting: Meeting.filterSensitiveLog(obj.Meeting) }),
  });
}

export interface GetMessagingSessionEndpointRequest {}

export namespace GetMessagingSessionEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMessagingSessionEndpointRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The websocket endpoint used to connect to Amazon Chime SDK messaging.</p>
 */
export interface MessagingSessionEndpoint {
  /**
   * <p>The endpoint to which you establish a websocket connection.</p>
   */
  Url?: string;
}

export namespace MessagingSessionEndpoint {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessagingSessionEndpoint): any => ({
    ...obj,
  });
}

export interface GetMessagingSessionEndpointResponse {
  /**
   * <p>The endpoint returned in the response.</p>
   */
  Endpoint?: MessagingSessionEndpoint;
}

export namespace GetMessagingSessionEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMessagingSessionEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace GetPhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
    ...obj,
  });
}

export enum PhoneNumberAssociationName {
  AccountId = "AccountId",
  SipRuleId = "SipRuleId",
  UserId = "UserId",
  VoiceConnectorGroupId = "VoiceConnectorGroupId",
  VoiceConnectorId = "VoiceConnectorId",
}

/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon
 *             Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector
   *             ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}

export namespace PhoneNumberAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberAssociation): any => ({
    ...obj,
  });
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled
 *             inbound and outbound calling and text messaging.</p>
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;
}

export namespace PhoneNumberCapabilities {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberCapabilities): any => ({
    ...obj,
  });
}

export enum PhoneNumberStatus {
  AcquireFailed = "AcquireFailed",
  AcquireInProgress = "AcquireInProgress",
  Assigned = "Assigned",
  DeleteFailed = "DeleteFailed",
  DeleteInProgress = "DeleteInProgress",
  ReleaseFailed = "ReleaseFailed",
  ReleaseInProgress = "ReleaseInProgress",
  Unassigned = "Unassigned",
}

export enum PhoneNumberType {
  Local = "Local",
  TollFree = "TollFree",
}

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *             Connector.</p>
 */
export interface PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * <p>The phone number country. Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;

  /**
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;

  /**
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * <p>The phone number associations.</p>
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}

export namespace PhoneNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumber): any => ({
    ...obj,
    ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace GetPhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
}

export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export namespace GetPhoneNumberOrderRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderRequest): any => ({
    ...obj,
  });
}

export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

export namespace GetPhoneNumberOrderResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberOrderResponse): any => ({
    ...obj,
    ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrder.filterSensitiveLog(obj.PhoneNumberOrder) }),
  });
}

export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;

  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;
}

export namespace GetPhoneNumberSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPhoneNumberSettingsResponse): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface GetProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

export namespace GetProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProxySessionRequest): any => ({
    ...obj,
  });
}

export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace GetProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
}

export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export namespace GetRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetentionSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings that determine how long to retain chat-room messages for an Amazon Chime Enterprise account.</p>
 */
export interface RoomRetentionSettings {
  /**
   * <p>The number of days for which to retain chat-room messages.</p>
   */
  RetentionDays?: number;
}

export namespace RoomRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoomRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The retention settings for an Amazon Chime Enterprise account that determine how long to retain items such as chat-room messages and chat-conversation messages.</p>
 */
export interface RetentionSettings {
  /**
   * <p>The chat room retention settings.</p>
   */
  RoomRetentionSettings?: RoomRetentionSettings;

  /**
   * <p>The chat conversation retention settings.</p>
   */
  ConversationRetentionSettings?: ConversationRetentionSettings;
}

export namespace RetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionSettings): any => ({
    ...obj,
  });
}

export interface GetRetentionSettingsResponse {
  /**
   * <p>The retention settings.</p>
   */
  RetentionSettings?: RetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export namespace GetRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;
}

export namespace GetRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoomRequest): any => ({
    ...obj,
  });
}

export interface GetRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace GetRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
}

export interface GetSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace GetSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationRequest): any => ({
    ...obj,
  });
}

export interface GetSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace GetSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export namespace GetSipMediaApplicationLoggingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationLoggingConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Logging configuration of the SIP media application.</p>
 */
export interface SipMediaApplicationLoggingConfiguration {
  /**
   * <p>Enables application message logs for the SIP media application.</p>
   */
  EnableSipMediaApplicationMessageLogs?: boolean;
}

export namespace SipMediaApplicationLoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SipMediaApplicationLoggingConfiguration): any => ({
    ...obj,
  });
}

export interface GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * <p>The actual logging configuration.</p>
   */
  SipMediaApplicationLoggingConfiguration?: SipMediaApplicationLoggingConfiguration;
}

export namespace GetSipMediaApplicationLoggingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipMediaApplicationLoggingConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export namespace GetSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipRuleRequest): any => ({
    ...obj,
  });
}

export interface GetSipRuleResponse {
  /**
   * <p>The SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export namespace GetSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSipRuleResponse): any => ({
    ...obj,
  });
}

export interface GetUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace GetUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj,
  });
}

export interface GetUserResponse {
  /**
   * <p>The user details.</p>
   */
  User?: User;
}

export namespace GetUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
}

export interface GetUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;
}

export namespace GetUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Settings that allow management of telephony permissions for an Amazon Chime user, such as
 *             inbound and outbound calling and text messaging.</p>
 */
export interface TelephonySettings {
  /**
   * <p>Allows or denies inbound calling.</p>
   */
  InboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling.</p>
   */
  OutboundCalling: boolean | undefined;

  /**
   * <p>Allows or denies SMS messaging.</p>
   */
  SMS: boolean | undefined;
}

export namespace TelephonySettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TelephonySettings): any => ({
    ...obj,
  });
}

/**
 * <p>Settings associated with an Amazon Chime user, including inbound and outbound calling and text
 *             messaging.</p>
 */
export interface UserSettings {
  /**
   * <p>The telephony settings associated with the user.</p>
   */
  Telephony: TelephonySettings | undefined;
}

export namespace UserSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSettings): any => ({
    ...obj,
  });
}
