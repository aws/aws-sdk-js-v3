import { AddClientIDToOpenIDConnectProviderInput } from "./AddClientIDToOpenIDConnectProviderInput";
import { AddRoleToInstanceProfileInput } from "./AddRoleToInstanceProfileInput";
import { AddUserToGroupInput } from "./AddUserToGroupInput";
import { AttachGroupPolicyInput } from "./AttachGroupPolicyInput";
import { AttachRolePolicyInput } from "./AttachRolePolicyInput";
import { AttachUserPolicyInput } from "./AttachUserPolicyInput";
import { ChangePasswordInput } from "./ChangePasswordInput";
import { CreateAccessKeyInput } from "./CreateAccessKeyInput";
import { CreateAccountAliasInput } from "./CreateAccountAliasInput";
import { CreateGroupInput } from "./CreateGroupInput";
import { CreateInstanceProfileInput } from "./CreateInstanceProfileInput";
import { CreateLoginProfileInput } from "./CreateLoginProfileInput";
import { CreateOpenIDConnectProviderInput } from "./CreateOpenIDConnectProviderInput";
import { CreatePolicyInput } from "./CreatePolicyInput";
import { CreatePolicyVersionInput } from "./CreatePolicyVersionInput";
import { CreateRoleInput } from "./CreateRoleInput";
import { CreateSAMLProviderInput } from "./CreateSAMLProviderInput";
import { CreateServiceLinkedRoleInput } from "./CreateServiceLinkedRoleInput";
import { CreateServiceSpecificCredentialInput } from "./CreateServiceSpecificCredentialInput";
import { CreateUserInput } from "./CreateUserInput";
import { CreateVirtualMFADeviceInput } from "./CreateVirtualMFADeviceInput";
import { DeactivateMFADeviceInput } from "./DeactivateMFADeviceInput";
import { DeleteAccessKeyInput } from "./DeleteAccessKeyInput";
import { DeleteAccountAliasInput } from "./DeleteAccountAliasInput";
import { DeleteAccountPasswordPolicyInput } from "./DeleteAccountPasswordPolicyInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteGroupPolicyInput } from "./DeleteGroupPolicyInput";
import { DeleteInstanceProfileInput } from "./DeleteInstanceProfileInput";
import { DeleteLoginProfileInput } from "./DeleteLoginProfileInput";
import { DeleteOpenIDConnectProviderInput } from "./DeleteOpenIDConnectProviderInput";
import { DeletePolicyInput } from "./DeletePolicyInput";
import { DeletePolicyVersionInput } from "./DeletePolicyVersionInput";
import { DeleteRoleInput } from "./DeleteRoleInput";
import { DeleteRolePermissionsBoundaryInput } from "./DeleteRolePermissionsBoundaryInput";
import { DeleteRolePolicyInput } from "./DeleteRolePolicyInput";
import { DeleteSAMLProviderInput } from "./DeleteSAMLProviderInput";
import { DeleteSSHPublicKeyInput } from "./DeleteSSHPublicKeyInput";
import { DeleteServerCertificateInput } from "./DeleteServerCertificateInput";
import { DeleteServiceLinkedRoleInput } from "./DeleteServiceLinkedRoleInput";
import { DeleteServiceSpecificCredentialInput } from "./DeleteServiceSpecificCredentialInput";
import { DeleteSigningCertificateInput } from "./DeleteSigningCertificateInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DeleteUserPermissionsBoundaryInput } from "./DeleteUserPermissionsBoundaryInput";
import { DeleteUserPolicyInput } from "./DeleteUserPolicyInput";
import { DeleteVirtualMFADeviceInput } from "./DeleteVirtualMFADeviceInput";
import { DetachGroupPolicyInput } from "./DetachGroupPolicyInput";
import { DetachRolePolicyInput } from "./DetachRolePolicyInput";
import { DetachUserPolicyInput } from "./DetachUserPolicyInput";
import { EnableMFADeviceInput } from "./EnableMFADeviceInput";
import { GenerateCredentialReportInput } from "./GenerateCredentialReportInput";
import { GenerateOrganizationsAccessReportInput } from "./GenerateOrganizationsAccessReportInput";
import { GenerateServiceLastAccessedDetailsInput } from "./GenerateServiceLastAccessedDetailsInput";
import { GetAccessKeyLastUsedInput } from "./GetAccessKeyLastUsedInput";
import { GetAccountAuthorizationDetailsInput } from "./GetAccountAuthorizationDetailsInput";
import { GetAccountPasswordPolicyInput } from "./GetAccountPasswordPolicyInput";
import { GetAccountSummaryInput } from "./GetAccountSummaryInput";
import { GetContextKeysForCustomPolicyInput } from "./GetContextKeysForCustomPolicyInput";
import { GetContextKeysForPrincipalPolicyInput } from "./GetContextKeysForPrincipalPolicyInput";
import { GetCredentialReportInput } from "./GetCredentialReportInput";
import { GetGroupInput } from "./GetGroupInput";
import { GetGroupPolicyInput } from "./GetGroupPolicyInput";
import { GetInstanceProfileInput } from "./GetInstanceProfileInput";
import { GetLoginProfileInput } from "./GetLoginProfileInput";
import { GetOpenIDConnectProviderInput } from "./GetOpenIDConnectProviderInput";
import { GetOrganizationsAccessReportInput } from "./GetOrganizationsAccessReportInput";
import { GetPolicyInput } from "./GetPolicyInput";
import { GetPolicyVersionInput } from "./GetPolicyVersionInput";
import { GetRoleInput } from "./GetRoleInput";
import { GetRolePolicyInput } from "./GetRolePolicyInput";
import { GetSAMLProviderInput } from "./GetSAMLProviderInput";
import { GetSSHPublicKeyInput } from "./GetSSHPublicKeyInput";
import { GetServerCertificateInput } from "./GetServerCertificateInput";
import { GetServiceLastAccessedDetailsInput } from "./GetServiceLastAccessedDetailsInput";
import { GetServiceLastAccessedDetailsWithEntitiesInput } from "./GetServiceLastAccessedDetailsWithEntitiesInput";
import { GetServiceLinkedRoleDeletionStatusInput } from "./GetServiceLinkedRoleDeletionStatusInput";
import { GetUserInput } from "./GetUserInput";
import { GetUserPolicyInput } from "./GetUserPolicyInput";
import { ListAccessKeysInput } from "./ListAccessKeysInput";
import { ListAccountAliasesInput } from "./ListAccountAliasesInput";
import { ListAttachedGroupPoliciesInput } from "./ListAttachedGroupPoliciesInput";
import { ListAttachedRolePoliciesInput } from "./ListAttachedRolePoliciesInput";
import { ListAttachedUserPoliciesInput } from "./ListAttachedUserPoliciesInput";
import { ListEntitiesForPolicyInput } from "./ListEntitiesForPolicyInput";
import { ListGroupPoliciesInput } from "./ListGroupPoliciesInput";
import { ListGroupsInput } from "./ListGroupsInput";
import { ListGroupsForUserInput } from "./ListGroupsForUserInput";
import { ListInstanceProfilesInput } from "./ListInstanceProfilesInput";
import { ListInstanceProfilesForRoleInput } from "./ListInstanceProfilesForRoleInput";
import { ListMFADevicesInput } from "./ListMFADevicesInput";
import { ListOpenIDConnectProvidersInput } from "./ListOpenIDConnectProvidersInput";
import { ListPoliciesInput } from "./ListPoliciesInput";
import { ListPoliciesGrantingServiceAccessInput } from "./ListPoliciesGrantingServiceAccessInput";
import { ListPolicyVersionsInput } from "./ListPolicyVersionsInput";
import { ListRolePoliciesInput } from "./ListRolePoliciesInput";
import { ListRoleTagsInput } from "./ListRoleTagsInput";
import { ListRolesInput } from "./ListRolesInput";
import { ListSAMLProvidersInput } from "./ListSAMLProvidersInput";
import { ListSSHPublicKeysInput } from "./ListSSHPublicKeysInput";
import { ListServerCertificatesInput } from "./ListServerCertificatesInput";
import { ListServiceSpecificCredentialsInput } from "./ListServiceSpecificCredentialsInput";
import { ListSigningCertificatesInput } from "./ListSigningCertificatesInput";
import { ListUserPoliciesInput } from "./ListUserPoliciesInput";
import { ListUserTagsInput } from "./ListUserTagsInput";
import { ListUsersInput } from "./ListUsersInput";
import { ListVirtualMFADevicesInput } from "./ListVirtualMFADevicesInput";
import { PutGroupPolicyInput } from "./PutGroupPolicyInput";
import { PutRolePermissionsBoundaryInput } from "./PutRolePermissionsBoundaryInput";
import { PutRolePolicyInput } from "./PutRolePolicyInput";
import { PutUserPermissionsBoundaryInput } from "./PutUserPermissionsBoundaryInput";
import { PutUserPolicyInput } from "./PutUserPolicyInput";
import { RemoveClientIDFromOpenIDConnectProviderInput } from "./RemoveClientIDFromOpenIDConnectProviderInput";
import { RemoveRoleFromInstanceProfileInput } from "./RemoveRoleFromInstanceProfileInput";
import { RemoveUserFromGroupInput } from "./RemoveUserFromGroupInput";
import { ResetServiceSpecificCredentialInput } from "./ResetServiceSpecificCredentialInput";
import { ResyncMFADeviceInput } from "./ResyncMFADeviceInput";
import { SetDefaultPolicyVersionInput } from "./SetDefaultPolicyVersionInput";
import { SetSecurityTokenServicePreferencesInput } from "./SetSecurityTokenServicePreferencesInput";
import { SimulateCustomPolicyInput } from "./SimulateCustomPolicyInput";
import { SimulatePrincipalPolicyInput } from "./SimulatePrincipalPolicyInput";
import { TagRoleInput } from "./TagRoleInput";
import { TagUserInput } from "./TagUserInput";
import { UntagRoleInput } from "./UntagRoleInput";
import { UntagUserInput } from "./UntagUserInput";
import { UpdateAccessKeyInput } from "./UpdateAccessKeyInput";
import { UpdateAccountPasswordPolicyInput } from "./UpdateAccountPasswordPolicyInput";
import { UpdateAssumeRolePolicyInput } from "./UpdateAssumeRolePolicyInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateLoginProfileInput } from "./UpdateLoginProfileInput";
import { UpdateOpenIDConnectProviderThumbprintInput } from "./UpdateOpenIDConnectProviderThumbprintInput";
import { UpdateRoleInput } from "./UpdateRoleInput";
import { UpdateRoleDescriptionInput } from "./UpdateRoleDescriptionInput";
import { UpdateSAMLProviderInput } from "./UpdateSAMLProviderInput";
import { UpdateSSHPublicKeyInput } from "./UpdateSSHPublicKeyInput";
import { UpdateServerCertificateInput } from "./UpdateServerCertificateInput";
import { UpdateServiceSpecificCredentialInput } from "./UpdateServiceSpecificCredentialInput";
import { UpdateSigningCertificateInput } from "./UpdateSigningCertificateInput";
import { UpdateUserInput } from "./UpdateUserInput";
import { UploadSSHPublicKeyInput } from "./UploadSSHPublicKeyInput";
import { UploadServerCertificateInput } from "./UploadServerCertificateInput";
import { UploadSigningCertificateInput } from "./UploadSigningCertificateInput";
export type InputTypesUnion =
  | AddClientIDToOpenIDConnectProviderInput
  | AddRoleToInstanceProfileInput
  | AddUserToGroupInput
  | AttachGroupPolicyInput
  | AttachRolePolicyInput
  | AttachUserPolicyInput
  | ChangePasswordInput
  | CreateAccessKeyInput
  | CreateAccountAliasInput
  | CreateGroupInput
  | CreateInstanceProfileInput
  | CreateLoginProfileInput
  | CreateOpenIDConnectProviderInput
  | CreatePolicyInput
  | CreatePolicyVersionInput
  | CreateRoleInput
  | CreateSAMLProviderInput
  | CreateServiceLinkedRoleInput
  | CreateServiceSpecificCredentialInput
  | CreateUserInput
  | CreateVirtualMFADeviceInput
  | DeactivateMFADeviceInput
  | DeleteAccessKeyInput
  | DeleteAccountAliasInput
  | DeleteAccountPasswordPolicyInput
  | DeleteGroupInput
  | DeleteGroupPolicyInput
  | DeleteInstanceProfileInput
  | DeleteLoginProfileInput
  | DeleteOpenIDConnectProviderInput
  | DeletePolicyInput
  | DeletePolicyVersionInput
  | DeleteRoleInput
  | DeleteRolePermissionsBoundaryInput
  | DeleteRolePolicyInput
  | DeleteSAMLProviderInput
  | DeleteSSHPublicKeyInput
  | DeleteServerCertificateInput
  | DeleteServiceLinkedRoleInput
  | DeleteServiceSpecificCredentialInput
  | DeleteSigningCertificateInput
  | DeleteUserInput
  | DeleteUserPermissionsBoundaryInput
  | DeleteUserPolicyInput
  | DeleteVirtualMFADeviceInput
  | DetachGroupPolicyInput
  | DetachRolePolicyInput
  | DetachUserPolicyInput
  | EnableMFADeviceInput
  | GenerateCredentialReportInput
  | GenerateOrganizationsAccessReportInput
  | GenerateServiceLastAccessedDetailsInput
  | GetAccessKeyLastUsedInput
  | GetAccountAuthorizationDetailsInput
  | GetAccountPasswordPolicyInput
  | GetAccountSummaryInput
  | GetContextKeysForCustomPolicyInput
  | GetContextKeysForPrincipalPolicyInput
  | GetCredentialReportInput
  | GetGroupInput
  | GetGroupPolicyInput
  | GetInstanceProfileInput
  | GetLoginProfileInput
  | GetOpenIDConnectProviderInput
  | GetOrganizationsAccessReportInput
  | GetPolicyInput
  | GetPolicyVersionInput
  | GetRoleInput
  | GetRolePolicyInput
  | GetSAMLProviderInput
  | GetSSHPublicKeyInput
  | GetServerCertificateInput
  | GetServiceLastAccessedDetailsInput
  | GetServiceLastAccessedDetailsWithEntitiesInput
  | GetServiceLinkedRoleDeletionStatusInput
  | GetUserInput
  | GetUserPolicyInput
  | ListAccessKeysInput
  | ListAccountAliasesInput
  | ListAttachedGroupPoliciesInput
  | ListAttachedRolePoliciesInput
  | ListAttachedUserPoliciesInput
  | ListEntitiesForPolicyInput
  | ListGroupPoliciesInput
  | ListGroupsInput
  | ListGroupsForUserInput
  | ListInstanceProfilesInput
  | ListInstanceProfilesForRoleInput
  | ListMFADevicesInput
  | ListOpenIDConnectProvidersInput
  | ListPoliciesInput
  | ListPoliciesGrantingServiceAccessInput
  | ListPolicyVersionsInput
  | ListRolePoliciesInput
  | ListRoleTagsInput
  | ListRolesInput
  | ListSAMLProvidersInput
  | ListSSHPublicKeysInput
  | ListServerCertificatesInput
  | ListServiceSpecificCredentialsInput
  | ListSigningCertificatesInput
  | ListUserPoliciesInput
  | ListUserTagsInput
  | ListUsersInput
  | ListVirtualMFADevicesInput
  | PutGroupPolicyInput
  | PutRolePermissionsBoundaryInput
  | PutRolePolicyInput
  | PutUserPermissionsBoundaryInput
  | PutUserPolicyInput
  | RemoveClientIDFromOpenIDConnectProviderInput
  | RemoveRoleFromInstanceProfileInput
  | RemoveUserFromGroupInput
  | ResetServiceSpecificCredentialInput
  | ResyncMFADeviceInput
  | SetDefaultPolicyVersionInput
  | SetSecurityTokenServicePreferencesInput
  | SimulateCustomPolicyInput
  | SimulatePrincipalPolicyInput
  | TagRoleInput
  | TagUserInput
  | UntagRoleInput
  | UntagUserInput
  | UpdateAccessKeyInput
  | UpdateAccountPasswordPolicyInput
  | UpdateAssumeRolePolicyInput
  | UpdateGroupInput
  | UpdateLoginProfileInput
  | UpdateOpenIDConnectProviderThumbprintInput
  | UpdateRoleInput
  | UpdateRoleDescriptionInput
  | UpdateSAMLProviderInput
  | UpdateSSHPublicKeyInput
  | UpdateServerCertificateInput
  | UpdateServiceSpecificCredentialInput
  | UpdateSigningCertificateInput
  | UpdateUserInput
  | UploadSSHPublicKeyInput
  | UploadServerCertificateInput
  | UploadSigningCertificateInput;
