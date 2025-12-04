import {
  ActionAfterCompletion,
  AssignPublicIp,
  CreateScheduleCommand,
  CreateScheduleGroupCommand,
  DeleteScheduleCommand,
  DeleteScheduleGroupCommand,
  FlexibleTimeWindowMode,
  GetScheduleCommand,
  GetScheduleGroupCommand,
  LaunchType,
  ListScheduleGroupsCommand,
  ListSchedulesCommand,
  ListTagsForResourceCommand,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  ScheduleGroupState,
  ScheduleState,
  Scheduler,
  SchedulerClient,
  SchedulerServiceException,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateScheduleCommand,
  paginateListScheduleGroups,
  paginateListSchedules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SchedulerClient === "function")
assert(typeof Scheduler === "function")
// commands
assert(typeof CreateScheduleCommand === "function")
assert(typeof CreateScheduleGroupCommand === "function")
assert(typeof DeleteScheduleCommand === "function")
assert(typeof DeleteScheduleGroupCommand === "function")
assert(typeof GetScheduleCommand === "function")
assert(typeof GetScheduleGroupCommand === "function")
assert(typeof ListScheduleGroupsCommand === "function")
assert(typeof ListSchedulesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateScheduleCommand === "function")
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
assert(SchedulerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListScheduleGroups === "function")
assert(typeof paginateListSchedules === "function")
console.log(`Scheduler index test passed.`);
