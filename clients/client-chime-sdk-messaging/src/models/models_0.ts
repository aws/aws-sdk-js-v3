// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKMessagingServiceException as __BaseException } from "./ChimeSDKMessagingServiceException";

export enum AllowNotifications {
  ALL = "ALL",
  FILTERED = "FILTERED",
  NONE = "NONE",
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
   * <p>The time at which an <code>AppInstanceUser</code> last marked a channel as read.</p>
   */
  ReadMarkerTimestamp?: Date;

  /**
   * <p>The ID of the SubChannel that the <code>AppInstanceUser</code> is a member of.</p>
   */
  SubChannelId?: string;
}

export interface AssociateChannelFlowRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;
}

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

  /**
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;
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
   * <p>The <code>AppInstanceUserArn</code>s of the members you want to add to the channel.</p>
   */
  MemberArns: string[] | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request. </p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
}

/**
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 */
export interface BatchCreateChannelMembershipError {
  /**
   * <p>The <code>AppInstanceUserArn</code> of the member that the service couldn't add.</p>
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
 * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
 */
export interface ElasticChannelConfiguration {
  /**
   * <p>The maximum number of SubChannels that you want to allow in the elastic channel.</p>
   */
  MaximumSubChannels: number | undefined;

  /**
   * <p>The maximum number of members allowed in a SubChannel.</p>
   */
  TargetMembershipsPerSubChannel: number | undefined;

  /**
   * <p>The minimum allowed percentage of TargetMembershipsPerSubChannel users. Ceil of the calculated value is used in balancing members among SubChannels of the elastic channel.</p>
   */
  MinimumMembershipPercentage: number | undefined;
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
   * <p>The name of a channel.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of a channel.</p>
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

  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
}

/**
 * <p>Summary of details of a channel associated with channel flow.</p>
 */
export interface ChannelAssociatedWithFlowSummary {
  /**
   * <p>The name of the channel flow.</p>
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

export enum InvocationType {
  ASYNC = "ASYNC",
}

/**
 * <p>Stores metadata about a Lambda processor.</p>
 */
export interface LambdaConfiguration {
  /**
   * <p>The ARN of the Lambda message processing function.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Controls how the Lambda function is invoked.</p>
   */
  InvocationType: InvocationType | string | undefined;
}

/**
 * <p>A processor's metadata.</p>
 */
export interface ProcessorConfiguration {
  /**
   * <p>Indicates that the processor is of type Lambda.</p>
   */
  Lambda: LambdaConfiguration | undefined;
}

export enum FallbackAction {
  ABORT = "ABORT",
  CONTINUE = "CONTINUE",
}

/**
 * <p>The information about a processor in a channel flow.</p>
 */
export interface Processor {
  /**
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The information about the type of processor and its identifier.</p>
   */
  Configuration: ProcessorConfiguration | undefined;

  /**
   * <p>The sequence in which processors run. If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence.
   *          At this point, we support only 1 processor within a flow.</p>
   */
  ExecutionOrder: number | undefined;

  /**
   * <p>Determines whether to continue with message processing or stop it in cases where communication with a processor fails. If a processor has a fallback action of <code>ABORT</code> and
   *          communication with it fails, the processor sets the message status to <code>FAILED</code> and does not send the message to any recipients. Note that if the last processor in the channel flow sequence
   *          has a fallback action of <code>CONTINUE</code> and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.</p>
   */
  FallbackAction: FallbackAction | string | undefined;
}

/**
 * <p>The details of a channel flow.</p>
 */
export interface ChannelFlow {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors?: Processor[];

  /**
   * <p>The name of the channel flow.</p>
   */
  Name?: string;

  /**
   * <p>The time at which the channel flow was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which a channel flow was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * <p>A list of message attribute values.</p>
 */
export interface MessageAttributeValue {
  /**
   * <p>The strings in a message attribute value.</p>
   */
  StringValues?: string[];
}

export enum PushNotificationType {
  DEFAULT = "DEFAULT",
  VOIP = "VOIP",
}

/**
 * <p>The push notification configuration of the message.</p>
 */
export interface PushNotificationConfiguration {
  /**
   * <p>The title of the push notification.</p>
   */
  Title?: string;

  /**
   * <p>The body of the push notification.</p>
   */
  Body?: string;

  /**
   * <p>Enum value that indicates the type of the push notification for a message.
   *          <code>DEFAULT</code>: Normal mobile push notification.
   *          <code>VOIP</code>: VOIP mobile push notification.</p>
   */
  Type?: PushNotificationType | string;
}

/**
 * <p>Stores information about a callback.</p>
 */
export interface ChannelMessageCallback {
  /**
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The message content.</p>
   */
  Content?: string;

  /**
   * <p>The message metadata.</p>
   */
  Metadata?: string;

  /**
   * <p>The push notification configuration of the message.</p>
   */
  PushNotification?: PushNotificationConfiguration;

  /**
   * <p>The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>. </p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;
}

export interface ChannelFlowCallbackRequest {
  /**
   * <p>The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.</p>
   */
  CallbackId?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>When a processor determines that a message needs to be <code>DENIED</code>, pass this parameter with a value of true.</p>
   */
  DeleteResource?: boolean;

  /**
   * <p>Stores information about the processed message.</p>
   */
  ChannelMessage: ChannelMessageCallback | undefined;
}

export interface ChannelFlowCallbackResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The call back ID passed in the request.</p>
   */
  CallbackId?: string;
}

/**
 * <p>Summary of details of a channel flow.</p>
 */
export interface ChannelFlowSummary {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * <p>The name of the channel flow.</p>
   */
  Name?: string;

  /**
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors?: Processor[];
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

  /**
   * <p>The ID of the SubChannel that a user belongs to.</p>
   */
  SubChannelId?: string;
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
   * <p>The time at which the last persistent message in a channel was sent.</p>
   */
  LastMessageTimestamp?: Date;
}

/**
 * <p>Summary of the channel membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * <p>Returns the channel data for an <code>AppInstance</code>.</p>
   */
  ChannelSummary?: ChannelSummary;

  /**
   * <p>Returns the channel membership data for an <code>AppInstance</code>.</p>
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}

/**
 * <p>The channel membership preferences for push notification.</p>
 */
export interface PushNotificationPreferences {
  /**
   * <p>Enum value that indicates which push notifications to send to the requested member of a channel.
   *          <code>ALL</code> sends all push notifications, <code>NONE</code> sends no push notifications, <code>FILTERED</code> sends only filtered push notifications.
   *       </p>
   */
  AllowNotifications: AllowNotifications | string | undefined;

  /**
   * <p>The simple JSON object used to send a subset of a push notification to the requested member.</p>
   */
  FilterRule?: string;
}

/**
 * <p>The channel membership preferences for an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipPreferences {
  /**
   * <p>The push notification configuration of a message.</p>
   */
  PushNotifications?: PushNotificationPreferences;
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

export enum ChannelMessageStatus {
  DENIED = "DENIED",
  FAILED = "FAILED",
  PENDING = "PENDING",
  SENT = "SENT",
}

/**
 * <p>Stores information about a message status.</p>
 */
export interface ChannelMessageStatusStructure {
  /**
   * <p>The message status value.</p>
   */
  Value?: ChannelMessageStatus | string;

  /**
   * <p>Contains more details about the messasge status.</p>
   */
  Detail?: string;
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

  /**
   * <p>The status of the channel message.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * <p>The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;
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

  /**
   * <p>The message status. The status value is <code>SENT</code> for messages sent to a channel without a channel flow. For channels associated with channel flow, the value determines the
   *          processing stage.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * <p>The message attribues listed in a the summary of a channel message.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;
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
 * <p>A tag object containing a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>The key in a tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value in a tag.</p>
   */
  Value: string | undefined;
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
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the channel in the request.</p>
   */
  ChannelId?: string;

  /**
   * <p>The ARNs of the channel members in the request.</p>
   */
  MemberArns?: string[];

  /**
   * <p>The ARNs of the channel moderators in the request.</p>
   */
  ModeratorArns?: string[];

  /**
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million users, excluding moderators.</p>
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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

export interface CreateChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors: Processor[] | undefined;

  /**
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The client token for the request. An Idempotency token.</p>
   */
  ClientRequestToken: string | undefined;
}

export interface CreateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
}

export interface CreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member you want to add to the channel.</p>
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
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
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

  /**
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

export interface CreateChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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

export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;
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
  ChimeBearer: string | undefined;
}

export interface DeleteChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
}

export interface DeleteChannelMembershipRequest {
  /**
   * <p>The ARN of the channel from which you want to remove the user.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only for use by moderators.</p>
   *          </note>
   */
  SubChannelId?: string;
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
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when deleting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export interface DeleteChannelModeratorRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface DescribeChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface DescribeChannelBanResponse {
  /**
   * <p>The details of the ban.</p>
   */
  ChannelBan?: ChannelBan;
}

export interface DescribeChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
}

export interface DescribeChannelFlowResponse {
  /**
   * <p>The channel flow details.</p>
   */
  ChannelFlow?: ChannelFlow;
}

export interface DescribeChannelMembershipRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request. The response contains an <code>ElasticChannelConfiguration</code> object.</p>
   *          <note>
   *             <p>Only required to get a user’s SubChannel membership details.</p>
   *          </note>
   */
  SubChannelId?: string;
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
  ChimeBearer: string | undefined;
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
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface DescribeChannelModeratorResponse {
  /**
   * <p>The details of the channel moderator.</p>
   */
  ChannelModerator?: ChannelModerator;
}

export interface DisassociateChannelFlowRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface GetChannelMembershipPreferencesRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member retrieving the preferences.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserARN</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface GetChannelMembershipPreferencesResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The details of a user.</p>
   */
  Member?: Identity;

  /**
   * <p>The channel membership preferences for an <code>AppInstanceUser</code> .</p>
   */
  Preferences?: ChannelMembershipPreferences;
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
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export interface GetChannelMessageResponse {
  /**
   * <p>The details of and content in the message.</p>
   */
  ChannelMessage?: ChannelMessage;
}

export interface GetChannelMessageStatusRequest {
  /**
   * <p>The ARN of the channel</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting message status in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export interface GetChannelMessageStatusResponse {
  /**
   * <p>The message status and details.</p>
   */
  Status?: ChannelMessageStatusStructure;
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

export interface ListChannelBansRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of bans that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface ListChannelBansResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information for each requested ban.</p>
   */
  ChannelBans?: ChannelBanSummary[];
}

export interface ListChannelFlowsRequest {
  /**
   * <p>The ARN of the app instance.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of channel flows that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channel flows are returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelFlowsResponse {
  /**
   * <p>The information about each channel flow.</p>
   */
  ChannelFlows?: ChannelFlowSummary[];

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelMembershipsRequest {
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are returned as part of <code>ListChannelMemberships</code> if no type is specified. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>.</p>
   */
  Type?: ChannelMembershipType | string;

  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing a user's memberships in a particular sub-channel of an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export interface ListChannelMembershipsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipSummary[];

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>s</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The maximum number of users that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of channel memberships is
   *          reached.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListChannelMessagesRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The initial or starting time stamp for your requested messages.</p>
   */
  NotBefore?: Date;

  /**
   * <p>The final or ending time stamp for your requested messages.</p>
   */
  NotAfter?: Date;

  /**
   * <p>The maximum number of messages that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing the messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export interface ListChannelMessagesResponse {
  /**
   * <p>The ARN of the channel containing the requested messages.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information about, and content of, each requested message.</p>
   */
  ChannelMessages?: ChannelMessageSummary[];

  /**
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

export interface ListChannelModeratorsRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of moderators that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface ListChannelModeratorsResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The information about and names of each moderator.</p>
   */
  ChannelModerators?: ChannelModeratorSummary[];
}

export interface ListChannelsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   */
  Privacy?: ChannelPrivacy | string;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface ListChannelsResponse {
  /**
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   */
  NextToken?: string;
}

export interface ListChannelsAssociatedWithChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelsAssociatedWithChannelFlowResponse {
  /**
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelAssociatedWithFlowSummary[];

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the user in the moderated channel.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The maximum number of channels in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channels in the request.</p>
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[];

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;
}

export interface ListSubChannelsRequest {
  /**
   * <p>The ARN of elastic channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The maximum number of sub-channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * <p>Summary of the sub-channels associated with the elastic channel.</p>
 */
export interface SubChannelSummary {
  /**
   * <p>The unique ID of a SubChannel.</p>
   */
  SubChannelId?: string;

  /**
   * <p>The number of members in a SubChannel.</p>
   */
  MembershipCount?: number;
}

export interface ListSubChannelsResponse {
  /**
   * <p>The ARN of elastic channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The information about each sub-channel.</p>
   */
  SubChannels?: SubChannelSummary[];

  /**
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export interface PutChannelMembershipPreferencesRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member setting the preferences.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserARN</code>  of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The channel membership preferences of an <code>AppInstanceUser</code> .</p>
   */
  Preferences: ChannelMembershipPreferences | undefined;
}

export interface PutChannelMembershipPreferencesResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The details of a user.</p>
   */
  Member?: Identity;

  /**
   * <p>The ARN and metadata of the member being added.</p>
   */
  Preferences?: ChannelMembershipPreferences;
}

export interface RedactChannelMessageRequest {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;
}

export interface RedactChannelMessageResponse {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID of the message being redacted.</p>
   */
  MessageId?: string;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   *          <note>
   *             <p>Only required when redacting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

export enum SearchFieldKey {
  MEMBERS = "MEMBERS",
}

export enum SearchFieldOperator {
  EQUALS = "EQUALS",
  INCLUDES = "INCLUDES",
}

/**
 * <p>A <code>Field</code> of the channel that you want to search.</p>
 */
export interface SearchField {
  /**
   * <p>An <code>enum</code> value that indicates the key to search the channel on. <code>MEMBERS</code> allows you to search channels based on memberships. You can use it with the <code>EQUALS</code>
   *          operator to get channels whose memberships are equal to the specified values, and with the <code>INCLUDES</code>  operator to get channels whose memberships include the specified values.</p>
   */
  Key: SearchFieldKey | string | undefined;

  /**
   * <p>The values that you want to search for, a list of strings. The values must be <code>AppInstanceUserArns</code> specified as a list of strings.</p>
   *          <note>
   *             <p>This operation isn't supported for <code>AppInstanceUsers</code> with large number of memberships.</p>
   *          </note>
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used to compare field values, currently <code>EQUALS</code> or <code>INCLUDES</code>.  Use the <code>EQUALS</code> operator to find channels whose memberships equal the specified values.
   *          Use the <code>INCLUDES</code> operator to find channels whose memberships include the specified values.</p>
   */
  Operator: SearchFieldOperator | string | undefined;
}

export interface SearchChannelsRequest {
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer?: string;

  /**
   * <p>A list of the <code>Field</code> objects in the channel being searched.</p>
   */
  Fields: SearchField[] | undefined;

  /**
   * <p>The maximum number of channels that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of channels is reached.</p>
   */
  NextToken?: string;
}

export interface SearchChannelsResponse {
  /**
   * <p>A list of the channels in the request.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * <p>The token returned from previous API responses until the number of channels is reached.</p>
   */
  NextToken?: string;
}

export interface SendChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The content of the message.</p>
   */
  Content: string | undefined;

  /**
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   */
  Type: ChannelMessageType | string | undefined;

  /**
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   */
  Persistence: ChannelMessagePersistenceType | string | undefined;

  /**
   * <p>The optional metadata for each message.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>Idempotency</code> token for each client request.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The push notification configuration of the message.</p>
   */
  PushNotification?: PushNotificationConfiguration;

  /**
   * <p>The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;
}

export interface SendChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID string assigned to each message.</p>
   */
  MessageId?: string;

  /**
   * <p>The status of the channel message.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
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

export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * <p>The mode of the update request.</p>
   */
  Mode?: ChannelMode | string;

  /**
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

export interface UpdateChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>Information about the processor Lambda functions </p>
   */
  Processors: Processor[] | undefined;

  /**
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;
}

export interface UpdateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
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
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when updating messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
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

  /**
   * <p>The status of the message update.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;
}

export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

/**
 * @internal
 */
export const AppInstanceUserMembershipSummaryFilterSensitiveLog = (obj: AppInstanceUserMembershipSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateChannelFlowRequestFilterSensitiveLog = (obj: AssociateChannelFlowRequest): any => ({
  ...obj,
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
export const BatchChannelMembershipsFilterSensitiveLog = (obj: BatchChannelMemberships): any => ({
  ...obj,
  ...(obj.InvitedBy && { InvitedBy: IdentityFilterSensitiveLog(obj.InvitedBy) }),
  ...(obj.Members && { Members: obj.Members.map((item) => IdentityFilterSensitiveLog(item)) }),
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
export const ElasticChannelConfigurationFilterSensitiveLog = (obj: ElasticChannelConfiguration): any => ({
  ...obj,
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
export const ChannelAssociatedWithFlowSummaryFilterSensitiveLog = (obj: ChannelAssociatedWithFlowSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
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
export const LambdaConfigurationFilterSensitiveLog = (obj: LambdaConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessorConfigurationFilterSensitiveLog = (obj: ProcessorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessorFilterSensitiveLog = (obj: Processor): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelFlowFilterSensitiveLog = (obj: ChannelFlow): any => ({
  ...obj,
  ...(obj.Processors && { Processors: obj.Processors.map((item) => ProcessorFilterSensitiveLog(item)) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MessageAttributeValueFilterSensitiveLog = (obj: MessageAttributeValue): any => ({
  ...obj,
  ...(obj.StringValues && { StringValues: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PushNotificationConfigurationFilterSensitiveLog = (obj: PushNotificationConfiguration): any => ({
  ...obj,
  ...(obj.Title && { Title: SENSITIVE_STRING }),
  ...(obj.Body && { Body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelMessageCallbackFilterSensitiveLog = (obj: ChannelMessageCallback): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.PushNotification && {
    PushNotification: PushNotificationConfigurationFilterSensitiveLog(obj.PushNotification),
  }),
  ...(obj.MessageAttributes && {
    MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
      (acc: any, [key, value]: [string, MessageAttributeValue]) => (
        (acc[key] = MessageAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const ChannelFlowCallbackRequestFilterSensitiveLog = (obj: ChannelFlowCallbackRequest): any => ({
  ...obj,
  ...(obj.ChannelMessage && { ChannelMessage: ChannelMessageCallbackFilterSensitiveLog(obj.ChannelMessage) }),
});

/**
 * @internal
 */
export const ChannelFlowCallbackResponseFilterSensitiveLog = (obj: ChannelFlowCallbackResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelFlowSummaryFilterSensitiveLog = (obj: ChannelFlowSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Processors && { Processors: obj.Processors.map((item) => ProcessorFilterSensitiveLog(item)) }),
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
export const PushNotificationPreferencesFilterSensitiveLog = (obj: PushNotificationPreferences): any => ({
  ...obj,
  ...(obj.FilterRule && { FilterRule: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelMembershipPreferencesFilterSensitiveLog = (obj: ChannelMembershipPreferences): any => ({
  ...obj,
  ...(obj.PushNotifications && {
    PushNotifications: PushNotificationPreferencesFilterSensitiveLog(obj.PushNotifications),
  }),
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
export const ChannelMessageStatusStructureFilterSensitiveLog = (obj: ChannelMessageStatusStructure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChannelMessageFilterSensitiveLog = (obj: ChannelMessage): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Sender && { Sender: IdentityFilterSensitiveLog(obj.Sender) }),
  ...(obj.MessageAttributes && {
    MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
      (acc: any, [key, value]: [string, MessageAttributeValue]) => (
        (acc[key] = MessageAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const ChannelMessageSummaryFilterSensitiveLog = (obj: ChannelMessageSummary): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Sender && { Sender: IdentityFilterSensitiveLog(obj.Sender) }),
  ...(obj.MessageAttributes && {
    MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
      (acc: any, [key, value]: [string, MessageAttributeValue]) => (
        (acc[key] = MessageAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
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
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
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
  ...(obj.ChannelId && { ChannelId: SENSITIVE_STRING }),
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
export const CreateChannelFlowRequestFilterSensitiveLog = (obj: CreateChannelFlowRequest): any => ({
  ...obj,
  ...(obj.Processors && { Processors: obj.Processors.map((item) => ProcessorFilterSensitiveLog(item)) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChannelFlowResponseFilterSensitiveLog = (obj: CreateChannelFlowResponse): any => ({
  ...obj,
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
export const DeleteChannelFlowRequestFilterSensitiveLog = (obj: DeleteChannelFlowRequest): any => ({
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
export const DescribeChannelFlowRequestFilterSensitiveLog = (obj: DescribeChannelFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeChannelFlowResponseFilterSensitiveLog = (obj: DescribeChannelFlowResponse): any => ({
  ...obj,
  ...(obj.ChannelFlow && { ChannelFlow: ChannelFlowFilterSensitiveLog(obj.ChannelFlow) }),
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
export const DisassociateChannelFlowRequestFilterSensitiveLog = (obj: DisassociateChannelFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelMembershipPreferencesRequestFilterSensitiveLog = (
  obj: GetChannelMembershipPreferencesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelMembershipPreferencesResponseFilterSensitiveLog = (
  obj: GetChannelMembershipPreferencesResponse
): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
  ...(obj.Preferences && { Preferences: ChannelMembershipPreferencesFilterSensitiveLog(obj.Preferences) }),
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
export const GetChannelMessageStatusRequestFilterSensitiveLog = (obj: GetChannelMessageStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetChannelMessageStatusResponseFilterSensitiveLog = (obj: GetChannelMessageStatusResponse): any => ({
  ...obj,
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
export const ListChannelBansRequestFilterSensitiveLog = (obj: ListChannelBansRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelBansResponseFilterSensitiveLog = (obj: ListChannelBansResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelBans && { ChannelBans: obj.ChannelBans.map((item) => ChannelBanSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListChannelFlowsRequestFilterSensitiveLog = (obj: ListChannelFlowsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelFlowsResponseFilterSensitiveLog = (obj: ListChannelFlowsResponse): any => ({
  ...obj,
  ...(obj.ChannelFlows && { ChannelFlows: obj.ChannelFlows.map((item) => ChannelFlowSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsRequestFilterSensitiveLog = (obj: ListChannelMembershipsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsResponseFilterSensitiveLog = (obj: ListChannelMembershipsResponse): any => ({
  ...obj,
  ...(obj.ChannelMemberships && {
    ChannelMemberships: obj.ChannelMemberships.map((item) => ChannelMembershipSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsForAppInstanceUserRequestFilterSensitiveLog = (
  obj: ListChannelMembershipsForAppInstanceUserRequest
): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMembershipsForAppInstanceUserResponseFilterSensitiveLog = (
  obj: ListChannelMembershipsForAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.ChannelMemberships && {
    ChannelMemberships: obj.ChannelMemberships.map((item) =>
      ChannelMembershipForAppInstanceUserSummaryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMessagesRequestFilterSensitiveLog = (obj: ListChannelMessagesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelMessagesResponseFilterSensitiveLog = (obj: ListChannelMessagesResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelMessages && {
    ChannelMessages: obj.ChannelMessages.map((item) => ChannelMessageSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListChannelModeratorsRequestFilterSensitiveLog = (obj: ListChannelModeratorsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelModeratorsResponseFilterSensitiveLog = (obj: ListChannelModeratorsResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  ...(obj.ChannelModerators && {
    ChannelModerators: obj.ChannelModerators.map((item) => ChannelModeratorSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListChannelsRequestFilterSensitiveLog = (obj: ListChannelsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsResponseFilterSensitiveLog = (obj: ListChannelsResponse): any => ({
  ...obj,
  ...(obj.Channels && { Channels: obj.Channels.map((item) => ChannelSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsAssociatedWithChannelFlowRequestFilterSensitiveLog = (
  obj: ListChannelsAssociatedWithChannelFlowRequest
): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsAssociatedWithChannelFlowResponseFilterSensitiveLog = (
  obj: ListChannelsAssociatedWithChannelFlowResponse
): any => ({
  ...obj,
  ...(obj.Channels && {
    Channels: obj.Channels.map((item) => ChannelAssociatedWithFlowSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog = (
  obj: ListChannelsModeratedByAppInstanceUserRequest
): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog = (
  obj: ListChannelsModeratedByAppInstanceUserResponse
): any => ({
  ...obj,
  ...(obj.Channels && {
    Channels: obj.Channels.map((item) => ChannelModeratedByAppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSubChannelsRequestFilterSensitiveLog = (obj: ListSubChannelsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubChannelSummaryFilterSensitiveLog = (obj: SubChannelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSubChannelsResponseFilterSensitiveLog = (obj: ListSubChannelsResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
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
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutChannelMembershipPreferencesRequestFilterSensitiveLog = (
  obj: PutChannelMembershipPreferencesRequest
): any => ({
  ...obj,
  ...(obj.Preferences && { Preferences: ChannelMembershipPreferencesFilterSensitiveLog(obj.Preferences) }),
});

/**
 * @internal
 */
export const PutChannelMembershipPreferencesResponseFilterSensitiveLog = (
  obj: PutChannelMembershipPreferencesResponse
): any => ({
  ...obj,
  ...(obj.Member && { Member: IdentityFilterSensitiveLog(obj.Member) }),
  ...(obj.Preferences && { Preferences: ChannelMembershipPreferencesFilterSensitiveLog(obj.Preferences) }),
});

/**
 * @internal
 */
export const RedactChannelMessageRequestFilterSensitiveLog = (obj: RedactChannelMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedactChannelMessageResponseFilterSensitiveLog = (obj: RedactChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFieldFilterSensitiveLog = (obj: SearchField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchChannelsRequestFilterSensitiveLog = (obj: SearchChannelsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchChannelsResponseFilterSensitiveLog = (obj: SearchChannelsResponse): any => ({
  ...obj,
  ...(obj.Channels && { Channels: obj.Channels.map((item) => ChannelSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendChannelMessageRequestFilterSensitiveLog = (obj: SendChannelMessageRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.PushNotification && {
    PushNotification: PushNotificationConfigurationFilterSensitiveLog(obj.PushNotification),
  }),
  ...(obj.MessageAttributes && {
    MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
      (acc: any, [key, value]: [string, MessageAttributeValue]) => (
        (acc[key] = MessageAttributeValueFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const SendChannelMessageResponseFilterSensitiveLog = (obj: SendChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelRequestFilterSensitiveLog = (obj: UpdateChannelRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelResponseFilterSensitiveLog = (obj: UpdateChannelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelFlowRequestFilterSensitiveLog = (obj: UpdateChannelFlowRequest): any => ({
  ...obj,
  ...(obj.Processors && { Processors: obj.Processors.map((item) => ProcessorFilterSensitiveLog(item)) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelFlowResponseFilterSensitiveLog = (obj: UpdateChannelFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelMessageRequestFilterSensitiveLog = (obj: UpdateChannelMessageRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelMessageResponseFilterSensitiveLog = (obj: UpdateChannelMessageResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelReadMarkerRequestFilterSensitiveLog = (obj: UpdateChannelReadMarkerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateChannelReadMarkerResponseFilterSensitiveLog = (obj: UpdateChannelReadMarkerResponse): any => ({
  ...obj,
});
