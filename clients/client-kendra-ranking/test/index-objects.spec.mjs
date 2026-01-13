import {
  AccessDeniedException,
  AccessDeniedException$,
  CapacityUnitsConfiguration$,
  ConflictException,
  ConflictException$,
  CreateRescoreExecutionPlan$,
  CreateRescoreExecutionPlanCommand,
  CreateRescoreExecutionPlanRequest$,
  CreateRescoreExecutionPlanResponse$,
  DeleteRescoreExecutionPlan$,
  DeleteRescoreExecutionPlanCommand,
  DeleteRescoreExecutionPlanRequest$,
  DescribeRescoreExecutionPlan$,
  DescribeRescoreExecutionPlanCommand,
  DescribeRescoreExecutionPlanRequest$,
  DescribeRescoreExecutionPlanResponse$,
  Document$,
  InternalServerException,
  InternalServerException$,
  KendraRanking,
  KendraRankingClient,
  KendraRankingServiceException,
  ListRescoreExecutionPlans$,
  ListRescoreExecutionPlansCommand,
  ListRescoreExecutionPlansRequest$,
  ListRescoreExecutionPlansResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListRescoreExecutionPlans,
  Rescore$,
  RescoreCommand,
  RescoreExecutionPlanStatus,
  RescoreExecutionPlanSummary$,
  RescoreRequest$,
  RescoreResult$,
  RescoreResultItem$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateRescoreExecutionPlan$,
  UpdateRescoreExecutionPlanCommand,
  UpdateRescoreExecutionPlanRequest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KendraRankingClient === "function");
assert(typeof KendraRanking === "function");
// commands
assert(typeof CreateRescoreExecutionPlanCommand === "function");
assert(typeof CreateRescoreExecutionPlan$ === "object");
assert(typeof DeleteRescoreExecutionPlanCommand === "function");
assert(typeof DeleteRescoreExecutionPlan$ === "object");
assert(typeof DescribeRescoreExecutionPlanCommand === "function");
assert(typeof DescribeRescoreExecutionPlan$ === "object");
assert(typeof ListRescoreExecutionPlansCommand === "function");
assert(typeof ListRescoreExecutionPlans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RescoreCommand === "function");
assert(typeof Rescore$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateRescoreExecutionPlanCommand === "function");
assert(typeof UpdateRescoreExecutionPlan$ === "object");
// structural schemas
assert(typeof CapacityUnitsConfiguration$ === "object");
assert(typeof CreateRescoreExecutionPlanRequest$ === "object");
assert(typeof CreateRescoreExecutionPlanResponse$ === "object");
assert(typeof DeleteRescoreExecutionPlanRequest$ === "object");
assert(typeof DescribeRescoreExecutionPlanRequest$ === "object");
assert(typeof DescribeRescoreExecutionPlanResponse$ === "object");
assert(typeof Document$ === "object");
assert(typeof ListRescoreExecutionPlansRequest$ === "object");
assert(typeof ListRescoreExecutionPlansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof RescoreExecutionPlanSummary$ === "object");
assert(typeof RescoreRequest$ === "object");
assert(typeof RescoreResult$ === "object");
assert(typeof RescoreResultItem$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateRescoreExecutionPlanRequest$ === "object");
// enums
assert(typeof RescoreExecutionPlanStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof KendraRankingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof KendraRankingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof KendraRankingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KendraRankingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof KendraRankingServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof KendraRankingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof KendraRankingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof KendraRankingServiceException);
assert(typeof ValidationException$ === "object");
assert(KendraRankingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRescoreExecutionPlans === "function");
console.log(`KendraRanking index test passed.`);
