import {
  AccessDeniedException,
  ConflictException,
  EndpointTemporarilyUnavailableException,
  GetRoutingControlStateCommand,
  InternalServerException,
  ListRoutingControlsCommand,
  ResourceNotFoundException,
  Route53RecoveryCluster,
  Route53RecoveryClusterClient,
  Route53RecoveryClusterServiceException,
  RoutingControlState,
  ServiceLimitExceededException,
  ThrottlingException,
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStatesCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListRoutingControls,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryClusterClient === "function");
assert(typeof Route53RecoveryCluster === "function");
// commands
assert(typeof GetRoutingControlStateCommand === "function");
assert(typeof ListRoutingControlsCommand === "function");
assert(typeof UpdateRoutingControlStateCommand === "function");
assert(typeof UpdateRoutingControlStatesCommand === "function");
// enums
assert(typeof RoutingControlState === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53RecoveryClusterServiceException);
assert(ConflictException.prototype instanceof Route53RecoveryClusterServiceException);
assert(EndpointTemporarilyUnavailableException.prototype instanceof Route53RecoveryClusterServiceException);
assert(InternalServerException.prototype instanceof Route53RecoveryClusterServiceException);
assert(ResourceNotFoundException.prototype instanceof Route53RecoveryClusterServiceException);
assert(ServiceLimitExceededException.prototype instanceof Route53RecoveryClusterServiceException);
assert(ThrottlingException.prototype instanceof Route53RecoveryClusterServiceException);
assert(ValidationException.prototype instanceof Route53RecoveryClusterServiceException);
assert(Route53RecoveryClusterServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRoutingControls === "function");
console.log(`Route53RecoveryCluster index test passed.`);
