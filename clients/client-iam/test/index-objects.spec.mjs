import {
  AcceptDelegationRequestCommand,
  AccessAdvisorUsageGranularityType,
  AddClientIDToOpenIDConnectProviderCommand,
  AddRoleToInstanceProfileCommand,
  AddUserToGroupCommand,
  AssertionEncryptionModeType,
  AssignmentStatusType,
  AssociateDelegationRequestCommand,
  AttachGroupPolicyCommand,
  AttachRolePolicyCommand,
  AttachUserPolicyCommand,
  ChangePasswordCommand,
  ContextKeyTypeEnum,
  CreateAccessKeyCommand,
  CreateAccountAliasCommand,
  CreateDelegationRequestCommand,
  CreateGroupCommand,
  CreateInstanceProfileCommand,
  CreateLoginProfileCommand,
  CreateOpenIDConnectProviderCommand,
  CreatePolicyCommand,
  CreatePolicyVersionCommand,
  CreateRoleCommand,
  CreateSAMLProviderCommand,
  CreateServiceLinkedRoleCommand,
  CreateServiceSpecificCredentialCommand,
  CreateUserCommand,
  CreateVirtualMFADeviceCommand,
  DeactivateMFADeviceCommand,
  DeleteAccessKeyCommand,
  DeleteAccountAliasCommand,
  DeleteAccountPasswordPolicyCommand,
  DeleteGroupCommand,
  DeleteGroupPolicyCommand,
  DeleteInstanceProfileCommand,
  DeleteLoginProfileCommand,
  DeleteOpenIDConnectProviderCommand,
  DeletePolicyCommand,
  DeletePolicyVersionCommand,
  DeleteRoleCommand,
  DeleteRolePermissionsBoundaryCommand,
  DeleteRolePolicyCommand,
  DeleteSAMLProviderCommand,
  DeleteSSHPublicKeyCommand,
  DeleteServerCertificateCommand,
  DeleteServiceLinkedRoleCommand,
  DeleteServiceSpecificCredentialCommand,
  DeleteSigningCertificateCommand,
  DeleteUserCommand,
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPolicyCommand,
  DeleteVirtualMFADeviceCommand,
  DeletionTaskStatusType,
  DetachGroupPolicyCommand,
  DetachRolePolicyCommand,
  DetachUserPolicyCommand,
  DisableOrganizationsRootCredentialsManagementCommand,
  DisableOrganizationsRootSessionsCommand,
  DisableOutboundWebIdentityFederationCommand,
  EnableMFADeviceCommand,
  EnableOrganizationsRootCredentialsManagementCommand,
  EnableOrganizationsRootSessionsCommand,
  EnableOutboundWebIdentityFederationCommand,
  EncodingType,
  EntityType,
  FeatureType,
  GenerateCredentialReportCommand,
  GenerateOrganizationsAccessReportCommand,
  GenerateServiceLastAccessedDetailsCommand,
  GetAccessKeyLastUsedCommand,
  GetAccountAuthorizationDetailsCommand,
  GetAccountPasswordPolicyCommand,
  GetAccountSummaryCommand,
  GetContextKeysForCustomPolicyCommand,
  GetContextKeysForPrincipalPolicyCommand,
  GetCredentialReportCommand,
  GetDelegationRequestCommand,
  GetGroupCommand,
  GetGroupPolicyCommand,
  GetHumanReadableSummaryCommand,
  GetInstanceProfileCommand,
  GetLoginProfileCommand,
  GetMFADeviceCommand,
  GetOpenIDConnectProviderCommand,
  GetOrganizationsAccessReportCommand,
  GetOutboundWebIdentityFederationInfoCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRoleCommand,
  GetRolePolicyCommand,
  GetSAMLProviderCommand,
  GetSSHPublicKeyCommand,
  GetServerCertificateCommand,
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLinkedRoleDeletionStatusCommand,
  GetUserCommand,
  GetUserPolicyCommand,
  GlobalEndpointTokenVersion,
  IAM,
  IAMClient,
  IAMServiceException,
  JobStatusType,
  ListAccessKeysCommand,
  ListAccountAliasesCommand,
  ListAttachedGroupPoliciesCommand,
  ListAttachedRolePoliciesCommand,
  ListAttachedUserPoliciesCommand,
  ListDelegationRequestsCommand,
  ListEntitiesForPolicyCommand,
  ListGroupPoliciesCommand,
  ListGroupsCommand,
  ListGroupsForUserCommand,
  ListInstanceProfileTagsCommand,
  ListInstanceProfilesCommand,
  ListInstanceProfilesForRoleCommand,
  ListMFADeviceTagsCommand,
  ListMFADevicesCommand,
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProvidersCommand,
  ListOrganizationsFeaturesCommand,
  ListPoliciesCommand,
  ListPoliciesGrantingServiceAccessCommand,
  ListPolicyTagsCommand,
  ListPolicyVersionsCommand,
  ListRolePoliciesCommand,
  ListRoleTagsCommand,
  ListRolesCommand,
  ListSAMLProviderTagsCommand,
  ListSAMLProvidersCommand,
  ListSSHPublicKeysCommand,
  ListServerCertificateTagsCommand,
  ListServerCertificatesCommand,
  ListServiceSpecificCredentialsCommand,
  ListSigningCertificatesCommand,
  ListUserPoliciesCommand,
  ListUserTagsCommand,
  ListUsersCommand,
  ListVirtualMFADevicesCommand,
  PermissionCheckResultType,
  PermissionCheckStatusType,
  PermissionsBoundaryAttachmentType,
  PolicyEvaluationDecisionType,
  PolicyOwnerEntityType,
  PolicyParameterTypeEnum,
  PolicyScopeType,
  PolicySourceType,
  PolicyType,
  PolicyUsageType,
  PutGroupPolicyCommand,
  PutRolePermissionsBoundaryCommand,
  PutRolePolicyCommand,
  PutUserPermissionsBoundaryCommand,
  PutUserPolicyCommand,
  RejectDelegationRequestCommand,
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveRoleFromInstanceProfileCommand,
  RemoveUserFromGroupCommand,
  ReportFormatType,
  ReportStateType,
  ResetServiceSpecificCredentialCommand,
  ResyncMFADeviceCommand,
  SendDelegationTokenCommand,
  SetDefaultPolicyVersionCommand,
  SetSecurityTokenServicePreferencesCommand,
  SimulateCustomPolicyCommand,
  SimulatePrincipalPolicyCommand,
  SortKeyType,
  StateType,
  StatusType,
  SummaryKeyType,
  SummaryStateType,
  TagInstanceProfileCommand,
  TagMFADeviceCommand,
  TagOpenIDConnectProviderCommand,
  TagPolicyCommand,
  TagRoleCommand,
  TagSAMLProviderCommand,
  TagServerCertificateCommand,
  TagUserCommand,
  UntagInstanceProfileCommand,
  UntagMFADeviceCommand,
  UntagOpenIDConnectProviderCommand,
  UntagPolicyCommand,
  UntagRoleCommand,
  UntagSAMLProviderCommand,
  UntagServerCertificateCommand,
  UntagUserCommand,
  UpdateAccessKeyCommand,
  UpdateAccountPasswordPolicyCommand,
  UpdateAssumeRolePolicyCommand,
  UpdateDelegationRequestCommand,
  UpdateGroupCommand,
  UpdateLoginProfileCommand,
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateRoleCommand,
  UpdateRoleDescriptionCommand,
  UpdateSAMLProviderCommand,
  UpdateSSHPublicKeyCommand,
  UpdateServerCertificateCommand,
  UpdateServiceSpecificCredentialCommand,
  UpdateSigningCertificateCommand,
  UpdateUserCommand,
  UploadSSHPublicKeyCommand,
  UploadServerCertificateCommand,
  UploadSigningCertificateCommand,
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
assert(typeof IAMClient === "function")
assert(typeof IAM === "function")
// commands
assert(typeof AcceptDelegationRequestCommand === "function")
assert(typeof AddClientIDToOpenIDConnectProviderCommand === "function")
assert(typeof AddRoleToInstanceProfileCommand === "function")
assert(typeof AddUserToGroupCommand === "function")
assert(typeof AssociateDelegationRequestCommand === "function")
assert(typeof AttachGroupPolicyCommand === "function")
assert(typeof AttachRolePolicyCommand === "function")
assert(typeof AttachUserPolicyCommand === "function")
assert(typeof ChangePasswordCommand === "function")
assert(typeof CreateAccessKeyCommand === "function")
assert(typeof CreateAccountAliasCommand === "function")
assert(typeof CreateDelegationRequestCommand === "function")
assert(typeof CreateGroupCommand === "function")
assert(typeof CreateInstanceProfileCommand === "function")
assert(typeof CreateLoginProfileCommand === "function")
assert(typeof CreateOpenIDConnectProviderCommand === "function")
assert(typeof CreatePolicyCommand === "function")
assert(typeof CreatePolicyVersionCommand === "function")
assert(typeof CreateRoleCommand === "function")
assert(typeof CreateSAMLProviderCommand === "function")
assert(typeof CreateServiceLinkedRoleCommand === "function")
assert(typeof CreateServiceSpecificCredentialCommand === "function")
assert(typeof CreateUserCommand === "function")
assert(typeof CreateVirtualMFADeviceCommand === "function")
assert(typeof DeactivateMFADeviceCommand === "function")
assert(typeof DeleteAccessKeyCommand === "function")
assert(typeof DeleteAccountAliasCommand === "function")
assert(typeof DeleteAccountPasswordPolicyCommand === "function")
assert(typeof DeleteGroupCommand === "function")
assert(typeof DeleteGroupPolicyCommand === "function")
assert(typeof DeleteInstanceProfileCommand === "function")
assert(typeof DeleteLoginProfileCommand === "function")
assert(typeof DeleteOpenIDConnectProviderCommand === "function")
assert(typeof DeletePolicyCommand === "function")
assert(typeof DeletePolicyVersionCommand === "function")
assert(typeof DeleteRoleCommand === "function")
assert(typeof DeleteRolePermissionsBoundaryCommand === "function")
assert(typeof DeleteRolePolicyCommand === "function")
assert(typeof DeleteSAMLProviderCommand === "function")
assert(typeof DeleteServerCertificateCommand === "function")
assert(typeof DeleteServiceLinkedRoleCommand === "function")
assert(typeof DeleteServiceSpecificCredentialCommand === "function")
assert(typeof DeleteSigningCertificateCommand === "function")
assert(typeof DeleteSSHPublicKeyCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DeleteUserPermissionsBoundaryCommand === "function")
assert(typeof DeleteUserPolicyCommand === "function")
assert(typeof DeleteVirtualMFADeviceCommand === "function")
assert(typeof DetachGroupPolicyCommand === "function")
assert(typeof DetachRolePolicyCommand === "function")
assert(typeof DetachUserPolicyCommand === "function")
assert(typeof DisableOrganizationsRootCredentialsManagementCommand === "function")
assert(typeof DisableOrganizationsRootSessionsCommand === "function")
assert(typeof DisableOutboundWebIdentityFederationCommand === "function")
assert(typeof EnableMFADeviceCommand === "function")
assert(typeof EnableOrganizationsRootCredentialsManagementCommand === "function")
assert(typeof EnableOrganizationsRootSessionsCommand === "function")
assert(typeof EnableOutboundWebIdentityFederationCommand === "function")
assert(typeof GenerateCredentialReportCommand === "function")
assert(typeof GenerateOrganizationsAccessReportCommand === "function")
assert(typeof GenerateServiceLastAccessedDetailsCommand === "function")
assert(typeof GetAccessKeyLastUsedCommand === "function")
assert(typeof GetAccountAuthorizationDetailsCommand === "function")
assert(typeof GetAccountPasswordPolicyCommand === "function")
assert(typeof GetAccountSummaryCommand === "function")
assert(typeof GetContextKeysForCustomPolicyCommand === "function")
assert(typeof GetContextKeysForPrincipalPolicyCommand === "function")
assert(typeof GetCredentialReportCommand === "function")
assert(typeof GetDelegationRequestCommand === "function")
assert(typeof GetGroupCommand === "function")
assert(typeof GetGroupPolicyCommand === "function")
assert(typeof GetHumanReadableSummaryCommand === "function")
assert(typeof GetInstanceProfileCommand === "function")
assert(typeof GetLoginProfileCommand === "function")
assert(typeof GetMFADeviceCommand === "function")
assert(typeof GetOpenIDConnectProviderCommand === "function")
assert(typeof GetOrganizationsAccessReportCommand === "function")
assert(typeof GetOutboundWebIdentityFederationInfoCommand === "function")
assert(typeof GetPolicyCommand === "function")
assert(typeof GetPolicyVersionCommand === "function")
assert(typeof GetRoleCommand === "function")
assert(typeof GetRolePolicyCommand === "function")
assert(typeof GetSAMLProviderCommand === "function")
assert(typeof GetServerCertificateCommand === "function")
assert(typeof GetServiceLastAccessedDetailsCommand === "function")
assert(typeof GetServiceLastAccessedDetailsWithEntitiesCommand === "function")
assert(typeof GetServiceLinkedRoleDeletionStatusCommand === "function")
assert(typeof GetSSHPublicKeyCommand === "function")
assert(typeof GetUserCommand === "function")
assert(typeof GetUserPolicyCommand === "function")
assert(typeof ListAccessKeysCommand === "function")
assert(typeof ListAccountAliasesCommand === "function")
assert(typeof ListAttachedGroupPoliciesCommand === "function")
assert(typeof ListAttachedRolePoliciesCommand === "function")
assert(typeof ListAttachedUserPoliciesCommand === "function")
assert(typeof ListDelegationRequestsCommand === "function")
assert(typeof ListEntitiesForPolicyCommand === "function")
assert(typeof ListGroupPoliciesCommand === "function")
assert(typeof ListGroupsCommand === "function")
assert(typeof ListGroupsForUserCommand === "function")
assert(typeof ListInstanceProfilesCommand === "function")
assert(typeof ListInstanceProfilesForRoleCommand === "function")
assert(typeof ListInstanceProfileTagsCommand === "function")
assert(typeof ListMFADevicesCommand === "function")
assert(typeof ListMFADeviceTagsCommand === "function")
assert(typeof ListOpenIDConnectProvidersCommand === "function")
assert(typeof ListOpenIDConnectProviderTagsCommand === "function")
assert(typeof ListOrganizationsFeaturesCommand === "function")
assert(typeof ListPoliciesCommand === "function")
assert(typeof ListPoliciesGrantingServiceAccessCommand === "function")
assert(typeof ListPolicyTagsCommand === "function")
assert(typeof ListPolicyVersionsCommand === "function")
assert(typeof ListRolePoliciesCommand === "function")
assert(typeof ListRolesCommand === "function")
assert(typeof ListRoleTagsCommand === "function")
assert(typeof ListSAMLProvidersCommand === "function")
assert(typeof ListSAMLProviderTagsCommand === "function")
assert(typeof ListServerCertificatesCommand === "function")
assert(typeof ListServerCertificateTagsCommand === "function")
assert(typeof ListServiceSpecificCredentialsCommand === "function")
assert(typeof ListSigningCertificatesCommand === "function")
assert(typeof ListSSHPublicKeysCommand === "function")
assert(typeof ListUserPoliciesCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof ListUserTagsCommand === "function")
assert(typeof ListVirtualMFADevicesCommand === "function")
assert(typeof PutGroupPolicyCommand === "function")
assert(typeof PutRolePermissionsBoundaryCommand === "function")
assert(typeof PutRolePolicyCommand === "function")
assert(typeof PutUserPermissionsBoundaryCommand === "function")
assert(typeof PutUserPolicyCommand === "function")
assert(typeof RejectDelegationRequestCommand === "function")
assert(typeof RemoveClientIDFromOpenIDConnectProviderCommand === "function")
assert(typeof RemoveRoleFromInstanceProfileCommand === "function")
assert(typeof RemoveUserFromGroupCommand === "function")
assert(typeof ResetServiceSpecificCredentialCommand === "function")
assert(typeof ResyncMFADeviceCommand === "function")
assert(typeof SendDelegationTokenCommand === "function")
assert(typeof SetDefaultPolicyVersionCommand === "function")
assert(typeof SetSecurityTokenServicePreferencesCommand === "function")
assert(typeof SimulateCustomPolicyCommand === "function")
assert(typeof SimulatePrincipalPolicyCommand === "function")
assert(typeof TagInstanceProfileCommand === "function")
assert(typeof TagMFADeviceCommand === "function")
assert(typeof TagOpenIDConnectProviderCommand === "function")
assert(typeof TagPolicyCommand === "function")
assert(typeof TagRoleCommand === "function")
assert(typeof TagSAMLProviderCommand === "function")
assert(typeof TagServerCertificateCommand === "function")
assert(typeof TagUserCommand === "function")
assert(typeof UntagInstanceProfileCommand === "function")
assert(typeof UntagMFADeviceCommand === "function")
assert(typeof UntagOpenIDConnectProviderCommand === "function")
assert(typeof UntagPolicyCommand === "function")
assert(typeof UntagRoleCommand === "function")
assert(typeof UntagSAMLProviderCommand === "function")
assert(typeof UntagServerCertificateCommand === "function")
assert(typeof UntagUserCommand === "function")
assert(typeof UpdateAccessKeyCommand === "function")
assert(typeof UpdateAccountPasswordPolicyCommand === "function")
assert(typeof UpdateAssumeRolePolicyCommand === "function")
assert(typeof UpdateDelegationRequestCommand === "function")
assert(typeof UpdateGroupCommand === "function")
assert(typeof UpdateLoginProfileCommand === "function")
assert(typeof UpdateOpenIDConnectProviderThumbprintCommand === "function")
assert(typeof UpdateRoleCommand === "function")
assert(typeof UpdateRoleDescriptionCommand === "function")
assert(typeof UpdateSAMLProviderCommand === "function")
assert(typeof UpdateServerCertificateCommand === "function")
assert(typeof UpdateServiceSpecificCredentialCommand === "function")
assert(typeof UpdateSigningCertificateCommand === "function")
assert(typeof UpdateSSHPublicKeyCommand === "function")
assert(typeof UpdateUserCommand === "function")
assert(typeof UploadServerCertificateCommand === "function")
assert(typeof UploadSigningCertificateCommand === "function")
assert(typeof UploadSSHPublicKeyCommand === "function")
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
assert(IAMServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForInstanceProfileExists === "function")
assert(typeof waitForPolicyExists === "function")
assert(typeof waitForRoleExists === "function")
assert(typeof waitForUserExists === "function")
assert(typeof waitUntilInstanceProfileExists === "function")
assert(typeof waitUntilPolicyExists === "function")
assert(typeof waitUntilRoleExists === "function")
assert(typeof waitUntilUserExists === "function")
// paginators
assert(typeof paginateGetAccountAuthorizationDetails === "function")
assert(typeof paginateGetGroup === "function")
assert(typeof paginateListAccessKeys === "function")
assert(typeof paginateListAccountAliases === "function")
assert(typeof paginateListAttachedGroupPolicies === "function")
assert(typeof paginateListAttachedRolePolicies === "function")
assert(typeof paginateListAttachedUserPolicies === "function")
assert(typeof paginateListEntitiesForPolicy === "function")
assert(typeof paginateListGroupPolicies === "function")
assert(typeof paginateListGroups === "function")
assert(typeof paginateListGroupsForUser === "function")
assert(typeof paginateListInstanceProfileTags === "function")
assert(typeof paginateListInstanceProfiles === "function")
assert(typeof paginateListInstanceProfilesForRole === "function")
assert(typeof paginateListMFADeviceTags === "function")
assert(typeof paginateListMFADevices === "function")
assert(typeof paginateListOpenIDConnectProviderTags === "function")
assert(typeof paginateListPolicies === "function")
assert(typeof paginateListPolicyTags === "function")
assert(typeof paginateListPolicyVersions === "function")
assert(typeof paginateListRolePolicies === "function")
assert(typeof paginateListRoleTags === "function")
assert(typeof paginateListRoles === "function")
assert(typeof paginateListSAMLProviderTags === "function")
assert(typeof paginateListSSHPublicKeys === "function")
assert(typeof paginateListServerCertificateTags === "function")
assert(typeof paginateListServerCertificates === "function")
assert(typeof paginateListSigningCertificates === "function")
assert(typeof paginateListUserPolicies === "function")
assert(typeof paginateListUserTags === "function")
assert(typeof paginateListUsers === "function")
assert(typeof paginateListVirtualMFADevices === "function")
assert(typeof paginateSimulateCustomPolicy === "function")
assert(typeof paginateSimulatePrincipalPolicy === "function")
console.log(`IAM index test passed.`);
