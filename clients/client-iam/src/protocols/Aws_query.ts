// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  strictParseInt32 as __strictParseInt32,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AddClientIDToOpenIDConnectProviderCommandInput,
  AddClientIDToOpenIDConnectProviderCommandOutput,
} from "../commands/AddClientIDToOpenIDConnectProviderCommand";
import {
  AddRoleToInstanceProfileCommandInput,
  AddRoleToInstanceProfileCommandOutput,
} from "../commands/AddRoleToInstanceProfileCommand";
import { AddUserToGroupCommandInput, AddUserToGroupCommandOutput } from "../commands/AddUserToGroupCommand";
import { AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput } from "../commands/AttachGroupPolicyCommand";
import { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput } from "../commands/AttachRolePolicyCommand";
import { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput } from "../commands/AttachUserPolicyCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "../commands/ChangePasswordCommand";
import { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput } from "../commands/CreateAccessKeyCommand";
import { CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput } from "../commands/CreateAccountAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "../commands/CreateInstanceProfileCommand";
import { CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput } from "../commands/CreateLoginProfileCommand";
import {
  CreateOpenIDConnectProviderCommandInput,
  CreateOpenIDConnectProviderCommandOutput,
} from "../commands/CreateOpenIDConnectProviderCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "../commands/CreatePolicyCommand";
import {
  CreatePolicyVersionCommandInput,
  CreatePolicyVersionCommandOutput,
} from "../commands/CreatePolicyVersionCommand";
import { CreateRoleCommandInput, CreateRoleCommandOutput } from "../commands/CreateRoleCommand";
import { CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput } from "../commands/CreateSAMLProviderCommand";
import {
  CreateServiceLinkedRoleCommandInput,
  CreateServiceLinkedRoleCommandOutput,
} from "../commands/CreateServiceLinkedRoleCommand";
import {
  CreateServiceSpecificCredentialCommandInput,
  CreateServiceSpecificCredentialCommandOutput,
} from "../commands/CreateServiceSpecificCredentialCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  CreateVirtualMFADeviceCommandInput,
  CreateVirtualMFADeviceCommandOutput,
} from "../commands/CreateVirtualMFADeviceCommand";
import {
  DeactivateMFADeviceCommandInput,
  DeactivateMFADeviceCommandOutput,
} from "../commands/DeactivateMFADeviceCommand";
import { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput } from "../commands/DeleteAccessKeyCommand";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput } from "../commands/DeleteAccountAliasCommand";
import {
  DeleteAccountPasswordPolicyCommandInput,
  DeleteAccountPasswordPolicyCommandOutput,
} from "../commands/DeleteAccountPasswordPolicyCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import { DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput } from "../commands/DeleteGroupPolicyCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "../commands/DeleteInstanceProfileCommand";
import { DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput } from "../commands/DeleteLoginProfileCommand";
import {
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
} from "../commands/DeleteOpenIDConnectProviderCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
} from "../commands/DeletePolicyVersionCommand";
import { DeleteRoleCommandInput, DeleteRoleCommandOutput } from "../commands/DeleteRoleCommand";
import {
  DeleteRolePermissionsBoundaryCommandInput,
  DeleteRolePermissionsBoundaryCommandOutput,
} from "../commands/DeleteRolePermissionsBoundaryCommand";
import { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput } from "../commands/DeleteRolePolicyCommand";
import { DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput } from "../commands/DeleteSAMLProviderCommand";
import {
  DeleteServerCertificateCommandInput,
  DeleteServerCertificateCommandOutput,
} from "../commands/DeleteServerCertificateCommand";
import {
  DeleteServiceLinkedRoleCommandInput,
  DeleteServiceLinkedRoleCommandOutput,
} from "../commands/DeleteServiceLinkedRoleCommand";
import {
  DeleteServiceSpecificCredentialCommandInput,
  DeleteServiceSpecificCredentialCommandOutput,
} from "../commands/DeleteServiceSpecificCredentialCommand";
import {
  DeleteSigningCertificateCommandInput,
  DeleteSigningCertificateCommandOutput,
} from "../commands/DeleteSigningCertificateCommand";
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "../commands/DeleteSSHPublicKeyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeleteUserPermissionsBoundaryCommandInput,
  DeleteUserPermissionsBoundaryCommandOutput,
} from "../commands/DeleteUserPermissionsBoundaryCommand";
import { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput } from "../commands/DeleteUserPolicyCommand";
import {
  DeleteVirtualMFADeviceCommandInput,
  DeleteVirtualMFADeviceCommandOutput,
} from "../commands/DeleteVirtualMFADeviceCommand";
import { DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput } from "../commands/DetachGroupPolicyCommand";
import { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput } from "../commands/DetachRolePolicyCommand";
import { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput } from "../commands/DetachUserPolicyCommand";
import {
  DisableOrganizationsRootCredentialsManagementCommandInput,
  DisableOrganizationsRootCredentialsManagementCommandOutput,
} from "../commands/DisableOrganizationsRootCredentialsManagementCommand";
import {
  DisableOrganizationsRootSessionsCommandInput,
  DisableOrganizationsRootSessionsCommandOutput,
} from "../commands/DisableOrganizationsRootSessionsCommand";
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "../commands/EnableMFADeviceCommand";
import {
  EnableOrganizationsRootCredentialsManagementCommandInput,
  EnableOrganizationsRootCredentialsManagementCommandOutput,
} from "../commands/EnableOrganizationsRootCredentialsManagementCommand";
import {
  EnableOrganizationsRootSessionsCommandInput,
  EnableOrganizationsRootSessionsCommandOutput,
} from "../commands/EnableOrganizationsRootSessionsCommand";
import {
  GenerateCredentialReportCommandInput,
  GenerateCredentialReportCommandOutput,
} from "../commands/GenerateCredentialReportCommand";
import {
  GenerateOrganizationsAccessReportCommandInput,
  GenerateOrganizationsAccessReportCommandOutput,
} from "../commands/GenerateOrganizationsAccessReportCommand";
import {
  GenerateServiceLastAccessedDetailsCommandInput,
  GenerateServiceLastAccessedDetailsCommandOutput,
} from "../commands/GenerateServiceLastAccessedDetailsCommand";
import {
  GetAccessKeyLastUsedCommandInput,
  GetAccessKeyLastUsedCommandOutput,
} from "../commands/GetAccessKeyLastUsedCommand";
import {
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
} from "../commands/GetAccountAuthorizationDetailsCommand";
import {
  GetAccountPasswordPolicyCommandInput,
  GetAccountPasswordPolicyCommandOutput,
} from "../commands/GetAccountPasswordPolicyCommand";
import { GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput } from "../commands/GetAccountSummaryCommand";
import {
  GetContextKeysForCustomPolicyCommandInput,
  GetContextKeysForCustomPolicyCommandOutput,
} from "../commands/GetContextKeysForCustomPolicyCommand";
import {
  GetContextKeysForPrincipalPolicyCommandInput,
  GetContextKeysForPrincipalPolicyCommandOutput,
} from "../commands/GetContextKeysForPrincipalPolicyCommand";
import {
  GetCredentialReportCommandInput,
  GetCredentialReportCommandOutput,
} from "../commands/GetCredentialReportCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput } from "../commands/GetGroupPolicyCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "../commands/GetInstanceProfileCommand";
import { GetLoginProfileCommandInput, GetLoginProfileCommandOutput } from "../commands/GetLoginProfileCommand";
import { GetMFADeviceCommandInput, GetMFADeviceCommandOutput } from "../commands/GetMFADeviceCommand";
import {
  GetOpenIDConnectProviderCommandInput,
  GetOpenIDConnectProviderCommandOutput,
} from "../commands/GetOpenIDConnectProviderCommand";
import {
  GetOrganizationsAccessReportCommandInput,
  GetOrganizationsAccessReportCommandOutput,
} from "../commands/GetOrganizationsAccessReportCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput } from "../commands/GetPolicyVersionCommand";
import { GetRoleCommandInput, GetRoleCommandOutput } from "../commands/GetRoleCommand";
import { GetRolePolicyCommandInput, GetRolePolicyCommandOutput } from "../commands/GetRolePolicyCommand";
import { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput } from "../commands/GetSAMLProviderCommand";
import {
  GetServerCertificateCommandInput,
  GetServerCertificateCommandOutput,
} from "../commands/GetServerCertificateCommand";
import {
  GetServiceLastAccessedDetailsCommandInput,
  GetServiceLastAccessedDetailsCommandOutput,
} from "../commands/GetServiceLastAccessedDetailsCommand";
import {
  GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  GetServiceLastAccessedDetailsWithEntitiesCommandOutput,
} from "../commands/GetServiceLastAccessedDetailsWithEntitiesCommand";
import {
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
} from "../commands/GetServiceLinkedRoleDeletionStatusCommand";
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "../commands/GetSSHPublicKeyCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import { GetUserPolicyCommandInput, GetUserPolicyCommandOutput } from "../commands/GetUserPolicyCommand";
import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput } from "../commands/ListAccessKeysCommand";
import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput } from "../commands/ListAccountAliasesCommand";
import {
  ListAttachedGroupPoliciesCommandInput,
  ListAttachedGroupPoliciesCommandOutput,
} from "../commands/ListAttachedGroupPoliciesCommand";
import {
  ListAttachedRolePoliciesCommandInput,
  ListAttachedRolePoliciesCommandOutput,
} from "../commands/ListAttachedRolePoliciesCommand";
import {
  ListAttachedUserPoliciesCommandInput,
  ListAttachedUserPoliciesCommandOutput,
} from "../commands/ListAttachedUserPoliciesCommand";
import {
  ListEntitiesForPolicyCommandInput,
  ListEntitiesForPolicyCommandOutput,
} from "../commands/ListEntitiesForPolicyCommand";
import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput } from "../commands/ListGroupPoliciesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput } from "../commands/ListGroupsForUserCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import {
  ListInstanceProfilesForRoleCommandInput,
  ListInstanceProfilesForRoleCommandOutput,
} from "../commands/ListInstanceProfilesForRoleCommand";
import {
  ListInstanceProfileTagsCommandInput,
  ListInstanceProfileTagsCommandOutput,
} from "../commands/ListInstanceProfileTagsCommand";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "../commands/ListMFADevicesCommand";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput } from "../commands/ListMFADeviceTagsCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "../commands/ListOpenIDConnectProvidersCommand";
import {
  ListOpenIDConnectProviderTagsCommandInput,
  ListOpenIDConnectProviderTagsCommandOutput,
} from "../commands/ListOpenIDConnectProviderTagsCommand";
import {
  ListOrganizationsFeaturesCommandInput,
  ListOrganizationsFeaturesCommandOutput,
} from "../commands/ListOrganizationsFeaturesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "../commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput } from "../commands/ListPolicyTagsCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "../commands/ListRolePoliciesCommand";
import { ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "../commands/ListRoleTagsCommand";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "../commands/ListSAMLProvidersCommand";
import {
  ListSAMLProviderTagsCommandInput,
  ListSAMLProviderTagsCommandOutput,
} from "../commands/ListSAMLProviderTagsCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import {
  ListServerCertificateTagsCommandInput,
  ListServerCertificateTagsCommandOutput,
} from "../commands/ListServerCertificateTagsCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "../commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "../commands/ListSigningCertificatesCommand";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "../commands/ListSSHPublicKeysCommand";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "../commands/ListUserPoliciesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "../commands/ListUserTagsCommand";
import {
  ListVirtualMFADevicesCommandInput,
  ListVirtualMFADevicesCommandOutput,
} from "../commands/ListVirtualMFADevicesCommand";
import { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput } from "../commands/PutGroupPolicyCommand";
import {
  PutRolePermissionsBoundaryCommandInput,
  PutRolePermissionsBoundaryCommandOutput,
} from "../commands/PutRolePermissionsBoundaryCommand";
import { PutRolePolicyCommandInput, PutRolePolicyCommandOutput } from "../commands/PutRolePolicyCommand";
import {
  PutUserPermissionsBoundaryCommandInput,
  PutUserPermissionsBoundaryCommandOutput,
} from "../commands/PutUserPermissionsBoundaryCommand";
import { PutUserPolicyCommandInput, PutUserPolicyCommandOutput } from "../commands/PutUserPolicyCommand";
import {
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
} from "../commands/RemoveClientIDFromOpenIDConnectProviderCommand";
import {
  RemoveRoleFromInstanceProfileCommandInput,
  RemoveRoleFromInstanceProfileCommandOutput,
} from "../commands/RemoveRoleFromInstanceProfileCommand";
import {
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
} from "../commands/RemoveUserFromGroupCommand";
import {
  ResetServiceSpecificCredentialCommandInput,
  ResetServiceSpecificCredentialCommandOutput,
} from "../commands/ResetServiceSpecificCredentialCommand";
import { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput } from "../commands/ResyncMFADeviceCommand";
import {
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
} from "../commands/SetDefaultPolicyVersionCommand";
import {
  SetSecurityTokenServicePreferencesCommandInput,
  SetSecurityTokenServicePreferencesCommandOutput,
} from "../commands/SetSecurityTokenServicePreferencesCommand";
import {
  SimulateCustomPolicyCommandInput,
  SimulateCustomPolicyCommandOutput,
} from "../commands/SimulateCustomPolicyCommand";
import {
  SimulatePrincipalPolicyCommandInput,
  SimulatePrincipalPolicyCommandOutput,
} from "../commands/SimulatePrincipalPolicyCommand";
import { TagInstanceProfileCommandInput, TagInstanceProfileCommandOutput } from "../commands/TagInstanceProfileCommand";
import { TagMFADeviceCommandInput, TagMFADeviceCommandOutput } from "../commands/TagMFADeviceCommand";
import {
  TagOpenIDConnectProviderCommandInput,
  TagOpenIDConnectProviderCommandOutput,
} from "../commands/TagOpenIDConnectProviderCommand";
import { TagPolicyCommandInput, TagPolicyCommandOutput } from "../commands/TagPolicyCommand";
import { TagRoleCommandInput, TagRoleCommandOutput } from "../commands/TagRoleCommand";
import { TagSAMLProviderCommandInput, TagSAMLProviderCommandOutput } from "../commands/TagSAMLProviderCommand";
import {
  TagServerCertificateCommandInput,
  TagServerCertificateCommandOutput,
} from "../commands/TagServerCertificateCommand";
import { TagUserCommandInput, TagUserCommandOutput } from "../commands/TagUserCommand";
import {
  UntagInstanceProfileCommandInput,
  UntagInstanceProfileCommandOutput,
} from "../commands/UntagInstanceProfileCommand";
import { UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput } from "../commands/UntagMFADeviceCommand";
import {
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
} from "../commands/UntagOpenIDConnectProviderCommand";
import { UntagPolicyCommandInput, UntagPolicyCommandOutput } from "../commands/UntagPolicyCommand";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "../commands/UntagRoleCommand";
import { UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput } from "../commands/UntagSAMLProviderCommand";
import {
  UntagServerCertificateCommandInput,
  UntagServerCertificateCommandOutput,
} from "../commands/UntagServerCertificateCommand";
import { UntagUserCommandInput, UntagUserCommandOutput } from "../commands/UntagUserCommand";
import { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput } from "../commands/UpdateAccessKeyCommand";
import {
  UpdateAccountPasswordPolicyCommandInput,
  UpdateAccountPasswordPolicyCommandOutput,
} from "../commands/UpdateAccountPasswordPolicyCommand";
import {
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
} from "../commands/UpdateAssumeRolePolicyCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput } from "../commands/UpdateLoginProfileCommand";
import {
  UpdateOpenIDConnectProviderThumbprintCommandInput,
  UpdateOpenIDConnectProviderThumbprintCommandOutput,
} from "../commands/UpdateOpenIDConnectProviderThumbprintCommand";
import { UpdateRoleCommandInput, UpdateRoleCommandOutput } from "../commands/UpdateRoleCommand";
import {
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
} from "../commands/UpdateRoleDescriptionCommand";
import { UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput } from "../commands/UpdateSAMLProviderCommand";
import {
  UpdateServerCertificateCommandInput,
  UpdateServerCertificateCommandOutput,
} from "../commands/UpdateServerCertificateCommand";
import {
  UpdateServiceSpecificCredentialCommandInput,
  UpdateServiceSpecificCredentialCommandOutput,
} from "../commands/UpdateServiceSpecificCredentialCommand";
import {
  UpdateSigningCertificateCommandInput,
  UpdateSigningCertificateCommandOutput,
} from "../commands/UpdateSigningCertificateCommand";
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "../commands/UpdateSSHPublicKeyCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "../commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "../commands/UploadSigningCertificateCommand";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "../commands/UploadSSHPublicKeyCommand";
import { IAMServiceException as __BaseException } from "../models/IAMServiceException";
import {
  AccessDetail,
  AccessKey,
  AccessKeyLastUsed,
  AccessKeyMetadata,
  AccountNotManagementOrDelegatedAdministratorException,
  AddClientIDToOpenIDConnectProviderRequest,
  AddRoleToInstanceProfileRequest,
  AddUserToGroupRequest,
  AttachedPermissionsBoundary,
  AttachedPolicy,
  AttachGroupPolicyRequest,
  AttachRolePolicyRequest,
  AttachUserPolicyRequest,
  CallerIsNotManagementAccountException,
  ChangePasswordRequest,
  ConcurrentModificationException,
  ContextEntry,
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
  CreateAccountAliasRequest,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateInstanceProfileRequest,
  CreateInstanceProfileResponse,
  CreateLoginProfileRequest,
  CreateLoginProfileResponse,
  CreateOpenIDConnectProviderRequest,
  CreateOpenIDConnectProviderResponse,
  CreatePolicyRequest,
  CreatePolicyResponse,
  CreatePolicyVersionRequest,
  CreatePolicyVersionResponse,
  CreateRoleRequest,
  CreateRoleResponse,
  CreateSAMLProviderRequest,
  CreateSAMLProviderResponse,
  CreateServiceLinkedRoleRequest,
  CreateServiceLinkedRoleResponse,
  CreateServiceSpecificCredentialRequest,
  CreateServiceSpecificCredentialResponse,
  CreateUserRequest,
  CreateUserResponse,
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
  CredentialReportExpiredException,
  CredentialReportNotPresentException,
  CredentialReportNotReadyException,
  DeactivateMFADeviceRequest,
  DeleteAccessKeyRequest,
  DeleteAccountAliasRequest,
  DeleteConflictException,
  DeleteGroupPolicyRequest,
  DeleteGroupRequest,
  DeleteInstanceProfileRequest,
  DeleteLoginProfileRequest,
  DeleteOpenIDConnectProviderRequest,
  DeletePolicyRequest,
  DeletePolicyVersionRequest,
  DeleteRolePermissionsBoundaryRequest,
  DeleteRolePolicyRequest,
  DeleteRoleRequest,
  DeleteSAMLProviderRequest,
  DeleteServerCertificateRequest,
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse,
  DeleteServiceSpecificCredentialRequest,
  DeleteSigningCertificateRequest,
  DeleteSSHPublicKeyRequest,
  DeleteUserPermissionsBoundaryRequest,
  DeleteUserPolicyRequest,
  DeleteUserRequest,
  DeleteVirtualMFADeviceRequest,
  DeletionTaskFailureReasonType,
  DetachGroupPolicyRequest,
  DetachRolePolicyRequest,
  DetachUserPolicyRequest,
  DisableOrganizationsRootCredentialsManagementRequest,
  DisableOrganizationsRootCredentialsManagementResponse,
  DisableOrganizationsRootSessionsRequest,
  DisableOrganizationsRootSessionsResponse,
  EnableMFADeviceRequest,
  EnableOrganizationsRootCredentialsManagementRequest,
  EnableOrganizationsRootCredentialsManagementResponse,
  EnableOrganizationsRootSessionsRequest,
  EnableOrganizationsRootSessionsResponse,
  EntityAlreadyExistsException,
  EntityDetails,
  EntityInfo,
  EntityTemporarilyUnmodifiableException,
  EntityType,
  ErrorDetails,
  FeatureType,
  GenerateCredentialReportResponse,
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
  GetAccessKeyLastUsedRequest,
  GetAccessKeyLastUsedResponse,
  GetAccountAuthorizationDetailsRequest,
  GetAccountAuthorizationDetailsResponse,
  GetAccountPasswordPolicyResponse,
  GetAccountSummaryResponse,
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForPolicyResponse,
  GetContextKeysForPrincipalPolicyRequest,
  GetCredentialReportResponse,
  GetGroupPolicyRequest,
  GetGroupPolicyResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetInstanceProfileRequest,
  GetInstanceProfileResponse,
  GetLoginProfileRequest,
  GetLoginProfileResponse,
  GetMFADeviceRequest,
  GetMFADeviceResponse,
  GetOpenIDConnectProviderRequest,
  GetOpenIDConnectProviderResponse,
  GetOrganizationsAccessReportRequest,
  GetOrganizationsAccessReportResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetRolePolicyRequest,
  GetRolePolicyResponse,
  GetRoleRequest,
  GetRoleResponse,
  GetSAMLProviderRequest,
  GetSAMLProviderResponse,
  GetServerCertificateRequest,
  GetServerCertificateResponse,
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyResponse,
  GetUserPolicyRequest,
  GetUserPolicyResponse,
  GetUserRequest,
  GetUserResponse,
  Group,
  GroupDetail,
  InstanceProfile,
  InvalidAuthenticationCodeException,
  InvalidInputException,
  InvalidUserTypeException,
  LimitExceededException,
  ListAccessKeysRequest,
  ListAccessKeysResponse,
  ListAccountAliasesRequest,
  ListAccountAliasesResponse,
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesRequest,
  ListAttachedUserPoliciesResponse,
  ListEntitiesForPolicyRequest,
  ListEntitiesForPolicyResponse,
  ListGroupPoliciesRequest,
  ListGroupPoliciesResponse,
  ListGroupsForUserRequest,
  ListGroupsForUserResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfilesRequest,
  ListInstanceProfilesResponse,
  ListInstanceProfileTagsRequest,
  ListInstanceProfileTagsResponse,
  ListMFADevicesRequest,
  ListMFADevicesResponse,
  ListMFADeviceTagsRequest,
  ListMFADeviceTagsResponse,
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
  ListOpenIDConnectProviderTagsRequest,
  ListOpenIDConnectProviderTagsResponse,
  ListOrganizationsFeaturesRequest,
  ListOrganizationsFeaturesResponse,
  ListPoliciesGrantingServiceAccessEntry,
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPolicyTagsRequest,
  ListPolicyTagsResponse,
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListRolePoliciesRequest,
  ListRolePoliciesResponse,
  ListRolesRequest,
  ListRolesResponse,
  ListRoleTagsRequest,
  ListRoleTagsResponse,
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
  ListSAMLProviderTagsRequest,
  ListSAMLProviderTagsResponse,
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
  ListServerCertificateTagsRequest,
  ListServerCertificateTagsResponse,
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsResponse,
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysResponse,
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListUserTagsRequest,
  ListUserTagsResponse,
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
  LoginProfile,
  MalformedPolicyDocumentException,
  ManagedPolicyDetail,
  MFADevice,
  NoSuchEntityException,
  OpenIDConnectProviderListEntry,
  OpenIdIdpCommunicationErrorException,
  OrganizationNotFoundException,
  OrganizationNotInAllFeaturesModeException,
  PasswordPolicy,
  PasswordPolicyViolationException,
  Policy,
  PolicyDetail,
  PolicyEvaluationException,
  PolicyGrantingServiceAccess,
  PolicyGroup,
  PolicyNotAttachableException,
  PolicyRole,
  PolicyUser,
  PolicyVersion,
  PutGroupPolicyRequest,
  PutRolePermissionsBoundaryRequest,
  PutRolePolicyRequest,
  PutUserPermissionsBoundaryRequest,
  PutUserPolicyRequest,
  RemoveClientIDFromOpenIDConnectProviderRequest,
  RemoveRoleFromInstanceProfileRequest,
  RemoveUserFromGroupRequest,
  ReportGenerationLimitExceededException,
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
  ResyncMFADeviceRequest,
  Role,
  RoleDetail,
  RoleLastUsed,
  RoleUsageType,
  SAMLPrivateKey,
  SAMLProviderListEntry,
  ServerCertificate,
  ServerCertificateMetadata,
  ServiceAccessNotEnabledException,
  ServiceFailureException,
  ServiceLastAccessed,
  ServiceNotSupportedException,
  ServiceSpecificCredential,
  ServiceSpecificCredentialMetadata,
  SetDefaultPolicyVersionRequest,
  SetSecurityTokenServicePreferencesRequest,
  SigningCertificate,
  SimulateCustomPolicyRequest,
  SSHPublicKey,
  SSHPublicKeyMetadata,
  SummaryKeyType,
  Tag,
  TrackedActionLastAccessed,
  UnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException,
  User,
  UserDetail,
  VirtualMFADevice,
} from "../models/models_0";
import {
  DuplicateCertificateException,
  DuplicateSSHPublicKeyException,
  EvaluationResult,
  InvalidCertificateException,
  InvalidPublicKeyException,
  KeyPairMismatchException,
  MalformedCertificateException,
  OrganizationsDecisionDetail,
  PermissionsBoundaryDecisionDetail,
  PolicyEvaluationDecisionType,
  Position,
  ResourceSpecificResult,
  SimulatePolicyResponse,
  SimulatePrincipalPolicyRequest,
  Statement,
  TagInstanceProfileRequest,
  TagMFADeviceRequest,
  TagOpenIDConnectProviderRequest,
  TagPolicyRequest,
  TagRoleRequest,
  TagSAMLProviderRequest,
  TagServerCertificateRequest,
  TagUserRequest,
  UntagInstanceProfileRequest,
  UntagMFADeviceRequest,
  UntagOpenIDConnectProviderRequest,
  UntagPolicyRequest,
  UntagRoleRequest,
  UntagSAMLProviderRequest,
  UntagServerCertificateRequest,
  UntagUserRequest,
  UpdateAccessKeyRequest,
  UpdateAccountPasswordPolicyRequest,
  UpdateAssumeRolePolicyRequest,
  UpdateGroupRequest,
  UpdateLoginProfileRequest,
  UpdateOpenIDConnectProviderThumbprintRequest,
  UpdateRoleDescriptionRequest,
  UpdateRoleDescriptionResponse,
  UpdateRoleRequest,
  UpdateRoleResponse,
  UpdateSAMLProviderRequest,
  UpdateSAMLProviderResponse,
  UpdateServerCertificateRequest,
  UpdateServiceSpecificCredentialRequest,
  UpdateSigningCertificateRequest,
  UpdateSSHPublicKeyRequest,
  UpdateUserRequest,
  UploadServerCertificateRequest,
  UploadServerCertificateResponse,
  UploadSigningCertificateRequest,
  UploadSigningCertificateResponse,
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyResponse,
} from "../models/models_1";

/**
 * serializeAws_queryAddClientIDToOpenIDConnectProviderCommand
 */
export const se_AddClientIDToOpenIDConnectProviderCommand = async (
  input: AddClientIDToOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddClientIDToOpenIDConnectProviderRequest(input, context),
    [_A]: _ACIDTOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddRoleToInstanceProfileCommand
 */
export const se_AddRoleToInstanceProfileCommand = async (
  input: AddRoleToInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddRoleToInstanceProfileRequest(input, context),
    [_A]: _ARTIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAddUserToGroupCommand
 */
export const se_AddUserToGroupCommand = async (
  input: AddUserToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AddUserToGroupRequest(input, context),
    [_A]: _AUTG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachGroupPolicyCommand
 */
export const se_AttachGroupPolicyCommand = async (
  input: AttachGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachGroupPolicyRequest(input, context),
    [_A]: _AGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachRolePolicyCommand
 */
export const se_AttachRolePolicyCommand = async (
  input: AttachRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachRolePolicyRequest(input, context),
    [_A]: _ARP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryAttachUserPolicyCommand
 */
export const se_AttachUserPolicyCommand = async (
  input: AttachUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_AttachUserPolicyRequest(input, context),
    [_A]: _AUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryChangePasswordCommand
 */
export const se_ChangePasswordCommand = async (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ChangePasswordRequest(input, context),
    [_A]: _CP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateAccessKeyCommand
 */
export const se_CreateAccessKeyCommand = async (
  input: CreateAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAccessKeyRequest(input, context),
    [_A]: _CAK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateAccountAliasCommand
 */
export const se_CreateAccountAliasCommand = async (
  input: CreateAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateAccountAliasRequest(input, context),
    [_A]: _CAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateGroupRequest(input, context),
    [_A]: _CG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateInstanceProfileCommand
 */
export const se_CreateInstanceProfileCommand = async (
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateInstanceProfileRequest(input, context),
    [_A]: _CIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateLoginProfileCommand
 */
export const se_CreateLoginProfileCommand = async (
  input: CreateLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateLoginProfileRequest(input, context),
    [_A]: _CLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateOpenIDConnectProviderCommand
 */
export const se_CreateOpenIDConnectProviderCommand = async (
  input: CreateOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateOpenIDConnectProviderRequest(input, context),
    [_A]: _COIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreatePolicyRequest(input, context),
    [_A]: _CPr,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreatePolicyVersionCommand
 */
export const se_CreatePolicyVersionCommand = async (
  input: CreatePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreatePolicyVersionRequest(input, context),
    [_A]: _CPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateRoleCommand
 */
export const se_CreateRoleCommand = async (
  input: CreateRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateRoleRequest(input, context),
    [_A]: _CR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateSAMLProviderCommand
 */
export const se_CreateSAMLProviderCommand = async (
  input: CreateSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateSAMLProviderRequest(input, context),
    [_A]: _CSAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateServiceLinkedRoleCommand
 */
export const se_CreateServiceLinkedRoleCommand = async (
  input: CreateServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateServiceLinkedRoleRequest(input, context),
    [_A]: _CSLR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateServiceSpecificCredentialCommand
 */
export const se_CreateServiceSpecificCredentialCommand = async (
  input: CreateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateServiceSpecificCredentialRequest(input, context),
    [_A]: _CSSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateUserRequest(input, context),
    [_A]: _CU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryCreateVirtualMFADeviceCommand
 */
export const se_CreateVirtualMFADeviceCommand = async (
  input: CreateVirtualMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_CreateVirtualMFADeviceRequest(input, context),
    [_A]: _CVMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeactivateMFADeviceCommand
 */
export const se_DeactivateMFADeviceCommand = async (
  input: DeactivateMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeactivateMFADeviceRequest(input, context),
    [_A]: _DMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAccessKeyCommand
 */
export const se_DeleteAccessKeyCommand = async (
  input: DeleteAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAccessKeyRequest(input, context),
    [_A]: _DAK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAccountAliasCommand
 */
export const se_DeleteAccountAliasCommand = async (
  input: DeleteAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAccountAliasRequest(input, context),
    [_A]: _DAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAccountPasswordPolicyCommand
 */
export const se_DeleteAccountPasswordPolicyCommand = async (
  input: DeleteAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _DAPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteGroupRequest(input, context),
    [_A]: _DG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteGroupPolicyCommand
 */
export const se_DeleteGroupPolicyCommand = async (
  input: DeleteGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteGroupPolicyRequest(input, context),
    [_A]: _DGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteInstanceProfileCommand
 */
export const se_DeleteInstanceProfileCommand = async (
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteInstanceProfileRequest(input, context),
    [_A]: _DIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteLoginProfileCommand
 */
export const se_DeleteLoginProfileCommand = async (
  input: DeleteLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteLoginProfileRequest(input, context),
    [_A]: _DLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteOpenIDConnectProviderCommand
 */
export const se_DeleteOpenIDConnectProviderCommand = async (
  input: DeleteOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteOpenIDConnectProviderRequest(input, context),
    [_A]: _DOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeletePolicyRequest(input, context),
    [_A]: _DP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeletePolicyVersionCommand
 */
export const se_DeletePolicyVersionCommand = async (
  input: DeletePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeletePolicyVersionRequest(input, context),
    [_A]: _DPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRoleCommand
 */
export const se_DeleteRoleCommand = async (
  input: DeleteRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRoleRequest(input, context),
    [_A]: _DR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRolePermissionsBoundaryCommand
 */
export const se_DeleteRolePermissionsBoundaryCommand = async (
  input: DeleteRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRolePermissionsBoundaryRequest(input, context),
    [_A]: _DRPB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteRolePolicyCommand
 */
export const se_DeleteRolePolicyCommand = async (
  input: DeleteRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteRolePolicyRequest(input, context),
    [_A]: _DRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSAMLProviderCommand
 */
export const se_DeleteSAMLProviderCommand = async (
  input: DeleteSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSAMLProviderRequest(input, context),
    [_A]: _DSAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteServerCertificateCommand
 */
export const se_DeleteServerCertificateCommand = async (
  input: DeleteServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteServerCertificateRequest(input, context),
    [_A]: _DSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteServiceLinkedRoleCommand
 */
export const se_DeleteServiceLinkedRoleCommand = async (
  input: DeleteServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteServiceLinkedRoleRequest(input, context),
    [_A]: _DSLR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteServiceSpecificCredentialCommand
 */
export const se_DeleteServiceSpecificCredentialCommand = async (
  input: DeleteServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteServiceSpecificCredentialRequest(input, context),
    [_A]: _DSSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSigningCertificateCommand
 */
export const se_DeleteSigningCertificateCommand = async (
  input: DeleteSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSigningCertificateRequest(input, context),
    [_A]: _DSCe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteSSHPublicKeyCommand
 */
export const se_DeleteSSHPublicKeyCommand = async (
  input: DeleteSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteSSHPublicKeyRequest(input, context),
    [_A]: _DSSHPK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUserRequest(input, context),
    [_A]: _DU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUserPermissionsBoundaryCommand
 */
export const se_DeleteUserPermissionsBoundaryCommand = async (
  input: DeleteUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUserPermissionsBoundaryRequest(input, context),
    [_A]: _DUPB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteUserPolicyCommand
 */
export const se_DeleteUserPolicyCommand = async (
  input: DeleteUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteUserPolicyRequest(input, context),
    [_A]: _DUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteVirtualMFADeviceCommand
 */
export const se_DeleteVirtualMFADeviceCommand = async (
  input: DeleteVirtualMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteVirtualMFADeviceRequest(input, context),
    [_A]: _DVMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachGroupPolicyCommand
 */
export const se_DetachGroupPolicyCommand = async (
  input: DetachGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachGroupPolicyRequest(input, context),
    [_A]: _DGPe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachRolePolicyCommand
 */
export const se_DetachRolePolicyCommand = async (
  input: DetachRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachRolePolicyRequest(input, context),
    [_A]: _DRPe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDetachUserPolicyCommand
 */
export const se_DetachUserPolicyCommand = async (
  input: DetachUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DetachUserPolicyRequest(input, context),
    [_A]: _DUPe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableOrganizationsRootCredentialsManagementCommand
 */
export const se_DisableOrganizationsRootCredentialsManagementCommand = async (
  input: DisableOrganizationsRootCredentialsManagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableOrganizationsRootCredentialsManagementRequest(input, context),
    [_A]: _DORCM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableOrganizationsRootSessionsCommand
 */
export const se_DisableOrganizationsRootSessionsCommand = async (
  input: DisableOrganizationsRootSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableOrganizationsRootSessionsRequest(input, context),
    [_A]: _DORS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableMFADeviceCommand
 */
export const se_EnableMFADeviceCommand = async (
  input: EnableMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableMFADeviceRequest(input, context),
    [_A]: _EMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableOrganizationsRootCredentialsManagementCommand
 */
export const se_EnableOrganizationsRootCredentialsManagementCommand = async (
  input: EnableOrganizationsRootCredentialsManagementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableOrganizationsRootCredentialsManagementRequest(input, context),
    [_A]: _EORCM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableOrganizationsRootSessionsCommand
 */
export const se_EnableOrganizationsRootSessionsCommand = async (
  input: EnableOrganizationsRootSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableOrganizationsRootSessionsRequest(input, context),
    [_A]: _EORS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGenerateCredentialReportCommand
 */
export const se_GenerateCredentialReportCommand = async (
  input: GenerateCredentialReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GCR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGenerateOrganizationsAccessReportCommand
 */
export const se_GenerateOrganizationsAccessReportCommand = async (
  input: GenerateOrganizationsAccessReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GenerateOrganizationsAccessReportRequest(input, context),
    [_A]: _GOAR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGenerateServiceLastAccessedDetailsCommand
 */
export const se_GenerateServiceLastAccessedDetailsCommand = async (
  input: GenerateServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GenerateServiceLastAccessedDetailsRequest(input, context),
    [_A]: _GSLAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccessKeyLastUsedCommand
 */
export const se_GetAccessKeyLastUsedCommand = async (
  input: GetAccessKeyLastUsedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetAccessKeyLastUsedRequest(input, context),
    [_A]: _GAKLU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccountAuthorizationDetailsCommand
 */
export const se_GetAccountAuthorizationDetailsCommand = async (
  input: GetAccountAuthorizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetAccountAuthorizationDetailsRequest(input, context),
    [_A]: _GAAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccountPasswordPolicyCommand
 */
export const se_GetAccountPasswordPolicyCommand = async (
  input: GetAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GAPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetAccountSummaryCommand
 */
export const se_GetAccountSummaryCommand = async (
  input: GetAccountSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GAS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetContextKeysForCustomPolicyCommand
 */
export const se_GetContextKeysForCustomPolicyCommand = async (
  input: GetContextKeysForCustomPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetContextKeysForCustomPolicyRequest(input, context),
    [_A]: _GCKFCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetContextKeysForPrincipalPolicyCommand
 */
export const se_GetContextKeysForPrincipalPolicyCommand = async (
  input: GetContextKeysForPrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetContextKeysForPrincipalPolicyRequest(input, context),
    [_A]: _GCKFPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetCredentialReportCommand
 */
export const se_GetCredentialReportCommand = async (
  input: GetCredentialReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  const body = buildFormUrlencodedString({
    [_A]: _GCRe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetGroupRequest(input, context),
    [_A]: _GG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetGroupPolicyCommand
 */
export const se_GetGroupPolicyCommand = async (
  input: GetGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetGroupPolicyRequest(input, context),
    [_A]: _GGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetInstanceProfileCommand
 */
export const se_GetInstanceProfileCommand = async (
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetInstanceProfileRequest(input, context),
    [_A]: _GIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetLoginProfileCommand
 */
export const se_GetLoginProfileCommand = async (
  input: GetLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetLoginProfileRequest(input, context),
    [_A]: _GLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetMFADeviceCommand
 */
export const se_GetMFADeviceCommand = async (
  input: GetMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetMFADeviceRequest(input, context),
    [_A]: _GMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetOpenIDConnectProviderCommand
 */
export const se_GetOpenIDConnectProviderCommand = async (
  input: GetOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetOpenIDConnectProviderRequest(input, context),
    [_A]: _GOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetOrganizationsAccessReportCommand
 */
export const se_GetOrganizationsAccessReportCommand = async (
  input: GetOrganizationsAccessReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetOrganizationsAccessReportRequest(input, context),
    [_A]: _GOARe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetPolicyRequest(input, context),
    [_A]: _GP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetPolicyVersionCommand
 */
export const se_GetPolicyVersionCommand = async (
  input: GetPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetPolicyVersionRequest(input, context),
    [_A]: _GPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetRoleCommand
 */
export const se_GetRoleCommand = async (
  input: GetRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetRoleRequest(input, context),
    [_A]: _GR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetRolePolicyCommand
 */
export const se_GetRolePolicyCommand = async (
  input: GetRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetRolePolicyRequest(input, context),
    [_A]: _GRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSAMLProviderCommand
 */
export const se_GetSAMLProviderCommand = async (
  input: GetSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSAMLProviderRequest(input, context),
    [_A]: _GSAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetServerCertificateCommand
 */
export const se_GetServerCertificateCommand = async (
  input: GetServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetServerCertificateRequest(input, context),
    [_A]: _GSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetServiceLastAccessedDetailsCommand
 */
export const se_GetServiceLastAccessedDetailsCommand = async (
  input: GetServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetServiceLastAccessedDetailsRequest(input, context),
    [_A]: _GSLADe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand
 */
export const se_GetServiceLastAccessedDetailsWithEntitiesCommand = async (
  input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetServiceLastAccessedDetailsWithEntitiesRequest(input, context),
    [_A]: _GSLADWE,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand
 */
export const se_GetServiceLinkedRoleDeletionStatusCommand = async (
  input: GetServiceLinkedRoleDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetServiceLinkedRoleDeletionStatusRequest(input, context),
    [_A]: _GSLRDS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetSSHPublicKeyCommand
 */
export const se_GetSSHPublicKeyCommand = async (
  input: GetSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetSSHPublicKeyRequest(input, context),
    [_A]: _GSSHPK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetUserRequest(input, context),
    [_A]: _GU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetUserPolicyCommand
 */
export const se_GetUserPolicyCommand = async (
  input: GetUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetUserPolicyRequest(input, context),
    [_A]: _GUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAccessKeysCommand
 */
export const se_ListAccessKeysCommand = async (
  input: ListAccessKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAccessKeysRequest(input, context),
    [_A]: _LAK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAccountAliasesCommand
 */
export const se_ListAccountAliasesCommand = async (
  input: ListAccountAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAccountAliasesRequest(input, context),
    [_A]: _LAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAttachedGroupPoliciesCommand
 */
export const se_ListAttachedGroupPoliciesCommand = async (
  input: ListAttachedGroupPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAttachedGroupPoliciesRequest(input, context),
    [_A]: _LAGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAttachedRolePoliciesCommand
 */
export const se_ListAttachedRolePoliciesCommand = async (
  input: ListAttachedRolePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAttachedRolePoliciesRequest(input, context),
    [_A]: _LARP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListAttachedUserPoliciesCommand
 */
export const se_ListAttachedUserPoliciesCommand = async (
  input: ListAttachedUserPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListAttachedUserPoliciesRequest(input, context),
    [_A]: _LAUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListEntitiesForPolicyCommand
 */
export const se_ListEntitiesForPolicyCommand = async (
  input: ListEntitiesForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListEntitiesForPolicyRequest(input, context),
    [_A]: _LEFP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListGroupPoliciesCommand
 */
export const se_ListGroupPoliciesCommand = async (
  input: ListGroupPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListGroupPoliciesRequest(input, context),
    [_A]: _LGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListGroupsRequest(input, context),
    [_A]: _LG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListGroupsForUserCommand
 */
export const se_ListGroupsForUserCommand = async (
  input: ListGroupsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListGroupsForUserRequest(input, context),
    [_A]: _LGFU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListInstanceProfilesCommand
 */
export const se_ListInstanceProfilesCommand = async (
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListInstanceProfilesRequest(input, context),
    [_A]: _LIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListInstanceProfilesForRoleCommand
 */
export const se_ListInstanceProfilesForRoleCommand = async (
  input: ListInstanceProfilesForRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListInstanceProfilesForRoleRequest(input, context),
    [_A]: _LIPFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListInstanceProfileTagsCommand
 */
export const se_ListInstanceProfileTagsCommand = async (
  input: ListInstanceProfileTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListInstanceProfileTagsRequest(input, context),
    [_A]: _LIPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListMFADevicesCommand
 */
export const se_ListMFADevicesCommand = async (
  input: ListMFADevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListMFADevicesRequest(input, context),
    [_A]: _LMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListMFADeviceTagsCommand
 */
export const se_ListMFADeviceTagsCommand = async (
  input: ListMFADeviceTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListMFADeviceTagsRequest(input, context),
    [_A]: _LMFADT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListOpenIDConnectProvidersCommand
 */
export const se_ListOpenIDConnectProvidersCommand = async (
  input: ListOpenIDConnectProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListOpenIDConnectProvidersRequest(input, context),
    [_A]: _LOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListOpenIDConnectProviderTagsCommand
 */
export const se_ListOpenIDConnectProviderTagsCommand = async (
  input: ListOpenIDConnectProviderTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListOpenIDConnectProviderTagsRequest(input, context),
    [_A]: _LOIDCPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListOrganizationsFeaturesCommand
 */
export const se_ListOrganizationsFeaturesCommand = async (
  input: ListOrganizationsFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListOrganizationsFeaturesRequest(input, context),
    [_A]: _LOF,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPoliciesRequest(input, context),
    [_A]: _LP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPoliciesGrantingServiceAccessCommand
 */
export const se_ListPoliciesGrantingServiceAccessCommand = async (
  input: ListPoliciesGrantingServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPoliciesGrantingServiceAccessRequest(input, context),
    [_A]: _LPGSA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPolicyTagsCommand
 */
export const se_ListPolicyTagsCommand = async (
  input: ListPolicyTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPolicyTagsRequest(input, context),
    [_A]: _LPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListPolicyVersionsCommand
 */
export const se_ListPolicyVersionsCommand = async (
  input: ListPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListPolicyVersionsRequest(input, context),
    [_A]: _LPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListRolePoliciesCommand
 */
export const se_ListRolePoliciesCommand = async (
  input: ListRolePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListRolePoliciesRequest(input, context),
    [_A]: _LRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListRolesCommand
 */
export const se_ListRolesCommand = async (
  input: ListRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListRolesRequest(input, context),
    [_A]: _LR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListRoleTagsCommand
 */
export const se_ListRoleTagsCommand = async (
  input: ListRoleTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListRoleTagsRequest(input, context),
    [_A]: _LRT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSAMLProvidersCommand
 */
export const se_ListSAMLProvidersCommand = async (
  input: ListSAMLProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSAMLProvidersRequest(input, context),
    [_A]: _LSAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSAMLProviderTagsCommand
 */
export const se_ListSAMLProviderTagsCommand = async (
  input: ListSAMLProviderTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSAMLProviderTagsRequest(input, context),
    [_A]: _LSAMLPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListServerCertificatesCommand
 */
export const se_ListServerCertificatesCommand = async (
  input: ListServerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListServerCertificatesRequest(input, context),
    [_A]: _LSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListServerCertificateTagsCommand
 */
export const se_ListServerCertificateTagsCommand = async (
  input: ListServerCertificateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListServerCertificateTagsRequest(input, context),
    [_A]: _LSCT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListServiceSpecificCredentialsCommand
 */
export const se_ListServiceSpecificCredentialsCommand = async (
  input: ListServiceSpecificCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListServiceSpecificCredentialsRequest(input, context),
    [_A]: _LSSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSigningCertificatesCommand
 */
export const se_ListSigningCertificatesCommand = async (
  input: ListSigningCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSigningCertificatesRequest(input, context),
    [_A]: _LSCi,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListSSHPublicKeysCommand
 */
export const se_ListSSHPublicKeysCommand = async (
  input: ListSSHPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListSSHPublicKeysRequest(input, context),
    [_A]: _LSSHPK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListUserPoliciesCommand
 */
export const se_ListUserPoliciesCommand = async (
  input: ListUserPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListUserPoliciesRequest(input, context),
    [_A]: _LUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListUsersRequest(input, context),
    [_A]: _LU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListUserTagsCommand
 */
export const se_ListUserTagsCommand = async (
  input: ListUserTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListUserTagsRequest(input, context),
    [_A]: _LUT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListVirtualMFADevicesCommand
 */
export const se_ListVirtualMFADevicesCommand = async (
  input: ListVirtualMFADevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListVirtualMFADevicesRequest(input, context),
    [_A]: _LVMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutGroupPolicyCommand
 */
export const se_PutGroupPolicyCommand = async (
  input: PutGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutGroupPolicyRequest(input, context),
    [_A]: _PGP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutRolePermissionsBoundaryCommand
 */
export const se_PutRolePermissionsBoundaryCommand = async (
  input: PutRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutRolePermissionsBoundaryRequest(input, context),
    [_A]: _PRPB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutRolePolicyCommand
 */
export const se_PutRolePolicyCommand = async (
  input: PutRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutRolePolicyRequest(input, context),
    [_A]: _PRP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutUserPermissionsBoundaryCommand
 */
export const se_PutUserPermissionsBoundaryCommand = async (
  input: PutUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutUserPermissionsBoundaryRequest(input, context),
    [_A]: _PUPB,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutUserPolicyCommand
 */
export const se_PutUserPolicyCommand = async (
  input: PutUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutUserPolicyRequest(input, context),
    [_A]: _PUP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand
 */
export const se_RemoveClientIDFromOpenIDConnectProviderCommand = async (
  input: RemoveClientIDFromOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveClientIDFromOpenIDConnectProviderRequest(input, context),
    [_A]: _RCIDFOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveRoleFromInstanceProfileCommand
 */
export const se_RemoveRoleFromInstanceProfileCommand = async (
  input: RemoveRoleFromInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveRoleFromInstanceProfileRequest(input, context),
    [_A]: _RRFIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryRemoveUserFromGroupCommand
 */
export const se_RemoveUserFromGroupCommand = async (
  input: RemoveUserFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_RemoveUserFromGroupRequest(input, context),
    [_A]: _RUFG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResetServiceSpecificCredentialCommand
 */
export const se_ResetServiceSpecificCredentialCommand = async (
  input: ResetServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResetServiceSpecificCredentialRequest(input, context),
    [_A]: _RSSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryResyncMFADeviceCommand
 */
export const se_ResyncMFADeviceCommand = async (
  input: ResyncMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ResyncMFADeviceRequest(input, context),
    [_A]: _RMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetDefaultPolicyVersionCommand
 */
export const se_SetDefaultPolicyVersionCommand = async (
  input: SetDefaultPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetDefaultPolicyVersionRequest(input, context),
    [_A]: _SDPV,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetSecurityTokenServicePreferencesCommand
 */
export const se_SetSecurityTokenServicePreferencesCommand = async (
  input: SetSecurityTokenServicePreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetSecurityTokenServicePreferencesRequest(input, context),
    [_A]: _SSTSP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySimulateCustomPolicyCommand
 */
export const se_SimulateCustomPolicyCommand = async (
  input: SimulateCustomPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SimulateCustomPolicyRequest(input, context),
    [_A]: _SCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySimulatePrincipalPolicyCommand
 */
export const se_SimulatePrincipalPolicyCommand = async (
  input: SimulatePrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SimulatePrincipalPolicyRequest(input, context),
    [_A]: _SPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagInstanceProfileCommand
 */
export const se_TagInstanceProfileCommand = async (
  input: TagInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagInstanceProfileRequest(input, context),
    [_A]: _TIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagMFADeviceCommand
 */
export const se_TagMFADeviceCommand = async (
  input: TagMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagMFADeviceRequest(input, context),
    [_A]: _TMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagOpenIDConnectProviderCommand
 */
export const se_TagOpenIDConnectProviderCommand = async (
  input: TagOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagOpenIDConnectProviderRequest(input, context),
    [_A]: _TOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagPolicyCommand
 */
export const se_TagPolicyCommand = async (
  input: TagPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagPolicyRequest(input, context),
    [_A]: _TP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagRoleCommand
 */
export const se_TagRoleCommand = async (
  input: TagRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagRoleRequest(input, context),
    [_A]: _TR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagSAMLProviderCommand
 */
export const se_TagSAMLProviderCommand = async (
  input: TagSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagSAMLProviderRequest(input, context),
    [_A]: _TSAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagServerCertificateCommand
 */
export const se_TagServerCertificateCommand = async (
  input: TagServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagServerCertificateRequest(input, context),
    [_A]: _TSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagUserCommand
 */
export const se_TagUserCommand = async (
  input: TagUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagUserRequest(input, context),
    [_A]: _TU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagInstanceProfileCommand
 */
export const se_UntagInstanceProfileCommand = async (
  input: UntagInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagInstanceProfileRequest(input, context),
    [_A]: _UIP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagMFADeviceCommand
 */
export const se_UntagMFADeviceCommand = async (
  input: UntagMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagMFADeviceRequest(input, context),
    [_A]: _UMFAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagOpenIDConnectProviderCommand
 */
export const se_UntagOpenIDConnectProviderCommand = async (
  input: UntagOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagOpenIDConnectProviderRequest(input, context),
    [_A]: _UOIDCP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagPolicyCommand
 */
export const se_UntagPolicyCommand = async (
  input: UntagPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagPolicyRequest(input, context),
    [_A]: _UP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagRoleCommand
 */
export const se_UntagRoleCommand = async (
  input: UntagRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagRoleRequest(input, context),
    [_A]: _UR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagSAMLProviderCommand
 */
export const se_UntagSAMLProviderCommand = async (
  input: UntagSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagSAMLProviderRequest(input, context),
    [_A]: _USAMLP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagServerCertificateCommand
 */
export const se_UntagServerCertificateCommand = async (
  input: UntagServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagServerCertificateRequest(input, context),
    [_A]: _USC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagUserCommand
 */
export const se_UntagUserCommand = async (
  input: UntagUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagUserRequest(input, context),
    [_A]: _UU,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAccessKeyCommand
 */
export const se_UpdateAccessKeyCommand = async (
  input: UpdateAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAccessKeyRequest(input, context),
    [_A]: _UAK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAccountPasswordPolicyCommand
 */
export const se_UpdateAccountPasswordPolicyCommand = async (
  input: UpdateAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAccountPasswordPolicyRequest(input, context),
    [_A]: _UAPP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateAssumeRolePolicyCommand
 */
export const se_UpdateAssumeRolePolicyCommand = async (
  input: UpdateAssumeRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateAssumeRolePolicyRequest(input, context),
    [_A]: _UARP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateGroupRequest(input, context),
    [_A]: _UG,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateLoginProfileCommand
 */
export const se_UpdateLoginProfileCommand = async (
  input: UpdateLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateLoginProfileRequest(input, context),
    [_A]: _ULP,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand
 */
export const se_UpdateOpenIDConnectProviderThumbprintCommand = async (
  input: UpdateOpenIDConnectProviderThumbprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateOpenIDConnectProviderThumbprintRequest(input, context),
    [_A]: _UOIDCPT,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateRoleCommand
 */
export const se_UpdateRoleCommand = async (
  input: UpdateRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateRoleRequest(input, context),
    [_A]: _URp,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateRoleDescriptionCommand
 */
export const se_UpdateRoleDescriptionCommand = async (
  input: UpdateRoleDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateRoleDescriptionRequest(input, context),
    [_A]: _URD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateSAMLProviderCommand
 */
export const se_UpdateSAMLProviderCommand = async (
  input: UpdateSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateSAMLProviderRequest(input, context),
    [_A]: _USAMLPp,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateServerCertificateCommand
 */
export const se_UpdateServerCertificateCommand = async (
  input: UpdateServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateServerCertificateRequest(input, context),
    [_A]: _USCp,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateServiceSpecificCredentialCommand
 */
export const se_UpdateServiceSpecificCredentialCommand = async (
  input: UpdateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateServiceSpecificCredentialRequest(input, context),
    [_A]: _USSC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateSigningCertificateCommand
 */
export const se_UpdateSigningCertificateCommand = async (
  input: UpdateSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateSigningCertificateRequest(input, context),
    [_A]: _USCpd,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateSSHPublicKeyCommand
 */
export const se_UpdateSSHPublicKeyCommand = async (
  input: UpdateSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateSSHPublicKeyRequest(input, context),
    [_A]: _USSHPK,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UpdateUserRequest(input, context),
    [_A]: _UUp,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUploadServerCertificateCommand
 */
export const se_UploadServerCertificateCommand = async (
  input: UploadServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UploadServerCertificateRequest(input, context),
    [_A]: _USCpl,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUploadSigningCertificateCommand
 */
export const se_UploadSigningCertificateCommand = async (
  input: UploadSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UploadSigningCertificateRequest(input, context),
    [_A]: _USCplo,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUploadSSHPublicKeyCommand
 */
export const se_UploadSSHPublicKeyCommand = async (
  input: UploadSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UploadSSHPublicKeyRequest(input, context),
    [_A]: _USSHPKp,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand
 */
export const de_AddClientIDToOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddClientIDToOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddRoleToInstanceProfileCommand
 */
export const de_AddRoleToInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddUserToGroupCommand
 */
export const de_AddUserToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUserToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddUserToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachGroupPolicyCommand
 */
export const de_AttachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachRolePolicyCommand
 */
export const de_AttachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachUserPolicyCommand
 */
export const de_AttachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryChangePasswordCommand
 */
export const de_ChangePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ChangePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateAccessKeyCommand
 */
export const de_CreateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAccessKeyResponse(data.CreateAccessKeyResult, context);
  const response: CreateAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateAccountAliasCommand
 */
export const de_CreateAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGroupResponse(data.CreateGroupResult, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateInstanceProfileCommand
 */
export const de_CreateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateLoginProfileCommand
 */
export const de_CreateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateLoginProfileResponse(data.CreateLoginProfileResult, context);
  const response: CreateLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateOpenIDConnectProviderCommand
 */
export const de_CreateOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
  const response: CreateOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyResponse(data.CreatePolicyResult, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreatePolicyVersionCommand
 */
export const de_CreatePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
  const response: CreatePolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateRoleCommand
 */
export const de_CreateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRoleResponse(data.CreateRoleResult, context);
  const response: CreateRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateSAMLProviderCommand
 */
export const de_CreateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
  const response: CreateSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateServiceLinkedRoleCommand
 */
export const de_CreateServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
  const response: CreateServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateServiceSpecificCredentialCommand
 */
export const de_CreateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceSpecificCredentialResponse(data.CreateServiceSpecificCredentialResult, context);
  const response: CreateServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserResponse(data.CreateUserResult, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryCreateVirtualMFADeviceCommand
 */
export const de_CreateVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
  const response: CreateVirtualMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeactivateMFADeviceCommand
 */
export const de_DeactivateMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccessKeyCommand
 */
export const de_DeleteAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccountAliasCommand
 */
export const de_DeleteAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccountPasswordPolicyCommand
 */
export const de_DeleteAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGroupPolicyCommand
 */
export const de_DeleteGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteInstanceProfileCommand
 */
export const de_DeleteInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoginProfileCommand
 */
export const de_DeleteLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteOpenIDConnectProviderCommand
 */
export const de_DeleteOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyVersionCommand
 */
export const de_DeletePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRoleCommand
 */
export const de_DeleteRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRolePermissionsBoundaryCommand
 */
export const de_DeleteRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRolePolicyCommand
 */
export const de_DeleteRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSAMLProviderCommand
 */
export const de_DeleteSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServerCertificateCommand
 */
export const de_DeleteServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServiceLinkedRoleCommand
 */
export const de_DeleteServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
  const response: DeleteServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServiceSpecificCredentialCommand
 */
export const de_DeleteServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSigningCertificateCommand
 */
export const de_DeleteSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSSHPublicKeyCommand
 */
export const de_DeleteSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserPermissionsBoundaryCommand
 */
export const de_DeleteUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserPolicyCommand
 */
export const de_DeleteUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteVirtualMFADeviceCommand
 */
export const de_DeleteVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVirtualMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachGroupPolicyCommand
 */
export const de_DetachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachRolePolicyCommand
 */
export const de_DetachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachUserPolicyCommand
 */
export const de_DetachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDisableOrganizationsRootCredentialsManagementCommand
 */
export const de_DisableOrganizationsRootCredentialsManagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationsRootCredentialsManagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableOrganizationsRootCredentialsManagementResponse(
    data.DisableOrganizationsRootCredentialsManagementResult,
    context
  );
  const response: DisableOrganizationsRootCredentialsManagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisableOrganizationsRootSessionsCommand
 */
export const de_DisableOrganizationsRootSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationsRootSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableOrganizationsRootSessionsResponse(data.DisableOrganizationsRootSessionsResult, context);
  const response: DisableOrganizationsRootSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableMFADeviceCommand
 */
export const de_EnableMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnableOrganizationsRootCredentialsManagementCommand
 */
export const de_EnableOrganizationsRootCredentialsManagementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationsRootCredentialsManagementCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableOrganizationsRootCredentialsManagementResponse(
    data.EnableOrganizationsRootCredentialsManagementResult,
    context
  );
  const response: EnableOrganizationsRootCredentialsManagementCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableOrganizationsRootSessionsCommand
 */
export const de_EnableOrganizationsRootSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationsRootSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableOrganizationsRootSessionsResponse(data.EnableOrganizationsRootSessionsResult, context);
  const response: EnableOrganizationsRootSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGenerateCredentialReportCommand
 */
export const de_GenerateCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCredentialReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
  const response: GenerateCredentialReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGenerateOrganizationsAccessReportCommand
 */
export const de_GenerateOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateOrganizationsAccessReportResponse(data.GenerateOrganizationsAccessReportResult, context);
  const response: GenerateOrganizationsAccessReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGenerateServiceLastAccessedDetailsCommand
 */
export const de_GenerateServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateServiceLastAccessedDetailsResponse(data.GenerateServiceLastAccessedDetailsResult, context);
  const response: GenerateServiceLastAccessedDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccessKeyLastUsedCommand
 */
export const de_GetAccessKeyLastUsedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyLastUsedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
  const response: GetAccessKeyLastUsedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccountAuthorizationDetailsCommand
 */
export const de_GetAccountAuthorizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountAuthorizationDetailsResponse(data.GetAccountAuthorizationDetailsResult, context);
  const response: GetAccountAuthorizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccountPasswordPolicyCommand
 */
export const de_GetAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
  const response: GetAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetAccountSummaryCommand
 */
export const de_GetAccountSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountSummaryResponse(data.GetAccountSummaryResult, context);
  const response: GetAccountSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetContextKeysForCustomPolicyCommand
 */
export const de_GetContextKeysForCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
  const response: GetContextKeysForCustomPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetContextKeysForPrincipalPolicyCommand
 */
export const de_GetContextKeysForPrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
  const response: GetContextKeysForPrincipalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetCredentialReportCommand
 */
export const de_GetCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCredentialReportResponse(data.GetCredentialReportResult, context);
  const response: GetCredentialReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupResponse(data.GetGroupResult, context);
  const response: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetGroupPolicyCommand
 */
export const de_GetGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupPolicyResponse(data.GetGroupPolicyResult, context);
  const response: GetGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetInstanceProfileCommand
 */
export const de_GetInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceProfileResponse(data.GetInstanceProfileResult, context);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetLoginProfileCommand
 */
export const de_GetLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLoginProfileResponse(data.GetLoginProfileResult, context);
  const response: GetLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetMFADeviceCommand
 */
export const de_GetMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMFADeviceResponse(data.GetMFADeviceResult, context);
  const response: GetMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetOpenIDConnectProviderCommand
 */
export const de_GetOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
  const response: GetOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetOrganizationsAccessReportCommand
 */
export const de_GetOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
  const response: GetOrganizationsAccessReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyResponse(data.GetPolicyResult, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetPolicyVersionCommand
 */
export const de_GetPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyVersionResponse(data.GetPolicyVersionResult, context);
  const response: GetPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetRoleCommand
 */
export const de_GetRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRoleResponse(data.GetRoleResult, context);
  const response: GetRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetRolePolicyCommand
 */
export const de_GetRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRolePolicyResponse(data.GetRolePolicyResult, context);
  const response: GetRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSAMLProviderCommand
 */
export const de_GetSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSAMLProviderResponse(data.GetSAMLProviderResult, context);
  const response: GetSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetServerCertificateCommand
 */
export const de_GetServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServerCertificateResponse(data.GetServerCertificateResult, context);
  const response: GetServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsCommand
 */
export const de_GetServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceLastAccessedDetailsResponse(data.GetServiceLastAccessedDetailsResult, context);
  const response: GetServiceLastAccessedDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand
 */
export const de_GetServiceLastAccessedDetailsWithEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceLastAccessedDetailsWithEntitiesResponse(
    data.GetServiceLastAccessedDetailsWithEntitiesResult,
    context
  );
  const response: GetServiceLastAccessedDetailsWithEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand
 */
export const de_GetServiceLinkedRoleDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceLinkedRoleDeletionStatusResponse(data.GetServiceLinkedRoleDeletionStatusResult, context);
  const response: GetServiceLinkedRoleDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetSSHPublicKeyCommand
 */
export const de_GetSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
  const response: GetSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserResponse(data.GetUserResult, context);
  const response: GetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetUserPolicyCommand
 */
export const de_GetUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserPolicyResponse(data.GetUserPolicyResult, context);
  const response: GetUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAccessKeysCommand
 */
export const de_ListAccessKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccessKeysResponse(data.ListAccessKeysResult, context);
  const response: ListAccessKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAccountAliasesCommand
 */
export const de_ListAccountAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccountAliasesResponse(data.ListAccountAliasesResult, context);
  const response: ListAccountAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAttachedGroupPoliciesCommand
 */
export const de_ListAttachedGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
  const response: ListAttachedGroupPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAttachedRolePoliciesCommand
 */
export const de_ListAttachedRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
  const response: ListAttachedRolePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListAttachedUserPoliciesCommand
 */
export const de_ListAttachedUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
  const response: ListAttachedUserPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListEntitiesForPolicyCommand
 */
export const de_ListEntitiesForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesForPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
  const response: ListEntitiesForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListGroupPoliciesCommand
 */
export const de_ListGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
  const response: ListGroupPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupsResponse(data.ListGroupsResult, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListGroupsForUserCommand
 */
export const de_ListGroupsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupsForUserResponse(data.ListGroupsForUserResult, context);
  const response: ListGroupsForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListInstanceProfilesCommand
 */
export const de_ListInstanceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListInstanceProfilesForRoleCommand
 */
export const de_ListInstanceProfilesForRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
  const response: ListInstanceProfilesForRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListInstanceProfileTagsCommand
 */
export const de_ListInstanceProfileTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfileTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstanceProfileTagsResponse(data.ListInstanceProfileTagsResult, context);
  const response: ListInstanceProfileTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListMFADevicesCommand
 */
export const de_ListMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMFADevicesResponse(data.ListMFADevicesResult, context);
  const response: ListMFADevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListMFADeviceTagsCommand
 */
export const de_ListMFADeviceTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADeviceTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMFADeviceTagsResponse(data.ListMFADeviceTagsResult, context);
  const response: ListMFADeviceTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListOpenIDConnectProvidersCommand
 */
export const de_ListOpenIDConnectProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
  const response: ListOpenIDConnectProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListOpenIDConnectProviderTagsCommand
 */
export const de_ListOpenIDConnectProviderTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProviderTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOpenIDConnectProviderTagsResponse(data.ListOpenIDConnectProviderTagsResult, context);
  const response: ListOpenIDConnectProviderTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListOrganizationsFeaturesCommand
 */
export const de_ListOrganizationsFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsFeaturesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOrganizationsFeaturesResponse(data.ListOrganizationsFeaturesResult, context);
  const response: ListOrganizationsFeaturesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesResponse(data.ListPoliciesResult, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPoliciesGrantingServiceAccessCommand
 */
export const de_ListPoliciesGrantingServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesGrantingServiceAccessResponse(data.ListPoliciesGrantingServiceAccessResult, context);
  const response: ListPoliciesGrantingServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPolicyTagsCommand
 */
export const de_ListPolicyTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyTagsResponse(data.ListPolicyTagsResult, context);
  const response: ListPolicyTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListPolicyVersionsCommand
 */
export const de_ListPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
  const response: ListPolicyVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListRolePoliciesCommand
 */
export const de_ListRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRolePoliciesResponse(data.ListRolePoliciesResult, context);
  const response: ListRolePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListRolesCommand
 */
export const de_ListRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRolesResponse(data.ListRolesResult, context);
  const response: ListRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListRoleTagsCommand
 */
export const de_ListRoleTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRoleTagsResponse(data.ListRoleTagsResult, context);
  const response: ListRoleTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSAMLProvidersCommand
 */
export const de_ListSAMLProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
  const response: ListSAMLProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSAMLProviderTagsCommand
 */
export const de_ListSAMLProviderTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProviderTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSAMLProviderTagsResponse(data.ListSAMLProviderTagsResult, context);
  const response: ListSAMLProviderTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListServerCertificatesCommand
 */
export const de_ListServerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServerCertificatesResponse(data.ListServerCertificatesResult, context);
  const response: ListServerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListServerCertificateTagsCommand
 */
export const de_ListServerCertificateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServerCertificateTagsResponse(data.ListServerCertificateTagsResult, context);
  const response: ListServerCertificateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListServiceSpecificCredentialsCommand
 */
export const de_ListServiceSpecificCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceSpecificCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceSpecificCredentialsResponse(data.ListServiceSpecificCredentialsResult, context);
  const response: ListServiceSpecificCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSigningCertificatesCommand
 */
export const de_ListSigningCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
  const response: ListSigningCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListSSHPublicKeysCommand
 */
export const de_ListSSHPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSSHPublicKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
  const response: ListSSHPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListUserPoliciesCommand
 */
export const de_ListUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserPoliciesResponse(data.ListUserPoliciesResult, context);
  const response: ListUserPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersResponse(data.ListUsersResult, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListUserTagsCommand
 */
export const de_ListUserTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserTagsResponse(data.ListUserTagsResult, context);
  const response: ListUserTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListVirtualMFADevicesCommand
 */
export const de_ListVirtualMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMFADevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
  const response: ListVirtualMFADevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutGroupPolicyCommand
 */
export const de_PutGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutRolePermissionsBoundaryCommand
 */
export const de_PutRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutRolePolicyCommand
 */
export const de_PutRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutUserPermissionsBoundaryCommand
 */
export const de_PutUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutUserPolicyCommand
 */
export const de_PutUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand
 */
export const de_RemoveClientIDFromOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveClientIDFromOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveRoleFromInstanceProfileCommand
 */
export const de_RemoveRoleFromInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveUserFromGroupCommand
 */
export const de_RemoveUserFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveUserFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveUserFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryResetServiceSpecificCredentialCommand
 */
export const de_ResetServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetServiceSpecificCredentialResponse(data.ResetServiceSpecificCredentialResult, context);
  const response: ResetServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryResyncMFADeviceCommand
 */
export const de_ResyncMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResyncMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResyncMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetDefaultPolicyVersionCommand
 */
export const de_SetDefaultPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDefaultPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetSecurityTokenServicePreferencesCommand
 */
export const de_SetSecurityTokenServicePreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSecurityTokenServicePreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySimulateCustomPolicyCommand
 */
export const de_SimulateCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulateCustomPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
  const response: SimulateCustomPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySimulatePrincipalPolicyCommand
 */
export const de_SimulatePrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
  const response: SimulatePrincipalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTagInstanceProfileCommand
 */
export const de_TagInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagMFADeviceCommand
 */
export const de_TagMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagOpenIDConnectProviderCommand
 */
export const de_TagOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagPolicyCommand
 */
export const de_TagPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagRoleCommand
 */
export const de_TagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagSAMLProviderCommand
 */
export const de_TagSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagServerCertificateCommand
 */
export const de_TagServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagUserCommand
 */
export const de_TagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagInstanceProfileCommand
 */
export const de_UntagInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagMFADeviceCommand
 */
export const de_UntagMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagOpenIDConnectProviderCommand
 */
export const de_UntagOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagPolicyCommand
 */
export const de_UntagPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagRoleCommand
 */
export const de_UntagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagSAMLProviderCommand
 */
export const de_UntagSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagServerCertificateCommand
 */
export const de_UntagServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagUserCommand
 */
export const de_UntagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccessKeyCommand
 */
export const de_UpdateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccountPasswordPolicyCommand
 */
export const de_UpdateAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAssumeRolePolicyCommand
 */
export const de_UpdateAssumeRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssumeRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAssumeRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateLoginProfileCommand
 */
export const de_UpdateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand
 */
export const de_UpdateOpenIDConnectProviderThumbprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateOpenIDConnectProviderThumbprintCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateRoleCommand
 */
export const de_UpdateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRoleResponse(data.UpdateRoleResult, context);
  const response: UpdateRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateRoleDescriptionCommand
 */
export const de_UpdateRoleDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
  const response: UpdateRoleDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateSAMLProviderCommand
 */
export const de_UpdateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
  const response: UpdateSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUpdateServerCertificateCommand
 */
export const de_UpdateServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateServiceSpecificCredentialCommand
 */
export const de_UpdateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateSigningCertificateCommand
 */
export const de_UpdateSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateSSHPublicKeyCommand
 */
export const de_UpdateSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUploadServerCertificateCommand
 */
export const de_UploadServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UploadServerCertificateResponse(data.UploadServerCertificateResult, context);
  const response: UploadServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUploadSigningCertificateCommand
 */
export const de_UploadSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
  const response: UploadSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUploadSSHPublicKeyCommand
 */
export const de_UploadSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
  const response: UploadSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "InvalidUserType":
    case "com.amazonaws.iam#InvalidUserTypeException":
      throw await de_InvalidUserTypeExceptionRes(parsedOutput, context);
    case "PasswordPolicyViolation":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      throw await de_PasswordPolicyViolationExceptionRes(parsedOutput, context);
    case "OpenIdIdpCommunicationError":
    case "com.amazonaws.iam#OpenIdIdpCommunicationErrorException":
      throw await de_OpenIdIdpCommunicationErrorExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NotSupportedService":
    case "com.amazonaws.iam#ServiceNotSupportedException":
      throw await de_ServiceNotSupportedExceptionRes(parsedOutput, context);
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "AccountNotManagementOrDelegatedAdministratorException":
    case "com.amazonaws.iam#AccountNotManagementOrDelegatedAdministratorException":
      throw await de_AccountNotManagementOrDelegatedAdministratorExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.iam#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.iam#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "ServiceAccessNotEnabledException":
    case "com.amazonaws.iam#ServiceAccessNotEnabledException":
      throw await de_ServiceAccessNotEnabledExceptionRes(parsedOutput, context);
    case "InvalidAuthenticationCode":
    case "com.amazonaws.iam#InvalidAuthenticationCodeException":
      throw await de_InvalidAuthenticationCodeExceptionRes(parsedOutput, context);
    case "CallerIsNotManagementAccountException":
    case "com.amazonaws.iam#CallerIsNotManagementAccountException":
      throw await de_CallerIsNotManagementAccountExceptionRes(parsedOutput, context);
    case "ReportGenerationLimitExceeded":
    case "com.amazonaws.iam#ReportGenerationLimitExceededException":
      throw await de_ReportGenerationLimitExceededExceptionRes(parsedOutput, context);
    case "ReportExpired":
    case "com.amazonaws.iam#CredentialReportExpiredException":
      throw await de_CredentialReportExpiredExceptionRes(parsedOutput, context);
    case "ReportInProgress":
    case "com.amazonaws.iam#CredentialReportNotReadyException":
      throw await de_CredentialReportNotReadyExceptionRes(parsedOutput, context);
    case "ReportNotPresent":
    case "com.amazonaws.iam#CredentialReportNotPresentException":
      throw await de_CredentialReportNotPresentExceptionRes(parsedOutput, context);
    case "UnrecognizedPublicKeyEncoding":
    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
      throw await de_UnrecognizedPublicKeyEncodingExceptionRes(parsedOutput, context);
    case "PolicyEvaluation":
    case "com.amazonaws.iam#PolicyEvaluationException":
      throw await de_PolicyEvaluationExceptionRes(parsedOutput, context);
    case "KeyPairMismatch":
    case "com.amazonaws.iam#KeyPairMismatchException":
      throw await de_KeyPairMismatchExceptionRes(parsedOutput, context);
    case "MalformedCertificate":
    case "com.amazonaws.iam#MalformedCertificateException":
      throw await de_MalformedCertificateExceptionRes(parsedOutput, context);
    case "DuplicateCertificate":
    case "com.amazonaws.iam#DuplicateCertificateException":
      throw await de_DuplicateCertificateExceptionRes(parsedOutput, context);
    case "InvalidCertificate":
    case "com.amazonaws.iam#InvalidCertificateException":
      throw await de_InvalidCertificateExceptionRes(parsedOutput, context);
    case "DuplicateSSHPublicKey":
    case "com.amazonaws.iam#DuplicateSSHPublicKeyException":
      throw await de_DuplicateSSHPublicKeyExceptionRes(parsedOutput, context);
    case "InvalidPublicKey":
    case "com.amazonaws.iam#InvalidPublicKeyException":
      throw await de_InvalidPublicKeyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_queryAccountNotManagementOrDelegatedAdministratorExceptionRes
 */
const de_AccountNotManagementOrDelegatedAdministratorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotManagementOrDelegatedAdministratorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountNotManagementOrDelegatedAdministratorException(body.Error, context);
  const exception = new AccountNotManagementOrDelegatedAdministratorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCallerIsNotManagementAccountExceptionRes
 */
const de_CallerIsNotManagementAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallerIsNotManagementAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CallerIsNotManagementAccountException(body.Error, context);
  const exception = new CallerIsNotManagementAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body.Error, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCredentialReportExpiredExceptionRes
 */
const de_CredentialReportExpiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CredentialReportExpiredException(body.Error, context);
  const exception = new CredentialReportExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCredentialReportNotPresentExceptionRes
 */
const de_CredentialReportNotPresentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportNotPresentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CredentialReportNotPresentException(body.Error, context);
  const exception = new CredentialReportNotPresentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryCredentialReportNotReadyExceptionRes
 */
const de_CredentialReportNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CredentialReportNotReadyException(body.Error, context);
  const exception = new CredentialReportNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDeleteConflictExceptionRes
 */
const de_DeleteConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeleteConflictException(body.Error, context);
  const exception = new DeleteConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateCertificateExceptionRes
 */
const de_DuplicateCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateCertificateException(body.Error, context);
  const exception = new DuplicateCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDuplicateSSHPublicKeyExceptionRes
 */
const de_DuplicateSSHPublicKeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateSSHPublicKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateSSHPublicKeyException(body.Error, context);
  const exception = new DuplicateSSHPublicKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEntityAlreadyExistsExceptionRes
 */
const de_EntityAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityAlreadyExistsException(body.Error, context);
  const exception = new EntityAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryEntityTemporarilyUnmodifiableExceptionRes
 */
const de_EntityTemporarilyUnmodifiableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityTemporarilyUnmodifiableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityTemporarilyUnmodifiableException(body.Error, context);
  const exception = new EntityTemporarilyUnmodifiableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidAuthenticationCodeExceptionRes
 */
const de_InvalidAuthenticationCodeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthenticationCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidAuthenticationCodeException(body.Error, context);
  const exception = new InvalidAuthenticationCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidCertificateExceptionRes
 */
const de_InvalidCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCertificateException(body.Error, context);
  const exception = new InvalidCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body.Error, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidPublicKeyExceptionRes
 */
const de_InvalidPublicKeyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPublicKeyException(body.Error, context);
  const exception = new InvalidPublicKeyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidUserTypeExceptionRes
 */
const de_InvalidUserTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidUserTypeException(body.Error, context);
  const exception = new InvalidUserTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryKeyPairMismatchExceptionRes
 */
const de_KeyPairMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyPairMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KeyPairMismatchException(body.Error, context);
  const exception = new KeyPairMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMalformedCertificateExceptionRes
 */
const de_MalformedCertificateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedCertificateException(body.Error, context);
  const exception = new MalformedCertificateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedPolicyDocumentException(body.Error, context);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryNoSuchEntityExceptionRes
 */
const de_NoSuchEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoSuchEntityException(body.Error, context);
  const exception = new NoSuchEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOpenIdIdpCommunicationErrorExceptionRes
 */
const de_OpenIdIdpCommunicationErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OpenIdIdpCommunicationErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OpenIdIdpCommunicationErrorException(body.Error, context);
  const exception = new OpenIdIdpCommunicationErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOrganizationNotFoundExceptionRes
 */
const de_OrganizationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotFoundException(body.Error, context);
  const exception = new OrganizationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryOrganizationNotInAllFeaturesModeExceptionRes
 */
const de_OrganizationNotInAllFeaturesModeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotInAllFeaturesModeException(body.Error, context);
  const exception = new OrganizationNotInAllFeaturesModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPasswordPolicyViolationExceptionRes
 */
const de_PasswordPolicyViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PasswordPolicyViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PasswordPolicyViolationException(body.Error, context);
  const exception = new PasswordPolicyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPolicyEvaluationExceptionRes
 */
const de_PolicyEvaluationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyEvaluationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyEvaluationException(body.Error, context);
  const exception = new PolicyEvaluationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryPolicyNotAttachableExceptionRes
 */
const de_PolicyNotAttachableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotAttachableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PolicyNotAttachableException(body.Error, context);
  const exception = new PolicyNotAttachableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryReportGenerationLimitExceededExceptionRes
 */
const de_ReportGenerationLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReportGenerationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReportGenerationLimitExceededException(body.Error, context);
  const exception = new ReportGenerationLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceAccessNotEnabledExceptionRes
 */
const de_ServiceAccessNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceAccessNotEnabledException(body.Error, context);
  const exception = new ServiceAccessNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceFailureExceptionRes
 */
const de_ServiceFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceFailureException(body.Error, context);
  const exception = new ServiceFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryServiceNotSupportedExceptionRes
 */
const de_ServiceNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceNotSupportedException(body.Error, context);
  const exception = new ServiceNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnmodifiableEntityExceptionRes
 */
const de_UnmodifiableEntityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnmodifiableEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnmodifiableEntityException(body.Error, context);
  const exception = new UnmodifiableEntityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionRes
 */
const de_UnrecognizedPublicKeyEncodingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnrecognizedPublicKeyEncodingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnrecognizedPublicKeyEncodingException(body.Error, context);
  const exception = new UnrecognizedPublicKeyEncodingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryActionNameListType
 */
const se_ActionNameListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAddClientIDToOpenIDConnectProviderRequest
 */
const se_AddClientIDToOpenIDConnectProviderRequest = (
  input: AddClientIDToOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_CID] != null) {
    entries[_CID] = input[_CID];
  }
  return entries;
};

/**
 * serializeAws_queryAddRoleToInstanceProfileRequest
 */
const se_AddRoleToInstanceProfileRequest = (input: AddRoleToInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryAddUserToGroupRequest
 */
const se_AddUserToGroupRequest = (input: AddUserToGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryAttachGroupPolicyRequest
 */
const se_AttachGroupPolicyRequest = (input: AttachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryAttachRolePolicyRequest
 */
const se_AttachRolePolicyRequest = (input: AttachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryAttachUserPolicyRequest
 */
const se_AttachUserPolicyRequest = (input: AttachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryChangePasswordRequest
 */
const se_ChangePasswordRequest = (input: ChangePasswordRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OP] != null) {
    entries[_OP] = input[_OP];
  }
  if (input[_NP] != null) {
    entries[_NP] = input[_NP];
  }
  return entries;
};

/**
 * serializeAws_queryclientIDListType
 */
const se_clientIDListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryContextEntry
 */
const se_ContextEntry = (input: ContextEntry, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_CKN] != null) {
    entries[_CKN] = input[_CKN];
  }
  if (input[_CKV] != null) {
    const memberEntries = se_ContextKeyValueListType(input[_CKV], context);
    if (input[_CKV]?.length === 0) {
      entries.ContextKeyValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextKeyValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_CKT] != null) {
    entries[_CKT] = input[_CKT];
  }
  return entries;
};

/**
 * serializeAws_queryContextEntryListType
 */
const se_ContextEntryListType = (input: ContextEntry[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ContextEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryContextKeyValueListType
 */
const se_ContextKeyValueListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCreateAccessKeyRequest
 */
const se_CreateAccessKeyRequest = (input: CreateAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateAccountAliasRequest
 */
const se_CreateAccountAliasRequest = (input: CreateAccountAliasRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AA] != null) {
    entries[_AA] = input[_AA];
  }
  return entries;
};

/**
 * serializeAws_queryCreateGroupRequest
 */
const se_CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  return entries;
};

/**
 * serializeAws_queryCreateInstanceProfileRequest
 */
const se_CreateInstanceProfileRequest = (input: CreateInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateLoginProfileRequest
 */
const se_CreateLoginProfileRequest = (input: CreateLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_Pa] != null) {
    entries[_Pa] = input[_Pa];
  }
  if (input[_PRR] != null) {
    entries[_PRR] = input[_PRR];
  }
  return entries;
};

/**
 * serializeAws_queryCreateOpenIDConnectProviderRequest
 */
const se_CreateOpenIDConnectProviderRequest = (
  input: CreateOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  if (input[_CIDL] != null) {
    const memberEntries = se_clientIDListType(input[_CIDL], context);
    if (input[_CIDL]?.length === 0) {
      entries.ClientIDList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClientIDList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TL] != null) {
    const memberEntries = se_thumbprintListType(input[_TL], context);
    if (input[_TL]?.length === 0) {
      entries.ThumbprintList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ThumbprintList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreatePolicyRequest
 */
const se_CreatePolicyRequest = (input: CreatePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreatePolicyVersionRequest
 */
const se_CreatePolicyVersionRequest = (input: CreatePolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  if (input[_SAD] != null) {
    entries[_SAD] = input[_SAD];
  }
  return entries;
};

/**
 * serializeAws_queryCreateRoleRequest
 */
const se_CreateRoleRequest = (input: CreateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_ARPD] != null) {
    entries[_ARPD] = input[_ARPD];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_MSD] != null) {
    entries[_MSD] = input[_MSD];
  }
  if (input[_PB] != null) {
    entries[_PB] = input[_PB];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateSAMLProviderRequest
 */
const se_CreateSAMLProviderRequest = (input: CreateSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLMD] != null) {
    entries[_SAMLMD] = input[_SAMLMD];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AEM] != null) {
    entries[_AEM] = input[_AEM];
  }
  if (input[_APK] != null) {
    entries[_APK] = input[_APK];
  }
  return entries;
};

/**
 * serializeAws_queryCreateServiceLinkedRoleRequest
 */
const se_CreateServiceLinkedRoleRequest = (input: CreateServiceLinkedRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AWSSN] != null) {
    entries[_AWSSN] = input[_AWSSN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_CS] != null) {
    entries[_CS] = input[_CS];
  }
  return entries;
};

/**
 * serializeAws_queryCreateServiceSpecificCredentialRequest
 */
const se_CreateServiceSpecificCredentialRequest = (
  input: CreateServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_CAD] != null) {
    entries[_CAD] = input[_CAD];
  }
  return entries;
};

/**
 * serializeAws_queryCreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PB] != null) {
    entries[_PB] = input[_PB];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryCreateVirtualMFADeviceRequest
 */
const se_CreateVirtualMFADeviceRequest = (input: CreateVirtualMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_VMFADN] != null) {
    entries[_VMFADN] = input[_VMFADN];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeactivateMFADeviceRequest
 */
const se_DeactivateMFADeviceRequest = (input: DeactivateMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccessKeyRequest
 */
const se_DeleteAccessKeyRequest = (input: DeleteAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_AKI] != null) {
    entries[_AKI] = input[_AKI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccountAliasRequest
 */
const se_DeleteAccountAliasRequest = (input: DeleteAccountAliasRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AA] != null) {
    entries[_AA] = input[_AA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGroupPolicyRequest
 */
const se_DeleteGroupPolicyRequest = (input: DeleteGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGroupRequest
 */
const se_DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteInstanceProfileRequest
 */
const se_DeleteInstanceProfileRequest = (input: DeleteInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoginProfileRequest
 */
const se_DeleteLoginProfileRequest = (input: DeleteLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteOpenIDConnectProviderRequest
 */
const se_DeleteOpenIDConnectProviderRequest = (
  input: DeleteOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyRequest
 */
const se_DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyVersionRequest
 */
const se_DeletePolicyVersionRequest = (input: DeletePolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRolePermissionsBoundaryRequest
 */
const se_DeleteRolePermissionsBoundaryRequest = (
  input: DeleteRolePermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRolePolicyRequest
 */
const se_DeleteRolePolicyRequest = (input: DeleteRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRoleRequest
 */
const se_DeleteRoleRequest = (input: DeleteRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSAMLProviderRequest
 */
const se_DeleteSAMLProviderRequest = (input: DeleteSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServerCertificateRequest
 */
const se_DeleteServerCertificateRequest = (input: DeleteServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServiceLinkedRoleRequest
 */
const se_DeleteServiceLinkedRoleRequest = (input: DeleteServiceLinkedRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServiceSpecificCredentialRequest
 */
const se_DeleteServiceSpecificCredentialRequest = (
  input: DeleteServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSCI] != null) {
    entries[_SSCI] = input[_SSCI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSigningCertificateRequest
 */
const se_DeleteSigningCertificateRequest = (input: DeleteSigningCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_CI] != null) {
    entries[_CI] = input[_CI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSSHPublicKeyRequest
 */
const se_DeleteSSHPublicKeyRequest = (input: DeleteSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSHPKI] != null) {
    entries[_SSHPKI] = input[_SSHPKI];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserPermissionsBoundaryRequest
 */
const se_DeleteUserPermissionsBoundaryRequest = (
  input: DeleteUserPermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserPolicyRequest
 */
const se_DeleteUserPolicyRequest = (input: DeleteUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryDeleteVirtualMFADeviceRequest
 */
const se_DeleteVirtualMFADeviceRequest = (input: DeleteVirtualMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  return entries;
};

/**
 * serializeAws_queryDetachGroupPolicyRequest
 */
const se_DetachGroupPolicyRequest = (input: DetachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDetachRolePolicyRequest
 */
const se_DetachRolePolicyRequest = (input: DetachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDetachUserPolicyRequest
 */
const se_DetachUserPolicyRequest = (input: DetachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryDisableOrganizationsRootCredentialsManagementRequest
 */
const se_DisableOrganizationsRootCredentialsManagementRequest = (
  input: DisableOrganizationsRootCredentialsManagementRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryDisableOrganizationsRootSessionsRequest
 */
const se_DisableOrganizationsRootSessionsRequest = (
  input: DisableOrganizationsRootSessionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryEnableMFADeviceRequest
 */
const se_EnableMFADeviceRequest = (input: EnableMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_AC] != null) {
    entries[_AC] = input[_AC];
  }
  if (input[_ACu] != null) {
    entries[_ACu] = input[_ACu];
  }
  return entries;
};

/**
 * serializeAws_queryEnableOrganizationsRootCredentialsManagementRequest
 */
const se_EnableOrganizationsRootCredentialsManagementRequest = (
  input: EnableOrganizationsRootCredentialsManagementRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryEnableOrganizationsRootSessionsRequest
 */
const se_EnableOrganizationsRootSessionsRequest = (
  input: EnableOrganizationsRootSessionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryentityListType
 */
const se_entityListType = (input: EntityType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGenerateOrganizationsAccessReportRequest
 */
const se_GenerateOrganizationsAccessReportRequest = (
  input: GenerateOrganizationsAccessReportRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_EP] != null) {
    entries[_EP] = input[_EP];
  }
  if (input[_OPI] != null) {
    entries[_OPI] = input[_OPI];
  }
  return entries;
};

/**
 * serializeAws_queryGenerateServiceLastAccessedDetailsRequest
 */
const se_GenerateServiceLastAccessedDetailsRequest = (
  input: GenerateServiceLastAccessedDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_G] != null) {
    entries[_G] = input[_G];
  }
  return entries;
};

/**
 * serializeAws_queryGetAccessKeyLastUsedRequest
 */
const se_GetAccessKeyLastUsedRequest = (input: GetAccessKeyLastUsedRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AKI] != null) {
    entries[_AKI] = input[_AKI];
  }
  return entries;
};

/**
 * serializeAws_queryGetAccountAuthorizationDetailsRequest
 */
const se_GetAccountAuthorizationDetailsRequest = (
  input: GetAccountAuthorizationDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_F] != null) {
    const memberEntries = se_entityListType(input[_F], context);
    if (input[_F]?.length === 0) {
      entries.Filter = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryGetContextKeysForCustomPolicyRequest
 */
const se_GetContextKeysForCustomPolicyRequest = (
  input: GetContextKeysForCustomPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_PIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
    if (input[_PIL]?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetContextKeysForPrincipalPolicyRequest
 */
const se_GetContextKeysForPrincipalPolicyRequest = (
  input: GetContextKeysForPrincipalPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_PSA] != null) {
    entries[_PSA] = input[_PSA];
  }
  if (input[_PIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
    if (input[_PIL]?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetGroupPolicyRequest
 */
const se_GetGroupPolicyRequest = (input: GetGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryGetGroupRequest
 */
const se_GetGroupRequest = (input: GetGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryGetInstanceProfileRequest
 */
const se_GetInstanceProfileRequest = (input: GetInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  return entries;
};

/**
 * serializeAws_queryGetLoginProfileRequest
 */
const se_GetLoginProfileRequest = (input: GetLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryGetMFADeviceRequest
 */
const se_GetMFADeviceRequest = (input: GetMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryGetOpenIDConnectProviderRequest
 */
const se_GetOpenIDConnectProviderRequest = (input: GetOpenIDConnectProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  return entries;
};

/**
 * serializeAws_queryGetOrganizationsAccessReportRequest
 */
const se_GetOrganizationsAccessReportRequest = (
  input: GetOrganizationsAccessReportRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_JI] != null) {
    entries[_JI] = input[_JI];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_SK] != null) {
    entries[_SK] = input[_SK];
  }
  return entries;
};

/**
 * serializeAws_queryGetPolicyRequest
 */
const se_GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  return entries;
};

/**
 * serializeAws_queryGetPolicyVersionRequest
 */
const se_GetPolicyVersionRequest = (input: GetPolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  return entries;
};

/**
 * serializeAws_queryGetRolePolicyRequest
 */
const se_GetRolePolicyRequest = (input: GetRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryGetRoleRequest
 */
const se_GetRoleRequest = (input: GetRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryGetSAMLProviderRequest
 */
const se_GetSAMLProviderRequest = (input: GetSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  return entries;
};

/**
 * serializeAws_queryGetServerCertificateRequest
 */
const se_GetServerCertificateRequest = (input: GetServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  return entries;
};

/**
 * serializeAws_queryGetServiceLastAccessedDetailsRequest
 */
const se_GetServiceLastAccessedDetailsRequest = (
  input: GetServiceLastAccessedDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_JI] != null) {
    entries[_JI] = input[_JI];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest
 */
const se_GetServiceLastAccessedDetailsWithEntitiesRequest = (
  input: GetServiceLastAccessedDetailsWithEntitiesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_JI] != null) {
    entries[_JI] = input[_JI];
  }
  if (input[_SNer] != null) {
    entries[_SNer] = input[_SNer];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest
 */
const se_GetServiceLinkedRoleDeletionStatusRequest = (
  input: GetServiceLinkedRoleDeletionStatusRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_DTI] != null) {
    entries[_DTI] = input[_DTI];
  }
  return entries;
};

/**
 * serializeAws_queryGetSSHPublicKeyRequest
 */
const se_GetSSHPublicKeyRequest = (input: GetSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSHPKI] != null) {
    entries[_SSHPKI] = input[_SSHPKI];
  }
  if (input[_E] != null) {
    entries[_E] = input[_E];
  }
  return entries;
};

/**
 * serializeAws_queryGetUserPolicyRequest
 */
const se_GetUserPolicyRequest = (input: GetUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  return entries;
};

/**
 * serializeAws_queryGetUserRequest
 */
const se_GetUserRequest = (input: GetUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryListAccessKeysRequest
 */
const se_ListAccessKeysRequest = (input: ListAccessKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListAccountAliasesRequest
 */
const se_ListAccountAliasesRequest = (input: ListAccountAliasesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedGroupPoliciesRequest
 */
const se_ListAttachedGroupPoliciesRequest = (input: ListAttachedGroupPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedRolePoliciesRequest
 */
const se_ListAttachedRolePoliciesRequest = (input: ListAttachedRolePoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedUserPoliciesRequest
 */
const se_ListAttachedUserPoliciesRequest = (input: ListAttachedUserPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListEntitiesForPolicyRequest
 */
const se_ListEntitiesForPolicyRequest = (input: ListEntitiesForPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_EF] != null) {
    entries[_EF] = input[_EF];
  }
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_PUF] != null) {
    entries[_PUF] = input[_PUF];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListGroupPoliciesRequest
 */
const se_ListGroupPoliciesRequest = (input: ListGroupPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListGroupsForUserRequest
 */
const se_ListGroupsForUserRequest = (input: ListGroupsForUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListGroupsRequest
 */
const se_ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListInstanceProfilesForRoleRequest
 */
const se_ListInstanceProfilesForRoleRequest = (
  input: ListInstanceProfilesForRoleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListInstanceProfilesRequest
 */
const se_ListInstanceProfilesRequest = (input: ListInstanceProfilesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListInstanceProfileTagsRequest
 */
const se_ListInstanceProfileTagsRequest = (input: ListInstanceProfileTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListMFADevicesRequest
 */
const se_ListMFADevicesRequest = (input: ListMFADevicesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListMFADeviceTagsRequest
 */
const se_ListMFADeviceTagsRequest = (input: ListMFADeviceTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListOpenIDConnectProvidersRequest
 */
const se_ListOpenIDConnectProvidersRequest = (
  input: ListOpenIDConnectProvidersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryListOpenIDConnectProviderTagsRequest
 */
const se_ListOpenIDConnectProviderTagsRequest = (
  input: ListOpenIDConnectProviderTagsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListOrganizationsFeaturesRequest
 */
const se_ListOrganizationsFeaturesRequest = (input: ListOrganizationsFeaturesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryListPoliciesGrantingServiceAccessRequest
 */
const se_ListPoliciesGrantingServiceAccessRequest = (
  input: ListPoliciesGrantingServiceAccessRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_Ar] != null) {
    entries[_Ar] = input[_Ar];
  }
  if (input[_SNerv] != null) {
    const memberEntries = se_serviceNamespaceListType(input[_SNerv], context);
    if (input[_SNerv]?.length === 0) {
      entries.ServiceNamespaces = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceNamespaces.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryListPoliciesRequest
 */
const se_ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_PUF] != null) {
    entries[_PUF] = input[_PUF];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListPolicyTagsRequest
 */
const se_ListPolicyTagsRequest = (input: ListPolicyTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListPolicyVersionsRequest
 */
const se_ListPolicyVersionsRequest = (input: ListPolicyVersionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListRolePoliciesRequest
 */
const se_ListRolePoliciesRequest = (input: ListRolePoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListRolesRequest
 */
const se_ListRolesRequest = (input: ListRolesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListRoleTagsRequest
 */
const se_ListRoleTagsRequest = (input: ListRoleTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListSAMLProvidersRequest
 */
const se_ListSAMLProvidersRequest = (input: ListSAMLProvidersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

/**
 * serializeAws_queryListSAMLProviderTagsRequest
 */
const se_ListSAMLProviderTagsRequest = (input: ListSAMLProviderTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListServerCertificatesRequest
 */
const se_ListServerCertificatesRequest = (input: ListServerCertificatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListServerCertificateTagsRequest
 */
const se_ListServerCertificateTagsRequest = (input: ListServerCertificateTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListServiceSpecificCredentialsRequest
 */
const se_ListServiceSpecificCredentialsRequest = (
  input: ListServiceSpecificCredentialsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SN] != null) {
    entries[_SN] = input[_SN];
  }
  if (input[_AU] != null) {
    entries[_AU] = input[_AU];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListSigningCertificatesRequest
 */
const se_ListSigningCertificatesRequest = (input: ListSigningCertificatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListSSHPublicKeysRequest
 */
const se_ListSSHPublicKeysRequest = (input: ListSSHPublicKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListUserPoliciesRequest
 */
const se_ListUserPoliciesRequest = (input: ListUserPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PP] != null) {
    entries[_PP] = input[_PP];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListUserTagsRequest
 */
const se_ListUserTagsRequest = (input: ListUserTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryListVirtualMFADevicesRequest
 */
const se_ListVirtualMFADevicesRequest = (input: ListVirtualMFADevicesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AS] != null) {
    entries[_AS] = input[_AS];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  return entries;
};

/**
 * serializeAws_queryPutGroupPolicyRequest
 */
const se_PutGroupPolicyRequest = (input: PutGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  return entries;
};

/**
 * serializeAws_queryPutRolePermissionsBoundaryRequest
 */
const se_PutRolePermissionsBoundaryRequest = (
  input: PutRolePermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PB] != null) {
    entries[_PB] = input[_PB];
  }
  return entries;
};

/**
 * serializeAws_queryPutRolePolicyRequest
 */
const se_PutRolePolicyRequest = (input: PutRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  return entries;
};

/**
 * serializeAws_queryPutUserPermissionsBoundaryRequest
 */
const se_PutUserPermissionsBoundaryRequest = (
  input: PutUserPermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PB] != null) {
    entries[_PB] = input[_PB];
  }
  return entries;
};

/**
 * serializeAws_queryPutUserPolicyRequest
 */
const se_PutUserPolicyRequest = (input: PutUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_PN] != null) {
    entries[_PN] = input[_PN];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  return entries;
};

/**
 * serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest
 */
const se_RemoveClientIDFromOpenIDConnectProviderRequest = (
  input: RemoveClientIDFromOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_CID] != null) {
    entries[_CID] = input[_CID];
  }
  return entries;
};

/**
 * serializeAws_queryRemoveRoleFromInstanceProfileRequest
 */
const se_RemoveRoleFromInstanceProfileRequest = (
  input: RemoveRoleFromInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  return entries;
};

/**
 * serializeAws_queryRemoveUserFromGroupRequest
 */
const se_RemoveUserFromGroupRequest = (input: RemoveUserFromGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  return entries;
};

/**
 * serializeAws_queryResetServiceSpecificCredentialRequest
 */
const se_ResetServiceSpecificCredentialRequest = (
  input: ResetServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSCI] != null) {
    entries[_SSCI] = input[_SSCI];
  }
  return entries;
};

/**
 * serializeAws_queryResourceNameListType
 */
const se_ResourceNameListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryResyncMFADeviceRequest
 */
const se_ResyncMFADeviceRequest = (input: ResyncMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_AC] != null) {
    entries[_AC] = input[_AC];
  }
  if (input[_ACu] != null) {
    entries[_ACu] = input[_ACu];
  }
  return entries;
};

/**
 * serializeAws_queryserviceNamespaceListType
 */
const se_serviceNamespaceListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetDefaultPolicyVersionRequest
 */
const se_SetDefaultPolicyVersionRequest = (input: SetDefaultPolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_VI] != null) {
    entries[_VI] = input[_VI];
  }
  return entries;
};

/**
 * serializeAws_querySetSecurityTokenServicePreferencesRequest
 */
const se_SetSecurityTokenServicePreferencesRequest = (
  input: SetSecurityTokenServicePreferencesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_GETV] != null) {
    entries[_GETV] = input[_GETV];
  }
  return entries;
};

/**
 * serializeAws_querySimulateCustomPolicyRequest
 */
const se_SimulateCustomPolicyRequest = (input: SimulateCustomPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
    if (input[_PIL]?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PBPIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PBPIL], context);
    if (input[_PBPIL]?.length === 0) {
      entries.PermissionsBoundaryPolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PermissionsBoundaryPolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AN] != null) {
    const memberEntries = se_ActionNameListType(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.ActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RA] != null) {
    const memberEntries = se_ResourceNameListType(input[_RA], context);
    if (input[_RA]?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_RO] != null) {
    entries[_RO] = input[_RO];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_CE] != null) {
    const memberEntries = se_ContextEntryListType(input[_CE], context);
    if (input[_CE]?.length === 0) {
      entries.ContextEntries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RHO] != null) {
    entries[_RHO] = input[_RHO];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_querySimulatePrincipalPolicyRequest
 */
const se_SimulatePrincipalPolicyRequest = (input: SimulatePrincipalPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PSA] != null) {
    entries[_PSA] = input[_PSA];
  }
  if (input[_PIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PIL], context);
    if (input[_PIL]?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_PBPIL] != null) {
    const memberEntries = se_SimulationPolicyListType(input[_PBPIL], context);
    if (input[_PBPIL]?.length === 0) {
      entries.PermissionsBoundaryPolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PermissionsBoundaryPolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AN] != null) {
    const memberEntries = se_ActionNameListType(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.ActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RA] != null) {
    const memberEntries = se_ResourceNameListType(input[_RA], context);
    if (input[_RA]?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RP] != null) {
    entries[_RP] = input[_RP];
  }
  if (input[_RO] != null) {
    entries[_RO] = input[_RO];
  }
  if (input[_CA] != null) {
    entries[_CA] = input[_CA];
  }
  if (input[_CE] != null) {
    const memberEntries = se_ContextEntryListType(input[_CE], context);
    if (input[_CE]?.length === 0) {
      entries.ContextEntries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_RHO] != null) {
    entries[_RHO] = input[_RHO];
  }
  if (input[_MI] != null) {
    entries[_MI] = input[_MI];
  }
  if (input[_M] != null) {
    entries[_M] = input[_M];
  }
  return entries;
};

/**
 * serializeAws_querySimulationPolicyListType
 */
const se_SimulationPolicyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryTagInstanceProfileRequest
 */
const se_TagInstanceProfileRequest = (input: TagInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querytagKeyListType
 */
const se_tagKeyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querytagListType
 */
const se_tagListType = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagMFADeviceRequest
 */
const se_TagMFADeviceRequest = (input: TagMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagOpenIDConnectProviderRequest
 */
const se_TagOpenIDConnectProviderRequest = (input: TagOpenIDConnectProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagPolicyRequest
 */
const se_TagPolicyRequest = (input: TagPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagRoleRequest
 */
const se_TagRoleRequest = (input: TagRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagSAMLProviderRequest
 */
const se_TagSAMLProviderRequest = (input: TagSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagServerCertificateRequest
 */
const se_TagServerCertificateRequest = (input: TagServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTagUserRequest
 */
const se_TagUserRequest = (input: TagUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_querythumbprintListType
 */
const se_thumbprintListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryUntagInstanceProfileRequest
 */
const se_UntagInstanceProfileRequest = (input: UntagInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_IPN] != null) {
    entries[_IPN] = input[_IPN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagMFADeviceRequest
 */
const se_UntagMFADeviceRequest = (input: UntagMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SNe] != null) {
    entries[_SNe] = input[_SNe];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagOpenIDConnectProviderRequest
 */
const se_UntagOpenIDConnectProviderRequest = (
  input: UntagOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagPolicyRequest
 */
const se_UntagPolicyRequest = (input: UntagPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PA] != null) {
    entries[_PA] = input[_PA];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagRoleRequest
 */
const se_UntagRoleRequest = (input: UntagRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagSAMLProviderRequest
 */
const se_UntagSAMLProviderRequest = (input: UntagSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagServerCertificateRequest
 */
const se_UntagServerCertificateRequest = (input: UntagServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagUserRequest
 */
const se_UntagUserRequest = (input: UntagUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_tagKeyListType(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAccessKeyRequest
 */
const se_UpdateAccessKeyRequest = (input: UpdateAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_AKI] != null) {
    entries[_AKI] = input[_AKI];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAccountPasswordPolicyRequest
 */
const se_UpdateAccountPasswordPolicyRequest = (
  input: UpdateAccountPasswordPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_MPL] != null) {
    entries[_MPL] = input[_MPL];
  }
  if (input[_RS] != null) {
    entries[_RS] = input[_RS];
  }
  if (input[_RNe] != null) {
    entries[_RNe] = input[_RNe];
  }
  if (input[_RUC] != null) {
    entries[_RUC] = input[_RUC];
  }
  if (input[_RLC] != null) {
    entries[_RLC] = input[_RLC];
  }
  if (input[_AUTCP] != null) {
    entries[_AUTCP] = input[_AUTCP];
  }
  if (input[_MPA] != null) {
    entries[_MPA] = input[_MPA];
  }
  if (input[_PRPa] != null) {
    entries[_PRPa] = input[_PRPa];
  }
  if (input[_HE] != null) {
    entries[_HE] = input[_HE];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAssumeRolePolicyRequest
 */
const se_UpdateAssumeRolePolicyRequest = (input: UpdateAssumeRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_PD] != null) {
    entries[_PD] = input[_PD];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateGroupRequest
 */
const se_UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_GN] != null) {
    entries[_GN] = input[_GN];
  }
  if (input[_NPe] != null) {
    entries[_NPe] = input[_NPe];
  }
  if (input[_NGN] != null) {
    entries[_NGN] = input[_NGN];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateLoginProfileRequest
 */
const se_UpdateLoginProfileRequest = (input: UpdateLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_Pa] != null) {
    entries[_Pa] = input[_Pa];
  }
  if (input[_PRR] != null) {
    entries[_PRR] = input[_PRR];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest
 */
const se_UpdateOpenIDConnectProviderThumbprintRequest = (
  input: UpdateOpenIDConnectProviderThumbprintRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_OIDCPA] != null) {
    entries[_OIDCPA] = input[_OIDCPA];
  }
  if (input[_TL] != null) {
    const memberEntries = se_thumbprintListType(input[_TL], context);
    if (input[_TL]?.length === 0) {
      entries.ThumbprintList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ThumbprintList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUpdateRoleDescriptionRequest
 */
const se_UpdateRoleDescriptionRequest = (input: UpdateRoleDescriptionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateRoleRequest
 */
const se_UpdateRoleRequest = (input: UpdateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    entries[_RN] = input[_RN];
  }
  if (input[_D] != null) {
    entries[_D] = input[_D];
  }
  if (input[_MSD] != null) {
    entries[_MSD] = input[_MSD];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSAMLProviderRequest
 */
const se_UpdateSAMLProviderRequest = (input: UpdateSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SAMLMD] != null) {
    entries[_SAMLMD] = input[_SAMLMD];
  }
  if (input[_SAMLPA] != null) {
    entries[_SAMLPA] = input[_SAMLPA];
  }
  if (input[_AEM] != null) {
    entries[_AEM] = input[_AEM];
  }
  if (input[_APK] != null) {
    entries[_APK] = input[_APK];
  }
  if (input[_RPK] != null) {
    entries[_RPK] = input[_RPK];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateServerCertificateRequest
 */
const se_UpdateServerCertificateRequest = (input: UpdateServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_NPe] != null) {
    entries[_NPe] = input[_NPe];
  }
  if (input[_NSCN] != null) {
    entries[_NSCN] = input[_NSCN];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateServiceSpecificCredentialRequest
 */
const se_UpdateServiceSpecificCredentialRequest = (
  input: UpdateServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSCI] != null) {
    entries[_SSCI] = input[_SSCI];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSigningCertificateRequest
 */
const se_UpdateSigningCertificateRequest = (input: UpdateSigningCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_CI] != null) {
    entries[_CI] = input[_CI];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSSHPublicKeyRequest
 */
const se_UpdateSSHPublicKeyRequest = (input: UpdateSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSHPKI] != null) {
    entries[_SSHPKI] = input[_SSHPKI];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  return entries;
};

/**
 * serializeAws_queryUpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_NPe] != null) {
    entries[_NPe] = input[_NPe];
  }
  if (input[_NUN] != null) {
    entries[_NUN] = input[_NUN];
  }
  return entries;
};

/**
 * serializeAws_queryUploadServerCertificateRequest
 */
const se_UploadServerCertificateRequest = (input: UploadServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_SCN] != null) {
    entries[_SCN] = input[_SCN];
  }
  if (input[_CB] != null) {
    entries[_CB] = input[_CB];
  }
  if (input[_PK] != null) {
    entries[_PK] = input[_PK];
  }
  if (input[_CC] != null) {
    entries[_CC] = input[_CC];
  }
  if (input[_T] != null) {
    const memberEntries = se_tagListType(input[_T], context);
    if (input[_T]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUploadSigningCertificateRequest
 */
const se_UploadSigningCertificateRequest = (input: UploadSigningCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_CB] != null) {
    entries[_CB] = input[_CB];
  }
  return entries;
};

/**
 * serializeAws_queryUploadSSHPublicKeyRequest
 */
const se_UploadSSHPublicKeyRequest = (input: UploadSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_UN] != null) {
    entries[_UN] = input[_UN];
  }
  if (input[_SSHPKB] != null) {
    entries[_SSHPKB] = input[_SSHPKB];
  }
  return entries;
};

/**
 * deserializeAws_queryAccessDetail
 */
const de_AccessDetail = (output: any, context: __SerdeContext): AccessDetail => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_SNer] != null) {
    contents[_SNer] = __expectString(output[_SNer]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (output[_EP] != null) {
    contents[_EP] = __expectString(output[_EP]);
  }
  if (output[_LAT] != null) {
    contents[_LAT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LAT]));
  }
  if (output[_TAE] != null) {
    contents[_TAE] = __strictParseInt32(output[_TAE]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryAccessDetails
 */
const de_AccessDetails = (output: any, context: __SerdeContext): AccessDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessDetail(entry, context);
    });
};

/**
 * deserializeAws_queryAccessKey
 */
const de_AccessKey = (output: any, context: __SerdeContext): AccessKey => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_AKI] != null) {
    contents[_AKI] = __expectString(output[_AKI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SAK] != null) {
    contents[_SAK] = __expectString(output[_SAK]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  return contents;
};

/**
 * deserializeAws_queryAccessKeyLastUsed
 */
const de_AccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  const contents: any = {};
  if (output[_LUD] != null) {
    contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessKeyMetadata
 */
const de_AccessKeyMetadata = (output: any, context: __SerdeContext): AccessKeyMetadata => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_AKI] != null) {
    contents[_AKI] = __expectString(output[_AKI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  return contents;
};

/**
 * deserializeAws_queryaccessKeyMetadataListType
 */
const de_accessKeyMetadataListType = (output: any, context: __SerdeContext): AccessKeyMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessKeyMetadata(entry, context);
    });
};

/**
 * deserializeAws_queryaccountAliasListType
 */
const de_accountAliasListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAccountNotManagementOrDelegatedAdministratorException
 */
const de_AccountNotManagementOrDelegatedAdministratorException = (
  output: any,
  context: __SerdeContext
): AccountNotManagementOrDelegatedAdministratorException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryArnListType
 */
const de_ArnListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryAttachedPermissionsBoundary
 */
const de_AttachedPermissionsBoundary = (output: any, context: __SerdeContext): AttachedPermissionsBoundary => {
  const contents: any = {};
  if (output[_PBT] != null) {
    contents[_PBT] = __expectString(output[_PBT]);
  }
  if (output[_PBA] != null) {
    contents[_PBA] = __expectString(output[_PBA]);
  }
  return contents;
};

/**
 * deserializeAws_queryattachedPoliciesListType
 */
const de_attachedPoliciesListType = (output: any, context: __SerdeContext): AttachedPolicy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AttachedPolicy(entry, context);
    });
};

/**
 * deserializeAws_queryAttachedPolicy
 */
const de_AttachedPolicy = (output: any, context: __SerdeContext): AttachedPolicy => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  return contents;
};

/**
 * deserializeAws_queryCallerIsNotManagementAccountException
 */
const de_CallerIsNotManagementAccountException = (
  output: any,
  context: __SerdeContext
): CallerIsNotManagementAccountException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_querycertificateListType
 */
const de_certificateListType = (output: any, context: __SerdeContext): SigningCertificate[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SigningCertificate(entry, context);
    });
};

/**
 * deserializeAws_queryCertificationMapType
 */
const de_CertificationMapType = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryclientIDListType
 */
const de_clientIDListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryContextKeyNamesResultListType
 */
const de_ContextKeyNamesResultListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryCreateAccessKeyResponse
 */
const de_CreateAccessKeyResponse = (output: any, context: __SerdeContext): CreateAccessKeyResponse => {
  const contents: any = {};
  if (output[_AK] != null) {
    contents[_AK] = de_AccessKey(output[_AK], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  const contents: any = {};
  if (output[_Gr] != null) {
    contents[_Gr] = de_Group(output[_Gr], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateInstanceProfileResponse
 */
const de_CreateInstanceProfileResponse = (output: any, context: __SerdeContext): CreateInstanceProfileResponse => {
  const contents: any = {};
  if (output[_IP] != null) {
    contents[_IP] = de_InstanceProfile(output[_IP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateLoginProfileResponse
 */
const de_CreateLoginProfileResponse = (output: any, context: __SerdeContext): CreateLoginProfileResponse => {
  const contents: any = {};
  if (output[_LPo] != null) {
    contents[_LPo] = de_LoginProfile(output[_LPo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateOpenIDConnectProviderResponse
 */
const de_CreateOpenIDConnectProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateOpenIDConnectProviderResponse => {
  const contents: any = {};
  if (output[_OIDCPA] != null) {
    contents[_OIDCPA] = __expectString(output[_OIDCPA]);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePolicyResponse
 */
const de_CreatePolicyResponse = (output: any, context: __SerdeContext): CreatePolicyResponse => {
  const contents: any = {};
  if (output[_Po] != null) {
    contents[_Po] = de_Policy(output[_Po], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePolicyVersionResponse
 */
const de_CreatePolicyVersionResponse = (output: any, context: __SerdeContext): CreatePolicyVersionResponse => {
  const contents: any = {};
  if (output[_PV] != null) {
    contents[_PV] = de_PolicyVersion(output[_PV], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateRoleResponse
 */
const de_CreateRoleResponse = (output: any, context: __SerdeContext): CreateRoleResponse => {
  const contents: any = {};
  if (output[_Ro] != null) {
    contents[_Ro] = de_Role(output[_Ro], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSAMLProviderResponse
 */
const de_CreateSAMLProviderResponse = (output: any, context: __SerdeContext): CreateSAMLProviderResponse => {
  const contents: any = {};
  if (output[_SAMLPA] != null) {
    contents[_SAMLPA] = __expectString(output[_SAMLPA]);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateServiceLinkedRoleResponse
 */
const de_CreateServiceLinkedRoleResponse = (output: any, context: __SerdeContext): CreateServiceLinkedRoleResponse => {
  const contents: any = {};
  if (output[_Ro] != null) {
    contents[_Ro] = de_Role(output[_Ro], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateServiceSpecificCredentialResponse
 */
const de_CreateServiceSpecificCredentialResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceSpecificCredentialResponse => {
  const contents: any = {};
  if (output[_SSC] != null) {
    contents[_SSC] = de_ServiceSpecificCredential(output[_SSC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  const contents: any = {};
  if (output[_Us] != null) {
    contents[_Us] = de_User(output[_Us], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateVirtualMFADeviceResponse
 */
const de_CreateVirtualMFADeviceResponse = (output: any, context: __SerdeContext): CreateVirtualMFADeviceResponse => {
  const contents: any = {};
  if (output[_VMFAD] != null) {
    contents[_VMFAD] = de_VirtualMFADevice(output[_VMFAD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCredentialReportExpiredException
 */
const de_CredentialReportExpiredException = (
  output: any,
  context: __SerdeContext
): CredentialReportExpiredException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCredentialReportNotPresentException
 */
const de_CredentialReportNotPresentException = (
  output: any,
  context: __SerdeContext
): CredentialReportNotPresentException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryCredentialReportNotReadyException
 */
const de_CredentialReportNotReadyException = (
  output: any,
  context: __SerdeContext
): CredentialReportNotReadyException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteConflictException
 */
const de_DeleteConflictException = (output: any, context: __SerdeContext): DeleteConflictException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteServiceLinkedRoleResponse
 */
const de_DeleteServiceLinkedRoleResponse = (output: any, context: __SerdeContext): DeleteServiceLinkedRoleResponse => {
  const contents: any = {};
  if (output[_DTI] != null) {
    contents[_DTI] = __expectString(output[_DTI]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeletionTaskFailureReasonType
 */
const de_DeletionTaskFailureReasonType = (output: any, context: __SerdeContext): DeletionTaskFailureReasonType => {
  const contents: any = {};
  if (output[_Re] != null) {
    contents[_Re] = __expectString(output[_Re]);
  }
  if (String(output.RoleUsageList).trim() === "") {
    contents[_RUL] = [];
  } else if (output[_RUL] != null && output[_RUL][_me] != null) {
    contents[_RUL] = de_RoleUsageListType(__getArrayIfSingleItem(output[_RUL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisableOrganizationsRootCredentialsManagementResponse
 */
const de_DisableOrganizationsRootCredentialsManagementResponse = (
  output: any,
  context: __SerdeContext
): DisableOrganizationsRootCredentialsManagementResponse => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (String(output.EnabledFeatures).trim() === "") {
    contents[_EFn] = [];
  } else if (output[_EFn] != null && output[_EFn][_me] != null) {
    contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDisableOrganizationsRootSessionsResponse
 */
const de_DisableOrganizationsRootSessionsResponse = (
  output: any,
  context: __SerdeContext
): DisableOrganizationsRootSessionsResponse => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (String(output.EnabledFeatures).trim() === "") {
    contents[_EFn] = [];
  } else if (output[_EFn] != null && output[_EFn][_me] != null) {
    contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateCertificateException
 */
const de_DuplicateCertificateException = (output: any, context: __SerdeContext): DuplicateCertificateException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateSSHPublicKeyException
 */
const de_DuplicateSSHPublicKeyException = (output: any, context: __SerdeContext): DuplicateSSHPublicKeyException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEnableOrganizationsRootCredentialsManagementResponse
 */
const de_EnableOrganizationsRootCredentialsManagementResponse = (
  output: any,
  context: __SerdeContext
): EnableOrganizationsRootCredentialsManagementResponse => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (String(output.EnabledFeatures).trim() === "") {
    contents[_EFn] = [];
  } else if (output[_EFn] != null && output[_EFn][_me] != null) {
    contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnableOrganizationsRootSessionsResponse
 */
const de_EnableOrganizationsRootSessionsResponse = (
  output: any,
  context: __SerdeContext
): EnableOrganizationsRootSessionsResponse => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (String(output.EnabledFeatures).trim() === "") {
    contents[_EFn] = [];
  } else if (output[_EFn] != null && output[_EFn][_me] != null) {
    contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEntityAlreadyExistsException
 */
const de_EntityAlreadyExistsException = (output: any, context: __SerdeContext): EntityAlreadyExistsException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryEntityDetails
 */
const de_EntityDetails = (output: any, context: __SerdeContext): EntityDetails => {
  const contents: any = {};
  if (output[_EI] != null) {
    contents[_EI] = de_EntityInfo(output[_EI], context);
  }
  if (output[_LA] != null) {
    contents[_LA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LA]));
  }
  return contents;
};

/**
 * deserializeAws_queryentityDetailsListType
 */
const de_entityDetailsListType = (output: any, context: __SerdeContext): EntityDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EntityDetails(entry, context);
    });
};

/**
 * deserializeAws_queryEntityInfo
 */
const de_EntityInfo = (output: any, context: __SerdeContext): EntityInfo => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_Ty] != null) {
    contents[_Ty] = __expectString(output[_Ty]);
  }
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  return contents;
};

/**
 * deserializeAws_queryEntityTemporarilyUnmodifiableException
 */
const de_EntityTemporarilyUnmodifiableException = (
  output: any,
  context: __SerdeContext
): EntityTemporarilyUnmodifiableException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  if (output[_C] != null) {
    contents[_C] = __expectString(output[_C]);
  }
  return contents;
};

/**
 * deserializeAws_queryEvalDecisionDetailsType
 */
const de_EvalDecisionDetailsType = (
  output: any,
  context: __SerdeContext
): Record<string, PolicyEvaluationDecisionType> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryEvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  const contents: any = {};
  if (output[_EAN] != null) {
    contents[_EAN] = __expectString(output[_EAN]);
  }
  if (output[_ERN] != null) {
    contents[_ERN] = __expectString(output[_ERN]);
  }
  if (output[_ED] != null) {
    contents[_ED] = __expectString(output[_ED]);
  }
  if (String(output.MatchedStatements).trim() === "") {
    contents[_MS] = [];
  } else if (output[_MS] != null && output[_MS][_me] != null) {
    contents[_MS] = de_StatementListType(__getArrayIfSingleItem(output[_MS][_me]), context);
  }
  if (String(output.MissingContextValues).trim() === "") {
    contents[_MCV] = [];
  } else if (output[_MCV] != null && output[_MCV][_me] != null) {
    contents[_MCV] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_MCV][_me]), context);
  }
  if (output[_ODD] != null) {
    contents[_ODD] = de_OrganizationsDecisionDetail(output[_ODD], context);
  }
  if (output[_PBDD] != null) {
    contents[_PBDD] = de_PermissionsBoundaryDecisionDetail(output[_PBDD], context);
  }
  if (String(output.EvalDecisionDetails).trim() === "") {
    contents[_EDD] = {};
  } else if (output[_EDD] != null && output[_EDD][_e] != null) {
    contents[_EDD] = de_EvalDecisionDetailsType(__getArrayIfSingleItem(output[_EDD][_e]), context);
  }
  if (String(output.ResourceSpecificResults).trim() === "") {
    contents[_RSR] = [];
  } else if (output[_RSR] != null && output[_RSR][_me] != null) {
    contents[_RSR] = de_ResourceSpecificResultListType(__getArrayIfSingleItem(output[_RSR][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEvaluationResultsListType
 */
const de_EvaluationResultsListType = (output: any, context: __SerdeContext): EvaluationResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationResult(entry, context);
    });
};

/**
 * deserializeAws_queryFeaturesListType
 */
const de_FeaturesListType = (output: any, context: __SerdeContext): FeatureType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryGenerateCredentialReportResponse
 */
const de_GenerateCredentialReportResponse = (
  output: any,
  context: __SerdeContext
): GenerateCredentialReportResponse => {
  const contents: any = {};
  if (output[_Sta] != null) {
    contents[_Sta] = __expectString(output[_Sta]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  return contents;
};

/**
 * deserializeAws_queryGenerateOrganizationsAccessReportResponse
 */
const de_GenerateOrganizationsAccessReportResponse = (
  output: any,
  context: __SerdeContext
): GenerateOrganizationsAccessReportResponse => {
  const contents: any = {};
  if (output[_JI] != null) {
    contents[_JI] = __expectString(output[_JI]);
  }
  return contents;
};

/**
 * deserializeAws_queryGenerateServiceLastAccessedDetailsResponse
 */
const de_GenerateServiceLastAccessedDetailsResponse = (
  output: any,
  context: __SerdeContext
): GenerateServiceLastAccessedDetailsResponse => {
  const contents: any = {};
  if (output[_JI] != null) {
    contents[_JI] = __expectString(output[_JI]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccessKeyLastUsedResponse
 */
const de_GetAccessKeyLastUsedResponse = (output: any, context: __SerdeContext): GetAccessKeyLastUsedResponse => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_AKLU] != null) {
    contents[_AKLU] = de_AccessKeyLastUsed(output[_AKLU], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccountAuthorizationDetailsResponse
 */
const de_GetAccountAuthorizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetAccountAuthorizationDetailsResponse => {
  const contents: any = {};
  if (String(output.UserDetailList).trim() === "") {
    contents[_UDL] = [];
  } else if (output[_UDL] != null && output[_UDL][_me] != null) {
    contents[_UDL] = de_userDetailListType(__getArrayIfSingleItem(output[_UDL][_me]), context);
  }
  if (String(output.GroupDetailList).trim() === "") {
    contents[_GDL] = [];
  } else if (output[_GDL] != null && output[_GDL][_me] != null) {
    contents[_GDL] = de_groupDetailListType(__getArrayIfSingleItem(output[_GDL][_me]), context);
  }
  if (String(output.RoleDetailList).trim() === "") {
    contents[_RDL] = [];
  } else if (output[_RDL] != null && output[_RDL][_me] != null) {
    contents[_RDL] = de_roleDetailListType(__getArrayIfSingleItem(output[_RDL][_me]), context);
  }
  if (String(output.Policies).trim() === "") {
    contents[_Pol] = [];
  } else if (output[_Pol] != null && output[_Pol][_me] != null) {
    contents[_Pol] = de_ManagedPolicyDetailListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccountPasswordPolicyResponse
 */
const de_GetAccountPasswordPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetAccountPasswordPolicyResponse => {
  const contents: any = {};
  if (output[_PPa] != null) {
    contents[_PPa] = de_PasswordPolicy(output[_PPa], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccountSummaryResponse
 */
const de_GetAccountSummaryResponse = (output: any, context: __SerdeContext): GetAccountSummaryResponse => {
  const contents: any = {};
  if (String(output.SummaryMap).trim() === "") {
    contents[_SM] = {};
  } else if (output[_SM] != null && output[_SM][_e] != null) {
    contents[_SM] = de_summaryMapType(__getArrayIfSingleItem(output[_SM][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetContextKeysForPolicyResponse
 */
const de_GetContextKeysForPolicyResponse = (output: any, context: __SerdeContext): GetContextKeysForPolicyResponse => {
  const contents: any = {};
  if (String(output.ContextKeyNames).trim() === "") {
    contents[_CKNo] = [];
  } else if (output[_CKNo] != null && output[_CKNo][_me] != null) {
    contents[_CKNo] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_CKNo][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetCredentialReportResponse
 */
const de_GetCredentialReportResponse = (output: any, context: __SerdeContext): GetCredentialReportResponse => {
  const contents: any = {};
  if (output[_Co] != null) {
    contents[_Co] = context.base64Decoder(output[_Co]);
  }
  if (output[_RF] != null) {
    contents[_RF] = __expectString(output[_RF]);
  }
  if (output[_GT] != null) {
    contents[_GT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_GT]));
  }
  return contents;
};

/**
 * deserializeAws_queryGetGroupPolicyResponse
 */
const de_GetGroupPolicyResponse = (output: any, context: __SerdeContext): GetGroupPolicyResponse => {
  const contents: any = {};
  if (output[_GN] != null) {
    contents[_GN] = __expectString(output[_GN]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetGroupResponse
 */
const de_GetGroupResponse = (output: any, context: __SerdeContext): GetGroupResponse => {
  const contents: any = {};
  if (output[_Gr] != null) {
    contents[_Gr] = de_Group(output[_Gr], context);
  }
  if (String(output.Users).trim() === "") {
    contents[_Use] = [];
  } else if (output[_Use] != null && output[_Use][_me] != null) {
    contents[_Use] = de_userListType(__getArrayIfSingleItem(output[_Use][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetInstanceProfileResponse
 */
const de_GetInstanceProfileResponse = (output: any, context: __SerdeContext): GetInstanceProfileResponse => {
  const contents: any = {};
  if (output[_IP] != null) {
    contents[_IP] = de_InstanceProfile(output[_IP], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetLoginProfileResponse
 */
const de_GetLoginProfileResponse = (output: any, context: __SerdeContext): GetLoginProfileResponse => {
  const contents: any = {};
  if (output[_LPo] != null) {
    contents[_LPo] = de_LoginProfile(output[_LPo], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMFADeviceResponse
 */
const de_GetMFADeviceResponse = (output: any, context: __SerdeContext): GetMFADeviceResponse => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_SNe] != null) {
    contents[_SNe] = __expectString(output[_SNe]);
  }
  if (output[_EDn] != null) {
    contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
  }
  if (String(output.Certifications).trim() === "") {
    contents[_Ce] = {};
  } else if (output[_Ce] != null && output[_Ce][_e] != null) {
    contents[_Ce] = de_CertificationMapType(__getArrayIfSingleItem(output[_Ce][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetOpenIDConnectProviderResponse
 */
const de_GetOpenIDConnectProviderResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIDConnectProviderResponse => {
  const contents: any = {};
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  if (String(output.ClientIDList).trim() === "") {
    contents[_CIDL] = [];
  } else if (output[_CIDL] != null && output[_CIDL][_me] != null) {
    contents[_CIDL] = de_clientIDListType(__getArrayIfSingleItem(output[_CIDL][_me]), context);
  }
  if (String(output.ThumbprintList).trim() === "") {
    contents[_TL] = [];
  } else if (output[_TL] != null && output[_TL][_me] != null) {
    contents[_TL] = de_thumbprintListType(__getArrayIfSingleItem(output[_TL][_me]), context);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetOrganizationsAccessReportResponse
 */
const de_GetOrganizationsAccessReportResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationsAccessReportResponse => {
  const contents: any = {};
  if (output[_JS] != null) {
    contents[_JS] = __expectString(output[_JS]);
  }
  if (output[_JCD] != null) {
    contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
  }
  if (output[_JCDo] != null) {
    contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
  }
  if (output[_NOSA] != null) {
    contents[_NOSA] = __strictParseInt32(output[_NOSA]) as number;
  }
  if (output[_NOSNA] != null) {
    contents[_NOSNA] = __strictParseInt32(output[_NOSNA]) as number;
  }
  if (String(output.AccessDetails).trim() === "") {
    contents[_AD] = [];
  } else if (output[_AD] != null && output[_AD][_me] != null) {
    contents[_AD] = de_AccessDetails(__getArrayIfSingleItem(output[_AD][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_EDr] != null) {
    contents[_EDr] = de_ErrorDetails(output[_EDr], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetPolicyResponse
 */
const de_GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  const contents: any = {};
  if (output[_Po] != null) {
    contents[_Po] = de_Policy(output[_Po], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetPolicyVersionResponse
 */
const de_GetPolicyVersionResponse = (output: any, context: __SerdeContext): GetPolicyVersionResponse => {
  const contents: any = {};
  if (output[_PV] != null) {
    contents[_PV] = de_PolicyVersion(output[_PV], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetRolePolicyResponse
 */
const de_GetRolePolicyResponse = (output: any, context: __SerdeContext): GetRolePolicyResponse => {
  const contents: any = {};
  if (output[_RN] != null) {
    contents[_RN] = __expectString(output[_RN]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetRoleResponse
 */
const de_GetRoleResponse = (output: any, context: __SerdeContext): GetRoleResponse => {
  const contents: any = {};
  if (output[_Ro] != null) {
    contents[_Ro] = de_Role(output[_Ro], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSAMLProviderResponse
 */
const de_GetSAMLProviderResponse = (output: any, context: __SerdeContext): GetSAMLProviderResponse => {
  const contents: any = {};
  if (output[_SAMLPUUID] != null) {
    contents[_SAMLPUUID] = __expectString(output[_SAMLPUUID]);
  }
  if (output[_SAMLMD] != null) {
    contents[_SAMLMD] = __expectString(output[_SAMLMD]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_VU] != null) {
    contents[_VU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VU]));
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_AEM] != null) {
    contents[_AEM] = __expectString(output[_AEM]);
  }
  if (String(output.PrivateKeyList).trim() === "") {
    contents[_PKL] = [];
  } else if (output[_PKL] != null && output[_PKL][_me] != null) {
    contents[_PKL] = de_privateKeyList(__getArrayIfSingleItem(output[_PKL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetServerCertificateResponse
 */
const de_GetServerCertificateResponse = (output: any, context: __SerdeContext): GetServerCertificateResponse => {
  const contents: any = {};
  if (output[_SC] != null) {
    contents[_SC] = de_ServerCertificate(output[_SC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsResponse
 */
const de_GetServiceLastAccessedDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLastAccessedDetailsResponse => {
  const contents: any = {};
  if (output[_JS] != null) {
    contents[_JS] = __expectString(output[_JS]);
  }
  if (output[_JT] != null) {
    contents[_JT] = __expectString(output[_JT]);
  }
  if (output[_JCD] != null) {
    contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
  }
  if (String(output.ServicesLastAccessed).trim() === "") {
    contents[_SLA] = [];
  } else if (output[_SLA] != null && output[_SLA][_me] != null) {
    contents[_SLA] = de_ServicesLastAccessed(__getArrayIfSingleItem(output[_SLA][_me]), context);
  }
  if (output[_JCDo] != null) {
    contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_Er] != null) {
    contents[_Er] = de_ErrorDetails(output[_Er], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse
 */
const de_GetServiceLastAccessedDetailsWithEntitiesResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLastAccessedDetailsWithEntitiesResponse => {
  const contents: any = {};
  if (output[_JS] != null) {
    contents[_JS] = __expectString(output[_JS]);
  }
  if (output[_JCD] != null) {
    contents[_JCD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCD]));
  }
  if (output[_JCDo] != null) {
    contents[_JCDo] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_JCDo]));
  }
  if (String(output.EntityDetailsList).trim() === "") {
    contents[_EDL] = [];
  } else if (output[_EDL] != null && output[_EDL][_me] != null) {
    contents[_EDL] = de_entityDetailsListType(__getArrayIfSingleItem(output[_EDL][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_Er] != null) {
    contents[_Er] = de_ErrorDetails(output[_Er], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse
 */
const de_GetServiceLinkedRoleDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLinkedRoleDeletionStatusResponse => {
  const contents: any = {};
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_Re] != null) {
    contents[_Re] = de_DeletionTaskFailureReasonType(output[_Re], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSSHPublicKeyResponse
 */
const de_GetSSHPublicKeyResponse = (output: any, context: __SerdeContext): GetSSHPublicKeyResponse => {
  const contents: any = {};
  if (output[_SSHPK] != null) {
    contents[_SSHPK] = de_SSHPublicKey(output[_SSHPK], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetUserPolicyResponse
 */
const de_GetUserPolicyResponse = (output: any, context: __SerdeContext): GetUserPolicyResponse => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetUserResponse
 */
const de_GetUserResponse = (output: any, context: __SerdeContext): GetUserResponse => {
  const contents: any = {};
  if (output[_Us] != null) {
    contents[_Us] = de_User(output[_Us], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGroup
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_GN] != null) {
    contents[_GN] = __expectString(output[_GN]);
  }
  if (output[_GI] != null) {
    contents[_GI] = __expectString(output[_GI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  return contents;
};

/**
 * deserializeAws_queryGroupDetail
 */
const de_GroupDetail = (output: any, context: __SerdeContext): GroupDetail => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_GN] != null) {
    contents[_GN] = __expectString(output[_GN]);
  }
  if (output[_GI] != null) {
    contents[_GI] = __expectString(output[_GI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (String(output.GroupPolicyList).trim() === "") {
    contents[_GPL] = [];
  } else if (output[_GPL] != null && output[_GPL][_me] != null) {
    contents[_GPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_GPL][_me]), context);
  }
  if (String(output.AttachedManagedPolicies).trim() === "") {
    contents[_AMP] = [];
  } else if (output[_AMP] != null && output[_AMP][_me] != null) {
    contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_querygroupDetailListType
 */
const de_groupDetailListType = (output: any, context: __SerdeContext): GroupDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupDetail(entry, context);
    });
};

/**
 * deserializeAws_querygroupListType
 */
const de_groupListType = (output: any, context: __SerdeContext): Group[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Group(entry, context);
    });
};

/**
 * deserializeAws_querygroupNameListType
 */
const de_groupNameListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryInstanceProfile
 */
const de_InstanceProfile = (output: any, context: __SerdeContext): InstanceProfile => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_IPN] != null) {
    contents[_IPN] = __expectString(output[_IPN]);
  }
  if (output[_IPI] != null) {
    contents[_IPI] = __expectString(output[_IPI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (String(output.Roles).trim() === "") {
    contents[_Rol] = [];
  } else if (output[_Rol] != null && output[_Rol][_me] != null) {
    contents[_Rol] = de_roleListType(__getArrayIfSingleItem(output[_Rol][_me]), context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryinstanceProfileListType
 */
const de_instanceProfileListType = (output: any, context: __SerdeContext): InstanceProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceProfile(entry, context);
    });
};

/**
 * deserializeAws_queryInvalidAuthenticationCodeException
 */
const de_InvalidAuthenticationCodeException = (
  output: any,
  context: __SerdeContext
): InvalidAuthenticationCodeException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCertificateException
 */
const de_InvalidCertificateException = (output: any, context: __SerdeContext): InvalidCertificateException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidPublicKeyException
 */
const de_InvalidPublicKeyException = (output: any, context: __SerdeContext): InvalidPublicKeyException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserTypeException
 */
const de_InvalidUserTypeException = (output: any, context: __SerdeContext): InvalidUserTypeException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryKeyPairMismatchException
 */
const de_KeyPairMismatchException = (output: any, context: __SerdeContext): KeyPairMismatchException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAccessKeysResponse
 */
const de_ListAccessKeysResponse = (output: any, context: __SerdeContext): ListAccessKeysResponse => {
  const contents: any = {};
  if (String(output.AccessKeyMetadata).trim() === "") {
    contents[_AKM] = [];
  } else if (output[_AKM] != null && output[_AKM][_me] != null) {
    contents[_AKM] = de_accessKeyMetadataListType(__getArrayIfSingleItem(output[_AKM][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAccountAliasesResponse
 */
const de_ListAccountAliasesResponse = (output: any, context: __SerdeContext): ListAccountAliasesResponse => {
  const contents: any = {};
  if (String(output.AccountAliases).trim() === "") {
    contents[_AAc] = [];
  } else if (output[_AAc] != null && output[_AAc][_me] != null) {
    contents[_AAc] = de_accountAliasListType(__getArrayIfSingleItem(output[_AAc][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAttachedGroupPoliciesResponse
 */
const de_ListAttachedGroupPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedGroupPoliciesResponse => {
  const contents: any = {};
  if (String(output.AttachedPolicies).trim() === "") {
    contents[_AP] = [];
  } else if (output[_AP] != null && output[_AP][_me] != null) {
    contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAttachedRolePoliciesResponse
 */
const de_ListAttachedRolePoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedRolePoliciesResponse => {
  const contents: any = {};
  if (String(output.AttachedPolicies).trim() === "") {
    contents[_AP] = [];
  } else if (output[_AP] != null && output[_AP][_me] != null) {
    contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAttachedUserPoliciesResponse
 */
const de_ListAttachedUserPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedUserPoliciesResponse => {
  const contents: any = {};
  if (String(output.AttachedPolicies).trim() === "") {
    contents[_AP] = [];
  } else if (output[_AP] != null && output[_AP][_me] != null) {
    contents[_AP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AP][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListEntitiesForPolicyResponse
 */
const de_ListEntitiesForPolicyResponse = (output: any, context: __SerdeContext): ListEntitiesForPolicyResponse => {
  const contents: any = {};
  if (String(output.PolicyGroups).trim() === "") {
    contents[_PG] = [];
  } else if (output[_PG] != null && output[_PG][_me] != null) {
    contents[_PG] = de_PolicyGroupListType(__getArrayIfSingleItem(output[_PG][_me]), context);
  }
  if (String(output.PolicyUsers).trim() === "") {
    contents[_PU] = [];
  } else if (output[_PU] != null && output[_PU][_me] != null) {
    contents[_PU] = de_PolicyUserListType(__getArrayIfSingleItem(output[_PU][_me]), context);
  }
  if (String(output.PolicyRoles).trim() === "") {
    contents[_PR] = [];
  } else if (output[_PR] != null && output[_PR][_me] != null) {
    contents[_PR] = de_PolicyRoleListType(__getArrayIfSingleItem(output[_PR][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupPoliciesResponse
 */
const de_ListGroupPoliciesResponse = (output: any, context: __SerdeContext): ListGroupPoliciesResponse => {
  const contents: any = {};
  if (String(output.PolicyNames).trim() === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_me] != null) {
    contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupsForUserResponse
 */
const de_ListGroupsForUserResponse = (output: any, context: __SerdeContext): ListGroupsForUserResponse => {
  const contents: any = {};
  if (String(output.Groups).trim() === "") {
    contents[_Gro] = [];
  } else if (output[_Gro] != null && output[_Gro][_me] != null) {
    contents[_Gro] = de_groupListType(__getArrayIfSingleItem(output[_Gro][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  const contents: any = {};
  if (String(output.Groups).trim() === "") {
    contents[_Gro] = [];
  } else if (output[_Gro] != null && output[_Gro][_me] != null) {
    contents[_Gro] = de_groupListType(__getArrayIfSingleItem(output[_Gro][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListInstanceProfilesForRoleResponse
 */
const de_ListInstanceProfilesForRoleResponse = (
  output: any,
  context: __SerdeContext
): ListInstanceProfilesForRoleResponse => {
  const contents: any = {};
  if (String(output.InstanceProfiles).trim() === "") {
    contents[_IPn] = [];
  } else if (output[_IPn] != null && output[_IPn][_me] != null) {
    contents[_IPn] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPn][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListInstanceProfilesResponse
 */
const de_ListInstanceProfilesResponse = (output: any, context: __SerdeContext): ListInstanceProfilesResponse => {
  const contents: any = {};
  if (String(output.InstanceProfiles).trim() === "") {
    contents[_IPn] = [];
  } else if (output[_IPn] != null && output[_IPn][_me] != null) {
    contents[_IPn] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPn][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListInstanceProfileTagsResponse
 */
const de_ListInstanceProfileTagsResponse = (output: any, context: __SerdeContext): ListInstanceProfileTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMFADevicesResponse
 */
const de_ListMFADevicesResponse = (output: any, context: __SerdeContext): ListMFADevicesResponse => {
  const contents: any = {};
  if (String(output.MFADevices).trim() === "") {
    contents[_MFAD] = [];
  } else if (output[_MFAD] != null && output[_MFAD][_me] != null) {
    contents[_MFAD] = de_mfaDeviceListType(__getArrayIfSingleItem(output[_MFAD][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMFADeviceTagsResponse
 */
const de_ListMFADeviceTagsResponse = (output: any, context: __SerdeContext): ListMFADeviceTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListOpenIDConnectProvidersResponse
 */
const de_ListOpenIDConnectProvidersResponse = (
  output: any,
  context: __SerdeContext
): ListOpenIDConnectProvidersResponse => {
  const contents: any = {};
  if (String(output.OpenIDConnectProviderList).trim() === "") {
    contents[_OIDCPL] = [];
  } else if (output[_OIDCPL] != null && output[_OIDCPL][_me] != null) {
    contents[_OIDCPL] = de_OpenIDConnectProviderListType(__getArrayIfSingleItem(output[_OIDCPL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListOpenIDConnectProviderTagsResponse
 */
const de_ListOpenIDConnectProviderTagsResponse = (
  output: any,
  context: __SerdeContext
): ListOpenIDConnectProviderTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListOrganizationsFeaturesResponse
 */
const de_ListOrganizationsFeaturesResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationsFeaturesResponse => {
  const contents: any = {};
  if (output[_OI] != null) {
    contents[_OI] = __expectString(output[_OI]);
  }
  if (String(output.EnabledFeatures).trim() === "") {
    contents[_EFn] = [];
  } else if (output[_EFn] != null && output[_EFn][_me] != null) {
    contents[_EFn] = de_FeaturesListType(__getArrayIfSingleItem(output[_EFn][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListPoliciesGrantingServiceAccessEntry
 */
const de_ListPoliciesGrantingServiceAccessEntry = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessEntry => {
  const contents: any = {};
  if (output[_SNer] != null) {
    contents[_SNer] = __expectString(output[_SNer]);
  }
  if (String(output.Policies).trim() === "") {
    contents[_Pol] = [];
  } else if (output[_Pol] != null && output[_Pol][_me] != null) {
    contents[_Pol] = de_policyGrantingServiceAccessListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListPoliciesGrantingServiceAccessResponse
 */
const de_ListPoliciesGrantingServiceAccessResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessResponse => {
  const contents: any = {};
  if (String(output.PoliciesGrantingServiceAccess).trim() === "") {
    contents[_PGSA] = [];
  } else if (output[_PGSA] != null && output[_PGSA][_me] != null) {
    contents[_PGSA] = de_listPolicyGrantingServiceAccessResponseListType(
      __getArrayIfSingleItem(output[_PGSA][_me]),
      context
    );
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPoliciesResponse
 */
const de_ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  const contents: any = {};
  if (String(output.Policies).trim() === "") {
    contents[_Pol] = [];
  } else if (output[_Pol] != null && output[_Pol][_me] != null) {
    contents[_Pol] = de_policyListType(__getArrayIfSingleItem(output[_Pol][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_querylistPolicyGrantingServiceAccessResponseListType
 */
const de_listPolicyGrantingServiceAccessResponseListType = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListPoliciesGrantingServiceAccessEntry(entry, context);
    });
};

/**
 * deserializeAws_queryListPolicyTagsResponse
 */
const de_ListPolicyTagsResponse = (output: any, context: __SerdeContext): ListPolicyTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPolicyVersionsResponse
 */
const de_ListPolicyVersionsResponse = (output: any, context: __SerdeContext): ListPolicyVersionsResponse => {
  const contents: any = {};
  if (String(output.Versions).trim() === "") {
    contents[_Ve] = [];
  } else if (output[_Ve] != null && output[_Ve][_me] != null) {
    contents[_Ve] = de_policyDocumentVersionListType(__getArrayIfSingleItem(output[_Ve][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRolePoliciesResponse
 */
const de_ListRolePoliciesResponse = (output: any, context: __SerdeContext): ListRolePoliciesResponse => {
  const contents: any = {};
  if (String(output.PolicyNames).trim() === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_me] != null) {
    contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRolesResponse
 */
const de_ListRolesResponse = (output: any, context: __SerdeContext): ListRolesResponse => {
  const contents: any = {};
  if (String(output.Roles).trim() === "") {
    contents[_Rol] = [];
  } else if (output[_Rol] != null && output[_Rol][_me] != null) {
    contents[_Rol] = de_roleListType(__getArrayIfSingleItem(output[_Rol][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRoleTagsResponse
 */
const de_ListRoleTagsResponse = (output: any, context: __SerdeContext): ListRoleTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSAMLProvidersResponse
 */
const de_ListSAMLProvidersResponse = (output: any, context: __SerdeContext): ListSAMLProvidersResponse => {
  const contents: any = {};
  if (String(output.SAMLProviderList).trim() === "") {
    contents[_SAMLPL] = [];
  } else if (output[_SAMLPL] != null && output[_SAMLPL][_me] != null) {
    contents[_SAMLPL] = de_SAMLProviderListType(__getArrayIfSingleItem(output[_SAMLPL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListSAMLProviderTagsResponse
 */
const de_ListSAMLProviderTagsResponse = (output: any, context: __SerdeContext): ListSAMLProviderTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListServerCertificatesResponse
 */
const de_ListServerCertificatesResponse = (output: any, context: __SerdeContext): ListServerCertificatesResponse => {
  const contents: any = {};
  if (String(output.ServerCertificateMetadataList).trim() === "") {
    contents[_SCML] = [];
  } else if (output[_SCML] != null && output[_SCML][_me] != null) {
    contents[_SCML] = de_serverCertificateMetadataListType(__getArrayIfSingleItem(output[_SCML][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListServerCertificateTagsResponse
 */
const de_ListServerCertificateTagsResponse = (
  output: any,
  context: __SerdeContext
): ListServerCertificateTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListServiceSpecificCredentialsResponse
 */
const de_ListServiceSpecificCredentialsResponse = (
  output: any,
  context: __SerdeContext
): ListServiceSpecificCredentialsResponse => {
  const contents: any = {};
  if (String(output.ServiceSpecificCredentials).trim() === "") {
    contents[_SSCe] = [];
  } else if (output[_SSCe] != null && output[_SSCe][_me] != null) {
    contents[_SSCe] = de_ServiceSpecificCredentialsListType(__getArrayIfSingleItem(output[_SSCe][_me]), context);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSigningCertificatesResponse
 */
const de_ListSigningCertificatesResponse = (output: any, context: __SerdeContext): ListSigningCertificatesResponse => {
  const contents: any = {};
  if (String(output.Certificates).trim() === "") {
    contents[_Cer] = [];
  } else if (output[_Cer] != null && output[_Cer][_me] != null) {
    contents[_Cer] = de_certificateListType(__getArrayIfSingleItem(output[_Cer][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSSHPublicKeysResponse
 */
const de_ListSSHPublicKeysResponse = (output: any, context: __SerdeContext): ListSSHPublicKeysResponse => {
  const contents: any = {};
  if (String(output.SSHPublicKeys).trim() === "") {
    contents[_SSHPKu] = [];
  } else if (output[_SSHPKu] != null && output[_SSHPKu][_me] != null) {
    contents[_SSHPKu] = de_SSHPublicKeyListType(__getArrayIfSingleItem(output[_SSHPKu][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUserPoliciesResponse
 */
const de_ListUserPoliciesResponse = (output: any, context: __SerdeContext): ListUserPoliciesResponse => {
  const contents: any = {};
  if (String(output.PolicyNames).trim() === "") {
    contents[_PNo] = [];
  } else if (output[_PNo] != null && output[_PNo][_me] != null) {
    contents[_PNo] = de_policyNameListType(__getArrayIfSingleItem(output[_PNo][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  const contents: any = {};
  if (String(output.Users).trim() === "") {
    contents[_Use] = [];
  } else if (output[_Use] != null && output[_Use][_me] != null) {
    contents[_Use] = de_userListType(__getArrayIfSingleItem(output[_Use][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUserTagsResponse
 */
const de_ListUserTagsResponse = (output: any, context: __SerdeContext): ListUserTagsResponse => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryListVirtualMFADevicesResponse
 */
const de_ListVirtualMFADevicesResponse = (output: any, context: __SerdeContext): ListVirtualMFADevicesResponse => {
  const contents: any = {};
  if (String(output.VirtualMFADevices).trim() === "") {
    contents[_VMFADi] = [];
  } else if (output[_VMFADi] != null && output[_VMFADi][_me] != null) {
    contents[_VMFADi] = de_virtualMFADeviceListType(__getArrayIfSingleItem(output[_VMFADi][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoginProfile
 */
const de_LoginProfile = (output: any, context: __SerdeContext): LoginProfile => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_PRR] != null) {
    contents[_PRR] = __parseBoolean(output[_PRR]);
  }
  return contents;
};

/**
 * deserializeAws_queryMalformedCertificateException
 */
const de_MalformedCertificateException = (output: any, context: __SerdeContext): MalformedCertificateException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryMalformedPolicyDocumentException
 */
const de_MalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedPolicyDetail
 */
const de_ManagedPolicyDetail = (output: any, context: __SerdeContext): ManagedPolicyDetail => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_DVI] != null) {
    contents[_DVI] = __expectString(output[_DVI]);
  }
  if (output[_ACt] != null) {
    contents[_ACt] = __strictParseInt32(output[_ACt]) as number;
  }
  if (output[_PBUC] != null) {
    contents[_PBUC] = __strictParseInt32(output[_PBUC]) as number;
  }
  if (output[_IA] != null) {
    contents[_IA] = __parseBoolean(output[_IA]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
  }
  if (String(output.PolicyVersionList).trim() === "") {
    contents[_PVL] = [];
  } else if (output[_PVL] != null && output[_PVL][_me] != null) {
    contents[_PVL] = de_policyDocumentVersionListType(__getArrayIfSingleItem(output[_PVL][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedPolicyDetailListType
 */
const de_ManagedPolicyDetailListType = (output: any, context: __SerdeContext): ManagedPolicyDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedPolicyDetail(entry, context);
    });
};

/**
 * deserializeAws_queryMFADevice
 */
const de_MFADevice = (output: any, context: __SerdeContext): MFADevice => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_SNe] != null) {
    contents[_SNe] = __expectString(output[_SNe]);
  }
  if (output[_EDn] != null) {
    contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
  }
  return contents;
};

/**
 * deserializeAws_querymfaDeviceListType
 */
const de_mfaDeviceListType = (output: any, context: __SerdeContext): MFADevice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MFADevice(entry, context);
    });
};

/**
 * deserializeAws_queryNoSuchEntityException
 */
const de_NoSuchEntityException = (output: any, context: __SerdeContext): NoSuchEntityException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOpenIDConnectProviderListEntry
 */
const de_OpenIDConnectProviderListEntry = (output: any, context: __SerdeContext): OpenIDConnectProviderListEntry => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  return contents;
};

/**
 * deserializeAws_queryOpenIDConnectProviderListType
 */
const de_OpenIDConnectProviderListType = (output: any, context: __SerdeContext): OpenIDConnectProviderListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OpenIDConnectProviderListEntry(entry, context);
    });
};

/**
 * deserializeAws_queryOpenIdIdpCommunicationErrorException
 */
const de_OpenIdIdpCommunicationErrorException = (
  output: any,
  context: __SerdeContext
): OpenIdIdpCommunicationErrorException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrganizationNotFoundException
 */
const de_OrganizationNotFoundException = (output: any, context: __SerdeContext): OrganizationNotFoundException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrganizationNotInAllFeaturesModeException
 */
const de_OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryOrganizationsDecisionDetail
 */
const de_OrganizationsDecisionDetail = (output: any, context: __SerdeContext): OrganizationsDecisionDetail => {
  const contents: any = {};
  if (output[_ABO] != null) {
    contents[_ABO] = __parseBoolean(output[_ABO]);
  }
  return contents;
};

/**
 * deserializeAws_queryPasswordPolicy
 */
const de_PasswordPolicy = (output: any, context: __SerdeContext): PasswordPolicy => {
  const contents: any = {};
  if (output[_MPL] != null) {
    contents[_MPL] = __strictParseInt32(output[_MPL]) as number;
  }
  if (output[_RS] != null) {
    contents[_RS] = __parseBoolean(output[_RS]);
  }
  if (output[_RNe] != null) {
    contents[_RNe] = __parseBoolean(output[_RNe]);
  }
  if (output[_RUC] != null) {
    contents[_RUC] = __parseBoolean(output[_RUC]);
  }
  if (output[_RLC] != null) {
    contents[_RLC] = __parseBoolean(output[_RLC]);
  }
  if (output[_AUTCP] != null) {
    contents[_AUTCP] = __parseBoolean(output[_AUTCP]);
  }
  if (output[_EPx] != null) {
    contents[_EPx] = __parseBoolean(output[_EPx]);
  }
  if (output[_MPA] != null) {
    contents[_MPA] = __strictParseInt32(output[_MPA]) as number;
  }
  if (output[_PRPa] != null) {
    contents[_PRPa] = __strictParseInt32(output[_PRPa]) as number;
  }
  if (output[_HE] != null) {
    contents[_HE] = __parseBoolean(output[_HE]);
  }
  return contents;
};

/**
 * deserializeAws_queryPasswordPolicyViolationException
 */
const de_PasswordPolicyViolationException = (
  output: any,
  context: __SerdeContext
): PasswordPolicyViolationException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPermissionsBoundaryDecisionDetail
 */
const de_PermissionsBoundaryDecisionDetail = (
  output: any,
  context: __SerdeContext
): PermissionsBoundaryDecisionDetail => {
  const contents: any = {};
  if (output[_ABPB] != null) {
    contents[_ABPB] = __parseBoolean(output[_ABPB]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicy
 */
const de_Policy = (output: any, context: __SerdeContext): Policy => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PI] != null) {
    contents[_PI] = __expectString(output[_PI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_DVI] != null) {
    contents[_DVI] = __expectString(output[_DVI]);
  }
  if (output[_ACt] != null) {
    contents[_ACt] = __strictParseInt32(output[_ACt]) as number;
  }
  if (output[_PBUC] != null) {
    contents[_PBUC] = __strictParseInt32(output[_PBUC]) as number;
  }
  if (output[_IA] != null) {
    contents[_IA] = __parseBoolean(output[_IA]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_UD] != null) {
    contents[_UD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UD]));
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyDetail
 */
const de_PolicyDetail = (output: any, context: __SerdeContext): PolicyDetail => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PD] != null) {
    contents[_PD] = __expectString(output[_PD]);
  }
  return contents;
};

/**
 * deserializeAws_querypolicyDetailListType
 */
const de_policyDetailListType = (output: any, context: __SerdeContext): PolicyDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyDetail(entry, context);
    });
};

/**
 * deserializeAws_querypolicyDocumentVersionListType
 */
const de_policyDocumentVersionListType = (output: any, context: __SerdeContext): PolicyVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyVersion(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyEvaluationException
 */
const de_PolicyEvaluationException = (output: any, context: __SerdeContext): PolicyEvaluationException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyGrantingServiceAccess
 */
const de_PolicyGrantingServiceAccess = (output: any, context: __SerdeContext): PolicyGrantingServiceAccess => {
  const contents: any = {};
  if (output[_PN] != null) {
    contents[_PN] = __expectString(output[_PN]);
  }
  if (output[_PT] != null) {
    contents[_PT] = __expectString(output[_PT]);
  }
  if (output[_PA] != null) {
    contents[_PA] = __expectString(output[_PA]);
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectString(output[_ET]);
  }
  if (output[_EN] != null) {
    contents[_EN] = __expectString(output[_EN]);
  }
  return contents;
};

/**
 * deserializeAws_querypolicyGrantingServiceAccessListType
 */
const de_policyGrantingServiceAccessListType = (
  output: any,
  context: __SerdeContext
): PolicyGrantingServiceAccess[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyGrantingServiceAccess(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyGroup
 */
const de_PolicyGroup = (output: any, context: __SerdeContext): PolicyGroup => {
  const contents: any = {};
  if (output[_GN] != null) {
    contents[_GN] = __expectString(output[_GN]);
  }
  if (output[_GI] != null) {
    contents[_GI] = __expectString(output[_GI]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyGroupListType
 */
const de_PolicyGroupListType = (output: any, context: __SerdeContext): PolicyGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyGroup(entry, context);
    });
};

/**
 * deserializeAws_querypolicyListType
 */
const de_policyListType = (output: any, context: __SerdeContext): Policy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Policy(entry, context);
    });
};

/**
 * deserializeAws_querypolicyNameListType
 */
const de_policyNameListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryPolicyNotAttachableException
 */
const de_PolicyNotAttachableException = (output: any, context: __SerdeContext): PolicyNotAttachableException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyRole
 */
const de_PolicyRole = (output: any, context: __SerdeContext): PolicyRole => {
  const contents: any = {};
  if (output[_RN] != null) {
    contents[_RN] = __expectString(output[_RN]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyRoleListType
 */
const de_PolicyRoleListType = (output: any, context: __SerdeContext): PolicyRole[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyRole(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyUser
 */
const de_PolicyUser = (output: any, context: __SerdeContext): PolicyUser => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_UI] != null) {
    contents[_UI] = __expectString(output[_UI]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyUserListType
 */
const de_PolicyUserListType = (output: any, context: __SerdeContext): PolicyUser[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyUser(entry, context);
    });
};

/**
 * deserializeAws_queryPolicyVersion
 */
const de_PolicyVersion = (output: any, context: __SerdeContext): PolicyVersion => {
  const contents: any = {};
  if (output[_Do] != null) {
    contents[_Do] = __expectString(output[_Do]);
  }
  if (output[_VI] != null) {
    contents[_VI] = __expectString(output[_VI]);
  }
  if (output[_IDV] != null) {
    contents[_IDV] = __parseBoolean(output[_IDV]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  return contents;
};

/**
 * deserializeAws_queryPosition
 */
const de_Position = (output: any, context: __SerdeContext): Position => {
  const contents: any = {};
  if (output[_L] != null) {
    contents[_L] = __strictParseInt32(output[_L]) as number;
  }
  if (output[_Col] != null) {
    contents[_Col] = __strictParseInt32(output[_Col]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryprivateKeyList
 */
const de_privateKeyList = (output: any, context: __SerdeContext): SAMLPrivateKey[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SAMLPrivateKey(entry, context);
    });
};

/**
 * deserializeAws_queryReportGenerationLimitExceededException
 */
const de_ReportGenerationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReportGenerationLimitExceededException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryResetServiceSpecificCredentialResponse
 */
const de_ResetServiceSpecificCredentialResponse = (
  output: any,
  context: __SerdeContext
): ResetServiceSpecificCredentialResponse => {
  const contents: any = {};
  if (output[_SSC] != null) {
    contents[_SSC] = de_ServiceSpecificCredential(output[_SSC], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceSpecificResult
 */
const de_ResourceSpecificResult = (output: any, context: __SerdeContext): ResourceSpecificResult => {
  const contents: any = {};
  if (output[_ERN] != null) {
    contents[_ERN] = __expectString(output[_ERN]);
  }
  if (output[_ERD] != null) {
    contents[_ERD] = __expectString(output[_ERD]);
  }
  if (String(output.MatchedStatements).trim() === "") {
    contents[_MS] = [];
  } else if (output[_MS] != null && output[_MS][_me] != null) {
    contents[_MS] = de_StatementListType(__getArrayIfSingleItem(output[_MS][_me]), context);
  }
  if (String(output.MissingContextValues).trim() === "") {
    contents[_MCV] = [];
  } else if (output[_MCV] != null && output[_MCV][_me] != null) {
    contents[_MCV] = de_ContextKeyNamesResultListType(__getArrayIfSingleItem(output[_MCV][_me]), context);
  }
  if (String(output.EvalDecisionDetails).trim() === "") {
    contents[_EDD] = {};
  } else if (output[_EDD] != null && output[_EDD][_e] != null) {
    contents[_EDD] = de_EvalDecisionDetailsType(__getArrayIfSingleItem(output[_EDD][_e]), context);
  }
  if (output[_PBDD] != null) {
    contents[_PBDD] = de_PermissionsBoundaryDecisionDetail(output[_PBDD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceSpecificResultListType
 */
const de_ResourceSpecificResultListType = (output: any, context: __SerdeContext): ResourceSpecificResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceSpecificResult(entry, context);
    });
};

/**
 * deserializeAws_queryRole
 */
const de_Role = (output: any, context: __SerdeContext): Role => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_RN] != null) {
    contents[_RN] = __expectString(output[_RN]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_ARPD] != null) {
    contents[_ARPD] = __expectString(output[_ARPD]);
  }
  if (output[_D] != null) {
    contents[_D] = __expectString(output[_D]);
  }
  if (output[_MSD] != null) {
    contents[_MSD] = __strictParseInt32(output[_MSD]) as number;
  }
  if (output[_PB] != null) {
    contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_RLU] != null) {
    contents[_RLU] = de_RoleLastUsed(output[_RLU], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRoleDetail
 */
const de_RoleDetail = (output: any, context: __SerdeContext): RoleDetail => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_RN] != null) {
    contents[_RN] = __expectString(output[_RN]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_ARPD] != null) {
    contents[_ARPD] = __expectString(output[_ARPD]);
  }
  if (String(output.InstanceProfileList).trim() === "") {
    contents[_IPL] = [];
  } else if (output[_IPL] != null && output[_IPL][_me] != null) {
    contents[_IPL] = de_instanceProfileListType(__getArrayIfSingleItem(output[_IPL][_me]), context);
  }
  if (String(output.RolePolicyList).trim() === "") {
    contents[_RPL] = [];
  } else if (output[_RPL] != null && output[_RPL][_me] != null) {
    contents[_RPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_RPL][_me]), context);
  }
  if (String(output.AttachedManagedPolicies).trim() === "") {
    contents[_AMP] = [];
  } else if (output[_AMP] != null && output[_AMP][_me] != null) {
    contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
  }
  if (output[_PB] != null) {
    contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  if (output[_RLU] != null) {
    contents[_RLU] = de_RoleLastUsed(output[_RLU], context);
  }
  return contents;
};

/**
 * deserializeAws_queryroleDetailListType
 */
const de_roleDetailListType = (output: any, context: __SerdeContext): RoleDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoleDetail(entry, context);
    });
};

/**
 * deserializeAws_queryRoleLastUsed
 */
const de_RoleLastUsed = (output: any, context: __SerdeContext): RoleLastUsed => {
  const contents: any = {};
  if (output[_LUD] != null) {
    contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
  }
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  return contents;
};

/**
 * deserializeAws_queryroleListType
 */
const de_roleListType = (output: any, context: __SerdeContext): Role[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Role(entry, context);
    });
};

/**
 * deserializeAws_queryRoleUsageListType
 */
const de_RoleUsageListType = (output: any, context: __SerdeContext): RoleUsageType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RoleUsageType(entry, context);
    });
};

/**
 * deserializeAws_queryRoleUsageType
 */
const de_RoleUsageType = (output: any, context: __SerdeContext): RoleUsageType => {
  const contents: any = {};
  if (output[_R] != null) {
    contents[_R] = __expectString(output[_R]);
  }
  if (String(output.Resources).trim() === "") {
    contents[_Res] = [];
  } else if (output[_Res] != null && output[_Res][_me] != null) {
    contents[_Res] = de_ArnListType(__getArrayIfSingleItem(output[_Res][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySAMLPrivateKey
 */
const de_SAMLPrivateKey = (output: any, context: __SerdeContext): SAMLPrivateKey => {
  const contents: any = {};
  if (output[_KI] != null) {
    contents[_KI] = __expectString(output[_KI]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  return contents;
};

/**
 * deserializeAws_querySAMLProviderListEntry
 */
const de_SAMLProviderListEntry = (output: any, context: __SerdeContext): SAMLProviderListEntry => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_VU] != null) {
    contents[_VU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_VU]));
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  return contents;
};

/**
 * deserializeAws_querySAMLProviderListType
 */
const de_SAMLProviderListType = (output: any, context: __SerdeContext): SAMLProviderListEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SAMLProviderListEntry(entry, context);
    });
};

/**
 * deserializeAws_queryServerCertificate
 */
const de_ServerCertificate = (output: any, context: __SerdeContext): ServerCertificate => {
  const contents: any = {};
  if (output[_SCM] != null) {
    contents[_SCM] = de_ServerCertificateMetadata(output[_SCM], context);
  }
  if (output[_CB] != null) {
    contents[_CB] = __expectString(output[_CB]);
  }
  if (output[_CC] != null) {
    contents[_CC] = __expectString(output[_CC]);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryServerCertificateMetadata
 */
const de_ServerCertificateMetadata = (output: any, context: __SerdeContext): ServerCertificateMetadata => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_SCN] != null) {
    contents[_SCN] = __expectString(output[_SCN]);
  }
  if (output[_SCI] != null) {
    contents[_SCI] = __expectString(output[_SCI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_UDp] != null) {
    contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ex]));
  }
  return contents;
};

/**
 * deserializeAws_queryserverCertificateMetadataListType
 */
const de_serverCertificateMetadataListType = (output: any, context: __SerdeContext): ServerCertificateMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerCertificateMetadata(entry, context);
    });
};

/**
 * deserializeAws_queryServiceAccessNotEnabledException
 */
const de_ServiceAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): ServiceAccessNotEnabledException => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = __expectString(output[_Me]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceFailureException
 */
const de_ServiceFailureException = (output: any, context: __SerdeContext): ServiceFailureException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceLastAccessed
 */
const de_ServiceLastAccessed = (output: any, context: __SerdeContext): ServiceLastAccessed => {
  const contents: any = {};
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_LA] != null) {
    contents[_LA] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LA]));
  }
  if (output[_SNer] != null) {
    contents[_SNer] = __expectString(output[_SNer]);
  }
  if (output[_LAE] != null) {
    contents[_LAE] = __expectString(output[_LAE]);
  }
  if (output[_LAR] != null) {
    contents[_LAR] = __expectString(output[_LAR]);
  }
  if (output[_TAE] != null) {
    contents[_TAE] = __strictParseInt32(output[_TAE]) as number;
  }
  if (String(output.TrackedActionsLastAccessed).trim() === "") {
    contents[_TALA] = [];
  } else if (output[_TALA] != null && output[_TALA][_me] != null) {
    contents[_TALA] = de_TrackedActionsLastAccessed(__getArrayIfSingleItem(output[_TALA][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceNotSupportedException
 */
const de_ServiceNotSupportedException = (output: any, context: __SerdeContext): ServiceNotSupportedException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryServicesLastAccessed
 */
const de_ServicesLastAccessed = (output: any, context: __SerdeContext): ServiceLastAccessed[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceLastAccessed(entry, context);
    });
};

/**
 * deserializeAws_queryServiceSpecificCredential
 */
const de_ServiceSpecificCredential = (output: any, context: __SerdeContext): ServiceSpecificCredential => {
  const contents: any = {};
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_EDx] != null) {
    contents[_EDx] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDx]));
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_SP] != null) {
    contents[_SP] = __expectString(output[_SP]);
  }
  if (output[_SCA] != null) {
    contents[_SCA] = __expectString(output[_SCA]);
  }
  if (output[_SCS] != null) {
    contents[_SCS] = __expectString(output[_SCS]);
  }
  if (output[_SSCI] != null) {
    contents[_SSCI] = __expectString(output[_SSCI]);
  }
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceSpecificCredentialMetadata
 */
const de_ServiceSpecificCredentialMetadata = (
  output: any,
  context: __SerdeContext
): ServiceSpecificCredentialMetadata => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_SUN] != null) {
    contents[_SUN] = __expectString(output[_SUN]);
  }
  if (output[_SCA] != null) {
    contents[_SCA] = __expectString(output[_SCA]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_EDx] != null) {
    contents[_EDx] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDx]));
  }
  if (output[_SSCI] != null) {
    contents[_SSCI] = __expectString(output[_SSCI]);
  }
  if (output[_SN] != null) {
    contents[_SN] = __expectString(output[_SN]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceSpecificCredentialsListType
 */
const de_ServiceSpecificCredentialsListType = (
  output: any,
  context: __SerdeContext
): ServiceSpecificCredentialMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceSpecificCredentialMetadata(entry, context);
    });
};

/**
 * deserializeAws_querySigningCertificate
 */
const de_SigningCertificate = (output: any, context: __SerdeContext): SigningCertificate => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_CI] != null) {
    contents[_CI] = __expectString(output[_CI]);
  }
  if (output[_CB] != null) {
    contents[_CB] = __expectString(output[_CB]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_UDp] != null) {
    contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
  }
  return contents;
};

/**
 * deserializeAws_querySimulatePolicyResponse
 */
const de_SimulatePolicyResponse = (output: any, context: __SerdeContext): SimulatePolicyResponse => {
  const contents: any = {};
  if (String(output.EvaluationResults).trim() === "") {
    contents[_ER] = [];
  } else if (output[_ER] != null && output[_ER][_me] != null) {
    contents[_ER] = de_EvaluationResultsListType(__getArrayIfSingleItem(output[_ER][_me]), context);
  }
  if (output[_IT] != null) {
    contents[_IT] = __parseBoolean(output[_IT]);
  }
  if (output[_M] != null) {
    contents[_M] = __expectString(output[_M]);
  }
  return contents;
};

/**
 * deserializeAws_querySSHPublicKey
 */
const de_SSHPublicKey = (output: any, context: __SerdeContext): SSHPublicKey => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_SSHPKI] != null) {
    contents[_SSHPKI] = __expectString(output[_SSHPKI]);
  }
  if (output[_Fi] != null) {
    contents[_Fi] = __expectString(output[_Fi]);
  }
  if (output[_SSHPKB] != null) {
    contents[_SSHPKB] = __expectString(output[_SSHPKB]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_UDp] != null) {
    contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
  }
  return contents;
};

/**
 * deserializeAws_querySSHPublicKeyListType
 */
const de_SSHPublicKeyListType = (output: any, context: __SerdeContext): SSHPublicKeyMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SSHPublicKeyMetadata(entry, context);
    });
};

/**
 * deserializeAws_querySSHPublicKeyMetadata
 */
const de_SSHPublicKeyMetadata = (output: any, context: __SerdeContext): SSHPublicKeyMetadata => {
  const contents: any = {};
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_SSHPKI] != null) {
    contents[_SSHPKI] = __expectString(output[_SSHPKI]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_UDp] != null) {
    contents[_UDp] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_UDp]));
  }
  return contents;
};

/**
 * deserializeAws_queryStatement
 */
const de_Statement = (output: any, context: __SerdeContext): Statement => {
  const contents: any = {};
  if (output[_SPI] != null) {
    contents[_SPI] = __expectString(output[_SPI]);
  }
  if (output[_SPT] != null) {
    contents[_SPT] = __expectString(output[_SPT]);
  }
  if (output[_SPt] != null) {
    contents[_SPt] = de_Position(output[_SPt], context);
  }
  if (output[_EPn] != null) {
    contents[_EPn] = de_Position(output[_EPn], context);
  }
  return contents;
};

/**
 * deserializeAws_queryStatementListType
 */
const de_StatementListType = (output: any, context: __SerdeContext): Statement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Statement(entry, context);
    });
};

/**
 * deserializeAws_querysummaryMapType
 */
const de_summaryMapType = (output: any, context: __SerdeContext): Partial<Record<SummaryKeyType, number>> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __strictParseInt32(pair["value"]) as number;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_querytagListType
 */
const de_tagListType = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_querythumbprintListType
 */
const de_thumbprintListType = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryTrackedActionLastAccessed
 */
const de_TrackedActionLastAccessed = (output: any, context: __SerdeContext): TrackedActionLastAccessed => {
  const contents: any = {};
  if (output[_ANc] != null) {
    contents[_ANc] = __expectString(output[_ANc]);
  }
  if (output[_LAEa] != null) {
    contents[_LAEa] = __expectString(output[_LAEa]);
  }
  if (output[_LATa] != null) {
    contents[_LATa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LATa]));
  }
  if (output[_LARa] != null) {
    contents[_LARa] = __expectString(output[_LARa]);
  }
  return contents;
};

/**
 * deserializeAws_queryTrackedActionsLastAccessed
 */
const de_TrackedActionsLastAccessed = (output: any, context: __SerdeContext): TrackedActionLastAccessed[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrackedActionLastAccessed(entry, context);
    });
};

/**
 * deserializeAws_queryUnmodifiableEntityException
 */
const de_UnmodifiableEntityException = (output: any, context: __SerdeContext): UnmodifiableEntityException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUnrecognizedPublicKeyEncodingException
 */
const de_UnrecognizedPublicKeyEncodingException = (
  output: any,
  context: __SerdeContext
): UnrecognizedPublicKeyEncodingException => {
  const contents: any = {};
  if (output[_m] != null) {
    contents[_m] = __expectString(output[_m]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateRoleDescriptionResponse
 */
const de_UpdateRoleDescriptionResponse = (output: any, context: __SerdeContext): UpdateRoleDescriptionResponse => {
  const contents: any = {};
  if (output[_Ro] != null) {
    contents[_Ro] = de_Role(output[_Ro], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateRoleResponse
 */
const de_UpdateRoleResponse = (output: any, context: __SerdeContext): UpdateRoleResponse => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryUpdateSAMLProviderResponse
 */
const de_UpdateSAMLProviderResponse = (output: any, context: __SerdeContext): UpdateSAMLProviderResponse => {
  const contents: any = {};
  if (output[_SAMLPA] != null) {
    contents[_SAMLPA] = __expectString(output[_SAMLPA]);
  }
  return contents;
};

/**
 * deserializeAws_queryUploadServerCertificateResponse
 */
const de_UploadServerCertificateResponse = (output: any, context: __SerdeContext): UploadServerCertificateResponse => {
  const contents: any = {};
  if (output[_SCM] != null) {
    contents[_SCM] = de_ServerCertificateMetadata(output[_SCM], context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUploadSigningCertificateResponse
 */
const de_UploadSigningCertificateResponse = (
  output: any,
  context: __SerdeContext
): UploadSigningCertificateResponse => {
  const contents: any = {};
  if (output[_Cert] != null) {
    contents[_Cert] = de_SigningCertificate(output[_Cert], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUploadSSHPublicKeyResponse
 */
const de_UploadSSHPublicKeyResponse = (output: any, context: __SerdeContext): UploadSSHPublicKeyResponse => {
  const contents: any = {};
  if (output[_SSHPK] != null) {
    contents[_SSHPK] = de_SSHPublicKey(output[_SSHPK], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUser
 */
const de_User = (output: any, context: __SerdeContext): User => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_UI] != null) {
    contents[_UI] = __expectString(output[_UI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_PLU] != null) {
    contents[_PLU] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_PLU]));
  }
  if (output[_PB] != null) {
    contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUserDetail
 */
const de_UserDetail = (output: any, context: __SerdeContext): UserDetail => {
  const contents: any = {};
  if (output[_P] != null) {
    contents[_P] = __expectString(output[_P]);
  }
  if (output[_UN] != null) {
    contents[_UN] = __expectString(output[_UN]);
  }
  if (output[_UI] != null) {
    contents[_UI] = __expectString(output[_UI]);
  }
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (String(output.UserPolicyList).trim() === "") {
    contents[_UPL] = [];
  } else if (output[_UPL] != null && output[_UPL][_me] != null) {
    contents[_UPL] = de_policyDetailListType(__getArrayIfSingleItem(output[_UPL][_me]), context);
  }
  if (String(output.GroupList).trim() === "") {
    contents[_GL] = [];
  } else if (output[_GL] != null && output[_GL][_me] != null) {
    contents[_GL] = de_groupNameListType(__getArrayIfSingleItem(output[_GL][_me]), context);
  }
  if (String(output.AttachedManagedPolicies).trim() === "") {
    contents[_AMP] = [];
  } else if (output[_AMP] != null && output[_AMP][_me] != null) {
    contents[_AMP] = de_attachedPoliciesListType(__getArrayIfSingleItem(output[_AMP][_me]), context);
  }
  if (output[_PB] != null) {
    contents[_PB] = de_AttachedPermissionsBoundary(output[_PB], context);
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryuserDetailListType
 */
const de_userDetailListType = (output: any, context: __SerdeContext): UserDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserDetail(entry, context);
    });
};

/**
 * deserializeAws_queryuserListType
 */
const de_userListType = (output: any, context: __SerdeContext): User[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_User(entry, context);
    });
};

/**
 * deserializeAws_queryVirtualMFADevice
 */
const de_VirtualMFADevice = (output: any, context: __SerdeContext): VirtualMFADevice => {
  const contents: any = {};
  if (output[_SNe] != null) {
    contents[_SNe] = __expectString(output[_SNe]);
  }
  if (output[_BSS] != null) {
    contents[_BSS] = context.base64Decoder(output[_BSS]);
  }
  if (output[_QRCPNG] != null) {
    contents[_QRCPNG] = context.base64Decoder(output[_QRCPNG]);
  }
  if (output[_Us] != null) {
    contents[_Us] = de_User(output[_Us], context);
  }
  if (output[_EDn] != null) {
    contents[_EDn] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_EDn]));
  }
  if (String(output.Tags).trim() === "") {
    contents[_T] = [];
  } else if (output[_T] != null && output[_T][_me] != null) {
    contents[_T] = de_tagListType(__getArrayIfSingleItem(output[_T][_me]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryvirtualMFADeviceListType
 */
const de_virtualMFADeviceListType = (output: any, context: __SerdeContext): VirtualMFADevice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VirtualMFADevice(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const _ = "2010-05-08";
const _A = "Action";
const _AA = "AccountAlias";
const _AAc = "AccountAliases";
const _ABO = "AllowedByOrganizations";
const _ABPB = "AllowedByPermissionsBoundary";
const _AC = "AuthenticationCode1";
const _ACIDTOIDCP = "AddClientIDToOpenIDConnectProvider";
const _ACt = "AttachmentCount";
const _ACu = "AuthenticationCode2";
const _AD = "AccessDetails";
const _AEM = "AssertionEncryptionMode";
const _AGP = "AttachGroupPolicy";
const _AK = "AccessKey";
const _AKI = "AccessKeyId";
const _AKLU = "AccessKeyLastUsed";
const _AKM = "AccessKeyMetadata";
const _AMP = "AttachedManagedPolicies";
const _AN = "ActionNames";
const _ANc = "ActionName";
const _AP = "AttachedPolicies";
const _APK = "AddPrivateKey";
const _ARP = "AttachRolePolicy";
const _ARPD = "AssumeRolePolicyDocument";
const _ARTIP = "AddRoleToInstanceProfile";
const _AS = "AssignmentStatus";
const _AU = "AllUsers";
const _AUP = "AttachUserPolicy";
const _AUTCP = "AllowUsersToChangePassword";
const _AUTG = "AddUserToGroup";
const _AWSSN = "AWSServiceName";
const _Ar = "Arn";
const _BSS = "Base32StringSeed";
const _C = "Code";
const _CA = "CallerArn";
const _CAA = "CreateAccountAlias";
const _CAD = "CredentialAgeDays";
const _CAK = "CreateAccessKey";
const _CB = "CertificateBody";
const _CC = "CertificateChain";
const _CD = "CreateDate";
const _CE = "ContextEntries";
const _CG = "CreateGroup";
const _CI = "CertificateId";
const _CID = "ClientID";
const _CIDL = "ClientIDList";
const _CIP = "CreateInstanceProfile";
const _CKN = "ContextKeyName";
const _CKNo = "ContextKeyNames";
const _CKT = "ContextKeyType";
const _CKV = "ContextKeyValues";
const _CLP = "CreateLoginProfile";
const _COIDCP = "CreateOpenIDConnectProvider";
const _CP = "ChangePassword";
const _CPV = "CreatePolicyVersion";
const _CPr = "CreatePolicy";
const _CR = "CreateRole";
const _CS = "CustomSuffix";
const _CSAMLP = "CreateSAMLProvider";
const _CSLR = "CreateServiceLinkedRole";
const _CSSC = "CreateServiceSpecificCredential";
const _CU = "CreateUser";
const _CVMFAD = "CreateVirtualMFADevice";
const _Ce = "Certifications";
const _Cer = "Certificates";
const _Cert = "Certificate";
const _Co = "Content";
const _Col = "Column";
const _D = "Description";
const _DAA = "DeleteAccountAlias";
const _DAK = "DeleteAccessKey";
const _DAPP = "DeleteAccountPasswordPolicy";
const _DG = "DeleteGroup";
const _DGP = "DeleteGroupPolicy";
const _DGPe = "DetachGroupPolicy";
const _DIP = "DeleteInstanceProfile";
const _DLP = "DeleteLoginProfile";
const _DMFAD = "DeactivateMFADevice";
const _DOIDCP = "DeleteOpenIDConnectProvider";
const _DORCM = "DisableOrganizationsRootCredentialsManagement";
const _DORS = "DisableOrganizationsRootSessions";
const _DP = "DeletePolicy";
const _DPV = "DeletePolicyVersion";
const _DR = "DeleteRole";
const _DRP = "DeleteRolePolicy";
const _DRPB = "DeleteRolePermissionsBoundary";
const _DRPe = "DetachRolePolicy";
const _DSAMLP = "DeleteSAMLProvider";
const _DSC = "DeleteServerCertificate";
const _DSCe = "DeleteSigningCertificate";
const _DSLR = "DeleteServiceLinkedRole";
const _DSSC = "DeleteServiceSpecificCredential";
const _DSSHPK = "DeleteSSHPublicKey";
const _DTI = "DeletionTaskId";
const _DU = "DeleteUser";
const _DUP = "DeleteUserPolicy";
const _DUPB = "DeleteUserPermissionsBoundary";
const _DUPe = "DetachUserPolicy";
const _DVI = "DefaultVersionId";
const _DVMFAD = "DeleteVirtualMFADevice";
const _Do = "Document";
const _E = "Encoding";
const _EAN = "EvalActionName";
const _ED = "EvalDecision";
const _EDD = "EvalDecisionDetails";
const _EDL = "EntityDetailsList";
const _EDn = "EnableDate";
const _EDr = "ErrorDetails";
const _EDx = "ExpirationDate";
const _EF = "EntityFilter";
const _EFn = "EnabledFeatures";
const _EI = "EntityInfo";
const _EMFAD = "EnableMFADevice";
const _EN = "EntityName";
const _EORCM = "EnableOrganizationsRootCredentialsManagement";
const _EORS = "EnableOrganizationsRootSessions";
const _EP = "EntityPath";
const _EPn = "EndPosition";
const _EPx = "ExpirePasswords";
const _ER = "EvaluationResults";
const _ERD = "EvalResourceDecision";
const _ERN = "EvalResourceName";
const _ET = "EntityType";
const _Er = "Error";
const _Ex = "Expiration";
const _F = "Filter";
const _Fi = "Fingerprint";
const _G = "Granularity";
const _GAAD = "GetAccountAuthorizationDetails";
const _GAKLU = "GetAccessKeyLastUsed";
const _GAPP = "GetAccountPasswordPolicy";
const _GAS = "GetAccountSummary";
const _GCKFCP = "GetContextKeysForCustomPolicy";
const _GCKFPP = "GetContextKeysForPrincipalPolicy";
const _GCR = "GenerateCredentialReport";
const _GCRe = "GetCredentialReport";
const _GDL = "GroupDetailList";
const _GETV = "GlobalEndpointTokenVersion";
const _GG = "GetGroup";
const _GGP = "GetGroupPolicy";
const _GI = "GroupId";
const _GIP = "GetInstanceProfile";
const _GL = "GroupList";
const _GLP = "GetLoginProfile";
const _GMFAD = "GetMFADevice";
const _GN = "GroupName";
const _GOAR = "GenerateOrganizationsAccessReport";
const _GOARe = "GetOrganizationsAccessReport";
const _GOIDCP = "GetOpenIDConnectProvider";
const _GP = "GetPolicy";
const _GPL = "GroupPolicyList";
const _GPV = "GetPolicyVersion";
const _GR = "GetRole";
const _GRP = "GetRolePolicy";
const _GSAMLP = "GetSAMLProvider";
const _GSC = "GetServerCertificate";
const _GSLAD = "GenerateServiceLastAccessedDetails";
const _GSLADWE = "GetServiceLastAccessedDetailsWithEntities";
const _GSLADe = "GetServiceLastAccessedDetails";
const _GSLRDS = "GetServiceLinkedRoleDeletionStatus";
const _GSSHPK = "GetSSHPublicKey";
const _GT = "GeneratedTime";
const _GU = "GetUser";
const _GUP = "GetUserPolicy";
const _Gr = "Group";
const _Gro = "Groups";
const _HE = "HardExpiry";
const _I = "Id";
const _IA = "IsAttachable";
const _IDV = "IsDefaultVersion";
const _IP = "InstanceProfile";
const _IPI = "InstanceProfileId";
const _IPL = "InstanceProfileList";
const _IPN = "InstanceProfileName";
const _IPn = "InstanceProfiles";
const _IT = "IsTruncated";
const _JCD = "JobCreationDate";
const _JCDo = "JobCompletionDate";
const _JI = "JobId";
const _JS = "JobStatus";
const _JT = "JobType";
const _K = "Key";
const _KI = "KeyId";
const _L = "Line";
const _LA = "LastAuthenticated";
const _LAA = "ListAccountAliases";
const _LAE = "LastAuthenticatedEntity";
const _LAEa = "LastAccessedEntity";
const _LAGP = "ListAttachedGroupPolicies";
const _LAK = "ListAccessKeys";
const _LAR = "LastAuthenticatedRegion";
const _LARP = "ListAttachedRolePolicies";
const _LARa = "LastAccessedRegion";
const _LAT = "LastAuthenticatedTime";
const _LATa = "LastAccessedTime";
const _LAUP = "ListAttachedUserPolicies";
const _LEFP = "ListEntitiesForPolicy";
const _LG = "ListGroups";
const _LGFU = "ListGroupsForUser";
const _LGP = "ListGroupPolicies";
const _LIP = "ListInstanceProfiles";
const _LIPFR = "ListInstanceProfilesForRole";
const _LIPT = "ListInstanceProfileTags";
const _LMFAD = "ListMFADevices";
const _LMFADT = "ListMFADeviceTags";
const _LOF = "ListOrganizationsFeatures";
const _LOIDCP = "ListOpenIDConnectProviders";
const _LOIDCPT = "ListOpenIDConnectProviderTags";
const _LP = "ListPolicies";
const _LPGSA = "ListPoliciesGrantingServiceAccess";
const _LPT = "ListPolicyTags";
const _LPV = "ListPolicyVersions";
const _LPo = "LoginProfile";
const _LR = "ListRoles";
const _LRP = "ListRolePolicies";
const _LRT = "ListRoleTags";
const _LSAMLP = "ListSAMLProviders";
const _LSAMLPT = "ListSAMLProviderTags";
const _LSC = "ListServerCertificates";
const _LSCT = "ListServerCertificateTags";
const _LSCi = "ListSigningCertificates";
const _LSSC = "ListServiceSpecificCredentials";
const _LSSHPK = "ListSSHPublicKeys";
const _LU = "ListUsers";
const _LUD = "LastUsedDate";
const _LUP = "ListUserPolicies";
const _LUT = "ListUserTags";
const _LVMFAD = "ListVirtualMFADevices";
const _M = "Marker";
const _MCV = "MissingContextValues";
const _MFAD = "MFADevices";
const _MI = "MaxItems";
const _MPA = "MaxPasswordAge";
const _MPL = "MinimumPasswordLength";
const _MS = "MatchedStatements";
const _MSD = "MaxSessionDuration";
const _Me = "Message";
const _N = "Name";
const _NGN = "NewGroupName";
const _NOSA = "NumberOfServicesAccessible";
const _NOSNA = "NumberOfServicesNotAccessed";
const _NP = "NewPassword";
const _NPe = "NewPath";
const _NSCN = "NewServerCertificateName";
const _NUN = "NewUserName";
const _OA = "OnlyAttached";
const _ODD = "OrganizationsDecisionDetail";
const _OI = "OrganizationId";
const _OIDCPA = "OpenIDConnectProviderArn";
const _OIDCPL = "OpenIDConnectProviderList";
const _OP = "OldPassword";
const _OPI = "OrganizationsPolicyId";
const _P = "Path";
const _PA = "PolicyArn";
const _PB = "PermissionsBoundary";
const _PBA = "PermissionsBoundaryArn";
const _PBDD = "PermissionsBoundaryDecisionDetail";
const _PBPIL = "PermissionsBoundaryPolicyInputList";
const _PBT = "PermissionsBoundaryType";
const _PBUC = "PermissionsBoundaryUsageCount";
const _PD = "PolicyDocument";
const _PG = "PolicyGroups";
const _PGP = "PutGroupPolicy";
const _PGSA = "PoliciesGrantingServiceAccess";
const _PI = "PolicyId";
const _PIL = "PolicyInputList";
const _PK = "PrivateKey";
const _PKL = "PrivateKeyList";
const _PLU = "PasswordLastUsed";
const _PN = "PolicyName";
const _PNo = "PolicyNames";
const _PP = "PathPrefix";
const _PPa = "PasswordPolicy";
const _PR = "PolicyRoles";
const _PRP = "PutRolePolicy";
const _PRPB = "PutRolePermissionsBoundary";
const _PRPa = "PasswordReusePrevention";
const _PRR = "PasswordResetRequired";
const _PSA = "PolicySourceArn";
const _PT = "PolicyType";
const _PU = "PolicyUsers";
const _PUF = "PolicyUsageFilter";
const _PUP = "PutUserPolicy";
const _PUPB = "PutUserPermissionsBoundary";
const _PV = "PolicyVersion";
const _PVL = "PolicyVersionList";
const _Pa = "Password";
const _Po = "Policy";
const _Pol = "Policies";
const _QRCPNG = "QRCodePNG";
const _R = "Region";
const _RA = "ResourceArns";
const _RCIDFOIDCP = "RemoveClientIDFromOpenIDConnectProvider";
const _RDL = "RoleDetailList";
const _RF = "ReportFormat";
const _RHO = "ResourceHandlingOption";
const _RI = "RoleId";
const _RLC = "RequireLowercaseCharacters";
const _RLU = "RoleLastUsed";
const _RMFAD = "ResyncMFADevice";
const _RN = "RoleName";
const _RNe = "RequireNumbers";
const _RO = "ResourceOwner";
const _RP = "ResourcePolicy";
const _RPK = "RemovePrivateKey";
const _RPL = "RolePolicyList";
const _RRFIP = "RemoveRoleFromInstanceProfile";
const _RS = "RequireSymbols";
const _RSR = "ResourceSpecificResults";
const _RSSC = "ResetServiceSpecificCredential";
const _RUC = "RequireUppercaseCharacters";
const _RUFG = "RemoveUserFromGroup";
const _RUL = "RoleUsageList";
const _Re = "Reason";
const _Res = "Resources";
const _Ro = "Role";
const _Rol = "Roles";
const _S = "Scope";
const _SAD = "SetAsDefault";
const _SAK = "SecretAccessKey";
const _SAMLMD = "SAMLMetadataDocument";
const _SAMLPA = "SAMLProviderArn";
const _SAMLPL = "SAMLProviderList";
const _SAMLPUUID = "SAMLProviderUUID";
const _SC = "ServerCertificate";
const _SCA = "ServiceCredentialAlias";
const _SCI = "ServerCertificateId";
const _SCM = "ServerCertificateMetadata";
const _SCML = "ServerCertificateMetadataList";
const _SCN = "ServerCertificateName";
const _SCP = "SimulateCustomPolicy";
const _SCS = "ServiceCredentialSecret";
const _SDPV = "SetDefaultPolicyVersion";
const _SK = "SortKey";
const _SLA = "ServicesLastAccessed";
const _SM = "SummaryMap";
const _SN = "ServiceName";
const _SNe = "SerialNumber";
const _SNer = "ServiceNamespace";
const _SNerv = "ServiceNamespaces";
const _SP = "ServicePassword";
const _SPI = "SourcePolicyId";
const _SPP = "SimulatePrincipalPolicy";
const _SPT = "SourcePolicyType";
const _SPt = "StartPosition";
const _SSC = "ServiceSpecificCredential";
const _SSCI = "ServiceSpecificCredentialId";
const _SSCe = "ServiceSpecificCredentials";
const _SSHPK = "SSHPublicKey";
const _SSHPKB = "SSHPublicKeyBody";
const _SSHPKI = "SSHPublicKeyId";
const _SSHPKu = "SSHPublicKeys";
const _SSTSP = "SetSecurityTokenServicePreferences";
const _SUN = "ServiceUserName";
const _St = "Status";
const _Sta = "State";
const _T = "Tags";
const _TAE = "TotalAuthenticatedEntities";
const _TALA = "TrackedActionsLastAccessed";
const _TIP = "TagInstanceProfile";
const _TK = "TagKeys";
const _TL = "ThumbprintList";
const _TMFAD = "TagMFADevice";
const _TOIDCP = "TagOpenIDConnectProvider";
const _TP = "TagPolicy";
const _TR = "TagRole";
const _TSAMLP = "TagSAMLProvider";
const _TSC = "TagServerCertificate";
const _TU = "TagUser";
const _Ti = "Timestamp";
const _Ty = "Type";
const _U = "Url";
const _UAK = "UpdateAccessKey";
const _UAPP = "UpdateAccountPasswordPolicy";
const _UARP = "UpdateAssumeRolePolicy";
const _UD = "UpdateDate";
const _UDL = "UserDetailList";
const _UDp = "UploadDate";
const _UG = "UpdateGroup";
const _UI = "UserId";
const _UIP = "UntagInstanceProfile";
const _ULP = "UpdateLoginProfile";
const _UMFAD = "UntagMFADevice";
const _UN = "UserName";
const _UOIDCP = "UntagOpenIDConnectProvider";
const _UOIDCPT = "UpdateOpenIDConnectProviderThumbprint";
const _UP = "UntagPolicy";
const _UPL = "UserPolicyList";
const _UR = "UntagRole";
const _URD = "UpdateRoleDescription";
const _URp = "UpdateRole";
const _USAMLP = "UntagSAMLProvider";
const _USAMLPp = "UpdateSAMLProvider";
const _USC = "UntagServerCertificate";
const _USCp = "UpdateServerCertificate";
const _USCpd = "UpdateSigningCertificate";
const _USCpl = "UploadServerCertificate";
const _USCplo = "UploadSigningCertificate";
const _USSC = "UpdateServiceSpecificCredential";
const _USSHPK = "UpdateSSHPublicKey";
const _USSHPKp = "UploadSSHPublicKey";
const _UU = "UntagUser";
const _UUp = "UpdateUser";
const _Us = "User";
const _Use = "Users";
const _V = "Version";
const _VI = "VersionId";
const _VMFAD = "VirtualMFADevice";
const _VMFADN = "VirtualMFADeviceName";
const _VMFADi = "VirtualMFADevices";
const _VU = "ValidUntil";
const _Va = "Value";
const _Ve = "Versions";
const _e = "entry";
const _m = "message";
const _me = "member";

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
