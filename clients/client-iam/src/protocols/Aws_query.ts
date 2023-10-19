// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
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
import { XMLParser } from "fast-xml-parser";

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
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput } from "../commands/EnableMFADeviceCommand";
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
  AddClientIDToOpenIDConnectProviderRequest,
  AddRoleToInstanceProfileRequest,
  AddUserToGroupRequest,
  AttachedPermissionsBoundary,
  AttachedPolicy,
  AttachGroupPolicyRequest,
  AttachRolePolicyRequest,
  AttachUserPolicyRequest,
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
  EnableMFADeviceRequest,
  EntityAlreadyExistsException,
  EntityDetails,
  EntityInfo,
  EntityTemporarilyUnmodifiableException,
  EntityType,
  ErrorDetails,
  EvaluationResult,
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
  OrganizationsDecisionDetail,
  PasswordPolicy,
  PasswordPolicyViolationException,
  PermissionsBoundaryDecisionDetail,
  Policy,
  PolicyDetail,
  PolicyEvaluationDecisionType,
  PolicyEvaluationException,
  PolicyGrantingServiceAccess,
  PolicyGroup,
  PolicyNotAttachableException,
  PolicyRole,
  PolicyUser,
  PolicyVersion,
  Position,
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
  ResourceSpecificResult,
  ResyncMFADeviceRequest,
  Role,
  RoleDetail,
  RoleLastUsed,
  RoleUsageType,
  SAMLProviderListEntry,
  ServerCertificate,
  ServerCertificateMetadata,
  ServiceFailureException,
  ServiceLastAccessed,
  ServiceNotSupportedException,
  ServiceSpecificCredential,
  ServiceSpecificCredentialMetadata,
  SetDefaultPolicyVersionRequest,
  SetSecurityTokenServicePreferencesRequest,
  SigningCertificate,
  SimulateCustomPolicyRequest,
  SimulatePolicyResponse,
  SimulatePrincipalPolicyRequest,
  SSHPublicKey,
  SSHPublicKeyMetadata,
  Statement,
  SummaryKeyType,
  Tag,
  TagInstanceProfileRequest,
  TagMFADeviceRequest,
  TagOpenIDConnectProviderRequest,
  TagPolicyRequest,
  TagRoleRequest,
  TagSAMLProviderRequest,
  TagServerCertificateRequest,
  TagUserRequest,
  TrackedActionLastAccessed,
  UnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException,
  UntagInstanceProfileRequest,
  User,
  UserDetail,
  VirtualMFADevice,
} from "../models/models_0";
import {
  DuplicateCertificateException,
  DuplicateSSHPublicKeyException,
  InvalidCertificateException,
  InvalidPublicKeyException,
  KeyPairMismatchException,
  MalformedCertificateException,
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
    Action: "AddClientIDToOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "AddRoleToInstanceProfile",
    Version: "2010-05-08",
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
    Action: "AddUserToGroup",
    Version: "2010-05-08",
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
    Action: "AttachGroupPolicy",
    Version: "2010-05-08",
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
    Action: "AttachRolePolicy",
    Version: "2010-05-08",
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
    Action: "AttachUserPolicy",
    Version: "2010-05-08",
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
    Action: "ChangePassword",
    Version: "2010-05-08",
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
    Action: "CreateAccessKey",
    Version: "2010-05-08",
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
    Action: "CreateAccountAlias",
    Version: "2010-05-08",
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
    Action: "CreateGroup",
    Version: "2010-05-08",
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
    Action: "CreateInstanceProfile",
    Version: "2010-05-08",
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
    Action: "CreateLoginProfile",
    Version: "2010-05-08",
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
    Action: "CreateOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "CreatePolicy",
    Version: "2010-05-08",
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
    Action: "CreatePolicyVersion",
    Version: "2010-05-08",
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
    Action: "CreateRole",
    Version: "2010-05-08",
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
    Action: "CreateSAMLProvider",
    Version: "2010-05-08",
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
    Action: "CreateServiceLinkedRole",
    Version: "2010-05-08",
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
    Action: "CreateServiceSpecificCredential",
    Version: "2010-05-08",
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
    Action: "CreateUser",
    Version: "2010-05-08",
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
    Action: "CreateVirtualMFADevice",
    Version: "2010-05-08",
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
    Action: "DeactivateMFADevice",
    Version: "2010-05-08",
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
    Action: "DeleteAccessKey",
    Version: "2010-05-08",
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
    Action: "DeleteAccountAlias",
    Version: "2010-05-08",
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
    Action: "DeleteAccountPasswordPolicy",
    Version: "2010-05-08",
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
    Action: "DeleteGroup",
    Version: "2010-05-08",
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
    Action: "DeleteGroupPolicy",
    Version: "2010-05-08",
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
    Action: "DeleteInstanceProfile",
    Version: "2010-05-08",
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
    Action: "DeleteLoginProfile",
    Version: "2010-05-08",
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
    Action: "DeleteOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "DeletePolicy",
    Version: "2010-05-08",
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
    Action: "DeletePolicyVersion",
    Version: "2010-05-08",
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
    Action: "DeleteRole",
    Version: "2010-05-08",
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
    Action: "DeleteRolePermissionsBoundary",
    Version: "2010-05-08",
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
    Action: "DeleteRolePolicy",
    Version: "2010-05-08",
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
    Action: "DeleteSAMLProvider",
    Version: "2010-05-08",
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
    Action: "DeleteServerCertificate",
    Version: "2010-05-08",
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
    Action: "DeleteServiceLinkedRole",
    Version: "2010-05-08",
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
    Action: "DeleteServiceSpecificCredential",
    Version: "2010-05-08",
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
    Action: "DeleteSigningCertificate",
    Version: "2010-05-08",
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
    Action: "DeleteSSHPublicKey",
    Version: "2010-05-08",
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
    Action: "DeleteUser",
    Version: "2010-05-08",
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
    Action: "DeleteUserPermissionsBoundary",
    Version: "2010-05-08",
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
    Action: "DeleteUserPolicy",
    Version: "2010-05-08",
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
    Action: "DeleteVirtualMFADevice",
    Version: "2010-05-08",
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
    Action: "DetachGroupPolicy",
    Version: "2010-05-08",
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
    Action: "DetachRolePolicy",
    Version: "2010-05-08",
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
    Action: "DetachUserPolicy",
    Version: "2010-05-08",
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
    Action: "EnableMFADevice",
    Version: "2010-05-08",
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
    Action: "GenerateCredentialReport",
    Version: "2010-05-08",
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
    Action: "GenerateOrganizationsAccessReport",
    Version: "2010-05-08",
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
    Action: "GenerateServiceLastAccessedDetails",
    Version: "2010-05-08",
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
    Action: "GetAccessKeyLastUsed",
    Version: "2010-05-08",
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
    Action: "GetAccountAuthorizationDetails",
    Version: "2010-05-08",
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
    Action: "GetAccountPasswordPolicy",
    Version: "2010-05-08",
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
    Action: "GetAccountSummary",
    Version: "2010-05-08",
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
    Action: "GetContextKeysForCustomPolicy",
    Version: "2010-05-08",
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
    Action: "GetContextKeysForPrincipalPolicy",
    Version: "2010-05-08",
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
    Action: "GetCredentialReport",
    Version: "2010-05-08",
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
    Action: "GetGroup",
    Version: "2010-05-08",
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
    Action: "GetGroupPolicy",
    Version: "2010-05-08",
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
    Action: "GetInstanceProfile",
    Version: "2010-05-08",
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
    Action: "GetLoginProfile",
    Version: "2010-05-08",
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
    Action: "GetMFADevice",
    Version: "2010-05-08",
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
    Action: "GetOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "GetOrganizationsAccessReport",
    Version: "2010-05-08",
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
    Action: "GetPolicy",
    Version: "2010-05-08",
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
    Action: "GetPolicyVersion",
    Version: "2010-05-08",
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
    Action: "GetRole",
    Version: "2010-05-08",
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
    Action: "GetRolePolicy",
    Version: "2010-05-08",
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
    Action: "GetSAMLProvider",
    Version: "2010-05-08",
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
    Action: "GetServerCertificate",
    Version: "2010-05-08",
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
    Action: "GetServiceLastAccessedDetails",
    Version: "2010-05-08",
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
    Action: "GetServiceLastAccessedDetailsWithEntities",
    Version: "2010-05-08",
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
    Action: "GetServiceLinkedRoleDeletionStatus",
    Version: "2010-05-08",
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
    Action: "GetSSHPublicKey",
    Version: "2010-05-08",
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
    Action: "GetUser",
    Version: "2010-05-08",
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
    Action: "GetUserPolicy",
    Version: "2010-05-08",
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
    Action: "ListAccessKeys",
    Version: "2010-05-08",
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
    Action: "ListAccountAliases",
    Version: "2010-05-08",
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
    Action: "ListAttachedGroupPolicies",
    Version: "2010-05-08",
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
    Action: "ListAttachedRolePolicies",
    Version: "2010-05-08",
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
    Action: "ListAttachedUserPolicies",
    Version: "2010-05-08",
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
    Action: "ListEntitiesForPolicy",
    Version: "2010-05-08",
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
    Action: "ListGroupPolicies",
    Version: "2010-05-08",
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
    Action: "ListGroups",
    Version: "2010-05-08",
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
    Action: "ListGroupsForUser",
    Version: "2010-05-08",
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
    Action: "ListInstanceProfiles",
    Version: "2010-05-08",
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
    Action: "ListInstanceProfilesForRole",
    Version: "2010-05-08",
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
    Action: "ListInstanceProfileTags",
    Version: "2010-05-08",
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
    Action: "ListMFADevices",
    Version: "2010-05-08",
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
    Action: "ListMFADeviceTags",
    Version: "2010-05-08",
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
    Action: "ListOpenIDConnectProviders",
    Version: "2010-05-08",
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
    Action: "ListOpenIDConnectProviderTags",
    Version: "2010-05-08",
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
    Action: "ListPolicies",
    Version: "2010-05-08",
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
    Action: "ListPoliciesGrantingServiceAccess",
    Version: "2010-05-08",
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
    Action: "ListPolicyTags",
    Version: "2010-05-08",
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
    Action: "ListPolicyVersions",
    Version: "2010-05-08",
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
    Action: "ListRolePolicies",
    Version: "2010-05-08",
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
    Action: "ListRoles",
    Version: "2010-05-08",
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
    Action: "ListRoleTags",
    Version: "2010-05-08",
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
    Action: "ListSAMLProviders",
    Version: "2010-05-08",
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
    Action: "ListSAMLProviderTags",
    Version: "2010-05-08",
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
    Action: "ListServerCertificates",
    Version: "2010-05-08",
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
    Action: "ListServerCertificateTags",
    Version: "2010-05-08",
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
    Action: "ListServiceSpecificCredentials",
    Version: "2010-05-08",
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
    Action: "ListSigningCertificates",
    Version: "2010-05-08",
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
    Action: "ListSSHPublicKeys",
    Version: "2010-05-08",
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
    Action: "ListUserPolicies",
    Version: "2010-05-08",
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
    Action: "ListUsers",
    Version: "2010-05-08",
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
    Action: "ListUserTags",
    Version: "2010-05-08",
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
    Action: "ListVirtualMFADevices",
    Version: "2010-05-08",
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
    Action: "PutGroupPolicy",
    Version: "2010-05-08",
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
    Action: "PutRolePermissionsBoundary",
    Version: "2010-05-08",
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
    Action: "PutRolePolicy",
    Version: "2010-05-08",
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
    Action: "PutUserPermissionsBoundary",
    Version: "2010-05-08",
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
    Action: "PutUserPolicy",
    Version: "2010-05-08",
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
    Action: "RemoveClientIDFromOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "RemoveRoleFromInstanceProfile",
    Version: "2010-05-08",
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
    Action: "RemoveUserFromGroup",
    Version: "2010-05-08",
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
    Action: "ResetServiceSpecificCredential",
    Version: "2010-05-08",
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
    Action: "ResyncMFADevice",
    Version: "2010-05-08",
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
    Action: "SetDefaultPolicyVersion",
    Version: "2010-05-08",
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
    Action: "SetSecurityTokenServicePreferences",
    Version: "2010-05-08",
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
    Action: "SimulateCustomPolicy",
    Version: "2010-05-08",
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
    Action: "SimulatePrincipalPolicy",
    Version: "2010-05-08",
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
    Action: "TagInstanceProfile",
    Version: "2010-05-08",
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
    Action: "TagMFADevice",
    Version: "2010-05-08",
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
    Action: "TagOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "TagPolicy",
    Version: "2010-05-08",
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
    Action: "TagRole",
    Version: "2010-05-08",
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
    Action: "TagSAMLProvider",
    Version: "2010-05-08",
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
    Action: "TagServerCertificate",
    Version: "2010-05-08",
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
    Action: "TagUser",
    Version: "2010-05-08",
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
    Action: "UntagInstanceProfile",
    Version: "2010-05-08",
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
    Action: "UntagMFADevice",
    Version: "2010-05-08",
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
    Action: "UntagOpenIDConnectProvider",
    Version: "2010-05-08",
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
    Action: "UntagPolicy",
    Version: "2010-05-08",
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
    Action: "UntagRole",
    Version: "2010-05-08",
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
    Action: "UntagSAMLProvider",
    Version: "2010-05-08",
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
    Action: "UntagServerCertificate",
    Version: "2010-05-08",
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
    Action: "UntagUser",
    Version: "2010-05-08",
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
    Action: "UpdateAccessKey",
    Version: "2010-05-08",
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
    Action: "UpdateAccountPasswordPolicy",
    Version: "2010-05-08",
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
    Action: "UpdateAssumeRolePolicy",
    Version: "2010-05-08",
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
    Action: "UpdateGroup",
    Version: "2010-05-08",
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
    Action: "UpdateLoginProfile",
    Version: "2010-05-08",
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
    Action: "UpdateOpenIDConnectProviderThumbprint",
    Version: "2010-05-08",
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
    Action: "UpdateRole",
    Version: "2010-05-08",
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
    Action: "UpdateRoleDescription",
    Version: "2010-05-08",
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
    Action: "UpdateSAMLProvider",
    Version: "2010-05-08",
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
    Action: "UpdateServerCertificate",
    Version: "2010-05-08",
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
    Action: "UpdateServiceSpecificCredential",
    Version: "2010-05-08",
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
    Action: "UpdateSigningCertificate",
    Version: "2010-05-08",
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
    Action: "UpdateSSHPublicKey",
    Version: "2010-05-08",
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
    Action: "UpdateUser",
    Version: "2010-05-08",
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
    Action: "UploadServerCertificate",
    Version: "2010-05-08",
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
    Action: "UploadSigningCertificate",
    Version: "2010-05-08",
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
    Action: "UploadSSHPublicKey",
    Version: "2010-05-08",
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
    return de_AddClientIDToOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddClientIDToOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError
 */
const de_AddClientIDToOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAddRoleToInstanceProfileCommand
 */
export const de_AddRoleToInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddRoleToInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddRoleToInstanceProfileCommandError
 */
const de_AddRoleToInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAddUserToGroupCommand
 */
export const de_AddUserToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUserToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddUserToGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddUserToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAddUserToGroupCommandError
 */
const de_AddUserToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUserToGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachGroupPolicyCommand
 */
export const de_AttachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachGroupPolicyCommandError
 */
const de_AttachGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachRolePolicyCommand
 */
export const de_AttachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachRolePolicyCommandError
 */
const de_AttachRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryAttachUserPolicyCommand
 */
export const de_AttachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AttachUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryAttachUserPolicyCommandError
 */
const de_AttachUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryChangePasswordCommand
 */
export const de_ChangePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ChangePasswordCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ChangePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryChangePasswordCommandError
 */
const de_ChangePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "InvalidUserType":
    case "com.amazonaws.iam#InvalidUserTypeException":
      throw await de_InvalidUserTypeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PasswordPolicyViolation":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      throw await de_PasswordPolicyViolationExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateAccessKeyCommand
 */
export const de_CreateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccessKeyCommandError(output, context);
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
 * deserializeAws_queryCreateAccessKeyCommandError
 */
const de_CreateAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateAccountAliasCommand
 */
export const de_CreateAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAccountAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryCreateAccountAliasCommandError
 */
const de_CreateAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
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
 * deserializeAws_queryCreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateInstanceProfileCommand
 */
export const de_CreateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceProfileCommandError(output, context);
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
 * deserializeAws_queryCreateInstanceProfileCommandError
 */
const de_CreateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateLoginProfileCommand
 */
export const de_CreateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLoginProfileCommandError(output, context);
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
 * deserializeAws_queryCreateLoginProfileCommandError
 */
const de_CreateLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PasswordPolicyViolation":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      throw await de_PasswordPolicyViolationExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateOpenIDConnectProviderCommand
 */
export const de_CreateOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOpenIDConnectProviderCommandError(output, context);
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
 * deserializeAws_queryCreateOpenIDConnectProviderCommandError
 */
const de_CreateOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyCommandError(output, context);
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
 * deserializeAws_queryCreatePolicyCommandError
 */
const de_CreatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreatePolicyVersionCommand
 */
export const de_CreatePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyVersionCommandError(output, context);
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
 * deserializeAws_queryCreatePolicyVersionCommandError
 */
const de_CreatePolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateRoleCommand
 */
export const de_CreateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRoleCommandError(output, context);
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
 * deserializeAws_queryCreateRoleCommandError
 */
const de_CreateRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateSAMLProviderCommand
 */
export const de_CreateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSAMLProviderCommandError(output, context);
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
 * deserializeAws_queryCreateSAMLProviderCommandError
 */
const de_CreateSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateServiceLinkedRoleCommand
 */
export const de_CreateServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceLinkedRoleCommandError(output, context);
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
 * deserializeAws_queryCreateServiceLinkedRoleCommandError
 */
const de_CreateServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateServiceSpecificCredentialCommand
 */
export const de_CreateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceSpecificCredentialCommandError(output, context);
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
 * deserializeAws_queryCreateServiceSpecificCredentialCommandError
 */
const de_CreateServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "NotSupportedService":
    case "com.amazonaws.iam#ServiceNotSupportedException":
      throw await de_ServiceNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateUserCommand
 */
export const de_CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserCommandError(output, context);
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
 * deserializeAws_queryCreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryCreateVirtualMFADeviceCommand
 */
export const de_CreateVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVirtualMFADeviceCommandError(output, context);
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
 * deserializeAws_queryCreateVirtualMFADeviceCommandError
 */
const de_CreateVirtualMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeactivateMFADeviceCommand
 */
export const de_DeactivateMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivateMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeactivateMFADeviceCommandError
 */
const de_DeactivateMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAccessKeyCommand
 */
export const de_DeleteAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccessKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccessKeyCommandError
 */
const de_DeleteAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAccountAliasCommand
 */
export const de_DeleteAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccountAliasCommandError
 */
const de_DeleteAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAccountPasswordPolicyCommand
 */
export const de_DeleteAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountPasswordPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAccountPasswordPolicyCommandError
 */
const de_DeleteAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteGroupPolicyCommand
 */
export const de_DeleteGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteGroupPolicyCommandError
 */
const de_DeleteGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteInstanceProfileCommand
 */
export const de_DeleteInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteInstanceProfileCommandError
 */
const de_DeleteInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteLoginProfileCommand
 */
export const de_DeleteLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLoginProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteLoginProfileCommandError
 */
const de_DeleteLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteOpenIDConnectProviderCommand
 */
export const de_DeleteOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteOpenIDConnectProviderCommandError
 */
const de_DeleteOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeletePolicyVersionCommand
 */
export const de_DeletePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeletePolicyVersionCommandError
 */
const de_DeletePolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteRoleCommand
 */
export const de_DeleteRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRoleCommandError
 */
const de_DeleteRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteRolePermissionsBoundaryCommand
 */
export const de_DeleteRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRolePermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRolePermissionsBoundaryCommandError
 */
const de_DeleteRolePermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteRolePolicyCommand
 */
export const de_DeleteRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteRolePolicyCommandError
 */
const de_DeleteRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSAMLProviderCommand
 */
export const de_DeleteSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSAMLProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSAMLProviderCommandError
 */
const de_DeleteSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteServerCertificateCommand
 */
export const de_DeleteServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServerCertificateCommandError
 */
const de_DeleteServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteServiceLinkedRoleCommand
 */
export const de_DeleteServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceLinkedRoleCommandError(output, context);
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
 * deserializeAws_queryDeleteServiceLinkedRoleCommandError
 */
const de_DeleteServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteServiceSpecificCredentialCommand
 */
export const de_DeleteServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceSpecificCredentialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteServiceSpecificCredentialCommandError
 */
const de_DeleteServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSigningCertificateCommand
 */
export const de_DeleteSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSigningCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSigningCertificateCommandError
 */
const de_DeleteSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteSSHPublicKeyCommand
 */
export const de_DeleteSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSSHPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteSSHPublicKeyCommandError
 */
const de_DeleteSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUserPermissionsBoundaryCommand
 */
export const de_DeleteUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserPermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserPermissionsBoundaryCommandError
 */
const de_DeleteUserPermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteUserPolicyCommand
 */
export const de_DeleteUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteUserPolicyCommandError
 */
const de_DeleteUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteVirtualMFADeviceCommand
 */
export const de_DeleteVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVirtualMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVirtualMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteVirtualMFADeviceCommandError
 */
const de_DeleteVirtualMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DeleteConflict":
    case "com.amazonaws.iam#DeleteConflictException":
      throw await de_DeleteConflictExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachGroupPolicyCommand
 */
export const de_DetachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachGroupPolicyCommandError
 */
const de_DetachGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachRolePolicyCommand
 */
export const de_DetachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachRolePolicyCommandError
 */
const de_DetachRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDetachUserPolicyCommand
 */
export const de_DetachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DetachUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDetachUserPolicyCommandError
 */
const de_DetachUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableMFADeviceCommand
 */
export const de_EnableMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnableMFADeviceCommandError
 */
const de_EnableMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "InvalidAuthenticationCode":
    case "com.amazonaws.iam#InvalidAuthenticationCodeException":
      throw await de_InvalidAuthenticationCodeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGenerateCredentialReportCommand
 */
export const de_GenerateCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCredentialReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateCredentialReportCommandError(output, context);
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
 * deserializeAws_queryGenerateCredentialReportCommandError
 */
const de_GenerateCredentialReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCredentialReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGenerateOrganizationsAccessReportCommand
 */
export const de_GenerateOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateOrganizationsAccessReportCommandError(output, context);
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
 * deserializeAws_queryGenerateOrganizationsAccessReportCommandError
 */
const de_GenerateOrganizationsAccessReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReportGenerationLimitExceeded":
    case "com.amazonaws.iam#ReportGenerationLimitExceededException":
      throw await de_ReportGenerationLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGenerateServiceLastAccessedDetailsCommand
 */
export const de_GenerateServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateServiceLastAccessedDetailsCommandError(output, context);
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
 * deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError
 */
const de_GenerateServiceLastAccessedDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetAccessKeyLastUsedCommand
 */
export const de_GetAccessKeyLastUsedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyLastUsedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccessKeyLastUsedCommandError(output, context);
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
 * deserializeAws_queryGetAccessKeyLastUsedCommandError
 */
const de_GetAccessKeyLastUsedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyLastUsedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetAccountAuthorizationDetailsCommand
 */
export const de_GetAccountAuthorizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountAuthorizationDetailsCommandError(output, context);
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
 * deserializeAws_queryGetAccountAuthorizationDetailsCommandError
 */
const de_GetAccountAuthorizationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetAccountPasswordPolicyCommand
 */
export const de_GetAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountPasswordPolicyCommandError(output, context);
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
 * deserializeAws_queryGetAccountPasswordPolicyCommandError
 */
const de_GetAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetAccountSummaryCommand
 */
export const de_GetAccountSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountSummaryCommandError(output, context);
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
 * deserializeAws_queryGetAccountSummaryCommandError
 */
const de_GetAccountSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetContextKeysForCustomPolicyCommand
 */
export const de_GetContextKeysForCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContextKeysForCustomPolicyCommandError(output, context);
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
 * deserializeAws_queryGetContextKeysForCustomPolicyCommandError
 */
const de_GetContextKeysForCustomPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetContextKeysForPrincipalPolicyCommand
 */
export const de_GetContextKeysForPrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContextKeysForPrincipalPolicyCommandError(output, context);
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
 * deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError
 */
const de_GetContextKeysForPrincipalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetCredentialReportCommand
 */
export const de_GetCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCredentialReportCommandError(output, context);
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
 * deserializeAws_queryGetCredentialReportCommandError
 */
const de_GetCredentialReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReportExpired":
    case "com.amazonaws.iam#CredentialReportExpiredException":
      throw await de_CredentialReportExpiredExceptionRes(parsedOutput, context);
    case "ReportInProgress":
    case "com.amazonaws.iam#CredentialReportNotReadyException":
      throw await de_CredentialReportNotReadyExceptionRes(parsedOutput, context);
    case "ReportNotPresent":
    case "com.amazonaws.iam#CredentialReportNotPresentException":
      throw await de_CredentialReportNotPresentExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGroupCommandError(output, context);
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
 * deserializeAws_queryGetGroupCommandError
 */
const de_GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetGroupPolicyCommand
 */
export const de_GetGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGroupPolicyCommandError(output, context);
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
 * deserializeAws_queryGetGroupPolicyCommandError
 */
const de_GetGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetInstanceProfileCommand
 */
export const de_GetInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceProfileCommandError(output, context);
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
 * deserializeAws_queryGetInstanceProfileCommandError
 */
const de_GetInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetLoginProfileCommand
 */
export const de_GetLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLoginProfileCommandError(output, context);
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
 * deserializeAws_queryGetLoginProfileCommandError
 */
const de_GetLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetMFADeviceCommand
 */
export const de_GetMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMFADeviceCommandError(output, context);
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
 * deserializeAws_queryGetMFADeviceCommandError
 */
const de_GetMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetOpenIDConnectProviderCommand
 */
export const de_GetOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpenIDConnectProviderCommandError(output, context);
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
 * deserializeAws_queryGetOpenIDConnectProviderCommandError
 */
const de_GetOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetOrganizationsAccessReportCommand
 */
export const de_GetOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOrganizationsAccessReportCommandError(output, context);
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
 * deserializeAws_queryGetOrganizationsAccessReportCommandError
 */
const de_GetOrganizationsAccessReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationsAccessReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
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
 * deserializeAws_queryGetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetPolicyVersionCommand
 */
export const de_GetPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyVersionCommandError(output, context);
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
 * deserializeAws_queryGetPolicyVersionCommandError
 */
const de_GetPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetRoleCommand
 */
export const de_GetRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRoleCommandError(output, context);
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
 * deserializeAws_queryGetRoleCommandError
 */
const de_GetRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetRolePolicyCommand
 */
export const de_GetRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRolePolicyCommandError(output, context);
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
 * deserializeAws_queryGetRolePolicyCommandError
 */
const de_GetRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetSAMLProviderCommand
 */
export const de_GetSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSAMLProviderCommandError(output, context);
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
 * deserializeAws_queryGetSAMLProviderCommandError
 */
const de_GetSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetServerCertificateCommand
 */
export const de_GetServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServerCertificateCommandError(output, context);
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
 * deserializeAws_queryGetServerCertificateCommandError
 */
const de_GetServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsCommand
 */
export const de_GetServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceLastAccessedDetailsCommandError(output, context);
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
 * deserializeAws_queryGetServiceLastAccessedDetailsCommandError
 */
const de_GetServiceLastAccessedDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand
 */
export const de_GetServiceLastAccessedDetailsWithEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceLastAccessedDetailsWithEntitiesCommandError(output, context);
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
 * deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError
 */
const de_GetServiceLastAccessedDetailsWithEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand
 */
export const de_GetServiceLinkedRoleDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceLinkedRoleDeletionStatusCommandError(output, context);
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
 * deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError
 */
const de_GetServiceLinkedRoleDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetSSHPublicKeyCommand
 */
export const de_GetSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSSHPublicKeyCommandError(output, context);
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
 * deserializeAws_queryGetSSHPublicKeyCommandError
 */
const de_GetSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "UnrecognizedPublicKeyEncoding":
    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
      throw await de_UnrecognizedPublicKeyEncodingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserCommandError(output, context);
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
 * deserializeAws_queryGetUserCommandError
 */
const de_GetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetUserPolicyCommand
 */
export const de_GetUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserPolicyCommandError(output, context);
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
 * deserializeAws_queryGetUserPolicyCommandError
 */
const de_GetUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAccessKeysCommand
 */
export const de_ListAccessKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccessKeysCommandError(output, context);
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
 * deserializeAws_queryListAccessKeysCommandError
 */
const de_ListAccessKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAccountAliasesCommand
 */
export const de_ListAccountAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccountAliasesCommandError(output, context);
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
 * deserializeAws_queryListAccountAliasesCommandError
 */
const de_ListAccountAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAttachedGroupPoliciesCommand
 */
export const de_ListAttachedGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAttachedGroupPoliciesCommandError(output, context);
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
 * deserializeAws_queryListAttachedGroupPoliciesCommandError
 */
const de_ListAttachedGroupPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAttachedRolePoliciesCommand
 */
export const de_ListAttachedRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAttachedRolePoliciesCommandError(output, context);
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
 * deserializeAws_queryListAttachedRolePoliciesCommandError
 */
const de_ListAttachedRolePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListAttachedUserPoliciesCommand
 */
export const de_ListAttachedUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAttachedUserPoliciesCommandError(output, context);
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
 * deserializeAws_queryListAttachedUserPoliciesCommandError
 */
const de_ListAttachedUserPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListEntitiesForPolicyCommand
 */
export const de_ListEntitiesForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesForPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEntitiesForPolicyCommandError(output, context);
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
 * deserializeAws_queryListEntitiesForPolicyCommandError
 */
const de_ListEntitiesForPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesForPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListGroupPoliciesCommand
 */
export const de_ListGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupPoliciesCommandError(output, context);
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
 * deserializeAws_queryListGroupPoliciesCommandError
 */
const de_ListGroupPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsCommandError(output, context);
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
 * deserializeAws_queryListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListGroupsForUserCommand
 */
export const de_ListGroupsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsForUserCommandError(output, context);
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
 * deserializeAws_queryListGroupsForUserCommandError
 */
const de_ListGroupsForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListInstanceProfilesCommand
 */
export const de_ListInstanceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceProfilesCommandError(output, context);
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
 * deserializeAws_queryListInstanceProfilesCommandError
 */
const de_ListInstanceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListInstanceProfilesForRoleCommand
 */
export const de_ListInstanceProfilesForRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceProfilesForRoleCommandError(output, context);
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
 * deserializeAws_queryListInstanceProfilesForRoleCommandError
 */
const de_ListInstanceProfilesForRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListInstanceProfileTagsCommand
 */
export const de_ListInstanceProfileTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfileTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceProfileTagsCommandError(output, context);
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
 * deserializeAws_queryListInstanceProfileTagsCommandError
 */
const de_ListInstanceProfileTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfileTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListMFADevicesCommand
 */
export const de_ListMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMFADevicesCommandError(output, context);
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
 * deserializeAws_queryListMFADevicesCommandError
 */
const de_ListMFADevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListMFADeviceTagsCommand
 */
export const de_ListMFADeviceTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADeviceTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMFADeviceTagsCommandError(output, context);
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
 * deserializeAws_queryListMFADeviceTagsCommandError
 */
const de_ListMFADeviceTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADeviceTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListOpenIDConnectProvidersCommand
 */
export const de_ListOpenIDConnectProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpenIDConnectProvidersCommandError(output, context);
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
 * deserializeAws_queryListOpenIDConnectProvidersCommandError
 */
const de_ListOpenIDConnectProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListOpenIDConnectProviderTagsCommand
 */
export const de_ListOpenIDConnectProviderTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProviderTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpenIDConnectProviderTagsCommandError(output, context);
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
 * deserializeAws_queryListOpenIDConnectProviderTagsCommandError
 */
const de_ListOpenIDConnectProviderTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProviderTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoliciesCommandError(output, context);
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
 * deserializeAws_queryListPoliciesCommandError
 */
const de_ListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListPoliciesGrantingServiceAccessCommand
 */
export const de_ListPoliciesGrantingServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoliciesGrantingServiceAccessCommandError(output, context);
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
 * deserializeAws_queryListPoliciesGrantingServiceAccessCommandError
 */
const de_ListPoliciesGrantingServiceAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListPolicyTagsCommand
 */
export const de_ListPolicyTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPolicyTagsCommandError(output, context);
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
 * deserializeAws_queryListPolicyTagsCommandError
 */
const de_ListPolicyTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListPolicyVersionsCommand
 */
export const de_ListPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPolicyVersionsCommandError(output, context);
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
 * deserializeAws_queryListPolicyVersionsCommandError
 */
const de_ListPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListRolePoliciesCommand
 */
export const de_ListRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRolePoliciesCommandError(output, context);
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
 * deserializeAws_queryListRolePoliciesCommandError
 */
const de_ListRolePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListRolesCommand
 */
export const de_ListRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRolesCommandError(output, context);
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
 * deserializeAws_queryListRolesCommandError
 */
const de_ListRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListRoleTagsCommand
 */
export const de_ListRoleTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRoleTagsCommandError(output, context);
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
 * deserializeAws_queryListRoleTagsCommandError
 */
const de_ListRoleTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListSAMLProvidersCommand
 */
export const de_ListSAMLProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSAMLProvidersCommandError(output, context);
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
 * deserializeAws_queryListSAMLProvidersCommandError
 */
const de_ListSAMLProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListSAMLProviderTagsCommand
 */
export const de_ListSAMLProviderTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProviderTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSAMLProviderTagsCommandError(output, context);
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
 * deserializeAws_queryListSAMLProviderTagsCommandError
 */
const de_ListSAMLProviderTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProviderTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListServerCertificatesCommand
 */
export const de_ListServerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServerCertificatesCommandError(output, context);
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
 * deserializeAws_queryListServerCertificatesCommandError
 */
const de_ListServerCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListServerCertificateTagsCommand
 */
export const de_ListServerCertificateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificateTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServerCertificateTagsCommandError(output, context);
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
 * deserializeAws_queryListServerCertificateTagsCommandError
 */
const de_ListServerCertificateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListServiceSpecificCredentialsCommand
 */
export const de_ListServiceSpecificCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceSpecificCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceSpecificCredentialsCommandError(output, context);
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
 * deserializeAws_queryListServiceSpecificCredentialsCommandError
 */
const de_ListServiceSpecificCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceSpecificCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "NotSupportedService":
    case "com.amazonaws.iam#ServiceNotSupportedException":
      throw await de_ServiceNotSupportedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListSigningCertificatesCommand
 */
export const de_ListSigningCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningCertificatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSigningCertificatesCommandError(output, context);
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
 * deserializeAws_queryListSigningCertificatesCommandError
 */
const de_ListSigningCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListSSHPublicKeysCommand
 */
export const de_ListSSHPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSSHPublicKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSSHPublicKeysCommandError(output, context);
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
 * deserializeAws_queryListSSHPublicKeysCommandError
 */
const de_ListSSHPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSSHPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListUserPoliciesCommand
 */
export const de_ListUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserPoliciesCommandError(output, context);
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
 * deserializeAws_queryListUserPoliciesCommandError
 */
const de_ListUserPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
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
 * deserializeAws_queryListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListUserTagsCommand
 */
export const de_ListUserTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserTagsCommandError(output, context);
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
 * deserializeAws_queryListUserTagsCommandError
 */
const de_ListUserTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListVirtualMFADevicesCommand
 */
export const de_ListVirtualMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMFADevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVirtualMFADevicesCommandError(output, context);
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
 * deserializeAws_queryListVirtualMFADevicesCommandError
 */
const de_ListVirtualMFADevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMFADevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryPutGroupPolicyCommand
 */
export const de_PutGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutGroupPolicyCommandError
 */
const de_PutGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutRolePermissionsBoundaryCommand
 */
export const de_PutRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRolePermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutRolePermissionsBoundaryCommandError
 */
const de_PutRolePermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutRolePolicyCommand
 */
export const de_PutRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutRolePolicyCommandError
 */
const de_PutRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutUserPermissionsBoundaryCommand
 */
export const de_PutUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutUserPermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutUserPermissionsBoundaryCommandError
 */
const de_PutUserPermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyNotAttachable":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      throw await de_PolicyNotAttachableExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutUserPolicyCommand
 */
export const de_PutUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutUserPolicyCommandError
 */
const de_PutUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand
 */
export const de_RemoveClientIDFromOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveClientIDFromOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveClientIDFromOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError
 */
const de_RemoveClientIDFromOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveRoleFromInstanceProfileCommand
 */
export const de_RemoveRoleFromInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveRoleFromInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveRoleFromInstanceProfileCommandError
 */
const de_RemoveRoleFromInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryRemoveUserFromGroupCommand
 */
export const de_RemoveUserFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveUserFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveUserFromGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveUserFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryRemoveUserFromGroupCommandError
 */
const de_RemoveUserFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveUserFromGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResetServiceSpecificCredentialCommand
 */
export const de_ResetServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetServiceSpecificCredentialCommandError(output, context);
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
 * deserializeAws_queryResetServiceSpecificCredentialCommandError
 */
const de_ResetServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryResyncMFADeviceCommand
 */
export const de_ResyncMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResyncMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResyncMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResyncMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryResyncMFADeviceCommandError
 */
const de_ResyncMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResyncMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidAuthenticationCode":
    case "com.amazonaws.iam#InvalidAuthenticationCodeException":
      throw await de_InvalidAuthenticationCodeExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetDefaultPolicyVersionCommand
 */
export const de_SetDefaultPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetDefaultPolicyVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDefaultPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetDefaultPolicyVersionCommandError
 */
const de_SetDefaultPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetSecurityTokenServicePreferencesCommand
 */
export const de_SetSecurityTokenServicePreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetSecurityTokenServicePreferencesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSecurityTokenServicePreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetSecurityTokenServicePreferencesCommandError
 */
const de_SetSecurityTokenServicePreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySimulateCustomPolicyCommand
 */
export const de_SimulateCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulateCustomPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SimulateCustomPolicyCommandError(output, context);
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
 * deserializeAws_querySimulateCustomPolicyCommandError
 */
const de_SimulateCustomPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulateCustomPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "PolicyEvaluation":
    case "com.amazonaws.iam#PolicyEvaluationException":
      throw await de_PolicyEvaluationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySimulatePrincipalPolicyCommand
 */
export const de_SimulatePrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SimulatePrincipalPolicyCommandError(output, context);
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
 * deserializeAws_querySimulatePrincipalPolicyCommandError
 */
const de_SimulatePrincipalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PolicyEvaluation":
    case "com.amazonaws.iam#PolicyEvaluationException":
      throw await de_PolicyEvaluationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagInstanceProfileCommand
 */
export const de_TagInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagInstanceProfileCommandError
 */
const de_TagInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagInstanceProfileCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagMFADeviceCommand
 */
export const de_TagMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagMFADeviceCommandError
 */
const de_TagMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagMFADeviceCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagOpenIDConnectProviderCommand
 */
export const de_TagOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagOpenIDConnectProviderCommandError
 */
const de_TagOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagOpenIDConnectProviderCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagPolicyCommand
 */
export const de_TagPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagPolicyCommandError
 */
const de_TagPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagPolicyCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagRoleCommand
 */
export const de_TagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagRoleCommandError
 */
const de_TagRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagRoleCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagSAMLProviderCommand
 */
export const de_TagSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagSAMLProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagSAMLProviderCommandError
 */
const de_TagSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagSAMLProviderCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagServerCertificateCommand
 */
export const de_TagServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagServerCertificateCommandError
 */
const de_TagServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagServerCertificateCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagUserCommand
 */
export const de_TagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryTagUserCommandError
 */
const de_TagUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagUserCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagInstanceProfileCommand
 */
export const de_UntagInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagInstanceProfileCommandError
 */
const de_UntagInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagInstanceProfileCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagMFADeviceCommand
 */
export const de_UntagMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMFADeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagMFADeviceCommandError
 */
const de_UntagMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagMFADeviceCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagOpenIDConnectProviderCommand
 */
export const de_UntagOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagOpenIDConnectProviderCommandError
 */
const de_UntagOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagOpenIDConnectProviderCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagPolicyCommand
 */
export const de_UntagPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagPolicyCommandError
 */
const de_UntagPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagPolicyCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagRoleCommand
 */
export const de_UntagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagRoleCommandError
 */
const de_UntagRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagSAMLProviderCommand
 */
export const de_UntagSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagSAMLProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagSAMLProviderCommandError
 */
const de_UntagSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagSAMLProviderCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagServerCertificateCommand
 */
export const de_UntagServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagServerCertificateCommandError
 */
const de_UntagServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagServerCertificateCommandOutput> => {
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
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagUserCommand
 */
export const de_UntagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUntagUserCommandError
 */
const de_UntagUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateAccessKeyCommand
 */
export const de_UpdateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccessKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccessKeyCommandError
 */
const de_UpdateAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateAccountPasswordPolicyCommand
 */
export const de_UpdateAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccountPasswordPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAccountPasswordPolicyCommandError
 */
const de_UpdateAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateAssumeRolePolicyCommand
 */
export const de_UpdateAssumeRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssumeRolePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAssumeRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAssumeRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateAssumeRolePolicyCommandError
 */
const de_UpdateAssumeRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssumeRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocument":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateLoginProfileCommand
 */
export const de_UpdateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoginProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateLoginProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateLoginProfileCommandError
 */
const de_UpdateLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "PasswordPolicyViolation":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      throw await de_PasswordPolicyViolationExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand
 */
export const de_UpdateOpenIDConnectProviderThumbprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateOpenIDConnectProviderThumbprintCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateOpenIDConnectProviderThumbprintCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError
 */
const de_UpdateOpenIDConnectProviderThumbprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateRoleCommand
 */
export const de_UpdateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRoleCommandError(output, context);
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
 * deserializeAws_queryUpdateRoleCommandError
 */
const de_UpdateRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateRoleDescriptionCommand
 */
export const de_UpdateRoleDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleDescriptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRoleDescriptionCommandError(output, context);
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
 * deserializeAws_queryUpdateRoleDescriptionCommandError
 */
const de_UpdateRoleDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    case "UnmodifiableEntity":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      throw await de_UnmodifiableEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateSAMLProviderCommand
 */
export const de_UpdateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSAMLProviderCommandError(output, context);
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
 * deserializeAws_queryUpdateSAMLProviderCommandError
 */
const de_UpdateSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateServerCertificateCommand
 */
export const de_UpdateServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateServerCertificateCommandError
 */
const de_UpdateServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateServiceSpecificCredentialCommand
 */
export const de_UpdateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceSpecificCredentialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateServiceSpecificCredentialCommandError
 */
const de_UpdateServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateSigningCertificateCommand
 */
export const de_UpdateSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSigningCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateSigningCertificateCommandError
 */
const de_UpdateSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateSSHPublicKeyCommand
 */
export const de_UpdateSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSSHPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateSSHPublicKeyCommandError
 */
const de_UpdateSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryUpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityTemporarilyUnmodifiable":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      throw await de_EntityTemporarilyUnmodifiableExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUploadServerCertificateCommand
 */
export const de_UploadServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadServerCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UploadServerCertificateCommandError(output, context);
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
 * deserializeAws_queryUploadServerCertificateCommandError
 */
const de_UploadServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.iam#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "KeyPairMismatch":
    case "com.amazonaws.iam#KeyPairMismatchException":
      throw await de_KeyPairMismatchExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedCertificate":
    case "com.amazonaws.iam#MalformedCertificateException":
      throw await de_MalformedCertificateExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUploadSigningCertificateCommand
 */
export const de_UploadSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UploadSigningCertificateCommandError(output, context);
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
 * deserializeAws_queryUploadSigningCertificateCommandError
 */
const de_UploadSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModification":
    case "com.amazonaws.iam#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "DuplicateCertificate":
    case "com.amazonaws.iam#DuplicateCertificateException":
      throw await de_DuplicateCertificateExceptionRes(parsedOutput, context);
    case "EntityAlreadyExists":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      throw await de_EntityAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidCertificate":
    case "com.amazonaws.iam#InvalidCertificateException":
      throw await de_InvalidCertificateExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedCertificate":
    case "com.amazonaws.iam#MalformedCertificateException":
      throw await de_MalformedCertificateExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "ServiceFailure":
    case "com.amazonaws.iam#ServiceFailureException":
      throw await de_ServiceFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUploadSSHPublicKeyCommand
 */
export const de_UploadSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UploadSSHPublicKeyCommandError(output, context);
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
 * deserializeAws_queryUploadSSHPublicKeyCommandError
 */
const de_UploadSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateSSHPublicKey":
    case "com.amazonaws.iam#DuplicateSSHPublicKeyException":
      throw await de_DuplicateSSHPublicKeyExceptionRes(parsedOutput, context);
    case "InvalidPublicKey":
    case "com.amazonaws.iam#InvalidPublicKeyException":
      throw await de_InvalidPublicKeyExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.iam#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NoSuchEntity":
    case "com.amazonaws.iam#NoSuchEntityException":
      throw await de_NoSuchEntityExceptionRes(parsedOutput, context);
    case "UnrecognizedPublicKeyEncoding":
    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
      throw await de_UnrecognizedPublicKeyEncodingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.ClientID != null) {
    entries["ClientID"] = input.ClientID;
  }
  return entries;
};

/**
 * serializeAws_queryAddRoleToInstanceProfileRequest
 */
const se_AddRoleToInstanceProfileRequest = (input: AddRoleToInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

/**
 * serializeAws_queryAddUserToGroupRequest
 */
const se_AddUserToGroupRequest = (input: AddUserToGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryAttachGroupPolicyRequest
 */
const se_AttachGroupPolicyRequest = (input: AttachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryAttachRolePolicyRequest
 */
const se_AttachRolePolicyRequest = (input: AttachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryAttachUserPolicyRequest
 */
const se_AttachUserPolicyRequest = (input: AttachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryChangePasswordRequest
 */
const se_ChangePasswordRequest = (input: ChangePasswordRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OldPassword != null) {
    entries["OldPassword"] = input.OldPassword;
  }
  if (input.NewPassword != null) {
    entries["NewPassword"] = input.NewPassword;
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
  if (input.ContextKeyName != null) {
    entries["ContextKeyName"] = input.ContextKeyName;
  }
  if (input.ContextKeyValues != null) {
    const memberEntries = se_ContextKeyValueListType(input.ContextKeyValues, context);
    if (input.ContextKeyValues?.length === 0) {
      entries.ContextKeyValues = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextKeyValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ContextKeyType != null) {
    entries["ContextKeyType"] = input.ContextKeyType;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateAccountAliasRequest
 */
const se_CreateAccountAliasRequest = (input: CreateAccountAliasRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccountAlias != null) {
    entries["AccountAlias"] = input.AccountAlias;
  }
  return entries;
};

/**
 * serializeAws_queryCreateGroupRequest
 */
const se_CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateInstanceProfileRequest
 */
const se_CreateInstanceProfileRequest = (input: CreateInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Password != null) {
    entries["Password"] = input.Password;
  }
  if (input.PasswordResetRequired != null) {
    entries["PasswordResetRequired"] = input.PasswordResetRequired;
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
  if (input.Url != null) {
    entries["Url"] = input.Url;
  }
  if (input.ClientIDList != null) {
    const memberEntries = se_clientIDListType(input.ClientIDList, context);
    if (input.ClientIDList?.length === 0) {
      entries.ClientIDList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClientIDList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ThumbprintList != null) {
    const memberEntries = se_thumbprintListType(input.ThumbprintList, context);
    if (input.ThumbprintList?.length === 0) {
      entries.ThumbprintList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ThumbprintList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.SetAsDefault != null) {
    entries["SetAsDefault"] = input.SetAsDefault;
  }
  return entries;
};

/**
 * serializeAws_queryCreateRoleRequest
 */
const se_CreateRoleRequest = (input: CreateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.AssumeRolePolicyDocument != null) {
    entries["AssumeRolePolicyDocument"] = input.AssumeRolePolicyDocument;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.MaxSessionDuration != null) {
    entries["MaxSessionDuration"] = input.MaxSessionDuration;
  }
  if (input.PermissionsBoundary != null) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.SAMLMetadataDocument != null) {
    entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
  }
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
 * serializeAws_queryCreateServiceLinkedRoleRequest
 */
const se_CreateServiceLinkedRoleRequest = (input: CreateServiceLinkedRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AWSServiceName != null) {
    entries["AWSServiceName"] = input.AWSServiceName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.CustomSuffix != null) {
    entries["CustomSuffix"] = input.CustomSuffix;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.ServiceName != null) {
    entries["ServiceName"] = input.ServiceName;
  }
  return entries;
};

/**
 * serializeAws_queryCreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PermissionsBoundary != null) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.VirtualMFADeviceName != null) {
    entries["VirtualMFADeviceName"] = input.VirtualMFADeviceName;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccessKeyRequest
 */
const se_DeleteAccessKeyRequest = (input: DeleteAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.AccessKeyId != null) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAccountAliasRequest
 */
const se_DeleteAccountAliasRequest = (input: DeleteAccountAliasRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccountAlias != null) {
    entries["AccountAlias"] = input.AccountAlias;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGroupPolicyRequest
 */
const se_DeleteGroupPolicyRequest = (input: DeleteGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteGroupRequest
 */
const se_DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteInstanceProfileRequest
 */
const se_DeleteInstanceProfileRequest = (input: DeleteInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteLoginProfileRequest
 */
const se_DeleteLoginProfileRequest = (input: DeleteLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyRequest
 */
const se_DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeletePolicyVersionRequest
 */
const se_DeletePolicyVersionRequest = (input: DeletePolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRolePolicyRequest
 */
const se_DeleteRolePolicyRequest = (input: DeleteRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteRoleRequest
 */
const se_DeleteRoleRequest = (input: DeleteRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSAMLProviderRequest
 */
const se_DeleteSAMLProviderRequest = (input: DeleteSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServerCertificateRequest
 */
const se_DeleteServerCertificateRequest = (input: DeleteServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteServiceLinkedRoleRequest
 */
const se_DeleteServiceLinkedRoleRequest = (input: DeleteServiceLinkedRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.ServiceSpecificCredentialId != null) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSigningCertificateRequest
 */
const se_DeleteSigningCertificateRequest = (input: DeleteSigningCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.CertificateId != null) {
    entries["CertificateId"] = input.CertificateId;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteSSHPublicKeyRequest
 */
const se_DeleteSSHPublicKeyRequest = (input: DeleteSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SSHPublicKeyId != null) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserPolicyRequest
 */
const se_DeleteUserPolicyRequest = (input: DeleteUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteVirtualMFADeviceRequest
 */
const se_DeleteVirtualMFADeviceRequest = (input: DeleteVirtualMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  return entries;
};

/**
 * serializeAws_queryDetachGroupPolicyRequest
 */
const se_DetachGroupPolicyRequest = (input: DetachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryDetachRolePolicyRequest
 */
const se_DetachRolePolicyRequest = (input: DetachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryDetachUserPolicyRequest
 */
const se_DetachUserPolicyRequest = (input: DetachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryEnableMFADeviceRequest
 */
const se_EnableMFADeviceRequest = (input: EnableMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.AuthenticationCode1 != null) {
    entries["AuthenticationCode1"] = input.AuthenticationCode1;
  }
  if (input.AuthenticationCode2 != null) {
    entries["AuthenticationCode2"] = input.AuthenticationCode2;
  }
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
  if (input.EntityPath != null) {
    entries["EntityPath"] = input.EntityPath;
  }
  if (input.OrganizationsPolicyId != null) {
    entries["OrganizationsPolicyId"] = input.OrganizationsPolicyId;
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
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.Granularity != null) {
    entries["Granularity"] = input.Granularity;
  }
  return entries;
};

/**
 * serializeAws_queryGetAccessKeyLastUsedRequest
 */
const se_GetAccessKeyLastUsedRequest = (input: GetAccessKeyLastUsedRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccessKeyId != null) {
    entries["AccessKeyId"] = input.AccessKeyId;
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
  if (input.Filter != null) {
    const memberEntries = se_entityListType(input.Filter, context);
    if (input.Filter?.length === 0) {
      entries.Filter = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.PolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PolicyInputList, context);
    if (input.PolicyInputList?.length === 0) {
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
  if (input.PolicySourceArn != null) {
    entries["PolicySourceArn"] = input.PolicySourceArn;
  }
  if (input.PolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PolicyInputList, context);
    if (input.PolicyInputList?.length === 0) {
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
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryGetGroupRequest
 */
const se_GetGroupRequest = (input: GetGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryGetInstanceProfileRequest
 */
const se_GetInstanceProfileRequest = (input: GetInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  return entries;
};

/**
 * serializeAws_queryGetLoginProfileRequest
 */
const se_GetLoginProfileRequest = (input: GetLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryGetMFADeviceRequest
 */
const se_GetMFADeviceRequest = (input: GetMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryGetOpenIDConnectProviderRequest
 */
const se_GetOpenIDConnectProviderRequest = (input: GetOpenIDConnectProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
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
  if (input.JobId != null) {
    entries["JobId"] = input.JobId;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.SortKey != null) {
    entries["SortKey"] = input.SortKey;
  }
  return entries;
};

/**
 * serializeAws_queryGetPolicyRequest
 */
const se_GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetPolicyVersionRequest
 */
const se_GetPolicyVersionRequest = (input: GetPolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

/**
 * serializeAws_queryGetRolePolicyRequest
 */
const se_GetRolePolicyRequest = (input: GetRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryGetRoleRequest
 */
const se_GetRoleRequest = (input: GetRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

/**
 * serializeAws_queryGetSAMLProviderRequest
 */
const se_GetSAMLProviderRequest = (input: GetSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

/**
 * serializeAws_queryGetServerCertificateRequest
 */
const se_GetServerCertificateRequest = (input: GetServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
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
  if (input.JobId != null) {
    entries["JobId"] = input.JobId;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.JobId != null) {
    entries["JobId"] = input.JobId;
  }
  if (input.ServiceNamespace != null) {
    entries["ServiceNamespace"] = input.ServiceNamespace;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.DeletionTaskId != null) {
    entries["DeletionTaskId"] = input.DeletionTaskId;
  }
  return entries;
};

/**
 * serializeAws_queryGetSSHPublicKeyRequest
 */
const se_GetSSHPublicKeyRequest = (input: GetSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SSHPublicKeyId != null) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
  }
  if (input.Encoding != null) {
    entries["Encoding"] = input.Encoding;
  }
  return entries;
};

/**
 * serializeAws_queryGetUserPolicyRequest
 */
const se_GetUserPolicyRequest = (input: GetUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

/**
 * serializeAws_queryGetUserRequest
 */
const se_GetUserRequest = (input: GetUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

/**
 * serializeAws_queryListAccessKeysRequest
 */
const se_ListAccessKeysRequest = (input: ListAccessKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListAccountAliasesRequest
 */
const se_ListAccountAliasesRequest = (input: ListAccountAliasesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedGroupPoliciesRequest
 */
const se_ListAttachedGroupPoliciesRequest = (input: ListAttachedGroupPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedRolePoliciesRequest
 */
const se_ListAttachedRolePoliciesRequest = (input: ListAttachedRolePoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListAttachedUserPoliciesRequest
 */
const se_ListAttachedUserPoliciesRequest = (input: ListAttachedUserPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListEntitiesForPolicyRequest
 */
const se_ListEntitiesForPolicyRequest = (input: ListEntitiesForPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.EntityFilter != null) {
    entries["EntityFilter"] = input.EntityFilter;
  }
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.PolicyUsageFilter != null) {
    entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListGroupPoliciesRequest
 */
const se_ListGroupPoliciesRequest = (input: ListGroupPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListGroupsForUserRequest
 */
const se_ListGroupsForUserRequest = (input: ListGroupsForUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListGroupsRequest
 */
const se_ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListInstanceProfilesRequest
 */
const se_ListInstanceProfilesRequest = (input: ListInstanceProfilesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListInstanceProfileTagsRequest
 */
const se_ListInstanceProfileTagsRequest = (input: ListInstanceProfileTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListMFADevicesRequest
 */
const se_ListMFADevicesRequest = (input: ListMFADevicesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListMFADeviceTagsRequest
 */
const se_ListMFADeviceTagsRequest = (input: ListMFADeviceTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
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
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.Arn != null) {
    entries["Arn"] = input.Arn;
  }
  if (input.ServiceNamespaces != null) {
    const memberEntries = se_serviceNamespaceListType(input.ServiceNamespaces, context);
    if (input.ServiceNamespaces?.length === 0) {
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
  if (input.Scope != null) {
    entries["Scope"] = input.Scope;
  }
  if (input.OnlyAttached != null) {
    entries["OnlyAttached"] = input.OnlyAttached;
  }
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.PolicyUsageFilter != null) {
    entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListPolicyTagsRequest
 */
const se_ListPolicyTagsRequest = (input: ListPolicyTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListPolicyVersionsRequest
 */
const se_ListPolicyVersionsRequest = (input: ListPolicyVersionsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListRolePoliciesRequest
 */
const se_ListRolePoliciesRequest = (input: ListRolePoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListRolesRequest
 */
const se_ListRolesRequest = (input: ListRolesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListRoleTagsRequest
 */
const se_ListRoleTagsRequest = (input: ListRoleTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListServerCertificatesRequest
 */
const se_ListServerCertificatesRequest = (input: ListServerCertificatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListServerCertificateTagsRequest
 */
const se_ListServerCertificateTagsRequest = (input: ListServerCertificateTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.ServiceName != null) {
    entries["ServiceName"] = input.ServiceName;
  }
  return entries;
};

/**
 * serializeAws_queryListSigningCertificatesRequest
 */
const se_ListSigningCertificatesRequest = (input: ListSigningCertificatesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListSSHPublicKeysRequest
 */
const se_ListSSHPublicKeysRequest = (input: ListSSHPublicKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListUserPoliciesRequest
 */
const se_ListUserPoliciesRequest = (input: ListUserPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PathPrefix != null) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListUserTagsRequest
 */
const se_ListUserTagsRequest = (input: ListUserTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryListVirtualMFADevicesRequest
 */
const se_ListVirtualMFADevicesRequest = (input: ListVirtualMFADevicesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AssignmentStatus != null) {
    entries["AssignmentStatus"] = input.AssignmentStatus;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

/**
 * serializeAws_queryPutGroupPolicyRequest
 */
const se_PutGroupPolicyRequest = (input: PutGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PermissionsBoundary != null) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  return entries;
};

/**
 * serializeAws_queryPutRolePolicyRequest
 */
const se_PutRolePolicyRequest = (input: PutRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PermissionsBoundary != null) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  return entries;
};

/**
 * serializeAws_queryPutUserPolicyRequest
 */
const se_PutUserPolicyRequest = (input: PutUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.PolicyName != null) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.ClientID != null) {
    entries["ClientID"] = input.ClientID;
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
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

/**
 * serializeAws_queryRemoveUserFromGroupRequest
 */
const se_RemoveUserFromGroupRequest = (input: RemoveUserFromGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.ServiceSpecificCredentialId != null) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.AuthenticationCode1 != null) {
    entries["AuthenticationCode1"] = input.AuthenticationCode1;
  }
  if (input.AuthenticationCode2 != null) {
    entries["AuthenticationCode2"] = input.AuthenticationCode2;
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
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId != null) {
    entries["VersionId"] = input.VersionId;
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
  if (input.GlobalEndpointTokenVersion != null) {
    entries["GlobalEndpointTokenVersion"] = input.GlobalEndpointTokenVersion;
  }
  return entries;
};

/**
 * serializeAws_querySimulateCustomPolicyRequest
 */
const se_SimulateCustomPolicyRequest = (input: SimulateCustomPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PolicyInputList, context);
    if (input.PolicyInputList?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PermissionsBoundaryPolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
    if (input.PermissionsBoundaryPolicyInputList?.length === 0) {
      entries.PermissionsBoundaryPolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PermissionsBoundaryPolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionNames != null) {
    const memberEntries = se_ActionNameListType(input.ActionNames, context);
    if (input.ActionNames?.length === 0) {
      entries.ActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceArns != null) {
    const memberEntries = se_ResourceNameListType(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourcePolicy != null) {
    entries["ResourcePolicy"] = input.ResourcePolicy;
  }
  if (input.ResourceOwner != null) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.CallerArn != null) {
    entries["CallerArn"] = input.CallerArn;
  }
  if (input.ContextEntries != null) {
    const memberEntries = se_ContextEntryListType(input.ContextEntries, context);
    if (input.ContextEntries?.length === 0) {
      entries.ContextEntries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceHandlingOption != null) {
    entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
  }
  return entries;
};

/**
 * serializeAws_querySimulatePrincipalPolicyRequest
 */
const se_SimulatePrincipalPolicyRequest = (input: SimulatePrincipalPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicySourceArn != null) {
    entries["PolicySourceArn"] = input.PolicySourceArn;
  }
  if (input.PolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PolicyInputList, context);
    if (input.PolicyInputList?.length === 0) {
      entries.PolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PermissionsBoundaryPolicyInputList != null) {
    const memberEntries = se_SimulationPolicyListType(input.PermissionsBoundaryPolicyInputList, context);
    if (input.PermissionsBoundaryPolicyInputList?.length === 0) {
      entries.PermissionsBoundaryPolicyInputList = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PermissionsBoundaryPolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionNames != null) {
    const memberEntries = se_ActionNameListType(input.ActionNames, context);
    if (input.ActionNames?.length === 0) {
      entries.ActionNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceArns != null) {
    const memberEntries = se_ResourceNameListType(input.ResourceArns, context);
    if (input.ResourceArns?.length === 0) {
      entries.ResourceArns = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourcePolicy != null) {
    entries["ResourcePolicy"] = input.ResourcePolicy;
  }
  if (input.ResourceOwner != null) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.CallerArn != null) {
    entries["CallerArn"] = input.CallerArn;
  }
  if (input.ContextEntries != null) {
    const memberEntries = se_ContextEntryListType(input.ContextEntries, context);
    if (input.ContextEntries?.length === 0) {
      entries.ContextEntries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceHandlingOption != null) {
    entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
  }
  if (input.MaxItems != null) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.Marker != null) {
    entries["Marker"] = input.Marker;
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
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryTagInstanceProfileRequest
 */
const se_TagInstanceProfileRequest = (input: TagInstanceProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.InstanceProfileName != null) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.SerialNumber != null) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.PolicyArn != null) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_tagKeyListType(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.AccessKeyId != null) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
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
  if (input.MinimumPasswordLength != null) {
    entries["MinimumPasswordLength"] = input.MinimumPasswordLength;
  }
  if (input.RequireSymbols != null) {
    entries["RequireSymbols"] = input.RequireSymbols;
  }
  if (input.RequireNumbers != null) {
    entries["RequireNumbers"] = input.RequireNumbers;
  }
  if (input.RequireUppercaseCharacters != null) {
    entries["RequireUppercaseCharacters"] = input.RequireUppercaseCharacters;
  }
  if (input.RequireLowercaseCharacters != null) {
    entries["RequireLowercaseCharacters"] = input.RequireLowercaseCharacters;
  }
  if (input.AllowUsersToChangePassword != null) {
    entries["AllowUsersToChangePassword"] = input.AllowUsersToChangePassword;
  }
  if (input.MaxPasswordAge != null) {
    entries["MaxPasswordAge"] = input.MaxPasswordAge;
  }
  if (input.PasswordReusePrevention != null) {
    entries["PasswordReusePrevention"] = input.PasswordReusePrevention;
  }
  if (input.HardExpiry != null) {
    entries["HardExpiry"] = input.HardExpiry;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateAssumeRolePolicyRequest
 */
const se_UpdateAssumeRolePolicyRequest = (input: UpdateAssumeRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.PolicyDocument != null) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateGroupRequest
 */
const se_UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName != null) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.NewPath != null) {
    entries["NewPath"] = input.NewPath;
  }
  if (input.NewGroupName != null) {
    entries["NewGroupName"] = input.NewGroupName;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateLoginProfileRequest
 */
const se_UpdateLoginProfileRequest = (input: UpdateLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.Password != null) {
    entries["Password"] = input.Password;
  }
  if (input.PasswordResetRequired != null) {
    entries["PasswordResetRequired"] = input.PasswordResetRequired;
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
  if (input.OpenIDConnectProviderArn != null) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.ThumbprintList != null) {
    const memberEntries = se_thumbprintListType(input.ThumbprintList, context);
    if (input.ThumbprintList?.length === 0) {
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
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateRoleRequest
 */
const se_UpdateRoleRequest = (input: UpdateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName != null) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Description != null) {
    entries["Description"] = input.Description;
  }
  if (input.MaxSessionDuration != null) {
    entries["MaxSessionDuration"] = input.MaxSessionDuration;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSAMLProviderRequest
 */
const se_UpdateSAMLProviderRequest = (input: UpdateSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SAMLMetadataDocument != null) {
    entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
  }
  if (input.SAMLProviderArn != null) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateServerCertificateRequest
 */
const se_UpdateServerCertificateRequest = (input: UpdateServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  if (input.NewPath != null) {
    entries["NewPath"] = input.NewPath;
  }
  if (input.NewServerCertificateName != null) {
    entries["NewServerCertificateName"] = input.NewServerCertificateName;
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.ServiceSpecificCredentialId != null) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSigningCertificateRequest
 */
const se_UpdateSigningCertificateRequest = (input: UpdateSigningCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.CertificateId != null) {
    entries["CertificateId"] = input.CertificateId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateSSHPublicKeyRequest
 */
const se_UpdateSSHPublicKeyRequest = (input: UpdateSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SSHPublicKeyId != null) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
  }
  if (input.Status != null) {
    entries["Status"] = input.Status;
  }
  return entries;
};

/**
 * serializeAws_queryUpdateUserRequest
 */
const se_UpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.NewPath != null) {
    entries["NewPath"] = input.NewPath;
  }
  if (input.NewUserName != null) {
    entries["NewUserName"] = input.NewUserName;
  }
  return entries;
};

/**
 * serializeAws_queryUploadServerCertificateRequest
 */
const se_UploadServerCertificateRequest = (input: UploadServerCertificateRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Path != null) {
    entries["Path"] = input.Path;
  }
  if (input.ServerCertificateName != null) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  if (input.CertificateBody != null) {
    entries["CertificateBody"] = input.CertificateBody;
  }
  if (input.PrivateKey != null) {
    entries["PrivateKey"] = input.PrivateKey;
  }
  if (input.CertificateChain != null) {
    entries["CertificateChain"] = input.CertificateChain;
  }
  if (input.Tags != null) {
    const memberEntries = se_tagListType(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.CertificateBody != null) {
    entries["CertificateBody"] = input.CertificateBody;
  }
  return entries;
};

/**
 * serializeAws_queryUploadSSHPublicKeyRequest
 */
const se_UploadSSHPublicKeyRequest = (input: UploadSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName != null) {
    entries["UserName"] = input.UserName;
  }
  if (input.SSHPublicKeyBody != null) {
    entries["SSHPublicKeyBody"] = input.SSHPublicKeyBody;
  }
  return entries;
};

/**
 * deserializeAws_queryAccessDetail
 */
const de_AccessDetail = (output: any, context: __SerdeContext): AccessDetail => {
  const contents: any = {};
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = __expectString(output["ServiceName"]);
  }
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = __expectString(output["ServiceNamespace"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output["EntityPath"] !== undefined) {
    contents.EntityPath = __expectString(output["EntityPath"]);
  }
  if (output["LastAuthenticatedTime"] !== undefined) {
    contents.LastAuthenticatedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastAuthenticatedTime"]));
  }
  if (output["TotalAuthenticatedEntities"] !== undefined) {
    contents.TotalAuthenticatedEntities = __strictParseInt32(output["TotalAuthenticatedEntities"]) as number;
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = __expectString(output["AccessKeyId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["SecretAccessKey"] !== undefined) {
    contents.SecretAccessKey = __expectString(output["SecretAccessKey"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryAccessKeyLastUsed
 */
const de_AccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  const contents: any = {};
  if (output["LastUsedDate"] !== undefined) {
    contents.LastUsedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUsedDate"]));
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = __expectString(output["ServiceName"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  return contents;
};

/**
 * deserializeAws_queryAccessKeyMetadata
 */
const de_AccessKeyMetadata = (output: any, context: __SerdeContext): AccessKeyMetadata => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = __expectString(output["AccessKeyId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
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
  if (output["PermissionsBoundaryType"] !== undefined) {
    contents.PermissionsBoundaryType = __expectString(output["PermissionsBoundaryType"]);
  }
  if (output["PermissionsBoundaryArn"] !== undefined) {
    contents.PermissionsBoundaryArn = __expectString(output["PermissionsBoundaryArn"]);
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
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyArn"] !== undefined) {
    contents.PolicyArn = __expectString(output["PolicyArn"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["AccessKey"] !== undefined) {
    contents.AccessKey = de_AccessKey(output["AccessKey"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  const contents: any = {};
  if (output["Group"] !== undefined) {
    contents.Group = de_Group(output["Group"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateInstanceProfileResponse
 */
const de_CreateInstanceProfileResponse = (output: any, context: __SerdeContext): CreateInstanceProfileResponse => {
  const contents: any = {};
  if (output["InstanceProfile"] !== undefined) {
    contents.InstanceProfile = de_InstanceProfile(output["InstanceProfile"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateLoginProfileResponse
 */
const de_CreateLoginProfileResponse = (output: any, context: __SerdeContext): CreateLoginProfileResponse => {
  const contents: any = {};
  if (output["LoginProfile"] !== undefined) {
    contents.LoginProfile = de_LoginProfile(output["LoginProfile"], context);
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
  if (output["OpenIDConnectProviderArn"] !== undefined) {
    contents.OpenIDConnectProviderArn = __expectString(output["OpenIDConnectProviderArn"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePolicyResponse
 */
const de_CreatePolicyResponse = (output: any, context: __SerdeContext): CreatePolicyResponse => {
  const contents: any = {};
  if (output["Policy"] !== undefined) {
    contents.Policy = de_Policy(output["Policy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreatePolicyVersionResponse
 */
const de_CreatePolicyVersionResponse = (output: any, context: __SerdeContext): CreatePolicyVersionResponse => {
  const contents: any = {};
  if (output["PolicyVersion"] !== undefined) {
    contents.PolicyVersion = de_PolicyVersion(output["PolicyVersion"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateRoleResponse
 */
const de_CreateRoleResponse = (output: any, context: __SerdeContext): CreateRoleResponse => {
  const contents: any = {};
  if (output["Role"] !== undefined) {
    contents.Role = de_Role(output["Role"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateSAMLProviderResponse
 */
const de_CreateSAMLProviderResponse = (output: any, context: __SerdeContext): CreateSAMLProviderResponse => {
  const contents: any = {};
  if (output["SAMLProviderArn"] !== undefined) {
    contents.SAMLProviderArn = __expectString(output["SAMLProviderArn"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateServiceLinkedRoleResponse
 */
const de_CreateServiceLinkedRoleResponse = (output: any, context: __SerdeContext): CreateServiceLinkedRoleResponse => {
  const contents: any = {};
  if (output["Role"] !== undefined) {
    contents.Role = de_Role(output["Role"], context);
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
  if (output["ServiceSpecificCredential"] !== undefined) {
    contents.ServiceSpecificCredential = de_ServiceSpecificCredential(output["ServiceSpecificCredential"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  const contents: any = {};
  if (output["User"] !== undefined) {
    contents.User = de_User(output["User"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryCreateVirtualMFADeviceResponse
 */
const de_CreateVirtualMFADeviceResponse = (output: any, context: __SerdeContext): CreateVirtualMFADeviceResponse => {
  const contents: any = {};
  if (output["VirtualMFADevice"] !== undefined) {
    contents.VirtualMFADevice = de_VirtualMFADevice(output["VirtualMFADevice"], context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteConflictException
 */
const de_DeleteConflictException = (output: any, context: __SerdeContext): DeleteConflictException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteServiceLinkedRoleResponse
 */
const de_DeleteServiceLinkedRoleResponse = (output: any, context: __SerdeContext): DeleteServiceLinkedRoleResponse => {
  const contents: any = {};
  if (output["DeletionTaskId"] !== undefined) {
    contents.DeletionTaskId = __expectString(output["DeletionTaskId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDeletionTaskFailureReasonType
 */
const de_DeletionTaskFailureReasonType = (output: any, context: __SerdeContext): DeletionTaskFailureReasonType => {
  const contents: any = {};
  if (output["Reason"] !== undefined) {
    contents.Reason = __expectString(output["Reason"]);
  }
  if (output.RoleUsageList === "") {
    contents.RoleUsageList = [];
  } else if (output["RoleUsageList"] !== undefined && output["RoleUsageList"]["member"] !== undefined) {
    contents.RoleUsageList = de_RoleUsageListType(__getArrayIfSingleItem(output["RoleUsageList"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateCertificateException
 */
const de_DuplicateCertificateException = (output: any, context: __SerdeContext): DuplicateCertificateException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDuplicateSSHPublicKeyException
 */
const de_DuplicateSSHPublicKeyException = (output: any, context: __SerdeContext): DuplicateSSHPublicKeyException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEntityAlreadyExistsException
 */
const de_EntityAlreadyExistsException = (output: any, context: __SerdeContext): EntityAlreadyExistsException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryEntityDetails
 */
const de_EntityDetails = (output: any, context: __SerdeContext): EntityDetails => {
  const contents: any = {};
  if (output["EntityInfo"] !== undefined) {
    contents.EntityInfo = de_EntityInfo(output["EntityInfo"], context);
  }
  if (output["LastAuthenticated"] !== undefined) {
    contents.LastAuthenticated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastAuthenticated"]));
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
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Type"] !== undefined) {
    contents.Type = __expectString(output["Type"]);
  }
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
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
  if (output["EvalActionName"] !== undefined) {
    contents.EvalActionName = __expectString(output["EvalActionName"]);
  }
  if (output["EvalResourceName"] !== undefined) {
    contents.EvalResourceName = __expectString(output["EvalResourceName"]);
  }
  if (output["EvalDecision"] !== undefined) {
    contents.EvalDecision = __expectString(output["EvalDecision"]);
  }
  if (output.MatchedStatements === "") {
    contents.MatchedStatements = [];
  } else if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
    contents.MatchedStatements = de_StatementListType(
      __getArrayIfSingleItem(output["MatchedStatements"]["member"]),
      context
    );
  }
  if (output.MissingContextValues === "") {
    contents.MissingContextValues = [];
  } else if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
    contents.MissingContextValues = de_ContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["MissingContextValues"]["member"]),
      context
    );
  }
  if (output["OrganizationsDecisionDetail"] !== undefined) {
    contents.OrganizationsDecisionDetail = de_OrganizationsDecisionDetail(
      output["OrganizationsDecisionDetail"],
      context
    );
  }
  if (output["PermissionsBoundaryDecisionDetail"] !== undefined) {
    contents.PermissionsBoundaryDecisionDetail = de_PermissionsBoundaryDecisionDetail(
      output["PermissionsBoundaryDecisionDetail"],
      context
    );
  }
  if (output.EvalDecisionDetails === "") {
    contents.EvalDecisionDetails = {};
  } else if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
    contents.EvalDecisionDetails = de_EvalDecisionDetailsType(
      __getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]),
      context
    );
  }
  if (output.ResourceSpecificResults === "") {
    contents.ResourceSpecificResults = [];
  } else if (
    output["ResourceSpecificResults"] !== undefined &&
    output["ResourceSpecificResults"]["member"] !== undefined
  ) {
    contents.ResourceSpecificResults = de_ResourceSpecificResultListType(
      __getArrayIfSingleItem(output["ResourceSpecificResults"]["member"]),
      context
    );
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
 * deserializeAws_queryGenerateCredentialReportResponse
 */
const de_GenerateCredentialReportResponse = (
  output: any,
  context: __SerdeContext
): GenerateCredentialReportResponse => {
  const contents: any = {};
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
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
  if (output["JobId"] !== undefined) {
    contents.JobId = __expectString(output["JobId"]);
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
  if (output["JobId"] !== undefined) {
    contents.JobId = __expectString(output["JobId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccessKeyLastUsedResponse
 */
const de_GetAccessKeyLastUsedResponse = (output: any, context: __SerdeContext): GetAccessKeyLastUsedResponse => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["AccessKeyLastUsed"] !== undefined) {
    contents.AccessKeyLastUsed = de_AccessKeyLastUsed(output["AccessKeyLastUsed"], context);
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
  if (output.UserDetailList === "") {
    contents.UserDetailList = [];
  } else if (output["UserDetailList"] !== undefined && output["UserDetailList"]["member"] !== undefined) {
    contents.UserDetailList = de_userDetailListType(
      __getArrayIfSingleItem(output["UserDetailList"]["member"]),
      context
    );
  }
  if (output.GroupDetailList === "") {
    contents.GroupDetailList = [];
  } else if (output["GroupDetailList"] !== undefined && output["GroupDetailList"]["member"] !== undefined) {
    contents.GroupDetailList = de_groupDetailListType(
      __getArrayIfSingleItem(output["GroupDetailList"]["member"]),
      context
    );
  }
  if (output.RoleDetailList === "") {
    contents.RoleDetailList = [];
  } else if (output["RoleDetailList"] !== undefined && output["RoleDetailList"]["member"] !== undefined) {
    contents.RoleDetailList = de_roleDetailListType(
      __getArrayIfSingleItem(output["RoleDetailList"]["member"]),
      context
    );
  }
  if (output.Policies === "") {
    contents.Policies = [];
  } else if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = de_ManagedPolicyDetailListType(__getArrayIfSingleItem(output["Policies"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output["PasswordPolicy"] !== undefined) {
    contents.PasswordPolicy = de_PasswordPolicy(output["PasswordPolicy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetAccountSummaryResponse
 */
const de_GetAccountSummaryResponse = (output: any, context: __SerdeContext): GetAccountSummaryResponse => {
  const contents: any = {};
  if (output.SummaryMap === "") {
    contents.SummaryMap = {};
  } else if (output["SummaryMap"] !== undefined && output["SummaryMap"]["entry"] !== undefined) {
    contents.SummaryMap = de_summaryMapType(__getArrayIfSingleItem(output["SummaryMap"]["entry"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetContextKeysForPolicyResponse
 */
const de_GetContextKeysForPolicyResponse = (output: any, context: __SerdeContext): GetContextKeysForPolicyResponse => {
  const contents: any = {};
  if (output.ContextKeyNames === "") {
    contents.ContextKeyNames = [];
  } else if (output["ContextKeyNames"] !== undefined && output["ContextKeyNames"]["member"] !== undefined) {
    contents.ContextKeyNames = de_ContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["ContextKeyNames"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetCredentialReportResponse
 */
const de_GetCredentialReportResponse = (output: any, context: __SerdeContext): GetCredentialReportResponse => {
  const contents: any = {};
  if (output["Content"] !== undefined) {
    contents.Content = context.base64Decoder(output["Content"]);
  }
  if (output["ReportFormat"] !== undefined) {
    contents.ReportFormat = __expectString(output["ReportFormat"]);
  }
  if (output["GeneratedTime"] !== undefined) {
    contents.GeneratedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["GeneratedTime"]));
  }
  return contents;
};

/**
 * deserializeAws_queryGetGroupPolicyResponse
 */
const de_GetGroupPolicyResponse = (output: any, context: __SerdeContext): GetGroupPolicyResponse => {
  const contents: any = {};
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = __expectString(output["PolicyDocument"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetGroupResponse
 */
const de_GetGroupResponse = (output: any, context: __SerdeContext): GetGroupResponse => {
  const contents: any = {};
  if (output["Group"] !== undefined) {
    contents.Group = de_Group(output["Group"], context);
  }
  if (output.Users === "") {
    contents.Users = [];
  } else if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = de_userListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetInstanceProfileResponse
 */
const de_GetInstanceProfileResponse = (output: any, context: __SerdeContext): GetInstanceProfileResponse => {
  const contents: any = {};
  if (output["InstanceProfile"] !== undefined) {
    contents.InstanceProfile = de_InstanceProfile(output["InstanceProfile"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetLoginProfileResponse
 */
const de_GetLoginProfileResponse = (output: any, context: __SerdeContext): GetLoginProfileResponse => {
  const contents: any = {};
  if (output["LoginProfile"] !== undefined) {
    contents.LoginProfile = de_LoginProfile(output["LoginProfile"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMFADeviceResponse
 */
const de_GetMFADeviceResponse = (output: any, context: __SerdeContext): GetMFADeviceResponse => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["SerialNumber"] !== undefined) {
    contents.SerialNumber = __expectString(output["SerialNumber"]);
  }
  if (output["EnableDate"] !== undefined) {
    contents.EnableDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EnableDate"]));
  }
  if (output.Certifications === "") {
    contents.Certifications = {};
  } else if (output["Certifications"] !== undefined && output["Certifications"]["entry"] !== undefined) {
    contents.Certifications = de_CertificationMapType(
      __getArrayIfSingleItem(output["Certifications"]["entry"]),
      context
    );
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
  if (output["Url"] !== undefined) {
    contents.Url = __expectString(output["Url"]);
  }
  if (output.ClientIDList === "") {
    contents.ClientIDList = [];
  } else if (output["ClientIDList"] !== undefined && output["ClientIDList"]["member"] !== undefined) {
    contents.ClientIDList = de_clientIDListType(__getArrayIfSingleItem(output["ClientIDList"]["member"]), context);
  }
  if (output.ThumbprintList === "") {
    contents.ThumbprintList = [];
  } else if (output["ThumbprintList"] !== undefined && output["ThumbprintList"]["member"] !== undefined) {
    contents.ThumbprintList = de_thumbprintListType(
      __getArrayIfSingleItem(output["ThumbprintList"]["member"]),
      context
    );
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = __expectString(output["JobStatus"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCreationDate"]));
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCompletionDate"]));
  }
  if (output["NumberOfServicesAccessible"] !== undefined) {
    contents.NumberOfServicesAccessible = __strictParseInt32(output["NumberOfServicesAccessible"]) as number;
  }
  if (output["NumberOfServicesNotAccessed"] !== undefined) {
    contents.NumberOfServicesNotAccessed = __strictParseInt32(output["NumberOfServicesNotAccessed"]) as number;
  }
  if (output.AccessDetails === "") {
    contents.AccessDetails = [];
  } else if (output["AccessDetails"] !== undefined && output["AccessDetails"]["member"] !== undefined) {
    contents.AccessDetails = de_AccessDetails(__getArrayIfSingleItem(output["AccessDetails"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["ErrorDetails"] !== undefined) {
    contents.ErrorDetails = de_ErrorDetails(output["ErrorDetails"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetPolicyResponse
 */
const de_GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  const contents: any = {};
  if (output["Policy"] !== undefined) {
    contents.Policy = de_Policy(output["Policy"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetPolicyVersionResponse
 */
const de_GetPolicyVersionResponse = (output: any, context: __SerdeContext): GetPolicyVersionResponse => {
  const contents: any = {};
  if (output["PolicyVersion"] !== undefined) {
    contents.PolicyVersion = de_PolicyVersion(output["PolicyVersion"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetRolePolicyResponse
 */
const de_GetRolePolicyResponse = (output: any, context: __SerdeContext): GetRolePolicyResponse => {
  const contents: any = {};
  if (output["RoleName"] !== undefined) {
    contents.RoleName = __expectString(output["RoleName"]);
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = __expectString(output["PolicyDocument"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetRoleResponse
 */
const de_GetRoleResponse = (output: any, context: __SerdeContext): GetRoleResponse => {
  const contents: any = {};
  if (output["Role"] !== undefined) {
    contents.Role = de_Role(output["Role"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSAMLProviderResponse
 */
const de_GetSAMLProviderResponse = (output: any, context: __SerdeContext): GetSAMLProviderResponse => {
  const contents: any = {};
  if (output["SAMLMetadataDocument"] !== undefined) {
    contents.SAMLMetadataDocument = __expectString(output["SAMLMetadataDocument"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["ValidUntil"] !== undefined) {
    contents.ValidUntil = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidUntil"]));
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetServerCertificateResponse
 */
const de_GetServerCertificateResponse = (output: any, context: __SerdeContext): GetServerCertificateResponse => {
  const contents: any = {};
  if (output["ServerCertificate"] !== undefined) {
    contents.ServerCertificate = de_ServerCertificate(output["ServerCertificate"], context);
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
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = __expectString(output["JobStatus"]);
  }
  if (output["JobType"] !== undefined) {
    contents.JobType = __expectString(output["JobType"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCreationDate"]));
  }
  if (output.ServicesLastAccessed === "") {
    contents.ServicesLastAccessed = [];
  } else if (output["ServicesLastAccessed"] !== undefined && output["ServicesLastAccessed"]["member"] !== undefined) {
    contents.ServicesLastAccessed = de_ServicesLastAccessed(
      __getArrayIfSingleItem(output["ServicesLastAccessed"]["member"]),
      context
    );
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCompletionDate"]));
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["Error"] !== undefined) {
    contents.Error = de_ErrorDetails(output["Error"], context);
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
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = __expectString(output["JobStatus"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCreationDate"]));
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["JobCompletionDate"]));
  }
  if (output.EntityDetailsList === "") {
    contents.EntityDetailsList = [];
  } else if (output["EntityDetailsList"] !== undefined && output["EntityDetailsList"]["member"] !== undefined) {
    contents.EntityDetailsList = de_entityDetailsListType(
      __getArrayIfSingleItem(output["EntityDetailsList"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  if (output["Error"] !== undefined) {
    contents.Error = de_ErrorDetails(output["Error"], context);
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
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["Reason"] !== undefined) {
    contents.Reason = de_DeletionTaskFailureReasonType(output["Reason"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetSSHPublicKeyResponse
 */
const de_GetSSHPublicKeyResponse = (output: any, context: __SerdeContext): GetSSHPublicKeyResponse => {
  const contents: any = {};
  if (output["SSHPublicKey"] !== undefined) {
    contents.SSHPublicKey = de_SSHPublicKey(output["SSHPublicKey"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetUserPolicyResponse
 */
const de_GetUserPolicyResponse = (output: any, context: __SerdeContext): GetUserPolicyResponse => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = __expectString(output["PolicyDocument"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetUserResponse
 */
const de_GetUserResponse = (output: any, context: __SerdeContext): GetUserResponse => {
  const contents: any = {};
  if (output["User"] !== undefined) {
    contents.User = de_User(output["User"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryGroup
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  if (output["GroupId"] !== undefined) {
    contents.GroupId = __expectString(output["GroupId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryGroupDetail
 */
const de_GroupDetail = (output: any, context: __SerdeContext): GroupDetail => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  if (output["GroupId"] !== undefined) {
    contents.GroupId = __expectString(output["GroupId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output.GroupPolicyList === "") {
    contents.GroupPolicyList = [];
  } else if (output["GroupPolicyList"] !== undefined && output["GroupPolicyList"]["member"] !== undefined) {
    contents.GroupPolicyList = de_policyDetailListType(
      __getArrayIfSingleItem(output["GroupPolicyList"]["member"]),
      context
    );
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  } else if (
    output["AttachedManagedPolicies"] !== undefined &&
    output["AttachedManagedPolicies"]["member"] !== undefined
  ) {
    contents.AttachedManagedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
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
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["InstanceProfileName"] !== undefined) {
    contents.InstanceProfileName = __expectString(output["InstanceProfileName"]);
  }
  if (output["InstanceProfileId"] !== undefined) {
    contents.InstanceProfileId = __expectString(output["InstanceProfileId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output.Roles === "") {
    contents.Roles = [];
  } else if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
    contents.Roles = de_roleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidCertificateException
 */
const de_InvalidCertificateException = (output: any, context: __SerdeContext): InvalidCertificateException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidPublicKeyException
 */
const de_InvalidPublicKeyException = (output: any, context: __SerdeContext): InvalidPublicKeyException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidUserTypeException
 */
const de_InvalidUserTypeException = (output: any, context: __SerdeContext): InvalidUserTypeException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryKeyPairMismatchException
 */
const de_KeyPairMismatchException = (output: any, context: __SerdeContext): KeyPairMismatchException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAccessKeysResponse
 */
const de_ListAccessKeysResponse = (output: any, context: __SerdeContext): ListAccessKeysResponse => {
  const contents: any = {};
  if (output.AccessKeyMetadata === "") {
    contents.AccessKeyMetadata = [];
  } else if (output["AccessKeyMetadata"] !== undefined && output["AccessKeyMetadata"]["member"] !== undefined) {
    contents.AccessKeyMetadata = de_accessKeyMetadataListType(
      __getArrayIfSingleItem(output["AccessKeyMetadata"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListAccountAliasesResponse
 */
const de_ListAccountAliasesResponse = (output: any, context: __SerdeContext): ListAccountAliasesResponse => {
  const contents: any = {};
  if (output.AccountAliases === "") {
    contents.AccountAliases = [];
  } else if (output["AccountAliases"] !== undefined && output["AccountAliases"]["member"] !== undefined) {
    contents.AccountAliases = de_accountAliasListType(
      __getArrayIfSingleItem(output["AccountAliases"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  } else if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  } else if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  } else if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListEntitiesForPolicyResponse
 */
const de_ListEntitiesForPolicyResponse = (output: any, context: __SerdeContext): ListEntitiesForPolicyResponse => {
  const contents: any = {};
  if (output.PolicyGroups === "") {
    contents.PolicyGroups = [];
  } else if (output["PolicyGroups"] !== undefined && output["PolicyGroups"]["member"] !== undefined) {
    contents.PolicyGroups = de_PolicyGroupListType(__getArrayIfSingleItem(output["PolicyGroups"]["member"]), context);
  }
  if (output.PolicyUsers === "") {
    contents.PolicyUsers = [];
  } else if (output["PolicyUsers"] !== undefined && output["PolicyUsers"]["member"] !== undefined) {
    contents.PolicyUsers = de_PolicyUserListType(__getArrayIfSingleItem(output["PolicyUsers"]["member"]), context);
  }
  if (output.PolicyRoles === "") {
    contents.PolicyRoles = [];
  } else if (output["PolicyRoles"] !== undefined && output["PolicyRoles"]["member"] !== undefined) {
    contents.PolicyRoles = de_PolicyRoleListType(__getArrayIfSingleItem(output["PolicyRoles"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupPoliciesResponse
 */
const de_ListGroupPoliciesResponse = (output: any, context: __SerdeContext): ListGroupPoliciesResponse => {
  const contents: any = {};
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_policyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupsForUserResponse
 */
const de_ListGroupsForUserResponse = (output: any, context: __SerdeContext): ListGroupsForUserResponse => {
  const contents: any = {};
  if (output.Groups === "") {
    contents.Groups = [];
  } else if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
    contents.Groups = de_groupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  const contents: any = {};
  if (output.Groups === "") {
    contents.Groups = [];
  } else if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
    contents.Groups = de_groupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.InstanceProfiles === "") {
    contents.InstanceProfiles = [];
  } else if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
    contents.InstanceProfiles = de_instanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfiles"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListInstanceProfilesResponse
 */
const de_ListInstanceProfilesResponse = (output: any, context: __SerdeContext): ListInstanceProfilesResponse => {
  const contents: any = {};
  if (output.InstanceProfiles === "") {
    contents.InstanceProfiles = [];
  } else if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
    contents.InstanceProfiles = de_instanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfiles"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListInstanceProfileTagsResponse
 */
const de_ListInstanceProfileTagsResponse = (output: any, context: __SerdeContext): ListInstanceProfileTagsResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMFADevicesResponse
 */
const de_ListMFADevicesResponse = (output: any, context: __SerdeContext): ListMFADevicesResponse => {
  const contents: any = {};
  if (output.MFADevices === "") {
    contents.MFADevices = [];
  } else if (output["MFADevices"] !== undefined && output["MFADevices"]["member"] !== undefined) {
    contents.MFADevices = de_mfaDeviceListType(__getArrayIfSingleItem(output["MFADevices"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMFADeviceTagsResponse
 */
const de_ListMFADeviceTagsResponse = (output: any, context: __SerdeContext): ListMFADeviceTagsResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.OpenIDConnectProviderList === "") {
    contents.OpenIDConnectProviderList = [];
  } else if (
    output["OpenIDConnectProviderList"] !== undefined &&
    output["OpenIDConnectProviderList"]["member"] !== undefined
  ) {
    contents.OpenIDConnectProviderList = de_OpenIDConnectProviderListType(
      __getArrayIfSingleItem(output["OpenIDConnectProviderList"]["member"]),
      context
    );
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = __expectString(output["ServiceNamespace"]);
  }
  if (output.Policies === "") {
    contents.Policies = [];
  } else if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = de_policyGrantingServiceAccessListType(
      __getArrayIfSingleItem(output["Policies"]["member"]),
      context
    );
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
  if (output.PoliciesGrantingServiceAccess === "") {
    contents.PoliciesGrantingServiceAccess = [];
  } else if (
    output["PoliciesGrantingServiceAccess"] !== undefined &&
    output["PoliciesGrantingServiceAccess"]["member"] !== undefined
  ) {
    contents.PoliciesGrantingServiceAccess = de_listPolicyGrantingServiceAccessResponseListType(
      __getArrayIfSingleItem(output["PoliciesGrantingServiceAccess"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPoliciesResponse
 */
const de_ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  const contents: any = {};
  if (output.Policies === "") {
    contents.Policies = [];
  } else if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = de_policyListType(__getArrayIfSingleItem(output["Policies"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListPolicyVersionsResponse
 */
const de_ListPolicyVersionsResponse = (output: any, context: __SerdeContext): ListPolicyVersionsResponse => {
  const contents: any = {};
  if (output.Versions === "") {
    contents.Versions = [];
  } else if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
    contents.Versions = de_policyDocumentVersionListType(__getArrayIfSingleItem(output["Versions"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRolePoliciesResponse
 */
const de_ListRolePoliciesResponse = (output: any, context: __SerdeContext): ListRolePoliciesResponse => {
  const contents: any = {};
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_policyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRolesResponse
 */
const de_ListRolesResponse = (output: any, context: __SerdeContext): ListRolesResponse => {
  const contents: any = {};
  if (output.Roles === "") {
    contents.Roles = [];
  } else if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
    contents.Roles = de_roleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListRoleTagsResponse
 */
const de_ListRoleTagsResponse = (output: any, context: __SerdeContext): ListRoleTagsResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSAMLProvidersResponse
 */
const de_ListSAMLProvidersResponse = (output: any, context: __SerdeContext): ListSAMLProvidersResponse => {
  const contents: any = {};
  if (output.SAMLProviderList === "") {
    contents.SAMLProviderList = [];
  } else if (output["SAMLProviderList"] !== undefined && output["SAMLProviderList"]["member"] !== undefined) {
    contents.SAMLProviderList = de_SAMLProviderListType(
      __getArrayIfSingleItem(output["SAMLProviderList"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryListSAMLProviderTagsResponse
 */
const de_ListSAMLProviderTagsResponse = (output: any, context: __SerdeContext): ListSAMLProviderTagsResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListServerCertificatesResponse
 */
const de_ListServerCertificatesResponse = (output: any, context: __SerdeContext): ListServerCertificatesResponse => {
  const contents: any = {};
  if (output.ServerCertificateMetadataList === "") {
    contents.ServerCertificateMetadataList = [];
  } else if (
    output["ServerCertificateMetadataList"] !== undefined &&
    output["ServerCertificateMetadataList"]["member"] !== undefined
  ) {
    contents.ServerCertificateMetadataList = de_serverCertificateMetadataListType(
      __getArrayIfSingleItem(output["ServerCertificateMetadataList"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
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
  if (output.ServiceSpecificCredentials === "") {
    contents.ServiceSpecificCredentials = [];
  } else if (
    output["ServiceSpecificCredentials"] !== undefined &&
    output["ServiceSpecificCredentials"]["member"] !== undefined
  ) {
    contents.ServiceSpecificCredentials = de_ServiceSpecificCredentialsListType(
      __getArrayIfSingleItem(output["ServiceSpecificCredentials"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryListSigningCertificatesResponse
 */
const de_ListSigningCertificatesResponse = (output: any, context: __SerdeContext): ListSigningCertificatesResponse => {
  const contents: any = {};
  if (output.Certificates === "") {
    contents.Certificates = [];
  } else if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = de_certificateListType(__getArrayIfSingleItem(output["Certificates"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListSSHPublicKeysResponse
 */
const de_ListSSHPublicKeysResponse = (output: any, context: __SerdeContext): ListSSHPublicKeysResponse => {
  const contents: any = {};
  if (output.SSHPublicKeys === "") {
    contents.SSHPublicKeys = [];
  } else if (output["SSHPublicKeys"] !== undefined && output["SSHPublicKeys"]["member"] !== undefined) {
    contents.SSHPublicKeys = de_SSHPublicKeyListType(
      __getArrayIfSingleItem(output["SSHPublicKeys"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUserPoliciesResponse
 */
const de_ListUserPoliciesResponse = (output: any, context: __SerdeContext): ListUserPoliciesResponse => {
  const contents: any = {};
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  } else if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = de_policyNameListType(__getArrayIfSingleItem(output["PolicyNames"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  const contents: any = {};
  if (output.Users === "") {
    contents.Users = [];
  } else if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = de_userListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListUserTagsResponse
 */
const de_ListUserTagsResponse = (output: any, context: __SerdeContext): ListUserTagsResponse => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListVirtualMFADevicesResponse
 */
const de_ListVirtualMFADevicesResponse = (output: any, context: __SerdeContext): ListVirtualMFADevicesResponse => {
  const contents: any = {};
  if (output.VirtualMFADevices === "") {
    contents.VirtualMFADevices = [];
  } else if (output["VirtualMFADevices"] !== undefined && output["VirtualMFADevices"]["member"] !== undefined) {
    contents.VirtualMFADevices = de_virtualMFADeviceListType(
      __getArrayIfSingleItem(output["VirtualMFADevices"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLoginProfile
 */
const de_LoginProfile = (output: any, context: __SerdeContext): LoginProfile => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["PasswordResetRequired"] !== undefined) {
    contents.PasswordResetRequired = __parseBoolean(output["PasswordResetRequired"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMalformedCertificateException
 */
const de_MalformedCertificateException = (output: any, context: __SerdeContext): MalformedCertificateException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedPolicyDetail
 */
const de_ManagedPolicyDetail = (output: any, context: __SerdeContext): ManagedPolicyDetail => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyId"] !== undefined) {
    contents.PolicyId = __expectString(output["PolicyId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = __expectString(output["DefaultVersionId"]);
  }
  if (output["AttachmentCount"] !== undefined) {
    contents.AttachmentCount = __strictParseInt32(output["AttachmentCount"]) as number;
  }
  if (output["PermissionsBoundaryUsageCount"] !== undefined) {
    contents.PermissionsBoundaryUsageCount = __strictParseInt32(output["PermissionsBoundaryUsageCount"]) as number;
  }
  if (output["IsAttachable"] !== undefined) {
    contents.IsAttachable = __parseBoolean(output["IsAttachable"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdateDate"]));
  }
  if (output.PolicyVersionList === "") {
    contents.PolicyVersionList = [];
  } else if (output["PolicyVersionList"] !== undefined && output["PolicyVersionList"]["member"] !== undefined) {
    contents.PolicyVersionList = de_policyDocumentVersionListType(
      __getArrayIfSingleItem(output["PolicyVersionList"]["member"]),
      context
    );
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["SerialNumber"] !== undefined) {
    contents.SerialNumber = __expectString(output["SerialNumber"]);
  }
  if (output["EnableDate"] !== undefined) {
    contents.EnableDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EnableDate"]));
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryOpenIDConnectProviderListEntry
 */
const de_OpenIDConnectProviderListEntry = (output: any, context: __SerdeContext): OpenIDConnectProviderListEntry => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
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
 * deserializeAws_queryOrganizationsDecisionDetail
 */
const de_OrganizationsDecisionDetail = (output: any, context: __SerdeContext): OrganizationsDecisionDetail => {
  const contents: any = {};
  if (output["AllowedByOrganizations"] !== undefined) {
    contents.AllowedByOrganizations = __parseBoolean(output["AllowedByOrganizations"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPasswordPolicy
 */
const de_PasswordPolicy = (output: any, context: __SerdeContext): PasswordPolicy => {
  const contents: any = {};
  if (output["MinimumPasswordLength"] !== undefined) {
    contents.MinimumPasswordLength = __strictParseInt32(output["MinimumPasswordLength"]) as number;
  }
  if (output["RequireSymbols"] !== undefined) {
    contents.RequireSymbols = __parseBoolean(output["RequireSymbols"]);
  }
  if (output["RequireNumbers"] !== undefined) {
    contents.RequireNumbers = __parseBoolean(output["RequireNumbers"]);
  }
  if (output["RequireUppercaseCharacters"] !== undefined) {
    contents.RequireUppercaseCharacters = __parseBoolean(output["RequireUppercaseCharacters"]);
  }
  if (output["RequireLowercaseCharacters"] !== undefined) {
    contents.RequireLowercaseCharacters = __parseBoolean(output["RequireLowercaseCharacters"]);
  }
  if (output["AllowUsersToChangePassword"] !== undefined) {
    contents.AllowUsersToChangePassword = __parseBoolean(output["AllowUsersToChangePassword"]);
  }
  if (output["ExpirePasswords"] !== undefined) {
    contents.ExpirePasswords = __parseBoolean(output["ExpirePasswords"]);
  }
  if (output["MaxPasswordAge"] !== undefined) {
    contents.MaxPasswordAge = __strictParseInt32(output["MaxPasswordAge"]) as number;
  }
  if (output["PasswordReusePrevention"] !== undefined) {
    contents.PasswordReusePrevention = __strictParseInt32(output["PasswordReusePrevention"]) as number;
  }
  if (output["HardExpiry"] !== undefined) {
    contents.HardExpiry = __parseBoolean(output["HardExpiry"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["AllowedByPermissionsBoundary"] !== undefined) {
    contents.AllowedByPermissionsBoundary = __parseBoolean(output["AllowedByPermissionsBoundary"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicy
 */
const de_Policy = (output: any, context: __SerdeContext): Policy => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyId"] !== undefined) {
    contents.PolicyId = __expectString(output["PolicyId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = __expectString(output["DefaultVersionId"]);
  }
  if (output["AttachmentCount"] !== undefined) {
    contents.AttachmentCount = __strictParseInt32(output["AttachmentCount"]) as number;
  }
  if (output["PermissionsBoundaryUsageCount"] !== undefined) {
    contents.PermissionsBoundaryUsageCount = __strictParseInt32(output["PermissionsBoundaryUsageCount"]) as number;
  }
  if (output["IsAttachable"] !== undefined) {
    contents.IsAttachable = __parseBoolean(output["IsAttachable"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UpdateDate"]));
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyDetail
 */
const de_PolicyDetail = (output: any, context: __SerdeContext): PolicyDetail => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = __expectString(output["PolicyDocument"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyGrantingServiceAccess
 */
const de_PolicyGrantingServiceAccess = (output: any, context: __SerdeContext): PolicyGrantingServiceAccess => {
  const contents: any = {};
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = __expectString(output["PolicyName"]);
  }
  if (output["PolicyType"] !== undefined) {
    contents.PolicyType = __expectString(output["PolicyType"]);
  }
  if (output["PolicyArn"] !== undefined) {
    contents.PolicyArn = __expectString(output["PolicyArn"]);
  }
  if (output["EntityType"] !== undefined) {
    contents.EntityType = __expectString(output["EntityType"]);
  }
  if (output["EntityName"] !== undefined) {
    contents.EntityName = __expectString(output["EntityName"]);
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
  if (output["GroupName"] !== undefined) {
    contents.GroupName = __expectString(output["GroupName"]);
  }
  if (output["GroupId"] !== undefined) {
    contents.GroupId = __expectString(output["GroupId"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryPolicyRole
 */
const de_PolicyRole = (output: any, context: __SerdeContext): PolicyRole => {
  const contents: any = {};
  if (output["RoleName"] !== undefined) {
    contents.RoleName = __expectString(output["RoleName"]);
  }
  if (output["RoleId"] !== undefined) {
    contents.RoleId = __expectString(output["RoleId"]);
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = __expectString(output["UserId"]);
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
  if (output["Document"] !== undefined) {
    contents.Document = __expectString(output["Document"]);
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = __expectString(output["VersionId"]);
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = __parseBoolean(output["IsDefaultVersion"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryPosition
 */
const de_Position = (output: any, context: __SerdeContext): Position => {
  const contents: any = {};
  if (output["Line"] !== undefined) {
    contents.Line = __strictParseInt32(output["Line"]) as number;
  }
  if (output["Column"] !== undefined) {
    contents.Column = __strictParseInt32(output["Column"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryReportGenerationLimitExceededException
 */
const de_ReportGenerationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReportGenerationLimitExceededException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["ServiceSpecificCredential"] !== undefined) {
    contents.ServiceSpecificCredential = de_ServiceSpecificCredential(output["ServiceSpecificCredential"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceSpecificResult
 */
const de_ResourceSpecificResult = (output: any, context: __SerdeContext): ResourceSpecificResult => {
  const contents: any = {};
  if (output["EvalResourceName"] !== undefined) {
    contents.EvalResourceName = __expectString(output["EvalResourceName"]);
  }
  if (output["EvalResourceDecision"] !== undefined) {
    contents.EvalResourceDecision = __expectString(output["EvalResourceDecision"]);
  }
  if (output.MatchedStatements === "") {
    contents.MatchedStatements = [];
  } else if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
    contents.MatchedStatements = de_StatementListType(
      __getArrayIfSingleItem(output["MatchedStatements"]["member"]),
      context
    );
  }
  if (output.MissingContextValues === "") {
    contents.MissingContextValues = [];
  } else if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
    contents.MissingContextValues = de_ContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["MissingContextValues"]["member"]),
      context
    );
  }
  if (output.EvalDecisionDetails === "") {
    contents.EvalDecisionDetails = {};
  } else if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
    contents.EvalDecisionDetails = de_EvalDecisionDetailsType(
      __getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]),
      context
    );
  }
  if (output["PermissionsBoundaryDecisionDetail"] !== undefined) {
    contents.PermissionsBoundaryDecisionDetail = de_PermissionsBoundaryDecisionDetail(
      output["PermissionsBoundaryDecisionDetail"],
      context
    );
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
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = __expectString(output["RoleName"]);
  }
  if (output["RoleId"] !== undefined) {
    contents.RoleId = __expectString(output["RoleId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["AssumeRolePolicyDocument"] !== undefined) {
    contents.AssumeRolePolicyDocument = __expectString(output["AssumeRolePolicyDocument"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = __expectString(output["Description"]);
  }
  if (output["MaxSessionDuration"] !== undefined) {
    contents.MaxSessionDuration = __strictParseInt32(output["MaxSessionDuration"]) as number;
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = de_AttachedPermissionsBoundary(output["PermissionsBoundary"], context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["RoleLastUsed"] !== undefined) {
    contents.RoleLastUsed = de_RoleLastUsed(output["RoleLastUsed"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryRoleDetail
 */
const de_RoleDetail = (output: any, context: __SerdeContext): RoleDetail => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = __expectString(output["RoleName"]);
  }
  if (output["RoleId"] !== undefined) {
    contents.RoleId = __expectString(output["RoleId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["AssumeRolePolicyDocument"] !== undefined) {
    contents.AssumeRolePolicyDocument = __expectString(output["AssumeRolePolicyDocument"]);
  }
  if (output.InstanceProfileList === "") {
    contents.InstanceProfileList = [];
  } else if (output["InstanceProfileList"] !== undefined && output["InstanceProfileList"]["member"] !== undefined) {
    contents.InstanceProfileList = de_instanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfileList"]["member"]),
      context
    );
  }
  if (output.RolePolicyList === "") {
    contents.RolePolicyList = [];
  } else if (output["RolePolicyList"] !== undefined && output["RolePolicyList"]["member"] !== undefined) {
    contents.RolePolicyList = de_policyDetailListType(
      __getArrayIfSingleItem(output["RolePolicyList"]["member"]),
      context
    );
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  } else if (
    output["AttachedManagedPolicies"] !== undefined &&
    output["AttachedManagedPolicies"]["member"] !== undefined
  ) {
    contents.AttachedManagedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = de_AttachedPermissionsBoundary(output["PermissionsBoundary"], context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["RoleLastUsed"] !== undefined) {
    contents.RoleLastUsed = de_RoleLastUsed(output["RoleLastUsed"], context);
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
  if (output["LastUsedDate"] !== undefined) {
    contents.LastUsedDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUsedDate"]));
  }
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
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
  if (output["Region"] !== undefined) {
    contents.Region = __expectString(output["Region"]);
  }
  if (output.Resources === "") {
    contents.Resources = [];
  } else if (output["Resources"] !== undefined && output["Resources"]["member"] !== undefined) {
    contents.Resources = de_ArnListType(__getArrayIfSingleItem(output["Resources"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_querySAMLProviderListEntry
 */
const de_SAMLProviderListEntry = (output: any, context: __SerdeContext): SAMLProviderListEntry => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["ValidUntil"] !== undefined) {
    contents.ValidUntil = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["ValidUntil"]));
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
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
  if (output["ServerCertificateMetadata"] !== undefined) {
    contents.ServerCertificateMetadata = de_ServerCertificateMetadata(output["ServerCertificateMetadata"], context);
  }
  if (output["CertificateBody"] !== undefined) {
    contents.CertificateBody = __expectString(output["CertificateBody"]);
  }
  if (output["CertificateChain"] !== undefined) {
    contents.CertificateChain = __expectString(output["CertificateChain"]);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryServerCertificateMetadata
 */
const de_ServerCertificateMetadata = (output: any, context: __SerdeContext): ServerCertificateMetadata => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["ServerCertificateName"] !== undefined) {
    contents.ServerCertificateName = __expectString(output["ServerCertificateName"]);
  }
  if (output["ServerCertificateId"] !== undefined) {
    contents.ServerCertificateId = __expectString(output["ServerCertificateId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UploadDate"]));
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Expiration"]));
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
 * deserializeAws_queryServiceFailureException
 */
const de_ServiceFailureException = (output: any, context: __SerdeContext): ServiceFailureException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryServiceLastAccessed
 */
const de_ServiceLastAccessed = (output: any, context: __SerdeContext): ServiceLastAccessed => {
  const contents: any = {};
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = __expectString(output["ServiceName"]);
  }
  if (output["LastAuthenticated"] !== undefined) {
    contents.LastAuthenticated = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastAuthenticated"]));
  }
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = __expectString(output["ServiceNamespace"]);
  }
  if (output["LastAuthenticatedEntity"] !== undefined) {
    contents.LastAuthenticatedEntity = __expectString(output["LastAuthenticatedEntity"]);
  }
  if (output["LastAuthenticatedRegion"] !== undefined) {
    contents.LastAuthenticatedRegion = __expectString(output["LastAuthenticatedRegion"]);
  }
  if (output["TotalAuthenticatedEntities"] !== undefined) {
    contents.TotalAuthenticatedEntities = __strictParseInt32(output["TotalAuthenticatedEntities"]) as number;
  }
  if (output.TrackedActionsLastAccessed === "") {
    contents.TrackedActionsLastAccessed = [];
  } else if (
    output["TrackedActionsLastAccessed"] !== undefined &&
    output["TrackedActionsLastAccessed"]["member"] !== undefined
  ) {
    contents.TrackedActionsLastAccessed = de_TrackedActionsLastAccessed(
      __getArrayIfSingleItem(output["TrackedActionsLastAccessed"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryServiceNotSupportedException
 */
const de_ServiceNotSupportedException = (output: any, context: __SerdeContext): ServiceNotSupportedException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = __expectString(output["ServiceName"]);
  }
  if (output["ServiceUserName"] !== undefined) {
    contents.ServiceUserName = __expectString(output["ServiceUserName"]);
  }
  if (output["ServicePassword"] !== undefined) {
    contents.ServicePassword = __expectString(output["ServicePassword"]);
  }
  if (output["ServiceSpecificCredentialId"] !== undefined) {
    contents.ServiceSpecificCredentialId = __expectString(output["ServiceSpecificCredentialId"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["ServiceUserName"] !== undefined) {
    contents.ServiceUserName = __expectString(output["ServiceUserName"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["ServiceSpecificCredentialId"] !== undefined) {
    contents.ServiceSpecificCredentialId = __expectString(output["ServiceSpecificCredentialId"]);
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = __expectString(output["ServiceName"]);
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["CertificateId"] !== undefined) {
    contents.CertificateId = __expectString(output["CertificateId"]);
  }
  if (output["CertificateBody"] !== undefined) {
    contents.CertificateBody = __expectString(output["CertificateBody"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UploadDate"]));
  }
  return contents;
};

/**
 * deserializeAws_querySimulatePolicyResponse
 */
const de_SimulatePolicyResponse = (output: any, context: __SerdeContext): SimulatePolicyResponse => {
  const contents: any = {};
  if (output.EvaluationResults === "") {
    contents.EvaluationResults = [];
  } else if (output["EvaluationResults"] !== undefined && output["EvaluationResults"]["member"] !== undefined) {
    contents.EvaluationResults = de_EvaluationResultsListType(
      __getArrayIfSingleItem(output["EvaluationResults"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = __parseBoolean(output["IsTruncated"]);
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = __expectString(output["Marker"]);
  }
  return contents;
};

/**
 * deserializeAws_querySSHPublicKey
 */
const de_SSHPublicKey = (output: any, context: __SerdeContext): SSHPublicKey => {
  const contents: any = {};
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["SSHPublicKeyId"] !== undefined) {
    contents.SSHPublicKeyId = __expectString(output["SSHPublicKeyId"]);
  }
  if (output["Fingerprint"] !== undefined) {
    contents.Fingerprint = __expectString(output["Fingerprint"]);
  }
  if (output["SSHPublicKeyBody"] !== undefined) {
    contents.SSHPublicKeyBody = __expectString(output["SSHPublicKeyBody"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UploadDate"]));
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
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["SSHPublicKeyId"] !== undefined) {
    contents.SSHPublicKeyId = __expectString(output["SSHPublicKeyId"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = __expectString(output["Status"]);
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["UploadDate"]));
  }
  return contents;
};

/**
 * deserializeAws_queryStatement
 */
const de_Statement = (output: any, context: __SerdeContext): Statement => {
  const contents: any = {};
  if (output["SourcePolicyId"] !== undefined) {
    contents.SourcePolicyId = __expectString(output["SourcePolicyId"]);
  }
  if (output["SourcePolicyType"] !== undefined) {
    contents.SourcePolicyType = __expectString(output["SourcePolicyType"]);
  }
  if (output["StartPosition"] !== undefined) {
    contents.StartPosition = de_Position(output["StartPosition"], context);
  }
  if (output["EndPosition"] !== undefined) {
    contents.EndPosition = de_Position(output["EndPosition"], context);
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
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output["ActionName"] !== undefined) {
    contents.ActionName = __expectString(output["ActionName"]);
  }
  if (output["LastAccessedEntity"] !== undefined) {
    contents.LastAccessedEntity = __expectString(output["LastAccessedEntity"]);
  }
  if (output["LastAccessedTime"] !== undefined) {
    contents.LastAccessedTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastAccessedTime"]));
  }
  if (output["LastAccessedRegion"] !== undefined) {
    contents.LastAccessedRegion = __expectString(output["LastAccessedRegion"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUpdateRoleDescriptionResponse
 */
const de_UpdateRoleDescriptionResponse = (output: any, context: __SerdeContext): UpdateRoleDescriptionResponse => {
  const contents: any = {};
  if (output["Role"] !== undefined) {
    contents.Role = de_Role(output["Role"], context);
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
  if (output["SAMLProviderArn"] !== undefined) {
    contents.SAMLProviderArn = __expectString(output["SAMLProviderArn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryUploadServerCertificateResponse
 */
const de_UploadServerCertificateResponse = (output: any, context: __SerdeContext): UploadServerCertificateResponse => {
  const contents: any = {};
  if (output["ServerCertificateMetadata"] !== undefined) {
    contents.ServerCertificateMetadata = de_ServerCertificateMetadata(output["ServerCertificateMetadata"], context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  if (output["Certificate"] !== undefined) {
    contents.Certificate = de_SigningCertificate(output["Certificate"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUploadSSHPublicKeyResponse
 */
const de_UploadSSHPublicKeyResponse = (output: any, context: __SerdeContext): UploadSSHPublicKeyResponse => {
  const contents: any = {};
  if (output["SSHPublicKey"] !== undefined) {
    contents.SSHPublicKey = de_SSHPublicKey(output["SSHPublicKey"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryUser
 */
const de_User = (output: any, context: __SerdeContext): User => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = __expectString(output["UserId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output["PasswordLastUsed"] !== undefined) {
    contents.PasswordLastUsed = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["PasswordLastUsed"]));
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = de_AttachedPermissionsBoundary(output["PermissionsBoundary"], context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryUserDetail
 */
const de_UserDetail = (output: any, context: __SerdeContext): UserDetail => {
  const contents: any = {};
  if (output["Path"] !== undefined) {
    contents.Path = __expectString(output["Path"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = __expectString(output["UserName"]);
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = __expectString(output["UserId"]);
  }
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreateDate"]));
  }
  if (output.UserPolicyList === "") {
    contents.UserPolicyList = [];
  } else if (output["UserPolicyList"] !== undefined && output["UserPolicyList"]["member"] !== undefined) {
    contents.UserPolicyList = de_policyDetailListType(
      __getArrayIfSingleItem(output["UserPolicyList"]["member"]),
      context
    );
  }
  if (output.GroupList === "") {
    contents.GroupList = [];
  } else if (output["GroupList"] !== undefined && output["GroupList"]["member"] !== undefined) {
    contents.GroupList = de_groupNameListType(__getArrayIfSingleItem(output["GroupList"]["member"]), context);
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  } else if (
    output["AttachedManagedPolicies"] !== undefined &&
    output["AttachedManagedPolicies"]["member"] !== undefined
  ) {
    contents.AttachedManagedPolicies = de_attachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = de_AttachedPermissionsBoundary(output["PermissionsBoundary"], context);
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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
  if (output["SerialNumber"] !== undefined) {
    contents.SerialNumber = __expectString(output["SerialNumber"]);
  }
  if (output["Base32StringSeed"] !== undefined) {
    contents.Base32StringSeed = context.base64Decoder(output["Base32StringSeed"]);
  }
  if (output["QRCodePNG"] !== undefined) {
    contents.QRCodePNG = context.base64Decoder(output["QRCodePNG"]);
  }
  if (output["User"] !== undefined) {
    contents.User = de_User(output["User"], context);
  }
  if (output["EnableDate"] !== undefined) {
    contents.EnableDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EnableDate"]));
  }
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_tagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

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
