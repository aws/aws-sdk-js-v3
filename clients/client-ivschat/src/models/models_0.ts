// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IvschatServiceException as __BaseException } from "./IvschatServiceException";

/**
 * <p/>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const ChatTokenCapability = {
  DELETE_MESSAGE: "DELETE_MESSAGE",
  DISCONNECT_USER: "DISCONNECT_USER",
  SEND_MESSAGE: "SEND_MESSAGE",
} as const;

/**
 * @public
 */
export type ChatTokenCapability = (typeof ChatTokenCapability)[keyof typeof ChatTokenCapability];

/**
 * @public
 */
export interface CreateChatTokenRequest {
  /**
   * <p>Identifier of the room that the client is trying to access. Currently this must be an
   *          ARN. </p>
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * <p>Application-provided ID that uniquely identifies the user associated with this token.
   *          This can be any UTF-8 encoded text.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the room. Default: None (the
   *          capability to view messages is implicitly included in all requests).</p>
   * @public
   */
  capabilities?: ChatTokenCapability[] | undefined;

  /**
   * <p>Session duration (in minutes), after which the session expires. Default: 60 (1
   *          hour).</p>
   * @public
   */
  sessionDurationInMinutes?: number | undefined;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a chat session.
   *          Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1
   *          KB total.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChatTokenResponse {
  /**
   * <p>The issued client token, encrypted.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>Time after which the token is no longer valid and cannot be used to connect to a room.
   *          This is an ISO 8601 timestamp; <i>note that this is returned as a
   *          string</i>.</p>
   * @public
   */
  tokenExpirationTime?: Date | undefined;

  /**
   * <p>Time after which an end user's session is no longer valid. This is an ISO 8601
   *          timestamp; <i>note that this is returned as a string</i>.</p>
   * @public
   */
  sessionExpirationTime?: Date | undefined;
}

/**
 * <p/>
 * @public
 */
export class PendingVerification extends __BaseException {
  readonly name: "PendingVerification" = "PendingVerification";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PendingVerification, __BaseException>) {
    super({
      name: "PendingVerification",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PendingVerification.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ROOM: "ROOM",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p/>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p/>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>This object is used in the ValidationException error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of the field which failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Explanation of the reason for the validation error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p/>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p/>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * <p/>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p/>
   * @public
   */
  resourceType: ResourceType | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Specifies a CloudWatch Logs location where chat logs will be stored.</p>
 * @public
 */
export interface CloudWatchLogsDestinationConfiguration {
  /**
   * <p>Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.</p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * <p>Specifies a Kinesis Firehose location where chat logs will be stored.</p>
 * @public
 */
export interface FirehoseDestinationConfiguration {
  /**
   * <p>Name of the Amazon Kinesis Firehose delivery stream where chat activity will be
   *       logged.</p>
   * @public
   */
  deliveryStreamName: string | undefined;
}

/**
 * <p>Specifies an S3 location where chat logs will be stored.</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Name of the Amazon S3 bucket where chat activity will be logged.</p>
   * @public
   */
  bucketName: string | undefined;
}

/**
 * <p>A complex type that describes a location where chat logs will be stored. Each member
 *       represents the configuration of one log destination. For logging, you define only one type of
 *       destination (for CloudWatch Logs, Kinesis Firehose, or S3).</p>
 * @public
 */
export type DestinationConfiguration =
  | DestinationConfiguration.CloudWatchLogsMember
  | DestinationConfiguration.FirehoseMember
  | DestinationConfiguration.S3Member
  | DestinationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DestinationConfiguration {
  /**
   * <p>An Amazon S3 destination configuration where chat activity will be logged.</p>
   * @public
   */
  export interface S3Member {
    s3: S3DestinationConfiguration;
    cloudWatchLogs?: never;
    firehose?: never;
    $unknown?: never;
  }

  /**
   * <p>An Amazon CloudWatch Logs destination configuration where chat activity will be
   *       logged.</p>
   * @public
   */
  export interface CloudWatchLogsMember {
    s3?: never;
    cloudWatchLogs: CloudWatchLogsDestinationConfiguration;
    firehose?: never;
    $unknown?: never;
  }

  /**
   * <p>An Amazon Kinesis Data Firehose destination configuration where chat activity will be
   *       logged.</p>
   * @public
   */
  export interface FirehoseMember {
    s3?: never;
    cloudWatchLogs?: never;
    firehose: FirehoseDestinationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    cloudWatchLogs?: never;
    firehose?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3: (value: S3DestinationConfiguration) => T;
    cloudWatchLogs: (value: CloudWatchLogsDestinationConfiguration) => T;
    firehose: (value: FirehoseDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DestinationConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.cloudWatchLogs !== undefined) return visitor.cloudWatchLogs(value.cloudWatchLogs);
    if (value.firehose !== undefined) return visitor.firehose(value.firehose);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There can be only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is
   *          documented there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const CreateLoggingConfigurationState = {
  ACTIVE: "ACTIVE",
} as const;

/**
 * @public
 */
export type CreateLoggingConfigurationState =
  (typeof CreateLoggingConfigurationState)[keyof typeof CreateLoggingConfigurationState];

/**
 * @public
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, assigned by the system.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the logging configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Logging-configuration name, from the request (if specified).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged, from the request. There is only one type of destination
   *             (<code>cloudWatchLogs</code>, <code>firehose</code>, or <code>s3</code>) in a
   *             <code>destinationConfiguration</code>.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   * @public
   */
  state?: CreateLoggingConfigurationState | undefined;

  /**
   * <p>Tags attached to the resource, from the request (if specified). Array of maps, each of
   *          the form <code>string:string (key:value)</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p/>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p/>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p/>
   * @public
   */
  limit: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.limit = opts.limit;
  }
}

/**
 * @public
 * @enum
 */
export const FallbackResult = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type FallbackResult = (typeof FallbackResult)[keyof typeof FallbackResult];

/**
 * <p>Configuration information for optional message review.</p>
 * @public
 */
export interface MessageReviewHandler {
  /**
   * <p>Identifier of the message review handler. Currently this must be an ARN of a lambda
   *       function.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>Specifies the fallback behavior (whether the message is allowed or denied) if the handler
   *       does not return a valid response, encounters an error, or times out. (For the timeout period,
   *       see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html"> Service
   *         Quotas</a>.) If allowed, the message is delivered with returned content to all users
   *       connected to the room. If denied, the message is not delivered to any user. Default:
   *         <code>ALLOW</code>.</p>
   * @public
   */
  fallbackResult?: FallbackResult | undefined;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * <p>Room name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10. </p>
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * <p>Maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * <p>Configuration information for optional review of messages.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Array of logging-configuration identifiers attached to the room.</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * <p>Room ARN, assigned by the system.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Room name, from the request (if specified).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients),
   *          from the request (if specified).</p>
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * <p>Maximum number of characters in a single message, from the request (if
   *          specified).</p>
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * <p>Configuration information for optional review of messages.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Tags attached to the resource, from the request (if specified).</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Array of logging configurations attached to the room, from the request (if
   *          specified).</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageRequest {
  /**
   * <p>Identifier of the room where the message should be deleted. Currently this must be an
   *          ARN. </p>
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * <p>ID of the message to be deleted. This is the <code>Id</code> field in the received
   *          message (see <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html"> Message
   *             (Subscribe)</a> in the Chat Messaging API).</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Reason for deleting the message.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageResponse {
  /**
   * <p>Operation identifier, generated by Amazon IVS Chat.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p/>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p/>
   * @public
   */
  limit: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.limit = opts.limit;
  }
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * <p>Identifier of the room to be deleted. Currently this must be an ARN.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DisconnectUserRequest {
  /**
   * <p>Identifier of the room from which the user's clients should be disconnected. Currently
   *          this must be an ARN.</p>
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * <p>ID of the user (connection) to disconnect from the room.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>Reason for disconnecting the user.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface DisconnectUserResponse {}

/**
 * @public
 */
export interface GetLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be retrieved.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LoggingConfigurationState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type LoggingConfigurationState = (typeof LoggingConfigurationState)[keyof typeof LoggingConfigurationState];

/**
 * @public
 */
export interface GetLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, from the request (if <code>identifier</code> was an
   *          ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the logging configuration.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Logging-configuration name. This value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There is only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   * @public
   */
  state?: LoggingConfigurationState | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * <p>Identifier of the room for which the configuration is to be retrieved. Currently this
   *          must be an ARN.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * <p>Room ARN, from the request (if <code>identifier</code> was an ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10.</p>
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * <p>Maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * <p>Configuration information for optional review of messages.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Array of logging configurations attached to the room.</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsRequest {
  /**
   * <p>The first logging configurations to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of logging configurations to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a logging configuration.</p>
 * @public
 */
export interface LoggingConfigurationSummary {
  /**
   * <p>Logging-configuration ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the part
   *       of the ARN that uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *         <i>note that this is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *         <i>note that this is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *       logged.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The state of the logging configuration. When this is <code>ACTIVE</code>, the
   *       configuration is ready for logging chat content.</p>
   * @public
   */
  state?: LoggingConfigurationState | undefined;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented
   *       there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * <p>List of the matching logging configurations (summary information only). There is only
   *          one type of destination (<code>cloudWatchLogs</code>, <code>firehose</code>, or
   *             <code>s3</code>) in a <code>destinationConfiguration</code>.</p>
   * @public
   */
  loggingConfigurations: LoggingConfigurationSummary[] | undefined;

  /**
   * <p>If there are more logging configurations than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsRequest {
  /**
   * <p>Filters the list to match the specified room name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The first room to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of rooms to return. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filters the list to match the specified message review handler URI.</p>
   * @public
   */
  messageReviewHandlerUri?: string | undefined;

  /**
   * <p>Logging-configuration identifier.</p>
   * @public
   */
  loggingConfigurationIdentifier?: string | undefined;
}

/**
 * <p>Summary information about a room.</p>
 * @public
 */
export interface RoomSummary {
  /**
   * <p>Room ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN that
   *       uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Configuration information for optional review of messages.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *       there.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>List of logging-configuration identifiers attached to the room.</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRoomsResponse {
  /**
   * <p>List of the matching rooms (summary information only).</p>
   * @public
   */
  rooms: RoomSummary[] | undefined;

  /**
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SendEventRequest {
  /**
   * <p>Identifier of the room to which the event will be sent. Currently this must be an
   *          ARN.</p>
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * <p>Application-defined name of the event to send to clients.</p>
   * @public
   */
  eventName: string | undefined;

  /**
   * <p>Application-defined metadata to attach to the event sent to clients. The maximum length
   *          of the metadata is 1 KB total.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SendEventResponse {
  /**
   * <p>An identifier generated by Amazon IVS Chat. This identifier must be used in subsequent
   *          operations for this message, such as DeleteMessage.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated. Array of maps, each of the form
   *             <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There can be only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const UpdateLoggingConfigurationState = {
  ACTIVE: "ACTIVE",
} as const;

/**
 * @public
 */
export type UpdateLoggingConfigurationState =
  (typeof UpdateLoggingConfigurationState)[keyof typeof UpdateLoggingConfigurationState];

/**
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, from the request (if <code>identifier</code> was an
   *          ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Logging-configuration name, from the request (if specified).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged, from the request. There is only one type of destination
   *             (<code>cloudWatchLogs</code>, <code>firehose</code>, or <code>s3</code>) in a
   *             <code>destinationConfiguration</code>.</p>
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   * @public
   */
  state?: UpdateLoggingConfigurationState | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. </p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * <p>Identifier of the room to be updated. Currently this must be an ARN.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10.</p>
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * <p>The maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * <p>Configuration information for optional review of messages. Specify an empty
   *             <code>uri</code> string to disassociate a message review handler from the specified
   *          room.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Array of logging-configuration identifiers attached to the room.</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoomResponse {
  /**
   * <p>Room ARN, from the request (if <code>identifier</code> was an ARN).</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Room name, from the request (if specified).</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  createTime?: Date | undefined;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients),
   *          from the request (if specified).</p>
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * <p>Maximum number of characters in a single message, from the request (if
   *          specified).</p>
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * <p>Configuration information for optional review of messages.</p>
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Array of logging configurations attached to the room, from the request (if
   *          specified).</p>
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @internal
 */
export const CreateChatTokenRequestFilterSensitiveLog = (obj: CreateChatTokenRequest): any => ({
  ...obj,
  ...(obj.userId && { userId: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChatTokenResponseFilterSensitiveLog = (obj: CreateChatTokenResponse): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DisconnectUserRequestFilterSensitiveLog = (obj: DisconnectUserRequest): any => ({
  ...obj,
  ...(obj.userId && { userId: SENSITIVE_STRING }),
});
