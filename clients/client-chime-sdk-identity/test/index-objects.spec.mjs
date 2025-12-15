import {
  AllowMessages,
  AppInstance$,
  AppInstanceAdmin$,
  AppInstanceAdminSummary$,
  AppInstanceBot$,
  AppInstanceBotSummary$,
  AppInstanceRetentionSettings$,
  AppInstanceSummary$,
  AppInstanceUser$,
  AppInstanceUserEndpoint$,
  AppInstanceUserEndpointSummary$,
  AppInstanceUserEndpointType,
  AppInstanceUserSummary$,
  BadRequestException,
  BadRequestException$,
  ChannelRetentionSettings$,
  ChimeSDKIdentity,
  ChimeSDKIdentityClient,
  ChimeSDKIdentityServiceException,
  Configuration$,
  ConflictException,
  ConflictException$,
  CreateAppInstance$,
  CreateAppInstanceAdmin$,
  CreateAppInstanceAdminCommand,
  CreateAppInstanceAdminRequest$,
  CreateAppInstanceAdminResponse$,
  CreateAppInstanceBot$,
  CreateAppInstanceBotCommand,
  CreateAppInstanceBotRequest$,
  CreateAppInstanceBotResponse$,
  CreateAppInstanceCommand,
  CreateAppInstanceRequest$,
  CreateAppInstanceResponse$,
  CreateAppInstanceUser$,
  CreateAppInstanceUserCommand,
  CreateAppInstanceUserRequest$,
  CreateAppInstanceUserResponse$,
  DeleteAppInstance$,
  DeleteAppInstanceAdmin$,
  DeleteAppInstanceAdminCommand,
  DeleteAppInstanceAdminRequest$,
  DeleteAppInstanceBot$,
  DeleteAppInstanceBotCommand,
  DeleteAppInstanceBotRequest$,
  DeleteAppInstanceCommand,
  DeleteAppInstanceRequest$,
  DeleteAppInstanceUser$,
  DeleteAppInstanceUserCommand,
  DeleteAppInstanceUserRequest$,
  DeregisterAppInstanceUserEndpoint$,
  DeregisterAppInstanceUserEndpointCommand,
  DeregisterAppInstanceUserEndpointRequest$,
  DescribeAppInstance$,
  DescribeAppInstanceAdmin$,
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceAdminRequest$,
  DescribeAppInstanceAdminResponse$,
  DescribeAppInstanceBot$,
  DescribeAppInstanceBotCommand,
  DescribeAppInstanceBotRequest$,
  DescribeAppInstanceBotResponse$,
  DescribeAppInstanceCommand,
  DescribeAppInstanceRequest$,
  DescribeAppInstanceResponse$,
  DescribeAppInstanceUser$,
  DescribeAppInstanceUserCommand,
  DescribeAppInstanceUserEndpoint$,
  DescribeAppInstanceUserEndpointCommand,
  DescribeAppInstanceUserEndpointRequest$,
  DescribeAppInstanceUserEndpointResponse$,
  DescribeAppInstanceUserRequest$,
  DescribeAppInstanceUserResponse$,
  EndpointAttributes$,
  EndpointState$,
  EndpointStatus,
  EndpointStatusReason,
  ErrorCode,
  ExpirationCriterion,
  ExpirationSettings$,
  ForbiddenException,
  ForbiddenException$,
  GetAppInstanceRetentionSettings$,
  GetAppInstanceRetentionSettingsCommand,
  GetAppInstanceRetentionSettingsRequest$,
  GetAppInstanceRetentionSettingsResponse$,
  Identity$,
  InvokedBy$,
  LexConfiguration$,
  ListAppInstanceAdmins$,
  ListAppInstanceAdminsCommand,
  ListAppInstanceAdminsRequest$,
  ListAppInstanceAdminsResponse$,
  ListAppInstanceBots$,
  ListAppInstanceBotsCommand,
  ListAppInstanceBotsRequest$,
  ListAppInstanceBotsResponse$,
  ListAppInstanceUserEndpoints$,
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUserEndpointsRequest$,
  ListAppInstanceUserEndpointsResponse$,
  ListAppInstanceUsers$,
  ListAppInstanceUsersCommand,
  ListAppInstanceUsersRequest$,
  ListAppInstanceUsersResponse$,
  ListAppInstances$,
  ListAppInstancesCommand,
  ListAppInstancesRequest$,
  ListAppInstancesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotFoundException,
  NotFoundException$,
  PutAppInstanceRetentionSettings$,
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceRetentionSettingsRequest$,
  PutAppInstanceRetentionSettingsResponse$,
  PutAppInstanceUserExpirationSettings$,
  PutAppInstanceUserExpirationSettingsCommand,
  PutAppInstanceUserExpirationSettingsRequest$,
  PutAppInstanceUserExpirationSettingsResponse$,
  RegisterAppInstanceUserEndpoint$,
  RegisterAppInstanceUserEndpointCommand,
  RegisterAppInstanceUserEndpointRequest$,
  RegisterAppInstanceUserEndpointResponse$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  RespondsTo,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StandardMessages,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TargetedMessages,
  ThrottledClientException,
  ThrottledClientException$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateAppInstance$,
  UpdateAppInstanceBot$,
  UpdateAppInstanceBotCommand,
  UpdateAppInstanceBotRequest$,
  UpdateAppInstanceBotResponse$,
  UpdateAppInstanceCommand,
  UpdateAppInstanceRequest$,
  UpdateAppInstanceResponse$,
  UpdateAppInstanceUser$,
  UpdateAppInstanceUserCommand,
  UpdateAppInstanceUserEndpoint$,
  UpdateAppInstanceUserEndpointCommand,
  UpdateAppInstanceUserEndpointRequest$,
  UpdateAppInstanceUserEndpointResponse$,
  UpdateAppInstanceUserRequest$,
  UpdateAppInstanceUserResponse$,
  paginateListAppInstanceAdmins,
  paginateListAppInstanceBots,
  paginateListAppInstanceUserEndpoints,
  paginateListAppInstanceUsers,
  paginateListAppInstances,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChimeSDKIdentityClient === "function");
assert(typeof ChimeSDKIdentity === "function");
// commands
assert(typeof CreateAppInstanceCommand === "function");
assert(typeof CreateAppInstance$ === "object");
assert(typeof CreateAppInstanceAdminCommand === "function");
assert(typeof CreateAppInstanceAdmin$ === "object");
assert(typeof CreateAppInstanceBotCommand === "function");
assert(typeof CreateAppInstanceBot$ === "object");
assert(typeof CreateAppInstanceUserCommand === "function");
assert(typeof CreateAppInstanceUser$ === "object");
assert(typeof DeleteAppInstanceCommand === "function");
assert(typeof DeleteAppInstance$ === "object");
assert(typeof DeleteAppInstanceAdminCommand === "function");
assert(typeof DeleteAppInstanceAdmin$ === "object");
assert(typeof DeleteAppInstanceBotCommand === "function");
assert(typeof DeleteAppInstanceBot$ === "object");
assert(typeof DeleteAppInstanceUserCommand === "function");
assert(typeof DeleteAppInstanceUser$ === "object");
assert(typeof DeregisterAppInstanceUserEndpointCommand === "function");
assert(typeof DeregisterAppInstanceUserEndpoint$ === "object");
assert(typeof DescribeAppInstanceCommand === "function");
assert(typeof DescribeAppInstance$ === "object");
assert(typeof DescribeAppInstanceAdminCommand === "function");
assert(typeof DescribeAppInstanceAdmin$ === "object");
assert(typeof DescribeAppInstanceBotCommand === "function");
assert(typeof DescribeAppInstanceBot$ === "object");
assert(typeof DescribeAppInstanceUserCommand === "function");
assert(typeof DescribeAppInstanceUser$ === "object");
assert(typeof DescribeAppInstanceUserEndpointCommand === "function");
assert(typeof DescribeAppInstanceUserEndpoint$ === "object");
assert(typeof GetAppInstanceRetentionSettingsCommand === "function");
assert(typeof GetAppInstanceRetentionSettings$ === "object");
assert(typeof ListAppInstanceAdminsCommand === "function");
assert(typeof ListAppInstanceAdmins$ === "object");
assert(typeof ListAppInstanceBotsCommand === "function");
assert(typeof ListAppInstanceBots$ === "object");
assert(typeof ListAppInstancesCommand === "function");
assert(typeof ListAppInstances$ === "object");
assert(typeof ListAppInstanceUserEndpointsCommand === "function");
assert(typeof ListAppInstanceUserEndpoints$ === "object");
assert(typeof ListAppInstanceUsersCommand === "function");
assert(typeof ListAppInstanceUsers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAppInstanceRetentionSettingsCommand === "function");
assert(typeof PutAppInstanceRetentionSettings$ === "object");
assert(typeof PutAppInstanceUserExpirationSettingsCommand === "function");
assert(typeof PutAppInstanceUserExpirationSettings$ === "object");
assert(typeof RegisterAppInstanceUserEndpointCommand === "function");
assert(typeof RegisterAppInstanceUserEndpoint$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAppInstanceCommand === "function");
assert(typeof UpdateAppInstance$ === "object");
assert(typeof UpdateAppInstanceBotCommand === "function");
assert(typeof UpdateAppInstanceBot$ === "object");
assert(typeof UpdateAppInstanceUserCommand === "function");
assert(typeof UpdateAppInstanceUser$ === "object");
assert(typeof UpdateAppInstanceUserEndpointCommand === "function");
assert(typeof UpdateAppInstanceUserEndpoint$ === "object");
// structural schemas
assert(typeof AppInstance$ === "object");
assert(typeof AppInstanceAdmin$ === "object");
assert(typeof AppInstanceAdminSummary$ === "object");
assert(typeof AppInstanceBot$ === "object");
assert(typeof AppInstanceBotSummary$ === "object");
assert(typeof AppInstanceRetentionSettings$ === "object");
assert(typeof AppInstanceSummary$ === "object");
assert(typeof AppInstanceUser$ === "object");
assert(typeof AppInstanceUserEndpoint$ === "object");
assert(typeof AppInstanceUserEndpointSummary$ === "object");
assert(typeof AppInstanceUserSummary$ === "object");
assert(typeof ChannelRetentionSettings$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof CreateAppInstanceAdminRequest$ === "object");
assert(typeof CreateAppInstanceAdminResponse$ === "object");
assert(typeof CreateAppInstanceBotRequest$ === "object");
assert(typeof CreateAppInstanceBotResponse$ === "object");
assert(typeof CreateAppInstanceRequest$ === "object");
assert(typeof CreateAppInstanceResponse$ === "object");
assert(typeof CreateAppInstanceUserRequest$ === "object");
assert(typeof CreateAppInstanceUserResponse$ === "object");
assert(typeof DeleteAppInstanceAdminRequest$ === "object");
assert(typeof DeleteAppInstanceBotRequest$ === "object");
assert(typeof DeleteAppInstanceRequest$ === "object");
assert(typeof DeleteAppInstanceUserRequest$ === "object");
assert(typeof DeregisterAppInstanceUserEndpointRequest$ === "object");
assert(typeof DescribeAppInstanceAdminRequest$ === "object");
assert(typeof DescribeAppInstanceAdminResponse$ === "object");
assert(typeof DescribeAppInstanceBotRequest$ === "object");
assert(typeof DescribeAppInstanceBotResponse$ === "object");
assert(typeof DescribeAppInstanceRequest$ === "object");
assert(typeof DescribeAppInstanceResponse$ === "object");
assert(typeof DescribeAppInstanceUserEndpointRequest$ === "object");
assert(typeof DescribeAppInstanceUserEndpointResponse$ === "object");
assert(typeof DescribeAppInstanceUserRequest$ === "object");
assert(typeof DescribeAppInstanceUserResponse$ === "object");
assert(typeof EndpointAttributes$ === "object");
assert(typeof EndpointState$ === "object");
assert(typeof ExpirationSettings$ === "object");
assert(typeof GetAppInstanceRetentionSettingsRequest$ === "object");
assert(typeof GetAppInstanceRetentionSettingsResponse$ === "object");
assert(typeof Identity$ === "object");
assert(typeof InvokedBy$ === "object");
assert(typeof LexConfiguration$ === "object");
assert(typeof ListAppInstanceAdminsRequest$ === "object");
assert(typeof ListAppInstanceAdminsResponse$ === "object");
assert(typeof ListAppInstanceBotsRequest$ === "object");
assert(typeof ListAppInstanceBotsResponse$ === "object");
assert(typeof ListAppInstancesRequest$ === "object");
assert(typeof ListAppInstancesResponse$ === "object");
assert(typeof ListAppInstanceUserEndpointsRequest$ === "object");
assert(typeof ListAppInstanceUserEndpointsResponse$ === "object");
assert(typeof ListAppInstanceUsersRequest$ === "object");
assert(typeof ListAppInstanceUsersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PutAppInstanceRetentionSettingsRequest$ === "object");
assert(typeof PutAppInstanceRetentionSettingsResponse$ === "object");
assert(typeof PutAppInstanceUserExpirationSettingsRequest$ === "object");
assert(typeof PutAppInstanceUserExpirationSettingsResponse$ === "object");
assert(typeof RegisterAppInstanceUserEndpointRequest$ === "object");
assert(typeof RegisterAppInstanceUserEndpointResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateAppInstanceBotRequest$ === "object");
assert(typeof UpdateAppInstanceBotResponse$ === "object");
assert(typeof UpdateAppInstanceRequest$ === "object");
assert(typeof UpdateAppInstanceResponse$ === "object");
assert(typeof UpdateAppInstanceUserEndpointRequest$ === "object");
assert(typeof UpdateAppInstanceUserEndpointResponse$ === "object");
assert(typeof UpdateAppInstanceUserRequest$ === "object");
assert(typeof UpdateAppInstanceUserResponse$ === "object");
// enums
assert(typeof AllowMessages === "object");
assert(typeof AppInstanceUserEndpointType === "object");
assert(typeof EndpointStatus === "object");
assert(typeof EndpointStatusReason === "object");
assert(typeof ErrorCode === "object");
assert(typeof ExpirationCriterion === "object");
assert(typeof RespondsTo === "object");
assert(typeof StandardMessages === "object");
assert(typeof TargetedMessages === "object");
// errors
assert(BadRequestException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ForbiddenException$ === "object");
assert(NotFoundException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ServiceFailureException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottledClientException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof ThrottledClientException$ === "object");
assert(UnauthorizedClientException.prototype instanceof ChimeSDKIdentityServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(ChimeSDKIdentityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAppInstanceAdmins === "function");
assert(typeof paginateListAppInstanceBots === "function");
assert(typeof paginateListAppInstanceUserEndpoints === "function");
assert(typeof paginateListAppInstanceUsers === "function");
assert(typeof paginateListAppInstances === "function");
console.log(`ChimeSDKIdentity index test passed.`);
