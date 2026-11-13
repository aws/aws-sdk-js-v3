import {
  Compatibility$,
  CompatibilityPolicy,
  ComputeResourceType,
  CreateNetworkConnector$,
  CreateNetworkConnectorCommand,
  CreateNetworkConnectorRequest$,
  CreateNetworkConnectorResponse$,
  CreateRuntime$,
  CreateRuntimeAlias$,
  CreateRuntimeAliasCommand,
  CreateRuntimeAliasRequest$,
  CreateRuntimeAliasResponse$,
  CreateRuntimeCommand,
  CreateRuntimeRequest$,
  CreateRuntimeResponse$,
  CreateRuntimeVersion$,
  CreateRuntimeVersionCommand,
  CreateRuntimeVersionRequest$,
  CreateRuntimeVersionResponse$,
  DeleteNetworkConnector$,
  DeleteNetworkConnectorCommand,
  DeleteNetworkConnectorRequest$,
  DeleteNetworkConnectorResponse$,
  DeleteRuntime$,
  DeleteRuntimeAlias$,
  DeleteRuntimeAliasCommand,
  DeleteRuntimeAliasRequest$,
  DeleteRuntimeAliasResponse$,
  DeleteRuntimeCommand,
  DeleteRuntimeRequest$,
  DeleteRuntimeResponse$,
  DeleteRuntimeVersion$,
  DeleteRuntimeVersionCommand,
  DeleteRuntimeVersionRequest$,
  DeleteRuntimeVersionResponse$,
  GetNetworkConnector$,
  GetNetworkConnectorCommand,
  GetNetworkConnectorRequest$,
  GetNetworkConnectorResponse$,
  GetRuntime$,
  GetRuntimeAlias$,
  GetRuntimeAliasCommand,
  GetRuntimeAliasRequest$,
  GetRuntimeAliasResponse$,
  GetRuntimeCommand,
  GetRuntimeRequest$,
  GetRuntimeResponse$,
  GetRuntimeVersion$,
  GetRuntimeVersionCommand,
  GetRuntimeVersionRequest$,
  GetRuntimeVersionResponse$,
  IntegrationModel,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  LambdaCore,
  LambdaCoreClient,
  LambdaCoreServiceException,
  ListNetworkConnectors$,
  ListNetworkConnectorsCommand,
  ListNetworkConnectorsRequest$,
  ListNetworkConnectorsResponse$,
  ListNetworkConnectorVersions$,
  ListNetworkConnectorVersionsCommand,
  ListNetworkConnectorVersionsRequest$,
  ListNetworkConnectorVersionsResponse$,
  ListRuntimeAliases$,
  ListRuntimeAliasesCommand,
  ListRuntimeAliasesRequest$,
  ListRuntimeAliasesResponse$,
  ListRuntimes$,
  ListRuntimesCommand,
  ListRuntimesRequest$,
  ListRuntimesResponse$,
  ListRuntimeVersions$,
  ListRuntimeVersionsCommand,
  ListRuntimeVersionsRequest$,
  ListRuntimeVersionsResponse$,
  NetworkConnectorConfiguration$,
  NetworkConnectorLastUpdateStatus,
  NetworkConnectorLastUpdateStatusReasonCode,
  NetworkConnectorLimitExceededException,
  NetworkConnectorLimitExceededException$,
  NetworkConnectorState,
  NetworkConnectorStateReasonCode,
  NetworkConnectorSummary$,
  NetworkConnectorType,
  NetworkConnectorVersionSummary$,
  NetworkConnectorVpcEgressConfiguration$,
  NetworkProtocol,
  paginateListNetworkConnectors,
  paginateListNetworkConnectorVersions,
  paginateListRuntimeAliases,
  paginateListRuntimes,
  paginateListRuntimeVersions,
  Platform$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RestoreRuntime$,
  RestoreRuntimeCommand,
  RestoreRuntimeRequest$,
  RestoreRuntimeResponse$,
  RuntimeAliasInfo$,
  RuntimeAliasState,
  RuntimeArchitecture,
  RuntimeInfo$,
  RuntimeReleaseLifecycle$,
  RuntimeReleaseState,
  RuntimeState,
  RuntimeVersionInfo$,
  RuntimeVersionState,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottleReason,
  TooManyRequestsException,
  TooManyRequestsException$,
  UpdateNetworkConnector$,
  UpdateNetworkConnectorCommand,
  UpdateNetworkConnectorRequest$,
  UpdateNetworkConnectorResponse$,
  UpdateRuntime$,
  UpdateRuntimeAlias$,
  UpdateRuntimeAliasCommand,
  UpdateRuntimeAliasRequest$,
  UpdateRuntimeAliasResponse$,
  UpdateRuntimeCommand,
  UpdateRuntimeRequest$,
  UpdateRuntimeResponse$,
  UpdateRuntimeVersion$,
  UpdateRuntimeVersionCommand,
  UpdateRuntimeVersionRequest$,
  UpdateRuntimeVersionResponse$,
  waitForRuntimeAliasActive,
  waitForRuntimeVersionActive,
  waitUntilRuntimeAliasActive,
  waitUntilRuntimeVersionActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaCoreClient === "function");
assert(typeof LambdaCore === "function");
// commands
assert(typeof CreateNetworkConnectorCommand === "function");
assert(typeof CreateNetworkConnector$ === "object");
assert(typeof CreateRuntimeCommand === "function");
assert(typeof CreateRuntime$ === "object");
assert(typeof CreateRuntimeAliasCommand === "function");
assert(typeof CreateRuntimeAlias$ === "object");
assert(typeof CreateRuntimeVersionCommand === "function");
assert(typeof CreateRuntimeVersion$ === "object");
assert(typeof DeleteNetworkConnectorCommand === "function");
assert(typeof DeleteNetworkConnector$ === "object");
assert(typeof DeleteRuntimeCommand === "function");
assert(typeof DeleteRuntime$ === "object");
assert(typeof DeleteRuntimeAliasCommand === "function");
assert(typeof DeleteRuntimeAlias$ === "object");
assert(typeof DeleteRuntimeVersionCommand === "function");
assert(typeof DeleteRuntimeVersion$ === "object");
assert(typeof GetNetworkConnectorCommand === "function");
assert(typeof GetNetworkConnector$ === "object");
assert(typeof GetRuntimeCommand === "function");
assert(typeof GetRuntime$ === "object");
assert(typeof GetRuntimeAliasCommand === "function");
assert(typeof GetRuntimeAlias$ === "object");
assert(typeof GetRuntimeVersionCommand === "function");
assert(typeof GetRuntimeVersion$ === "object");
assert(typeof ListNetworkConnectorsCommand === "function");
assert(typeof ListNetworkConnectors$ === "object");
assert(typeof ListNetworkConnectorVersionsCommand === "function");
assert(typeof ListNetworkConnectorVersions$ === "object");
assert(typeof ListRuntimeAliasesCommand === "function");
assert(typeof ListRuntimeAliases$ === "object");
assert(typeof ListRuntimesCommand === "function");
assert(typeof ListRuntimes$ === "object");
assert(typeof ListRuntimeVersionsCommand === "function");
assert(typeof ListRuntimeVersions$ === "object");
assert(typeof RestoreRuntimeCommand === "function");
assert(typeof RestoreRuntime$ === "object");
assert(typeof UpdateNetworkConnectorCommand === "function");
assert(typeof UpdateNetworkConnector$ === "object");
assert(typeof UpdateRuntimeCommand === "function");
assert(typeof UpdateRuntime$ === "object");
assert(typeof UpdateRuntimeAliasCommand === "function");
assert(typeof UpdateRuntimeAlias$ === "object");
assert(typeof UpdateRuntimeVersionCommand === "function");
assert(typeof UpdateRuntimeVersion$ === "object");
// structural schemas
assert(typeof Compatibility$ === "object");
assert(typeof CreateNetworkConnectorRequest$ === "object");
assert(typeof CreateNetworkConnectorResponse$ === "object");
assert(typeof CreateRuntimeAliasRequest$ === "object");
assert(typeof CreateRuntimeAliasResponse$ === "object");
assert(typeof CreateRuntimeRequest$ === "object");
assert(typeof CreateRuntimeResponse$ === "object");
assert(typeof CreateRuntimeVersionRequest$ === "object");
assert(typeof CreateRuntimeVersionResponse$ === "object");
assert(typeof DeleteNetworkConnectorRequest$ === "object");
assert(typeof DeleteNetworkConnectorResponse$ === "object");
assert(typeof DeleteRuntimeAliasRequest$ === "object");
assert(typeof DeleteRuntimeAliasResponse$ === "object");
assert(typeof DeleteRuntimeRequest$ === "object");
assert(typeof DeleteRuntimeResponse$ === "object");
assert(typeof DeleteRuntimeVersionRequest$ === "object");
assert(typeof DeleteRuntimeVersionResponse$ === "object");
assert(typeof GetNetworkConnectorRequest$ === "object");
assert(typeof GetNetworkConnectorResponse$ === "object");
assert(typeof GetRuntimeAliasRequest$ === "object");
assert(typeof GetRuntimeAliasResponse$ === "object");
assert(typeof GetRuntimeRequest$ === "object");
assert(typeof GetRuntimeResponse$ === "object");
assert(typeof GetRuntimeVersionRequest$ === "object");
assert(typeof GetRuntimeVersionResponse$ === "object");
assert(typeof ListNetworkConnectorsRequest$ === "object");
assert(typeof ListNetworkConnectorsResponse$ === "object");
assert(typeof ListNetworkConnectorVersionsRequest$ === "object");
assert(typeof ListNetworkConnectorVersionsResponse$ === "object");
assert(typeof ListRuntimeAliasesRequest$ === "object");
assert(typeof ListRuntimeAliasesResponse$ === "object");
assert(typeof ListRuntimesRequest$ === "object");
assert(typeof ListRuntimesResponse$ === "object");
assert(typeof ListRuntimeVersionsRequest$ === "object");
assert(typeof ListRuntimeVersionsResponse$ === "object");
assert(typeof NetworkConnectorConfiguration$ === "object");
assert(typeof NetworkConnectorSummary$ === "object");
assert(typeof NetworkConnectorVersionSummary$ === "object");
assert(typeof NetworkConnectorVpcEgressConfiguration$ === "object");
assert(typeof Platform$ === "object");
assert(typeof RestoreRuntimeRequest$ === "object");
assert(typeof RestoreRuntimeResponse$ === "object");
assert(typeof RuntimeAliasInfo$ === "object");
assert(typeof RuntimeInfo$ === "object");
assert(typeof RuntimeReleaseLifecycle$ === "object");
assert(typeof RuntimeVersionInfo$ === "object");
assert(typeof UpdateNetworkConnectorRequest$ === "object");
assert(typeof UpdateNetworkConnectorResponse$ === "object");
assert(typeof UpdateRuntimeAliasRequest$ === "object");
assert(typeof UpdateRuntimeAliasResponse$ === "object");
assert(typeof UpdateRuntimeRequest$ === "object");
assert(typeof UpdateRuntimeResponse$ === "object");
assert(typeof UpdateRuntimeVersionRequest$ === "object");
assert(typeof UpdateRuntimeVersionResponse$ === "object");
// enums
assert(typeof CompatibilityPolicy === "object");
assert(typeof ComputeResourceType === "object");
assert(typeof IntegrationModel === "object");
assert(typeof NetworkConnectorLastUpdateStatus === "object");
assert(typeof NetworkConnectorLastUpdateStatusReasonCode === "object");
assert(typeof NetworkConnectorState === "object");
assert(typeof NetworkConnectorStateReasonCode === "object");
assert(typeof NetworkConnectorType === "object");
assert(typeof NetworkProtocol === "object");
assert(typeof RuntimeAliasState === "object");
assert(typeof RuntimeArchitecture === "object");
assert(typeof RuntimeReleaseState === "object");
assert(typeof RuntimeState === "object");
assert(typeof RuntimeVersionState === "object");
assert(typeof ThrottleReason === "object");
// errors
assert(InvalidParameterValueException.prototype instanceof LambdaCoreServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(NetworkConnectorLimitExceededException.prototype instanceof LambdaCoreServiceException);
assert(typeof NetworkConnectorLimitExceededException$ === "object");
assert(ResourceConflictException.prototype instanceof LambdaCoreServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LambdaCoreServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceException.prototype instanceof LambdaCoreServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof LambdaCoreServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof LambdaCoreServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(LambdaCoreServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForRuntimeAliasActive === "function");
assert(typeof waitForRuntimeVersionActive === "function");
assert(typeof waitUntilRuntimeAliasActive === "function");
assert(typeof waitUntilRuntimeVersionActive === "function");
// paginators
assert(typeof paginateListNetworkConnectorVersions === "function");
assert(typeof paginateListNetworkConnectors === "function");
assert(typeof paginateListRuntimeAliases === "function");
assert(typeof paginateListRuntimeVersions === "function");
assert(typeof paginateListRuntimes === "function");
console.log(`LambdaCore index test passed.`);
