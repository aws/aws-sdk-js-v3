import {
  ARCRegionSwitch,
  ARCRegionSwitchClient,
  ARCRegionSwitchServiceException,
  AbbreviatedExecution$,
  AbbreviatedPlan$,
  AccessDeniedException,
  AccessDeniedException$,
  AlarmCondition,
  AlarmType,
  Approval,
  ApprovePlanExecutionStep$,
  ApprovePlanExecutionStepCommand,
  ApprovePlanExecutionStepRequest$,
  ApprovePlanExecutionStepResponse$,
  ArcRoutingControlConfiguration$,
  ArcRoutingControlState$,
  Asg$,
  AssociatedAlarm$,
  CancelPlanExecution$,
  CancelPlanExecutionCommand,
  CancelPlanExecutionRequest$,
  CancelPlanExecutionResponse$,
  CreatePlan$,
  CreatePlanCommand,
  CreatePlanRequest$,
  CreatePlanResponse$,
  CustomActionLambdaConfiguration$,
  DeletePlan$,
  DeletePlanCommand,
  DeletePlanRequest$,
  DeletePlanResponse$,
  Ec2AsgCapacityIncreaseConfiguration$,
  Ec2AsgCapacityMonitoringApproach,
  Ec2Ungraceful$,
  EcsCapacityIncreaseConfiguration$,
  EcsCapacityMonitoringApproach,
  EcsUngraceful$,
  EksCapacityMonitoringApproach,
  EksCluster$,
  EksResourceScalingConfiguration$,
  EksResourceScalingUngraceful$,
  EvaluationStatus,
  ExecutionAction,
  ExecutionApprovalConfiguration$,
  ExecutionBlockConfiguration$,
  ExecutionBlockType,
  ExecutionEvent$,
  ExecutionEventType,
  ExecutionMode,
  ExecutionState,
  GetPlan$,
  GetPlanCommand,
  GetPlanEvaluationStatus$,
  GetPlanEvaluationStatusCommand,
  GetPlanEvaluationStatusRequest$,
  GetPlanEvaluationStatusResponse$,
  GetPlanExecution$,
  GetPlanExecutionCommand,
  GetPlanExecutionRequest$,
  GetPlanExecutionResponse$,
  GetPlanInRegion$,
  GetPlanInRegionCommand,
  GetPlanInRegionRequest$,
  GetPlanInRegionResponse$,
  GetPlanRequest$,
  GetPlanResponse$,
  GlobalAuroraConfiguration$,
  GlobalAuroraDefaultBehavior,
  GlobalAuroraUngraceful$,
  GlobalAuroraUngracefulBehavior,
  IllegalArgumentException,
  IllegalArgumentException$,
  IllegalStateException,
  IllegalStateException$,
  InternalServerException,
  InternalServerException$,
  KubernetesResourceType$,
  KubernetesScalingResource$,
  LambdaUngraceful$,
  LambdaUngracefulBehavior,
  Lambdas$,
  ListPlanExecutionEvents$,
  ListPlanExecutionEventsCommand,
  ListPlanExecutionEventsRequest$,
  ListPlanExecutionEventsResponse$,
  ListPlanExecutions$,
  ListPlanExecutionsCommand,
  ListPlanExecutionsRequest$,
  ListPlanExecutionsResponse$,
  ListPlans$,
  ListPlansCommand,
  ListPlansInRegion$,
  ListPlansInRegionCommand,
  ListPlansInRegionRequest$,
  ListPlansInRegionResponse$,
  ListPlansRequest$,
  ListPlansResponse$,
  ListRoute53HealthChecks$,
  ListRoute53HealthChecksCommand,
  ListRoute53HealthChecksInRegion$,
  ListRoute53HealthChecksInRegionCommand,
  ListRoute53HealthChecksInRegionRequest$,
  ListRoute53HealthChecksInRegionResponse$,
  ListRoute53HealthChecksRequest$,
  ListRoute53HealthChecksResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MinimalWorkflow$,
  ParallelExecutionBlockConfiguration$,
  Plan$,
  RecoveryApproach,
  RegionSwitchPlanConfiguration$,
  RegionToRunIn,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceWarning$,
  ResourceWarningStatus,
  Route53HealthCheck$,
  Route53HealthCheckConfiguration$,
  Route53HealthCheckStatus,
  Route53ResourceRecordSet$,
  RoutingControlStateChange,
  Service$,
  StartPlanExecution$,
  StartPlanExecutionCommand,
  StartPlanExecutionRequest$,
  StartPlanExecutionResponse$,
  Step$,
  StepState$,
  StepStatus,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Trigger$,
  TriggerCondition$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdatePlan$,
  UpdatePlanCommand,
  UpdatePlanExecution$,
  UpdatePlanExecutionAction,
  UpdatePlanExecutionCommand,
  UpdatePlanExecutionRequest$,
  UpdatePlanExecutionResponse$,
  UpdatePlanExecutionStep$,
  UpdatePlanExecutionStepAction,
  UpdatePlanExecutionStepCommand,
  UpdatePlanExecutionStepRequest$,
  UpdatePlanExecutionStepResponse$,
  UpdatePlanRequest$,
  UpdatePlanResponse$,
  Workflow$,
  WorkflowTargetAction,
  paginateGetPlanEvaluationStatus,
  paginateGetPlanExecution,
  paginateListPlanExecutionEvents,
  paginateListPlanExecutions,
  paginateListPlans,
  paginateListPlansInRegion,
  paginateListRoute53HealthChecks,
  paginateListRoute53HealthChecksInRegion,
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
assert(typeof ApprovePlanExecutionStep$ === "object");
assert(typeof CancelPlanExecutionCommand === "function");
assert(typeof CancelPlanExecution$ === "object");
assert(typeof CreatePlanCommand === "function");
assert(typeof CreatePlan$ === "object");
assert(typeof DeletePlanCommand === "function");
assert(typeof DeletePlan$ === "object");
assert(typeof GetPlanCommand === "function");
assert(typeof GetPlan$ === "object");
assert(typeof GetPlanEvaluationStatusCommand === "function");
assert(typeof GetPlanEvaluationStatus$ === "object");
assert(typeof GetPlanExecutionCommand === "function");
assert(typeof GetPlanExecution$ === "object");
assert(typeof GetPlanInRegionCommand === "function");
assert(typeof GetPlanInRegion$ === "object");
assert(typeof ListPlanExecutionEventsCommand === "function");
assert(typeof ListPlanExecutionEvents$ === "object");
assert(typeof ListPlanExecutionsCommand === "function");
assert(typeof ListPlanExecutions$ === "object");
assert(typeof ListPlansCommand === "function");
assert(typeof ListPlans$ === "object");
assert(typeof ListPlansInRegionCommand === "function");
assert(typeof ListPlansInRegion$ === "object");
assert(typeof ListRoute53HealthChecksCommand === "function");
assert(typeof ListRoute53HealthChecks$ === "object");
assert(typeof ListRoute53HealthChecksInRegionCommand === "function");
assert(typeof ListRoute53HealthChecksInRegion$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartPlanExecutionCommand === "function");
assert(typeof StartPlanExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePlanCommand === "function");
assert(typeof UpdatePlan$ === "object");
assert(typeof UpdatePlanExecutionCommand === "function");
assert(typeof UpdatePlanExecution$ === "object");
assert(typeof UpdatePlanExecutionStepCommand === "function");
assert(typeof UpdatePlanExecutionStep$ === "object");
// structural schemas
assert(typeof AbbreviatedExecution$ === "object");
assert(typeof AbbreviatedPlan$ === "object");
assert(typeof ApprovePlanExecutionStepRequest$ === "object");
assert(typeof ApprovePlanExecutionStepResponse$ === "object");
assert(typeof ArcRoutingControlConfiguration$ === "object");
assert(typeof ArcRoutingControlState$ === "object");
assert(typeof Asg$ === "object");
assert(typeof AssociatedAlarm$ === "object");
assert(typeof CancelPlanExecutionRequest$ === "object");
assert(typeof CancelPlanExecutionResponse$ === "object");
assert(typeof CreatePlanRequest$ === "object");
assert(typeof CreatePlanResponse$ === "object");
assert(typeof CustomActionLambdaConfiguration$ === "object");
assert(typeof DeletePlanRequest$ === "object");
assert(typeof DeletePlanResponse$ === "object");
assert(typeof Ec2AsgCapacityIncreaseConfiguration$ === "object");
assert(typeof Ec2Ungraceful$ === "object");
assert(typeof EcsCapacityIncreaseConfiguration$ === "object");
assert(typeof EcsUngraceful$ === "object");
assert(typeof EksCluster$ === "object");
assert(typeof EksResourceScalingConfiguration$ === "object");
assert(typeof EksResourceScalingUngraceful$ === "object");
assert(typeof ExecutionApprovalConfiguration$ === "object");
assert(typeof ExecutionBlockConfiguration$ === "object");
assert(typeof ExecutionEvent$ === "object");
assert(typeof GetPlanEvaluationStatusRequest$ === "object");
assert(typeof GetPlanEvaluationStatusResponse$ === "object");
assert(typeof GetPlanExecutionRequest$ === "object");
assert(typeof GetPlanExecutionResponse$ === "object");
assert(typeof GetPlanInRegionRequest$ === "object");
assert(typeof GetPlanInRegionResponse$ === "object");
assert(typeof GetPlanRequest$ === "object");
assert(typeof GetPlanResponse$ === "object");
assert(typeof GlobalAuroraConfiguration$ === "object");
assert(typeof GlobalAuroraUngraceful$ === "object");
assert(typeof KubernetesResourceType$ === "object");
assert(typeof KubernetesScalingResource$ === "object");
assert(typeof Lambdas$ === "object");
assert(typeof LambdaUngraceful$ === "object");
assert(typeof ListPlanExecutionEventsRequest$ === "object");
assert(typeof ListPlanExecutionEventsResponse$ === "object");
assert(typeof ListPlanExecutionsRequest$ === "object");
assert(typeof ListPlanExecutionsResponse$ === "object");
assert(typeof ListPlansInRegionRequest$ === "object");
assert(typeof ListPlansInRegionResponse$ === "object");
assert(typeof ListPlansRequest$ === "object");
assert(typeof ListPlansResponse$ === "object");
assert(typeof ListRoute53HealthChecksInRegionRequest$ === "object");
assert(typeof ListRoute53HealthChecksInRegionResponse$ === "object");
assert(typeof ListRoute53HealthChecksRequest$ === "object");
assert(typeof ListRoute53HealthChecksResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MinimalWorkflow$ === "object");
assert(typeof ParallelExecutionBlockConfiguration$ === "object");
assert(typeof Plan$ === "object");
assert(typeof RegionSwitchPlanConfiguration$ === "object");
assert(typeof ResourceWarning$ === "object");
assert(typeof Route53HealthCheck$ === "object");
assert(typeof Route53HealthCheckConfiguration$ === "object");
assert(typeof Route53ResourceRecordSet$ === "object");
assert(typeof Service$ === "object");
assert(typeof StartPlanExecutionRequest$ === "object");
assert(typeof StartPlanExecutionResponse$ === "object");
assert(typeof Step$ === "object");
assert(typeof StepState$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Trigger$ === "object");
assert(typeof TriggerCondition$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdatePlanExecutionRequest$ === "object");
assert(typeof UpdatePlanExecutionResponse$ === "object");
assert(typeof UpdatePlanExecutionStepRequest$ === "object");
assert(typeof UpdatePlanExecutionStepResponse$ === "object");
assert(typeof UpdatePlanRequest$ === "object");
assert(typeof UpdatePlanResponse$ === "object");
assert(typeof Workflow$ === "object");
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
assert(typeof Route53HealthCheckStatus === "object");
assert(typeof RoutingControlStateChange === "object");
assert(typeof StepStatus === "object");
assert(typeof UpdatePlanExecutionAction === "object");
assert(typeof UpdatePlanExecutionStepAction === "object");
assert(typeof WorkflowTargetAction === "object");
// errors
assert(AccessDeniedException.prototype instanceof ARCRegionSwitchServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(IllegalArgumentException.prototype instanceof ARCRegionSwitchServiceException);
assert(typeof IllegalArgumentException$ === "object");
assert(IllegalStateException.prototype instanceof ARCRegionSwitchServiceException);
assert(typeof IllegalStateException$ === "object");
assert(InternalServerException.prototype instanceof ARCRegionSwitchServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ARCRegionSwitchServiceException);
assert(typeof ResourceNotFoundException$ === "object");
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
assert(typeof paginateListRoute53HealthChecksInRegion === "function");
console.log(`ARCRegionSwitch index test passed.`);
