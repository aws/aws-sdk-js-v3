// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddClientIDToOpenIDConnectProviderCommand,
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommand,
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand";
import {
  AddUserToGroupCommand,
  AddUserToGroupCommandInput,
  AddUserToGroupCommandOutput,
} from "./commands/AddUserToGroupCommand";
import {
  AttachGroupPolicyCommand,
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
} from "./commands/AttachGroupPolicyCommand";
import {
  AttachRolePolicyCommand,
  AttachRolePolicyCommandInput,
  AttachRolePolicyCommandOutput,
} from "./commands/AttachRolePolicyCommand";
import {
  AttachUserPolicyCommand,
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
} from "./commands/AttachUserPolicyCommand";
import {
  ChangePasswordCommand,
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
} from "./commands/ChangePasswordCommand";
import {
  CreateAccessKeyCommand,
  CreateAccessKeyCommandInput,
  CreateAccessKeyCommandOutput,
} from "./commands/CreateAccessKeyCommand";
import {
  CreateAccountAliasCommand,
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
} from "./commands/CreateAccountAliasCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommand,
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateLoginProfileCommand,
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
} from "./commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommand,
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommand,
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import { CreateRoleCommand, CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand";
import {
  CreateSAMLProviderCommand,
  CreateSAMLProviderCommandInput,
  CreateSAMLProviderCommandOutput,
} from "./commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommand,
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommand,
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommand,
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommand,
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand";
import {
  DeleteAccessKeyCommand,
  DeleteAccessKeyCommandInput,
  DeleteAccessKeyCommandOutput,
} from "./commands/DeleteAccessKeyCommand";
import {
  DeleteAccountAliasCommand,
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "./commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommand,
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteGroupPolicyCommand,
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
} from "./commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommand,
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteLoginProfileCommand,
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
} from "./commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommand,
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommand,
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import { DeleteRoleCommand, DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommand,
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand";
import {
  DeleteRolePolicyCommand,
  DeleteRolePolicyCommandInput,
  DeleteRolePolicyCommandOutput,
} from "./commands/DeleteRolePolicyCommand";
import {
  DeleteSAMLProviderCommand,
  DeleteSAMLProviderCommandInput,
  DeleteSAMLProviderCommandOutput,
} from "./commands/DeleteSAMLProviderCommand";
import {
  DeleteServerCertificateCommand,
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommand,
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommand,
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommand,
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand";
import {
  DeleteSSHPublicKeyCommand,
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
} from "./commands/DeleteSSHPublicKeyCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand";
import {
  DeleteUserPolicyCommand,
  DeleteUserPolicyCommandInput,
  DeleteUserPolicyCommandOutput,
} from "./commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommand,
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand";
import {
  DetachGroupPolicyCommand,
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
} from "./commands/DetachGroupPolicyCommand";
import {
  DetachRolePolicyCommand,
  DetachRolePolicyCommandInput,
  DetachRolePolicyCommandOutput,
} from "./commands/DetachRolePolicyCommand";
import {
  DetachUserPolicyCommand,
  DetachUserPolicyCommandInput,
  DetachUserPolicyCommandOutput,
} from "./commands/DetachUserPolicyCommand";
import {
  EnableMFADeviceCommand,
  EnableMFADeviceCommandInput,
  EnableMFADeviceCommandOutput,
} from "./commands/EnableMFADeviceCommand";
import {
  GenerateCredentialReportCommand,
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommand,
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommand,
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommand,
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommand,
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommand,
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand";
import {
  GetAccountSummaryCommand,
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
} from "./commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommand,
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommand,
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommand,
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupPolicyCommand,
  GetGroupPolicyCommandInput,
  GetGroupPolicyCommandOutput,
} from "./commands/GetGroupPolicyCommand";
import {
  GetInstanceProfileCommand,
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import {
  GetLoginProfileCommand,
  GetLoginProfileCommandInput,
  GetLoginProfileCommandOutput,
} from "./commands/GetLoginProfileCommand";
import {
  GetMFADeviceCommand,
  GetMFADeviceCommandInput,
  GetMFADeviceCommandOutput,
} from "./commands/GetMFADeviceCommand";
import {
  GetOpenIDConnectProviderCommand,
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommand,
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetPolicyVersionCommand,
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "./commands/GetPolicyVersionCommand";
import { GetRoleCommand, GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand";
import {
  GetRolePolicyCommand,
  GetRolePolicyCommandInput,
  GetRolePolicyCommandOutput,
} from "./commands/GetRolePolicyCommand";
import {
  GetSAMLProviderCommand,
  GetSAMLProviderCommandInput,
  GetSAMLProviderCommandOutput,
} from "./commands/GetSAMLProviderCommand";
import {
  GetServerCertificateCommand,
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommand,
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import {
  GetSSHPublicKeyCommand,
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
} from "./commands/GetSSHPublicKeyCommand";
import { GetUserCommand, GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import {
  GetUserPolicyCommand,
  GetUserPolicyCommandInput,
  GetUserPolicyCommandOutput,
} from "./commands/GetUserPolicyCommand";
import {
  ListAccessKeysCommand,
  ListAccessKeysCommandInput,
  ListAccessKeysCommandOutput,
} from "./commands/ListAccessKeysCommand";
import {
  ListAccountAliasesCommand,
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "./commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommand,
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommand,
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommand,
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommand,
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand";
import {
  ListGroupPoliciesCommand,
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "./commands/ListGroupPoliciesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListGroupsForUserCommand,
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "./commands/ListGroupsForUserCommand";
import {
  ListInstanceProfilesCommand,
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand";
import {
  ListInstanceProfileTagsCommand,
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand";
import {
  ListMFADevicesCommand,
  ListMFADevicesCommandInput,
  ListMFADevicesCommandOutput,
} from "./commands/ListMFADevicesCommand";
import {
  ListMFADeviceTagsCommand,
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "./commands/ListMFADeviceTagsCommand";
import {
  ListOpenIDConnectProvidersCommand,
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import {
  ListOpenIDConnectProviderTagsCommand,
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommand,
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import {
  ListPolicyTagsCommand,
  ListPolicyTagsCommandInput,
  ListPolicyTagsCommandOutput,
} from "./commands/ListPolicyTagsCommand";
import {
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import {
  ListRolePoliciesCommand,
  ListRolePoliciesCommandInput,
  ListRolePoliciesCommandOutput,
} from "./commands/ListRolePoliciesCommand";
import { ListRolesCommand, ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import {
  ListRoleTagsCommand,
  ListRoleTagsCommandInput,
  ListRoleTagsCommandOutput,
} from "./commands/ListRoleTagsCommand";
import {
  ListSAMLProvidersCommand,
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
} from "./commands/ListSAMLProvidersCommand";
import {
  ListSAMLProviderTagsCommand,
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand";
import {
  ListServerCertificatesCommand,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import {
  ListServerCertificateTagsCommand,
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand";
import {
  ListServiceSpecificCredentialsCommand,
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommand,
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import {
  ListSSHPublicKeysCommand,
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "./commands/ListSSHPublicKeysCommand";
import {
  ListUserPoliciesCommand,
  ListUserPoliciesCommandInput,
  ListUserPoliciesCommandOutput,
} from "./commands/ListUserPoliciesCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListUserTagsCommand,
  ListUserTagsCommandInput,
  ListUserTagsCommandOutput,
} from "./commands/ListUserTagsCommand";
import {
  ListVirtualMFADevicesCommand,
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand";
import {
  PutGroupPolicyCommand,
  PutGroupPolicyCommandInput,
  PutGroupPolicyCommandOutput,
} from "./commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommand,
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand";
import {
  PutRolePolicyCommand,
  PutRolePolicyCommandInput,
  PutRolePolicyCommandOutput,
} from "./commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommand,
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand";
import {
  PutUserPolicyCommand,
  PutUserPolicyCommandInput,
  PutUserPolicyCommandOutput,
} from "./commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommand,
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommand,
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommand,
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand";
import {
  ResyncMFADeviceCommand,
  ResyncMFADeviceCommandInput,
  ResyncMFADeviceCommandOutput,
} from "./commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommand,
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommand,
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommand,
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommand,
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand";
import {
  TagInstanceProfileCommand,
  TagInstanceProfileCommandInput,
  TagInstanceProfileCommandOutput,
} from "./commands/TagInstanceProfileCommand";
import {
  TagMFADeviceCommand,
  TagMFADeviceCommandInput,
  TagMFADeviceCommandOutput,
} from "./commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommand,
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand";
import { TagPolicyCommand, TagPolicyCommandInput, TagPolicyCommandOutput } from "./commands/TagPolicyCommand";
import { TagRoleCommand, TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import {
  TagSAMLProviderCommand,
  TagSAMLProviderCommandInput,
  TagSAMLProviderCommandOutput,
} from "./commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommand,
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand";
import { TagUserCommand, TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import {
  UntagInstanceProfileCommand,
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand";
import {
  UntagMFADeviceCommand,
  UntagMFADeviceCommandInput,
  UntagMFADeviceCommandOutput,
} from "./commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommand,
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand";
import { UntagPolicyCommand, UntagPolicyCommandInput, UntagPolicyCommandOutput } from "./commands/UntagPolicyCommand";
import { UntagRoleCommand, UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import {
  UntagSAMLProviderCommand,
  UntagSAMLProviderCommandInput,
  UntagSAMLProviderCommandOutput,
} from "./commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommand,
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand";
import { UntagUserCommand, UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand";
import {
  UpdateAccessKeyCommand,
  UpdateAccessKeyCommandInput,
  UpdateAccessKeyCommandOutput,
} from "./commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommand,
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommand,
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateLoginProfileCommand,
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
} from "./commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommand, UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommand,
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand";
import {
  UpdateSAMLProviderCommand,
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
} from "./commands/UpdateSAMLProviderCommand";
import {
  UpdateServerCertificateCommand,
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommand,
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommand,
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand";
import {
  UpdateSSHPublicKeyCommand,
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
} from "./commands/UpdateSSHPublicKeyCommand";
import { UpdateUserCommand, UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UploadServerCertificateCommand,
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommand,
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import {
  UploadSSHPublicKeyCommand,
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
} from "./commands/UploadSSHPublicKeyCommand";
import { IAMClient, IAMClientConfig } from "./IAMClient";

const commands = {
  AddClientIDToOpenIDConnectProviderCommand,
  AddRoleToInstanceProfileCommand,
  AddUserToGroupCommand,
  AttachGroupPolicyCommand,
  AttachRolePolicyCommand,
  AttachUserPolicyCommand,
  ChangePasswordCommand,
  CreateAccessKeyCommand,
  CreateAccountAliasCommand,
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
  DeleteServerCertificateCommand,
  DeleteServiceLinkedRoleCommand,
  DeleteServiceSpecificCredentialCommand,
  DeleteSigningCertificateCommand,
  DeleteSSHPublicKeyCommand,
  DeleteUserCommand,
  DeleteUserPermissionsBoundaryCommand,
  DeleteUserPolicyCommand,
  DeleteVirtualMFADeviceCommand,
  DetachGroupPolicyCommand,
  DetachRolePolicyCommand,
  DetachUserPolicyCommand,
  EnableMFADeviceCommand,
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
  GetGroupCommand,
  GetGroupPolicyCommand,
  GetInstanceProfileCommand,
  GetLoginProfileCommand,
  GetMFADeviceCommand,
  GetOpenIDConnectProviderCommand,
  GetOrganizationsAccessReportCommand,
  GetPolicyCommand,
  GetPolicyVersionCommand,
  GetRoleCommand,
  GetRolePolicyCommand,
  GetSAMLProviderCommand,
  GetServerCertificateCommand,
  GetServiceLastAccessedDetailsCommand,
  GetServiceLastAccessedDetailsWithEntitiesCommand,
  GetServiceLinkedRoleDeletionStatusCommand,
  GetSSHPublicKeyCommand,
  GetUserCommand,
  GetUserPolicyCommand,
  ListAccessKeysCommand,
  ListAccountAliasesCommand,
  ListAttachedGroupPoliciesCommand,
  ListAttachedRolePoliciesCommand,
  ListAttachedUserPoliciesCommand,
  ListEntitiesForPolicyCommand,
  ListGroupPoliciesCommand,
  ListGroupsCommand,
  ListGroupsForUserCommand,
  ListInstanceProfilesCommand,
  ListInstanceProfilesForRoleCommand,
  ListInstanceProfileTagsCommand,
  ListMFADevicesCommand,
  ListMFADeviceTagsCommand,
  ListOpenIDConnectProvidersCommand,
  ListOpenIDConnectProviderTagsCommand,
  ListPoliciesCommand,
  ListPoliciesGrantingServiceAccessCommand,
  ListPolicyTagsCommand,
  ListPolicyVersionsCommand,
  ListRolePoliciesCommand,
  ListRolesCommand,
  ListRoleTagsCommand,
  ListSAMLProvidersCommand,
  ListSAMLProviderTagsCommand,
  ListServerCertificatesCommand,
  ListServerCertificateTagsCommand,
  ListServiceSpecificCredentialsCommand,
  ListSigningCertificatesCommand,
  ListSSHPublicKeysCommand,
  ListUserPoliciesCommand,
  ListUsersCommand,
  ListUserTagsCommand,
  ListVirtualMFADevicesCommand,
  PutGroupPolicyCommand,
  PutRolePermissionsBoundaryCommand,
  PutRolePolicyCommand,
  PutUserPermissionsBoundaryCommand,
  PutUserPolicyCommand,
  RemoveClientIDFromOpenIDConnectProviderCommand,
  RemoveRoleFromInstanceProfileCommand,
  RemoveUserFromGroupCommand,
  ResetServiceSpecificCredentialCommand,
  ResyncMFADeviceCommand,
  SetDefaultPolicyVersionCommand,
  SetSecurityTokenServicePreferencesCommand,
  SimulateCustomPolicyCommand,
  SimulatePrincipalPolicyCommand,
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
  UpdateGroupCommand,
  UpdateLoginProfileCommand,
  UpdateOpenIDConnectProviderThumbprintCommand,
  UpdateRoleCommand,
  UpdateRoleDescriptionCommand,
  UpdateSAMLProviderCommand,
  UpdateServerCertificateCommand,
  UpdateServiceSpecificCredentialCommand,
  UpdateSigningCertificateCommand,
  UpdateSSHPublicKeyCommand,
  UpdateUserCommand,
  UploadServerCertificateCommand,
  UploadSigningCertificateCommand,
  UploadSSHPublicKeyCommand,
};

export interface IAM {
  /**
   * @see {@link AddClientIDToOpenIDConnectProviderCommand}
   */
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddClientIDToOpenIDConnectProviderCommandOutput>;
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void
  ): void;
  addClientIDToOpenIDConnectProvider(
    args: AddClientIDToOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddClientIDToOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link AddRoleToInstanceProfileCommand}
   */
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRoleToInstanceProfileCommandOutput>;
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;
  addRoleToInstanceProfile(
    args: AddRoleToInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRoleToInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link AddUserToGroupCommand}
   */
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddUserToGroupCommandOutput>;
  addUserToGroup(args: AddUserToGroupCommandInput, cb: (err: any, data?: AddUserToGroupCommandOutput) => void): void;
  addUserToGroup(
    args: AddUserToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddUserToGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachGroupPolicyCommand}
   */
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachGroupPolicyCommandOutput>;
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;
  attachGroupPolicy(
    args: AttachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachRolePolicyCommand}
   */
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachRolePolicyCommandOutput>;
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;
  attachRolePolicy(
    args: AttachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachUserPolicyCommand}
   */
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachUserPolicyCommandOutput>;
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;
  attachUserPolicy(
    args: AttachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachUserPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ChangePasswordCommand}
   */
  changePassword(
    args: ChangePasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ChangePasswordCommandOutput>;
  changePassword(args: ChangePasswordCommandInput, cb: (err: any, data?: ChangePasswordCommandOutput) => void): void;
  changePassword(
    args: ChangePasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ChangePasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessKeyCommand}
   */
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessKeyCommandOutput>;
  createAccessKey(args: CreateAccessKeyCommandInput, cb: (err: any, data?: CreateAccessKeyCommandOutput) => void): void;
  createAccessKey(
    args: CreateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountAliasCommand}
   */
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAliasCommandOutput>;
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;
  createAccountAlias(
    args: CreateAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceProfileCommand}
   */
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceProfileCommandOutput>;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;
  createInstanceProfile(
    args: CreateInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoginProfileCommand}
   */
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoginProfileCommandOutput>;
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;
  createLoginProfile(
    args: CreateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoginProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpenIDConnectProviderCommand}
   */
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpenIDConnectProviderCommandOutput>;
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;
  createOpenIDConnectProvider(
    args: CreateOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
  createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyVersionCommand}
   */
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyVersionCommandOutput>;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;
  createPolicyVersion(
    args: CreatePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoleCommand}
   */
  createRole(args: CreateRoleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoleCommandOutput>;
  createRole(args: CreateRoleCommandInput, cb: (err: any, data?: CreateRoleCommandOutput) => void): void;
  createRole(
    args: CreateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSAMLProviderCommand}
   */
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSAMLProviderCommandOutput>;
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;
  createSAMLProvider(
    args: CreateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceLinkedRoleCommand}
   */
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceLinkedRoleCommandOutput>;
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;
  createServiceLinkedRole(
    args: CreateServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceLinkedRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServiceSpecificCredentialCommand}
   */
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceSpecificCredentialCommandOutput>;
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;
  createServiceSpecificCredential(
    args: CreateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceSpecificCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVirtualMFADeviceCommand}
   */
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVirtualMFADeviceCommandOutput>;
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;
  createVirtualMFADevice(
    args: CreateVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVirtualMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeactivateMFADeviceCommand}
   */
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateMFADeviceCommandOutput>;
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;
  deactivateMFADevice(
    args: DeactivateMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessKeyCommand}
   */
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessKeyCommandOutput>;
  deleteAccessKey(args: DeleteAccessKeyCommandInput, cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void): void;
  deleteAccessKey(
    args: DeleteAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountAliasCommand}
   */
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAliasCommandOutput>;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;
  deleteAccountAlias(
    args: DeleteAccountAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountPasswordPolicyCommand}
   */
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountPasswordPolicyCommandOutput>;
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;
  deleteAccountPasswordPolicy(
    args: DeleteAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountPasswordPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupPolicyCommand}
   */
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGroupPolicyCommandOutput>;
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;
  deleteGroupPolicy(
    args: DeleteGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceProfileCommand}
   */
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceProfileCommandOutput>;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;
  deleteInstanceProfile(
    args: DeleteInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoginProfileCommand}
   */
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoginProfileCommandOutput>;
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;
  deleteLoginProfile(
    args: DeleteLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoginProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOpenIDConnectProviderCommand}
   */
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOpenIDConnectProviderCommandOutput>;
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;
  deleteOpenIDConnectProvider(
    args: DeleteOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyVersionCommand}
   */
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyVersionCommandOutput>;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;
  deletePolicyVersion(
    args: DeletePolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoleCommand}
   */
  deleteRole(args: DeleteRoleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoleCommandOutput>;
  deleteRole(args: DeleteRoleCommandInput, cb: (err: any, data?: DeleteRoleCommandOutput) => void): void;
  deleteRole(
    args: DeleteRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRolePermissionsBoundaryCommand}
   */
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePermissionsBoundaryCommandOutput>;
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;
  deleteRolePermissionsBoundary(
    args: DeleteRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePermissionsBoundaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRolePolicyCommand}
   */
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRolePolicyCommandOutput>;
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;
  deleteRolePolicy(
    args: DeleteRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSAMLProviderCommand}
   */
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSAMLProviderCommandOutput>;
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;
  deleteSAMLProvider(
    args: DeleteSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServerCertificateCommand}
   */
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServerCertificateCommandOutput>;
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;
  deleteServerCertificate(
    args: DeleteServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceLinkedRoleCommand}
   */
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceLinkedRoleCommandOutput>;
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;
  deleteServiceLinkedRole(
    args: DeleteServiceLinkedRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceLinkedRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServiceSpecificCredentialCommand}
   */
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceSpecificCredentialCommandOutput>;
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;
  deleteServiceSpecificCredential(
    args: DeleteServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceSpecificCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSigningCertificateCommand}
   */
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSigningCertificateCommandOutput>;
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;
  deleteSigningCertificate(
    args: DeleteSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSigningCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSSHPublicKeyCommand}
   */
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSSHPublicKeyCommandOutput>;
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;
  deleteSSHPublicKey(
    args: DeleteSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSSHPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPermissionsBoundaryCommand}
   */
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPermissionsBoundaryCommandOutput>;
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;
  deleteUserPermissionsBoundary(
    args: DeleteUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPermissionsBoundaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserPolicyCommand}
   */
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserPolicyCommandOutput>;
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;
  deleteUserPolicy(
    args: DeleteUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVirtualMFADeviceCommand}
   */
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVirtualMFADeviceCommandOutput>;
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;
  deleteVirtualMFADevice(
    args: DeleteVirtualMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVirtualMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachGroupPolicyCommand}
   */
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachGroupPolicyCommandOutput>;
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;
  detachGroupPolicy(
    args: DetachGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachRolePolicyCommand}
   */
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachRolePolicyCommandOutput>;
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;
  detachRolePolicy(
    args: DetachRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachUserPolicyCommand}
   */
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachUserPolicyCommandOutput>;
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;
  detachUserPolicy(
    args: DetachUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachUserPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableMFADeviceCommand}
   */
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMFADeviceCommandOutput>;
  enableMFADevice(args: EnableMFADeviceCommandInput, cb: (err: any, data?: EnableMFADeviceCommandOutput) => void): void;
  enableMFADevice(
    args: EnableMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateCredentialReportCommand}
   */
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateCredentialReportCommandOutput>;
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;
  generateCredentialReport(
    args: GenerateCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateCredentialReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateOrganizationsAccessReportCommand}
   */
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateOrganizationsAccessReportCommandOutput>;
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void
  ): void;
  generateOrganizationsAccessReport(
    args: GenerateOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateOrganizationsAccessReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateServiceLastAccessedDetailsCommand}
   */
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateServiceLastAccessedDetailsCommandOutput>;
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  generateServiceLastAccessedDetails(
    args: GenerateServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateServiceLastAccessedDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessKeyLastUsedCommand}
   */
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessKeyLastUsedCommandOutput>;
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;
  getAccessKeyLastUsed(
    args: GetAccessKeyLastUsedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessKeyLastUsedCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountAuthorizationDetailsCommand}
   */
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountAuthorizationDetailsCommandOutput>;
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;
  getAccountAuthorizationDetails(
    args: GetAccountAuthorizationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountAuthorizationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPasswordPolicyCommand}
   */
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPasswordPolicyCommandOutput>;
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;
  getAccountPasswordPolicy(
    args: GetAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPasswordPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSummaryCommand}
   */
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSummaryCommandOutput>;
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;
  getAccountSummary(
    args: GetAccountSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContextKeysForCustomPolicyCommand}
   */
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForCustomPolicyCommandOutput>;
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;
  getContextKeysForCustomPolicy(
    args: GetContextKeysForCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForCustomPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContextKeysForPrincipalPolicyCommand}
   */
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContextKeysForPrincipalPolicyCommandOutput>;
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;
  getContextKeysForPrincipalPolicy(
    args: GetContextKeysForPrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContextKeysForPrincipalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCredentialReportCommand}
   */
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCredentialReportCommandOutput>;
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;
  getCredentialReport(
    args: GetCredentialReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCredentialReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupPolicyCommand}
   */
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupPolicyCommandOutput>;
  getGroupPolicy(args: GetGroupPolicyCommandInput, cb: (err: any, data?: GetGroupPolicyCommandOutput) => void): void;
  getGroupPolicy(
    args: GetGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceProfileCommand}
   */
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceProfileCommandOutput>;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;
  getInstanceProfile(
    args: GetInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoginProfileCommand}
   */
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoginProfileCommandOutput>;
  getLoginProfile(args: GetLoginProfileCommandInput, cb: (err: any, data?: GetLoginProfileCommandOutput) => void): void;
  getLoginProfile(
    args: GetLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoginProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMFADeviceCommand}
   */
  getMFADevice(args: GetMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<GetMFADeviceCommandOutput>;
  getMFADevice(args: GetMFADeviceCommandInput, cb: (err: any, data?: GetMFADeviceCommandOutput) => void): void;
  getMFADevice(
    args: GetMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpenIDConnectProviderCommand}
   */
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpenIDConnectProviderCommandOutput>;
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;
  getOpenIDConnectProvider(
    args: GetOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationsAccessReportCommand}
   */
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationsAccessReportCommandOutput>;
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;
  getOrganizationsAccessReport(
    args: GetOrganizationsAccessReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationsAccessReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoleCommand}
   */
  getRole(args: GetRoleCommandInput, options?: __HttpHandlerOptions): Promise<GetRoleCommandOutput>;
  getRole(args: GetRoleCommandInput, cb: (err: any, data?: GetRoleCommandOutput) => void): void;
  getRole(
    args: GetRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRolePolicyCommand}
   */
  getRolePolicy(args: GetRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetRolePolicyCommandOutput>;
  getRolePolicy(args: GetRolePolicyCommandInput, cb: (err: any, data?: GetRolePolicyCommandOutput) => void): void;
  getRolePolicy(
    args: GetRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSAMLProviderCommand}
   */
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSAMLProviderCommandOutput>;
  getSAMLProvider(args: GetSAMLProviderCommandInput, cb: (err: any, data?: GetSAMLProviderCommandOutput) => void): void;
  getSAMLProvider(
    args: GetSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServerCertificateCommand}
   */
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServerCertificateCommandOutput>;
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;
  getServerCertificate(
    args: GetServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceLastAccessedDetailsCommand}
   */
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsCommandOutput>;
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;
  getServiceLastAccessedDetails(
    args: GetServiceLastAccessedDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLastAccessedDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceLastAccessedDetailsWithEntitiesCommand}
   */
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void
  ): void;
  getServiceLastAccessedDetailsWithEntities(
    args: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLastAccessedDetailsWithEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceLinkedRoleDeletionStatusCommand}
   */
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput>;
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void
  ): void;
  getServiceLinkedRoleDeletionStatus(
    args: GetServiceLinkedRoleDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceLinkedRoleDeletionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSSHPublicKeyCommand}
   */
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSSHPublicKeyCommandOutput>;
  getSSHPublicKey(args: GetSSHPublicKeyCommandInput, cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void): void;
  getSSHPublicKey(
    args: GetSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSSHPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserCommand}
   */
  getUser(args: GetUserCommandInput, options?: __HttpHandlerOptions): Promise<GetUserCommandOutput>;
  getUser(args: GetUserCommandInput, cb: (err: any, data?: GetUserCommandOutput) => void): void;
  getUser(
    args: GetUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUserPolicyCommand}
   */
  getUserPolicy(args: GetUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetUserPolicyCommandOutput>;
  getUserPolicy(args: GetUserPolicyCommandInput, cb: (err: any, data?: GetUserPolicyCommandOutput) => void): void;
  getUserPolicy(
    args: GetUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUserPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessKeysCommand}
   */
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessKeysCommandOutput>;
  listAccessKeys(args: ListAccessKeysCommandInput, cb: (err: any, data?: ListAccessKeysCommandOutput) => void): void;
  listAccessKeys(
    args: ListAccessKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAliasesCommand}
   */
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAliasesCommandOutput>;
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;
  listAccountAliases(
    args: ListAccountAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedGroupPoliciesCommand}
   */
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedGroupPoliciesCommandOutput>;
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;
  listAttachedGroupPolicies(
    args: ListAttachedGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedGroupPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedRolePoliciesCommand}
   */
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedRolePoliciesCommandOutput>;
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;
  listAttachedRolePolicies(
    args: ListAttachedRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedRolePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttachedUserPoliciesCommand}
   */
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedUserPoliciesCommandOutput>;
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;
  listAttachedUserPolicies(
    args: ListAttachedUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedUserPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesForPolicyCommand}
   */
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesForPolicyCommandOutput>;
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;
  listEntitiesForPolicy(
    args: ListEntitiesForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesForPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupPoliciesCommand}
   */
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupPoliciesCommandOutput>;
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;
  listGroupPolicies(
    args: ListGroupPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsForUserCommand}
   */
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsForUserCommandOutput>;
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;
  listGroupsForUser(
    args: ListGroupsForUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsForUserCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceProfilesCommand}
   */
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesCommandOutput>;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;
  listInstanceProfiles(
    args: ListInstanceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceProfilesForRoleCommand}
   */
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfilesForRoleCommandOutput>;
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;
  listInstanceProfilesForRole(
    args: ListInstanceProfilesForRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfilesForRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceProfileTagsCommand}
   */
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceProfileTagsCommandOutput>;
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;
  listInstanceProfileTags(
    args: ListInstanceProfileTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceProfileTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMFADevicesCommand}
   */
  listMFADevices(
    args: ListMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADevicesCommandOutput>;
  listMFADevices(args: ListMFADevicesCommandInput, cb: (err: any, data?: ListMFADevicesCommandOutput) => void): void;
  listMFADevices(
    args: ListMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMFADeviceTagsCommand}
   */
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMFADeviceTagsCommandOutput>;
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;
  listMFADeviceTags(
    args: ListMFADeviceTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMFADeviceTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpenIDConnectProvidersCommand}
   */
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProvidersCommandOutput>;
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;
  listOpenIDConnectProviders(
    args: ListOpenIDConnectProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpenIDConnectProviderTagsCommand}
   */
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenIDConnectProviderTagsCommandOutput>;
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;
  listOpenIDConnectProviderTags(
    args: ListOpenIDConnectProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenIDConnectProviderTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesGrantingServiceAccessCommand}
   */
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesGrantingServiceAccessCommandOutput>;
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void
  ): void;
  listPoliciesGrantingServiceAccess(
    args: ListPoliciesGrantingServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesGrantingServiceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyTagsCommand}
   */
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyTagsCommandOutput>;
  listPolicyTags(args: ListPolicyTagsCommandInput, cb: (err: any, data?: ListPolicyTagsCommandOutput) => void): void;
  listPolicyTags(
    args: ListPolicyTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRolePoliciesCommand}
   */
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRolePoliciesCommandOutput>;
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;
  listRolePolicies(
    args: ListRolePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRolesCommand}
   */
  listRoles(args: ListRolesCommandInput, options?: __HttpHandlerOptions): Promise<ListRolesCommandOutput>;
  listRoles(args: ListRolesCommandInput, cb: (err: any, data?: ListRolesCommandOutput) => void): void;
  listRoles(
    args: ListRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoleTagsCommand}
   */
  listRoleTags(args: ListRoleTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoleTagsCommandOutput>;
  listRoleTags(args: ListRoleTagsCommandInput, cb: (err: any, data?: ListRoleTagsCommandOutput) => void): void;
  listRoleTags(
    args: ListRoleTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoleTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSAMLProvidersCommand}
   */
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProvidersCommandOutput>;
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;
  listSAMLProviders(
    args: ListSAMLProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSAMLProviderTagsCommand}
   */
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSAMLProviderTagsCommandOutput>;
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;
  listSAMLProviderTags(
    args: ListSAMLProviderTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSAMLProviderTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServerCertificatesCommand}
   */
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificatesCommandOutput>;
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;
  listServerCertificates(
    args: ListServerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServerCertificateTagsCommand}
   */
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServerCertificateTagsCommandOutput>;
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;
  listServerCertificateTags(
    args: ListServerCertificateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServerCertificateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceSpecificCredentialsCommand}
   */
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceSpecificCredentialsCommandOutput>;
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;
  listServiceSpecificCredentials(
    args: ListServiceSpecificCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceSpecificCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSigningCertificatesCommand}
   */
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSigningCertificatesCommandOutput>;
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;
  listSigningCertificates(
    args: ListSigningCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSigningCertificatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSSHPublicKeysCommand}
   */
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSSHPublicKeysCommandOutput>;
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;
  listSSHPublicKeys(
    args: ListSSHPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSSHPublicKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserPoliciesCommand}
   */
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserPoliciesCommandOutput>;
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;
  listUserPolicies(
    args: ListUserPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserTagsCommand}
   */
  listUserTags(args: ListUserTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListUserTagsCommandOutput>;
  listUserTags(args: ListUserTagsCommandInput, cb: (err: any, data?: ListUserTagsCommandOutput) => void): void;
  listUserTags(
    args: ListUserTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVirtualMFADevicesCommand}
   */
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualMFADevicesCommandOutput>;
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;
  listVirtualMFADevices(
    args: ListVirtualMFADevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualMFADevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGroupPolicyCommand}
   */
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupPolicyCommandOutput>;
  putGroupPolicy(args: PutGroupPolicyCommandInput, cb: (err: any, data?: PutGroupPolicyCommandOutput) => void): void;
  putGroupPolicy(
    args: PutGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRolePermissionsBoundaryCommand}
   */
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRolePermissionsBoundaryCommandOutput>;
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;
  putRolePermissionsBoundary(
    args: PutRolePermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePermissionsBoundaryCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRolePolicyCommand}
   */
  putRolePolicy(args: PutRolePolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutRolePolicyCommandOutput>;
  putRolePolicy(args: PutRolePolicyCommandInput, cb: (err: any, data?: PutRolePolicyCommandOutput) => void): void;
  putRolePolicy(
    args: PutRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUserPermissionsBoundaryCommand}
   */
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutUserPermissionsBoundaryCommandOutput>;
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;
  putUserPermissionsBoundary(
    args: PutUserPermissionsBoundaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPermissionsBoundaryCommandOutput) => void
  ): void;

  /**
   * @see {@link PutUserPolicyCommand}
   */
  putUserPolicy(args: PutUserPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutUserPolicyCommandOutput>;
  putUserPolicy(args: PutUserPolicyCommandInput, cb: (err: any, data?: PutUserPolicyCommandOutput) => void): void;
  putUserPolicy(
    args: PutUserPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutUserPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveClientIDFromOpenIDConnectProviderCommand}
   */
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void
  ): void;
  removeClientIDFromOpenIDConnectProvider(
    args: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveClientIDFromOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveRoleFromInstanceProfileCommand}
   */
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRoleFromInstanceProfileCommandOutput>;
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;
  removeRoleFromInstanceProfile(
    args: RemoveRoleFromInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRoleFromInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveUserFromGroupCommand}
   */
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveUserFromGroupCommandOutput>;
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;
  removeUserFromGroup(
    args: RemoveUserFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveUserFromGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetServiceSpecificCredentialCommand}
   */
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetServiceSpecificCredentialCommandOutput>;
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;
  resetServiceSpecificCredential(
    args: ResetServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetServiceSpecificCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link ResyncMFADeviceCommand}
   */
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResyncMFADeviceCommandOutput>;
  resyncMFADevice(args: ResyncMFADeviceCommandInput, cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void): void;
  resyncMFADevice(
    args: ResyncMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResyncMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link SetDefaultPolicyVersionCommand}
   */
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetDefaultPolicyVersionCommandOutput>;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;
  setDefaultPolicyVersion(
    args: SetDefaultPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetDefaultPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link SetSecurityTokenServicePreferencesCommand}
   */
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSecurityTokenServicePreferencesCommandOutput>;
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void
  ): void;
  setSecurityTokenServicePreferences(
    args: SetSecurityTokenServicePreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSecurityTokenServicePreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link SimulateCustomPolicyCommand}
   */
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulateCustomPolicyCommandOutput>;
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;
  simulateCustomPolicy(
    args: SimulateCustomPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulateCustomPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SimulatePrincipalPolicyCommand}
   */
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SimulatePrincipalPolicyCommandOutput>;
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;
  simulatePrincipalPolicy(
    args: SimulatePrincipalPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SimulatePrincipalPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagInstanceProfileCommand}
   */
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagInstanceProfileCommandOutput>;
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;
  tagInstanceProfile(
    args: TagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link TagMFADeviceCommand}
   */
  tagMFADevice(args: TagMFADeviceCommandInput, options?: __HttpHandlerOptions): Promise<TagMFADeviceCommandOutput>;
  tagMFADevice(args: TagMFADeviceCommandInput, cb: (err: any, data?: TagMFADeviceCommandOutput) => void): void;
  tagMFADevice(
    args: TagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagOpenIDConnectProviderCommand}
   */
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagOpenIDConnectProviderCommandOutput>;
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;
  tagOpenIDConnectProvider(
    args: TagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagPolicyCommand}
   */
  tagPolicy(args: TagPolicyCommandInput, options?: __HttpHandlerOptions): Promise<TagPolicyCommandOutput>;
  tagPolicy(args: TagPolicyCommandInput, cb: (err: any, data?: TagPolicyCommandOutput) => void): void;
  tagPolicy(
    args: TagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagRoleCommand}
   */
  tagRole(args: TagRoleCommandInput, options?: __HttpHandlerOptions): Promise<TagRoleCommandOutput>;
  tagRole(args: TagRoleCommandInput, cb: (err: any, data?: TagRoleCommandOutput) => void): void;
  tagRole(
    args: TagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link TagSAMLProviderCommand}
   */
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagSAMLProviderCommandOutput>;
  tagSAMLProvider(args: TagSAMLProviderCommandInput, cb: (err: any, data?: TagSAMLProviderCommandOutput) => void): void;
  tagSAMLProvider(
    args: TagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link TagServerCertificateCommand}
   */
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagServerCertificateCommandOutput>;
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;
  tagServerCertificate(
    args: TagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link TagUserCommand}
   */
  tagUser(args: TagUserCommandInput, options?: __HttpHandlerOptions): Promise<TagUserCommandOutput>;
  tagUser(args: TagUserCommandInput, cb: (err: any, data?: TagUserCommandOutput) => void): void;
  tagUser(
    args: TagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagInstanceProfileCommand}
   */
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagInstanceProfileCommandOutput>;
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;
  untagInstanceProfile(
    args: UntagInstanceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagInstanceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagMFADeviceCommand}
   */
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagMFADeviceCommandOutput>;
  untagMFADevice(args: UntagMFADeviceCommandInput, cb: (err: any, data?: UntagMFADeviceCommandOutput) => void): void;
  untagMFADevice(
    args: UntagMFADeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagMFADeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagOpenIDConnectProviderCommand}
   */
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagOpenIDConnectProviderCommandOutput>;
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;
  untagOpenIDConnectProvider(
    args: UntagOpenIDConnectProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagOpenIDConnectProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagPolicyCommand}
   */
  untagPolicy(args: UntagPolicyCommandInput, options?: __HttpHandlerOptions): Promise<UntagPolicyCommandOutput>;
  untagPolicy(args: UntagPolicyCommandInput, cb: (err: any, data?: UntagPolicyCommandOutput) => void): void;
  untagPolicy(
    args: UntagPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagRoleCommand}
   */
  untagRole(args: UntagRoleCommandInput, options?: __HttpHandlerOptions): Promise<UntagRoleCommandOutput>;
  untagRole(args: UntagRoleCommandInput, cb: (err: any, data?: UntagRoleCommandOutput) => void): void;
  untagRole(
    args: UntagRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagSAMLProviderCommand}
   */
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagSAMLProviderCommandOutput>;
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;
  untagSAMLProvider(
    args: UntagSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagServerCertificateCommand}
   */
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagServerCertificateCommandOutput>;
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;
  untagServerCertificate(
    args: UntagServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagUserCommand}
   */
  untagUser(args: UntagUserCommandInput, options?: __HttpHandlerOptions): Promise<UntagUserCommandOutput>;
  untagUser(args: UntagUserCommandInput, cb: (err: any, data?: UntagUserCommandOutput) => void): void;
  untagUser(
    args: UntagUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessKeyCommand}
   */
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessKeyCommandOutput>;
  updateAccessKey(args: UpdateAccessKeyCommandInput, cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void): void;
  updateAccessKey(
    args: UpdateAccessKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountPasswordPolicyCommand}
   */
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountPasswordPolicyCommandOutput>;
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;
  updateAccountPasswordPolicy(
    args: UpdateAccountPasswordPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountPasswordPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssumeRolePolicyCommand}
   */
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssumeRolePolicyCommandOutput>;
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;
  updateAssumeRolePolicy(
    args: UpdateAssumeRolePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssumeRolePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoginProfileCommand}
   */
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoginProfileCommandOutput>;
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;
  updateLoginProfile(
    args: UpdateLoginProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoginProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpenIDConnectProviderThumbprintCommand}
   */
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput>;
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void
  ): void;
  updateOpenIDConnectProviderThumbprint(
    args: UpdateOpenIDConnectProviderThumbprintCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpenIDConnectProviderThumbprintCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleCommand}
   */
  updateRole(args: UpdateRoleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoleCommandOutput>;
  updateRole(args: UpdateRoleCommandInput, cb: (err: any, data?: UpdateRoleCommandOutput) => void): void;
  updateRole(
    args: UpdateRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoleDescriptionCommand}
   */
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRoleDescriptionCommandOutput>;
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;
  updateRoleDescription(
    args: UpdateRoleDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoleDescriptionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSAMLProviderCommand}
   */
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSAMLProviderCommandOutput>;
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;
  updateSAMLProvider(
    args: UpdateSAMLProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSAMLProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServerCertificateCommand}
   */
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServerCertificateCommandOutput>;
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;
  updateServerCertificate(
    args: UpdateServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceSpecificCredentialCommand}
   */
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSpecificCredentialCommandOutput>;
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;
  updateServiceSpecificCredential(
    args: UpdateServiceSpecificCredentialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSpecificCredentialCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSigningCertificateCommand}
   */
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSigningCertificateCommandOutput>;
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;
  updateSigningCertificate(
    args: UpdateSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSigningCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSSHPublicKeyCommand}
   */
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSSHPublicKeyCommandOutput>;
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;
  updateSSHPublicKey(
    args: UpdateSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSSHPublicKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserCommand}
   */
  updateUser(args: UpdateUserCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserCommandOutput>;
  updateUser(args: UpdateUserCommandInput, cb: (err: any, data?: UpdateUserCommandOutput) => void): void;
  updateUser(
    args: UpdateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadServerCertificateCommand}
   */
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadServerCertificateCommandOutput>;
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;
  uploadServerCertificate(
    args: UploadServerCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadServerCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadSigningCertificateCommand}
   */
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSigningCertificateCommandOutput>;
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;
  uploadSigningCertificate(
    args: UploadSigningCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSigningCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link UploadSSHPublicKeyCommand}
   */
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UploadSSHPublicKeyCommandOutput>;
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
  uploadSSHPublicKey(
    args: UploadSSHPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UploadSSHPublicKeyCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Identity and Access Management</fullname>
 *          <p>Identity and Access Management (IAM) is a web service for securely controlling
 *       access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which Amazon Web Services resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>
 */
export class IAM extends IAMClient implements IAM {}
createAggregatedClient(commands, IAM);
