// smithy-typescript generated code
import type {
  ChatTokenCapability,
  CreateLoggingConfigurationState,
  FallbackResult,
  LoggingConfigurationState,
  UpdateLoggingConfigurationState,
} from "./enums";

/**
 * @public
 */
export interface CreateChatTokenRequest {
  /**
   * Identifier of the room that the client is trying to access. Currently this must be an ARN.
   *
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * Application-provided ID that uniquely identifies the user associated with this token. This can be any UTF-8 encoded text.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * Set of capabilities that the user is allowed to perform in the room. Default: None (the capability to view messages is implicitly included in all requests).
   *
   * @public
   */
  capabilities?: ChatTokenCapability[] | undefined;

  /**
   * Session duration (in minutes), after which the session expires. Default: 60 (1 hour).
   *
   * @public
   */
  sessionDurationInMinutes?: number | undefined;

  /**
   * Application-provided attributes to encode into the token and attach to a chat session. Map keys and values can contain UTF-8 encoded text. The maximum length of this field is 1 KB total.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateChatTokenResponse {
  /**
   * The issued client token, encrypted.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * Time after which the token is no longer valid and cannot be used to connect to a room. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  tokenExpirationTime?: Date | undefined;

  /**
   * Time after which an end user's session is no longer valid. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  sessionExpirationTime?: Date | undefined;
}

/**
 * This object is used in the ValidationException error.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Name of the field which failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Explanation of the reason for the validation error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Specifies a CloudWatch Logs location where chat logs will be stored.
 *
 * @public
 */
export interface CloudWatchLogsDestinationConfiguration {
  /**
   * Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.
   *
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * Specifies a Kinesis Firehose location where chat logs will be stored.
 *
 * @public
 */
export interface FirehoseDestinationConfiguration {
  /**
   * Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
   *
   * @public
   */
  deliveryStreamName: string | undefined;
}

/**
 * Specifies an S3 location where chat logs will be stored.
 *
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * Name of the Amazon S3 bucket where chat activity will be logged.
   *
   * @public
   */
  bucketName: string | undefined;
}

/**
 * A complex type that describes a location where chat logs will be stored. Each member represents the configuration of one log destination. For logging, you define only one type of destination (for CloudWatch Logs, Kinesis Firehose, or S3).
 *
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
   * An Amazon S3 destination configuration where chat activity will be logged.
   *
   * @public
   */
  export interface S3Member {
    s3: S3DestinationConfiguration;
    cloudWatchLogs?: never;
    firehose?: never;
    $unknown?: never;
  }

  /**
   * An Amazon CloudWatch Logs destination configuration where chat activity will be logged.
   *
   * @public
   */
  export interface CloudWatchLogsMember {
    s3?: never;
    cloudWatchLogs: CloudWatchLogsDestinationConfiguration;
    firehose?: never;
    $unknown?: never;
  }

  /**
   * An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3DestinationConfiguration) => T;
    cloudWatchLogs: (value: CloudWatchLogsDestinationConfiguration) => T;
    firehose: (value: FirehoseDestinationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * Logging-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged. There can be only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  destinationConfiguration: DestinationConfiguration | undefined;

  /**
   * Tags to attach to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * Logging-configuration ARN, assigned by the system.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Logging-configuration ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the logging configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Time when the logging configuration was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the logging configuration’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Logging-configuration name, from the request (if specified).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged, from the request. There is only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The state of the logging configuration. When the state is `ACTIVE`, the configuration is ready to log chat content.
   *
   * @public
   */
  state?: CreateLoggingConfigurationState | undefined;

  /**
   * Tags attached to the resource, from the request (if specified). Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Configuration information for optional message review.
 *
 * @public
 */
export interface MessageReviewHandler {
  /**
   * Identifier of the message review handler. Currently this must be an ARN of a lambda function.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * Specifies the fallback behavior (whether the message is allowed or denied) if the handler does not return a valid response, encounters an error, or times out. (For the timeout period, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html).) If allowed, the message is delivered with returned content to all users connected to the room. If denied, the message is not delivered to any user. Default: `ALLOW`.
   *
   * @public
   */
  fallbackResult?: FallbackResult | undefined;
}

/**
 * @public
 */
export interface CreateRoomRequest {
  /**
   * Room name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
   *
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
   *
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * Configuration information for optional review of messages.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Tags to attach to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Array of logging-configuration identifiers attached to the room.
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateRoomResponse {
  /**
   * Room ARN, assigned by the system.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Room name, from the request (if specified).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Time when the room was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the room’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Maximum number of messages per second that can be sent to the room (by all clients), from the request (if specified).
   *
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * Maximum number of characters in a single message, from the request (if specified).
   *
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * Configuration information for optional review of messages.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Tags attached to the resource, from the request (if specified).
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Array of logging configurations attached to the room, from the request (if specified).
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * Identifier of the logging configuration to be deleted.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageRequest {
  /**
   * Identifier of the room where the message should be deleted. Currently this must be an ARN.
   *
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * ID of the message to be deleted. This is the `Id` field in the received message (see [Message (Subscribe)](https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-message-subscribe.html) in the Chat Messaging API).
   *
   * @public
   */
  id: string | undefined;

  /**
   * Reason for deleting the message.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessageResponse {
  /**
   * Operation identifier, generated by Amazon IVS Chat.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoomRequest {
  /**
   * Identifier of the room to be deleted. Currently this must be an ARN.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DisconnectUserRequest {
  /**
   * Identifier of the room from which the user's clients should be disconnected. Currently this must be an ARN.
   *
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * ID of the user (connection) to disconnect from the room.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * Reason for disconnecting the user.
   *
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
   * Identifier of the logging configuration to be retrieved.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetLoggingConfigurationResponse {
  /**
   * Logging-configuration ARN, from the request (if `identifier` was an ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Logging-configuration ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the logging configuration.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Time when the logging configuration was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the logging configuration’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Logging-configuration name. This value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged. There is only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The state of the logging configuration. When the state is `ACTIVE`, the configuration is ready to log chat content.
   *
   * @public
   */
  state?: LoggingConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetRoomRequest {
  /**
   * Identifier of the room for which the configuration is to be retrieved. Currently this must be an ARN.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetRoomResponse {
  /**
   * Room ARN, from the request (if `identifier` was an ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Room name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Time when the room was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the room’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
   *
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * Maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
   *
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * Configuration information for optional review of messages.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Array of logging configurations attached to the room.
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsRequest {
  /**
   * The first logging configurations to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of logging configurations to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a logging configuration.
 *
 * @public
 */
export interface LoggingConfigurationSummary {
  /**
   * Logging-configuration ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Logging-configuration ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Time when the logging configuration was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the logging configuration’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Logging-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The state of the logging configuration. When this is `ACTIVE`, the configuration is ready for logging chat content.
   *
   * @public
   */
  state?: LoggingConfigurationState | undefined;

  /**
   * Tags to attach to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints on tags beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListLoggingConfigurationsResponse {
  /**
   * List of the matching logging configurations (summary information only). There is only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  loggingConfigurations: LoggingConfigurationSummary[] | undefined;

  /**
   * If there are more logging configurations than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoomsRequest {
  /**
   * Filters the list to match the specified room name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The first room to retrieve. This is used for pagination; see the `nextToken` response field.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of rooms to return. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filters the list to match the specified message review handler URI.
   *
   * @public
   */
  messageReviewHandlerUri?: string | undefined;

  /**
   * Logging-configuration identifier.
   *
   * @public
   */
  loggingConfigurationIdentifier?: string | undefined;
}

/**
 * Summary information about a room.
 *
 * @public
 */
export interface RoomSummary {
  /**
   * Room ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Room name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Configuration information for optional review of messages.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Time when the room was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the room’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * List of logging-configuration identifiers attached to the room.
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface ListRoomsResponse {
  /**
   * List of the matching rooms (summary information only).
   *
   * @public
   */
  rooms: RoomSummary[] | undefined;

  /**
   * If there are more rooms than `maxResults`, use `nextToken` in the request to get the next set.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to be retrieved. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SendEventRequest {
  /**
   * Identifier of the room to which the event will be sent. Currently this must be an ARN.
   *
   * @public
   */
  roomIdentifier: string | undefined;

  /**
   * Application-defined name of the event to send to clients.
   *
   * @public
   */
  eventName: string | undefined;

  /**
   * Application-defined metadata to attach to the event sent to clients. The maximum length of the metadata is 1 KB total.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SendEventResponse {
  /**
   * An identifier generated by Amazon IVS Chat. This identifier must be used in subsequent operations for this message, such as DeleteMessage.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to be tagged. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be added or updated. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
   *
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
   * The ARN of the resource to be untagged. The ARN must be URL-encoded.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Array of tags to be removed. Array of maps, each of the form `string:string (key:value)`. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no constraints beyond what is documented there.
   *
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
   * Identifier of the logging configuration to be updated.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Logging-configuration name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged. There can be only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * Logging-configuration ARN, from the request (if `identifier` was an ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Logging-configuration ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Time when the logging configuration was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the logging configuration’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Logging-configuration name, from the request (if specified).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A complex type that contains a destination configuration for where chat content will be logged, from the request. There is only one type of destination (`cloudWatchLogs`, `firehose`, or `s3`) in a `destinationConfiguration`.
   *
   * @public
   */
  destinationConfiguration?: DestinationConfiguration | undefined;

  /**
   * The state of the logging configuration. When the state is `ACTIVE`, the configuration is ready to log chat content.
   *
   * @public
   */
  state?: UpdateLoggingConfigurationState | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateRoomRequest {
  /**
   * Identifier of the room to be updated. Currently this must be an ARN.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Room name. The value does not need to be unique.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Maximum number of messages per second that can be sent to the room (by all clients). Default: 10.
   *
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * The maximum number of characters in a single message. Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes. Default: 500.
   *
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * Configuration information for optional review of messages. Specify an empty `uri` string to disassociate a message review handler from the specified room.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Array of logging-configuration identifiers attached to the room.
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoomResponse {
  /**
   * Room ARN, from the request (if `identifier` was an ARN).
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Room ID, generated by the system. This is a relative identifier, the part of the ARN that uniquely identifies the room.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Room name, from the request (if specified).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Time when the room was created. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  createTime?: Date | undefined;

  /**
   * Time of the room’s last update. This is an ISO 8601 timestamp; *note that this is returned as a string*.
   *
   * @public
   */
  updateTime?: Date | undefined;

  /**
   * Maximum number of messages per second that can be sent to the room (by all clients), from the request (if specified).
   *
   * @public
   */
  maximumMessageRatePerSecond?: number | undefined;

  /**
   * Maximum number of characters in a single message, from the request (if specified).
   *
   * @public
   */
  maximumMessageLength?: number | undefined;

  /**
   * Configuration information for optional review of messages.
   *
   * @public
   */
  messageReviewHandler?: MessageReviewHandler | undefined;

  /**
   * Tags attached to the resource. Array of maps, each of the form `string:string (key:value)`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Array of logging configurations attached to the room, from the request (if specified).
   *
   * @public
   */
  loggingConfigurationIdentifiers?: string[] | undefined;
}
