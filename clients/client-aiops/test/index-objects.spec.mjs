import {
  AIOps,
  AIOpsClient,
  AIOpsServiceException,
  AccessDeniedException,
  ConflictException,
  CreateInvestigationGroupCommand,
  DeleteInvestigationGroupCommand,
  DeleteInvestigationGroupPolicyCommand,
  EncryptionConfigurationType,
  ForbiddenException,
  GetInvestigationGroupCommand,
  GetInvestigationGroupPolicyCommand,
  InternalServerException,
  ListInvestigationGroupsCommand,
  ListTagsForResourceCommand,
  PutInvestigationGroupPolicyCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateInvestigationGroupCommand,
  ValidationException,
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
assert(AccessDeniedException.prototype instanceof AIOpsServiceException);
assert(ConflictException.prototype instanceof AIOpsServiceException);
assert(ForbiddenException.prototype instanceof AIOpsServiceException);
assert(InternalServerException.prototype instanceof AIOpsServiceException);
assert(ResourceNotFoundException.prototype instanceof AIOpsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof AIOpsServiceException);
assert(ThrottlingException.prototype instanceof AIOpsServiceException);
assert(ValidationException.prototype instanceof AIOpsServiceException);
assert(AIOpsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInvestigationGroups === "function");
console.log(`AIOps index test passed.`);
