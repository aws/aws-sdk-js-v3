import {
  AccessDeniedException,
  AccessDeniedException$,
  ClockStatus,
  ClockTargetStatus,
  CloudWatchLogsLogGroup$,
  ConflictException,
  ConflictException$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotInput$,
  CreateSnapshotOutput$,
  DeleteApp$,
  DeleteAppCommand,
  DeleteAppInput$,
  DeleteAppOutput$,
  DeleteSimulation$,
  DeleteSimulationCommand,
  DeleteSimulationInput$,
  DeleteSimulationOutput$,
  DescribeApp$,
  DescribeAppCommand,
  DescribeAppInput$,
  DescribeAppOutput$,
  DescribeSimulation$,
  DescribeSimulationCommand,
  DescribeSimulationInput$,
  DescribeSimulationOutput$,
  Domain$,
  InternalServerException,
  InternalServerException$,
  LaunchOverrides$,
  LifecycleManagementStrategy,
  ListApps$,
  ListAppsCommand,
  ListAppsInput$,
  ListAppsOutput$,
  ListSimulations$,
  ListSimulationsCommand,
  ListSimulationsInput$,
  ListSimulationsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LiveSimulationState$,
  LogDestination$,
  LoggingConfiguration$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Destination$,
  S3Location$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SimSpaceWeaver,
  SimSpaceWeaverClient,
  SimSpaceWeaverServiceException,
  SimulationAppEndpointInfo$,
  SimulationAppMetadata$,
  SimulationAppPortMapping$,
  SimulationAppStatus,
  SimulationAppTargetStatus,
  SimulationClock$,
  SimulationMetadata$,
  SimulationStatus,
  SimulationTargetStatus,
  StartApp$,
  StartAppCommand,
  StartAppInput$,
  StartAppOutput$,
  StartClock$,
  StartClockCommand,
  StartClockInput$,
  StartClockOutput$,
  StartSimulation$,
  StartSimulationCommand,
  StartSimulationInput$,
  StartSimulationOutput$,
  StopApp$,
  StopAppCommand,
  StopAppInput$,
  StopAppOutput$,
  StopClock$,
  StopClockCommand,
  StopClockInput$,
  StopClockOutput$,
  StopSimulation$,
  StopSimulationCommand,
  StopSimulationInput$,
  StopSimulationOutput$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  ValidationException,
  ValidationException$,
  paginateListApps,
  paginateListSimulations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SimSpaceWeaverClient === "function");
assert(typeof SimSpaceWeaver === "function");
// commands
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof DeleteAppCommand === "function");
assert(typeof DeleteApp$ === "object");
assert(typeof DeleteSimulationCommand === "function");
assert(typeof DeleteSimulation$ === "object");
assert(typeof DescribeAppCommand === "function");
assert(typeof DescribeApp$ === "object");
assert(typeof DescribeSimulationCommand === "function");
assert(typeof DescribeSimulation$ === "object");
assert(typeof ListAppsCommand === "function");
assert(typeof ListApps$ === "object");
assert(typeof ListSimulationsCommand === "function");
assert(typeof ListSimulations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartAppCommand === "function");
assert(typeof StartApp$ === "object");
assert(typeof StartClockCommand === "function");
assert(typeof StartClock$ === "object");
assert(typeof StartSimulationCommand === "function");
assert(typeof StartSimulation$ === "object");
assert(typeof StopAppCommand === "function");
assert(typeof StopApp$ === "object");
assert(typeof StopClockCommand === "function");
assert(typeof StopClock$ === "object");
assert(typeof StopSimulationCommand === "function");
assert(typeof StopSimulation$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CloudWatchLogsLogGroup$ === "object");
assert(typeof CreateSnapshotInput$ === "object");
assert(typeof CreateSnapshotOutput$ === "object");
assert(typeof DeleteAppInput$ === "object");
assert(typeof DeleteAppOutput$ === "object");
assert(typeof DeleteSimulationInput$ === "object");
assert(typeof DeleteSimulationOutput$ === "object");
assert(typeof DescribeAppInput$ === "object");
assert(typeof DescribeAppOutput$ === "object");
assert(typeof DescribeSimulationInput$ === "object");
assert(typeof DescribeSimulationOutput$ === "object");
assert(typeof Domain$ === "object");
assert(typeof LaunchOverrides$ === "object");
assert(typeof ListAppsInput$ === "object");
assert(typeof ListAppsOutput$ === "object");
assert(typeof ListSimulationsInput$ === "object");
assert(typeof ListSimulationsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LiveSimulationState$ === "object");
assert(typeof LogDestination$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SimulationAppEndpointInfo$ === "object");
assert(typeof SimulationAppMetadata$ === "object");
assert(typeof SimulationAppPortMapping$ === "object");
assert(typeof SimulationClock$ === "object");
assert(typeof SimulationMetadata$ === "object");
assert(typeof StartAppInput$ === "object");
assert(typeof StartAppOutput$ === "object");
assert(typeof StartClockInput$ === "object");
assert(typeof StartClockOutput$ === "object");
assert(typeof StartSimulationInput$ === "object");
assert(typeof StartSimulationOutput$ === "object");
assert(typeof StopAppInput$ === "object");
assert(typeof StopAppOutput$ === "object");
assert(typeof StopClockInput$ === "object");
assert(typeof StopClockOutput$ === "object");
assert(typeof StopSimulationInput$ === "object");
assert(typeof StopSimulationOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
// enums
assert(typeof ClockStatus === "object");
assert(typeof ClockTargetStatus === "object");
assert(typeof LifecycleManagementStrategy === "object");
assert(typeof SimulationAppStatus === "object");
assert(typeof SimulationAppTargetStatus === "object");
assert(typeof SimulationStatus === "object");
assert(typeof SimulationTargetStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyTagsException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof SimSpaceWeaverServiceException);
assert(typeof ValidationException$ === "object");
assert(SimSpaceWeaverServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApps === "function");
assert(typeof paginateListSimulations === "function");
console.log(`SimSpaceWeaver index test passed.`);
