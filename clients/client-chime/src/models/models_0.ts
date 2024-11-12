// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeServiceException as __BaseException } from "./ChimeServiceException";

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  AccessDenied: "AccessDenied",
  BadRequest: "BadRequest",
  Conflict: "Conflict",
  Forbidden: "Forbidden",
  NotFound: "NotFound",
  PhoneNumberAssociationsExist: "PhoneNumberAssociationsExist",
  PreconditionFailed: "PreconditionFailed",
  ResourceLimitExceeded: "ResourceLimitExceeded",
  ServiceFailure: "ServiceFailure",
  ServiceUnavailable: "ServiceUnavailable",
  Throttled: "Throttled",
  Throttling: "Throttling",
  Unauthorized: "Unauthorized",
  Unprocessable: "Unprocessable",
  VoiceConnectorGroupAssociationsExist: "VoiceConnectorGroupAssociationsExist",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>You don't have permissions to perform the requested operation.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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

/**
 * @public
 * @enum
 */
export const AccountStatus = {
  Active: "Active",
  Suspended: "Suspended",
} as const;

/**
 * @public
 */
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus];

/**
 * @public
 * @enum
 */
export const AccountType = {
  EnterpriseDirectory: "EnterpriseDirectory",
  EnterpriseLWA: "EnterpriseLWA",
  EnterpriseOIDC: "EnterpriseOIDC",
  Team: "Team",
} as const;

/**
 * @public
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

/**
 * @public
 * @enum
 */
export const License = {
  Basic: "Basic",
  Plus: "Plus",
  Pro: "Pro",
  ProTrial: "ProTrial",
} as const;

/**
 * @public
 */
export type License = (typeof License)[keyof typeof License];

/**
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 * @public
 */
export interface SigninDelegateGroup {
  /**
   * <p>The group name.</p>
   * @public
   */
  GroupName?: string | undefined;
}

/**
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The AWS account ID.</p>
   * @public
   */
  AwsAccountId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime account type. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   * @public
   */
  AccountType?: AccountType | undefined;

  /**
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The default license for the Amazon Chime account.</p>
   * @public
   */
  DefaultLicense?: License | undefined;

  /**
   * <p>Supported licenses for the Amazon Chime account.</p>
   * @public
   */
  SupportedLicenses?: License[] | undefined;

  /**
   * <p>The status of the account.</p>
   * @public
   */
  AccountStatus?: AccountStatus | undefined;

  /**
   * <p>The sign-in delegate groups associated with the account.</p>
   * @public
   */
  SigninDelegateGroups?: SigninDelegateGroup[] | undefined;
}

/**
 * <p>Settings related to the Amazon Chime account. This includes settings that start or stop
 *             remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
 * @public
 */
export interface AccountSettings {
  /**
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   * @public
   */
  DisableRemoteControl?: boolean | undefined;

  /**
   * <p>Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.</p>
   * @public
   */
  EnableDialOut?: boolean | undefined;
}

/**
 * <p>A validated address.</p>
 * @public
 */
export interface Address {
  /**
   * <p>The address street, such as <code>8th Avenue</code>.</p>
   * @public
   */
  streetName?: string | undefined;

  /**
   * <p>The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.</p>
   * @public
   */
  streetSuffix?: string | undefined;

  /**
   * <p>An address suffix location, such as the <code>S. Unit A</code> in <code>Central Park S. Unit A</code>.</p>
   * @public
   */
  postDirectional?: string | undefined;

  /**
   * <p>An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>.</p>
   * @public
   */
  preDirectional?: string | undefined;

  /**
   * <p>The numeric portion of an address.</p>
   * @public
   */
  streetNumber?: string | undefined;

  /**
   * <p>The city of an address.</p>
   * @public
   */
  city?: string | undefined;

  /**
   * <p>The state of an address.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The postal code of an address.</p>
   * @public
   */
  postalCode?: string | undefined;

  /**
   * <p>The Zip + 4 or postal code + 4 of an address.</p>
   * @public
   */
  postalCodePlus4?: string | undefined;

  /**
   * <p>The country of an address. </p>
   * @public
   */
  country?: string | undefined;
}

/**
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 * @public
 */
export interface AlexaForBusinessMetadata {
  /**
   * <p>Starts or stops Alexa for Business.</p>
   * @public
   */
  IsAlexaForBusinessEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the room resource.</p>
   * @public
   */
  AlexaForBusinessRoomArn?: string | undefined;
}

/**
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.</p>
 * @public
 */
export interface AppInstance {
  /**
   * <p>The ARN of the messaging instance.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The name of an <code>AppInstance</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of an <code>AppInstance</code>.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>The details of a user.</p>
 * @public
 */
export interface Identity {
  /**
   * <p>The ARN in an Identity.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name in an Identity.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>The details of an <code>AppInstanceAdmin</code>.</p>
 * @public
 */
export interface AppInstanceAdmin {
  /**
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   * @public
   */
  Admin?: Identity | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The time at which an administrator was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 * @public
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   * @public
   */
  Admin?: Identity | undefined;
}

/**
 * @public
 * @enum
 */
export const AppInstanceDataType = {
  Channel: "Channel",
  ChannelMessage: "ChannelMessage",
} as const;

/**
 * @public
 */
export type AppInstanceDataType = (typeof AppInstanceDataType)[keyof typeof AppInstanceDataType];

/**
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceSummary {
  /**
   * <p>The <code>AppInstance</code> ARN.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * <p>The details of the retention settings for a channel.</p>
 * @public
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceRetentionSettings {
  /**
   * <p>The length of time in days to retain the messages in a channel.</p>
   * @public
   */
  ChannelRetentionSettings?: ChannelRetentionSettings | undefined;
}

/**
 * <p>The details of the streaming configuration of an <code>AppInstance</code>.</p>
 * @public
 */
export interface AppInstanceStreamingConfiguration {
  /**
   * <p>The type of data to be streamed.</p>
   * @public
   */
  AppInstanceDataType: AppInstanceDataType | undefined;

  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface AppInstanceUser {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface AppInstanceUserSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelMembershipType = {
  DEFAULT: "DEFAULT",
  HIDDEN: "HIDDEN",
} as const;

/**
 * @public
 */
export type ChannelMembershipType = (typeof ChannelMembershipType)[keyof typeof ChannelMembershipType];

/**
 * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * <p>The type of <code>ChannelMembership</code>.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The time at which a message was last read.</p>
   * @public
   */
  ReadMarkerTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const AudioMuxType = {
  AudioOnly: "AudioOnly",
  AudioWithActiveSpeakerVideo: "AudioWithActiveSpeakerVideo",
} as const;

/**
 * @public
 */
export type AudioMuxType = (typeof AudioMuxType)[keyof typeof AudioMuxType];

/**
 * <p>The audio artifact configuration object.</p>
 * @public
 */
export interface AudioArtifactsConfiguration {
  /**
   * <p>The MUX type of the audio artifact configuration object.</p>
   * @public
   */
  MuxType: AudioMuxType | undefined;
}

/**
 * @public
 * @enum
 */
export const ContentMuxType = {
  ContentOnly: "ContentOnly",
} as const;

/**
 * @public
 */
export type ContentMuxType = (typeof ContentMuxType)[keyof typeof ContentMuxType];

/**
 * @public
 * @enum
 */
export const ArtifactsState = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type ArtifactsState = (typeof ArtifactsState)[keyof typeof ArtifactsState];

/**
 * <p>The content artifact object.</p>
 * @public
 */
export interface ContentArtifactsConfiguration {
  /**
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * <p>The MUX type of the artifact configuration.</p>
   * @public
   */
  MuxType?: ContentMuxType | undefined;
}

/**
 * @public
 * @enum
 */
export const VideoMuxType = {
  VideoOnly: "VideoOnly",
} as const;

/**
 * @public
 */
export type VideoMuxType = (typeof VideoMuxType)[keyof typeof VideoMuxType];

/**
 * <p>The video artifact configuration object.</p>
 * @public
 */
export interface VideoArtifactsConfiguration {
  /**
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   * @public
   */
  State: ArtifactsState | undefined;

  /**
   * <p>The MUX type of the video artifact configuration object.</p>
   * @public
   */
  MuxType?: VideoMuxType | undefined;
}

/**
 * <p>The configuration for the artifacts.</p>
 * @public
 */
export interface ArtifactsConfiguration {
  /**
   * <p>The configuration for the audio artifacts.</p>
   * @public
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the video artifacts.</p>
   * @public
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * <p>The configuration for the content artifacts.</p>
   * @public
   */
  Content: ContentArtifactsConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   * @public
   */
  ForceAssociate?: boolean | undefined;
}

/**
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of
 *             the phone numbers is returned, along with error codes and error messages.</p>
 * @public
 */
export interface PhoneNumberError {
  /**
   * <p>The phone number ID for which the action failed.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   * @public
   */
  ForceAssociate?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber: string | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserResponse {}

/**
 * @public
 */
export interface AssociateSigninDelegateGroupsWithAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate groups.</p>
   * @public
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

/**
 * @public
 */
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
 *          <p>We recommend securely transferring each <code>JoinToken</code> from your server application
 *             to the client so that no other client has access to the token except for the one
 *             authorized to represent the attendee.</p>
 * @public
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId?: string | undefined;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   * @public
   */
  JoinToken?: string | undefined;
}

/**
 * <p>Describes a tag applied to a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The membership information, including member ARNs, the channel ARN, and membership
 *          types.</p>
 * @public
 */
export interface BatchChannelMemberships {
  /**
   * <p>The identifier of the member who invited another member.</p>
   * @public
   */
  InvitedBy?: Identity | undefined;

  /**
   * <p>The membership types set for the channel users.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The users successfully added to the request.</p>
   * @public
   */
  Members?: Identity[] | undefined;

  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 * @public
 */
export interface CreateAttendeeRequestItem {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The request containing the attendees to create.</p>
   * @public
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

/**
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 * @public
 */
export interface CreateAttendeeError {
  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   * @public
   */
  ExternalUserId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * <p>The request exceeds the resource limit.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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

/**
 * @public
 */
export interface BatchCreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The ARNs of the members you want to add to the channel.</p>
   * @public
   */
  MemberArns: string[] | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 * @public
 */
export interface BatchCreateChannelMembershipError {
  /**
   * <p>The ARN of the member that the service couldn't add.</p>
   * @public
   */
  MemberArn?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipResponse {
  /**
   * <p>The list of channel memberships in the response.</p>
   * @public
   */
  BatchChannelMemberships?: BatchChannelMemberships | undefined;

  /**
   * <p>If the action fails for one or more of the memberships in the request, a list of the
   *          memberships is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: BatchCreateChannelMembershipError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const RoomMembershipRole = {
  Administrator: "Administrator",
  Member: "Member",
} as const;

/**
 * @public
 */
export type RoomMembershipRole = (typeof RoomMembershipRole)[keyof typeof RoomMembershipRole];

/**
 * <p>Membership details, such as member ID and member role.</p>
 * @public
 */
export interface MembershipItem {
  /**
   * <p>The member ID.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The member role.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The list of membership items.</p>
   * @public
   */
  MembershipItemList: MembershipItem[] | undefined;
}

/**
 * <p>The list of errors returned when a member action results in an error.</p>
 * @public
 */
export interface MemberError {
  /**
   * <p>The member ID.</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipResponse {
  /**
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: MemberError[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * <p>List of phone number IDs.</p>
   * @public
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to suspend.</p>
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or
 *     <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.</p>
 * @public
 */
export interface UserError {
  /**
   * <p>The user ID for which the action failed.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchSuspendUserResponse {
  /**
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs to unsuspend.</p>
   * @public
   */
  UserIdList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserResponse {
  /**
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberProductType = {
  BusinessCalling: "BusinessCalling",
  SipMediaApplicationDialIn: "SipMediaApplicationDialIn",
  VoiceConnector: "VoiceConnector",
} as const;

/**
 * @public
 */
export type PhoneNumberProductType = (typeof PhoneNumberProductType)[keyof typeof PhoneNumberProductType];

/**
 * <p>The phone number ID, product type, or calling name fields to update, used with the
 * <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 * @public
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * <p>The phone number ID to update.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type to update.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The outbound calling name to update.</p>
   * @public
   */
  CallingName?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   * @public
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  PrivateUser: "PrivateUser",
  SharedDevice: "SharedDevice",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * <p>The user ID and user fields to update, used with the
 * <a>BatchUpdateUser</a> action.</p>
 * @public
 */
export interface UpdateUserRequestItem {
  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The user license type.</p>
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * <p>The Alexa for Business metadata.</p>
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The request containing the user IDs and details to update.</p>
   * @public
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserResponse {
  /**
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   * @public
   */
  UserErrors?: UserError[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BotType = {
  ChatBot: "ChatBot",
} as const;

/**
 * @public
 */
export type BotType = (typeof BotType)[keyof typeof BotType];

/**
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 * @public
 */
export interface Bot {
  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId?: string | undefined;

  /**
   * <p>The unique ID for the bot user.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The bot display name.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The bot type.</p>
   * @public
   */
  BotType?: BotType | undefined;

  /**
   * <p>When true, the bot is stopped from running in your account.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The bot email address.</p>
   * @public
   */
  BotEmail?: string | undefined;

  /**
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   * @public
   */
  SecurityToken?: string | undefined;
}

/**
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any
 *             Amazon S3 buckets designated for storing call detail records.</p>
 * @public
 */
export interface BusinessCallingSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CallingNameStatus = {
  Unassigned: "Unassigned",
  UpdateFailed: "UpdateFailed",
  UpdateInProgress: "UpdateInProgress",
  UpdateSucceeded: "UpdateSucceeded",
} as const;

/**
 * @public
 */
export type CallingNameStatus = (typeof CallingNameStatus)[keyof typeof CallingNameStatus];

/**
 * <p>A suggested address.</p>
 * @public
 */
export interface CandidateAddress {
  /**
   * <p>The street information of a candidate address</p>
   * @public
   */
  streetInfo?: string | undefined;

  /**
   * <p>The numeric portion of a candidate address.</p>
   * @public
   */
  streetNumber?: string | undefined;

  /**
   * <p>The city of a candidate address.</p>
   * @public
   */
  city?: string | undefined;

  /**
   * <p>The state of a candidate address.</p>
   * @public
   */
  state?: string | undefined;

  /**
   * <p>The postal code of a candidate address.</p>
   * @public
   */
  postalCode?: string | undefined;

  /**
   * <p>The Zip + 4 or postal code + 4 of a candidate address.</p>
   * @public
   */
  postalCodePlus4?: string | undefined;

  /**
   * <p>The country of a candidate address.</p>
   * @public
   */
  country?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Capability = {
  SMS: "SMS",
  Voice: "Voice",
} as const;

/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 * @enum
 */
export const ChannelMode = {
  RESTRICTED: "RESTRICTED",
  UNRESTRICTED: "UNRESTRICTED",
} as const;

/**
 * @public
 */
export type ChannelMode = (typeof ChannelMode)[keyof typeof ChannelMode];

/**
 * @public
 * @enum
 */
export const ChannelPrivacy = {
  PRIVATE: "PRIVATE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type ChannelPrivacy = (typeof ChannelPrivacy)[keyof typeof ChannelPrivacy];

/**
 * <p>The details of a channel.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The mode of the channel.</p>
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * <p>The channel's privacy setting.</p>
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * <p>The channel's metadata.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>AppInstanceUser</code> who created the channel.</p>
   * @public
   */
  CreatedBy?: Identity | undefined;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> created the channel.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a member sent the last message in the channel.</p>
   * @public
   */
  LastMessageTimestamp?: Date | undefined;

  /**
   * <p>The time at which a channel was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>The details of a channel ban.</p>
 * @public
 */
export interface ChannelBan {
  /**
   * <p>The member being banned from the channel.</p>
   * @public
   */
  Member?: Identity | undefined;

  /**
   * <p>The ARN of the channel from which a member is being banned.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The time at which the ban was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The <code>AppInstanceUser</code> who created the ban.</p>
   * @public
   */
  CreatedBy?: Identity | undefined;
}

/**
 * <p>Summary of the details of a <code>ChannelBan</code>.</p>
 * @public
 */
export interface ChannelBanSummary {
  /**
   * <p>The member being banned from a channel.</p>
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * <p>The details of a channel member.</p>
 * @public
 */
export interface ChannelMembership {
  /**
   * <p>The identifier of the member who invited another member.</p>
   * @public
   */
  InvitedBy?: Identity | undefined;

  /**
   * <p>The membership type set for the channel member.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The data of the channel member.</p>
   * @public
   */
  Member?: Identity | undefined;

  /**
   * <p>The ARN of the member's channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The time at which the channel membership was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a channel membership was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>Summary of the details of a <code>Channel</code>.</p>
 * @public
 */
export interface ChannelSummary {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The mode of the channel.</p>
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * <p>The privacy setting of the channel.</p>
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * <p>The metadata of the channel.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The time at which the last message in a channel was sent.</p>
   * @public
   */
  LastMessageTimestamp?: Date | undefined;
}

/**
 * <p>Summary of the channel membership details of an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   * @public
   */
  ChannelSummary?: ChannelSummary | undefined;

  /**
   * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary | undefined;
}

/**
 * <p>Summary of the details of a <code>ChannelMembership</code>.</p>
 * @public
 */
export interface ChannelMembershipSummary {
  /**
   * <p>A member's summary data.</p>
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelMessagePersistenceType = {
  NON_PERSISTENT: "NON_PERSISTENT",
  PERSISTENT: "PERSISTENT",
} as const;

/**
 * @public
 */
export type ChannelMessagePersistenceType =
  (typeof ChannelMessagePersistenceType)[keyof typeof ChannelMessagePersistenceType];

/**
 * @public
 * @enum
 */
export const ChannelMessageType = {
  CONTROL: "CONTROL",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type ChannelMessageType = (typeof ChannelMessageType)[keyof typeof ChannelMessageType];

/**
 * <p>The details of a message in a channel.</p>
 * @public
 */
export interface ChannelMessage {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID of a message.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The message content.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The message metadata.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The message type.</p>
   * @public
   */
  Type?: ChannelMessageType | undefined;

  /**
   * <p>The time at which the message was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a message was edited.</p>
   * @public
   */
  LastEditedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a message was updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The message sender.</p>
   * @public
   */
  Sender?: Identity | undefined;

  /**
   * <p>Hides the content of a message.</p>
   * @public
   */
  Redacted?: boolean | undefined;

  /**
   * <p>The persistence setting for a channel message.</p>
   * @public
   */
  Persistence?: ChannelMessagePersistenceType | undefined;
}

/**
 * <p>Summary of the messages in a <code>Channel</code>.</p>
 * @public
 */
export interface ChannelMessageSummary {
  /**
   * <p>The ID of the message.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The content of the message.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The metadata of the message.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The type of message.</p>
   * @public
   */
  Type?: ChannelMessageType | undefined;

  /**
   * <p>The time at which the message summary was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a message was last updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a message was last edited.</p>
   * @public
   */
  LastEditedTimestamp?: Date | undefined;

  /**
   * <p>The message sender.</p>
   * @public
   */
  Sender?: Identity | undefined;

  /**
   * <p>Indicates whether a message was redacted.</p>
   * @public
   */
  Redacted?: boolean | undefined;
}

/**
 * <p>Summary of the details of a moderated channel.</p>
 * @public
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * <p>Summary of the details of a <code>Channel</code>.</p>
   * @public
   */
  ChannelSummary?: ChannelSummary | undefined;
}

/**
 * <p>The details of a channel moderator.</p>
 * @public
 */
export interface ChannelModerator {
  /**
   * <p>The moderator's data.</p>
   * @public
   */
  Moderator?: Identity | undefined;

  /**
   * <p>The ARN of the moderator's channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The time at which the moderator was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The <code>AppInstanceUser</code> who created the moderator.</p>
   * @public
   */
  CreatedBy?: Identity | undefined;
}

/**
 * <p>Summary of the details of a <code>ChannelModerator</code>.</p>
 * @public
 */
export interface ChannelModeratorSummary {
  /**
   * <p>The data for a moderator.</p>
   * @public
   */
  Moderator?: Identity | undefined;
}

/**
 * <p>The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.</p>
 * @public
 */
export interface SelectedVideoStreams {
  /**
   * <p>The attendee IDs of the streams selected for a media capture pipeline. </p>
   * @public
   */
  AttendeeIds?: string[] | undefined;

  /**
   * <p>The external user IDs of the streams selected for a media capture pipeline.</p>
   * @public
   */
  ExternalUserIds?: string[] | undefined;
}

/**
 * <p>Source configuration for a specified media capture pipeline.</p>
 * @public
 */
export interface SourceConfiguration {
  /**
   * <p>The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.</p>
   * @public
   */
  SelectedVideoStreams?: SelectedVideoStreams | undefined;
}

/**
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 * @public
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * <p>The source configuration for a specified media capture pipeline.</p>
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   * @public
   */
  ArtifactsConfiguration?: ArtifactsConfiguration | undefined;
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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
 * @public
 */
export interface ConversationRetentionSettings {
  /**
   * <p>The number of days for which to retain conversation messages.</p>
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * <p>The name of the Amazon Chime account.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags assigned to the <code>AppInstance</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceAdmin?: Identity | undefined;

  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceUserId: string | undefined;

  /**
   * <p>The user's name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   * @public
   */
  ExternalUserId: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAttendeeResponse {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot display name.</p>
   * @public
   */
  DisplayName: string | undefined;

  /**
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   * @public
   */
  Domain?: string | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * <p>The bot details.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The ARN of the channel request.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators,
   *          moderators, and channel members can add themselves and other members to unrestricted
   *          channels. Only administrators and moderators can add members to restricted channels.</p>
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private
   *          channels aren't discoverable by users outside the channel. Public channels are discoverable
   *          by anyone in the <code>AppInstance</code>.</p>
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * <p>The metadata of the creation request. Limited to 1KB and UTF-8.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The client token for the request. An <code>Idempotency</code> token.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The tags for the creation request.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelBanRequest {
  /**
   * <p>The ARN of the ban request.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelBanResponse {
  /**
   * <p>The ARN of the response to the ban request.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban
   *          response.</p>
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * @public
 */
export interface CreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member you want to add to the channel.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   * @public
   */
  Type: ChannelMembershipType | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelMembershipResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ARN and metadata of the member being added.</p>
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * @public
 */
export interface CreateChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelModeratorResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ARNs of the channel and the moderator.</p>
   * @public
   */
  ChannelModerator?: Identity | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaPipelineSinkType = {
  S3Bucket: "S3Bucket",
} as const;

/**
 * @public
 */
export type MediaPipelineSinkType = (typeof MediaPipelineSinkType)[keyof typeof MediaPipelineSinkType];

/**
 * @public
 * @enum
 */
export const MediaPipelineSourceType = {
  ChimeSdkMeeting: "ChimeSdkMeeting",
} as const;

/**
 * @public
 */
export type MediaPipelineSourceType = (typeof MediaPipelineSourceType)[keyof typeof MediaPipelineSourceType];

/**
 * @public
 */
export interface CreateMediaCapturePipelineRequest {
  /**
   * <p>Source type from which the media artifacts will be captured. A Chime SDK Meeting
   *             is the only supported source.</p>
   * @public
   */
  SourceType: MediaPipelineSourceType | undefined;

  /**
   * <p>ARN of the source from which the media artifacts are captured.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket. </p>
   * @public
   */
  SinkType: MediaPipelineSinkType | undefined;

  /**
   * <p>The ARN of the sink type.</p>
   * @public
   */
  SinkArn: string | undefined;

  /**
   * <p>The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaPipelineStatus = {
  Failed: "Failed",
  InProgress: "InProgress",
  Initializing: "Initializing",
  Stopped: "Stopped",
  Stopping: "Stopping",
} as const;

/**
 * @public
 */
export type MediaPipelineStatus = (typeof MediaPipelineStatus)[keyof typeof MediaPipelineStatus];

/**
 * <p>A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.</p>
 * @public
 */
export interface MediaCapturePipeline {
  /**
   * <p>The ID of a media capture pipeline.</p>
   * @public
   */
  MediaPipelineId?: string | undefined;

  /**
   * <p>Source type from which media artifacts are saved. You must use <code>ChimeMeeting</code>.</p>
   * @public
   */
  SourceType?: MediaPipelineSourceType | undefined;

  /**
   * <p>ARN of the source from which the media artifacts will be saved.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The status of the media capture pipeline.</p>
   * @public
   */
  Status?: MediaPipelineStatus | undefined;

  /**
   * <p>Destination type to which the media artifacts are saved. You must use an S3 Bucket.</p>
   * @public
   */
  SinkType?: MediaPipelineSinkType | undefined;

  /**
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   * @public
   */
  SinkArn?: string | undefined;

  /**
   * <p>The time at which the capture pipeline was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the capture pipeline was updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   * @public
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineResponse {
  /**
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
 *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
 *             Virginia) AWS Region (<code>us-east-1</code>). </p>
 * @public
 */
export interface MeetingNotificationConfiguration {
  /**
   * <p>The SNS topic ARN.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p>The SQS queue ARN.</p>
   * @public
   */
  SqsQueueArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   * @public
   */
  ExternalMeetingId?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>.
   * </p>
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
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   * @public
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration | undefined;
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 * @public
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   * @public
   */
  AudioHostUrl?: string | undefined;

  /**
   * <p>The audio fallback URL.</p>
   * @public
   */
  AudioFallbackUrl?: string | undefined;

  /**
   * <p>The screen data URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  ScreenDataUrl?: string | undefined;

  /**
   * <p>The screen sharing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>.</p>
   *          </important>
   * @public
   */
  ScreenSharingUrl?: string | undefined;

  /**
   * <p>The screen viewing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  ScreenViewingUrl?: string | undefined;

  /**
   * <p>The signaling URL.</p>
   * @public
   */
  SignalingUrl?: string | undefined;

  /**
   * <p>The turn control URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   * @public
   */
  TurnControlUrl?: string | undefined;

  /**
   * <p>The event ingestion URL to which you send client meeting events.</p>
   * @public
   */
  EventIngestionUrl?: string | undefined;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 * @public
 */
export interface Meeting {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   * @public
   */
  ExternalMeetingId?: string | undefined;

  /**
   * <p>The media placement for the meeting.</p>
   * @public
   */
  MediaPlacement?: MediaPlacement | undefined;

  /**
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *     <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *     <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *                 <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *                 <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *                 <code>us-west-1</code>, <code>us-west-2</code>.</p>
   * @public
   */
  MediaRegion?: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingResponse {
  /**
   * <p>
   * The meeting information, including the meeting ID and
   * <code>MediaPlacement</code>
   * .
   * </p>
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>Phone number called when inviting someone to a meeting.</p>
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.</p>
   * @public
   */
  JoinToken: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutResponse {
  /**
   * <p>Unique ID that tracks API calls.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesRequest {
  /**
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The external meeting ID.</p>
   * @public
   */
  ExternalMeetingId?: string | undefined;

  /**
   * <p>Reserved.</p>
   * @public
   */
  MeetingHostId?: string | undefined;

  /**
   * <p>
   * The Region in which to create the meeting. Default: <code>us-east-1</code>
   * .
   * </p>
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
   * @public
   */
  MediaRegion?: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
   *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS
   *             Region (us-east-1).</p>
   * @public
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration | undefined;

  /**
   * <p>The request containing the attendees to create.</p>
   * @public
   */
  Attendees?: CreateAttendeeRequestItem[] | undefined;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesResponse {
  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   * @public
   */
  Meeting?: Meeting | undefined;

  /**
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   * @public
   */
  Attendees?: Attendee[] | undefined;

  /**
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   * @public
   */
  Errors?: CreateAttendeeError[] | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType: PhoneNumberProductType | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const OrderedPhoneNumberStatus = {
  Acquired: "Acquired",
  Failed: "Failed",
  Processing: "Processing",
} as const;

/**
 * @public
 */
export type OrderedPhoneNumberStatus = (typeof OrderedPhoneNumberStatus)[keyof typeof OrderedPhoneNumberStatus];

/**
 * <p>A phone number for which an order has been placed.</p>
 * @public
 */
export interface OrderedPhoneNumber {
  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * <p>The phone number status.</p>
   * @public
   */
  Status?: OrderedPhoneNumberStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberOrderStatus = {
  Failed: "Failed",
  Partial: "Partial",
  Processing: "Processing",
  Successful: "Successful",
} as const;

/**
 * @public
 */
export type PhoneNumberOrderStatus = (typeof PhoneNumberOrderStatus)[keyof typeof PhoneNumberOrderStatus];

/**
 * <p>The details of a phone number order created for Amazon Chime.</p>
 * @public
 */
export interface PhoneNumberOrder {
  /**
   * <p>The phone number order ID.</p>
   * @public
   */
  PhoneNumberOrderId?: string | undefined;

  /**
   * <p>The phone number order product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The status of the phone number order.</p>
   * @public
   */
  Status?: PhoneNumberOrderStatus | undefined;

  /**
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone
   *             number status.</p>
   * @public
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[] | undefined;

  /**
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 * @enum
 */
export const GeoMatchLevel = {
  AreaCode: "AreaCode",
  Country: "Country",
} as const;

/**
 * @public
 */
export type GeoMatchLevel = (typeof GeoMatchLevel)[keyof typeof GeoMatchLevel];

/**
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 * @public
 */
export interface GeoMatchParams {
  /**
   * <p>The country.</p>
   * @public
   */
  Country: string | undefined;

  /**
   * <p>The area code.</p>
   * @public
   */
  AreaCode: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NumberSelectionBehavior = {
  AvoidSticky: "AvoidSticky",
  PreferSticky: "PreferSticky",
} as const;

/**
 * @public
 */
export type NumberSelectionBehavior = (typeof NumberSelectionBehavior)[keyof typeof NumberSelectionBehavior];

/**
 * @public
 */
export interface CreateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The participant phone numbers.</p>
   * @public
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * <p>The name of the proxy session.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   * @public
   */
  Capabilities: Capability[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | undefined;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel | undefined;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   * @public
   */
  GeoMatchParams?: GeoMatchParams | undefined;
}

/**
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 * @public
 */
export interface Participant {
  /**
   * <p>The participant's phone number.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The participant's proxy phone number.</p>
   * @public
   */
  ProxyPhoneNumber?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProxySessionStatus = {
  Closed: "Closed",
  InProgress: "InProgress",
  Open: "Open",
} as const;

/**
 * @public
 */
export type ProxySessionStatus = (typeof ProxySessionStatus)[keyof typeof ProxySessionStatus];

/**
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 * @public
 */
export interface ProxySession {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId?: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId?: string | undefined;

  /**
   * <p>The name of the proxy session.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The status of the proxy session.</p>
   * @public
   */
  Status?: ProxySessionStatus | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   * @public
   */
  ExpiryMinutes?: number | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   * @public
   */
  Capabilities?: Capability[] | undefined;

  /**
   * <p>The created time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The ended time stamp, in ISO 8601 format.</p>
   * @public
   */
  EndedTimestamp?: Date | undefined;

  /**
   * <p>The proxy session participants.</p>
   * @public
   */
  Participants?: Participant[] | undefined;

  /**
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   * @public
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | undefined;

  /**
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   * @public
   */
  GeoMatchLevel?: GeoMatchLevel | undefined;

  /**
   * <p>The country and area code for the proxy phone number.</p>
   * @public
   */
  GeoMatchParams?: GeoMatchParams | undefined;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * <p>The Amazon Chime chat room details.</p>
 * @public
 */
export interface Room {
  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId?: string | undefined;

  /**
   * <p>The room name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The identifier of the room creator.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The room update timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * <p>The room details.</p>
   * @public
   */
  Room?: Room | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;
}

/**
 * @public
 * @enum
 */
export const MemberType = {
  Bot: "Bot",
  User: "User",
  Webhook: "Webhook",
} as const;

/**
 * @public
 */
export type MemberType = (typeof MemberType)[keyof typeof MemberType];

/**
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId?: string | undefined;

  /**
   * <p>The member type.</p>
   * @public
   */
  MemberType?: MemberType | undefined;

  /**
   * <p>The member email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The member name.</p>
   * @public
   */
  FullName?: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;
}

/**
 * <p>The room membership details.</p>
 * @public
 */
export interface RoomMembership {
  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId?: string | undefined;

  /**
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   * @public
   */
  Member?: Member | undefined;

  /**
   * <p>The membership role.</p>
   * @public
   */
  Role?: RoomMembershipRole | undefined;

  /**
   * <p>The identifier of the user that invited the room member.</p>
   * @public
   */
  InvitedBy?: string | undefined;

  /**
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   * @public
   */
  RoomMembership?: RoomMembership | undefined;
}

/**
 * <p>The endpoint assigned to the SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationEndpoint {
  /**
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias. The function must be created in the same AWS Region as the SIP media application.</p>
   * @public
   */
  LambdaArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * <p>The AWS Region assigned to the SIP media application.</p>
   * @public
   */
  AwsRegion: string | undefined;

  /**
   * <p>The SIP media application name.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.</p>
   * @public
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

/**
 * <p>The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.</p>
 * @public
 */
export interface SipMediaApplication {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * <p>The AWS Region in which the SIP media application is created.</p>
   * @public
   */
  AwsRegion?: string | undefined;

  /**
   * <p>The name of the SIP media application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>List of endpoints for SIP media application. Currently, only one endpoint per SIP media application is permitted.</p>
   * @public
   */
  Endpoints?: SipMediaApplicationEndpoint[] | undefined;

  /**
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The SIP media application updated timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * <p>The SIP media application details.</p>
   * @public
   */
  SipMediaApplication?: SipMediaApplication | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * <p>The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.</p>
   * @public
   */
  FromPhoneNumber: string | undefined;

  /**
   * <p>The phone number that the service should call.</p>
   * @public
   */
  ToPhoneNumber: string | undefined;

  /**
   * <p>The ID of the SIP media application.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The SIP headers added to an outbound call leg.</p>
   * @public
   */
  SipHeaders?: Record<string, string> | undefined;
}

/**
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 * @public
 */
export interface SipMediaApplicationCall {
  /**
   * <p>The transaction ID of a call.</p>
   * @public
   */
  TransactionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * <p>The actual call.</p>
   * @public
   */
  SipMediaApplicationCall?: SipMediaApplicationCall | undefined;
}

/**
 * <p>Target SIP media application and other details, such as priority and AWS Region, to be
 *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 * @public
 */
export interface SipRuleTargetApplication {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId?: string | undefined;

  /**
   * <p>Priority of the SIP media application in the target list.</p>
   * @public
   */
  Priority?: number | undefined;

  /**
   * <p>The AWS Region of the target application.</p>
   * @public
   */
  AwsRegion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SipRuleTriggerType = {
  RequestUriHostname: "RequestUriHostname",
  ToPhoneNumber: "ToPhoneNumber",
} as const;

/**
 * @public
 */
export type SipRuleTriggerType = (typeof SipRuleTriggerType)[keyof typeof SipRuleTriggerType];

/**
 * @public
 */
export interface CreateSipRuleRequest {
  /**
   * <p>The name of the SIP rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   * @public
   */
  TriggerType: SipRuleTriggerType | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound
   *             host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the
   *     E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP
   *     request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the
   *     <code>ToPhoneNumber</code> value.</p>
   * @public
   */
  TriggerValue: string | undefined;

  /**
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.</p>
   * @public
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

/**
 * <p>The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.</p>
 * @public
 */
export interface SipRule {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId?: string | undefined;

  /**
   * <p>The name of the SIP rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or
   *         <code>ToPhoneNumber</code>.</p>
   * @public
   */
  TriggerType?: SipRuleTriggerType | undefined;

  /**
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *             outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in
   *             E164 format. <code>SipRule</code> is triggered when a SIP rule requests host name or
   *                 <code>ToPhoneNumber</code> matches in the incoming SIP request.</p>
   * @public
   */
  TriggerValue?: string | undefined;

  /**
   * <p>Target SIP media application and other details, such as priority and AWS Region, to be
   *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   * @public
   */
  TargetApplications?: SipRuleTargetApplication[] | undefined;

  /**
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which the SIP rule was last updated, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  /**
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   * @public
   */
  SipRule?: SipRule | undefined;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user name.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The user's email address.</p>
   * @public
   */
  Email?: string | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;
}

/**
 * @public
 * @enum
 */
export const InviteStatus = {
  Accepted: "Accepted",
  Failed: "Failed",
  Pending: "Pending",
} as const;

/**
 * @public
 */
export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus];

/**
 * @public
 * @enum
 */
export const RegistrationStatus = {
  Registered: "Registered",
  Suspended: "Suspended",
  Unregistered: "Unregistered",
} as const;

/**
 * @public
 */
export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus];

/**
 * <p>The user on the Amazon Chime account.</p>
 * @public
 */
export interface User {
  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The primary email address of the user.</p>
   * @public
   */
  PrimaryEmail?: string | undefined;

  /**
   * <p>The primary phone number associated with the user.</p>
   * @public
   */
  PrimaryProvisionedNumber?: string | undefined;

  /**
   * <p>The display name of the user.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The license type for the user.</p>
   * @public
   */
  LicenseType?: License | undefined;

  /**
   * <p>The user type.</p>
   * @public
   */
  UserType?: UserType | undefined;

  /**
   * <p>The user registration status.</p>
   * @public
   */
  UserRegistrationStatus?: RegistrationStatus | undefined;

  /**
   * <p>The user invite status.</p>
   * @public
   */
  UserInvitationStatus?: InviteStatus | undefined;

  /**
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   * @public
   */
  RegisteredOn?: Date | undefined;

  /**
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   * @public
   */
  InvitedOn?: Date | undefined;

  /**
   * <p>The Alexa for Business metadata.</p>
   * @public
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata | undefined;

  /**
   * <p>The user's personal meeting PIN.</p>
   * @public
   */
  PersonalPIN?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * <p>The user on the Amazon Chime account.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 * @enum
 */
export const VoiceConnectorAwsRegion = {
  US_EAST_1: "us-east-1",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type VoiceConnectorAwsRegion = (typeof VoiceConnectorAwsRegion)[keyof typeof VoiceConnectorAwsRegion];

/**
 * @public
 */
export interface CreateVoiceConnectorRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default value:
   * <code>us-east-1</code>
   * .
   * </p>
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   * @public
   */
  RequireEncryption: boolean | undefined;
}

/**
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and encryption
 *             settings.</p>
 * @public
 */
export interface VoiceConnector {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId?: string | undefined;

  /**
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default:
   * <code>us-east-1</code>.
   * </p>
   * @public
   */
  AwsRegion?: VoiceConnectorAwsRegion | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   * @public
   */
  OutboundHostName?: string | undefined;

  /**
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   * @public
   */
  RequireEncryption?: boolean | undefined;

  /**
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The ARN of the specified Amazon Chime Voice Connector.</p>
   * @public
   */
  VoiceConnectorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   * @public
   */
  VoiceConnector?: VoiceConnector | undefined;
}

/**
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3
 * <code>VoiceConnectorItems</code>
 * per Amazon Chime Voice Connector group.</p>
 * @public
 */
export interface VoiceConnectorItem {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.</p>
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[] | undefined;
}

/**
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice
 *             Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *             your group. This creates a fault tolerant mechanism for fallback in case of availability
 *             events.</p>
 * @public
 */
export interface VoiceConnectorGroup {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId?: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   * @public
   */
  VoiceConnectorItems?: VoiceConnectorItem[] | undefined;

  /**
   * <p>The Amazon Chime Voice Connector group creation time stamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated Amazon Chime Voice Connector group time stamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The ARN of the specified Amazon Chime Voice Connector group.</p>
   * @public
   */
  VoiceConnectorGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * <p>The Amazon Chime Voice Connector group details.</p>
   * @public
   */
  VoiceConnectorGroup?: VoiceConnectorGroup | undefined;
}

/**
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 * @public
 */
export interface Credential {
  /**
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *             format.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountResponse {}

/**
 * <p>The request was well-formed but was unable to be followed due to semantic errors.</p>
 * @public
 */
export class UnprocessableEntityException extends __BaseException {
  readonly name: "UnprocessableEntityException" = "UnprocessableEntityException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | undefined;
  Message?: string | undefined;
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

/**
 * @public
 */
export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the <code>AppInstanceUser</code> was banned.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> that you want to reinstate.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelMembershipRequest {
  /**
   * <p>The ARN of the channel from which you want to remove the user.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member that you're removing from the channel.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being deleted.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the moderator being deleted.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaCapturePipelineRequest {
  /**
   * <p>The ID of the media capture pipeline being deleted. </p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The chat room ID.</p>
   * @public
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   * @public
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID (user ID or bot ID).</p>
   * @public
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   * @public
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   * @public
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   * @public
   */
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   * @public
   */
  AppInstance?: AppInstance | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   * @public
   */
  AppInstanceAdmin?: AppInstanceAdmin | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   * @public
   */
  AppInstanceUser?: AppInstanceUser | undefined;
}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * <p>The channel details.</p>
   * @public
   */
  Channel?: Channel | undefined;
}

/**
 * @public
 */
export interface DescribeChannelBanRequest {
  /**
   * <p>The ARN of the channel from which the user is banned.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member being banned.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelBanResponse {
  /**
   * <p>The details of the ban.</p>
   * @public
   */
  ChannelBan?: ChannelBan | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipResponse {
  /**
   * <p>The details of the membership.</p>
   * @public
   */
  ChannelMembership?: ChannelMembership | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * <p>The ARN of the channel to which the user belongs.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the user in a channel.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * <p>The channel to which a user belongs.</p>
   * @public
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the moderated channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> in the moderated channel.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channel.</p>
   * @public
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel moderator.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   * @public
   */
  ChannelModerator?: ChannelModerator | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberFromUserResponse {}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>List of phone numbers, in E.164 format.</p>
   * @public
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   * @public
   */
  PhoneNumberErrors?: PhoneNumberError[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The sign-in delegate group names.</p>
   * @public
   */
  GroupNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

/**
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 * @public
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   * @public
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   * @public
   */
  TestPhoneNumber?: string | undefined;

  /**
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
   * @public
   */
  CallingCountry: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EmailStatus = {
  Failed: "Failed",
  NotSent: "NotSent",
  Sent: "Sent",
} as const;

/**
 * @public
 */
export type EmailStatus = (typeof EmailStatus)[keyof typeof EmailStatus];

/**
 * <p>The emergency calling configuration details associated with an Amazon Chime Voice Connector.</p>
 * @public
 */
export interface EmergencyCallingConfiguration {
  /**
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details.</p>
   * @public
   */
  DNIS?: DNISEmergencyCallingConfiguration[] | undefined;
}

/**
 * @public
 * @enum
 */
export const TranscribeMedicalContentIdentificationType = {
  PHI: "PHI",
} as const;

/**
 * @public
 */
export type TranscribeMedicalContentIdentificationType =
  (typeof TranscribeMedicalContentIdentificationType)[keyof typeof TranscribeMedicalContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalLanguageCode = {
  EN_US: "en-US",
} as const;

/**
 * @public
 */
export type TranscribeMedicalLanguageCode =
  (typeof TranscribeMedicalLanguageCode)[keyof typeof TranscribeMedicalLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalRegion = {
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_WEST_1: "eu-west-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type TranscribeMedicalRegion = (typeof TranscribeMedicalRegion)[keyof typeof TranscribeMedicalRegion];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalSpecialty = {
  Cardiology: "CARDIOLOGY",
  Neurology: "NEUROLOGY",
  Oncology: "ONCOLOGY",
  PrimaryCare: "PRIMARYCARE",
  Radiology: "RADIOLOGY",
  Urology: "UROLOGY",
} as const;

/**
 * @public
 */
export type TranscribeMedicalSpecialty = (typeof TranscribeMedicalSpecialty)[keyof typeof TranscribeMedicalSpecialty];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalType = {
  Conversation: "CONVERSATION",
  Dictation: "DICTATION",
} as const;

/**
 * @public
 */
export type TranscribeMedicalType = (typeof TranscribeMedicalType)[keyof typeof TranscribeMedicalType];

/**
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 * @public
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   * @public
   */
  LanguageCode: TranscribeMedicalLanguageCode | undefined;

  /**
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   * @public
   */
  Specialty: TranscribeMedicalSpecialty | undefined;

  /**
   * <p>The type of transcription.</p>
   * @public
   */
  Type: TranscribeMedicalType | undefined;

  /**
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   * @public
   */
  Region?: TranscribeMedicalRegion | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.  If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   * @public
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | undefined;
}

/**
 * @public
 * @enum
 */
export const TranscribeContentIdentificationType = {
  PII: "PII",
} as const;

/**
 * @public
 */
export type TranscribeContentIdentificationType =
  (typeof TranscribeContentIdentificationType)[keyof typeof TranscribeContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeContentRedactionType = {
  PII: "PII",
} as const;

/**
 * @public
 */
export type TranscribeContentRedactionType =
  (typeof TranscribeContentRedactionType)[keyof typeof TranscribeContentRedactionType];

/**
 * @public
 * @enum
 */
export const TranscribeLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_BR: "pt-BR",
  TH_TH: "th-TH",
  ZH_CN: "zh-CN",
} as const;

/**
 * @public
 */
export type TranscribeLanguageCode = (typeof TranscribeLanguageCode)[keyof typeof TranscribeLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribePartialResultsStability = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;

/**
 * @public
 */
export type TranscribePartialResultsStability =
  (typeof TranscribePartialResultsStability)[keyof typeof TranscribePartialResultsStability];

/**
 * @public
 * @enum
 */
export const TranscribeRegion = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_2: "us-west-2",
} as const;

/**
 * @public
 */
export type TranscribeRegion = (typeof TranscribeRegion)[keyof typeof TranscribeRegion];

/**
 * @public
 * @enum
 */
export const TranscribeVocabularyFilterMethod = {
  Mask: "mask",
  Remove: "remove",
  Tag: "tag",
} as const;

/**
 * @public
 */
export type TranscribeVocabularyFilterMethod =
  (typeof TranscribeVocabularyFilterMethod)[keyof typeof TranscribeVocabularyFilterMethod];

/**
 * <p>Settings specific for Amazon Transcribe as the live transcription engine.</p>
 *          <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon
 *             Transcribe.  For more information on each parameter and which combinations are valid, refer to the
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the
 *             <i>Amazon Transcribe Developer Guide</i>.</p>
 * @public
 */
export interface EngineTranscribeSettings {
  /**
   * <p>Specify the language code that represents the language spoken.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   * @public
   */
  LanguageCode?: TranscribeLanguageCode | undefined;

  /**
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p> To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   * @public
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | undefined;

  /**
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. </p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more vocabulary filters with your transcription, use the <code>VocabularyFilterNames</code> parameter instead.</p>
   * @public
   */
  VocabularyFilterName?: string | undefined;

  /**
   * <p>Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more custom vocabularies with your transcription, use the <code>VocabularyNames</code> parameter instead.</p>
   * @public
   */
  VocabularyName?: string | undefined;

  /**
   * <p>The AWS Region in which to use Amazon Transcribe.</p>
   *          <p>If you don't specify a Region, then the <code>MediaRegion</code> parameter of the
   *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html">CreateMeeting.html</a> API will be used.  However, if Amazon Transcribe is not
   *             available in the <code>MediaRegion</code>, then a TranscriptFailed event is sent.</p>
   *          <p>Use <code>auto</code> to use Amazon Transcribe in a Region near the meeting’s <code>MediaRegion</code>.  For more information, refer to
   *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/transcription-options.html#choose-region">Choosing a transcription Region</a> in the
   *             <i>Amazon Chime SDK Developer Guide</i>.</p>
   * @public
   */
  Region?: TranscribeRegion | undefined;

  /**
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.</p>
   * @public
   */
  EnablePartialResultsStabilization?: boolean | undefined;

  /**
   * <p>Specify the level of stability to use when you enable partial results stabilization (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   * @public
   */
  PartialResultsStability?: TranscribePartialResultsStability | undefined;

  /**
   * <p>Labels all personally identifiable information (PII) identified in your transcript.  If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   * @public
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | undefined;

  /**
   * <p>Content redaction is performed at the segment level. If you don't include <code>PiiEntityTypes</code>, all PII is redacted.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   * @public
   */
  ContentRedactionType?: TranscribeContentRedactionType | undefined;

  /**
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>
   *             <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,<code>NAME</code>, <code>PHONE</code>,  <code>PIN</code>,
   *             <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Note that if you include <code>PiiEntityTypes</code>, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>If you include <code>ContentRedactionType</code> or <code>ContentIdentificationType</code>, but do not include <code>PiiEntityTypes</code>, all PII is redacted or identified.</p>
   * @public
   */
  PiiEntityTypes?: string | undefined;

  /**
   * <p>Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated
   *             with a language mismatch.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the custom language model must be available in Amazon Transcribe in each Region.</p>
   * @public
   */
  LanguageModelName?: string | undefined;

  /**
   * <p>Enables automatic language identification for your transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you can optionally use <code>LanguageOptions</code> to include a list of language codes that you think may be present in your audio stream.
   *             Including language options can improve transcription accuracy.</p>
   *          <p>You can also use <code>PreferredLanguage</code> to include a preferred language. Doing so can help Amazon Transcribe identify the language faster.</p>
   *          <p>You must include either <code>LanguageCode</code> or <code>IdentifyLanguage</code>.</p>
   *          <p>Language identification can't be combined with custom language models or redaction.</p>
   * @public
   */
  IdentifyLanguage?: boolean | undefined;

  /**
   * <p>Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. If you're unsure what languages
   *             are present, do not include this parameter.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code>, you must also include <code>IdentifyLanguage</code>.</p>
   *          <important>
   *             <p>You can only include one language dialect per language. For example, you cannot include <code>en-US</code> and <code>en-AU</code>.</p>
   *          </important>
   * @public
   */
  LanguageOptions?: string | undefined;

  /**
   * <p>Specify a preferred language from the subset of languages codes you specified in <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you include <code>IdentifyLanguage</code> and <code>LanguageOptions</code>.</p>
   * @public
   */
  PreferredLanguage?: TranscribeLanguageCode | undefined;

  /**
   * <p>Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you don't include <code>IdentifyLanguage</code> and want to use a custom vocabulary with your transcription, use the <code>VocabularyName</code> parameter instead.</p>
   * @public
   */
  VocabularyNames?: string | undefined;

  /**
   * <p>Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p> If you're <i>not</i> including <code>IdentifyLanguage</code> and want to use a custom vocabulary filter with your transcription, use the <code>VocabularyFilterName</code>
   *             parameter instead.</p>
   * @public
   */
  VocabularyFilterNames?: string | undefined;
}

/**
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 * @public
 */
export interface EventsConfiguration {
  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId?: string | undefined;

  /**
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   * @public
   */
  OutboundEventsHTTPSEndpoint?: string | undefined;

  /**
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   * @public
   */
  LambdaFunctionArn?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountResponse {
  /**
   * <p>The Amazon Chime account details.</p>
   * @public
   */
  Account?: Account | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * <p>The Amazon Chime account settings.</p>
   * @public
   */
  AccountSettings?: AccountSettings | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</p>
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   * @public
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetAttendeeRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;

  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeResponse {
  /**
   * <p>The Amazon Chime SDK attendee information.</p>
   * @public
   */
  Attendee?: Attendee | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * <p>The chat bot details.</p>
   * @public
   */
  Bot?: Bot | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   * @public
   */
  ChannelMessage?: ChannelMessage | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   * @public
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationResponse {
  /**
   * <p>The events configuration details.</p>
   * @public
   */
  EventsConfiguration?: EventsConfiguration | undefined;
}

/**
 * <p>The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for
 *             storing call detail records.</p>
 * @public
 */
export interface VoiceConnectorSettings {
  /**
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   * @public
   */
  CdrBucket?: string | undefined;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   * @public
   */
  BusinessCalling?: BusinessCallingSettings | undefined;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   * @public
   */
  VoiceConnector?: VoiceConnectorSettings | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineRequest {
  /**
   * <p>The ID of the pipeline that you want to get.</p>
   * @public
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineResponse {
  /**
   * <p>The media capture pipeline object.</p>
   * @public
   */
  MediaCapturePipeline?: MediaCapturePipeline | undefined;
}

/**
 * @public
 */
export interface GetMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetMeetingResponse {
  /**
   * <p>The Amazon Chime SDK meeting information.</p>
   * @public
   */
  Meeting?: Meeting | undefined;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointRequest {}

/**
 * <p>The websocket endpoint used to connect to Amazon Chime SDK messaging.</p>
 * @public
 */
export interface MessagingSessionEndpoint {
  /**
   * <p>The endpoint to which you establish a websocket connection.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointResponse {
  /**
   * <p>The endpoint returned in the response.</p>
   * @public
   */
  Endpoint?: MessagingSessionEndpoint | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberAssociationName = {
  AccountId: "AccountId",
  SipRuleId: "SipRuleId",
  UserId: "UserId",
  VoiceConnectorGroupId: "VoiceConnectorGroupId",
  VoiceConnectorId: "VoiceConnectorId",
} as const;

/**
 * @public
 */
export type PhoneNumberAssociationName = (typeof PhoneNumberAssociationName)[keyof typeof PhoneNumberAssociationName];

/**
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon
 *             Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.</p>
 * @public
 */
export interface PhoneNumberAssociation {
  /**
   * <p>Contains the ID for the entity specified in Name.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector
   *             ID, or Amazon Chime Voice Connector group ID.</p>
   * @public
   */
  Name?: PhoneNumberAssociationName | undefined;

  /**
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   * @public
   */
  AssociatedTimestamp?: Date | undefined;
}

/**
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled
 *             inbound and outbound calling and text messaging.</p>
 * @public
 */
export interface PhoneNumberCapabilities {
  /**
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   * @public
   */
  InboundCall?: boolean | undefined;

  /**
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   * @public
   */
  OutboundCall?: boolean | undefined;

  /**
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   * @public
   */
  InboundSMS?: boolean | undefined;

  /**
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   * @public
   */
  OutboundSMS?: boolean | undefined;

  /**
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   * @public
   */
  InboundMMS?: boolean | undefined;

  /**
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   * @public
   */
  OutboundMMS?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberStatus = {
  AcquireFailed: "AcquireFailed",
  AcquireInProgress: "AcquireInProgress",
  Assigned: "Assigned",
  DeleteFailed: "DeleteFailed",
  DeleteInProgress: "DeleteInProgress",
  ReleaseFailed: "ReleaseFailed",
  ReleaseInProgress: "ReleaseInProgress",
  Unassigned: "Unassigned",
} as const;

/**
 * @public
 */
export type PhoneNumberStatus = (typeof PhoneNumberStatus)[keyof typeof PhoneNumberStatus];

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  Local: "Local",
  TollFree: "TollFree",
} as const;

/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *             Connector.</p>
 * @public
 */
export interface PhoneNumber {
  /**
   * <p>The phone number ID.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The phone number, in E.164 format.</p>
   * @public
   */
  E164PhoneNumber?: string | undefined;

  /**
   * <p>The phone number country. Format: ISO 3166-1 alpha-2.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The phone number type.</p>
   * @public
   */
  Type?: PhoneNumberType | undefined;

  /**
   * <p>The phone number product type.</p>
   * @public
   */
  ProductType?: PhoneNumberProductType | undefined;

  /**
   * <p>The phone number status.</p>
   * @public
   */
  Status?: PhoneNumberStatus | undefined;

  /**
   * <p>The phone number capabilities.</p>
   * @public
   */
  Capabilities?: PhoneNumberCapabilities | undefined;

  /**
   * <p>The phone number associations.</p>
   * @public
   */
  Associations?: PhoneNumberAssociation[] | undefined;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   * @public
   */
  CallingName?: string | undefined;

  /**
   * <p>The outbound calling name status.</p>
   * @public
   */
  CallingNameStatus?: CallingNameStatus | undefined;

  /**
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  UpdatedTimestamp?: Date | undefined;

  /**
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   * @public
   */
  DeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * <p>The phone number details.</p>
   * @public
   */
  PhoneNumber?: PhoneNumber | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * <p>The ID for the phone number order.</p>
   * @public
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * <p>The phone number order details.</p>
   * @public
   */
  PhoneNumberOrder?: PhoneNumberOrder | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * <p>The default outbound calling name for the account.</p>
   * @public
   */
  CallingName?: string | undefined;

  /**
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   * @public
   */
  CallingNameUpdatedTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   * @public
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   * @public
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   * @public
   */
  ProxySession?: ProxySession | undefined;
}

/**
 * @public
 */
export interface GetRetentionSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   * @public
   */
  AccountId: string | undefined;
}

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
export const AssociatePhoneNumbersWithVoiceConnectorRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumbersWithVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
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
export const AssociatePhoneNumberWithUserRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumberWithUserRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumber && { E164PhoneNumber: SENSITIVE_STRING }),
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
export const BotFilterSensitiveLog = (obj: Bot): any => ({
  ...obj,
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.BotEmail && { BotEmail: SENSITIVE_STRING }),
  ...(obj.SecurityToken && { SecurityToken: SENSITIVE_STRING }),
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
export const CreateChannelBanResponseFilterSensitiveLog = (obj: CreateChannelBanResponse): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
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
export const CredentialFilterSensitiveLog = (obj: Credential): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
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
export const DescribeAppInstanceResponseFilterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
  ...obj,
  ...(obj.AppInstance && { AppInstance: AppInstanceFilterSensitiveLog(obj.AppInstance) }),
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
export const DescribeAppInstanceUserResponseFilterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUserFilterSensitiveLog(obj.AppInstanceUser) }),
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
export const DescribeChannelBanResponseFilterSensitiveLog = (obj: DescribeChannelBanResponse): any => ({
  ...obj,
  ...(obj.ChannelBan && { ChannelBan: ChannelBanFilterSensitiveLog(obj.ChannelBan) }),
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
export const DescribeChannelModeratedByAppInstanceUserResponseFilterSensitiveLog = (
  obj: DescribeChannelModeratedByAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.Channel && { Channel: ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog(obj.Channel) }),
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
export const DisassociatePhoneNumbersFromVoiceConnectorRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumbersFromVoiceConnectorRequest
): any => ({
  ...obj,
  ...(obj.E164PhoneNumbers && { E164PhoneNumbers: SENSITIVE_STRING }),
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
export const EventsConfigurationFilterSensitiveLog = (obj: EventsConfiguration): any => ({
  ...obj,
  ...(obj.OutboundEventsHTTPSEndpoint && { OutboundEventsHTTPSEndpoint: SENSITIVE_STRING }),
  ...(obj.LambdaFunctionArn && { LambdaFunctionArn: SENSITIVE_STRING }),
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
export const GetAttendeeResponseFilterSensitiveLog = (obj: GetAttendeeResponse): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
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
export const GetChannelMessageResponseFilterSensitiveLog = (obj: GetChannelMessageResponse): any => ({
  ...obj,
  ...(obj.ChannelMessage && { ChannelMessage: ChannelMessageFilterSensitiveLog(obj.ChannelMessage) }),
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
export const GetMediaCapturePipelineResponseFilterSensitiveLog = (obj: GetMediaCapturePipelineResponse): any => ({
  ...obj,
  ...(obj.MediaCapturePipeline && {
    MediaCapturePipeline: MediaCapturePipelineFilterSensitiveLog(obj.MediaCapturePipeline),
  }),
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
export const GetProxySessionResponseFilterSensitiveLog = (obj: GetProxySessionResponse): any => ({
  ...obj,
  ...(obj.ProxySession && { ProxySession: ProxySessionFilterSensitiveLog(obj.ProxySession) }),
});
