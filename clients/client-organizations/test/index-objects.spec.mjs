import {
  AWSOrganizationsNotInUseException,
  AWSOrganizationsNotInUseException$,
  AcceptHandshake$,
  AcceptHandshakeCommand,
  AcceptHandshakeRequest$,
  AcceptHandshakeResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedForDependencyException,
  AccessDeniedForDependencyException$,
  AccessDeniedForDependencyExceptionReason,
  Account$,
  AccountAlreadyClosedException,
  AccountAlreadyClosedException$,
  AccountAlreadyRegisteredException,
  AccountAlreadyRegisteredException$,
  AccountJoinedMethod,
  AccountNotFoundException,
  AccountNotFoundException$,
  AccountNotRegisteredException,
  AccountNotRegisteredException$,
  AccountOwnerNotVerifiedException,
  AccountOwnerNotVerifiedException$,
  AccountState,
  AccountStatus,
  ActionType,
  AlreadyInOrganizationException,
  AlreadyInOrganizationException$,
  AttachPolicy$,
  AttachPolicyCommand,
  AttachPolicyRequest$,
  CancelHandshake$,
  CancelHandshakeCommand,
  CancelHandshakeRequest$,
  CancelHandshakeResponse$,
  Child$,
  ChildNotFoundException,
  ChildNotFoundException$,
  ChildType,
  CloseAccount$,
  CloseAccountCommand,
  CloseAccountRequest$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  ConstraintViolationException,
  ConstraintViolationException$,
  ConstraintViolationExceptionReason,
  CreateAccount$,
  CreateAccountCommand,
  CreateAccountFailureReason,
  CreateAccountRequest$,
  CreateAccountResponse$,
  CreateAccountState,
  CreateAccountStatus$,
  CreateAccountStatusNotFoundException,
  CreateAccountStatusNotFoundException$,
  CreateGovCloudAccount$,
  CreateGovCloudAccountCommand,
  CreateGovCloudAccountRequest$,
  CreateGovCloudAccountResponse$,
  CreateOrganization$,
  CreateOrganizationCommand,
  CreateOrganizationRequest$,
  CreateOrganizationResponse$,
  CreateOrganizationalUnit$,
  CreateOrganizationalUnitCommand,
  CreateOrganizationalUnitRequest$,
  CreateOrganizationalUnitResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  DeclineHandshake$,
  DeclineHandshakeCommand,
  DeclineHandshakeRequest$,
  DeclineHandshakeResponse$,
  DelegatedAdministrator$,
  DelegatedService$,
  DeleteOrganization$,
  DeleteOrganizationCommand,
  DeleteOrganizationalUnit$,
  DeleteOrganizationalUnitCommand,
  DeleteOrganizationalUnitRequest$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeregisterDelegatedAdministrator$,
  DeregisterDelegatedAdministratorCommand,
  DeregisterDelegatedAdministratorRequest$,
  DescribeAccount$,
  DescribeAccountCommand,
  DescribeAccountRequest$,
  DescribeAccountResponse$,
  DescribeCreateAccountStatus$,
  DescribeCreateAccountStatusCommand,
  DescribeCreateAccountStatusRequest$,
  DescribeCreateAccountStatusResponse$,
  DescribeEffectivePolicy$,
  DescribeEffectivePolicyCommand,
  DescribeEffectivePolicyRequest$,
  DescribeEffectivePolicyResponse$,
  DescribeHandshake$,
  DescribeHandshakeCommand,
  DescribeHandshakeRequest$,
  DescribeHandshakeResponse$,
  DescribeOrganization$,
  DescribeOrganizationCommand,
  DescribeOrganizationResponse$,
  DescribeOrganizationalUnit$,
  DescribeOrganizationalUnitCommand,
  DescribeOrganizationalUnitRequest$,
  DescribeOrganizationalUnitResponse$,
  DescribePolicy$,
  DescribePolicyCommand,
  DescribePolicyRequest$,
  DescribePolicyResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyResponse$,
  DescribeResponsibilityTransfer$,
  DescribeResponsibilityTransferCommand,
  DescribeResponsibilityTransferRequest$,
  DescribeResponsibilityTransferResponse$,
  DestinationParentNotFoundException,
  DestinationParentNotFoundException$,
  DetachPolicy$,
  DetachPolicyCommand,
  DetachPolicyRequest$,
  DisableAWSServiceAccess$,
  DisableAWSServiceAccessCommand,
  DisableAWSServiceAccessRequest$,
  DisablePolicyType$,
  DisablePolicyTypeCommand,
  DisablePolicyTypeRequest$,
  DisablePolicyTypeResponse$,
  DuplicateAccountException,
  DuplicateAccountException$,
  DuplicateHandshakeException,
  DuplicateHandshakeException$,
  DuplicateOrganizationalUnitException,
  DuplicateOrganizationalUnitException$,
  DuplicatePolicyAttachmentException,
  DuplicatePolicyAttachmentException$,
  DuplicatePolicyException,
  DuplicatePolicyException$,
  EffectivePolicy$,
  EffectivePolicyNotFoundException,
  EffectivePolicyNotFoundException$,
  EffectivePolicyType,
  EffectivePolicyValidationError$,
  EnableAWSServiceAccess$,
  EnableAWSServiceAccessCommand,
  EnableAWSServiceAccessRequest$,
  EnableAllFeatures$,
  EnableAllFeaturesCommand,
  EnableAllFeaturesRequest$,
  EnableAllFeaturesResponse$,
  EnablePolicyType$,
  EnablePolicyTypeCommand,
  EnablePolicyTypeRequest$,
  EnablePolicyTypeResponse$,
  EnabledServicePrincipal$,
  FinalizingOrganizationException,
  FinalizingOrganizationException$,
  Handshake$,
  HandshakeAlreadyInStateException,
  HandshakeAlreadyInStateException$,
  HandshakeConstraintViolationException,
  HandshakeConstraintViolationException$,
  HandshakeConstraintViolationExceptionReason,
  HandshakeFilter$,
  HandshakeNotFoundException,
  HandshakeNotFoundException$,
  HandshakeParty$,
  HandshakePartyType,
  HandshakeResource$,
  HandshakeResourceType,
  HandshakeState,
  IAMUserAccessToBilling,
  InvalidHandshakeTransitionException,
  InvalidHandshakeTransitionException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidInputExceptionReason,
  InvalidResponsibilityTransferTransitionException,
  InvalidResponsibilityTransferTransitionException$,
  InviteAccountToOrganization$,
  InviteAccountToOrganizationCommand,
  InviteAccountToOrganizationRequest$,
  InviteAccountToOrganizationResponse$,
  InviteOrganizationToTransferResponsibility$,
  InviteOrganizationToTransferResponsibilityCommand,
  InviteOrganizationToTransferResponsibilityRequest$,
  InviteOrganizationToTransferResponsibilityResponse$,
  LeaveOrganization$,
  LeaveOrganizationCommand,
  ListAWSServiceAccessForOrganization$,
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationRequest$,
  ListAWSServiceAccessForOrganizationResponse$,
  ListAccounts$,
  ListAccountsCommand,
  ListAccountsForParent$,
  ListAccountsForParentCommand,
  ListAccountsForParentRequest$,
  ListAccountsForParentResponse$,
  ListAccountsRequest$,
  ListAccountsResponse$,
  ListAccountsWithInvalidEffectivePolicy$,
  ListAccountsWithInvalidEffectivePolicyCommand,
  ListAccountsWithInvalidEffectivePolicyRequest$,
  ListAccountsWithInvalidEffectivePolicyResponse$,
  ListChildren$,
  ListChildrenCommand,
  ListChildrenRequest$,
  ListChildrenResponse$,
  ListCreateAccountStatus$,
  ListCreateAccountStatusCommand,
  ListCreateAccountStatusRequest$,
  ListCreateAccountStatusResponse$,
  ListDelegatedAdministrators$,
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsRequest$,
  ListDelegatedAdministratorsResponse$,
  ListDelegatedServicesForAccount$,
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountRequest$,
  ListDelegatedServicesForAccountResponse$,
  ListEffectivePolicyValidationErrors$,
  ListEffectivePolicyValidationErrorsCommand,
  ListEffectivePolicyValidationErrorsRequest$,
  ListEffectivePolicyValidationErrorsResponse$,
  ListHandshakesForAccount$,
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountRequest$,
  ListHandshakesForAccountResponse$,
  ListHandshakesForOrganization$,
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationRequest$,
  ListHandshakesForOrganizationResponse$,
  ListInboundResponsibilityTransfers$,
  ListInboundResponsibilityTransfersCommand,
  ListInboundResponsibilityTransfersRequest$,
  ListInboundResponsibilityTransfersResponse$,
  ListOrganizationalUnitsForParent$,
  ListOrganizationalUnitsForParentCommand,
  ListOrganizationalUnitsForParentRequest$,
  ListOrganizationalUnitsForParentResponse$,
  ListOutboundResponsibilityTransfers$,
  ListOutboundResponsibilityTransfersCommand,
  ListOutboundResponsibilityTransfersRequest$,
  ListOutboundResponsibilityTransfersResponse$,
  ListParents$,
  ListParentsCommand,
  ListParentsRequest$,
  ListParentsResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesForTarget$,
  ListPoliciesForTargetCommand,
  ListPoliciesForTargetRequest$,
  ListPoliciesForTargetResponse$,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListRoots$,
  ListRootsCommand,
  ListRootsRequest$,
  ListRootsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetsForPolicy$,
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyRequest$,
  ListTargetsForPolicyResponse$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  MasterCannotLeaveOrganizationException,
  MasterCannotLeaveOrganizationException$,
  MoveAccount$,
  MoveAccountCommand,
  MoveAccountRequest$,
  Organization$,
  OrganizationFeatureSet,
  OrganizationNotEmptyException,
  OrganizationNotEmptyException$,
  OrganizationalUnit$,
  OrganizationalUnitNotEmptyException,
  OrganizationalUnitNotEmptyException$,
  OrganizationalUnitNotFoundException,
  OrganizationalUnitNotFoundException$,
  Organizations,
  OrganizationsClient,
  OrganizationsServiceException,
  Parent$,
  ParentNotFoundException,
  ParentNotFoundException$,
  ParentType,
  Policy$,
  PolicyChangesInProgressException,
  PolicyChangesInProgressException$,
  PolicyInUseException,
  PolicyInUseException$,
  PolicyNotAttachedException,
  PolicyNotAttachedException$,
  PolicyNotFoundException,
  PolicyNotFoundException$,
  PolicySummary$,
  PolicyTargetSummary$,
  PolicyType,
  PolicyTypeAlreadyEnabledException,
  PolicyTypeAlreadyEnabledException$,
  PolicyTypeNotAvailableForOrganizationException,
  PolicyTypeNotAvailableForOrganizationException$,
  PolicyTypeNotEnabledException,
  PolicyTypeNotEnabledException$,
  PolicyTypeStatus,
  PolicyTypeSummary$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  RegisterDelegatedAdministrator$,
  RegisterDelegatedAdministratorCommand,
  RegisterDelegatedAdministratorRequest$,
  RemoveAccountFromOrganization$,
  RemoveAccountFromOrganizationCommand,
  RemoveAccountFromOrganizationRequest$,
  ResourcePolicy$,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotFoundException$,
  ResourcePolicySummary$,
  ResponsibilityTransfer$,
  ResponsibilityTransferAlreadyInStatusException,
  ResponsibilityTransferAlreadyInStatusException$,
  ResponsibilityTransferNotFoundException,
  ResponsibilityTransferNotFoundException$,
  ResponsibilityTransferStatus,
  ResponsibilityTransferType,
  Root$,
  RootNotFoundException,
  RootNotFoundException$,
  ServiceException,
  ServiceException$,
  SourceParentNotFoundException,
  SourceParentNotFoundException$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TargetNotFoundException,
  TargetNotFoundException$,
  TargetType,
  TerminateResponsibilityTransfer$,
  TerminateResponsibilityTransferCommand,
  TerminateResponsibilityTransferRequest$,
  TerminateResponsibilityTransferResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TransferParticipant$,
  UnsupportedAPIEndpointException,
  UnsupportedAPIEndpointException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UpdateOrganizationalUnit$,
  UpdateOrganizationalUnitCommand,
  UpdateOrganizationalUnitRequest$,
  UpdateOrganizationalUnitResponse$,
  UpdatePolicy$,
  UpdatePolicyCommand,
  UpdatePolicyRequest$,
  UpdatePolicyResponse$,
  UpdateResponsibilityTransfer$,
  UpdateResponsibilityTransferCommand,
  UpdateResponsibilityTransferRequest$,
  UpdateResponsibilityTransferResponse$,
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
assert(typeof AcceptHandshake$ === "object");
assert(typeof AttachPolicyCommand === "function");
assert(typeof AttachPolicy$ === "object");
assert(typeof CancelHandshakeCommand === "function");
assert(typeof CancelHandshake$ === "object");
assert(typeof CloseAccountCommand === "function");
assert(typeof CloseAccount$ === "object");
assert(typeof CreateAccountCommand === "function");
assert(typeof CreateAccount$ === "object");
assert(typeof CreateGovCloudAccountCommand === "function");
assert(typeof CreateGovCloudAccount$ === "object");
assert(typeof CreateOrganizationCommand === "function");
assert(typeof CreateOrganization$ === "object");
assert(typeof CreateOrganizationalUnitCommand === "function");
assert(typeof CreateOrganizationalUnit$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof DeclineHandshakeCommand === "function");
assert(typeof DeclineHandshake$ === "object");
assert(typeof DeleteOrganizationCommand === "function");
assert(typeof DeleteOrganization$ === "object");
assert(typeof DeleteOrganizationalUnitCommand === "function");
assert(typeof DeleteOrganizationalUnit$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeregisterDelegatedAdministratorCommand === "function");
assert(typeof DeregisterDelegatedAdministrator$ === "object");
assert(typeof DescribeAccountCommand === "function");
assert(typeof DescribeAccount$ === "object");
assert(typeof DescribeCreateAccountStatusCommand === "function");
assert(typeof DescribeCreateAccountStatus$ === "object");
assert(typeof DescribeEffectivePolicyCommand === "function");
assert(typeof DescribeEffectivePolicy$ === "object");
assert(typeof DescribeHandshakeCommand === "function");
assert(typeof DescribeHandshake$ === "object");
assert(typeof DescribeOrganizationCommand === "function");
assert(typeof DescribeOrganization$ === "object");
assert(typeof DescribeOrganizationalUnitCommand === "function");
assert(typeof DescribeOrganizationalUnit$ === "object");
assert(typeof DescribePolicyCommand === "function");
assert(typeof DescribePolicy$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeResponsibilityTransferCommand === "function");
assert(typeof DescribeResponsibilityTransfer$ === "object");
assert(typeof DetachPolicyCommand === "function");
assert(typeof DetachPolicy$ === "object");
assert(typeof DisableAWSServiceAccessCommand === "function");
assert(typeof DisableAWSServiceAccess$ === "object");
assert(typeof DisablePolicyTypeCommand === "function");
assert(typeof DisablePolicyType$ === "object");
assert(typeof EnableAllFeaturesCommand === "function");
assert(typeof EnableAllFeatures$ === "object");
assert(typeof EnableAWSServiceAccessCommand === "function");
assert(typeof EnableAWSServiceAccess$ === "object");
assert(typeof EnablePolicyTypeCommand === "function");
assert(typeof EnablePolicyType$ === "object");
assert(typeof InviteAccountToOrganizationCommand === "function");
assert(typeof InviteAccountToOrganization$ === "object");
assert(typeof InviteOrganizationToTransferResponsibilityCommand === "function");
assert(typeof InviteOrganizationToTransferResponsibility$ === "object");
assert(typeof LeaveOrganizationCommand === "function");
assert(typeof LeaveOrganization$ === "object");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListAccounts$ === "object");
assert(typeof ListAccountsForParentCommand === "function");
assert(typeof ListAccountsForParent$ === "object");
assert(typeof ListAccountsWithInvalidEffectivePolicyCommand === "function");
assert(typeof ListAccountsWithInvalidEffectivePolicy$ === "object");
assert(typeof ListAWSServiceAccessForOrganizationCommand === "function");
assert(typeof ListAWSServiceAccessForOrganization$ === "object");
assert(typeof ListChildrenCommand === "function");
assert(typeof ListChildren$ === "object");
assert(typeof ListCreateAccountStatusCommand === "function");
assert(typeof ListCreateAccountStatus$ === "object");
assert(typeof ListDelegatedAdministratorsCommand === "function");
assert(typeof ListDelegatedAdministrators$ === "object");
assert(typeof ListDelegatedServicesForAccountCommand === "function");
assert(typeof ListDelegatedServicesForAccount$ === "object");
assert(typeof ListEffectivePolicyValidationErrorsCommand === "function");
assert(typeof ListEffectivePolicyValidationErrors$ === "object");
assert(typeof ListHandshakesForAccountCommand === "function");
assert(typeof ListHandshakesForAccount$ === "object");
assert(typeof ListHandshakesForOrganizationCommand === "function");
assert(typeof ListHandshakesForOrganization$ === "object");
assert(typeof ListInboundResponsibilityTransfersCommand === "function");
assert(typeof ListInboundResponsibilityTransfers$ === "object");
assert(typeof ListOrganizationalUnitsForParentCommand === "function");
assert(typeof ListOrganizationalUnitsForParent$ === "object");
assert(typeof ListOutboundResponsibilityTransfersCommand === "function");
assert(typeof ListOutboundResponsibilityTransfers$ === "object");
assert(typeof ListParentsCommand === "function");
assert(typeof ListParents$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPoliciesForTargetCommand === "function");
assert(typeof ListPoliciesForTarget$ === "object");
assert(typeof ListRootsCommand === "function");
assert(typeof ListRoots$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetsForPolicyCommand === "function");
assert(typeof ListTargetsForPolicy$ === "object");
assert(typeof MoveAccountCommand === "function");
assert(typeof MoveAccount$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RegisterDelegatedAdministratorCommand === "function");
assert(typeof RegisterDelegatedAdministrator$ === "object");
assert(typeof RemoveAccountFromOrganizationCommand === "function");
assert(typeof RemoveAccountFromOrganization$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateResponsibilityTransferCommand === "function");
assert(typeof TerminateResponsibilityTransfer$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateOrganizationalUnitCommand === "function");
assert(typeof UpdateOrganizationalUnit$ === "object");
assert(typeof UpdatePolicyCommand === "function");
assert(typeof UpdatePolicy$ === "object");
assert(typeof UpdateResponsibilityTransferCommand === "function");
assert(typeof UpdateResponsibilityTransfer$ === "object");
// structural schemas
assert(typeof AcceptHandshakeRequest$ === "object");
assert(typeof AcceptHandshakeResponse$ === "object");
assert(typeof Account$ === "object");
assert(typeof AttachPolicyRequest$ === "object");
assert(typeof CancelHandshakeRequest$ === "object");
assert(typeof CancelHandshakeResponse$ === "object");
assert(typeof Child$ === "object");
assert(typeof CloseAccountRequest$ === "object");
assert(typeof CreateAccountRequest$ === "object");
assert(typeof CreateAccountResponse$ === "object");
assert(typeof CreateAccountStatus$ === "object");
assert(typeof CreateGovCloudAccountRequest$ === "object");
assert(typeof CreateGovCloudAccountResponse$ === "object");
assert(typeof CreateOrganizationalUnitRequest$ === "object");
assert(typeof CreateOrganizationalUnitResponse$ === "object");
assert(typeof CreateOrganizationRequest$ === "object");
assert(typeof CreateOrganizationResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof DeclineHandshakeRequest$ === "object");
assert(typeof DeclineHandshakeResponse$ === "object");
assert(typeof DelegatedAdministrator$ === "object");
assert(typeof DelegatedService$ === "object");
assert(typeof DeleteOrganizationalUnitRequest$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeregisterDelegatedAdministratorRequest$ === "object");
assert(typeof DescribeAccountRequest$ === "object");
assert(typeof DescribeAccountResponse$ === "object");
assert(typeof DescribeCreateAccountStatusRequest$ === "object");
assert(typeof DescribeCreateAccountStatusResponse$ === "object");
assert(typeof DescribeEffectivePolicyRequest$ === "object");
assert(typeof DescribeEffectivePolicyResponse$ === "object");
assert(typeof DescribeHandshakeRequest$ === "object");
assert(typeof DescribeHandshakeResponse$ === "object");
assert(typeof DescribeOrganizationalUnitRequest$ === "object");
assert(typeof DescribeOrganizationalUnitResponse$ === "object");
assert(typeof DescribeOrganizationResponse$ === "object");
assert(typeof DescribePolicyRequest$ === "object");
assert(typeof DescribePolicyResponse$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeResponsibilityTransferRequest$ === "object");
assert(typeof DescribeResponsibilityTransferResponse$ === "object");
assert(typeof DetachPolicyRequest$ === "object");
assert(typeof DisableAWSServiceAccessRequest$ === "object");
assert(typeof DisablePolicyTypeRequest$ === "object");
assert(typeof DisablePolicyTypeResponse$ === "object");
assert(typeof EffectivePolicy$ === "object");
assert(typeof EffectivePolicyValidationError$ === "object");
assert(typeof EnableAllFeaturesRequest$ === "object");
assert(typeof EnableAllFeaturesResponse$ === "object");
assert(typeof EnableAWSServiceAccessRequest$ === "object");
assert(typeof EnabledServicePrincipal$ === "object");
assert(typeof EnablePolicyTypeRequest$ === "object");
assert(typeof EnablePolicyTypeResponse$ === "object");
assert(typeof Handshake$ === "object");
assert(typeof HandshakeFilter$ === "object");
assert(typeof HandshakeParty$ === "object");
assert(typeof HandshakeResource$ === "object");
assert(typeof InviteAccountToOrganizationRequest$ === "object");
assert(typeof InviteAccountToOrganizationResponse$ === "object");
assert(typeof InviteOrganizationToTransferResponsibilityRequest$ === "object");
assert(typeof InviteOrganizationToTransferResponsibilityResponse$ === "object");
assert(typeof ListAccountsForParentRequest$ === "object");
assert(typeof ListAccountsForParentResponse$ === "object");
assert(typeof ListAccountsRequest$ === "object");
assert(typeof ListAccountsResponse$ === "object");
assert(typeof ListAccountsWithInvalidEffectivePolicyRequest$ === "object");
assert(typeof ListAccountsWithInvalidEffectivePolicyResponse$ === "object");
assert(typeof ListAWSServiceAccessForOrganizationRequest$ === "object");
assert(typeof ListAWSServiceAccessForOrganizationResponse$ === "object");
assert(typeof ListChildrenRequest$ === "object");
assert(typeof ListChildrenResponse$ === "object");
assert(typeof ListCreateAccountStatusRequest$ === "object");
assert(typeof ListCreateAccountStatusResponse$ === "object");
assert(typeof ListDelegatedAdministratorsRequest$ === "object");
assert(typeof ListDelegatedAdministratorsResponse$ === "object");
assert(typeof ListDelegatedServicesForAccountRequest$ === "object");
assert(typeof ListDelegatedServicesForAccountResponse$ === "object");
assert(typeof ListEffectivePolicyValidationErrorsRequest$ === "object");
assert(typeof ListEffectivePolicyValidationErrorsResponse$ === "object");
assert(typeof ListHandshakesForAccountRequest$ === "object");
assert(typeof ListHandshakesForAccountResponse$ === "object");
assert(typeof ListHandshakesForOrganizationRequest$ === "object");
assert(typeof ListHandshakesForOrganizationResponse$ === "object");
assert(typeof ListInboundResponsibilityTransfersRequest$ === "object");
assert(typeof ListInboundResponsibilityTransfersResponse$ === "object");
assert(typeof ListOrganizationalUnitsForParentRequest$ === "object");
assert(typeof ListOrganizationalUnitsForParentResponse$ === "object");
assert(typeof ListOutboundResponsibilityTransfersRequest$ === "object");
assert(typeof ListOutboundResponsibilityTransfersResponse$ === "object");
assert(typeof ListParentsRequest$ === "object");
assert(typeof ListParentsResponse$ === "object");
assert(typeof ListPoliciesForTargetRequest$ === "object");
assert(typeof ListPoliciesForTargetResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListRootsRequest$ === "object");
assert(typeof ListRootsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetsForPolicyRequest$ === "object");
assert(typeof ListTargetsForPolicyResponse$ === "object");
assert(typeof MoveAccountRequest$ === "object");
assert(typeof Organization$ === "object");
assert(typeof OrganizationalUnit$ === "object");
assert(typeof Parent$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicySummary$ === "object");
assert(typeof PolicyTargetSummary$ === "object");
assert(typeof PolicyTypeSummary$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RegisterDelegatedAdministratorRequest$ === "object");
assert(typeof RemoveAccountFromOrganizationRequest$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof ResourcePolicySummary$ === "object");
assert(typeof ResponsibilityTransfer$ === "object");
assert(typeof Root$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TerminateResponsibilityTransferRequest$ === "object");
assert(typeof TerminateResponsibilityTransferResponse$ === "object");
assert(typeof TransferParticipant$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UpdateOrganizationalUnitRequest$ === "object");
assert(typeof UpdateOrganizationalUnitResponse$ === "object");
assert(typeof UpdatePolicyRequest$ === "object");
assert(typeof UpdatePolicyResponse$ === "object");
assert(typeof UpdateResponsibilityTransferRequest$ === "object");
assert(typeof UpdateResponsibilityTransferResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(AccessDeniedForDependencyException.prototype instanceof OrganizationsServiceException);
assert(typeof AccessDeniedForDependencyException$ === "object");
assert(AccountAlreadyClosedException.prototype instanceof OrganizationsServiceException);
assert(typeof AccountAlreadyClosedException$ === "object");
assert(AccountAlreadyRegisteredException.prototype instanceof OrganizationsServiceException);
assert(typeof AccountAlreadyRegisteredException$ === "object");
assert(AccountNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof AccountNotFoundException$ === "object");
assert(AccountNotRegisteredException.prototype instanceof OrganizationsServiceException);
assert(typeof AccountNotRegisteredException$ === "object");
assert(AccountOwnerNotVerifiedException.prototype instanceof OrganizationsServiceException);
assert(typeof AccountOwnerNotVerifiedException$ === "object");
assert(AlreadyInOrganizationException.prototype instanceof OrganizationsServiceException);
assert(typeof AlreadyInOrganizationException$ === "object");
assert(AWSOrganizationsNotInUseException.prototype instanceof OrganizationsServiceException);
assert(typeof AWSOrganizationsNotInUseException$ === "object");
assert(ChildNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof ChildNotFoundException$ === "object");
assert(ConcurrentModificationException.prototype instanceof OrganizationsServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof OrganizationsServiceException);
assert(typeof ConflictException$ === "object");
assert(ConstraintViolationException.prototype instanceof OrganizationsServiceException);
assert(typeof ConstraintViolationException$ === "object");
assert(CreateAccountStatusNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof CreateAccountStatusNotFoundException$ === "object");
assert(DestinationParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof DestinationParentNotFoundException$ === "object");
assert(DuplicateAccountException.prototype instanceof OrganizationsServiceException);
assert(typeof DuplicateAccountException$ === "object");
assert(DuplicateHandshakeException.prototype instanceof OrganizationsServiceException);
assert(typeof DuplicateHandshakeException$ === "object");
assert(DuplicateOrganizationalUnitException.prototype instanceof OrganizationsServiceException);
assert(typeof DuplicateOrganizationalUnitException$ === "object");
assert(DuplicatePolicyAttachmentException.prototype instanceof OrganizationsServiceException);
assert(typeof DuplicatePolicyAttachmentException$ === "object");
assert(DuplicatePolicyException.prototype instanceof OrganizationsServiceException);
assert(typeof DuplicatePolicyException$ === "object");
assert(EffectivePolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof EffectivePolicyNotFoundException$ === "object");
assert(FinalizingOrganizationException.prototype instanceof OrganizationsServiceException);
assert(typeof FinalizingOrganizationException$ === "object");
assert(HandshakeAlreadyInStateException.prototype instanceof OrganizationsServiceException);
assert(typeof HandshakeAlreadyInStateException$ === "object");
assert(HandshakeConstraintViolationException.prototype instanceof OrganizationsServiceException);
assert(typeof HandshakeConstraintViolationException$ === "object");
assert(HandshakeNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof HandshakeNotFoundException$ === "object");
assert(InvalidHandshakeTransitionException.prototype instanceof OrganizationsServiceException);
assert(typeof InvalidHandshakeTransitionException$ === "object");
assert(InvalidInputException.prototype instanceof OrganizationsServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidResponsibilityTransferTransitionException.prototype instanceof OrganizationsServiceException);
assert(typeof InvalidResponsibilityTransferTransitionException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof OrganizationsServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(MasterCannotLeaveOrganizationException.prototype instanceof OrganizationsServiceException);
assert(typeof MasterCannotLeaveOrganizationException$ === "object");
assert(OrganizationalUnitNotEmptyException.prototype instanceof OrganizationsServiceException);
assert(typeof OrganizationalUnitNotEmptyException$ === "object");
assert(OrganizationalUnitNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof OrganizationalUnitNotFoundException$ === "object");
assert(OrganizationNotEmptyException.prototype instanceof OrganizationsServiceException);
assert(typeof OrganizationNotEmptyException$ === "object");
assert(ParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof ParentNotFoundException$ === "object");
assert(PolicyChangesInProgressException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyChangesInProgressException$ === "object");
assert(PolicyInUseException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyInUseException$ === "object");
assert(PolicyNotAttachedException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyNotAttachedException$ === "object");
assert(PolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyNotFoundException$ === "object");
assert(PolicyTypeAlreadyEnabledException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyTypeAlreadyEnabledException$ === "object");
assert(PolicyTypeNotAvailableForOrganizationException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyTypeNotAvailableForOrganizationException$ === "object");
assert(PolicyTypeNotEnabledException.prototype instanceof OrganizationsServiceException);
assert(typeof PolicyTypeNotEnabledException$ === "object");
assert(ResourcePolicyNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof ResourcePolicyNotFoundException$ === "object");
assert(ResponsibilityTransferAlreadyInStatusException.prototype instanceof OrganizationsServiceException);
assert(typeof ResponsibilityTransferAlreadyInStatusException$ === "object");
assert(ResponsibilityTransferNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof ResponsibilityTransferNotFoundException$ === "object");
assert(RootNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof RootNotFoundException$ === "object");
assert(ServiceException.prototype instanceof OrganizationsServiceException);
assert(typeof ServiceException$ === "object");
assert(SourceParentNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof SourceParentNotFoundException$ === "object");
assert(TargetNotFoundException.prototype instanceof OrganizationsServiceException);
assert(typeof TargetNotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof OrganizationsServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnsupportedAPIEndpointException.prototype instanceof OrganizationsServiceException);
assert(typeof UnsupportedAPIEndpointException$ === "object");
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
