import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  EndpointTemporarilyUnavailableException,
  EndpointTemporarilyUnavailableException$,
  GetRoutingControlState$,
  GetRoutingControlStateCommand,
  GetRoutingControlStateRequest$,
  GetRoutingControlStateResponse$,
  InternalServerException,
  InternalServerException$,
  ListRoutingControls$,
  ListRoutingControlsCommand,
  ListRoutingControlsRequest$,
  ListRoutingControlsResponse$,
  paginateListRoutingControls,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Route53RecoveryCluster,
  Route53RecoveryClusterClient,
  Route53RecoveryClusterServiceException,
  RoutingControl$,
  RoutingControlState,
  ServiceLimitExceededException,
  ServiceLimitExceededException$,
  ThrottlingException,
  ThrottlingException$,
  UpdateRoutingControlState$,
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStateEntry$,
  UpdateRoutingControlStateRequest$,
  UpdateRoutingControlStateResponse$,
  UpdateRoutingControlStates$,
  UpdateRoutingControlStatesCommand,
  UpdateRoutingControlStatesRequest$,
  UpdateRoutingControlStatesResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryClusterClient === "function");
assert(typeof Route53RecoveryCluster === "function");
// commands
assert(typeof GetRoutingControlStateCommand === "function");
assert(typeof GetRoutingControlState$ === "object");
assert(typeof ListRoutingControlsCommand === "function");
assert(typeof ListRoutingControls$ === "object");
assert(typeof UpdateRoutingControlStateCommand === "function");
assert(typeof UpdateRoutingControlState$ === "object");
assert(typeof UpdateRoutingControlStatesCommand === "function");
assert(typeof UpdateRoutingControlStates$ === "object");
// structural schemas
assert(typeof GetRoutingControlStateRequest$ === "object");
assert(typeof GetRoutingControlStateResponse$ === "object");
assert(typeof ListRoutingControlsRequest$ === "object");
assert(typeof ListRoutingControlsResponse$ === "object");
assert(typeof RoutingControl$ === "object");
assert(typeof UpdateRoutingControlStateEntry$ === "object");
assert(typeof UpdateRoutingControlStateRequest$ === "object");
assert(typeof UpdateRoutingControlStateResponse$ === "object");
assert(typeof UpdateRoutingControlStatesRequest$ === "object");
assert(typeof UpdateRoutingControlStatesResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof RoutingControlState === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof ConflictException$ === "object");
assert(EndpointTemporarilyUnavailableException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof EndpointTemporarilyUnavailableException$ === "object");
assert(InternalServerException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceLimitExceededException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof ServiceLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Route53RecoveryClusterServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53RecoveryClusterServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRoutingControls === "function");
console.log(`Route53RecoveryCluster index test passed.`);
