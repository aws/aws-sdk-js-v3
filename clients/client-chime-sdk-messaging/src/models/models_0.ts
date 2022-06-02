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

export namespace AssociateChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateChannelFlowRequest): any => ({
    ...obj,
  });
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

export namespace ChannelAssociatedWithFlowSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelAssociatedWithFlowSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
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

export namespace LambdaConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaConfiguration): any => ({
    ...obj,
  });
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

export namespace ProcessorConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProcessorConfiguration): any => ({
    ...obj,
  });
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

export namespace Processor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Processor): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
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

export namespace ChannelFlow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelFlow): any => ({
    ...obj,
    ...(obj.Processors && { Processors: obj.Processors.map((item) => Processor.filterSensitiveLog(item)) }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
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

export namespace MessageAttributeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageAttributeValue): any => ({
    ...obj,
    ...(obj.StringValues && { StringValues: SENSITIVE_STRING }),
  });
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

export namespace PushNotificationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PushNotificationConfiguration): any => ({
    ...obj,
    ...(obj.Title && { Title: SENSITIVE_STRING }),
    ...(obj.Body && { Body: SENSITIVE_STRING }),
  });
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
}

export namespace ChannelMessageCallback {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessageCallback): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.PushNotification && {
      PushNotification: PushNotificationConfiguration.filterSensitiveLog(obj.PushNotification),
    }),
    ...(obj.MessageAttributes && {
      MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
        (acc: any, [key, value]: [string, MessageAttributeValue]) => ({
          ...acc,
          [key]: MessageAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
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

export namespace ChannelFlowCallbackRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelFlowCallbackRequest): any => ({
    ...obj,
    ...(obj.ChannelMessage && { ChannelMessage: ChannelMessageCallback.filterSensitiveLog(obj.ChannelMessage) }),
  });
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

export namespace ChannelFlowCallbackResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelFlowCallbackResponse): any => ({
    ...obj,
  });
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

export namespace ChannelFlowSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelFlowSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Processors && { Processors: obj.Processors.map((item) => Processor.filterSensitiveLog(item)) }),
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
   * <p>Returns the channel data for an <code>AppInstance</code>.</p>
   */
  ChannelSummary?: ChannelSummary;

  /**
   * <p>Returns the channel membership data for an <code>AppInstance</code>.</p>
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
   * <p>The simple JSON object used to send a subset of a push notification to the requsted member.</p>
   */
  FilterRule?: string;
}

export namespace PushNotificationPreferences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PushNotificationPreferences): any => ({
    ...obj,
    ...(obj.FilterRule && { FilterRule: SENSITIVE_STRING }),
  });
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

export namespace ChannelMembershipPreferences {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMembershipPreferences): any => ({
    ...obj,
    ...(obj.PushNotifications && {
      PushNotifications: PushNotificationPreferences.filterSensitiveLog(obj.PushNotifications),
    }),
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

export namespace ChannelMessageStatusStructure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessageStatusStructure): any => ({
    ...obj,
  });
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
    ...(obj.MessageAttributes && {
      MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
        (acc: any, [key, value]: [string, MessageAttributeValue]) => ({
          ...acc,
          [key]: MessageAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
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

export namespace ChannelMessageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessageSummary): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.Sender && { Sender: Identity.filterSensitiveLog(obj.Sender) }),
    ...(obj.MessageAttributes && {
      MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
        (acc: any, [key, value]: [string, MessageAttributeValue]) => ({
          ...acc,
          [key]: MessageAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
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

export namespace CreateChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelFlowRequest): any => ({
    ...obj,
    ...(obj.Processors && { Processors: obj.Processors.map((item) => Processor.filterSensitiveLog(item)) }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  });
}

export interface CreateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
}

export namespace CreateChannelFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelFlowResponse): any => ({
    ...obj,
  });
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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

export interface DeleteChannelRequest {
  /**
   * <p>The ARN of the channel being deleted.</p>
   */
  ChannelArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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
  ChimeBearer: string | undefined;
}

export namespace DeleteChannelBanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelBanRequest): any => ({
    ...obj,
  });
}

export interface DeleteChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
}

export namespace DeleteChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelFlowRequest): any => ({
    ...obj,
  });
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
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the moderator being deleted.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
}

export namespace DeleteChannelModeratorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelModeratorRequest): any => ({
    ...obj,
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
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the member being banned.</p>
   */
  MemberArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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

export interface DescribeChannelFlowRequest {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn: string | undefined;
}

export namespace DescribeChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelFlowRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelFlowResponse {
  /**
   * <p>The channel flow details.</p>
   */
  ChannelFlow?: ChannelFlow;
}

export namespace DescribeChannelFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelFlowResponse): any => ({
    ...obj,
    ...(obj.ChannelFlow && { ChannelFlow: ChannelFlow.filterSensitiveLog(obj.ChannelFlow) }),
  });
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
  ChimeBearer: string | undefined;
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
  ChimeBearer: string | undefined;
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
   * <p>The <code>AppInstanceUserArn</code> of the channel moderator.</p>
   */
  ChannelModeratorArn: string | undefined;

  /**
   * <p>The <code>AppInstanceUserArn</code> of the user that makes the API call.</p>
   */
  ChimeBearer: string | undefined;
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

export namespace DisassociateChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateChannelFlowRequest): any => ({
    ...obj,
  });
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

export namespace GetChannelMembershipPreferencesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMembershipPreferencesRequest): any => ({
    ...obj,
  });
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

export namespace GetChannelMembershipPreferencesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMembershipPreferencesResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
    ...(obj.Preferences && { Preferences: ChannelMembershipPreferences.filterSensitiveLog(obj.Preferences) }),
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
  ChimeBearer: string | undefined;
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
}

export namespace GetChannelMessageStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageStatusRequest): any => ({
    ...obj,
  });
}

export interface GetChannelMessageStatusResponse {
  /**
   * <p>The message status and details.</p>
   */
  Status?: ChannelMessageStatusStructure;
}

export namespace GetChannelMessageStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetChannelMessageStatusResponse): any => ({
    ...obj,
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

export namespace ListChannelBansRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelBansRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelBansResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelBansResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelBans && { ChannelBans: obj.ChannelBans.map((item) => ChannelBanSummary.filterSensitiveLog(item)) }),
  });
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

export namespace ListChannelFlowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelFlowsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelFlowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelFlowsResponse): any => ({
    ...obj,
    ...(obj.ChannelFlows && {
      ChannelFlows: obj.ChannelFlows.map((item) => ChannelFlowSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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
}

export namespace ListChannelMembershipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMembershipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsResponse): any => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) => ChannelMembershipSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsForAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[];

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export namespace ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMembershipsForAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.ChannelMemberships && {
      ChannelMemberships: obj.ChannelMemberships.map((item) =>
        ChannelMembershipForAppInstanceUserSummary.filterSensitiveLog(item)
      ),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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
}

export namespace ListChannelMessagesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMessagesRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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
}

export namespace ListChannelMessagesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelMessagesResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelMessages && {
      ChannelMessages: obj.ChannelMessages.map((item) => ChannelMessageSummary.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListChannelModeratorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelModeratorsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelModeratorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelModeratorsResponse): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
    ...(obj.ChannelModerators && {
      ChannelModerators: obj.ChannelModerators.map((item) => ChannelModeratorSummary.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
    ...(obj.Channels && { Channels: obj.Channels.map((item) => ChannelSummary.filterSensitiveLog(item)) }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsAssociatedWithChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsAssociatedWithChannelFlowRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsAssociatedWithChannelFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsAssociatedWithChannelFlowResponse): any => ({
    ...obj,
    ...(obj.Channels && {
      Channels: obj.Channels.map((item) => ChannelAssociatedWithFlowSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsModeratedByAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
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

export namespace ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsModeratedByAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.Channels && {
      Channels: obj.Channels.map((item) => ChannelModeratedByAppInstanceUserSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
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

export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
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

export namespace PutChannelMembershipPreferencesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutChannelMembershipPreferencesRequest): any => ({
    ...obj,
    ...(obj.Preferences && { Preferences: ChannelMembershipPreferences.filterSensitiveLog(obj.Preferences) }),
  });
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

export namespace PutChannelMembershipPreferencesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutChannelMembershipPreferencesResponse): any => ({
    ...obj,
    ...(obj.Member && { Member: Identity.filterSensitiveLog(obj.Member) }),
    ...(obj.Preferences && { Preferences: ChannelMembershipPreferences.filterSensitiveLog(obj.Preferences) }),
  });
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
}

export namespace RedactChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactChannelMessageRequest): any => ({
    ...obj,
  });
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
}

export namespace RedactChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RedactChannelMessageResponse): any => ({
    ...obj,
  });
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
}

export namespace SendChannelMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendChannelMessageRequest): any => ({
    ...obj,
    ...(obj.Content && { Content: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.PushNotification && {
      PushNotification: PushNotificationConfiguration.filterSensitiveLog(obj.PushNotification),
    }),
    ...(obj.MessageAttributes && {
      MessageAttributes: Object.entries(obj.MessageAttributes).reduce(
        (acc: any, [key, value]: [string, MessageAttributeValue]) => ({
          ...acc,
          [key]: MessageAttributeValue.filterSensitiveLog(value),
        }),
        {}
      ),
    }),
  });
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
}

export namespace SendChannelMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendChannelMessageResponse): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
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
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
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
  ChimeBearer: string | undefined;
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

export namespace UpdateChannelFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelFlowRequest): any => ({
    ...obj,
    ...(obj.Processors && { Processors: obj.Processors.map((item) => Processor.filterSensitiveLog(item)) }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

export interface UpdateChannelFlowResponse {
  /**
   * <p>The ARN of the channel flow.</p>
   */
  ChannelFlowArn?: string;
}

export namespace UpdateChannelFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelFlowResponse): any => ({
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
  ChimeBearer: string | undefined;
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

  /**
   * <p>The status of the message update.</p>
   */
  Status?: ChannelMessageStatusStructure;
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
  ChimeBearer: string | undefined;
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
