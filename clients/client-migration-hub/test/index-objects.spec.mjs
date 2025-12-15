import {
  AccessDeniedException,
  AccessDeniedException$,
  ApplicationState$,
  ApplicationStatus,
  AssociateCreatedArtifact$,
  AssociateCreatedArtifactCommand,
  AssociateCreatedArtifactRequest$,
  AssociateCreatedArtifactResult$,
  AssociateDiscoveredResource$,
  AssociateDiscoveredResourceCommand,
  AssociateDiscoveredResourceRequest$,
  AssociateDiscoveredResourceResult$,
  AssociateSourceResource$,
  AssociateSourceResourceCommand,
  AssociateSourceResourceRequest$,
  AssociateSourceResourceResult$,
  CreateProgressUpdateStream$,
  CreateProgressUpdateStreamCommand,
  CreateProgressUpdateStreamRequest$,
  CreateProgressUpdateStreamResult$,
  CreatedArtifact$,
  DeleteProgressUpdateStream$,
  DeleteProgressUpdateStreamCommand,
  DeleteProgressUpdateStreamRequest$,
  DeleteProgressUpdateStreamResult$,
  DescribeApplicationState$,
  DescribeApplicationStateCommand,
  DescribeApplicationStateRequest$,
  DescribeApplicationStateResult$,
  DescribeMigrationTask$,
  DescribeMigrationTaskCommand,
  DescribeMigrationTaskRequest$,
  DescribeMigrationTaskResult$,
  DisassociateCreatedArtifact$,
  DisassociateCreatedArtifactCommand,
  DisassociateCreatedArtifactRequest$,
  DisassociateCreatedArtifactResult$,
  DisassociateDiscoveredResource$,
  DisassociateDiscoveredResourceCommand,
  DisassociateDiscoveredResourceRequest$,
  DisassociateDiscoveredResourceResult$,
  DisassociateSourceResource$,
  DisassociateSourceResourceCommand,
  DisassociateSourceResourceRequest$,
  DisassociateSourceResourceResult$,
  DiscoveredResource$,
  DryRunOperation,
  DryRunOperation$,
  HomeRegionNotSetException,
  HomeRegionNotSetException$,
  ImportMigrationTask$,
  ImportMigrationTaskCommand,
  ImportMigrationTaskRequest$,
  ImportMigrationTaskResult$,
  InternalServerError,
  InternalServerError$,
  InvalidInputException,
  InvalidInputException$,
  ListApplicationStates$,
  ListApplicationStatesCommand,
  ListApplicationStatesRequest$,
  ListApplicationStatesResult$,
  ListCreatedArtifacts$,
  ListCreatedArtifactsCommand,
  ListCreatedArtifactsRequest$,
  ListCreatedArtifactsResult$,
  ListDiscoveredResources$,
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesRequest$,
  ListDiscoveredResourcesResult$,
  ListMigrationTaskUpdates$,
  ListMigrationTaskUpdatesCommand,
  ListMigrationTaskUpdatesRequest$,
  ListMigrationTaskUpdatesResult$,
  ListMigrationTasks$,
  ListMigrationTasksCommand,
  ListMigrationTasksRequest$,
  ListMigrationTasksResult$,
  ListProgressUpdateStreams$,
  ListProgressUpdateStreamsCommand,
  ListProgressUpdateStreamsRequest$,
  ListProgressUpdateStreamsResult$,
  ListSourceResources$,
  ListSourceResourcesCommand,
  ListSourceResourcesRequest$,
  ListSourceResourcesResult$,
  MigrationHub,
  MigrationHubClient,
  MigrationHubServiceException,
  MigrationTask$,
  MigrationTaskSummary$,
  MigrationTaskUpdate$,
  NotifyApplicationState$,
  NotifyApplicationStateCommand,
  NotifyApplicationStateRequest$,
  NotifyApplicationStateResult$,
  NotifyMigrationTaskState$,
  NotifyMigrationTaskStateCommand,
  NotifyMigrationTaskStateRequest$,
  NotifyMigrationTaskStateResult$,
  PolicyErrorException,
  PolicyErrorException$,
  ProgressUpdateStreamSummary$,
  PutResourceAttributes$,
  PutResourceAttributesCommand,
  PutResourceAttributesRequest$,
  PutResourceAttributesResult$,
  ResourceAttribute$,
  ResourceAttributeType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SourceResource$,
  Status,
  Task$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedOperation,
  UnauthorizedOperation$,
  UpdateType,
  paginateListApplicationStates,
  paginateListCreatedArtifacts,
  paginateListDiscoveredResources,
  paginateListMigrationTaskUpdates,
  paginateListMigrationTasks,
  paginateListProgressUpdateStreams,
  paginateListSourceResources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MigrationHubClient === "function");
assert(typeof MigrationHub === "function");
// commands
assert(typeof AssociateCreatedArtifactCommand === "function");
assert(typeof AssociateCreatedArtifact$ === "object");
assert(typeof AssociateDiscoveredResourceCommand === "function");
assert(typeof AssociateDiscoveredResource$ === "object");
assert(typeof AssociateSourceResourceCommand === "function");
assert(typeof AssociateSourceResource$ === "object");
assert(typeof CreateProgressUpdateStreamCommand === "function");
assert(typeof CreateProgressUpdateStream$ === "object");
assert(typeof DeleteProgressUpdateStreamCommand === "function");
assert(typeof DeleteProgressUpdateStream$ === "object");
assert(typeof DescribeApplicationStateCommand === "function");
assert(typeof DescribeApplicationState$ === "object");
assert(typeof DescribeMigrationTaskCommand === "function");
assert(typeof DescribeMigrationTask$ === "object");
assert(typeof DisassociateCreatedArtifactCommand === "function");
assert(typeof DisassociateCreatedArtifact$ === "object");
assert(typeof DisassociateDiscoveredResourceCommand === "function");
assert(typeof DisassociateDiscoveredResource$ === "object");
assert(typeof DisassociateSourceResourceCommand === "function");
assert(typeof DisassociateSourceResource$ === "object");
assert(typeof ImportMigrationTaskCommand === "function");
assert(typeof ImportMigrationTask$ === "object");
assert(typeof ListApplicationStatesCommand === "function");
assert(typeof ListApplicationStates$ === "object");
assert(typeof ListCreatedArtifactsCommand === "function");
assert(typeof ListCreatedArtifacts$ === "object");
assert(typeof ListDiscoveredResourcesCommand === "function");
assert(typeof ListDiscoveredResources$ === "object");
assert(typeof ListMigrationTasksCommand === "function");
assert(typeof ListMigrationTasks$ === "object");
assert(typeof ListMigrationTaskUpdatesCommand === "function");
assert(typeof ListMigrationTaskUpdates$ === "object");
assert(typeof ListProgressUpdateStreamsCommand === "function");
assert(typeof ListProgressUpdateStreams$ === "object");
assert(typeof ListSourceResourcesCommand === "function");
assert(typeof ListSourceResources$ === "object");
assert(typeof NotifyApplicationStateCommand === "function");
assert(typeof NotifyApplicationState$ === "object");
assert(typeof NotifyMigrationTaskStateCommand === "function");
assert(typeof NotifyMigrationTaskState$ === "object");
assert(typeof PutResourceAttributesCommand === "function");
assert(typeof PutResourceAttributes$ === "object");
// structural schemas
assert(typeof ApplicationState$ === "object");
assert(typeof AssociateCreatedArtifactRequest$ === "object");
assert(typeof AssociateCreatedArtifactResult$ === "object");
assert(typeof AssociateDiscoveredResourceRequest$ === "object");
assert(typeof AssociateDiscoveredResourceResult$ === "object");
assert(typeof AssociateSourceResourceRequest$ === "object");
assert(typeof AssociateSourceResourceResult$ === "object");
assert(typeof CreatedArtifact$ === "object");
assert(typeof CreateProgressUpdateStreamRequest$ === "object");
assert(typeof CreateProgressUpdateStreamResult$ === "object");
assert(typeof DeleteProgressUpdateStreamRequest$ === "object");
assert(typeof DeleteProgressUpdateStreamResult$ === "object");
assert(typeof DescribeApplicationStateRequest$ === "object");
assert(typeof DescribeApplicationStateResult$ === "object");
assert(typeof DescribeMigrationTaskRequest$ === "object");
assert(typeof DescribeMigrationTaskResult$ === "object");
assert(typeof DisassociateCreatedArtifactRequest$ === "object");
assert(typeof DisassociateCreatedArtifactResult$ === "object");
assert(typeof DisassociateDiscoveredResourceRequest$ === "object");
assert(typeof DisassociateDiscoveredResourceResult$ === "object");
assert(typeof DisassociateSourceResourceRequest$ === "object");
assert(typeof DisassociateSourceResourceResult$ === "object");
assert(typeof DiscoveredResource$ === "object");
assert(typeof ImportMigrationTaskRequest$ === "object");
assert(typeof ImportMigrationTaskResult$ === "object");
assert(typeof ListApplicationStatesRequest$ === "object");
assert(typeof ListApplicationStatesResult$ === "object");
assert(typeof ListCreatedArtifactsRequest$ === "object");
assert(typeof ListCreatedArtifactsResult$ === "object");
assert(typeof ListDiscoveredResourcesRequest$ === "object");
assert(typeof ListDiscoveredResourcesResult$ === "object");
assert(typeof ListMigrationTasksRequest$ === "object");
assert(typeof ListMigrationTasksResult$ === "object");
assert(typeof ListMigrationTaskUpdatesRequest$ === "object");
assert(typeof ListMigrationTaskUpdatesResult$ === "object");
assert(typeof ListProgressUpdateStreamsRequest$ === "object");
assert(typeof ListProgressUpdateStreamsResult$ === "object");
assert(typeof ListSourceResourcesRequest$ === "object");
assert(typeof ListSourceResourcesResult$ === "object");
assert(typeof MigrationTask$ === "object");
assert(typeof MigrationTaskSummary$ === "object");
assert(typeof MigrationTaskUpdate$ === "object");
assert(typeof NotifyApplicationStateRequest$ === "object");
assert(typeof NotifyApplicationStateResult$ === "object");
assert(typeof NotifyMigrationTaskStateRequest$ === "object");
assert(typeof NotifyMigrationTaskStateResult$ === "object");
assert(typeof ProgressUpdateStreamSummary$ === "object");
assert(typeof PutResourceAttributesRequest$ === "object");
assert(typeof PutResourceAttributesResult$ === "object");
assert(typeof ResourceAttribute$ === "object");
assert(typeof SourceResource$ === "object");
assert(typeof Task$ === "object");
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof ResourceAttributeType === "object");
assert(typeof Status === "object");
assert(typeof UpdateType === "object");
// errors
assert(AccessDeniedException.prototype instanceof MigrationHubServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(DryRunOperation.prototype instanceof MigrationHubServiceException);
assert(typeof DryRunOperation$ === "object");
assert(HomeRegionNotSetException.prototype instanceof MigrationHubServiceException);
assert(typeof HomeRegionNotSetException$ === "object");
assert(InternalServerError.prototype instanceof MigrationHubServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidInputException.prototype instanceof MigrationHubServiceException);
assert(typeof InvalidInputException$ === "object");
assert(PolicyErrorException.prototype instanceof MigrationHubServiceException);
assert(typeof PolicyErrorException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MigrationHubServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof MigrationHubServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof MigrationHubServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedOperation.prototype instanceof MigrationHubServiceException);
assert(typeof UnauthorizedOperation$ === "object");
assert(MigrationHubServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationStates === "function");
assert(typeof paginateListCreatedArtifacts === "function");
assert(typeof paginateListDiscoveredResources === "function");
assert(typeof paginateListMigrationTaskUpdates === "function");
assert(typeof paginateListMigrationTasks === "function");
assert(typeof paginateListProgressUpdateStreams === "function");
assert(typeof paginateListSourceResources === "function");
console.log(`MigrationHub index test passed.`);
