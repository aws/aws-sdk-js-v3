import {
  AccessDeniedException,
  BatchAddChannelRoleToAccessorsCommand,
  BatchAddRoleCommand,
  BatchRemoveChannelRoleFromAccessorsCommand,
  BatchRemoveRoleCommand,
  ChannelRole,
  ChannelStatus,
  ConfigurationStatus,
  ConflictException,
  CreateChannelCommand,
  CreateSpaceCommand,
  DeleteSpaceCommand,
  DeregisterAdminCommand,
  FeatureEnableParameter,
  FeatureEnableStatus,
  GetChannelCommand,
  GetSpaceCommand,
  InternalServerException,
  ListChannelsCommand,
  ListSpacesCommand,
  ListTagsForResourceCommand,
  RegisterAdminCommand,
  Repostspace,
  RepostspaceClient,
  RepostspaceServiceException,
  ResourceNotFoundException,
  Role,
  SendInvitesCommand,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  TierLevel,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateSpaceCommand,
  ValidationException,
  ValidationExceptionReason,
  VanityDomainStatus,
  paginateListChannels,
  paginateListSpaces,
  waitForChannelCreated,
  waitForChannelDeleted,
  waitForSpaceCreated,
  waitForSpaceDeleted,
  waitUntilChannelCreated,
  waitUntilChannelDeleted,
  waitUntilSpaceCreated,
  waitUntilSpaceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RepostspaceClient === "function");
assert(typeof Repostspace === "function");
// commands
assert(typeof BatchAddChannelRoleToAccessorsCommand === "function");
assert(typeof BatchAddRoleCommand === "function");
assert(typeof BatchRemoveChannelRoleFromAccessorsCommand === "function");
assert(typeof BatchRemoveRoleCommand === "function");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateSpaceCommand === "function");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeregisterAdminCommand === "function");
assert(typeof GetChannelCommand === "function");
assert(typeof GetSpaceCommand === "function");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterAdminCommand === "function");
assert(typeof SendInvitesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateSpaceCommand === "function");
// enums
assert(typeof ChannelRole === "object");
assert(typeof ChannelStatus === "object");
assert(typeof ConfigurationStatus === "object");
assert(typeof FeatureEnableParameter === "object");
assert(typeof FeatureEnableStatus === "object");
assert(typeof Role === "object");
assert(typeof TierLevel === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VanityDomainStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof RepostspaceServiceException);
assert(ConflictException.prototype instanceof RepostspaceServiceException);
assert(InternalServerException.prototype instanceof RepostspaceServiceException);
assert(ResourceNotFoundException.prototype instanceof RepostspaceServiceException);
assert(ServiceQuotaExceededException.prototype instanceof RepostspaceServiceException);
assert(ThrottlingException.prototype instanceof RepostspaceServiceException);
assert(ValidationException.prototype instanceof RepostspaceServiceException);
assert(RepostspaceServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForChannelCreated === "function");
assert(typeof waitForChannelDeleted === "function");
assert(typeof waitForSpaceCreated === "function");
assert(typeof waitForSpaceDeleted === "function");
assert(typeof waitUntilChannelCreated === "function");
assert(typeof waitUntilChannelDeleted === "function");
assert(typeof waitUntilSpaceCreated === "function");
assert(typeof waitUntilSpaceDeleted === "function");
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListSpaces === "function");
console.log(`Repostspace index test passed.`);
