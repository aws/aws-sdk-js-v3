import {
  AIOps,
  AIOpsClient,
  AIOpsServiceException,
  CreateInvestigationGroupCommand,
  DeleteInvestigationGroupCommand,
  DeleteInvestigationGroupPolicyCommand,
  EncryptionConfigurationType,
  GetInvestigationGroupCommand,
  GetInvestigationGroupPolicyCommand,
  ListInvestigationGroupsCommand,
  ListTagsForResourceCommand,
  PutInvestigationGroupPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInvestigationGroupCommand,
  paginateListInvestigationGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AIOpsClient === "function");
assert(typeof AIOps === "function");
// commands
assert(typeof CreateInvestigationGroupCommand === "function");
assert(typeof DeleteInvestigationGroupCommand === "function");
assert(typeof DeleteInvestigationGroupPolicyCommand === "function");
assert(typeof GetInvestigationGroupCommand === "function");
assert(typeof GetInvestigationGroupPolicyCommand === "function");
assert(typeof ListInvestigationGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutInvestigationGroupPolicyCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateInvestigationGroupCommand === "function");
// enums
assert(typeof EncryptionConfigurationType === "object");
// errors
assert(AIOpsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInvestigationGroups === "function");
console.log(`AIOps index test passed.`);
