import {
  CreateRuleCommand,
  DeleteRuleCommand,
  GetRuleCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  LockRuleCommand,
  LockState,
  Rbin,
  RbinClient,
  RbinServiceException,
  ResourceType,
  RetentionPeriodUnit,
  RuleStatus,
  TagResourceCommand,
  UnlockDelayUnit,
  UnlockRuleCommand,
  UntagResourceCommand,
  UpdateRuleCommand,
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
assert(typeof LockState === "object");
assert(typeof ResourceType === "object");
assert(typeof RetentionPeriodUnit === "object");
assert(typeof RuleStatus === "object");
assert(typeof UnlockDelayUnit === "object");
// errors
assert(RbinServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRules === "function");
console.log(`Rbin index test passed.`);
