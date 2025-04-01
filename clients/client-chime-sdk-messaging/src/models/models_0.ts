// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeSDKMessagingServiceException as __BaseException } from "./ChimeSDKMessagingServiceException";

/**
 * @public
 * @enum
 */
export const AllowNotifications = {
  ALL: "ALL",
  FILTERED: "FILTERED",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AllowNotifications = (typeof AllowNotifications)[keyof typeof AllowNotifications];

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
   * <p>The time at which an <code>AppInstanceUser</code> last marked a channel as read.</p>
   * @public
   */
  ReadMarkerTimestamp?: Date | undefined;

  /**
   * <p>The ID of the SubChannel that the <code>AppInstanceUser</code> is a member of.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateChannelFlowRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

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
 * <p>The details of a user or bot.</p>
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
   * <p>The membership types set for the channel members.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The users successfully added to the request.</p>
   * @public
   */
  Members?: Identity[] | undefined;

  /**
   * <p>The ARN of the channel to which you're adding members.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID of the SubChannel.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipRequest {
  /**
   * <p>The ARN of the channel to which you're adding users or bots.</p>
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
   * <p>The ARNs of the members you want to add to the channel. Only <code>AppInstanceUsers</code> and
   *          <code>AppInstanceBots</code> can be added as a channel member.</p>
   * @public
   */
  MemberArns: string[] | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request. </p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 * @public
 */
export interface BatchCreateChannelMembershipError {
  /**
   * <p>The <code>AppInstanceUserArn</code> of the member that the service couldn't add.</p>
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
 * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
 * @public
 */
export interface ElasticChannelConfiguration {
  /**
   * <p>The maximum number of SubChannels that you want to allow in the elastic channel.</p>
   * @public
   */
  MaximumSubChannels: number | undefined;

  /**
   * <p>The maximum number of members allowed in a SubChannel.</p>
   * @public
   */
  TargetMembershipsPerSubChannel: number | undefined;

  /**
   * <p>The minimum allowed percentage of TargetMembershipsPerSubChannel users. Ceil of the calculated value is used in balancing members among SubChannels of the elastic channel.</p>
   * @public
   */
  MinimumMembershipPercentage: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ExpirationCriterion = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
  LAST_MESSAGE_TIMESTAMP: "LAST_MESSAGE_TIMESTAMP",
} as const;

/**
 * @public
 */
export type ExpirationCriterion = (typeof ExpirationCriterion)[keyof typeof ExpirationCriterion];

/**
 * <p>Settings that control the interval after which a channel is deleted.</p>
 * @public
 */
export interface ExpirationSettings {
  /**
   * <p>The period in days after which the system automatically deletes a channel.</p>
   * @public
   */
  ExpirationDays: number | undefined;

  /**
   * <p>The conditions that must be met for a channel to expire.</p>
   * @public
   */
  ExpirationCriterion: ExpirationCriterion | undefined;
}

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
   * <p>The name of a channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of a channel.</p>
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

  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
   * @public
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration | undefined;

  /**
   * <p>Settings that control when a channel expires.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * <p>Summary of details of a channel associated with channel flow.</p>
 * @public
 */
export interface ChannelAssociatedWithFlowSummary {
  /**
   * <p>The name of the channel flow.</p>
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
 * @public
 * @enum
 */
export const InvocationType = {
  ASYNC: "ASYNC",
} as const;

/**
 * @public
 */
export type InvocationType = (typeof InvocationType)[keyof typeof InvocationType];

/**
 * <p>Stores metadata about a Lambda processor.</p>
 * @public
 */
export interface LambdaConfiguration {
  /**
   * <p>The ARN of the Lambda message processing function.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Controls how the Lambda function is invoked.</p>
   * @public
   */
  InvocationType: InvocationType | undefined;
}

/**
 * <p>A processor's metadata.</p>
 * @public
 */
export interface ProcessorConfiguration {
  /**
   * <p>Indicates that the processor is of type Lambda.</p>
   * @public
   */
  Lambda: LambdaConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const FallbackAction = {
  ABORT: "ABORT",
  CONTINUE: "CONTINUE",
} as const;

/**
 * @public
 */
export type FallbackAction = (typeof FallbackAction)[keyof typeof FallbackAction];

/**
 * <p>The information about a processor in a channel flow.</p>
 * @public
 */
export interface Processor {
  /**
   * <p>The name of the channel flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The information about the type of processor and its identifier.</p>
   * @public
   */
  Configuration: ProcessorConfiguration | undefined;

  /**
   * <p>The sequence in which processors run. If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence.
   *          At this point, we support only 1 processor within a flow.</p>
   * @public
   */
  ExecutionOrder: number | undefined;

  /**
   * <p>Determines whether to continue with message processing or stop it in cases where communication with a processor fails. If a processor has a fallback action of <code>ABORT</code> and
   *          communication with it fails, the processor sets the message status to <code>FAILED</code> and does not send the message to any recipients. Note that if the last processor in the channel flow sequence
   *          has a fallback action of <code>CONTINUE</code> and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.</p>
   * @public
   */
  FallbackAction: FallbackAction | undefined;
}

/**
 * <p>The details of a channel flow.</p>
 * @public
 */
export interface ChannelFlow {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * <p>Information about the processor Lambda functions.</p>
   * @public
   */
  Processors?: Processor[] | undefined;

  /**
   * <p>The name of the channel flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The time at which the channel flow was created.</p>
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * <p>The time at which a channel flow was updated.</p>
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * <p>A list of message attribute values.</p>
 * @public
 */
export interface MessageAttributeValue {
  /**
   * <p>The strings in a message attribute value.</p>
   * @public
   */
  StringValues?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PushNotificationType = {
  DEFAULT: "DEFAULT",
  VOIP: "VOIP",
} as const;

/**
 * @public
 */
export type PushNotificationType = (typeof PushNotificationType)[keyof typeof PushNotificationType];

/**
 * <p>The push notification configuration of the message.</p>
 * @public
 */
export interface PushNotificationConfiguration {
  /**
   * <p>The title of the push notification.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The body of the push notification.</p>
   * @public
   */
  Body?: string | undefined;

  /**
   * <p>Enum value that indicates the type of the push notification for a message.
   *          <code>DEFAULT</code>: Normal mobile push notification.
   *          <code>VOIP</code>: VOIP mobile push notification.</p>
   * @public
   */
  Type?: PushNotificationType | undefined;
}

/**
 * <p>Stores information about a callback.</p>
 * @public
 */
export interface ChannelMessageCallback {
  /**
   * <p>The message ID.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The message content. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The message metadata.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The push notification configuration of the message.</p>
   * @public
   */
  PushNotification?: PushNotificationConfiguration | undefined;

  /**
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * <p>The ID of the SubChannel.</p>
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * <p>The content type of the call-back message. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface ChannelFlowCallbackRequest {
  /**
   * <p>The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.</p>
   * @public
   */
  CallbackId?: string | undefined;

  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>When a processor determines that a message needs to be <code>DENIED</code>, pass this parameter with a value of true.</p>
   * @public
   */
  DeleteResource?: boolean | undefined;

  /**
   * <p>Stores information about the processed message.</p>
   * @public
   */
  ChannelMessage: ChannelMessageCallback | undefined;
}

/**
 * @public
 */
export interface ChannelFlowCallbackResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The call back ID passed in the request.</p>
   * @public
   */
  CallbackId?: string | undefined;
}

/**
 * <p>Summary of details of a channel flow.</p>
 * @public
 */
export interface ChannelFlowSummary {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * <p>The name of the channel flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Information about the processor Lambda functions.</p>
   * @public
   */
  Processors?: Processor[] | undefined;
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

  /**
   * <p>The ID of the SubChannel that a user belongs to.</p>
   * @public
   */
  SubChannelId?: string | undefined;
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
   * <p>The time at which the last persistent message visible to the caller in a channel was sent.</p>
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
   * <p>Returns the channel data for an <code>AppInstance</code>.</p>
   * @public
   */
  ChannelSummary?: ChannelSummary | undefined;

  /**
   * <p>Returns the channel membership data for an <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary | undefined;
}

/**
 * <p>The channel membership preferences for push notification.</p>
 * @public
 */
export interface PushNotificationPreferences {
  /**
   * <p>Enum value that indicates which push notifications to send to the requested member of a channel.
   *          <code>ALL</code> sends all push notifications, <code>NONE</code> sends no push notifications, <code>FILTERED</code> sends only filtered push notifications.
   *       </p>
   * @public
   */
  AllowNotifications: AllowNotifications | undefined;

  /**
   * <p>The simple JSON object used to send a subset of a push notification to the requested member.</p>
   * @public
   */
  FilterRule?: string | undefined;
}

/**
 * <p>The channel membership preferences for an <code>AppInstanceUser</code>.</p>
 * @public
 */
export interface ChannelMembershipPreferences {
  /**
   * <p>The push notification configuration of a message.</p>
   * @public
   */
  PushNotifications?: PushNotificationPreferences | undefined;
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
export const ChannelMessageStatus = {
  DENIED: "DENIED",
  FAILED: "FAILED",
  PENDING: "PENDING",
  SENT: "SENT",
} as const;

/**
 * @public
 */
export type ChannelMessageStatus = (typeof ChannelMessageStatus)[keyof typeof ChannelMessageStatus];

/**
 * <p>Stores information about a message status.</p>
 * @public
 */
export interface ChannelMessageStatusStructure {
  /**
   * <p>The message status value.</p>
   * @public
   */
  Value?: ChannelMessageStatus | undefined;

  /**
   * <p>Contains more details about the message status.</p>
   * @public
   */
  Detail?: string | undefined;
}

/**
 * <p>The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages.
 *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The ARN of the target channel member.</p>
   * @public
   */
  MemberArn?: string | undefined;
}

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
   * <p>The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
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

  /**
   * <p>The status of the channel message.</p>
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * <p>The ID of the SubChannel.</p>
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * <p>The content type of the channel message. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The target of a message, a sender, a user, or a bot.  Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
   * @public
   */
  Target?: Target[] | undefined;
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
   * <p>The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
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

  /**
   * <p>The message status. The status value is <code>SENT</code> for messages sent to a channel without a channel flow. For channels associated with channel flow, the value determines the
   *          processing stage.</p>
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * <p>The content type of the channel message listed in the summary. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
   * @public
   */
  Target?: Target[] | undefined;
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
 * <p>A tag object containing a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key in a tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value in a tag.</p>
   * @public
   */
  Value: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the channel in the request.</p>
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * <p>The ARNs of the channel members in the request.</p>
   * @public
   */
  MemberArns?: string[] | undefined;

  /**
   * <p>The ARNs of the channel moderators in the request.</p>
   * @public
   */
  ModeratorArns?: string[] | undefined;

  /**
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million users, excluding moderators.</p>
   * @public
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration | undefined;

  /**
   * <p>Settings that control the interval after which the channel is automatically deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
export interface CreateChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow request.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>Information about the processor Lambda functions.</p>
   * @public
   */
  Processors: Processor[] | undefined;

  /**
   * <p>The name of the channel flow.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The tags for the creation request.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The client token for the request. An Idempotency token.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn?: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member you want to add to the channel.</p>
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
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

  /**
   * <p>The ID of the SubChannel in the response.</p>
   * @public
   */
  SubChannelId?: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
 */
export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member that you're removing from the channel.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only for use by moderators.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when deleting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator being deleted.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessagingStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations being deleted.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
export interface DescribeChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelFlowResponse {
  /**
   * <p>The channel flow details.</p>
   * @public
   */
  ChannelFlow?: ChannelFlow | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request. The response contains an <code>ElasticChannelConfiguration</code> object.</p>
   *          <note>
   *             <p>Only required to get a user’s SubChannel membership details.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
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
   * <p>The ARN of the user or bot in a channel.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
   * <p>The ARN of the user or bot in the moderated channel.</p>
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the channel moderator.</p>
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
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
export interface DisassociateChannelFlowRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the member retrieving the preferences.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The details of a user.</p>
   * @public
   */
  Member?: Identity | undefined;

  /**
   * <p>The channel membership preferences for an <code>AppInstanceUser</code> .</p>
   * @public
   */
  Preferences?: ChannelMembershipPreferences | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
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
export interface GetChannelMessageStatusRequest {
  /**
   * <p>The ARN of the channel</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting message status in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageStatusResponse {
  /**
   * <p>The message status and details.</p>
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;
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
export interface GetMessagingStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configurations.</p>
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MessagingDataType = {
  Channel: "Channel",
  ChannelMessage: "ChannelMessage",
} as const;

/**
 * @public
 */
export type MessagingDataType = (typeof MessagingDataType)[keyof typeof MessagingDataType];

/**
 * <p>The configuration for connecting a messaging stream to Amazon Kinesis.</p>
 * @public
 */
export interface StreamingConfiguration {
  /**
   * <p>The data type of the configuration.</p>
   * @public
   */
  DataType: MessagingDataType | undefined;

  /**
   * <p>The ARN of the resource in the configuration. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetMessagingStreamingConfigurationsResponse {
  /**
   * <p>The streaming settings.</p>
   * @public
   */
  StreamingConfigurations?: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListChannelBansRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of bans that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelBansResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information for each requested ban.</p>
   * @public
   */
  ChannelBans?: ChannelBanSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelFlowsRequest {
  /**
   * <p>The ARN of the app instance.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of channel flows that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channel flows are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelFlowsResponse {
  /**
   * <p>The information about each channel flow.</p>
   * @public
   */
  ChannelFlows?: ChannelFlowSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsRequest {
  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are returned as part of <code>ListChannelMemberships</code> if no type is specified. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>.</p>
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * <p>The maximum number of channel memberships that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing a user's memberships in a particular sub-channel of an elastic channel.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The information for the requested channel memberships.</p>
   * @public
   */
  ChannelMemberships?: ChannelMembershipSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * <p>The ARN of the user or bot.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The maximum number of users that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channel memberships is
   *          reached.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The information for the requested channel memberships.</p>
   * @public
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListChannelMessagesRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>The initial or starting time stamp for your requested messages.</p>
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * <p>The final or ending time stamp for your requested messages.</p>
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * <p>The maximum number of messages that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing the messages in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMessagesResponse {
  /**
   * <p>The ARN of the channel containing the requested messages.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information about, and content of, each requested message.</p>
   * @public
   */
  ChannelMessages?: ChannelMessageSummary[] | undefined;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The maximum number of moderators that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The information about and names of each moderator.</p>
   * @public
   */
  ChannelModerators?: ChannelModeratorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>The information about each channel.</p>
   * @public
   */
  Channels?: ChannelSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>The maximum number of channels that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowResponse {
  /**
   * <p>The information about each channel.</p>
   * @public
   */
  Channels?: ChannelAssociatedWithFlowSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * <p>The ARN of the user or bot in the moderated channel.</p>
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * <p>The maximum number of channels in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * <p>The moderated channels in the request.</p>
   * @public
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[] | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubChannelsRequest {
  /**
   * <p>The ARN of elastic channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The maximum number of sub-channels that you want to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Summary of the sub-channels associated with the elastic channel.</p>
 * @public
 */
export interface SubChannelSummary {
  /**
   * <p>The unique ID of a SubChannel.</p>
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * <p>The number of members in a SubChannel.</p>
   * @public
   */
  MembershipCount?: number | undefined;
}

/**
 * @public
 */
export interface ListSubChannelsResponse {
  /**
   * <p>The ARN of elastic channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The information about each sub-channel.</p>
   * @public
   */
  SubChannels?: SubChannelSummary[] | undefined;

  /**
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutChannelExpirationSettingsRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;

  /**
   * <p>Settings that control the interval after which a channel is deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutChannelExpirationSettingsResponse {
  /**
   * <p>The channel ARN.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>Settings that control the interval after which a channel is deleted.</p>
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the member setting the preferences.</p>
   * @public
   */
  MemberArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The channel membership preferences of an <code>AppInstanceUser</code> .</p>
   * @public
   */
  Preferences: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The details of a user.</p>
   * @public
   */
  Member?: Identity | undefined;

  /**
   * <p>The ARN and metadata of the member being added.</p>
   * @public
   */
  Preferences?: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsRequest {
  /**
   * <p>The ARN of the streaming configuration.</p>
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The streaming configurations.</p>
   * @public
   */
  StreamingConfigurations: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsResponse {
  /**
   * <p>The requested streaming configurations.</p>
   * @public
   */
  StreamingConfigurations?: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageRequest {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageResponse {
  /**
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID of the message being redacted.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   *          <note>
   *             <p>Only required when redacting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchFieldKey = {
  MEMBERS: "MEMBERS",
} as const;

/**
 * @public
 */
export type SearchFieldKey = (typeof SearchFieldKey)[keyof typeof SearchFieldKey];

/**
 * @public
 * @enum
 */
export const SearchFieldOperator = {
  EQUALS: "EQUALS",
  INCLUDES: "INCLUDES",
} as const;

/**
 * @public
 */
export type SearchFieldOperator = (typeof SearchFieldOperator)[keyof typeof SearchFieldOperator];

/**
 * <p>A <code>Field</code> of the channel that you want to search.</p>
 * @public
 */
export interface SearchField {
  /**
   * <p>An <code>enum</code> value that indicates the key to search the channel on. <code>MEMBERS</code> allows you to search channels based on memberships. You can use it with the <code>EQUALS</code>
   *          operator to get channels whose memberships are equal to the specified values, and with the <code>INCLUDES</code>  operator to get channels whose memberships include the specified values.</p>
   * @public
   */
  Key: SearchFieldKey | undefined;

  /**
   * <p>The values that you want to search for, a list of strings. The values must be <code>AppInstanceUserArns</code> specified as a list of strings.</p>
   *          <note>
   *             <p>This operation isn't supported for <code>AppInstanceUsers</code> with large number of memberships.</p>
   *          </note>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>The operator used to compare field values, currently <code>EQUALS</code> or <code>INCLUDES</code>.  Use the <code>EQUALS</code> operator to find channels whose memberships equal the specified values.
   *          Use the <code>INCLUDES</code> operator to find channels whose memberships include the specified values.</p>
   * @public
   */
  Operator: SearchFieldOperator | undefined;
}

/**
 * @public
 */
export interface SearchChannelsRequest {
  /**
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   * @public
   */
  ChimeBearer?: string | undefined;

  /**
   * <p>A list of the <code>Field</code> objects in the channel being searched.</p>
   * @public
   */
  Fields: SearchField[] | undefined;

  /**
   * <p>The maximum number of channels that you want returned.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned from previous API requests until the number of channels is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchChannelsResponse {
  /**
   * <p>A list of the channels in the request.</p>
   * @public
   */
  Channels?: ChannelSummary[] | undefined;

  /**
   * <p>The token returned from previous API responses until the number of channels is reached.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The content of the channel message.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   *          <p>
   *             <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
   *          and you can use it in a variety of ways, such as containing a link to an attachment.</p>
   *          <p>
   *             <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
   * @public
   */
  Type: ChannelMessageType | undefined;

  /**
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   * @public
   */
  Persistence: ChannelMessagePersistenceType | undefined;

  /**
   * <p>The optional metadata for each message.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The <code>Idempotency</code> token for each client request.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The push notification configuration of the message.</p>
   * @public
   */
  PushNotification?: PushNotificationConfiguration | undefined;

  /**
   * <p>The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>.</p>
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * <p>The content type of the channel message.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The target of a message. Must be a member of the channel, such as another user, a bot, or the sender. Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
   *       </p>
   * @public
   */
  Target?: Target[] | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID string assigned to each message.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The status of the channel message.</p>
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The name of the channel.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The mode of the update request.</p>
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * <p>The metadata for the update request.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * <p>Information about the processor Lambda functions </p>
   * @public
   */
  Processors: Processor[] | undefined;

  /**
   * <p>The name of the channel flow.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   * @public
   */
  ChannelFlowArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   * @public
   */
  MessageId: string | undefined;

  /**
   * <p>The content of the channel message. </p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The metadata of the message being updated.</p>
   * @public
   */
  Metadata?: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when updating messages in a SubChannel that the user belongs to.</p>
   *          </note>
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * <p>The content type of the channel message.</p>
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * <p>The ID string of the message being updated.</p>
   * @public
   */
  MessageId?: string | undefined;

  /**
   * <p>The status of the message update.</p>
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * <p>The ID of the SubChannel in the response.</p>
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  ChannelArn?: string | undefined;
}

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
  ...(obj.ContentType && { ContentType: SENSITIVE_STRING }),
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
  ...(obj.ContentType && { ContentType: SENSITIVE_STRING }),
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
  ...(obj.ContentType && { ContentType: SENSITIVE_STRING }),
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
export const DescribeChannelFlowResponseFilterSensitiveLog = (obj: DescribeChannelFlowResponse): any => ({
  ...obj,
  ...(obj.ChannelFlow && { ChannelFlow: ChannelFlowFilterSensitiveLog(obj.ChannelFlow) }),
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
export const GetChannelMessageResponseFilterSensitiveLog = (obj: GetChannelMessageResponse): any => ({
  ...obj,
  ...(obj.ChannelMessage && { ChannelMessage: ChannelMessageFilterSensitiveLog(obj.ChannelMessage) }),
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
export const ListSubChannelsResponseFilterSensitiveLog = (obj: ListSubChannelsResponse): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
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
  ...(obj.ContentType && { ContentType: SENSITIVE_STRING }),
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
export const UpdateChannelFlowRequestFilterSensitiveLog = (obj: UpdateChannelFlowRequest): any => ({
  ...obj,
  ...(obj.Processors && { Processors: obj.Processors.map((item) => ProcessorFilterSensitiveLog(item)) }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChannelMessageRequestFilterSensitiveLog = (obj: UpdateChannelMessageRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ContentType && { ContentType: SENSITIVE_STRING }),
});
