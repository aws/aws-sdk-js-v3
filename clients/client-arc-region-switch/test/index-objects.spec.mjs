import {
  ARCRegionSwitch,
  ARCRegionSwitchClient,
  ARCRegionSwitchServiceException,
  AccessDeniedException,
  AlarmCondition,
  AlarmType,
  Approval,
  ApprovePlanExecutionStepCommand,
  CancelPlanExecutionCommand,
  CreatePlanCommand,
  DeletePlanCommand,
  Ec2AsgCapacityMonitoringApproach,
  EcsCapacityMonitoringApproach,
  EksCapacityMonitoringApproach,
  EvaluationStatus,
  ExecutionAction,
  ExecutionBlockType,
  ExecutionEventType,
  ExecutionMode,
  ExecutionState,
  GetPlanCommand,
  GetPlanEvaluationStatusCommand,
  GetPlanExecutionCommand,
  GetPlanInRegionCommand,
  GlobalAuroraDefaultBehavior,
  GlobalAuroraUngracefulBehavior,
  IllegalArgumentException,
  IllegalStateException,
  InternalServerException,
  LambdaUngracefulBehavior,
  ListPlanExecutionEventsCommand,
  ListPlanExecutionsCommand,
  ListPlansCommand,
  ListPlansInRegionCommand,
  ListRoute53HealthChecksCommand,
  ListTagsForResourceCommand,
  RecoveryApproach,
  RegionToRunIn,
  ResourceNotFoundException,
  ResourceWarningStatus,
  RoutingControlStateChange,
  StartPlanExecutionCommand,
  StepStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePlanCommand,
  UpdatePlanExecutionAction,
  UpdatePlanExecutionCommand,
  UpdatePlanExecutionStepAction,
  UpdatePlanExecutionStepCommand,
  WorkflowTargetAction,
  paginateGetPlanEvaluationStatus,
  paginateGetPlanExecution,
  paginateListPlanExecutionEvents,
  paginateListPlanExecutions,
  paginateListPlans,
  paginateListPlansInRegion,
  paginateListRoute53HealthChecks,
  waitForPlanEvaluationStatusPassed,
  waitForPlanExecutionCompleted,
  waitUntilPlanEvaluationStatusPassed,
  waitUntilPlanExecutionCompleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ARCRegionSwitchClient === "function");
assert(typeof ARCRegionSwitch === "function");
// commands
assert(typeof ApprovePlanExecutionStepCommand === "function");
assert(typeof CancelPlanExecutionCommand === "function");
assert(typeof CreatePlanCommand === "function");
assert(typeof DeletePlanCommand === "function");
assert(typeof GetPlanCommand === "function");
assert(typeof GetPlanEvaluationStatusCommand === "function");
assert(typeof GetPlanExecutionCommand === "function");
assert(typeof GetPlanInRegionCommand === "function");
assert(typeof ListPlanExecutionEventsCommand === "function");
assert(typeof ListPlanExecutionsCommand === "function");
assert(typeof ListPlansCommand === "function");
assert(typeof ListPlansInRegionCommand === "function");
assert(typeof ListRoute53HealthChecksCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartPlanExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePlanCommand === "function");
assert(typeof UpdatePlanExecutionCommand === "function");
assert(typeof UpdatePlanExecutionStepCommand === "function");
// enums
assert(typeof AlarmCondition === "object");
assert(typeof AlarmType === "object");
assert(typeof Approval === "object");
assert(typeof Ec2AsgCapacityMonitoringApproach === "object");
assert(typeof EcsCapacityMonitoringApproach === "object");
assert(typeof EksCapacityMonitoringApproach === "object");
assert(typeof EvaluationStatus === "object");
assert(typeof ExecutionAction === "object");
assert(typeof ExecutionBlockType === "object");
assert(typeof ExecutionEventType === "object");
assert(typeof ExecutionMode === "object");
assert(typeof ExecutionState === "object");
assert(typeof GlobalAuroraDefaultBehavior === "object");
assert(typeof GlobalAuroraUngracefulBehavior === "object");
assert(typeof LambdaUngracefulBehavior === "object");
assert(typeof RecoveryApproach === "object");
assert(typeof RegionToRunIn === "object");
assert(typeof ResourceWarningStatus === "object");
assert(typeof RoutingControlStateChange === "object");
assert(typeof StepStatus === "object");
assert(typeof UpdatePlanExecutionAction === "object");
assert(typeof UpdatePlanExecutionStepAction === "object");
assert(typeof WorkflowTargetAction === "object");
// errors
assert(AccessDeniedException.prototype instanceof ARCRegionSwitchServiceException);
assert(IllegalArgumentException.prototype instanceof ARCRegionSwitchServiceException);
assert(IllegalStateException.prototype instanceof ARCRegionSwitchServiceException);
assert(InternalServerException.prototype instanceof ARCRegionSwitchServiceException);
assert(ResourceNotFoundException.prototype instanceof ARCRegionSwitchServiceException);
assert(ARCRegionSwitchServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForPlanEvaluationStatusPassed === "function");
assert(typeof waitForPlanExecutionCompleted === "function");
assert(typeof waitUntilPlanEvaluationStatusPassed === "function");
assert(typeof waitUntilPlanExecutionCompleted === "function");
// paginators
assert(typeof paginateGetPlanEvaluationStatus === "function");
assert(typeof paginateGetPlanExecution === "function");
assert(typeof paginateListPlanExecutionEvents === "function");
assert(typeof paginateListPlanExecutions === "function");
assert(typeof paginateListPlans === "function");
assert(typeof paginateListPlansInRegion === "function");
assert(typeof paginateListRoute53HealthChecks === "function");
console.log(`ARCRegionSwitch index test passed.`);
