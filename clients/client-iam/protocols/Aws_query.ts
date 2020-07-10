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
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput } from "../commands/DeleteSSHPublicKeyCommand";
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
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput } from "../commands/GetSSHPublicKeyCommand";
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
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput } from "../commands/ListMFADevicesCommand";
import {
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
} from "../commands/ListOpenIDConnectProvidersCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import {
  ListPoliciesGrantingServiceAccessCommandInput,
  ListPoliciesGrantingServiceAccessCommandOutput,
} from "../commands/ListPoliciesGrantingServiceAccessCommand";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput } from "../commands/ListPolicyVersionsCommand";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput } from "../commands/ListRolePoliciesCommand";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput } from "../commands/ListRoleTagsCommand";
import { ListRolesCommandInput, ListRolesCommandOutput } from "../commands/ListRolesCommand";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput } from "../commands/ListSAMLProvidersCommand";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput } from "../commands/ListSSHPublicKeysCommand";
import {
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import {
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
} from "../commands/ListServiceSpecificCredentialsCommand";
import {
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
} from "../commands/ListSigningCertificatesCommand";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput } from "../commands/ListUserPoliciesCommand";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput } from "../commands/ListUserTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
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
import { TagRoleCommandInput, TagRoleCommandOutput } from "../commands/TagRoleCommand";
import { TagUserCommandInput, TagUserCommandOutput } from "../commands/TagUserCommand";
import { UntagRoleCommandInput, UntagRoleCommandOutput } from "../commands/UntagRoleCommand";
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
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput } from "../commands/UpdateSSHPublicKeyCommand";
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
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput } from "../commands/UploadSSHPublicKeyCommand";
import {
  UploadServerCertificateCommandInput,
  UploadServerCertificateCommandOutput,
} from "../commands/UploadServerCertificateCommand";
import {
  UploadSigningCertificateCommandInput,
  UploadSigningCertificateCommandOutput,
} from "../commands/UploadSigningCertificateCommand";
import {
  AccessDetail,
  AccessKey,
  AccessKeyLastUsed,
  AccessKeyMetadata,
  AddClientIDToOpenIDConnectProviderRequest,
  AddRoleToInstanceProfileRequest,
  AddUserToGroupRequest,
  AttachGroupPolicyRequest,
  AttachRolePolicyRequest,
  AttachUserPolicyRequest,
  AttachedPermissionsBoundary,
  AttachedPolicy,
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
  DeleteSSHPublicKeyRequest,
  DeleteServerCertificateRequest,
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse,
  DeleteServiceSpecificCredentialRequest,
  DeleteSigningCertificateRequest,
  DeleteUserPermissionsBoundaryRequest,
  DeleteUserPolicyRequest,
  DeleteUserRequest,
  DeleteVirtualMFADeviceRequest,
  DeletionTaskFailureReasonType,
  DetachGroupPolicyRequest,
  DetachRolePolicyRequest,
  DetachUserPolicyRequest,
  DuplicateCertificateException,
  DuplicateSSHPublicKeyException,
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
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyResponse,
  GetServerCertificateRequest,
  GetServerCertificateResponse,
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetUserPolicyRequest,
  GetUserPolicyResponse,
  GetUserRequest,
  GetUserResponse,
  Group,
  GroupDetail,
  InstanceProfile,
  InvalidAuthenticationCodeException,
  InvalidCertificateException,
  InvalidInputException,
  InvalidPublicKeyException,
  InvalidUserTypeException,
  KeyPairMismatchException,
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
  ListMFADevicesRequest,
  ListMFADevicesResponse,
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
  ListPoliciesGrantingServiceAccessEntry,
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListRolePoliciesRequest,
  ListRolePoliciesResponse,
  ListRoleTagsRequest,
  ListRoleTagsResponse,
  ListRolesRequest,
  ListRolesResponse,
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysResponse,
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsResponse,
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
  ListUserTagsRequest,
  ListUserTagsResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
  LoginProfile,
  MFADevice,
  MalformedCertificateException,
  MalformedPolicyDocumentException,
  ManagedPolicyDetail,
  NoSuchEntityException,
  OpenIDConnectProviderListEntry,
  OrganizationsDecisionDetail,
  PasswordPolicy,
  PasswordPolicyViolationException,
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
  SSHPublicKey,
  SSHPublicKeyMetadata,
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
  Statement,
  Tag,
  TagRoleRequest,
  TagUserRequest,
  UnmodifiableEntityException,
  UnrecognizedPublicKeyEncodingException,
  UntagRoleRequest,
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
  UpdateSSHPublicKeyRequest,
  UpdateServerCertificateRequest,
  UpdateServiceSpecificCredentialRequest,
  UpdateSigningCertificateRequest,
  UpdateUserRequest,
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyResponse,
  UploadServerCertificateRequest,
  UploadServerCertificateResponse,
  UploadSigningCertificateRequest,
  UploadSigningCertificateResponse,
  User,
  UserDetail,
  VirtualMFADevice,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryAddClientIDToOpenIDConnectProviderCommand = async (
  input: AddClientIDToOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddClientIDToOpenIDConnectProviderRequest(input, context),
    Action: "AddClientIDToOpenIDConnectProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAddRoleToInstanceProfileCommand = async (
  input: AddRoleToInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddRoleToInstanceProfileRequest(input, context),
    Action: "AddRoleToInstanceProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAddUserToGroupCommand = async (
  input: AddUserToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAddUserToGroupRequest(input, context),
    Action: "AddUserToGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachGroupPolicyCommand = async (
  input: AttachGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachGroupPolicyRequest(input, context),
    Action: "AttachGroupPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachRolePolicyCommand = async (
  input: AttachRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachRolePolicyRequest(input, context),
    Action: "AttachRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryAttachUserPolicyCommand = async (
  input: AttachUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryAttachUserPolicyRequest(input, context),
    Action: "AttachUserPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryChangePasswordCommand = async (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryChangePasswordRequest(input, context),
    Action: "ChangePassword",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAccessKeyCommand = async (
  input: CreateAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAccessKeyRequest(input, context),
    Action: "CreateAccessKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateAccountAliasCommand = async (
  input: CreateAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateAccountAliasRequest(input, context),
    Action: "CreateAccountAlias",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateGroupRequest(input, context),
    Action: "CreateGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateInstanceProfileCommand = async (
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateInstanceProfileRequest(input, context),
    Action: "CreateInstanceProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateLoginProfileCommand = async (
  input: CreateLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateLoginProfileRequest(input, context),
    Action: "CreateLoginProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateOpenIDConnectProviderCommand = async (
  input: CreateOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateOpenIDConnectProviderRequest(input, context),
    Action: "CreateOpenIDConnectProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePolicyRequest(input, context),
    Action: "CreatePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreatePolicyVersionCommand = async (
  input: CreatePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreatePolicyVersionRequest(input, context),
    Action: "CreatePolicyVersion",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateRoleCommand = async (
  input: CreateRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateRoleRequest(input, context),
    Action: "CreateRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateSAMLProviderCommand = async (
  input: CreateSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateSAMLProviderRequest(input, context),
    Action: "CreateSAMLProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateServiceLinkedRoleCommand = async (
  input: CreateServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateServiceLinkedRoleRequest(input, context),
    Action: "CreateServiceLinkedRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateServiceSpecificCredentialCommand = async (
  input: CreateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateServiceSpecificCredentialRequest(input, context),
    Action: "CreateServiceSpecificCredential",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateUserRequest(input, context),
    Action: "CreateUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryCreateVirtualMFADeviceCommand = async (
  input: CreateVirtualMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryCreateVirtualMFADeviceRequest(input, context),
    Action: "CreateVirtualMFADevice",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeactivateMFADeviceCommand = async (
  input: DeactivateMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeactivateMFADeviceRequest(input, context),
    Action: "DeactivateMFADevice",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAccessKeyCommand = async (
  input: DeleteAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAccessKeyRequest(input, context),
    Action: "DeleteAccessKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAccountAliasCommand = async (
  input: DeleteAccountAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAccountAliasRequest(input, context),
    Action: "DeleteAccountAlias",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAccountPasswordPolicyCommand = async (
  input: DeleteAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "DeleteAccountPasswordPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteGroupRequest(input, context),
    Action: "DeleteGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteGroupPolicyCommand = async (
  input: DeleteGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteGroupPolicyRequest(input, context),
    Action: "DeleteGroupPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteInstanceProfileCommand = async (
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteInstanceProfileRequest(input, context),
    Action: "DeleteInstanceProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteLoginProfileCommand = async (
  input: DeleteLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteLoginProfileRequest(input, context),
    Action: "DeleteLoginProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteOpenIDConnectProviderCommand = async (
  input: DeleteOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteOpenIDConnectProviderRequest(input, context),
    Action: "DeleteOpenIDConnectProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePolicyRequest(input, context),
    Action: "DeletePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeletePolicyVersionCommand = async (
  input: DeletePolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeletePolicyVersionRequest(input, context),
    Action: "DeletePolicyVersion",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteRoleCommand = async (
  input: DeleteRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteRoleRequest(input, context),
    Action: "DeleteRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteRolePermissionsBoundaryCommand = async (
  input: DeleteRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteRolePermissionsBoundaryRequest(input, context),
    Action: "DeleteRolePermissionsBoundary",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteRolePolicyCommand = async (
  input: DeleteRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteRolePolicyRequest(input, context),
    Action: "DeleteRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSAMLProviderCommand = async (
  input: DeleteSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSAMLProviderRequest(input, context),
    Action: "DeleteSAMLProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteServerCertificateCommand = async (
  input: DeleteServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteServerCertificateRequest(input, context),
    Action: "DeleteServerCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteServiceLinkedRoleCommand = async (
  input: DeleteServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteServiceLinkedRoleRequest(input, context),
    Action: "DeleteServiceLinkedRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteServiceSpecificCredentialCommand = async (
  input: DeleteServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteServiceSpecificCredentialRequest(input, context),
    Action: "DeleteServiceSpecificCredential",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSigningCertificateCommand = async (
  input: DeleteSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSigningCertificateRequest(input, context),
    Action: "DeleteSigningCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteSSHPublicKeyCommand = async (
  input: DeleteSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteSSHPublicKeyRequest(input, context),
    Action: "DeleteSSHPublicKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUserRequest(input, context),
    Action: "DeleteUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUserPermissionsBoundaryCommand = async (
  input: DeleteUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUserPermissionsBoundaryRequest(input, context),
    Action: "DeleteUserPermissionsBoundary",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteUserPolicyCommand = async (
  input: DeleteUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteUserPolicyRequest(input, context),
    Action: "DeleteUserPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteVirtualMFADeviceCommand = async (
  input: DeleteVirtualMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteVirtualMFADeviceRequest(input, context),
    Action: "DeleteVirtualMFADevice",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachGroupPolicyCommand = async (
  input: DetachGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachGroupPolicyRequest(input, context),
    Action: "DetachGroupPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachRolePolicyCommand = async (
  input: DetachRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachRolePolicyRequest(input, context),
    Action: "DetachRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDetachUserPolicyCommand = async (
  input: DetachUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDetachUserPolicyRequest(input, context),
    Action: "DetachUserPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableMFADeviceCommand = async (
  input: EnableMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableMFADeviceRequest(input, context),
    Action: "EnableMFADevice",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGenerateCredentialReportCommand = async (
  input: GenerateCredentialReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GenerateCredentialReport",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGenerateOrganizationsAccessReportCommand = async (
  input: GenerateOrganizationsAccessReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGenerateOrganizationsAccessReportRequest(input, context),
    Action: "GenerateOrganizationsAccessReport",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGenerateServiceLastAccessedDetailsCommand = async (
  input: GenerateServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGenerateServiceLastAccessedDetailsRequest(input, context),
    Action: "GenerateServiceLastAccessedDetails",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccessKeyLastUsedCommand = async (
  input: GetAccessKeyLastUsedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetAccessKeyLastUsedRequest(input, context),
    Action: "GetAccessKeyLastUsed",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccountAuthorizationDetailsCommand = async (
  input: GetAccountAuthorizationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetAccountAuthorizationDetailsRequest(input, context),
    Action: "GetAccountAuthorizationDetails",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccountPasswordPolicyCommand = async (
  input: GetAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetAccountPasswordPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetAccountSummaryCommand = async (
  input: GetAccountSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetAccountSummary",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetContextKeysForCustomPolicyCommand = async (
  input: GetContextKeysForCustomPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetContextKeysForCustomPolicyRequest(input, context),
    Action: "GetContextKeysForCustomPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetContextKeysForPrincipalPolicyCommand = async (
  input: GetContextKeysForPrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetContextKeysForPrincipalPolicyRequest(input, context),
    Action: "GetContextKeysForPrincipalPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetCredentialReportCommand = async (
  input: GetCredentialReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const body = buildFormUrlencodedString({
    Action: "GetCredentialReport",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetGroupRequest(input, context),
    Action: "GetGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetGroupPolicyCommand = async (
  input: GetGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetGroupPolicyRequest(input, context),
    Action: "GetGroupPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetInstanceProfileCommand = async (
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetInstanceProfileRequest(input, context),
    Action: "GetInstanceProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetLoginProfileCommand = async (
  input: GetLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetLoginProfileRequest(input, context),
    Action: "GetLoginProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetOpenIDConnectProviderCommand = async (
  input: GetOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetOpenIDConnectProviderRequest(input, context),
    Action: "GetOpenIDConnectProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetOrganizationsAccessReportCommand = async (
  input: GetOrganizationsAccessReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetOrganizationsAccessReportRequest(input, context),
    Action: "GetOrganizationsAccessReport",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPolicyRequest(input, context),
    Action: "GetPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetPolicyVersionCommand = async (
  input: GetPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetPolicyVersionRequest(input, context),
    Action: "GetPolicyVersion",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetRoleCommand = async (
  input: GetRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetRoleRequest(input, context),
    Action: "GetRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetRolePolicyCommand = async (
  input: GetRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetRolePolicyRequest(input, context),
    Action: "GetRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSAMLProviderCommand = async (
  input: GetSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSAMLProviderRequest(input, context),
    Action: "GetSAMLProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetServerCertificateCommand = async (
  input: GetServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetServerCertificateRequest(input, context),
    Action: "GetServerCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetServiceLastAccessedDetailsCommand = async (
  input: GetServiceLastAccessedDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetServiceLastAccessedDetailsRequest(input, context),
    Action: "GetServiceLastAccessedDetails",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = async (
  input: GetServiceLastAccessedDetailsWithEntitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest(input, context),
    Action: "GetServiceLastAccessedDetailsWithEntities",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = async (
  input: GetServiceLinkedRoleDeletionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest(input, context),
    Action: "GetServiceLinkedRoleDeletionStatus",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetSSHPublicKeyCommand = async (
  input: GetSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetSSHPublicKeyRequest(input, context),
    Action: "GetSSHPublicKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetUserRequest(input, context),
    Action: "GetUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetUserPolicyCommand = async (
  input: GetUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetUserPolicyRequest(input, context),
    Action: "GetUserPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAccessKeysCommand = async (
  input: ListAccessKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAccessKeysRequest(input, context),
    Action: "ListAccessKeys",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAccountAliasesCommand = async (
  input: ListAccountAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAccountAliasesRequest(input, context),
    Action: "ListAccountAliases",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAttachedGroupPoliciesCommand = async (
  input: ListAttachedGroupPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAttachedGroupPoliciesRequest(input, context),
    Action: "ListAttachedGroupPolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAttachedRolePoliciesCommand = async (
  input: ListAttachedRolePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAttachedRolePoliciesRequest(input, context),
    Action: "ListAttachedRolePolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListAttachedUserPoliciesCommand = async (
  input: ListAttachedUserPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListAttachedUserPoliciesRequest(input, context),
    Action: "ListAttachedUserPolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListEntitiesForPolicyCommand = async (
  input: ListEntitiesForPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListEntitiesForPolicyRequest(input, context),
    Action: "ListEntitiesForPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListGroupPoliciesCommand = async (
  input: ListGroupPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListGroupPoliciesRequest(input, context),
    Action: "ListGroupPolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListGroupsRequest(input, context),
    Action: "ListGroups",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListGroupsForUserCommand = async (
  input: ListGroupsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListGroupsForUserRequest(input, context),
    Action: "ListGroupsForUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListInstanceProfilesCommand = async (
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListInstanceProfilesRequest(input, context),
    Action: "ListInstanceProfiles",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListInstanceProfilesForRoleCommand = async (
  input: ListInstanceProfilesForRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListInstanceProfilesForRoleRequest(input, context),
    Action: "ListInstanceProfilesForRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListMFADevicesCommand = async (
  input: ListMFADevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListMFADevicesRequest(input, context),
    Action: "ListMFADevices",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListOpenIDConnectProvidersCommand = async (
  input: ListOpenIDConnectProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListOpenIDConnectProvidersRequest(input, context),
    Action: "ListOpenIDConnectProviders",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPoliciesRequest(input, context),
    Action: "ListPolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPoliciesGrantingServiceAccessCommand = async (
  input: ListPoliciesGrantingServiceAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPoliciesGrantingServiceAccessRequest(input, context),
    Action: "ListPoliciesGrantingServiceAccess",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListPolicyVersionsCommand = async (
  input: ListPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListPolicyVersionsRequest(input, context),
    Action: "ListPolicyVersions",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListRolePoliciesCommand = async (
  input: ListRolePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListRolePoliciesRequest(input, context),
    Action: "ListRolePolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListRolesCommand = async (
  input: ListRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListRolesRequest(input, context),
    Action: "ListRoles",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListRoleTagsCommand = async (
  input: ListRoleTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListRoleTagsRequest(input, context),
    Action: "ListRoleTags",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSAMLProvidersCommand = async (
  input: ListSAMLProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSAMLProvidersRequest(input, context),
    Action: "ListSAMLProviders",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListServerCertificatesCommand = async (
  input: ListServerCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListServerCertificatesRequest(input, context),
    Action: "ListServerCertificates",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListServiceSpecificCredentialsCommand = async (
  input: ListServiceSpecificCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListServiceSpecificCredentialsRequest(input, context),
    Action: "ListServiceSpecificCredentials",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSigningCertificatesCommand = async (
  input: ListSigningCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSigningCertificatesRequest(input, context),
    Action: "ListSigningCertificates",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListSSHPublicKeysCommand = async (
  input: ListSSHPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListSSHPublicKeysRequest(input, context),
    Action: "ListSSHPublicKeys",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListUserPoliciesCommand = async (
  input: ListUserPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListUserPoliciesRequest(input, context),
    Action: "ListUserPolicies",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListUsersRequest(input, context),
    Action: "ListUsers",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListUserTagsCommand = async (
  input: ListUserTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListUserTagsRequest(input, context),
    Action: "ListUserTags",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListVirtualMFADevicesCommand = async (
  input: ListVirtualMFADevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListVirtualMFADevicesRequest(input, context),
    Action: "ListVirtualMFADevices",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutGroupPolicyCommand = async (
  input: PutGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutGroupPolicyRequest(input, context),
    Action: "PutGroupPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutRolePermissionsBoundaryCommand = async (
  input: PutRolePermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutRolePermissionsBoundaryRequest(input, context),
    Action: "PutRolePermissionsBoundary",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutRolePolicyCommand = async (
  input: PutRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutRolePolicyRequest(input, context),
    Action: "PutRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutUserPermissionsBoundaryCommand = async (
  input: PutUserPermissionsBoundaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutUserPermissionsBoundaryRequest(input, context),
    Action: "PutUserPermissionsBoundary",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutUserPolicyCommand = async (
  input: PutUserPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutUserPolicyRequest(input, context),
    Action: "PutUserPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = async (
  input: RemoveClientIDFromOpenIDConnectProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest(input, context),
    Action: "RemoveClientIDFromOpenIDConnectProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveRoleFromInstanceProfileCommand = async (
  input: RemoveRoleFromInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveRoleFromInstanceProfileRequest(input, context),
    Action: "RemoveRoleFromInstanceProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryRemoveUserFromGroupCommand = async (
  input: RemoveUserFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryRemoveUserFromGroupRequest(input, context),
    Action: "RemoveUserFromGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResetServiceSpecificCredentialCommand = async (
  input: ResetServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResetServiceSpecificCredentialRequest(input, context),
    Action: "ResetServiceSpecificCredential",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryResyncMFADeviceCommand = async (
  input: ResyncMFADeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryResyncMFADeviceRequest(input, context),
    Action: "ResyncMFADevice",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetDefaultPolicyVersionCommand = async (
  input: SetDefaultPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetDefaultPolicyVersionRequest(input, context),
    Action: "SetDefaultPolicyVersion",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetSecurityTokenServicePreferencesCommand = async (
  input: SetSecurityTokenServicePreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetSecurityTokenServicePreferencesRequest(input, context),
    Action: "SetSecurityTokenServicePreferences",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySimulateCustomPolicyCommand = async (
  input: SimulateCustomPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySimulateCustomPolicyRequest(input, context),
    Action: "SimulateCustomPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySimulatePrincipalPolicyCommand = async (
  input: SimulatePrincipalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySimulatePrincipalPolicyRequest(input, context),
    Action: "SimulatePrincipalPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagRoleCommand = async (
  input: TagRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagRoleRequest(input, context),
    Action: "TagRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagUserCommand = async (
  input: TagUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagUserRequest(input, context),
    Action: "TagUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagRoleCommand = async (
  input: UntagRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagRoleRequest(input, context),
    Action: "UntagRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagUserCommand = async (
  input: UntagUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagUserRequest(input, context),
    Action: "UntagUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAccessKeyCommand = async (
  input: UpdateAccessKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAccessKeyRequest(input, context),
    Action: "UpdateAccessKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAccountPasswordPolicyCommand = async (
  input: UpdateAccountPasswordPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAccountPasswordPolicyRequest(input, context),
    Action: "UpdateAccountPasswordPolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateAssumeRolePolicyCommand = async (
  input: UpdateAssumeRolePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateAssumeRolePolicyRequest(input, context),
    Action: "UpdateAssumeRolePolicy",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateGroupRequest(input, context),
    Action: "UpdateGroup",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateLoginProfileCommand = async (
  input: UpdateLoginProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateLoginProfileRequest(input, context),
    Action: "UpdateLoginProfile",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = async (
  input: UpdateOpenIDConnectProviderThumbprintCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest(input, context),
    Action: "UpdateOpenIDConnectProviderThumbprint",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateRoleCommand = async (
  input: UpdateRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateRoleRequest(input, context),
    Action: "UpdateRole",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateRoleDescriptionCommand = async (
  input: UpdateRoleDescriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateRoleDescriptionRequest(input, context),
    Action: "UpdateRoleDescription",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateSAMLProviderCommand = async (
  input: UpdateSAMLProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateSAMLProviderRequest(input, context),
    Action: "UpdateSAMLProvider",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateServerCertificateCommand = async (
  input: UpdateServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateServerCertificateRequest(input, context),
    Action: "UpdateServerCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateServiceSpecificCredentialCommand = async (
  input: UpdateServiceSpecificCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateServiceSpecificCredentialRequest(input, context),
    Action: "UpdateServiceSpecificCredential",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateSigningCertificateCommand = async (
  input: UpdateSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateSigningCertificateRequest(input, context),
    Action: "UpdateSigningCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateSSHPublicKeyCommand = async (
  input: UpdateSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateSSHPublicKeyRequest(input, context),
    Action: "UpdateSSHPublicKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUpdateUserRequest(input, context),
    Action: "UpdateUser",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUploadServerCertificateCommand = async (
  input: UploadServerCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUploadServerCertificateRequest(input, context),
    Action: "UploadServerCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUploadSigningCertificateCommand = async (
  input: UploadSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUploadSigningCertificateRequest(input, context),
    Action: "UploadSigningCertificate",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUploadSSHPublicKeyCommand = async (
  input: UploadSSHPublicKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUploadSSHPublicKeyRequest(input, context),
    Action: "UploadSSHPublicKey",
    Version: "2010-05-08",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryAddClientIDToOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddClientIDToOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddClientIDToOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAddRoleToInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToInstanceProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddRoleToInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddRoleToInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddRoleToInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddRoleToInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAddUserToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUserToGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAddUserToGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AddUserToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAddUserToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddUserToGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAttachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotAttachableException":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      response = {
        ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAttachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotAttachableException":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      response = {
        ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryAttachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachUserPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryAttachUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AttachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryAttachUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AttachUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotAttachableException":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      response = {
        ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryChangePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryChangePasswordCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ChangePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryChangePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidUserTypeException":
    case "com.amazonaws.iam#InvalidUserTypeException":
      response = {
        ...(await deserializeAws_queryInvalidUserTypeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PasswordPolicyViolationException":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      response = {
        ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateAccessKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateAccessKeyResponse(data.CreateAccessKeyResult, context);
  const response: CreateAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateAccessKeyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAliasCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateAccountAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateGroupResponse(data.CreateGroupResult, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGroupResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateInstanceProfileResponse(data.CreateInstanceProfileResult, context);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstanceProfileResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoginProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateLoginProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateLoginProfileResponse(data.CreateLoginProfileResult, context);
  const response: CreateLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLoginProfileResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PasswordPolicyViolationException":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      response = {
        ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateOpenIDConnectProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateOpenIDConnectProviderResponse(data.CreateOpenIDConnectProviderResult, context);
  const response: CreateOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOpenIDConnectProviderResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePolicyResponse(data.CreatePolicyResult, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreatePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreatePolicyVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreatePolicyVersionResponse(data.CreatePolicyVersionResult, context);
  const response: CreatePolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePolicyVersionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreatePolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateRoleResponse(data.CreateRoleResult, context);
  const response: CreateRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateSAMLProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateSAMLProviderResponse(data.CreateSAMLProviderResult, context);
  const response: CreateSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSAMLProviderResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateServiceLinkedRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateServiceLinkedRoleResponse(data.CreateServiceLinkedRoleResult, context);
  const response: CreateServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServiceLinkedRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateServiceSpecificCredentialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateServiceSpecificCredentialResponse(
    data.CreateServiceSpecificCredentialResult,
    context
  );
  const response: CreateServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateServiceSpecificCredentialResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotSupportedException":
    case "com.amazonaws.iam#ServiceNotSupportedException":
      response = {
        ...(await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateUserResponse(data.CreateUserResult, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryCreateVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryCreateVirtualMFADeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryCreateVirtualMFADeviceResponse(data.CreateVirtualMFADeviceResult, context);
  const response: CreateVirtualMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualMFADeviceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryCreateVirtualMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeactivateMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMFADeviceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeactivateMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeactivateMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAccessKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAccountAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAccountAliasCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAccountAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAccountPasswordPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoginProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteLoginProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeletePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeletePolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeletePolicyVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeletePolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteRolePermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteRolePermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSAMLProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteSAMLProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLinkedRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteServiceLinkedRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteServiceLinkedRoleResponse(data.DeleteServiceLinkedRoleResult, context);
  const response: DeleteServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServiceLinkedRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteServiceSpecificCredentialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSigningCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteSigningCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteSSHPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteUserPermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUserPermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteVirtualMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualMFADeviceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteVirtualMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVirtualMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteVirtualMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeleteConflictException":
    case "com.amazonaws.iam#DeleteConflictException":
      response = {
        ...(await deserializeAws_queryDeleteConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachGroupPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDetachUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachUserPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDetachUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DetachUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDetachUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetachUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEnableMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMFADeviceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnableMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidAuthenticationCodeException":
    case "com.amazonaws.iam#InvalidAuthenticationCodeException":
      response = {
        ...(await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGenerateCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCredentialReportCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGenerateCredentialReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGenerateCredentialReportResponse(data.GenerateCredentialReportResult, context);
  const response: GenerateCredentialReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateCredentialReportResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGenerateCredentialReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCredentialReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGenerateOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGenerateOrganizationsAccessReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGenerateOrganizationsAccessReportResponse(
    data.GenerateOrganizationsAccessReportResult,
    context
  );
  const response: GenerateOrganizationsAccessReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateOrganizationsAccessReportResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGenerateOrganizationsAccessReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ReportGenerationLimitExceededException":
    case "com.amazonaws.iam#ReportGenerationLimitExceededException":
      response = {
        ...(await deserializeAws_queryReportGenerationLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGenerateServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGenerateServiceLastAccessedDetailsResponse(
    data.GenerateServiceLastAccessedDetailsResult,
    context
  );
  const response: GenerateServiceLastAccessedDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateServiceLastAccessedDetailsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGenerateServiceLastAccessedDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccessKeyLastUsedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyLastUsedCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetAccessKeyLastUsedCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccessKeyLastUsedResponse(data.GetAccessKeyLastUsedResult, context);
  const response: GetAccessKeyLastUsedCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccessKeyLastUsedResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccessKeyLastUsedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessKeyLastUsedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccountAuthorizationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetAccountAuthorizationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccountAuthorizationDetailsResponse(
    data.GetAccountAuthorizationDetailsResult,
    context
  );
  const response: GetAccountAuthorizationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountAuthorizationDetailsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccountAuthorizationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetAccountPasswordPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccountPasswordPolicyResponse(data.GetAccountPasswordPolicyResult, context);
  const response: GetAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountPasswordPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetAccountSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSummaryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetAccountSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetAccountSummaryResponse(data.GetAccountSummaryResult, context);
  const response: GetAccountSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountSummaryResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetAccountSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetContextKeysForCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetContextKeysForCustomPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForCustomPolicyResult, context);
  const response: GetContextKeysForCustomPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContextKeysForPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetContextKeysForCustomPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetContextKeysForPrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetContextKeysForPolicyResponse(data.GetContextKeysForPrincipalPolicyResult, context);
  const response: GetContextKeysForPrincipalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContextKeysForPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetContextKeysForPrincipalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetCredentialReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialReportCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetCredentialReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetCredentialReportResponse(data.GetCredentialReportResult, context);
  const response: GetCredentialReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCredentialReportResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetCredentialReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CredentialReportExpiredException":
    case "com.amazonaws.iam#CredentialReportExpiredException":
      response = {
        ...(await deserializeAws_queryCredentialReportExpiredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CredentialReportNotPresentException":
    case "com.amazonaws.iam#CredentialReportNotPresentException":
      response = {
        ...(await deserializeAws_queryCredentialReportNotPresentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CredentialReportNotReadyException":
    case "com.amazonaws.iam#CredentialReportNotReadyException":
      response = {
        ...(await deserializeAws_queryCredentialReportNotReadyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetGroupResponse(data.GetGroupResult, context);
  const response: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetGroupPolicyResponse(data.GetGroupPolicyResult, context);
  const response: GetGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetInstanceProfileResponse(data.GetInstanceProfileResult, context);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceProfileResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoginProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetLoginProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetLoginProfileResponse(data.GetLoginProfileResult, context);
  const response: GetLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLoginProfileResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetOpenIDConnectProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetOpenIDConnectProviderResponse(data.GetOpenIDConnectProviderResult, context);
  const response: GetOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOpenIDConnectProviderResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetOrganizationsAccessReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationsAccessReportCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetOrganizationsAccessReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetOrganizationsAccessReportResponse(data.GetOrganizationsAccessReportResult, context);
  const response: GetOrganizationsAccessReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOrganizationsAccessReportResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetOrganizationsAccessReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrganizationsAccessReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetPolicyResponse(data.GetPolicyResult, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetPolicyVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetPolicyVersionResponse(data.GetPolicyVersionResult, context);
  const response: GetPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPolicyVersionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetRoleResponse(data.GetRoleResult, context);
  const response: GetRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetRolePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetRolePolicyResponse(data.GetRolePolicyResult, context);
  const response: GetRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRolePolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSAMLProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetSAMLProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSAMLProviderResponse(data.GetSAMLProviderResult, context);
  const response: GetSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSAMLProviderResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetServerCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetServerCertificateResponse(data.GetServerCertificateResult, context);
  const response: GetServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServerCertificateResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetServiceLastAccessedDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetServiceLastAccessedDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetServiceLastAccessedDetailsResponse(
    data.GetServiceLastAccessedDetailsResult,
    context
  );
  const response: GetServiceLastAccessedDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceLastAccessedDetailsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetServiceLastAccessedDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse(
    data.GetServiceLastAccessedDetailsWithEntitiesResult,
    context
  );
  const response: GetServiceLastAccessedDetailsWithEntitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceLastAccessedDetailsWithEntitiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse(
    data.GetServiceLinkedRoleDeletionStatusResult,
    context
  );
  const response: GetServiceLinkedRoleDeletionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceLinkedRoleDeletionStatusResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetSSHPublicKeyResponse(data.GetSSHPublicKeyResult, context);
  const response: GetSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSSHPublicKeyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnrecognizedPublicKeyEncodingException":
    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
      response = {
        ...(await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetUserResponse(data.GetUserResult, context);
  const response: GetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUserResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetUserPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetUserPolicyResponse(data.GetUserPolicyResult, context);
  const response: GetUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUserPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListAccessKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessKeysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAccessKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAccessKeysResponse(data.ListAccessKeysResult, context);
  const response: ListAccessKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccessKeysResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAccessKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListAccountAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAliasesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAccountAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAccountAliasesResponse(data.ListAccountAliasesResult, context);
  const response: ListAccountAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAccountAliasesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAccountAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccountAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListAttachedGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAttachedGroupPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAttachedGroupPoliciesResponse(data.ListAttachedGroupPoliciesResult, context);
  const response: ListAttachedGroupPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttachedGroupPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAttachedGroupPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedGroupPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListAttachedRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAttachedRolePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAttachedRolePoliciesResponse(data.ListAttachedRolePoliciesResult, context);
  const response: ListAttachedRolePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttachedRolePoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAttachedRolePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedRolePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListAttachedUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListAttachedUserPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListAttachedUserPoliciesResponse(data.ListAttachedUserPoliciesResult, context);
  const response: ListAttachedUserPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttachedUserPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListAttachedUserPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachedUserPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListEntitiesForPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesForPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListEntitiesForPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListEntitiesForPolicyResponse(data.ListEntitiesForPolicyResult, context);
  const response: ListEntitiesForPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntitiesForPolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListEntitiesForPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitiesForPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListGroupPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListGroupPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListGroupPoliciesResponse(data.ListGroupPoliciesResult, context);
  const response: ListGroupPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListGroupPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListGroupsResponse(data.ListGroupsResult, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListGroupsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListGroupsForUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListGroupsForUserResponse(data.ListGroupsForUserResult, context);
  const response: ListGroupsForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroupsForUserResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListGroupsForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListInstanceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListInstanceProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListInstanceProfilesResponse(data.ListInstanceProfilesResult, context);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstanceProfilesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListInstanceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListInstanceProfilesForRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListInstanceProfilesForRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListInstanceProfilesForRoleResponse(data.ListInstanceProfilesForRoleResult, context);
  const response: ListInstanceProfilesForRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstanceProfilesForRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListInstanceProfilesForRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesForRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADevicesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListMFADevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListMFADevicesResponse(data.ListMFADevicesResult, context);
  const response: ListMFADevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMFADevicesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListMFADevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMFADevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListOpenIDConnectProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProvidersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListOpenIDConnectProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListOpenIDConnectProvidersResponse(data.ListOpenIDConnectProvidersResult, context);
  const response: ListOpenIDConnectProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOpenIDConnectProvidersResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListOpenIDConnectProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenIDConnectProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPoliciesResponse(data.ListPoliciesResult, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListPoliciesGrantingServiceAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPoliciesGrantingServiceAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPoliciesGrantingServiceAccessResponse(
    data.ListPoliciesGrantingServiceAccessResult,
    context
  );
  const response: ListPoliciesGrantingServiceAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPoliciesGrantingServiceAccessResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPoliciesGrantingServiceAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListPolicyVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListPolicyVersionsResponse(data.ListPolicyVersionsResult, context);
  const response: ListPolicyVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPolicyVersionsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListPolicyVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListRolePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolePoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListRolePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListRolePoliciesResponse(data.ListRolePoliciesResult, context);
  const response: ListRolePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRolePoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListRolePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListRolesResponse(data.ListRolesResult, context);
  const response: ListRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRolesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListRoleTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListRoleTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListRoleTagsResponse(data.ListRoleTagsResult, context);
  const response: ListRoleTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRoleTagsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListRoleTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoleTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListSAMLProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProvidersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListSAMLProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSAMLProvidersResponse(data.ListSAMLProvidersResult, context);
  const response: ListSAMLProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSAMLProvidersResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSAMLProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSAMLProvidersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListServerCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListServerCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListServerCertificatesResponse(data.ListServerCertificatesResult, context);
  const response: ListServerCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServerCertificatesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListServerCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServerCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListServiceSpecificCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceSpecificCredentialsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListServiceSpecificCredentialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListServiceSpecificCredentialsResponse(
    data.ListServiceSpecificCredentialsResult,
    context
  );
  const response: ListServiceSpecificCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServiceSpecificCredentialsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListServiceSpecificCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceSpecificCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotSupportedException":
    case "com.amazonaws.iam#ServiceNotSupportedException":
      response = {
        ...(await deserializeAws_queryServiceNotSupportedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListSigningCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListSigningCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSigningCertificatesResponse(data.ListSigningCertificatesResult, context);
  const response: ListSigningCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSigningCertificatesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSigningCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSigningCertificatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListSSHPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSSHPublicKeysCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListSSHPublicKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListSSHPublicKeysResponse(data.ListSSHPublicKeysResult, context);
  const response: ListSSHPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSSHPublicKeysResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListSSHPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSSHPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListUserPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListUserPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListUserPoliciesResponse(data.ListUserPoliciesResult, context);
  const response: ListUserPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUserPoliciesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListUserPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListUsersResponse(data.ListUsersResult, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListUserTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListUserTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListUserTagsResponse(data.ListUserTagsResult, context);
  const response: ListUserTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUserTagsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListUserTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListVirtualMFADevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMFADevicesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryListVirtualMFADevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListVirtualMFADevicesResponse(data.ListVirtualMFADevicesResult, context);
  const response: ListVirtualMFADevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualMFADevicesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListVirtualMFADevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualMFADevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutRolePermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutRolePermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutRolePermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotAttachableException":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      response = {
        ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutUserPermissionsBoundaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPermissionsBoundaryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutUserPermissionsBoundaryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPermissionsBoundaryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutUserPermissionsBoundaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPermissionsBoundaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyNotAttachableException":
    case "com.amazonaws.iam#PolicyNotAttachableException":
      response = {
        ...(await deserializeAws_queryPolicyNotAttachableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutUserPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutUserPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutUserPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutUserPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutUserPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveClientIDFromOpenIDConnectProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRemoveRoleFromInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveRoleFromInstanceProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveRoleFromInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveRoleFromInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryRemoveUserFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveUserFromGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryRemoveUserFromGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemoveUserFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryRemoveUserFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveUserFromGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryResetServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryResetServiceSpecificCredentialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryResetServiceSpecificCredentialResponse(
    data.ResetServiceSpecificCredentialResult,
    context
  );
  const response: ResetServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResetServiceSpecificCredentialResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResetServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryResyncMFADeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResyncMFADeviceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryResyncMFADeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResyncMFADeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryResyncMFADeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResyncMFADeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidAuthenticationCodeException":
    case "com.amazonaws.iam#InvalidAuthenticationCodeException":
      response = {
        ...(await deserializeAws_queryInvalidAuthenticationCodeExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetDefaultPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetDefaultPolicyVersionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetDefaultPolicyVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetDefaultPolicyVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDefaultPolicyVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetSecurityTokenServicePreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySetSecurityTokenServicePreferencesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetSecurityTokenServicePreferencesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetSecurityTokenServicePreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySimulateCustomPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulateCustomPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySimulateCustomPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySimulatePolicyResponse(data.SimulateCustomPolicyResult, context);
  const response: SimulateCustomPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimulatePolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySimulateCustomPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulateCustomPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyEvaluationException":
    case "com.amazonaws.iam#PolicyEvaluationException":
      response = {
        ...(await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySimulatePrincipalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_querySimulatePrincipalPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_querySimulatePolicyResponse(data.SimulatePrincipalPolicyResult, context);
  const response: SimulatePrincipalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SimulatePolicyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_querySimulatePrincipalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SimulatePrincipalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyEvaluationException":
    case "com.amazonaws.iam#PolicyEvaluationException":
      response = {
        ...(await deserializeAws_queryPolicyEvaluationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTagRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryTagUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUntagRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUntagRoleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUntagUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUntagUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAccessKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateAccessKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccessKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAccessKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccessKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAccountPasswordPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateAccountPasswordPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAccountPasswordPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAccountPasswordPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateAssumeRolePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssumeRolePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateAssumeRolePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAssumeRolePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateAssumeRolePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAssumeRolePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.iam#MalformedPolicyDocumentException":
      response = {
        ...(await deserializeAws_queryMalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateLoginProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoginProfileCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateLoginProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLoginProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateLoginProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLoginProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PasswordPolicyViolationException":
    case "com.amazonaws.iam#PasswordPolicyViolationException":
      response = {
        ...(await deserializeAws_queryPasswordPolicyViolationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateOpenIDConnectProviderThumbprintCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateOpenIDConnectProviderThumbprintCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateRoleResponse(data.UpdateRoleResult, context);
  const response: UpdateRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRoleResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateRoleDescriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleDescriptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateRoleDescriptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateRoleDescriptionResponse(data.UpdateRoleDescriptionResult, context);
  const response: UpdateRoleDescriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRoleDescriptionResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateRoleDescriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRoleDescriptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnmodifiableEntityException":
    case "com.amazonaws.iam#UnmodifiableEntityException":
      response = {
        ...(await deserializeAws_queryUnmodifiableEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateSAMLProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSAMLProviderCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateSAMLProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUpdateSAMLProviderResponse(data.UpdateSAMLProviderResult, context);
  const response: UpdateSAMLProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSAMLProviderResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateSAMLProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSAMLProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.iam#InvalidInputException":
      response = {
        ...(await deserializeAws_queryInvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateServerCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateServiceSpecificCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateServiceSpecificCredentialCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateServiceSpecificCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateServiceSpecificCredentialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSigningCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateSigningCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateSSHPublicKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUpdateUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.iam#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityTemporarilyUnmodifiableException":
    case "com.amazonaws.iam#EntityTemporarilyUnmodifiableException":
      response = {
        ...(await deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUploadServerCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadServerCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUploadServerCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUploadServerCertificateResponse(data.UploadServerCertificateResult, context);
  const response: UploadServerCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadServerCertificateResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUploadServerCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadServerCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "KeyPairMismatchException":
    case "com.amazonaws.iam#KeyPairMismatchException":
      response = {
        ...(await deserializeAws_queryKeyPairMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedCertificateException":
    case "com.amazonaws.iam#MalformedCertificateException":
      response = {
        ...(await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUploadSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSigningCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUploadSigningCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUploadSigningCertificateResponse(data.UploadSigningCertificateResult, context);
  const response: UploadSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadSigningCertificateResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUploadSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSigningCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateCertificateException":
    case "com.amazonaws.iam#DuplicateCertificateException":
      response = {
        ...(await deserializeAws_queryDuplicateCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "EntityAlreadyExistsException":
    case "com.amazonaws.iam#EntityAlreadyExistsException":
      response = {
        ...(await deserializeAws_queryEntityAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidCertificateException":
    case "com.amazonaws.iam#InvalidCertificateException":
      response = {
        ...(await deserializeAws_queryInvalidCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MalformedCertificateException":
    case "com.amazonaws.iam#MalformedCertificateException":
      response = {
        ...(await deserializeAws_queryMalformedCertificateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.iam#ServiceFailureException":
      response = {
        ...(await deserializeAws_queryServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUploadSSHPublicKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSSHPublicKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryUploadSSHPublicKeyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUploadSSHPublicKeyResponse(data.UploadSSHPublicKeyResult, context);
  const response: UploadSSHPublicKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadSSHPublicKeyResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUploadSSHPublicKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadSSHPublicKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateSSHPublicKeyException":
    case "com.amazonaws.iam#DuplicateSSHPublicKeyException":
      response = {
        ...(await deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidPublicKeyException":
    case "com.amazonaws.iam#InvalidPublicKeyException":
      response = {
        ...(await deserializeAws_queryInvalidPublicKeyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iam#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NoSuchEntityException":
    case "com.amazonaws.iam#NoSuchEntityException":
      response = {
        ...(await deserializeAws_queryNoSuchEntityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnrecognizedPublicKeyEncodingException":
    case "com.amazonaws.iam#UnrecognizedPublicKeyEncodingException":
      response = {
        ...(await deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConcurrentModificationException(body.Error, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCredentialReportExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportExpiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCredentialReportExpiredException(body.Error, context);
  const contents: CredentialReportExpiredException = {
    name: "CredentialReportExpiredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCredentialReportNotPresentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportNotPresentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCredentialReportNotPresentException(body.Error, context);
  const contents: CredentialReportNotPresentException = {
    name: "CredentialReportNotPresentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryCredentialReportNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CredentialReportNotReadyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryCredentialReportNotReadyException(body.Error, context);
  const contents: CredentialReportNotReadyException = {
    name: "CredentialReportNotReadyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDeleteConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeleteConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDeleteConflictException(body.Error, context);
  const contents: DeleteConflictException = {
    name: "DeleteConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateCertificateException(body.Error, context);
  const contents: DuplicateCertificateException = {
    name: "DuplicateCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDuplicateSSHPublicKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateSSHPublicKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDuplicateSSHPublicKeyException(body.Error, context);
  const contents: DuplicateSSHPublicKeyException = {
    name: "DuplicateSSHPublicKeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryEntityAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEntityAlreadyExistsException(body.Error, context);
  const contents: EntityAlreadyExistsException = {
    name: "EntityAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryEntityTemporarilyUnmodifiableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityTemporarilyUnmodifiableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryEntityTemporarilyUnmodifiableException(body.Error, context);
  const contents: EntityTemporarilyUnmodifiableException = {
    name: "EntityTemporarilyUnmodifiableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidAuthenticationCodeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAuthenticationCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidAuthenticationCodeException(body.Error, context);
  const contents: InvalidAuthenticationCodeException = {
    name: "InvalidAuthenticationCodeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidCertificateException(body.Error, context);
  const contents: InvalidCertificateException = {
    name: "InvalidCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidInputException(body.Error, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidPublicKeyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPublicKeyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidPublicKeyException(body.Error, context);
  const contents: InvalidPublicKeyException = {
    name: "InvalidPublicKeyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidUserTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidUserTypeException(body.Error, context);
  const contents: InvalidUserTypeException = {
    name: "InvalidUserTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryKeyPairMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KeyPairMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryKeyPairMismatchException(body.Error, context);
  const contents: KeyPairMismatchException = {
    name: "KeyPairMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(body.Error, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMalformedCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMalformedCertificateException(body.Error, context);
  const contents: MalformedCertificateException = {
    name: "MalformedCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMalformedPolicyDocumentException(body.Error, context);
  const contents: MalformedPolicyDocumentException = {
    name: "MalformedPolicyDocumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryNoSuchEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryNoSuchEntityException(body.Error, context);
  const contents: NoSuchEntityException = {
    name: "NoSuchEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPasswordPolicyViolationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PasswordPolicyViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPasswordPolicyViolationException(body.Error, context);
  const contents: PasswordPolicyViolationException = {
    name: "PasswordPolicyViolationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPolicyEvaluationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyEvaluationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyEvaluationException(body.Error, context);
  const contents: PolicyEvaluationException = {
    name: "PolicyEvaluationException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryPolicyNotAttachableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotAttachableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryPolicyNotAttachableException(body.Error, context);
  const contents: PolicyNotAttachableException = {
    name: "PolicyNotAttachableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryReportGenerationLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReportGenerationLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryReportGenerationLimitExceededException(body.Error, context);
  const contents: ReportGenerationLimitExceededException = {
    name: "ReportGenerationLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceFailureException(body.Error, context);
  const contents: ServiceFailureException = {
    name: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryServiceNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryServiceNotSupportedException(body.Error, context);
  const contents: ServiceNotSupportedException = {
    name: "ServiceNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryUnmodifiableEntityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnmodifiableEntityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnmodifiableEntityException(body.Error, context);
  const contents: UnmodifiableEntityException = {
    name: "UnmodifiableEntityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryUnrecognizedPublicKeyEncodingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnrecognizedPublicKeyEncodingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryUnrecognizedPublicKeyEncodingException(body.Error, context);
  const contents: UnrecognizedPublicKeyEncodingException = {
    name: "UnrecognizedPublicKeyEncodingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryActionNameListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAddClientIDToOpenIDConnectProviderRequest = (
  input: AddClientIDToOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientID !== undefined) {
    entries["ClientID"] = input.ClientID;
  }
  if (input.OpenIDConnectProviderArn !== undefined) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  return entries;
};

const serializeAws_queryAddRoleToInstanceProfileRequest = (
  input: AddRoleToInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceProfileName !== undefined) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryAddUserToGroupRequest = (input: AddUserToGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryAttachGroupPolicyRequest = (input: AttachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

const serializeAws_queryAttachRolePolicyRequest = (input: AttachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryAttachUserPolicyRequest = (input: AttachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryChangePasswordRequest = (input: ChangePasswordRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NewPassword !== undefined) {
    entries["NewPassword"] = input.NewPassword;
  }
  if (input.OldPassword !== undefined) {
    entries["OldPassword"] = input.OldPassword;
  }
  return entries;
};

const serializeAws_queryclientIDListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryContextEntry = (input: ContextEntry, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ContextKeyName !== undefined) {
    entries["ContextKeyName"] = input.ContextKeyName;
  }
  if (input.ContextKeyType !== undefined) {
    entries["ContextKeyType"] = input.ContextKeyType;
  }
  if (input.ContextKeyValues !== undefined) {
    const memberEntries = serializeAws_queryContextKeyValueListType(input.ContextKeyValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextKeyValues.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryContextEntryListType = (input: ContextEntry[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryContextEntry(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryContextKeyValueListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryCreateAccessKeyRequest = (input: CreateAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryCreateAccountAliasRequest = (
  input: CreateAccountAliasRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccountAlias !== undefined) {
    entries["AccountAlias"] = input.AccountAlias;
  }
  return entries;
};

const serializeAws_queryCreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  return entries;
};

const serializeAws_queryCreateInstanceProfileRequest = (
  input: CreateInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceProfileName !== undefined) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  return entries;
};

const serializeAws_queryCreateLoginProfileRequest = (
  input: CreateLoginProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Password !== undefined) {
    entries["Password"] = input.Password;
  }
  if (input.PasswordResetRequired !== undefined) {
    entries["PasswordResetRequired"] = input.PasswordResetRequired;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryCreateOpenIDConnectProviderRequest = (
  input: CreateOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientIDList !== undefined) {
    const memberEntries = serializeAws_queryclientIDListType(input.ClientIDList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ClientIDList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ThumbprintList !== undefined) {
    const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ThumbprintList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Url !== undefined) {
    entries["Url"] = input.Url;
  }
  return entries;
};

const serializeAws_queryCreatePolicyRequest = (input: CreatePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryCreatePolicyVersionRequest = (
  input: CreatePolicyVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.SetAsDefault !== undefined) {
    entries["SetAsDefault"] = input.SetAsDefault;
  }
  return entries;
};

const serializeAws_queryCreateRoleRequest = (input: CreateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AssumeRolePolicyDocument !== undefined) {
    entries["AssumeRolePolicyDocument"] = input.AssumeRolePolicyDocument;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.MaxSessionDuration !== undefined) {
    entries["MaxSessionDuration"] = input.MaxSessionDuration;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.PermissionsBoundary !== undefined) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryCreateSAMLProviderRequest = (
  input: CreateSAMLProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.SAMLMetadataDocument !== undefined) {
    entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
  }
  return entries;
};

const serializeAws_queryCreateServiceLinkedRoleRequest = (
  input: CreateServiceLinkedRoleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AWSServiceName !== undefined) {
    entries["AWSServiceName"] = input.AWSServiceName;
  }
  if (input.CustomSuffix !== undefined) {
    entries["CustomSuffix"] = input.CustomSuffix;
  }
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  return entries;
};

const serializeAws_queryCreateServiceSpecificCredentialRequest = (
  input: CreateServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceName !== undefined) {
    entries["ServiceName"] = input.ServiceName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryCreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.PermissionsBoundary !== undefined) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryCreateVirtualMFADeviceRequest = (
  input: CreateVirtualMFADeviceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.VirtualMFADeviceName !== undefined) {
    entries["VirtualMFADeviceName"] = input.VirtualMFADeviceName;
  }
  return entries;
};

const serializeAws_queryDeactivateMFADeviceRequest = (
  input: DeactivateMFADeviceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteAccessKeyRequest = (input: DeleteAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccessKeyId !== undefined) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteAccountAliasRequest = (
  input: DeleteAccountAliasRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccountAlias !== undefined) {
    entries["AccountAlias"] = input.AccountAlias;
  }
  return entries;
};

const serializeAws_queryDeleteGroupPolicyRequest = (input: DeleteGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryDeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  return entries;
};

const serializeAws_queryDeleteInstanceProfileRequest = (
  input: DeleteInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceProfileName !== undefined) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  return entries;
};

const serializeAws_queryDeleteLoginProfileRequest = (
  input: DeleteLoginProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteOpenIDConnectProviderRequest = (
  input: DeleteOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OpenIDConnectProviderArn !== undefined) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  return entries;
};

const serializeAws_queryDeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

const serializeAws_queryDeletePolicyVersionRequest = (
  input: DeletePolicyVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_queryDeleteRolePermissionsBoundaryRequest = (
  input: DeleteRolePermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryDeleteRolePolicyRequest = (input: DeleteRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryDeleteRoleRequest = (input: DeleteRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryDeleteSAMLProviderRequest = (
  input: DeleteSAMLProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SAMLProviderArn !== undefined) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

const serializeAws_queryDeleteServerCertificateRequest = (
  input: DeleteServerCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServerCertificateName !== undefined) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  return entries;
};

const serializeAws_queryDeleteServiceLinkedRoleRequest = (
  input: DeleteServiceLinkedRoleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryDeleteServiceSpecificCredentialRequest = (
  input: DeleteServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceSpecificCredentialId !== undefined) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteSigningCertificateRequest = (
  input: DeleteSigningCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateId !== undefined) {
    entries["CertificateId"] = input.CertificateId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteSSHPublicKeyRequest = (
  input: DeleteSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SSHPublicKeyId !== undefined) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteUserPermissionsBoundaryRequest = (
  input: DeleteUserPermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteUserPolicyRequest = (input: DeleteUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryDeleteVirtualMFADeviceRequest = (
  input: DeleteVirtualMFADeviceRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  return entries;
};

const serializeAws_queryDetachGroupPolicyRequest = (input: DetachGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

const serializeAws_queryDetachRolePolicyRequest = (input: DetachRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryDetachUserPolicyRequest = (input: DetachUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryEnableMFADeviceRequest = (input: EnableMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AuthenticationCode1 !== undefined) {
    entries["AuthenticationCode1"] = input.AuthenticationCode1;
  }
  if (input.AuthenticationCode2 !== undefined) {
    entries["AuthenticationCode2"] = input.AuthenticationCode2;
  }
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryentityListType = (input: (EntityType | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryGenerateOrganizationsAccessReportRequest = (
  input: GenerateOrganizationsAccessReportRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EntityPath !== undefined) {
    entries["EntityPath"] = input.EntityPath;
  }
  if (input.OrganizationsPolicyId !== undefined) {
    entries["OrganizationsPolicyId"] = input.OrganizationsPolicyId;
  }
  return entries;
};

const serializeAws_queryGenerateServiceLastAccessedDetailsRequest = (
  input: GenerateServiceLastAccessedDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  return entries;
};

const serializeAws_queryGetAccessKeyLastUsedRequest = (
  input: GetAccessKeyLastUsedRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AccessKeyId !== undefined) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  return entries;
};

const serializeAws_queryGetAccountAuthorizationDetailsRequest = (
  input: GetAccountAuthorizationDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Filter !== undefined) {
    const memberEntries = serializeAws_queryentityListType(input.Filter, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryGetContextKeysForCustomPolicyRequest = (
  input: GetContextKeysForCustomPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyInputList !== undefined) {
    const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetContextKeysForPrincipalPolicyRequest = (
  input: GetContextKeysForPrincipalPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyInputList !== undefined) {
    const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicySourceArn !== undefined) {
    entries["PolicySourceArn"] = input.PolicySourceArn;
  }
  return entries;
};

const serializeAws_queryGetGroupPolicyRequest = (input: GetGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryGetGroupRequest = (input: GetGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryGetInstanceProfileRequest = (
  input: GetInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceProfileName !== undefined) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  return entries;
};

const serializeAws_queryGetLoginProfileRequest = (input: GetLoginProfileRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryGetOpenIDConnectProviderRequest = (
  input: GetOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OpenIDConnectProviderArn !== undefined) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  return entries;
};

const serializeAws_queryGetOrganizationsAccessReportRequest = (
  input: GetOrganizationsAccessReportRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.JobId !== undefined) {
    entries["JobId"] = input.JobId;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.SortKey !== undefined) {
    entries["SortKey"] = input.SortKey;
  }
  return entries;
};

const serializeAws_queryGetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

const serializeAws_queryGetPolicyVersionRequest = (input: GetPolicyVersionRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_queryGetRolePolicyRequest = (input: GetRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryGetRoleRequest = (input: GetRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryGetSAMLProviderRequest = (input: GetSAMLProviderRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SAMLProviderArn !== undefined) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

const serializeAws_queryGetServerCertificateRequest = (
  input: GetServerCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServerCertificateName !== undefined) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  return entries;
};

const serializeAws_queryGetServiceLastAccessedDetailsRequest = (
  input: GetServiceLastAccessedDetailsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.JobId !== undefined) {
    entries["JobId"] = input.JobId;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryGetServiceLastAccessedDetailsWithEntitiesRequest = (
  input: GetServiceLastAccessedDetailsWithEntitiesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.JobId !== undefined) {
    entries["JobId"] = input.JobId;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.ServiceNamespace !== undefined) {
    entries["ServiceNamespace"] = input.ServiceNamespace;
  }
  return entries;
};

const serializeAws_queryGetServiceLinkedRoleDeletionStatusRequest = (
  input: GetServiceLinkedRoleDeletionStatusRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DeletionTaskId !== undefined) {
    entries["DeletionTaskId"] = input.DeletionTaskId;
  }
  return entries;
};

const serializeAws_queryGetSSHPublicKeyRequest = (input: GetSSHPublicKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Encoding !== undefined) {
    entries["Encoding"] = input.Encoding;
  }
  if (input.SSHPublicKeyId !== undefined) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryGetUserPolicyRequest = (input: GetUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryGetUserRequest = (input: GetUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListAccessKeysRequest = (input: ListAccessKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListAccountAliasesRequest = (
  input: ListAccountAliasesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryListAttachedGroupPoliciesRequest = (
  input: ListAttachedGroupPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListAttachedRolePoliciesRequest = (
  input: ListAttachedRolePoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryListAttachedUserPoliciesRequest = (
  input: ListAttachedUserPoliciesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListEntitiesForPolicyRequest = (
  input: ListEntitiesForPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EntityFilter !== undefined) {
    entries["EntityFilter"] = input.EntityFilter;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.PolicyUsageFilter !== undefined) {
    entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
  }
  return entries;
};

const serializeAws_queryListGroupPoliciesRequest = (input: ListGroupPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryListGroupsForUserRequest = (input: ListGroupsForUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListInstanceProfilesForRoleRequest = (
  input: ListInstanceProfilesForRoleRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryListInstanceProfilesRequest = (
  input: ListInstanceProfilesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListMFADevicesRequest = (input: ListMFADevicesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListOpenIDConnectProvidersRequest = (
  input: ListOpenIDConnectProvidersRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryListPoliciesGrantingServiceAccessRequest = (
  input: ListPoliciesGrantingServiceAccessRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Arn !== undefined) {
    entries["Arn"] = input.Arn;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.ServiceNamespaces !== undefined) {
    const memberEntries = serializeAws_queryserviceNamespaceListType(input.ServiceNamespaces, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ServiceNamespaces.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.OnlyAttached !== undefined) {
    entries["OnlyAttached"] = input.OnlyAttached;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  if (input.PolicyUsageFilter !== undefined) {
    entries["PolicyUsageFilter"] = input.PolicyUsageFilter;
  }
  if (input.Scope !== undefined) {
    entries["Scope"] = input.Scope;
  }
  return entries;
};

const serializeAws_queryListPolicyVersionsRequest = (
  input: ListPolicyVersionsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  return entries;
};

const serializeAws_queryListRolePoliciesRequest = (input: ListRolePoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryListRolesRequest = (input: ListRolesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListRoleTagsRequest = (input: ListRoleTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryListSAMLProvidersRequest = (input: ListSAMLProvidersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  return entries;
};

const serializeAws_queryListServerCertificatesRequest = (
  input: ListServerCertificatesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListServiceSpecificCredentialsRequest = (
  input: ListServiceSpecificCredentialsRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceName !== undefined) {
    entries["ServiceName"] = input.ServiceName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListSigningCertificatesRequest = (
  input: ListSigningCertificatesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListSSHPublicKeysRequest = (input: ListSSHPublicKeysRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListUserPoliciesRequest = (input: ListUserPoliciesRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PathPrefix !== undefined) {
    entries["PathPrefix"] = input.PathPrefix;
  }
  return entries;
};

const serializeAws_queryListUserTagsRequest = (input: ListUserTagsRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryListVirtualMFADevicesRequest = (
  input: ListVirtualMFADevicesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AssignmentStatus !== undefined) {
    entries["AssignmentStatus"] = input.AssignmentStatus;
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  return entries;
};

const serializeAws_queryPutGroupPolicyRequest = (input: PutGroupPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  return entries;
};

const serializeAws_queryPutRolePermissionsBoundaryRequest = (
  input: PutRolePermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PermissionsBoundary !== undefined) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryPutRolePolicyRequest = (input: PutRolePolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryPutUserPermissionsBoundaryRequest = (
  input: PutUserPermissionsBoundaryRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PermissionsBoundary !== undefined) {
    entries["PermissionsBoundary"] = input.PermissionsBoundary;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryPutUserPolicyRequest = (input: PutUserPolicyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.PolicyName !== undefined) {
    entries["PolicyName"] = input.PolicyName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryRemoveClientIDFromOpenIDConnectProviderRequest = (
  input: RemoveClientIDFromOpenIDConnectProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ClientID !== undefined) {
    entries["ClientID"] = input.ClientID;
  }
  if (input.OpenIDConnectProviderArn !== undefined) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  return entries;
};

const serializeAws_queryRemoveRoleFromInstanceProfileRequest = (
  input: RemoveRoleFromInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.InstanceProfileName !== undefined) {
    entries["InstanceProfileName"] = input.InstanceProfileName;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryRemoveUserFromGroupRequest = (
  input: RemoveUserFromGroupRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryResetServiceSpecificCredentialRequest = (
  input: ResetServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceSpecificCredentialId !== undefined) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryResourceNameListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryResyncMFADeviceRequest = (input: ResyncMFADeviceRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AuthenticationCode1 !== undefined) {
    entries["AuthenticationCode1"] = input.AuthenticationCode1;
  }
  if (input.AuthenticationCode2 !== undefined) {
    entries["AuthenticationCode2"] = input.AuthenticationCode2;
  }
  if (input.SerialNumber !== undefined) {
    entries["SerialNumber"] = input.SerialNumber;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryserviceNamespaceListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetDefaultPolicyVersionRequest = (
  input: SetDefaultPolicyVersionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyArn !== undefined) {
    entries["PolicyArn"] = input.PolicyArn;
  }
  if (input.VersionId !== undefined) {
    entries["VersionId"] = input.VersionId;
  }
  return entries;
};

const serializeAws_querySetSecurityTokenServicePreferencesRequest = (
  input: SetSecurityTokenServicePreferencesRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.GlobalEndpointTokenVersion !== undefined) {
    entries["GlobalEndpointTokenVersion"] = input.GlobalEndpointTokenVersion;
  }
  return entries;
};

const serializeAws_querySimulateCustomPolicyRequest = (
  input: SimulateCustomPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionNames !== undefined) {
    const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallerArn !== undefined) {
    entries["CallerArn"] = input.CallerArn;
  }
  if (input.ContextEntries !== undefined) {
    const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PolicyInputList !== undefined) {
    const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceArns !== undefined) {
    const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceHandlingOption !== undefined) {
    entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
  }
  if (input.ResourceOwner !== undefined) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.ResourcePolicy !== undefined) {
    entries["ResourcePolicy"] = input.ResourcePolicy;
  }
  return entries;
};

const serializeAws_querySimulatePrincipalPolicyRequest = (
  input: SimulatePrincipalPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionNames !== undefined) {
    const memberEntries = serializeAws_queryActionNameListType(input.ActionNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ActionNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.CallerArn !== undefined) {
    entries["CallerArn"] = input.CallerArn;
  }
  if (input.ContextEntries !== undefined) {
    const memberEntries = serializeAws_queryContextEntryListType(input.ContextEntries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ContextEntries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Marker !== undefined) {
    entries["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    entries["MaxItems"] = input.MaxItems;
  }
  if (input.PolicyInputList !== undefined) {
    const memberEntries = serializeAws_querySimulationPolicyListType(input.PolicyInputList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `PolicyInputList.${key}`;
      entries[loc] = value;
    });
  }
  if (input.PolicySourceArn !== undefined) {
    entries["PolicySourceArn"] = input.PolicySourceArn;
  }
  if (input.ResourceArns !== undefined) {
    const memberEntries = serializeAws_queryResourceNameListType(input.ResourceArns, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ResourceArns.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ResourceHandlingOption !== undefined) {
    entries["ResourceHandlingOption"] = input.ResourceHandlingOption;
  }
  if (input.ResourceOwner !== undefined) {
    entries["ResourceOwner"] = input.ResourceOwner;
  }
  if (input.ResourcePolicy !== undefined) {
    entries["ResourcePolicy"] = input.ResourcePolicy;
  }
  return entries;
};

const serializeAws_querySimulationPolicyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_querytagKeyListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querytagListType = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagRoleRequest = (input: TagRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryTagUserRequest = (input: TagUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_querytagListType(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_querythumbprintListType = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryUntagRoleRequest = (input: UntagRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUntagUserRequest = (input: UntagUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_querytagKeyListType(input.TagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateAccessKeyRequest = (input: UpdateAccessKeyRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AccessKeyId !== undefined) {
    entries["AccessKeyId"] = input.AccessKeyId;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateAccountPasswordPolicyRequest = (
  input: UpdateAccountPasswordPolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AllowUsersToChangePassword !== undefined) {
    entries["AllowUsersToChangePassword"] = input.AllowUsersToChangePassword;
  }
  if (input.HardExpiry !== undefined) {
    entries["HardExpiry"] = input.HardExpiry;
  }
  if (input.MaxPasswordAge !== undefined) {
    entries["MaxPasswordAge"] = input.MaxPasswordAge;
  }
  if (input.MinimumPasswordLength !== undefined) {
    entries["MinimumPasswordLength"] = input.MinimumPasswordLength;
  }
  if (input.PasswordReusePrevention !== undefined) {
    entries["PasswordReusePrevention"] = input.PasswordReusePrevention;
  }
  if (input.RequireLowercaseCharacters !== undefined) {
    entries["RequireLowercaseCharacters"] = input.RequireLowercaseCharacters;
  }
  if (input.RequireNumbers !== undefined) {
    entries["RequireNumbers"] = input.RequireNumbers;
  }
  if (input.RequireSymbols !== undefined) {
    entries["RequireSymbols"] = input.RequireSymbols;
  }
  if (input.RequireUppercaseCharacters !== undefined) {
    entries["RequireUppercaseCharacters"] = input.RequireUppercaseCharacters;
  }
  return entries;
};

const serializeAws_queryUpdateAssumeRolePolicyRequest = (
  input: UpdateAssumeRolePolicyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.PolicyDocument !== undefined) {
    entries["PolicyDocument"] = input.PolicyDocument;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryUpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.GroupName !== undefined) {
    entries["GroupName"] = input.GroupName;
  }
  if (input.NewGroupName !== undefined) {
    entries["NewGroupName"] = input.NewGroupName;
  }
  if (input.NewPath !== undefined) {
    entries["NewPath"] = input.NewPath;
  }
  return entries;
};

const serializeAws_queryUpdateLoginProfileRequest = (
  input: UpdateLoginProfileRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Password !== undefined) {
    entries["Password"] = input.Password;
  }
  if (input.PasswordResetRequired !== undefined) {
    entries["PasswordResetRequired"] = input.PasswordResetRequired;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateOpenIDConnectProviderThumbprintRequest = (
  input: UpdateOpenIDConnectProviderThumbprintRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.OpenIDConnectProviderArn !== undefined) {
    entries["OpenIDConnectProviderArn"] = input.OpenIDConnectProviderArn;
  }
  if (input.ThumbprintList !== undefined) {
    const memberEntries = serializeAws_querythumbprintListType(input.ThumbprintList, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ThumbprintList.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUpdateRoleDescriptionRequest = (
  input: UpdateRoleDescriptionRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryUpdateRoleRequest = (input: UpdateRoleRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Description !== undefined) {
    entries["Description"] = input.Description;
  }
  if (input.MaxSessionDuration !== undefined) {
    entries["MaxSessionDuration"] = input.MaxSessionDuration;
  }
  if (input.RoleName !== undefined) {
    entries["RoleName"] = input.RoleName;
  }
  return entries;
};

const serializeAws_queryUpdateSAMLProviderRequest = (
  input: UpdateSAMLProviderRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SAMLMetadataDocument !== undefined) {
    entries["SAMLMetadataDocument"] = input.SAMLMetadataDocument;
  }
  if (input.SAMLProviderArn !== undefined) {
    entries["SAMLProviderArn"] = input.SAMLProviderArn;
  }
  return entries;
};

const serializeAws_queryUpdateServerCertificateRequest = (
  input: UpdateServerCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NewPath !== undefined) {
    entries["NewPath"] = input.NewPath;
  }
  if (input.NewServerCertificateName !== undefined) {
    entries["NewServerCertificateName"] = input.NewServerCertificateName;
  }
  if (input.ServerCertificateName !== undefined) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  return entries;
};

const serializeAws_queryUpdateServiceSpecificCredentialRequest = (
  input: UpdateServiceSpecificCredentialRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ServiceSpecificCredentialId !== undefined) {
    entries["ServiceSpecificCredentialId"] = input.ServiceSpecificCredentialId;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateSigningCertificateRequest = (
  input: UpdateSigningCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateId !== undefined) {
    entries["CertificateId"] = input.CertificateId;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateSSHPublicKeyRequest = (
  input: UpdateSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SSHPublicKeyId !== undefined) {
    entries["SSHPublicKeyId"] = input.SSHPublicKeyId;
  }
  if (input.Status !== undefined) {
    entries["Status"] = input.Status;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUpdateUserRequest = (input: UpdateUserRequest, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NewPath !== undefined) {
    entries["NewPath"] = input.NewPath;
  }
  if (input.NewUserName !== undefined) {
    entries["NewUserName"] = input.NewUserName;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUploadServerCertificateRequest = (
  input: UploadServerCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateBody !== undefined) {
    entries["CertificateBody"] = input.CertificateBody;
  }
  if (input.CertificateChain !== undefined) {
    entries["CertificateChain"] = input.CertificateChain;
  }
  if (input.Path !== undefined) {
    entries["Path"] = input.Path;
  }
  if (input.PrivateKey !== undefined) {
    entries["PrivateKey"] = input.PrivateKey;
  }
  if (input.ServerCertificateName !== undefined) {
    entries["ServerCertificateName"] = input.ServerCertificateName;
  }
  return entries;
};

const serializeAws_queryUploadSigningCertificateRequest = (
  input: UploadSigningCertificateRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.CertificateBody !== undefined) {
    entries["CertificateBody"] = input.CertificateBody;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const serializeAws_queryUploadSSHPublicKeyRequest = (
  input: UploadSSHPublicKeyRequest,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.SSHPublicKeyBody !== undefined) {
    entries["SSHPublicKeyBody"] = input.SSHPublicKeyBody;
  }
  if (input.UserName !== undefined) {
    entries["UserName"] = input.UserName;
  }
  return entries;
};

const deserializeAws_queryAccessDetail = (output: any, context: __SerdeContext): AccessDetail => {
  let contents: any = {
    __type: "AccessDetail",
    EntityPath: undefined,
    LastAuthenticatedTime: undefined,
    Region: undefined,
    ServiceName: undefined,
    ServiceNamespace: undefined,
    TotalAuthenticatedEntities: undefined,
  };
  if (output["EntityPath"] !== undefined) {
    contents.EntityPath = output["EntityPath"];
  }
  if (output["LastAuthenticatedTime"] !== undefined) {
    contents.LastAuthenticatedTime = new Date(output["LastAuthenticatedTime"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = output["ServiceName"];
  }
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = output["ServiceNamespace"];
  }
  if (output["TotalAuthenticatedEntities"] !== undefined) {
    contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
  }
  return contents;
};

const deserializeAws_queryAccessDetails = (output: any, context: __SerdeContext): AccessDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryAccessDetail(entry, context));
};

const deserializeAws_queryAccessKey = (output: any, context: __SerdeContext): AccessKey => {
  let contents: any = {
    __type: "AccessKey",
    AccessKeyId: undefined,
    CreateDate: undefined,
    SecretAccessKey: undefined,
    Status: undefined,
    UserName: undefined,
  };
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = output["AccessKeyId"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["SecretAccessKey"] !== undefined) {
    contents.SecretAccessKey = output["SecretAccessKey"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryAccessKeyLastUsed = (output: any, context: __SerdeContext): AccessKeyLastUsed => {
  let contents: any = {
    __type: "AccessKeyLastUsed",
    LastUsedDate: undefined,
    Region: undefined,
    ServiceName: undefined,
  };
  if (output["LastUsedDate"] !== undefined) {
    contents.LastUsedDate = new Date(output["LastUsedDate"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = output["ServiceName"];
  }
  return contents;
};

const deserializeAws_queryAccessKeyMetadata = (output: any, context: __SerdeContext): AccessKeyMetadata => {
  let contents: any = {
    __type: "AccessKeyMetadata",
    AccessKeyId: undefined,
    CreateDate: undefined,
    Status: undefined,
    UserName: undefined,
  };
  if (output["AccessKeyId"] !== undefined) {
    contents.AccessKeyId = output["AccessKeyId"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryaccessKeyMetadataListType = (output: any, context: __SerdeContext): AccessKeyMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_queryAccessKeyMetadata(entry, context));
};

const deserializeAws_queryaccountAliasListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryArnListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryAttachedPermissionsBoundary = (
  output: any,
  context: __SerdeContext
): AttachedPermissionsBoundary => {
  let contents: any = {
    __type: "AttachedPermissionsBoundary",
    PermissionsBoundaryArn: undefined,
    PermissionsBoundaryType: undefined,
  };
  if (output["PermissionsBoundaryArn"] !== undefined) {
    contents.PermissionsBoundaryArn = output["PermissionsBoundaryArn"];
  }
  if (output["PermissionsBoundaryType"] !== undefined) {
    contents.PermissionsBoundaryType = output["PermissionsBoundaryType"];
  }
  return contents;
};

const deserializeAws_queryattachedPoliciesListType = (output: any, context: __SerdeContext): AttachedPolicy[] => {
  return (output || []).map((entry: any) => deserializeAws_queryAttachedPolicy(entry, context));
};

const deserializeAws_queryAttachedPolicy = (output: any, context: __SerdeContext): AttachedPolicy => {
  let contents: any = {
    __type: "AttachedPolicy",
    PolicyArn: undefined,
    PolicyName: undefined,
  };
  if (output["PolicyArn"] !== undefined) {
    contents.PolicyArn = output["PolicyArn"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  return contents;
};

const deserializeAws_querycertificateListType = (output: any, context: __SerdeContext): SigningCertificate[] => {
  return (output || []).map((entry: any) => deserializeAws_querySigningCertificate(entry, context));
};

const deserializeAws_queryclientIDListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryContextKeyNamesResultListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryCreateAccessKeyResponse = (output: any, context: __SerdeContext): CreateAccessKeyResponse => {
  let contents: any = {
    __type: "CreateAccessKeyResponse",
    AccessKey: undefined,
  };
  if (output["AccessKey"] !== undefined) {
    contents.AccessKey = deserializeAws_queryAccessKey(output["AccessKey"], context);
  }
  return contents;
};

const deserializeAws_queryCreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  let contents: any = {
    __type: "CreateGroupResponse",
    Group: undefined,
  };
  if (output["Group"] !== undefined) {
    contents.Group = deserializeAws_queryGroup(output["Group"], context);
  }
  return contents;
};

const deserializeAws_queryCreateInstanceProfileResponse = (
  output: any,
  context: __SerdeContext
): CreateInstanceProfileResponse => {
  let contents: any = {
    __type: "CreateInstanceProfileResponse",
    InstanceProfile: undefined,
  };
  if (output["InstanceProfile"] !== undefined) {
    contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
  }
  return contents;
};

const deserializeAws_queryCreateLoginProfileResponse = (
  output: any,
  context: __SerdeContext
): CreateLoginProfileResponse => {
  let contents: any = {
    __type: "CreateLoginProfileResponse",
    LoginProfile: undefined,
  };
  if (output["LoginProfile"] !== undefined) {
    contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
  }
  return contents;
};

const deserializeAws_queryCreateOpenIDConnectProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateOpenIDConnectProviderResponse => {
  let contents: any = {
    __type: "CreateOpenIDConnectProviderResponse",
    OpenIDConnectProviderArn: undefined,
  };
  if (output["OpenIDConnectProviderArn"] !== undefined) {
    contents.OpenIDConnectProviderArn = output["OpenIDConnectProviderArn"];
  }
  return contents;
};

const deserializeAws_queryCreatePolicyResponse = (output: any, context: __SerdeContext): CreatePolicyResponse => {
  let contents: any = {
    __type: "CreatePolicyResponse",
    Policy: undefined,
  };
  if (output["Policy"] !== undefined) {
    contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
  }
  return contents;
};

const deserializeAws_queryCreatePolicyVersionResponse = (
  output: any,
  context: __SerdeContext
): CreatePolicyVersionResponse => {
  let contents: any = {
    __type: "CreatePolicyVersionResponse",
    PolicyVersion: undefined,
  };
  if (output["PolicyVersion"] !== undefined) {
    contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
  }
  return contents;
};

const deserializeAws_queryCreateRoleResponse = (output: any, context: __SerdeContext): CreateRoleResponse => {
  let contents: any = {
    __type: "CreateRoleResponse",
    Role: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = deserializeAws_queryRole(output["Role"], context);
  }
  return contents;
};

const deserializeAws_queryCreateSAMLProviderResponse = (
  output: any,
  context: __SerdeContext
): CreateSAMLProviderResponse => {
  let contents: any = {
    __type: "CreateSAMLProviderResponse",
    SAMLProviderArn: undefined,
  };
  if (output["SAMLProviderArn"] !== undefined) {
    contents.SAMLProviderArn = output["SAMLProviderArn"];
  }
  return contents;
};

const deserializeAws_queryCreateServiceLinkedRoleResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceLinkedRoleResponse => {
  let contents: any = {
    __type: "CreateServiceLinkedRoleResponse",
    Role: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = deserializeAws_queryRole(output["Role"], context);
  }
  return contents;
};

const deserializeAws_queryCreateServiceSpecificCredentialResponse = (
  output: any,
  context: __SerdeContext
): CreateServiceSpecificCredentialResponse => {
  let contents: any = {
    __type: "CreateServiceSpecificCredentialResponse",
    ServiceSpecificCredential: undefined,
  };
  if (output["ServiceSpecificCredential"] !== undefined) {
    contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(
      output["ServiceSpecificCredential"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryCreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  let contents: any = {
    __type: "CreateUserResponse",
    User: undefined,
  };
  if (output["User"] !== undefined) {
    contents.User = deserializeAws_queryUser(output["User"], context);
  }
  return contents;
};

const deserializeAws_queryCreateVirtualMFADeviceResponse = (
  output: any,
  context: __SerdeContext
): CreateVirtualMFADeviceResponse => {
  let contents: any = {
    __type: "CreateVirtualMFADeviceResponse",
    VirtualMFADevice: undefined,
  };
  if (output["VirtualMFADevice"] !== undefined) {
    contents.VirtualMFADevice = deserializeAws_queryVirtualMFADevice(output["VirtualMFADevice"], context);
  }
  return contents;
};

const deserializeAws_queryCredentialReportExpiredException = (
  output: any,
  context: __SerdeContext
): CredentialReportExpiredException => {
  let contents: any = {
    __type: "CredentialReportExpiredException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCredentialReportNotPresentException = (
  output: any,
  context: __SerdeContext
): CredentialReportNotPresentException => {
  let contents: any = {
    __type: "CredentialReportNotPresentException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryCredentialReportNotReadyException = (
  output: any,
  context: __SerdeContext
): CredentialReportNotReadyException => {
  let contents: any = {
    __type: "CredentialReportNotReadyException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDeleteConflictException = (output: any, context: __SerdeContext): DeleteConflictException => {
  let contents: any = {
    __type: "DeleteConflictException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDeleteServiceLinkedRoleResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceLinkedRoleResponse => {
  let contents: any = {
    __type: "DeleteServiceLinkedRoleResponse",
    DeletionTaskId: undefined,
  };
  if (output["DeletionTaskId"] !== undefined) {
    contents.DeletionTaskId = output["DeletionTaskId"];
  }
  return contents;
};

const deserializeAws_queryDeletionTaskFailureReasonType = (
  output: any,
  context: __SerdeContext
): DeletionTaskFailureReasonType => {
  let contents: any = {
    __type: "DeletionTaskFailureReasonType",
    Reason: undefined,
    RoleUsageList: undefined,
  };
  if (output["Reason"] !== undefined) {
    contents.Reason = output["Reason"];
  }
  if (output.RoleUsageList === "") {
    contents.RoleUsageList = [];
  }
  if (output["RoleUsageList"] !== undefined && output["RoleUsageList"]["member"] !== undefined) {
    contents.RoleUsageList = deserializeAws_queryRoleUsageListType(
      __getArrayIfSingleItem(output["RoleUsageList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDuplicateCertificateException = (
  output: any,
  context: __SerdeContext
): DuplicateCertificateException => {
  let contents: any = {
    __type: "DuplicateCertificateException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDuplicateSSHPublicKeyException = (
  output: any,
  context: __SerdeContext
): DuplicateSSHPublicKeyException => {
  let contents: any = {
    __type: "DuplicateSSHPublicKeyException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryEntityAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyExistsException => {
  let contents: any = {
    __type: "EntityAlreadyExistsException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryEntityDetails = (output: any, context: __SerdeContext): EntityDetails => {
  let contents: any = {
    __type: "EntityDetails",
    EntityInfo: undefined,
    LastAuthenticated: undefined,
  };
  if (output["EntityInfo"] !== undefined) {
    contents.EntityInfo = deserializeAws_queryEntityInfo(output["EntityInfo"], context);
  }
  if (output["LastAuthenticated"] !== undefined) {
    contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
  }
  return contents;
};

const deserializeAws_queryentityDetailsListType = (output: any, context: __SerdeContext): EntityDetails[] => {
  return (output || []).map((entry: any) => deserializeAws_queryEntityDetails(entry, context));
};

const deserializeAws_queryEntityInfo = (output: any, context: __SerdeContext): EntityInfo => {
  let contents: any = {
    __type: "EntityInfo",
    Arn: undefined,
    Id: undefined,
    Name: undefined,
    Path: undefined,
    Type: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["Type"] !== undefined) {
    contents.Type = output["Type"];
  }
  return contents;
};

const deserializeAws_queryEntityTemporarilyUnmodifiableException = (
  output: any,
  context: __SerdeContext
): EntityTemporarilyUnmodifiableException => {
  let contents: any = {
    __type: "EntityTemporarilyUnmodifiableException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryErrorDetails = (output: any, context: __SerdeContext): ErrorDetails => {
  let contents: any = {
    __type: "ErrorDetails",
    Code: undefined,
    Message: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryEvalDecisionDetailsType = (
  output: any,
  context: __SerdeContext
): { [key: string]: PolicyEvaluationDecisionType | string } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: pair["value"],
    }),
    {}
  );
};

const deserializeAws_queryEvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  let contents: any = {
    __type: "EvaluationResult",
    EvalActionName: undefined,
    EvalDecision: undefined,
    EvalDecisionDetails: undefined,
    EvalResourceName: undefined,
    MatchedStatements: undefined,
    MissingContextValues: undefined,
    OrganizationsDecisionDetail: undefined,
    ResourceSpecificResults: undefined,
  };
  if (output["EvalActionName"] !== undefined) {
    contents.EvalActionName = output["EvalActionName"];
  }
  if (output["EvalDecision"] !== undefined) {
    contents.EvalDecision = output["EvalDecision"];
  }
  if (output.EvalDecisionDetails === "") {
    contents.EvalDecisionDetails = {};
  }
  if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
    contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(
      __getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]),
      context
    );
  }
  if (output["EvalResourceName"] !== undefined) {
    contents.EvalResourceName = output["EvalResourceName"];
  }
  if (output.MatchedStatements === "") {
    contents.MatchedStatements = [];
  }
  if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
    contents.MatchedStatements = deserializeAws_queryStatementListType(
      __getArrayIfSingleItem(output["MatchedStatements"]["member"]),
      context
    );
  }
  if (output.MissingContextValues === "") {
    contents.MissingContextValues = [];
  }
  if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
    contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["MissingContextValues"]["member"]),
      context
    );
  }
  if (output["OrganizationsDecisionDetail"] !== undefined) {
    contents.OrganizationsDecisionDetail = deserializeAws_queryOrganizationsDecisionDetail(
      output["OrganizationsDecisionDetail"],
      context
    );
  }
  if (output.ResourceSpecificResults === "") {
    contents.ResourceSpecificResults = [];
  }
  if (output["ResourceSpecificResults"] !== undefined && output["ResourceSpecificResults"]["member"] !== undefined) {
    contents.ResourceSpecificResults = deserializeAws_queryResourceSpecificResultListType(
      __getArrayIfSingleItem(output["ResourceSpecificResults"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEvaluationResultsListType = (output: any, context: __SerdeContext): EvaluationResult[] => {
  return (output || []).map((entry: any) => deserializeAws_queryEvaluationResult(entry, context));
};

const deserializeAws_queryGenerateCredentialReportResponse = (
  output: any,
  context: __SerdeContext
): GenerateCredentialReportResponse => {
  let contents: any = {
    __type: "GenerateCredentialReportResponse",
    Description: undefined,
    State: undefined,
  };
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};

const deserializeAws_queryGenerateOrganizationsAccessReportResponse = (
  output: any,
  context: __SerdeContext
): GenerateOrganizationsAccessReportResponse => {
  let contents: any = {
    __type: "GenerateOrganizationsAccessReportResponse",
    JobId: undefined,
  };
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  return contents;
};

const deserializeAws_queryGenerateServiceLastAccessedDetailsResponse = (
  output: any,
  context: __SerdeContext
): GenerateServiceLastAccessedDetailsResponse => {
  let contents: any = {
    __type: "GenerateServiceLastAccessedDetailsResponse",
    JobId: undefined,
  };
  if (output["JobId"] !== undefined) {
    contents.JobId = output["JobId"];
  }
  return contents;
};

const deserializeAws_queryGetAccessKeyLastUsedResponse = (
  output: any,
  context: __SerdeContext
): GetAccessKeyLastUsedResponse => {
  let contents: any = {
    __type: "GetAccessKeyLastUsedResponse",
    AccessKeyLastUsed: undefined,
    UserName: undefined,
  };
  if (output["AccessKeyLastUsed"] !== undefined) {
    contents.AccessKeyLastUsed = deserializeAws_queryAccessKeyLastUsed(output["AccessKeyLastUsed"], context);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryGetAccountAuthorizationDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetAccountAuthorizationDetailsResponse => {
  let contents: any = {
    __type: "GetAccountAuthorizationDetailsResponse",
    GroupDetailList: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    Policies: undefined,
    RoleDetailList: undefined,
    UserDetailList: undefined,
  };
  if (output.GroupDetailList === "") {
    contents.GroupDetailList = [];
  }
  if (output["GroupDetailList"] !== undefined && output["GroupDetailList"]["member"] !== undefined) {
    contents.GroupDetailList = deserializeAws_querygroupDetailListType(
      __getArrayIfSingleItem(output["GroupDetailList"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Policies === "") {
    contents.Policies = [];
  }
  if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = deserializeAws_queryManagedPolicyDetailListType(
      __getArrayIfSingleItem(output["Policies"]["member"]),
      context
    );
  }
  if (output.RoleDetailList === "") {
    contents.RoleDetailList = [];
  }
  if (output["RoleDetailList"] !== undefined && output["RoleDetailList"]["member"] !== undefined) {
    contents.RoleDetailList = deserializeAws_queryroleDetailListType(
      __getArrayIfSingleItem(output["RoleDetailList"]["member"]),
      context
    );
  }
  if (output.UserDetailList === "") {
    contents.UserDetailList = [];
  }
  if (output["UserDetailList"] !== undefined && output["UserDetailList"]["member"] !== undefined) {
    contents.UserDetailList = deserializeAws_queryuserDetailListType(
      __getArrayIfSingleItem(output["UserDetailList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetAccountPasswordPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetAccountPasswordPolicyResponse => {
  let contents: any = {
    __type: "GetAccountPasswordPolicyResponse",
    PasswordPolicy: undefined,
  };
  if (output["PasswordPolicy"] !== undefined) {
    contents.PasswordPolicy = deserializeAws_queryPasswordPolicy(output["PasswordPolicy"], context);
  }
  return contents;
};

const deserializeAws_queryGetAccountSummaryResponse = (
  output: any,
  context: __SerdeContext
): GetAccountSummaryResponse => {
  let contents: any = {
    __type: "GetAccountSummaryResponse",
    SummaryMap: undefined,
  };
  if (output.SummaryMap === "") {
    contents.SummaryMap = {};
  }
  if (output["SummaryMap"] !== undefined && output["SummaryMap"]["entry"] !== undefined) {
    contents.SummaryMap = deserializeAws_querysummaryMapType(
      __getArrayIfSingleItem(output["SummaryMap"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetContextKeysForPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetContextKeysForPolicyResponse => {
  let contents: any = {
    __type: "GetContextKeysForPolicyResponse",
    ContextKeyNames: undefined,
  };
  if (output.ContextKeyNames === "") {
    contents.ContextKeyNames = [];
  }
  if (output["ContextKeyNames"] !== undefined && output["ContextKeyNames"]["member"] !== undefined) {
    contents.ContextKeyNames = deserializeAws_queryContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["ContextKeyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetCredentialReportResponse = (
  output: any,
  context: __SerdeContext
): GetCredentialReportResponse => {
  let contents: any = {
    __type: "GetCredentialReportResponse",
    Content: undefined,
    GeneratedTime: undefined,
    ReportFormat: undefined,
  };
  if (output["Content"] !== undefined) {
    contents.Content = context.base64Decoder(output["Content"]);
  }
  if (output["GeneratedTime"] !== undefined) {
    contents.GeneratedTime = new Date(output["GeneratedTime"]);
  }
  if (output["ReportFormat"] !== undefined) {
    contents.ReportFormat = output["ReportFormat"];
  }
  return contents;
};

const deserializeAws_queryGetGroupPolicyResponse = (output: any, context: __SerdeContext): GetGroupPolicyResponse => {
  let contents: any = {
    __type: "GetGroupPolicyResponse",
    GroupName: undefined,
    PolicyDocument: undefined,
    PolicyName: undefined,
  };
  if (output["GroupName"] !== undefined) {
    contents.GroupName = output["GroupName"];
  }
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = output["PolicyDocument"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  return contents;
};

const deserializeAws_queryGetGroupResponse = (output: any, context: __SerdeContext): GetGroupResponse => {
  let contents: any = {
    __type: "GetGroupResponse",
    Group: undefined,
    IsTruncated: undefined,
    Marker: undefined,
    Users: undefined,
  };
  if (output["Group"] !== undefined) {
    contents.Group = deserializeAws_queryGroup(output["Group"], context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Users === "") {
    contents.Users = [];
  }
  if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = deserializeAws_queryuserListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryGetInstanceProfileResponse = (
  output: any,
  context: __SerdeContext
): GetInstanceProfileResponse => {
  let contents: any = {
    __type: "GetInstanceProfileResponse",
    InstanceProfile: undefined,
  };
  if (output["InstanceProfile"] !== undefined) {
    contents.InstanceProfile = deserializeAws_queryInstanceProfile(output["InstanceProfile"], context);
  }
  return contents;
};

const deserializeAws_queryGetLoginProfileResponse = (output: any, context: __SerdeContext): GetLoginProfileResponse => {
  let contents: any = {
    __type: "GetLoginProfileResponse",
    LoginProfile: undefined,
  };
  if (output["LoginProfile"] !== undefined) {
    contents.LoginProfile = deserializeAws_queryLoginProfile(output["LoginProfile"], context);
  }
  return contents;
};

const deserializeAws_queryGetOpenIDConnectProviderResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIDConnectProviderResponse => {
  let contents: any = {
    __type: "GetOpenIDConnectProviderResponse",
    ClientIDList: undefined,
    CreateDate: undefined,
    ThumbprintList: undefined,
    Url: undefined,
  };
  if (output.ClientIDList === "") {
    contents.ClientIDList = [];
  }
  if (output["ClientIDList"] !== undefined && output["ClientIDList"]["member"] !== undefined) {
    contents.ClientIDList = deserializeAws_queryclientIDListType(
      __getArrayIfSingleItem(output["ClientIDList"]["member"]),
      context
    );
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output.ThumbprintList === "") {
    contents.ThumbprintList = [];
  }
  if (output["ThumbprintList"] !== undefined && output["ThumbprintList"]["member"] !== undefined) {
    contents.ThumbprintList = deserializeAws_querythumbprintListType(
      __getArrayIfSingleItem(output["ThumbprintList"]["member"]),
      context
    );
  }
  if (output["Url"] !== undefined) {
    contents.Url = output["Url"];
  }
  return contents;
};

const deserializeAws_queryGetOrganizationsAccessReportResponse = (
  output: any,
  context: __SerdeContext
): GetOrganizationsAccessReportResponse => {
  let contents: any = {
    __type: "GetOrganizationsAccessReportResponse",
    AccessDetails: undefined,
    ErrorDetails: undefined,
    IsTruncated: undefined,
    JobCompletionDate: undefined,
    JobCreationDate: undefined,
    JobStatus: undefined,
    Marker: undefined,
    NumberOfServicesAccessible: undefined,
    NumberOfServicesNotAccessed: undefined,
  };
  if (output.AccessDetails === "") {
    contents.AccessDetails = [];
  }
  if (output["AccessDetails"] !== undefined && output["AccessDetails"]["member"] !== undefined) {
    contents.AccessDetails = deserializeAws_queryAccessDetails(
      __getArrayIfSingleItem(output["AccessDetails"]["member"]),
      context
    );
  }
  if (output["ErrorDetails"] !== undefined) {
    contents.ErrorDetails = deserializeAws_queryErrorDetails(output["ErrorDetails"], context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = new Date(output["JobCreationDate"]);
  }
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = output["JobStatus"];
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output["NumberOfServicesAccessible"] !== undefined) {
    contents.NumberOfServicesAccessible = parseInt(output["NumberOfServicesAccessible"]);
  }
  if (output["NumberOfServicesNotAccessed"] !== undefined) {
    contents.NumberOfServicesNotAccessed = parseInt(output["NumberOfServicesNotAccessed"]);
  }
  return contents;
};

const deserializeAws_queryGetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  let contents: any = {
    __type: "GetPolicyResponse",
    Policy: undefined,
  };
  if (output["Policy"] !== undefined) {
    contents.Policy = deserializeAws_queryPolicy(output["Policy"], context);
  }
  return contents;
};

const deserializeAws_queryGetPolicyVersionResponse = (
  output: any,
  context: __SerdeContext
): GetPolicyVersionResponse => {
  let contents: any = {
    __type: "GetPolicyVersionResponse",
    PolicyVersion: undefined,
  };
  if (output["PolicyVersion"] !== undefined) {
    contents.PolicyVersion = deserializeAws_queryPolicyVersion(output["PolicyVersion"], context);
  }
  return contents;
};

const deserializeAws_queryGetRolePolicyResponse = (output: any, context: __SerdeContext): GetRolePolicyResponse => {
  let contents: any = {
    __type: "GetRolePolicyResponse",
    PolicyDocument: undefined,
    PolicyName: undefined,
    RoleName: undefined,
  };
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = output["PolicyDocument"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = output["RoleName"];
  }
  return contents;
};

const deserializeAws_queryGetRoleResponse = (output: any, context: __SerdeContext): GetRoleResponse => {
  let contents: any = {
    __type: "GetRoleResponse",
    Role: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = deserializeAws_queryRole(output["Role"], context);
  }
  return contents;
};

const deserializeAws_queryGetSAMLProviderResponse = (output: any, context: __SerdeContext): GetSAMLProviderResponse => {
  let contents: any = {
    __type: "GetSAMLProviderResponse",
    CreateDate: undefined,
    SAMLMetadataDocument: undefined,
    ValidUntil: undefined,
  };
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["SAMLMetadataDocument"] !== undefined) {
    contents.SAMLMetadataDocument = output["SAMLMetadataDocument"];
  }
  if (output["ValidUntil"] !== undefined) {
    contents.ValidUntil = new Date(output["ValidUntil"]);
  }
  return contents;
};

const deserializeAws_queryGetServerCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetServerCertificateResponse => {
  let contents: any = {
    __type: "GetServerCertificateResponse",
    ServerCertificate: undefined,
  };
  if (output["ServerCertificate"] !== undefined) {
    contents.ServerCertificate = deserializeAws_queryServerCertificate(output["ServerCertificate"], context);
  }
  return contents;
};

const deserializeAws_queryGetServiceLastAccessedDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLastAccessedDetailsResponse => {
  let contents: any = {
    __type: "GetServiceLastAccessedDetailsResponse",
    Error: undefined,
    IsTruncated: undefined,
    JobCompletionDate: undefined,
    JobCreationDate: undefined,
    JobStatus: undefined,
    Marker: undefined,
    ServicesLastAccessed: undefined,
  };
  if (output["Error"] !== undefined) {
    contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = new Date(output["JobCreationDate"]);
  }
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = output["JobStatus"];
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ServicesLastAccessed === "") {
    contents.ServicesLastAccessed = [];
  }
  if (output["ServicesLastAccessed"] !== undefined && output["ServicesLastAccessed"]["member"] !== undefined) {
    contents.ServicesLastAccessed = deserializeAws_queryServicesLastAccessed(
      __getArrayIfSingleItem(output["ServicesLastAccessed"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetServiceLastAccessedDetailsWithEntitiesResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLastAccessedDetailsWithEntitiesResponse => {
  let contents: any = {
    __type: "GetServiceLastAccessedDetailsWithEntitiesResponse",
    EntityDetailsList: undefined,
    Error: undefined,
    IsTruncated: undefined,
    JobCompletionDate: undefined,
    JobCreationDate: undefined,
    JobStatus: undefined,
    Marker: undefined,
  };
  if (output.EntityDetailsList === "") {
    contents.EntityDetailsList = [];
  }
  if (output["EntityDetailsList"] !== undefined && output["EntityDetailsList"]["member"] !== undefined) {
    contents.EntityDetailsList = deserializeAws_queryentityDetailsListType(
      __getArrayIfSingleItem(output["EntityDetailsList"]["member"]),
      context
    );
  }
  if (output["Error"] !== undefined) {
    contents.Error = deserializeAws_queryErrorDetails(output["Error"], context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["JobCompletionDate"] !== undefined) {
    contents.JobCompletionDate = new Date(output["JobCompletionDate"]);
  }
  if (output["JobCreationDate"] !== undefined) {
    contents.JobCreationDate = new Date(output["JobCreationDate"]);
  }
  if (output["JobStatus"] !== undefined) {
    contents.JobStatus = output["JobStatus"];
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryGetServiceLinkedRoleDeletionStatusResponse = (
  output: any,
  context: __SerdeContext
): GetServiceLinkedRoleDeletionStatusResponse => {
  let contents: any = {
    __type: "GetServiceLinkedRoleDeletionStatusResponse",
    Reason: undefined,
    Status: undefined,
  };
  if (output["Reason"] !== undefined) {
    contents.Reason = deserializeAws_queryDeletionTaskFailureReasonType(output["Reason"], context);
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  return contents;
};

const deserializeAws_queryGetSSHPublicKeyResponse = (output: any, context: __SerdeContext): GetSSHPublicKeyResponse => {
  let contents: any = {
    __type: "GetSSHPublicKeyResponse",
    SSHPublicKey: undefined,
  };
  if (output["SSHPublicKey"] !== undefined) {
    contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
  }
  return contents;
};

const deserializeAws_queryGetUserPolicyResponse = (output: any, context: __SerdeContext): GetUserPolicyResponse => {
  let contents: any = {
    __type: "GetUserPolicyResponse",
    PolicyDocument: undefined,
    PolicyName: undefined,
    UserName: undefined,
  };
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = output["PolicyDocument"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryGetUserResponse = (output: any, context: __SerdeContext): GetUserResponse => {
  let contents: any = {
    __type: "GetUserResponse",
    User: undefined,
  };
  if (output["User"] !== undefined) {
    contents.User = deserializeAws_queryUser(output["User"], context);
  }
  return contents;
};

const deserializeAws_queryGroup = (output: any, context: __SerdeContext): Group => {
  let contents: any = {
    __type: "Group",
    Arn: undefined,
    CreateDate: undefined,
    GroupId: undefined,
    GroupName: undefined,
    Path: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["GroupId"] !== undefined) {
    contents.GroupId = output["GroupId"];
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = output["GroupName"];
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  return contents;
};

const deserializeAws_queryGroupDetail = (output: any, context: __SerdeContext): GroupDetail => {
  let contents: any = {
    __type: "GroupDetail",
    Arn: undefined,
    AttachedManagedPolicies: undefined,
    CreateDate: undefined,
    GroupId: undefined,
    GroupName: undefined,
    GroupPolicyList: undefined,
    Path: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  }
  if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
    contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["GroupId"] !== undefined) {
    contents.GroupId = output["GroupId"];
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = output["GroupName"];
  }
  if (output.GroupPolicyList === "") {
    contents.GroupPolicyList = [];
  }
  if (output["GroupPolicyList"] !== undefined && output["GroupPolicyList"]["member"] !== undefined) {
    contents.GroupPolicyList = deserializeAws_querypolicyDetailListType(
      __getArrayIfSingleItem(output["GroupPolicyList"]["member"]),
      context
    );
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  return contents;
};

const deserializeAws_querygroupDetailListType = (output: any, context: __SerdeContext): GroupDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryGroupDetail(entry, context));
};

const deserializeAws_querygroupListType = (output: any, context: __SerdeContext): Group[] => {
  return (output || []).map((entry: any) => deserializeAws_queryGroup(entry, context));
};

const deserializeAws_querygroupNameListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryInstanceProfile = (output: any, context: __SerdeContext): InstanceProfile => {
  let contents: any = {
    __type: "InstanceProfile",
    Arn: undefined,
    CreateDate: undefined,
    InstanceProfileId: undefined,
    InstanceProfileName: undefined,
    Path: undefined,
    Roles: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["InstanceProfileId"] !== undefined) {
    contents.InstanceProfileId = output["InstanceProfileId"];
  }
  if (output["InstanceProfileName"] !== undefined) {
    contents.InstanceProfileName = output["InstanceProfileName"];
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output.Roles === "") {
    contents.Roles = [];
  }
  if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
    contents.Roles = deserializeAws_queryroleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryinstanceProfileListType = (output: any, context: __SerdeContext): InstanceProfile[] => {
  return (output || []).map((entry: any) => deserializeAws_queryInstanceProfile(entry, context));
};

const deserializeAws_queryInvalidAuthenticationCodeException = (
  output: any,
  context: __SerdeContext
): InvalidAuthenticationCodeException => {
  let contents: any = {
    __type: "InvalidAuthenticationCodeException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidCertificateException = (
  output: any,
  context: __SerdeContext
): InvalidCertificateException => {
  let contents: any = {
    __type: "InvalidCertificateException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidPublicKeyException = (
  output: any,
  context: __SerdeContext
): InvalidPublicKeyException => {
  let contents: any = {
    __type: "InvalidPublicKeyException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidUserTypeException = (
  output: any,
  context: __SerdeContext
): InvalidUserTypeException => {
  let contents: any = {
    __type: "InvalidUserTypeException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryKeyPairMismatchException = (
  output: any,
  context: __SerdeContext
): KeyPairMismatchException => {
  let contents: any = {
    __type: "KeyPairMismatchException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryListAccessKeysResponse = (output: any, context: __SerdeContext): ListAccessKeysResponse => {
  let contents: any = {
    __type: "ListAccessKeysResponse",
    AccessKeyMetadata: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.AccessKeyMetadata === "") {
    contents.AccessKeyMetadata = [];
  }
  if (output["AccessKeyMetadata"] !== undefined && output["AccessKeyMetadata"]["member"] !== undefined) {
    contents.AccessKeyMetadata = deserializeAws_queryaccessKeyMetadataListType(
      __getArrayIfSingleItem(output["AccessKeyMetadata"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListAccountAliasesResponse = (
  output: any,
  context: __SerdeContext
): ListAccountAliasesResponse => {
  let contents: any = {
    __type: "ListAccountAliasesResponse",
    AccountAliases: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.AccountAliases === "") {
    contents.AccountAliases = [];
  }
  if (output["AccountAliases"] !== undefined && output["AccountAliases"]["member"] !== undefined) {
    contents.AccountAliases = deserializeAws_queryaccountAliasListType(
      __getArrayIfSingleItem(output["AccountAliases"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListAttachedGroupPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedGroupPoliciesResponse => {
  let contents: any = {
    __type: "ListAttachedGroupPoliciesResponse",
    AttachedPolicies: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  }
  if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListAttachedRolePoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedRolePoliciesResponse => {
  let contents: any = {
    __type: "ListAttachedRolePoliciesResponse",
    AttachedPolicies: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  }
  if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListAttachedUserPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListAttachedUserPoliciesResponse => {
  let contents: any = {
    __type: "ListAttachedUserPoliciesResponse",
    AttachedPolicies: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.AttachedPolicies === "") {
    contents.AttachedPolicies = [];
  }
  if (output["AttachedPolicies"] !== undefined && output["AttachedPolicies"]["member"] !== undefined) {
    contents.AttachedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedPolicies"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListEntitiesForPolicyResponse = (
  output: any,
  context: __SerdeContext
): ListEntitiesForPolicyResponse => {
  let contents: any = {
    __type: "ListEntitiesForPolicyResponse",
    IsTruncated: undefined,
    Marker: undefined,
    PolicyGroups: undefined,
    PolicyRoles: undefined,
    PolicyUsers: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PolicyGroups === "") {
    contents.PolicyGroups = [];
  }
  if (output["PolicyGroups"] !== undefined && output["PolicyGroups"]["member"] !== undefined) {
    contents.PolicyGroups = deserializeAws_queryPolicyGroupListType(
      __getArrayIfSingleItem(output["PolicyGroups"]["member"]),
      context
    );
  }
  if (output.PolicyRoles === "") {
    contents.PolicyRoles = [];
  }
  if (output["PolicyRoles"] !== undefined && output["PolicyRoles"]["member"] !== undefined) {
    contents.PolicyRoles = deserializeAws_queryPolicyRoleListType(
      __getArrayIfSingleItem(output["PolicyRoles"]["member"]),
      context
    );
  }
  if (output.PolicyUsers === "") {
    contents.PolicyUsers = [];
  }
  if (output["PolicyUsers"] !== undefined && output["PolicyUsers"]["member"] !== undefined) {
    contents.PolicyUsers = deserializeAws_queryPolicyUserListType(
      __getArrayIfSingleItem(output["PolicyUsers"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListGroupPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListGroupPoliciesResponse => {
  let contents: any = {
    __type: "ListGroupPoliciesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    PolicyNames: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_querypolicyNameListType(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListGroupsForUserResponse = (
  output: any,
  context: __SerdeContext
): ListGroupsForUserResponse => {
  let contents: any = {
    __type: "ListGroupsForUserResponse",
    Groups: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.Groups === "") {
    contents.Groups = [];
  }
  if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
    contents.Groups = deserializeAws_querygroupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  let contents: any = {
    __type: "ListGroupsResponse",
    Groups: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.Groups === "") {
    contents.Groups = [];
  }
  if (output["Groups"] !== undefined && output["Groups"]["member"] !== undefined) {
    contents.Groups = deserializeAws_querygroupListType(__getArrayIfSingleItem(output["Groups"]["member"]), context);
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListInstanceProfilesForRoleResponse = (
  output: any,
  context: __SerdeContext
): ListInstanceProfilesForRoleResponse => {
  let contents: any = {
    __type: "ListInstanceProfilesForRoleResponse",
    InstanceProfiles: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.InstanceProfiles === "") {
    contents.InstanceProfiles = [];
  }
  if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
    contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfiles"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListInstanceProfilesResponse = (
  output: any,
  context: __SerdeContext
): ListInstanceProfilesResponse => {
  let contents: any = {
    __type: "ListInstanceProfilesResponse",
    InstanceProfiles: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.InstanceProfiles === "") {
    contents.InstanceProfiles = [];
  }
  if (output["InstanceProfiles"] !== undefined && output["InstanceProfiles"]["member"] !== undefined) {
    contents.InstanceProfiles = deserializeAws_queryinstanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfiles"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListMFADevicesResponse = (output: any, context: __SerdeContext): ListMFADevicesResponse => {
  let contents: any = {
    __type: "ListMFADevicesResponse",
    IsTruncated: undefined,
    MFADevices: undefined,
    Marker: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output.MFADevices === "") {
    contents.MFADevices = [];
  }
  if (output["MFADevices"] !== undefined && output["MFADevices"]["member"] !== undefined) {
    contents.MFADevices = deserializeAws_querymfaDeviceListType(
      __getArrayIfSingleItem(output["MFADevices"]["member"]),
      context
    );
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListOpenIDConnectProvidersResponse = (
  output: any,
  context: __SerdeContext
): ListOpenIDConnectProvidersResponse => {
  let contents: any = {
    __type: "ListOpenIDConnectProvidersResponse",
    OpenIDConnectProviderList: undefined,
  };
  if (output.OpenIDConnectProviderList === "") {
    contents.OpenIDConnectProviderList = [];
  }
  if (
    output["OpenIDConnectProviderList"] !== undefined &&
    output["OpenIDConnectProviderList"]["member"] !== undefined
  ) {
    contents.OpenIDConnectProviderList = deserializeAws_queryOpenIDConnectProviderListType(
      __getArrayIfSingleItem(output["OpenIDConnectProviderList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListPoliciesGrantingServiceAccessEntry = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessEntry => {
  let contents: any = {
    __type: "ListPoliciesGrantingServiceAccessEntry",
    Policies: undefined,
    ServiceNamespace: undefined,
  };
  if (output.Policies === "") {
    contents.Policies = [];
  }
  if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = deserializeAws_querypolicyGrantingServiceAccessListType(
      __getArrayIfSingleItem(output["Policies"]["member"]),
      context
    );
  }
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = output["ServiceNamespace"];
  }
  return contents;
};

const deserializeAws_queryListPoliciesGrantingServiceAccessResponse = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessResponse => {
  let contents: any = {
    __type: "ListPoliciesGrantingServiceAccessResponse",
    IsTruncated: undefined,
    Marker: undefined,
    PoliciesGrantingServiceAccess: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PoliciesGrantingServiceAccess === "") {
    contents.PoliciesGrantingServiceAccess = [];
  }
  if (
    output["PoliciesGrantingServiceAccess"] !== undefined &&
    output["PoliciesGrantingServiceAccess"]["member"] !== undefined
  ) {
    contents.PoliciesGrantingServiceAccess = deserializeAws_querylistPolicyGrantingServiceAccessResponseListType(
      __getArrayIfSingleItem(output["PoliciesGrantingServiceAccess"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  let contents: any = {
    __type: "ListPoliciesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Policies: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Policies === "") {
    contents.Policies = [];
  }
  if (output["Policies"] !== undefined && output["Policies"]["member"] !== undefined) {
    contents.Policies = deserializeAws_querypolicyListType(
      __getArrayIfSingleItem(output["Policies"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querylistPolicyGrantingServiceAccessResponseListType = (
  output: any,
  context: __SerdeContext
): ListPoliciesGrantingServiceAccessEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_queryListPoliciesGrantingServiceAccessEntry(entry, context));
};

const deserializeAws_queryListPolicyVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListPolicyVersionsResponse => {
  let contents: any = {
    __type: "ListPolicyVersionsResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Versions: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Versions === "") {
    contents.Versions = [];
  }
  if (output["Versions"] !== undefined && output["Versions"]["member"] !== undefined) {
    contents.Versions = deserializeAws_querypolicyDocumentVersionListType(
      __getArrayIfSingleItem(output["Versions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListRolePoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListRolePoliciesResponse => {
  let contents: any = {
    __type: "ListRolePoliciesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    PolicyNames: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_querypolicyNameListType(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListRolesResponse = (output: any, context: __SerdeContext): ListRolesResponse => {
  let contents: any = {
    __type: "ListRolesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Roles: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Roles === "") {
    contents.Roles = [];
  }
  if (output["Roles"] !== undefined && output["Roles"]["member"] !== undefined) {
    contents.Roles = deserializeAws_queryroleListType(__getArrayIfSingleItem(output["Roles"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryListRoleTagsResponse = (output: any, context: __SerdeContext): ListRoleTagsResponse => {
  let contents: any = {
    __type: "ListRoleTagsResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Tags: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryListSAMLProvidersResponse = (
  output: any,
  context: __SerdeContext
): ListSAMLProvidersResponse => {
  let contents: any = {
    __type: "ListSAMLProvidersResponse",
    SAMLProviderList: undefined,
  };
  if (output.SAMLProviderList === "") {
    contents.SAMLProviderList = [];
  }
  if (output["SAMLProviderList"] !== undefined && output["SAMLProviderList"]["member"] !== undefined) {
    contents.SAMLProviderList = deserializeAws_querySAMLProviderListType(
      __getArrayIfSingleItem(output["SAMLProviderList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListServerCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListServerCertificatesResponse => {
  let contents: any = {
    __type: "ListServerCertificatesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    ServerCertificateMetadataList: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.ServerCertificateMetadataList === "") {
    contents.ServerCertificateMetadataList = [];
  }
  if (
    output["ServerCertificateMetadataList"] !== undefined &&
    output["ServerCertificateMetadataList"]["member"] !== undefined
  ) {
    contents.ServerCertificateMetadataList = deserializeAws_queryserverCertificateMetadataListType(
      __getArrayIfSingleItem(output["ServerCertificateMetadataList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListServiceSpecificCredentialsResponse = (
  output: any,
  context: __SerdeContext
): ListServiceSpecificCredentialsResponse => {
  let contents: any = {
    __type: "ListServiceSpecificCredentialsResponse",
    ServiceSpecificCredentials: undefined,
  };
  if (output.ServiceSpecificCredentials === "") {
    contents.ServiceSpecificCredentials = [];
  }
  if (
    output["ServiceSpecificCredentials"] !== undefined &&
    output["ServiceSpecificCredentials"]["member"] !== undefined
  ) {
    contents.ServiceSpecificCredentials = deserializeAws_queryServiceSpecificCredentialsListType(
      __getArrayIfSingleItem(output["ServiceSpecificCredentials"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListSigningCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListSigningCertificatesResponse => {
  let contents: any = {
    __type: "ListSigningCertificatesResponse",
    Certificates: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.Certificates === "") {
    contents.Certificates = [];
  }
  if (output["Certificates"] !== undefined && output["Certificates"]["member"] !== undefined) {
    contents.Certificates = deserializeAws_querycertificateListType(
      __getArrayIfSingleItem(output["Certificates"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_queryListSSHPublicKeysResponse = (
  output: any,
  context: __SerdeContext
): ListSSHPublicKeysResponse => {
  let contents: any = {
    __type: "ListSSHPublicKeysResponse",
    IsTruncated: undefined,
    Marker: undefined,
    SSHPublicKeys: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.SSHPublicKeys === "") {
    contents.SSHPublicKeys = [];
  }
  if (output["SSHPublicKeys"] !== undefined && output["SSHPublicKeys"]["member"] !== undefined) {
    contents.SSHPublicKeys = deserializeAws_querySSHPublicKeyListType(
      __getArrayIfSingleItem(output["SSHPublicKeys"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListUserPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListUserPoliciesResponse => {
  let contents: any = {
    __type: "ListUserPoliciesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    PolicyNames: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.PolicyNames === "") {
    contents.PolicyNames = [];
  }
  if (output["PolicyNames"] !== undefined && output["PolicyNames"]["member"] !== undefined) {
    contents.PolicyNames = deserializeAws_querypolicyNameListType(
      __getArrayIfSingleItem(output["PolicyNames"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  let contents: any = {
    __type: "ListUsersResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Users: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Users === "") {
    contents.Users = [];
  }
  if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
    contents.Users = deserializeAws_queryuserListType(__getArrayIfSingleItem(output["Users"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryListUserTagsResponse = (output: any, context: __SerdeContext): ListUserTagsResponse => {
  let contents: any = {
    __type: "ListUserTagsResponse",
    IsTruncated: undefined,
    Marker: undefined,
    Tags: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryListVirtualMFADevicesResponse = (
  output: any,
  context: __SerdeContext
): ListVirtualMFADevicesResponse => {
  let contents: any = {
    __type: "ListVirtualMFADevicesResponse",
    IsTruncated: undefined,
    Marker: undefined,
    VirtualMFADevices: undefined,
  };
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  if (output.VirtualMFADevices === "") {
    contents.VirtualMFADevices = [];
  }
  if (output["VirtualMFADevices"] !== undefined && output["VirtualMFADevices"]["member"] !== undefined) {
    contents.VirtualMFADevices = deserializeAws_queryvirtualMFADeviceListType(
      __getArrayIfSingleItem(output["VirtualMFADevices"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryLoginProfile = (output: any, context: __SerdeContext): LoginProfile => {
  let contents: any = {
    __type: "LoginProfile",
    CreateDate: undefined,
    PasswordResetRequired: undefined,
    UserName: undefined,
  };
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["PasswordResetRequired"] !== undefined) {
    contents.PasswordResetRequired = output["PasswordResetRequired"] == "true";
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryMalformedCertificateException = (
  output: any,
  context: __SerdeContext
): MalformedCertificateException => {
  let contents: any = {
    __type: "MalformedCertificateException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryMalformedPolicyDocumentException = (
  output: any,
  context: __SerdeContext
): MalformedPolicyDocumentException => {
  let contents: any = {
    __type: "MalformedPolicyDocumentException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryManagedPolicyDetail = (output: any, context: __SerdeContext): ManagedPolicyDetail => {
  let contents: any = {
    __type: "ManagedPolicyDetail",
    Arn: undefined,
    AttachmentCount: undefined,
    CreateDate: undefined,
    DefaultVersionId: undefined,
    Description: undefined,
    IsAttachable: undefined,
    Path: undefined,
    PermissionsBoundaryUsageCount: undefined,
    PolicyId: undefined,
    PolicyName: undefined,
    PolicyVersionList: undefined,
    UpdateDate: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["AttachmentCount"] !== undefined) {
    contents.AttachmentCount = parseInt(output["AttachmentCount"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IsAttachable"] !== undefined) {
    contents.IsAttachable = output["IsAttachable"] == "true";
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundaryUsageCount"] !== undefined) {
    contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
  }
  if (output["PolicyId"] !== undefined) {
    contents.PolicyId = output["PolicyId"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output.PolicyVersionList === "") {
    contents.PolicyVersionList = [];
  }
  if (output["PolicyVersionList"] !== undefined && output["PolicyVersionList"]["member"] !== undefined) {
    contents.PolicyVersionList = deserializeAws_querypolicyDocumentVersionListType(
      __getArrayIfSingleItem(output["PolicyVersionList"]["member"]),
      context
    );
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = new Date(output["UpdateDate"]);
  }
  return contents;
};

const deserializeAws_queryManagedPolicyDetailListType = (
  output: any,
  context: __SerdeContext
): ManagedPolicyDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryManagedPolicyDetail(entry, context));
};

const deserializeAws_queryMFADevice = (output: any, context: __SerdeContext): MFADevice => {
  let contents: any = {
    __type: "MFADevice",
    EnableDate: undefined,
    SerialNumber: undefined,
    UserName: undefined,
  };
  if (output["EnableDate"] !== undefined) {
    contents.EnableDate = new Date(output["EnableDate"]);
  }
  if (output["SerialNumber"] !== undefined) {
    contents.SerialNumber = output["SerialNumber"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_querymfaDeviceListType = (output: any, context: __SerdeContext): MFADevice[] => {
  return (output || []).map((entry: any) => deserializeAws_queryMFADevice(entry, context));
};

const deserializeAws_queryNoSuchEntityException = (output: any, context: __SerdeContext): NoSuchEntityException => {
  let contents: any = {
    __type: "NoSuchEntityException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryOpenIDConnectProviderListEntry = (
  output: any,
  context: __SerdeContext
): OpenIDConnectProviderListEntry => {
  let contents: any = {
    __type: "OpenIDConnectProviderListEntry",
    Arn: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  return contents;
};

const deserializeAws_queryOpenIDConnectProviderListType = (
  output: any,
  context: __SerdeContext
): OpenIDConnectProviderListEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_queryOpenIDConnectProviderListEntry(entry, context));
};

const deserializeAws_queryOrganizationsDecisionDetail = (
  output: any,
  context: __SerdeContext
): OrganizationsDecisionDetail => {
  let contents: any = {
    __type: "OrganizationsDecisionDetail",
    AllowedByOrganizations: undefined,
  };
  if (output["AllowedByOrganizations"] !== undefined) {
    contents.AllowedByOrganizations = output["AllowedByOrganizations"] == "true";
  }
  return contents;
};

const deserializeAws_queryPasswordPolicy = (output: any, context: __SerdeContext): PasswordPolicy => {
  let contents: any = {
    __type: "PasswordPolicy",
    AllowUsersToChangePassword: undefined,
    ExpirePasswords: undefined,
    HardExpiry: undefined,
    MaxPasswordAge: undefined,
    MinimumPasswordLength: undefined,
    PasswordReusePrevention: undefined,
    RequireLowercaseCharacters: undefined,
    RequireNumbers: undefined,
    RequireSymbols: undefined,
    RequireUppercaseCharacters: undefined,
  };
  if (output["AllowUsersToChangePassword"] !== undefined) {
    contents.AllowUsersToChangePassword = output["AllowUsersToChangePassword"] == "true";
  }
  if (output["ExpirePasswords"] !== undefined) {
    contents.ExpirePasswords = output["ExpirePasswords"] == "true";
  }
  if (output["HardExpiry"] !== undefined) {
    contents.HardExpiry = output["HardExpiry"] == "true";
  }
  if (output["MaxPasswordAge"] !== undefined) {
    contents.MaxPasswordAge = parseInt(output["MaxPasswordAge"]);
  }
  if (output["MinimumPasswordLength"] !== undefined) {
    contents.MinimumPasswordLength = parseInt(output["MinimumPasswordLength"]);
  }
  if (output["PasswordReusePrevention"] !== undefined) {
    contents.PasswordReusePrevention = parseInt(output["PasswordReusePrevention"]);
  }
  if (output["RequireLowercaseCharacters"] !== undefined) {
    contents.RequireLowercaseCharacters = output["RequireLowercaseCharacters"] == "true";
  }
  if (output["RequireNumbers"] !== undefined) {
    contents.RequireNumbers = output["RequireNumbers"] == "true";
  }
  if (output["RequireSymbols"] !== undefined) {
    contents.RequireSymbols = output["RequireSymbols"] == "true";
  }
  if (output["RequireUppercaseCharacters"] !== undefined) {
    contents.RequireUppercaseCharacters = output["RequireUppercaseCharacters"] == "true";
  }
  return contents;
};

const deserializeAws_queryPasswordPolicyViolationException = (
  output: any,
  context: __SerdeContext
): PasswordPolicyViolationException => {
  let contents: any = {
    __type: "PasswordPolicyViolationException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPolicy = (output: any, context: __SerdeContext): Policy => {
  let contents: any = {
    __type: "Policy",
    Arn: undefined,
    AttachmentCount: undefined,
    CreateDate: undefined,
    DefaultVersionId: undefined,
    Description: undefined,
    IsAttachable: undefined,
    Path: undefined,
    PermissionsBoundaryUsageCount: undefined,
    PolicyId: undefined,
    PolicyName: undefined,
    UpdateDate: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["AttachmentCount"] !== undefined) {
    contents.AttachmentCount = parseInt(output["AttachmentCount"]);
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["DefaultVersionId"] !== undefined) {
    contents.DefaultVersionId = output["DefaultVersionId"];
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["IsAttachable"] !== undefined) {
    contents.IsAttachable = output["IsAttachable"] == "true";
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundaryUsageCount"] !== undefined) {
    contents.PermissionsBoundaryUsageCount = parseInt(output["PermissionsBoundaryUsageCount"]);
  }
  if (output["PolicyId"] !== undefined) {
    contents.PolicyId = output["PolicyId"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["UpdateDate"] !== undefined) {
    contents.UpdateDate = new Date(output["UpdateDate"]);
  }
  return contents;
};

const deserializeAws_queryPolicyDetail = (output: any, context: __SerdeContext): PolicyDetail => {
  let contents: any = {
    __type: "PolicyDetail",
    PolicyDocument: undefined,
    PolicyName: undefined,
  };
  if (output["PolicyDocument"] !== undefined) {
    contents.PolicyDocument = output["PolicyDocument"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  return contents;
};

const deserializeAws_querypolicyDetailListType = (output: any, context: __SerdeContext): PolicyDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyDetail(entry, context));
};

const deserializeAws_querypolicyDocumentVersionListType = (output: any, context: __SerdeContext): PolicyVersion[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyVersion(entry, context));
};

const deserializeAws_queryPolicyEvaluationException = (
  output: any,
  context: __SerdeContext
): PolicyEvaluationException => {
  let contents: any = {
    __type: "PolicyEvaluationException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPolicyGrantingServiceAccess = (
  output: any,
  context: __SerdeContext
): PolicyGrantingServiceAccess => {
  let contents: any = {
    __type: "PolicyGrantingServiceAccess",
    EntityName: undefined,
    EntityType: undefined,
    PolicyArn: undefined,
    PolicyName: undefined,
    PolicyType: undefined,
  };
  if (output["EntityName"] !== undefined) {
    contents.EntityName = output["EntityName"];
  }
  if (output["EntityType"] !== undefined) {
    contents.EntityType = output["EntityType"];
  }
  if (output["PolicyArn"] !== undefined) {
    contents.PolicyArn = output["PolicyArn"];
  }
  if (output["PolicyName"] !== undefined) {
    contents.PolicyName = output["PolicyName"];
  }
  if (output["PolicyType"] !== undefined) {
    contents.PolicyType = output["PolicyType"];
  }
  return contents;
};

const deserializeAws_querypolicyGrantingServiceAccessListType = (
  output: any,
  context: __SerdeContext
): PolicyGrantingServiceAccess[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyGrantingServiceAccess(entry, context));
};

const deserializeAws_queryPolicyGroup = (output: any, context: __SerdeContext): PolicyGroup => {
  let contents: any = {
    __type: "PolicyGroup",
    GroupId: undefined,
    GroupName: undefined,
  };
  if (output["GroupId"] !== undefined) {
    contents.GroupId = output["GroupId"];
  }
  if (output["GroupName"] !== undefined) {
    contents.GroupName = output["GroupName"];
  }
  return contents;
};

const deserializeAws_queryPolicyGroupListType = (output: any, context: __SerdeContext): PolicyGroup[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyGroup(entry, context));
};

const deserializeAws_querypolicyListType = (output: any, context: __SerdeContext): Policy[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicy(entry, context));
};

const deserializeAws_querypolicyNameListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryPolicyNotAttachableException = (
  output: any,
  context: __SerdeContext
): PolicyNotAttachableException => {
  let contents: any = {
    __type: "PolicyNotAttachableException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPolicyRole = (output: any, context: __SerdeContext): PolicyRole => {
  let contents: any = {
    __type: "PolicyRole",
    RoleId: undefined,
    RoleName: undefined,
  };
  if (output["RoleId"] !== undefined) {
    contents.RoleId = output["RoleId"];
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = output["RoleName"];
  }
  return contents;
};

const deserializeAws_queryPolicyRoleListType = (output: any, context: __SerdeContext): PolicyRole[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyRole(entry, context));
};

const deserializeAws_queryPolicyUser = (output: any, context: __SerdeContext): PolicyUser => {
  let contents: any = {
    __type: "PolicyUser",
    UserId: undefined,
    UserName: undefined,
  };
  if (output["UserId"] !== undefined) {
    contents.UserId = output["UserId"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryPolicyUserListType = (output: any, context: __SerdeContext): PolicyUser[] => {
  return (output || []).map((entry: any) => deserializeAws_queryPolicyUser(entry, context));
};

const deserializeAws_queryPolicyVersion = (output: any, context: __SerdeContext): PolicyVersion => {
  let contents: any = {
    __type: "PolicyVersion",
    CreateDate: undefined,
    Document: undefined,
    IsDefaultVersion: undefined,
    VersionId: undefined,
  };
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["Document"] !== undefined) {
    contents.Document = output["Document"];
  }
  if (output["IsDefaultVersion"] !== undefined) {
    contents.IsDefaultVersion = output["IsDefaultVersion"] == "true";
  }
  if (output["VersionId"] !== undefined) {
    contents.VersionId = output["VersionId"];
  }
  return contents;
};

const deserializeAws_queryPosition = (output: any, context: __SerdeContext): Position => {
  let contents: any = {
    __type: "Position",
    Column: undefined,
    Line: undefined,
  };
  if (output["Column"] !== undefined) {
    contents.Column = parseInt(output["Column"]);
  }
  if (output["Line"] !== undefined) {
    contents.Line = parseInt(output["Line"]);
  }
  return contents;
};

const deserializeAws_queryReportGenerationLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReportGenerationLimitExceededException => {
  let contents: any = {
    __type: "ReportGenerationLimitExceededException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryResetServiceSpecificCredentialResponse = (
  output: any,
  context: __SerdeContext
): ResetServiceSpecificCredentialResponse => {
  let contents: any = {
    __type: "ResetServiceSpecificCredentialResponse",
    ServiceSpecificCredential: undefined,
  };
  if (output["ServiceSpecificCredential"] !== undefined) {
    contents.ServiceSpecificCredential = deserializeAws_queryServiceSpecificCredential(
      output["ServiceSpecificCredential"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceSpecificResult = (output: any, context: __SerdeContext): ResourceSpecificResult => {
  let contents: any = {
    __type: "ResourceSpecificResult",
    EvalDecisionDetails: undefined,
    EvalResourceDecision: undefined,
    EvalResourceName: undefined,
    MatchedStatements: undefined,
    MissingContextValues: undefined,
  };
  if (output.EvalDecisionDetails === "") {
    contents.EvalDecisionDetails = {};
  }
  if (output["EvalDecisionDetails"] !== undefined && output["EvalDecisionDetails"]["entry"] !== undefined) {
    contents.EvalDecisionDetails = deserializeAws_queryEvalDecisionDetailsType(
      __getArrayIfSingleItem(output["EvalDecisionDetails"]["entry"]),
      context
    );
  }
  if (output["EvalResourceDecision"] !== undefined) {
    contents.EvalResourceDecision = output["EvalResourceDecision"];
  }
  if (output["EvalResourceName"] !== undefined) {
    contents.EvalResourceName = output["EvalResourceName"];
  }
  if (output.MatchedStatements === "") {
    contents.MatchedStatements = [];
  }
  if (output["MatchedStatements"] !== undefined && output["MatchedStatements"]["member"] !== undefined) {
    contents.MatchedStatements = deserializeAws_queryStatementListType(
      __getArrayIfSingleItem(output["MatchedStatements"]["member"]),
      context
    );
  }
  if (output.MissingContextValues === "") {
    contents.MissingContextValues = [];
  }
  if (output["MissingContextValues"] !== undefined && output["MissingContextValues"]["member"] !== undefined) {
    contents.MissingContextValues = deserializeAws_queryContextKeyNamesResultListType(
      __getArrayIfSingleItem(output["MissingContextValues"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryResourceSpecificResultListType = (
  output: any,
  context: __SerdeContext
): ResourceSpecificResult[] => {
  return (output || []).map((entry: any) => deserializeAws_queryResourceSpecificResult(entry, context));
};

const deserializeAws_queryRole = (output: any, context: __SerdeContext): Role => {
  let contents: any = {
    __type: "Role",
    Arn: undefined,
    AssumeRolePolicyDocument: undefined,
    CreateDate: undefined,
    Description: undefined,
    MaxSessionDuration: undefined,
    Path: undefined,
    PermissionsBoundary: undefined,
    RoleId: undefined,
    RoleLastUsed: undefined,
    RoleName: undefined,
    Tags: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["AssumeRolePolicyDocument"] !== undefined) {
    contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["Description"] !== undefined) {
    contents.Description = output["Description"];
  }
  if (output["MaxSessionDuration"] !== undefined) {
    contents.MaxSessionDuration = parseInt(output["MaxSessionDuration"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(
      output["PermissionsBoundary"],
      context
    );
  }
  if (output["RoleId"] !== undefined) {
    contents.RoleId = output["RoleId"];
  }
  if (output["RoleLastUsed"] !== undefined) {
    contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = output["RoleName"];
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryRoleDetail = (output: any, context: __SerdeContext): RoleDetail => {
  let contents: any = {
    __type: "RoleDetail",
    Arn: undefined,
    AssumeRolePolicyDocument: undefined,
    AttachedManagedPolicies: undefined,
    CreateDate: undefined,
    InstanceProfileList: undefined,
    Path: undefined,
    PermissionsBoundary: undefined,
    RoleId: undefined,
    RoleLastUsed: undefined,
    RoleName: undefined,
    RolePolicyList: undefined,
    Tags: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["AssumeRolePolicyDocument"] !== undefined) {
    contents.AssumeRolePolicyDocument = output["AssumeRolePolicyDocument"];
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  }
  if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
    contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output.InstanceProfileList === "") {
    contents.InstanceProfileList = [];
  }
  if (output["InstanceProfileList"] !== undefined && output["InstanceProfileList"]["member"] !== undefined) {
    contents.InstanceProfileList = deserializeAws_queryinstanceProfileListType(
      __getArrayIfSingleItem(output["InstanceProfileList"]["member"]),
      context
    );
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(
      output["PermissionsBoundary"],
      context
    );
  }
  if (output["RoleId"] !== undefined) {
    contents.RoleId = output["RoleId"];
  }
  if (output["RoleLastUsed"] !== undefined) {
    contents.RoleLastUsed = deserializeAws_queryRoleLastUsed(output["RoleLastUsed"], context);
  }
  if (output["RoleName"] !== undefined) {
    contents.RoleName = output["RoleName"];
  }
  if (output.RolePolicyList === "") {
    contents.RolePolicyList = [];
  }
  if (output["RolePolicyList"] !== undefined && output["RolePolicyList"]["member"] !== undefined) {
    contents.RolePolicyList = deserializeAws_querypolicyDetailListType(
      __getArrayIfSingleItem(output["RolePolicyList"]["member"]),
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryroleDetailListType = (output: any, context: __SerdeContext): RoleDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryRoleDetail(entry, context));
};

const deserializeAws_queryRoleLastUsed = (output: any, context: __SerdeContext): RoleLastUsed => {
  let contents: any = {
    __type: "RoleLastUsed",
    LastUsedDate: undefined,
    Region: undefined,
  };
  if (output["LastUsedDate"] !== undefined) {
    contents.LastUsedDate = new Date(output["LastUsedDate"]);
  }
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  return contents;
};

const deserializeAws_queryroleListType = (output: any, context: __SerdeContext): Role[] => {
  return (output || []).map((entry: any) => deserializeAws_queryRole(entry, context));
};

const deserializeAws_queryRoleUsageListType = (output: any, context: __SerdeContext): RoleUsageType[] => {
  return (output || []).map((entry: any) => deserializeAws_queryRoleUsageType(entry, context));
};

const deserializeAws_queryRoleUsageType = (output: any, context: __SerdeContext): RoleUsageType => {
  let contents: any = {
    __type: "RoleUsageType",
    Region: undefined,
    Resources: undefined,
  };
  if (output["Region"] !== undefined) {
    contents.Region = output["Region"];
  }
  if (output.Resources === "") {
    contents.Resources = [];
  }
  if (output["Resources"] !== undefined && output["Resources"]["member"] !== undefined) {
    contents.Resources = deserializeAws_queryArnListType(
      __getArrayIfSingleItem(output["Resources"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_querySAMLProviderListEntry = (output: any, context: __SerdeContext): SAMLProviderListEntry => {
  let contents: any = {
    __type: "SAMLProviderListEntry",
    Arn: undefined,
    CreateDate: undefined,
    ValidUntil: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["ValidUntil"] !== undefined) {
    contents.ValidUntil = new Date(output["ValidUntil"]);
  }
  return contents;
};

const deserializeAws_querySAMLProviderListType = (output: any, context: __SerdeContext): SAMLProviderListEntry[] => {
  return (output || []).map((entry: any) => deserializeAws_querySAMLProviderListEntry(entry, context));
};

const deserializeAws_queryServerCertificate = (output: any, context: __SerdeContext): ServerCertificate => {
  let contents: any = {
    __type: "ServerCertificate",
    CertificateBody: undefined,
    CertificateChain: undefined,
    ServerCertificateMetadata: undefined,
  };
  if (output["CertificateBody"] !== undefined) {
    contents.CertificateBody = output["CertificateBody"];
  }
  if (output["CertificateChain"] !== undefined) {
    contents.CertificateChain = output["CertificateChain"];
  }
  if (output["ServerCertificateMetadata"] !== undefined) {
    contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(
      output["ServerCertificateMetadata"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryServerCertificateMetadata = (
  output: any,
  context: __SerdeContext
): ServerCertificateMetadata => {
  let contents: any = {
    __type: "ServerCertificateMetadata",
    Arn: undefined,
    Expiration: undefined,
    Path: undefined,
    ServerCertificateId: undefined,
    ServerCertificateName: undefined,
    UploadDate: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["Expiration"] !== undefined) {
    contents.Expiration = new Date(output["Expiration"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["ServerCertificateId"] !== undefined) {
    contents.ServerCertificateId = output["ServerCertificateId"];
  }
  if (output["ServerCertificateName"] !== undefined) {
    contents.ServerCertificateName = output["ServerCertificateName"];
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = new Date(output["UploadDate"]);
  }
  return contents;
};

const deserializeAws_queryserverCertificateMetadataListType = (
  output: any,
  context: __SerdeContext
): ServerCertificateMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_queryServerCertificateMetadata(entry, context));
};

const deserializeAws_queryServiceFailureException = (output: any, context: __SerdeContext): ServiceFailureException => {
  let contents: any = {
    __type: "ServiceFailureException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryServiceLastAccessed = (output: any, context: __SerdeContext): ServiceLastAccessed => {
  let contents: any = {
    __type: "ServiceLastAccessed",
    LastAuthenticated: undefined,
    LastAuthenticatedEntity: undefined,
    ServiceName: undefined,
    ServiceNamespace: undefined,
    TotalAuthenticatedEntities: undefined,
  };
  if (output["LastAuthenticated"] !== undefined) {
    contents.LastAuthenticated = new Date(output["LastAuthenticated"]);
  }
  if (output["LastAuthenticatedEntity"] !== undefined) {
    contents.LastAuthenticatedEntity = output["LastAuthenticatedEntity"];
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = output["ServiceName"];
  }
  if (output["ServiceNamespace"] !== undefined) {
    contents.ServiceNamespace = output["ServiceNamespace"];
  }
  if (output["TotalAuthenticatedEntities"] !== undefined) {
    contents.TotalAuthenticatedEntities = parseInt(output["TotalAuthenticatedEntities"]);
  }
  return contents;
};

const deserializeAws_queryServiceNotSupportedException = (
  output: any,
  context: __SerdeContext
): ServiceNotSupportedException => {
  let contents: any = {
    __type: "ServiceNotSupportedException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryServicesLastAccessed = (output: any, context: __SerdeContext): ServiceLastAccessed[] => {
  return (output || []).map((entry: any) => deserializeAws_queryServiceLastAccessed(entry, context));
};

const deserializeAws_queryServiceSpecificCredential = (
  output: any,
  context: __SerdeContext
): ServiceSpecificCredential => {
  let contents: any = {
    __type: "ServiceSpecificCredential",
    CreateDate: undefined,
    ServiceName: undefined,
    ServicePassword: undefined,
    ServiceSpecificCredentialId: undefined,
    ServiceUserName: undefined,
    Status: undefined,
    UserName: undefined,
  };
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = output["ServiceName"];
  }
  if (output["ServicePassword"] !== undefined) {
    contents.ServicePassword = output["ServicePassword"];
  }
  if (output["ServiceSpecificCredentialId"] !== undefined) {
    contents.ServiceSpecificCredentialId = output["ServiceSpecificCredentialId"];
  }
  if (output["ServiceUserName"] !== undefined) {
    contents.ServiceUserName = output["ServiceUserName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryServiceSpecificCredentialMetadata = (
  output: any,
  context: __SerdeContext
): ServiceSpecificCredentialMetadata => {
  let contents: any = {
    __type: "ServiceSpecificCredentialMetadata",
    CreateDate: undefined,
    ServiceName: undefined,
    ServiceSpecificCredentialId: undefined,
    ServiceUserName: undefined,
    Status: undefined,
    UserName: undefined,
  };
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["ServiceName"] !== undefined) {
    contents.ServiceName = output["ServiceName"];
  }
  if (output["ServiceSpecificCredentialId"] !== undefined) {
    contents.ServiceSpecificCredentialId = output["ServiceSpecificCredentialId"];
  }
  if (output["ServiceUserName"] !== undefined) {
    contents.ServiceUserName = output["ServiceUserName"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryServiceSpecificCredentialsListType = (
  output: any,
  context: __SerdeContext
): ServiceSpecificCredentialMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_queryServiceSpecificCredentialMetadata(entry, context));
};

const deserializeAws_querySigningCertificate = (output: any, context: __SerdeContext): SigningCertificate => {
  let contents: any = {
    __type: "SigningCertificate",
    CertificateBody: undefined,
    CertificateId: undefined,
    Status: undefined,
    UploadDate: undefined,
    UserName: undefined,
  };
  if (output["CertificateBody"] !== undefined) {
    contents.CertificateBody = output["CertificateBody"];
  }
  if (output["CertificateId"] !== undefined) {
    contents.CertificateId = output["CertificateId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = new Date(output["UploadDate"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_querySimulatePolicyResponse = (output: any, context: __SerdeContext): SimulatePolicyResponse => {
  let contents: any = {
    __type: "SimulatePolicyResponse",
    EvaluationResults: undefined,
    IsTruncated: undefined,
    Marker: undefined,
  };
  if (output.EvaluationResults === "") {
    contents.EvaluationResults = [];
  }
  if (output["EvaluationResults"] !== undefined && output["EvaluationResults"]["member"] !== undefined) {
    contents.EvaluationResults = deserializeAws_queryEvaluationResultsListType(
      __getArrayIfSingleItem(output["EvaluationResults"]["member"]),
      context
    );
  }
  if (output["IsTruncated"] !== undefined) {
    contents.IsTruncated = output["IsTruncated"] == "true";
  }
  if (output["Marker"] !== undefined) {
    contents.Marker = output["Marker"];
  }
  return contents;
};

const deserializeAws_querySSHPublicKey = (output: any, context: __SerdeContext): SSHPublicKey => {
  let contents: any = {
    __type: "SSHPublicKey",
    Fingerprint: undefined,
    SSHPublicKeyBody: undefined,
    SSHPublicKeyId: undefined,
    Status: undefined,
    UploadDate: undefined,
    UserName: undefined,
  };
  if (output["Fingerprint"] !== undefined) {
    contents.Fingerprint = output["Fingerprint"];
  }
  if (output["SSHPublicKeyBody"] !== undefined) {
    contents.SSHPublicKeyBody = output["SSHPublicKeyBody"];
  }
  if (output["SSHPublicKeyId"] !== undefined) {
    contents.SSHPublicKeyId = output["SSHPublicKeyId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = new Date(output["UploadDate"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_querySSHPublicKeyListType = (output: any, context: __SerdeContext): SSHPublicKeyMetadata[] => {
  return (output || []).map((entry: any) => deserializeAws_querySSHPublicKeyMetadata(entry, context));
};

const deserializeAws_querySSHPublicKeyMetadata = (output: any, context: __SerdeContext): SSHPublicKeyMetadata => {
  let contents: any = {
    __type: "SSHPublicKeyMetadata",
    SSHPublicKeyId: undefined,
    Status: undefined,
    UploadDate: undefined,
    UserName: undefined,
  };
  if (output["SSHPublicKeyId"] !== undefined) {
    contents.SSHPublicKeyId = output["SSHPublicKeyId"];
  }
  if (output["Status"] !== undefined) {
    contents.Status = output["Status"];
  }
  if (output["UploadDate"] !== undefined) {
    contents.UploadDate = new Date(output["UploadDate"]);
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryStatement = (output: any, context: __SerdeContext): Statement => {
  let contents: any = {
    __type: "Statement",
    EndPosition: undefined,
    SourcePolicyId: undefined,
    SourcePolicyType: undefined,
    StartPosition: undefined,
  };
  if (output["EndPosition"] !== undefined) {
    contents.EndPosition = deserializeAws_queryPosition(output["EndPosition"], context);
  }
  if (output["SourcePolicyId"] !== undefined) {
    contents.SourcePolicyId = output["SourcePolicyId"];
  }
  if (output["SourcePolicyType"] !== undefined) {
    contents.SourcePolicyType = output["SourcePolicyType"];
  }
  if (output["StartPosition"] !== undefined) {
    contents.StartPosition = deserializeAws_queryPosition(output["StartPosition"], context);
  }
  return contents;
};

const deserializeAws_queryStatementListType = (output: any, context: __SerdeContext): Statement[] => {
  return (output || []).map((entry: any) => deserializeAws_queryStatement(entry, context));
};

const deserializeAws_querysummaryMapType = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: parseInt(pair["value"]),
    }),
    {}
  );
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_querytagListType = (output: any, context: __SerdeContext): Tag[] => {
  return (output || []).map((entry: any) => deserializeAws_queryTag(entry, context));
};

const deserializeAws_querythumbprintListType = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryUnmodifiableEntityException = (
  output: any,
  context: __SerdeContext
): UnmodifiableEntityException => {
  let contents: any = {
    __type: "UnmodifiableEntityException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryUnrecognizedPublicKeyEncodingException = (
  output: any,
  context: __SerdeContext
): UnrecognizedPublicKeyEncodingException => {
  let contents: any = {
    __type: "UnrecognizedPublicKeyEncodingException",
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryUpdateRoleDescriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateRoleDescriptionResponse => {
  let contents: any = {
    __type: "UpdateRoleDescriptionResponse",
    Role: undefined,
  };
  if (output["Role"] !== undefined) {
    contents.Role = deserializeAws_queryRole(output["Role"], context);
  }
  return contents;
};

const deserializeAws_queryUpdateRoleResponse = (output: any, context: __SerdeContext): UpdateRoleResponse => {
  let contents: any = {
    __type: "UpdateRoleResponse",
  };
  return contents;
};

const deserializeAws_queryUpdateSAMLProviderResponse = (
  output: any,
  context: __SerdeContext
): UpdateSAMLProviderResponse => {
  let contents: any = {
    __type: "UpdateSAMLProviderResponse",
    SAMLProviderArn: undefined,
  };
  if (output["SAMLProviderArn"] !== undefined) {
    contents.SAMLProviderArn = output["SAMLProviderArn"];
  }
  return contents;
};

const deserializeAws_queryUploadServerCertificateResponse = (
  output: any,
  context: __SerdeContext
): UploadServerCertificateResponse => {
  let contents: any = {
    __type: "UploadServerCertificateResponse",
    ServerCertificateMetadata: undefined,
  };
  if (output["ServerCertificateMetadata"] !== undefined) {
    contents.ServerCertificateMetadata = deserializeAws_queryServerCertificateMetadata(
      output["ServerCertificateMetadata"],
      context
    );
  }
  return contents;
};

const deserializeAws_queryUploadSigningCertificateResponse = (
  output: any,
  context: __SerdeContext
): UploadSigningCertificateResponse => {
  let contents: any = {
    __type: "UploadSigningCertificateResponse",
    Certificate: undefined,
  };
  if (output["Certificate"] !== undefined) {
    contents.Certificate = deserializeAws_querySigningCertificate(output["Certificate"], context);
  }
  return contents;
};

const deserializeAws_queryUploadSSHPublicKeyResponse = (
  output: any,
  context: __SerdeContext
): UploadSSHPublicKeyResponse => {
  let contents: any = {
    __type: "UploadSSHPublicKeyResponse",
    SSHPublicKey: undefined,
  };
  if (output["SSHPublicKey"] !== undefined) {
    contents.SSHPublicKey = deserializeAws_querySSHPublicKey(output["SSHPublicKey"], context);
  }
  return contents;
};

const deserializeAws_queryUser = (output: any, context: __SerdeContext): User => {
  let contents: any = {
    __type: "User",
    Arn: undefined,
    CreateDate: undefined,
    PasswordLastUsed: undefined,
    Path: undefined,
    PermissionsBoundary: undefined,
    Tags: undefined,
    UserId: undefined,
    UserName: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output["PasswordLastUsed"] !== undefined) {
    contents.PasswordLastUsed = new Date(output["PasswordLastUsed"]);
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(
      output["PermissionsBoundary"],
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = output["UserId"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  return contents;
};

const deserializeAws_queryUserDetail = (output: any, context: __SerdeContext): UserDetail => {
  let contents: any = {
    __type: "UserDetail",
    Arn: undefined,
    AttachedManagedPolicies: undefined,
    CreateDate: undefined,
    GroupList: undefined,
    Path: undefined,
    PermissionsBoundary: undefined,
    Tags: undefined,
    UserId: undefined,
    UserName: undefined,
    UserPolicyList: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = output["Arn"];
  }
  if (output.AttachedManagedPolicies === "") {
    contents.AttachedManagedPolicies = [];
  }
  if (output["AttachedManagedPolicies"] !== undefined && output["AttachedManagedPolicies"]["member"] !== undefined) {
    contents.AttachedManagedPolicies = deserializeAws_queryattachedPoliciesListType(
      __getArrayIfSingleItem(output["AttachedManagedPolicies"]["member"]),
      context
    );
  }
  if (output["CreateDate"] !== undefined) {
    contents.CreateDate = new Date(output["CreateDate"]);
  }
  if (output.GroupList === "") {
    contents.GroupList = [];
  }
  if (output["GroupList"] !== undefined && output["GroupList"]["member"] !== undefined) {
    contents.GroupList = deserializeAws_querygroupNameListType(
      __getArrayIfSingleItem(output["GroupList"]["member"]),
      context
    );
  }
  if (output["Path"] !== undefined) {
    contents.Path = output["Path"];
  }
  if (output["PermissionsBoundary"] !== undefined) {
    contents.PermissionsBoundary = deserializeAws_queryAttachedPermissionsBoundary(
      output["PermissionsBoundary"],
      context
    );
  }
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_querytagListType(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  if (output["UserId"] !== undefined) {
    contents.UserId = output["UserId"];
  }
  if (output["UserName"] !== undefined) {
    contents.UserName = output["UserName"];
  }
  if (output.UserPolicyList === "") {
    contents.UserPolicyList = [];
  }
  if (output["UserPolicyList"] !== undefined && output["UserPolicyList"]["member"] !== undefined) {
    contents.UserPolicyList = deserializeAws_querypolicyDetailListType(
      __getArrayIfSingleItem(output["UserPolicyList"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryuserDetailListType = (output: any, context: __SerdeContext): UserDetail[] => {
  return (output || []).map((entry: any) => deserializeAws_queryUserDetail(entry, context));
};

const deserializeAws_queryuserListType = (output: any, context: __SerdeContext): User[] => {
  return (output || []).map((entry: any) => deserializeAws_queryUser(entry, context));
};

const deserializeAws_queryVirtualMFADevice = (output: any, context: __SerdeContext): VirtualMFADevice => {
  let contents: any = {
    __type: "VirtualMFADevice",
    Base32StringSeed: undefined,
    EnableDate: undefined,
    QRCodePNG: undefined,
    SerialNumber: undefined,
    User: undefined,
  };
  if (output["Base32StringSeed"] !== undefined) {
    contents.Base32StringSeed = context.base64Decoder(output["Base32StringSeed"]);
  }
  if (output["EnableDate"] !== undefined) {
    contents.EnableDate = new Date(output["EnableDate"]);
  }
  if (output["QRCodePNG"] !== undefined) {
    contents.QRCodePNG = context.base64Decoder(output["QRCodePNG"]);
  }
  if (output["SerialNumber"] !== undefined) {
    contents.SerialNumber = output["SerialNumber"];
  }
  if (output["User"] !== undefined) {
    contents.User = deserializeAws_queryUser(output["User"], context);
  }
  return contents;
};

const deserializeAws_queryvirtualMFADeviceListType = (output: any, context: __SerdeContext): VirtualMFADevice[] => {
  return (output || []).map((entry: any) => deserializeAws_queryVirtualMFADevice(entry, context));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
