// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultIAMHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptDelegationRequestCommandInput,
  AcceptDelegationRequestCommandOutput,
} from "./commands/AcceptDelegationRequestCommand";
import type {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "./commands/AddClientIDToOpenIDConnectProviderCommand";
import type {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "./commands/AddRoleToInstanceProfileCommand";
import type { AddUserToGroupCommandInput, AddUserToGroupCommandOutput } from "./commands/AddUserToGroupCommand";
import type {
  AssociateDelegationRequestCommandInput,
  AssociateDelegationRequestCommandOutput,
} from "./commands/AssociateDelegationRequestCommand";
import type {
  AttachGroupPolicyCommandInput,
  AttachGroupPolicyCommandOutput,
} from "./commands/AttachGroupPolicyCommand";
import type { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput } from "./commands/AttachRolePolicyCommand";
import type { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput } from "./commands/AttachUserPolicyCommand";
import type { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "./commands/ChangePasswordCommand";
import type { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput } from "./commands/CreateAccessKeyCommand";
import type {
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
} from "./commands/CreateAccountAliasCommand";
import type {
  CreateDelegationRequestCommandInput,
  CreateDelegationRequestCommandOutput,
} from "./commands/CreateDelegationRequestCommand";
import type { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import type {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import type {
  CreateLoginProfileCommandInput,
  CreateLoginProfileCommandOutput,
} from "./commands/CreateLoginProfileCommand";
import type {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "./commands/CreateOpenIDConnectProviderCommand";
import type { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import type {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "./commands/CreatePolicyVersionCommand";
import type { CreateRoleCommandInput, CreateRoleCommandOutput } from "./commands/CreateRoleCommand";
import type {
  CreateSAMLProviderCommandInput,
  CreateSAMLProviderCommandOutput,
} from "./commands/CreateSAMLProviderCommand";
import type {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "./commands/CreateServiceLinkedRoleCommand";
import type {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "./commands/CreateServiceSpecificCredentialCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "./commands/CreateVirtualMFADeviceCommand";
import type {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "./commands/DeactivateMFADeviceCommand";
import type { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput } from "./commands/DeleteAccessKeyCommand";
import type {
  DeleteAccountAliasCommandInput,
  DeleteAccountAliasCommandOutput,
} from "./commands/DeleteAccountAliasCommand";
import type {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "./commands/DeleteAccountPasswordPolicyCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type {
  DeleteGroupPolicyCommandInput,
  DeleteGroupPolicyCommandOutput,
} from "./commands/DeleteGroupPolicyCommand";
import type {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import type {
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
} from "./commands/DeleteLoginProfileCommand";
import type {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "./commands/DeleteOpenIDConnectProviderCommand";
import type { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import type {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "./commands/DeletePolicyVersionCommand";
import type { DeleteRoleCommandInput, DeleteRoleCommandOutput } from "./commands/DeleteRoleCommand";
import type {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "./commands/DeleteRolePermissionsBoundaryCommand";
import type { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput } from "./commands/DeleteRolePolicyCommand";
import type {
  DeleteSAMLProviderCommandInput,
  DeleteSAMLProviderCommandOutput,
} from "./commands/DeleteSAMLProviderCommand";
import type {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "./commands/DeleteServerCertificateCommand";
import type {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "./commands/DeleteServiceLinkedRoleCommand";
import type {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "./commands/DeleteServiceSpecificCredentialCommand";
import type {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "./commands/DeleteSigningCertificateCommand";
import type {
  DeleteSSHPublicKeyCommandInput,
  DeleteSSHPublicKeyCommandOutput,
} from "./commands/DeleteSSHPublicKeyCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "./commands/DeleteUserPermissionsBoundaryCommand";
import type { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput } from "./commands/DeleteUserPolicyCommand";
import type {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "./commands/DeleteVirtualMFADeviceCommand";
import type {
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
} from "./commands/DetachGroupPolicyCommand";
import type { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput } from "./commands/DetachRolePolicyCommand";
import type { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput } from "./commands/DetachUserPolicyCommand";
import type {
  DisableOrganizationsRootCredentialsManagementCommandInput,
  DisableOrganizationsRootCredentialsManagementCommandOutput,
} from "./commands/DisableOrganizationsRootCredentialsManagementCommand";
import type {
  DisableOrganizationsRootSessionsCommandInput,
  DisableOrganizationsRootSessionsCommandOutput,
} from "./commands/DisableOrganizationsRootSessionsCommand";
import type {
  DisableOutboundWebIdentityFederationCommandInput,
  DisableOutboundWebIdentityFederationCommandOutput,
} from "./commands/DisableOutboundWebIdentityFederationCommand";
import type { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "./commands/EnableMFADeviceCommand";
import type {
  EnableOrganizationsRootCredentialsManagementCommandInput,
  EnableOrganizationsRootCredentialsManagementCommandOutput,
} from "./commands/EnableOrganizationsRootCredentialsManagementCommand";
import type {
  EnableOrganizationsRootSessionsCommandInput,
  EnableOrganizationsRootSessionsCommandOutput,
} from "./commands/EnableOrganizationsRootSessionsCommand";
import type {
  EnableOutboundWebIdentityFederationCommandInput,
  EnableOutboundWebIdentityFederationCommandOutput,
} from "./commands/EnableOutboundWebIdentityFederationCommand";
import type {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "./commands/GenerateCredentialReportCommand";
import type {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "./commands/GenerateOrganizationsAccessReportCommand";
import type {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "./commands/GenerateServiceLastAccessedDetailsCommand";
import type {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "./commands/GetAccessKeyLastUsedCommand";
import type {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "./commands/GetAccountAuthorizationDetailsCommand";
import type {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "./commands/GetAccountPasswordPolicyCommand";
import type {
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
} from "./commands/GetAccountSummaryCommand";
import type {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "./commands/GetContextKeysForCustomPolicyCommand";
import type {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "./commands/GetContextKeysForPrincipalPolicyCommand";
import type {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "./commands/GetCredentialReportCommand";
import type {
  GetDelegationRequestCommandInput,
  GetDelegationRequestCommandOutput,
} from "./commands/GetDelegationRequestCommand";
import type { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import type { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput } from "./commands/GetGroupPolicyCommand";
import type {
  GetHumanReadableSummaryCommandInput,
  GetHumanReadableSummaryCommandOutput,
} from "./commands/GetHumanReadableSummaryCommand";
import type {
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput,
} from "./commands/GetInstanceProfileCommand";
import type { GetLoginProfileCommandInput, GetLoginProfileCommandOutput } from "./commands/GetLoginProfileCommand";
import type { GetMFADeviceCommandInput, GetMFADeviceCommandOutput } from "./commands/GetMFADeviceCommand";
import type {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "./commands/GetOpenIDConnectProviderCommand";
import type {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "./commands/GetOrganizationsAccessReportCommand";
import type {
  GetOutboundWebIdentityFederationInfoCommandInput,
  GetOutboundWebIdentityFederationInfoCommandOutput,
} from "./commands/GetOutboundWebIdentityFederationInfoCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "./commands/GetPolicyVersionCommand";
import type { GetRoleCommandInput, GetRoleCommandOutput } from "./commands/GetRoleCommand";
import type { GetRolePolicyCommandInput, GetRolePolicyCommandOutput } from "./commands/GetRolePolicyCommand";
import type { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput } from "./commands/GetSAMLProviderCommand";
import type {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "./commands/GetServerCertificateCommand";
import type {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsCommand";
import type {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "./commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import type {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "./commands/GetServiceLinkedRoleDeletionStatusCommand";
import type { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "./commands/GetSSHPublicKeyCommand";
import type { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import type { GetUserPolicyCommandInput, GetUserPolicyCommandOutput } from "./commands/GetUserPolicyCommand";
import type { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "./commands/ListAccessKeysCommand";
import type {
  ListAccountAliasesCommandInput,
  ListAccountAliasesCommandOutput,
} from "./commands/ListAccountAliasesCommand";
import type {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "./commands/ListAttachedGroupPoliciesCommand";
import type {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "./commands/ListAttachedRolePoliciesCommand";
import type {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "./commands/ListAttachedUserPoliciesCommand";
import type {
  ListDelegationRequestsCommandInput,
  ListDelegationRequestsCommandOutput,
} from "./commands/ListDelegationRequestsCommand";
import type {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "./commands/ListEntitiesForPolicyCommand";
import type {
  ListGroupPoliciesCommandInput,
  ListGroupPoliciesCommandOutput,
} from "./commands/ListGroupPoliciesCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type {
  ListGroupsForUserCommandInput,
  ListGroupsForUserCommandOutput,
} from "./commands/ListGroupsForUserCommand";
import type {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import type {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "./commands/ListInstanceProfilesForRoleCommand";
import type {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "./commands/ListInstanceProfileTagsCommand";
import type { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "./commands/ListMFADevicesCommand";
import type {
  ListMFADeviceTagsCommandInput,
  ListMFADeviceTagsCommandOutput,
} from "./commands/ListMFADeviceTagsCommand";
import type {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "./commands/ListOpenIDConnectProvidersCommand";
import type {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "./commands/ListOpenIDConnectProviderTagsCommand";
import type {
  ListOrganizationsFeaturesCommandInput,
  ListOrganizationsFeaturesCommandOutput,
} from "./commands/ListOrganizationsFeaturesCommand";
import type { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import type {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "./commands/ListPoliciesGrantingServiceAccessCommand";
import type { ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput } from "./commands/ListPolicyTagsCommand";
import type {
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import type { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "./commands/ListRolePoliciesCommand";
import type { ListRolesCommandInput, ListRolesCommandOutput } from "./commands/ListRolesCommand";
import type { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "./commands/ListRoleTagsCommand";
import type {
  ListSAMLProvidersCommandInput,
  ListSAMLProvidersCommandOutput,
} from "./commands/ListSAMLProvidersCommand";
import type {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "./commands/ListSAMLProviderTagsCommand";
import type {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "./commands/ListServerCertificatesCommand";
import type {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "./commands/ListServerCertificateTagsCommand";
import type {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "./commands/ListServiceSpecificCredentialsCommand";
import type {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "./commands/ListSigningCertificatesCommand";
import type {
  ListSSHPublicKeysCommandInput,
  ListSSHPublicKeysCommandOutput,
} from "./commands/ListSSHPublicKeysCommand";
import type { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "./commands/ListUserPoliciesCommand";
import type { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import type { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "./commands/ListUserTagsCommand";
import type {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "./commands/ListVirtualMFADevicesCommand";
import type { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput } from "./commands/PutGroupPolicyCommand";
import type {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "./commands/PutRolePermissionsBoundaryCommand";
import type { PutRolePolicyCommandInput, PutRolePolicyCommandOutput } from "./commands/PutRolePolicyCommand";
import type {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "./commands/PutUserPermissionsBoundaryCommand";
import type { PutUserPolicyCommandInput, PutUserPolicyCommandOutput } from "./commands/PutUserPolicyCommand";
import type {
  RejectDelegationRequestCommandInput,
  RejectDelegationRequestCommandOutput,
} from "./commands/RejectDelegationRequestCommand";
import type {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "./commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import type {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "./commands/RemoveRoleFromInstanceProfileCommand";
import type {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "./commands/RemoveUserFromGroupCommand";
import type {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "./commands/ResetServiceSpecificCredentialCommand";
import type { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput } from "./commands/ResyncMFADeviceCommand";
import type {
  SendDelegationTokenCommandInput,
  SendDelegationTokenCommandOutput,
} from "./commands/SendDelegationTokenCommand";
import type {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "./commands/SetDefaultPolicyVersionCommand";
import type {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "./commands/SetSecurityTokenServicePreferencesCommand";
import type {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "./commands/SimulateCustomPolicyCommand";
import type {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "./commands/SimulatePrincipalPolicyCommand";
import type {
  TagInstanceProfileCommandInput,
  TagInstanceProfileCommandOutput,
} from "./commands/TagInstanceProfileCommand";
import type { TagMFADeviceCommandInput, TagMFADeviceCommandOutput } from "./commands/TagMFADeviceCommand";
import type {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "./commands/TagOpenIDConnectProviderCommand";
import type { TagPolicyCommandInput, TagPolicyCommandOutput } from "./commands/TagPolicyCommand";
import type { TagRoleCommandInput, TagRoleCommandOutput } from "./commands/TagRoleCommand";
import type { TagSAMLProviderCommandInput, TagSAMLProviderCommandOutput } from "./commands/TagSAMLProviderCommand";
import type {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "./commands/TagServerCertificateCommand";
import type { TagUserCommandInput, TagUserCommandOutput } from "./commands/TagUserCommand";
import type {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "./commands/UntagInstanceProfileCommand";
import type { UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput } from "./commands/UntagMFADeviceCommand";
import type {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "./commands/UntagOpenIDConnectProviderCommand";
import type { UntagPolicyCommandInput, UntagPolicyCommandOutput } from "./commands/UntagPolicyCommand";
import type { UntagRoleCommandInput, UntagRoleCommandOutput } from "./commands/UntagRoleCommand";
import type {
  UntagSAMLProviderCommandInput,
  UntagSAMLProviderCommandOutput,
} from "./commands/UntagSAMLProviderCommand";
import type {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "./commands/UntagServerCertificateCommand";
import type { UntagUserCommandInput, UntagUserCommandOutput } from "./commands/UntagUserCommand";
import type { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput } from "./commands/UpdateAccessKeyCommand";
import type {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "./commands/UpdateAccountPasswordPolicyCommand";
import type {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "./commands/UpdateAssumeRolePolicyCommand";
import type {
  UpdateDelegationRequestCommandInput,
  UpdateDelegationRequestCommandOutput,
} from "./commands/UpdateDelegationRequestCommand";
import type { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import type {
  UpdateLoginProfileCommandInput,
  UpdateLoginProfileCommandOutput,
} from "./commands/UpdateLoginProfileCommand";
import type {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "./commands/UpdateOpenIDConnectProviderThumbprintCommand";
import type { UpdateRoleCommandInput, UpdateRoleCommandOutput } from "./commands/UpdateRoleCommand";
import type {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "./commands/UpdateRoleDescriptionCommand";
import type {
  UpdateSAMLProviderCommandInput,
  UpdateSAMLProviderCommandOutput,
} from "./commands/UpdateSAMLProviderCommand";
import type {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "./commands/UpdateServerCertificateCommand";
import type {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "./commands/UpdateServiceSpecificCredentialCommand";
import type {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "./commands/UpdateSigningCertificateCommand";
import type {
  UpdateSSHPublicKeyCommandInput,
  UpdateSSHPublicKeyCommandOutput,
} from "./commands/UpdateSSHPublicKeyCommand";
import type { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import type {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "./commands/UploadServerCertificateCommand";
import type {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "./commands/UploadSigningCertificateCommand";
import type {
  UploadSSHPublicKeyCommandInput,
  UploadSSHPublicKeyCommandOutput,
} from "./commands/UploadSSHPublicKeyCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptDelegationRequestCommandInput
  | AddClientIDToOpenIDConnectProviderCommandInput
  | AddRoleToInstanceProfileCommandInput
  | AddUserToGroupCommandInput
  | AssociateDelegationRequestCommandInput
  | AttachGroupPolicyCommandInput
  | AttachRolePolicyCommandInput
  | AttachUserPolicyCommandInput
  | ChangePasswordCommandInput
  | CreateAccessKeyCommandInput
  | CreateAccountAliasCommandInput
  | CreateDelegationRequestCommandInput
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
  | DisableOrganizationsRootCredentialsManagementCommandInput
  | DisableOrganizationsRootSessionsCommandInput
  | DisableOutboundWebIdentityFederationCommandInput
  | EnableMFADeviceCommandInput
  | EnableOrganizationsRootCredentialsManagementCommandInput
  | EnableOrganizationsRootSessionsCommandInput
  | EnableOutboundWebIdentityFederationCommandInput
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
  | GetDelegationRequestCommandInput
  | GetGroupCommandInput
  | GetGroupPolicyCommandInput
  | GetHumanReadableSummaryCommandInput
  | GetInstanceProfileCommandInput
  | GetLoginProfileCommandInput
  | GetMFADeviceCommandInput
  | GetOpenIDConnectProviderCommandInput
  | GetOrganizationsAccessReportCommandInput
  | GetOutboundWebIdentityFederationInfoCommandInput
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
  | ListDelegationRequestsCommandInput
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
  | ListOrganizationsFeaturesCommandInput
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
  | RejectDelegationRequestCommandInput
  | RemoveClientIDFromOpenIDConnectProviderCommandInput
  | RemoveRoleFromInstanceProfileCommandInput
  | RemoveUserFromGroupCommandInput
  | ResetServiceSpecificCredentialCommandInput
  | ResyncMFADeviceCommandInput
  | SendDelegationTokenCommandInput
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
  | UpdateDelegationRequestCommandInput
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

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptDelegationRequestCommandOutput
  | AddClientIDToOpenIDConnectProviderCommandOutput
  | AddRoleToInstanceProfileCommandOutput
  | AddUserToGroupCommandOutput
  | AssociateDelegationRequestCommandOutput
  | AttachGroupPolicyCommandOutput
  | AttachRolePolicyCommandOutput
  | AttachUserPolicyCommandOutput
  | ChangePasswordCommandOutput
  | CreateAccessKeyCommandOutput
  | CreateAccountAliasCommandOutput
  | CreateDelegationRequestCommandOutput
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
  | DisableOrganizationsRootCredentialsManagementCommandOutput
  | DisableOrganizationsRootSessionsCommandOutput
  | DisableOutboundWebIdentityFederationCommandOutput
  | EnableMFADeviceCommandOutput
  | EnableOrganizationsRootCredentialsManagementCommandOutput
  | EnableOrganizationsRootSessionsCommandOutput
  | EnableOutboundWebIdentityFederationCommandOutput
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
  | GetDelegationRequestCommandOutput
  | GetGroupCommandOutput
  | GetGroupPolicyCommandOutput
  | GetHumanReadableSummaryCommandOutput
  | GetInstanceProfileCommandOutput
  | GetLoginProfileCommandOutput
  | GetMFADeviceCommandOutput
  | GetOpenIDConnectProviderCommandOutput
  | GetOrganizationsAccessReportCommandOutput
  | GetOutboundWebIdentityFederationInfoCommandOutput
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
  | ListDelegationRequestsCommandOutput
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
  | ListOrganizationsFeaturesCommandOutput
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
  | RejectDelegationRequestCommandOutput
  | RemoveClientIDFromOpenIDConnectProviderCommandOutput
  | RemoveRoleFromInstanceProfileCommandOutput
  | RemoveUserFromGroupCommandOutput
  | ResetServiceSpecificCredentialCommandOutput
  | ResyncMFADeviceCommandOutput
  | SendDelegationTokenCommandOutput
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
  | UpdateDelegationRequestCommandOutput
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

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type IAMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of IAMClient class constructor that set the region, credentials and other options.
 */
export interface IAMClientConfig extends IAMClientConfigType {}

/**
 * @public
 */
export type IAMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of IAMClient class. This is resolved and normalized from the {@link IAMClientConfig | constructor configuration interface}.
 */
export interface IAMClientResolvedConfig extends IAMClientResolvedConfigType {}

/**
 * <fullname>Identity and Access Management</fullname>
 *          <p>Identity and Access Management (IAM) is a web service for securely controlling
 *       access to Amazon Web Services services. With IAM, you can centrally manage users, security credentials
 *       such as access keys, and permissions that control which Amazon Web Services resources users and
 *       applications can access. For more information about IAM, see <a href="http://aws.amazon.com/iam/">Identity and Access Management (IAM)</a> and the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Identity and Access Management User Guide</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<IAMClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultIAMHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IAMClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
