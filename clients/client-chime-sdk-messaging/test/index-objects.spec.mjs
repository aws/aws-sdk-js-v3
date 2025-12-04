import {
  AllowNotifications,
  AssociateChannelFlowCommand,
  BatchCreateChannelMembershipCommand,
  ChannelFlowCallbackCommand,
  ChannelMembershipType,
  ChannelMessagePersistenceType,
  ChannelMessageStatus,
  ChannelMessageType,
  ChannelMode,
  ChannelPrivacy,
  ChimeSDKMessaging,
  ChimeSDKMessagingClient,
  ChimeSDKMessagingServiceException,
  CreateChannelBanCommand,
  CreateChannelCommand,
  CreateChannelFlowCommand,
  CreateChannelMembershipCommand,
  CreateChannelModeratorCommand,
  DeleteChannelBanCommand,
  DeleteChannelCommand,
  DeleteChannelFlowCommand,
  DeleteChannelMembershipCommand,
  DeleteChannelMessageCommand,
  DeleteChannelModeratorCommand,
  DeleteMessagingStreamingConfigurationsCommand,
  DescribeChannelBanCommand,
  DescribeChannelCommand,
  DescribeChannelFlowCommand,
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratorCommand,
  DisassociateChannelFlowCommand,
  ErrorCode,
  ExpirationCriterion,
  FallbackAction,
  GetChannelMembershipPreferencesCommand,
  GetChannelMessageCommand,
  GetChannelMessageStatusCommand,
  GetMessagingSessionEndpointCommand,
  GetMessagingStreamingConfigurationsCommand,
  InvocationType,
  ListChannelBansCommand,
  ListChannelFlowsCommand,
  ListChannelMembershipsCommand,
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMessagesCommand,
  ListChannelModeratorsCommand,
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsCommand,
  ListChannelsModeratedByAppInstanceUserCommand,
  ListSubChannelsCommand,
  ListTagsForResourceCommand,
  MessagingDataType,
  NetworkType,
  PushNotificationType,
  PutChannelExpirationSettingsCommand,
  PutChannelMembershipPreferencesCommand,
  PutMessagingStreamingConfigurationsCommand,
  RedactChannelMessageCommand,
  SearchChannelsCommand,
  SearchFieldKey,
  SearchFieldOperator,
  SendChannelMessageCommand,
  SortOrder,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateChannelFlowCommand,
  UpdateChannelMessageCommand,
  UpdateChannelReadMarkerCommand,
  paginateListChannelBans,
  paginateListChannelFlows,
  paginateListChannelMemberships,
  paginateListChannelMembershipsForAppInstanceUser,
  paginateListChannelMessages,
  paginateListChannelModerators,
  paginateListChannels,
  paginateListChannelsAssociatedWithChannelFlow,
  paginateListChannelsModeratedByAppInstanceUser,
  paginateListSubChannels,
  paginateSearchChannels,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKMessagingClient === "function")
assert(typeof ChimeSDKMessaging === "function")
// commands
assert(typeof AssociateChannelFlowCommand === "function")
assert(typeof BatchCreateChannelMembershipCommand === "function")
assert(typeof ChannelFlowCallbackCommand === "function")
assert(typeof CreateChannelCommand === "function")
assert(typeof CreateChannelBanCommand === "function")
assert(typeof CreateChannelFlowCommand === "function")
assert(typeof CreateChannelMembershipCommand === "function")
assert(typeof CreateChannelModeratorCommand === "function")
assert(typeof DeleteChannelCommand === "function")
assert(typeof DeleteChannelBanCommand === "function")
assert(typeof DeleteChannelFlowCommand === "function")
assert(typeof DeleteChannelMembershipCommand === "function")
assert(typeof DeleteChannelMessageCommand === "function")
assert(typeof DeleteChannelModeratorCommand === "function")
assert(typeof DeleteMessagingStreamingConfigurationsCommand === "function")
assert(typeof DescribeChannelCommand === "function")
assert(typeof DescribeChannelBanCommand === "function")
assert(typeof DescribeChannelFlowCommand === "function")
assert(typeof DescribeChannelMembershipCommand === "function")
assert(typeof DescribeChannelMembershipForAppInstanceUserCommand === "function")
assert(typeof DescribeChannelModeratedByAppInstanceUserCommand === "function")
assert(typeof DescribeChannelModeratorCommand === "function")
assert(typeof DisassociateChannelFlowCommand === "function")
assert(typeof GetChannelMembershipPreferencesCommand === "function")
assert(typeof GetChannelMessageCommand === "function")
assert(typeof GetChannelMessageStatusCommand === "function")
assert(typeof GetMessagingSessionEndpointCommand === "function")
assert(typeof GetMessagingStreamingConfigurationsCommand === "function")
assert(typeof ListChannelBansCommand === "function")
assert(typeof ListChannelFlowsCommand === "function")
assert(typeof ListChannelMembershipsCommand === "function")
assert(typeof ListChannelMembershipsForAppInstanceUserCommand === "function")
assert(typeof ListChannelMessagesCommand === "function")
assert(typeof ListChannelModeratorsCommand === "function")
assert(typeof ListChannelsCommand === "function")
assert(typeof ListChannelsAssociatedWithChannelFlowCommand === "function")
assert(typeof ListChannelsModeratedByAppInstanceUserCommand === "function")
assert(typeof ListSubChannelsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutChannelExpirationSettingsCommand === "function")
assert(typeof PutChannelMembershipPreferencesCommand === "function")
assert(typeof PutMessagingStreamingConfigurationsCommand === "function")
assert(typeof RedactChannelMessageCommand === "function")
assert(typeof SearchChannelsCommand === "function")
assert(typeof SendChannelMessageCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateChannelCommand === "function")
assert(typeof UpdateChannelFlowCommand === "function")
assert(typeof UpdateChannelMessageCommand === "function")
assert(typeof UpdateChannelReadMarkerCommand === "function")
// enums
assert(typeof AllowNotifications === "object");
assert(typeof ChannelMembershipType === "object");
assert(typeof ChannelMessagePersistenceType === "object");
assert(typeof ChannelMessageStatus === "object");
assert(typeof ChannelMessageType === "object");
assert(typeof ChannelMode === "object");
assert(typeof ChannelPrivacy === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExpirationCriterion === "object");
assert(typeof FallbackAction === "object");
assert(typeof InvocationType === "object");
assert(typeof MessagingDataType === "object");
assert(typeof NetworkType === "object");
assert(typeof PushNotificationType === "object");
assert(typeof SearchFieldKey === "object");
assert(typeof SearchFieldOperator === "object");
assert(typeof SortOrder === "object");
// errors
assert(ChimeSDKMessagingServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChannelBans === "function")
assert(typeof paginateListChannelFlows === "function")
assert(typeof paginateListChannelMemberships === "function")
assert(typeof paginateListChannelMembershipsForAppInstanceUser === "function")
assert(typeof paginateListChannelMessages === "function")
assert(typeof paginateListChannelModerators === "function")
assert(typeof paginateListChannels === "function")
assert(typeof paginateListChannelsAssociatedWithChannelFlow === "function")
assert(typeof paginateListChannelsModeratedByAppInstanceUser === "function")
assert(typeof paginateListSubChannels === "function")
assert(typeof paginateSearchChannels === "function")
console.log(`ChimeSDKMessaging index test passed.`);
