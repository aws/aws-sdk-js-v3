import {
  CreateCliTokenCommand,
  CreateEnvironmentCommand,
  CreateWebLoginTokenCommand,
  DeleteEnvironmentCommand,
  EndpointManagement,
  EnvironmentStatus,
  GetEnvironmentCommand,
  InvokeRestApiCommand,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  LoggingLevel,
  MWAA,
  MWAAClient,
  MWAAServiceException,
  PublishMetricsCommand,
  RestApiMethod,
  TagResourceCommand,
  Unit,
  UntagResourceCommand,
  UpdateEnvironmentCommand,
  UpdateStatus,
  WebserverAccessMode,
  WorkerReplacementStrategy,
  paginateListEnvironments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MWAAClient === "function");
assert(typeof MWAA === "function");
// commands
assert(typeof CreateCliTokenCommand === "function");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateWebLoginTokenCommand === "function");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof InvokeRestApiCommand === "function");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PublishMetricsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateEnvironmentCommand === "function");
// enums
assert(typeof EndpointManagement === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof LoggingLevel === "object");
assert(typeof RestApiMethod === "object");
assert(typeof Unit === "object");
assert(typeof UpdateStatus === "object");
assert(typeof WebserverAccessMode === "object");
assert(typeof WorkerReplacementStrategy === "object");
// errors
assert(MWAAServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEnvironments === "function");
console.log(`MWAA index test passed.`);
