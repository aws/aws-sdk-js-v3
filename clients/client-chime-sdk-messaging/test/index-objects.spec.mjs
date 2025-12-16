import {
  AllowNotifications,
  AppInstanceUserMembershipSummary$,
  AssociateChannelFlow$,
  AssociateChannelFlowCommand,
  AssociateChannelFlowRequest$,
  BadRequestException,
  BadRequestException$,
  BatchChannelMemberships$,
  BatchCreateChannelMembership$,
  BatchCreateChannelMembershipCommand,
  BatchCreateChannelMembershipError$,
  BatchCreateChannelMembershipRequest$,
  BatchCreateChannelMembershipResponse$,
  Channel$,
  ChannelAssociatedWithFlowSummary$,
  ChannelBan$,
  ChannelBanSummary$,
  ChannelFlow$,
  ChannelFlowCallback$,
  ChannelFlowCallbackCommand,
  ChannelFlowCallbackRequest$,
  ChannelFlowCallbackResponse$,
  ChannelFlowSummary$,
  ChannelMembership$,
  ChannelMembershipForAppInstanceUserSummary$,
  ChannelMembershipPreferences$,
  ChannelMembershipSummary$,
  ChannelMembershipType,
  ChannelMessage$,
  ChannelMessageCallback$,
  ChannelMessagePersistenceType,
  ChannelMessageStatus,
  ChannelMessageStatusStructure$,
  ChannelMessageSummary$,
  ChannelMessageType,
  ChannelMode,
  ChannelModeratedByAppInstanceUserSummary$,
  ChannelModerator$,
  ChannelModeratorSummary$,
  ChannelPrivacy,
  ChannelSummary$,
  ChimeSDKMessaging,
  ChimeSDKMessagingClient,
  ChimeSDKMessagingServiceException,
  ConflictException,
  ConflictException$,
  CreateChannel$,
  CreateChannelBan$,
  CreateChannelBanCommand,
  CreateChannelBanRequest$,
  CreateChannelBanResponse$,
  CreateChannelCommand,
  CreateChannelFlow$,
  CreateChannelFlowCommand,
  CreateChannelFlowRequest$,
  CreateChannelFlowResponse$,
  CreateChannelMembership$,
  CreateChannelMembershipCommand,
  CreateChannelMembershipRequest$,
  CreateChannelMembershipResponse$,
  CreateChannelModerator$,
  CreateChannelModeratorCommand,
  CreateChannelModeratorRequest$,
  CreateChannelModeratorResponse$,
  CreateChannelRequest$,
  CreateChannelResponse$,
  DeleteChannel$,
  DeleteChannelBan$,
  DeleteChannelBanCommand,
  DeleteChannelBanRequest$,
  DeleteChannelCommand,
  DeleteChannelFlow$,
  DeleteChannelFlowCommand,
  DeleteChannelFlowRequest$,
  DeleteChannelMembership$,
  DeleteChannelMembershipCommand,
  DeleteChannelMembershipRequest$,
  DeleteChannelMessage$,
  DeleteChannelMessageCommand,
  DeleteChannelMessageRequest$,
  DeleteChannelModerator$,
  DeleteChannelModeratorCommand,
  DeleteChannelModeratorRequest$,
  DeleteChannelRequest$,
  DeleteMessagingStreamingConfigurations$,
  DeleteMessagingStreamingConfigurationsCommand,
  DeleteMessagingStreamingConfigurationsRequest$,
  DescribeChannel$,
  DescribeChannelBan$,
  DescribeChannelBanCommand,
  DescribeChannelBanRequest$,
  DescribeChannelBanResponse$,
  DescribeChannelCommand,
  DescribeChannelFlow$,
  DescribeChannelFlowCommand,
  DescribeChannelFlowRequest$,
  DescribeChannelFlowResponse$,
  DescribeChannelMembership$,
  DescribeChannelMembershipCommand,
  DescribeChannelMembershipForAppInstanceUser$,
  DescribeChannelMembershipForAppInstanceUserCommand,
  DescribeChannelMembershipForAppInstanceUserRequest$,
  DescribeChannelMembershipForAppInstanceUserResponse$,
  DescribeChannelMembershipRequest$,
  DescribeChannelMembershipResponse$,
  DescribeChannelModeratedByAppInstanceUser$,
  DescribeChannelModeratedByAppInstanceUserCommand,
  DescribeChannelModeratedByAppInstanceUserRequest$,
  DescribeChannelModeratedByAppInstanceUserResponse$,
  DescribeChannelModerator$,
  DescribeChannelModeratorCommand,
  DescribeChannelModeratorRequest$,
  DescribeChannelModeratorResponse$,
  DescribeChannelRequest$,
  DescribeChannelResponse$,
  DisassociateChannelFlow$,
  DisassociateChannelFlowCommand,
  DisassociateChannelFlowRequest$,
  ElasticChannelConfiguration$,
  ErrorCode,
  ExpirationCriterion,
  ExpirationSettings$,
  FallbackAction,
  ForbiddenException,
  ForbiddenException$,
  GetChannelMembershipPreferences$,
  GetChannelMembershipPreferencesCommand,
  GetChannelMembershipPreferencesRequest$,
  GetChannelMembershipPreferencesResponse$,
  GetChannelMessage$,
  GetChannelMessageCommand,
  GetChannelMessageRequest$,
  GetChannelMessageResponse$,
  GetChannelMessageStatus$,
  GetChannelMessageStatusCommand,
  GetChannelMessageStatusRequest$,
  GetChannelMessageStatusResponse$,
  GetMessagingSessionEndpoint$,
  GetMessagingSessionEndpointCommand,
  GetMessagingSessionEndpointRequest$,
  GetMessagingSessionEndpointResponse$,
  GetMessagingStreamingConfigurations$,
  GetMessagingStreamingConfigurationsCommand,
  GetMessagingStreamingConfigurationsRequest$,
  GetMessagingStreamingConfigurationsResponse$,
  Identity$,
  InvocationType,
  LambdaConfiguration$,
  ListChannelBans$,
  ListChannelBansCommand,
  ListChannelBansRequest$,
  ListChannelBansResponse$,
  ListChannelFlows$,
  ListChannelFlowsCommand,
  ListChannelFlowsRequest$,
  ListChannelFlowsResponse$,
  ListChannelMemberships$,
  ListChannelMembershipsCommand,
  ListChannelMembershipsForAppInstanceUser$,
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserRequest$,
  ListChannelMembershipsForAppInstanceUserResponse$,
  ListChannelMembershipsRequest$,
  ListChannelMembershipsResponse$,
  ListChannelMessages$,
  ListChannelMessagesCommand,
  ListChannelMessagesRequest$,
  ListChannelMessagesResponse$,
  ListChannelModerators$,
  ListChannelModeratorsCommand,
  ListChannelModeratorsRequest$,
  ListChannelModeratorsResponse$,
  ListChannels$,
  ListChannelsAssociatedWithChannelFlow$,
  ListChannelsAssociatedWithChannelFlowCommand,
  ListChannelsAssociatedWithChannelFlowRequest$,
  ListChannelsAssociatedWithChannelFlowResponse$,
  ListChannelsCommand,
  ListChannelsModeratedByAppInstanceUser$,
  ListChannelsModeratedByAppInstanceUserCommand,
  ListChannelsModeratedByAppInstanceUserRequest$,
  ListChannelsModeratedByAppInstanceUserResponse$,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListSubChannels$,
  ListSubChannelsCommand,
  ListSubChannelsRequest$,
  ListSubChannelsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MessageAttributeValue$,
  MessagingDataType,
  MessagingSessionEndpoint$,
  NetworkType,
  NotFoundException,
  NotFoundException$,
  Processor$,
  ProcessorConfiguration$,
  PushNotificationConfiguration$,
  PushNotificationPreferences$,
  PushNotificationType,
  PutChannelExpirationSettings$,
  PutChannelExpirationSettingsCommand,
  PutChannelExpirationSettingsRequest$,
  PutChannelExpirationSettingsResponse$,
  PutChannelMembershipPreferences$,
  PutChannelMembershipPreferencesCommand,
  PutChannelMembershipPreferencesRequest$,
  PutChannelMembershipPreferencesResponse$,
  PutMessagingStreamingConfigurations$,
  PutMessagingStreamingConfigurationsCommand,
  PutMessagingStreamingConfigurationsRequest$,
  PutMessagingStreamingConfigurationsResponse$,
  RedactChannelMessage$,
  RedactChannelMessageCommand,
  RedactChannelMessageRequest$,
  RedactChannelMessageResponse$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  SearchChannels$,
  SearchChannelsCommand,
  SearchChannelsRequest$,
  SearchChannelsResponse$,
  SearchField$,
  SearchFieldKey,
  SearchFieldOperator,
  SendChannelMessage$,
  SendChannelMessageCommand,
  SendChannelMessageRequest$,
  SendChannelMessageResponse$,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SortOrder,
  StreamingConfiguration$,
  SubChannelSummary$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  Target$,
  ThrottledClientException,
  ThrottledClientException$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelFlow$,
  UpdateChannelFlowCommand,
  UpdateChannelFlowRequest$,
  UpdateChannelFlowResponse$,
  UpdateChannelMessage$,
  UpdateChannelMessageCommand,
  UpdateChannelMessageRequest$,
  UpdateChannelMessageResponse$,
  UpdateChannelReadMarker$,
  UpdateChannelReadMarkerCommand,
  UpdateChannelReadMarkerRequest$,
  UpdateChannelReadMarkerResponse$,
  UpdateChannelRequest$,
  UpdateChannelResponse$,
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
assert(typeof ChimeSDKMessagingClient === "function");
assert(typeof ChimeSDKMessaging === "function");
// commands
assert(typeof AssociateChannelFlowCommand === "function");
assert(typeof AssociateChannelFlow$ === "object");
assert(typeof BatchCreateChannelMembershipCommand === "function");
assert(typeof BatchCreateChannelMembership$ === "object");
assert(typeof ChannelFlowCallbackCommand === "function");
assert(typeof ChannelFlowCallback$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateChannelBanCommand === "function");
assert(typeof CreateChannelBan$ === "object");
assert(typeof CreateChannelFlowCommand === "function");
assert(typeof CreateChannelFlow$ === "object");
assert(typeof CreateChannelMembershipCommand === "function");
assert(typeof CreateChannelMembership$ === "object");
assert(typeof CreateChannelModeratorCommand === "function");
assert(typeof CreateChannelModerator$ === "object");
assert(typeof DeleteChannelCommand === "function");
assert(typeof DeleteChannel$ === "object");
assert(typeof DeleteChannelBanCommand === "function");
assert(typeof DeleteChannelBan$ === "object");
assert(typeof DeleteChannelFlowCommand === "function");
assert(typeof DeleteChannelFlow$ === "object");
assert(typeof DeleteChannelMembershipCommand === "function");
assert(typeof DeleteChannelMembership$ === "object");
assert(typeof DeleteChannelMessageCommand === "function");
assert(typeof DeleteChannelMessage$ === "object");
assert(typeof DeleteChannelModeratorCommand === "function");
assert(typeof DeleteChannelModerator$ === "object");
assert(typeof DeleteMessagingStreamingConfigurationsCommand === "function");
assert(typeof DeleteMessagingStreamingConfigurations$ === "object");
assert(typeof DescribeChannelCommand === "function");
assert(typeof DescribeChannel$ === "object");
assert(typeof DescribeChannelBanCommand === "function");
assert(typeof DescribeChannelBan$ === "object");
assert(typeof DescribeChannelFlowCommand === "function");
assert(typeof DescribeChannelFlow$ === "object");
assert(typeof DescribeChannelMembershipCommand === "function");
assert(typeof DescribeChannelMembership$ === "object");
assert(typeof DescribeChannelMembershipForAppInstanceUserCommand === "function");
assert(typeof DescribeChannelMembershipForAppInstanceUser$ === "object");
assert(typeof DescribeChannelModeratedByAppInstanceUserCommand === "function");
assert(typeof DescribeChannelModeratedByAppInstanceUser$ === "object");
assert(typeof DescribeChannelModeratorCommand === "function");
assert(typeof DescribeChannelModerator$ === "object");
assert(typeof DisassociateChannelFlowCommand === "function");
assert(typeof DisassociateChannelFlow$ === "object");
assert(typeof GetChannelMembershipPreferencesCommand === "function");
assert(typeof GetChannelMembershipPreferences$ === "object");
assert(typeof GetChannelMessageCommand === "function");
assert(typeof GetChannelMessage$ === "object");
assert(typeof GetChannelMessageStatusCommand === "function");
assert(typeof GetChannelMessageStatus$ === "object");
assert(typeof GetMessagingSessionEndpointCommand === "function");
assert(typeof GetMessagingSessionEndpoint$ === "object");
assert(typeof GetMessagingStreamingConfigurationsCommand === "function");
assert(typeof GetMessagingStreamingConfigurations$ === "object");
assert(typeof ListChannelBansCommand === "function");
assert(typeof ListChannelBans$ === "object");
assert(typeof ListChannelFlowsCommand === "function");
assert(typeof ListChannelFlows$ === "object");
assert(typeof ListChannelMembershipsCommand === "function");
assert(typeof ListChannelMemberships$ === "object");
assert(typeof ListChannelMembershipsForAppInstanceUserCommand === "function");
assert(typeof ListChannelMembershipsForAppInstanceUser$ === "object");
assert(typeof ListChannelMessagesCommand === "function");
assert(typeof ListChannelMessages$ === "object");
assert(typeof ListChannelModeratorsCommand === "function");
assert(typeof ListChannelModerators$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListChannelsAssociatedWithChannelFlowCommand === "function");
assert(typeof ListChannelsAssociatedWithChannelFlow$ === "object");
assert(typeof ListChannelsModeratedByAppInstanceUserCommand === "function");
assert(typeof ListChannelsModeratedByAppInstanceUser$ === "object");
assert(typeof ListSubChannelsCommand === "function");
assert(typeof ListSubChannels$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutChannelExpirationSettingsCommand === "function");
assert(typeof PutChannelExpirationSettings$ === "object");
assert(typeof PutChannelMembershipPreferencesCommand === "function");
assert(typeof PutChannelMembershipPreferences$ === "object");
assert(typeof PutMessagingStreamingConfigurationsCommand === "function");
assert(typeof PutMessagingStreamingConfigurations$ === "object");
assert(typeof RedactChannelMessageCommand === "function");
assert(typeof RedactChannelMessage$ === "object");
assert(typeof SearchChannelsCommand === "function");
assert(typeof SearchChannels$ === "object");
assert(typeof SendChannelMessageCommand === "function");
assert(typeof SendChannelMessage$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateChannelFlowCommand === "function");
assert(typeof UpdateChannelFlow$ === "object");
assert(typeof UpdateChannelMessageCommand === "function");
assert(typeof UpdateChannelMessage$ === "object");
assert(typeof UpdateChannelReadMarkerCommand === "function");
assert(typeof UpdateChannelReadMarker$ === "object");
// structural schemas
assert(typeof AppInstanceUserMembershipSummary$ === "object");
assert(typeof AssociateChannelFlowRequest$ === "object");
assert(typeof BatchChannelMemberships$ === "object");
assert(typeof BatchCreateChannelMembershipError$ === "object");
assert(typeof BatchCreateChannelMembershipRequest$ === "object");
assert(typeof BatchCreateChannelMembershipResponse$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ChannelAssociatedWithFlowSummary$ === "object");
assert(typeof ChannelBan$ === "object");
assert(typeof ChannelBanSummary$ === "object");
assert(typeof ChannelFlow$ === "object");
assert(typeof ChannelFlowCallbackRequest$ === "object");
assert(typeof ChannelFlowCallbackResponse$ === "object");
assert(typeof ChannelFlowSummary$ === "object");
assert(typeof ChannelMembership$ === "object");
assert(typeof ChannelMembershipForAppInstanceUserSummary$ === "object");
assert(typeof ChannelMembershipPreferences$ === "object");
assert(typeof ChannelMembershipSummary$ === "object");
assert(typeof ChannelMessage$ === "object");
assert(typeof ChannelMessageCallback$ === "object");
assert(typeof ChannelMessageStatusStructure$ === "object");
assert(typeof ChannelMessageSummary$ === "object");
assert(typeof ChannelModeratedByAppInstanceUserSummary$ === "object");
assert(typeof ChannelModerator$ === "object");
assert(typeof ChannelModeratorSummary$ === "object");
assert(typeof ChannelSummary$ === "object");
assert(typeof CreateChannelBanRequest$ === "object");
assert(typeof CreateChannelBanResponse$ === "object");
assert(typeof CreateChannelFlowRequest$ === "object");
assert(typeof CreateChannelFlowResponse$ === "object");
assert(typeof CreateChannelMembershipRequest$ === "object");
assert(typeof CreateChannelMembershipResponse$ === "object");
assert(typeof CreateChannelModeratorRequest$ === "object");
assert(typeof CreateChannelModeratorResponse$ === "object");
assert(typeof CreateChannelRequest$ === "object");
assert(typeof CreateChannelResponse$ === "object");
assert(typeof DeleteChannelBanRequest$ === "object");
assert(typeof DeleteChannelFlowRequest$ === "object");
assert(typeof DeleteChannelMembershipRequest$ === "object");
assert(typeof DeleteChannelMessageRequest$ === "object");
assert(typeof DeleteChannelModeratorRequest$ === "object");
assert(typeof DeleteChannelRequest$ === "object");
assert(typeof DeleteMessagingStreamingConfigurationsRequest$ === "object");
assert(typeof DescribeChannelBanRequest$ === "object");
assert(typeof DescribeChannelBanResponse$ === "object");
assert(typeof DescribeChannelFlowRequest$ === "object");
assert(typeof DescribeChannelFlowResponse$ === "object");
assert(typeof DescribeChannelMembershipForAppInstanceUserRequest$ === "object");
assert(typeof DescribeChannelMembershipForAppInstanceUserResponse$ === "object");
assert(typeof DescribeChannelMembershipRequest$ === "object");
assert(typeof DescribeChannelMembershipResponse$ === "object");
assert(typeof DescribeChannelModeratedByAppInstanceUserRequest$ === "object");
assert(typeof DescribeChannelModeratedByAppInstanceUserResponse$ === "object");
assert(typeof DescribeChannelModeratorRequest$ === "object");
assert(typeof DescribeChannelModeratorResponse$ === "object");
assert(typeof DescribeChannelRequest$ === "object");
assert(typeof DescribeChannelResponse$ === "object");
assert(typeof DisassociateChannelFlowRequest$ === "object");
assert(typeof ElasticChannelConfiguration$ === "object");
assert(typeof ExpirationSettings$ === "object");
assert(typeof GetChannelMembershipPreferencesRequest$ === "object");
assert(typeof GetChannelMembershipPreferencesResponse$ === "object");
assert(typeof GetChannelMessageRequest$ === "object");
assert(typeof GetChannelMessageResponse$ === "object");
assert(typeof GetChannelMessageStatusRequest$ === "object");
assert(typeof GetChannelMessageStatusResponse$ === "object");
assert(typeof GetMessagingSessionEndpointRequest$ === "object");
assert(typeof GetMessagingSessionEndpointResponse$ === "object");
assert(typeof GetMessagingStreamingConfigurationsRequest$ === "object");
assert(typeof GetMessagingStreamingConfigurationsResponse$ === "object");
assert(typeof Identity$ === "object");
assert(typeof LambdaConfiguration$ === "object");
assert(typeof ListChannelBansRequest$ === "object");
assert(typeof ListChannelBansResponse$ === "object");
assert(typeof ListChannelFlowsRequest$ === "object");
assert(typeof ListChannelFlowsResponse$ === "object");
assert(typeof ListChannelMembershipsForAppInstanceUserRequest$ === "object");
assert(typeof ListChannelMembershipsForAppInstanceUserResponse$ === "object");
assert(typeof ListChannelMembershipsRequest$ === "object");
assert(typeof ListChannelMembershipsResponse$ === "object");
assert(typeof ListChannelMessagesRequest$ === "object");
assert(typeof ListChannelMessagesResponse$ === "object");
assert(typeof ListChannelModeratorsRequest$ === "object");
assert(typeof ListChannelModeratorsResponse$ === "object");
assert(typeof ListChannelsAssociatedWithChannelFlowRequest$ === "object");
assert(typeof ListChannelsAssociatedWithChannelFlowResponse$ === "object");
assert(typeof ListChannelsModeratedByAppInstanceUserRequest$ === "object");
assert(typeof ListChannelsModeratedByAppInstanceUserResponse$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListSubChannelsRequest$ === "object");
assert(typeof ListSubChannelsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MessageAttributeValue$ === "object");
assert(typeof MessagingSessionEndpoint$ === "object");
assert(typeof Processor$ === "object");
assert(typeof ProcessorConfiguration$ === "object");
assert(typeof PushNotificationConfiguration$ === "object");
assert(typeof PushNotificationPreferences$ === "object");
assert(typeof PutChannelExpirationSettingsRequest$ === "object");
assert(typeof PutChannelExpirationSettingsResponse$ === "object");
assert(typeof PutChannelMembershipPreferencesRequest$ === "object");
assert(typeof PutChannelMembershipPreferencesResponse$ === "object");
assert(typeof PutMessagingStreamingConfigurationsRequest$ === "object");
assert(typeof PutMessagingStreamingConfigurationsResponse$ === "object");
assert(typeof RedactChannelMessageRequest$ === "object");
assert(typeof RedactChannelMessageResponse$ === "object");
assert(typeof SearchChannelsRequest$ === "object");
assert(typeof SearchChannelsResponse$ === "object");
assert(typeof SearchField$ === "object");
assert(typeof SendChannelMessageRequest$ === "object");
assert(typeof SendChannelMessageResponse$ === "object");
assert(typeof StreamingConfiguration$ === "object");
assert(typeof SubChannelSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof Target$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateChannelFlowRequest$ === "object");
assert(typeof UpdateChannelFlowResponse$ === "object");
assert(typeof UpdateChannelMessageRequest$ === "object");
assert(typeof UpdateChannelMessageResponse$ === "object");
assert(typeof UpdateChannelReadMarkerRequest$ === "object");
assert(typeof UpdateChannelReadMarkerResponse$ === "object");
assert(typeof UpdateChannelRequest$ === "object");
assert(typeof UpdateChannelResponse$ === "object");
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
assert(BadRequestException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ForbiddenException$ === "object");
assert(NotFoundException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottledClientException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof ThrottledClientException$ === "object");
assert(UnauthorizedClientException.prototype instanceof ChimeSDKMessagingServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(ChimeSDKMessagingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannelBans === "function");
assert(typeof paginateListChannelFlows === "function");
assert(typeof paginateListChannelMemberships === "function");
assert(typeof paginateListChannelMembershipsForAppInstanceUser === "function");
assert(typeof paginateListChannelMessages === "function");
assert(typeof paginateListChannelModerators === "function");
assert(typeof paginateListChannels === "function");
assert(typeof paginateListChannelsAssociatedWithChannelFlow === "function");
assert(typeof paginateListChannelsModeratedByAppInstanceUser === "function");
assert(typeof paginateListSubChannels === "function");
assert(typeof paginateSearchChannels === "function");
console.log(`ChimeSDKMessaging index test passed.`);
