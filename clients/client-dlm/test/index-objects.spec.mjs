import {
  CreateLifecyclePolicyCommand,
  DLM,
  DLMClient,
  DLMServiceException,
  DefaultPoliciesTypeValues,
  DefaultPolicyTypeValues,
  DeleteLifecyclePolicyCommand,
  EventSourceValues,
  EventTypeValues,
  ExecutionHandlerServiceValues,
  GetLifecyclePoliciesCommand,
  GetLifecyclePolicyCommand,
  GettablePolicyStateValues,
  IntervalUnitValues,
  ListTagsForResourceCommand,
  LocationValues,
  PolicyLanguageValues,
  PolicyTypeValues,
  ResourceLocationValues,
  ResourceTypeValues,
  RetentionIntervalUnitValues,
  SettablePolicyStateValues,
  StageValues,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLifecyclePolicyCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DLMClient === "function")
assert(typeof DLM === "function")
// commands
assert(typeof CreateLifecyclePolicyCommand === "function")
assert(typeof DeleteLifecyclePolicyCommand === "function")
assert(typeof GetLifecyclePoliciesCommand === "function")
assert(typeof GetLifecyclePolicyCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateLifecyclePolicyCommand === "function")
// enums
assert(typeof DefaultPoliciesTypeValues === "object");
assert(typeof DefaultPolicyTypeValues === "object");
assert(typeof EventSourceValues === "object");
assert(typeof EventTypeValues === "object");
assert(typeof ExecutionHandlerServiceValues === "object");
assert(typeof GettablePolicyStateValues === "object");
assert(typeof IntervalUnitValues === "object");
assert(typeof LocationValues === "object");
assert(typeof PolicyLanguageValues === "object");
assert(typeof PolicyTypeValues === "object");
assert(typeof ResourceLocationValues === "object");
assert(typeof ResourceTypeValues === "object");
assert(typeof RetentionIntervalUnitValues === "object");
assert(typeof SettablePolicyStateValues === "object");
assert(typeof StageValues === "object");
// errors
assert(DLMServiceException.prototype instanceof Error)
console.log(`DLM index test passed.`);
