import {
  CreateRescoreExecutionPlanCommand,
  DeleteRescoreExecutionPlanCommand,
  DescribeRescoreExecutionPlanCommand,
  KendraRanking,
  KendraRankingClient,
  KendraRankingServiceException,
  ListRescoreExecutionPlansCommand,
  ListTagsForResourceCommand,
  RescoreCommand,
  RescoreExecutionPlanStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateRescoreExecutionPlanCommand,
  paginateListRescoreExecutionPlans,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KendraRankingClient === "function")
assert(typeof KendraRanking === "function")
// commands
assert(typeof CreateRescoreExecutionPlanCommand === "function")
assert(typeof DeleteRescoreExecutionPlanCommand === "function")
assert(typeof DescribeRescoreExecutionPlanCommand === "function")
assert(typeof ListRescoreExecutionPlansCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RescoreCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateRescoreExecutionPlanCommand === "function")
// enums
assert(typeof RescoreExecutionPlanStatus === "object");
// errors
assert(KendraRankingServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListRescoreExecutionPlans === "function")
console.log(`KendraRanking index test passed.`);
