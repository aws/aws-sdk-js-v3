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

export namespace AudioArtifactsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioArtifactsConfiguration): any => ({
    ...obj,
  });
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

export namespace ContentArtifactsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentArtifactsConfiguration): any => ({
    ...obj,
  });
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

export namespace VideoArtifactsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VideoArtifactsConfiguration): any => ({
    ...obj,
  });
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

export namespace ArtifactsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ArtifactsConfiguration): any => ({
    ...obj,
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

export namespace SelectedVideoStreams {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectedVideoStreams): any => ({
    ...obj,
    ...(obj.ExternalUserIds && { ExternalUserIds: SENSITIVE_STRING }),
  });
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

export namespace SourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConfiguration): any => ({
    ...obj,
    ...(obj.SelectedVideoStreams && {
      SelectedVideoStreams: SelectedVideoStreams.filterSensitiveLog(obj.SelectedVideoStreams),
    }),
  });
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

export namespace ChimeSdkMeetingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChimeSdkMeetingConfiguration): any => ({
    ...obj,
    ...(obj.SourceConfiguration && {
      SourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.SourceConfiguration),
    }),
  });
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

export namespace ConversationRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConversationRetentionSettings): any => ({
    ...obj,
  });
}

export enum MediaPipelineSinkType {
  S3Bucket = "S3Bucket",
}

export enum MediaPipelineSourceType {
  ChimeSdkMeeting = "ChimeSdkMeeting",
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

export namespace MediaCapturePipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaCapturePipeline): any => ({
    ...obj,
    ...(obj.SourceArn && { SourceArn: SENSITIVE_STRING }),
    ...(obj.SinkArn && { SinkArn: SENSITIVE_STRING }),
    ...(obj.ChimeSdkMeetingConfiguration && {
      ChimeSdkMeetingConfiguration: ChimeSdkMeetingConfiguration.filterSensitiveLog(obj.ChimeSdkMeetingConfiguration),
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

export enum VoiceConnectorAwsRegion {
  US_EAST_1 = "us-east-1",
  US_WEST_2 = "us-west-2",
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

export namespace VoiceConnector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnector): any => ({
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

export namespace VoiceConnectorGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceConnectorGroup): any => ({
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

export namespace EngineTranscribeMedicalSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineTranscribeMedicalSettings): any => ({
    ...obj,
  });
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

/**
 * <p>The logging configuration associated with an Amazon Chime Voice Connector. Specifies whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
 */
export interface LoggingConfiguration {
  /**
   * <p>Boolean that enables SIP message logs to CloudWatch logs.</p>
   */
  EnableSIPLogs?: boolean;

  /**
   * <p>Boolean that enables logging of detailed media metrics for Voice Connectors to CloudWatch logs.</p>
   */
  EnableMediaMetricLogs?: boolean;
}

export namespace LoggingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingConfiguration): any => ({
    ...obj,
  });
}

export enum OriginationRouteProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>Origination routes define call distribution properties for your SIP hosts to receive inbound
 *             calls using your Amazon Chime Voice Connector. Limit: Ten origination routes for each
 *             Amazon Chime Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface OriginationRoute {
  /**
   * <p>The FQDN or IP address to contact for origination traffic.</p>
   */
  Host?: string;

  /**
   * <p>The designated origination route port. Defaults to 5060.</p>
   */
  Port?: number;

  /**
   * <p>The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.</p>
   */
  Protocol?: OriginationRouteProtocol | string;

  /**
   * <p>The priority associated with the host, with 1 being the highest priority. Higher priority
   *             hosts are attempted first.</p>
   */
  Priority?: number;

  /**
   * <p>The weight associated with the host. If hosts are equal in priority, calls are redistributed among
   *             them based on their relative weight.</p>
   */
  Weight?: number;
}

export namespace OriginationRoute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OriginationRoute): any => ({
    ...obj,
  });
}

/**
 * <p>Origination settings enable your SIP hosts to receive inbound calls using your Amazon Chime
 *             Voice Connector.</p>
 *          <note>
 *             <p>The parameters listed below are not required, but you must use at least one. </p>
 *          </note>
 */
export interface Origination {
  /**
   * <p>The call distribution properties defined for your SIP hosts. Valid range: Minimum value of 1.
   *     Maximum value of 20. This parameter is not required, but you must specify this parameter or <code>Disabled</code>.</p>
   */
  Routes?: OriginationRoute[];

  /**
   * <p>When origination settings are disabled, inbound calls are not enabled for your Amazon Chime
   *             Voice Connector. This parameter is not required, but you must specify this parameter or <code>Routes</code>.</p>
   */
  Disabled?: boolean;
}

export namespace Origination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Origination): any => ({
    ...obj,
  });
}

/**
 * <p>The proxy configuration for an Amazon Chime Voice Connector.</p>
 */
export interface Proxy {
  /**
   * <p>The default number of minutes allowed for proxy sessions.</p>
   */
  DefaultSessionExpiryMinutes?: number;

  /**
   * <p>When true, stops proxy sessions from being created on the specified Amazon Chime Voice Connector.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The phone number to route calls to after a proxy session expires.</p>
   */
  FallBackPhoneNumber?: string;

  /**
   * <p>The countries for proxy phone numbers to be selected from.</p>
   */
  PhoneNumberCountries?: string[];
}

export namespace Proxy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Proxy): any => ({
    ...obj,
    ...(obj.FallBackPhoneNumber && { FallBackPhoneNumber: SENSITIVE_STRING }),
  });
}

export enum NotificationTarget {
  EventBridge = "EventBridge",
  SNS = "SNS",
  SQS = "SQS",
}

/**
 * <p>The targeted recipient for a streaming configuration notification.</p>
 */
export interface StreamingNotificationTarget {
  /**
   * <p>The streaming notification target.</p>
   */
  NotificationTarget: NotificationTarget | string | undefined;
}

export namespace StreamingNotificationTarget {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingNotificationTarget): any => ({
    ...obj,
  });
}

/**
 * <p>The streaming configuration associated with an Amazon Chime Voice Connector. Specifies whether
 *             media streaming is enabled for sending to Amazon Kinesis, and shows the retention period
 *             for the Amazon Kinesis data, in hours.</p>
 */
export interface StreamingConfiguration {
  /**
   * <p>The retention period, in hours, for the Amazon Kinesis data.</p>
   */
  DataRetentionInHours: number | undefined;

  /**
   * <p>When true, media streaming to Amazon Kinesis is turned off.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The streaming notification targets.</p>
   */
  StreamingNotificationTargets?: StreamingNotificationTarget[];
}

export namespace StreamingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Termination settings enable your SIP hosts to make outbound calls using your Amazon Chime
 *             Voice Connector.</p>
 */
export interface Termination {
  /**
   * <p>The limit on calls per second. Max value based on account service quota. Default value of
   *             1.</p>
   */
  CpsLimit?: number;

  /**
   * <p>The default caller ID phone number.</p>
   */
  DefaultPhoneNumber?: string;

  /**
   * <p>The countries to which calls are allowed, in ISO 3166-1 alpha-2 format. Required.</p>
   */
  CallingRegions?: string[];

  /**
   * <p>The IP addresses allowed to make calls, in CIDR format. Required.</p>
   */
  CidrAllowedList?: string[];

  /**
   * <p>When termination settings are disabled, outbound calls can not be made.</p>
   */
  Disabled?: boolean;
}

export namespace Termination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Termination): any => ({
    ...obj,
    ...(obj.DefaultPhoneNumber && { DefaultPhoneNumber: SENSITIVE_STRING }),
  });
}

/**
 * <p>The termination health details, including the source IP address and timestamp of the last
 *             successful SIP <code>OPTIONS</code> message from your SIP infrastructure.</p>
 */
export interface TerminationHealth {
  /**
   * <p>The timestamp, in ISO 8601 format.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The source IP address.</p>
   */
  Source?: string;
}

export namespace TerminationHealth {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TerminationHealth): any => ({
    ...obj,
  });
}

/**
 * <p>Invitation object returned after emailing users to invite them to join the Amazon Chime
 *                 <code>Team</code> account.</p>
 */
export interface Invite {
  /**
   * <p>The invite ID.</p>
   */
  InviteId?: string;

  /**
   * <p>The status of the invite.</p>
   */
  Status?: InviteStatus | string;

  /**
   * <p>The email address to which the invite is sent.</p>
   */
  EmailAddress?: string;

  /**
   * <p>The status of the invite email.</p>
   */
  EmailStatus?: EmailStatus | string;
}

export namespace Invite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Invite): any => ({
    ...obj,
    ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  });
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>The phone number country.</p>
 */
export interface PhoneNumberCountry {
  /**
   * <p>The phone number country code. Format: ISO 3166-1 alpha-2.</p>
   */
  CountryCode?: string;

  /**
   * <p>The supported phone number types. </p>
   */
  SupportedPhoneNumberTypes?: (PhoneNumberType | string)[];
}

export namespace PhoneNumberCountry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberCountry): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the current transcription operation. Must contain <code>EngineTranscribeSettings</code> or <code>EngineTranscribeMedicalSettings</code>.</p>
 */
export interface TranscriptionConfiguration {
  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe.</p>
   */
  EngineTranscribeSettings?: EngineTranscribeSettings;

  /**
   * <p>The transcription configuration settings passed to Amazon Transcribe Medical.</p>
   */
  EngineTranscribeMedicalSettings?: EngineTranscribeMedicalSettings;
}

export namespace TranscriptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptionConfiguration): any => ({
    ...obj,
  });
}

export interface UntagMeetingRequest {
  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagMeetingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagMeetingRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.ResourceARN && { ResourceARN: SENSITIVE_STRING }),
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
}

export interface UpdateAccountRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The new name for the specified Amazon Chime account.</p>
   */
  Name?: string;

  /**
   * <p>The default license applied when you add users to an Amazon Chime account.</p>
   */
  DefaultLicense?: License | string;
}

export namespace UpdateAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountResponse {
  /**
   * <p>The updated Amazon Chime account details.</p>
   */
  Account?: Account;
}

export namespace UpdateAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The Amazon Chime account settings to update.</p>
   */
  AccountSettings: AccountSettings | undefined;
}

export namespace UpdateAccountSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccountSettingsResponse {}

export namespace UpdateAccountSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccountSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata that you want to change.</p>
   */
  Metadata?: string;
}

export namespace UpdateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>. </p>
   */
  AppInstanceArn?: string;
}

export namespace UpdateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}

export namespace UpdateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace UpdateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserResponse): any => ({
    ...obj,
  });
}

export interface UpdateBotRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The bot ID.</p>
   */
  BotId: string | undefined;

  /**
   * <p>When true, stops the specified bot from running in your account.</p>
   */
  Disabled?: boolean;
}

export namespace UpdateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotRequest): any => ({
    ...obj,
  });
}

export interface UpdateBotResponse {
  /**
   * <p>The updated bot details.</p>
   */
  Bot?: Bot;
}

export namespace UpdateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotResponse): any => ({
    ...obj,
    ...(obj.Bot && { Bot: Bot.filterSensitiveLog(obj.Bot) }),
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name: string | undefined;

  /**
   * <p>The mode of the update request.</p>
   */
  Mode: ChannelMode | string | undefined;

  /**
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace UpdateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The content of the message being updated.</p>
   */
  Content?: string;

  /**
   * <p>The metadata of the message being updated.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace UpdateChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelMessageRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID string of the message being updated.</p>
   */
  MessageId?: string;
}

export namespace UpdateChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelMessageResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer?: string;
}

export namespace UpdateChannelReadMarkerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelReadMarkerRequest): any => ({
    ...obj,
  });
}

export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export namespace UpdateChannelReadMarkerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelReadMarkerResponse): any => ({
    ...obj,
  });
}

export interface UpdateGlobalSettingsRequest {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: BusinessCallingSettings;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: VoiceConnectorSettings;
}

export namespace UpdateGlobalSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGlobalSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdatePhoneNumberRequest {
  /**
   * <p>The phone number ID.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The product type.</p>
   */
  ProductType?: PhoneNumberProductType | string;

  /**
   * <p>The outbound calling name associated with the phone number.</p>
   */
  CallingName?: string;
}

export namespace UpdatePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface UpdatePhoneNumberResponse {
  /**
   * <p>The updated phone number details.</p>
   */
  PhoneNumber?: PhoneNumber;
}

export namespace UpdatePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
    ...obj,
    ...(obj.PhoneNumber && { PhoneNumber: PhoneNumber.filterSensitiveLog(obj.PhoneNumber) }),
  });
}

export interface UpdatePhoneNumberSettingsRequest {
  /**
   * <p>The default outbound calling name for the account.</p>
   */
  CallingName: string | undefined;
}

export namespace UpdatePhoneNumberSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberSettingsRequest): any => ({
    ...obj,
    ...(obj.CallingName && { CallingName: SENSITIVE_STRING }),
  });
}

export interface UpdateProxySessionRequest {
  /**
   * <p>The Amazon Chime voice connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The proxy session ID.</p>
   */
  ProxySessionId: string | undefined;

  /**
   * <p>The proxy session capabilities.</p>
   */
  Capabilities: (Capability | string)[] | undefined;

  /**
   * <p>The number of minutes allowed for the proxy session.</p>
   */
  ExpiryMinutes?: number;
}

export namespace UpdateProxySessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProxySessionRequest): any => ({
    ...obj,
  });
}

export interface UpdateProxySessionResponse {
  /**
   * <p>The proxy session details.</p>
   */
  ProxySession?: ProxySession;
}

export namespace UpdateProxySessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProxySessionResponse): any => ({
    ...obj,
    ...(obj.ProxySession && { ProxySession: ProxySession.filterSensitiveLog(obj.ProxySession) }),
  });
}

export interface UpdateRoomRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The room name.</p>
   */
  Name?: string;
}

export namespace UpdateRoomRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface UpdateRoomResponse {
  /**
   * <p>The room details.</p>
   */
  Room?: Room;
}

export namespace UpdateRoomResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomResponse): any => ({
    ...obj,
    ...(obj.Room && { Room: Room.filterSensitiveLog(obj.Room) }),
  });
}

export interface UpdateRoomMembershipRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The room ID.</p>
   */
  RoomId: string | undefined;

  /**
   * <p>The member ID.</p>
   */
  MemberId: string | undefined;

  /**
   * <p>The role of the member.</p>
   */
  Role?: RoomMembershipRole | string;
}

export namespace UpdateRoomMembershipRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomMembershipRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoomMembershipResponse {
  /**
   * <p>The room membership details.</p>
   */
  RoomMembership?: RoomMembership;
}

export namespace UpdateRoomMembershipResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoomMembershipResponse): any => ({
    ...obj,
    ...(obj.RoomMembership && { RoomMembership: RoomMembership.filterSensitiveLog(obj.RoomMembership) }),
  });
}

export interface UpdateSipMediaApplicationRequest {
  /**
   * <p>The SIP media application ID.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The new name for the specified SIP media application.</p>
   */
  Name?: string;

  /**
   * <p>The new set of endpoints for the specified SIP media application.</p>
   */
  Endpoints?: SipMediaApplicationEndpoint[];
}

export namespace UpdateSipMediaApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationRequest): any => ({
    ...obj,
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map((item) => SipMediaApplicationEndpoint.filterSensitiveLog(item)),
    }),
  });
}

export interface UpdateSipMediaApplicationResponse {
  /**
   * <p>The updated SIP media application details.</p>
   */
  SipMediaApplication?: SipMediaApplication;
}

export namespace UpdateSipMediaApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationResponse): any => ({
    ...obj,
    ...(obj.SipMediaApplication && {
      SipMediaApplication: SipMediaApplication.filterSensitiveLog(obj.SipMediaApplication),
    }),
  });
}

export interface UpdateSipMediaApplicationCallRequest {
  /**
   * <p>The ID of the SIP media application handling the call.</p>
   */
  SipMediaApplicationId: string | undefined;

  /**
   * <p>The ID of the call transaction.</p>
   */
  TransactionId: string | undefined;

  /**
   * <p>Arguments made available to the Lambda function as part of the <code>CALL_UPDATE_REQUESTED</code> event. Can contain 0-20 key-value pairs.</p>
   */
  Arguments: Record<string, string> | undefined;
}

export namespace UpdateSipMediaApplicationCallRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationCallRequest): any => ({
    ...obj,
    ...(obj.Arguments && { Arguments: SENSITIVE_STRING }),
  });
}

export interface UpdateSipMediaApplicationCallResponse {
  /**
   * <p>A <code>Call</code> instance for a SIP media application.</p>
   */
  SipMediaApplicationCall?: SipMediaApplicationCall;
}

export namespace UpdateSipMediaApplicationCallResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipMediaApplicationCallResponse): any => ({
    ...obj,
  });
}

export interface UpdateSipRuleRequest {
  /**
   * <p>The SIP rule ID.</p>
   */
  SipRuleId: string | undefined;

  /**
   * <p>The new name for the specified SIP rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new value specified to indicate whether the rule is disabled.</p>
   */
  Disabled?: boolean;

  /**
   * <p>The new value of the list of target applications.</p>
   */
  TargetApplications?: SipRuleTargetApplication[];
}

export namespace UpdateSipRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateSipRuleResponse {
  /**
   * <p>Updated SIP rule details.</p>
   */
  SipRule?: SipRule;
}

export namespace UpdateSipRuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSipRuleResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user license type to update. This must be a supported license type for the Amazon Chime
   *             account that the user belongs to.</p>
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

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
    ...(obj.AlexaForBusinessMetadata && {
      AlexaForBusinessMetadata: AlexaForBusinessMetadata.filterSensitiveLog(obj.AlexaForBusinessMetadata),
    }),
  });
}

export interface UpdateUserResponse {
  /**
   * <p>The updated user details.</p>
   */
  User?: User;
}

export namespace UpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: User.filterSensitiveLog(obj.User) }),
  });
}

export interface UpdateUserSettingsRequest {
  /**
   * <p>The Amazon Chime account ID.</p>
   */
  AccountId: string | undefined;

  /**
   * <p>The user ID.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The user settings to update.</p>
   */
  UserSettings: UserSettings | undefined;
}

export namespace UpdateUserSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSettingsRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorRequest {
  /**
   * <p>The Amazon Chime Voice Connector ID.</p>
   */
  VoiceConnectorId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector.</p>
   */
  Name: string | undefined;

  /**
   * <p>When enabled, requires encryption for the Amazon Chime Voice Connector.</p>
   */
  RequireEncryption: boolean | undefined;
}

export namespace UpdateVoiceConnectorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: VoiceConnector;
}

export namespace UpdateVoiceConnectorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorResponse): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorGroupRequest {
  /**
   * <p>The Amazon Chime Voice Connector group ID.</p>
   */
  VoiceConnectorGroupId: string | undefined;

  /**
   * <p>The name of the Amazon Chime Voice Connector group.</p>
   */
  Name: string | undefined;

  /**
   * <p>The <code>VoiceConnectorItems</code> to associate with the group.</p>
   */
  VoiceConnectorItems: VoiceConnectorItem[] | undefined;
}

export namespace UpdateVoiceConnectorGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateVoiceConnectorGroupResponse {
  /**
   * <p>The updated Amazon Chime Voice Connector group details.</p>
   */
  VoiceConnectorGroup?: VoiceConnectorGroup;
}

export namespace UpdateVoiceConnectorGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateVoiceConnectorGroupResponse): any => ({
    ...obj,
  });
}
