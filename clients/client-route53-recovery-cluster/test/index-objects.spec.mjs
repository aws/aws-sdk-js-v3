import {
  GetRoutingControlStateCommand,
  ListRoutingControlsCommand,
  Route53RecoveryCluster,
  Route53RecoveryClusterClient,
  Route53RecoveryClusterServiceException,
  RoutingControlState,
  UpdateRoutingControlStateCommand,
  UpdateRoutingControlStatesCommand,
  paginateListRoutingControls,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryClusterClient === "function")
assert(typeof Route53RecoveryCluster === "function")
// commands
assert(typeof GetRoutingControlStateCommand === "function")
assert(typeof ListRoutingControlsCommand === "function")
assert(typeof UpdateRoutingControlStateCommand === "function")
assert(typeof UpdateRoutingControlStatesCommand === "function")
// enums
assert(typeof RoutingControlState === "object");
// errors
assert(Route53RecoveryClusterServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListRoutingControls === "function")
console.log(`Route53RecoveryCluster index test passed.`);
