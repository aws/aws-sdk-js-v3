import {
  ComputeResourceType,
  CreateNetworkConnector$,
  CreateNetworkConnectorCommand,
  CreateNetworkConnectorRequest$,
  CreateNetworkConnectorResponse$,
  DeleteNetworkConnector$,
  DeleteNetworkConnectorCommand,
  DeleteNetworkConnectorRequest$,
  DeleteNetworkConnectorResponse$,
  GetNetworkConnector$,
  GetNetworkConnectorCommand,
  GetNetworkConnectorRequest$,
  GetNetworkConnectorResponse$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  LambdaCore,
  LambdaCoreClient,
  LambdaCoreServiceException,
  ListNetworkConnectors$,
  ListNetworkConnectorsCommand,
  ListNetworkConnectorsRequest$,
  ListNetworkConnectorsResponse$,
  NetworkConnectorConfiguration$,
  NetworkConnectorLastUpdateStatus,
  NetworkConnectorLastUpdateStatusReasonCode,
  NetworkConnectorLimitExceededException,
  NetworkConnectorLimitExceededException$,
  NetworkConnectorState,
  NetworkConnectorStateReasonCode,
  NetworkConnectorSummary$,
  NetworkConnectorType,
  NetworkConnectorVpcEgressConfiguration$,
  NetworkProtocol,
  paginateListNetworkConnectors,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceException,
  ServiceException$,
  ThrottleReason,
  TooManyRequestsException,
  TooManyRequestsException$,
  UpdateNetworkConnector$,
  UpdateNetworkConnectorCommand,
  UpdateNetworkConnectorRequest$,
  UpdateNetworkConnectorResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LambdaCoreClient === "function");
assert(typeof LambdaCore === "function");
// commands
assert(typeof CreateNetworkConnectorCommand === "function");
assert(typeof CreateNetworkConnector$ === "object");
assert(typeof DeleteNetworkConnectorCommand === "function");
assert(typeof DeleteNetworkConnector$ === "object");
assert(typeof GetNetworkConnectorCommand === "function");
assert(typeof GetNetworkConnector$ === "object");
assert(typeof ListNetworkConnectorsCommand === "function");
assert(typeof ListNetworkConnectors$ === "object");
assert(typeof UpdateNetworkConnectorCommand === "function");
assert(typeof UpdateNetworkConnector$ === "object");
// structural schemas
assert(typeof CreateNetworkConnectorRequest$ === "object");
assert(typeof CreateNetworkConnectorResponse$ === "object");
assert(typeof DeleteNetworkConnectorRequest$ === "object");
assert(typeof DeleteNetworkConnectorResponse$ === "object");
assert(typeof GetNetworkConnectorRequest$ === "object");
assert(typeof GetNetworkConnectorResponse$ === "object");
assert(typeof ListNetworkConnectorsRequest$ === "object");
assert(typeof ListNetworkConnectorsResponse$ === "object");
assert(typeof NetworkConnectorConfiguration$ === "object");
assert(typeof NetworkConnectorSummary$ === "object");
assert(typeof NetworkConnectorVpcEgressConfiguration$ === "object");
assert(typeof UpdateNetworkConnectorRequest$ === "object");
assert(typeof UpdateNetworkConnectorResponse$ === "object");
// enums
assert(typeof ComputeResourceType === "object");
assert(typeof NetworkConnectorLastUpdateStatus === "object");
assert(typeof NetworkConnectorLastUpdateStatusReasonCode === "object");
assert(typeof NetworkConnectorState === "object");
assert(typeof NetworkConnectorStateReasonCode === "object");
assert(typeof NetworkConnectorType === "object");
assert(typeof NetworkProtocol === "object");
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
assert(TooManyRequestsException.prototype instanceof LambdaCoreServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(LambdaCoreServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListNetworkConnectors === "function");
console.log(`LambdaCore index test passed.`);
