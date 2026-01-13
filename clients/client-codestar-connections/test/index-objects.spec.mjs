import {
  AccessDeniedException,
  AccessDeniedException$,
  BlockerStatus,
  BlockerType,
  CodeStarConnections,
  CodeStarConnectionsClient,
  CodeStarConnectionsServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConditionalCheckFailedException,
  ConditionalCheckFailedException$,
  ConflictException,
  ConflictException$,
  Connection$,
  ConnectionStatus,
  CreateConnection$,
  CreateConnectionCommand,
  CreateConnectionInput$,
  CreateConnectionOutput$,
  CreateHost$,
  CreateHostCommand,
  CreateHostInput$,
  CreateHostOutput$,
  CreateRepositoryLink$,
  CreateRepositoryLinkCommand,
  CreateRepositoryLinkInput$,
  CreateRepositoryLinkOutput$,
  CreateSyncConfiguration$,
  CreateSyncConfigurationCommand,
  CreateSyncConfigurationInput$,
  CreateSyncConfigurationOutput$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionInput$,
  DeleteConnectionOutput$,
  DeleteHost$,
  DeleteHostCommand,
  DeleteHostInput$,
  DeleteHostOutput$,
  DeleteRepositoryLink$,
  DeleteRepositoryLinkCommand,
  DeleteRepositoryLinkInput$,
  DeleteRepositoryLinkOutput$,
  DeleteSyncConfiguration$,
  DeleteSyncConfigurationCommand,
  DeleteSyncConfigurationInput$,
  DeleteSyncConfigurationOutput$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionInput$,
  GetConnectionOutput$,
  GetHost$,
  GetHostCommand,
  GetHostInput$,
  GetHostOutput$,
  GetRepositoryLink$,
  GetRepositoryLinkCommand,
  GetRepositoryLinkInput$,
  GetRepositoryLinkOutput$,
  GetRepositorySyncStatus$,
  GetRepositorySyncStatusCommand,
  GetRepositorySyncStatusInput$,
  GetRepositorySyncStatusOutput$,
  GetResourceSyncStatus$,
  GetResourceSyncStatusCommand,
  GetResourceSyncStatusInput$,
  GetResourceSyncStatusOutput$,
  GetSyncBlockerSummary$,
  GetSyncBlockerSummaryCommand,
  GetSyncBlockerSummaryInput$,
  GetSyncBlockerSummaryOutput$,
  GetSyncConfiguration$,
  GetSyncConfigurationCommand,
  GetSyncConfigurationInput$,
  GetSyncConfigurationOutput$,
  Host$,
  InternalServerException,
  InternalServerException$,
  InvalidInputException,
  InvalidInputException$,
  LimitExceededException,
  LimitExceededException$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsInput$,
  ListConnectionsOutput$,
  ListHosts$,
  ListHostsCommand,
  ListHostsInput$,
  ListHostsOutput$,
  ListRepositoryLinks$,
  ListRepositoryLinksCommand,
  ListRepositoryLinksInput$,
  ListRepositoryLinksOutput$,
  ListRepositorySyncDefinitions$,
  ListRepositorySyncDefinitionsCommand,
  ListRepositorySyncDefinitionsInput$,
  ListRepositorySyncDefinitionsOutput$,
  ListSyncConfigurations$,
  ListSyncConfigurationsCommand,
  ListSyncConfigurationsInput$,
  ListSyncConfigurationsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  paginateListConnections,
  paginateListHosts,
  paginateListRepositoryLinks,
  paginateListSyncConfigurations,
  ProviderType,
  PublishDeploymentStatus,
  RepositoryLinkInfo$,
  RepositorySyncAttempt$,
  RepositorySyncDefinition$,
  RepositorySyncEvent$,
  RepositorySyncStatus,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSyncAttempt$,
  ResourceSyncEvent$,
  ResourceSyncStatus,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  RetryLatestCommitFailedException,
  RetryLatestCommitFailedException$,
  Revision$,
  SyncBlocker$,
  SyncBlockerContext$,
  SyncBlockerDoesNotExistException,
  SyncBlockerDoesNotExistException$,
  SyncBlockerSummary$,
  SyncConfiguration$,
  SyncConfigurationStillExistsException,
  SyncConfigurationStillExistsException$,
  SyncConfigurationType,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  TriggerResourceUpdateOn,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UnsupportedProviderTypeException,
  UnsupportedProviderTypeException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateHost$,
  UpdateHostCommand,
  UpdateHostInput$,
  UpdateHostOutput$,
  UpdateOutOfSyncException,
  UpdateOutOfSyncException$,
  UpdateRepositoryLink$,
  UpdateRepositoryLinkCommand,
  UpdateRepositoryLinkInput$,
  UpdateRepositoryLinkOutput$,
  UpdateSyncBlocker$,
  UpdateSyncBlockerCommand,
  UpdateSyncBlockerInput$,
  UpdateSyncBlockerOutput$,
  UpdateSyncConfiguration$,
  UpdateSyncConfigurationCommand,
  UpdateSyncConfigurationInput$,
  UpdateSyncConfigurationOutput$,
  VpcConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeStarConnectionsClient === "function");
assert(typeof CodeStarConnections === "function");
// commands
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateHostCommand === "function");
assert(typeof CreateHost$ === "object");
assert(typeof CreateRepositoryLinkCommand === "function");
assert(typeof CreateRepositoryLink$ === "object");
assert(typeof CreateSyncConfigurationCommand === "function");
assert(typeof CreateSyncConfiguration$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteHostCommand === "function");
assert(typeof DeleteHost$ === "object");
assert(typeof DeleteRepositoryLinkCommand === "function");
assert(typeof DeleteRepositoryLink$ === "object");
assert(typeof DeleteSyncConfigurationCommand === "function");
assert(typeof DeleteSyncConfiguration$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetHostCommand === "function");
assert(typeof GetHost$ === "object");
assert(typeof GetRepositoryLinkCommand === "function");
assert(typeof GetRepositoryLink$ === "object");
assert(typeof GetRepositorySyncStatusCommand === "function");
assert(typeof GetRepositorySyncStatus$ === "object");
assert(typeof GetResourceSyncStatusCommand === "function");
assert(typeof GetResourceSyncStatus$ === "object");
assert(typeof GetSyncBlockerSummaryCommand === "function");
assert(typeof GetSyncBlockerSummary$ === "object");
assert(typeof GetSyncConfigurationCommand === "function");
assert(typeof GetSyncConfiguration$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListHostsCommand === "function");
assert(typeof ListHosts$ === "object");
assert(typeof ListRepositoryLinksCommand === "function");
assert(typeof ListRepositoryLinks$ === "object");
assert(typeof ListRepositorySyncDefinitionsCommand === "function");
assert(typeof ListRepositorySyncDefinitions$ === "object");
assert(typeof ListSyncConfigurationsCommand === "function");
assert(typeof ListSyncConfigurations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateHostCommand === "function");
assert(typeof UpdateHost$ === "object");
assert(typeof UpdateRepositoryLinkCommand === "function");
assert(typeof UpdateRepositoryLink$ === "object");
assert(typeof UpdateSyncBlockerCommand === "function");
assert(typeof UpdateSyncBlocker$ === "object");
assert(typeof UpdateSyncConfigurationCommand === "function");
assert(typeof UpdateSyncConfiguration$ === "object");
// structural schemas
assert(typeof Connection$ === "object");
assert(typeof CreateConnectionInput$ === "object");
assert(typeof CreateConnectionOutput$ === "object");
assert(typeof CreateHostInput$ === "object");
assert(typeof CreateHostOutput$ === "object");
assert(typeof CreateRepositoryLinkInput$ === "object");
assert(typeof CreateRepositoryLinkOutput$ === "object");
assert(typeof CreateSyncConfigurationInput$ === "object");
assert(typeof CreateSyncConfigurationOutput$ === "object");
assert(typeof DeleteConnectionInput$ === "object");
assert(typeof DeleteConnectionOutput$ === "object");
assert(typeof DeleteHostInput$ === "object");
assert(typeof DeleteHostOutput$ === "object");
assert(typeof DeleteRepositoryLinkInput$ === "object");
assert(typeof DeleteRepositoryLinkOutput$ === "object");
assert(typeof DeleteSyncConfigurationInput$ === "object");
assert(typeof DeleteSyncConfigurationOutput$ === "object");
assert(typeof GetConnectionInput$ === "object");
assert(typeof GetConnectionOutput$ === "object");
assert(typeof GetHostInput$ === "object");
assert(typeof GetHostOutput$ === "object");
assert(typeof GetRepositoryLinkInput$ === "object");
assert(typeof GetRepositoryLinkOutput$ === "object");
assert(typeof GetRepositorySyncStatusInput$ === "object");
assert(typeof GetRepositorySyncStatusOutput$ === "object");
assert(typeof GetResourceSyncStatusInput$ === "object");
assert(typeof GetResourceSyncStatusOutput$ === "object");
assert(typeof GetSyncBlockerSummaryInput$ === "object");
assert(typeof GetSyncBlockerSummaryOutput$ === "object");
assert(typeof GetSyncConfigurationInput$ === "object");
assert(typeof GetSyncConfigurationOutput$ === "object");
assert(typeof Host$ === "object");
assert(typeof ListConnectionsInput$ === "object");
assert(typeof ListConnectionsOutput$ === "object");
assert(typeof ListHostsInput$ === "object");
assert(typeof ListHostsOutput$ === "object");
assert(typeof ListRepositoryLinksInput$ === "object");
assert(typeof ListRepositoryLinksOutput$ === "object");
assert(typeof ListRepositorySyncDefinitionsInput$ === "object");
assert(typeof ListRepositorySyncDefinitionsOutput$ === "object");
assert(typeof ListSyncConfigurationsInput$ === "object");
assert(typeof ListSyncConfigurationsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof RepositoryLinkInfo$ === "object");
assert(typeof RepositorySyncAttempt$ === "object");
assert(typeof RepositorySyncDefinition$ === "object");
assert(typeof RepositorySyncEvent$ === "object");
assert(typeof ResourceSyncAttempt$ === "object");
assert(typeof ResourceSyncEvent$ === "object");
assert(typeof Revision$ === "object");
assert(typeof SyncBlocker$ === "object");
assert(typeof SyncBlockerContext$ === "object");
assert(typeof SyncBlockerSummary$ === "object");
assert(typeof SyncConfiguration$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateHostInput$ === "object");
assert(typeof UpdateHostOutput$ === "object");
assert(typeof UpdateRepositoryLinkInput$ === "object");
assert(typeof UpdateRepositoryLinkOutput$ === "object");
assert(typeof UpdateSyncBlockerInput$ === "object");
assert(typeof UpdateSyncBlockerOutput$ === "object");
assert(typeof UpdateSyncConfigurationInput$ === "object");
assert(typeof UpdateSyncConfigurationOutput$ === "object");
assert(typeof VpcConfiguration$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConditionalCheckFailedException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ConditionalCheckFailedException$ === "object");
assert(ConflictException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidInputException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof InvalidInputException$ === "object");
assert(LimitExceededException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(RetryLatestCommitFailedException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof RetryLatestCommitFailedException$ === "object");
assert(SyncBlockerDoesNotExistException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof SyncBlockerDoesNotExistException$ === "object");
assert(SyncConfigurationStillExistsException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof SyncConfigurationStillExistsException$ === "object");
assert(ThrottlingException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedOperationException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(UnsupportedProviderTypeException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof UnsupportedProviderTypeException$ === "object");
assert(UpdateOutOfSyncException.prototype instanceof CodeStarConnectionsServiceException);
assert(typeof UpdateOutOfSyncException$ === "object");
assert(CodeStarConnectionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnections === "function");
assert(typeof paginateListHosts === "function");
assert(typeof paginateListRepositoryLinks === "function");
assert(typeof paginateListSyncConfigurations === "function");
console.log(`CodeStarConnections index test passed.`);
