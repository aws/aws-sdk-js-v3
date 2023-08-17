// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChimeSDKIdentityServiceException as __BaseException } from "./ChimeSDKIdentityServiceException";

/**
 * @public
 * @enum
 */
export const AllowMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AllowMessages = (typeof AllowMessages)[keyof typeof AllowMessages];

/**
 * @public
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging
 *          application.</p>
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
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The metadata of an <code>AppInstance</code>.</p>
   */
  Metadata?: string;
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
 * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
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
export const StandardMessages = {
  ALL: "ALL",
  AUTO: "AUTO",
  MENTIONS: "MENTIONS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type StandardMessages = (typeof StandardMessages)[keyof typeof StandardMessages];

/**
 * @public
 * @enum
 */
export const TargetedMessages = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TargetedMessages = (typeof TargetedMessages)[keyof typeof TargetedMessages];

/**
 * @public
 * <p>Specifies the type of message that triggers a bot.</p>
 */
export interface InvokedBy {
  /**
   * @public
   * <p>Sets standard messages as the bot trigger. For standard messages:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: The bot processes all standard messages.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AUTO</code>: The bot responds to ALL messages when the channel has one other non-hidden member, and responds to MENTIONS when the
   *             channel has more than one other non-hidden member.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MENTIONS</code>: The bot processes all standard messages that have a message attribute with <code>CHIME.mentions</code> and a
   *             value of the bot ARN.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The bot processes no standard messages.</p>
   *             </li>
   *          </ul>
   */
  StandardMessages: StandardMessages | string | undefined;

  /**
   * @public
   * <p>Sets targeted messages as the bot trigger. For targeted messages:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code>: The bot processes all <code>TargetedMessages</code> sent to it. The bot then responds with a targeted message back to the sender.
   *             </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: The bot processes no targeted messages.</p>
   *             </li>
   *          </ul>
   */
  TargetedMessages: TargetedMessages | string | undefined;
}

/**
 * @public
 * @enum
 */
export const RespondsTo = {
  STANDARD_MESSAGES: "STANDARD_MESSAGES",
} as const;

/**
 * @public
 */
export type RespondsTo = (typeof RespondsTo)[keyof typeof RespondsTo];

/**
 * @public
 * <p>The configuration for an Amazon Lex V2 bot.</p>
 */
export interface LexConfiguration {
  /**
   * @public
   * <important>
   *             <p>
   *                <b>Deprecated</b>. Use <code>InvokedBy</code> instead.</p>
   *          </important>
   *          <p>Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.</p>
   */
  RespondsTo?: RespondsTo | string;

  /**
   * @public
   * <p>Specifies the type of message that triggers a bot.</p>
   */
  InvokedBy?: InvokedBy;

  /**
   * @public
   * <p>The ARN of the Amazon Lex V2 bot's alias. The ARN uses this format:
   *          <code>arn:aws:lex:REGION:ACCOUNT:bot-alias/MYBOTID/MYBOTALIAS</code>
   *          </p>
   */
  LexBotAliasArn: string | undefined;

  /**
   * @public
   * <p>Identifies the Amazon Lex V2 bot's language and locale. The string must match one of the
   *          supported locales in Amazon Lex V2. All of the intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a> in the <i>Amazon Lex V2 Developer Guide</i>.</p>
   */
  LocaleId: string | undefined;

  /**
   * @public
   * <p>The name of the welcome intent configured in the Amazon Lex V2 bot.</p>
   */
  WelcomeIntent?: string;
}

/**
 * @public
 * <p>A structure that contains configuration data.</p>
 */
export interface Configuration {
  /**
   * @public
   * <p>The configuration for an Amazon Lex V2 bot.</p>
   */
  Lex: LexConfiguration | undefined;
}

/**
 * @public
 * <p>An Amazon Lex V2 chat bot created under an <code>AppInstance</code>.</p>
 */
export interface AppInstanceBot {
  /**
   * @public
   * <p>The ARN of the AppInstanceBot.</p>
   */
  AppInstanceBotArn?: string;

  /**
   * @public
   * <p>The name of the AppInstanceBot.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The data processing instructions for an AppInstanceBot.</p>
   */
  Configuration?: Configuration;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceBot</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceBot</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The metadata for an AppInstanceBot.</p>
   */
  Metadata?: string;
}

/**
 * @public
 * <p>High-level information about an AppInstanceBot.</p>
 */
export interface AppInstanceBotSummary {
  /**
   * @public
   * <p>The ARN of the AppInstanceBot.</p>
   */
  AppInstanceBotArn?: string;

  /**
   * @public
   * <p>The name of the AppInstanceBox.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The metadata of the AppInstanceBot.</p>
   */
  Metadata?: string;
}

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
 * @enum
 */
export const ExpirationCriterion = {
  CREATED_TIMESTAMP: "CREATED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type ExpirationCriterion = (typeof ExpirationCriterion)[keyof typeof ExpirationCriterion];

/**
 * @public
 * <p>Determines the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
 */
export interface ExpirationSettings {
  /**
   * @public
   * <p>The period in days after which an <code>AppInstanceUser</code> will be automatically deleted.</p>
   */
  ExpirationDays: number | undefined;

  /**
   * @public
   * <p>Specifies the conditions under which an <code>AppInstanceUser</code> will expire.</p>
   */
  ExpirationCriterion: ExpirationCriterion | string | undefined;
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
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>The interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 * <p>The attributes of an <code>Endpoint</code>.</p>
 */
export interface EndpointAttributes {
  /**
   * @public
   * <p>The device token for the GCM, APNS, and APNS_SANDBOX endpoint types.</p>
   */
  DeviceToken: string | undefined;

  /**
   * @public
   * <p>The VOIP device token for the APNS and APNS_SANDBOX endpoint types.</p>
   */
  VoipDeviceToken?: string;
}

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const EndpointStatusReason = {
  INVALID_DEVICE_TOKEN: "INVALID_DEVICE_TOKEN",
  INVALID_PINPOINT_ARN: "INVALID_PINPOINT_ARN",
} as const;

/**
 * @public
 */
export type EndpointStatusReason = (typeof EndpointStatusReason)[keyof typeof EndpointStatusReason];

/**
 * @public
 * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive
 *                message. When INACTIVE, the corresponding reason will be conveyed through
 *                EndpointStatusReason.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input through the <code>ResourceArn</code> field.</p>
 *             </li>
 *          </ul>
 */
export interface EndpointState {
  /**
   * @public
   * <p>Enum that indicates the Status of an <code>AppInstanceUserEndpoint</code>.</p>
   */
  Status: EndpointStatus | string | undefined;

  /**
   * @public
   * <p>The reason for the <code>EndpointStatus</code>.</p>
   */
  StatusReason?: EndpointStatusReason | string;
}

/**
 * @public
 * @enum
 */
export const AppInstanceUserEndpointType = {
  APNS: "APNS",
  APNS_SANDBOX: "APNS_SANDBOX",
  GCM: "GCM",
} as const;

/**
 * @public
 */
export type AppInstanceUserEndpointType =
  (typeof AppInstanceUserEndpointType)[keyof typeof AppInstanceUserEndpointType];

/**
 * @public
 * <p>An endpoint under an Amazon Chime <code>AppInstanceUser</code> that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
 */
export interface AppInstanceUserEndpoint {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Type?: AppInstanceUserEndpointType | string;

  /**
   * @public
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The attributes of an <code>Endpoint</code>.</p>
   */
  EndpointAttributes?: EndpointAttributes;

  /**
   * @public
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * @public
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * @public
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;

  /**
   * @public
   * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive message. When <code>INACTIVE</code>, the corresponding reason will be
   *             conveyed through <code>EndpointStatusReason</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input
   *             through the <code>ResourceArn</code> field.</p>
   *             </li>
   *          </ul>
   */
  EndpointState?: EndpointState;
}

/**
 * @public
 * <p>Summary of the details of an <code>AppInstanceUserEndpoint</code>.</p>
 */
export interface AppInstanceUserEndpointSummary {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Type?: AppInstanceUserEndpointType | string;

  /**
   * @public
   * <p>BBoolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;

  /**
   * @public
   * <p>A read-only field that represent the state of an <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointState?: EndpointState;
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
   * <p>The unique ID of the request. Use different tokens to create different <code>AppInstances</code>.</p>
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
   * <p>The ARN and name of the administrator, the ARN of the <code>AppInstance</code>, and the created and
   *          last-updated timestamps. All timestamps use epoch milliseconds.</p>
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
export interface CreateAppInstanceBotRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The user's name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The request metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * @public
   * <p>The unique ID for the client making the request. Use different tokens for different <code>AppInstanceBots</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>The tags assigned to the <code>AppInstanceBot</code>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Configuration information about the Amazon Lex V2 V2 bot.</p>
   */
  Configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceBotResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppinstanceBot</code>.</p>
   */
  AppInstanceBotArn?: string;
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
   * <p>The unique ID of the request. Use different tokens to request additional <code>AppInstances</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Settings that control the interval after which the <code>AppInstanceUser</code> is automatically deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
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
export interface DeleteAppInstanceBotRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceBot</code> being deleted.</p>
   */
  AppInstanceBotArn: string | undefined;
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
export interface DeregisterAppInstanceUserEndpointRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;
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
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the
   *             <code>AppInstance</code>. All timestamps use epoch milliseconds.</p>
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
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the
   *             <code>AppInstance</code>, and the created and last-updated timestamps. All timestamps
   *          use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   */
  AppInstanceBotArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotResponse {
  /**
   * @public
   * <p>The detials of the <code>AppInstanceBot</code>.</p>
   */
  AppInstanceBot?: AppInstanceBot;
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
export interface DescribeAppInstanceUserEndpointRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserEndpointResponse {
  /**
   * @public
   * <p>The full details of an <code>AppInstanceUserEndpoint</code>: the <code>AppInstanceUserArn</code>, ID, name, type, resource ARN, attributes,
   *          allow messages, state, and created and last updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint;
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
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch
   *          Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of administrators that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The information for each administrator.</p>
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[];

  /**
   * @public
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceBotsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of requests to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bots are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceBotsResponse {
  /**
   * @public
   * <p>The ARN of the AppInstance.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The information for each requested <code>AppInstanceBot</code>.</p>
   */
  AppInstanceBots?: AppInstanceBotSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested bots are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstancesRequest {
  /**
   * @public
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API requests until you reach the maximum number of
   *             <code>AppInstances</code>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstancesResponse {
  /**
   * @public
   * <p>The information for each <code>AppInstance</code>.</p>
   */
  AppInstances?: AppInstanceSummary[];

  /**
   * @public
   * <p>The token passed by previous API requests until the maximum number of
   *             <code>AppInstance</code>s is reached.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of endpoints that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsResponse {
  /**
   * @public
   * <p>The information for each requested <code>AppInstanceUserEndpoint</code>.</p>
   */
  AppInstanceUserEndpoints?: AppInstanceUserEndpointSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUsersRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The maximum number of requests that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListAppInstanceUsersResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * @public
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUsers?: AppInstanceUserSummary[];

  /**
   * @public
   * <p>The token passed by previous API calls until all requested users are returned.</p>
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
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * @public
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * @public
   * <p>The time at which the API deletes data.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>Settings that control the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>Settings that control the interval after which an <code>AppInstanceUser</code> is automatically deleted.</p>
   */
  ExpirationSettings?: ExpirationSettings;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the <code>AppInstanceUserEndpoint</code>. Supported types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APNS</code>: The mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APNS_SANDBOX</code>: The sandbox environment of the mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GCM</code>: The mobile notification service for an Android device.</p>
   *             </li>
   *          </ul>
   *          <p>Populate the <code>ResourceArn</code> value of each type as <code>PinpointAppArn</code>.</p>
   */
  Type: AppInstanceUserEndpointType | string | undefined;

  /**
   * @public
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The attributes of an <code>Endpoint</code>.</p>
   */
  EndpointAttributes: EndpointAttributes | undefined;

  /**
   * @public
   * <p>The unique ID assigned to the request. Use different tokens to register other endpoints.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. <code>ALL</code> indicates the endpoint receives all messages.
   *          <code>NONE</code> indicates the endpoint receives no messages.</p>
   */
  AllowMessages?: AllowMessages | string;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;
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
export interface UpdateAppInstanceRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * @public
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata that you want to change.</p>
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   */
  AppInstanceBotArn: string | undefined;

  /**
   * @public
   * <p>The name of the <code>AppInstanceBot</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata of the <code>AppInstanceBot</code>.</p>
   */
  Metadata: string | undefined;

  /**
   * @public
   * <p>The configuration for the bot update.</p>
   */
  Configuration?: Configuration;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceBot</code>.</p>
   */
  AppInstanceBotArn?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointRequest {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;

  /**
   * @public
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointResponse {
  /**
   * @public
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * @public
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;
}

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
export const AppInstanceBotFilterSensitiveLog = (obj: AppInstanceBot): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceBotSummaryFilterSensitiveLog = (obj: AppInstanceBotSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
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
export const AppInstanceUserFilterSensitiveLog = (obj: AppInstanceUser): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EndpointAttributesFilterSensitiveLog = (obj: EndpointAttributes): any => ({
  ...obj,
  ...(obj.DeviceToken && { DeviceToken: SENSITIVE_STRING }),
  ...(obj.VoipDeviceToken && { VoipDeviceToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserEndpointFilterSensitiveLog = (obj: AppInstanceUserEndpoint): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
});

/**
 * @internal
 */
export const AppInstanceUserEndpointSummaryFilterSensitiveLog = (obj: AppInstanceUserEndpointSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
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
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAppInstanceRequestFilterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
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
export const CreateAppInstanceBotRequestFilterSensitiveLog = (obj: CreateAppInstanceBotRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserRequestFilterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
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
export const DescribeAppInstanceBotResponseFilterSensitiveLog = (obj: DescribeAppInstanceBotResponse): any => ({
  ...obj,
  ...(obj.AppInstanceBot && { AppInstanceBot: AppInstanceBotFilterSensitiveLog(obj.AppInstanceBot) }),
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
export const DescribeAppInstanceUserEndpointResponseFilterSensitiveLog = (
  obj: DescribeAppInstanceUserEndpointResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoint && {
    AppInstanceUserEndpoint: AppInstanceUserEndpointFilterSensitiveLog(obj.AppInstanceUserEndpoint),
  }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsRequestFilterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsResponseFilterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmins && {
    AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceBotsRequestFilterSensitiveLog = (obj: ListAppInstanceBotsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceBotsResponseFilterSensitiveLog = (obj: ListAppInstanceBotsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceBots && {
    AppInstanceBots: obj.AppInstanceBots.map((item) => AppInstanceBotSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesRequestFilterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesResponseFilterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
  ...obj,
  ...(obj.AppInstances && { AppInstances: obj.AppInstances.map((item) => AppInstanceSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsRequestFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsResponseFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoints && {
    AppInstanceUserEndpoints: obj.AppInstanceUserEndpoints.map((item) =>
      AppInstanceUserEndpointSummaryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersRequestFilterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersResponseFilterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUsers && {
    AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
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
export const RegisterAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: RegisterAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
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
export const UpdateAppInstanceRequestFilterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceBotRequestFilterSensitiveLog = (obj: UpdateAppInstanceBotRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserRequestFilterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: UpdateAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});
