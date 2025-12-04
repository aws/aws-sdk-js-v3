import {
  AllowMessages,
  AppInstanceUserEndpointType,
  ChimeSDKIdentity,
  ChimeSDKIdentityClient,
  ChimeSDKIdentityServiceException,
  CreateAppInstanceAdminCommand,
  CreateAppInstanceBotCommand,
  CreateAppInstanceCommand,
  CreateAppInstanceUserCommand,
  DeleteAppInstanceAdminCommand,
  DeleteAppInstanceBotCommand,
  DeleteAppInstanceCommand,
  DeleteAppInstanceUserCommand,
  DeregisterAppInstanceUserEndpointCommand,
  DescribeAppInstanceAdminCommand,
  DescribeAppInstanceBotCommand,
  DescribeAppInstanceCommand,
  DescribeAppInstanceUserCommand,
  DescribeAppInstanceUserEndpointCommand,
  EndpointStatus,
  EndpointStatusReason,
  ExpirationCriterion,
  GetAppInstanceRetentionSettingsCommand,
  ListAppInstanceAdminsCommand,
  ListAppInstanceBotsCommand,
  ListAppInstanceUserEndpointsCommand,
  ListAppInstanceUsersCommand,
  ListAppInstancesCommand,
  ListTagsForResourceCommand,
  PutAppInstanceRetentionSettingsCommand,
  PutAppInstanceUserExpirationSettingsCommand,
  RegisterAppInstanceUserEndpointCommand,
  RespondsTo,
  StandardMessages,
  TagResourceCommand,
  TargetedMessages,
  UntagResourceCommand,
  UpdateAppInstanceBotCommand,
  UpdateAppInstanceCommand,
  UpdateAppInstanceUserCommand,
  UpdateAppInstanceUserEndpointCommand,
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
assert(typeof CreateAppInstanceAdminCommand === "function");
assert(typeof CreateAppInstanceBotCommand === "function");
assert(typeof CreateAppInstanceUserCommand === "function");
assert(typeof DeleteAppInstanceCommand === "function");
assert(typeof DeleteAppInstanceAdminCommand === "function");
assert(typeof DeleteAppInstanceBotCommand === "function");
assert(typeof DeleteAppInstanceUserCommand === "function");
assert(typeof DeregisterAppInstanceUserEndpointCommand === "function");
assert(typeof DescribeAppInstanceCommand === "function");
assert(typeof DescribeAppInstanceAdminCommand === "function");
assert(typeof DescribeAppInstanceBotCommand === "function");
assert(typeof DescribeAppInstanceUserCommand === "function");
assert(typeof DescribeAppInstanceUserEndpointCommand === "function");
assert(typeof GetAppInstanceRetentionSettingsCommand === "function");
assert(typeof ListAppInstanceAdminsCommand === "function");
assert(typeof ListAppInstanceBotsCommand === "function");
assert(typeof ListAppInstancesCommand === "function");
assert(typeof ListAppInstanceUserEndpointsCommand === "function");
assert(typeof ListAppInstanceUsersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAppInstanceRetentionSettingsCommand === "function");
assert(typeof PutAppInstanceUserExpirationSettingsCommand === "function");
assert(typeof RegisterAppInstanceUserEndpointCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAppInstanceCommand === "function");
assert(typeof UpdateAppInstanceBotCommand === "function");
assert(typeof UpdateAppInstanceUserCommand === "function");
assert(typeof UpdateAppInstanceUserEndpointCommand === "function");
// enums
assert(typeof AllowMessages === "object");
assert(typeof AppInstanceUserEndpointType === "object");
assert(typeof EndpointStatus === "object");
assert(typeof EndpointStatusReason === "object");
assert(typeof ExpirationCriterion === "object");
assert(typeof RespondsTo === "object");
assert(typeof StandardMessages === "object");
assert(typeof TargetedMessages === "object");
// errors
assert(ChimeSDKIdentityServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAppInstanceAdmins === "function");
assert(typeof paginateListAppInstanceBots === "function");
assert(typeof paginateListAppInstanceUserEndpoints === "function");
assert(typeof paginateListAppInstanceUsers === "function");
assert(typeof paginateListAppInstances === "function");
console.log(`ChimeSDKIdentity index test passed.`);
