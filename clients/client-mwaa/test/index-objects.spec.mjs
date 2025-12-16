import {
  AccessDeniedException,
  AccessDeniedException$,
  CreateCliToken$,
  CreateCliTokenCommand,
  CreateCliTokenRequest$,
  CreateCliTokenResponse$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentInput$,
  CreateEnvironmentOutput$,
  CreateWebLoginToken$,
  CreateWebLoginTokenCommand,
  CreateWebLoginTokenRequest$,
  CreateWebLoginTokenResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentInput$,
  DeleteEnvironmentOutput$,
  Dimension$,
  EndpointManagement,
  Environment$,
  EnvironmentStatus,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentInput$,
  GetEnvironmentOutput$,
  InternalServerException,
  InternalServerException$,
  InvokeRestApi$,
  InvokeRestApiCommand,
  InvokeRestApiRequest$,
  InvokeRestApiResponse$,
  LastUpdate$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsInput$,
  ListEnvironmentsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LoggingConfiguration$,
  LoggingConfigurationInput$,
  LoggingLevel,
  MWAA,
  MWAAClient,
  MWAAServiceException,
  MetricDatum$,
  ModuleLoggingConfiguration$,
  ModuleLoggingConfigurationInput$,
  NetworkConfiguration$,
  PublishMetrics$,
  PublishMetricsCommand,
  PublishMetricsInput$,
  PublishMetricsOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestApiClientException,
  RestApiClientException$,
  RestApiMethod,
  RestApiServerException,
  RestApiServerException$,
  StatisticSet$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  Unit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentInput$,
  UpdateEnvironmentOutput$,
  UpdateError$,
  UpdateNetworkConfigurationInput$,
  UpdateStatus,
  ValidationException,
  ValidationException$,
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
assert(typeof CreateCliToken$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateWebLoginTokenCommand === "function");
assert(typeof CreateWebLoginToken$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof InvokeRestApiCommand === "function");
assert(typeof InvokeRestApi$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PublishMetricsCommand === "function");
assert(typeof PublishMetrics$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
// structural schemas
assert(typeof CreateCliTokenRequest$ === "object");
assert(typeof CreateCliTokenResponse$ === "object");
assert(typeof CreateEnvironmentInput$ === "object");
assert(typeof CreateEnvironmentOutput$ === "object");
assert(typeof CreateWebLoginTokenRequest$ === "object");
assert(typeof CreateWebLoginTokenResponse$ === "object");
assert(typeof DeleteEnvironmentInput$ === "object");
assert(typeof DeleteEnvironmentOutput$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof Environment$ === "object");
assert(typeof GetEnvironmentInput$ === "object");
assert(typeof GetEnvironmentOutput$ === "object");
assert(typeof InvokeRestApiRequest$ === "object");
assert(typeof InvokeRestApiResponse$ === "object");
assert(typeof LastUpdate$ === "object");
assert(typeof ListEnvironmentsInput$ === "object");
assert(typeof ListEnvironmentsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof LoggingConfigurationInput$ === "object");
assert(typeof MetricDatum$ === "object");
assert(typeof ModuleLoggingConfiguration$ === "object");
assert(typeof ModuleLoggingConfigurationInput$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof PublishMetricsInput$ === "object");
assert(typeof PublishMetricsOutput$ === "object");
assert(typeof StatisticSet$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateEnvironmentInput$ === "object");
assert(typeof UpdateEnvironmentOutput$ === "object");
assert(typeof UpdateError$ === "object");
assert(typeof UpdateNetworkConfigurationInput$ === "object");
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
assert(AccessDeniedException.prototype instanceof MWAAServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof MWAAServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MWAAServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(RestApiClientException.prototype instanceof MWAAServiceException);
assert(typeof RestApiClientException$ === "object");
assert(RestApiServerException.prototype instanceof MWAAServiceException);
assert(typeof RestApiServerException$ === "object");
assert(ValidationException.prototype instanceof MWAAServiceException);
assert(typeof ValidationException$ === "object");
assert(MWAAServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEnvironments === "function");
console.log(`MWAA index test passed.`);
