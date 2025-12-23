import {
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  CreateRule$,
  CreateRuleCommand,
  CreateRuleRequest$,
  CreateRuleResponse$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleRequest$,
  DeleteRuleResponse$,
  GetRule$,
  GetRuleCommand,
  GetRuleRequest$,
  GetRuleResponse$,
  InternalServerException,
  InternalServerException$,
  ListRules$,
  ListRulesCommand,
  ListRulesRequest$,
  ListRulesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LockConfiguration$,
  LockRule$,
  LockRuleCommand,
  LockRuleRequest$,
  LockRuleResponse$,
  LockState,
  paginateListRules,
  Rbin,
  RbinClient,
  RbinServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  ResourceTag$,
  ResourceType,
  RetentionPeriod$,
  RetentionPeriodUnit,
  RuleStatus,
  RuleSummary$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UnlockDelay$,
  UnlockDelayUnit,
  UnlockRule$,
  UnlockRuleCommand,
  UnlockRuleRequest$,
  UnlockRuleResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateRule$,
  UpdateRuleCommand,
  UpdateRuleRequest$,
  UpdateRuleResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RbinClient === "function");
assert(typeof Rbin === "function");
// commands
assert(typeof CreateRuleCommand === "function");
assert(typeof CreateRule$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof GetRuleCommand === "function");
assert(typeof GetRule$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof LockRuleCommand === "function");
assert(typeof LockRule$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UnlockRuleCommand === "function");
assert(typeof UnlockRule$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateRuleCommand === "function");
assert(typeof UpdateRule$ === "object");
// structural schemas
assert(typeof CreateRuleRequest$ === "object");
assert(typeof CreateRuleResponse$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DeleteRuleResponse$ === "object");
assert(typeof GetRuleRequest$ === "object");
assert(typeof GetRuleResponse$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LockConfiguration$ === "object");
assert(typeof LockRuleRequest$ === "object");
assert(typeof LockRuleResponse$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof RetentionPeriod$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UnlockDelay$ === "object");
assert(typeof UnlockRuleRequest$ === "object");
assert(typeof UnlockRuleResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateRuleRequest$ === "object");
assert(typeof UpdateRuleResponse$ === "object");
// enums
assert(typeof ConflictExceptionReason === "object");
assert(typeof LockState === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof ResourceType === "object");
assert(typeof RetentionPeriodUnit === "object");
assert(typeof RuleStatus === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof UnlockDelayUnit === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(ConflictException.prototype instanceof RbinServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof RbinServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RbinServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RbinServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof RbinServiceException);
assert(typeof ValidationException$ === "object");
assert(RbinServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRules === "function");
console.log(`Rbin index test passed.`);
