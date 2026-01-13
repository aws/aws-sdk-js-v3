import {
  Checksum$,
  ChecksumType,
  Definition$,
  DeploymentModel$,
  DeploymentResult$,
  DeploymentStatus,
  DeploymentType,
  EdgeDeployment$,
  EdgeMetric$,
  FailureHandlingPolicy,
  GetDeployments$,
  GetDeploymentsCommand,
  GetDeploymentsRequest$,
  GetDeploymentsResult$,
  GetDeviceRegistration$,
  GetDeviceRegistrationCommand,
  GetDeviceRegistrationRequest$,
  GetDeviceRegistrationResult$,
  InternalServiceException,
  InternalServiceException$,
  Model$,
  ModelState,
  SagemakerEdge,
  SagemakerEdgeClient,
  SagemakerEdgeServiceException,
  SendHeartbeat$,
  SendHeartbeatCommand,
  SendHeartbeatRequest$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SagemakerEdgeClient === "function");
assert(typeof SagemakerEdge === "function");
// commands
assert(typeof GetDeploymentsCommand === "function");
assert(typeof GetDeployments$ === "object");
assert(typeof GetDeviceRegistrationCommand === "function");
assert(typeof GetDeviceRegistration$ === "object");
assert(typeof SendHeartbeatCommand === "function");
assert(typeof SendHeartbeat$ === "object");
// structural schemas
assert(typeof Checksum$ === "object");
assert(typeof Definition$ === "object");
assert(typeof DeploymentModel$ === "object");
assert(typeof DeploymentResult$ === "object");
assert(typeof EdgeDeployment$ === "object");
assert(typeof EdgeMetric$ === "object");
assert(typeof GetDeploymentsRequest$ === "object");
assert(typeof GetDeploymentsResult$ === "object");
assert(typeof GetDeviceRegistrationRequest$ === "object");
assert(typeof GetDeviceRegistrationResult$ === "object");
assert(typeof Model$ === "object");
assert(typeof SendHeartbeatRequest$ === "object");
// enums
assert(typeof ChecksumType === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DeploymentType === "object");
assert(typeof FailureHandlingPolicy === "object");
assert(typeof ModelState === "object");
// errors
assert(InternalServiceException.prototype instanceof SagemakerEdgeServiceException);
assert(typeof InternalServiceException$ === "object");
assert(SagemakerEdgeServiceException.prototype instanceof Error);
console.log(`SagemakerEdge index test passed.`);
