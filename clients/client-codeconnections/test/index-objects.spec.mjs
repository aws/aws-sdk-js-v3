import {
  BlockerStatus,
  BlockerType,
  CodeConnections,
  CodeConnectionsClient,
  CodeConnectionsServiceException,
  ConnectionStatus,
  CreateConnectionCommand,
  CreateHostCommand,
  CreateRepositoryLinkCommand,
  CreateSyncConfigurationCommand,
  DeleteConnectionCommand,
  DeleteHostCommand,
  DeleteRepositoryLinkCommand,
  DeleteSyncConfigurationCommand,
  GetConnectionCommand,
  GetHostCommand,
  GetRepositoryLinkCommand,
  GetRepositorySyncStatusCommand,
  GetResourceSyncStatusCommand,
  GetSyncBlockerSummaryCommand,
  GetSyncConfigurationCommand,
  ListConnectionsCommand,
  ListHostsCommand,
  ListRepositoryLinksCommand,
  ListRepositorySyncDefinitionsCommand,
  ListSyncConfigurationsCommand,
  ListTagsForResourceCommand,
  ProviderType,
  PublishDeploymentStatus,
  PullRequestComment,
  RepositorySyncStatus,
  ResourceSyncStatus,
  SyncConfigurationType,
  TagResourceCommand,
  TriggerResourceUpdateOn,
  UntagResourceCommand,
  UpdateHostCommand,
  UpdateRepositoryLinkCommand,
  UpdateSyncBlockerCommand,
  UpdateSyncConfigurationCommand,
  paginateListConnections,
  paginateListHosts,
  paginateListRepositoryLinks,
  paginateListSyncConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeConnectionsClient === "function")
assert(typeof CodeConnections === "function")
// commands
assert(typeof CreateConnectionCommand === "function")
assert(typeof CreateHostCommand === "function")
assert(typeof CreateRepositoryLinkCommand === "function")
assert(typeof CreateSyncConfigurationCommand === "function")
assert(typeof DeleteConnectionCommand === "function")
assert(typeof DeleteHostCommand === "function")
assert(typeof DeleteRepositoryLinkCommand === "function")
assert(typeof DeleteSyncConfigurationCommand === "function")
assert(typeof GetConnectionCommand === "function")
assert(typeof GetHostCommand === "function")
assert(typeof GetRepositoryLinkCommand === "function")
assert(typeof GetRepositorySyncStatusCommand === "function")
assert(typeof GetResourceSyncStatusCommand === "function")
assert(typeof GetSyncBlockerSummaryCommand === "function")
assert(typeof GetSyncConfigurationCommand === "function")
assert(typeof ListConnectionsCommand === "function")
assert(typeof ListHostsCommand === "function")
assert(typeof ListRepositoryLinksCommand === "function")
assert(typeof ListRepositorySyncDefinitionsCommand === "function")
assert(typeof ListSyncConfigurationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateHostCommand === "function")
assert(typeof UpdateRepositoryLinkCommand === "function")
assert(typeof UpdateSyncBlockerCommand === "function")
assert(typeof UpdateSyncConfigurationCommand === "function")
// enums
assert(typeof BlockerStatus === "object");
assert(typeof BlockerType === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ProviderType === "object");
assert(typeof PublishDeploymentStatus === "object");
assert(typeof PullRequestComment === "object");
assert(typeof RepositorySyncStatus === "object");
assert(typeof ResourceSyncStatus === "object");
assert(typeof SyncConfigurationType === "object");
assert(typeof TriggerResourceUpdateOn === "object");
// errors
assert(CodeConnectionsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListConnections === "function")
assert(typeof paginateListHosts === "function")
assert(typeof paginateListRepositoryLinks === "function")
assert(typeof paginateListSyncConfigurations === "function")
console.log(`CodeConnections index test passed.`);
