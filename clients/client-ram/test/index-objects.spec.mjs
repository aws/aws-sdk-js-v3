import {
  AcceptResourceShareInvitationCommand,
  AssociateResourceShareCommand,
  AssociateResourceSharePermissionCommand,
  CreatePermissionCommand,
  CreatePermissionVersionCommand,
  CreateResourceShareCommand,
  DeletePermissionCommand,
  DeletePermissionVersionCommand,
  DeleteResourceShareCommand,
  DisassociateResourceShareCommand,
  DisassociateResourceSharePermissionCommand,
  EnableSharingWithAwsOrganizationCommand,
  GetPermissionCommand,
  GetResourcePoliciesCommand,
  GetResourceShareAssociationsCommand,
  GetResourceShareInvitationsCommand,
  GetResourceSharesCommand,
  IdempotentParameterMismatchException,
  InvalidClientTokenException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterException,
  InvalidPolicyException,
  InvalidResourceTypeException,
  InvalidStateTransitionException,
  ListPendingInvitationResourcesCommand,
  ListPermissionAssociationsCommand,
  ListPermissionVersionsCommand,
  ListPermissionsCommand,
  ListPrincipalsCommand,
  ListReplacePermissionAssociationsWorkCommand,
  ListResourceSharePermissionsCommand,
  ListResourceTypesCommand,
  ListResourcesCommand,
  MalformedArnException,
  MalformedPolicyTemplateException,
  MissingRequiredParameterException,
  OperationNotPermittedException,
  PermissionAlreadyExistsException,
  PermissionFeatureSet,
  PermissionLimitExceededException,
  PermissionStatus,
  PermissionType,
  PermissionTypeFilter,
  PermissionVersionsLimitExceededException,
  PromotePermissionCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyCommand,
  RAM,
  RAMClient,
  RAMServiceException,
  RejectResourceShareInvitationCommand,
  ReplacePermissionAssociationsCommand,
  ReplacePermissionAssociationsWorkStatus,
  ResourceArnNotFoundException,
  ResourceOwner,
  ResourceRegionScope,
  ResourceRegionScopeFilter,
  ResourceShareAssociationStatus,
  ResourceShareAssociationType,
  ResourceShareFeatureSet,
  ResourceShareInvitationAlreadyAcceptedException,
  ResourceShareInvitationAlreadyRejectedException,
  ResourceShareInvitationArnNotFoundException,
  ResourceShareInvitationExpiredException,
  ResourceShareInvitationStatus,
  ResourceShareLimitExceededException,
  ResourceShareStatus,
  ResourceStatus,
  ServerInternalException,
  ServiceUnavailableException,
  SetDefaultPermissionVersionCommand,
  TagLimitExceededException,
  TagPolicyViolationException,
  TagResourceCommand,
  ThrottlingException,
  UnknownResourceException,
  UnmatchedPolicyPermissionException,
  UntagResourceCommand,
  UpdateResourceShareCommand,
  paginateGetResourcePolicies,
  paginateGetResourceShareAssociations,
  paginateGetResourceShareInvitations,
  paginateGetResourceShares,
  paginateListPendingInvitationResources,
  paginateListPermissionAssociations,
  paginateListPermissionVersions,
  paginateListPermissions,
  paginateListPrincipals,
  paginateListReplacePermissionAssociationsWork,
  paginateListResourceSharePermissions,
  paginateListResourceTypes,
  paginateListResources,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RAMClient === "function");
assert(typeof RAM === "function");
// commands
assert(typeof AcceptResourceShareInvitationCommand === "function");
assert(typeof AssociateResourceShareCommand === "function");
assert(typeof AssociateResourceSharePermissionCommand === "function");
assert(typeof CreatePermissionCommand === "function");
assert(typeof CreatePermissionVersionCommand === "function");
assert(typeof CreateResourceShareCommand === "function");
assert(typeof DeletePermissionCommand === "function");
assert(typeof DeletePermissionVersionCommand === "function");
assert(typeof DeleteResourceShareCommand === "function");
assert(typeof DisassociateResourceShareCommand === "function");
assert(typeof DisassociateResourceSharePermissionCommand === "function");
assert(typeof EnableSharingWithAwsOrganizationCommand === "function");
assert(typeof GetPermissionCommand === "function");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourceShareAssociationsCommand === "function");
assert(typeof GetResourceShareInvitationsCommand === "function");
assert(typeof GetResourceSharesCommand === "function");
assert(typeof ListPendingInvitationResourcesCommand === "function");
assert(typeof ListPermissionAssociationsCommand === "function");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListPermissionVersionsCommand === "function");
assert(typeof ListPrincipalsCommand === "function");
assert(typeof ListReplacePermissionAssociationsWorkCommand === "function");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResourceSharePermissionsCommand === "function");
assert(typeof ListResourceTypesCommand === "function");
assert(typeof PromotePermissionCreatedFromPolicyCommand === "function");
assert(typeof PromoteResourceShareCreatedFromPolicyCommand === "function");
assert(typeof RejectResourceShareInvitationCommand === "function");
assert(typeof ReplacePermissionAssociationsCommand === "function");
assert(typeof SetDefaultPermissionVersionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateResourceShareCommand === "function");
// enums
assert(typeof PermissionFeatureSet === "object");
assert(typeof PermissionStatus === "object");
assert(typeof PermissionType === "object");
assert(typeof PermissionTypeFilter === "object");
assert(typeof ReplacePermissionAssociationsWorkStatus === "object");
assert(typeof ResourceOwner === "object");
assert(typeof ResourceRegionScope === "object");
assert(typeof ResourceRegionScopeFilter === "object");
assert(typeof ResourceShareAssociationStatus === "object");
assert(typeof ResourceShareAssociationType === "object");
assert(typeof ResourceShareFeatureSet === "object");
assert(typeof ResourceShareInvitationStatus === "object");
assert(typeof ResourceShareStatus === "object");
assert(typeof ResourceStatus === "object");
// errors
assert(IdempotentParameterMismatchException.prototype instanceof RAMServiceException);
assert(InvalidClientTokenException.prototype instanceof RAMServiceException);
assert(InvalidMaxResultsException.prototype instanceof RAMServiceException);
assert(InvalidNextTokenException.prototype instanceof RAMServiceException);
assert(InvalidParameterException.prototype instanceof RAMServiceException);
assert(InvalidPolicyException.prototype instanceof RAMServiceException);
assert(InvalidResourceTypeException.prototype instanceof RAMServiceException);
assert(InvalidStateTransitionException.prototype instanceof RAMServiceException);
assert(MalformedArnException.prototype instanceof RAMServiceException);
assert(MalformedPolicyTemplateException.prototype instanceof RAMServiceException);
assert(MissingRequiredParameterException.prototype instanceof RAMServiceException);
assert(OperationNotPermittedException.prototype instanceof RAMServiceException);
assert(PermissionAlreadyExistsException.prototype instanceof RAMServiceException);
assert(PermissionLimitExceededException.prototype instanceof RAMServiceException);
assert(PermissionVersionsLimitExceededException.prototype instanceof RAMServiceException);
assert(ResourceArnNotFoundException.prototype instanceof RAMServiceException);
assert(ResourceShareInvitationAlreadyAcceptedException.prototype instanceof RAMServiceException);
assert(ResourceShareInvitationAlreadyRejectedException.prototype instanceof RAMServiceException);
assert(ResourceShareInvitationArnNotFoundException.prototype instanceof RAMServiceException);
assert(ResourceShareInvitationExpiredException.prototype instanceof RAMServiceException);
assert(ResourceShareLimitExceededException.prototype instanceof RAMServiceException);
assert(ServerInternalException.prototype instanceof RAMServiceException);
assert(ServiceUnavailableException.prototype instanceof RAMServiceException);
assert(TagLimitExceededException.prototype instanceof RAMServiceException);
assert(TagPolicyViolationException.prototype instanceof RAMServiceException);
assert(ThrottlingException.prototype instanceof RAMServiceException);
assert(UnknownResourceException.prototype instanceof RAMServiceException);
assert(UnmatchedPolicyPermissionException.prototype instanceof RAMServiceException);
assert(RAMServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetResourcePolicies === "function");
assert(typeof paginateGetResourceShareAssociations === "function");
assert(typeof paginateGetResourceShareInvitations === "function");
assert(typeof paginateGetResourceShares === "function");
assert(typeof paginateListPendingInvitationResources === "function");
assert(typeof paginateListPermissionAssociations === "function");
assert(typeof paginateListPermissionVersions === "function");
assert(typeof paginateListPermissions === "function");
assert(typeof paginateListPrincipals === "function");
assert(typeof paginateListReplacePermissionAssociationsWork === "function");
assert(typeof paginateListResourceSharePermissions === "function");
assert(typeof paginateListResourceTypes === "function");
assert(typeof paginateListResources === "function");
console.log(`RAM index test passed.`);
