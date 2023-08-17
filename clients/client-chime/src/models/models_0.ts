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
 * @public
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
 * @public
 * <p>An Active Directory (AD) group whose members are granted permission to act as delegates.</p>
 */
export interface SigninDelegateGroup {
  /**
   * @public
   * <p>The group name.</p>
   */
  GroupName?: string;
}

/**
 * @public
 * <p>The Amazon Chime account details. An AWS account can have multiple Amazon Chime accounts.</p>
 */
export interface Account {
  /**
   * @public
   * <p>The AWS account ID.</p>
   */
  AwsAccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime account name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime account type. For more information about different account types, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ag/manage-chime-account.html">Managing Your Amazon Chime Accounts</a> in the <i>Amazon Chime Administration
   *                 Guide</i>.</p>
   */
  AccountType?: AccountType | string;

  /**
   * @public
   * <p>The Amazon Chime account creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The default license for the Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;

  /**
   * @public
   * <p>Supported licenses for the Amazon Chime account.</p>
   */
  SupportedLicenses?: (License | string)[];

  /**
   * @public
   * <p>The status of the account.</p>
   */
  AccountStatus?: AccountStatus | string;

  /**
   * @public
   * <p>The sign-in delegate groups associated with the account.</p>
   */
  SigninDelegateGroups?: SigninDelegateGroup[];
}

/**
 * @public
 * <p>Settings related to the Amazon Chime account. This includes settings that start or stop
 *             remote control of shared screens, or start or stop the dial-out option in the Amazon Chime web application. For more information about these settings, see
 *     <a href="https://docs.aws.amazon.com/chime/latest/ag/policies.html">Use the Policies Page</a> in the <i>Amazon Chime Administration Guide</i>.</p>
 */
export interface AccountSettings {
  /**
   * @public
   * <p>Setting that stops or starts remote control of shared screens during meetings.</p>
   */
  DisableRemoteControl?: boolean;

  /**
   * @public
   * <p>Setting that allows meeting participants to choose the <b>Call me at a phone number</b> option. For more information, see
   *     <a href="https://docs.aws.amazon.com/chime/latest/ug/chime-join-meeting.html">Join a Meeting without the Amazon Chime App</a>.</p>
   */
  EnableDialOut?: boolean;
}

/**
 * @public
 * <p>A validated address.</p>
 */
export interface Address {
  /**
   * @public
   * <p>The address street, such as <code>8th Avenue</code>.</p>
   */
  streetName?: string;

  /**
   * @public
   * <p>The address suffix, such as the <code>N</code> in <code>8th Avenue N</code>.</p>
   */
  streetSuffix?: string;

  /**
   * @public
   * <p>An address suffix location, such as the <code>S. Unit A</code> in <code>Central Park S. Unit A</code>.</p>
   */
  postDirectional?: string;

  /**
   * @public
   * <p>An address prefix location, such as the <code>N</code> in <code>N. Third St.</code>.</p>
   */
  preDirectional?: string;

  /**
   * @public
   * <p>The numeric portion of an address.</p>
   */
  streetNumber?: string;

  /**
   * @public
   * <p>The city of an address.</p>
   */
  city?: string;

  /**
   * @public
   * <p>The state of an address.</p>
   */
  state?: string;

  /**
   * @public
   * <p>The postal code of an address.</p>
   */
  postalCode?: string;

  /**
   * @public
   * <p>The Zip + 4 or postal code + 4 of an address.</p>
   */
  postalCodePlus4?: string;

  /**
   * @public
   * <p>The country of an address. </p>
   */
  country?: string;
}

/**
 * @public
 * <p>The Alexa for Business metadata associated with an Amazon Chime user, used to integrate Alexa for Business with a device.</p>
 */
export interface AlexaForBusinessMetadata {
  /**
   * @public
   * <p>Starts or stops Alexa for Business.</p>
   */
  IsAlexaForBusinessEnabled?: boolean;

  /**
   * @public
   * <p>The ARN of the room resource.</p>
   */
  AlexaForBusinessRoomArn?: string;
}

/**
 * @public
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging application.</p>
 */
export interface AppInstance {
  /**
   * @public
   * <p>The ARN of the messaging instance.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The name of an <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The metadata of an <code>AppInstance</code>.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>The details of a user.</p>
 */
export interface Identity {
  /**
   * @public
   * <p>The ARN in an Identity.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name in an Identity.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdmin {
  /**
   * @public
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   */
  Admin?: Identity;

  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The time at which an administrator was created.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * @public
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
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
 * @public
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceSummary {
  /**
   * @public
   * <p>The <code>AppInstance</code> ARN.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The metadata of the <code>AppInstance</code>.</p>
   */
  Metadata?: string;
}

/**
 * @public
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * @public
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
}

/**
 * @public
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceRetentionSettings {
  /**
   * @public
   * <p>The length of time in days to retain the messages in a channel.</p>
   */
  ChannelRetentionSettings?: ChannelRetentionSettings;
}

/**
 * @public
 * <p>The details of the streaming configuration of an <code>AppInstance</code>.</p>
 */
export interface AppInstanceStreamingConfiguration {
  /**
   * @public
   * <p>The type of data to be streamed.</p>
   */
  AppInstanceDataType: AppInstanceDataType | string | undefined;

  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUser {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserSummary {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
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
 * @public
 * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * @public
   * <p>The type of <code>ChannelMembership</code>.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * @public
   * <p>The time at which a message was last read.</p>
   */
  ReadMarkerTimestamp?: Date;
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
 * @public
 * <p>The audio artifact configuration object.</p>
 */
export interface AudioArtifactsConfiguration {
  /**
   * @public
   * <p>The MUX type of the audio artifact configuration object.</p>
   */
  MuxType: AudioMuxType | string | undefined;
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
 * @public
 * <p>The content artifact object.</p>
 */
export interface ContentArtifactsConfiguration {
  /**
   * @public
   * <p>Indicates whether the content artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * @public
   * <p>The MUX type of the artifact configuration.</p>
   */
  MuxType?: ContentMuxType | string;
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
 * @public
 * <p>The video artifact configuration object.</p>
 */
export interface VideoArtifactsConfiguration {
  /**
   * @public
   * <p>Indicates whether the video artifact is enabled or disabled.</p>
   */
  State: ArtifactsState | string | undefined;

  /**
   * @public
   * <p>The MUX type of the video artifact configuration object.</p>
   */
  MuxType?: VideoMuxType | string;
}

/**
 * @public
 * <p>The configuration for the artifacts.</p>
 */
export interface ArtifactsConfiguration {
  /**
   * @public
   * <p>The configuration for the audio artifacts.</p>
   */
  Audio: AudioArtifactsConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the video artifacts.</p>
   */
  Video: VideoArtifactsConfiguration | undefined;

  /**
   * @public
   * <p>The configuration for the content artifacts.</p>
   */
  Content: ContentArtifactsConfiguration | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

/**
 * @public
 * <p>If the phone number action fails for one or more of the phone numbers in the request, a list of
 *             the phone numbers is returned, along with error codes and error messages.</p>
 */
export interface PhoneNumberError {
  /**
   * @public
   * <p>The phone number ID for which the action failed.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and
   *     error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>If true, associates the provided phone numbers with the provided Amazon Chime Voice Connector Group and removes any previously existing associations. If false, does not associate any phone numbers that have previously existing associations.</p>
   */
  ForceAssociate?: boolean;
}

/**
 * @public
 */
export interface AssociatePhoneNumbersWithVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface AssociatePhoneNumberWithUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The phone number, in E.164 format.</p>
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
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The sign-in delegate groups.</p>
   */
  SigninDelegateGroups: SigninDelegateGroup[] | undefined;
}

/**
 * @public
 */
export interface AssociateSigninDelegateGroupsWithAccountResponse {}

/**
 * @public
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
 */
export interface Attendee {
  /**
   * @public
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * @public
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

/**
 * @public
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>The membership information, including member ARNs, the channel ARN, and membership
 *          types.</p>
 */
export interface BatchChannelMemberships {
  /**
   * @public
   * <p>The identifier of the member who invited another member.</p>
   */
  InvitedBy?: Identity;

  /**
   * @public
   * <p>The membership types set for the channel users.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * @public
   * <p>The users successfully added to the request.</p>
   */
  Members?: Identity[];

  /**
   * @public
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn?: string;
}

/**
 * @public
 * <p>The Amazon Chime SDK attendee fields to create, used with the BatchCreateAttendee action.</p>
 */
export interface CreateAttendeeRequestItem {
  /**
   * @public
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface BatchCreateAttendeeRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The request containing the attendees to create.</p>
   */
  Attendees: CreateAttendeeRequestItem[] | undefined;
}

/**
 * @public
 * <p>The list of errors returned when errors are encountered during the BatchCreateAttendee and CreateAttendee actions. This includes external user IDs, error codes, and error messages.</p>
 */
export interface CreateAttendeeError {
  /**
   * @public
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchCreateAttendeeResponse {
  /**
   * @public
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * @public
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

/**
 * @public
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

/**
 * @public
 */
export interface BatchCreateChannelMembershipRequest {
  /**
   * @public
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * @public
   * <p>The ARNs of the members you want to add to the channel.</p>
   */
  MemberArns: string[] | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 */
export interface BatchCreateChannelMembershipError {
  /**
   * @public
   * <p>The ARN of the member that the service couldn't add.</p>
   */
  MemberArn?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipResponse {
  /**
   * @public
   * <p>The list of channel memberships in the response.</p>
   */
  BatchChannelMemberships?: BatchChannelMemberships;

  /**
   * @public
   * <p>If the action fails for one or more of the memberships in the request, a list of the
   *          memberships is returned, along with error codes and error messages.</p>
   */
  Errors?: BatchCreateChannelMembershipError[];
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
 * @public
 * <p>Membership details, such as member ID and member role.</p>
 */
export interface MembershipItem {
  /**
   * @public
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The member role.</p>
   */
  Role?: RoomMembershipRole | string;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The list of membership items.</p>
   */
  MembershipItemList: MembershipItem[] | undefined;
}

/**
 * @public
 * <p>The list of errors returned when a member action results in an error.</p>
 */
export interface MemberError {
  /**
   * @public
   * <p>The member ID.</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchCreateRoomMembershipResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the member IDs in the request, a list of the member IDs is returned, along with error codes and error messages.</p>
   */
  Errors?: MemberError[];
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberRequest {
  /**
   * @public
   * <p>List of phone number IDs.</p>
   */
  PhoneNumberIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeletePhoneNumberResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface BatchSuspendUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The request containing the user IDs to suspend.</p>
   */
  UserIdList: string[] | undefined;
}

/**
 * @public
 * <p>The list of errors returned when errors are encountered during the <a>BatchSuspendUser</a>, <a>BatchUnsuspendUser</a>, or
 *     <a>BatchUpdateUser</a> actions. This includes user IDs, error codes, and error messages.</p>
 */
export interface UserError {
  /**
   * @public
   * <p>The user ID for which the action failed.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode | string;

  /**
   * @public
   * <p>The error message.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchSuspendUserResponse {
  /**
   * @public
   * <p>If the <a>BatchSuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
}

/**
 * @public
 */
export interface BatchUnsuspendUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The request containing the user IDs to unsuspend.</p>
   */
  UserIdList: string[] | undefined;
}

/**
 * @public
 */
export interface BatchUnsuspendUserResponse {
  /**
   * @public
   * <p>If the <a>BatchUnsuspendUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
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
 * @public
 * <p>The phone number ID, product type, or calling name fields to update, used with the
 * <a>BatchUpdatePhoneNumber</a> and <a>UpdatePhoneNumber</a> actions.</p>
 */
export interface UpdatePhoneNumberRequestItem {
  /**
   * @public
   * <p>The phone number ID to update.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The product type to update.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * @public
   * <p>The outbound calling name to update.</p>
   */
  CallingName?: string;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberRequest {
  /**
   * @public
   * <p>The request containing the phone number IDs and product types or calling names to update.</p>
   */
  UpdatePhoneNumberRequestItems: UpdatePhoneNumberRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdatePhoneNumberResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
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
 * @public
 * <p>The user ID and user fields to update, used with the
 * <a>BatchUpdateUser</a> action.</p>
 */
export interface UpdateUserRequestItem {
  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The user license type.</p>
   */
  LicenseType?: License | string;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * @public
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;
}

/**
 * @public
 */
export interface BatchUpdateUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The request containing the user IDs and details to update.</p>
   */
  UpdateUserRequestItems: UpdateUserRequestItem[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateUserResponse {
  /**
   * @public
   * <p>If the <a>BatchUpdateUser</a> action fails for one or more of the user IDs in the
   *             request, a list of the user IDs is returned, along with error codes and error messages.</p>
   */
  UserErrors?: UserError[];
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
 * @public
 * <p>A resource that allows Enterprise account administrators to configure an interface to receive events from Amazon Chime.</p>
 */
export interface Bot {
  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * @public
   * <p>The unique ID for the bot user.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The bot display name.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The bot type.</p>
   */
  BotType?: BotType | string;

  /**
   * @public
   * <p>When true, the bot is stopped from running in your account.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The bot creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated bot timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The bot email address.</p>
   */
  BotEmail?: string;

  /**
   * @public
   * <p>The security token used to authenticate Amazon Chime with the outgoing event endpoint.</p>
   */
  SecurityToken?: string;
}

/**
 * @public
 * <p>The Amazon Chime Business Calling settings for the administrator's AWS account. Includes any
 *             Amazon S3 buckets designated for storing call detail records.</p>
 */
export interface BusinessCallingSettings {
  /**
   * @public
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
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
 * @public
 * <p>A suggested address.</p>
 */
export interface CandidateAddress {
  /**
   * @public
   * <p>The street information of a candidate address</p>
   */
  streetInfo?: string;

  /**
   * @public
   * <p>The numeric portion of a candidate address.</p>
   */
  streetNumber?: string;

  /**
   * @public
   * <p>The city of a candidate address.</p>
   */
  city?: string;

  /**
   * @public
   * <p>The state of a candidate address.</p>
   */
  state?: string;

  /**
   * @public
   * <p>The postal code of a candidate address.</p>
   */
  postalCode?: string;

  /**
   * @public
   * <p>The Zip + 4 or postal code + 4 of a candidate address.</p>
   */
  postalCodePlus4?: string;

  /**
   * @public
   * <p>The country of a candidate address.</p>
   */
  country?: string;
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
 * @public
 * <p>The details of a channel.</p>
 */
export interface Channel {
  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * @public
   * <p>The channel's privacy setting.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * @public
   * <p>The channel's metadata.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>AppInstanceUser</code> who created the channel.</p>
   */
  CreatedBy?: Identity;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceUser</code> created the channel.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a member sent the last message in the channel.</p>
   */
  LastMessageTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a channel was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>The details of a channel ban.</p>
 */
export interface ChannelBan {
  /**
   * @public
   * <p>The member being banned from the channel.</p>
   */
  Member?: Identity;

  /**
   * @public
   * <p>The ARN of the channel from which a member is being banned.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The time at which the ban was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The <code>AppInstanceUser</code> who created the ban.</p>
   */
  CreatedBy?: Identity;
}

/**
 * @public
 * <p>Summary of the details of a <code>ChannelBan</code>.</p>
 */
export interface ChannelBanSummary {
  /**
   * @public
   * <p>The member being banned from a channel.</p>
   */
  Member?: Identity;
}

/**
 * @public
 * <p>The details of a channel member.</p>
 */
export interface ChannelMembership {
  /**
   * @public
   * <p>The identifier of the member who invited another member.</p>
   */
  InvitedBy?: Identity;

  /**
   * @public
   * <p>The membership type set for the channel member.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * @public
   * <p>The data of the channel member.</p>
   */
  Member?: Identity;

  /**
   * @public
   * <p>The ARN of the member's channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The time at which the channel membership was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a channel membership was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>Summary of the details of a <code>Channel</code>.</p>
 */
export interface ChannelSummary {
  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * @public
   * <p>The privacy setting of the channel.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * @public
   * <p>The metadata of the channel.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The time at which the last message in a channel was sent.</p>
   */
  LastMessageTimestamp?: Date;
}

/**
 * @public
 * <p>Summary of the channel membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * @public
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;

  /**
   * @public
   * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}

/**
 * @public
 * <p>Summary of the details of a <code>ChannelMembership</code>.</p>
 */
export interface ChannelMembershipSummary {
  /**
   * @public
   * <p>A member's summary data.</p>
   */
  Member?: Identity;
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
 * @public
 * <p>The details of a message in a channel.</p>
 */
export interface ChannelMessage {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID of a message.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The message content.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The message metadata.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The message type.</p>
   */
  Type?: ChannelMessageType | string;

  /**
   * @public
   * <p>The time at which the message was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a message was edited.</p>
   */
  LastEditedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a message was updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The message sender.</p>
   */
  Sender?: Identity;

  /**
   * @public
   * <p>Hides the content of a message.</p>
   */
  Redacted?: boolean;

  /**
   * @public
   * <p>The persistence setting for a channel message.</p>
   */
  Persistence?: ChannelMessagePersistenceType | string;
}

/**
 * @public
 * <p>Summary of the messages in a <code>Channel</code>.</p>
 */
export interface ChannelMessageSummary {
  /**
   * @public
   * <p>The ID of the message.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The content of the message.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The metadata of the message.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The type of message.</p>
   */
  Type?: ChannelMessageType | string;

  /**
   * @public
   * <p>The time at which the message summary was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a message was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a message was last edited.</p>
   */
  LastEditedTimestamp?: Date;

  /**
   * @public
   * <p>The message sender.</p>
   */
  Sender?: Identity;

  /**
   * @public
   * <p>Indicates whether a message was redacted.</p>
   */
  Redacted?: boolean;
}

/**
 * @public
 * <p>Summary of the details of a moderated channel.</p>
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * @public
   * <p>Summary of the details of a <code>Channel</code>.</p>
   */
  ChannelSummary?: ChannelSummary;
}

/**
 * @public
 * <p>The details of a channel moderator.</p>
 */
export interface ChannelModerator {
  /**
   * @public
   * <p>The moderator's data.</p>
   */
  Moderator?: Identity;

  /**
   * @public
   * <p>The ARN of the moderator's channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The time at which the moderator was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The <code>AppInstanceUser</code> who created the moderator.</p>
   */
  CreatedBy?: Identity;
}

/**
 * @public
 * <p>Summary of the details of a <code>ChannelModerator</code>.</p>
 */
export interface ChannelModeratorSummary {
  /**
   * @public
   * <p>The data for a moderator.</p>
   */
  Moderator?: Identity;
}

/**
 * @public
 * <p>The video streams to capture for a specified media capture pipeline. The total number of video streams can't exceed 25.</p>
 */
export interface SelectedVideoStreams {
  /**
   * @public
   * <p>The attendee IDs of the streams selected for a media capture pipeline. </p>
   */
  AttendeeIds?: string[];

  /**
   * @public
   * <p>The external user IDs of the streams selected for a media capture pipeline.</p>
   */
  ExternalUserIds?: string[];
}

/**
 * @public
 * <p>Source configuration for a specified media capture pipeline.</p>
 */
export interface SourceConfiguration {
  /**
   * @public
   * <p>The selected video streams to capture for a specified media capture pipeline. The number of video streams can't exceed 25.</p>
   */
  SelectedVideoStreams?: SelectedVideoStreams;
}

/**
 * @public
 * <p>The configuration object of the Amazon Chime SDK meeting for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
 */
export interface ChimeSdkMeetingConfiguration {
  /**
   * @public
   * <p>The source configuration for a specified media capture pipeline.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>The configuration for the artifacts in an Amazon Chime SDK meeting.</p>
   */
  ArtifactsConfiguration?: ArtifactsConfiguration;
}

/**
 * @public
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
 * @public
 * <p>The retention settings that determine how long to retain conversation messages for an Amazon Chime Enterprise account.</p>
 */
export interface ConversationRetentionSettings {
  /**
   * @public
   * <p>The number of days for which to retain conversation messages.</p>
   */
  RetentionDays?: number;
}

/**
 * @public
 */
export interface CreateAccountRequest {
  /**
   * @public
   * <p>The name of the Amazon Chime account.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountResponse {
  /**
   * @public
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

/**
 * @public
 */
export interface CreateAppInstanceRequest {
  /**
   * @public
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Tags assigned to the <code>AppInstance</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAppInstanceResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminRequest {
  /**
   * @public
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminResponse {
  /**
   * @public
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceAdmin?: Identity;

  /**
   * @public
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

/**
 * @public
 */
export interface CreateAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The user ID of the <code>AppInstance</code>.</p>
   */
  AppInstanceUserId: string | undefined;

  /**
   * @public
   * <p>The user's name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAppInstanceUserResponse {
  /**
   * @public
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}

/**
 * @public
 */
export interface CreateAttendeeRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK external user ID. An idempotency token. Links the attendee to an identity managed by a builder application.</p>
   */
  ExternalUserId: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateAttendeeResponse {
  /**
   * @public
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot display name.</p>
   */
  DisplayName: string | undefined;

  /**
   * @public
   * <p>The domain of the Amazon Chime Enterprise account.</p>
   */
  Domain?: string;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * @public
   * <p>The bot details.</p>
   */
  Bot?: Bot;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The channel mode: <code>UNRESTRICTED</code> or <code>RESTRICTED</code>. Administrators,
   *          moderators, and channel members can add themselves and other members to unrestricted
   *          channels. Only administrators and moderators can add members to restricted channels.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * @public
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private
   *          channels aren't discoverable by users outside the channel. Public channels are discoverable
   *          by anyone in the <code>AppInstance</code>.</p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * @public
   * <p>The metadata of the creation request. Limited to 1KB and UTF-8.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The client token for the request. An <code>Idempotency</code> token.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

/**
 * @public
 */
export interface CreateChannelBanRequest {
  /**
   * @public
   * <p>The ARN of the ban request.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface CreateChannelBanResponse {
  /**
   * @public
   * <p>The ARN of the response to the ban request.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The <code>ChannelArn</code> and <code>BannedIdentity</code> of the member in the ban
   *          response.</p>
   */
  Member?: Identity;
}

/**
 * @public
 */
export interface CreateChannelMembershipRequest {
  /**
   * @public
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member you want to add to the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are always returned as part of <code>ListChannelMemberships</code>. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>. Otherwise hidden members are not returned. This is only supported
   *          by moderators.</p>
   */
  Type: ChannelMembershipType | string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface CreateChannelMembershipResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ARN and metadata of the member being added.</p>
   */
  Member?: Identity;
}

/**
 * @public
 */
export interface CreateChannelModeratorRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface CreateChannelModeratorResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ARNs of the channel and the moderator.</p>
   */
  ChannelModerator?: Identity;
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
   * @public
   * <p>Source type from which the media artifacts will be captured. A Chime SDK Meeting
   *             is the only supported source.</p>
   */
  SourceType: MediaPipelineSourceType | string | undefined;

  /**
   * @public
   * <p>ARN of the source from which the media artifacts are captured.</p>
   */
  SourceArn: string | undefined;

  /**
   * @public
   * <p>Destination type to which the media artifacts are saved. You must use an S3 bucket. </p>
   */
  SinkType: MediaPipelineSinkType | string | undefined;

  /**
   * @public
   * <p>The ARN of the sink type.</p>
   */
  SinkArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the client request. The token makes the API request idempotent. Use a different token for different media pipeline requests.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
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
 * @public
 * <p>A media capture pipeline object consisting of an ID, source type, source ARN, a sink type, a sink ARN, and a configuration object.</p>
 */
export interface MediaCapturePipeline {
  /**
   * @public
   * <p>The ID of a media capture pipeline.</p>
   */
  MediaPipelineId?: string;

  /**
   * @public
   * <p>Source type from which media artifacts are saved. You must use <code>ChimeMeeting</code>.</p>
   */
  SourceType?: MediaPipelineSourceType | string;

  /**
   * @public
   * <p>ARN of the source from which the media artifacts will be saved.</p>
   */
  SourceArn?: string;

  /**
   * @public
   * <p>The status of the media capture pipeline.</p>
   */
  Status?: MediaPipelineStatus | string;

  /**
   * @public
   * <p>Destination type to which the media artifacts are saved. You must use an S3 Bucket.</p>
   */
  SinkType?: MediaPipelineSinkType | string;

  /**
   * @public
   * <p>ARN of the destination to which the media artifacts are saved.</p>
   */
  SinkArn?: string;

  /**
   * @public
   * <p>The time at which the capture pipeline was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the capture pipeline was updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The configuration for a specified media capture pipeline. <code>SourceType</code> must be <code>ChimeSdkMeeting</code>.</p>
   */
  ChimeSdkMeetingConfiguration?: ChimeSdkMeetingConfiguration;
}

/**
 * @public
 */
export interface CreateMediaCapturePipelineResponse {
  /**
   * @public
   * <p>A media capture pipeline object, the ID, source type, source ARN, sink type, and  sink ARN of a media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

/**
 * @public
 * <p> The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
 *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N.
 *             Virginia) AWS Region (<code>us-east-1</code>). </p>
 */
export interface MeetingNotificationConfiguration {
  /**
   * @public
   * <p>The SNS topic ARN.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p>The SQS queue ARN.</p>
   */
  SqsQueueArn?: string;
}

/**
 * @public
 */
export interface CreateMeetingRequest {
  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * @public
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * @public
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
   */
  MediaRegion?: string;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration for resource targets to receive notifications when meeting and attendee events occur.</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;
}

/**
 * @public
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * @public
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * @public
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * @public
   * <p>The screen data URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   */
  ScreenDataUrl?: string;

  /**
   * @public
   * <p>The screen sharing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>.</p>
   *          </important>
   */
  ScreenSharingUrl?: string;

  /**
   * @public
   * <p>The screen viewing URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   */
  ScreenViewingUrl?: string;

  /**
   * @public
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * @public
   * <p>The turn control URL.</p>
   *          <important>
   *             <p>
   *                <b>This parameter is is no longer supported and no longer used by the Amazon Chime SDK.</b>
   *             </p>
   *          </important>
   */
  TurnControlUrl?: string;

  /**
   * @public
   * <p>The event ingestion URL to which you send client meeting events.</p>
   */
  EventIngestionUrl?: string;
}

/**
 * @public
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;

  /**
   * @public
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * @public
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * @public
   * <p>The Region in which you create the meeting. Available values: <code>af-south-1</code>, <code>ap-northeast-1</code>,
   *     <code>ap-northeast-2</code>, <code>ap-south-1</code>, <code>ap-southeast-1</code>, <code>ap-southeast-2</code>, <code>ca-central-1</code>,
   *     <code>eu-central-1</code>, <code>eu-north-1</code>, <code>eu-south-1</code>,
   *                 <code>eu-west-1</code>, <code>eu-west-2</code>, <code>eu-west-3</code>,
   *                 <code>sa-east-1</code>, <code>us-east-1</code>, <code>us-east-2</code>,
   *                 <code>us-west-1</code>, <code>us-west-2</code>.</p>
   */
  MediaRegion?: string;
}

/**
 * @public
 */
export interface CreateMeetingResponse {
  /**
   * @public
   * <p>
   * The meeting information, including the meeting ID and
   * <code>MediaPlacement</code>
   * .
   * </p>
   */
  Meeting?: Meeting;
}

/**
 * @public
 */
export interface CreateMeetingDialOutRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>Phone number used as the caller ID when the remote party receives a call.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * @public
   * <p>Phone number called when inviting someone to a meeting.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * @public
   * <p>Token used by the Amazon Chime SDK attendee. Call the <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_CreateAttendee.html">CreateAttendee</a> action to get a join token.</p>
   */
  JoinToken: string | undefined;
}

/**
 * @public
 */
export interface CreateMeetingDialOutResponse {
  /**
   * @public
   * <p>Unique ID that tracks API calls.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesRequest {
  /**
   * @public
   * <p>The unique identifier for the client request. Use a different token for different meetings.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The external meeting ID.</p>
   */
  ExternalMeetingId?: string;

  /**
   * @public
   * <p>Reserved.</p>
   */
  MeetingHostId?: string;

  /**
   * @public
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
   */
  MediaRegion?: string;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The resource target configurations for receiving Amazon Chime SDK meeting and attendee event
   *             notifications. The Amazon Chime SDK supports resource targets located in the US East (N. Virginia) AWS
   *             Region (us-east-1).</p>
   */
  NotificationsConfiguration?: MeetingNotificationConfiguration;

  /**
   * @public
   * <p>The request containing the attendees to create.</p>
   */
  Attendees?: CreateAttendeeRequestItem[];
}

/**
 * @public
 */
export interface CreateMeetingWithAttendeesResponse {
  /**
   * @public
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;

  /**
   * @public
   * <p>The attendee information, including attendees IDs and join tokens.</p>
   */
  Attendees?: Attendee[];

  /**
   * @public
   * <p>If the action fails for one or more of the attendees in the request, a list of the attendees is returned, along with error codes and error messages.</p>
   */
  Errors?: CreateAttendeeError[];
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderRequest {
  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType: PhoneNumberProductType | string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
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
 * @public
 * <p>A phone number for which an order has been placed.</p>
 */
export interface OrderedPhoneNumber {
  /**
   * @public
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * @public
   * <p>The phone number status.</p>
   */
  Status?: OrderedPhoneNumberStatus | string;
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
 * @public
 * <p>The details of a phone number order created for Amazon Chime.</p>
 */
export interface PhoneNumberOrder {
  /**
   * @public
   * <p>The phone number order ID.</p>
   */
  PhoneNumberOrderId?: string;

  /**
   * @public
   * <p>The phone number order product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * @public
   * <p>The status of the phone number order.</p>
   */
  Status?: PhoneNumberOrderStatus | string;

  /**
   * @public
   * <p>The ordered phone number details, such as the phone number in E.164 format and the phone
   *             number status.</p>
   */
  OrderedPhoneNumbers?: OrderedPhoneNumber[];

  /**
   * @public
   * <p>The phone number order creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated phone number order time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreatePhoneNumberOrderResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
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
 * @public
 * <p>The country and area code for a proxy phone number in a proxy phone session.</p>
 */
export interface GeoMatchParams {
  /**
   * @public
   * <p>The country.</p>
   */
  Country: string | undefined;

  /**
   * @public
   * <p>The area code.</p>
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
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The participant phone numbers.</p>
   */
  ParticipantPhoneNumbers: string[] | undefined;

  /**
   * @public
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * @public
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * @public
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * @public
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * @public
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 * <p>The phone number and proxy phone number for a participant in an Amazon Chime Voice Connector proxy session.</p>
 */
export interface Participant {
  /**
   * @public
   * <p>The participant's phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The participant's proxy phone number.</p>
   */
  ProxyPhoneNumber?: string;
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
 * @public
 * <p>The proxy session for an Amazon Chime Voice Connector.</p>
 */
export interface ProxySession {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId?: string;

  /**
   * @public
   * <p>The name of the proxy session.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The status of the proxy session.</p>
   */
  Status?: ProxySessionStatus | string;

  /**
   * @public
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;

  /**
   * @public
   * <p>The proxy session capabilities.</p>
   */
  Capabilities?: (Capability | string)[];

  /**
   * @public
   * <p>The created time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ended time stamp, in ISO 8601 format.</p>
   */
  EndedTimestamp?: Date;

  /**
   * @public
   * <p>The proxy session participants.</p>
   */
  Participants?: Participant[];

  /**
   * @public
   * <p>The preference for proxy phone number reuse, or stickiness, between the same participants across sessions.</p>
   */
  NumberSelectionBehavior?: NumberSelectionBehavior | string;

  /**
   * @public
   * <p>The preference for matching the country or area code of the proxy phone number with that of the first participant.</p>
   */
  GeoMatchLevel?: GeoMatchLevel | string;

  /**
   * @public
   * <p>The country and area code for the proxy phone number.</p>
   */
  GeoMatchParams?: GeoMatchParams;
}

/**
 * @public
 */
export interface CreateProxySessionResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The idempotency token for the request.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 * <p>The Amazon Chime chat room details.</p>
 */
export interface Room {
  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * @public
   * <p>The room name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The identifier of the room creator.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The room creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The room update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * @public
   * <p>The room details.</p>
   */
  Room?: Room;
}

/**
 * @public
 */
export interface CreateRoomMembershipRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;

  /**
   * @public
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
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
 * @public
 * <p>The member details, such as email address, name, member ID, and member type.</p>
 */
export interface Member {
  /**
   * @public
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId?: string;

  /**
   * @public
   * <p>The member type.</p>
   */
  MemberType?: MemberType | string;

  /**
   * @public
   * <p>The member email address.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The member name.</p>
   */
  FullName?: string;

  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;
}

/**
 * @public
 * <p>The room membership details.</p>
 */
export interface RoomMembership {
  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId?: string;

  /**
   * @public
   * <p>The member details, such as email address, name, member ID, and member type.</p>
   */
  Member?: Member;

  /**
   * @public
   * <p>The membership role.</p>
   */
  Role?: RoomMembershipRole | string;

  /**
   * @public
   * <p>The identifier of the user that invited the room member.</p>
   */
  InvitedBy?: string;

  /**
   * @public
   * <p>The room membership update timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateRoomMembershipResponse {
  /**
   * @public
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

/**
 * @public
 * <p>The endpoint assigned to the SIP media application.</p>
 */
export interface SipMediaApplicationEndpoint {
  /**
   * @public
   * <p>Valid Amazon Resource Name (ARN) of the Lambda function, version, or alias. The function must be created in the same AWS Region as the SIP media application.</p>
   */
  LambdaArn?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationRequest {
  /**
   * @public
   * <p>The AWS Region assigned to the SIP media application.</p>
   */
  AwsRegion: string | undefined;

  /**
   * @public
   * <p>The SIP media application name.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>List of endpoints (Lambda Amazon Resource Names) specified for the SIP media application. Currently, only one endpoint is supported.</p>
   */
  Endpoints: SipMediaApplicationEndpoint[] | undefined;
}

/**
 * @public
 * <p>The details of the SIP media application, including name and endpoints. An AWS account can have multiple SIP media applications.</p>
 */
export interface SipMediaApplication {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>The AWS Region in which the SIP media application is created.</p>
   */
  AwsRegion?: string;

  /**
   * @public
   * <p>The name of the SIP media application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>List of endpoints for SIP media application. Currently, only one endpoint per SIP media application is permitted.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];

  /**
   * @public
   * <p>The SIP media application creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The SIP media application updated timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationResponse {
  /**
   * @public
   * <p>The SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallRequest {
  /**
   * @public
   * <p>The phone number that a user calls from. This is a phone number in your Amazon Chime phone number inventory.</p>
   */
  FromPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The phone number that the service should call.</p>
   */
  ToPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The ID of the SIP media application.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * @public
   * <p>The SIP headers added to an outbound call leg.</p>
   */
  SipHeaders?: Record<string, string>;
}

/**
 * @public
 * <p>A <code>Call</code> instance for a SIP media application.</p>
 */
export interface SipMediaApplicationCall {
  /**
   * @public
   * <p>The transaction ID of a call.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface CreateSipMediaApplicationCallResponse {
  /**
   * @public
   * <p>The actual call.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

/**
 * @public
 * <p>Target SIP media application and other details, such as priority and AWS Region, to be
 *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
 */
export interface SipRuleTargetApplication {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId?: string;

  /**
   * @public
   * <p>Priority of the SIP media application in the target list.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The AWS Region of the target application.</p>
   */
  AwsRegion?: string;
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
   * @public
   * <p>The name of the SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or <code>ToPhoneNumber</code>.</p>
   */
  TriggerType: SipRuleTriggerType | string | undefined;

  /**
   * @public
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, the value can be the outbound
   *             host name of an Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, the value can be a customer-owned phone number in the
   *     E164 format. The <code>SipMediaApplication</code> specified in the <code>SipRule</code> is triggered if the request URI in an incoming SIP
   *     request matches the <code>RequestUriHostname</code>, or if the <code>To</code> header in the incoming SIP request matches the
   *     <code>ToPhoneNumber</code> value.</p>
   */
  TriggerValue: string | undefined;

  /**
   * @public
   * <p>Enables or disables a rule. You must disable rules before you can delete them.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used.</p>
   */
  TargetApplications: SipRuleTargetApplication[] | undefined;
}

/**
 * @public
 * <p>The SIP rule details, including name, triggers, and target applications. An AWS account can have multiple SIP rules.</p>
 */
export interface SipRule {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId?: string;

  /**
   * @public
   * <p>The name of the SIP rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Indicates whether the SIP rule is enabled or disabled. You must disable a rule before you can delete it.</p>
   */
  Disabled?: boolean;

  /**
   * @public
   * <p>The type of trigger assigned to the SIP rule in <code>TriggerValue</code>, currently <code>RequestUriHostname</code> or
   *         <code>ToPhoneNumber</code>.</p>
   */
  TriggerType?: SipRuleTriggerType | string;

  /**
   * @public
   * <p>If <code>TriggerType</code> is <code>RequestUriHostname</code>, then the value can be the
   *             outbound host name of the Amazon Chime Voice Connector. If <code>TriggerType</code> is
   *                 <code>ToPhoneNumber</code>, then the value can be a customer-owned phone number in
   *             E164 format. <code>SipRule</code> is triggered when a SIP rule requests host name or
   *                 <code>ToPhoneNumber</code> matches in the incoming SIP request.</p>
   */
  TriggerValue?: string;

  /**
   * @public
   * <p>Target SIP media application and other details, such as priority and AWS Region, to be
   *             specified in the SIP rule. Only one SIP rule per AWS Region can be provided.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];

  /**
   * @public
   * <p>The time at which the SIP rule was created, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the SIP rule was last updated, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface CreateSipRuleResponse {
  /**
   * @public
   * <p>Returns the SIP rule information, including the rule ID, triggers, and target applications.</p>
   */
  SipRule?: SipRule;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The user's email address.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType | string;
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
 * @public
 * <p>The user on the Amazon Chime account.</p>
 */
export interface User {
  /**
   * @public
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The primary email address of the user.</p>
   */
  PrimaryEmail?: string;

  /**
   * @public
   * <p>The primary phone number associated with the user.</p>
   */
  PrimaryProvisionedNumber?: string;

  /**
   * @public
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * @public
   * <p>The license type for the user.</p>
   */
  LicenseType?: License | string;

  /**
   * @public
   * <p>The user type.</p>
   */
  UserType?: UserType | string;

  /**
   * @public
   * <p>The user registration status.</p>
   */
  UserRegistrationStatus?: RegistrationStatus | string;

  /**
   * @public
   * <p>The user invite status.</p>
   */
  UserInvitationStatus?: InviteStatus | string;

  /**
   * @public
   * <p>Date and time when the user is registered, in ISO 8601 format.</p>
   */
  RegisteredOn?: Date;

  /**
   * @public
   * <p>Date and time when the user is invited to the Amazon Chime account, in ISO 8601 format.</p>
   */
  InvitedOn?: Date;

  /**
   * @public
   * <p>The Alexa for Business metadata.</p>
   */
  AlexaForBusinessMetadata?: AlexaForBusinessMetadata;

  /**
   * @public
   * <p>The user's personal meeting PIN.</p>
   */
  PersonalPIN?: string;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * @public
   * <p>The user on the Amazon Chime account.</p>
   */
  User?: User;
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
   * @public
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default value:
   * <code>us-east-1</code>
   * .
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * @public
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

/**
 * @public
 * <p>The Amazon Chime Voice Connector configuration, including outbound host name and encryption
 *             settings.</p>
 */
export interface VoiceConnector {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId?: string;

  /**
   * @public
   * <p>
   * The AWS Region in which the Amazon Chime Voice Connector is created. Default:
   * <code>us-east-1</code>.
   * </p>
   */
  AwsRegion?: VoiceConnectorAwsRegion | string;

  /**
   * @public
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The outbound host name for the Amazon Chime Voice Connector.</p>
   */
  OutboundHostName?: string;

  /**
   * @public
   * <p>Designates whether encryption is required for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption?: boolean;

  /**
   * @public
   * <p>The Amazon Chime Voice Connector creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated Amazon Chime Voice Connector timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ARN of the specified Amazon Chime Voice Connector.</p>
   */
  VoiceConnectorArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorResponse {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

/**
 * @public
 * <p>For Amazon Chime Voice Connector groups, the Amazon Chime Voice Connectors to which to route inbound calls. Includes priority configuration settings. Limit: 3
 * <code>VoiceConnectorItems</code>
 * per Amazon Chime Voice Connector group.</p>
 */
export interface VoiceConnectorItem {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The priority associated with the Amazon Chime Voice Connector, with 1 being the highest priority. Higher priority Amazon Chime Voice Connectors are attempted first.</p>
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime Voice Connectors to route inbound calls to.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];
}

/**
 * @public
 * <p>The Amazon Chime Voice Connector group configuration, including associated Amazon Chime Voice
 *             Connectors. You can include Amazon Chime Voice Connectors from different AWS Regions in
 *             your group. This creates a fault tolerant mechanism for fallback in case of availability
 *             events.</p>
 */
export interface VoiceConnectorGroup {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId?: string;

  /**
   * @public
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Chime Voice Connectors to which to route inbound calls.</p>
   */
  VoiceConnectorItems?: VoiceConnectorItem[];

  /**
   * @public
   * <p>The Amazon Chime Voice Connector group creation time stamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated Amazon Chime Voice Connector group time stamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The ARN of the specified Amazon Chime Voice Connector group.</p>
   */
  VoiceConnectorGroupArn?: string;
}

/**
 * @public
 */
export interface CreateVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

/**
 * @public
 * <p>The SIP credentials used to authenticate requests to your Amazon Chime Voice Connector.</p>
 */
export interface Credential {
  /**
   * @public
   * <p>The RFC2617 compliant user name associated with the SIP credentials, in US-ASCII
   *             format.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The RFC2617 compliant password associated with the SIP credentials, in US-ASCII format.</p>
   */
  Password?: string;
}

/**
 * @public
 */
export interface DeleteAccountRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteAppInstanceRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceAdminRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAttendeeRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DeleteChannelBanRequest {
  /**
   * @public
   * <p>The ARN of the channel from which the <code>AppInstanceUser</code> was banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> that you want to reinstate.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DeleteChannelMembershipRequest {
  /**
   * @public
   * <p>The ARN of the channel from which you want to remove the user.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DeleteChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the message being deleted.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DeleteChannelModeratorRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DeleteEventsConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMediaCapturePipelineRequest {
  /**
   * @public
   * <p>The ID of the media capture pipeline being deleted. </p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMeetingRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface DeletePhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProxySessionRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The chat room ID.</p>
   */
  RoomId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomMembershipRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * @public
   * <p>The member ID (user ID or bot ID).</p>
   */
  MemberId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipMediaApplicationRequest {
  /**
   * @public
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSipRuleRequest {
  /**
   * @public
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorEmergencyCallingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorOriginationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorProxyRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorStreamingConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVoiceConnectorTerminationCredentialsRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The RFC2617 compliant username associated with the SIP credentials, in US-ASCII format.</p>
   */
  Usernames: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceResponse {
  /**
   * @public
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the <code>AppInstance</code>. All
   *             timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminResponse {
  /**
   * @public
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the <code>AppInstance</code>, and the created and
   *             last-updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserResponse {
  /**
   * @public
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * @public
   * <p>The channel details.</p>
   */
  Channel?: Channel;
}

/**
 * @public
 */
export interface DescribeChannelBanRequest {
  /**
   * @public
   * <p>The ARN of the channel from which the user is banned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelBanResponse {
  /**
   * @public
   * <p>The details of the ban.</p>
   */
  ChannelBan?: ChannelBan;
}

/**
 * @public
 */
export interface DescribeChannelMembershipRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelMembershipResponse {
  /**
   * @public
   * <p>The details of the membership.</p>
   */
  ChannelMembership?: ChannelMembership;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the channel to which the user belongs.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the user in a channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * @public
   * <p>The channel to which a user belongs.</p>
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the moderated channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> in the moderated channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * @public
   * <p>The moderated channel.</p>
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary;
}

/**
 * @public
 */
export interface DescribeChannelModeratorRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface DescribeChannelModeratorResponse {
  /**
   * @public
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberFromUserRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The user ID.</p>
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
   * @public
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupRequest {
  /**
   * @public
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * @public
   * <p>List of phone numbers, in E.164 format.</p>
   */
  E164PhoneNumbers: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumbersFromVoiceConnectorGroupResponse {
  /**
   * @public
   * <p>If the action fails for one or more of the phone numbers in the request, a list of the phone numbers is returned, along with error codes and error messages.</p>
   */
  PhoneNumberErrors?: PhoneNumberError[];
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The sign-in delegate group names.</p>
   */
  GroupNames: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSigninDelegateGroupsFromAccountResponse {}

/**
 * @public
 * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details associated with an Amazon Chime Voice Connector's emergency calling configuration.</p>
 */
export interface DNISEmergencyCallingConfiguration {
  /**
   * @public
   * <p>The DNIS phone number to route emergency calls to, in E.164 format.</p>
   */
  EmergencyPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The DNIS phone number to route test emergency calls to, in E.164 format.</p>
   */
  TestPhoneNumber?: string;

  /**
   * @public
   * <p>The country from which emergency calls are allowed, in ISO 3166-1 alpha-2 format.</p>
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
 * @public
 * <p>The emergency calling configuration details associated with an Amazon Chime Voice Connector.</p>
 */
export interface EmergencyCallingConfiguration {
  /**
   * @public
   * <p>The Dialed Number Identification Service (DNIS) emergency calling configuration details.</p>
   */
  DNIS?: DNISEmergencyCallingConfiguration[];
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
 * @public
 * <p>Settings specific to the Amazon Transcribe Medical engine.</p>
 */
export interface EngineTranscribeMedicalSettings {
  /**
   * @public
   * <p>The language code specified for the Amazon Transcribe Medical engine.</p>
   */
  LanguageCode: TranscribeMedicalLanguageCode | string | undefined;

  /**
   * @public
   * <p>The specialty specified for the Amazon Transcribe Medical engine.</p>
   */
  Specialty: TranscribeMedicalSpecialty | string | undefined;

  /**
   * @public
   * <p>The type of transcription.</p>
   */
  Type: TranscribeMedicalType | string | undefined;

  /**
   * @public
   * <p>The name of the vocabulary passed to Amazon Transcribe Medical.</p>
   */
  VocabularyName?: string;

  /**
   * @public
   * <p>The AWS Region passed to Amazon Transcribe Medical. If you don't specify a Region, Amazon Chime uses the meeting's Region.</p>
   */
  Region?: TranscribeMedicalRegion | string;

  /**
   * @public
   * <p>Labels all personally identifiable information (PII) identified in your transcript.  If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   */
  ContentIdentificationType?: TranscribeMedicalContentIdentificationType | string;
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
 * @public
 * <p>Settings specific for Amazon Transcribe as the live transcription engine.</p>
 *          <p>If you specify an invalid combination of parameters, a <code>TranscriptFailed</code> event will be sent with the contents of the <code>BadRequestException</code> generated by Amazon
 *             Transcribe.  For more information on each parameter and which combinations are valid, refer to the
 *             <a href="https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html">StartStreamTranscription</a> API in the
 *             <i>Amazon Transcribe Developer Guide</i>.</p>
 */
export interface EngineTranscribeSettings {
  /**
   * @public
   * <p>Specify the language code that represents the language spoken.</p>
   *          <p>If you're unsure of the language spoken in your audio, consider using <code>IdentifyLanguage</code> to enable automatic language identification.</p>
   */
  LanguageCode?: TranscribeLanguageCode | string;

  /**
   * @public
   * <p>Specify how you want your vocabulary filter applied to your transcript.</p>
   *          <p> To replace words with <code>***</code>, choose <code>mask</code>.</p>
   *          <p>To delete words, choose <code>remove</code>.</p>
   *          <p>To flag words without changing them, choose <code>tag</code>.</p>
   */
  VocabularyFilterMethod?: TranscribeVocabularyFilterMethod | string;

  /**
   * @public
   * <p>Specify the name of the custom vocabulary filter that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive. </p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more vocabulary filters with your transcription, use the <code>VocabularyFilterNames</code> parameter instead.</p>
   */
  VocabularyFilterName?: string;

  /**
   * @public
   * <p>Specify the name of the custom vocabulary that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you include <code>IdentifyLanguage</code> and want to use one or more custom vocabularies with your transcription, use the <code>VocabularyNames</code> parameter instead.</p>
   */
  VocabularyName?: string;

  /**
   * @public
   * <p>The AWS Region in which to use Amazon Transcribe.</p>
   *          <p>If you don't specify a Region, then the <code>MediaRegion</code> parameter of the
   *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_meeting-chime_CreateMeeting.html">CreateMeeting.html</a> API will be used.  However, if Amazon Transcribe is not
   *             available in the <code>MediaRegion</code>, then a TranscriptFailed event is sent.</p>
   *          <p>Use <code>auto</code> to use Amazon Transcribe in a Region near the meeting’s <code>MediaRegion</code>.  For more information, refer to
   *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/transcription-options.html#choose-region">Choosing a transcription Region</a> in the
   *             <i>Amazon Chime SDK Developer Guide</i>.</p>
   */
  Region?: TranscribeRegion | string;

  /**
   * @public
   * <p>Enables partial result stabilization for your transcription. Partial result stabilization can reduce latency in your output, but may impact accuracy.</p>
   */
  EnablePartialResultsStabilization?: boolean;

  /**
   * @public
   * <p>Specify the level of stability to use when you enable partial results stabilization (<code>EnablePartialResultsStabilization</code>).</p>
   *          <p>Low stability provides the highest accuracy. High stability transcribes faster, but with slightly lower accuracy.</p>
   */
  PartialResultsStability?: TranscribePartialResultsStability | string;

  /**
   * @public
   * <p>Labels all personally identifiable information (PII) identified in your transcript.  If you don't include <code>PiiEntityTypes</code>, all PII is identified.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   */
  ContentIdentificationType?: TranscribeContentIdentificationType | string;

  /**
   * @public
   * <p>Content redaction is performed at the segment level. If you don't include <code>PiiEntityTypes</code>, all PII is redacted.</p>
   *          <p>You can’t set <code>ContentIdentificationType</code> and <code>ContentRedactionType</code>.</p>
   */
  ContentRedactionType?: TranscribeContentRedactionType | string;

  /**
   * @public
   * <p>Specify which types of personally identifiable information (PII) you want to redact in your transcript. You can include as many types as you'd like, or you can select <code>ALL</code>.</p>
   *          <p>Values must be comma-separated and can include: <code>ADDRESS</code>, <code>BANK_ACCOUNT_NUMBER</code>, <code>BANK_ROUTING</code>, <code>CREDIT_DEBIT_CVV</code>, <code>CREDIT_DEBIT_EXPIRY</code>
   *             <code>CREDIT_DEBIT_NUMBER</code>, <code>EMAIL</code>,<code>NAME</code>, <code>PHONE</code>,  <code>PIN</code>,
   *             <code>SSN</code>, or <code>ALL</code>.</p>
   *          <p>Note that if you include <code>PiiEntityTypes</code>, you must also include <code>ContentIdentificationType</code> or <code>ContentRedactionType</code>.</p>
   *          <p>If you include <code>ContentRedactionType</code> or <code>ContentIdentificationType</code>, but do not include <code>PiiEntityTypes</code>, all PII is redacted or identified.</p>
   */
  PiiEntityTypes?: string;

  /**
   * @public
   * <p>Specify the name of the custom language model that you want to use when processing your transcription. Note that language model names are case sensitive.</p>
   *          <p>The language of the specified language model must match the language code. If the languages don't match, the custom language model isn't applied. There are no errors or warnings associated
   *             with a language mismatch.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the custom language model must be available in Amazon Transcribe in each Region.</p>
   */
  LanguageModelName?: string;

  /**
   * @public
   * <p>Enables automatic language identification for your transcription.</p>
   *          <p>If you include <code>IdentifyLanguage</code>, you can optionally use <code>LanguageOptions</code> to include a list of language codes that you think may be present in your audio stream.
   *             Including language options can improve transcription accuracy.</p>
   *          <p>You can also use <code>PreferredLanguage</code> to include a preferred language. Doing so can help Amazon Transcribe identify the language faster.</p>
   *          <p>You must include either <code>LanguageCode</code> or <code>IdentifyLanguage</code>.</p>
   *          <p>Language identification can't be combined with custom language models or redaction.</p>
   */
  IdentifyLanguage?: boolean;

  /**
   * @public
   * <p>Specify two or more language codes that represent the languages you think may be present in your media; including more than five is not recommended. If you're unsure what languages
   *             are present, do not include this parameter.</p>
   *          <p>Including language options can improve the accuracy of language identification.</p>
   *          <p>If you include <code>LanguageOptions</code>, you must also include <code>IdentifyLanguage</code>.</p>
   *          <important>
   *             <p>You can only include one language dialect per language. For example, you cannot include <code>en-US</code> and <code>en-AU</code>.</p>
   *          </important>
   */
  LanguageOptions?: string;

  /**
   * @public
   * <p>Specify a preferred language from the subset of languages codes you specified in <code>LanguageOptions</code>.</p>
   *          <p>You can only use this parameter if you include <code>IdentifyLanguage</code> and <code>LanguageOptions</code>.</p>
   */
  PreferredLanguage?: TranscribeLanguageCode | string;

  /**
   * @public
   * <p>Specify the names of the custom vocabularies that you want to use when processing your transcription. Note that vocabulary names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary must be available in Amazon Transcribe in each Region.</p>
   *          <p>If you don't include <code>IdentifyLanguage</code> and want to use a custom vocabulary with your transcription, use the <code>VocabularyName</code> parameter instead.</p>
   */
  VocabularyNames?: string;

  /**
   * @public
   * <p>Specify the names of the custom vocabulary filters that you want to use when processing your transcription. Note that vocabulary filter names are case sensitive.</p>
   *          <p>If you use Amazon Transcribe in multiple Regions, the vocabulary filter must be available in Amazon Transcribe in each Region.</p>
   *          <p> If you're <i>not</i> including <code>IdentifyLanguage</code> and want to use a custom vocabulary filter with your transcription, use the <code>VocabularyFilterName</code>
   *             parameter instead.</p>
   */
  VocabularyFilterNames?: string;
}

/**
 * @public
 * <p>The configuration that allows a bot to receive outgoing events. Can be either an HTTPS endpoint or a Lambda function ARN.</p>
 */
export interface EventsConfiguration {
  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId?: string;

  /**
   * @public
   * <p>HTTPS endpoint that allows a bot to receive outgoing events.</p>
   */
  OutboundEventsHTTPSEndpoint?: string;

  /**
   * @public
   * <p>Lambda function ARN that allows a bot to receive outgoing events.</p>
   */
  LambdaFunctionArn?: string;
}

/**
 * @public
 */
export interface GetAccountRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountResponse {
  /**
   * @public
   * <p>The Amazon Chime account details.</p>
   */
  Account?: Account;
}

/**
 * @public
 */
export interface GetAccountSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;
}

/**
 * @public
 */
export interface GetAccountSettingsResponse {
  /**
   * @public
   * <p>The Amazon Chime account settings.</p>
   */
  AccountSettings?: AccountSettings;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * @public
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * @public
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface GetAppInstanceStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceStreamingConfigurationsResponse {
  /**
   * @public
   * <p>The streaming settings.</p>
   */
  AppInstanceStreamingConfigurations?: AppInstanceStreamingConfiguration[];
}

/**
 * @public
 */
export interface GetAttendeeRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId: string | undefined;
}

/**
 * @public
 */
export interface GetAttendeeResponse {
  /**
   * @public
   * <p>The Amazon Chime SDK attendee information.</p>
   */
  Attendee?: Attendee;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * @public
   * <p>The chat bot details.</p>
   */
  Bot?: Bot;
}

/**
 * @public
 */
export interface GetChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

/**
 * @public
 */
export interface GetChannelMessageResponse {
  /**
   * @public
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
}

/**
 * @public
 */
export interface GetEventsConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * @public
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;
}

/**
 * @public
 */
export interface GetEventsConfigurationResponse {
  /**
   * @public
   * <p>The events configuration details.</p>
   */
  EventsConfiguration?: EventsConfiguration;
}

/**
 * @public
 * <p>The Amazon Chime Voice Connector settings. Includes any Amazon S3 buckets designated for
 *             storing call detail records.</p>
 */
export interface VoiceConnectorSettings {
  /**
   * @public
   * <p>The Amazon S3 bucket designated for call detail record storage.</p>
   */
  CdrBucket?: string;
}

/**
 * @public
 */
export interface GetGlobalSettingsResponse {
  /**
   * @public
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * @public
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineRequest {
  /**
   * @public
   * <p>The ID of the pipeline that you want to get.</p>
   */
  MediaPipelineId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaCapturePipelineResponse {
  /**
   * @public
   * <p>The media capture pipeline object.</p>
   */
  MediaCapturePipeline?: MediaCapturePipeline;
}

/**
 * @public
 */
export interface GetMeetingRequest {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;
}

/**
 * @public
 */
export interface GetMeetingResponse {
  /**
   * @public
   * <p>The Amazon Chime SDK meeting information.</p>
   */
  Meeting?: Meeting;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointRequest {}

/**
 * @public
 * <p>The websocket endpoint used to connect to Amazon Chime SDK messaging.</p>
 */
export interface MessagingSessionEndpoint {
  /**
   * @public
   * <p>The endpoint to which you establish a websocket connection.</p>
   */
  Url?: string;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointResponse {
  /**
   * @public
   * <p>The endpoint returned in the response.</p>
   */
  Endpoint?: MessagingSessionEndpoint;
}

/**
 * @public
 */
export interface GetPhoneNumberRequest {
  /**
   * @public
   * <p>The phone number ID.</p>
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
 * @public
 * <p>The phone number associations, such as Amazon Chime account ID, Amazon Chime user ID, Amazon
 *             Chime Voice Connector ID, or Amazon Chime Voice Connector group ID.</p>
 */
export interface PhoneNumberAssociation {
  /**
   * @public
   * <p>Contains the ID for the entity specified in Name.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Defines the association with an Amazon Chime account ID, user ID, Amazon Chime Voice Connector
   *             ID, or Amazon Chime Voice Connector group ID.</p>
   */
  Name?: PhoneNumberAssociationName | string;

  /**
   * @public
   * <p>The timestamp of the phone number association, in ISO 8601 format.</p>
   */
  AssociatedTimestamp?: Date;
}

/**
 * @public
 * <p>The phone number capabilities for Amazon Chime Business Calling phone numbers, such as enabled
 *             inbound and outbound calling and text messaging.</p>
 */
export interface PhoneNumberCapabilities {
  /**
   * @public
   * <p>Allows or denies inbound calling for the specified phone number.</p>
   */
  InboundCall?: boolean;

  /**
   * @public
   * <p>Allows or denies outbound calling for the specified phone number.</p>
   */
  OutboundCall?: boolean;

  /**
   * @public
   * <p>Allows or denies inbound SMS messaging for the specified phone number.</p>
   */
  InboundSMS?: boolean;

  /**
   * @public
   * <p>Allows or denies outbound SMS messaging for the specified phone number.</p>
   */
  OutboundSMS?: boolean;

  /**
   * @public
   * <p>Allows or denies inbound MMS messaging for the specified phone number.</p>
   */
  InboundMMS?: boolean;

  /**
   * @public
   * <p>Allows or denies outbound MMS messaging for the specified phone number.</p>
   */
  OutboundMMS?: boolean;
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
 * @public
 * <p>A phone number used for Amazon Chime Business Calling or an Amazon Chime Voice
 *             Connector.</p>
 */
export interface PhoneNumber {
  /**
   * @public
   * <p>The phone number ID.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The phone number, in E.164 format.</p>
   */
  E164PhoneNumber?: string;

  /**
   * @public
   * <p>The phone number country. Format: ISO 3166-1 alpha-2.</p>
   */
  Country?: string;

  /**
   * @public
   * <p>The phone number type.</p>
   */
  Type?: PhoneNumberType | string;

  /**
   * @public
   * <p>The phone number product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * @public
   * <p>The phone number status.</p>
   */
  Status?: PhoneNumberStatus | string;

  /**
   * @public
   * <p>The phone number capabilities.</p>
   */
  Capabilities?: PhoneNumberCapabilities;

  /**
   * @public
   * <p>The phone number associations.</p>
   */
  Associations?: PhoneNumberAssociation[];

  /**
   * @public
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>The outbound calling name status.</p>
   */
  CallingNameStatus?: CallingNameStatus | string;

  /**
   * @public
   * <p>The phone number creation timestamp, in ISO 8601 format.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The updated phone number timestamp, in ISO 8601 format.</p>
   */
  UpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The deleted phone number timestamp, in ISO 8601 format.</p>
   */
  DeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface GetPhoneNumberResponse {
  /**
   * @public
   * <p>The phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderRequest {
  /**
   * @public
   * <p>The ID for the phone number order.</p>
   */
  PhoneNumberOrderId: string | undefined;
}

/**
 * @public
 */
export interface GetPhoneNumberOrderResponse {
  /**
   * @public
   * <p>The phone number order details.</p>
   */
  PhoneNumberOrder?: PhoneNumberOrder;
}

/**
 * @public
 */
export interface GetPhoneNumberSettingsResponse {
  /**
   * @public
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName?: string;

  /**
   * @public
   * <p>The updated outbound calling name timestamp, in ISO 8601 format.</p>
   */
  CallingNameUpdatedTimestamp?: Date;
}

/**
 * @public
 */
export interface GetProxySessionRequest {
  /**
   * @public
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * @public
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;
}

/**
 * @public
 */
export interface GetProxySessionResponse {
  /**
   * @public
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

/**
 * @public
 */
export interface GetRetentionSettingsRequest {
  /**
   * @public
   * <p>The Amazon Chime account ID.</p>
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
