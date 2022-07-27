// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeServiceException as __BaseException } from "./ChimeServiceException";

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
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
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

/**
 * <p>A validated address.</p>
 */
export interface Address {
  /**
   * <p>The address street, such as <code>8th Avenue</code>.</p>
   */
  streetName?: string;

  /**
   * <p>The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.</p>
   */
  streetSuffix?: string;

  /**
   * <p>An address suffix location, such as the <code>S. Unit A</code> in <code>Central Park S. Unit A</code>.</p>
   */
  postDirectional?: string;

  /**
   * <p>An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>.</p>
   */
  preDirectional?: string;

  /**
   * <p>The numeric portion of an address.</p>
   */
  streetNumber?: string;

  /**
   * <p>The city of an address.</p>
   */
  city?: string;

  /**
   * <p>The state of an address.</p>
   */
  state?: string;

  /**
   * <p>The postal code of an address.</p>
   */
  postalCode?: string;

  /**
   * <p>The Zip + 4 or postal code + 4 of an address.</p>
   */
  postalCodePlus4?: string;

  /**
   * <p>The country of an address. </p>
   */
  country?: string;
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

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
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

/**
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
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

export enum AudioMuxType {
  AudioOnly = "AudioOnly",
  AudioWithActiveSpeakerVideo = "AudioWithActiveSpeakerVideo",
}

/**
 * <p>The audio artifact configuration object.</p>
 */
export interface AudioArtifactsConfiguration {
  /**
   * <p>The MUX type of the audio artifact configuration object.</p>
   */
  MuxType: AudioMuxType | string | undefined;
}

export enum ContentMuxType {
  ContentOnly = "ContentOnly",
}

export enum ArtifactsState {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>The content artifact object.</p>
 */
export interface ContentArtifactsConfiguration {
  /**
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * <p>The MUX type of the artifact configuration.</p>
   */
  MuxType?: ContentMuxType | string;
}

export enum VideoMuxType {
  VideoOnly = "VideoOnly",
}

/**
 * <p>The video artifact configuration object.</p>
 */
export interface VideoArtifactsConfiguration {
  /**
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * <p>The MUX type of the video artifact configuration object.</p>
   */
  MuxType?: VideoMuxType | string;
}

/**
 * <p>The configuration for the artifacts.</p>
 */
export interface ArtifactsConfiguration {
  /**
   * <p>The configuration for the audio artifacts.</p>
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts.</p>
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts.</p>
   */
  Content: ContentArtifactsConfiguration | undefined;
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

export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the resources in the request does not exist in the system.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
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

export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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

export interface AssociatePhoneNumberWithUserResponse {}

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

export interface AssociateSigninDelegateGroupsWithAccountResponse {}

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

/**
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
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

export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}

export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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

export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
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

export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
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

export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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

export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
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

export enum CallingNameStatus {
  Unassigned = "Unassigned",
  UpdateFailed = "UpdateFailed",
  UpdateInProgress = "UpdateInProgress",
  UpdateSucceeded = "UpdateSucceeded",
}

/**
 * <p>A suggested address.</p>
 */
export interface CandidateAddress {
  /**
   * <p>The street information of a candidate address</p>
   */
  streetInfo?: string;

  /**
   * <p>The numeric portion of a candidate address.</p>
   */
  streetNumber?: string;

  /**
   * <p>The city of a candidate address.</p>
   */
  city?: string;

  /**
   * <p>The state of a candidate address.</p>
   */
  state?: string;

  /**
   * <p>The postal code of a candidate address.</p>
   */
  postalCode?: string;

  /**
   * <p>The Zip + 4 or postal code + 4 of a candidate address.</p>
   */
  postalCodePlus4?: string;

  /**
   * <p>The country of a candidate address.</p>
   */
  country?: string;
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

/**
 * <p>Summary of the details of a <code>ChannelBan</code>.</p>
 */
export interface ChannelBanSummary {
  /**
   * <p>The member being banned from a channel.</p>
   */
  Member?: Identity;
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

/**
 * <p>Summary of the details of a <code>ChannelMembership</code>.</p>
 */
export interface ChannelMembershipSummary {
  /**
   * <p>A member's summary data.</p>
   */
  Member?: Identity;
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

/**
 * <p>Summary of the details of a moderated channel.</p>
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;
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

/**
 * <p>Summary of the details of a <code>ChannelModerator</code>.</p>
 */
export interface ChannelModeratorSummary {
  /**
   * <p>The data for a moderator.</p>
   */
  Moderator?: Identity;
}

/**
 * <p>The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.</p>
 */
export interface SelectedVideoStreams {
  /**
   * <p>The attendee IDs of the streams selected for a media capture pipeline. </p>
   */
  AttendeeIds?: string[];

  /**
   * <p>The external user IDs of the streams selected for a media capture pipeline.</p>
   */
  ExternalUserIds?: string[];
}

/**
 * <p>Source configuration for a specified media capture pipeline.</p>
 */
export interface SourceConfiguration {
  /**
   * <p>The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.</p>
   */
  SelectedVideoStreams?: SelectedVideoStreams;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * <p>The source configuration for a specified media capture pipline.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   */
  ArtifactsConfiguration?: ArtifactsConfiguration;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
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

export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
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
   * <p>Tags assigned to the <code>AppInstance</code>.</p>
   */
  Tags?: Tag[];
}

export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
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

export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
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

export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
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

export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   */
  Bot?: Bot;
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

export interface CreateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
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

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

export enum MediaPipelineStatus {
  Failed = "Failed",
  InProgress = "InProgress",
  Initializing = "Initializing",
  Stopped = "Stopped",
  Stopping = "Stopping",
}

/**
 * <p>A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.</p>
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

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
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
   * <p>The event ingestion URL to which you send client meeting events.</p>
   */
  EventIngestionUrl?: string;
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

export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   */
  TransactionId?: string;
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

export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
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

export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
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

export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
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

export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
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

export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
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
  SipHeaders?: Record<string, string>;
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

export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
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

export interface CreateSipRuleResponse {
  /**
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
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

export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
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

  /**
   * <p>The ARN of the specified Amazon Chime Voice Connector.</p>
   */
  VoiceConnectorArn?: string;
}

export interface CreateVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
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

  /**
   * <p>The ARN of the specified Amazon Chime Voice Connector group.</p>
   */
  VoiceConnectorGroupArn?: string;
}

export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
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

export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export interface DeleteAccountResponse {}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnprocessableEntityException, __BaseException>) {
    super({
      name: "UnprocessableEntityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnprocessableEntityException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
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

export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
}

export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
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

export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media capture pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
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

export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
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

export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
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

export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
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

export interface DescribeChannelResponse {
  /**
   * <p>The channel details.</p>
   */
  Channel?: Channel;
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

export interface DescribeChannelBanResponse {
  /**
   * <p>The details of the ban.</p>
   */
  ChannelBan?: ChannelBan;
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

export interface DescribeChannelMembershipResponse {
  /**
   * <p>The details of the membership.</p>
   */
  ChannelMembership?: ChannelMembership;
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

export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * <p>The channel to which a user belongs.</p>
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
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

export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channel.</p>
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary;
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

export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
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

export interface DisassociatePhoneNumberFromUserResponse {}

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

export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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

export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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

export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

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

export enum TranscribeMedicalContentIdentificationType {
  PHI = "PHI",
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

  /**
   * <p>Set this field to <code>PHI</code> to identify personal health information in the transcription output.</p>
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | string;
}

export enum TranscribeContentIdentificationType {
  PII = "PII",
}

export enum TranscribeContentRedactionType {
  PII = "PII",
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

export enum TranscribePartialResultsStability {
  HIGH = "high",
  LOW = "low",
  MEDIUM = "medium",
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

  /**
   * <p>Generates partial transcription results that are less likely to change as meeting attendees speak. It does so by only allowing the last few words from the partial results to change.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * <p>The stabity level of a partial results transcription. Determines how stable you want the transcription results to be. A higher level means the transcription results are less likely to change.</p>
   */
  PartialResultsStability?: TranscribePartialResultsStability | string;

  /**
   * <p>Set this field to <code>PII</code> to identify personally identifiable information in the transcription output.</p>
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | string;

  /**
   * <p>Set this field to <code>PII</code> to redact personally identifiable information in the transcription output. Content redaction is performed only upon complete transcription of the audio segments.</p>
   */
  ContentRedactionType?: TranscribeContentRedactionType | string;

  /**
   * <p>Lists the PII entity types you want to identify or redact. To specify entity types, you must enable <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *         <p>
   *             <code>PIIEntityTypes</code> must be comma-separated. The available values are:
   *             <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING, CREDIT_DEBIT_NUMBER</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>, <code>PIN</code>, <code>EMAIL</code>,
   *             <code>ADDRESS</code>, <code>NAME</code>, <code>PHONE</code>, <code>SSN</code>, and <code>ALL</code>.</p>
   *
   *         <p>
   *             <code>PiiEntityTypes</code> is an optional parameter with a default value of <code>ALL</code>.</p>
   */
  PiiEntityTypes?: string;

  /**
   * <p>The name of the language model used during transcription.</p>
   */
  LanguageModelName?: string;
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

export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
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

export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
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

export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
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

export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
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

export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
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

export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
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

export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

export interface GetMessagingSessionEndpointRequest {}

/**
 * <p>The websocket endpoint used to connect to Amazon Chime SDK messaging.</p>
 */
export interface MessagingSessionEndpoint {
  /**
   * <p>The endpoint to which you establish a websocket connection.</p>
   */
  Url?: string;
}

export interface GetMessagingSessionEndpointResponse {
  /**
   * <p>The endpoint returned in the response.</p>
   */
  Endpoint?: MessagingSessionEndpoint;
}

export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
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

export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
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

export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

/**
 * @internal
 */
export const SigninDelegateGroupFilterSensitiveLog = (obj: SigninDelegateGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountFilterSensitiveLog = (obj: Account): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountSettingsFilterSensitiveLog = (obj: AccountSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddressFilterSensitiveLog = (obj: Address): any => ({
  ...obj,
  ...(obj.streetName && { streetName: SENSITIVE_STRING }),
  ...(obj.streetSuffix && { streetSuffix: SENSITIVE_STRING }),
  ...(obj.postDirectional && { postDirectional: SENSITIVE_STRING }),
  ...(obj.preDirectional && { preDirectional: SENSITIVE_STRING }),
  ...(obj.streetNumber && { streetNumber: SENSITIVE_STRING }),
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.state && { state: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.postalCodePlus4 && { postalCodePlus4: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AlexaForBusinessMetadataFilterSensitiveLog = (obj: AlexaForBusinessMetadata): any => ({
  ...obj,
  ...(obj.AlexaForBusinessRoomArn && { AlexaForBusinessRoomArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceFilterSensitiveLog = (obj: AppInstance): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IdentityFilterSensitiveLog = (obj: Identity): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceAdminFilterSensitiveLog = (obj: AppInstanceAdmin): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceAdminSummaryFilterSensitiveLog = (obj: AppInstanceAdminSummary): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceSummaryFilterSensitiveLog = (obj: AppInstanceSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelRetentionSettingsFilterSensitiveLog = (obj: ChannelRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppInstanceRetentionSettingsFilterSensitiveLog = (obj: AppInstanceRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppInstanceStreamingConfigurationFilterSensitiveLog = (obj: AppInstanceStreamingConfiguration): any => ({
  ...obj,
  ...(obj.ResourceArn && { ResourceArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserFilterSensitiveLog = (obj: AppInstanceUser): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserSummaryFilterSensitiveLog = (obj: AppInstanceUserSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserMembershipSummaryFilterSensitiveLog = (obj: AppInstanceUserMembershipSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioArtifactsConfigurationFilterSensitiveLog = (obj: AudioArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentArtifactsConfigurationFilterSensitiveLog = (obj: ContentArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VideoArtifactsConfigurationFilterSensitiveLog = (obj: VideoArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArtifactsConfigurationFilterSensitiveLog = (obj: ArtifactsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhoneNumberErrorFilterSensitiveLog = (obj: PhoneNumberError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorResponseFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorGroupRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorGroupRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociatePhoneNumbersWithVoiceConnectorGroupResponseFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePhoneNumberWithUserRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumberWithUserRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociatePhoneNumberWithUserResponseFilterSensitiveLog = (
  obj: AssociatePhoneNumberWithUserResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSigninDelegateGroupsWithAccountRequestFilterSensitiveLog = (
  obj: AssociateSigninDelegateGroupsWithAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSigninDelegateGroupsWithAccountResponseFilterSensitiveLog = (
  obj: AssociateSigninDelegateGroupsWithAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttendeeFilterSensitiveLog = (obj: Attendee): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchChannelMembershipsFilterSensitiveLog = (obj: BatchChannelMemberships): any => ({
  ...obj,
  ...(obj.InvitedBy && { InvitedBy: IdentityFilterSensitiveLog(obj.InvitedBy) }),
  ...(obj.Members && { Members: obj.Members.map((item) => IdentityFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAttendeeRequestItemFilterSensitiveLog = (obj: CreateAttendeeRequestItem): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchCreateAttendeeRequestFilterSensitiveLog = (obj: BatchCreateAttendeeRequest): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAttendeeErrorFilterSensitiveLog = (obj: CreateAttendeeError): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchCreateAttendeeResponseFilterSensitiveLog = (obj: BatchCreateAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
  ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const BatchCreateChannelMembershipRequestFilterSensitiveLog = (
  obj: BatchCreateChannelMembershipRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateChannelMembershipErrorFilterSensitiveLog = (obj: BatchCreateChannelMembershipError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateChannelMembershipResponseFilterSensitiveLog = (
  obj: BatchCreateChannelMembershipResponse
): any => ({
  ...obj,
  ...(obj.BatchChannelMemberships && {
    BatchChannelMemberships: BatchChannelMembershipsFilterSensitiveLog(obj.BatchChannelMemberships),
  }),
});

/**
 * @internal
 */
export const MembershipItemFilterSensitiveLog = (obj: MembershipItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateRoomMembershipRequestFilterSensitiveLog = (obj: BatchCreateRoomMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberErrorFilterSensitiveLog = (obj: MemberError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateRoomMembershipResponseFilterSensitiveLog = (obj: BatchCreateRoomMembershipResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeletePhoneNumberRequestFilterSensitiveLog = (obj: BatchDeletePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeletePhoneNumberResponseFilterSensitiveLog = (obj: BatchDeletePhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSuspendUserRequestFilterSensitiveLog = (obj: BatchSuspendUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserErrorFilterSensitiveLog = (obj: UserError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchSuspendUserResponseFilterSensitiveLog = (obj: BatchSuspendUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUnsuspendUserRequestFilterSensitiveLog = (obj: BatchUnsuspendUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUnsuspendUserResponseFilterSensitiveLog = (obj: BatchUnsuspendUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestItemFilterSensitiveLog = (obj: UpdatePhoneNumberRequestItem): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchUpdatePhoneNumberRequestFilterSensitiveLog = (obj: BatchUpdatePhoneNumberRequest): any => ({
  ...obj,
  ...(obj.UpdatePhoneNumberRequestItems && {
    UpdatePhoneNumberRequestItems: obj.UpdatePhoneNumberRequestItems.map((item) =>
      UpdatePhoneNumberRequestItemFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const BatchUpdatePhoneNumberResponseFilterSensitiveLog = (obj: BatchUpdatePhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserRequestItemFilterSensitiveLog = (obj: UpdateUserRequestItem): any => ({
  ...obj,
  ...(obj.AlexaForBusinessMetadata && {
    AlexaForBusinessMetadata: AlexaForBusinessMetadataFilterSensitiveLog(obj.AlexaForBusinessMetadata),
  }),
});

/**
 * @internal
 */
export const BatchUpdateUserRequestFilterSensitiveLog = (obj: BatchUpdateUserRequest): any => ({
  ...obj,
  ...(obj.UpdateUserRequestItems && {
    UpdateUserRequestItems: obj.UpdateUserRequestItems.map((item) => UpdateUserRequestItemFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const BatchUpdateUserResponseFilterSensitiveLog = (obj: BatchUpdateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotFilterSensitiveLog = (obj: Bot): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.BotEmail && { BotEmail: SENSITIVE_STRING }),
  ...(obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BusinessCallingSettingsFilterSensitiveLog = (obj: BusinessCallingSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CandidateAddressFilterSensitiveLog = (obj: CandidateAddress): any => ({
  ...obj,
  ...(obj.streetInfo && { streetInfo: SENSITIVE_STRING }),
  ...(obj.streetNumber && { streetNumber: SENSITIVE_STRING }),
  ...(obj.city && { city: SENSITIVE_STRING }),
  ...(obj.state && { state: SENSITIVE_STRING }),
  ...(obj.postalCode && { postalCode: SENSITIVE_STRING }),
  ...(obj.postalCodePlus4 && { postalCodePlus4: SENSITIVE_STRING }),
  ...(obj.country && { country: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelFilterSensitiveLog = (obj: Channel): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.CreatedBy && { CreatedBy: IdentityFilterSensitiveLog(obj.CreatedBy) }),
});

/**
 * @internal
 */
export const ChannelBanFilterSensitiveLog = (obj: ChannelBan): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
  ...(obj.CreatedBy && { CreatedBy: IdentityFilterSensitiveLog(obj.CreatedBy) }),
});

/**
 * @internal
 */
export const ChannelBanSummaryFilterSensitiveLog = (obj: ChannelBanSummary): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const ChannelMembershipFilterSensitiveLog = (obj: ChannelMembership): any => ({
  ...obj,
  ...(obj.InvitedBy && { InvitedBy: IdentityFilterSensitiveLog(obj.InvitedBy) }),
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const ChannelSummaryFilterSensitiveLog = (obj: ChannelSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelMembershipForAppInstanceUserSummaryFilterSensitiveLog = (
  obj: ChannelMembershipForAppInstanceUserSummary
): any => ({
  ...obj,
  ...(obj.ChannelSummary && { ChannelSummary: ChannelSummaryFilterSensitiveLog(obj.ChannelSummary) }),
});

/**
 * @internal
 */
export const ChannelMembershipSummaryFilterSensitiveLog = (obj: ChannelMembershipSummary): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const ChannelMessageFilterSensitiveLog = (obj: ChannelMessage): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Sender && { Sender: IdentityFilterSensitiveLog(obj.Sender) }),
});

/**
 * @internal
 */
export const ChannelMessageSummaryFilterSensitiveLog = (obj: ChannelMessageSummary): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Sender && { Sender: IdentityFilterSensitiveLog(obj.Sender) }),
});

/**
 * @internal
 */
export const ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog = (
  obj: ChannelModeratedByAppInstanceUserSummary
): any => ({
  ...obj,
  ...(obj.ChannelSummary && { ChannelSummary: ChannelSummaryFilterSensitiveLog(obj.ChannelSummary) }),
});

/**
 * @internal
 */
export const ChannelModeratorFilterSensitiveLog = (obj: ChannelModerator): any => ({
  ...obj,
  ...(obj.Moderator && { Moderator: IdentityFilterSensitiveLog(obj.Moderator) }),
  ...(obj.CreatedBy && { CreatedBy: IdentityFilterSensitiveLog(obj.CreatedBy) }),
});

/**
 * @internal
 */
export const ChannelModeratorSummaryFilterSensitiveLog = (obj: ChannelModeratorSummary): any => ({
  ...obj,
  ...(obj.Moderator && { Moderator: IdentityFilterSensitiveLog(obj.Moderator) }),
});

/**
 * @internal
 */
export const SelectedVideoStreamsFilterSensitiveLog = (obj: SelectedVideoStreams): any => ({
  ...obj,
  ...(obj.ExternalUserIds && { ExternalUserIds: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => ({
  ...obj,
  ...(obj.SelectedVideoStreams && {
    SelectedVideoStreams: SelectedVideoStreamsFilterSensitiveLog(obj.SelectedVideoStreams),
  }),
});

/**
 * @internal
 */
export const ChimeSdkMeetingConfigurationFilterSensitiveLog = (obj: ChimeSdkMeetingConfiguration): any => ({
  ...obj,
  ...(obj.SourceConfiguration && {
    SourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.SourceConfiguration),
  }),
});

/**
 * @internal
 */
export const ConversationRetentionSettingsFilterSensitiveLog = (obj: ConversationRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountRequestFilterSensitiveLog = (obj: CreateAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccountResponseFilterSensitiveLog = (obj: CreateAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppInstanceRequestFilterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceResponseFilterSensitiveLog = (obj: CreateAppInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppInstanceAdminRequestFilterSensitiveLog = (obj: CreateAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppInstanceAdminResponseFilterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: IdentityFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserRequestFilterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserResponseFilterSensitiveLog = (obj: CreateAppInstanceUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAttendeeRequestFilterSensitiveLog = (obj: CreateAttendeeRequest): any => ({
  ...obj,
  ...(obj.ExternalUserId && { ExternalUserId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAttendeeResponseFilterSensitiveLog = (obj: CreateAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const CreateBotRequestFilterSensitiveLog = (obj: CreateBotRequest): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBotResponseFilterSensitiveLog = (obj: CreateBotResponse): any => ({
  ...obj,
  ...(obj.Bot && { Bot: BotFilterSensitiveLog(obj.Bot) }),
});

/**
 * @internal
 */
export const CreateChannelRequestFilterSensitiveLog = (obj: CreateChannelRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateChannelResponseFilterSensitiveLog = (obj: CreateChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelBanRequestFilterSensitiveLog = (obj: CreateChannelBanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelBanResponseFilterSensitiveLog = (obj: CreateChannelBanResponse): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const CreateChannelMembershipRequestFilterSensitiveLog = (obj: CreateChannelMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelMembershipResponseFilterSensitiveLog = (obj: CreateChannelMembershipResponse): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const CreateChannelModeratorRequestFilterSensitiveLog = (obj: CreateChannelModeratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChannelModeratorResponseFilterSensitiveLog = (obj: CreateChannelModeratorResponse): any => ({
  ...obj,
  ...(obj.ChannelModerator && { ChannelModerator: IdentityFilterSensitiveLog(obj.ChannelModerator) }),
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineRequestFilterSensitiveLog = (obj: CreateMediaCapturePipelineRequest): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaCapturePipelineFilterSensitiveLog = (obj: MediaCapturePipeline): any => ({
  ...obj,
  ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
  ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
  ...(obj.ChimeSdkMeetingConfiguration && {
    ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfigurationFilterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateMediaCapturePipelineResponseFilterSensitiveLog = (obj: CreateMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const MeetingNotificationConfigurationFilterSensitiveLog = (obj: MeetingNotificationConfiguration): any => ({
  ...obj,
  ...(obj.SnsTopicArn && { SnsTopicArn: SENSITIVE_STRING }),
  ...(obj.SqsQueueArn && { SqsQueueArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMeetingRequestFilterSensitiveLog = (obj: CreateMeetingRequest): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
  ...(obj.NotificationsConfiguration && {
    NotificationsConfiguration: MeetingNotificationConfigurationFilterSensitiveLog(obj.NotificationsConfiguration),
  }),
});

/**
 * @internal
 */
export const MediaPlacementFilterSensitiveLog = (obj: MediaPlacement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeetingFilterSensitiveLog = (obj: Meeting): any => ({
  ...obj,
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMeetingResponseFilterSensitiveLog = (obj: CreateMeetingResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
});

/**
 * @internal
 */
export const CreateMeetingDialOutRequestFilterSensitiveLog = (obj: CreateMeetingDialOutRequest): any => ({
  ...obj,
  ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
  ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
  ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateMeetingDialOutResponseFilterSensitiveLog = (obj: CreateMeetingDialOutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateMeetingWithAttendeesRequestFilterSensitiveLog = (obj: CreateMeetingWithAttendeesRequest): any => ({
  ...obj,
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.ExternalMeetingId && { ExternalMeetingId: SENSITIVE_STRING }),
  ...(obj.MeetingHostId && { MeetingHostId: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
  ...(obj.NotificationsConfiguration && {
    NotificationsConfiguration: MeetingNotificationConfigurationFilterSensitiveLog(obj.NotificationsConfiguration),
  }),
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => CreateAttendeeRequestItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMeetingWithAttendeesResponseFilterSensitiveLog = (obj: CreateMeetingWithAttendeesResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
  ...(obj.Attendees && { Attendees: obj.Attendees.map((item) => AttendeeFilterSensitiveLog(item)) }),
  ...(obj.Errors && { Errors: obj.Errors.map((item) => CreateAttendeeErrorFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreatePhoneNumberOrderRequestFilterSensitiveLog = (obj: CreatePhoneNumberOrderRequest): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const OrderedPhoneNumberFilterSensitiveLog = (obj: OrderedPhoneNumber): any => ({
  ...obj,
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PhoneNumberOrderFilterSensitiveLog = (obj: PhoneNumberOrder): any => ({
  ...obj,
  ...(obj.OrderedPhoneNumbers && {
    OrderedPhoneNumbers: obj.OrderedPhoneNumbers.map((item) => OrderedPhoneNumberFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreatePhoneNumberOrderResponseFilterSensitiveLog = (obj: CreatePhoneNumberOrderResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrderFilterSensitiveLog(obj.PhoneNumberOrder) }),
});

/**
 * @internal
 */
export const GeoMatchParamsFilterSensitiveLog = (obj: GeoMatchParams): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProxySessionRequestFilterSensitiveLog = (obj: CreateProxySessionRequest): any => ({
  ...obj,
  ...(obj.ParticipantPhoneNumbers && { ParticipantPhoneNumbers: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ParticipantFilterSensitiveLog = (obj: Participant): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.ProxyPhoneNumber && { ProxyPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ProxySessionFilterSensitiveLog = (obj: ProxySession): any => ({
  ...obj,
  ...(obj.Participants && { Participants: obj.Participants.map((item) => ParticipantFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateProxySessionResponseFilterSensitiveLog = (obj: CreateProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const CreateRoomRequestFilterSensitiveLog = (obj: CreateRoomRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoomFilterSensitiveLog = (obj: Room): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRoomResponseFilterSensitiveLog = (obj: CreateRoomResponse): any => ({
  ...obj,
  ...(obj.Room && { Room: RoomFilterSensitiveLog(obj.Room) }),
});

/**
 * @internal
 */
export const CreateRoomMembershipRequestFilterSensitiveLog = (obj: CreateRoomMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemberFilterSensitiveLog = (obj: Member): any => ({
  ...obj,
  ...(obj.Email && { Email: SENSITIVE_STRING }),
  ...(obj.FullName && { FullName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RoomMembershipFilterSensitiveLog = (obj: RoomMembership): any => ({
  ...obj,
  ...(obj.Member && { Member: MemberFilterSensitiveLog(obj.Member) }),
});

/**
 * @internal
 */
export const CreateRoomMembershipResponseFilterSensitiveLog = (obj: CreateRoomMembershipResponse): any => ({
  ...obj,
  ...(obj.RoomMembership && { RoomMembership: RoomMembershipFilterSensitiveLog(obj.RoomMembership) }),
});

/**
 * @internal
 */
export const SipMediaApplicationEndpointFilterSensitiveLog = (obj: SipMediaApplicationEndpoint): any => ({
  ...obj,
  ...(obj.LambdaArn && { LambdaArn: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationRequestFilterSensitiveLog = (obj: CreateSipMediaApplicationRequest): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SipMediaApplicationFilterSensitiveLog = (obj: SipMediaApplication): any => ({
  ...obj,
  ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpointFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationResponseFilterSensitiveLog = (obj: CreateSipMediaApplicationResponse): any => ({
  ...obj,
  ...(obj.SipMediaApplication && {
    SipMediaApplication: SipMediaApplicationFilterSensitiveLog(obj.SipMediaApplication),
  }),
});

/**
 * @internal
 */
export const CreateSipMediaApplicationCallRequestFilterSensitiveLog = (
  obj: CreateSipMediaApplicationCallRequest
): any => ({
  ...obj,
  ...(obj.FromPhoneNumber && { FromPhoneNumber: SENSITIVE_STRING }),
  ...(obj.ToPhoneNumber && { ToPhoneNumber: SENSITIVE_STRING }),
  ...(obj.SipHeaders && { SipHeaders: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SipMediaApplicationCallFilterSensitiveLog = (obj: SipMediaApplicationCall): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipMediaApplicationCallResponseFilterSensitiveLog = (
  obj: CreateSipMediaApplicationCallResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipRuleTargetApplicationFilterSensitiveLog = (obj: SipRuleTargetApplication): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipRuleRequestFilterSensitiveLog = (obj: CreateSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SipRuleFilterSensitiveLog = (obj: SipRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSipRuleResponseFilterSensitiveLog = (obj: CreateSipRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
  ...(obj.Email && { Email: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.PrimaryEmail && { PrimaryEmail: SENSITIVE_STRING }),
  ...(obj.PrimaryProvisionedNumber && { PrimaryProvisionedNumber: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.AlexaForBusinessMetadata && {
    AlexaForBusinessMetadata: AlexaForBusinessMetadataFilterSensitiveLog(obj.AlexaForBusinessMetadata),
  }),
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const CreateVoiceConnectorRequestFilterSensitiveLog = (obj: CreateVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorFilterSensitiveLog = (obj: VoiceConnector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorResponseFilterSensitiveLog = (obj: CreateVoiceConnectorResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorItemFilterSensitiveLog = (obj: VoiceConnectorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorGroupRequestFilterSensitiveLog = (obj: CreateVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceConnectorGroupFilterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVoiceConnectorGroupResponseFilterSensitiveLog = (obj: CreateVoiceConnectorGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CredentialFilterSensitiveLog = (obj: Credential): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteAccountRequestFilterSensitiveLog = (obj: DeleteAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccountResponseFilterSensitiveLog = (obj: DeleteAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceRequestFilterSensitiveLog = (obj: DeleteAppInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceAdminRequestFilterSensitiveLog = (obj: DeleteAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceStreamingConfigurationsRequestFilterSensitiveLog = (
  obj: DeleteAppInstanceStreamingConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceUserRequestFilterSensitiveLog = (obj: DeleteAppInstanceUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAttendeeRequestFilterSensitiveLog = (obj: DeleteAttendeeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelRequestFilterSensitiveLog = (obj: DeleteChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelBanRequestFilterSensitiveLog = (obj: DeleteChannelBanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelMembershipRequestFilterSensitiveLog = (obj: DeleteChannelMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelMessageRequestFilterSensitiveLog = (obj: DeleteChannelMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteChannelModeratorRequestFilterSensitiveLog = (obj: DeleteChannelModeratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventsConfigurationRequestFilterSensitiveLog = (obj: DeleteEventsConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMediaCapturePipelineRequestFilterSensitiveLog = (obj: DeleteMediaCapturePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMeetingRequestFilterSensitiveLog = (obj: DeleteMeetingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePhoneNumberRequestFilterSensitiveLog = (obj: DeletePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProxySessionRequestFilterSensitiveLog = (obj: DeleteProxySessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRoomRequestFilterSensitiveLog = (obj: DeleteRoomRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRoomMembershipRequestFilterSensitiveLog = (obj: DeleteRoomMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSipMediaApplicationRequestFilterSensitiveLog = (obj: DeleteSipMediaApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSipRuleRequestFilterSensitiveLog = (obj: DeleteSipRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorEmergencyCallingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorEmergencyCallingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorGroupRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorOriginationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorOriginationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorProxyRequestFilterSensitiveLog = (obj: DeleteVoiceConnectorProxyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorStreamingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorStreamingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorTerminationRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorTerminationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVoiceConnectorTerminationCredentialsRequestFilterSensitiveLog = (
  obj: DeleteVoiceConnectorTerminationCredentialsRequest
): any => ({
  ...obj,
  ...(obj.Usernames && { Usernames: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAppInstanceRequestFilterSensitiveLog = (obj: DescribeAppInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceResponseFilterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
  ...obj,
  ...(obj.AppInstance && { AppInstance: AppInstanceFilterSensitiveLog(obj.AppInstance) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceAdminRequestFilterSensitiveLog = (obj: DescribeAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceAdminResponseFilterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdminFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserRequestFilterSensitiveLog = (obj: DescribeAppInstanceUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceUserResponseFilterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUserFilterSensitiveLog(obj.AppInstanceUser) }),
});

/**
 * @internal
 */
export const DescribeChannelRequestFilterSensitiveLog = (obj: DescribeChannelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelResponseFilterSensitiveLog = (obj: DescribeChannelResponse): any => ({
  ...obj,
  ...(obj.Channel && { Channel: ChannelFilterSensitiveLog(obj.Channel) }),
});

/**
 * @internal
 */
export const DescribeChannelBanRequestFilterSensitiveLog = (obj: DescribeChannelBanRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelBanResponseFilterSensitiveLog = (obj: DescribeChannelBanResponse): any => ({
  ...obj,
  ...(obj.ChannelBan && { ChannelBan: ChannelBanFilterSensitiveLog(obj.ChannelBan) }),
});

/**
 * @internal
 */
export const DescribeChannelMembershipRequestFilterSensitiveLog = (obj: DescribeChannelMembershipRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelMembershipResponseFilterSensitiveLog = (obj: DescribeChannelMembershipResponse): any => ({
  ...obj,
  ...(obj.ChannelMembership && { ChannelMembership: ChannelMembershipFilterSensitiveLog(obj.ChannelMembership) }),
});

/**
 * @internal
 */
export const DescribeChannelMembershipForAppInstanceUserRequestFilterSensitiveLog = (
  obj: DescribeChannelMembershipForAppInstanceUserRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelMembershipForAppInstanceUserResponseFilterSensitiveLog = (
  obj: DescribeChannelMembershipForAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.ChannelMembership && {
    ChannelMembership: ChannelMembershipForAppInstanceUserSummaryFilterSensitiveLog(obj.ChannelMembership),
  }),
});

/**
 * @internal
 */
export const DescribeChannelModeratedByAppInstanceUserRequestFilterSensitiveLog = (
  obj: DescribeChannelModeratedByAppInstanceUserRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelModeratedByAppInstanceUserResponseFilterSensitiveLog = (
  obj: DescribeChannelModeratedByAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog(obj.Channel) }),
});

/**
 * @internal
 */
export const DescribeChannelModeratorRequestFilterSensitiveLog = (obj: DescribeChannelModeratorRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelModeratorResponseFilterSensitiveLog = (obj: DescribeChannelModeratorResponse): any => ({
  ...obj,
  ...(obj.ChannelModerator && { ChannelModerator: ChannelModeratorFilterSensitiveLog(obj.ChannelModerator) }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumberFromUserRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumberFromUserRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociatePhoneNumberFromUserResponseFilterSensitiveLog = (
  obj: DisassociatePhoneNumberFromUserResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorResponseFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorGroupRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisassociatePhoneNumbersFromVoiceConnectorGroupResponseFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSigninDelegateGroupsFromAccountRequestFilterSensitiveLog = (
  obj: DisassociateSigninDelegateGroupsFromAccountRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSigninDelegateGroupsFromAccountResponseFilterSensitiveLog = (
  obj: DisassociateSigninDelegateGroupsFromAccountResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DNISEmergencyCallingConfigurationFilterSensitiveLog = (obj: DNISEmergencyCallingConfiguration): any => ({
  ...obj,
  ...(obj.EmergencyPhoneNumber && { EmergencyPhoneNumber: SENSITIVE_STRING }),
  ...(obj.TestPhoneNumber && { TestPhoneNumber: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EmergencyCallingConfigurationFilterSensitiveLog = (obj: EmergencyCallingConfiguration): any => ({
  ...obj,
  ...(obj.DNIS && { DNIS: obj.DNIS.map((item) => DNISEmergencyCallingConfigurationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const EngineTranscribeMedicalSettingsFilterSensitiveLog = (obj: EngineTranscribeMedicalSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EngineTranscribeSettingsFilterSensitiveLog = (obj: EngineTranscribeSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventsConfigurationFilterSensitiveLog = (obj: EventsConfiguration): any => ({
  ...obj,
  ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
  ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
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
export const GetAccountResponseFilterSensitiveLog = (obj: GetAccountResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountSettingsRequestFilterSensitiveLog = (obj: GetAccountSettingsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAccountSettingsResponseFilterSensitiveLog = (obj: GetAccountSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppInstanceRetentionSettingsRequestFilterSensitiveLog = (
  obj: GetAppInstanceRetentionSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppInstanceRetentionSettingsResponseFilterSensitiveLog = (
  obj: GetAppInstanceRetentionSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppInstanceStreamingConfigurationsRequestFilterSensitiveLog = (
  obj: GetAppInstanceStreamingConfigurationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppInstanceStreamingConfigurationsResponseFilterSensitiveLog = (
  obj: GetAppInstanceStreamingConfigurationsResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceStreamingConfigurations && {
    AppInstanceStreamingConfigurations: obj.AppInstanceStreamingConfigurations.map((item) =>
      AppInstanceStreamingConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetAttendeeRequestFilterSensitiveLog = (obj: GetAttendeeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAttendeeResponseFilterSensitiveLog = (obj: GetAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const GetBotRequestFilterSensitiveLog = (obj: GetBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetBotResponseFilterSensitiveLog = (obj: GetBotResponse): any => ({
  ...obj,
  ...(obj.Bot && { Bot: BotFilterSensitiveLog(obj.Bot) }),
});

/**
 * @internal
 */
export const GetChannelMessageRequestFilterSensitiveLog = (obj: GetChannelMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelMessageResponseFilterSensitiveLog = (obj: GetChannelMessageResponse): any => ({
  ...obj,
  ...(obj.ChannelMessage && { ChannelMessage: ChannelMessageFilterSensitiveLog(obj.ChannelMessage) }),
});

/**
 * @internal
 */
export const GetEventsConfigurationRequestFilterSensitiveLog = (obj: GetEventsConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventsConfigurationResponseFilterSensitiveLog = (obj: GetEventsConfigurationResponse): any => ({
  ...obj,
  ...(obj.EventsConfiguration && {
    EventsConfiguration: EventsConfigurationFilterSensitiveLog(obj.EventsConfiguration),
  }),
});

/**
 * @internal
 */
export const VoiceConnectorSettingsFilterSensitiveLog = (obj: VoiceConnectorSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGlobalSettingsResponseFilterSensitiveLog = (obj: GetGlobalSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMediaCapturePipelineRequestFilterSensitiveLog = (obj: GetMediaCapturePipelineRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMediaCapturePipelineResponseFilterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
});

/**
 * @internal
 */
export const GetMeetingRequestFilterSensitiveLog = (obj: GetMeetingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMeetingResponseFilterSensitiveLog = (obj: GetMeetingResponse): any => ({
  ...obj,
  ...(obj.Meeting && { Meeting: MeetingFilterSensitiveLog(obj.Meeting) }),
});

/**
 * @internal
 */
export const GetMessagingSessionEndpointRequestFilterSensitiveLog = (obj: GetMessagingSessionEndpointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessagingSessionEndpointFilterSensitiveLog = (obj: MessagingSessionEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMessagingSessionEndpointResponseFilterSensitiveLog = (
  obj: GetMessagingSessionEndpointResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPhoneNumberRequestFilterSensitiveLog = (obj: GetPhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberAssociationFilterSensitiveLog = (obj: PhoneNumberAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberCapabilitiesFilterSensitiveLog = (obj: PhoneNumberCapabilities): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberFilterSensitiveLog = (obj: PhoneNumber): any => ({
  ...obj,
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPhoneNumberResponseFilterSensitiveLog = (obj: GetPhoneNumberResponse): any => ({
  ...obj,
  ...(obj.PhoneNumber && { PhoneNumber: PhoneNumberFilterSensitiveLog(obj.PhoneNumber) }),
});

/**
 * @internal
 */
export const GetPhoneNumberOrderRequestFilterSensitiveLog = (obj: GetPhoneNumberOrderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPhoneNumberOrderResponseFilterSensitiveLog = (obj: GetPhoneNumberOrderResponse): any => ({
  ...obj,
  ...(obj.PhoneNumberOrder && { PhoneNumberOrder: PhoneNumberOrderFilterSensitiveLog(obj.PhoneNumberOrder) }),
});

/**
 * @internal
 */
export const GetPhoneNumberSettingsResponseFilterSensitiveLog = (obj: GetPhoneNumberSettingsResponse): any => ({
  ...obj,
  ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetProxySessionRequestFilterSensitiveLog = (obj: GetProxySessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetProxySessionResponseFilterSensitiveLog = (obj: GetProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});

/**
 * @internal
 */
export const GetRetentionSettingsRequestFilterSensitiveLog = (obj: GetRetentionSettingsRequest): any => ({
  ...obj,
});
