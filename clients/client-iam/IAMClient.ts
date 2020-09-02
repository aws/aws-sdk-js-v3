import {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand";
import { AddUserToGroupCommandInput, AddUserToGroupCommandOutput } from "./commands/AddUserToGroupCommand";
import { AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput } from "./commands/AttachGroupPolicyCommand";
import { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput } from "./commands/AttachRolePolicyCommand";
import { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput } from "./commands/AttachUserPolicyCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput } from "./commands/CreateAccessKeyCommand";
import { CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput } from "./commands/CreateAccountAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import { CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput } from "./commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import { CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand";
import { CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput } from "./commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand";
import { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput } from "./commands/DeleteAccessKeyCommand";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput } from "./commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput } from "./commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import { DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput } from "./commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import { DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand";
import { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput } from "./commands/DeleteRolePolicyCommand";
import { DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput } from "./commands/DeleteSAMLProviderCommand";
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "./commands/DeleteSSHPublicKeyCommand";
import {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand";
import { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput } from "./commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand";
import { DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput } from "./commands/DetachGroupPolicyCommand";
import { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput } from "./commands/DetachRolePolicyCommand";
import { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput } from "./commands/DetachUserPolicyCommand";
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "./commands/EnableMFADeviceCommand";
import {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand";
import { GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput } from "./commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput } from "./commands/GetGroupPolicyCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand";
import { GetLoginProfileCommandInput, GetLoginProfileCommandOutput } from "./commands/GetLoginProfileCommand";
import {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import { GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand";
import { GetRolePolicyCommandInput, GetRolePolicyCommandOutput } from "./commands/GetRolePolicyCommand";
import { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput } from "./commands/GetSAMLProviderCommand";
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "./commands/GetSSHPublicKeyCommand";
import {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetUserPolicyCommandInput, GetUserPolicyCommandOutput } from "./commands/GetUserPolicyCommand";
import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "./commands/ListAccessKeysCommand";
import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput } from "./commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand";
import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput } from "./commands/ListGroupPoliciesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "./commands/ListGroupsForUserCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "./commands/ListMFADevicesCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "./commands/ListRolePoliciesCommand";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "./commands/ListRoleTagsCommand";
import { ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "./commands/ListSAMLProvidersCommand";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "./commands/ListSSHPublicKeysCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "./commands/ListUserPoliciesCommand";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "./commands/ListUserTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand";
import { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput } from "./commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand";
import { PutRolePolicyCommandInput, PutRolePolicyCommandOutput } from "./commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand";
import { PutUserPolicyCommandInput, PutUserPolicyCommandOutput } from "./commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand";
import { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput } from "./commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand";
import { TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import { TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import { UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand";
import { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput } from "./commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput } from "./commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand";
import { UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput } from "./commands/UpdateSAMLProviderCommand";
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "./commands/UpdateSSHPublicKeyCommand";
import {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "./commands/UploadSSHPublicKeyCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddClientIDToOpenIDConnectProviderCommandInput
  | AddRoleToInstanceProfileCommandInput
  | AddUserToGroupCommandInput
  | AttachGroupPolicyCommandInput
  | AttachRolePolicyCommandInput
  | AttachUserPolicyCommandInput
  | ChangePasswordCommandInput
  | CreateAccessKeyCommandInput
  | CreateAccountAliasCommandInput
  | CreateGroupCommandInput
  | CreateInstanceProfileCommandInput
  | CreateLoginProfileCommandInput
  | CreateOpenIDConnectProviderCommandInput
  | CreatePolicyCommandInput
  | CreatePolicyVersionCommandInput
  | CreateRoleCommandInput
  | CreateSAMLProviderCommandInput
  | CreateServiceLinkedRoleCommandInput
  | CreateServiceSpecificCredentialCommandInput
  | CreateUserCommandInput
  | CreateVirtualMFADeviceCommandInput
  | DeactivateMFADeviceCommandInput
  | DeleteAccessKeyCommandInput
  | DeleteAccountAliasCommandInput
  | DeleteAccountPasswordPolicyCommandInput
  | DeleteGroupCommandInput
  | DeleteGroupPolicyCommandInput
  | DeleteInstanceProfileCommandInput
  | DeleteLoginProfileCommandInput
  | DeleteOpenIDConnectProviderCommandInput
  | DeletePolicyCommandInput
  | DeletePolicyVersionCommandInput
  | DeleteRoleCommandInput
  | DeleteRolePermissionsBoundaryCommandInput
  | DeleteRolePolicyCommandInput
  | DeleteSAMLProviderCommandInput
  | DeleteSSHPublicKeyCommandInput
  | DeleteServerCertificateCommandInput
  | DeleteServiceLinkedRoleCommandInput
  | DeleteServiceSpecificCredentialCommandInput
  | DeleteSigningCertificateCommandInput
  | DeleteUserCommandInput
  | DeleteUserPermissionsBoundaryCommandInput
  | DeleteUserPolicyCommandInput
  | DeleteVirtualMFADeviceCommandInput
  | DetachGroupPolicyCommandInput
  | DetachRolePolicyCommandInput
  | DetachUserPolicyCommandInput
  | EnableMFADeviceCommandInput
  | GenerateCredentialReportCommandInput
  | GenerateOrganizationsAccessReportCommandInput
  | GenerateServiceLastAccessedDetailsCommandInput
  | GetAccessKeyLastUsedCommandInput
  | GetAccountAuthorizationDetailsCommandInput
  | GetAccountPasswordPolicyCommandInput
  | GetAccountSummaryCommandInput
  | GetContextKeysForCustomPolicyCommandInput
  | GetContextKeysForPrincipalPolicyCommandInput
  | GetCredentialReportCommandInput
  | GetGroupCommandInput
  | GetGroupPolicyCommandInput
  | GetInstanceProfileCommandInput
  | GetLoginProfileCommandInput
  | GetOpenIDConnectProviderCommandInput
  | GetOrganizationsAccessReportCommandInput
  | GetPolicyCommandInput
  | GetPolicyVersionCommandInput
  | GetRoleCommandInput
  | GetRolePolicyCommandInput
  | GetSAMLProviderCommandInput
  | GetSSHPublicKeyCommandInput
  | GetServerCertificateCommandInput
  | GetServiceLastAccessedDetailsCommandInput
  | GetServiceLastAccessedDetailsWithEntitiesCommandInput
  | GetServiceLinkedRoleDeletionStatusCommandInput
  | GetUserCommandInput
  | GetUserPolicyCommandInput
  | ListAccessKeysCommandInput
  | ListAccountAliasesCommandInput
  | ListAttachedGroupPoliciesCommandInput
  | ListAttachedRolePoliciesCommandInput
  | ListAttachedUserPoliciesCommandInput
  | ListEntitiesForPolicyCommandInput
  | ListGroupPoliciesCommandInput
  | ListGroupsCommandInput
  | ListGroupsForUserCommandInput
  | ListInstanceProfilesCommandInput
  | ListInstanceProfilesForRoleCommandInput
  | ListMFADevicesCommandInput
  | ListOpenIDConnectProvidersCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesGrantingServiceAccessCommandInput
  | ListPolicyVersionsCommandInput
  | ListRolePoliciesCommandInput
  | ListRoleTagsCommandInput
  | ListRolesCommandInput
  | ListSAMLProvidersCommandInput
  | ListSSHPublicKeysCommandInput
  | ListServerCertificatesCommandInput
  | ListServiceSpecificCredentialsCommandInput
  | ListSigningCertificatesCommandInput
  | ListUserPoliciesCommandInput
  | ListUserTagsCommandInput
  | ListUsersCommandInput
  | ListVirtualMFADevicesCommandInput
  | PutGroupPolicyCommandInput
  | PutRolePermissionsBoundaryCommandInput
  | PutRolePolicyCommandInput
  | PutUserPermissionsBoundaryCommandInput
  | PutUserPolicyCommandInput
  | RemoveClientIDFromOpenIDConnectProviderCommandInput
  | RemoveRoleFromInstanceProfileCommandInput
  | RemoveUserFromGroupCommandInput
  | ResetServiceSpecificCredentialCommandInput
  | ResyncMFADeviceCommandInput
  | SetDefaultPolicyVersionCommandInput
  | SetSecurityTokenServicePreferencesCommandInput
  | SimulateCustomPolicyCommandInput
  | SimulatePrincipalPolicyCommandInput
  | TagRoleCommandInput
  | TagUserCommandInput
  | UntagRoleCommandInput
  | UntagUserCommandInput
  | UpdateAccessKeyCommandInput
  | UpdateAccountPasswordPolicyCommandInput
  | UpdateAssumeRolePolicyCommandInput
  | UpdateGroupCommandInput
  | UpdateLoginProfileCommandInput
  | UpdateOpenIDConnectProviderThumbprintCommandInput
  | UpdateRoleCommandInput
  | UpdateRoleDescriptionCommandInput
  | UpdateSAMLProviderCommandInput
  | UpdateSSHPublicKeyCommandInput
  | UpdateServerCertificateCommandInput
  | UpdateServiceSpecificCredentialCommandInput
  | UpdateSigningCertificateCommandInput
  | UpdateUserCommandInput
  | UploadSSHPublicKeyCommandInput
  | UploadServerCertificateCommandInput
  | UploadSigningCertificateCommandInput;

export type ServiceOutputTypes =
  | AddClientIDToOpenIDConnectProviderCommandOutput
  | AddRoleToInstanceProfileCommandOutput
  | AddUserToGroupCommandOutput
  | AttachGroupPolicyCommandOutput
  | AttachRolePolicyCommandOutput
  | AttachUserPolicyCommandOutput
  | ChangePasswordCommandOutput
  | CreateAccessKeyCommandOutput
  | CreateAccountAliasCommandOutput
  | CreateGroupCommandOutput
  | CreateInstanceProfileCommandOutput
  | CreateLoginProfileCommandOutput
  | CreateOpenIDConnectProviderCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicyVersionCommandOutput
  | CreateRoleCommandOutput
  | CreateSAMLProviderCommandOutput
  | CreateServiceLinkedRoleCommandOutput
  | CreateServiceSpecificCredentialCommandOutput
  | CreateUserCommandOutput
  | CreateVirtualMFADeviceCommandOutput
  | DeactivateMFADeviceCommandOutput
  | DeleteAccessKeyCommandOutput
  | DeleteAccountAliasCommandOutput
  | DeleteAccountPasswordPolicyCommandOutput
  | DeleteGroupCommandOutput
  | DeleteGroupPolicyCommandOutput
  | DeleteInstanceProfileCommandOutput
  | DeleteLoginProfileCommandOutput
  | DeleteOpenIDConnectProviderCommandOutput
  | DeletePolicyCommandOutput
  | DeletePolicyVersionCommandOutput
  | DeleteRoleCommandOutput
  | DeleteRolePermissionsBoundaryCommandOutput
  | DeleteRolePolicyCommandOutput
  | DeleteSAMLProviderCommandOutput
  | DeleteSSHPublicKeyCommandOutput
  | DeleteServerCertificateCommandOutput
  | DeleteServiceLinkedRoleCommandOutput
  | DeleteServiceSpecificCredentialCommandOutput
  | DeleteSigningCertificateCommandOutput
  | DeleteUserCommandOutput
  | DeleteUserPermissionsBoundaryCommandOutput
  | DeleteUserPolicyCommandOutput
  | DeleteVirtualMFADeviceCommandOutput
  | DetachGroupPolicyCommandOutput
  | DetachRolePolicyCommandOutput
  | DetachUserPolicyCommandOutput
  | EnableMFADeviceCommandOutput
  | GenerateCredentialReportCommandOutput
  | GenerateOrganizationsAccessReportCommandOutput
  | GenerateServiceLastAccessedDetailsCommandOutput
  | GetAccessKeyLastUsedCommandOutput
  | GetAccountAuthorizationDetailsCommandOutput
  | GetAccountPasswordPolicyCommandOutput
  | GetAccountSummaryCommandOutput
  | GetContextKeysForCustomPolicyCommandOutput
  | GetContextKeysForPrincipalPolicyCommandOutput
  | GetCredentialReportCommandOutput
  | GetGroupCommandOutput
  | GetGroupPolicyCommandOutput
  | GetInstanceProfileCommandOutput
  | GetLoginProfileCommandOutput
  | GetOpenIDConnectProviderCommandOutput
  | GetOrganizationsAccessReportCommandOutput
  | GetPolicyCommandOutput
  | GetPolicyVersionCommandOutput
  | GetRoleCommandOutput
  | GetRolePolicyCommandOutput
  | GetSAMLProviderCommandOutput
  | GetSSHPublicKeyCommandOutput
  | GetServerCertificateCommandOutput
  | GetServiceLastAccessedDetailsCommandOutput
  | GetServiceLastAccessedDetailsWithEntitiesCommandOutput
  | GetServiceLinkedRoleDeletionStatusCommandOutput
  | GetUserCommandOutput
  | GetUserPolicyCommandOutput
  | ListAccessKeysCommandOutput
  | ListAccountAliasesCommandOutput
  | ListAttachedGroupPoliciesCommandOutput
  | ListAttachedRolePoliciesCommandOutput
  | ListAttachedUserPoliciesCommandOutput
  | ListEntitiesForPolicyCommandOutput
  | ListGroupPoliciesCommandOutput
  | ListGroupsCommandOutput
  | ListGroupsForUserCommandOutput
  | ListInstanceProfilesCommandOutput
  | ListInstanceProfilesForRoleCommandOutput
  | ListMFADevicesCommandOutput
  | ListOpenIDConnectProvidersCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesGrantingServiceAccessCommandOutput
  | ListPolicyVersionsCommandOutput
  | ListRolePoliciesCommandOutput
  | ListRoleTagsCommandOutput
  | ListRolesCommandOutput
  | ListSAMLProvidersCommandOutput
  | ListSSHPublicKeysCommandOutput
  | ListServerCertificatesCommandOutput
  | ListServiceSpecificCredentialsCommandOutput
  | ListSigningCertificatesCommandOutput
  | ListUserPoliciesCommandOutput
  | ListUserTagsCommandOutput
  | ListUsersCommandOutput
  | ListVirtualMFADevicesCommandOutput
  | PutGroupPolicyCommandOutput
  | PutRolePermissionsBoundaryCommandOutput
  | PutRolePolicyCommandOutput
  | PutUserPermissionsBoundaryCommandOutput
  | PutUserPolicyCommandOutput
  | RemoveClientIDFromOpenIDConnectProviderCommandOutput
  | RemoveRoleFromInstanceProfileCommandOutput
  | RemoveUserFromGroupCommandOutput
  | ResetServiceSpecificCredentialCommandOutput
  | ResyncMFADeviceCommandOutput
  | SetDefaultPolicyVersionCommandOutput
  | SetSecurityTokenServicePreferencesCommandOutput
  | SimulateCustomPolicyCommandOutput
  | SimulatePrincipalPolicyCommandOutput
  | TagRoleCommandOutput
  | TagUserCommandOutput
  | UntagRoleCommandOutput
  | UntagUserCommandOutput
  | UpdateAccessKeyCommandOutput
  | UpdateAccountPasswordPolicyCommandOutput
  | UpdateAssumeRolePolicyCommandOutput
  | UpdateGroupCommandOutput
  | UpdateLoginProfileCommandOutput
  | UpdateOpenIDConnectProviderThumbprintCommandOutput
  | UpdateRoleCommandOutput
  | UpdateRoleDescriptionCommandOutput
  | UpdateSAMLProviderCommandOutput
  | UpdateSSHPublicKeyCommandOutput
  | UpdateServerCertificateCommandOutput
  | UpdateServiceSpecificCredentialCommandOutput
  | UpdateSigningCertificateCommandOutput
  | UpdateUserCommandOutput
  | UploadSSHPublicKeyCommandOutput
  | UploadServerCertificateCommandOutput
  | UploadSigningCertificateCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type IAMClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IAMClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service for securely controlling
 *       access to AWS services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which AWS resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">AWS Identity and Access Management User Guide</a>.</p>
 */
export class IAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IAMClientResolvedConfig
> {
  readonly config: IAMClientResolvedConfig;

  constructor(configuration: IAMClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
