import {
  ActionAfterCompletion,
  AssignPublicIp,
  AwsVpcConfiguration$,
  CapacityProviderStrategyItem$,
  ConflictException,
  ConflictException$,
  CreateSchedule$,
  CreateScheduleCommand,
  CreateScheduleGroup$,
  CreateScheduleGroupCommand,
  CreateScheduleGroupInput$,
  CreateScheduleGroupOutput$,
  CreateScheduleInput$,
  CreateScheduleOutput$,
  DeadLetterConfig$,
  DeleteSchedule$,
  DeleteScheduleCommand,
  DeleteScheduleGroup$,
  DeleteScheduleGroupCommand,
  DeleteScheduleGroupInput$,
  DeleteScheduleGroupOutput$,
  DeleteScheduleInput$,
  DeleteScheduleOutput$,
  EcsParameters$,
  EventBridgeParameters$,
  FlexibleTimeWindow$,
  FlexibleTimeWindowMode,
  GetSchedule$,
  GetScheduleCommand,
  GetScheduleGroup$,
  GetScheduleGroupCommand,
  GetScheduleGroupInput$,
  GetScheduleGroupOutput$,
  GetScheduleInput$,
  GetScheduleOutput$,
  InternalServerException,
  InternalServerException$,
  KinesisParameters$,
  LaunchType,
  ListScheduleGroups$,
  ListScheduleGroupsCommand,
  ListScheduleGroupsInput$,
  ListScheduleGroupsOutput$,
  ListSchedules$,
  ListSchedulesCommand,
  ListSchedulesInput$,
  ListSchedulesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  NetworkConfiguration$,
  PlacementConstraint$,
  PlacementConstraintType,
  PlacementStrategy$,
  PlacementStrategyType,
  PropagateTags,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryPolicy$,
  SageMakerPipelineParameter$,
  SageMakerPipelineParameters$,
  ScheduleGroupState,
  ScheduleGroupSummary$,
  ScheduleState,
  ScheduleSummary$,
  Scheduler,
  SchedulerClient,
  SchedulerServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SqsParameters$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  Target$,
  TargetSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateSchedule$,
  UpdateScheduleCommand,
  UpdateScheduleInput$,
  UpdateScheduleOutput$,
  ValidationException,
  ValidationException$,
  paginateListScheduleGroups,
  paginateListSchedules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SchedulerClient === "function");
assert(typeof Scheduler === "function");
// commands
assert(typeof CreateScheduleCommand === "function");
assert(typeof CreateSchedule$ === "object");
assert(typeof CreateScheduleGroupCommand === "function");
assert(typeof CreateScheduleGroup$ === "object");
assert(typeof DeleteScheduleCommand === "function");
assert(typeof DeleteSchedule$ === "object");
assert(typeof DeleteScheduleGroupCommand === "function");
assert(typeof DeleteScheduleGroup$ === "object");
assert(typeof GetScheduleCommand === "function");
assert(typeof GetSchedule$ === "object");
assert(typeof GetScheduleGroupCommand === "function");
assert(typeof GetScheduleGroup$ === "object");
assert(typeof ListScheduleGroupsCommand === "function");
assert(typeof ListScheduleGroups$ === "object");
assert(typeof ListSchedulesCommand === "function");
assert(typeof ListSchedules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateScheduleCommand === "function");
assert(typeof UpdateSchedule$ === "object");
// structural schemas
assert(typeof AwsVpcConfiguration$ === "object");
assert(typeof CapacityProviderStrategyItem$ === "object");
assert(typeof CreateScheduleGroupInput$ === "object");
assert(typeof CreateScheduleGroupOutput$ === "object");
assert(typeof CreateScheduleInput$ === "object");
assert(typeof CreateScheduleOutput$ === "object");
assert(typeof DeadLetterConfig$ === "object");
assert(typeof DeleteScheduleGroupInput$ === "object");
assert(typeof DeleteScheduleGroupOutput$ === "object");
assert(typeof DeleteScheduleInput$ === "object");
assert(typeof DeleteScheduleOutput$ === "object");
assert(typeof EcsParameters$ === "object");
assert(typeof EventBridgeParameters$ === "object");
assert(typeof FlexibleTimeWindow$ === "object");
assert(typeof GetScheduleGroupInput$ === "object");
assert(typeof GetScheduleGroupOutput$ === "object");
assert(typeof GetScheduleInput$ === "object");
assert(typeof GetScheduleOutput$ === "object");
assert(typeof KinesisParameters$ === "object");
assert(typeof ListScheduleGroupsInput$ === "object");
assert(typeof ListScheduleGroupsOutput$ === "object");
assert(typeof ListSchedulesInput$ === "object");
assert(typeof ListSchedulesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof PlacementConstraint$ === "object");
assert(typeof PlacementStrategy$ === "object");
assert(typeof RetryPolicy$ === "object");
assert(typeof SageMakerPipelineParameter$ === "object");
assert(typeof SageMakerPipelineParameters$ === "object");
assert(typeof ScheduleGroupSummary$ === "object");
assert(typeof ScheduleSummary$ === "object");
assert(typeof SqsParameters$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof Target$ === "object");
assert(typeof TargetSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateScheduleInput$ === "object");
assert(typeof UpdateScheduleOutput$ === "object");
// enums
assert(typeof ActionAfterCompletion === "object");
assert(typeof AssignPublicIp === "object");
assert(typeof FlexibleTimeWindowMode === "object");
assert(typeof LaunchType === "object");
assert(typeof PlacementConstraintType === "object");
assert(typeof PlacementStrategyType === "object");
assert(typeof PropagateTags === "object");
assert(typeof ScheduleGroupState === "object");
assert(typeof ScheduleState === "object");
// errors
assert(ConflictException.prototype instanceof SchedulerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SchedulerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SchedulerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SchedulerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SchedulerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SchedulerServiceException);
assert(typeof ValidationException$ === "object");
assert(SchedulerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListScheduleGroups === "function");
assert(typeof paginateListSchedules === "function");
console.log(`Scheduler index test passed.`);
