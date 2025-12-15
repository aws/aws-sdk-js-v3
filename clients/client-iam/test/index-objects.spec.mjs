import {
  AcceptDelegationRequest$,
  AcceptDelegationRequestCommand,
  AcceptDelegationRequestRequest$,
  AccessAdvisorUsageGranularityType,
  AccessDetail$,
  AccessKey$,
  AccessKeyLastUsed$,
  AccessKeyMetadata$,
  AccountNotManagementOrDelegatedAdministratorException,
  AccountNotManagementOrDelegatedAdministratorException$,
  AddClientIDToOpenIDConnectProvider$,
  AddClientIDToOpenIDConnectProviderCommand,
  AddClientIDToOpenIDConnectProviderRequest$,
  AddRoleToInstanceProfile$,
  AddRoleToInstanceProfileCommand,
  AddRoleToInstanceProfileRequest$,
  AddUserToGroup$,
  AddUserToGroupCommand,
  AddUserToGroupRequest$,
  AssertionEncryptionModeType,
  AssignmentStatusType,
  AssociateDelegationRequest$,
  AssociateDelegationRequestCommand,
  AssociateDelegationRequestRequest$,
  AttachGroupPolicy$,
  AttachGroupPolicyCommand,
  AttachGroupPolicyRequest$,
  AttachRolePolicy$,
  AttachRolePolicyCommand,
  AttachRolePolicyRequest$,
  AttachUserPolicy$,
  AttachUserPolicyCommand,
  AttachUserPolicyRequest$,
  AttachedPermissionsBoundary$,
  AttachedPolicy$,
  CallerIsNotManagementAccountException,
  CallerIsNotManagementAccountException$,
  ChangePassword$,
  ChangePasswordCommand,
  ChangePasswordRequest$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ContextEntry$,
  ContextKeyTypeEnum,
  CreateAccessKey$,
  CreateAccessKeyCommand,
  CreateAccessKeyRequest$,
  CreateAccessKeyResponse$,
  CreateAccountAlias$,
  CreateAccountAliasCommand,
  CreateAccountAliasRequest$,
  CreateDelegationRequest$,
  CreateDelegationRequestCommand,
  CreateDelegationRequestRequest$,
  CreateDelegationRequestResponse$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResponse$,
  CreateInstanceProfile$,
  CreateInstanceProfileCommand,
  CreateInstanceProfileRequest$,
  CreateInstanceProfileResponse$,
  CreateLoginProfile$,
  CreateLoginProfileCommand,
  CreateLoginProfileRequest$,
  CreateLoginProfileResponse$,
  CreateOpenIDConnectProvider$,
  CreateOpenIDConnectProviderCommand,
  CreateOpenIDConnectProviderRequest$,
  CreateOpenIDConnectProviderResponse$,
  CreatePolicy$,
  CreatePolicyCommand,
  CreatePolicyRequest$,
  CreatePolicyResponse$,
  CreatePolicyVersion$,
  CreatePolicyVersionCommand,
  CreatePolicyVersionRequest$,
  CreatePolicyVersionResponse$,
  CreateRole$,
  CreateRoleCommand,
  CreateRoleRequest$,
  CreateRoleResponse$,
  CreateSAMLProvider$,
  CreateSAMLProviderCommand,
  CreateSAMLProviderRequest$,
  CreateSAMLProviderResponse$,
  CreateServiceLinkedRole$,
  CreateServiceLinkedRoleCommand,
  CreateServiceLinkedRoleRequest$,
  CreateServiceLinkedRoleResponse$,
  CreateServiceSpecificCredential$,
  CreateServiceSpecificCredentialCommand,
  CreateServiceSpecificCredentialRequest$,
  CreateServiceSpecificCredentialResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  CreateVirtualMFADevice$,
  CreateVirtualMFADeviceCommand,
  CreateVirtualMFADeviceRequest$,
  CreateVirtualMFADeviceResponse$,
  CredentialReportExpiredException,
  CredentialReportExpiredException$,
  CredentialReportNotPresentException,
  CredentialReportNotPresentException$,
  CredentialReportNotReadyException,
  CredentialReportNotReadyException$,
  DeactivateMFADevice$,
  DeactivateMFADeviceCommand,
  DeactivateMFADeviceRequest$,
  DelegationPermission$,
  DelegationRequest$,
  DeleteAccessKey$,
  DeleteAccessKeyCommand,
  DeleteAccessKeyRequest$,
  DeleteAccountAlias$,
  DeleteAccountAliasCommand,
  DeleteAccountAliasRequest$,
  DeleteAccountPasswordPolicy$,
  DeleteAccountPasswordPolicyCommand,
  DeleteConflictException,
  DeleteConflictException$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupPolicy$,
  DeleteGroupPolicyCommand,
  DeleteGroupPolicyRequest$,
  DeleteGroupRequest$,
  DeleteInstanceProfile$,
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileRequest$,
  DeleteLoginProfile$,
  DeleteLoginProfileCommand,
  DeleteLoginProfileRequest$,
  DeleteOpenIDConnectProvider$,
  DeleteOpenIDConnectProviderCommand,
  DeleteOpenIDConnectProviderRequest$,
  DeletePolicy$,
  DeletePolicyCommand,
  DeletePolicyRequest$,
  DeletePolicyVersion$,
  DeletePolicyVersionCommand,
  DeletePolicyVersionRequest$,
  DeleteRole$,
  DeleteRoleCommand,
  DeleteRolePermissionsBoundary$,
  DeleteRolePermissionsBoundaryCommand,
  DeleteRolePermissionsBoundaryRequest$,
  DeleteRolePolicy$,
  DeleteRolePolicyCommand,
  DeleteRolePolicyRequest$,
  DeleteRoleRequest$,
  DeleteSAMLProvider$,
  DeleteSAMLProviderCommand,
  DeleteSAMLProviderRequest$,
  DeleteSSHPublicKey$,
  DeleteSSHPublicKeyCommand,
  DeleteSSHPublicKeyRequest$,
  DeleteServerCertificate$,
  DeleteServerCertificateCommand,
  DeleteServerCertificateRequest$,
  DeleteServiceLinkedRole$,
  DeleteServiceLinkedRoleCommand,
  DeleteServiceLinkedRoleRequest$,
  DeleteServiceLinkedRoleResponse$,
  DeleteServiceSpecificCredential$,
  DeleteServiceSpecificCredentialCommand,
  DeleteServiceSpecificCredentialRequest$,
  DeleteSigningCertificate$,
  DeleteSigningCertificateCommand,
  DeleteSigningCertificateRequest$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserPermissionsBoundary$,
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPermissionsBoundaryRequest$,
  DeleteUserPolicy$,
  DeleteUserPolicyCommand,
  DeleteUserPolicyRequest$,
  DeleteUserRequest$,
  DeleteVirtualMFADevice$,
  DeleteVirtualMFADeviceCommand,
  DeleteVirtualMFADeviceRequest$,
  DeletionTaskFailureReasonType$,
  DeletionTaskStatusType,
  DetachGroupPolicy$,
  DetachGroupPolicyCommand,
  DetachGroupPolicyRequest$,
  DetachRolePolicy$,
  DetachRolePolicyCommand,
  DetachRolePolicyRequest$,
  DetachUserPolicy$,
  DetachUserPolicyCommand,
  DetachUserPolicyRequest$,
  DisableOrganizationsRootCredentialsManagement$,
  DisableOrganizationsRootCredentialsManagementCommand,
  DisableOrganizationsRootCredentialsManagementRequest$,
  DisableOrganizationsRootCredentialsManagementResponse$,
  DisableOrganizationsRootSessions$,
  DisableOrganizationsRootSessionsCommand,
  DisableOrganizationsRootSessionsRequest$,
  DisableOrganizationsRootSessionsResponse$,
  DisableOutboundWebIdentityFederation$,
  DisableOutboundWebIdentityFederationCommand,
  DuplicateCertificateException,
  DuplicateCertificateException$,
  DuplicateSSHPublicKeyException,
  DuplicateSSHPublicKeyException$,
  EnableMFADevice$,
  EnableMFADeviceCommand,
  EnableMFADeviceRequest$,
  EnableOrganizationsRootCredentialsManagement$,
  EnableOrganizationsRootCredentialsManagementCommand,
  EnableOrganizationsRootCredentialsManagementRequest$,
  EnableOrganizationsRootCredentialsManagementResponse$,
  EnableOrganizationsRootSessions$,
  EnableOrganizationsRootSessionsCommand,
  EnableOrganizationsRootSessionsRequest$,
  EnableOrganizationsRootSessionsResponse$,
  EnableOutboundWebIdentityFederation$,
  EnableOutboundWebIdentityFederationCommand,
  EnableOutboundWebIdentityFederationResponse$,
  EncodingType,
  EntityAlreadyExistsException,
  EntityAlreadyExistsException$,
  EntityDetails$,
  EntityInfo$,
  EntityTemporarilyUnmodifiableException,
  EntityTemporarilyUnmodifiableException$,
  EntityType,
  ErrorDetails$,
  EvaluationResult$,
  FeatureDisabledException,
  FeatureDisabledException$,
  FeatureEnabledException,
  FeatureEnabledException$,
  FeatureType,
  GenerateCredentialReport$,
  GenerateCredentialReportCommand,
  GenerateCredentialReportResponse$,
  GenerateOrganizationsAccessReport$,
  GenerateOrganizationsAccessReportCommand,
  GenerateOrganizationsAccessReportRequest$,
  GenerateOrganizationsAccessReportResponse$,
  GenerateServiceLastAccessedDetails$,
  GenerateServiceLastAccessedDetailsCommand,
  GenerateServiceLastAccessedDetailsRequest$,
  GenerateServiceLastAccessedDetailsResponse$,
  GetAccessKeyLastUsed$,
  GetAccessKeyLastUsedCommand,
  GetAccessKeyLastUsedRequest$,
  GetAccessKeyLastUsedResponse$,
  GetAccountAuthorizationDetails$,
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsRequest$,
  GetAccountAuthorizationDetailsResponse$,
  GetAccountPasswordPolicy$,
  GetAccountPasswordPolicyCommand,
  GetAccountPasswordPolicyResponse$,
  GetAccountSummary$,
  GetAccountSummaryCommand,
  GetAccountSummaryResponse$,
  GetContextKeysForCustomPolicy$,
  GetContextKeysForCustomPolicyCommand,
  GetContextKeysForCustomPolicyRequest$,
  GetContextKeysForPolicyResponse$,
  GetContextKeysForPrincipalPolicy$,
  GetContextKeysForPrincipalPolicyCommand,
  GetContextKeysForPrincipalPolicyRequest$,
  GetCredentialReport$,
  GetCredentialReportCommand,
  GetCredentialReportResponse$,
  GetDelegationRequest$,
  GetDelegationRequestCommand,
  GetDelegationRequestRequest$,
  GetDelegationRequestResponse$,
  GetGroup$,
  GetGroupCommand,
  GetGroupPolicy$,
  GetGroupPolicyCommand,
  GetGroupPolicyRequest$,
  GetGroupPolicyResponse$,
  GetGroupRequest$,
  GetGroupResponse$,
  GetHumanReadableSummary$,
  GetHumanReadableSummaryCommand,
  GetHumanReadableSummaryRequest$,
  GetHumanReadableSummaryResponse$,
  GetInstanceProfile$,
  GetInstanceProfileCommand,
  GetInstanceProfileRequest$,
  GetInstanceProfileResponse$,
  GetLoginProfile$,
  GetLoginProfileCommand,
  GetLoginProfileRequest$,
  GetLoginProfileResponse$,
  GetMFADevice$,
  GetMFADeviceCommand,
  GetMFADeviceRequest$,
  GetMFADeviceResponse$,
  GetOpenIDConnectProvider$,
  GetOpenIDConnectProviderCommand,
  GetOpenIDConnectProviderRequest$,
  GetOpenIDConnectProviderResponse$,
  GetOrganizationsAccessReport$,
  GetOrganizationsAccessReportCommand,
  GetOrganizationsAccessReportRequest$,
  GetOrganizationsAccessReportResponse$,
  GetOutboundWebIdentityFederationInfo$,
  GetOutboundWebIdentityFederationInfoCommand,
  GetOutboundWebIdentityFederationInfoResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetPolicyVersion$,
  GetPolicyVersionCommand,
  GetPolicyVersionRequest$,
  GetPolicyVersionResponse$,
  GetRole$,
  GetRoleCommand,
  GetRolePolicy$,
  GetRolePolicyCommand,
  GetRolePolicyRequest$,
  GetRolePolicyResponse$,
  GetRoleRequest$,
  GetRoleResponse$,
  GetSAMLProvider$,
  GetSAMLProviderCommand,
  GetSAMLProviderRequest$,
  GetSAMLProviderResponse$,
  GetSSHPublicKey$,
  GetSSHPublicKeyCommand,
  GetSSHPublicKeyRequest$,
  GetSSHPublicKeyResponse$,
  GetServerCertificate$,
  GetServerCertificateCommand,
  GetServerCertificateRequest$,
  GetServerCertificateResponse$,
  GetServiceLastAccessedDetails$,
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsRequest$,
  GetServiceLastAccessedDetailsResponse$,
  GetServiceLastAccessedDetailsWithEntities$,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLastAccessedDetailsWithEntitiesRequest$,
  GetServiceLastAccessedDetailsWithEntitiesResponse$,
  GetServiceLinkedRoleDeletionStatus$,
  GetServiceLinkedRoleDeletionStatusCommand,
  GetServiceLinkedRoleDeletionStatusRequest$,
  GetServiceLinkedRoleDeletionStatusResponse$,
  GetUser$,
  GetUserCommand,
  GetUserPolicy$,
  GetUserPolicyCommand,
  GetUserPolicyRequest$,
  GetUserPolicyResponse$,
  GetUserRequest$,
  GetUserResponse$,
  GlobalEndpointTokenVersion,
  Group$,
  GroupDetail$,
  IAM,
  IAMClient,
  IAMServiceException,
  InstanceProfile$,
  InvalidAuthenticationCodeException,
  InvalidAuthenticationCodeException$,
  InvalidCertificateException,
  InvalidCertificateException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidPublicKeyException,
  InvalidPublicKeyException$,
  InvalidUserTypeException,
  InvalidUserTypeException$,
  JobStatusType,
  KeyPairMismatchException,
  KeyPairMismatchException$,
  LimitExceededException,
  LimitExceededException$,
  ListAccessKeys$,
  ListAccessKeysCommand,
  ListAccessKeysRequest$,
  ListAccessKeysResponse$,
  ListAccountAliases$,
  ListAccountAliasesCommand,
  ListAccountAliasesRequest$,
  ListAccountAliasesResponse$,
  ListAttachedGroupPolicies$,
  ListAttachedGroupPoliciesCommand,
  ListAttachedGroupPoliciesRequest$,
  ListAttachedGroupPoliciesResponse$,
  ListAttachedRolePolicies$,
  ListAttachedRolePoliciesCommand,
  ListAttachedRolePoliciesRequest$,
  ListAttachedRolePoliciesResponse$,
  ListAttachedUserPolicies$,
  ListAttachedUserPoliciesCommand,
  ListAttachedUserPoliciesRequest$,
  ListAttachedUserPoliciesResponse$,
  ListDelegationRequests$,
  ListDelegationRequestsCommand,
  ListDelegationRequestsRequest$,
  ListDelegationRequestsResponse$,
  ListEntitiesForPolicy$,
  ListEntitiesForPolicyCommand,
  ListEntitiesForPolicyRequest$,
  ListEntitiesForPolicyResponse$,
  ListGroupPolicies$,
  ListGroupPoliciesCommand,
  ListGroupPoliciesRequest$,
  ListGroupPoliciesResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsForUser$,
  ListGroupsForUserCommand,
  ListGroupsForUserRequest$,
  ListGroupsForUserResponse$,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListInstanceProfileTags$,
  ListInstanceProfileTagsCommand,
  ListInstanceProfileTagsRequest$,
  ListInstanceProfileTagsResponse$,
  ListInstanceProfiles$,
  ListInstanceProfilesCommand,
  ListInstanceProfilesForRole$,
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleRequest$,
  ListInstanceProfilesForRoleResponse$,
  ListInstanceProfilesRequest$,
  ListInstanceProfilesResponse$,
  ListMFADeviceTags$,
  ListMFADeviceTagsCommand,
  ListMFADeviceTagsRequest$,
  ListMFADeviceTagsResponse$,
  ListMFADevices$,
  ListMFADevicesCommand,
  ListMFADevicesRequest$,
  ListMFADevicesResponse$,
  ListOpenIDConnectProviderTags$,
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProviderTagsRequest$,
  ListOpenIDConnectProviderTagsResponse$,
  ListOpenIDConnectProviders$,
  ListOpenIDConnectProvidersCommand,
  ListOpenIDConnectProvidersRequest$,
  ListOpenIDConnectProvidersResponse$,
  ListOrganizationsFeatures$,
  ListOrganizationsFeaturesCommand,
  ListOrganizationsFeaturesRequest$,
  ListOrganizationsFeaturesResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesGrantingServiceAccess$,
  ListPoliciesGrantingServiceAccessCommand,
  ListPoliciesGrantingServiceAccessEntry$,
  ListPoliciesGrantingServiceAccessRequest$,
  ListPoliciesGrantingServiceAccessResponse$,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListPolicyTags$,
  ListPolicyTagsCommand,
  ListPolicyTagsRequest$,
  ListPolicyTagsResponse$,
  ListPolicyVersions$,
  ListPolicyVersionsCommand,
  ListPolicyVersionsRequest$,
  ListPolicyVersionsResponse$,
  ListRolePolicies$,
  ListRolePoliciesCommand,
  ListRolePoliciesRequest$,
  ListRolePoliciesResponse$,
  ListRoleTags$,
  ListRoleTagsCommand,
  ListRoleTagsRequest$,
  ListRoleTagsResponse$,
  ListRoles$,
  ListRolesCommand,
  ListRolesRequest$,
  ListRolesResponse$,
  ListSAMLProviderTags$,
  ListSAMLProviderTagsCommand,
  ListSAMLProviderTagsRequest$,
  ListSAMLProviderTagsResponse$,
  ListSAMLProviders$,
  ListSAMLProvidersCommand,
  ListSAMLProvidersRequest$,
  ListSAMLProvidersResponse$,
  ListSSHPublicKeys$,
  ListSSHPublicKeysCommand,
  ListSSHPublicKeysRequest$,
  ListSSHPublicKeysResponse$,
  ListServerCertificateTags$,
  ListServerCertificateTagsCommand,
  ListServerCertificateTagsRequest$,
  ListServerCertificateTagsResponse$,
  ListServerCertificates$,
  ListServerCertificatesCommand,
  ListServerCertificatesRequest$,
  ListServerCertificatesResponse$,
  ListServiceSpecificCredentials$,
  ListServiceSpecificCredentialsCommand,
  ListServiceSpecificCredentialsRequest$,
  ListServiceSpecificCredentialsResponse$,
  ListSigningCertificates$,
  ListSigningCertificatesCommand,
  ListSigningCertificatesRequest$,
  ListSigningCertificatesResponse$,
  ListUserPolicies$,
  ListUserPoliciesCommand,
  ListUserPoliciesRequest$,
  ListUserPoliciesResponse$,
  ListUserTags$,
  ListUserTagsCommand,
  ListUserTagsRequest$,
  ListUserTagsResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersRequest$,
  ListUsersResponse$,
  ListVirtualMFADevices$,
  ListVirtualMFADevicesCommand,
  ListVirtualMFADevicesRequest$,
  ListVirtualMFADevicesResponse$,
  LoginProfile$,
  MFADevice$,
  MalformedCertificateException,
  MalformedCertificateException$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
  ManagedPolicyDetail$,
  NoSuchEntityException,
  NoSuchEntityException$,
  OpenIDConnectProviderListEntry$,
  OpenIdIdpCommunicationErrorException,
  OpenIdIdpCommunicationErrorException$,
  OrganizationNotFoundException,
  OrganizationNotFoundException$,
  OrganizationNotInAllFeaturesModeException,
  OrganizationNotInAllFeaturesModeException$,
  OrganizationsDecisionDetail$,
  PasswordPolicy$,
  PasswordPolicyViolationException,
  PasswordPolicyViolationException$,
  PermissionCheckResultType,
  PermissionCheckStatusType,
  PermissionsBoundaryAttachmentType,
  PermissionsBoundaryDecisionDetail$,
  Policy$,
  PolicyDetail$,
  PolicyEvaluationDecisionType,
  PolicyEvaluationException,
  PolicyEvaluationException$,
  PolicyGrantingServiceAccess$,
  PolicyGroup$,
  PolicyNotAttachableException,
  PolicyNotAttachableException$,
  PolicyOwnerEntityType,
  PolicyParameter$,
  PolicyParameterTypeEnum,
  PolicyRole$,
  PolicyScopeType,
  PolicySourceType,
  PolicyType,
  PolicyUsageType,
  PolicyUser$,
  PolicyVersion$,
  Position$,
  PutGroupPolicy$,
  PutGroupPolicyCommand,
  PutGroupPolicyRequest$,
  PutRolePermissionsBoundary$,
  PutRolePermissionsBoundaryCommand,
  PutRolePermissionsBoundaryRequest$,
  PutRolePolicy$,
  PutRolePolicyCommand,
  PutRolePolicyRequest$,
  PutUserPermissionsBoundary$,
  PutUserPermissionsBoundaryCommand,
  PutUserPermissionsBoundaryRequest$,
  PutUserPolicy$,
  PutUserPolicyCommand,
  PutUserPolicyRequest$,
  RejectDelegationRequest$,
  RejectDelegationRequestCommand,
  RejectDelegationRequestRequest$,
  RemoveClientIDFromOpenIDConnectProvider$,
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveClientIDFromOpenIDConnectProviderRequest$,
  RemoveRoleFromInstanceProfile$,
  RemoveRoleFromInstanceProfileCommand,
  RemoveRoleFromInstanceProfileRequest$,
  RemoveUserFromGroup$,
  RemoveUserFromGroupCommand,
  RemoveUserFromGroupRequest$,
  ReportFormatType,
  ReportGenerationLimitExceededException,
  ReportGenerationLimitExceededException$,
  ReportStateType,
  ResetServiceSpecificCredential$,
  ResetServiceSpecificCredentialCommand,
  ResetServiceSpecificCredentialRequest$,
  ResetServiceSpecificCredentialResponse$,
  ResourceSpecificResult$,
  ResyncMFADevice$,
  ResyncMFADeviceCommand,
  ResyncMFADeviceRequest$,
  Role$,
  RoleDetail$,
  RoleLastUsed$,
  RoleUsageType$,
  SAMLPrivateKey$,
  SAMLProviderListEntry$,
  SSHPublicKey$,
  SSHPublicKeyMetadata$,
  SendDelegationToken$,
  SendDelegationTokenCommand,
  SendDelegationTokenRequest$,
  ServerCertificate$,
  ServerCertificateMetadata$,
  ServiceAccessNotEnabledException,
  ServiceAccessNotEnabledException$,
  ServiceFailureException,
  ServiceFailureException$,
  ServiceLastAccessed$,
  ServiceNotSupportedException,
  ServiceNotSupportedException$,
  ServiceSpecificCredential$,
  ServiceSpecificCredentialMetadata$,
  SetDefaultPolicyVersion$,
  SetDefaultPolicyVersionCommand,
  SetDefaultPolicyVersionRequest$,
  SetSecurityTokenServicePreferences$,
  SetSecurityTokenServicePreferencesCommand,
  SetSecurityTokenServicePreferencesRequest$,
  SigningCertificate$,
  SimulateCustomPolicy$,
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyRequest$,
  SimulatePolicyResponse$,
  SimulatePrincipalPolicy$,
  SimulatePrincipalPolicyCommand,
  SimulatePrincipalPolicyRequest$,
  SortKeyType,
  StateType,
  Statement$,
  StatusType,
  SummaryKeyType,
  SummaryStateType,
  Tag$,
  TagInstanceProfile$,
  TagInstanceProfileCommand,
  TagInstanceProfileRequest$,
  TagMFADevice$,
  TagMFADeviceCommand,
  TagMFADeviceRequest$,
  TagOpenIDConnectProvider$,
  TagOpenIDConnectProviderCommand,
  TagOpenIDConnectProviderRequest$,
  TagPolicy$,
  TagPolicyCommand,
  TagPolicyRequest$,
  TagRole$,
  TagRoleCommand,
  TagRoleRequest$,
  TagSAMLProvider$,
  TagSAMLProviderCommand,
  TagSAMLProviderRequest$,
  TagServerCertificate$,
  TagServerCertificateCommand,
  TagServerCertificateRequest$,
  TagUser$,
  TagUserCommand,
  TagUserRequest$,
  TrackedActionLastAccessed$,
  UnmodifiableEntityException,
  UnmodifiableEntityException$,
  UnrecognizedPublicKeyEncodingException,
  UnrecognizedPublicKeyEncodingException$,
  UntagInstanceProfile$,
  UntagInstanceProfileCommand,
  UntagInstanceProfileRequest$,
  UntagMFADevice$,
  UntagMFADeviceCommand,
  UntagMFADeviceRequest$,
  UntagOpenIDConnectProvider$,
  UntagOpenIDConnectProviderCommand,
  UntagOpenIDConnectProviderRequest$,
  UntagPolicy$,
  UntagPolicyCommand,
  UntagPolicyRequest$,
  UntagRole$,
  UntagRoleCommand,
  UntagRoleRequest$,
  UntagSAMLProvider$,
  UntagSAMLProviderCommand,
  UntagSAMLProviderRequest$,
  UntagServerCertificate$,
  UntagServerCertificateCommand,
  UntagServerCertificateRequest$,
  UntagUser$,
  UntagUserCommand,
  UntagUserRequest$,
  UpdateAccessKey$,
  UpdateAccessKeyCommand,
  UpdateAccessKeyRequest$,
  UpdateAccountPasswordPolicy$,
  UpdateAccountPasswordPolicyCommand,
  UpdateAccountPasswordPolicyRequest$,
  UpdateAssumeRolePolicy$,
  UpdateAssumeRolePolicyCommand,
  UpdateAssumeRolePolicyRequest$,
  UpdateDelegationRequest$,
  UpdateDelegationRequestCommand,
  UpdateDelegationRequestRequest$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateLoginProfile$,
  UpdateLoginProfileCommand,
  UpdateLoginProfileRequest$,
  UpdateOpenIDConnectProviderThumbprint$,
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateOpenIDConnectProviderThumbprintRequest$,
  UpdateRole$,
  UpdateRoleCommand,
  UpdateRoleDescription$,
  UpdateRoleDescriptionCommand,
  UpdateRoleDescriptionRequest$,
  UpdateRoleDescriptionResponse$,
  UpdateRoleRequest$,
  UpdateRoleResponse$,
  UpdateSAMLProvider$,
  UpdateSAMLProviderCommand,
  UpdateSAMLProviderRequest$,
  UpdateSAMLProviderResponse$,
  UpdateSSHPublicKey$,
  UpdateSSHPublicKeyCommand,
  UpdateSSHPublicKeyRequest$,
  UpdateServerCertificate$,
  UpdateServerCertificateCommand,
  UpdateServerCertificateRequest$,
  UpdateServiceSpecificCredential$,
  UpdateServiceSpecificCredentialCommand,
  UpdateServiceSpecificCredentialRequest$,
  UpdateSigningCertificate$,
  UpdateSigningCertificateCommand,
  UpdateSigningCertificateRequest$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UploadSSHPublicKey$,
  UploadSSHPublicKeyCommand,
  UploadSSHPublicKeyRequest$,
  UploadSSHPublicKeyResponse$,
  UploadServerCertificate$,
  UploadServerCertificateCommand,
  UploadServerCertificateRequest$,
  UploadServerCertificateResponse$,
  UploadSigningCertificate$,
  UploadSigningCertificateCommand,
  UploadSigningCertificateRequest$,
  UploadSigningCertificateResponse$,
  User$,
  UserDetail$,
  VirtualMFADevice$,
  paginateGetAccountAuthorizationDetails,
  paginateGetGroup,
  paginateListAccessKeys,
  paginateListAccountAliases,
  paginateListAttachedGroupPolicies,
  paginateListAttachedRolePolicies,
  paginateListAttachedUserPolicies,
  paginateListEntitiesForPolicy,
  paginateListGroupPolicies,
  paginateListGroups,
  paginateListGroupsForUser,
  paginateListInstanceProfileTags,
  paginateListInstanceProfiles,
  paginateListInstanceProfilesForRole,
  paginateListMFADeviceTags,
  paginateListMFADevices,
  paginateListOpenIDConnectProviderTags,
  paginateListPolicies,
  paginateListPolicyTags,
  paginateListPolicyVersions,
  paginateListRolePolicies,
  paginateListRoleTags,
  paginateListRoles,
  paginateListSAMLProviderTags,
  paginateListSSHPublicKeys,
  paginateListServerCertificateTags,
  paginateListServerCertificates,
  paginateListSigningCertificates,
  paginateListUserPolicies,
  paginateListUserTags,
  paginateListUsers,
  paginateListVirtualMFADevices,
  paginateSimulateCustomPolicy,
  paginateSimulatePrincipalPolicy,
  waitForInstanceProfileExists,
  waitForPolicyExists,
  waitForRoleExists,
  waitForUserExists,
  waitUntilInstanceProfileExists,
  waitUntilPolicyExists,
  waitUntilRoleExists,
  waitUntilUserExists,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IAMClient === "function");
assert(typeof IAM === "function");
// commands
assert(typeof AcceptDelegationRequestCommand === "function");
assert(typeof AcceptDelegationRequest$ === "object");
assert(typeof AddClientIDToOpenIDConnectProviderCommand === "function");
assert(typeof AddClientIDToOpenIDConnectProvider$ === "object");
assert(typeof AddRoleToInstanceProfileCommand === "function");
assert(typeof AddRoleToInstanceProfile$ === "object");
assert(typeof AddUserToGroupCommand === "function");
assert(typeof AddUserToGroup$ === "object");
assert(typeof AssociateDelegationRequestCommand === "function");
assert(typeof AssociateDelegationRequest$ === "object");
assert(typeof AttachGroupPolicyCommand === "function");
assert(typeof AttachGroupPolicy$ === "object");
assert(typeof AttachRolePolicyCommand === "function");
assert(typeof AttachRolePolicy$ === "object");
assert(typeof AttachUserPolicyCommand === "function");
assert(typeof AttachUserPolicy$ === "object");
assert(typeof ChangePasswordCommand === "function");
assert(typeof ChangePassword$ === "object");
assert(typeof CreateAccessKeyCommand === "function");
assert(typeof CreateAccessKey$ === "object");
assert(typeof CreateAccountAliasCommand === "function");
assert(typeof CreateAccountAlias$ === "object");
assert(typeof CreateDelegationRequestCommand === "function");
assert(typeof CreateDelegationRequest$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateInstanceProfileCommand === "function");
assert(typeof CreateInstanceProfile$ === "object");
assert(typeof CreateLoginProfileCommand === "function");
assert(typeof CreateLoginProfile$ === "object");
assert(typeof CreateOpenIDConnectProviderCommand === "function");
assert(typeof CreateOpenIDConnectProvider$ === "object");
assert(typeof CreatePolicyCommand === "function");
assert(typeof CreatePolicy$ === "object");
assert(typeof CreatePolicyVersionCommand === "function");
assert(typeof CreatePolicyVersion$ === "object");
assert(typeof CreateRoleCommand === "function");
assert(typeof CreateRole$ === "object");
assert(typeof CreateSAMLProviderCommand === "function");
assert(typeof CreateSAMLProvider$ === "object");
assert(typeof CreateServiceLinkedRoleCommand === "function");
assert(typeof CreateServiceLinkedRole$ === "object");
assert(typeof CreateServiceSpecificCredentialCommand === "function");
assert(typeof CreateServiceSpecificCredential$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof CreateVirtualMFADeviceCommand === "function");
assert(typeof CreateVirtualMFADevice$ === "object");
assert(typeof DeactivateMFADeviceCommand === "function");
assert(typeof DeactivateMFADevice$ === "object");
assert(typeof DeleteAccessKeyCommand === "function");
assert(typeof DeleteAccessKey$ === "object");
assert(typeof DeleteAccountAliasCommand === "function");
assert(typeof DeleteAccountAlias$ === "object");
assert(typeof DeleteAccountPasswordPolicyCommand === "function");
assert(typeof DeleteAccountPasswordPolicy$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteGroupPolicyCommand === "function");
assert(typeof DeleteGroupPolicy$ === "object");
assert(typeof DeleteInstanceProfileCommand === "function");
assert(typeof DeleteInstanceProfile$ === "object");
assert(typeof DeleteLoginProfileCommand === "function");
assert(typeof DeleteLoginProfile$ === "object");
assert(typeof DeleteOpenIDConnectProviderCommand === "function");
assert(typeof DeleteOpenIDConnectProvider$ === "object");
assert(typeof DeletePolicyCommand === "function");
assert(typeof DeletePolicy$ === "object");
assert(typeof DeletePolicyVersionCommand === "function");
assert(typeof DeletePolicyVersion$ === "object");
assert(typeof DeleteRoleCommand === "function");
assert(typeof DeleteRole$ === "object");
assert(typeof DeleteRolePermissionsBoundaryCommand === "function");
assert(typeof DeleteRolePermissionsBoundary$ === "object");
assert(typeof DeleteRolePolicyCommand === "function");
assert(typeof DeleteRolePolicy$ === "object");
assert(typeof DeleteSAMLProviderCommand === "function");
assert(typeof DeleteSAMLProvider$ === "object");
assert(typeof DeleteServerCertificateCommand === "function");
assert(typeof DeleteServerCertificate$ === "object");
assert(typeof DeleteServiceLinkedRoleCommand === "function");
assert(typeof DeleteServiceLinkedRole$ === "object");
assert(typeof DeleteServiceSpecificCredentialCommand === "function");
assert(typeof DeleteServiceSpecificCredential$ === "object");
assert(typeof DeleteSigningCertificateCommand === "function");
assert(typeof DeleteSigningCertificate$ === "object");
assert(typeof DeleteSSHPublicKeyCommand === "function");
assert(typeof DeleteSSHPublicKey$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteUserPermissionsBoundaryCommand === "function");
assert(typeof DeleteUserPermissionsBoundary$ === "object");
assert(typeof DeleteUserPolicyCommand === "function");
assert(typeof DeleteUserPolicy$ === "object");
assert(typeof DeleteVirtualMFADeviceCommand === "function");
assert(typeof DeleteVirtualMFADevice$ === "object");
assert(typeof DetachGroupPolicyCommand === "function");
assert(typeof DetachGroupPolicy$ === "object");
assert(typeof DetachRolePolicyCommand === "function");
assert(typeof DetachRolePolicy$ === "object");
assert(typeof DetachUserPolicyCommand === "function");
assert(typeof DetachUserPolicy$ === "object");
assert(typeof DisableOrganizationsRootCredentialsManagementCommand === "function");
assert(typeof DisableOrganizationsRootCredentialsManagement$ === "object");
assert(typeof DisableOrganizationsRootSessionsCommand === "function");
assert(typeof DisableOrganizationsRootSessions$ === "object");
assert(typeof DisableOutboundWebIdentityFederationCommand === "function");
assert(typeof DisableOutboundWebIdentityFederation$ === "object");
assert(typeof EnableMFADeviceCommand === "function");
assert(typeof EnableMFADevice$ === "object");
assert(typeof EnableOrganizationsRootCredentialsManagementCommand === "function");
assert(typeof EnableOrganizationsRootCredentialsManagement$ === "object");
assert(typeof EnableOrganizationsRootSessionsCommand === "function");
assert(typeof EnableOrganizationsRootSessions$ === "object");
assert(typeof EnableOutboundWebIdentityFederationCommand === "function");
assert(typeof EnableOutboundWebIdentityFederation$ === "object");
assert(typeof GenerateCredentialReportCommand === "function");
assert(typeof GenerateCredentialReport$ === "object");
assert(typeof GenerateOrganizationsAccessReportCommand === "function");
assert(typeof GenerateOrganizationsAccessReport$ === "object");
assert(typeof GenerateServiceLastAccessedDetailsCommand === "function");
assert(typeof GenerateServiceLastAccessedDetails$ === "object");
assert(typeof GetAccessKeyLastUsedCommand === "function");
assert(typeof GetAccessKeyLastUsed$ === "object");
assert(typeof GetAccountAuthorizationDetailsCommand === "function");
assert(typeof GetAccountAuthorizationDetails$ === "object");
assert(typeof GetAccountPasswordPolicyCommand === "function");
assert(typeof GetAccountPasswordPolicy$ === "object");
assert(typeof GetAccountSummaryCommand === "function");
assert(typeof GetAccountSummary$ === "object");
assert(typeof GetContextKeysForCustomPolicyCommand === "function");
assert(typeof GetContextKeysForCustomPolicy$ === "object");
assert(typeof GetContextKeysForPrincipalPolicyCommand === "function");
assert(typeof GetContextKeysForPrincipalPolicy$ === "object");
assert(typeof GetCredentialReportCommand === "function");
assert(typeof GetCredentialReport$ === "object");
assert(typeof GetDelegationRequestCommand === "function");
assert(typeof GetDelegationRequest$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetGroupPolicyCommand === "function");
assert(typeof GetGroupPolicy$ === "object");
assert(typeof GetHumanReadableSummaryCommand === "function");
assert(typeof GetHumanReadableSummary$ === "object");
assert(typeof GetInstanceProfileCommand === "function");
assert(typeof GetInstanceProfile$ === "object");
assert(typeof GetLoginProfileCommand === "function");
assert(typeof GetLoginProfile$ === "object");
assert(typeof GetMFADeviceCommand === "function");
assert(typeof GetMFADevice$ === "object");
assert(typeof GetOpenIDConnectProviderCommand === "function");
assert(typeof GetOpenIDConnectProvider$ === "object");
assert(typeof GetOrganizationsAccessReportCommand === "function");
assert(typeof GetOrganizationsAccessReport$ === "object");
assert(typeof GetOutboundWebIdentityFederationInfoCommand === "function");
assert(typeof GetOutboundWebIdentityFederationInfo$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetPolicyVersionCommand === "function");
assert(typeof GetPolicyVersion$ === "object");
assert(typeof GetRoleCommand === "function");
assert(typeof GetRole$ === "object");
assert(typeof GetRolePolicyCommand === "function");
assert(typeof GetRolePolicy$ === "object");
assert(typeof GetSAMLProviderCommand === "function");
assert(typeof GetSAMLProvider$ === "object");
assert(typeof GetServerCertificateCommand === "function");
assert(typeof GetServerCertificate$ === "object");
assert(typeof GetServiceLastAccessedDetailsCommand === "function");
assert(typeof GetServiceLastAccessedDetails$ === "object");
assert(typeof GetServiceLastAccessedDetailsWithEntitiesCommand === "function");
assert(typeof GetServiceLastAccessedDetailsWithEntities$ === "object");
assert(typeof GetServiceLinkedRoleDeletionStatusCommand === "function");
assert(typeof GetServiceLinkedRoleDeletionStatus$ === "object");
assert(typeof GetSSHPublicKeyCommand === "function");
assert(typeof GetSSHPublicKey$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetUserPolicyCommand === "function");
assert(typeof GetUserPolicy$ === "object");
assert(typeof ListAccessKeysCommand === "function");
assert(typeof ListAccessKeys$ === "object");
assert(typeof ListAccountAliasesCommand === "function");
assert(typeof ListAccountAliases$ === "object");
assert(typeof ListAttachedGroupPoliciesCommand === "function");
assert(typeof ListAttachedGroupPolicies$ === "object");
assert(typeof ListAttachedRolePoliciesCommand === "function");
assert(typeof ListAttachedRolePolicies$ === "object");
assert(typeof ListAttachedUserPoliciesCommand === "function");
assert(typeof ListAttachedUserPolicies$ === "object");
assert(typeof ListDelegationRequestsCommand === "function");
assert(typeof ListDelegationRequests$ === "object");
assert(typeof ListEntitiesForPolicyCommand === "function");
assert(typeof ListEntitiesForPolicy$ === "object");
assert(typeof ListGroupPoliciesCommand === "function");
assert(typeof ListGroupPolicies$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListGroupsForUserCommand === "function");
assert(typeof ListGroupsForUser$ === "object");
assert(typeof ListInstanceProfilesCommand === "function");
assert(typeof ListInstanceProfiles$ === "object");
assert(typeof ListInstanceProfilesForRoleCommand === "function");
assert(typeof ListInstanceProfilesForRole$ === "object");
assert(typeof ListInstanceProfileTagsCommand === "function");
assert(typeof ListInstanceProfileTags$ === "object");
assert(typeof ListMFADevicesCommand === "function");
assert(typeof ListMFADevices$ === "object");
assert(typeof ListMFADeviceTagsCommand === "function");
assert(typeof ListMFADeviceTags$ === "object");
assert(typeof ListOpenIDConnectProvidersCommand === "function");
assert(typeof ListOpenIDConnectProviders$ === "object");
assert(typeof ListOpenIDConnectProviderTagsCommand === "function");
assert(typeof ListOpenIDConnectProviderTags$ === "object");
assert(typeof ListOrganizationsFeaturesCommand === "function");
assert(typeof ListOrganizationsFeatures$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPoliciesGrantingServiceAccessCommand === "function");
assert(typeof ListPoliciesGrantingServiceAccess$ === "object");
assert(typeof ListPolicyTagsCommand === "function");
assert(typeof ListPolicyTags$ === "object");
assert(typeof ListPolicyVersionsCommand === "function");
assert(typeof ListPolicyVersions$ === "object");
assert(typeof ListRolePoliciesCommand === "function");
assert(typeof ListRolePolicies$ === "object");
assert(typeof ListRolesCommand === "function");
assert(typeof ListRoles$ === "object");
assert(typeof ListRoleTagsCommand === "function");
assert(typeof ListRoleTags$ === "object");
assert(typeof ListSAMLProvidersCommand === "function");
assert(typeof ListSAMLProviders$ === "object");
assert(typeof ListSAMLProviderTagsCommand === "function");
assert(typeof ListSAMLProviderTags$ === "object");
assert(typeof ListServerCertificatesCommand === "function");
assert(typeof ListServerCertificates$ === "object");
assert(typeof ListServerCertificateTagsCommand === "function");
assert(typeof ListServerCertificateTags$ === "object");
assert(typeof ListServiceSpecificCredentialsCommand === "function");
assert(typeof ListServiceSpecificCredentials$ === "object");
assert(typeof ListSigningCertificatesCommand === "function");
assert(typeof ListSigningCertificates$ === "object");
assert(typeof ListSSHPublicKeysCommand === "function");
assert(typeof ListSSHPublicKeys$ === "object");
assert(typeof ListUserPoliciesCommand === "function");
assert(typeof ListUserPolicies$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof ListUserTagsCommand === "function");
assert(typeof ListUserTags$ === "object");
assert(typeof ListVirtualMFADevicesCommand === "function");
assert(typeof ListVirtualMFADevices$ === "object");
assert(typeof PutGroupPolicyCommand === "function");
assert(typeof PutGroupPolicy$ === "object");
assert(typeof PutRolePermissionsBoundaryCommand === "function");
assert(typeof PutRolePermissionsBoundary$ === "object");
assert(typeof PutRolePolicyCommand === "function");
assert(typeof PutRolePolicy$ === "object");
assert(typeof PutUserPermissionsBoundaryCommand === "function");
assert(typeof PutUserPermissionsBoundary$ === "object");
assert(typeof PutUserPolicyCommand === "function");
assert(typeof PutUserPolicy$ === "object");
assert(typeof RejectDelegationRequestCommand === "function");
assert(typeof RejectDelegationRequest$ === "object");
assert(typeof RemoveClientIDFromOpenIDConnectProviderCommand === "function");
assert(typeof RemoveClientIDFromOpenIDConnectProvider$ === "object");
assert(typeof RemoveRoleFromInstanceProfileCommand === "function");
assert(typeof RemoveRoleFromInstanceProfile$ === "object");
assert(typeof RemoveUserFromGroupCommand === "function");
assert(typeof RemoveUserFromGroup$ === "object");
assert(typeof ResetServiceSpecificCredentialCommand === "function");
assert(typeof ResetServiceSpecificCredential$ === "object");
assert(typeof ResyncMFADeviceCommand === "function");
assert(typeof ResyncMFADevice$ === "object");
assert(typeof SendDelegationTokenCommand === "function");
assert(typeof SendDelegationToken$ === "object");
assert(typeof SetDefaultPolicyVersionCommand === "function");
assert(typeof SetDefaultPolicyVersion$ === "object");
assert(typeof SetSecurityTokenServicePreferencesCommand === "function");
assert(typeof SetSecurityTokenServicePreferences$ === "object");
assert(typeof SimulateCustomPolicyCommand === "function");
assert(typeof SimulateCustomPolicy$ === "object");
assert(typeof SimulatePrincipalPolicyCommand === "function");
assert(typeof SimulatePrincipalPolicy$ === "object");
assert(typeof TagInstanceProfileCommand === "function");
assert(typeof TagInstanceProfile$ === "object");
assert(typeof TagMFADeviceCommand === "function");
assert(typeof TagMFADevice$ === "object");
assert(typeof TagOpenIDConnectProviderCommand === "function");
assert(typeof TagOpenIDConnectProvider$ === "object");
assert(typeof TagPolicyCommand === "function");
assert(typeof TagPolicy$ === "object");
assert(typeof TagRoleCommand === "function");
assert(typeof TagRole$ === "object");
assert(typeof TagSAMLProviderCommand === "function");
assert(typeof TagSAMLProvider$ === "object");
assert(typeof TagServerCertificateCommand === "function");
assert(typeof TagServerCertificate$ === "object");
assert(typeof TagUserCommand === "function");
assert(typeof TagUser$ === "object");
assert(typeof UntagInstanceProfileCommand === "function");
assert(typeof UntagInstanceProfile$ === "object");
assert(typeof UntagMFADeviceCommand === "function");
assert(typeof UntagMFADevice$ === "object");
assert(typeof UntagOpenIDConnectProviderCommand === "function");
assert(typeof UntagOpenIDConnectProvider$ === "object");
assert(typeof UntagPolicyCommand === "function");
assert(typeof UntagPolicy$ === "object");
assert(typeof UntagRoleCommand === "function");
assert(typeof UntagRole$ === "object");
assert(typeof UntagSAMLProviderCommand === "function");
assert(typeof UntagSAMLProvider$ === "object");
assert(typeof UntagServerCertificateCommand === "function");
assert(typeof UntagServerCertificate$ === "object");
assert(typeof UntagUserCommand === "function");
assert(typeof UntagUser$ === "object");
assert(typeof UpdateAccessKeyCommand === "function");
assert(typeof UpdateAccessKey$ === "object");
assert(typeof UpdateAccountPasswordPolicyCommand === "function");
assert(typeof UpdateAccountPasswordPolicy$ === "object");
assert(typeof UpdateAssumeRolePolicyCommand === "function");
assert(typeof UpdateAssumeRolePolicy$ === "object");
assert(typeof UpdateDelegationRequestCommand === "function");
assert(typeof UpdateDelegationRequest$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateLoginProfileCommand === "function");
assert(typeof UpdateLoginProfile$ === "object");
assert(typeof UpdateOpenIDConnectProviderThumbprintCommand === "function");
assert(typeof UpdateOpenIDConnectProviderThumbprint$ === "object");
assert(typeof UpdateRoleCommand === "function");
assert(typeof UpdateRole$ === "object");
assert(typeof UpdateRoleDescriptionCommand === "function");
assert(typeof UpdateRoleDescription$ === "object");
assert(typeof UpdateSAMLProviderCommand === "function");
assert(typeof UpdateSAMLProvider$ === "object");
assert(typeof UpdateServerCertificateCommand === "function");
assert(typeof UpdateServerCertificate$ === "object");
assert(typeof UpdateServiceSpecificCredentialCommand === "function");
assert(typeof UpdateServiceSpecificCredential$ === "object");
assert(typeof UpdateSigningCertificateCommand === "function");
assert(typeof UpdateSigningCertificate$ === "object");
assert(typeof UpdateSSHPublicKeyCommand === "function");
assert(typeof UpdateSSHPublicKey$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
assert(typeof UploadServerCertificateCommand === "function");
assert(typeof UploadServerCertificate$ === "object");
assert(typeof UploadSigningCertificateCommand === "function");
assert(typeof UploadSigningCertificate$ === "object");
assert(typeof UploadSSHPublicKeyCommand === "function");
assert(typeof UploadSSHPublicKey$ === "object");
// structural schemas
assert(typeof AcceptDelegationRequestRequest$ === "object");
assert(typeof AccessDetail$ === "object");
assert(typeof AccessKey$ === "object");
assert(typeof AccessKeyLastUsed$ === "object");
assert(typeof AccessKeyMetadata$ === "object");
assert(typeof AddClientIDToOpenIDConnectProviderRequest$ === "object");
assert(typeof AddRoleToInstanceProfileRequest$ === "object");
assert(typeof AddUserToGroupRequest$ === "object");
assert(typeof AssociateDelegationRequestRequest$ === "object");
assert(typeof AttachedPermissionsBoundary$ === "object");
assert(typeof AttachedPolicy$ === "object");
assert(typeof AttachGroupPolicyRequest$ === "object");
assert(typeof AttachRolePolicyRequest$ === "object");
assert(typeof AttachUserPolicyRequest$ === "object");
assert(typeof ChangePasswordRequest$ === "object");
assert(typeof ContextEntry$ === "object");
assert(typeof CreateAccessKeyRequest$ === "object");
assert(typeof CreateAccessKeyResponse$ === "object");
assert(typeof CreateAccountAliasRequest$ === "object");
assert(typeof CreateDelegationRequestRequest$ === "object");
assert(typeof CreateDelegationRequestResponse$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof CreateInstanceProfileRequest$ === "object");
assert(typeof CreateInstanceProfileResponse$ === "object");
assert(typeof CreateLoginProfileRequest$ === "object");
assert(typeof CreateLoginProfileResponse$ === "object");
assert(typeof CreateOpenIDConnectProviderRequest$ === "object");
assert(typeof CreateOpenIDConnectProviderResponse$ === "object");
assert(typeof CreatePolicyRequest$ === "object");
assert(typeof CreatePolicyResponse$ === "object");
assert(typeof CreatePolicyVersionRequest$ === "object");
assert(typeof CreatePolicyVersionResponse$ === "object");
assert(typeof CreateRoleRequest$ === "object");
assert(typeof CreateRoleResponse$ === "object");
assert(typeof CreateSAMLProviderRequest$ === "object");
assert(typeof CreateSAMLProviderResponse$ === "object");
assert(typeof CreateServiceLinkedRoleRequest$ === "object");
assert(typeof CreateServiceLinkedRoleResponse$ === "object");
assert(typeof CreateServiceSpecificCredentialRequest$ === "object");
assert(typeof CreateServiceSpecificCredentialResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof CreateVirtualMFADeviceRequest$ === "object");
assert(typeof CreateVirtualMFADeviceResponse$ === "object");
assert(typeof DeactivateMFADeviceRequest$ === "object");
assert(typeof DelegationPermission$ === "object");
assert(typeof DelegationRequest$ === "object");
assert(typeof DeleteAccessKeyRequest$ === "object");
assert(typeof DeleteAccountAliasRequest$ === "object");
assert(typeof DeleteGroupPolicyRequest$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteInstanceProfileRequest$ === "object");
assert(typeof DeleteLoginProfileRequest$ === "object");
assert(typeof DeleteOpenIDConnectProviderRequest$ === "object");
assert(typeof DeletePolicyRequest$ === "object");
assert(typeof DeletePolicyVersionRequest$ === "object");
assert(typeof DeleteRolePermissionsBoundaryRequest$ === "object");
assert(typeof DeleteRolePolicyRequest$ === "object");
assert(typeof DeleteRoleRequest$ === "object");
assert(typeof DeleteSAMLProviderRequest$ === "object");
assert(typeof DeleteServerCertificateRequest$ === "object");
assert(typeof DeleteServiceLinkedRoleRequest$ === "object");
assert(typeof DeleteServiceLinkedRoleResponse$ === "object");
assert(typeof DeleteServiceSpecificCredentialRequest$ === "object");
assert(typeof DeleteSigningCertificateRequest$ === "object");
assert(typeof DeleteSSHPublicKeyRequest$ === "object");
assert(typeof DeleteUserPermissionsBoundaryRequest$ === "object");
assert(typeof DeleteUserPolicyRequest$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteVirtualMFADeviceRequest$ === "object");
assert(typeof DeletionTaskFailureReasonType$ === "object");
assert(typeof DetachGroupPolicyRequest$ === "object");
assert(typeof DetachRolePolicyRequest$ === "object");
assert(typeof DetachUserPolicyRequest$ === "object");
assert(typeof DisableOrganizationsRootCredentialsManagementRequest$ === "object");
assert(typeof DisableOrganizationsRootCredentialsManagementResponse$ === "object");
assert(typeof DisableOrganizationsRootSessionsRequest$ === "object");
assert(typeof DisableOrganizationsRootSessionsResponse$ === "object");
assert(typeof EnableMFADeviceRequest$ === "object");
assert(typeof EnableOrganizationsRootCredentialsManagementRequest$ === "object");
assert(typeof EnableOrganizationsRootCredentialsManagementResponse$ === "object");
assert(typeof EnableOrganizationsRootSessionsRequest$ === "object");
assert(typeof EnableOrganizationsRootSessionsResponse$ === "object");
assert(typeof EnableOutboundWebIdentityFederationResponse$ === "object");
assert(typeof EntityDetails$ === "object");
assert(typeof EntityInfo$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof GenerateCredentialReportResponse$ === "object");
assert(typeof GenerateOrganizationsAccessReportRequest$ === "object");
assert(typeof GenerateOrganizationsAccessReportResponse$ === "object");
assert(typeof GenerateServiceLastAccessedDetailsRequest$ === "object");
assert(typeof GenerateServiceLastAccessedDetailsResponse$ === "object");
assert(typeof GetAccessKeyLastUsedRequest$ === "object");
assert(typeof GetAccessKeyLastUsedResponse$ === "object");
assert(typeof GetAccountAuthorizationDetailsRequest$ === "object");
assert(typeof GetAccountAuthorizationDetailsResponse$ === "object");
assert(typeof GetAccountPasswordPolicyResponse$ === "object");
assert(typeof GetAccountSummaryResponse$ === "object");
assert(typeof GetContextKeysForCustomPolicyRequest$ === "object");
assert(typeof GetContextKeysForPolicyResponse$ === "object");
assert(typeof GetContextKeysForPrincipalPolicyRequest$ === "object");
assert(typeof GetCredentialReportResponse$ === "object");
assert(typeof GetDelegationRequestRequest$ === "object");
assert(typeof GetDelegationRequestResponse$ === "object");
assert(typeof GetGroupPolicyRequest$ === "object");
assert(typeof GetGroupPolicyResponse$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResponse$ === "object");
assert(typeof GetHumanReadableSummaryRequest$ === "object");
assert(typeof GetHumanReadableSummaryResponse$ === "object");
assert(typeof GetInstanceProfileRequest$ === "object");
assert(typeof GetInstanceProfileResponse$ === "object");
assert(typeof GetLoginProfileRequest$ === "object");
assert(typeof GetLoginProfileResponse$ === "object");
assert(typeof GetMFADeviceRequest$ === "object");
assert(typeof GetMFADeviceResponse$ === "object");
assert(typeof GetOpenIDConnectProviderRequest$ === "object");
assert(typeof GetOpenIDConnectProviderResponse$ === "object");
assert(typeof GetOrganizationsAccessReportRequest$ === "object");
assert(typeof GetOrganizationsAccessReportResponse$ === "object");
assert(typeof GetOutboundWebIdentityFederationInfoResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetPolicyVersionRequest$ === "object");
assert(typeof GetPolicyVersionResponse$ === "object");
assert(typeof GetRolePolicyRequest$ === "object");
assert(typeof GetRolePolicyResponse$ === "object");
assert(typeof GetRoleRequest$ === "object");
assert(typeof GetRoleResponse$ === "object");
assert(typeof GetSAMLProviderRequest$ === "object");
assert(typeof GetSAMLProviderResponse$ === "object");
assert(typeof GetServerCertificateRequest$ === "object");
assert(typeof GetServerCertificateResponse$ === "object");
assert(typeof GetServiceLastAccessedDetailsRequest$ === "object");
assert(typeof GetServiceLastAccessedDetailsResponse$ === "object");
assert(typeof GetServiceLastAccessedDetailsWithEntitiesRequest$ === "object");
assert(typeof GetServiceLastAccessedDetailsWithEntitiesResponse$ === "object");
assert(typeof GetServiceLinkedRoleDeletionStatusRequest$ === "object");
assert(typeof GetServiceLinkedRoleDeletionStatusResponse$ === "object");
assert(typeof GetSSHPublicKeyRequest$ === "object");
assert(typeof GetSSHPublicKeyResponse$ === "object");
assert(typeof GetUserPolicyRequest$ === "object");
assert(typeof GetUserPolicyResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupDetail$ === "object");
assert(typeof InstanceProfile$ === "object");
assert(typeof ListAccessKeysRequest$ === "object");
assert(typeof ListAccessKeysResponse$ === "object");
assert(typeof ListAccountAliasesRequest$ === "object");
assert(typeof ListAccountAliasesResponse$ === "object");
assert(typeof ListAttachedGroupPoliciesRequest$ === "object");
assert(typeof ListAttachedGroupPoliciesResponse$ === "object");
assert(typeof ListAttachedRolePoliciesRequest$ === "object");
assert(typeof ListAttachedRolePoliciesResponse$ === "object");
assert(typeof ListAttachedUserPoliciesRequest$ === "object");
assert(typeof ListAttachedUserPoliciesResponse$ === "object");
assert(typeof ListDelegationRequestsRequest$ === "object");
assert(typeof ListDelegationRequestsResponse$ === "object");
assert(typeof ListEntitiesForPolicyRequest$ === "object");
assert(typeof ListEntitiesForPolicyResponse$ === "object");
assert(typeof ListGroupPoliciesRequest$ === "object");
assert(typeof ListGroupPoliciesResponse$ === "object");
assert(typeof ListGroupsForUserRequest$ === "object");
assert(typeof ListGroupsForUserResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListInstanceProfilesForRoleRequest$ === "object");
assert(typeof ListInstanceProfilesForRoleResponse$ === "object");
assert(typeof ListInstanceProfilesRequest$ === "object");
assert(typeof ListInstanceProfilesResponse$ === "object");
assert(typeof ListInstanceProfileTagsRequest$ === "object");
assert(typeof ListInstanceProfileTagsResponse$ === "object");
assert(typeof ListMFADevicesRequest$ === "object");
assert(typeof ListMFADevicesResponse$ === "object");
assert(typeof ListMFADeviceTagsRequest$ === "object");
assert(typeof ListMFADeviceTagsResponse$ === "object");
assert(typeof ListOpenIDConnectProvidersRequest$ === "object");
assert(typeof ListOpenIDConnectProvidersResponse$ === "object");
assert(typeof ListOpenIDConnectProviderTagsRequest$ === "object");
assert(typeof ListOpenIDConnectProviderTagsResponse$ === "object");
assert(typeof ListOrganizationsFeaturesRequest$ === "object");
assert(typeof ListOrganizationsFeaturesResponse$ === "object");
assert(typeof ListPoliciesGrantingServiceAccessEntry$ === "object");
assert(typeof ListPoliciesGrantingServiceAccessRequest$ === "object");
assert(typeof ListPoliciesGrantingServiceAccessResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListPolicyTagsRequest$ === "object");
assert(typeof ListPolicyTagsResponse$ === "object");
assert(typeof ListPolicyVersionsRequest$ === "object");
assert(typeof ListPolicyVersionsResponse$ === "object");
assert(typeof ListRolePoliciesRequest$ === "object");
assert(typeof ListRolePoliciesResponse$ === "object");
assert(typeof ListRolesRequest$ === "object");
assert(typeof ListRolesResponse$ === "object");
assert(typeof ListRoleTagsRequest$ === "object");
assert(typeof ListRoleTagsResponse$ === "object");
assert(typeof ListSAMLProvidersRequest$ === "object");
assert(typeof ListSAMLProvidersResponse$ === "object");
assert(typeof ListSAMLProviderTagsRequest$ === "object");
assert(typeof ListSAMLProviderTagsResponse$ === "object");
assert(typeof ListServerCertificatesRequest$ === "object");
assert(typeof ListServerCertificatesResponse$ === "object");
assert(typeof ListServerCertificateTagsRequest$ === "object");
assert(typeof ListServerCertificateTagsResponse$ === "object");
assert(typeof ListServiceSpecificCredentialsRequest$ === "object");
assert(typeof ListServiceSpecificCredentialsResponse$ === "object");
assert(typeof ListSigningCertificatesRequest$ === "object");
assert(typeof ListSigningCertificatesResponse$ === "object");
assert(typeof ListSSHPublicKeysRequest$ === "object");
assert(typeof ListSSHPublicKeysResponse$ === "object");
assert(typeof ListUserPoliciesRequest$ === "object");
assert(typeof ListUserPoliciesResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof ListUserTagsRequest$ === "object");
assert(typeof ListUserTagsResponse$ === "object");
assert(typeof ListVirtualMFADevicesRequest$ === "object");
assert(typeof ListVirtualMFADevicesResponse$ === "object");
assert(typeof LoginProfile$ === "object");
assert(typeof ManagedPolicyDetail$ === "object");
assert(typeof MFADevice$ === "object");
assert(typeof OpenIDConnectProviderListEntry$ === "object");
assert(typeof OrganizationsDecisionDetail$ === "object");
assert(typeof PasswordPolicy$ === "object");
assert(typeof PermissionsBoundaryDecisionDetail$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyDetail$ === "object");
assert(typeof PolicyGrantingServiceAccess$ === "object");
assert(typeof PolicyGroup$ === "object");
assert(typeof PolicyParameter$ === "object");
assert(typeof PolicyRole$ === "object");
assert(typeof PolicyUser$ === "object");
assert(typeof PolicyVersion$ === "object");
assert(typeof Position$ === "object");
assert(typeof PutGroupPolicyRequest$ === "object");
assert(typeof PutRolePermissionsBoundaryRequest$ === "object");
assert(typeof PutRolePolicyRequest$ === "object");
assert(typeof PutUserPermissionsBoundaryRequest$ === "object");
assert(typeof PutUserPolicyRequest$ === "object");
assert(typeof RejectDelegationRequestRequest$ === "object");
assert(typeof RemoveClientIDFromOpenIDConnectProviderRequest$ === "object");
assert(typeof RemoveRoleFromInstanceProfileRequest$ === "object");
assert(typeof RemoveUserFromGroupRequest$ === "object");
assert(typeof ResetServiceSpecificCredentialRequest$ === "object");
assert(typeof ResetServiceSpecificCredentialResponse$ === "object");
assert(typeof ResourceSpecificResult$ === "object");
assert(typeof ResyncMFADeviceRequest$ === "object");
assert(typeof Role$ === "object");
assert(typeof RoleDetail$ === "object");
assert(typeof RoleLastUsed$ === "object");
assert(typeof RoleUsageType$ === "object");
assert(typeof SAMLPrivateKey$ === "object");
assert(typeof SAMLProviderListEntry$ === "object");
assert(typeof SendDelegationTokenRequest$ === "object");
assert(typeof ServerCertificate$ === "object");
assert(typeof ServerCertificateMetadata$ === "object");
assert(typeof ServiceLastAccessed$ === "object");
assert(typeof ServiceSpecificCredential$ === "object");
assert(typeof ServiceSpecificCredentialMetadata$ === "object");
assert(typeof SetDefaultPolicyVersionRequest$ === "object");
assert(typeof SetSecurityTokenServicePreferencesRequest$ === "object");
assert(typeof SigningCertificate$ === "object");
assert(typeof SimulateCustomPolicyRequest$ === "object");
assert(typeof SimulatePolicyResponse$ === "object");
assert(typeof SimulatePrincipalPolicyRequest$ === "object");
assert(typeof SSHPublicKey$ === "object");
assert(typeof SSHPublicKeyMetadata$ === "object");
assert(typeof Statement$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagInstanceProfileRequest$ === "object");
assert(typeof TagMFADeviceRequest$ === "object");
assert(typeof TagOpenIDConnectProviderRequest$ === "object");
assert(typeof TagPolicyRequest$ === "object");
assert(typeof TagRoleRequest$ === "object");
assert(typeof TagSAMLProviderRequest$ === "object");
assert(typeof TagServerCertificateRequest$ === "object");
assert(typeof TagUserRequest$ === "object");
assert(typeof TrackedActionLastAccessed$ === "object");
assert(typeof UntagInstanceProfileRequest$ === "object");
assert(typeof UntagMFADeviceRequest$ === "object");
assert(typeof UntagOpenIDConnectProviderRequest$ === "object");
assert(typeof UntagPolicyRequest$ === "object");
assert(typeof UntagRoleRequest$ === "object");
assert(typeof UntagSAMLProviderRequest$ === "object");
assert(typeof UntagServerCertificateRequest$ === "object");
assert(typeof UntagUserRequest$ === "object");
assert(typeof UpdateAccessKeyRequest$ === "object");
assert(typeof UpdateAccountPasswordPolicyRequest$ === "object");
assert(typeof UpdateAssumeRolePolicyRequest$ === "object");
assert(typeof UpdateDelegationRequestRequest$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateLoginProfileRequest$ === "object");
assert(typeof UpdateOpenIDConnectProviderThumbprintRequest$ === "object");
assert(typeof UpdateRoleDescriptionRequest$ === "object");
assert(typeof UpdateRoleDescriptionResponse$ === "object");
assert(typeof UpdateRoleRequest$ === "object");
assert(typeof UpdateRoleResponse$ === "object");
assert(typeof UpdateSAMLProviderRequest$ === "object");
assert(typeof UpdateSAMLProviderResponse$ === "object");
assert(typeof UpdateServerCertificateRequest$ === "object");
assert(typeof UpdateServiceSpecificCredentialRequest$ === "object");
assert(typeof UpdateSigningCertificateRequest$ === "object");
assert(typeof UpdateSSHPublicKeyRequest$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UploadServerCertificateRequest$ === "object");
assert(typeof UploadServerCertificateResponse$ === "object");
assert(typeof UploadSigningCertificateRequest$ === "object");
assert(typeof UploadSigningCertificateResponse$ === "object");
assert(typeof UploadSSHPublicKeyRequest$ === "object");
assert(typeof UploadSSHPublicKeyResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof UserDetail$ === "object");
assert(typeof VirtualMFADevice$ === "object");
// enums
assert(typeof AccessAdvisorUsageGranularityType === "object");
assert(typeof AssertionEncryptionModeType === "object");
assert(typeof AssignmentStatusType === "object");
assert(typeof ContextKeyTypeEnum === "object");
assert(typeof DeletionTaskStatusType === "object");
assert(typeof EncodingType === "object");
assert(typeof EntityType === "object");
assert(typeof FeatureType === "object");
assert(typeof GlobalEndpointTokenVersion === "object");
assert(typeof JobStatusType === "object");
assert(typeof PermissionCheckResultType === "object");
assert(typeof PermissionCheckStatusType === "object");
assert(typeof PermissionsBoundaryAttachmentType === "object");
assert(typeof PolicyEvaluationDecisionType === "object");
assert(typeof PolicyOwnerEntityType === "object");
assert(typeof PolicyParameterTypeEnum === "object");
assert(typeof PolicyScopeType === "object");
assert(typeof PolicySourceType === "object");
assert(typeof PolicyType === "object");
assert(typeof PolicyUsageType === "object");
assert(typeof ReportFormatType === "object");
assert(typeof ReportStateType === "object");
assert(typeof SortKeyType === "object");
assert(typeof StateType === "object");
assert(typeof StatusType === "object");
assert(typeof SummaryKeyType === "object");
assert(typeof SummaryStateType === "object");
// errors
assert(AccountNotManagementOrDelegatedAdministratorException.prototype instanceof IAMServiceException);
assert(typeof AccountNotManagementOrDelegatedAdministratorException$ === "object");
assert(CallerIsNotManagementAccountException.prototype instanceof IAMServiceException);
assert(typeof CallerIsNotManagementAccountException$ === "object");
assert(ConcurrentModificationException.prototype instanceof IAMServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(CredentialReportExpiredException.prototype instanceof IAMServiceException);
assert(typeof CredentialReportExpiredException$ === "object");
assert(CredentialReportNotPresentException.prototype instanceof IAMServiceException);
assert(typeof CredentialReportNotPresentException$ === "object");
assert(CredentialReportNotReadyException.prototype instanceof IAMServiceException);
assert(typeof CredentialReportNotReadyException$ === "object");
assert(DeleteConflictException.prototype instanceof IAMServiceException);
assert(typeof DeleteConflictException$ === "object");
assert(DuplicateCertificateException.prototype instanceof IAMServiceException);
assert(typeof DuplicateCertificateException$ === "object");
assert(DuplicateSSHPublicKeyException.prototype instanceof IAMServiceException);
assert(typeof DuplicateSSHPublicKeyException$ === "object");
assert(EntityAlreadyExistsException.prototype instanceof IAMServiceException);
assert(typeof EntityAlreadyExistsException$ === "object");
assert(EntityTemporarilyUnmodifiableException.prototype instanceof IAMServiceException);
assert(typeof EntityTemporarilyUnmodifiableException$ === "object");
assert(FeatureDisabledException.prototype instanceof IAMServiceException);
assert(typeof FeatureDisabledException$ === "object");
assert(FeatureEnabledException.prototype instanceof IAMServiceException);
assert(typeof FeatureEnabledException$ === "object");
assert(InvalidAuthenticationCodeException.prototype instanceof IAMServiceException);
assert(typeof InvalidAuthenticationCodeException$ === "object");
assert(InvalidCertificateException.prototype instanceof IAMServiceException);
assert(typeof InvalidCertificateException$ === "object");
assert(InvalidInputException.prototype instanceof IAMServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidPublicKeyException.prototype instanceof IAMServiceException);
assert(typeof InvalidPublicKeyException$ === "object");
assert(InvalidUserTypeException.prototype instanceof IAMServiceException);
assert(typeof InvalidUserTypeException$ === "object");
assert(KeyPairMismatchException.prototype instanceof IAMServiceException);
assert(typeof KeyPairMismatchException$ === "object");
assert(LimitExceededException.prototype instanceof IAMServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MalformedCertificateException.prototype instanceof IAMServiceException);
assert(typeof MalformedCertificateException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof IAMServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(NoSuchEntityException.prototype instanceof IAMServiceException);
assert(typeof NoSuchEntityException$ === "object");
assert(OpenIdIdpCommunicationErrorException.prototype instanceof IAMServiceException);
assert(typeof OpenIdIdpCommunicationErrorException$ === "object");
assert(OrganizationNotFoundException.prototype instanceof IAMServiceException);
assert(typeof OrganizationNotFoundException$ === "object");
assert(OrganizationNotInAllFeaturesModeException.prototype instanceof IAMServiceException);
assert(typeof OrganizationNotInAllFeaturesModeException$ === "object");
assert(PasswordPolicyViolationException.prototype instanceof IAMServiceException);
assert(typeof PasswordPolicyViolationException$ === "object");
assert(PolicyEvaluationException.prototype instanceof IAMServiceException);
assert(typeof PolicyEvaluationException$ === "object");
assert(PolicyNotAttachableException.prototype instanceof IAMServiceException);
assert(typeof PolicyNotAttachableException$ === "object");
assert(ReportGenerationLimitExceededException.prototype instanceof IAMServiceException);
assert(typeof ReportGenerationLimitExceededException$ === "object");
assert(ServiceAccessNotEnabledException.prototype instanceof IAMServiceException);
assert(typeof ServiceAccessNotEnabledException$ === "object");
assert(ServiceFailureException.prototype instanceof IAMServiceException);
assert(typeof ServiceFailureException$ === "object");
assert(ServiceNotSupportedException.prototype instanceof IAMServiceException);
assert(typeof ServiceNotSupportedException$ === "object");
assert(UnmodifiableEntityException.prototype instanceof IAMServiceException);
assert(typeof UnmodifiableEntityException$ === "object");
assert(UnrecognizedPublicKeyEncodingException.prototype instanceof IAMServiceException);
assert(typeof UnrecognizedPublicKeyEncodingException$ === "object");
assert(IAMServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForInstanceProfileExists === "function");
assert(typeof waitForPolicyExists === "function");
assert(typeof waitForRoleExists === "function");
assert(typeof waitForUserExists === "function");
assert(typeof waitUntilInstanceProfileExists === "function");
assert(typeof waitUntilPolicyExists === "function");
assert(typeof waitUntilRoleExists === "function");
assert(typeof waitUntilUserExists === "function");
// paginators
assert(typeof paginateGetAccountAuthorizationDetails === "function");
assert(typeof paginateGetGroup === "function");
assert(typeof paginateListAccessKeys === "function");
assert(typeof paginateListAccountAliases === "function");
assert(typeof paginateListAttachedGroupPolicies === "function");
assert(typeof paginateListAttachedRolePolicies === "function");
assert(typeof paginateListAttachedUserPolicies === "function");
assert(typeof paginateListEntitiesForPolicy === "function");
assert(typeof paginateListGroupPolicies === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListGroupsForUser === "function");
assert(typeof paginateListInstanceProfileTags === "function");
assert(typeof paginateListInstanceProfiles === "function");
assert(typeof paginateListInstanceProfilesForRole === "function");
assert(typeof paginateListMFADeviceTags === "function");
assert(typeof paginateListMFADevices === "function");
assert(typeof paginateListOpenIDConnectProviderTags === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyTags === "function");
assert(typeof paginateListPolicyVersions === "function");
assert(typeof paginateListRolePolicies === "function");
assert(typeof paginateListRoleTags === "function");
assert(typeof paginateListRoles === "function");
assert(typeof paginateListSAMLProviderTags === "function");
assert(typeof paginateListSSHPublicKeys === "function");
assert(typeof paginateListServerCertificateTags === "function");
assert(typeof paginateListServerCertificates === "function");
assert(typeof paginateListSigningCertificates === "function");
assert(typeof paginateListUserPolicies === "function");
assert(typeof paginateListUserTags === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateListVirtualMFADevices === "function");
assert(typeof paginateSimulateCustomPolicy === "function");
assert(typeof paginateSimulatePrincipalPolicy === "function");
console.log(`IAM index test passed.`);
