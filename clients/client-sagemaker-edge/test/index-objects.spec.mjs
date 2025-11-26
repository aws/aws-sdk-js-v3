import {
  ChecksumType,
  DeploymentStatus,
  DeploymentType,
  FailureHandlingPolicy,
  GetDeploymentsCommand,
  GetDeviceRegistrationCommand,
  ModelState,
  SagemakerEdge,
  SagemakerEdgeClient,
  SagemakerEdgeServiceException,
  SendHeartbeatCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SagemakerEdgeClient === "function")
assert(typeof SagemakerEdge === "function")
// commands
assert(typeof GetDeploymentsCommand === "function")
assert(typeof GetDeviceRegistrationCommand === "function")
assert(typeof SendHeartbeatCommand === "function")
// enums
assert(typeof ChecksumType === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DeploymentType === "object");
assert(typeof FailureHandlingPolicy === "object");
assert(typeof ModelState === "object");
// errors
assert(SagemakerEdgeServiceException.prototype instanceof Error)
console.log(`SagemakerEdge index test passed.`);
