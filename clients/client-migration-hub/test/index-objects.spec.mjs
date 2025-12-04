import {
  ApplicationStatus,
  AssociateCreatedArtifactCommand,
  AssociateDiscoveredResourceCommand,
  AssociateSourceResourceCommand,
  CreateProgressUpdateStreamCommand,
  DeleteProgressUpdateStreamCommand,
  DescribeApplicationStateCommand,
  DescribeMigrationTaskCommand,
  DisassociateCreatedArtifactCommand,
  DisassociateDiscoveredResourceCommand,
  DisassociateSourceResourceCommand,
  ImportMigrationTaskCommand,
  ListApplicationStatesCommand,
  ListCreatedArtifactsCommand,
  ListDiscoveredResourcesCommand,
  ListMigrationTaskUpdatesCommand,
  ListMigrationTasksCommand,
  ListProgressUpdateStreamsCommand,
  ListSourceResourcesCommand,
  MigrationHub,
  MigrationHubClient,
  MigrationHubServiceException,
  NotifyApplicationStateCommand,
  NotifyMigrationTaskStateCommand,
  PutResourceAttributesCommand,
  ResourceAttributeType,
  Status,
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
assert(typeof MigrationHubClient === "function")
assert(typeof MigrationHub === "function")
// commands
assert(typeof AssociateCreatedArtifactCommand === "function")
assert(typeof AssociateDiscoveredResourceCommand === "function")
assert(typeof AssociateSourceResourceCommand === "function")
assert(typeof CreateProgressUpdateStreamCommand === "function")
assert(typeof DeleteProgressUpdateStreamCommand === "function")
assert(typeof DescribeApplicationStateCommand === "function")
assert(typeof DescribeMigrationTaskCommand === "function")
assert(typeof DisassociateCreatedArtifactCommand === "function")
assert(typeof DisassociateDiscoveredResourceCommand === "function")
assert(typeof DisassociateSourceResourceCommand === "function")
assert(typeof ImportMigrationTaskCommand === "function")
assert(typeof ListApplicationStatesCommand === "function")
assert(typeof ListCreatedArtifactsCommand === "function")
assert(typeof ListDiscoveredResourcesCommand === "function")
assert(typeof ListMigrationTasksCommand === "function")
assert(typeof ListMigrationTaskUpdatesCommand === "function")
assert(typeof ListProgressUpdateStreamsCommand === "function")
assert(typeof ListSourceResourcesCommand === "function")
assert(typeof NotifyApplicationStateCommand === "function")
assert(typeof NotifyMigrationTaskStateCommand === "function")
assert(typeof PutResourceAttributesCommand === "function")
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof ResourceAttributeType === "object");
assert(typeof Status === "object");
assert(typeof UpdateType === "object");
// errors
assert(MigrationHubServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApplicationStates === "function")
assert(typeof paginateListCreatedArtifacts === "function")
assert(typeof paginateListDiscoveredResources === "function")
assert(typeof paginateListMigrationTaskUpdates === "function")
assert(typeof paginateListMigrationTasks === "function")
assert(typeof paginateListProgressUpdateStreams === "function")
assert(typeof paginateListSourceResources === "function")
console.log(`MigrationHub index test passed.`);
