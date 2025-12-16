import {
  Action$,
  ArchiveRetainRule$,
  ArchiveRule$,
  CreateLifecyclePolicy$,
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyRequest$,
  CreateLifecyclePolicyResponse$,
  CreateRule$,
  CrossRegionCopyAction$,
  CrossRegionCopyDeprecateRule$,
  CrossRegionCopyRetainRule$,
  CrossRegionCopyRule$,
  CrossRegionCopyTarget$,
  DLM,
  DLMClient,
  DLMServiceException,
  DefaultPoliciesTypeValues,
  DefaultPolicyTypeValues,
  DeleteLifecyclePolicy$,
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyRequest$,
  DeleteLifecyclePolicyResponse$,
  DeprecateRule$,
  EncryptionConfiguration$,
  EventParameters$,
  EventSource$,
  EventSourceValues,
  EventTypeValues,
  Exclusions$,
  ExecutionHandlerServiceValues,
  FastRestoreRule$,
  GetLifecyclePolicies$,
  GetLifecyclePoliciesCommand,
  GetLifecyclePoliciesRequest$,
  GetLifecyclePoliciesResponse$,
  GetLifecyclePolicy$,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyRequest$,
  GetLifecyclePolicyResponse$,
  GettablePolicyStateValues,
  InternalServerException,
  InternalServerException$,
  IntervalUnitValues,
  InvalidRequestException,
  InvalidRequestException$,
  LifecyclePolicy$,
  LifecyclePolicySummary$,
  LimitExceededException,
  LimitExceededException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocationValues,
  PolicyDetails$,
  PolicyLanguageValues,
  PolicyTypeValues,
  ResourceLocationValues,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTypeValues,
  RetainRule$,
  RetentionArchiveTier$,
  RetentionIntervalUnitValues,
  Schedule$,
  Script$,
  SettablePolicyStateValues,
  ShareRule$,
  StageValues,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLifecyclePolicy$,
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyRequest$,
  UpdateLifecyclePolicyResponse$,
  _Parameters$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DLMClient === "function");
assert(typeof DLM === "function");
// commands
assert(typeof CreateLifecyclePolicyCommand === "function");
assert(typeof CreateLifecyclePolicy$ === "object");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteLifecyclePolicy$ === "object");
assert(typeof GetLifecyclePoliciesCommand === "function");
assert(typeof GetLifecyclePolicies$ === "object");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetLifecyclePolicy$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLifecyclePolicyCommand === "function");
assert(typeof UpdateLifecyclePolicy$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof ArchiveRetainRule$ === "object");
assert(typeof ArchiveRule$ === "object");
assert(typeof CreateLifecyclePolicyRequest$ === "object");
assert(typeof CreateLifecyclePolicyResponse$ === "object");
assert(typeof CreateRule$ === "object");
assert(typeof CrossRegionCopyAction$ === "object");
assert(typeof CrossRegionCopyDeprecateRule$ === "object");
assert(typeof CrossRegionCopyRetainRule$ === "object");
assert(typeof CrossRegionCopyRule$ === "object");
assert(typeof CrossRegionCopyTarget$ === "object");
assert(typeof DeleteLifecyclePolicyRequest$ === "object");
assert(typeof DeleteLifecyclePolicyResponse$ === "object");
assert(typeof DeprecateRule$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EventParameters$ === "object");
assert(typeof EventSource$ === "object");
assert(typeof Exclusions$ === "object");
assert(typeof FastRestoreRule$ === "object");
assert(typeof GetLifecyclePoliciesRequest$ === "object");
assert(typeof GetLifecyclePoliciesResponse$ === "object");
assert(typeof GetLifecyclePolicyRequest$ === "object");
assert(typeof GetLifecyclePolicyResponse$ === "object");
assert(typeof LifecyclePolicy$ === "object");
assert(typeof LifecyclePolicySummary$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof _Parameters$ === "object");
assert(typeof PolicyDetails$ === "object");
assert(typeof RetainRule$ === "object");
assert(typeof RetentionArchiveTier$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof Script$ === "object");
assert(typeof ShareRule$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLifecyclePolicyRequest$ === "object");
assert(typeof UpdateLifecyclePolicyResponse$ === "object");
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
assert(InternalServerException.prototype instanceof DLMServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidRequestException.prototype instanceof DLMServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof DLMServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DLMServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(DLMServiceException.prototype instanceof Error);
console.log(`DLM index test passed.`);
