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
 * @public
 * <p>Summary of the membership details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * @public
   * <p>The type of <code>ChannelMembership</code>.</p>
   */
  Type?: ChannelMembershipType;

  /**
   * @public
   * <p>The time at which an <code>AppInstanceUser</code> last marked a channel as read.</p>
   */
  ReadMarkerTimestamp?: Date;

  /**
   * @public
   * <p>The ID of the SubChannel that the <code>AppInstanceUser</code> is a member of.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface AssociateChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
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
 * @public
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
  Code?: ErrorCode;
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
  Code?: ErrorCode;
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
  Code?: ErrorCode;
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
  Code?: ErrorCode;
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
  Code?: ErrorCode;
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
 * <p>The details of a user or bot.</p>
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
   * <p>The membership types set for the channel members.</p>
   */
  Type?: ChannelMembershipType;

  /**
   * @public
   * <p>The users successfully added to the request.</p>
   */
  Members?: Identity[];

  /**
   * @public
   * <p>The ARN of the channel to which you're adding members.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipRequest {
  /**
   * @public
   * <p>The ARN of the channel to which you're adding users or bots.</p>
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
  Type?: ChannelMembershipType;

  /**
   * @public
   * <p>The ARNs of the members you want to add to the channel. Only <code>AppInstanceUsers</code> and
   *          <code>AppInstanceBots</code> can be added as a channel member.</p>
   */
  MemberArns: string[] | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request. </p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
}

/**
 * @public
 * <p>A list of failed member ARNs, error codes, and error messages.</p>
 */
export interface BatchCreateChannelMembershipError {
  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the member that the service couldn't add.</p>
   */
  MemberArn?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: ErrorCode;

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
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode;
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
 * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
 */
export interface ElasticChannelConfiguration {
  /**
   * @public
   * <p>The maximum number of SubChannels that you want to allow in the elastic channel.</p>
   */
  MaximumSubChannels: number | undefined;

  /**
   * @public
   * <p>The maximum number of members allowed in a SubChannel.</p>
   */
  TargetMembershipsPerSubChannel: number | undefined;

  /**
   * @public
   * <p>The minimum allowed percentage of TargetMembershipsPerSubChannel users. Ceil of the calculated value is used in balancing members among SubChannels of the elastic channel.</p>
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
 * @public
 * <p>Settings that control the interval after which a channel is deleted.</p>
 */
export interface ExpirationSettings {
  /**
   * @public
   * <p>The period in days after which the system automatically deletes a channel.</p>
   */
  ExpirationDays: number | undefined;

  /**
   * @public
   * <p>The conditions that must be met for a channel to expire.</p>
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
 * @public
 * <p>The details of a channel.</p>
 */
export interface Channel {
  /**
   * @public
   * <p>The name of a channel.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of a channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The mode of the channel.</p>
   */
  Mode?: ChannelMode;

  /**
   * @public
   * <p>The channel's privacy setting.</p>
   */
  Privacy?: ChannelPrivacy;

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

  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * @public
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.</p>
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration;

  /**
   * @public
   * <p>Settings that control when a channel expires.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 * <p>Summary of details of a channel associated with channel flow.</p>
 */
export interface ChannelAssociatedWithFlowSummary {
  /**
   * @public
   * <p>The name of the channel flow.</p>
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
  Mode?: ChannelMode;

  /**
   * @public
   * <p>The channel's privacy setting.</p>
   */
  Privacy?: ChannelPrivacy;

  /**
   * @public
   * <p>The channel's metadata.</p>
   */
  Metadata?: string;
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
 * @public
 * <p>Stores metadata about a Lambda processor.</p>
 */
export interface LambdaConfiguration {
  /**
   * @public
   * <p>The ARN of the Lambda message processing function.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Controls how the Lambda function is invoked.</p>
   */
  InvocationType: InvocationType | undefined;
}

/**
 * @public
 * <p>A processor's metadata.</p>
 */
export interface ProcessorConfiguration {
  /**
   * @public
   * <p>Indicates that the processor is of type Lambda.</p>
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
 * @public
 * <p>The information about a processor in a channel flow.</p>
 */
export interface Processor {
  /**
   * @public
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The information about the type of processor and its identifier.</p>
   */
  Configuration: ProcessorConfiguration | undefined;

  /**
   * @public
   * <p>The sequence in which processors run. If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence.
   *          At this point, we support only 1 processor within a flow.</p>
   */
  ExecutionOrder: number | undefined;

  /**
   * @public
   * <p>Determines whether to continue with message processing or stop it in cases where communication with a processor fails. If a processor has a fallback action of <code>ABORT</code> and
   *          communication with it fails, the processor sets the message status to <code>FAILED</code> and does not send the message to any recipients. Note that if the last processor in the channel flow sequence
   *          has a fallback action of <code>CONTINUE</code> and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.</p>
   */
  FallbackAction: FallbackAction | undefined;
}

/**
 * @public
 * <p>The details of a channel flow.</p>
 */
export interface ChannelFlow {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * @public
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors?: Processor[];

  /**
   * @public
   * <p>The name of the channel flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time at which the channel flow was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which a channel flow was updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

/**
 * @public
 * <p>A list of message attribute values.</p>
 */
export interface MessageAttributeValue {
  /**
   * @public
   * <p>The strings in a message attribute value.</p>
   */
  StringValues?: string[];
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
 * @public
 * <p>The push notification configuration of the message.</p>
 */
export interface PushNotificationConfiguration {
  /**
   * @public
   * <p>The title of the push notification.</p>
   */
  Title?: string;

  /**
   * @public
   * <p>The body of the push notification.</p>
   */
  Body?: string;

  /**
   * @public
   * <p>Enum value that indicates the type of the push notification for a message.
   *          <code>DEFAULT</code>: Normal mobile push notification.
   *          <code>VOIP</code>: VOIP mobile push notification.</p>
   */
  Type?: PushNotificationType;
}

/**
 * @public
 * <p>Stores information about a callback.</p>
 */
export interface ChannelMessageCallback {
  /**
   * @public
   * <p>The message ID.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The message content. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The message metadata.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The push notification configuration of the message.</p>
   */
  PushNotification?: PushNotificationConfiguration;

  /**
   * @public
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * @public
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;

  /**
   * @public
   * <p>The content type of the call-back message. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  ContentType?: string;
}

/**
 * @public
 */
export interface ChannelFlowCallbackRequest {
  /**
   * @public
   * <p>The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.</p>
   */
  CallbackId?: string;

  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>When a processor determines that a message needs to be <code>DENIED</code>, pass this parameter with a value of true.</p>
   */
  DeleteResource?: boolean;

  /**
   * @public
   * <p>Stores information about the processed message.</p>
   */
  ChannelMessage: ChannelMessageCallback | undefined;
}

/**
 * @public
 */
export interface ChannelFlowCallbackResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The call back ID passed in the request.</p>
   */
  CallbackId?: string;
}

/**
 * @public
 * <p>Summary of details of a channel flow.</p>
 */
export interface ChannelFlowSummary {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;

  /**
   * @public
   * <p>The name of the channel flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors?: Processor[];
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
  Type?: ChannelMembershipType;

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

  /**
   * @public
   * <p>The ID of the SubChannel that a user belongs to.</p>
   */
  SubChannelId?: string;
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
  Mode?: ChannelMode;

  /**
   * @public
   * <p>The privacy setting of the channel.</p>
   */
  Privacy?: ChannelPrivacy;

  /**
   * @public
   * <p>The metadata of the channel.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The time at which the last persistent message visible to the caller in a channel was sent.</p>
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
   * <p>Returns the channel data for an <code>AppInstance</code>.</p>
   */
  ChannelSummary?: ChannelSummary;

  /**
   * @public
   * <p>Returns the channel membership data for an <code>AppInstance</code>.</p>
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary;
}

/**
 * @public
 * <p>The channel membership preferences for push notification.</p>
 */
export interface PushNotificationPreferences {
  /**
   * @public
   * <p>Enum value that indicates which push notifications to send to the requested member of a channel.
   *          <code>ALL</code> sends all push notifications, <code>NONE</code> sends no push notifications, <code>FILTERED</code> sends only filtered push notifications.
   *       </p>
   */
  AllowNotifications: AllowNotifications | undefined;

  /**
   * @public
   * <p>The simple JSON object used to send a subset of a push notification to the requested member.</p>
   */
  FilterRule?: string;
}

/**
 * @public
 * <p>The channel membership preferences for an <code>AppInstanceUser</code>.</p>
 */
export interface ChannelMembershipPreferences {
  /**
   * @public
   * <p>The push notification configuration of a message.</p>
   */
  PushNotifications?: PushNotificationPreferences;
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
 * @public
 * <p>Stores information about a message status.</p>
 */
export interface ChannelMessageStatusStructure {
  /**
   * @public
   * <p>The message status value.</p>
   */
  Value?: ChannelMessageStatus;

  /**
   * @public
   * <p>Contains more details about the message status.</p>
   */
  Detail?: string;
}

/**
 * @public
 * <p>The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages.
 *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
 */
export interface Target {
  /**
   * @public
   * <p>The ARN of the target channel member.</p>
   */
  MemberArn?: string;
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
   * <p>The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
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
  Type?: ChannelMessageType;

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
  Persistence?: ChannelMessagePersistenceType;

  /**
   * @public
   * <p>The status of the channel message.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * @public
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * @public
   * <p>The ID of the SubChannel.</p>
   */
  SubChannelId?: string;

  /**
   * @public
   * <p>The content type of the channel message. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The target of a message, a sender, a user, or a bot.  Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
   */
  Target?: Target[];
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
   * <p>The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
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
  Type?: ChannelMessageType;

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

  /**
   * @public
   * <p>The message status. The status value is <code>SENT</code> for messages sent to a channel without a channel flow. For channels associated with channel flow, the value determines the
   *          processing stage.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * @public
   * <p>The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * @public
   * <p>The content type of the channel message listed in the summary. For Amazon Lex V2 bot responses, the content type is <code>application/amz-chime-lex-msgs</code> for success responses and
   *          <code>application/amz-chime-lex-error</code> for failure responses. For more information, refer to
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html">Processing responses from an AppInstanceBot</a> in the
   *          <i>Amazon Chime SDK Messaging Developer Guide</i>.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.</p>
   */
  Target?: Target[];
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
 * <p>A tag object containing a key-value pair.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key in a tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value in a tag.</p>
   */
  Value: string | undefined;
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
  Mode?: ChannelMode;

  /**
   * @public
   * <p>The channel's privacy level: <code>PUBLIC</code> or <code>PRIVATE</code>. Private
   *          channels aren't discoverable by users outside the channel. Public channels are discoverable
   *          by anyone in the <code>AppInstance</code>.</p>
   */
  Privacy?: ChannelPrivacy;

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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the channel in the request.</p>
   */
  ChannelId?: string;

  /**
   * @public
   * <p>The ARNs of the channel members in the request.</p>
   */
  MemberArns?: string[];

  /**
   * @public
   * <p>The ARNs of the channel moderators in the request.</p>
   */
  ModeratorArns?: string[];

  /**
   * @public
   * <p>The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million users, excluding moderators.</p>
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration;

  /**
   * @public
   * <p>Settings that control the interval after which the channel is automatically deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
export interface CreateChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel flow request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>Information about the processor Lambda functions.</p>
   */
  Processors: Processor[] | undefined;

  /**
   * @public
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The tags for the creation request.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The client token for the request. An Idempotency token.</p>
   */
  ClientRequestToken?: string;
}

/**
 * @public
 */
export interface CreateChannelFlowResponse {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
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
   * <p>The <code>AppInstanceUserArn</code> of the member you want to add to the channel.</p>
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
  Type: ChannelMembershipType | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when creating membership in a SubChannel for a moderator in an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
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

  /**
   * @public
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
 */
export interface DeleteChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member that you're removing from the channel.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only for use by moderators.</p>
   *          </note>
   */
  SubChannelId?: string;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when deleting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessagingStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the streaming configurations being deleted.</p>
   */
  AppInstanceArn: string | undefined;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;
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
export interface DescribeChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelFlowResponse {
  /**
   * @public
   * <p>The channel flow details.</p>
   */
  ChannelFlow?: ChannelFlow;
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
   * <p>The <code>AppInstanceUserArn</code> of the member.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the
   *          API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request. The response contains an <code>ElasticChannelConfiguration</code> object.</p>
   *          <note>
   *             <p>Only required to get a user’s SubChannel membership details.</p>
   *          </note>
   */
  SubChannelId?: string;
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
   * <p>The ARN of the user or bot in a channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
   * <p>The ARN of the user or bot in the moderated channel.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
export interface DisassociateChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the member retrieving the preferences.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The details of a user.</p>
   */
  Member?: Identity;

  /**
   * @public
   * <p>The channel membership preferences for an <code>AppInstanceUser</code> .</p>
   */
  Preferences?: ChannelMembershipPreferences;
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
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
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
export interface GetChannelMessageStatusRequest {
  /**
   * @public
   * <p>The ARN of the channel</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the message.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when getting message status in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface GetChannelMessageStatusResponse {
  /**
   * @public
   * <p>The message status and details.</p>
   */
  Status?: ChannelMessageStatusStructure;
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
export interface GetMessagingStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the streaming configurations.</p>
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
 * @public
 * <p>The configuration for connecting a messaging stream to Amazon Kinesis.</p>
 */
export interface StreamingConfiguration {
  /**
   * @public
   * <p>The data type of the configuration.</p>
   */
  DataType: MessagingDataType | undefined;

  /**
   * @public
   * <p>The ARN of the resource in the configuration. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetMessagingStreamingConfigurationsResponse {
  /**
   * @public
   * <p>The streaming settings.</p>
   */
  StreamingConfigurations?: StreamingConfiguration[];
}

/**
 * @public
 */
export interface ListChannelBansRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of bans that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelBansResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bans are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information for each requested ban.</p>
   */
  ChannelBans?: ChannelBanSummary[];
}

/**
 * @public
 */
export interface ListChannelFlowsRequest {
  /**
   * @public
   * <p>The ARN of the app instance.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of channel flows that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channel flows are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelFlowsResponse {
  /**
   * @public
   * <p>The information about each channel flow.</p>
   */
  ChannelFlows?: ChannelFlowSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsRequest {
  /**
   * @public
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The membership type of a user, <code>DEFAULT</code> or <code>HIDDEN</code>. Default
   *          members are returned as part of <code>ListChannelMemberships</code> if no type is specified. Hidden members
   *          are only returned if the type filter in <code>ListChannelMemberships</code> equals
   *             <code>HIDDEN</code>.</p>
   */
  Type?: ChannelMembershipType;

  /**
   * @public
   * <p>The maximum number of channel memberships that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing a user's memberships in a particular sub-channel of an elastic channel.</p>
   *          </note>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channel memberships are
   *          returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the user or bot.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The maximum number of users that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channel memberships is
   *          reached.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @public
   * <p>The information for the requested channel memberships.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
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
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The order in which you want messages sorted. Default is Descending, based on time
   *          created.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>The initial or starting time stamp for your requested messages.</p>
   */
  NotBefore?: Date;

  /**
   * @public
   * <p>The final or ending time stamp for your requested messages.</p>
   */
  NotAfter?: Date;

  /**
   * @public
   * <p>The maximum number of messages that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when listing the messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface ListChannelMessagesResponse {
  /**
   * @public
   * <p>The ARN of the channel containing the requested messages.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested messages are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information about, and content of, each requested message.</p>
   */
  ChannelMessages?: ChannelMessageSummary[];

  /**
   * @public
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface ListChannelModeratorsRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of moderators that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested moderators are
   *          returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The information about and names of each moderator.</p>
   */
  ChannelModerators?: ChannelModeratorSummary[];
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The privacy setting. <code>PUBLIC</code> retrieves all the public channels.
   *             <code>PRIVATE</code> retrieves private channels. Only an <code>AppInstanceAdmin</code>
   *          can retrieve private channels. </p>
   */
  Privacy?: ChannelPrivacy;

  /**
   * @public
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * @public
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels is
   *          reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowResponse {
  /**
   * @public
   * <p>The information about each channel.</p>
   */
  Channels?: ChannelAssociatedWithFlowSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the user or bot in the moderated channel.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The maximum number of channels in the request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @public
   * <p>The moderated channels in the request.</p>
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels moderated by
   *          the user is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSubChannelsRequest {
  /**
   * @public
   * <p>The ARN of elastic channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The maximum number of sub-channels that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary of the sub-channels associated with the elastic channel.</p>
 */
export interface SubChannelSummary {
  /**
   * @public
   * <p>The unique ID of a SubChannel.</p>
   */
  SubChannelId?: string;

  /**
   * @public
   * <p>The number of members in a SubChannel.</p>
   */
  MembershipCount?: number;
}

/**
 * @public
 */
export interface ListSubChannelsResponse {
  /**
   * @public
   * <p>The ARN of elastic channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The information about each sub-channel.</p>
   */
  SubChannels?: SubChannelSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested sub-channels are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutChannelExpirationSettingsRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   */
  ChimeBearer?: string;

  /**
   * @public
   * <p>Settings that control the interval after which a channel is deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 */
export interface PutChannelExpirationSettingsResponse {
  /**
   * @public
   * <p>The channel ARN.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>Settings that control the interval after which a channel is deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the member setting the preferences.</p>
   */
  MemberArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The channel membership preferences of an <code>AppInstanceUser</code> .</p>
   */
  Preferences: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The details of a user.</p>
   */
  Member?: Identity;

  /**
   * @public
   * <p>The ARN and metadata of the member being added.</p>
   */
  Preferences?: ChannelMembershipPreferences;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsRequest {
  /**
   * @public
   * <p>The ARN of the streaming configuration.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The streaming configurations.</p>
   */
  StreamingConfigurations: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsResponse {
  /**
   * @public
   * <p>The requested streaming configurations.</p>
   */
  StreamingConfigurations?: StreamingConfiguration[];
}

/**
 * @public
 */
export interface RedactChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID of the message being redacted.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface RedactChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel containing the messages that you want to redact.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID of the message being redacted.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The ID of the SubChannel in the response.</p>
   *          <note>
   *             <p>Only required when redacting messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;
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
 * @public
 * <p>A <code>Field</code> of the channel that you want to search.</p>
 */
export interface SearchField {
  /**
   * @public
   * <p>An <code>enum</code> value that indicates the key to search the channel on. <code>MEMBERS</code> allows you to search channels based on memberships. You can use it with the <code>EQUALS</code>
   *          operator to get channels whose memberships are equal to the specified values, and with the <code>INCLUDES</code>  operator to get channels whose memberships include the specified values.</p>
   */
  Key: SearchFieldKey | undefined;

  /**
   * @public
   * <p>The values that you want to search for, a list of strings. The values must be <code>AppInstanceUserArns</code> specified as a list of strings.</p>
   *          <note>
   *             <p>This operation isn't supported for <code>AppInstanceUsers</code> with large number of memberships.</p>
   *          </note>
   */
  Values: string[] | undefined;

  /**
   * @public
   * <p>The operator used to compare field values, currently <code>EQUALS</code> or <code>INCLUDES</code>.  Use the <code>EQUALS</code> operator to find channels whose memberships equal the specified values.
   *          Use the <code>INCLUDES</code> operator to find channels whose memberships include the specified values.</p>
   */
  Operator: SearchFieldOperator | undefined;
}

/**
 * @public
 */
export interface SearchChannelsRequest {
  /**
   * @public
   * <p>The <code>AppInstanceUserArn</code> of the user making the API call.</p>
   */
  ChimeBearer?: string;

  /**
   * @public
   * <p>A list of the <code>Field</code> objects in the channel being searched.</p>
   */
  Fields: SearchField[] | undefined;

  /**
   * @public
   * <p>The maximum number of channels that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of channels is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SearchChannelsResponse {
  /**
   * @public
   * <p>A list of the channels in the request.</p>
   */
  Channels?: ChannelSummary[];

  /**
   * @public
   * <p>The token returned from previous API responses until the number of channels is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface SendChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The content of the channel message.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The type of message, <code>STANDARD</code> or <code>CONTROL</code>.</p>
   *          <p>
   *             <code>STANDARD</code> messages can be up to 4KB in size and contain metadata. Metadata is arbitrary,
   *          and you can use it in a variety of ways, such as containing a link to an attachment.</p>
   *          <p>
   *             <code>CONTROL</code> messages are limited to 30 bytes and do not contain metadata.</p>
   */
  Type: ChannelMessageType | undefined;

  /**
   * @public
   * <p>Boolean that controls whether the message is persisted on the back end. Required.</p>
   */
  Persistence: ChannelMessagePersistenceType | undefined;

  /**
   * @public
   * <p>The optional metadata for each message.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The <code>Idempotency</code> token for each client request.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The push notification configuration of the message.</p>
   */
  PushNotification?: PushNotificationConfiguration;

  /**
   * @public
   * <p>The attributes for the message, used for message filtering along with a <code>FilterRule</code> defined in the <code>PushNotificationPreferences</code>.</p>
   */
  MessageAttributes?: Record<string, MessageAttributeValue>;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   */
  SubChannelId?: string;

  /**
   * @public
   * <p>The content type of the channel message.</p>
   */
  ContentType?: string;

  /**
   * @public
   * <p>The target of a message. Must be a member of the channel, such as another user, a bot, or the sender. Only the target and the sender can view targeted messages.
   *          Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
   *       </p>
   */
  Target?: Target[];
}

/**
 * @public
 */
export interface SendChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID string assigned to each message.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The status of the channel message.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * @public
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The name of the channel.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The mode of the update request.</p>
   */
  Mode?: ChannelMode;

  /**
   * @public
   * <p>The metadata for the update request.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
}

/**
 * @public
 */
export interface UpdateChannelFlowRequest {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;

  /**
   * @public
   * <p>Information about the processor Lambda functions </p>
   */
  Processors: Processor[] | undefined;

  /**
   * @public
   * <p>The name of the channel flow.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelFlowResponse {
  /**
   * @public
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
}

/**
 * @public
 */
export interface UpdateChannelMessageRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ID string of the message being updated.</p>
   */
  MessageId: string | undefined;

  /**
   * @public
   * <p>The content of the channel message. </p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The metadata of the message being updated.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;

  /**
   * @public
   * <p>The ID of the SubChannel in the request.</p>
   *          <note>
   *             <p>Only required when updating messages in a SubChannel that the user belongs to.</p>
   *          </note>
   */
  SubChannelId?: string;

  /**
   * @public
   * <p>The content type of the channel message.</p>
   */
  ContentType?: string;
}

/**
 * @public
 */
export interface UpdateChannelMessageResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;

  /**
   * @public
   * <p>The ID string of the message being updated.</p>
   */
  MessageId?: string;

  /**
   * @public
   * <p>The status of the message update.</p>
   */
  Status?: ChannelMessageStatusStructure;

  /**
   * @public
   * <p>The ID of the SubChannel in the response.</p>
   */
  SubChannelId?: string;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
   *          that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * @public
   * <p>The ARN of the channel.</p>
   */
  ChannelArn?: string;
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
