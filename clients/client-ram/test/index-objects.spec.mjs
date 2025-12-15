import {
  AcceptResourceShareInvitation$,
  AcceptResourceShareInvitationCommand,
  AcceptResourceShareInvitationRequest$,
  AcceptResourceShareInvitationResponse$,
  AssociateResourceShare$,
  AssociateResourceShareCommand,
  AssociateResourceSharePermission$,
  AssociateResourceSharePermissionCommand,
  AssociateResourceSharePermissionRequest$,
  AssociateResourceSharePermissionResponse$,
  AssociateResourceShareRequest$,
  AssociateResourceShareResponse$,
  AssociatedPermission$,
  CreatePermission$,
  CreatePermissionCommand,
  CreatePermissionRequest$,
  CreatePermissionResponse$,
  CreatePermissionVersion$,
  CreatePermissionVersionCommand,
  CreatePermissionVersionRequest$,
  CreatePermissionVersionResponse$,
  CreateResourceShare$,
  CreateResourceShareCommand,
  CreateResourceShareRequest$,
  CreateResourceShareResponse$,
  DeletePermission$,
  DeletePermissionCommand,
  DeletePermissionRequest$,
  DeletePermissionResponse$,
  DeletePermissionVersion$,
  DeletePermissionVersionCommand,
  DeletePermissionVersionRequest$,
  DeletePermissionVersionResponse$,
  DeleteResourceShare$,
  DeleteResourceShareCommand,
  DeleteResourceShareRequest$,
  DeleteResourceShareResponse$,
  DisassociateResourceShare$,
  DisassociateResourceShareCommand,
  DisassociateResourceSharePermission$,
  DisassociateResourceSharePermissionCommand,
  DisassociateResourceSharePermissionRequest$,
  DisassociateResourceSharePermissionResponse$,
  DisassociateResourceShareRequest$,
  DisassociateResourceShareResponse$,
  EnableSharingWithAwsOrganization$,
  EnableSharingWithAwsOrganizationCommand,
  EnableSharingWithAwsOrganizationRequest$,
  EnableSharingWithAwsOrganizationResponse$,
  GetPermission$,
  GetPermissionCommand,
  GetPermissionRequest$,
  GetPermissionResponse$,
  GetResourcePolicies$,
  GetResourcePoliciesCommand,
  GetResourcePoliciesRequest$,
  GetResourcePoliciesResponse$,
  GetResourceShareAssociations$,
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsRequest$,
  GetResourceShareAssociationsResponse$,
  GetResourceShareInvitations$,
  GetResourceShareInvitationsCommand,
  GetResourceShareInvitationsRequest$,
  GetResourceShareInvitationsResponse$,
  GetResourceShares$,
  GetResourceSharesCommand,
  GetResourceSharesRequest$,
  GetResourceSharesResponse$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  InvalidClientTokenException,
  InvalidClientTokenException$,
  InvalidMaxResultsException,
  InvalidMaxResultsException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPolicyException,
  InvalidPolicyException$,
  InvalidResourceTypeException,
  InvalidResourceTypeException$,
  InvalidStateTransitionException,
  InvalidStateTransitionException$,
  ListPendingInvitationResources$,
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesRequest$,
  ListPendingInvitationResourcesResponse$,
  ListPermissionAssociations$,
  ListPermissionAssociationsCommand,
  ListPermissionAssociationsRequest$,
  ListPermissionAssociationsResponse$,
  ListPermissionVersions$,
  ListPermissionVersionsCommand,
  ListPermissionVersionsRequest$,
  ListPermissionVersionsResponse$,
  ListPermissions$,
  ListPermissionsCommand,
  ListPermissionsRequest$,
  ListPermissionsResponse$,
  ListPrincipals$,
  ListPrincipalsCommand,
  ListPrincipalsRequest$,
  ListPrincipalsResponse$,
  ListReplacePermissionAssociationsWork$,
  ListReplacePermissionAssociationsWorkCommand,
  ListReplacePermissionAssociationsWorkRequest$,
  ListReplacePermissionAssociationsWorkResponse$,
  ListResourceSharePermissions$,
  ListResourceSharePermissionsCommand,
  ListResourceSharePermissionsRequest$,
  ListResourceSharePermissionsResponse$,
  ListResourceTypes$,
  ListResourceTypesCommand,
  ListResourceTypesRequest$,
  ListResourceTypesResponse$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesRequest$,
  ListResourcesResponse$,
  MalformedArnException,
  MalformedArnException$,
  MalformedPolicyTemplateException,
  MalformedPolicyTemplateException$,
  MissingRequiredParameterException,
  MissingRequiredParameterException$,
  OperationNotPermittedException,
  OperationNotPermittedException$,
  PermissionAlreadyExistsException,
  PermissionAlreadyExistsException$,
  PermissionFeatureSet,
  PermissionLimitExceededException,
  PermissionLimitExceededException$,
  PermissionStatus,
  PermissionType,
  PermissionTypeFilter,
  PermissionVersionsLimitExceededException,
  PermissionVersionsLimitExceededException$,
  Principal$,
  PromotePermissionCreatedFromPolicy$,
  PromotePermissionCreatedFromPolicyCommand,
  PromotePermissionCreatedFromPolicyRequest$,
  PromotePermissionCreatedFromPolicyResponse$,
  PromoteResourceShareCreatedFromPolicy$,
  PromoteResourceShareCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyRequest$,
  PromoteResourceShareCreatedFromPolicyResponse$,
  RAM,
  RAMClient,
  RAMServiceException,
  RejectResourceShareInvitation$,
  RejectResourceShareInvitationCommand,
  RejectResourceShareInvitationRequest$,
  RejectResourceShareInvitationResponse$,
  ReplacePermissionAssociations$,
  ReplacePermissionAssociationsCommand,
  ReplacePermissionAssociationsRequest$,
  ReplacePermissionAssociationsResponse$,
  ReplacePermissionAssociationsWork$,
  ReplacePermissionAssociationsWorkStatus,
  Resource$,
  ResourceArnNotFoundException,
  ResourceArnNotFoundException$,
  ResourceOwner,
  ResourceRegionScope,
  ResourceRegionScopeFilter,
  ResourceShare$,
  ResourceShareAssociation$,
  ResourceShareAssociationStatus,
  ResourceShareAssociationType,
  ResourceShareFeatureSet,
  ResourceShareInvitation$,
  ResourceShareInvitationAlreadyAcceptedException,
  ResourceShareInvitationAlreadyAcceptedException$,
  ResourceShareInvitationAlreadyRejectedException,
  ResourceShareInvitationAlreadyRejectedException$,
  ResourceShareInvitationArnNotFoundException,
  ResourceShareInvitationArnNotFoundException$,
  ResourceShareInvitationExpiredException,
  ResourceShareInvitationExpiredException$,
  ResourceShareInvitationStatus,
  ResourceShareLimitExceededException,
  ResourceShareLimitExceededException$,
  ResourceSharePermissionDetail$,
  ResourceSharePermissionSummary$,
  ResourceShareStatus,
  ResourceStatus,
  ServerInternalException,
  ServerInternalException$,
  ServiceNameAndResourceType$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SetDefaultPermissionVersion$,
  SetDefaultPermissionVersionCommand,
  SetDefaultPermissionVersionRequest$,
  SetDefaultPermissionVersionResponse$,
  Tag$,
  TagFilter$,
  TagLimitExceededException,
  TagLimitExceededException$,
  TagPolicyViolationException,
  TagPolicyViolationException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UnknownResourceException,
  UnknownResourceException$,
  UnmatchedPolicyPermissionException,
  UnmatchedPolicyPermissionException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateResourceShare$,
  UpdateResourceShareCommand,
  UpdateResourceShareRequest$,
  UpdateResourceShareResponse$,
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
assert(typeof AcceptResourceShareInvitation$ === "object");
assert(typeof AssociateResourceShareCommand === "function");
assert(typeof AssociateResourceShare$ === "object");
assert(typeof AssociateResourceSharePermissionCommand === "function");
assert(typeof AssociateResourceSharePermission$ === "object");
assert(typeof CreatePermissionCommand === "function");
assert(typeof CreatePermission$ === "object");
assert(typeof CreatePermissionVersionCommand === "function");
assert(typeof CreatePermissionVersion$ === "object");
assert(typeof CreateResourceShareCommand === "function");
assert(typeof CreateResourceShare$ === "object");
assert(typeof DeletePermissionCommand === "function");
assert(typeof DeletePermission$ === "object");
assert(typeof DeletePermissionVersionCommand === "function");
assert(typeof DeletePermissionVersion$ === "object");
assert(typeof DeleteResourceShareCommand === "function");
assert(typeof DeleteResourceShare$ === "object");
assert(typeof DisassociateResourceShareCommand === "function");
assert(typeof DisassociateResourceShare$ === "object");
assert(typeof DisassociateResourceSharePermissionCommand === "function");
assert(typeof DisassociateResourceSharePermission$ === "object");
assert(typeof EnableSharingWithAwsOrganizationCommand === "function");
assert(typeof EnableSharingWithAwsOrganization$ === "object");
assert(typeof GetPermissionCommand === "function");
assert(typeof GetPermission$ === "object");
assert(typeof GetResourcePoliciesCommand === "function");
assert(typeof GetResourcePolicies$ === "object");
assert(typeof GetResourceShareAssociationsCommand === "function");
assert(typeof GetResourceShareAssociations$ === "object");
assert(typeof GetResourceShareInvitationsCommand === "function");
assert(typeof GetResourceShareInvitations$ === "object");
assert(typeof GetResourceSharesCommand === "function");
assert(typeof GetResourceShares$ === "object");
assert(typeof ListPendingInvitationResourcesCommand === "function");
assert(typeof ListPendingInvitationResources$ === "object");
assert(typeof ListPermissionAssociationsCommand === "function");
assert(typeof ListPermissionAssociations$ === "object");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListPermissions$ === "object");
assert(typeof ListPermissionVersionsCommand === "function");
assert(typeof ListPermissionVersions$ === "object");
assert(typeof ListPrincipalsCommand === "function");
assert(typeof ListPrincipals$ === "object");
assert(typeof ListReplacePermissionAssociationsWorkCommand === "function");
assert(typeof ListReplacePermissionAssociationsWork$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof ListResourceSharePermissionsCommand === "function");
assert(typeof ListResourceSharePermissions$ === "object");
assert(typeof ListResourceTypesCommand === "function");
assert(typeof ListResourceTypes$ === "object");
assert(typeof PromotePermissionCreatedFromPolicyCommand === "function");
assert(typeof PromotePermissionCreatedFromPolicy$ === "object");
assert(typeof PromoteResourceShareCreatedFromPolicyCommand === "function");
assert(typeof PromoteResourceShareCreatedFromPolicy$ === "object");
assert(typeof RejectResourceShareInvitationCommand === "function");
assert(typeof RejectResourceShareInvitation$ === "object");
assert(typeof ReplacePermissionAssociationsCommand === "function");
assert(typeof ReplacePermissionAssociations$ === "object");
assert(typeof SetDefaultPermissionVersionCommand === "function");
assert(typeof SetDefaultPermissionVersion$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateResourceShareCommand === "function");
assert(typeof UpdateResourceShare$ === "object");
// structural schemas
assert(typeof AcceptResourceShareInvitationRequest$ === "object");
assert(typeof AcceptResourceShareInvitationResponse$ === "object");
assert(typeof AssociatedPermission$ === "object");
assert(typeof AssociateResourceSharePermissionRequest$ === "object");
assert(typeof AssociateResourceSharePermissionResponse$ === "object");
assert(typeof AssociateResourceShareRequest$ === "object");
assert(typeof AssociateResourceShareResponse$ === "object");
assert(typeof CreatePermissionRequest$ === "object");
assert(typeof CreatePermissionResponse$ === "object");
assert(typeof CreatePermissionVersionRequest$ === "object");
assert(typeof CreatePermissionVersionResponse$ === "object");
assert(typeof CreateResourceShareRequest$ === "object");
assert(typeof CreateResourceShareResponse$ === "object");
assert(typeof DeletePermissionRequest$ === "object");
assert(typeof DeletePermissionResponse$ === "object");
assert(typeof DeletePermissionVersionRequest$ === "object");
assert(typeof DeletePermissionVersionResponse$ === "object");
assert(typeof DeleteResourceShareRequest$ === "object");
assert(typeof DeleteResourceShareResponse$ === "object");
assert(typeof DisassociateResourceSharePermissionRequest$ === "object");
assert(typeof DisassociateResourceSharePermissionResponse$ === "object");
assert(typeof DisassociateResourceShareRequest$ === "object");
assert(typeof DisassociateResourceShareResponse$ === "object");
assert(typeof EnableSharingWithAwsOrganizationRequest$ === "object");
assert(typeof EnableSharingWithAwsOrganizationResponse$ === "object");
assert(typeof GetPermissionRequest$ === "object");
assert(typeof GetPermissionResponse$ === "object");
assert(typeof GetResourcePoliciesRequest$ === "object");
assert(typeof GetResourcePoliciesResponse$ === "object");
assert(typeof GetResourceShareAssociationsRequest$ === "object");
assert(typeof GetResourceShareAssociationsResponse$ === "object");
assert(typeof GetResourceShareInvitationsRequest$ === "object");
assert(typeof GetResourceShareInvitationsResponse$ === "object");
assert(typeof GetResourceSharesRequest$ === "object");
assert(typeof GetResourceSharesResponse$ === "object");
assert(typeof ListPendingInvitationResourcesRequest$ === "object");
assert(typeof ListPendingInvitationResourcesResponse$ === "object");
assert(typeof ListPermissionAssociationsRequest$ === "object");
assert(typeof ListPermissionAssociationsResponse$ === "object");
assert(typeof ListPermissionsRequest$ === "object");
assert(typeof ListPermissionsResponse$ === "object");
assert(typeof ListPermissionVersionsRequest$ === "object");
assert(typeof ListPermissionVersionsResponse$ === "object");
assert(typeof ListPrincipalsRequest$ === "object");
assert(typeof ListPrincipalsResponse$ === "object");
assert(typeof ListReplacePermissionAssociationsWorkRequest$ === "object");
assert(typeof ListReplacePermissionAssociationsWorkResponse$ === "object");
assert(typeof ListResourceSharePermissionsRequest$ === "object");
assert(typeof ListResourceSharePermissionsResponse$ === "object");
assert(typeof ListResourcesRequest$ === "object");
assert(typeof ListResourcesResponse$ === "object");
assert(typeof ListResourceTypesRequest$ === "object");
assert(typeof ListResourceTypesResponse$ === "object");
assert(typeof Principal$ === "object");
assert(typeof PromotePermissionCreatedFromPolicyRequest$ === "object");
assert(typeof PromotePermissionCreatedFromPolicyResponse$ === "object");
assert(typeof PromoteResourceShareCreatedFromPolicyRequest$ === "object");
assert(typeof PromoteResourceShareCreatedFromPolicyResponse$ === "object");
assert(typeof RejectResourceShareInvitationRequest$ === "object");
assert(typeof RejectResourceShareInvitationResponse$ === "object");
assert(typeof ReplacePermissionAssociationsRequest$ === "object");
assert(typeof ReplacePermissionAssociationsResponse$ === "object");
assert(typeof ReplacePermissionAssociationsWork$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceShare$ === "object");
assert(typeof ResourceShareAssociation$ === "object");
assert(typeof ResourceShareInvitation$ === "object");
assert(typeof ResourceSharePermissionDetail$ === "object");
assert(typeof ResourceSharePermissionSummary$ === "object");
assert(typeof ServiceNameAndResourceType$ === "object");
assert(typeof SetDefaultPermissionVersionRequest$ === "object");
assert(typeof SetDefaultPermissionVersionResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateResourceShareRequest$ === "object");
assert(typeof UpdateResourceShareResponse$ === "object");
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
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InvalidClientTokenException.prototype instanceof RAMServiceException);
assert(typeof InvalidClientTokenException$ === "object");
assert(InvalidMaxResultsException.prototype instanceof RAMServiceException);
assert(typeof InvalidMaxResultsException$ === "object");
assert(InvalidNextTokenException.prototype instanceof RAMServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof RAMServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPolicyException.prototype instanceof RAMServiceException);
assert(typeof InvalidPolicyException$ === "object");
assert(InvalidResourceTypeException.prototype instanceof RAMServiceException);
assert(typeof InvalidResourceTypeException$ === "object");
assert(InvalidStateTransitionException.prototype instanceof RAMServiceException);
assert(typeof InvalidStateTransitionException$ === "object");
assert(MalformedArnException.prototype instanceof RAMServiceException);
assert(typeof MalformedArnException$ === "object");
assert(MalformedPolicyTemplateException.prototype instanceof RAMServiceException);
assert(typeof MalformedPolicyTemplateException$ === "object");
assert(MissingRequiredParameterException.prototype instanceof RAMServiceException);
assert(typeof MissingRequiredParameterException$ === "object");
assert(OperationNotPermittedException.prototype instanceof RAMServiceException);
assert(typeof OperationNotPermittedException$ === "object");
assert(PermissionAlreadyExistsException.prototype instanceof RAMServiceException);
assert(typeof PermissionAlreadyExistsException$ === "object");
assert(PermissionLimitExceededException.prototype instanceof RAMServiceException);
assert(typeof PermissionLimitExceededException$ === "object");
assert(PermissionVersionsLimitExceededException.prototype instanceof RAMServiceException);
assert(typeof PermissionVersionsLimitExceededException$ === "object");
assert(ResourceArnNotFoundException.prototype instanceof RAMServiceException);
assert(typeof ResourceArnNotFoundException$ === "object");
assert(ResourceShareInvitationAlreadyAcceptedException.prototype instanceof RAMServiceException);
assert(typeof ResourceShareInvitationAlreadyAcceptedException$ === "object");
assert(ResourceShareInvitationAlreadyRejectedException.prototype instanceof RAMServiceException);
assert(typeof ResourceShareInvitationAlreadyRejectedException$ === "object");
assert(ResourceShareInvitationArnNotFoundException.prototype instanceof RAMServiceException);
assert(typeof ResourceShareInvitationArnNotFoundException$ === "object");
assert(ResourceShareInvitationExpiredException.prototype instanceof RAMServiceException);
assert(typeof ResourceShareInvitationExpiredException$ === "object");
assert(ResourceShareLimitExceededException.prototype instanceof RAMServiceException);
assert(typeof ResourceShareLimitExceededException$ === "object");
assert(ServerInternalException.prototype instanceof RAMServiceException);
assert(typeof ServerInternalException$ === "object");
assert(ServiceUnavailableException.prototype instanceof RAMServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TagLimitExceededException.prototype instanceof RAMServiceException);
assert(typeof TagLimitExceededException$ === "object");
assert(TagPolicyViolationException.prototype instanceof RAMServiceException);
assert(typeof TagPolicyViolationException$ === "object");
assert(ThrottlingException.prototype instanceof RAMServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnknownResourceException.prototype instanceof RAMServiceException);
assert(typeof UnknownResourceException$ === "object");
assert(UnmatchedPolicyPermissionException.prototype instanceof RAMServiceException);
assert(typeof UnmatchedPolicyPermissionException$ === "object");
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
