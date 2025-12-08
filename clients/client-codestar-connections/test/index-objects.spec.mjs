import {
  AccessDeniedException,
  BlockerStatus,
  BlockerType,
  CodeStarConnections,
  CodeStarConnectionsClient,
  CodeStarConnectionsServiceException,
  ConcurrentModificationException,
  ConditionalCheckFailedException,
  ConflictException,
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
  InternalServerException,
  InvalidInputException,
  LimitExceededException,
  ListConnectionsCommand,
  ListHostsCommand,
  ListRepositoryLinksCommand,
  ListRepositorySyncDefinitionsCommand,
  ListSyncConfigurationsCommand,
  ListTagsForResourceCommand,
  ProviderType,
  PublishDeploymentStatus,
  RepositorySyncStatus,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResourceSyncStatus,
  ResourceUnavailableException,
  RetryLatestCommitFailedException,
  SyncBlockerDoesNotExistException,
  SyncConfigurationStillExistsException,
  SyncConfigurationType,
  TagResourceCommand,
  ThrottlingException,
  TriggerResourceUpdateOn,
  UnsupportedOperationException,
  UnsupportedProviderTypeException,
  UntagResourceCommand,
  UpdateHostCommand,
  UpdateOutOfSyncException,
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
assert(typeof CodeStarConnectionsClient === "function");
assert(typeof CodeStarConnections === "function");
// commands
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateHostCommand === "function");
assert(typeof CreateRepositoryLinkCommand === "function");
assert(typeof CreateSyncConfigurationCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteHostCommand === "function");
assert(typeof DeleteRepositoryLinkCommand === "function");
assert(typeof DeleteSyncConfigurationCommand === "function");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetHostCommand === "function");
assert(typeof GetRepositoryLinkCommand === "function");
assert(typeof GetRepositorySyncStatusCommand === "function");
assert(typeof GetResourceSyncStatusCommand === "function");
assert(typeof GetSyncBlockerSummaryCommand === "function");
assert(typeof GetSyncConfigurationCommand === "function");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListHostsCommand === "function");
assert(typeof ListRepositoryLinksCommand === "function");
assert(typeof ListRepositorySyncDefinitionsCommand === "function");
assert(typeof ListSyncConfigurationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateHostCommand === "function");
assert(typeof UpdateRepositoryLinkCommand === "function");
assert(typeof UpdateSyncBlockerCommand === "function");
assert(typeof UpdateSyncConfigurationCommand === "function");
// enums
assert(typeof BlockerStatus === "object");
assert(typeof BlockerType === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ProviderType === "object");
assert(typeof PublishDeploymentStatus === "object");
assert(typeof RepositorySyncStatus === "object");
assert(typeof ResourceSyncStatus === "object");
assert(typeof SyncConfigurationType === "object");
assert(typeof TriggerResourceUpdateOn === "object");
// errors
assert(AccessDeniedException.prototype instanceof CodeStarConnectionsServiceException);
assert(ConcurrentModificationException.prototype instanceof CodeStarConnectionsServiceException);
assert(ConditionalCheckFailedException.prototype instanceof CodeStarConnectionsServiceException);
assert(ConflictException.prototype instanceof CodeStarConnectionsServiceException);
assert(InternalServerException.prototype instanceof CodeStarConnectionsServiceException);
assert(InvalidInputException.prototype instanceof CodeStarConnectionsServiceException);
assert(LimitExceededException.prototype instanceof CodeStarConnectionsServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof CodeStarConnectionsServiceException);
assert(ResourceNotFoundException.prototype instanceof CodeStarConnectionsServiceException);
assert(ResourceUnavailableException.prototype instanceof CodeStarConnectionsServiceException);
assert(RetryLatestCommitFailedException.prototype instanceof CodeStarConnectionsServiceException);
assert(SyncBlockerDoesNotExistException.prototype instanceof CodeStarConnectionsServiceException);
assert(SyncConfigurationStillExistsException.prototype instanceof CodeStarConnectionsServiceException);
assert(ThrottlingException.prototype instanceof CodeStarConnectionsServiceException);
assert(UnsupportedOperationException.prototype instanceof CodeStarConnectionsServiceException);
assert(UnsupportedProviderTypeException.prototype instanceof CodeStarConnectionsServiceException);
assert(UpdateOutOfSyncException.prototype instanceof CodeStarConnectionsServiceException);
assert(CodeStarConnectionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnections === "function");
assert(typeof paginateListHosts === "function");
assert(typeof paginateListRepositoryLinks === "function");
assert(typeof paginateListSyncConfigurations === "function");
console.log(`CodeStarConnections index test passed.`);
