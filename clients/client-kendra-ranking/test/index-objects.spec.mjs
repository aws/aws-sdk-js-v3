import {
  AccessDeniedException,
  ConflictException,
  CreateRescoreExecutionPlanCommand,
  DeleteRescoreExecutionPlanCommand,
  DescribeRescoreExecutionPlanCommand,
  InternalServerException,
  KendraRanking,
  KendraRankingClient,
  KendraRankingServiceException,
  ListRescoreExecutionPlansCommand,
  ListTagsForResourceCommand,
  RescoreCommand,
  RescoreExecutionPlanStatus,
  ResourceNotFoundException,
  ResourceUnavailableException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateRescoreExecutionPlanCommand,
  ValidationException,
  paginateListRescoreExecutionPlans,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KendraRankingClient === "function");
assert(typeof KendraRanking === "function");
// commands
assert(typeof CreateRescoreExecutionPlanCommand === "function");
assert(typeof DeleteRescoreExecutionPlanCommand === "function");
assert(typeof DescribeRescoreExecutionPlanCommand === "function");
assert(typeof ListRescoreExecutionPlansCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RescoreCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateRescoreExecutionPlanCommand === "function");
// enums
assert(typeof RescoreExecutionPlanStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof KendraRankingServiceException);
assert(ConflictException.prototype instanceof KendraRankingServiceException);
assert(InternalServerException.prototype instanceof KendraRankingServiceException);
assert(ResourceNotFoundException.prototype instanceof KendraRankingServiceException);
assert(ResourceUnavailableException.prototype instanceof KendraRankingServiceException);
assert(ServiceQuotaExceededException.prototype instanceof KendraRankingServiceException);
assert(ThrottlingException.prototype instanceof KendraRankingServiceException);
assert(ValidationException.prototype instanceof KendraRankingServiceException);
assert(KendraRankingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRescoreExecutionPlans === "function");
console.log(`KendraRanking index test passed.`);
