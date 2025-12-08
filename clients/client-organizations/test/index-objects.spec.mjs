import {
  AWSOrganizationsNotInUseException,
  AcceptHandshakeCommand,
  AccessDeniedException,
  AccessDeniedForDependencyException,
  AccessDeniedForDependencyExceptionReason,
  AccountAlreadyClosedException,
  AccountAlreadyRegisteredException,
  AccountJoinedMethod,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountOwnerNotVerifiedException,
  AccountState,
  AccountStatus,
  ActionType,
  AlreadyInOrganizationException,
  AttachPolicyCommand,
  CancelHandshakeCommand,
  ChildNotFoundException,
  ChildType,
  CloseAccountCommand,
  ConcurrentModificationException,
  ConflictException,
  ConstraintViolationException,
  ConstraintViolationExceptionReason,
  CreateAccountCommand,
  CreateAccountFailureReason,
  CreateAccountState,
  CreateAccountStatusNotFoundException,
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
  DestinationParentNotFoundException,
  DetachPolicyCommand,
  DisableAWSServiceAccessCommand,
  DisablePolicyTypeCommand,
  DuplicateAccountException,
  DuplicateHandshakeException,
  DuplicateOrganizationalUnitException,
  DuplicatePolicyAttachmentException,
  DuplicatePolicyException,
  EffectivePolicyNotFoundException,
  EffectivePolicyType,
  EnableAWSServiceAccessCommand,
  EnableAllFeaturesCommand,
  EnablePolicyTypeCommand,
  FinalizingOrganizationException,
  HandshakeAlreadyInStateException,
  HandshakeConstraintViolationException,
  HandshakeConstraintViolationExceptionReason,
  HandshakeNotFoundException,
  HandshakePartyType,
  HandshakeResourceType,
  HandshakeState,
  IAMUserAccessToBilling,
  InvalidHandshakeTransitionException,
  InvalidInputException,
  InvalidInputExceptionReason,
  InvalidResponsibilityTransferTransitionException,
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
  MalformedPolicyDocumentException,
  MasterCannotLeaveOrganizationException,
  MoveAccountCommand,
  OrganizationFeatureSet,
  OrganizationNotEmptyException,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotFoundException,
  Organizations,
  OrganizationsClient,
  OrganizationsServiceException,
  ParentNotFoundException,
  ParentType,
  PolicyChangesInProgressException,
  PolicyInUseException,
  PolicyNotAttachedException,
  PolicyNotFoundException,
  PolicyType,
  PolicyTypeAlreadyEnabledException,
  PolicyTypeNotAvailableForOrganizationException,
  PolicyTypeNotEnabledException,
  PolicyTypeStatus,
  PutResourcePolicyCommand,
  RegisterDelegatedAdministratorCommand,
  RemoveAccountFromOrganizationCommand,
  ResourcePolicyNotFoundException,
  ResponsibilityTransferAlreadyInStatusException,
  ResponsibilityTransferNotFoundException,
  ResponsibilityTransferStatus,
  ResponsibilityTransferType,
  RootNotFoundException,
  ServiceException,
  SourceParentNotFoundException,
  TagResourceCommand,
  TargetNotFoundException,
  TargetType,
  TerminateResponsibilityTransferCommand,
  TooManyRequestsException,
  UnsupportedAPIEndpointException,
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
assert(typeof AccessDeniedForDependencyExceptionReason === "object");
assert(typeof AccountJoinedMethod === "object");
assert(typeof AccountState === "object");
assert(typeof AccountStatus === "object");
assert(typeof ActionType === "object");
assert(typeof ChildType === "object");
assert(typeof ConstraintViolationExceptionReason === "object");
assert(typeof CreateAccountFailureReason === "object");
assert(typeof CreateAccountState === "object");
assert(typeof EffectivePolicyType === "object");
assert(typeof HandshakeConstraintViolationExceptionReason === "object");
assert(typeof HandshakePartyType === "object");
assert(typeof HandshakeResourceType === "object");
assert(typeof HandshakeState === "object");
assert(typeof IAMUserAccessToBilling === "object");
assert(typeof InvalidInputExceptionReason === "object");
assert(typeof OrganizationFeatureSet === "object");
assert(typeof ParentType === "object");
assert(typeof PolicyType === "object");
assert(typeof PolicyTypeStatus === "object");
assert(typeof ResponsibilityTransferStatus === "object");
assert(typeof ResponsibilityTransferType === "object");
assert(typeof TargetType === "object");
// errors
assert(AccessDeniedException.prototype instanceof OrganizationsServiceException);
assert(AccessDeniedForDependencyException.prototype instanceof OrganizationsServiceException);
assert(AccountAlreadyClosedException.prototype instanceof OrganizationsServiceException);
assert(AccountAlreadyRegisteredException.prototype instanceof OrganizationsServiceException);
assert(AccountNotFoundException.prototype instanceof OrganizationsServiceException);
assert(AccountNotRegisteredException.prototype instanceof OrganizationsServiceException);
assert(AccountOwnerNotVerifiedException.prototype instanceof OrganizationsServiceException);
assert(AlreadyInOrganizationException.prototype instanceof OrganizationsServiceException);
assert(AWSOrganizationsNotInUseException.prototype instanceof OrganizationsServiceException);
assert(ChildNotFoundException.prototype instanceof OrganizationsServiceException);
assert(ConcurrentModificationException.prototype instanceof OrganizationsServiceException);
assert(ConflictException.prototype instanceof OrganizationsServiceException);
assert(ConstraintViolationException.prototype instanceof OrganizationsServiceException);
assert(CreateAccountStatusNotFoundException.prototype instanceof OrganizationsServiceException);
assert(DestinationParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(DuplicateAccountException.prototype instanceof OrganizationsServiceException);
assert(DuplicateHandshakeException.prototype instanceof OrganizationsServiceException);
assert(DuplicateOrganizationalUnitException.prototype instanceof OrganizationsServiceException);
assert(DuplicatePolicyAttachmentException.prototype instanceof OrganizationsServiceException);
assert(DuplicatePolicyException.prototype instanceof OrganizationsServiceException);
assert(EffectivePolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(FinalizingOrganizationException.prototype instanceof OrganizationsServiceException);
assert(HandshakeAlreadyInStateException.prototype instanceof OrganizationsServiceException);
assert(HandshakeConstraintViolationException.prototype instanceof OrganizationsServiceException);
assert(HandshakeNotFoundException.prototype instanceof OrganizationsServiceException);
assert(InvalidHandshakeTransitionException.prototype instanceof OrganizationsServiceException);
assert(InvalidInputException.prototype instanceof OrganizationsServiceException);
assert(InvalidResponsibilityTransferTransitionException.prototype instanceof OrganizationsServiceException);
assert(MalformedPolicyDocumentException.prototype instanceof OrganizationsServiceException);
assert(MasterCannotLeaveOrganizationException.prototype instanceof OrganizationsServiceException);
assert(OrganizationalUnitNotEmptyException.prototype instanceof OrganizationsServiceException);
assert(OrganizationalUnitNotFoundException.prototype instanceof OrganizationsServiceException);
assert(OrganizationNotEmptyException.prototype instanceof OrganizationsServiceException);
assert(ParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(PolicyChangesInProgressException.prototype instanceof OrganizationsServiceException);
assert(PolicyInUseException.prototype instanceof OrganizationsServiceException);
assert(PolicyNotAttachedException.prototype instanceof OrganizationsServiceException);
assert(PolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(PolicyTypeAlreadyEnabledException.prototype instanceof OrganizationsServiceException);
assert(PolicyTypeNotAvailableForOrganizationException.prototype instanceof OrganizationsServiceException);
assert(PolicyTypeNotEnabledException.prototype instanceof OrganizationsServiceException);
assert(ResourcePolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(ResponsibilityTransferAlreadyInStatusException.prototype instanceof OrganizationsServiceException);
assert(ResponsibilityTransferNotFoundException.prototype instanceof OrganizationsServiceException);
assert(RootNotFoundException.prototype instanceof OrganizationsServiceException);
assert(ServiceException.prototype instanceof OrganizationsServiceException);
assert(SourceParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(TargetNotFoundException.prototype instanceof OrganizationsServiceException);
assert(TooManyRequestsException.prototype instanceof OrganizationsServiceException);
assert(UnsupportedAPIEndpointException.prototype instanceof OrganizationsServiceException);
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
