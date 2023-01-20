// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "./commands/DeleteSSHPublicKeyCommand";
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
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "./commands/GetSSHPublicKeyCommand";
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
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "./commands/ListMFADevicesCommand";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput } from "./commands/ListMFADeviceTagsCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput } from "./commands/ListPolicyTagsCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "./commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "./commands/ListRolePoliciesCommand";
import { ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "./commands/ListRoleTagsCommand";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "./commands/ListSAMLProvidersCommand";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "./commands/ListSSHPublicKeysCommand";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "./commands/ListUserPoliciesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "./commands/ListUserTagsCommand";
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
import { TagInstanceProfileCommandInput, TagInstanceProfileCommandOutput } from "./commands/TagInstanceProfileCommand";
import { TagMFADeviceCommandInput, TagMFADeviceCommandOutput } from "./commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand";
import { TagPolicyCommandInput, TagPolicyCommandOutput } from "./commands/TagPolicyCommand";
import { TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import { TagSAMLProviderCommandInput, TagSAMLProviderCommandOutput } from "./commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand";
import { TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand";
import { UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput } from "./commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand";
import { UntagPolicyCommandInput, UntagPolicyCommandOutput } from "./commands/UntagPolicyCommand";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import { UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput } from "./commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand";
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
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "./commands/UpdateSSHPublicKeyCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "./commands/UploadSSHPublicKeyCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

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
  | ListInstanceProfileTagsCommandInput
  | ListInstanceProfilesCommandInput
  | ListInstanceProfilesForRoleCommandInput
  | ListMFADeviceTagsCommandInput
  | ListMFADevicesCommandInput
  | ListOpenIDConnectProviderTagsCommandInput
  | ListOpenIDConnectProvidersCommandInput
  | ListPoliciesCommandInput
  | ListPoliciesGrantingServiceAccessCommandInput
  | ListPolicyTagsCommandInput
  | ListPolicyVersionsCommandInput
  | ListRolePoliciesCommandInput
  | ListRoleTagsCommandInput
  | ListRolesCommandInput
  | ListSAMLProviderTagsCommandInput
  | ListSAMLProvidersCommandInput
  | ListSSHPublicKeysCommandInput
  | ListServerCertificateTagsCommandInput
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
  | TagInstanceProfileCommandInput
  | TagMFADeviceCommandInput
  | TagOpenIDConnectProviderCommandInput
  | TagPolicyCommandInput
  | TagRoleCommandInput
  | TagSAMLProviderCommandInput
  | TagServerCertificateCommandInput
  | TagUserCommandInput
  | UntagInstanceProfileCommandInput
  | UntagMFADeviceCommandInput
  | UntagOpenIDConnectProviderCommandInput
  | UntagPolicyCommandInput
  | UntagRoleCommandInput
  | UntagSAMLProviderCommandInput
  | UntagServerCertificateCommandInput
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
  | ListInstanceProfileTagsCommandOutput
  | ListInstanceProfilesCommandOutput
  | ListInstanceProfilesForRoleCommandOutput
  | ListMFADeviceTagsCommandOutput
  | ListMFADevicesCommandOutput
  | ListOpenIDConnectProviderTagsCommandOutput
  | ListOpenIDConnectProvidersCommandOutput
  | ListPoliciesCommandOutput
  | ListPoliciesGrantingServiceAccessCommandOutput
  | ListPolicyTagsCommandOutput
  | ListPolicyVersionsCommandOutput
  | ListRolePoliciesCommandOutput
  | ListRoleTagsCommandOutput
  | ListRolesCommandOutput
  | ListSAMLProviderTagsCommandOutput
  | ListSAMLProvidersCommandOutput
  | ListSSHPublicKeysCommandOutput
  | ListServerCertificateTagsCommandOutput
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
  | TagInstanceProfileCommandOutput
  | TagMFADeviceCommandOutput
  | TagOpenIDConnectProviderCommandOutput
  | TagPolicyCommandOutput
  | TagRoleCommandOutput
  | TagSAMLProviderCommandOutput
  | TagServerCertificateCommandOutput
  | TagUserCommandOutput
  | UntagInstanceProfileCommandOutput
  | UntagMFADeviceCommandOutput
  | UntagOpenIDConnectProviderCommandOutput
  | UntagPolicyCommandOutput
  | UntagRoleCommandOutput
  | UntagSAMLProviderCommandOutput
  | UntagServerCertificateCommandOutput
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
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type IAMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IAMClient class constructor that set the region, credentials and other options.
 */
export interface IAMClientConfig extends IAMClientConfigType {}

type IAMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IAMClient class. This is resolved and normalized from the {@link IAMClientConfig | constructor configuration interface}.
 */
export interface IAMClientResolvedConfig extends IAMClientResolvedConfigType {}

/**
 * <fullname>Identity and Access Management</fullname>
 *          <p>Identity and Access Management (IAM) is a web service for securely controlling
 *       access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which Amazon Web Services resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>
 */
export class IAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IAMClientResolvedConfig
> {
  /**
   * The resolved configuration of IAMClient class. This is resolved and normalized from the {@link IAMClientConfig | constructor configuration interface}.
   */
  readonly config: IAMClientResolvedConfig;

  constructor(configuration: IAMClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
