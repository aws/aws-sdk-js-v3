// smithy-typescript generated code
import type {
  AllowMessages,
  AppInstanceUserEndpointType,
  EndpointStatus,
  EndpointStatusReason,
  ExpirationCriterion,
  RespondsTo,
  StandardMessages,
  TargetedMessages,
} from "./enums";

/**
 * The details of an `AppInstance`, an instance of an Amazon Chime SDK messaging application.
 *
 * @public
 */
export interface AppInstance {
  /**
   * The ARN of the messaging instance.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The name of an `AppInstance`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time at which an `AppInstance` was created. In epoch milliseconds.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time an `AppInstance` was last updated. In epoch milliseconds.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The metadata of an `AppInstance`.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * The details of a user or bot.
 *
 * @public
 */
export interface Identity {
  /**
   * The ARN in an Identity.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name in an Identity.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * The name and ARN of the admin for the `AppInstance`.
 *
 * @public
 */
export interface AppInstanceAdmin {
  /**
   * The `AppInstanceAdmin` data.
   *
   * @public
   */
  Admin?: Identity | undefined;

  /**
   * The ARN of the `AppInstance` for which the user is an administrator.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The time at which an administrator was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;
}

/**
 * Summary of the details of an `AppInstanceAdmin`.
 *
 * @public
 */
export interface AppInstanceAdminSummary {
  /**
   * The details of the `AppInstanceAdmin`.
   *
   * @public
   */
  Admin?: Identity | undefined;
}

/**
 * Specifies the type of message that triggers a bot.
 *
 * @public
 */
export interface InvokedBy {
  /**
   * Sets standard messages as the bot trigger. For standard messages:
   *
   * - `ALL`: The bot processes all standard messages.
   * - `AUTO`: The bot responds to ALL messages when the channel has one other non-hidden member, and responds to MENTIONS when the channel has more than one other non-hidden member.
   * - `MENTIONS`: The bot processes all standard messages that have a message attribute with `CHIME.mentions` and a value of the bot ARN.
   * - `NONE`: The bot processes no standard messages.
   *
   * @public
   */
  StandardMessages: StandardMessages | undefined;

  /**
   * Sets targeted messages as the bot trigger. For targeted messages:
   *
   * - `ALL`: The bot processes all `TargetedMessages` sent to it. The bot then responds with a targeted message back to the sender.
   * - `NONE`: The bot processes no targeted messages.
   *
   * @public
   */
  TargetedMessages: TargetedMessages | undefined;
}

/**
 * The configuration for an Amazon Lex V2 bot.
 *
 * @public
 */
export interface LexConfiguration {
  /**
   * > **Important:** **Deprecated**. Use `InvokedBy` instead.
   *
   * Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.
   *
   * @public
   */
  RespondsTo?: RespondsTo | undefined;

  /**
   * Specifies the type of message that triggers a bot.
   *
   * @public
   */
  InvokedBy?: InvokedBy | undefined;

  /**
   * The ARN of the Amazon Lex V2 bot's alias. The ARN uses this format: `arn:aws:lex:REGION:ACCOUNT:bot-alias/MYBOTID/MYBOTALIAS`
   *
   * @public
   */
  LexBotAliasArn: string | undefined;

  /**
   * Identifies the Amazon Lex V2 bot's language and locale. The string must match one of the supported locales in Amazon Lex V2. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see [Supported languages](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html) in the *Amazon Lex V2 Developer Guide*.
   *
   * @public
   */
  LocaleId: string | undefined;

  /**
   * The name of the welcome intent configured in the Amazon Lex V2 bot.
   *
   * @public
   */
  WelcomeIntent?: string | undefined;
}

/**
 * A structure that contains configuration data.
 *
 * @public
 */
export interface Configuration {
  /**
   * The configuration for an Amazon Lex V2 bot.
   *
   * @public
   */
  Lex: LexConfiguration | undefined;
}

/**
 * An Amazon Lex V2 chat bot created under an `AppInstance`.
 *
 * @public
 */
export interface AppInstanceBot {
  /**
   * The ARN of the AppInstanceBot.
   *
   * @public
   */
  AppInstanceBotArn?: string | undefined;

  /**
   * The name of the AppInstanceBot.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The data processing instructions for an AppInstanceBot.
   *
   * @public
   */
  Configuration?: Configuration | undefined;

  /**
   * The time at which the `AppInstanceBot` was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the `AppInstanceBot` was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The metadata for an AppInstanceBot.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * High-level information about an AppInstanceBot.
 *
 * @public
 */
export interface AppInstanceBotSummary {
  /**
   * The ARN of the AppInstanceBot.
   *
   * @public
   */
  AppInstanceBotArn?: string | undefined;

  /**
   * The name of the AppInstanceBox.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The metadata of the AppInstanceBot.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * Summary of the data for an `AppInstance`.
 *
 * @public
 */
export interface AppInstanceSummary {
  /**
   * The `AppInstance` ARN.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The name of the `AppInstance`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The metadata of the `AppInstance`.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * The details of the retention settings for a channel.
 *
 * @public
 */
export interface ChannelRetentionSettings {
  /**
   * The time in days to retain the messages in a channel.
   *
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * The details of the data-retention settings for an `AppInstance`.
 *
 * @public
 */
export interface AppInstanceRetentionSettings {
  /**
   * The length of time in days to retain the messages in a channel.
   *
   * @public
   */
  ChannelRetentionSettings?: ChannelRetentionSettings | undefined;
}

/**
 * Determines the interval after which an `AppInstanceUser` is automatically deleted.
 *
 * @public
 */
export interface ExpirationSettings {
  /**
   * The period in days after which an `AppInstanceUser` will be automatically deleted.
   *
   * @public
   */
  ExpirationDays: number | undefined;

  /**
   * Specifies the conditions under which an `AppInstanceUser` will expire.
   *
   * @public
   */
  ExpirationCriterion: ExpirationCriterion | undefined;
}

/**
 * The details of an `AppInstanceUser`.
 *
 * @public
 */
export interface AppInstanceUser {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The name of the `AppInstanceUser`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The metadata of the `AppInstanceUser`.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The time at which the `AppInstanceUser` was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which the `AppInstanceUser` was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The interval after which an `AppInstanceUser` is automatically deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * The attributes of an `Endpoint`.
 *
 * @public
 */
export interface EndpointAttributes {
  /**
   * The device token for the GCM, APNS, and APNS_SANDBOX endpoint types.
   *
   * @public
   */
  DeviceToken: string | undefined;

  /**
   * The VOIP device token for the APNS and APNS_SANDBOX endpoint types.
   *
   * @public
   */
  VoipDeviceToken?: string | undefined;
}

/**
 * A read-only field that represents the state of an `AppInstanceUserEndpoint`. Supported values:
 *
 * - `ACTIVE`: The `AppInstanceUserEndpoint` is active and able to receive messages. When `ACTIVE`, the `EndpointStatusReason` remains empty.
 * - `INACTIVE`: The `AppInstanceUserEndpoint` is inactive and can't receive message. When INACTIVE, the corresponding reason will be conveyed through EndpointStatusReason.
 * - `INVALID_DEVICE_TOKEN` indicates that an `AppInstanceUserEndpoint` is `INACTIVE` due to invalid device token
 * - `INVALID_PINPOINT_ARN` indicates that an `AppInstanceUserEndpoint` is `INACTIVE` due to an invalid pinpoint ARN that was input through the `ResourceArn` field.
 *
 * @public
 */
export interface EndpointState {
  /**
   * Enum that indicates the Status of an `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Status: EndpointStatus | undefined;

  /**
   * The reason for the `EndpointStatus`.
   *
   * @public
   */
  StatusReason?: EndpointStatusReason | undefined;
}

/**
 * An endpoint under an Amazon Chime `AppInstanceUser` that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.
 *
 * @public
 */
export interface AppInstanceUserEndpoint {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The name of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Type?: AppInstanceUserEndpointType | undefined;

  /**
   * The ARN of the resource to which the endpoint belongs.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The attributes of an `Endpoint`.
   *
   * @public
   */
  EndpointAttributes?: EndpointAttributes | undefined;

  /**
   * The time at which an `AppInstanceUserEndpoint` was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which an `AppInstanceUserEndpoint` was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * Boolean that controls whether the `AppInstanceUserEndpoint` is opted in to receive messages. `ALL` indicates the endpoint will receive all messages. `NONE` indicates the endpoint will receive no messages.
   *
   * @public
   */
  AllowMessages?: AllowMessages | undefined;

  /**
   * A read-only field that represents the state of an `AppInstanceUserEndpoint`. Supported values:
   *
   * - `ACTIVE`: The `AppInstanceUserEndpoint` is active and able to receive messages. When `ACTIVE`, the `EndpointStatusReason` remains empty.
   * - `INACTIVE`: The `AppInstanceUserEndpoint` is inactive and can't receive message. When `INACTIVE`, the corresponding reason will be conveyed through `EndpointStatusReason`.
   * - `INVALID_DEVICE_TOKEN` indicates that an `AppInstanceUserEndpoint` is `INACTIVE` due to invalid device token
   * - `INVALID_PINPOINT_ARN` indicates that an `AppInstanceUserEndpoint` is `INACTIVE` due to an invalid pinpoint ARN that was input through the `ResourceArn` field.
   *
   * @public
   */
  EndpointState?: EndpointState | undefined;
}

/**
 * Summary of the details of an `AppInstanceUserEndpoint`.
 *
 * @public
 */
export interface AppInstanceUserEndpointSummary {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * The name of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Type?: AppInstanceUserEndpointType | undefined;

  /**
   * BBoolean that controls whether the `AppInstanceUserEndpoint` is opted in to receive messages. `ALL` indicates the endpoint will receive all messages. `NONE` indicates the endpoint will receive no messages.
   *
   * @public
   */
  AllowMessages?: AllowMessages | undefined;

  /**
   * A read-only field that represent the state of an `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointState?: EndpointState | undefined;
}

/**
 * Summary of the details of an `AppInstanceUser`.
 *
 * @public
 */
export interface AppInstanceUserSummary {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The name of an `AppInstanceUser`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The metadata of the `AppInstanceUser`.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * A tag object containing a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * The key in a tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value in a tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceRequest {
  /**
   * The name of the `AppInstance`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The metadata of the `AppInstance`. Limited to a 1KB string in UTF-8.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The unique ID of the request. Use different tokens to create different `AppInstances`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags assigned to the `AppInstance`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceResponse {
  /**
   * The Amazon Resource Number (ARN) of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminRequest {
  /**
   * The ARN of the administrator of the current `AppInstance`.
   *
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceAdminResponse {
  /**
   * The ARN and name of the administrator, the ARN of the `AppInstance`, and the created and last-updated timestamps. All timestamps use epoch milliseconds.
   *
   * @public
   */
  AppInstanceAdmin?: Identity | undefined;

  /**
   * The ARN of the of the admin for the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceBotRequest {
  /**
   * The ARN of the `AppInstance` request.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The user's name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The request metadata. Limited to a 1KB string in UTF-8.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The unique ID for the client making the request. Use different tokens for different `AppInstanceBots`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags assigned to the `AppInstanceBot`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Configuration information about the Amazon Lex V2 V2 bot.
   *
   * @public
   */
  Configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceBotResponse {
  /**
   * The ARN of the `AppinstanceBot`.
   *
   * @public
   */
  AppInstanceBotArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserRequest {
  /**
   * The ARN of the `AppInstance` request.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The user ID of the `AppInstance`.
   *
   * @public
   */
  AppInstanceUserId: string | undefined;

  /**
   * The user's name.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The request's metadata. Limited to a 1KB string in UTF-8.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The unique ID of the request. Use different tokens to request additional `AppInstances`.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Tags assigned to the `AppInstanceUser`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Settings that control the interval after which the `AppInstanceUser` is automatically deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface CreateAppInstanceUserResponse {
  /**
   * The user's ARN.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceAdminRequest {
  /**
   * The ARN of the `AppInstance`'s administrator.
   *
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceBotRequest {
  /**
   * The ARN of the `AppInstanceBot` being deleted.
   *
   * @public
   */
  AppInstanceBotArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAppInstanceUserRequest {
  /**
   * The ARN of the user request being deleted.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DeregisterAppInstanceUserEndpointRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceResponse {
  /**
   * The ARN, metadata, created and last-updated timestamps, and the name of the `AppInstance`. All timestamps use epoch milliseconds.
   *
   * @public
   */
  AppInstance?: AppInstance | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminRequest {
  /**
   * The ARN of the `AppInstanceAdmin`.
   *
   * @public
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceAdminResponse {
  /**
   * The ARN and name of the `AppInstanceUser`, the ARN of the `AppInstance`, and the created and last-updated timestamps. All timestamps use epoch milliseconds.
   *
   * @public
   */
  AppInstanceAdmin?: AppInstanceAdmin | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotRequest {
  /**
   * The ARN of the `AppInstanceBot`.
   *
   * @public
   */
  AppInstanceBotArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceBotResponse {
  /**
   * The detials of the `AppInstanceBot`.
   *
   * @public
   */
  AppInstanceBot?: AppInstanceBot | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserResponse {
  /**
   * The name of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUser?: AppInstanceUser | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserEndpointRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAppInstanceUserEndpointResponse {
  /**
   * The full details of an `AppInstanceUserEndpoint`: the `AppInstanceUserArn`, ID, name, type, resource ARN, attributes, allow messages, state, and created and last updated timestamps. All timestamps use epoch milliseconds.
   *
   * @public
   */
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * The retention settings for the `AppInstance`.
   *
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * The timestamp representing the time at which the specified items are retained, in Epoch Seconds.
   *
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The maximum number of administrators that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from previous API requests until the number of administrators is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceAdminsResponse {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The information for each administrator.
   *
   * @public
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[] | undefined;

  /**
   * The token returned from previous API requests until the number of administrators is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceBotsRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The maximum number of requests to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested bots are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceBotsResponse {
  /**
   * The ARN of the AppInstance.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The information for each requested `AppInstanceBot`.
   *
   * @public
   */
  AppInstanceBots?: AppInstanceBotSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested bots are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesRequest {
  /**
   * The maximum number of `AppInstance`s that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API requests until you reach the maximum number of `AppInstances`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstancesResponse {
  /**
   * The information for each `AppInstance`.
   *
   * @public
   */
  AppInstances?: AppInstanceSummary[] | undefined;

  /**
   * The token passed by previous API requests until the maximum number of `AppInstance`s is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The maximum number of endpoints that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested endpoints are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUserEndpointsResponse {
  /**
   * The information for each requested `AppInstanceUserEndpoint`.
   *
   * @public
   */
  AppInstanceUserEndpoints?: AppInstanceUserEndpointSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested endpoints are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The maximum number of requests that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested users are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAppInstanceUsersResponse {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;

  /**
   * The information for each requested `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUsers?: AppInstanceUserSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested users are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tag key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The time in days to retain data. Data type: number.
   *
   * @public
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * The time in days to retain data. Data type: number.
   *
   * @public
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings | undefined;

  /**
   * The time at which the API deletes data.
   *
   * @public
   */
  InitiateDeletionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * Settings that control the interval after which an `AppInstanceUser` is automatically deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutAppInstanceUserExpirationSettingsResponse {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * Settings that control the interval after which an `AppInstanceUser` is automatically deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The name of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the `AppInstanceUserEndpoint`. Supported types:
   *
   * - `APNS`: The mobile notification service for an Apple device.
   * - `APNS_SANDBOX`: The sandbox environment of the mobile notification service for an Apple device.
   * - `GCM`: The mobile notification service for an Android device.
   *
   * Populate the `ResourceArn` value of each type as `PinpointAppArn`.
   *
   * @public
   */
  Type: AppInstanceUserEndpointType | undefined;

  /**
   * The ARN of the resource to which the endpoint belongs.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The attributes of an `Endpoint`.
   *
   * @public
   */
  EndpointAttributes: EndpointAttributes | undefined;

  /**
   * The unique ID assigned to the request. Use different tokens to register other endpoints.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. `ALL` indicates the endpoint receives all messages. `NONE` indicates the endpoint receives no messages.
   *
   * @public
   */
  AllowMessages?: AllowMessages | undefined;
}

/**
 * @public
 */
export interface RegisterAppInstanceUserEndpointResponse {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag key-value pairs.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The resource ARN.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The name that you want to change.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The metadata that you want to change.
   *
   * @public
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceResponse {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotRequest {
  /**
   * The ARN of the `AppInstanceBot`.
   *
   * @public
   */
  AppInstanceBotArn: string | undefined;

  /**
   * The name of the `AppInstanceBot`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The metadata of the `AppInstanceBot`.
   *
   * @public
   */
  Metadata: string | undefined;

  /**
   * The configuration for the bot update.
   *
   * @public
   */
  Configuration?: Configuration | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceBotResponse {
  /**
   * The ARN of the `AppInstanceBot`.
   *
   * @public
   */
  AppInstanceBotArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The name of the `AppInstanceUser`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The metadata of the `AppInstanceUser`.
   *
   * @public
   */
  Metadata: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserResponse {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointRequest {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId: string | undefined;

  /**
   * The name of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Boolean that controls whether the `AppInstanceUserEndpoint` is opted in to receive messages. `ALL` indicates the endpoint will receive all messages. `NONE` indicates the endpoint will receive no messages.
   *
   * @public
   */
  AllowMessages?: AllowMessages | undefined;
}

/**
 * @public
 */
export interface UpdateAppInstanceUserEndpointResponse {
  /**
   * The ARN of the `AppInstanceUser`.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The unique identifier of the `AppInstanceUserEndpoint`.
   *
   * @public
   */
  EndpointId?: string | undefined;
}
