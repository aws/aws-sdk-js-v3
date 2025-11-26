import {
  AppAuthorizationStatus,
  AppFabric,
  AppFabricClient,
  AppFabricServiceException,
  AuthType,
  BatchGetUserAccessTasksCommand,
  ConnectAppAuthorizationCommand,
  CreateAppAuthorizationCommand,
  CreateAppBundleCommand,
  CreateIngestionCommand,
  CreateIngestionDestinationCommand,
  DeleteAppAuthorizationCommand,
  DeleteAppBundleCommand,
  DeleteIngestionCommand,
  DeleteIngestionDestinationCommand,
  Format,
  GetAppAuthorizationCommand,
  GetAppBundleCommand,
  GetIngestionCommand,
  GetIngestionDestinationCommand,
  IngestionDestinationStatus,
  IngestionState,
  IngestionType,
  ListAppAuthorizationsCommand,
  ListAppBundlesCommand,
  ListIngestionDestinationsCommand,
  ListIngestionsCommand,
  ListTagsForResourceCommand,
  Persona,
  ResultStatus,
  Schema,
  StartIngestionCommand,
  StartUserAccessTasksCommand,
  StopIngestionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAppAuthorizationCommand,
  UpdateIngestionDestinationCommand,
  paginateListAppAuthorizations,
  paginateListAppBundles,
  paginateListIngestionDestinations,
  paginateListIngestions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppFabricClient === "function")
assert(typeof AppFabric === "function")
// commands
assert(typeof BatchGetUserAccessTasksCommand === "function")
assert(typeof ConnectAppAuthorizationCommand === "function")
assert(typeof CreateAppAuthorizationCommand === "function")
assert(typeof CreateAppBundleCommand === "function")
assert(typeof CreateIngestionCommand === "function")
assert(typeof CreateIngestionDestinationCommand === "function")
assert(typeof DeleteAppAuthorizationCommand === "function")
assert(typeof DeleteAppBundleCommand === "function")
assert(typeof DeleteIngestionCommand === "function")
assert(typeof DeleteIngestionDestinationCommand === "function")
assert(typeof GetAppAuthorizationCommand === "function")
assert(typeof GetAppBundleCommand === "function")
assert(typeof GetIngestionCommand === "function")
assert(typeof GetIngestionDestinationCommand === "function")
assert(typeof ListAppAuthorizationsCommand === "function")
assert(typeof ListAppBundlesCommand === "function")
assert(typeof ListIngestionDestinationsCommand === "function")
assert(typeof ListIngestionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartIngestionCommand === "function")
assert(typeof StartUserAccessTasksCommand === "function")
assert(typeof StopIngestionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAppAuthorizationCommand === "function")
assert(typeof UpdateIngestionDestinationCommand === "function")
// enums
assert(typeof AppAuthorizationStatus === "object");
assert(typeof AuthType === "object");
assert(typeof Format === "object");
assert(typeof IngestionDestinationStatus === "object");
assert(typeof IngestionState === "object");
assert(typeof IngestionType === "object");
assert(typeof Persona === "object");
assert(typeof ResultStatus === "object");
assert(typeof Schema === "object");
// errors
assert(AppFabricServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAppAuthorizations === "function")
assert(typeof paginateListAppBundles === "function")
assert(typeof paginateListIngestionDestinations === "function")
assert(typeof paginateListIngestions === "function")
console.log(`AppFabric index test passed.`);
