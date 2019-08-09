import { IAMClient } from "./IAMClient";
import { AddClientIDToOpenIDConnectProviderInput } from "./types/AddClientIDToOpenIDConnectProviderInput";
import { AddClientIDToOpenIDConnectProviderOutput } from "./types/AddClientIDToOpenIDConnectProviderOutput";
import { AddRoleToInstanceProfileInput } from "./types/AddRoleToInstanceProfileInput";
import { AddRoleToInstanceProfileOutput } from "./types/AddRoleToInstanceProfileOutput";
import { AddUserToGroupInput } from "./types/AddUserToGroupInput";
import { AddUserToGroupOutput } from "./types/AddUserToGroupOutput";
import { AttachGroupPolicyInput } from "./types/AttachGroupPolicyInput";
import { AttachGroupPolicyOutput } from "./types/AttachGroupPolicyOutput";
import { AttachRolePolicyInput } from "./types/AttachRolePolicyInput";
import { AttachRolePolicyOutput } from "./types/AttachRolePolicyOutput";
import { AttachUserPolicyInput } from "./types/AttachUserPolicyInput";
import { AttachUserPolicyOutput } from "./types/AttachUserPolicyOutput";
import { ChangePasswordInput } from "./types/ChangePasswordInput";
import { ChangePasswordOutput } from "./types/ChangePasswordOutput";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateAccessKeyInput } from "./types/CreateAccessKeyInput";
import { CreateAccessKeyOutput } from "./types/CreateAccessKeyOutput";
import { CreateAccountAliasInput } from "./types/CreateAccountAliasInput";
import { CreateAccountAliasOutput } from "./types/CreateAccountAliasOutput";
import { CreateGroupInput } from "./types/CreateGroupInput";
import { CreateGroupOutput } from "./types/CreateGroupOutput";
import { CreateInstanceProfileInput } from "./types/CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "./types/CreateInstanceProfileOutput";
import { CreateLoginProfileInput } from "./types/CreateLoginProfileInput";
import { CreateLoginProfileOutput } from "./types/CreateLoginProfileOutput";
import { CreateOpenIDConnectProviderInput } from "./types/CreateOpenIDConnectProviderInput";
import { CreateOpenIDConnectProviderOutput } from "./types/CreateOpenIDConnectProviderOutput";
import { CreatePolicyInput } from "./types/CreatePolicyInput";
import { CreatePolicyOutput } from "./types/CreatePolicyOutput";
import { CreatePolicyVersionInput } from "./types/CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "./types/CreatePolicyVersionOutput";
import { CreateRoleInput } from "./types/CreateRoleInput";
import { CreateRoleOutput } from "./types/CreateRoleOutput";
import { CreateSAMLProviderInput } from "./types/CreateSAMLProviderInput";
import { CreateSAMLProviderOutput } from "./types/CreateSAMLProviderOutput";
import { CreateServiceLinkedRoleInput } from "./types/CreateServiceLinkedRoleInput";
import { CreateServiceLinkedRoleOutput } from "./types/CreateServiceLinkedRoleOutput";
import { CreateServiceSpecificCredentialInput } from "./types/CreateServiceSpecificCredentialInput";
import { CreateServiceSpecificCredentialOutput } from "./types/CreateServiceSpecificCredentialOutput";
import { CreateUserInput } from "./types/CreateUserInput";
import { CreateUserOutput } from "./types/CreateUserOutput";
import { CreateVirtualMFADeviceInput } from "./types/CreateVirtualMFADeviceInput";
import { CreateVirtualMFADeviceOutput } from "./types/CreateVirtualMFADeviceOutput";
import { CredentialReportExpiredException } from "./types/CredentialReportExpiredException";
import { CredentialReportNotPresentException } from "./types/CredentialReportNotPresentException";
import { CredentialReportNotReadyException } from "./types/CredentialReportNotReadyException";
import { DeactivateMFADeviceInput } from "./types/DeactivateMFADeviceInput";
import { DeactivateMFADeviceOutput } from "./types/DeactivateMFADeviceOutput";
import { DeleteAccessKeyInput } from "./types/DeleteAccessKeyInput";
import { DeleteAccessKeyOutput } from "./types/DeleteAccessKeyOutput";
import { DeleteAccountAliasInput } from "./types/DeleteAccountAliasInput";
import { DeleteAccountAliasOutput } from "./types/DeleteAccountAliasOutput";
import { DeleteAccountPasswordPolicyInput } from "./types/DeleteAccountPasswordPolicyInput";
import { DeleteAccountPasswordPolicyOutput } from "./types/DeleteAccountPasswordPolicyOutput";
import { DeleteConflictException } from "./types/DeleteConflictException";
import { DeleteGroupInput } from "./types/DeleteGroupInput";
import { DeleteGroupOutput } from "./types/DeleteGroupOutput";
import { DeleteGroupPolicyInput } from "./types/DeleteGroupPolicyInput";
import { DeleteGroupPolicyOutput } from "./types/DeleteGroupPolicyOutput";
import { DeleteInstanceProfileInput } from "./types/DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "./types/DeleteInstanceProfileOutput";
import { DeleteLoginProfileInput } from "./types/DeleteLoginProfileInput";
import { DeleteLoginProfileOutput } from "./types/DeleteLoginProfileOutput";
import { DeleteOpenIDConnectProviderInput } from "./types/DeleteOpenIDConnectProviderInput";
import { DeleteOpenIDConnectProviderOutput } from "./types/DeleteOpenIDConnectProviderOutput";
import { DeletePolicyInput } from "./types/DeletePolicyInput";
import { DeletePolicyOutput } from "./types/DeletePolicyOutput";
import { DeletePolicyVersionInput } from "./types/DeletePolicyVersionInput";
import { DeletePolicyVersionOutput } from "./types/DeletePolicyVersionOutput";
import { DeleteRoleInput } from "./types/DeleteRoleInput";
import { DeleteRoleOutput } from "./types/DeleteRoleOutput";
import { DeleteRolePermissionsBoundaryInput } from "./types/DeleteRolePermissionsBoundaryInput";
import { DeleteRolePermissionsBoundaryOutput } from "./types/DeleteRolePermissionsBoundaryOutput";
import { DeleteRolePolicyInput } from "./types/DeleteRolePolicyInput";
import { DeleteRolePolicyOutput } from "./types/DeleteRolePolicyOutput";
import { DeleteSAMLProviderInput } from "./types/DeleteSAMLProviderInput";
import { DeleteSAMLProviderOutput } from "./types/DeleteSAMLProviderOutput";
import { DeleteSSHPublicKeyInput } from "./types/DeleteSSHPublicKeyInput";
import { DeleteSSHPublicKeyOutput } from "./types/DeleteSSHPublicKeyOutput";
import { DeleteServerCertificateInput } from "./types/DeleteServerCertificateInput";
import { DeleteServerCertificateOutput } from "./types/DeleteServerCertificateOutput";
import { DeleteServiceLinkedRoleInput } from "./types/DeleteServiceLinkedRoleInput";
import { DeleteServiceLinkedRoleOutput } from "./types/DeleteServiceLinkedRoleOutput";
import { DeleteServiceSpecificCredentialInput } from "./types/DeleteServiceSpecificCredentialInput";
import { DeleteServiceSpecificCredentialOutput } from "./types/DeleteServiceSpecificCredentialOutput";
import { DeleteSigningCertificateInput } from "./types/DeleteSigningCertificateInput";
import { DeleteSigningCertificateOutput } from "./types/DeleteSigningCertificateOutput";
import { DeleteUserInput } from "./types/DeleteUserInput";
import { DeleteUserOutput } from "./types/DeleteUserOutput";
import { DeleteUserPermissionsBoundaryInput } from "./types/DeleteUserPermissionsBoundaryInput";
import { DeleteUserPermissionsBoundaryOutput } from "./types/DeleteUserPermissionsBoundaryOutput";
import { DeleteUserPolicyInput } from "./types/DeleteUserPolicyInput";
import { DeleteUserPolicyOutput } from "./types/DeleteUserPolicyOutput";
import { DeleteVirtualMFADeviceInput } from "./types/DeleteVirtualMFADeviceInput";
import { DeleteVirtualMFADeviceOutput } from "./types/DeleteVirtualMFADeviceOutput";
import { DetachGroupPolicyInput } from "./types/DetachGroupPolicyInput";
import { DetachGroupPolicyOutput } from "./types/DetachGroupPolicyOutput";
import { DetachRolePolicyInput } from "./types/DetachRolePolicyInput";
import { DetachRolePolicyOutput } from "./types/DetachRolePolicyOutput";
import { DetachUserPolicyInput } from "./types/DetachUserPolicyInput";
import { DetachUserPolicyOutput } from "./types/DetachUserPolicyOutput";
import { DuplicateCertificateException } from "./types/DuplicateCertificateException";
import { DuplicateSSHPublicKeyException } from "./types/DuplicateSSHPublicKeyException";
import { EnableMFADeviceInput } from "./types/EnableMFADeviceInput";
import { EnableMFADeviceOutput } from "./types/EnableMFADeviceOutput";
import { EntityAlreadyExistsException } from "./types/EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "./types/EntityTemporarilyUnmodifiableException";
import { GenerateCredentialReportInput } from "./types/GenerateCredentialReportInput";
import { GenerateCredentialReportOutput } from "./types/GenerateCredentialReportOutput";
import { GenerateOrganizationsAccessReportInput } from "./types/GenerateOrganizationsAccessReportInput";
import { GenerateOrganizationsAccessReportOutput } from "./types/GenerateOrganizationsAccessReportOutput";
import { GenerateServiceLastAccessedDetailsInput } from "./types/GenerateServiceLastAccessedDetailsInput";
import { GenerateServiceLastAccessedDetailsOutput } from "./types/GenerateServiceLastAccessedDetailsOutput";
import { GetAccessKeyLastUsedInput } from "./types/GetAccessKeyLastUsedInput";
import { GetAccessKeyLastUsedOutput } from "./types/GetAccessKeyLastUsedOutput";
import { GetAccountAuthorizationDetailsInput } from "./types/GetAccountAuthorizationDetailsInput";
import { GetAccountAuthorizationDetailsOutput } from "./types/GetAccountAuthorizationDetailsOutput";
import { GetAccountPasswordPolicyInput } from "./types/GetAccountPasswordPolicyInput";
import { GetAccountPasswordPolicyOutput } from "./types/GetAccountPasswordPolicyOutput";
import { GetAccountSummaryInput } from "./types/GetAccountSummaryInput";
import { GetAccountSummaryOutput } from "./types/GetAccountSummaryOutput";
import { GetContextKeysForCustomPolicyInput } from "./types/GetContextKeysForCustomPolicyInput";
import { GetContextKeysForCustomPolicyOutput } from "./types/GetContextKeysForCustomPolicyOutput";
import { GetContextKeysForPrincipalPolicyInput } from "./types/GetContextKeysForPrincipalPolicyInput";
import { GetContextKeysForPrincipalPolicyOutput } from "./types/GetContextKeysForPrincipalPolicyOutput";
import { GetCredentialReportInput } from "./types/GetCredentialReportInput";
import { GetCredentialReportOutput } from "./types/GetCredentialReportOutput";
import { GetGroupInput } from "./types/GetGroupInput";
import { GetGroupOutput } from "./types/GetGroupOutput";
import { GetGroupPolicyInput } from "./types/GetGroupPolicyInput";
import { GetGroupPolicyOutput } from "./types/GetGroupPolicyOutput";
import { GetInstanceProfileInput } from "./types/GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "./types/GetInstanceProfileOutput";
import { GetLoginProfileInput } from "./types/GetLoginProfileInput";
import { GetLoginProfileOutput } from "./types/GetLoginProfileOutput";
import { GetOpenIDConnectProviderInput } from "./types/GetOpenIDConnectProviderInput";
import { GetOpenIDConnectProviderOutput } from "./types/GetOpenIDConnectProviderOutput";
import { GetOrganizationsAccessReportInput } from "./types/GetOrganizationsAccessReportInput";
import { GetOrganizationsAccessReportOutput } from "./types/GetOrganizationsAccessReportOutput";
import { GetPolicyInput } from "./types/GetPolicyInput";
import { GetPolicyOutput } from "./types/GetPolicyOutput";
import { GetPolicyVersionInput } from "./types/GetPolicyVersionInput";
import { GetPolicyVersionOutput } from "./types/GetPolicyVersionOutput";
import { GetRoleInput } from "./types/GetRoleInput";
import { GetRoleOutput } from "./types/GetRoleOutput";
import { GetRolePolicyInput } from "./types/GetRolePolicyInput";
import { GetRolePolicyOutput } from "./types/GetRolePolicyOutput";
import { GetSAMLProviderInput } from "./types/GetSAMLProviderInput";
import { GetSAMLProviderOutput } from "./types/GetSAMLProviderOutput";
import { GetSSHPublicKeyInput } from "./types/GetSSHPublicKeyInput";
import { GetSSHPublicKeyOutput } from "./types/GetSSHPublicKeyOutput";
import { GetServerCertificateInput } from "./types/GetServerCertificateInput";
import { GetServerCertificateOutput } from "./types/GetServerCertificateOutput";
import { GetServiceLastAccessedDetailsInput } from "./types/GetServiceLastAccessedDetailsInput";
import { GetServiceLastAccessedDetailsOutput } from "./types/GetServiceLastAccessedDetailsOutput";
import { GetServiceLastAccessedDetailsWithEntitiesInput } from "./types/GetServiceLastAccessedDetailsWithEntitiesInput";
import { GetServiceLastAccessedDetailsWithEntitiesOutput } from "./types/GetServiceLastAccessedDetailsWithEntitiesOutput";
import { GetServiceLinkedRoleDeletionStatusInput } from "./types/GetServiceLinkedRoleDeletionStatusInput";
import { GetServiceLinkedRoleDeletionStatusOutput } from "./types/GetServiceLinkedRoleDeletionStatusOutput";
import { GetUserInput } from "./types/GetUserInput";
import { GetUserOutput } from "./types/GetUserOutput";
import { GetUserPolicyInput } from "./types/GetUserPolicyInput";
import { GetUserPolicyOutput } from "./types/GetUserPolicyOutput";
import { InvalidAuthenticationCodeException } from "./types/InvalidAuthenticationCodeException";
import { InvalidCertificateException } from "./types/InvalidCertificateException";
import { InvalidInputException } from "./types/InvalidInputException";
import { InvalidPublicKeyException } from "./types/InvalidPublicKeyException";
import { InvalidUserTypeException } from "./types/InvalidUserTypeException";
import { KeyPairMismatchException } from "./types/KeyPairMismatchException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAccessKeysInput } from "./types/ListAccessKeysInput";
import { ListAccessKeysOutput } from "./types/ListAccessKeysOutput";
import { ListAccountAliasesInput } from "./types/ListAccountAliasesInput";
import { ListAccountAliasesOutput } from "./types/ListAccountAliasesOutput";
import { ListAttachedGroupPoliciesInput } from "./types/ListAttachedGroupPoliciesInput";
import { ListAttachedGroupPoliciesOutput } from "./types/ListAttachedGroupPoliciesOutput";
import { ListAttachedRolePoliciesInput } from "./types/ListAttachedRolePoliciesInput";
import { ListAttachedRolePoliciesOutput } from "./types/ListAttachedRolePoliciesOutput";
import { ListAttachedUserPoliciesInput } from "./types/ListAttachedUserPoliciesInput";
import { ListAttachedUserPoliciesOutput } from "./types/ListAttachedUserPoliciesOutput";
import { ListEntitiesForPolicyInput } from "./types/ListEntitiesForPolicyInput";
import { ListEntitiesForPolicyOutput } from "./types/ListEntitiesForPolicyOutput";
import { ListGroupPoliciesInput } from "./types/ListGroupPoliciesInput";
import { ListGroupPoliciesOutput } from "./types/ListGroupPoliciesOutput";
import { ListGroupsForUserInput } from "./types/ListGroupsForUserInput";
import { ListGroupsForUserOutput } from "./types/ListGroupsForUserOutput";
import { ListGroupsInput } from "./types/ListGroupsInput";
import { ListGroupsOutput } from "./types/ListGroupsOutput";
import { ListInstanceProfilesForRoleInput } from "./types/ListInstanceProfilesForRoleInput";
import { ListInstanceProfilesForRoleOutput } from "./types/ListInstanceProfilesForRoleOutput";
import { ListInstanceProfilesInput } from "./types/ListInstanceProfilesInput";
import { ListInstanceProfilesOutput } from "./types/ListInstanceProfilesOutput";
import { ListMFADevicesInput } from "./types/ListMFADevicesInput";
import { ListMFADevicesOutput } from "./types/ListMFADevicesOutput";
import { ListOpenIDConnectProvidersInput } from "./types/ListOpenIDConnectProvidersInput";
import { ListOpenIDConnectProvidersOutput } from "./types/ListOpenIDConnectProvidersOutput";
import { ListPoliciesGrantingServiceAccessInput } from "./types/ListPoliciesGrantingServiceAccessInput";
import { ListPoliciesGrantingServiceAccessOutput } from "./types/ListPoliciesGrantingServiceAccessOutput";
import { ListPoliciesInput } from "./types/ListPoliciesInput";
import { ListPoliciesOutput } from "./types/ListPoliciesOutput";
import { ListPolicyVersionsInput } from "./types/ListPolicyVersionsInput";
import { ListPolicyVersionsOutput } from "./types/ListPolicyVersionsOutput";
import { ListRolePoliciesInput } from "./types/ListRolePoliciesInput";
import { ListRolePoliciesOutput } from "./types/ListRolePoliciesOutput";
import { ListRoleTagsInput } from "./types/ListRoleTagsInput";
import { ListRoleTagsOutput } from "./types/ListRoleTagsOutput";
import { ListRolesInput } from "./types/ListRolesInput";
import { ListRolesOutput } from "./types/ListRolesOutput";
import { ListSAMLProvidersInput } from "./types/ListSAMLProvidersInput";
import { ListSAMLProvidersOutput } from "./types/ListSAMLProvidersOutput";
import { ListSSHPublicKeysInput } from "./types/ListSSHPublicKeysInput";
import { ListSSHPublicKeysOutput } from "./types/ListSSHPublicKeysOutput";
import { ListServerCertificatesInput } from "./types/ListServerCertificatesInput";
import { ListServerCertificatesOutput } from "./types/ListServerCertificatesOutput";
import { ListServiceSpecificCredentialsInput } from "./types/ListServiceSpecificCredentialsInput";
import { ListServiceSpecificCredentialsOutput } from "./types/ListServiceSpecificCredentialsOutput";
import { ListSigningCertificatesInput } from "./types/ListSigningCertificatesInput";
import { ListSigningCertificatesOutput } from "./types/ListSigningCertificatesOutput";
import { ListUserPoliciesInput } from "./types/ListUserPoliciesInput";
import { ListUserPoliciesOutput } from "./types/ListUserPoliciesOutput";
import { ListUserTagsInput } from "./types/ListUserTagsInput";
import { ListUserTagsOutput } from "./types/ListUserTagsOutput";
import { ListUsersInput } from "./types/ListUsersInput";
import { ListUsersOutput } from "./types/ListUsersOutput";
import { ListVirtualMFADevicesInput } from "./types/ListVirtualMFADevicesInput";
import { ListVirtualMFADevicesOutput } from "./types/ListVirtualMFADevicesOutput";
import { MalformedCertificateException } from "./types/MalformedCertificateException";
import { MalformedPolicyDocumentException } from "./types/MalformedPolicyDocumentException";
import { NoSuchEntityException } from "./types/NoSuchEntityException";
import { PasswordPolicyViolationException } from "./types/PasswordPolicyViolationException";
import { PolicyEvaluationException } from "./types/PolicyEvaluationException";
import { PolicyNotAttachableException } from "./types/PolicyNotAttachableException";
import { PutGroupPolicyInput } from "./types/PutGroupPolicyInput";
import { PutGroupPolicyOutput } from "./types/PutGroupPolicyOutput";
import { PutRolePermissionsBoundaryInput } from "./types/PutRolePermissionsBoundaryInput";
import { PutRolePermissionsBoundaryOutput } from "./types/PutRolePermissionsBoundaryOutput";
import { PutRolePolicyInput } from "./types/PutRolePolicyInput";
import { PutRolePolicyOutput } from "./types/PutRolePolicyOutput";
import { PutUserPermissionsBoundaryInput } from "./types/PutUserPermissionsBoundaryInput";
import { PutUserPermissionsBoundaryOutput } from "./types/PutUserPermissionsBoundaryOutput";
import { PutUserPolicyInput } from "./types/PutUserPolicyInput";
import { PutUserPolicyOutput } from "./types/PutUserPolicyOutput";
import { RemoveClientIDFromOpenIDConnectProviderInput } from "./types/RemoveClientIDFromOpenIDConnectProviderInput";
import { RemoveClientIDFromOpenIDConnectProviderOutput } from "./types/RemoveClientIDFromOpenIDConnectProviderOutput";
import { RemoveRoleFromInstanceProfileInput } from "./types/RemoveRoleFromInstanceProfileInput";
import { RemoveRoleFromInstanceProfileOutput } from "./types/RemoveRoleFromInstanceProfileOutput";
import { RemoveUserFromGroupInput } from "./types/RemoveUserFromGroupInput";
import { RemoveUserFromGroupOutput } from "./types/RemoveUserFromGroupOutput";
import { ReportGenerationLimitExceededException } from "./types/ReportGenerationLimitExceededException";
import { ResetServiceSpecificCredentialInput } from "./types/ResetServiceSpecificCredentialInput";
import { ResetServiceSpecificCredentialOutput } from "./types/ResetServiceSpecificCredentialOutput";
import { ResyncMFADeviceInput } from "./types/ResyncMFADeviceInput";
import { ResyncMFADeviceOutput } from "./types/ResyncMFADeviceOutput";
import { ServiceFailureException } from "./types/ServiceFailureException";
import { ServiceNotSupportedException } from "./types/ServiceNotSupportedException";
import { SetDefaultPolicyVersionInput } from "./types/SetDefaultPolicyVersionInput";
import { SetDefaultPolicyVersionOutput } from "./types/SetDefaultPolicyVersionOutput";
import { SetSecurityTokenServicePreferencesInput } from "./types/SetSecurityTokenServicePreferencesInput";
import { SetSecurityTokenServicePreferencesOutput } from "./types/SetSecurityTokenServicePreferencesOutput";
import { SimulateCustomPolicyInput } from "./types/SimulateCustomPolicyInput";
import { SimulateCustomPolicyOutput } from "./types/SimulateCustomPolicyOutput";
import { SimulatePrincipalPolicyInput } from "./types/SimulatePrincipalPolicyInput";
import { SimulatePrincipalPolicyOutput } from "./types/SimulatePrincipalPolicyOutput";
import { TagRoleInput } from "./types/TagRoleInput";
import { TagRoleOutput } from "./types/TagRoleOutput";
import { TagUserInput } from "./types/TagUserInput";
import { TagUserOutput } from "./types/TagUserOutput";
import { UnmodifiableEntityException } from "./types/UnmodifiableEntityException";
import { UnrecognizedPublicKeyEncodingException } from "./types/UnrecognizedPublicKeyEncodingException";
import { UntagRoleInput } from "./types/UntagRoleInput";
import { UntagRoleOutput } from "./types/UntagRoleOutput";
import { UntagUserInput } from "./types/UntagUserInput";
import { UntagUserOutput } from "./types/UntagUserOutput";
import { UpdateAccessKeyInput } from "./types/UpdateAccessKeyInput";
import { UpdateAccessKeyOutput } from "./types/UpdateAccessKeyOutput";
import { UpdateAccountPasswordPolicyInput } from "./types/UpdateAccountPasswordPolicyInput";
import { UpdateAccountPasswordPolicyOutput } from "./types/UpdateAccountPasswordPolicyOutput";
import { UpdateAssumeRolePolicyInput } from "./types/UpdateAssumeRolePolicyInput";
import { UpdateAssumeRolePolicyOutput } from "./types/UpdateAssumeRolePolicyOutput";
import { UpdateGroupInput } from "./types/UpdateGroupInput";
import { UpdateGroupOutput } from "./types/UpdateGroupOutput";
import { UpdateLoginProfileInput } from "./types/UpdateLoginProfileInput";
import { UpdateLoginProfileOutput } from "./types/UpdateLoginProfileOutput";
import { UpdateOpenIDConnectProviderThumbprintInput } from "./types/UpdateOpenIDConnectProviderThumbprintInput";
import { UpdateOpenIDConnectProviderThumbprintOutput } from "./types/UpdateOpenIDConnectProviderThumbprintOutput";
import { UpdateRoleDescriptionInput } from "./types/UpdateRoleDescriptionInput";
import { UpdateRoleDescriptionOutput } from "./types/UpdateRoleDescriptionOutput";
import { UpdateRoleInput } from "./types/UpdateRoleInput";
import { UpdateRoleOutput } from "./types/UpdateRoleOutput";
import { UpdateSAMLProviderInput } from "./types/UpdateSAMLProviderInput";
import { UpdateSAMLProviderOutput } from "./types/UpdateSAMLProviderOutput";
import { UpdateSSHPublicKeyInput } from "./types/UpdateSSHPublicKeyInput";
import { UpdateSSHPublicKeyOutput } from "./types/UpdateSSHPublicKeyOutput";
import { UpdateServerCertificateInput } from "./types/UpdateServerCertificateInput";
import { UpdateServerCertificateOutput } from "./types/UpdateServerCertificateOutput";
import { UpdateServiceSpecificCredentialInput } from "./types/UpdateServiceSpecificCredentialInput";
import { UpdateServiceSpecificCredentialOutput } from "./types/UpdateServiceSpecificCredentialOutput";
import { UpdateSigningCertificateInput } from "./types/UpdateSigningCertificateInput";
import { UpdateSigningCertificateOutput } from "./types/UpdateSigningCertificateOutput";
import { UpdateUserInput } from "./types/UpdateUserInput";
import { UpdateUserOutput } from "./types/UpdateUserOutput";
import { UploadSSHPublicKeyInput } from "./types/UploadSSHPublicKeyInput";
import { UploadSSHPublicKeyOutput } from "./types/UploadSSHPublicKeyOutput";
import { UploadServerCertificateInput } from "./types/UploadServerCertificateInput";
import { UploadServerCertificateOutput } from "./types/UploadServerCertificateOutput";
import { UploadSigningCertificateInput } from "./types/UploadSigningCertificateInput";
import { UploadSigningCertificateOutput } from "./types/UploadSigningCertificateOutput";
import { AddClientIDToOpenIDConnectProviderCommand } from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import { AddRoleToInstanceProfileCommand } from "./commands/AddRoleToInstanceProfileCommand";
import { AddUserToGroupCommand } from "./commands/AddUserToGroupCommand";
import { AttachGroupPolicyCommand } from "./commands/AttachGroupPolicyCommand";
import { AttachRolePolicyCommand } from "./commands/AttachRolePolicyCommand";
import { AttachUserPolicyCommand } from "./commands/AttachUserPolicyCommand";
import { ChangePasswordCommand } from "./commands/ChangePasswordCommand";
import { CreateAccessKeyCommand } from "./commands/CreateAccessKeyCommand";
import { CreateAccountAliasCommand } from "./commands/CreateAccountAliasCommand";
import { CreateGroupCommand } from "./commands/CreateGroupCommand";
import { CreateInstanceProfileCommand } from "./commands/CreateInstanceProfileCommand";
import { CreateLoginProfileCommand } from "./commands/CreateLoginProfileCommand";
import { CreateOpenIDConnectProviderCommand } from "./commands/CreateOpenIDConnectProviderCommand";
import { CreatePolicyCommand } from "./commands/CreatePolicyCommand";
import { CreatePolicyVersionCommand } from "./commands/CreatePolicyVersionCommand";
import { CreateRoleCommand } from "./commands/CreateRoleCommand";
import { CreateSAMLProviderCommand } from "./commands/CreateSAMLProviderCommand";
import { CreateServiceLinkedRoleCommand } from "./commands/CreateServiceLinkedRoleCommand";
import { CreateServiceSpecificCredentialCommand } from "./commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommand } from "./commands/CreateUserCommand";
import { CreateVirtualMFADeviceCommand } from "./commands/CreateVirtualMFADeviceCommand";
import { DeactivateMFADeviceCommand } from "./commands/DeactivateMFADeviceCommand";
import { DeleteAccessKeyCommand } from "./commands/DeleteAccessKeyCommand";
import { DeleteAccountAliasCommand } from "./commands/DeleteAccountAliasCommand";
import { DeleteAccountPasswordPolicyCommand } from "./commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommand } from "./commands/DeleteGroupCommand";
import { DeleteGroupPolicyCommand } from "./commands/DeleteGroupPolicyCommand";
import { DeleteInstanceProfileCommand } from "./commands/DeleteInstanceProfileCommand";
import { DeleteLoginProfileCommand } from "./commands/DeleteLoginProfileCommand";
import { DeleteOpenIDConnectProviderCommand } from "./commands/DeleteOpenIDConnectProviderCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DeletePolicyVersionCommand } from "./commands/DeletePolicyVersionCommand";
import { DeleteRoleCommand } from "./commands/DeleteRoleCommand";
import { DeleteRolePermissionsBoundaryCommand } from "./commands/DeleteRolePermissionsBoundaryCommand";
import { DeleteRolePolicyCommand } from "./commands/DeleteRolePolicyCommand";
import { DeleteSAMLProviderCommand } from "./commands/DeleteSAMLProviderCommand";
import { DeleteSSHPublicKeyCommand } from "./commands/DeleteSSHPublicKeyCommand";
import { DeleteServerCertificateCommand } from "./commands/DeleteServerCertificateCommand";
import { DeleteServiceLinkedRoleCommand } from "./commands/DeleteServiceLinkedRoleCommand";
import { DeleteServiceSpecificCredentialCommand } from "./commands/DeleteServiceSpecificCredentialCommand";
import { DeleteSigningCertificateCommand } from "./commands/DeleteSigningCertificateCommand";
import { DeleteUserCommand } from "./commands/DeleteUserCommand";
import { DeleteUserPermissionsBoundaryCommand } from "./commands/DeleteUserPermissionsBoundaryCommand";
import { DeleteUserPolicyCommand } from "./commands/DeleteUserPolicyCommand";
import { DeleteVirtualMFADeviceCommand } from "./commands/DeleteVirtualMFADeviceCommand";
import { DetachGroupPolicyCommand } from "./commands/DetachGroupPolicyCommand";
import { DetachRolePolicyCommand } from "./commands/DetachRolePolicyCommand";
import { DetachUserPolicyCommand } from "./commands/DetachUserPolicyCommand";
import { EnableMFADeviceCommand } from "./commands/EnableMFADeviceCommand";
import { GenerateCredentialReportCommand } from "./commands/GenerateCredentialReportCommand";
import { GenerateOrganizationsAccessReportCommand } from "./commands/GenerateOrganizationsAccessReportCommand";
import { GenerateServiceLastAccessedDetailsCommand } from "./commands/GenerateServiceLastAccessedDetailsCommand";
import { GetAccessKeyLastUsedCommand } from "./commands/GetAccessKeyLastUsedCommand";
import { GetAccountAuthorizationDetailsCommand } from "./commands/GetAccountAuthorizationDetailsCommand";
import { GetAccountPasswordPolicyCommand } from "./commands/GetAccountPasswordPolicyCommand";
import { GetAccountSummaryCommand } from "./commands/GetAccountSummaryCommand";
import { GetContextKeysForCustomPolicyCommand } from "./commands/GetContextKeysForCustomPolicyCommand";
import { GetContextKeysForPrincipalPolicyCommand } from "./commands/GetContextKeysForPrincipalPolicyCommand";
import { GetCredentialReportCommand } from "./commands/GetCredentialReportCommand";
import { GetGroupCommand } from "./commands/GetGroupCommand";
import { GetGroupPolicyCommand } from "./commands/GetGroupPolicyCommand";
import { GetInstanceProfileCommand } from "./commands/GetInstanceProfileCommand";
import { GetLoginProfileCommand } from "./commands/GetLoginProfileCommand";
import { GetOpenIDConnectProviderCommand } from "./commands/GetOpenIDConnectProviderCommand";
import { GetOrganizationsAccessReportCommand } from "./commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommand } from "./commands/GetPolicyVersionCommand";
import { GetRoleCommand } from "./commands/GetRoleCommand";
import { GetRolePolicyCommand } from "./commands/GetRolePolicyCommand";
import { GetSAMLProviderCommand } from "./commands/GetSAMLProviderCommand";
import { GetSSHPublicKeyCommand } from "./commands/GetSSHPublicKeyCommand";
import { GetServerCertificateCommand } from "./commands/GetServerCertificateCommand";
import { GetServiceLastAccessedDetailsCommand } from "./commands/GetServiceLastAccessedDetailsCommand";
import { GetServiceLastAccessedDetailsWithEntitiesCommand } from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import { GetServiceLinkedRoleDeletionStatusCommand } from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import { GetUserCommand } from "./commands/GetUserCommand";
import { GetUserPolicyCommand } from "./commands/GetUserPolicyCommand";
import { ListAccessKeysCommand } from "./commands/ListAccessKeysCommand";
import { ListAccountAliasesCommand } from "./commands/ListAccountAliasesCommand";
import { ListAttachedGroupPoliciesCommand } from "./commands/ListAttachedGroupPoliciesCommand";
import { ListAttachedRolePoliciesCommand } from "./commands/ListAttachedRolePoliciesCommand";
import { ListAttachedUserPoliciesCommand } from "./commands/ListAttachedUserPoliciesCommand";
import { ListEntitiesForPolicyCommand } from "./commands/ListEntitiesForPolicyCommand";
import { ListGroupPoliciesCommand } from "./commands/ListGroupPoliciesCommand";
import { ListGroupsCommand } from "./commands/ListGroupsCommand";
import { ListGroupsForUserCommand } from "./commands/ListGroupsForUserCommand";
import { ListInstanceProfilesCommand } from "./commands/ListInstanceProfilesCommand";
import { ListInstanceProfilesForRoleCommand } from "./commands/ListInstanceProfilesForRoleCommand";
import { ListMFADevicesCommand } from "./commands/ListMFADevicesCommand";
import { ListOpenIDConnectProvidersCommand } from "./commands/ListOpenIDConnectProvidersCommand";
import { ListPoliciesCommand } from "./commands/ListPoliciesCommand";
import { ListPoliciesGrantingServiceAccessCommand } from "./commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyVersionsCommand } from "./commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommand } from "./commands/ListRolePoliciesCommand";
import { ListRoleTagsCommand } from "./commands/ListRoleTagsCommand";
import { ListRolesCommand } from "./commands/ListRolesCommand";
import { ListSAMLProvidersCommand } from "./commands/ListSAMLProvidersCommand";
import { ListSSHPublicKeysCommand } from "./commands/ListSSHPublicKeysCommand";
import { ListServerCertificatesCommand } from "./commands/ListServerCertificatesCommand";
import { ListServiceSpecificCredentialsCommand } from "./commands/ListServiceSpecificCredentialsCommand";
import { ListSigningCertificatesCommand } from "./commands/ListSigningCertificatesCommand";
import { ListUserPoliciesCommand } from "./commands/ListUserPoliciesCommand";
import { ListUserTagsCommand } from "./commands/ListUserTagsCommand";
import { ListUsersCommand } from "./commands/ListUsersCommand";
import { ListVirtualMFADevicesCommand } from "./commands/ListVirtualMFADevicesCommand";
import { PutGroupPolicyCommand } from "./commands/PutGroupPolicyCommand";
import { PutRolePermissionsBoundaryCommand } from "./commands/PutRolePermissionsBoundaryCommand";
import { PutRolePolicyCommand } from "./commands/PutRolePolicyCommand";
import { PutUserPermissionsBoundaryCommand } from "./commands/PutUserPermissionsBoundaryCommand";
import { PutUserPolicyCommand } from "./commands/PutUserPolicyCommand";
import { RemoveClientIDFromOpenIDConnectProviderCommand } from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import { RemoveRoleFromInstanceProfileCommand } from "./commands/RemoveRoleFromInstanceProfileCommand";
import { RemoveUserFromGroupCommand } from "./commands/RemoveUserFromGroupCommand";
import { ResetServiceSpecificCredentialCommand } from "./commands/ResetServiceSpecificCredentialCommand";
import { ResyncMFADeviceCommand } from "./commands/ResyncMFADeviceCommand";
import { SetDefaultPolicyVersionCommand } from "./commands/SetDefaultPolicyVersionCommand";
import { SetSecurityTokenServicePreferencesCommand } from "./commands/SetSecurityTokenServicePreferencesCommand";
import { SimulateCustomPolicyCommand } from "./commands/SimulateCustomPolicyCommand";
import { SimulatePrincipalPolicyCommand } from "./commands/SimulatePrincipalPolicyCommand";
import { TagRoleCommand } from "./commands/TagRoleCommand";
import { TagUserCommand } from "./commands/TagUserCommand";
import { UntagRoleCommand } from "./commands/UntagRoleCommand";
import { UntagUserCommand } from "./commands/UntagUserCommand";
import { UpdateAccessKeyCommand } from "./commands/UpdateAccessKeyCommand";
import { UpdateAccountPasswordPolicyCommand } from "./commands/UpdateAccountPasswordPolicyCommand";
import { UpdateAssumeRolePolicyCommand } from "./commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommand } from "./commands/UpdateGroupCommand";
import { UpdateLoginProfileCommand } from "./commands/UpdateLoginProfileCommand";
import { UpdateOpenIDConnectProviderThumbprintCommand } from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommand } from "./commands/UpdateRoleCommand";
import { UpdateRoleDescriptionCommand } from "./commands/UpdateRoleDescriptionCommand";
import { UpdateSAMLProviderCommand } from "./commands/UpdateSAMLProviderCommand";
import { UpdateSSHPublicKeyCommand } from "./commands/UpdateSSHPublicKeyCommand";
import { UpdateServerCertificateCommand } from "./commands/UpdateServerCertificateCommand";
import { UpdateServiceSpecificCredentialCommand } from "./commands/UpdateServiceSpecificCredentialCommand";
import { UpdateSigningCertificateCommand } from "./commands/UpdateSigningCertificateCommand";
import { UpdateUserCommand } from "./commands/UpdateUserCommand";
import { UploadSSHPublicKeyCommand } from "./commands/UploadSSHPublicKeyCommand";
import { UploadServerCertificateCommand } from "./commands/UploadServerCertificateCommand";
import { UploadSigningCertificateCommand } from "./commands/UploadSigningCertificateCommand";

export class IAM extends IAMClient {
  /**
   * <p>Adds a new client ID (also known as audience) to the list of client IDs already registered for the specified IAM OpenID Connect (OIDC) provider resource.</p> <p>This operation is idempotent; it does not fail or return an error if you add an existing client ID to the provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderInput
  ): Promise<AddClientIDToOpenIDConnectProviderOutput>;
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderInput,
    cb: (err: any, data?: AddClientIDToOpenIDConnectProviderOutput) => void
  ): void;
  public addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderInput,
    cb?: (err: any, data?: AddClientIDToOpenIDConnectProviderOutput) => void
  ): Promise<AddClientIDToOpenIDConnectProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddClientIDToOpenIDConnectProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified IAM role to the specified instance profile. An instance profile can contain only one role, and this limit cannot be increased. You can remove the existing role and then add a different role to an instance profile. You must then wait for the change to appear across all of AWS because of <a href="https://en.wikipedia.org/wiki/Eventual_consistency">eventual consistency</a>. To force the change, you must <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DisassociateIamInstanceProfile.html">disassociate the instance profile</a> and then <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_AssociateIamInstanceProfile.html">associate the instance profile</a>, or you can stop your instance and then restart it.</p> <note> <p>The caller of this API must be granted the <code>PassRole</code> permission on the IAM role by a permissions policy.</p> </note> <p>For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileInput
  ): Promise<AddRoleToInstanceProfileOutput>;
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileInput,
    cb: (err: any, data?: AddRoleToInstanceProfileOutput) => void
  ): void;
  public addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileInput,
    cb?: (err: any, data?: AddRoleToInstanceProfileOutput) => void
  ): Promise<AddRoleToInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddRoleToInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds the specified user to the specified group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addUserToGroup(
    args: AddUserToGroupInput
  ): Promise<AddUserToGroupOutput>;
  public addUserToGroup(
    args: AddUserToGroupInput,
    cb: (err: any, data?: AddUserToGroupOutput) => void
  ): void;
  public addUserToGroup(
    args: AddUserToGroupInput,
    cb?: (err: any, data?: AddUserToGroupOutput) => void
  ): Promise<AddUserToGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddUserToGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified managed policy to the specified IAM group.</p> <p>You use this API to attach a managed policy to a group. To embed an inline policy in a group, use <a>PutGroupPolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PolicyNotAttachableException} <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachGroupPolicy(
    args: AttachGroupPolicyInput
  ): Promise<AttachGroupPolicyOutput>;
  public attachGroupPolicy(
    args: AttachGroupPolicyInput,
    cb: (err: any, data?: AttachGroupPolicyOutput) => void
  ): void;
  public attachGroupPolicy(
    args: AttachGroupPolicyInput,
    cb?: (err: any, data?: AttachGroupPolicyOutput) => void
  ): Promise<AttachGroupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachGroupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified managed policy to the specified IAM role. When you attach a managed policy to a role, the managed policy becomes part of the role's permission (access) policy.</p> <note> <p>You cannot use a managed policy as the role's trust policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>.</p> </note> <p>Use this API to attach a <i>managed</i> policy to a role. To embed an inline policy in a role, use <a>PutRolePolicy</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {PolicyNotAttachableException} <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachRolePolicy(
    args: AttachRolePolicyInput
  ): Promise<AttachRolePolicyOutput>;
  public attachRolePolicy(
    args: AttachRolePolicyInput,
    cb: (err: any, data?: AttachRolePolicyOutput) => void
  ): void;
  public attachRolePolicy(
    args: AttachRolePolicyInput,
    cb?: (err: any, data?: AttachRolePolicyOutput) => void
  ): Promise<AttachRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches the specified managed policy to the specified user.</p> <p>You use this API to attach a <i>managed</i> policy to a user. To embed an inline policy in a user, use <a>PutUserPolicy</a>.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PolicyNotAttachableException} <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachUserPolicy(
    args: AttachUserPolicyInput
  ): Promise<AttachUserPolicyOutput>;
  public attachUserPolicy(
    args: AttachUserPolicyInput,
    cb: (err: any, data?: AttachUserPolicyOutput) => void
  ): void;
  public attachUserPolicy(
    args: AttachUserPolicyInput,
    cb?: (err: any, data?: AttachUserPolicyOutput) => void
  ): Promise<AttachUserPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachUserPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the password of the IAM user who is calling this operation. The AWS account root user password is not affected by this operation.</p> <p>To change the password for a different user, see <a>UpdateLoginProfile</a>. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidUserTypeException} <p>The request was rejected because the type of user for the transaction was incorrect.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {PasswordPolicyViolationException} <p>The request was rejected because the provided password did not meet the requirements imposed by the account password policy.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public changePassword(
    args: ChangePasswordInput
  ): Promise<ChangePasswordOutput>;
  public changePassword(
    args: ChangePasswordInput,
    cb: (err: any, data?: ChangePasswordOutput) => void
  ): void;
  public changePassword(
    args: ChangePasswordInput,
    cb?: (err: any, data?: ChangePasswordOutput) => void
  ): Promise<ChangePasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ChangePasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the specified user. The default status for new keys is <code>Active</code>.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials. This is true even if the AWS account has no associated users.</p> <p> For information about limits on the number of keys you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can delete the access keys for the associated user and then create new keys.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAccessKey(
    args: CreateAccessKeyInput
  ): Promise<CreateAccessKeyOutput>;
  public createAccessKey(
    args: CreateAccessKeyInput,
    cb: (err: any, data?: CreateAccessKeyOutput) => void
  ): void;
  public createAccessKey(
    args: CreateAccessKeyInput,
    cb?: (err: any, data?: CreateAccessKeyOutput) => void
  ): Promise<CreateAccessKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAccessKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an alias for your AWS account. For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAccountAlias(
    args: CreateAccountAliasInput
  ): Promise<CreateAccountAliasOutput>;
  public createAccountAlias(
    args: CreateAccountAliasInput,
    cb: (err: any, data?: CreateAccountAliasOutput) => void
  ): void;
  public createAccountAlias(
    args: CreateAccountAliasInput,
    cb?: (err: any, data?: CreateAccountAliasOutput) => void
  ): Promise<CreateAccountAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAccountAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new group.</p> <p> For information about the number of groups you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGroup(args: CreateGroupInput): Promise<CreateGroupOutput>;
  public createGroup(
    args: CreateGroupInput,
    cb: (err: any, data?: CreateGroupOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupInput,
    cb?: (err: any, data?: CreateGroupOutput) => void
  ): Promise<CreateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a new instance profile. For information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstanceProfile(
    args: CreateInstanceProfileInput
  ): Promise<CreateInstanceProfileOutput>;
  public createInstanceProfile(
    args: CreateInstanceProfileInput,
    cb: (err: any, data?: CreateInstanceProfileOutput) => void
  ): void;
  public createInstanceProfile(
    args: CreateInstanceProfileInput,
    cb?: (err: any, data?: CreateInstanceProfileOutput) => void
  ): Promise<CreateInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Creates a password for the specified user, giving the user the ability to access AWS services through the AWS Management Console. For more information about managing passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {PasswordPolicyViolationException} <p>The request was rejected because the provided password did not meet the requirements imposed by the account password policy.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoginProfile(
    args: CreateLoginProfileInput
  ): Promise<CreateLoginProfileOutput>;
  public createLoginProfile(
    args: CreateLoginProfileInput,
    cb: (err: any, data?: CreateLoginProfileOutput) => void
  ): void;
  public createLoginProfile(
    args: CreateLoginProfileInput,
    cb?: (err: any, data?: CreateLoginProfileOutput) => void
  ): Promise<CreateLoginProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoginProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an IAM entity to describe an identity provider (IdP) that supports <a href="http://openid.net/connect/">OpenID Connect (OIDC)</a>.</p> <p>The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between AWS and the OIDC provider.</p> <p>When you create the IAM OIDC provider, you specify the following:</p> <ul> <li> <p>The URL of the OIDC identity provider (IdP) to trust</p> </li> <li> <p>A list of client IDs (also known as audiences) that identify the application or applications that are allowed to authenticate using the OIDC provider</p> </li> <li> <p>A list of thumbprints of the server certificate(s) that the IdP uses</p> </li> </ul> <p>You get all of this information from the OIDC IdP that you want to use to access AWS.</p> <note> <p>The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the <a>CreateOpenIDConnectProvider</a> operation to highly privileged users.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderInput
  ): Promise<CreateOpenIDConnectProviderOutput>;
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderInput,
    cb: (err: any, data?: CreateOpenIDConnectProviderOutput) => void
  ): void;
  public createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderInput,
    cb?: (err: any, data?: CreateOpenIDConnectProviderOutput) => void
  ): Promise<CreateOpenIDConnectProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateOpenIDConnectProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new managed policy for your AWS account.</p> <p>This operation creates a policy version with a version identifier of <code>v1</code> and sets v1 as the policy's default version. For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policies in general, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPolicy(args: CreatePolicyInput): Promise<CreatePolicyOutput>;
  public createPolicy(
    args: CreatePolicyInput,
    cb: (err: any, data?: CreatePolicyOutput) => void
  ): void;
  public createPolicy(
    args: CreatePolicyInput,
    cb?: (err: any, data?: CreatePolicyOutput) => void
  ): Promise<CreatePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version of the specified managed policy. To update a managed policy, you create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must delete an existing version using <a>DeletePolicyVersion</a> before you create a new version.</p> <p>Optionally, you can set the new version as the policy's default version. The default version is the version that is in effect for the IAM users, groups, and roles to which the policy is attached.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPolicyVersion(
    args: CreatePolicyVersionInput
  ): Promise<CreatePolicyVersionOutput>;
  public createPolicyVersion(
    args: CreatePolicyVersionInput,
    cb: (err: any, data?: CreatePolicyVersionOutput) => void
  ): void;
  public createPolicyVersion(
    args: CreatePolicyVersionInput,
    cb?: (err: any, data?: CreatePolicyVersionOutput) => void
  ): Promise<CreatePolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new role for your AWS account. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM Roles</a>. For information about limitations on role names and the number of roles you can create, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRole(args: CreateRoleInput): Promise<CreateRoleOutput>;
  public createRole(
    args: CreateRoleInput,
    cb: (err: any, data?: CreateRoleOutput) => void
  ): void;
  public createRole(
    args: CreateRoleInput,
    cb?: (err: any, data?: CreateRoleOutput) => void
  ): Promise<CreateRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an IAM resource that describes an identity provider (IdP) that supports SAML 2.0.</p> <p>The SAML provider resource that you create with this operation can be used as a principal in an IAM role's trust policy. Such a policy can enable federated users who sign in using the SAML IdP to assume the role. You can create an IAM role that supports Web-based single sign-on (SSO) to the AWS Management Console or one that supports API access to AWS.</p> <p>When you create the SAML provider resource, you upload a SAML metadata document that you get from your IdP. That document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that the IdP sends. You must generate the metadata document using the identity management software that is used as your organization's IdP.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note> <p> For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html">Enabling SAML 2.0 Federated Users to Access the AWS Management Console</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based Federation</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSAMLProvider(
    args: CreateSAMLProviderInput
  ): Promise<CreateSAMLProviderOutput>;
  public createSAMLProvider(
    args: CreateSAMLProviderInput,
    cb: (err: any, data?: CreateSAMLProviderOutput) => void
  ): void;
  public createSAMLProvider(
    args: CreateSAMLProviderInput,
    cb?: (err: any, data?: CreateSAMLProviderOutput) => void
  ): Promise<CreateSAMLProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSAMLProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an IAM role that is linked to a specific AWS service. The service controls the attached policies and when the role can be deleted. This helps ensure that the service is not broken by an unexpectedly changed or deleted role, which could put your AWS resources into an unknown state. Allowing the service to control the role helps improve service stability and proper cleanup when a service and its role are no longer needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using Service-Linked Roles</a> in the <i>IAM User Guide</i>. </p> <p>To attach a policy to this service-linked role, you must make the request using the AWS service that depends on this role.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleInput
  ): Promise<CreateServiceLinkedRoleOutput>;
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleInput,
    cb: (err: any, data?: CreateServiceLinkedRoleOutput) => void
  ): void;
  public createServiceLinkedRole(
    args: CreateServiceLinkedRoleInput,
    cb?: (err: any, data?: CreateServiceLinkedRoleOutput) => void
  ): Promise<CreateServiceLinkedRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServiceLinkedRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a set of credentials consisting of a user name and password that can be used to access the service specified in the request. These credentials are generated by IAM, and can be used only for the specified service. </p> <p>You can have a maximum of two sets of service-specific credentials for each supported service per user.</p> <p>The only supported service at this time is AWS CodeCommit.</p> <p>You can reset the password to a new service-generated value by calling <a>ResetServiceSpecificCredential</a>.</p> <p>For more information about service-specific credentials, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_ssh-keys.html">Using IAM with AWS CodeCommit: Git Credentials, SSH Keys, and AWS Access Keys</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceNotSupportedException} <p>The specified service does not support service-specific credentials.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialInput
  ): Promise<CreateServiceSpecificCredentialOutput>;
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialInput,
    cb: (err: any, data?: CreateServiceSpecificCredentialOutput) => void
  ): void;
  public createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialInput,
    cb?: (err: any, data?: CreateServiceSpecificCredentialOutput) => void
  ): Promise<CreateServiceSpecificCredentialOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateServiceSpecificCredentialCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new IAM user for your AWS account.</p> <p> For information about limitations on the number of IAM users you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUser(args: CreateUserInput): Promise<CreateUserOutput>;
  public createUser(
    args: CreateUserInput,
    cb: (err: any, data?: CreateUserOutput) => void
  ): void;
  public createUser(
    args: CreateUserInput,
    cb?: (err: any, data?: CreateUserOutput) => void
  ): Promise<CreateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new virtual MFA device for the AWS account. After creating the virtual MFA, use <a>EnableMFADevice</a> to attach the MFA device to an IAM user. For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA Device</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of MFA devices you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on Entities</a> in the <i>IAM User Guide</i>.</p> <important> <p>The seed information contained in the QR code and the Base32 string should be treated like any other secret access information. In other words, protect the seed information as you would your AWS access keys or your passwords. After you provision your virtual device, you should ensure that the information is destroyed following secure procedures.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceInput
  ): Promise<CreateVirtualMFADeviceOutput>;
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceInput,
    cb: (err: any, data?: CreateVirtualMFADeviceOutput) => void
  ): void;
  public createVirtualMFADevice(
    args: CreateVirtualMFADeviceInput,
    cb?: (err: any, data?: CreateVirtualMFADeviceOutput) => void
  ): Promise<CreateVirtualMFADeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVirtualMFADeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deactivates the specified MFA device and removes it from association with the user name for which it was originally enabled.</p> <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a Virtual Multi-factor Authentication (MFA) Device</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deactivateMFADevice(
    args: DeactivateMFADeviceInput
  ): Promise<DeactivateMFADeviceOutput>;
  public deactivateMFADevice(
    args: DeactivateMFADeviceInput,
    cb: (err: any, data?: DeactivateMFADeviceOutput) => void
  ): void;
  public deactivateMFADevice(
    args: DeactivateMFADeviceInput,
    cb?: (err: any, data?: DeactivateMFADeviceOutput) => void
  ): Promise<DeactivateMFADeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeactivateMFADeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the access key pair associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccessKey(
    args: DeleteAccessKeyInput
  ): Promise<DeleteAccessKeyOutput>;
  public deleteAccessKey(
    args: DeleteAccessKeyInput,
    cb: (err: any, data?: DeleteAccessKeyOutput) => void
  ): void;
  public deleteAccessKey(
    args: DeleteAccessKeyInput,
    cb?: (err: any, data?: DeleteAccessKeyOutput) => void
  ): Promise<DeleteAccessKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccessKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Deletes the specified AWS account alias. For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccountAlias(
    args: DeleteAccountAliasInput
  ): Promise<DeleteAccountAliasOutput>;
  public deleteAccountAlias(
    args: DeleteAccountAliasInput,
    cb: (err: any, data?: DeleteAccountAliasOutput) => void
  ): void;
  public deleteAccountAlias(
    args: DeleteAccountAliasInput,
    cb?: (err: any, data?: DeleteAccountAliasOutput) => void
  ): Promise<DeleteAccountAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccountAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the password policy for the AWS account. There are no parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyInput
  ): Promise<DeleteAccountPasswordPolicyOutput>;
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyInput,
    cb: (err: any, data?: DeleteAccountPasswordPolicyOutput) => void
  ): void;
  public deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyInput,
    cb?: (err: any, data?: DeleteAccountPasswordPolicyOutput) => void
  ): Promise<DeleteAccountPasswordPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAccountPasswordPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified IAM group. The group must not contain any users or have any attached policies.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroup(args: DeleteGroupInput): Promise<DeleteGroupOutput>;
  public deleteGroup(
    args: DeleteGroupInput,
    cb: (err: any, data?: DeleteGroupOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupInput,
    cb?: (err: any, data?: DeleteGroupOutput) => void
  ): Promise<DeleteGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified inline policy that is embedded in the specified IAM group.</p> <p>A group can also have managed policies attached to it. To detach a managed policy from a group, use <a>DetachGroupPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGroupPolicy(
    args: DeleteGroupPolicyInput
  ): Promise<DeleteGroupPolicyOutput>;
  public deleteGroupPolicy(
    args: DeleteGroupPolicyInput,
    cb: (err: any, data?: DeleteGroupPolicyOutput) => void
  ): void;
  public deleteGroupPolicy(
    args: DeleteGroupPolicyInput,
    cb?: (err: any, data?: DeleteGroupPolicyOutput) => void
  ): Promise<DeleteGroupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGroupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified instance profile. The instance profile must not have an associated role.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the instance profile you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important> <p>For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput
  ): Promise<DeleteInstanceProfileOutput>;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput,
    cb: (err: any, data?: DeleteInstanceProfileOutput) => void
  ): void;
  public deleteInstanceProfile(
    args: DeleteInstanceProfileInput,
    cb?: (err: any, data?: DeleteInstanceProfileOutput) => void
  ): Promise<DeleteInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the password for the specified IAM user, which terminates the user's ability to access AWS services through the AWS Management Console.</p> <important> <p> Deleting a user's password does not prevent a user from accessing AWS through the command line interface or the API. To prevent all user access, you must also either make any access keys inactive or delete them. For more information about making keys inactive or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoginProfile(
    args: DeleteLoginProfileInput
  ): Promise<DeleteLoginProfileOutput>;
  public deleteLoginProfile(
    args: DeleteLoginProfileInput,
    cb: (err: any, data?: DeleteLoginProfileOutput) => void
  ): void;
  public deleteLoginProfile(
    args: DeleteLoginProfileInput,
    cb?: (err: any, data?: DeleteLoginProfileOutput) => void
  ): Promise<DeleteLoginProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoginProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p> <p>Deleting an IAM OIDC provider resource does not update any roles that reference the provider as a principal in their trust policies. Any attempt to assume a role that references a deleted provider fails.</p> <p>This operation is idempotent; it does not fail or return an error if you call the operation for a provider that does not exist.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderInput
  ): Promise<DeleteOpenIDConnectProviderOutput>;
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderInput,
    cb: (err: any, data?: DeleteOpenIDConnectProviderOutput) => void
  ): void;
  public deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderInput,
    cb?: (err: any, data?: DeleteOpenIDConnectProviderOutput) => void
  ): Promise<DeleteOpenIDConnectProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteOpenIDConnectProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified managed policy.</p> <p>Before you can delete a managed policy, you must first detach the policy from all users, groups, and roles that it is attached to. In addition, you must delete all the policy's versions. The following steps describe the process for deleting a managed policy:</p> <ul> <li> <p>Detach the policy from all users, groups, and roles that the policy is attached to, using the <a>DetachUserPolicy</a>, <a>DetachGroupPolicy</a>, or <a>DetachRolePolicy</a> API operations. To list all the users, groups, and roles that a policy is attached to, use <a>ListEntitiesForPolicy</a>.</p> </li> <li> <p>Delete all versions of the policy using <a>DeletePolicyVersion</a>. To list the policy's versions, use <a>ListPolicyVersions</a>. You cannot use <a>DeletePolicyVersion</a> to delete the version that is marked as the default version. You delete the policy's default version in the next step of the process.</p> </li> <li> <p>Delete the policy (this automatically deletes the policy's default version) using this API.</p> </li> </ul> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicy(args: DeletePolicyInput): Promise<DeletePolicyOutput>;
  public deletePolicy(
    args: DeletePolicyInput,
    cb: (err: any, data?: DeletePolicyOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyInput,
    cb?: (err: any, data?: DeletePolicyOutput) => void
  ): Promise<DeletePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified version from the specified managed policy.</p> <p>You cannot delete the default version from a policy using this API. To delete the default version from a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default version, use <a>ListPolicyVersions</a>.</p> <p>For information about versions for managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicyVersion(
    args: DeletePolicyVersionInput
  ): Promise<DeletePolicyVersionOutput>;
  public deletePolicyVersion(
    args: DeletePolicyVersionInput,
    cb: (err: any, data?: DeletePolicyVersionOutput) => void
  ): void;
  public deletePolicyVersion(
    args: DeletePolicyVersionInput,
    cb?: (err: any, data?: DeletePolicyVersionOutput) => void
  ): Promise<DeletePolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified role. The role must not have any policies attached. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to delete. Deleting a role or instance profile that is associated with a running instance will break any applications running on the instance.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRole(args: DeleteRoleInput): Promise<DeleteRoleOutput>;
  public deleteRole(
    args: DeleteRoleInput,
    cb: (err: any, data?: DeleteRoleOutput) => void
  ): void;
  public deleteRole(
    args: DeleteRoleInput,
    cb?: (err: any, data?: DeleteRoleOutput) => void
  ): Promise<DeleteRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the permissions boundary for the specified IAM role. </p> <important> <p>Deleting the permissions boundary for a role might increase its permissions. For example, it might allow anyone who assumes the role to perform all the actions granted in its permissions policies. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryInput
  ): Promise<DeleteRolePermissionsBoundaryOutput>;
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryInput,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryOutput) => void
  ): void;
  public deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryInput,
    cb?: (err: any, data?: DeleteRolePermissionsBoundaryOutput) => void
  ): Promise<DeleteRolePermissionsBoundaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRolePermissionsBoundaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified inline policy that is embedded in the specified IAM role.</p> <p>A role can also have managed policies attached to it. To detach a managed policy from a role, use <a>DetachRolePolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRolePolicy(
    args: DeleteRolePolicyInput
  ): Promise<DeleteRolePolicyOutput>;
  public deleteRolePolicy(
    args: DeleteRolePolicyInput,
    cb: (err: any, data?: DeleteRolePolicyOutput) => void
  ): void;
  public deleteRolePolicy(
    args: DeleteRolePolicyInput,
    cb?: (err: any, data?: DeleteRolePolicyOutput) => void
  ): Promise<DeleteRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a SAML provider resource in IAM.</p> <p>Deleting the provider resource from IAM does not update any roles that reference the SAML provider resource's ARN as a principal in their trust policies. Any attempt to assume a role that references a non-existent provider resource ARN fails.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSAMLProvider(
    args: DeleteSAMLProviderInput
  ): Promise<DeleteSAMLProviderOutput>;
  public deleteSAMLProvider(
    args: DeleteSAMLProviderInput,
    cb: (err: any, data?: DeleteSAMLProviderOutput) => void
  ): void;
  public deleteSAMLProvider(
    args: DeleteSAMLProviderInput,
    cb?: (err: any, data?: DeleteSAMLProviderOutput) => void
  ): Promise<DeleteSAMLProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSAMLProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified SSH public key.</p> <p>The SSH public key deleted by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyInput
  ): Promise<DeleteSSHPublicKeyOutput>;
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyInput,
    cb: (err: any, data?: DeleteSSHPublicKeyOutput) => void
  ): void;
  public deleteSSHPublicKey(
    args: DeleteSSHPublicKeyInput,
    cb?: (err: any, data?: DeleteSSHPublicKeyOutput) => void
  ): Promise<DeleteSSHPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSSHPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified server certificate.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <important> <p> If you are using a server certificate with Elastic Load Balancing, deleting the certificate could have implications for your application. If Elastic Load Balancing doesn't detect the deletion of bound certificates, it may continue to use the certificates. This could cause Elastic Load Balancing to stop accepting traffic. We recommend that you remove the reference to the certificate from Elastic Load Balancing before using this command to delete the certificate. For more information, go to <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/APIReference/API_DeleteLoadBalancerListeners.html">DeleteLoadBalancerListeners</a> in the <i>Elastic Load Balancing API Reference</i>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServerCertificate(
    args: DeleteServerCertificateInput
  ): Promise<DeleteServerCertificateOutput>;
  public deleteServerCertificate(
    args: DeleteServerCertificateInput,
    cb: (err: any, data?: DeleteServerCertificateOutput) => void
  ): void;
  public deleteServerCertificate(
    args: DeleteServerCertificateInput,
    cb?: (err: any, data?: DeleteServerCertificateOutput) => void
  ): Promise<DeleteServerCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServerCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Submits a service-linked role deletion request and returns a <code>DeletionTaskId</code>, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the <code>DeletionTaskId</code> of the earlier request is returned.</p> <p>If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the <a>GetServiceLinkedRoleDeletionStatus</a> API operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the <a href="http://docs.aws.amazon.com/">AWS documentation</a> for your service.</p> <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles Terms and Concepts: AWS Service-Linked Role</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleInput
  ): Promise<DeleteServiceLinkedRoleOutput>;
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleInput,
    cb: (err: any, data?: DeleteServiceLinkedRoleOutput) => void
  ): void;
  public deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleInput,
    cb?: (err: any, data?: DeleteServiceLinkedRoleOutput) => void
  ): Promise<DeleteServiceLinkedRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServiceLinkedRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified service-specific credential.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialInput
  ): Promise<DeleteServiceSpecificCredentialOutput>;
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialInput,
    cb: (err: any, data?: DeleteServiceSpecificCredentialOutput) => void
  ): void;
  public deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialInput,
    cb?: (err: any, data?: DeleteServiceSpecificCredentialOutput) => void
  ): Promise<DeleteServiceSpecificCredentialOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServiceSpecificCredentialCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a signing certificate associated with the specified IAM user.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated IAM users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSigningCertificate(
    args: DeleteSigningCertificateInput
  ): Promise<DeleteSigningCertificateOutput>;
  public deleteSigningCertificate(
    args: DeleteSigningCertificateInput,
    cb: (err: any, data?: DeleteSigningCertificateOutput) => void
  ): void;
  public deleteSigningCertificate(
    args: DeleteSigningCertificateInput,
    cb?: (err: any, data?: DeleteSigningCertificateOutput) => void
  ): Promise<DeleteSigningCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSigningCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified IAM user. Unlike the AWS Management Console, when you delete a user programmatically, you must delete the items attached to the user manually, or the deletion fails. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_deleting_cli">Deleting an IAM User</a>. Before attempting to delete a user, remove the following items:</p> <ul> <li> <p>Password (<a>DeleteLoginProfile</a>)</p> </li> <li> <p>Access keys (<a>DeleteAccessKey</a>)</p> </li> <li> <p>Signing certificate (<a>DeleteSigningCertificate</a>)</p> </li> <li> <p>SSH public key (<a>DeleteSSHPublicKey</a>)</p> </li> <li> <p>Git credentials (<a>DeleteServiceSpecificCredential</a>)</p> </li> <li> <p>Multi-factor authentication (MFA) device (<a>DeactivateMFADevice</a>, <a>DeleteVirtualMFADevice</a>)</p> </li> <li> <p>Inline policies (<a>DeleteUserPolicy</a>)</p> </li> <li> <p>Attached managed policies (<a>DetachUserPolicy</a>)</p> </li> <li> <p>Group memberships (<a>RemoveUserFromGroup</a>)</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUser(args: DeleteUserInput): Promise<DeleteUserOutput>;
  public deleteUser(
    args: DeleteUserInput,
    cb: (err: any, data?: DeleteUserOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserInput,
    cb?: (err: any, data?: DeleteUserOutput) => void
  ): Promise<DeleteUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the permissions boundary for the specified IAM user.</p> <important> <p>Deleting the permissions boundary for a user might increase its permissions by allowing the user to perform all the actions granted in its permissions policies. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryInput
  ): Promise<DeleteUserPermissionsBoundaryOutput>;
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryInput,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryOutput) => void
  ): void;
  public deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryInput,
    cb?: (err: any, data?: DeleteUserPermissionsBoundaryOutput) => void
  ): Promise<DeleteUserPermissionsBoundaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserPermissionsBoundaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified inline policy that is embedded in the specified IAM user.</p> <p>A user can also have managed policies attached to it. To detach a managed policy from a user, use <a>DetachUserPolicy</a>. For more information about policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUserPolicy(
    args: DeleteUserPolicyInput
  ): Promise<DeleteUserPolicyOutput>;
  public deleteUserPolicy(
    args: DeleteUserPolicyInput,
    cb: (err: any, data?: DeleteUserPolicyOutput) => void
  ): void;
  public deleteUserPolicy(
    args: DeleteUserPolicyInput,
    cb?: (err: any, data?: DeleteUserPolicyOutput) => void
  ): Promise<DeleteUserPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUserPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a virtual MFA device.</p> <note> <p> You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {DeleteConflictException} <p>The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceInput
  ): Promise<DeleteVirtualMFADeviceOutput>;
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceInput,
    cb: (err: any, data?: DeleteVirtualMFADeviceOutput) => void
  ): void;
  public deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceInput,
    cb?: (err: any, data?: DeleteVirtualMFADeviceOutput) => void
  ): Promise<DeleteVirtualMFADeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVirtualMFADeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified managed policy from the specified IAM group.</p> <p>A group can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteGroupPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachGroupPolicy(
    args: DetachGroupPolicyInput
  ): Promise<DetachGroupPolicyOutput>;
  public detachGroupPolicy(
    args: DetachGroupPolicyInput,
    cb: (err: any, data?: DetachGroupPolicyOutput) => void
  ): void;
  public detachGroupPolicy(
    args: DetachGroupPolicyInput,
    cb?: (err: any, data?: DetachGroupPolicyOutput) => void
  ): Promise<DetachGroupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachGroupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified managed policy from the specified role.</p> <p>A role can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteRolePolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachRolePolicy(
    args: DetachRolePolicyInput
  ): Promise<DetachRolePolicyOutput>;
  public detachRolePolicy(
    args: DetachRolePolicyInput,
    cb: (err: any, data?: DetachRolePolicyOutput) => void
  ): void;
  public detachRolePolicy(
    args: DetachRolePolicyInput,
    cb?: (err: any, data?: DetachRolePolicyOutput) => void
  ): Promise<DetachRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified managed policy from the specified user.</p> <p>A user can also have inline policies embedded with it. To delete an inline policy, use the <a>DeleteUserPolicy</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachUserPolicy(
    args: DetachUserPolicyInput
  ): Promise<DetachUserPolicyOutput>;
  public detachUserPolicy(
    args: DetachUserPolicyInput,
    cb: (err: any, data?: DetachUserPolicyOutput) => void
  ): void;
  public detachUserPolicy(
    args: DetachUserPolicyInput,
    cb?: (err: any, data?: DetachUserPolicyOutput) => void
  ): Promise<DetachUserPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachUserPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the specified MFA device and associates it with the specified IAM user. When enabled, the MFA device is required for every subsequent login by the IAM user associated with the device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {InvalidAuthenticationCodeException} <p>The request was rejected because the authentication code was not recognized. The error message describes the specific error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableMFADevice(
    args: EnableMFADeviceInput
  ): Promise<EnableMFADeviceOutput>;
  public enableMFADevice(
    args: EnableMFADeviceInput,
    cb: (err: any, data?: EnableMFADeviceOutput) => void
  ): void;
  public enableMFADevice(
    args: EnableMFADeviceInput,
    cb?: (err: any, data?: EnableMFADeviceOutput) => void
  ): Promise<EnableMFADeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableMFADeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Generates a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateCredentialReport(
    args: GenerateCredentialReportInput
  ): Promise<GenerateCredentialReportOutput>;
  public generateCredentialReport(
    args: GenerateCredentialReportInput,
    cb: (err: any, data?: GenerateCredentialReportOutput) => void
  ): void;
  public generateCredentialReport(
    args: GenerateCredentialReportInput,
    cb?: (err: any, data?: GenerateCredentialReportOutput) => void
  ): Promise<GenerateCredentialReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateCredentialReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a report for service last accessed data for AWS Organizations. You can generate a report for any entities (organization root, organizational unit, or account) or policies in your organization.</p> <p>To call this operation, you must be signed in using your AWS Organizations master account credentials. You can use your long-term IAM user or root user credentials, or temporary credentials from assuming an IAM role. SCPs must be enabled for your organization root. You must have the required IAM and AWS Organizations permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <p>You can generate a service last accessed data report for entities by specifying only the entity's path. This data includes a list of services that are allowed by any service control policies (SCPs) that apply to the entity.</p> <p>You can generate a service last accessed data report for a policy by specifying an entity's path and an optional AWS Organizations policy ID. This data includes a list of services that are allowed by the specified SCP.</p> <p>For each service in both report types, the data includes the most recent account activity that the policy allows to account principals in the entity or the entity's children. For important information about the data, reporting period, permissions required, troubleshooting, and supported Regions see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <important> <p>The data includes all attempts to access AWS, not just the successful ones. This includes all attempts that were made using the AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that an account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>This operation returns a <code>JobId</code>. Use this parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation to check the status of the report generation. To check the status of this request, use the <code>JobId</code> parameter in the <code> <a>GetOrganizationsAccessReport</a> </code> operation and test the <code>JobStatus</code> response parameter. When the job is complete, you can retrieve the report.</p> <p>To generate a service last accessed data report for entities, specify an entity path without specifying the optional AWS Organizations policy ID. The type of entity that you specify determines the data returned in the report.</p> <ul> <li> <p> <b>Root</b> – When you specify the organizations root as the entity, the resulting report lists all of the services allowed by SCPs that are attached to your root. For each service, the report includes data for all accounts in your organization except the master account, because the master account is not limited by SCPs.</p> </li> <li> <p> <b>OU</b> – When you specify an organizational unit (OU) as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the OU and its parents. For each service, the report includes data for all accounts in the OU or its children. This data excludes the master account, because the master account is not limited by SCPs.</p> </li> <li> <p> <b>Master account</b> – When you specify the master account, the resulting report lists all AWS services, because the master account is not limited by SCPs. For each service, the report includes data for only the master account.</p> </li> <li> <p> <b>Account</b> – When you specify another account as the entity, the resulting report lists all of the services allowed by SCPs that are attached to the account and its parents. For each service, the report includes data for only the specified account.</p> </li> </ul> <p>To generate a service last accessed data report for policies, specify an entity path and the optional AWS Organizations policy ID. The type of entity that you specify determines the data returned for each service.</p> <ul> <li> <p> <b>Root</b> – When you specify the root entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in your organization to which the SCP applies. This data excludes the master account, because the master account is not limited by SCPs. If the SCP is not attached to any entities in the organization, then the report will return a list of services with no data.</p> </li> <li> <p> <b>OU</b> – When you specify an OU entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for all accounts in the OU or its children to which the SCP applies. This means that other accounts outside the OU that are affected by the SCP might not be included in the data. This data excludes the master account, because the master account is not limited by SCPs. If the SCP is not attached to the OU or one of its children, the report will return a list of services with no data.</p> </li> <li> <p> <b>Master account</b> – When you specify the master account, the resulting report lists all AWS services, because the master account is not limited by SCPs. If you specify a policy ID in the CLI or API, the policy is ignored. For each service, the report includes data for only the master account.</p> </li> <li> <p> <b>Account</b> – When you specify another account entity and a policy ID, the resulting report lists all of the services that are allowed by the specified SCP. For each service, the report includes data for only the specified account. This means that other accounts in the organization that are affected by the SCP might not be included in the data. If the SCP is not attached to the account, the report will return a list of services with no data.</p> </li> </ul> <note> <p>Service last accessed data does not use other policy types when determining whether a principal could access a service. These other policy types include identity-based policies, resource-based policies, access control lists, IAM permissions boundaries, and STS assume role policies. It only applies SCP logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Policy Scope by Viewing User Activity</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ReportGenerationLimitExceededException} <p>The request failed because the maximum number of concurrent requests for this account are already running.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportInput
  ): Promise<GenerateOrganizationsAccessReportOutput>;
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportInput,
    cb: (err: any, data?: GenerateOrganizationsAccessReportOutput) => void
  ): void;
  public generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportInput,
    cb?: (err: any, data?: GenerateOrganizationsAccessReportOutput) => void
  ): Promise<GenerateOrganizationsAccessReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateOrganizationsAccessReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a report that includes details about when an IAM resource (user, group, role, or policy) was last used in an attempt to access AWS services. Recent activity usually appears within four hours. IAM reports activity for the last 365 days, or less if your Region began supporting this feature within the last year. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a>.</p> <important> <p>The service last accessed data includes all attempts to access an AWS API, not just the successful ones. This includes all attempts that were made using the AWS Management Console, the AWS API through any of the SDKs, or any of the command line tools. An unexpected entry in the service last accessed data does not mean that your account has been compromised, because the request might have been denied. Refer to your CloudTrail logs as the authoritative source for information about all API calls and whether they were successful or denied access. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html">Logging IAM Events with CloudTrail</a> in the <i>IAM User Guide</i>.</p> </important> <p>The <code>GenerateServiceLastAccessedDetails</code> operation returns a <code>JobId</code>. Use this parameter in the following operations to retrieve the following details from your report: </p> <ul> <li> <p> <a>GetServiceLastAccessedDetails</a> – Use this operation for users, groups, roles, or policies to list every AWS service that the resource could access using permissions policies. For each service, the response includes information about the most recent access attempt. </p> </li> <li> <p> <a>GetServiceLastAccessedDetailsWithEntities</a> – Use this operation for groups and policies to list information about the associated entities (users or roles) that attempted to access a specific AWS service. </p> </li> </ul> <p>To check the status of the <code>GenerateServiceLastAccessedDetails</code> request, use the <code>JobId</code> parameter in the same operations and test the <code>JobStatus</code> response parameter.</p> <p>For additional information about the permissions policies that allow an identity (user, group, or role) to access specific services, use the <a>ListPoliciesGrantingServiceAccess</a> operation.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For more information about service last accessed data, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Reducing Policy Scope by Viewing User Activity</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsInput
  ): Promise<GenerateServiceLastAccessedDetailsOutput>;
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsInput,
    cb: (err: any, data?: GenerateServiceLastAccessedDetailsOutput) => void
  ): void;
  public generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsInput,
    cb?: (err: any, data?: GenerateServiceLastAccessedDetailsOutput) => void
  ): Promise<GenerateServiceLastAccessedDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateServiceLastAccessedDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the AWS service and Region that were specified in the last request made with that key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedInput
  ): Promise<GetAccessKeyLastUsedOutput>;
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedInput,
    cb: (err: any, data?: GetAccessKeyLastUsedOutput) => void
  ): void;
  public getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedInput,
    cb?: (err: any, data?: GetAccessKeyLastUsedOutput) => void
  ): Promise<GetAccessKeyLastUsedOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccessKeyLastUsedCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS account, including their relationships to one another. Use this API to obtain a snapshot of the configuration of IAM permissions (users, groups, roles, and policies) in your account.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>You can optionally filter the results using the <code>Filter</code> parameter. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsInput
  ): Promise<GetAccountAuthorizationDetailsOutput>;
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsInput,
    cb: (err: any, data?: GetAccountAuthorizationDetailsOutput) => void
  ): void;
  public getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsInput,
    cb?: (err: any, data?: GetAccountAuthorizationDetailsOutput) => void
  ): Promise<GetAccountAuthorizationDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountAuthorizationDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the password policy for the AWS account. For more information about using a password policy, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password Policy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyInput
  ): Promise<GetAccountPasswordPolicyOutput>;
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyInput,
    cb: (err: any, data?: GetAccountPasswordPolicyOutput) => void
  ): void;
  public getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyInput,
    cb?: (err: any, data?: GetAccountPasswordPolicyOutput) => void
  ): Promise<GetAccountPasswordPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountPasswordPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about IAM entity usage and IAM quotas in the AWS account.</p> <p> For information about limitations on IAM entities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountSummary(
    args: GetAccountSummaryInput
  ): Promise<GetAccountSummaryOutput>;
  public getAccountSummary(
    args: GetAccountSummaryInput,
    cb: (err: any, data?: GetAccountSummaryOutput) => void
  ): void;
  public getAccountSummary(
    args: GetAccountSummaryInput,
    cb?: (err: any, data?: GetAccountSummaryOutput) => void
  ): Promise<GetAccountSummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountSummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of all of the context keys referenced in the input policies. The policies are supplied as a list of one or more strings. To get the context keys from policies associated with an IAM user, group, or role, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value specified in an IAM policy. Use <code>GetContextKeysForCustomPolicy</code> to understand what key names and values you must supply when you call <a>SimulateCustomPolicy</a>. Note that all parameters are shown in unencoded form here for clarity but must be URL encoded to be included as a part of a real HTML request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyInput
  ): Promise<GetContextKeysForCustomPolicyOutput>;
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyInput,
    cb: (err: any, data?: GetContextKeysForCustomPolicyOutput) => void
  ): void;
  public getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyInput,
    cb?: (err: any, data?: GetContextKeysForCustomPolicyOutput) => void
  ): Promise<GetContextKeysForCustomPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContextKeysForCustomPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of all of the context keys referenced in all the IAM policies that are attached to the specified IAM entity. The entity can be an IAM user, group, or role. If you specify a user, then the request also includes all of the policies attached to groups that the user is a member of.</p> <p>You can optionally include a list of one or more additional policies, specified as strings. If you want to include <i>only</i> a list of policies by string, use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p> <b>Note:</b> This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. Context keys can be evaluated by testing against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyInput
  ): Promise<GetContextKeysForPrincipalPolicyOutput>;
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyInput,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyOutput) => void
  ): void;
  public getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyInput,
    cb?: (err: any, data?: GetContextKeysForPrincipalPolicyOutput) => void
  ): Promise<GetContextKeysForPrincipalPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetContextKeysForPrincipalPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves a credential report for the AWS account. For more information about the credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {CredentialReportNotPresentException} <p>The request was rejected because the credential report does not exist. To generate a credential report, use <a>GenerateCredentialReport</a>.</p>
   *   - {CredentialReportExpiredException} <p>The request was rejected because the most recent credential report has expired. To generate a new credential report, use <a>GenerateCredentialReport</a>. For more information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the <i>IAM User Guide</i>.</p>
   *   - {CredentialReportNotReadyException} <p>The request was rejected because the credential report is still being generated.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCredentialReport(
    args: GetCredentialReportInput
  ): Promise<GetCredentialReportOutput>;
  public getCredentialReport(
    args: GetCredentialReportInput,
    cb: (err: any, data?: GetCredentialReportOutput) => void
  ): void;
  public getCredentialReport(
    args: GetCredentialReportInput,
    cb?: (err: any, data?: GetCredentialReportOutput) => void
  ): Promise<GetCredentialReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCredentialReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of IAM users that are in the specified IAM group. You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroup(args: GetGroupInput): Promise<GetGroupOutput>;
  public getGroup(
    args: GetGroupInput,
    cb: (err: any, data?: GetGroupOutput) => void
  ): void;
  public getGroup(
    args: GetGroupInput,
    cb?: (err: any, data?: GetGroupOutput) => void
  ): Promise<GetGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified inline policy document that is embedded in the specified IAM group.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM group can also have managed policies attached to it. To retrieve a managed policy document that is attached to a group, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGroupPolicy(
    args: GetGroupPolicyInput
  ): Promise<GetGroupPolicyOutput>;
  public getGroupPolicy(
    args: GetGroupPolicyInput,
    cb: (err: any, data?: GetGroupPolicyOutput) => void
  ): void;
  public getGroupPolicy(
    args: GetGroupPolicyInput,
    cb?: (err: any, data?: GetGroupPolicyOutput) => void
  ): Promise<GetGroupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGroupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Retrieves information about the specified instance profile, including the instance profile's path, GUID, ARN, and role. For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceProfile(
    args: GetInstanceProfileInput
  ): Promise<GetInstanceProfileOutput>;
  public getInstanceProfile(
    args: GetInstanceProfileInput,
    cb: (err: any, data?: GetInstanceProfileOutput) => void
  ): void;
  public getInstanceProfile(
    args: GetInstanceProfileInput,
    cb?: (err: any, data?: GetInstanceProfileOutput) => void
  ): Promise<GetInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the user name and password-creation date for the specified IAM user. If the user has not been assigned a password, the operation returns a 404 (<code>NoSuchEntity</code>) error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoginProfile(
    args: GetLoginProfileInput
  ): Promise<GetLoginProfileOutput>;
  public getLoginProfile(
    args: GetLoginProfileInput,
    cb: (err: any, data?: GetLoginProfileOutput) => void
  ): void;
  public getLoginProfile(
    args: GetLoginProfileInput,
    cb?: (err: any, data?: GetLoginProfileOutput) => void
  ): Promise<GetLoginProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoginProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified OpenID Connect (OIDC) provider resource object in IAM.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderInput
  ): Promise<GetOpenIDConnectProviderOutput>;
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderInput,
    cb: (err: any, data?: GetOpenIDConnectProviderOutput) => void
  ): void;
  public getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderInput,
    cb?: (err: any, data?: GetOpenIDConnectProviderOutput) => void
  ): Promise<GetOpenIDConnectProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOpenIDConnectProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the service last accessed data report for AWS Organizations that was previously generated using the <code> <a>GenerateOrganizationsAccessReport</a> </code> operation. This operation retrieves the status of your report job and the report contents.</p> <p>Depending on the parameters that you passed when you generated the report, the data returned could include different information. For details, see <a>GenerateOrganizationsAccessReport</a>.</p> <p>To call this operation, you must be signed in to the master account in your organization. SCPs must be enabled for your organization root. You must have permissions to perform this operation. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html">Refining Permissions Using Service Last Accessed Data</a> in the <i>IAM User Guide</i>.</p> <p>For each service that principals in an account (root users, IAM users, or IAM roles) could access using SCPs, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, it returns the reason that it failed.</p> <p>By default, the list is sorted by service namespace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportInput
  ): Promise<GetOrganizationsAccessReportOutput>;
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportInput,
    cb: (err: any, data?: GetOrganizationsAccessReportOutput) => void
  ): void;
  public getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportInput,
    cb?: (err: any, data?: GetOrganizationsAccessReportOutput) => void
  ): Promise<GetOrganizationsAccessReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOrganizationsAccessReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the specified managed policy, including the policy's default version and the total number of IAM users, groups, and roles to which the policy is attached. To retrieve the list of the specific users, groups, and roles that the policy is attached to, use the <a>ListEntitiesForPolicy</a> API. This API returns metadata about the policy. To retrieve the actual policy document for a specific version of the policy, use <a>GetPolicyVersion</a>.</p> <p>This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded with an IAM user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPolicy(args: GetPolicyInput): Promise<GetPolicyOutput>;
  public getPolicy(
    args: GetPolicyInput,
    cb: (err: any, data?: GetPolicyOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyInput,
    cb?: (err: any, data?: GetPolicyOutput) => void
  ): Promise<GetPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the specified version of the specified managed policy, including the policy document.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>To list the available versions for a policy, use <a>ListPolicyVersions</a>.</p> <p>This API retrieves information about managed policies. To retrieve information about an inline policy that is embedded in a user, group, or role, use the <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a> API.</p> <p>For more information about the types of policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPolicyVersion(
    args: GetPolicyVersionInput
  ): Promise<GetPolicyVersionOutput>;
  public getPolicyVersion(
    args: GetPolicyVersionInput,
    cb: (err: any, data?: GetPolicyVersionOutput) => void
  ): void;
  public getPolicyVersion(
    args: GetPolicyVersionInput,
    cb?: (err: any, data?: GetPolicyVersionOutput) => void
  ): Promise<GetPolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the specified role, including the role's path, GUID, ARN, and the role's trust policy that grants permission to assume the role. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRole(args: GetRoleInput): Promise<GetRoleOutput>;
  public getRole(
    args: GetRoleInput,
    cb: (err: any, data?: GetRoleOutput) => void
  ): void;
  public getRole(
    args: GetRoleInput,
    cb?: (err: any, data?: GetRoleOutput) => void
  ): Promise<GetRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified inline policy document that is embedded with the specified IAM role.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM role can also have managed policies attached to it. To retrieve a managed policy document that is attached to a role, use <a>GetPolicy</a> to determine the policy's default version, then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRolePolicy(args: GetRolePolicyInput): Promise<GetRolePolicyOutput>;
  public getRolePolicy(
    args: GetRolePolicyInput,
    cb: (err: any, data?: GetRolePolicyOutput) => void
  ): void;
  public getRolePolicy(
    args: GetRolePolicyInput,
    cb?: (err: any, data?: GetRolePolicyOutput) => void
  ): Promise<GetRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the SAML provider metadocument that was uploaded when the IAM SAML provider resource object was created or updated.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSAMLProvider(
    args: GetSAMLProviderInput
  ): Promise<GetSAMLProviderOutput>;
  public getSAMLProvider(
    args: GetSAMLProviderInput,
    cb: (err: any, data?: GetSAMLProviderOutput) => void
  ): void;
  public getSAMLProvider(
    args: GetSAMLProviderInput,
    cb?: (err: any, data?: GetSAMLProviderOutput) => void
  ): Promise<GetSAMLProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSAMLProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified SSH public key, including metadata about the key.</p> <p>The SSH public key retrieved by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {UnrecognizedPublicKeyEncodingException} <p>The request was rejected because the public key encoding format is unsupported or unrecognized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSSHPublicKey(
    args: GetSSHPublicKeyInput
  ): Promise<GetSSHPublicKeyOutput>;
  public getSSHPublicKey(
    args: GetSSHPublicKeyInput,
    cb: (err: any, data?: GetSSHPublicKeyOutput) => void
  ): void;
  public getSSHPublicKey(
    args: GetSSHPublicKeyInput,
    cb?: (err: any, data?: GetSSHPublicKeyOutput) => void
  ): Promise<GetSSHPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSSHPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of AWS services that can use the server certificates that you manage with IAM.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServerCertificate(
    args: GetServerCertificateInput
  ): Promise<GetServerCertificateOutput>;
  public getServerCertificate(
    args: GetServerCertificateInput,
    cb: (err: any, data?: GetServerCertificateOutput) => void
  ): void;
  public getServerCertificate(
    args: GetServerCertificateInput,
    cb?: (err: any, data?: GetServerCertificateOutput) => void
  ): Promise<GetServerCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServerCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a service last accessed report that was created using the <code>GenerateServiceLastAccessedDetails</code> operation. You can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetails</code> to retrieve the status of your report job. When the report is complete, you can retrieve the generated report. The report includes a list of AWS services that the resource (user, group, role, or managed policy) can access.</p> <note> <p>Service last accessed data does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>For each service that the resource could access using permissions policies, the operation returns details about the most recent access attempt. If there was no attempt, the service is listed without details about the most recent attempt to access the service. If the operation fails, the <code>GetServiceLastAccessedDetails</code> operation returns the reason that it failed.</p> <p>The <code>GetServiceLastAccessedDetails</code> operation returns a list of services. This list includes the number of entities that have attempted to access the service and the date and time of the last attempt. It also returns the ARN of the following entity, depending on the resource ARN that you used to generate the report:</p> <ul> <li> <p> <b>User</b> – Returns the user ARN that you used to generate the report</p> </li> <li> <p> <b>Group</b> – Returns the ARN of the group member (user) that last attempted to access the service</p> </li> <li> <p> <b>Role</b> – Returns the role ARN that you used to generate the report</p> </li> <li> <p> <b>Policy</b> – Returns the ARN of the user or role that last used the policy to attempt to access the service</p> </li> </ul> <p>By default, the list is sorted by service namespace.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsInput
  ): Promise<GetServiceLastAccessedDetailsOutput>;
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsOutput) => void
  ): void;
  public getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsInput,
    cb?: (err: any, data?: GetServiceLastAccessedDetailsOutput) => void
  ): Promise<GetServiceLastAccessedDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceLastAccessedDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>After you generate a group or policy report using the <code>GenerateServiceLastAccessedDetails</code> operation, you can use the <code>JobId</code> parameter in <code>GetServiceLastAccessedDetailsWithEntities</code>. This operation retrieves the status of your report job and a list of entities that could have used group or policy permissions to access the specified service.</p> <ul> <li> <p> <b>Group</b> – For a group report, this operation returns a list of users in the group that could have used the group’s policies in an attempt to access the service.</p> </li> <li> <p> <b>Policy</b> – For a policy report, this operation returns a list of entities (users or roles) that could have used the policy in an attempt to access the service.</p> </li> </ul> <p>You can also use this operation for user or role reports to retrieve details about those entities.</p> <p>If the operation fails, the <code>GetServiceLastAccessedDetailsWithEntities</code> operation returns the reason that it failed.</p> <p>By default, the list of associated entities is sorted by date, with the most recent access listed first.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesInput
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesOutput>;
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesInput,
    cb: (
      err: any,
      data?: GetServiceLastAccessedDetailsWithEntitiesOutput
    ) => void
  ): void;
  public getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesInput,
    cb?: (
      err: any,
      data?: GetServiceLastAccessedDetailsWithEntitiesOutput
    ) => void
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the status of your service-linked role deletion. After you use the <a>DeleteServiceLinkedRole</a> API operation to submit a service-linked role for deletion, you can use the <code>DeletionTaskId</code> parameter in <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion. If the deletion fails, this operation returns the reason that it failed, if that information is returned by the service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusInput
  ): Promise<GetServiceLinkedRoleDeletionStatusOutput>;
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusInput,
    cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusOutput) => void
  ): void;
  public getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusInput,
    cb?: (err: any, data?: GetServiceLinkedRoleDeletionStatusOutput) => void
  ): Promise<GetServiceLinkedRoleDeletionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceLinkedRoleDeletionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves information about the specified IAM user, including the user's creation date, path, unique ID, and ARN.</p> <p>If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID used to sign the request to this API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUser(args: GetUserInput): Promise<GetUserOutput>;
  public getUser(
    args: GetUserInput,
    cb: (err: any, data?: GetUserOutput) => void
  ): void;
  public getUser(
    args: GetUserInput,
    cb?: (err: any, data?: GetUserOutput) => void
  ): Promise<GetUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the specified inline policy document that is embedded in the specified IAM user.</p> <note> <p>Policies returned by this API are URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding method to convert the policy back to plain JSON text. For example, if you use Java, you can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in the Java SDK. Other languages and SDKs provide similar functionality.</p> </note> <p>An IAM user can also have managed policies attached to it. To retrieve a managed policy document that is attached to a user, use <a>GetPolicy</a> to determine the policy's default version. Then use <a>GetPolicyVersion</a> to retrieve the policy document.</p> <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUserPolicy(args: GetUserPolicyInput): Promise<GetUserPolicyOutput>;
  public getUserPolicy(
    args: GetUserPolicyInput,
    cb: (err: any, data?: GetUserPolicyOutput) => void
  ): void;
  public getUserPolicy(
    args: GetUserPolicyInput,
    cb?: (err: any, data?: GetUserPolicyOutput) => void
  ): Promise<GetUserPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUserPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the access key IDs associated with the specified IAM user. If there is none, the operation returns an empty list.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <note> <p>To ensure the security of your AWS account, the secret access key is accessible only during key and user creation.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAccessKeys(
    args: ListAccessKeysInput
  ): Promise<ListAccessKeysOutput>;
  public listAccessKeys(
    args: ListAccessKeysInput,
    cb: (err: any, data?: ListAccessKeysOutput) => void
  ): void;
  public listAccessKeys(
    args: ListAccessKeysInput,
    cb?: (err: any, data?: ListAccessKeysOutput) => void
  ): Promise<ListAccessKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAccessKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the account alias associated with the AWS account (Note: you can have only one). For information about using an AWS account alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an Alias for Your AWS Account ID</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAccountAliases(
    args: ListAccountAliasesInput
  ): Promise<ListAccountAliasesOutput>;
  public listAccountAliases(
    args: ListAccountAliasesInput,
    cb: (err: any, data?: ListAccountAliasesOutput) => void
  ): void;
  public listAccountAliases(
    args: ListAccountAliasesInput,
    cb?: (err: any, data?: ListAccountAliasesOutput) => void
  ): Promise<ListAccountAliasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAccountAliasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all managed policies that are attached to the specified IAM group.</p> <p>An IAM group can also have inline policies embedded with it. To list the inline policies for a group, use the <a>ListGroupPolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesInput
  ): Promise<ListAttachedGroupPoliciesOutput>;
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesInput,
    cb: (err: any, data?: ListAttachedGroupPoliciesOutput) => void
  ): void;
  public listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesInput,
    cb?: (err: any, data?: ListAttachedGroupPoliciesOutput) => void
  ): Promise<ListAttachedGroupPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttachedGroupPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all managed policies that are attached to the specified IAM role.</p> <p>An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use the <a>ListRolePolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesInput
  ): Promise<ListAttachedRolePoliciesOutput>;
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesInput,
    cb: (err: any, data?: ListAttachedRolePoliciesOutput) => void
  ): void;
  public listAttachedRolePolicies(
    args: ListAttachedRolePoliciesInput,
    cb?: (err: any, data?: ListAttachedRolePoliciesOutput) => void
  ): Promise<ListAttachedRolePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttachedRolePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all managed policies that are attached to the specified IAM user.</p> <p>An IAM user can also have inline policies embedded with it. To list the inline policies for a user, use the <a>ListUserPolicies</a> API. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. You can use the <code>PathPrefix</code> parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified group (or none that match the specified path prefix), the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesInput
  ): Promise<ListAttachedUserPoliciesOutput>;
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesInput,
    cb: (err: any, data?: ListAttachedUserPoliciesOutput) => void
  ): void;
  public listAttachedUserPolicies(
    args: ListAttachedUserPoliciesInput,
    cb?: (err: any, data?: ListAttachedUserPoliciesOutput) => void
  ): Promise<ListAttachedUserPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttachedUserPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached to.</p> <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a particular type of entity (users, groups, or roles). For example, to list only the roles that are attached to the specified policy, set <code>EntityFilter</code> to <code>Role</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyInput
  ): Promise<ListEntitiesForPolicyOutput>;
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyInput,
    cb: (err: any, data?: ListEntitiesForPolicyOutput) => void
  ): void;
  public listEntitiesForPolicy(
    args: ListEntitiesForPolicyInput,
    cb?: (err: any, data?: ListEntitiesForPolicyOutput) => void
  ): Promise<ListEntitiesForPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEntitiesForPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the names of the inline policies that are embedded in the specified IAM group.</p> <p>An IAM group can also have managed policies attached to it. To list the managed policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified group, the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupPolicies(
    args: ListGroupPoliciesInput
  ): Promise<ListGroupPoliciesOutput>;
  public listGroupPolicies(
    args: ListGroupPoliciesInput,
    cb: (err: any, data?: ListGroupPoliciesOutput) => void
  ): void;
  public listGroupPolicies(
    args: ListGroupPoliciesInput,
    cb?: (err: any, data?: ListGroupPoliciesOutput) => void
  ): Promise<ListGroupPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IAM groups that have the specified path prefix.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroups(args: ListGroupsInput): Promise<ListGroupsOutput>;
  public listGroups(
    args: ListGroupsInput,
    cb: (err: any, data?: ListGroupsOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsInput,
    cb?: (err: any, data?: ListGroupsOutput) => void
  ): Promise<ListGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IAM groups that the specified IAM user belongs to.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGroupsForUser(
    args: ListGroupsForUserInput
  ): Promise<ListGroupsForUserOutput>;
  public listGroupsForUser(
    args: ListGroupsForUserInput,
    cb: (err: any, data?: ListGroupsForUserOutput) => void
  ): void;
  public listGroupsForUser(
    args: ListGroupsForUserInput,
    cb?: (err: any, data?: ListGroupsForUserOutput) => void
  ): Promise<ListGroupsForUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGroupsForUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the instance profiles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstanceProfiles(
    args: ListInstanceProfilesInput
  ): Promise<ListInstanceProfilesOutput>;
  public listInstanceProfiles(
    args: ListInstanceProfilesInput,
    cb: (err: any, data?: ListInstanceProfilesOutput) => void
  ): void;
  public listInstanceProfiles(
    args: ListInstanceProfilesInput,
    cb?: (err: any, data?: ListInstanceProfilesOutput) => void
  ): Promise<ListInstanceProfilesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstanceProfilesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the instance profiles that have the specified associated IAM role. If there are none, the operation returns an empty list. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleInput
  ): Promise<ListInstanceProfilesForRoleOutput>;
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleInput,
    cb: (err: any, data?: ListInstanceProfilesForRoleOutput) => void
  ): void;
  public listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleInput,
    cb?: (err: any, data?: ListInstanceProfilesForRoleOutput) => void
  ): Promise<ListInstanceProfilesForRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListInstanceProfilesForRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the MFA devices for an IAM user. If the request includes a IAM user name, then this operation lists all the MFA devices associated with the specified user. If you do not specify a user name, IAM determines the user name implicitly based on the AWS access key ID signing the request for this API.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMFADevices(
    args: ListMFADevicesInput
  ): Promise<ListMFADevicesOutput>;
  public listMFADevices(
    args: ListMFADevicesInput,
    cb: (err: any, data?: ListMFADevicesOutput) => void
  ): void;
  public listMFADevices(
    args: ListMFADevicesInput,
    cb?: (err: any, data?: ListMFADevicesOutput) => void
  ): Promise<ListMFADevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMFADevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects defined in the AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersInput
  ): Promise<ListOpenIDConnectProvidersOutput>;
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersInput,
    cb: (err: any, data?: ListOpenIDConnectProvidersOutput) => void
  ): void;
  public listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersInput,
    cb?: (err: any, data?: ListOpenIDConnectProvidersOutput) => void
  ): Promise<ListOpenIDConnectProvidersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOpenIDConnectProvidersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the managed policies that are available in your AWS account, including your own customer-defined managed policies and all AWS managed policies.</p> <p>You can filter the list of policies that is returned using the optional <code>OnlyAttached</code>, <code>Scope</code>, and <code>PathPrefix</code> parameters. For example, to list only the customer managed policies in your AWS account, set <code>Scope</code> to <code>Local</code>. To list only AWS managed policies, set <code>Scope</code> to <code>AWS</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicies(args: ListPoliciesInput): Promise<ListPoliciesOutput>;
  public listPolicies(
    args: ListPoliciesInput,
    cb: (err: any, data?: ListPoliciesOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesInput,
    cb?: (err: any, data?: ListPoliciesOutput) => void
  ): Promise<ListPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.</p> <note> <p>This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, AWS Organizations policies, IAM permissions boundaries, and AWS STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating Policies</a> in the <i>IAM User Guide</i>.</p> </note> <p>The list of policies returned by the operation depends on the ARN of the identity that you provide.</p> <ul> <li> <p> <b>User</b> – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs. </p> </li> <li> <p> <b>Group</b> – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.</p> </li> <li> <p> <b>Role</b> – The list of policies includes only the managed and inline policies that are attached to the role.</p> </li> </ul> <p>For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the <a>GetUser</a> or <a>GetRole</a> operations.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessInput
  ): Promise<ListPoliciesGrantingServiceAccessOutput>;
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessInput,
    cb: (err: any, data?: ListPoliciesGrantingServiceAccessOutput) => void
  ): void;
  public listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessInput,
    cb?: (err: any, data?: ListPoliciesGrantingServiceAccessOutput) => void
  ): Promise<ListPoliciesGrantingServiceAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPoliciesGrantingServiceAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about the versions of the specified managed policy, including the version that is currently set as the policy's default version.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicyVersions(
    args: ListPolicyVersionsInput
  ): Promise<ListPolicyVersionsOutput>;
  public listPolicyVersions(
    args: ListPolicyVersionsInput,
    cb: (err: any, data?: ListPolicyVersionsOutput) => void
  ): void;
  public listPolicyVersions(
    args: ListPolicyVersionsInput,
    cb?: (err: any, data?: ListPolicyVersionsOutput) => void
  ): Promise<ListPolicyVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPolicyVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the names of the inline policies that are embedded in the specified IAM role.</p> <p>An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use <a>ListAttachedRolePolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRolePolicies(
    args: ListRolePoliciesInput
  ): Promise<ListRolePoliciesOutput>;
  public listRolePolicies(
    args: ListRolePoliciesInput,
    cb: (err: any, data?: ListRolePoliciesOutput) => void
  ): void;
  public listRolePolicies(
    args: ListRolePoliciesInput,
    cb?: (err: any, data?: ListRolePoliciesOutput) => void
  ): Promise<ListRolePoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRolePoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that are attached to the specified role. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRoleTags(args: ListRoleTagsInput): Promise<ListRoleTagsOutput>;
  public listRoleTags(
    args: ListRoleTagsInput,
    cb: (err: any, data?: ListRoleTagsOutput) => void
  ): void;
  public listRoleTags(
    args: ListRoleTagsInput,
    cb?: (err: any, data?: ListRoleTagsOutput) => void
  ): Promise<ListRoleTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRoleTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IAM roles that have the specified path prefix. If there are none, the operation returns an empty list. For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRoles(args: ListRolesInput): Promise<ListRolesOutput>;
  public listRoles(
    args: ListRolesInput,
    cb: (err: any, data?: ListRolesOutput) => void
  ): void;
  public listRoles(
    args: ListRolesInput,
    cb?: (err: any, data?: ListRolesOutput) => void
  ): Promise<ListRolesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRolesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the SAML provider resource objects defined in IAM in the account.</p> <note> <p> This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSAMLProviders(
    args: ListSAMLProvidersInput
  ): Promise<ListSAMLProvidersOutput>;
  public listSAMLProviders(
    args: ListSAMLProvidersInput,
    cb: (err: any, data?: ListSAMLProvidersOutput) => void
  ): void;
  public listSAMLProviders(
    args: ListSAMLProvidersInput,
    cb?: (err: any, data?: ListSAMLProvidersOutput) => void
  ): Promise<ListSAMLProvidersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSAMLProvidersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the SSH public keys associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>The SSH public keys returned by this operation are used only for authenticating the IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p> <p>Although each user is limited to a small number of keys, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSSHPublicKeys(
    args: ListSSHPublicKeysInput
  ): Promise<ListSSHPublicKeysOutput>;
  public listSSHPublicKeys(
    args: ListSSHPublicKeysInput,
    cb: (err: any, data?: ListSSHPublicKeysOutput) => void
  ): void;
  public listSSHPublicKeys(
    args: ListSSHPublicKeysInput,
    cb?: (err: any, data?: ListSSHPublicKeysOutput) => void
  ): Promise<ListSSHPublicKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSSHPublicKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.</p> <p> You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServerCertificates(
    args: ListServerCertificatesInput
  ): Promise<ListServerCertificatesOutput>;
  public listServerCertificates(
    args: ListServerCertificatesInput,
    cb: (err: any, data?: ListServerCertificatesOutput) => void
  ): void;
  public listServerCertificates(
    args: ListServerCertificatesInput,
    cb?: (err: any, data?: ListServerCertificatesOutput) => void
  ): Promise<ListServerCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServerCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the service-specific credentials associated with the specified IAM user. If none exists, the operation returns an empty list. The service-specific credentials returned by this operation are used only for authenticating the IAM user to a specific service. For more information about using service-specific credentials to authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set Up service-specific credentials</a> in the AWS CodeCommit User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceNotSupportedException} <p>The specified service does not support service-specific credentials.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsInput
  ): Promise<ListServiceSpecificCredentialsOutput>;
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsInput,
    cb: (err: any, data?: ListServiceSpecificCredentialsOutput) => void
  ): void;
  public listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsInput,
    cb?: (err: any, data?: ListServiceSpecificCredentialsOutput) => void
  ): Promise<ListServiceSpecificCredentialsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServiceSpecificCredentialsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the signing certificates associated with the specified IAM user. If none exists, the operation returns an empty list.</p> <p>Although each user is limited to a small number of signing certificates, you can still paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request for this API. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listSigningCertificates(
    args: ListSigningCertificatesInput
  ): Promise<ListSigningCertificatesOutput>;
  public listSigningCertificates(
    args: ListSigningCertificatesInput,
    cb: (err: any, data?: ListSigningCertificatesOutput) => void
  ): void;
  public listSigningCertificates(
    args: ListSigningCertificatesInput,
    cb?: (err: any, data?: ListSigningCertificatesOutput) => void
  ): Promise<ListSigningCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListSigningCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the names of the inline policies embedded in the specified IAM user.</p> <p>An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use <a>ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserPolicies(
    args: ListUserPoliciesInput
  ): Promise<ListUserPoliciesOutput>;
  public listUserPolicies(
    args: ListUserPoliciesInput,
    cb: (err: any, data?: ListUserPoliciesOutput) => void
  ): void;
  public listUserPolicies(
    args: ListUserPoliciesInput,
    cb?: (err: any, data?: ListUserPoliciesOutput) => void
  ): Promise<ListUserPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags that are attached to the specified user. The returned list of tags is sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUserTags(args: ListUserTagsInput): Promise<ListUserTagsOutput>;
  public listUserTags(
    args: ListUserTagsInput,
    cb: (err: any, data?: ListUserTagsOutput) => void
  ): void;
  public listUserTags(
    args: ListUserTagsInput,
    cb?: (err: any, data?: ListUserTagsOutput) => void
  ): Promise<ListUserTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUserTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the IAM users that have the specified path prefix. If no path prefix is specified, the operation returns all users in the AWS account. If there are none, the operation returns an empty list.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listUsers(args: ListUsersInput): Promise<ListUsersOutput>;
  public listUsers(
    args: ListUsersInput,
    cb: (err: any, data?: ListUsersOutput) => void
  ): void;
  public listUsers(
    args: ListUsersInput,
    cb?: (err: any, data?: ListUsersOutput) => void
  ): Promise<ListUsersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListUsersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the virtual MFA devices defined in the AWS account by assignment status. If you do not specify an assignment status, the operation returns a list of all virtual MFA devices. Assignment status can be <code>Assigned</code>, <code>Unassigned</code>, or <code>Any</code>.</p> <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesInput
  ): Promise<ListVirtualMFADevicesOutput>;
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesInput,
    cb: (err: any, data?: ListVirtualMFADevicesOutput) => void
  ): void;
  public listVirtualMFADevices(
    args: ListVirtualMFADevicesInput,
    cb?: (err: any, data?: ListVirtualMFADevicesOutput) => void
  ): Promise<ListVirtualMFADevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListVirtualMFADevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM group.</p> <p>A user can also have managed policies attached to it. To attach a managed policy to a group, use <a>AttachGroupPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed in a group, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutGroupPolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putGroupPolicy(
    args: PutGroupPolicyInput
  ): Promise<PutGroupPolicyOutput>;
  public putGroupPolicy(
    args: PutGroupPolicyInput,
    cb: (err: any, data?: PutGroupPolicyOutput) => void
  ): void;
  public putGroupPolicy(
    args: PutGroupPolicyInput,
    cb?: (err: any, data?: PutGroupPolicyOutput) => void
  ): Promise<PutGroupPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutGroupPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an AWS managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.</p> <p>You cannot set the boundary for a service-linked role. </p> <important> <p>Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy Evaluation Logic</a> in the IAM User Guide. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {PolicyNotAttachableException} <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryInput
  ): Promise<PutRolePermissionsBoundaryOutput>;
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryInput,
    cb: (err: any, data?: PutRolePermissionsBoundaryOutput) => void
  ): void;
  public putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryInput,
    cb?: (err: any, data?: PutRolePermissionsBoundaryOutput) => void
  ): Promise<PutRolePermissionsBoundaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRolePermissionsBoundaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM role.</p> <p>When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role, using <a>CreateRole</a>. You can update a role's trust policy using <a>UpdateAssumeRolePolicy</a>. For more information about IAM roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.</p> <p>A role can also have a managed policy attached to it. To attach a managed policy to a role, use <a>AttachRolePolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed with a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutRolePolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRolePolicy(args: PutRolePolicyInput): Promise<PutRolePolicyOutput>;
  public putRolePolicy(
    args: PutRolePolicyInput,
    cb: (err: any, data?: PutRolePolicyOutput) => void
  ): void;
  public putRolePolicy(
    args: PutRolePolicyInput,
    cb?: (err: any, data?: PutRolePolicyOutput) => void
  ): Promise<PutRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary. You can use an AWS managed policy or a customer managed policy to set the boundary for a user. Use the boundary to control the maximum permissions that the user can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the user.</p> <important> <p>Policies that are used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the user. To learn how the effective permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON Policy Evaluation Logic</a> in the IAM User Guide. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PolicyNotAttachableException} <p>The request failed because AWS service role policies can only be attached to the service-linked role for that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryInput
  ): Promise<PutUserPermissionsBoundaryOutput>;
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryInput,
    cb: (err: any, data?: PutUserPermissionsBoundaryOutput) => void
  ): void;
  public putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryInput,
    cb?: (err: any, data?: PutUserPermissionsBoundaryOutput) => void
  ): Promise<PutUserPermissionsBoundaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutUserPermissionsBoundaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates an inline policy document that is embedded in the specified IAM user.</p> <p>An IAM user can also have a managed policy attached to it. To attach a managed policy to a user, use <a>AttachUserPolicy</a>. To create a new managed policy, use <a>CreatePolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p> <p>For information about limits on the number of inline policies that you can embed in a user, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html">Limitations on IAM Entities</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because policy documents can be large, you should use POST rather than GET when calling <code>PutUserPolicy</code>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putUserPolicy(args: PutUserPolicyInput): Promise<PutUserPolicyOutput>;
  public putUserPolicy(
    args: PutUserPolicyInput,
    cb: (err: any, data?: PutUserPolicyOutput) => void
  ): void;
  public putUserPolicy(
    args: PutUserPolicyInput,
    cb?: (err: any, data?: PutUserPolicyOutput) => void
  ): Promise<PutUserPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutUserPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified client ID (also known as audience) from the list of client IDs registered for the specified IAM OpenID Connect (OIDC) provider resource object.</p> <p>This operation is idempotent; it does not fail or return an error if you try to remove a client ID that does not exist.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderInput
  ): Promise<RemoveClientIDFromOpenIDConnectProviderOutput>;
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderInput,
    cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderOutput) => void
  ): void;
  public removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderInput,
    cb?: (
      err: any,
      data?: RemoveClientIDFromOpenIDConnectProviderOutput
    ) => void
  ): Promise<RemoveClientIDFromOpenIDConnectProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveClientIDFromOpenIDConnectProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified IAM role from the specified EC2 instance profile.</p> <important> <p>Make sure that you do not have any Amazon EC2 instances running with the role you are about to remove from the instance profile. Removing a role from an instance profile that is associated with a running instance might break any applications running on the instance.</p> </important> <p> For more information about IAM roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with Roles</a>. For more information about instance profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About Instance Profiles</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileInput
  ): Promise<RemoveRoleFromInstanceProfileOutput>;
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileInput,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileOutput) => void
  ): void;
  public removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileInput,
    cb?: (err: any, data?: RemoveRoleFromInstanceProfileOutput) => void
  ): Promise<RemoveRoleFromInstanceProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveRoleFromInstanceProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified user from the specified group.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeUserFromGroup(
    args: RemoveUserFromGroupInput
  ): Promise<RemoveUserFromGroupOutput>;
  public removeUserFromGroup(
    args: RemoveUserFromGroupInput,
    cb: (err: any, data?: RemoveUserFromGroupOutput) => void
  ): void;
  public removeUserFromGroup(
    args: RemoveUserFromGroupInput,
    cb?: (err: any, data?: RemoveUserFromGroupOutput) => void
  ): Promise<RemoveUserFromGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveUserFromGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resets the password for a service-specific credential. The new password is AWS generated and cryptographically strong. It cannot be configured by the user. Resetting the password immediately invalidates the previous password associated with this user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialInput
  ): Promise<ResetServiceSpecificCredentialOutput>;
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialInput,
    cb: (err: any, data?: ResetServiceSpecificCredentialOutput) => void
  ): void;
  public resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialInput,
    cb?: (err: any, data?: ResetServiceSpecificCredentialOutput) => void
  ): Promise<ResetServiceSpecificCredentialOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResetServiceSpecificCredentialCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Synchronizes the specified MFA device with its IAM resource object on the AWS servers.</p> <p>For more information about creating and working with virtual MFA devices, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a Virtual MFA Device</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidAuthenticationCodeException} <p>The request was rejected because the authentication code was not recognized. The error message describes the specific error.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public resyncMFADevice(
    args: ResyncMFADeviceInput
  ): Promise<ResyncMFADeviceOutput>;
  public resyncMFADevice(
    args: ResyncMFADeviceInput,
    cb: (err: any, data?: ResyncMFADeviceOutput) => void
  ): void;
  public resyncMFADevice(
    args: ResyncMFADeviceInput,
    cb?: (err: any, data?: ResyncMFADeviceOutput) => void
  ): Promise<ResyncMFADeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ResyncMFADeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the specified version of the specified policy as the policy's default (operative) version.</p> <p>This operation affects all users, groups, and roles that the policy is attached to. To list the users, groups, and roles that the policy is attached to, use the <a>ListEntitiesForPolicy</a> API.</p> <p>For information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline Policies</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput
  ): Promise<SetDefaultPolicyVersionOutput>;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput,
    cb: (err: any, data?: SetDefaultPolicyVersionOutput) => void
  ): void;
  public setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionInput,
    cb?: (err: any, data?: SetDefaultPolicyVersionOutput) => void
  ): Promise<SetDefaultPolicyVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetDefaultPolicyVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the specified version of the global endpoint token as the token version used for the AWS account.</p> <p>By default, AWS Security Token Service (STS) is available as a global service, and all STS requests go to a single endpoint at <code>https://sts.amazonaws.com</code>. AWS recommends using Regional STS endpoints to reduce latency, build in redundancy, and increase session token availability. For information about Regional endpoints for STS, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">AWS Regions and Endpoints</a> in the <i>AWS General Reference</i>.</p> <p>If you make an STS call to the global endpoint, the resulting session tokens might be valid in some Regions but not others. It depends on the version that is set in this operation. Version 1 tokens are valid only in AWS Regions that are available by default. These tokens do not work in manually enabled Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions. However, version 2 tokens are longer and might affect systems where you temporarily store tokens. For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p> <p>To view the current session token version, see the <code>GlobalEndpointTokenVersion</code> entry in the response of the <a>GetAccountSummary</a> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesInput
  ): Promise<SetSecurityTokenServicePreferencesOutput>;
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesInput,
    cb: (err: any, data?: SetSecurityTokenServicePreferencesOutput) => void
  ): void;
  public setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesInput,
    cb?: (err: any, data?: SetSecurityTokenServicePreferencesOutput) => void
  ): Promise<SetSecurityTokenServicePreferencesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetSecurityTokenServicePreferencesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with a list of API operations and AWS resources to determine the policies' effective permissions. The policies are provided as strings.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p>If you want to simulate existing policies attached to an IAM user, group, or role, use <a>SimulatePrincipalPolicy</a> instead.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p> <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PolicyEvaluationException} <p>The request failed because a provided policy could not be successfully evaluated. An additional detailed message indicates the source of the failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public simulateCustomPolicy(
    args: SimulateCustomPolicyInput
  ): Promise<SimulateCustomPolicyOutput>;
  public simulateCustomPolicy(
    args: SimulateCustomPolicyInput,
    cb: (err: any, data?: SimulateCustomPolicyOutput) => void
  ): void;
  public simulateCustomPolicy(
    args: SimulateCustomPolicyInput,
    cb?: (err: any, data?: SimulateCustomPolicyOutput) => void
  ): Promise<SimulateCustomPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SimulateCustomPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Simulate how a set of IAM policies attached to an IAM entity works with a list of API operations and AWS resources to determine the policies' effective permissions. The entity can be an IAM user, group, or role. If you specify a user, then the simulation also includes all of the policies that are attached to groups that the user belongs to.</p> <p>You can optionally include a list of one or more additional policies specified as strings to include in the simulation. If you want to simulate only policies specified as strings, use <a>SimulateCustomPolicy</a> instead.</p> <p>You can also optionally include one resource-based policy to be evaluated with each of the resources included in the simulation.</p> <p>The simulation does not perform the API operations; it only checks the authorization to determine if the simulated policies allow or deny the operations.</p> <p> <b>Note:</b> This API discloses information about the permissions granted to other users. If you do not want users to see other user's permissions, then consider allowing them to use <a>SimulateCustomPolicy</a> instead.</p> <p>Context keys are variables maintained by AWS and its services that provide details about the context of an API query request. You can use the <code>Condition</code> element of an IAM policy to evaluate context keys. To get the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForPrincipalPolicy</a>.</p> <p>If the output is long, you can use the <code>MaxItems</code> and <code>Marker</code> parameters to paginate the results.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PolicyEvaluationException} <p>The request failed because a provided policy could not be successfully evaluated. An additional detailed message indicates the source of the failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyInput
  ): Promise<SimulatePrincipalPolicyOutput>;
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyInput,
    cb: (err: any, data?: SimulatePrincipalPolicyOutput) => void
  ): void;
  public simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyInput,
    cb?: (err: any, data?: SimulatePrincipalPolicyOutput) => void
  ): Promise<SimulatePrincipalPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SimulatePrincipalPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to an IAM role. The role can be a regular role or a service-linked role. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Reference tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM user or role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which AWS resources.</p> </li> </ul> <note> <ul> <li> <p>Make sure that you have no invalid tags and that you do not exceed the allowed number of tags per role. In either case, the entire request fails and <i>no</i> tags are added to the role.</p> </li> <li> <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagRole(args: TagRoleInput): Promise<TagRoleOutput>;
  public tagRole(
    args: TagRoleInput,
    cb: (err: any, data?: TagRoleOutput) => void
  ): void;
  public tagRole(
    args: TagRoleInput,
    cb?: (err: any, data?: TagRoleOutput) => void
  ): Promise<TagRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to an IAM user. If a tag with the same key name already exists, then that tag is overwritten with the new value.</p> <p>A tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:</p> <ul> <li> <p> <b>Administrative grouping and discovery</b> - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name <i>Project</i> and the value <i>MyImportantProject</i>. Or search for all resources with the key name <i>Cost Center</i> and the value <i>41200</i>. </p> </li> <li> <p> <b>Access control</b> - Reference tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM requesting user or to a role that has a specified tag attached. You can also restrict access to only those resources that have a certain tag attached. For examples of policies that show how to use tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Control Access Using IAM Tags</a> in the <i>IAM User Guide</i>.</p> </li> <li> <p> <b>Cost allocation</b> - Use tags to help track which individuals and teams are using which AWS resources.</p> </li> </ul> <note> <ul> <li> <p>Make sure that you have no invalid tags and that you do not exceed the allowed number of tags per role. In either case, the entire request fails and <i>no</i> tags are added to the role.</p> </li> <li> <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.</p> </li> </ul> </note> <p>For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagUser(args: TagUserInput): Promise<TagUserOutput>;
  public tagUser(
    args: TagUserInput,
    cb: (err: any, data?: TagUserOutput) => void
  ): void;
  public tagUser(
    args: TagUserInput,
    cb?: (err: any, data?: TagUserOutput) => void
  ): Promise<TagUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagRole(args: UntagRoleInput): Promise<UntagRoleOutput>;
  public untagRole(
    args: UntagRoleInput,
    cb: (err: any, data?: UntagRoleOutput) => void
  ): void;
  public untagRole(
    args: UntagRoleInput,
    cb?: (err: any, data?: UntagRoleOutput) => void
  ): Promise<UntagRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the specified tags from the user. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagUser(args: UntagUserInput): Promise<UntagUserOutput>;
  public untagUser(
    args: UntagUserInput,
    cb: (err: any, data?: UntagUserOutput) => void
  ): void;
  public untagUser(
    args: UntagUserInput,
    cb?: (err: any, data?: UntagUserOutput) => void
  ): Promise<UntagUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the status of the specified access key from Active to Inactive, or vice versa. This operation can be used to disable a user's key as part of a key rotation workflow.</p> <p>If the <code>UserName</code> is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <p>For information about rotating keys, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/ManagingCredentials.html">Managing Keys and Certificates</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccessKey(
    args: UpdateAccessKeyInput
  ): Promise<UpdateAccessKeyOutput>;
  public updateAccessKey(
    args: UpdateAccessKeyInput,
    cb: (err: any, data?: UpdateAccessKeyOutput) => void
  ): void;
  public updateAccessKey(
    args: UpdateAccessKeyInput,
    cb?: (err: any, data?: UpdateAccessKeyOutput) => void
  ): Promise<UpdateAccessKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccessKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the password policy settings for the AWS account.</p> <note> <ul> <li> <p>This operation does not support partial updates. No parameters are required, but if you do not specify a parameter, that parameter's value reverts to its default value. See the <b>Request Parameters</b> section for each parameter's default value. Also note that some parameters do not allow the default parameter to be explicitly set. Instead, to invoke the default value, do not include that parameter when you invoke the operation.</p> </li> </ul> </note> <p> For more information about using a password policy, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingPasswordPolicies.html">Managing an IAM Password Policy</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyInput
  ): Promise<UpdateAccountPasswordPolicyOutput>;
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyInput,
    cb: (err: any, data?: UpdateAccountPasswordPolicyOutput) => void
  ): void;
  public updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyInput,
    cb?: (err: any, data?: UpdateAccountPasswordPolicyOutput) => void
  ): Promise<UpdateAccountPasswordPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountPasswordPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the policy that grants an IAM entity permission to assume a role. This is typically referred to as the "role trust policy". For more information about roles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using Roles to Delegate Permissions and Federate Identities</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {MalformedPolicyDocumentException} <p>The request was rejected because the policy document was malformed. The error message describes the specific error.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyInput
  ): Promise<UpdateAssumeRolePolicyOutput>;
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyInput,
    cb: (err: any, data?: UpdateAssumeRolePolicyOutput) => void
  ): void;
  public updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyInput,
    cb?: (err: any, data?: UpdateAssumeRolePolicyOutput) => void
  ): Promise<UpdateAssumeRolePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAssumeRolePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the name and/or the path of the specified IAM group.</p> <important> <p> You should understand the implications of changing a group's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming Users and Groups</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the role group with the old name and the new name. For example, to change the group named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that allows them to update both groups. If the principal has permission to update the <code>Managers</code> group, but not the <code>MGRs</code> group, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGroup(args: UpdateGroupInput): Promise<UpdateGroupOutput>;
  public updateGroup(
    args: UpdateGroupInput,
    cb: (err: any, data?: UpdateGroupOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupInput,
    cb?: (err: any, data?: UpdateGroupOutput) => void
  ): Promise<UpdateGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the password for the specified IAM user.</p> <p>IAM users can change their own passwords by calling <a>ChangePassword</a>. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the <i>IAM User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {PasswordPolicyViolationException} <p>The request was rejected because the provided password did not meet the requirements imposed by the account password policy.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLoginProfile(
    args: UpdateLoginProfileInput
  ): Promise<UpdateLoginProfileOutput>;
  public updateLoginProfile(
    args: UpdateLoginProfileInput,
    cb: (err: any, data?: UpdateLoginProfileOutput) => void
  ): void;
  public updateLoginProfile(
    args: UpdateLoginProfileInput,
    cb?: (err: any, data?: UpdateLoginProfileOutput) => void
  ): Promise<UpdateLoginProfileOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLoginProfileCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the existing list of server certificate thumbprints associated with an OpenID Connect (OIDC) provider resource object with a new list of thumbprints.</p> <p>The list that you pass with this operation completely replaces the existing list of thumbprints. (The lists are not merged.)</p> <p>Typically, you need to update a thumbprint only when the identity provider's certificate changes, which occurs rarely. However, if the provider's certificate <i>does</i> change, any attempt to assume an IAM role that specifies the OIDC provider as a principal fails until the certificate thumbprint is updated.</p> <note> <p>Trust for the OIDC provider is derived from the provider's certificate and is validated by the thumbprint. Therefore, it is best to limit access to the <code>UpdateOpenIDConnectProviderThumbprint</code> operation to highly privileged users.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintInput
  ): Promise<UpdateOpenIDConnectProviderThumbprintOutput>;
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintInput,
    cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintOutput) => void
  ): void;
  public updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintInput,
    cb?: (err: any, data?: UpdateOpenIDConnectProviderThumbprintOutput) => void
  ): Promise<UpdateOpenIDConnectProviderThumbprintOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateOpenIDConnectProviderThumbprintCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the description or maximum session duration setting of a role.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRole(args: UpdateRoleInput): Promise<UpdateRoleOutput>;
  public updateRole(
    args: UpdateRoleInput,
    cb: (err: any, data?: UpdateRoleOutput) => void
  ): void;
  public updateRole(
    args: UpdateRoleInput,
    cb?: (err: any, data?: UpdateRoleOutput) => void
  ): Promise<UpdateRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use <a>UpdateRole</a> instead.</p> <p>Modifies only the description of a role. This operation performs the same function as the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {UnmodifiableEntityException} <p>The request was rejected because only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRoleDescription(
    args: UpdateRoleDescriptionInput
  ): Promise<UpdateRoleDescriptionOutput>;
  public updateRoleDescription(
    args: UpdateRoleDescriptionInput,
    cb: (err: any, data?: UpdateRoleDescriptionOutput) => void
  ): void;
  public updateRoleDescription(
    args: UpdateRoleDescriptionInput,
    cb?: (err: any, data?: UpdateRoleDescriptionOutput) => void
  ): Promise<UpdateRoleDescriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRoleDescriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the metadata document for an existing SAML provider resource object.</p> <note> <p>This operation requires <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSAMLProvider(
    args: UpdateSAMLProviderInput
  ): Promise<UpdateSAMLProviderOutput>;
  public updateSAMLProvider(
    args: UpdateSAMLProviderInput,
    cb: (err: any, data?: UpdateSAMLProviderOutput) => void
  ): void;
  public updateSAMLProvider(
    args: UpdateSAMLProviderInput,
    cb?: (err: any, data?: UpdateSAMLProviderOutput) => void
  ): Promise<UpdateSAMLProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSAMLProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the status of an IAM user's SSH public key to active or inactive. SSH public keys that are inactive cannot be used for authentication. This operation can be used to disable a user's SSH public key as part of a key rotation work flow.</p> <p>The SSH public key affected by this operation is used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyInput
  ): Promise<UpdateSSHPublicKeyOutput>;
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyInput,
    cb: (err: any, data?: UpdateSSHPublicKeyOutput) => void
  ): void;
  public updateSSHPublicKey(
    args: UpdateSSHPublicKeyInput,
    cb?: (err: any, data?: UpdateSSHPublicKeyOutput) => void
  ): Promise<UpdateSSHPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSSHPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the name and/or the path of the specified server certificate stored in IAM.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic also includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <important> <p>You should understand the implications of changing a server certificate's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a Server Certificate</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p>The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the <code>ProductionCert</code> group, but not the <code>ProdCert</code> certificate, then the update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServerCertificate(
    args: UpdateServerCertificateInput
  ): Promise<UpdateServerCertificateOutput>;
  public updateServerCertificate(
    args: UpdateServerCertificateInput,
    cb: (err: any, data?: UpdateServerCertificateOutput) => void
  ): void;
  public updateServerCertificate(
    args: UpdateServerCertificateInput,
    cb?: (err: any, data?: UpdateServerCertificateOutput) => void
  ): Promise<UpdateServerCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServerCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the status of a service-specific credential to <code>Active</code> or <code>Inactive</code>. Service-specific credentials that are inactive cannot be used for authentication to the service. This operation can be used to disable a user's service-specific credential as part of a credential rotation work flow.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialInput
  ): Promise<UpdateServiceSpecificCredentialOutput>;
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialInput,
    cb: (err: any, data?: UpdateServiceSpecificCredentialOutput) => void
  ): void;
  public updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialInput,
    cb?: (err: any, data?: UpdateServiceSpecificCredentialOutput) => void
  ): Promise<UpdateServiceSpecificCredentialOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceSpecificCredentialCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes the status of the specified user signing certificate from active to disabled, or vice versa. This operation can be used to disable an IAM user's signing certificate as part of a certificate rotation work flow.</p> <p>If the <code>UserName</code> field is not specified, the user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSigningCertificate(
    args: UpdateSigningCertificateInput
  ): Promise<UpdateSigningCertificateOutput>;
  public updateSigningCertificate(
    args: UpdateSigningCertificateInput,
    cb: (err: any, data?: UpdateSigningCertificateOutput) => void
  ): void;
  public updateSigningCertificate(
    args: UpdateSigningCertificateInput,
    cb?: (err: any, data?: UpdateSigningCertificateOutput) => void
  ): Promise<UpdateSigningCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSigningCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the name and/or the path of the specified IAM user.</p> <important> <p> You should understand the implications of changing an IAM user's path or name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_manage.html#id_users_renaming">Renaming an IAM User</a> and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups_manage_rename.html">Renaming an IAM Group</a> in the <i>IAM User Guide</i>.</p> </important> <note> <p> To change a user name, the requester must have appropriate permissions on both the source object and the target object. For example, to change Bob to Robert, the entity making the request must have permission on Bob and Robert, or must have permission on all (*). For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/PermissionsAndPolicies.html">Permissions and Policies</a>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {EntityTemporarilyUnmodifiableException} <p>The request was rejected because it referenced an entity that is temporarily unmodifiable, such as a user name that was deleted and then recreated. The error indicates that the request is likely to succeed if you try again after waiting several minutes. The error message describes the entity.</p>
   *   - {ConcurrentModificationException} <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUser(args: UpdateUserInput): Promise<UpdateUserOutput>;
  public updateUser(
    args: UpdateUserInput,
    cb: (err: any, data?: UpdateUserOutput) => void
  ): void;
  public updateUser(
    args: UpdateUserInput,
    cb?: (err: any, data?: UpdateUserOutput) => void
  ): Promise<UpdateUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads an SSH public key and associates it with the specified IAM user.</p> <p>The SSH public key uploaded by this operation can be used only for authenticating the associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {InvalidPublicKeyException} <p>The request was rejected because the public key is malformed or otherwise invalid.</p>
   *   - {DuplicateSSHPublicKeyException} <p>The request was rejected because the SSH public key is already associated with the specified IAM user.</p>
   *   - {UnrecognizedPublicKeyEncodingException} <p>The request was rejected because the public key encoding format is unsupported or unrecognized.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyInput
  ): Promise<UploadSSHPublicKeyOutput>;
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyInput,
    cb: (err: any, data?: UploadSSHPublicKeyOutput) => void
  ): void;
  public uploadSSHPublicKey(
    args: UploadSSHPublicKeyInput,
    cb?: (err: any, data?: UploadSSHPublicKeyOutput) => void
  ): Promise<UploadSSHPublicKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadSSHPublicKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads a server certificate entity for the AWS account. The server certificate entity includes a public key certificate, a private key, and an optional certificate chain, which should all be PEM-encoded.</p> <p>We recommend that you use <a href="https://docs.aws.amazon.com/acm/">AWS Certificate Manager</a> to provision, manage, and deploy your server certificates. With ACM you can request a certificate, deploy it to AWS resources, and let ACM handle certificate renewals for you. Certificates provided by ACM are free. For more information about using ACM, see the <a href="https://docs.aws.amazon.com/acm/latest/userguide/">AWS Certificate Manager User Guide</a>.</p> <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working with Server Certificates</a> in the <i>IAM User Guide</i>. This topic includes a list of AWS services that can use the server certificates that you manage with IAM.</p> <p>For information about the number of server certificates you can upload, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-limits.html">Limitations on IAM Entities and Objects</a> in the <i>IAM User Guide</i>.</p> <note> <p>Because the body of the public key certificate, private key, and the certificate chain can be large, you should use POST rather than GET when calling <code>UploadServerCertificate</code>. For information about setting up signatures and authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a> in the <i>AWS General Reference</i>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/programming.html">Calling the API by Making HTTP Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {MalformedCertificateException} <p>The request was rejected because the certificate was malformed or expired. The error message describes the specific error.</p>
   *   - {KeyPairMismatchException} <p>The request was rejected because the public key certificate and the private key do not match.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadServerCertificate(
    args: UploadServerCertificateInput
  ): Promise<UploadServerCertificateOutput>;
  public uploadServerCertificate(
    args: UploadServerCertificateInput,
    cb: (err: any, data?: UploadServerCertificateOutput) => void
  ): void;
  public uploadServerCertificate(
    args: UploadServerCertificateInput,
    cb?: (err: any, data?: UploadServerCertificateOutput) => void
  ): Promise<UploadServerCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadServerCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uploads an X.509 signing certificate and associates it with the specified IAM user. Some AWS services use X.509 signing certificates to validate requests that are signed with a corresponding private key. When you upload the certificate, its default status is <code>Active</code>.</p> <p>If the <code>UserName</code> is not specified, the IAM user name is determined implicitly based on the AWS access key ID used to sign the request. This operation works for access keys under the AWS account. Consequently, you can use this operation to manage AWS account root user credentials even if the AWS account has no associated users.</p> <note> <p>Because the body of an X.509 certificate can be large, you should use POST rather than GET when calling <code>UploadSigningCertificate</code>. For information about setting up signatures and authorization through the API, go to <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing AWS API Requests</a> in the <i>AWS General Reference</i>. For general information about using the Query API with IAM, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the <i>IAM User Guide</i>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error message describes the limit exceeded.</p>
   *   - {EntityAlreadyExistsException} <p>The request was rejected because it attempted to create a resource that already exists.</p>
   *   - {MalformedCertificateException} <p>The request was rejected because the certificate was malformed or expired. The error message describes the specific error.</p>
   *   - {InvalidCertificateException} <p>The request was rejected because the certificate is invalid.</p>
   *   - {DuplicateCertificateException} <p>The request was rejected because the same certificate is associated with an IAM user in the account.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.</p>
   *   - {ServiceFailureException} <p>The request processing has failed because of an unknown error, exception or failure.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public uploadSigningCertificate(
    args: UploadSigningCertificateInput
  ): Promise<UploadSigningCertificateOutput>;
  public uploadSigningCertificate(
    args: UploadSigningCertificateInput,
    cb: (err: any, data?: UploadSigningCertificateOutput) => void
  ): void;
  public uploadSigningCertificate(
    args: UploadSigningCertificateInput,
    cb?: (err: any, data?: UploadSigningCertificateOutput) => void
  ): Promise<UploadSigningCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UploadSigningCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
