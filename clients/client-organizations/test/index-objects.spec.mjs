import {
  AcceptHandshakeCommand,
  AccountJoinedMethod,
  AccountState,
  AccountStatus,
  ActionType,
  AttachPolicyCommand,
  CancelHandshakeCommand,
  ChildType,
  CloseAccountCommand,
  CreateAccountCommand,
  CreateAccountFailureReason,
  CreateAccountState,
  CreateGovCloudAccountCommand,
  CreateOrganizationCommand,
  CreateOrganizationalUnitCommand,
  CreatePolicyCommand,
  DeclineHandshakeCommand,
  DeleteOrganizationCommand,
  DeleteOrganizationalUnitCommand,
  DeletePolicyCommand,
  DeleteResourcePolicyCommand,
  DeregisterDelegatedAdministratorCommand,
  DescribeAccountCommand,
  DescribeCreateAccountStatusCommand,
  DescribeEffectivePolicyCommand,
  DescribeHandshakeCommand,
  DescribeOrganizationCommand,
  DescribeOrganizationalUnitCommand,
  DescribePolicyCommand,
  DescribeResourcePolicyCommand,
  DescribeResponsibilityTransferCommand,
  DetachPolicyCommand,
  DisableAWSServiceAccessCommand,
  DisablePolicyTypeCommand,
  EffectivePolicyType,
  EnableAWSServiceAccessCommand,
  EnableAllFeaturesCommand,
  EnablePolicyTypeCommand,
  HandshakePartyType,
  HandshakeResourceType,
  HandshakeState,
  IAMUserAccessToBilling,
  InviteAccountToOrganizationCommand,
  InviteOrganizationToTransferResponsibilityCommand,
  LeaveOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommand,
  ListAccountsCommand,
  ListAccountsForParentCommand,
  ListAccountsWithInvalidEffectivePolicyCommand,
  ListChildrenCommand,
  ListCreateAccountStatusCommand,
  ListDelegatedAdministratorsCommand,
  ListDelegatedServicesForAccountCommand,
  ListEffectivePolicyValidationErrorsCommand,
  ListHandshakesForAccountCommand,
  ListHandshakesForOrganizationCommand,
  ListInboundResponsibilityTransfersCommand,
  ListOrganizationalUnitsForParentCommand,
  ListOutboundResponsibilityTransfersCommand,
  ListParentsCommand,
  ListPoliciesCommand,
  ListPoliciesForTargetCommand,
  ListRootsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  MoveAccountCommand,
  OrganizationFeatureSet,
  Organizations,
  OrganizationsClient,
  OrganizationsServiceException,
  ParentType,
  PolicyType,
  PolicyTypeStatus,
  PutResourcePolicyCommand,
  RegisterDelegatedAdministratorCommand,
  RemoveAccountFromOrganizationCommand,
  ResponsibilityTransferStatus,
  ResponsibilityTransferType,
  TagResourceCommand,
  TargetType,
  TerminateResponsibilityTransferCommand,
  UntagResourceCommand,
  UpdateOrganizationalUnitCommand,
  UpdatePolicyCommand,
  UpdateResponsibilityTransferCommand,
  paginateListAWSServiceAccessForOrganization,
  paginateListAccounts,
  paginateListAccountsForParent,
  paginateListAccountsWithInvalidEffectivePolicy,
  paginateListChildren,
  paginateListCreateAccountStatus,
  paginateListDelegatedAdministrators,
  paginateListDelegatedServicesForAccount,
  paginateListEffectivePolicyValidationErrors,
  paginateListHandshakesForAccount,
  paginateListHandshakesForOrganization,
  paginateListOrganizationalUnitsForParent,
  paginateListParents,
  paginateListPolicies,
  paginateListPoliciesForTarget,
  paginateListRoots,
  paginateListTagsForResource,
  paginateListTargetsForPolicy,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OrganizationsClient === "function");
assert(typeof Organizations === "function");
// commands
assert(typeof AcceptHandshakeCommand === "function");
assert(typeof AttachPolicyCommand === "function");
assert(typeof CancelHandshakeCommand === "function");
assert(typeof CloseAccountCommand === "function");
assert(typeof CreateAccountCommand === "function");
assert(typeof CreateGovCloudAccountCommand === "function");
assert(typeof CreateOrganizationCommand === "function");
assert(typeof CreateOrganizationalUnitCommand === "function");
assert(typeof CreatePolicyCommand === "function");
assert(typeof DeclineHandshakeCommand === "function");
assert(typeof DeleteOrganizationCommand === "function");
assert(typeof DeleteOrganizationalUnitCommand === "function");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeregisterDelegatedAdministratorCommand === "function");
assert(typeof DescribeAccountCommand === "function");
assert(typeof DescribeCreateAccountStatusCommand === "function");
assert(typeof DescribeEffectivePolicyCommand === "function");
assert(typeof DescribeHandshakeCommand === "function");
assert(typeof DescribeOrganizationCommand === "function");
assert(typeof DescribeOrganizationalUnitCommand === "function");
assert(typeof DescribePolicyCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResponsibilityTransferCommand === "function");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DisableAWSServiceAccessCommand === "function");
assert(typeof DisablePolicyTypeCommand === "function");
assert(typeof EnableAllFeaturesCommand === "function");
assert(typeof EnableAWSServiceAccessCommand === "function");
assert(typeof EnablePolicyTypeCommand === "function");
assert(typeof InviteAccountToOrganizationCommand === "function");
assert(typeof InviteOrganizationToTransferResponsibilityCommand === "function");
assert(typeof LeaveOrganizationCommand === "function");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListAccountsForParentCommand === "function");
assert(typeof ListAccountsWithInvalidEffectivePolicyCommand === "function");
assert(typeof ListAWSServiceAccessForOrganizationCommand === "function");
assert(typeof ListChildrenCommand === "function");
assert(typeof ListCreateAccountStatusCommand === "function");
assert(typeof ListDelegatedAdministratorsCommand === "function");
assert(typeof ListDelegatedServicesForAccountCommand === "function");
assert(typeof ListEffectivePolicyValidationErrorsCommand === "function");
assert(typeof ListHandshakesForAccountCommand === "function");
assert(typeof ListHandshakesForOrganizationCommand === "function");
assert(typeof ListInboundResponsibilityTransfersCommand === "function");
assert(typeof ListOrganizationalUnitsForParentCommand === "function");
assert(typeof ListOutboundResponsibilityTransfersCommand === "function");
assert(typeof ListParentsCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPoliciesForTargetCommand === "function");
assert(typeof ListRootsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetsForPolicyCommand === "function");
assert(typeof MoveAccountCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RegisterDelegatedAdministratorCommand === "function");
assert(typeof RemoveAccountFromOrganizationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateResponsibilityTransferCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateOrganizationalUnitCommand === "function");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdateResponsibilityTransferCommand === "function");
// enums
assert(typeof AccountJoinedMethod === "object");
assert(typeof AccountState === "object");
assert(typeof AccountStatus === "object");
assert(typeof ActionType === "object");
assert(typeof ChildType === "object");
assert(typeof CreateAccountFailureReason === "object");
assert(typeof CreateAccountState === "object");
assert(typeof EffectivePolicyType === "object");
assert(typeof HandshakePartyType === "object");
assert(typeof HandshakeResourceType === "object");
assert(typeof HandshakeState === "object");
assert(typeof IAMUserAccessToBilling === "object");
assert(typeof OrganizationFeatureSet === "object");
assert(typeof ParentType === "object");
assert(typeof PolicyType === "object");
assert(typeof PolicyTypeStatus === "object");
assert(typeof ResponsibilityTransferStatus === "object");
assert(typeof ResponsibilityTransferType === "object");
assert(typeof TargetType === "object");
// errors
assert(OrganizationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAWSServiceAccessForOrganization === "function");
assert(typeof paginateListAccounts === "function");
assert(typeof paginateListAccountsForParent === "function");
assert(typeof paginateListAccountsWithInvalidEffectivePolicy === "function");
assert(typeof paginateListChildren === "function");
assert(typeof paginateListCreateAccountStatus === "function");
assert(typeof paginateListDelegatedAdministrators === "function");
assert(typeof paginateListDelegatedServicesForAccount === "function");
assert(typeof paginateListEffectivePolicyValidationErrors === "function");
assert(typeof paginateListHandshakesForAccount === "function");
assert(typeof paginateListHandshakesForOrganization === "function");
assert(typeof paginateListOrganizationalUnitsForParent === "function");
assert(typeof paginateListParents === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPoliciesForTarget === "function");
assert(typeof paginateListRoots === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListTargetsForPolicy === "function");
console.log(`Organizations index test passed.`);
