// smithy-typescript generated code
import type {
  AllowNotifications,
  ChannelMembershipType,
  ChannelMessagePersistenceType,
  ChannelMessageStatus,
  ChannelMessageType,
  ChannelMode,
  ChannelPrivacy,
  ErrorCode,
  ExpirationCriterion,
  FallbackAction,
  InvocationType,
  MessagingDataType,
  NetworkType,
  PushNotificationType,
  SearchFieldKey,
  SearchFieldOperator,
  SortOrder,
} from "./enums";

/**
 * Summary of the membership details of an `AppInstanceUser`.
 *
 * @public
 */
export interface AppInstanceUserMembershipSummary {
  /**
   * The type of `ChannelMembership`.
   *
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * The time at which an `AppInstanceUser` last marked a channel as read.
   *
   * @public
   */
  ReadMarkerTimestamp?: Date | undefined;

  /**
   * The ID of the SubChannel that the `AppInstanceUser` is a member of.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateChannelFlowRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the user making the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
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
 * The membership information, including member ARNs, the channel ARN, and membership types.
 *
 * @public
 */
export interface BatchChannelMemberships {
  /**
   * The identifier of the member who invited another member.
   *
   * @public
   */
  InvitedBy?: Identity | undefined;

  /**
   * The membership types set for the channel members.
   *
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * The users successfully added to the request.
   *
   * @public
   */
  Members?: Identity[] | undefined;

  /**
   * The ARN of the channel to which you're adding members.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ID of the SubChannel.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipRequest {
  /**
   * The ARN of the channel to which you're adding users or bots.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The membership type of a user, `DEFAULT` or `HIDDEN`. Default members are always returned as part of `ListChannelMemberships`. Hidden members are only returned if the type filter in `ListChannelMemberships` equals `HIDDEN`. Otherwise hidden members are not returned. This is only supported by moderators.
   *
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * The ARNs of the members you want to add to the channel. Only `AppInstanceUsers` and `AppInstanceBots` can be added as a channel member.
   *
   * @public
   */
  MemberArns: string[] | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when creating membership in a SubChannel for a moderator in an elastic channel.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * A list of failed member ARNs, error codes, and error messages.
 *
 * @public
 */
export interface BatchCreateChannelMembershipError {
  /**
   * The `AppInstanceUserArn` of the member that the service couldn't add.
   *
   * @public
   */
  MemberArn?: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateChannelMembershipResponse {
  /**
   * The list of channel memberships in the response.
   *
   * @public
   */
  BatchChannelMemberships?: BatchChannelMemberships | undefined;

  /**
   * If the action fails for one or more of the memberships in the request, a list of the memberships is returned, along with error codes and error messages.
   *
   * @public
   */
  Errors?: BatchCreateChannelMembershipError[] | undefined;
}

/**
 * The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.
 *
 * @public
 */
export interface ElasticChannelConfiguration {
  /**
   * The maximum number of SubChannels that you want to allow in the elastic channel.
   *
   * @public
   */
  MaximumSubChannels: number | undefined;

  /**
   * The maximum number of members allowed in a SubChannel.
   *
   * @public
   */
  TargetMembershipsPerSubChannel: number | undefined;

  /**
   * The minimum allowed percentage of TargetMembershipsPerSubChannel users. Ceil of the calculated value is used in balancing members among SubChannels of the elastic channel.
   *
   * @public
   */
  MinimumMembershipPercentage: number | undefined;
}

/**
 * Settings that control the interval after which a channel is deleted.
 *
 * @public
 */
export interface ExpirationSettings {
  /**
   * The period in days after which the system automatically deletes a channel.
   *
   * @public
   */
  ExpirationDays: number | undefined;

  /**
   * The conditions that must be met for a channel to expire.
   *
   * @public
   */
  ExpirationCriterion: ExpirationCriterion | undefined;
}

/**
 * The details of a channel.
 *
 * @public
 */
export interface Channel {
  /**
   * The name of a channel.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of a channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The mode of the channel.
   *
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * The channel's privacy setting.
   *
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * The channel's metadata.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The `AppInstanceUser` who created the channel.
   *
   * @public
   */
  CreatedBy?: Identity | undefined;

  /**
   * The time at which the `AppInstanceUser` created the channel.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a member sent the last message in the channel.
   *
   * @public
   */
  LastMessageTimestamp?: Date | undefined;

  /**
   * The time at which a channel was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million members.
   *
   * @public
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration | undefined;

  /**
   * Settings that control when a channel expires.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * Summary of details of a channel associated with channel flow.
 *
 * @public
 */
export interface ChannelAssociatedWithFlowSummary {
  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The mode of the channel.
   *
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * The channel's privacy setting.
   *
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * The channel's metadata.
   *
   * @public
   */
  Metadata?: string | undefined;
}

/**
 * The details of a channel ban.
 *
 * @public
 */
export interface ChannelBan {
  /**
   * The member being banned from the channel.
   *
   * @public
   */
  Member?: Identity | undefined;

  /**
   * The ARN of the channel from which a member is being banned.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The time at which the ban was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The `AppInstanceUser` who created the ban.
   *
   * @public
   */
  CreatedBy?: Identity | undefined;
}

/**
 * Summary of the details of a `ChannelBan`.
 *
 * @public
 */
export interface ChannelBanSummary {
  /**
   * The member being banned from a channel.
   *
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * Stores metadata about a Lambda processor.
 *
 * @public
 */
export interface LambdaConfiguration {
  /**
   * The ARN of the Lambda message processing function.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Controls how the Lambda function is invoked.
   *
   * @public
   */
  InvocationType: InvocationType | undefined;
}

/**
 * A processor's metadata.
 *
 * @public
 */
export interface ProcessorConfiguration {
  /**
   * Indicates that the processor is of type Lambda.
   *
   * @public
   */
  Lambda: LambdaConfiguration | undefined;
}

/**
 * The information about a processor in a channel flow.
 *
 * @public
 */
export interface Processor {
  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The information about the type of processor and its identifier.
   *
   * @public
   */
  Configuration: ProcessorConfiguration | undefined;

  /**
   * The sequence in which processors run. If you have multiple processors in a channel flow, message processing goes through each processor in the sequence. The value determines the sequence. At this point, we support only 1 processor within a flow.
   *
   * @public
   */
  ExecutionOrder: number | undefined;

  /**
   * Determines whether to continue with message processing or stop it in cases where communication with a processor fails. If a processor has a fallback action of `ABORT` and communication with it fails, the processor sets the message status to `FAILED` and does not send the message to any recipients. Note that if the last processor in the channel flow sequence has a fallback action of `CONTINUE` and communication with the processor fails, then the message is considered processed and sent to recipients of the channel.
   *
   * @public
   */
  FallbackAction: FallbackAction | undefined;
}

/**
 * The details of a channel flow.
 *
 * @public
 */
export interface ChannelFlow {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * Information about the processor Lambda functions.
   *
   * @public
   */
  Processors?: Processor[] | undefined;

  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The time at which the channel flow was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a channel flow was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;
}

/**
 * A list of message attribute values.
 *
 * @public
 */
export interface MessageAttributeValue {
  /**
   * The strings in a message attribute value.
   *
   * @public
   */
  StringValues?: string[] | undefined;
}

/**
 * The push notification configuration of the message.
 *
 * @public
 */
export interface PushNotificationConfiguration {
  /**
   * The title of the push notification.
   *
   * @public
   */
  Title?: string | undefined;

  /**
   * The body of the push notification.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * Enum value that indicates the type of the push notification for a message. `DEFAULT`: Normal mobile push notification. `VOIP`: VOIP mobile push notification.
   *
   * @public
   */
  Type?: PushNotificationType | undefined;
}

/**
 * Stores information about a callback.
 *
 * @public
 */
export interface ChannelMessageCallback {
  /**
   * The message ID.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The message content. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The message metadata.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The push notification configuration of the message.
   *
   * @public
   */
  PushNotification?: PushNotificationConfiguration | undefined;

  /**
   * The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The ID of the SubChannel.
   *
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * The content type of the call-back message. For Amazon Lex V2 bot responses, the content type is `application/amz-chime-lex-msgs` for success responses and `application/amz-chime-lex-error` for failure responses. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface ChannelFlowCallbackRequest {
  /**
   * The identifier passed to the processor by the service when invoked. Use the identifier to call back the service.
   *
   * @public
   */
  CallbackId?: string | undefined;

  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * When a processor determines that a message needs to be `DENIED`, pass this parameter with a value of true.
   *
   * @public
   */
  DeleteResource?: boolean | undefined;

  /**
   * Stores information about the processed message.
   *
   * @public
   */
  ChannelMessage: ChannelMessageCallback | undefined;
}

/**
 * @public
 */
export interface ChannelFlowCallbackResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The call back ID passed in the request.
   *
   * @public
   */
  CallbackId?: string | undefined;
}

/**
 * Summary of details of a channel flow.
 *
 * @public
 */
export interface ChannelFlowSummary {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn?: string | undefined;

  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Information about the processor Lambda functions.
   *
   * @public
   */
  Processors?: Processor[] | undefined;
}

/**
 * The details of a channel member.
 *
 * @public
 */
export interface ChannelMembership {
  /**
   * The identifier of the member who invited another member.
   *
   * @public
   */
  InvitedBy?: Identity | undefined;

  /**
   * The membership type set for the channel member.
   *
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * The data of the channel member.
   *
   * @public
   */
  Member?: Identity | undefined;

  /**
   * The ARN of the member's channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The time at which the channel membership was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a channel membership was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The ID of the SubChannel that a user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * Summary of the details of a `Channel`.
 *
 * @public
 */
export interface ChannelSummary {
  /**
   * The name of the channel.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The mode of the channel.
   *
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * The privacy setting of the channel.
   *
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * The metadata of the channel.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The time at which the last persistent message visible to the caller in a channel was sent.
   *
   * @public
   */
  LastMessageTimestamp?: Date | undefined;
}

/**
 * Summary of the channel membership details of an `AppInstanceUser`.
 *
 * @public
 */
export interface ChannelMembershipForAppInstanceUserSummary {
  /**
   * Returns the channel data for an `AppInstance`.
   *
   * @public
   */
  ChannelSummary?: ChannelSummary | undefined;

  /**
   * Returns the channel membership data for an `AppInstance`.
   *
   * @public
   */
  AppInstanceUserMembershipSummary?: AppInstanceUserMembershipSummary | undefined;
}

/**
 * The channel membership preferences for push notification.
 *
 * @public
 */
export interface PushNotificationPreferences {
  /**
   * Enum value that indicates which push notifications to send to the requested member of a channel. `ALL` sends all push notifications, `NONE` sends no push notifications, `FILTERED` sends only filtered push notifications.
   *
   * @public
   */
  AllowNotifications: AllowNotifications | undefined;

  /**
   * The simple JSON object used to send a subset of a push notification to the requested member.
   *
   * @public
   */
  FilterRule?: string | undefined;
}

/**
 * The channel membership preferences for an `AppInstanceUser`.
 *
 * @public
 */
export interface ChannelMembershipPreferences {
  /**
   * The push notification configuration of a message.
   *
   * @public
   */
  PushNotifications?: PushNotificationPreferences | undefined;
}

/**
 * Summary of the details of a `ChannelMembership`.
 *
 * @public
 */
export interface ChannelMembershipSummary {
  /**
   * A member's summary data.
   *
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * Stores information about a message status.
 *
 * @public
 */
export interface ChannelMessageStatusStructure {
  /**
   * The message status value.
   *
   * @public
   */
  Value?: ChannelMessageStatus | undefined;

  /**
   * Contains more details about the message status.
   *
   * @public
   */
  Detail?: string | undefined;
}

/**
 * The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
 *
 * @public
 */
export interface Target {
  /**
   * The ARN of the target channel member.
   *
   * @public
   */
  MemberArn?: string | undefined;
}

/**
 * The details of a message in a channel.
 *
 * @public
 */
export interface ChannelMessage {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ID of a message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The message metadata.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The message type.
   *
   * @public
   */
  Type?: ChannelMessageType | undefined;

  /**
   * The time at which the message was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a message was edited.
   *
   * @public
   */
  LastEditedTimestamp?: Date | undefined;

  /**
   * The time at which a message was updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The message sender.
   *
   * @public
   */
  Sender?: Identity | undefined;

  /**
   * Hides the content of a message.
   *
   * @public
   */
  Redacted?: boolean | undefined;

  /**
   * The persistence setting for a channel message.
   *
   * @public
   */
  Persistence?: ChannelMessagePersistenceType | undefined;

  /**
   * The status of the channel message.
   *
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The ID of the SubChannel.
   *
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * The content type of the channel message. For Amazon Lex V2 bot responses, the content type is `application/amz-chime-lex-msgs` for success responses and `application/amz-chime-lex-error` for failure responses. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
   *
   * @public
   */
  Target?: Target[] | undefined;
}

/**
 * Summary of the messages in a `Channel`.
 *
 * @public
 */
export interface ChannelMessageSummary {
  /**
   * The ID of the message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The content of the channel message. For Amazon Lex V2 bot responses, this field holds a list of messages originating from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  Content?: string | undefined;

  /**
   * The metadata of the message.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The type of message.
   *
   * @public
   */
  Type?: ChannelMessageType | undefined;

  /**
   * The time at which the message summary was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The time at which a message was last updated.
   *
   * @public
   */
  LastUpdatedTimestamp?: Date | undefined;

  /**
   * The time at which a message was last edited.
   *
   * @public
   */
  LastEditedTimestamp?: Date | undefined;

  /**
   * The message sender.
   *
   * @public
   */
  Sender?: Identity | undefined;

  /**
   * Indicates whether a message was redacted.
   *
   * @public
   */
  Redacted?: boolean | undefined;

  /**
   * The message status. The status value is `SENT` for messages sent to a channel without a channel flow. For channels associated with channel flow, the value determines the processing stage.
   *
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * The attributes for the channel message. For Amazon Lex V2 bot responses, the attributes are mapped to specific fields from the bot. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The content type of the channel message listed in the summary. For Amazon Lex V2 bot responses, the content type is `application/amz-chime-lex-msgs` for success responses and `application/amz-chime-lex-error` for failure responses. For more information, refer to [Processing responses from an AppInstanceBot](https://docs.aws.amazon.com/chime-sdk/latest/dg/appinstance-bots#process-response.html) in the *Amazon Chime SDK Messaging Developer Guide*.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The target of a message, a sender, a user, or a bot. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
   *
   * @public
   */
  Target?: Target[] | undefined;
}

/**
 * Summary of the details of a moderated channel.
 *
 * @public
 */
export interface ChannelModeratedByAppInstanceUserSummary {
  /**
   * Summary of the details of a `Channel`.
   *
   * @public
   */
  ChannelSummary?: ChannelSummary | undefined;
}

/**
 * The details of a channel moderator.
 *
 * @public
 */
export interface ChannelModerator {
  /**
   * The moderator's data.
   *
   * @public
   */
  Moderator?: Identity | undefined;

  /**
   * The ARN of the moderator's channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The time at which the moderator was created.
   *
   * @public
   */
  CreatedTimestamp?: Date | undefined;

  /**
   * The `AppInstanceUser` who created the moderator.
   *
   * @public
   */
  CreatedBy?: Identity | undefined;
}

/**
 * Summary of the details of a `ChannelModerator`.
 *
 * @public
 */
export interface ChannelModeratorSummary {
  /**
   * The data for a moderator.
   *
   * @public
   */
  Moderator?: Identity | undefined;
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
export interface CreateChannelRequest {
  /**
   * The ARN of the channel request.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The channel mode: `UNRESTRICTED` or `RESTRICTED`. Administrators, moderators, and channel members can add themselves and other members to unrestricted channels. Only administrators and moderators can add members to restricted channels.
   *
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * The channel's privacy level: `PUBLIC` or `PRIVATE`. Private channels aren't discoverable by users outside the channel. Public channels are discoverable by anyone in the `AppInstance`.
   *
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * The metadata of the creation request. Limited to 1KB and UTF-8.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The client token for the request. An `Idempotency` token.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags for the creation request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * An ID for the channel being created. If you do not specify an ID, a UUID will be created for the channel.
   *
   * @public
   */
  ChannelId?: string | undefined;

  /**
   * The ARNs of the channel members in the request.
   *
   * @public
   */
  MemberArns?: string[] | undefined;

  /**
   * The ARNs of the channel moderators in the request.
   *
   * @public
   */
  ModeratorArns?: string[] | undefined;

  /**
   * The attributes required to configure and create an elastic channel. An elastic channel can support a maximum of 1-million users, excluding moderators.
   *
   * @public
   */
  ElasticChannelConfiguration?: ElasticChannelConfiguration | undefined;

  /**
   * Settings that control the interval after which the channel is automatically deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelBanRequest {
  /**
   * The ARN of the ban request.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member being banned.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelBanResponse {
  /**
   * The ARN of the response to the ban request.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The `ChannelArn` and `BannedIdentity` of the member in the ban response.
   *
   * @public
   */
  Member?: Identity | undefined;
}

/**
 * @public
 */
export interface CreateChannelFlowRequest {
  /**
   * The ARN of the channel flow request.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * Information about the processor Lambda functions.
   *
   * @public
   */
  Processors: Processor[] | undefined;

  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The tags for the creation request.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The client token for the request. An Idempotency token.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelFlowResponse {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelMembershipRequest {
  /**
   * The ARN of the channel to which you're adding users.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member you want to add to the channel.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The membership type of a user, `DEFAULT` or `HIDDEN`. Default members are always returned as part of `ListChannelMemberships`. Hidden members are only returned if the type filter in `ListChannelMemberships` equals `HIDDEN`. Otherwise hidden members are not returned. This is only supported by moderators.
   *
   * @public
   */
  Type: ChannelMembershipType | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when creating membership in a SubChannel for a moderator in an elastic channel.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelMembershipResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ARN and metadata of the member being added.
   *
   * @public
   */
  Member?: Identity | undefined;

  /**
   * The ID of the SubChannel in the response.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelModeratorRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the moderator.
   *
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelModeratorResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ARNs of the channel and the moderator.
   *
   * @public
   */
  ChannelModerator?: Identity | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * The ARN of the channel being deleted.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelBanRequest {
  /**
   * The ARN of the channel from which the `AppInstanceUser` was banned.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` that you want to reinstate.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelFlowRequest {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelMembershipRequest {
  /**
   * The ARN of the channel from which you want to remove the user.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member that you're removing from the channel.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only for use by moderators.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelMessageRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ID of the message being deleted.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when deleting messages in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelModeratorRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the moderator being deleted.
   *
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DeleteMessagingStreamingConfigurationsRequest {
  /**
   * The ARN of the streaming configurations being deleted.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * The channel details.
   *
   * @public
   */
  Channel?: Channel | undefined;
}

/**
 * @public
 */
export interface DescribeChannelBanRequest {
  /**
   * The ARN of the channel from which the user is banned.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member being banned.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelBanResponse {
  /**
   * The details of the ban.
   *
   * @public
   */
  ChannelBan?: ChannelBan | undefined;
}

/**
 * @public
 */
export interface DescribeChannelFlowRequest {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelFlowResponse {
  /**
   * The channel flow details.
   *
   * @public
   */
  ChannelFlow?: ChannelFlow | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request. The response contains an `ElasticChannelConfiguration` object.
   *
   * > **Note:** Only required to get a user’s SubChannel membership details.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipResponse {
  /**
   * The details of the membership.
   *
   * @public
   */
  ChannelMembership?: ChannelMembership | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserRequest {
  /**
   * The ARN of the channel to which the user belongs.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the user or bot in a channel.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelMembershipForAppInstanceUserResponse {
  /**
   * The channel to which a user belongs.
   *
   * @public
   */
  ChannelMembership?: ChannelMembershipForAppInstanceUserSummary | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserRequest {
  /**
   * The ARN of the moderated channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the user or bot in the moderated channel.
   *
   * @public
   */
  AppInstanceUserArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratedByAppInstanceUserResponse {
  /**
   * The moderated channel.
   *
   * @public
   */
  Channel?: ChannelModeratedByAppInstanceUserSummary | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratorRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the channel moderator.
   *
   * @public
   */
  ChannelModeratorArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelModeratorResponse {
  /**
   * The details of the channel moderator.
   *
   * @public
   */
  ChannelModerator?: ChannelModerator | undefined;
}

/**
 * @public
 */
export interface DisassociateChannelFlowRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the user making the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the member retrieving the preferences.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMembershipPreferencesResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The details of a user.
   *
   * @public
   */
  Member?: Identity | undefined;

  /**
   * The channel membership preferences for an `AppInstanceUser` .
   *
   * @public
   */
  Preferences?: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ID of the message.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when getting messages in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageResponse {
  /**
   * The details of and content in the message.
   *
   * @public
   */
  ChannelMessage?: ChannelMessage | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageStatusRequest {
  /**
   * The ARN of the channel
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ID of the message.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The `AppInstanceUserArn` of the user making the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when getting message status in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface GetChannelMessageStatusResponse {
  /**
   * The message status and details.
   *
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointRequest {
  /**
   * The type of network for the messaging session endpoint. Either IPv4 only or dual-stack (IPv4 and IPv6).
   *
   * @public
   */
  NetworkType?: NetworkType | undefined;
}

/**
 * The websocket endpoint used to connect to Amazon Chime SDK messaging.
 *
 * @public
 */
export interface MessagingSessionEndpoint {
  /**
   * The endpoint to which you establish a websocket connection.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface GetMessagingSessionEndpointResponse {
  /**
   * The endpoint returned in the response.
   *
   * @public
   */
  Endpoint?: MessagingSessionEndpoint | undefined;
}

/**
 * @public
 */
export interface GetMessagingStreamingConfigurationsRequest {
  /**
   * The ARN of the streaming configurations.
   *
   * @public
   */
  AppInstanceArn: string | undefined;
}

/**
 * The configuration for connecting a messaging stream to Amazon Kinesis.
 *
 * @public
 */
export interface StreamingConfiguration {
  /**
   * The data type of the configuration.
   *
   * @public
   */
  DataType: MessagingDataType | undefined;

  /**
   * The ARN of the resource in the configuration.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetMessagingStreamingConfigurationsResponse {
  /**
   * The streaming settings.
   *
   * @public
   */
  StreamingConfigurations?: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListChannelBansRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The maximum number of bans that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested bans are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelBansResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The token passed by previous API calls until all requested bans are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The information for each requested ban.
   *
   * @public
   */
  ChannelBans?: ChannelBanSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelFlowsRequest {
  /**
   * The ARN of the app instance.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The maximum number of channel flows that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested channel flows are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelFlowsResponse {
  /**
   * The information about each channel flow.
   *
   * @public
   */
  ChannelFlows?: ChannelFlowSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested channels are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsRequest {
  /**
   * The maximum number of channel memberships that you want returned.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The membership type of a user, `DEFAULT` or `HIDDEN`. Default members are returned as part of `ListChannelMemberships` if no type is specified. Hidden members are only returned if the type filter in `ListChannelMemberships` equals `HIDDEN`.
   *
   * @public
   */
  Type?: ChannelMembershipType | undefined;

  /**
   * The maximum number of channel memberships that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested channel memberships are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when listing a user's memberships in a particular sub-channel of an elastic channel.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The information for the requested channel memberships.
   *
   * @public
   */
  ChannelMemberships?: ChannelMembershipSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested channel memberships are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserRequest {
  /**
   * The ARN of the user or bot.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The maximum number of users that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from previous API requests until the number of channel memberships is reached.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMembershipsForAppInstanceUserResponse {
  /**
   * The information for the requested channel memberships.
   *
   * @public
   */
  ChannelMemberships?: ChannelMembershipForAppInstanceUserSummary[] | undefined;

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
export interface ListChannelMessagesRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The order in which you want messages sorted. Default is Descending, based on time created.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The initial or starting time stamp for your requested messages.
   *
   * @public
   */
  NotBefore?: Date | undefined;

  /**
   * The final or ending time stamp for your requested messages.
   *
   * @public
   */
  NotAfter?: Date | undefined;

  /**
   * The maximum number of messages that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested messages are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when listing the messages in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelMessagesResponse {
  /**
   * The ARN of the channel containing the requested messages.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The token passed by previous API calls until all requested messages are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The information about, and content of, each requested message.
   *
   * @public
   */
  ChannelMessages?: ChannelMessageSummary[] | undefined;

  /**
   * The ID of the SubChannel in the response.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The maximum number of moderators that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested moderators are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelModeratorsResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The token passed by previous API calls until all requested moderators are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The information about and names of each moderator.
   *
   * @public
   */
  ChannelModerators?: ChannelModeratorSummary[] | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * The ARN of the `AppInstance`.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The privacy setting. `PUBLIC` retrieves all the public channels. `PRIVATE` retrieves private channels. Only an `AppInstanceAdmin` can retrieve private channels.
   *
   * @public
   */
  Privacy?: ChannelPrivacy | undefined;

  /**
   * The maximum number of channels that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested channels are returned.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * The information about each channel.
   *
   * @public
   */
  Channels?: ChannelSummary[] | undefined;

  /**
   * The token returned from previous API requests until the number of channels is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowRequest {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * The maximum number of channels that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested channels are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsAssociatedWithChannelFlowResponse {
  /**
   * The information about each channel.
   *
   * @public
   */
  Channels?: ChannelAssociatedWithFlowSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested channels are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserRequest {
  /**
   * The ARN of the user or bot in the moderated channel.
   *
   * @public
   */
  AppInstanceUserArn?: string | undefined;

  /**
   * The maximum number of channels in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from previous API requests until the number of channels moderated by the user is reached.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface ListChannelsModeratedByAppInstanceUserResponse {
  /**
   * The moderated channels in the request.
   *
   * @public
   */
  Channels?: ChannelModeratedByAppInstanceUserSummary[] | undefined;

  /**
   * The token returned from previous API requests until the number of channels moderated by the user is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubChannelsRequest {
  /**
   * The ARN of elastic channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The `AppInstanceUserArn` of the user making the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The maximum number of sub-channels that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token passed by previous API calls until all requested sub-channels are returned.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary of the sub-channels associated with the elastic channel.
 *
 * @public
 */
export interface SubChannelSummary {
  /**
   * The unique ID of a SubChannel.
   *
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * The number of members in a SubChannel.
   *
   * @public
   */
  MembershipCount?: number | undefined;
}

/**
 * @public
 */
export interface ListSubChannelsResponse {
  /**
   * The ARN of elastic channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The information about each sub-channel.
   *
   * @public
   */
  SubChannels?: SubChannelSummary[] | undefined;

  /**
   * The token passed by previous API calls until all requested sub-channels are returned.
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
export interface PutChannelExpirationSettingsRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer?: string | undefined;

  /**
   * Settings that control the interval after which a channel is deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutChannelExpirationSettingsResponse {
  /**
   * The channel ARN.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * Settings that control the interval after which a channel is deleted.
   *
   * @public
   */
  ExpirationSettings?: ExpirationSettings | undefined;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the member setting the preferences.
   *
   * @public
   */
  MemberArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The channel membership preferences of an `AppInstanceUser` .
   *
   * @public
   */
  Preferences: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface PutChannelMembershipPreferencesResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The details of a user.
   *
   * @public
   */
  Member?: Identity | undefined;

  /**
   * The ARN and metadata of the member being added.
   *
   * @public
   */
  Preferences?: ChannelMembershipPreferences | undefined;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsRequest {
  /**
   * The ARN of the streaming configuration.
   *
   * @public
   */
  AppInstanceArn: string | undefined;

  /**
   * The streaming configurations.
   *
   * @public
   */
  StreamingConfigurations: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutMessagingStreamingConfigurationsResponse {
  /**
   * The requested streaming configurations.
   *
   * @public
   */
  StreamingConfigurations?: StreamingConfiguration[] | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageRequest {
  /**
   * The ARN of the channel containing the messages that you want to redact.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ID of the message being redacted.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface RedactChannelMessageResponse {
  /**
   * The ARN of the channel containing the messages that you want to redact.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ID of the message being redacted.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The ID of the SubChannel in the response.
   *
   * > **Note:** Only required when redacting messages in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * A `Field` of the channel that you want to search.
 *
 * > **Note:** This operation isn't supported for `AppInstanceUsers` with a large number of memberships.
 *
 * @public
 */
export interface SearchField {
  /**
   * An `enum` value that indicates the key to search the channel on. `MEMBERS` allows you to search channels based on memberships. You can use it with the `EQUALS` operator to get channels whose memberships are equal to the specified values, and with the `INCLUDES` operator to get channels whose memberships include the specified values.
   *
   * @public
   */
  Key: SearchFieldKey | undefined;

  /**
   * The values that you want to search for, a list of strings. The values must be `AppInstanceUserArns` specified as a list of strings.
   *
   * > **Note:** This operation isn't supported for `AppInstanceUsers` with a large number of memberships.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator used to compare field values, currently `EQUALS` or `INCLUDES`. Use the `EQUALS` operator to find channels whose memberships equal the specified values. Use the `INCLUDES` operator to find channels whose memberships include the specified values.
   *
   * @public
   */
  Operator: SearchFieldOperator | undefined;
}

/**
 * @public
 */
export interface SearchChannelsRequest {
  /**
   * The `AppInstanceUserArn` of the user making the API call.
   *
   * @public
   */
  ChimeBearer?: string | undefined;

  /**
   * A list of the `Field` objects in the channel being searched.
   *
   * @public
   */
  Fields: SearchField[] | undefined;

  /**
   * The maximum number of channels that you want returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned from previous API requests until the number of channels is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchChannelsResponse {
  /**
   * A list of the channels in the request.
   *
   * @public
   */
  Channels?: ChannelSummary[] | undefined;

  /**
   * The token returned from previous API responses until the number of channels is reached.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The content of the channel message.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The type of message, `STANDARD` or `CONTROL`.
   *
   * `STANDARD` messages can be up to 4KB in size and contain metadata. Metadata is arbitrary, and you can use it in a variety of ways, such as containing a link to an attachment.
   *
   * `CONTROL` messages are limited to 30 bytes and do not contain metadata.
   *
   * @public
   */
  Type: ChannelMessageType | undefined;

  /**
   * Boolean that controls whether the message is persisted on the back end. Required.
   *
   * @public
   */
  Persistence: ChannelMessagePersistenceType | undefined;

  /**
   * The optional metadata for each message.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The `Idempotency` token for each client request.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The push notification configuration of the message.
   *
   * @public
   */
  PushNotification?: PushNotificationConfiguration | undefined;

  /**
   * The attributes for the message, used for message filtering along with a `FilterRule` defined in the `PushNotificationPreferences`.
   *
   * @public
   */
  MessageAttributes?: Record<string, MessageAttributeValue> | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * The content type of the channel message.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The target of a message. Must be a member of the channel, such as another user, a bot, or the sender. Only the target and the sender can view targeted messages. Only users who can see targeted messages can take actions on them. However, administrators can delete targeted messages that they can’t see.
   *
   * @public
   */
  Target?: Target[] | undefined;
}

/**
 * @public
 */
export interface SendChannelMessageResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ID string assigned to each message.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The status of the channel message.
   *
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * The ID of the SubChannel in the response.
   *
   * @public
   */
  SubChannelId?: string | undefined;
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
export interface UpdateChannelRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The name of the channel.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The mode of the update request.
   *
   * @public
   */
  Mode?: ChannelMode | undefined;

  /**
   * The metadata for the update request.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelFlowRequest {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn: string | undefined;

  /**
   * Information about the processor Lambda functions
   *
   * @public
   */
  Processors: Processor[] | undefined;

  /**
   * The name of the channel flow.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelFlowResponse {
  /**
   * The ARN of the channel flow.
   *
   * @public
   */
  ChannelFlowArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ID string of the message being updated.
   *
   * @public
   */
  MessageId: string | undefined;

  /**
   * The content of the channel message.
   *
   * @public
   */
  Content: string | undefined;

  /**
   * The metadata of the message being updated.
   *
   * @public
   */
  Metadata?: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;

  /**
   * The ID of the SubChannel in the request.
   *
   * > **Note:** Only required when updating messages in a SubChannel that the user belongs to.
   *
   * @public
   */
  SubChannelId?: string | undefined;

  /**
   * The content type of the channel message.
   *
   * @public
   */
  ContentType?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelMessageResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;

  /**
   * The ID string of the message being updated.
   *
   * @public
   */
  MessageId?: string | undefined;

  /**
   * The status of the message update.
   *
   * @public
   */
  Status?: ChannelMessageStatusStructure | undefined;

  /**
   * The ID of the SubChannel in the response.
   *
   * @public
   */
  SubChannelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerRequest {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn: string | undefined;

  /**
   * The ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call.
   *
   * @public
   */
  ChimeBearer: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelReadMarkerResponse {
  /**
   * The ARN of the channel.
   *
   * @public
   */
  ChannelArn?: string | undefined;
}
