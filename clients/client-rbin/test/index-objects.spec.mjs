import {
  ConflictException,
  ConflictExceptionReason,
  CreateRuleCommand,
  DeleteRuleCommand,
  GetRuleCommand,
  InternalServerException,
  ListRulesCommand,
  ListTagsForResourceCommand,
  LockRuleCommand,
  LockState,
  Rbin,
  RbinClient,
  RbinServiceException,
  ResourceNotFoundException,
  ResourceNotFoundExceptionReason,
  ResourceType,
  RetentionPeriodUnit,
  RuleStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededExceptionReason,
  TagResourceCommand,
  UnlockDelayUnit,
  UnlockRuleCommand,
  UntagResourceCommand,
  UpdateRuleCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListRules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RbinClient === "function");
assert(typeof Rbin === "function");
// commands
assert(typeof CreateRuleCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof GetRuleCommand === "function");
assert(typeof ListRulesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof LockRuleCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UnlockRuleCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateRuleCommand === "function");
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
assert(InternalServerException.prototype instanceof RbinServiceException);
assert(ResourceNotFoundException.prototype instanceof RbinServiceException);
assert(ServiceQuotaExceededException.prototype instanceof RbinServiceException);
assert(ValidationException.prototype instanceof RbinServiceException);
assert(RbinServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRules === "function");
console.log(`Rbin index test passed.`);
