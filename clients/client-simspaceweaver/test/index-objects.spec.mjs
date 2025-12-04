import {
  ClockStatus,
  ClockTargetStatus,
  CreateSnapshotCommand,
  DeleteAppCommand,
  DeleteSimulationCommand,
  DescribeAppCommand,
  DescribeSimulationCommand,
  LifecycleManagementStrategy,
  ListAppsCommand,
  ListSimulationsCommand,
  ListTagsForResourceCommand,
  SimSpaceWeaver,
  SimSpaceWeaverClient,
  SimSpaceWeaverServiceException,
  SimulationAppStatus,
  SimulationAppTargetStatus,
  SimulationStatus,
  SimulationTargetStatus,
  StartAppCommand,
  StartClockCommand,
  StartSimulationCommand,
  StopAppCommand,
  StopClockCommand,
  StopSimulationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateListApps,
  paginateListSimulations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SimSpaceWeaverClient === "function")
assert(typeof SimSpaceWeaver === "function")
// commands
assert(typeof CreateSnapshotCommand === "function")
assert(typeof DeleteAppCommand === "function")
assert(typeof DeleteSimulationCommand === "function")
assert(typeof DescribeAppCommand === "function")
assert(typeof DescribeSimulationCommand === "function")
assert(typeof ListAppsCommand === "function")
assert(typeof ListSimulationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartAppCommand === "function")
assert(typeof StartClockCommand === "function")
assert(typeof StartSimulationCommand === "function")
assert(typeof StopAppCommand === "function")
assert(typeof StopClockCommand === "function")
assert(typeof StopSimulationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof ClockStatus === "object");
assert(typeof ClockTargetStatus === "object");
assert(typeof LifecycleManagementStrategy === "object");
assert(typeof SimulationAppStatus === "object");
assert(typeof SimulationAppTargetStatus === "object");
assert(typeof SimulationStatus === "object");
assert(typeof SimulationTargetStatus === "object");
// errors
assert(SimSpaceWeaverServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListApps === "function")
assert(typeof paginateListSimulations === "function")
console.log(`SimSpaceWeaver index test passed.`);
