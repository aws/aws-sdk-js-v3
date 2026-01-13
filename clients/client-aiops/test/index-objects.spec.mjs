import {
  AccessDeniedException,
  AccessDeniedException$,
  AIOps,
  AIOpsClient,
  AIOpsServiceException,
  ConflictException,
  ConflictException$,
  CreateInvestigationGroup$,
  CreateInvestigationGroupCommand,
  CreateInvestigationGroupInput$,
  CreateInvestigationGroupOutput$,
  CrossAccountConfiguration$,
  DeleteInvestigationGroup$,
  DeleteInvestigationGroupCommand,
  DeleteInvestigationGroupPolicy$,
  DeleteInvestigationGroupPolicyCommand,
  DeleteInvestigationGroupPolicyOutput$,
  DeleteInvestigationGroupPolicyRequest$,
  DeleteInvestigationGroupRequest$,
  EncryptionConfiguration$,
  EncryptionConfigurationType,
  ForbiddenException,
  ForbiddenException$,
  GetInvestigationGroup$,
  GetInvestigationGroupCommand,
  GetInvestigationGroupPolicy$,
  GetInvestigationGroupPolicyCommand,
  GetInvestigationGroupPolicyRequest$,
  GetInvestigationGroupPolicyResponse$,
  GetInvestigationGroupRequest$,
  GetInvestigationGroupResponse$,
  InternalServerException,
  InternalServerException$,
  ListInvestigationGroups$,
  ListInvestigationGroupsCommand,
  ListInvestigationGroupsInput$,
  ListInvestigationGroupsModel$,
  ListInvestigationGroupsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceOutput$,
  ListTagsForResourceRequest$,
  paginateListInvestigationGroups,
  PutInvestigationGroupPolicy$,
  PutInvestigationGroupPolicyCommand,
  PutInvestigationGroupPolicyRequest$,
  PutInvestigationGroupPolicyResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
  UpdateInvestigationGroup$,
  UpdateInvestigationGroupCommand,
  UpdateInvestigationGroupOutput$,
  UpdateInvestigationGroupRequest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AIOpsClient === "function");
assert(typeof AIOps === "function");
// commands
assert(typeof CreateInvestigationGroupCommand === "function");
assert(typeof CreateInvestigationGroup$ === "object");
assert(typeof DeleteInvestigationGroupCommand === "function");
assert(typeof DeleteInvestigationGroup$ === "object");
assert(typeof DeleteInvestigationGroupPolicyCommand === "function");
assert(typeof DeleteInvestigationGroupPolicy$ === "object");
assert(typeof GetInvestigationGroupCommand === "function");
assert(typeof GetInvestigationGroup$ === "object");
assert(typeof GetInvestigationGroupPolicyCommand === "function");
assert(typeof GetInvestigationGroupPolicy$ === "object");
assert(typeof ListInvestigationGroupsCommand === "function");
assert(typeof ListInvestigationGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutInvestigationGroupPolicyCommand === "function");
assert(typeof PutInvestigationGroupPolicy$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateInvestigationGroupCommand === "function");
assert(typeof UpdateInvestigationGroup$ === "object");
// structural schemas
assert(typeof CreateInvestigationGroupInput$ === "object");
assert(typeof CreateInvestigationGroupOutput$ === "object");
assert(typeof CrossAccountConfiguration$ === "object");
assert(typeof DeleteInvestigationGroupPolicyOutput$ === "object");
assert(typeof DeleteInvestigationGroupPolicyRequest$ === "object");
assert(typeof DeleteInvestigationGroupRequest$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetInvestigationGroupPolicyRequest$ === "object");
assert(typeof GetInvestigationGroupPolicyResponse$ === "object");
assert(typeof GetInvestigationGroupRequest$ === "object");
assert(typeof GetInvestigationGroupResponse$ === "object");
assert(typeof ListInvestigationGroupsInput$ === "object");
assert(typeof ListInvestigationGroupsModel$ === "object");
assert(typeof ListInvestigationGroupsOutput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof PutInvestigationGroupPolicyRequest$ === "object");
assert(typeof PutInvestigationGroupPolicyResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateInvestigationGroupOutput$ === "object");
assert(typeof UpdateInvestigationGroupRequest$ === "object");
// enums
assert(typeof EncryptionConfigurationType === "object");
// errors
assert(AccessDeniedException.prototype instanceof AIOpsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AIOpsServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof AIOpsServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerException.prototype instanceof AIOpsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AIOpsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AIOpsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AIOpsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AIOpsServiceException);
assert(typeof ValidationException$ === "object");
assert(AIOpsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListInvestigationGroups === "function");
console.log(`AIOps index test passed.`);
