// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IvschatServiceException as __BaseException } from "./IvschatServiceException";

/**
 * <p/>
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

export enum ChatTokenCapability {
  DELETE_MESSAGE = "DELETE_MESSAGE",
  DISCONNECT_USER = "DISCONNECT_USER",
  SEND_MESSAGE = "SEND_MESSAGE",
}

export interface CreateChatTokenRequest {
  /**
   * <p>Identifier of the room that the client is trying to access. Currently this must be an
   *          ARN. </p>
   */
  roomIdentifier: string | undefined;

  /**
   * <p>Application-provided ID that uniquely identifies the user associated with this token.
   *          This can be any UTF-8 encoded text.</p>
   */
  userId: string | undefined;

  /**
   * <p>Set of capabilities that the user is allowed to perform in the room. Default: None (the
   *          capability to view messages is implicitly included in all requests).</p>
   */
  capabilities?: (ChatTokenCapability | string)[];

  /**
   * <p>Session duration (in minutes), after which the session expires. Default: 60 (1
   *          hour).</p>
   */
  sessionDurationInMinutes?: number;

  /**
   * <p>Application-provided attributes to encode into the token and attach to a chat session.
   *          Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1
   *          KB total.</p>
   */
  attributes?: Record<string, string>;
}

export interface CreateChatTokenResponse {
  /**
   * <p>The issued client token, encrypted.</p>
   */
  token?: string;

  /**
   * <p>Time after which the token is no longer valid and cannot be used to connect to a room.
   *          This is an ISO 8601 timestamp; <i>note that this is returned as a
   *          string</i>.</p>
   */
  tokenExpirationTime?: Date;

  /**
   * <p>Time after which an end user's session is no longer valid. This is an ISO 8601
   *          timestamp; <i>note that this is returned as a string</i>.</p>
   */
  sessionExpirationTime?: Date;
}

/**
 * <p/>
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

export enum ResourceType {
  ROOM = "ROOM",
}

/**
 * <p/>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  resourceId: string | undefined;

  /**
   * <p/>
   */
  resourceType: ResourceType | string | undefined;

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
 */
export interface ValidationExceptionField {
  /**
   * <p>Name of the field which failed validation.</p>
   */
  name: string | undefined;

  /**
   * <p>Explanation of the reason for the validation error.</p>
   */
  message: string | undefined;
}

export enum ValidationExceptionReason {
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * <p/>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * <p/>
   */
  fieldList?: ValidationExceptionField[];

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
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  resourceId: string | undefined;

  /**
   * <p/>
   */
  resourceType: ResourceType | string | undefined;

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
 */
export interface CloudWatchLogsDestinationConfiguration {
  /**
   * <p>Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.</p>
   */
  logGroupName: string | undefined;
}

/**
 * <p>Specifies a Kinesis Firehose location where chat logs will be stored.</p>
 */
export interface FirehoseDestinationConfiguration {
  /**
   * <p>Name of the Amazon Kinesis Firehose delivery stream where chat activity will be
   *       logged.</p>
   */
  deliveryStreamName: string | undefined;
}

/**
 * <p>Specifies an S3 location where chat logs will be stored.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Name of the Amazon S3 bucket where chat activity will be logged.</p>
   */
  bucketName: string | undefined;
}

/**
 * <p>A complex type that describes a location where chat logs will be stored. Each member
 *       represents the configuration of one log destination. For logging, you define only one type of
 *       destination (for CloudWatch Logs, Kinesis Firehose, or S3).</p>
 */
export type DestinationConfiguration =
  | DestinationConfiguration.CloudWatchLogsMember
  | DestinationConfiguration.FirehoseMember
  | DestinationConfiguration.S3Member
  | DestinationConfiguration.$UnknownMember;

export namespace DestinationConfiguration {
  /**
   * <p>An Amazon S3 destination configuration where chat activity will be logged.</p>
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
   */
  export interface FirehoseMember {
    s3?: never;
    cloudWatchLogs?: never;
    firehose: FirehoseDestinationConfiguration;
    $unknown?: never;
  }

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

export interface CreateLoggingConfigurationRequest {
  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There can be only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is
   *          documented there.</p>
   */
  tags?: Record<string, string>;
}

export enum CreateLoggingConfigurationState {
  ACTIVE = "ACTIVE",
}

export interface CreateLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, assigned by the system.</p>
   */
  arn?: string;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the logging configuration.</p>
   */
  id?: string;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Logging-configuration name, from the request (if specified).</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged, from the request. There is only one type of destination
   *             (<code>cloudWatchLogs</code>, <code>firehose</code>, or <code>s3</code>) in a
   *             <code>destinationConfiguration</code>.</p>
   */
  destinationConfiguration?: DestinationConfiguration;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   */
  state?: CreateLoggingConfigurationState | string;

  /**
   * <p>Tags attached to the resource, from the request (if specified). Array of maps, each of
   *          the form <code>string:string (key:value)</code>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p/>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  resourceId: string | undefined;

  /**
   * <p/>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p/>
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

export enum FallbackResult {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

/**
 * <p>Configuration information for optional message review.</p>
 */
export interface MessageReviewHandler {
  /**
   * <p>Identifier of the message review handler. Currently this must be an ARN of a lambda
   *       function.</p>
   */
  uri?: string;

  /**
   * <p>Specifies the fallback behavior (whether the message is allowed or denied) if the handler
   *       does not return a valid response, encounters an error, or times out. (For the timeout period,
   *       see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html"> Service
   *         Quotas</a>.) If allowed, the message is delivered with returned content to all users
   *       connected to the room. If denied, the message is not delivered to any user. Default:
   *         <code>ALLOW</code>.</p>
   */
  fallbackResult?: FallbackResult | string;
}

export interface CreateRoomRequest {
  /**
   * <p>Room name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10. </p>
   */
  maximumMessageRatePerSecond?: number;

  /**
   * <p>Maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   */
  maximumMessageLength?: number;

  /**
   * <p>Configuration information for optional review of messages.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Array of logging-configuration identifiers attached to the room.</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

export interface CreateRoomResponse {
  /**
   * <p>Room ARN, assigned by the system.</p>
   */
  arn?: string;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Room name, from the request (if specified).</p>
   */
  name?: string;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients),
   *          from the request (if specified).</p>
   */
  maximumMessageRatePerSecond?: number;

  /**
   * <p>Maximum number of characters in a single message, from the request (if
   *          specified).</p>
   */
  maximumMessageLength?: number;

  /**
   * <p>Configuration information for optional review of messages.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Tags attached to the resource, from the request (if specified).</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Array of logging configurations attached to the room, from the request (if
   *          specified).</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

export interface DeleteLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be deleted.</p>
   */
  identifier: string | undefined;
}

export interface DeleteMessageRequest {
  /**
   * <p>Identifier of the room where the message should be deleted. Currently this must be an
   *          ARN. </p>
   */
  roomIdentifier: string | undefined;

  /**
   * <p>ID of the message to be deleted. This is the <code>Id</code> field in the received
   *          message (see <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html"> Message
   *             (Subscribe)</a> in the Chat Messaging API).</p>
   */
  id: string | undefined;

  /**
   * <p>Reason for deleting the message.</p>
   */
  reason?: string;
}

export interface DeleteMessageResponse {
  /**
   * <p>Operation identifier, generated by Amazon IVS Chat.</p>
   */
  id?: string;
}

/**
 * <p/>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  resourceId: string | undefined;

  /**
   * <p/>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p/>
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

export interface DeleteRoomRequest {
  /**
   * <p>Identifier of the room to be deleted. Currently this must be an ARN.</p>
   */
  identifier: string | undefined;
}

export interface DisconnectUserRequest {
  /**
   * <p>Identifier of the room from which the user's clients should be disconnected. Currently
   *          this must be an ARN.</p>
   */
  roomIdentifier: string | undefined;

  /**
   * <p>ID of the user (connection) to disconnect from the room.</p>
   */
  userId: string | undefined;

  /**
   * <p>Reason for disconnecting the user.</p>
   */
  reason?: string;
}

export interface DisconnectUserResponse {}

export interface GetLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be retrieved.</p>
   */
  identifier: string | undefined;
}

export enum LoggingConfigurationState {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

export interface GetLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, from the request (if <code>identifier</code> was an
   *          ARN).</p>
   */
  arn?: string;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the logging configuration.</p>
   */
  id?: string;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Logging-configuration name. This value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There is only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   */
  destinationConfiguration?: DestinationConfiguration;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   */
  state?: LoggingConfigurationState | string;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags?: Record<string, string>;
}

export interface GetRoomRequest {
  /**
   * <p>Identifier of the room for which the configuration is to be retrieved. Currently this
   *          must be an ARN.</p>
   */
  identifier: string | undefined;
}

export interface GetRoomResponse {
  /**
   * <p>Room ARN, from the request (if <code>identifier</code> was an ARN).</p>
   */
  arn?: string;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10.</p>
   */
  maximumMessageRatePerSecond?: number;

  /**
   * <p>Maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   */
  maximumMessageLength?: number;

  /**
   * <p>Configuration information for optional review of messages.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Array of logging configurations attached to the room.</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

export interface ListLoggingConfigurationsRequest {
  /**
   * <p>The first logging configurations to retrieve. This is used for pagination; see the
   *             <code>nextToken</code> response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of logging configurations to return. Default: 50.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about a logging configuration.</p>
 */
export interface LoggingConfigurationSummary {
  /**
   * <p>Logging-configuration ARN.</p>
   */
  arn?: string;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the part
   *       of the ARN that uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *         <i>note that this is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *         <i>note that this is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *       logged.</p>
   */
  destinationConfiguration?: DestinationConfiguration;

  /**
   * <p>The state of the logging configuration. When this is <code>ACTIVE</code>, the
   *       configuration is ready for logging chat content.</p>
   */
  state?: LoggingConfigurationState | string;

  /**
   * <p>Tags to attach to the resource. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *         Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *       limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;
}

export interface ListLoggingConfigurationsResponse {
  /**
   * <p>List of the matching logging configurations (summary information only). There is only
   *          one type of destination (<code>cloudWatchLogs</code>, <code>firehose</code>, or
   *             <code>s3</code>) in a <code>destinationConfiguration</code>.</p>
   */
  loggingConfigurations: LoggingConfigurationSummary[] | undefined;

  /**
   * <p>If there are more logging configurations than <code>maxResults</code>, use
   *             <code>nextToken</code> in the request to get the next set.</p>
   */
  nextToken?: string;
}

export interface ListRoomsRequest {
  /**
   * <p>Filters the list to match the specified room name.</p>
   */
  name?: string;

  /**
   * <p>The first room to retrieve. This is used for pagination; see the <code>nextToken</code>
   *          response field.</p>
   */
  nextToken?: string;

  /**
   * <p>Maximum number of rooms to return. Default: 50.</p>
   */
  maxResults?: number;

  /**
   * <p>Filters the list to match the specified message review handler URI.</p>
   */
  messageReviewHandlerUri?: string;

  /**
   * <p>Logging-configuration identifier.</p>
   */
  loggingConfigurationIdentifier?: string;
}

/**
 * <p>Summary information about a room.</p>
 */
export interface RoomSummary {
  /**
   * <p>Room ARN.</p>
   */
  arn?: string;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN that
   *       uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Configuration information for optional review of messages.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   */
  createTime?: Date;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this is
   *         returned as a string</i>. </p>
   */
  updateTime?: Date;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *         (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *         Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *       limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *       there.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>List of logging-configuration identifiers attached to the room.</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

export interface ListRoomsResponse {
  /**
   * <p>List of the matching rooms (summary information only).</p>
   */
  rooms: RoomSummary[] | undefined;

  /**
   * <p>If there are more rooms than <code>maxResults</code>, use <code>nextToken</code> in the
   *          request to get the next set.</p>
   */
  nextToken?: string;
}

/**
 * <p/>
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to be retrieved. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface SendEventRequest {
  /**
   * <p>Identifier of the room to which the event will be sent. Currently this must be an
   *          ARN.</p>
   */
  roomIdentifier: string | undefined;

  /**
   * <p>Application-defined name of the event to send to clients.</p>
   */
  eventName: string | undefined;

  /**
   * <p>Application-defined metadata to attach to the event sent to clients. The maximum length
   *          of the metadata is 1 KB total.</p>
   */
  attributes?: Record<string, string>;
}

export interface SendEventResponse {
  /**
   * <p>An identifier generated by Amazon IVS Chat. This identifier must be used in subsequent
   *          operations for this message, such as DeleteMessage.</p>
   */
  id?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to be tagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be added or updated. Array of maps, each of the form
   *             <code>string:string (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource to be untagged. The ARN must be URL-encoded.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Array of tags to be removed. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS
   *             Resources</a> for details, including restrictions that apply to tags and "Tag naming
   *          limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented
   *          there.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateLoggingConfigurationRequest {
  /**
   * <p>Identifier of the logging configuration to be updated.</p>
   */
  identifier: string | undefined;

  /**
   * <p>Logging-configuration name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged. There can be only one type of destination (<code>cloudWatchLogs</code>,
   *             <code>firehose</code>, or <code>s3</code>) in a
   *          <code>destinationConfiguration</code>.</p>
   */
  destinationConfiguration?: DestinationConfiguration;
}

export enum UpdateLoggingConfigurationState {
  ACTIVE = "ACTIVE",
}

export interface UpdateLoggingConfigurationResponse {
  /**
   * <p>Logging-configuration ARN, from the request (if <code>identifier</code> was an
   *          ARN).</p>
   */
  arn?: string;

  /**
   * <p>Logging-configuration ID, generated by the system. This is a relative identifier, the
   *          part of the ARN that uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Time when the logging configuration was created. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the logging configuration’s last update. This is an ISO 8601 timestamp;
   *             <i>note that this is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Logging-configuration name, from the request (if specified).</p>
   */
  name?: string;

  /**
   * <p>A complex type that contains a destination configuration for where chat content will be
   *          logged, from the request. There is only one type of destination
   *             (<code>cloudWatchLogs</code>, <code>firehose</code>, or <code>s3</code>) in a
   *             <code>destinationConfiguration</code>.</p>
   */
  destinationConfiguration?: DestinationConfiguration;

  /**
   * <p>The state of the logging configuration. When the state is <code>ACTIVE</code>, the
   *          configuration is ready to log chat content.</p>
   */
  state?: UpdateLoggingConfigurationState | string;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>. </p>
   */
  tags?: Record<string, string>;
}

export interface UpdateRoomRequest {
  /**
   * <p>Identifier of the room to be updated. Currently this must be an ARN.</p>
   */
  identifier: string | undefined;

  /**
   * <p>Room name. The value does not need to be unique.</p>
   */
  name?: string;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients).
   *          Default: 10.</p>
   */
  maximumMessageRatePerSecond?: number;

  /**
   * <p>The maximum number of characters in a single message. Messages are expected to be UTF-8
   *          encoded and this limit applies specifically to rune/code-point count, not number of bytes.
   *          Default: 500.</p>
   */
  maximumMessageLength?: number;

  /**
   * <p>Configuration information for optional review of messages. Specify an empty
   *             <code>uri</code> string to disassociate a message review handler from the specified
   *          room.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Array of logging-configuration identifiers attached to the room.</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

export interface UpdateRoomResponse {
  /**
   * <p>Room ARN, from the request (if <code>identifier</code> was an ARN).</p>
   */
  arn?: string;

  /**
   * <p>Room ID, generated by the system. This is a relative identifier, the part of the ARN
   *          that uniquely identifies the room.</p>
   */
  id?: string;

  /**
   * <p>Room name, from the request (if specified).</p>
   */
  name?: string;

  /**
   * <p>Time when the room was created. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  createTime?: Date;

  /**
   * <p>Time of the room’s last update. This is an ISO 8601 timestamp; <i>note that this
   *             is returned as a string</i>.</p>
   */
  updateTime?: Date;

  /**
   * <p>Maximum number of messages per second that can be sent to the room (by all clients),
   *          from the request (if specified).</p>
   */
  maximumMessageRatePerSecond?: number;

  /**
   * <p>Maximum number of characters in a single message, from the request (if
   *          specified).</p>
   */
  maximumMessageLength?: number;

  /**
   * <p>Configuration information for optional review of messages.</p>
   */
  messageReviewHandler?: MessageReviewHandler;

  /**
   * <p>Tags attached to the resource. Array of maps, each of the form <code>string:string
   *             (key:value)</code>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Array of logging configurations attached to the room, from the request (if
   *          specified).</p>
   */
  loggingConfigurationIdentifiers?: string[];
}

/**
 * @internal
 */
export const CreateChatTokenRequestFilterSensitiveLog = (obj: CreateChatTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateChatTokenResponseFilterSensitiveLog = (obj: CreateChatTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationExceptionFieldFilterSensitiveLog = (obj: ValidationExceptionField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogsDestinationConfigurationFilterSensitiveLog = (
  obj: CloudWatchLogsDestinationConfiguration
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FirehoseDestinationConfigurationFilterSensitiveLog = (obj: FirehoseDestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3DestinationConfigurationFilterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationConfigurationFilterSensitiveLog = (obj: DestinationConfiguration): any => {
  if (obj.s3 !== undefined) return { s3: S3DestinationConfigurationFilterSensitiveLog(obj.s3) };
  if (obj.cloudWatchLogs !== undefined)
    return { cloudWatchLogs: CloudWatchLogsDestinationConfigurationFilterSensitiveLog(obj.cloudWatchLogs) };
  if (obj.firehose !== undefined) return { firehose: FirehoseDestinationConfigurationFilterSensitiveLog(obj.firehose) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateLoggingConfigurationRequestFilterSensitiveLog = (obj: CreateLoggingConfigurationRequest): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateLoggingConfigurationResponseFilterSensitiveLog = (obj: CreateLoggingConfigurationResponse): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const MessageReviewHandlerFilterSensitiveLog = (obj: MessageReviewHandler): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoomRequestFilterSensitiveLog = (obj: CreateRoomRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoomResponseFilterSensitiveLog = (obj: CreateRoomResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLoggingConfigurationRequestFilterSensitiveLog = (obj: DeleteLoggingConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMessageRequestFilterSensitiveLog = (obj: DeleteMessageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteMessageResponseFilterSensitiveLog = (obj: DeleteMessageResponse): any => ({
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
export const DisconnectUserRequestFilterSensitiveLog = (obj: DisconnectUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisconnectUserResponseFilterSensitiveLog = (obj: DisconnectUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggingConfigurationRequestFilterSensitiveLog = (obj: GetLoggingConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLoggingConfigurationResponseFilterSensitiveLog = (obj: GetLoggingConfigurationResponse): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const GetRoomRequestFilterSensitiveLog = (obj: GetRoomRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRoomResponseFilterSensitiveLog = (obj: GetRoomResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListLoggingConfigurationsRequestFilterSensitiveLog = (obj: ListLoggingConfigurationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingConfigurationSummaryFilterSensitiveLog = (obj: LoggingConfigurationSummary): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const ListLoggingConfigurationsResponseFilterSensitiveLog = (obj: ListLoggingConfigurationsResponse): any => ({
  ...obj,
  ...(obj.loggingConfigurations && {
    loggingConfigurations: obj.loggingConfigurations.map((item) => LoggingConfigurationSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListRoomsRequestFilterSensitiveLog = (obj: ListRoomsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoomSummaryFilterSensitiveLog = (obj: RoomSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoomsResponseFilterSensitiveLog = (obj: ListRoomsResponse): any => ({
  ...obj,
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
});

/**
 * @internal
 */
export const SendEventRequestFilterSensitiveLog = (obj: SendEventRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendEventResponseFilterSensitiveLog = (obj: SendEventResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLoggingConfigurationRequestFilterSensitiveLog = (obj: UpdateLoggingConfigurationRequest): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateLoggingConfigurationResponseFilterSensitiveLog = (obj: UpdateLoggingConfigurationResponse): any => ({
  ...obj,
  ...(obj.destinationConfiguration && {
    destinationConfiguration: DestinationConfigurationFilterSensitiveLog(obj.destinationConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateRoomRequestFilterSensitiveLog = (obj: UpdateRoomRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoomResponseFilterSensitiveLog = (obj: UpdateRoomResponse): any => ({
  ...obj,
});
