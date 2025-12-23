import {
  AccessDeniedException,
  AccessDeniedException$,
  BatchAddChannelRoleToAccessors$,
  BatchAddChannelRoleToAccessorsCommand,
  BatchAddChannelRoleToAccessorsInput$,
  BatchAddChannelRoleToAccessorsOutput$,
  BatchAddRole$,
  BatchAddRoleCommand,
  BatchAddRoleInput$,
  BatchAddRoleOutput$,
  BatchError$,
  BatchRemoveChannelRoleFromAccessors$,
  BatchRemoveChannelRoleFromAccessorsCommand,
  BatchRemoveChannelRoleFromAccessorsInput$,
  BatchRemoveChannelRoleFromAccessorsOutput$,
  BatchRemoveRole$,
  BatchRemoveRoleCommand,
  BatchRemoveRoleInput$,
  BatchRemoveRoleOutput$,
  ChannelData$,
  ChannelRole,
  ChannelStatus,
  ConfigurationStatus,
  ConflictException,
  ConflictException$,
  CreateChannel$,
  CreateChannelCommand,
  CreateChannelInput$,
  CreateChannelOutput$,
  CreateSpace$,
  CreateSpaceCommand,
  CreateSpaceInput$,
  CreateSpaceOutput$,
  DeleteSpace$,
  DeleteSpaceCommand,
  DeleteSpaceInput$,
  DeregisterAdmin$,
  DeregisterAdminCommand,
  DeregisterAdminInput$,
  FeatureEnableParameter,
  FeatureEnableStatus,
  GetChannel$,
  GetChannelCommand,
  GetChannelInput$,
  GetChannelOutput$,
  GetSpace$,
  GetSpaceCommand,
  GetSpaceInput$,
  GetSpaceOutput$,
  InternalServerException,
  InternalServerException$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsInput$,
  ListChannelsOutput$,
  ListSpaces$,
  ListSpacesCommand,
  ListSpacesInput$,
  ListSpacesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListChannels,
  paginateListSpaces,
  RegisterAdmin$,
  RegisterAdminCommand,
  RegisterAdminInput$,
  Repostspace,
  RepostspaceClient,
  RepostspaceServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Role,
  SendInvites$,
  SendInvitesCommand,
  SendInvitesInput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SpaceData$,
  SupportedEmailDomainsParameters$,
  SupportedEmailDomainsStatus$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TierLevel,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateChannel$,
  UpdateChannelCommand,
  UpdateChannelInput$,
  UpdateChannelOutput$,
  UpdateSpace$,
  UpdateSpaceCommand,
  UpdateSpaceInput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VanityDomainStatus,
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
assert(typeof BatchAddChannelRoleToAccessors$ === "object");
assert(typeof BatchAddRoleCommand === "function");
assert(typeof BatchAddRole$ === "object");
assert(typeof BatchRemoveChannelRoleFromAccessorsCommand === "function");
assert(typeof BatchRemoveChannelRoleFromAccessors$ === "object");
assert(typeof BatchRemoveRoleCommand === "function");
assert(typeof BatchRemoveRole$ === "object");
assert(typeof CreateChannelCommand === "function");
assert(typeof CreateChannel$ === "object");
assert(typeof CreateSpaceCommand === "function");
assert(typeof CreateSpace$ === "object");
assert(typeof DeleteSpaceCommand === "function");
assert(typeof DeleteSpace$ === "object");
assert(typeof DeregisterAdminCommand === "function");
assert(typeof DeregisterAdmin$ === "object");
assert(typeof GetChannelCommand === "function");
assert(typeof GetChannel$ === "object");
assert(typeof GetSpaceCommand === "function");
assert(typeof GetSpace$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListSpacesCommand === "function");
assert(typeof ListSpaces$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterAdminCommand === "function");
assert(typeof RegisterAdmin$ === "object");
assert(typeof SendInvitesCommand === "function");
assert(typeof SendInvites$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateChannelCommand === "function");
assert(typeof UpdateChannel$ === "object");
assert(typeof UpdateSpaceCommand === "function");
assert(typeof UpdateSpace$ === "object");
// structural schemas
assert(typeof BatchAddChannelRoleToAccessorsInput$ === "object");
assert(typeof BatchAddChannelRoleToAccessorsOutput$ === "object");
assert(typeof BatchAddRoleInput$ === "object");
assert(typeof BatchAddRoleOutput$ === "object");
assert(typeof BatchError$ === "object");
assert(typeof BatchRemoveChannelRoleFromAccessorsInput$ === "object");
assert(typeof BatchRemoveChannelRoleFromAccessorsOutput$ === "object");
assert(typeof BatchRemoveRoleInput$ === "object");
assert(typeof BatchRemoveRoleOutput$ === "object");
assert(typeof ChannelData$ === "object");
assert(typeof CreateChannelInput$ === "object");
assert(typeof CreateChannelOutput$ === "object");
assert(typeof CreateSpaceInput$ === "object");
assert(typeof CreateSpaceOutput$ === "object");
assert(typeof DeleteSpaceInput$ === "object");
assert(typeof DeregisterAdminInput$ === "object");
assert(typeof GetChannelInput$ === "object");
assert(typeof GetChannelOutput$ === "object");
assert(typeof GetSpaceInput$ === "object");
assert(typeof GetSpaceOutput$ === "object");
assert(typeof ListChannelsInput$ === "object");
assert(typeof ListChannelsOutput$ === "object");
assert(typeof ListSpacesInput$ === "object");
assert(typeof ListSpacesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof RegisterAdminInput$ === "object");
assert(typeof SendInvitesInput$ === "object");
assert(typeof SpaceData$ === "object");
assert(typeof SupportedEmailDomainsParameters$ === "object");
assert(typeof SupportedEmailDomainsStatus$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateChannelInput$ === "object");
assert(typeof UpdateChannelOutput$ === "object");
assert(typeof UpdateSpaceInput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof RepostspaceServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof RepostspaceServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RepostspaceServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RepostspaceServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof RepostspaceServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof RepostspaceServiceException);
assert(typeof ValidationException$ === "object");
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
