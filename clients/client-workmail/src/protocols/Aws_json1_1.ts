// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "../commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "../commands/AssociateMemberToGroupCommand";
import {
  AssumeImpersonationRoleCommandInput,
  AssumeImpersonationRoleCommandOutput,
} from "../commands/AssumeImpersonationRoleCommand";
import {
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "../commands/CancelMailboxExportJobCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "../commands/CreateAliasCommand";
import {
  CreateAvailabilityConfigurationCommandInput,
  CreateAvailabilityConfigurationCommandOutput,
} from "../commands/CreateAvailabilityConfigurationCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import {
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
} from "../commands/CreateImpersonationRoleCommand";
import {
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
} from "../commands/CreateMobileDeviceAccessRuleCommand";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput } from "../commands/CreateOrganizationCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "../commands/CreateResourceCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import {
  DeleteAccessControlRuleCommandInput,
  DeleteAccessControlRuleCommandOutput,
} from "../commands/DeleteAccessControlRuleCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "../commands/DeleteAliasCommand";
import {
  DeleteAvailabilityConfigurationCommandInput,
  DeleteAvailabilityConfigurationCommandOutput,
} from "../commands/DeleteAvailabilityConfigurationCommand";
import {
  DeleteEmailMonitoringConfigurationCommandInput,
  DeleteEmailMonitoringConfigurationCommandOutput,
} from "../commands/DeleteEmailMonitoringConfigurationCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteImpersonationRoleCommandInput,
  DeleteImpersonationRoleCommandOutput,
} from "../commands/DeleteImpersonationRoleCommand";
import {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "../commands/DeleteMailboxPermissionsCommand";
import {
  DeleteMobileDeviceAccessOverrideCommandInput,
  DeleteMobileDeviceAccessOverrideCommandOutput,
} from "../commands/DeleteMobileDeviceAccessOverrideCommand";
import {
  DeleteMobileDeviceAccessRuleCommandInput,
  DeleteMobileDeviceAccessRuleCommandOutput,
} from "../commands/DeleteMobileDeviceAccessRuleCommand";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput } from "../commands/DeleteOrganizationCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "../commands/DeleteResourceCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "../commands/DeleteRetentionPolicyCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "../commands/DeregisterFromWorkMailCommand";
import {
  DeregisterMailDomainCommandInput,
  DeregisterMailDomainCommandOutput,
} from "../commands/DeregisterMailDomainCommand";
import {
  DescribeEmailMonitoringConfigurationCommandInput,
  DescribeEmailMonitoringConfigurationCommandOutput,
} from "../commands/DescribeEmailMonitoringConfigurationCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "../commands/DescribeGroupCommand";
import {
  DescribeInboundDmarcSettingsCommandInput,
  DescribeInboundDmarcSettingsCommandOutput,
} from "../commands/DescribeInboundDmarcSettingsCommand";
import {
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
} from "../commands/DescribeMailboxExportJobCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "../commands/DescribeOrganizationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "../commands/DescribeResourceCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "../commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "../commands/DisassociateMemberFromGroupCommand";
import {
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
} from "../commands/GetAccessControlEffectCommand";
import {
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
} from "../commands/GetDefaultRetentionPolicyCommand";
import {
  GetImpersonationRoleCommandInput,
  GetImpersonationRoleCommandOutput,
} from "../commands/GetImpersonationRoleCommand";
import {
  GetImpersonationRoleEffectCommandInput,
  GetImpersonationRoleEffectCommandOutput,
} from "../commands/GetImpersonationRoleEffectCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "../commands/GetMailboxDetailsCommand";
import { GetMailDomainCommandInput, GetMailDomainCommandOutput } from "../commands/GetMailDomainCommand";
import {
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
} from "../commands/GetMobileDeviceAccessEffectCommand";
import {
  GetMobileDeviceAccessOverrideCommandInput,
  GetMobileDeviceAccessOverrideCommandOutput,
} from "../commands/GetMobileDeviceAccessOverrideCommand";
import {
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "../commands/ListAccessControlRulesCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import {
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "../commands/ListAvailabilityConfigurationsCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "../commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "../commands/ListImpersonationRolesCommand";
import {
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "../commands/ListMailboxExportJobsCommand";
import {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "../commands/ListMailboxPermissionsCommand";
import { ListMailDomainsCommandInput, ListMailDomainsCommandOutput } from "../commands/ListMailDomainsCommand";
import {
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "../commands/ListMobileDeviceAccessOverridesCommand";
import {
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
} from "../commands/ListMobileDeviceAccessRulesCommand";
import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "../commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "../commands/ListResourceDelegatesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import {
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
} from "../commands/PutAccessControlRuleCommand";
import {
  PutEmailMonitoringConfigurationCommandInput,
  PutEmailMonitoringConfigurationCommandOutput,
} from "../commands/PutEmailMonitoringConfigurationCommand";
import {
  PutInboundDmarcSettingsCommandInput,
  PutInboundDmarcSettingsCommandOutput,
} from "../commands/PutInboundDmarcSettingsCommand";
import {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "../commands/PutMailboxPermissionsCommand";
import {
  PutMobileDeviceAccessOverrideCommandInput,
  PutMobileDeviceAccessOverrideCommandOutput,
} from "../commands/PutMobileDeviceAccessOverrideCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "../commands/PutRetentionPolicyCommand";
import { RegisterMailDomainCommandInput, RegisterMailDomainCommandOutput } from "../commands/RegisterMailDomainCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "../commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "../commands/ResetPasswordCommand";
import {
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "../commands/StartMailboxExportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TestAvailabilityConfigurationCommandInput,
  TestAvailabilityConfigurationCommandOutput,
} from "../commands/TestAvailabilityConfigurationCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
} from "../commands/UpdateAvailabilityConfigurationCommand";
import {
  UpdateDefaultMailDomainCommandInput,
  UpdateDefaultMailDomainCommandOutput,
} from "../commands/UpdateDefaultMailDomainCommand";
import {
  UpdateImpersonationRoleCommandInput,
  UpdateImpersonationRoleCommandOutput,
} from "../commands/UpdateImpersonationRoleCommand";
import { UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput } from "../commands/UpdateMailboxQuotaCommand";
import {
  UpdateMobileDeviceAccessRuleCommandInput,
  UpdateMobileDeviceAccessRuleCommandOutput,
} from "../commands/UpdateMobileDeviceAccessRuleCommand";
import {
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "../commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import {
  AccessControlRule,
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceResponse,
  AssociateMemberToGroupRequest,
  AssociateMemberToGroupResponse,
  AssumeImpersonationRoleRequest,
  AssumeImpersonationRoleResponse,
  AvailabilityConfiguration,
  BookingOptions,
  CancelMailboxExportJobRequest,
  CancelMailboxExportJobResponse,
  CreateAliasRequest,
  CreateAliasResponse,
  CreateAvailabilityConfigurationRequest,
  CreateAvailabilityConfigurationResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateImpersonationRoleRequest,
  CreateImpersonationRoleResponse,
  CreateMobileDeviceAccessRuleRequest,
  CreateMobileDeviceAccessRuleResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreateResourceRequest,
  CreateResourceResponse,
  CreateUserRequest,
  CreateUserResponse,
  Delegate,
  DeleteAccessControlRuleRequest,
  DeleteAccessControlRuleResponse,
  DeleteAliasRequest,
  DeleteAliasResponse,
  DeleteAvailabilityConfigurationRequest,
  DeleteAvailabilityConfigurationResponse,
  DeleteEmailMonitoringConfigurationRequest,
  DeleteEmailMonitoringConfigurationResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteImpersonationRoleRequest,
  DeleteImpersonationRoleResponse,
  DeleteMailboxPermissionsRequest,
  DeleteMailboxPermissionsResponse,
  DeleteMobileDeviceAccessOverrideRequest,
  DeleteMobileDeviceAccessOverrideResponse,
  DeleteMobileDeviceAccessRuleRequest,
  DeleteMobileDeviceAccessRuleResponse,
  DeleteOrganizationRequest,
  DeleteOrganizationResponse,
  DeleteResourceRequest,
  DeleteResourceResponse,
  DeleteRetentionPolicyRequest,
  DeleteRetentionPolicyResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DeregisterFromWorkMailRequest,
  DeregisterFromWorkMailResponse,
  DeregisterMailDomainRequest,
  DeregisterMailDomainResponse,
  DescribeEmailMonitoringConfigurationRequest,
  DescribeEmailMonitoringConfigurationResponse,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeInboundDmarcSettingsRequest,
  DescribeInboundDmarcSettingsResponse,
  DescribeMailboxExportJobRequest,
  DescribeMailboxExportJobResponse,
  DescribeOrganizationRequest,
  DescribeOrganizationResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DirectoryInUseException,
  DirectoryServiceAuthenticationFailedException,
  DirectoryUnavailableException,
  DisassociateDelegateFromResourceRequest,
  DisassociateDelegateFromResourceResponse,
  DisassociateMemberFromGroupRequest,
  DisassociateMemberFromGroupResponse,
  DnsRecord,
  Domain,
  EmailAddressInUseException,
  EntityAlreadyRegisteredException,
  EntityNotFoundException,
  EntityStateException,
  EwsAvailabilityProvider,
  FolderConfiguration,
  GetAccessControlEffectRequest,
  GetAccessControlEffectResponse,
  GetDefaultRetentionPolicyRequest,
  GetDefaultRetentionPolicyResponse,
  GetImpersonationRoleEffectRequest,
  GetImpersonationRoleEffectResponse,
  GetImpersonationRoleRequest,
  GetImpersonationRoleResponse,
  GetMailboxDetailsRequest,
  GetMailboxDetailsResponse,
  GetMailDomainRequest,
  GetMailDomainResponse,
  GetMobileDeviceAccessEffectRequest,
  GetMobileDeviceAccessEffectResponse,
  GetMobileDeviceAccessOverrideRequest,
  GetMobileDeviceAccessOverrideResponse,
  Group,
  ImpersonationMatchedRule,
  ImpersonationRole,
  ImpersonationRule,
  InvalidConfigurationException,
  InvalidCustomSesConfigurationException,
  InvalidParameterException,
  InvalidPasswordException,
  LambdaAvailabilityProvider,
  LimitExceededException,
  ListAccessControlRulesRequest,
  ListAccessControlRulesResponse,
  ListAliasesRequest,
  ListAliasesResponse,
  ListAvailabilityConfigurationsRequest,
  ListAvailabilityConfigurationsResponse,
  ListGroupMembersRequest,
  ListGroupMembersResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListImpersonationRolesRequest,
  ListImpersonationRolesResponse,
  ListMailboxExportJobsRequest,
  ListMailboxExportJobsResponse,
  ListMailboxPermissionsRequest,
  ListMailboxPermissionsResponse,
  ListMailDomainsRequest,
  ListMailDomainsResponse,
  ListMobileDeviceAccessOverridesRequest,
  ListMobileDeviceAccessOverridesResponse,
  ListMobileDeviceAccessRulesRequest,
  ListMobileDeviceAccessRulesResponse,
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListResourceDelegatesRequest,
  ListResourceDelegatesResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUsersRequest,
  ListUsersResponse,
  MailboxExportJob,
  MailDomainInUseException,
  MailDomainNotFoundException,
  MailDomainStateException,
  MailDomainSummary,
  Member,
  MobileDeviceAccessMatchedRule,
  MobileDeviceAccessOverride,
  MobileDeviceAccessRule,
  NameAvailabilityException,
  OrganizationNotFoundException,
  OrganizationStateException,
  OrganizationSummary,
  Permission,
  PermissionType,
  PutAccessControlRuleRequest,
  PutAccessControlRuleResponse,
  PutEmailMonitoringConfigurationRequest,
  PutEmailMonitoringConfigurationResponse,
  PutInboundDmarcSettingsRequest,
  PutInboundDmarcSettingsResponse,
  PutMailboxPermissionsRequest,
  PutMailboxPermissionsResponse,
  PutMobileDeviceAccessOverrideRequest,
  PutMobileDeviceAccessOverrideResponse,
  PutRetentionPolicyRequest,
  PutRetentionPolicyResponse,
  RedactedEwsAvailabilityProvider,
  RegisterMailDomainRequest,
  RegisterMailDomainResponse,
  RegisterToWorkMailRequest,
  RegisterToWorkMailResponse,
  ReservedNameException,
  ResetPasswordRequest,
  ResetPasswordResponse,
  Resource,
  ResourceNotFoundException,
  StartMailboxExportJobRequest,
  StartMailboxExportJobResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TestAvailabilityConfigurationRequest,
  TestAvailabilityConfigurationResponse,
  TooManyTagsException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAvailabilityConfigurationRequest,
  UpdateAvailabilityConfigurationResponse,
  UpdateDefaultMailDomainRequest,
  UpdateDefaultMailDomainResponse,
  UpdateImpersonationRoleRequest,
  UpdateImpersonationRoleResponse,
  UpdateMailboxQuotaRequest,
  UpdateMailboxQuotaResponse,
  UpdateMobileDeviceAccessRuleRequest,
  UpdateMobileDeviceAccessRuleResponse,
  UpdatePrimaryEmailAddressRequest,
  UpdatePrimaryEmailAddressResponse,
  UpdateResourceRequest,
  UpdateResourceResponse,
  User,
} from "../models/models_0";
import { WorkMailServiceException as __BaseException } from "../models/WorkMailServiceException";

/**
 * serializeAws_json1_1AssociateDelegateToResourceCommand
 */
export const se_AssociateDelegateToResourceCommand = async (
  input: AssociateDelegateToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateDelegateToResource");
  let body: any;
  body = JSON.stringify(se_AssociateDelegateToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateMemberToGroupCommand
 */
export const se_AssociateMemberToGroupCommand = async (
  input: AssociateMemberToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateMemberToGroup");
  let body: any;
  body = JSON.stringify(se_AssociateMemberToGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssumeImpersonationRoleCommand
 */
export const se_AssumeImpersonationRoleCommand = async (
  input: AssumeImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssumeImpersonationRole");
  let body: any;
  body = JSON.stringify(se_AssumeImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelMailboxExportJobCommand
 */
export const se_CancelMailboxExportJobCommand = async (
  input: CancelMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelMailboxExportJob");
  let body: any;
  body = JSON.stringify(se_CancelMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAliasCommand
 */
export const se_CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlias");
  let body: any;
  body = JSON.stringify(se_CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAvailabilityConfigurationCommand
 */
export const se_CreateAvailabilityConfigurationCommand = async (
  input: CreateAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAvailabilityConfiguration");
  let body: any;
  body = JSON.stringify(se_CreateAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGroup");
  let body: any;
  body = JSON.stringify(se_CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImpersonationRoleCommand
 */
export const se_CreateImpersonationRoleCommand = async (
  input: CreateImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImpersonationRole");
  let body: any;
  body = JSON.stringify(se_CreateImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMobileDeviceAccessRuleCommand
 */
export const se_CreateMobileDeviceAccessRuleCommand = async (
  input: CreateMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMobileDeviceAccessRule");
  let body: any;
  body = JSON.stringify(se_CreateMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateOrganizationCommand
 */
export const se_CreateOrganizationCommand = async (
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOrganization");
  let body: any;
  body = JSON.stringify(se_CreateOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResourceCommand
 */
export const se_CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResource");
  let body: any;
  body = JSON.stringify(se_CreateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserCommand
 */
export const se_CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUser");
  let body: any;
  body = JSON.stringify(se_CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccessControlRuleCommand
 */
export const se_DeleteAccessControlRuleCommand = async (
  input: DeleteAccessControlRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccessControlRule");
  let body: any;
  body = JSON.stringify(se_DeleteAccessControlRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAliasCommand
 */
export const se_DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlias");
  let body: any;
  body = JSON.stringify(se_DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAvailabilityConfigurationCommand
 */
export const se_DeleteAvailabilityConfigurationCommand = async (
  input: DeleteAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAvailabilityConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEmailMonitoringConfigurationCommand
 */
export const se_DeleteEmailMonitoringConfigurationCommand = async (
  input: DeleteEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEmailMonitoringConfiguration");
  let body: any;
  body = JSON.stringify(se_DeleteEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGroup");
  let body: any;
  body = JSON.stringify(se_DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImpersonationRoleCommand
 */
export const se_DeleteImpersonationRoleCommand = async (
  input: DeleteImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImpersonationRole");
  let body: any;
  body = JSON.stringify(se_DeleteImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMailboxPermissionsCommand
 */
export const se_DeleteMailboxPermissionsCommand = async (
  input: DeleteMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMailboxPermissions");
  let body: any;
  body = JSON.stringify(se_DeleteMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand
 */
export const se_DeleteMobileDeviceAccessOverrideCommand = async (
  input: DeleteMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMobileDeviceAccessOverride");
  let body: any;
  body = JSON.stringify(se_DeleteMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand
 */
export const se_DeleteMobileDeviceAccessRuleCommand = async (
  input: DeleteMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMobileDeviceAccessRule");
  let body: any;
  body = JSON.stringify(se_DeleteMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteOrganizationCommand
 */
export const se_DeleteOrganizationCommand = async (
  input: DeleteOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOrganization");
  let body: any;
  body = JSON.stringify(se_DeleteOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceCommand
 */
export const se_DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResource");
  let body: any;
  body = JSON.stringify(se_DeleteResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const se_DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRetentionPolicy");
  let body: any;
  body = JSON.stringify(se_DeleteRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterFromWorkMailCommand
 */
export const se_DeregisterFromWorkMailCommand = async (
  input: DeregisterFromWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterFromWorkMail");
  let body: any;
  body = JSON.stringify(se_DeregisterFromWorkMailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterMailDomainCommand
 */
export const se_DeregisterMailDomainCommand = async (
  input: DeregisterMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterMailDomain");
  let body: any;
  body = JSON.stringify(se_DeregisterMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEmailMonitoringConfigurationCommand
 */
export const se_DescribeEmailMonitoringConfigurationCommand = async (
  input: DescribeEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEmailMonitoringConfiguration");
  let body: any;
  body = JSON.stringify(se_DescribeEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeGroupCommand
 */
export const se_DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeGroup");
  let body: any;
  body = JSON.stringify(se_DescribeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInboundDmarcSettingsCommand
 */
export const se_DescribeInboundDmarcSettingsCommand = async (
  input: DescribeInboundDmarcSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInboundDmarcSettings");
  let body: any;
  body = JSON.stringify(se_DescribeInboundDmarcSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMailboxExportJobCommand
 */
export const se_DescribeMailboxExportJobCommand = async (
  input: DescribeMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMailboxExportJob");
  let body: any;
  body = JSON.stringify(se_DescribeMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeOrganizationCommand
 */
export const se_DescribeOrganizationCommand = async (
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeOrganization");
  let body: any;
  body = JSON.stringify(se_DescribeOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourceCommand
 */
export const se_DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResource");
  let body: any;
  body = JSON.stringify(se_DescribeResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserCommand
 */
export const se_DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUser");
  let body: any;
  body = JSON.stringify(se_DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDelegateFromResourceCommand
 */
export const se_DisassociateDelegateFromResourceCommand = async (
  input: DisassociateDelegateFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateDelegateFromResource");
  let body: any;
  body = JSON.stringify(se_DisassociateDelegateFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateMemberFromGroupCommand
 */
export const se_DisassociateMemberFromGroupCommand = async (
  input: DisassociateMemberFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateMemberFromGroup");
  let body: any;
  body = JSON.stringify(se_DisassociateMemberFromGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccessControlEffectCommand
 */
export const se_GetAccessControlEffectCommand = async (
  input: GetAccessControlEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccessControlEffect");
  let body: any;
  body = JSON.stringify(se_GetAccessControlEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDefaultRetentionPolicyCommand
 */
export const se_GetDefaultRetentionPolicyCommand = async (
  input: GetDefaultRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDefaultRetentionPolicy");
  let body: any;
  body = JSON.stringify(se_GetDefaultRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetImpersonationRoleCommand
 */
export const se_GetImpersonationRoleCommand = async (
  input: GetImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetImpersonationRole");
  let body: any;
  body = JSON.stringify(se_GetImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetImpersonationRoleEffectCommand
 */
export const se_GetImpersonationRoleEffectCommand = async (
  input: GetImpersonationRoleEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetImpersonationRoleEffect");
  let body: any;
  body = JSON.stringify(se_GetImpersonationRoleEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMailboxDetailsCommand
 */
export const se_GetMailboxDetailsCommand = async (
  input: GetMailboxDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMailboxDetails");
  let body: any;
  body = JSON.stringify(se_GetMailboxDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMailDomainCommand
 */
export const se_GetMailDomainCommand = async (
  input: GetMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMailDomain");
  let body: any;
  body = JSON.stringify(se_GetMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMobileDeviceAccessEffectCommand
 */
export const se_GetMobileDeviceAccessEffectCommand = async (
  input: GetMobileDeviceAccessEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMobileDeviceAccessEffect");
  let body: any;
  body = JSON.stringify(se_GetMobileDeviceAccessEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMobileDeviceAccessOverrideCommand
 */
export const se_GetMobileDeviceAccessOverrideCommand = async (
  input: GetMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMobileDeviceAccessOverride");
  let body: any;
  body = JSON.stringify(se_GetMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAccessControlRulesCommand
 */
export const se_ListAccessControlRulesCommand = async (
  input: ListAccessControlRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAccessControlRules");
  let body: any;
  body = JSON.stringify(se_ListAccessControlRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(se_ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAvailabilityConfigurationsCommand
 */
export const se_ListAvailabilityConfigurationsCommand = async (
  input: ListAvailabilityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAvailabilityConfigurations");
  let body: any;
  body = JSON.stringify(se_ListAvailabilityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupMembersCommand
 */
export const se_ListGroupMembersCommand = async (
  input: ListGroupMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroupMembers");
  let body: any;
  body = JSON.stringify(se_ListGroupMembersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroups");
  let body: any;
  body = JSON.stringify(se_ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImpersonationRolesCommand
 */
export const se_ListImpersonationRolesCommand = async (
  input: ListImpersonationRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImpersonationRoles");
  let body: any;
  body = JSON.stringify(se_ListImpersonationRolesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMailboxExportJobsCommand
 */
export const se_ListMailboxExportJobsCommand = async (
  input: ListMailboxExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMailboxExportJobs");
  let body: any;
  body = JSON.stringify(se_ListMailboxExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMailboxPermissionsCommand
 */
export const se_ListMailboxPermissionsCommand = async (
  input: ListMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMailboxPermissions");
  let body: any;
  body = JSON.stringify(se_ListMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMailDomainsCommand
 */
export const se_ListMailDomainsCommand = async (
  input: ListMailDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMailDomains");
  let body: any;
  body = JSON.stringify(se_ListMailDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMobileDeviceAccessOverridesCommand
 */
export const se_ListMobileDeviceAccessOverridesCommand = async (
  input: ListMobileDeviceAccessOverridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMobileDeviceAccessOverrides");
  let body: any;
  body = JSON.stringify(se_ListMobileDeviceAccessOverridesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMobileDeviceAccessRulesCommand
 */
export const se_ListMobileDeviceAccessRulesCommand = async (
  input: ListMobileDeviceAccessRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMobileDeviceAccessRules");
  let body: any;
  body = JSON.stringify(se_ListMobileDeviceAccessRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOrganizationsCommand
 */
export const se_ListOrganizationsCommand = async (
  input: ListOrganizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOrganizations");
  let body: any;
  body = JSON.stringify(se_ListOrganizationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceDelegatesCommand
 */
export const se_ListResourceDelegatesCommand = async (
  input: ListResourceDelegatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceDelegates");
  let body: any;
  body = JSON.stringify(se_ListResourceDelegatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResources");
  let body: any;
  body = JSON.stringify(se_ListResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsers");
  let body: any;
  body = JSON.stringify(se_ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccessControlRuleCommand
 */
export const se_PutAccessControlRuleCommand = async (
  input: PutAccessControlRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAccessControlRule");
  let body: any;
  body = JSON.stringify(se_PutAccessControlRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEmailMonitoringConfigurationCommand
 */
export const se_PutEmailMonitoringConfigurationCommand = async (
  input: PutEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEmailMonitoringConfiguration");
  let body: any;
  body = JSON.stringify(se_PutEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInboundDmarcSettingsCommand
 */
export const se_PutInboundDmarcSettingsCommand = async (
  input: PutInboundDmarcSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutInboundDmarcSettings");
  let body: any;
  body = JSON.stringify(se_PutInboundDmarcSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMailboxPermissionsCommand
 */
export const se_PutMailboxPermissionsCommand = async (
  input: PutMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutMailboxPermissions");
  let body: any;
  body = JSON.stringify(se_PutMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMobileDeviceAccessOverrideCommand
 */
export const se_PutMobileDeviceAccessOverrideCommand = async (
  input: PutMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutMobileDeviceAccessOverride");
  let body: any;
  body = JSON.stringify(se_PutMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRetentionPolicyCommand
 */
export const se_PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRetentionPolicy");
  let body: any;
  body = JSON.stringify(se_PutRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterMailDomainCommand
 */
export const se_RegisterMailDomainCommand = async (
  input: RegisterMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterMailDomain");
  let body: any;
  body = JSON.stringify(se_RegisterMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterToWorkMailCommand
 */
export const se_RegisterToWorkMailCommand = async (
  input: RegisterToWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterToWorkMail");
  let body: any;
  body = JSON.stringify(se_RegisterToWorkMailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResetPasswordCommand
 */
export const se_ResetPasswordCommand = async (
  input: ResetPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResetPassword");
  let body: any;
  body = JSON.stringify(se_ResetPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMailboxExportJobCommand
 */
export const se_StartMailboxExportJobCommand = async (
  input: StartMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMailboxExportJob");
  let body: any;
  body = JSON.stringify(se_StartMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestAvailabilityConfigurationCommand
 */
export const se_TestAvailabilityConfigurationCommand = async (
  input: TestAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestAvailabilityConfiguration");
  let body: any;
  body = JSON.stringify(se_TestAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAvailabilityConfigurationCommand
 */
export const se_UpdateAvailabilityConfigurationCommand = async (
  input: UpdateAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAvailabilityConfiguration");
  let body: any;
  body = JSON.stringify(se_UpdateAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDefaultMailDomainCommand
 */
export const se_UpdateDefaultMailDomainCommand = async (
  input: UpdateDefaultMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDefaultMailDomain");
  let body: any;
  body = JSON.stringify(se_UpdateDefaultMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImpersonationRoleCommand
 */
export const se_UpdateImpersonationRoleCommand = async (
  input: UpdateImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImpersonationRole");
  let body: any;
  body = JSON.stringify(se_UpdateImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMailboxQuotaCommand
 */
export const se_UpdateMailboxQuotaCommand = async (
  input: UpdateMailboxQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMailboxQuota");
  let body: any;
  body = JSON.stringify(se_UpdateMailboxQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand
 */
export const se_UpdateMobileDeviceAccessRuleCommand = async (
  input: UpdateMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMobileDeviceAccessRule");
  let body: any;
  body = JSON.stringify(se_UpdateMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePrimaryEmailAddressCommand
 */
export const se_UpdatePrimaryEmailAddressCommand = async (
  input: UpdatePrimaryEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePrimaryEmailAddress");
  let body: any;
  body = JSON.stringify(se_UpdatePrimaryEmailAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResourceCommand
 */
export const se_UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResource");
  let body: any;
  body = JSON.stringify(se_UpdateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateDelegateToResourceCommand
 */
export const de_AssociateDelegateToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDelegateToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateDelegateToResourceResponse(data, context);
  const response: AssociateDelegateToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateDelegateToResourceCommandError
 */
const de_AssociateDelegateToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateMemberToGroupCommand
 */
export const de_AssociateMemberToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateMemberToGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateMemberToGroupResponse(data, context);
  const response: AssociateMemberToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateMemberToGroupCommandError
 */
const de_AssociateMemberToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssumeImpersonationRoleCommand
 */
export const de_AssumeImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssumeImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssumeImpersonationRoleResponse(data, context);
  const response: AssumeImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssumeImpersonationRoleCommandError
 */
const de_AssumeImpersonationRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeImpersonationRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelMailboxExportJobCommand
 */
export const de_CancelMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelMailboxExportJobResponse(data, context);
  const response: CancelMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelMailboxExportJobCommandError
 */
const de_CancelMailboxExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMailboxExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAliasCommand
 */
export const de_CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAliasResponse(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAliasCommandError
 */
const de_CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await de_EmailAddressInUseExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await de_MailDomainStateExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAvailabilityConfigurationCommand
 */
export const de_CreateAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAvailabilityConfigurationResponse(data, context);
  const response: CreateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAvailabilityConfigurationCommandError
 */
const de_CreateAvailabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAvailabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateGroupCommand
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
  contents = de_CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await de_ReservedNameExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateImpersonationRoleCommand
 */
export const de_CreateImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateImpersonationRoleResponse(data, context);
  const response: CreateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateImpersonationRoleCommandError
 */
const de_CreateImpersonationRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImpersonationRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand
 */
export const de_CreateMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMobileDeviceAccessRuleResponse(data, context);
  const response: CreateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMobileDeviceAccessRuleCommandError
 */
const de_CreateMobileDeviceAccessRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMobileDeviceAccessRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateOrganizationCommand
 */
export const de_CreateOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateOrganizationResponse(data, context);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateOrganizationCommandError
 */
const de_CreateOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryInUseException":
    case "com.amazonaws.workmail#DirectoryInUseException":
      throw await de_DirectoryInUseExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateResourceCommand
 */
export const de_CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResourceResponse(data, context);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResourceCommandError
 */
const de_CreateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await de_ReservedNameExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserCommand
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
  contents = de_CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserCommandError
 */
const de_CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await de_ReservedNameExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAccessControlRuleCommand
 */
export const de_DeleteAccessControlRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccessControlRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAccessControlRuleResponse(data, context);
  const response: DeleteAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAccessControlRuleCommandError
 */
const de_DeleteAccessControlRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAliasCommand
 */
export const de_DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAliasResponse(data, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAliasCommandError
 */
const de_DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAvailabilityConfigurationCommand
 */
export const de_DeleteAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAvailabilityConfigurationResponse(data, context);
  const response: DeleteAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAvailabilityConfigurationCommandError
 */
const de_DeleteAvailabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAvailabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEmailMonitoringConfigurationCommand
 */
export const de_DeleteEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEmailMonitoringConfigurationResponse(data, context);
  const response: DeleteEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEmailMonitoringConfigurationCommandError
 */
const de_DeleteEmailMonitoringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailMonitoringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteGroupResponse(data, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImpersonationRoleCommand
 */
export const de_DeleteImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteImpersonationRoleResponse(data, context);
  const response: DeleteImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteImpersonationRoleCommandError
 */
const de_DeleteImpersonationRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImpersonationRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMailboxPermissionsCommand
 */
export const de_DeleteMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMailboxPermissionsResponse(data, context);
  const response: DeleteMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMailboxPermissionsCommandError
 */
const de_DeleteMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand
 */
export const de_DeleteMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMobileDeviceAccessOverrideResponse(data, context);
  const response: DeleteMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommandError
 */
const de_DeleteMobileDeviceAccessOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand
 */
export const de_DeleteMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMobileDeviceAccessRuleResponse(data, context);
  const response: DeleteMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommandError
 */
const de_DeleteMobileDeviceAccessRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteOrganizationCommand
 */
export const de_DeleteOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteOrganizationResponse(data, context);
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteOrganizationCommandError
 */
const de_DeleteOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourceCommand
 */
export const de_DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourceResponse(data, context);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourceCommandError
 */
const de_DeleteResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const de_DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRetentionPolicyResponse(data, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommandError
 */
const de_DeleteRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterFromWorkMailCommand
 */
export const de_DeregisterFromWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterFromWorkMailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterFromWorkMailResponse(data, context);
  const response: DeregisterFromWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterFromWorkMailCommandError
 */
const de_DeregisterFromWorkMailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterMailDomainCommand
 */
export const de_DeregisterMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterMailDomainResponse(data, context);
  const response: DeregisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterMailDomainCommandError
 */
const de_DeregisterMailDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterMailDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidCustomSesConfigurationException":
    case "com.amazonaws.workmail#InvalidCustomSesConfigurationException":
      throw await de_InvalidCustomSesConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MailDomainInUseException":
    case "com.amazonaws.workmail#MailDomainInUseException":
      throw await de_MailDomainInUseExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEmailMonitoringConfigurationCommand
 */
export const de_DescribeEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEmailMonitoringConfigurationResponse(data, context);
  const response: DescribeEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEmailMonitoringConfigurationCommandError
 */
const de_DescribeEmailMonitoringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmailMonitoringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeGroupCommand
 */
export const de_DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeGroupResponse(data, context);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeGroupCommandError
 */
const de_DescribeGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInboundDmarcSettingsCommand
 */
export const de_DescribeInboundDmarcSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundDmarcSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInboundDmarcSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInboundDmarcSettingsResponse(data, context);
  const response: DescribeInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeInboundDmarcSettingsCommandError
 */
const de_DescribeInboundDmarcSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundDmarcSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMailboxExportJobCommand
 */
export const de_DescribeMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMailboxExportJobResponse(data, context);
  const response: DescribeMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMailboxExportJobCommandError
 */
const de_DescribeMailboxExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMailboxExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeOrganizationCommand
 */
export const de_DescribeOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeOrganizationCommandError
 */
const de_DescribeOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeResourceCommand
 */
export const de_DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeResourceCommandError
 */
const de_DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserCommand
 */
export const de_DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserCommandError
 */
const de_DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateDelegateFromResourceCommand
 */
export const de_DisassociateDelegateFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDelegateFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateDelegateFromResourceResponse(data, context);
  const response: DisassociateDelegateFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateDelegateFromResourceCommandError
 */
const de_DisassociateDelegateFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateMemberFromGroupCommand
 */
export const de_DisassociateMemberFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateMemberFromGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateMemberFromGroupResponse(data, context);
  const response: DisassociateMemberFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateMemberFromGroupCommandError
 */
const de_DisassociateMemberFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAccessControlEffectCommand
 */
export const de_GetAccessControlEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessControlEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccessControlEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccessControlEffectResponse(data, context);
  const response: GetAccessControlEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAccessControlEffectCommandError
 */
const de_GetAccessControlEffectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessControlEffectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDefaultRetentionPolicyCommand
 */
export const de_GetDefaultRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDefaultRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDefaultRetentionPolicyResponse(data, context);
  const response: GetDefaultRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDefaultRetentionPolicyCommandError
 */
const de_GetDefaultRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultRetentionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetImpersonationRoleCommand
 */
export const de_GetImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetImpersonationRoleResponse(data, context);
  const response: GetImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetImpersonationRoleCommandError
 */
const de_GetImpersonationRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetImpersonationRoleEffectCommand
 */
export const de_GetImpersonationRoleEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetImpersonationRoleEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetImpersonationRoleEffectResponse(data, context);
  const response: GetImpersonationRoleEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetImpersonationRoleEffectCommandError
 */
const de_GetImpersonationRoleEffectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleEffectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMailboxDetailsCommand
 */
export const de_GetMailboxDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMailboxDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMailboxDetailsResponse(data, context);
  const response: GetMailboxDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMailboxDetailsCommandError
 */
const de_GetMailboxDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMailDomainCommand
 */
export const de_GetMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMailDomainResponse(data, context);
  const response: GetMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMailDomainCommandError
 */
const de_GetMailDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessEffectCommand
 */
export const de_GetMobileDeviceAccessEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMobileDeviceAccessEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMobileDeviceAccessEffectResponse(data, context);
  const response: GetMobileDeviceAccessEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessEffectCommandError
 */
const de_GetMobileDeviceAccessEffectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessEffectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessOverrideCommand
 */
export const de_GetMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMobileDeviceAccessOverrideResponse(data, context);
  const response: GetMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessOverrideCommandError
 */
const de_GetMobileDeviceAccessOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAccessControlRulesCommand
 */
export const de_ListAccessControlRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAccessControlRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAccessControlRulesResponse(data, context);
  const response: ListAccessControlRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAccessControlRulesCommandError
 */
const de_ListAccessControlRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAvailabilityConfigurationsCommand
 */
export const de_ListAvailabilityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailabilityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAvailabilityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAvailabilityConfigurationsResponse(data, context);
  const response: ListAvailabilityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAvailabilityConfigurationsCommandError
 */
const de_ListAvailabilityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailabilityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGroupMembersCommand
 */
export const de_ListGroupMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupMembersResponse(data, context);
  const response: ListGroupMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupMembersCommandError
 */
const de_ListGroupMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGroupsCommand
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
  contents = de_ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListImpersonationRolesCommand
 */
export const de_ListImpersonationRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImpersonationRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImpersonationRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImpersonationRolesResponse(data, context);
  const response: ListImpersonationRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListImpersonationRolesCommandError
 */
const de_ListImpersonationRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImpersonationRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMailboxExportJobsCommand
 */
export const de_ListMailboxExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMailboxExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMailboxExportJobsResponse(data, context);
  const response: ListMailboxExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMailboxExportJobsCommandError
 */
const de_ListMailboxExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMailboxPermissionsCommand
 */
export const de_ListMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMailboxPermissionsResponse(data, context);
  const response: ListMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMailboxPermissionsCommandError
 */
const de_ListMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMailDomainsCommand
 */
export const de_ListMailDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMailDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMailDomainsResponse(data, context);
  const response: ListMailDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMailDomainsCommandError
 */
const de_ListMailDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessOverridesCommand
 */
export const de_ListMobileDeviceAccessOverridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessOverridesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMobileDeviceAccessOverridesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMobileDeviceAccessOverridesResponse(data, context);
  const response: ListMobileDeviceAccessOverridesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessOverridesCommandError
 */
const de_ListMobileDeviceAccessOverridesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessOverridesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessRulesCommand
 */
export const de_ListMobileDeviceAccessRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMobileDeviceAccessRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMobileDeviceAccessRulesResponse(data, context);
  const response: ListMobileDeviceAccessRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessRulesCommandError
 */
const de_ListMobileDeviceAccessRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOrganizationsCommand
 */
export const de_ListOrganizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOrganizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOrganizationsResponse(data, context);
  const response: ListOrganizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOrganizationsCommandError
 */
const de_ListOrganizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceDelegatesCommand
 */
export const de_ListResourceDelegatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceDelegatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceDelegatesResponse(data, context);
  const response: ListResourceDelegatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceDelegatesCommandError
 */
const de_ListResourceDelegatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourcesCommand
 */
export const de_ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourcesCommandError
 */
const de_ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUsersCommand
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
  contents = de_ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAccessControlRuleCommand
 */
export const de_PutAccessControlRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessControlRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAccessControlRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAccessControlRuleResponse(data, context);
  const response: PutAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAccessControlRuleCommandError
 */
const de_PutAccessControlRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessControlRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutEmailMonitoringConfigurationCommand
 */
export const de_PutEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEmailMonitoringConfigurationResponse(data, context);
  const response: PutEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEmailMonitoringConfigurationCommandError
 */
const de_PutEmailMonitoringConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailMonitoringConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutInboundDmarcSettingsCommand
 */
export const de_PutInboundDmarcSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInboundDmarcSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInboundDmarcSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInboundDmarcSettingsResponse(data, context);
  const response: PutInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInboundDmarcSettingsCommandError
 */
const de_PutInboundDmarcSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInboundDmarcSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutMailboxPermissionsCommand
 */
export const de_PutMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutMailboxPermissionsResponse(data, context);
  const response: PutMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutMailboxPermissionsCommandError
 */
const de_PutMailboxPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutMobileDeviceAccessOverrideCommand
 */
export const de_PutMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutMobileDeviceAccessOverrideResponse(data, context);
  const response: PutMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutMobileDeviceAccessOverrideCommandError
 */
const de_PutMobileDeviceAccessOverrideCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMobileDeviceAccessOverrideCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRetentionPolicyCommand
 */
export const de_PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRetentionPolicyResponse(data, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRetentionPolicyCommandError
 */
const de_PutRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterMailDomainCommand
 */
export const de_RegisterMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterMailDomainResponse(data, context);
  const response: RegisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterMailDomainCommandError
 */
const de_RegisterMailDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterMailDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MailDomainInUseException":
    case "com.amazonaws.workmail#MailDomainInUseException":
      throw await de_MailDomainInUseExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterToWorkMailCommand
 */
export const de_RegisterToWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterToWorkMailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterToWorkMailResponse(data, context);
  const response: RegisterToWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterToWorkMailCommandError
 */
const de_RegisterToWorkMailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await de_EmailAddressInUseExceptionRes(parsedOutput, context);
    case "EntityAlreadyRegisteredException":
    case "com.amazonaws.workmail#EntityAlreadyRegisteredException":
      throw await de_EntityAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await de_MailDomainStateExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResetPasswordCommand
 */
export const de_ResetPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResetPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResetPasswordResponse(data, context);
  const response: ResetPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResetPasswordCommandError
 */
const de_ResetPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartMailboxExportJobCommand
 */
export const de_StartMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMailboxExportJobResponse(data, context);
  const response: StartMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartMailboxExportJobCommandError
 */
const de_StartMailboxExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMailboxExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.workmail#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TestAvailabilityConfigurationCommand
 */
export const de_TestAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestAvailabilityConfigurationResponse(data, context);
  const response: TestAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TestAvailabilityConfigurationCommandError
 */
const de_TestAvailabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAvailabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAvailabilityConfigurationCommand
 */
export const de_UpdateAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAvailabilityConfigurationResponse(data, context);
  const response: UpdateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAvailabilityConfigurationCommandError
 */
const de_UpdateAvailabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDefaultMailDomainCommand
 */
export const de_UpdateDefaultMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDefaultMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDefaultMailDomainResponse(data, context);
  const response: UpdateDefaultMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDefaultMailDomainCommandError
 */
const de_UpdateDefaultMailDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultMailDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await de_MailDomainStateExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateImpersonationRoleCommand
 */
export const de_UpdateImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateImpersonationRoleResponse(data, context);
  const response: UpdateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateImpersonationRoleCommandError
 */
const de_UpdateImpersonationRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImpersonationRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMailboxQuotaCommand
 */
export const de_UpdateMailboxQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMailboxQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMailboxQuotaResponse(data, context);
  const response: UpdateMailboxQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMailboxQuotaCommandError
 */
const de_UpdateMailboxQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand
 */
export const de_UpdateMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMobileDeviceAccessRuleResponse(data, context);
  const response: UpdateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommandError
 */
const de_UpdateMobileDeviceAccessRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMobileDeviceAccessRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePrimaryEmailAddressCommand
 */
export const de_UpdatePrimaryEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePrimaryEmailAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePrimaryEmailAddressResponse(data, context);
  const response: UpdatePrimaryEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError
 */
const de_UpdatePrimaryEmailAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryServiceAuthenticationFailedException":
    case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
      throw await de_DirectoryServiceAuthenticationFailedExceptionRes(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await de_EmailAddressInUseExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await de_MailDomainStateExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateResourceCommand
 */
export const de_UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResourceCommandError
 */
const de_UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await de_DirectoryUnavailableExceptionRes(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await de_EmailAddressInUseExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await de_EntityStateExceptionRes(parsedOutput, context);
    case "InvalidConfigurationException":
    case "com.amazonaws.workmail#InvalidConfigurationException":
      throw await de_InvalidConfigurationExceptionRes(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await de_MailDomainNotFoundExceptionRes(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await de_MailDomainStateExceptionRes(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await de_NameAvailabilityExceptionRes(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await de_OrganizationNotFoundExceptionRes(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await de_OrganizationStateExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DirectoryInUseExceptionRes
 */
const de_DirectoryInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryInUseException(body, context);
  const exception = new DirectoryInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionRes
 */
const de_DirectoryServiceAuthenticationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryServiceAuthenticationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryServiceAuthenticationFailedException(body, context);
  const exception = new DirectoryServiceAuthenticationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DirectoryUnavailableExceptionRes
 */
const de_DirectoryUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DirectoryUnavailableException(body, context);
  const exception = new DirectoryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EmailAddressInUseExceptionRes
 */
const de_EmailAddressInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmailAddressInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EmailAddressInUseException(body, context);
  const exception = new EmailAddressInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityAlreadyRegisteredExceptionRes
 */
const de_EntityAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityAlreadyRegisteredException(body, context);
  const exception = new EntityAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityNotFoundExceptionRes
 */
const de_EntityNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityNotFoundException(body, context);
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EntityStateExceptionRes
 */
const de_EntityStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EntityStateException(body, context);
  const exception = new EntityStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidConfigurationExceptionRes
 */
const de_InvalidConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidConfigurationException(body, context);
  const exception = new InvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCustomSesConfigurationExceptionRes
 */
const de_InvalidCustomSesConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomSesConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCustomSesConfigurationException(body, context);
  const exception = new InvalidCustomSesConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPasswordExceptionRes
 */
const de_InvalidPasswordExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidPasswordException(body, context);
  const exception = new InvalidPasswordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MailDomainInUseExceptionRes
 */
const de_MailDomainInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MailDomainInUseException(body, context);
  const exception = new MailDomainInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MailDomainNotFoundExceptionRes
 */
const de_MailDomainNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MailDomainNotFoundException(body, context);
  const exception = new MailDomainNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MailDomainStateExceptionRes
 */
const de_MailDomainStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MailDomainStateException(body, context);
  const exception = new MailDomainStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NameAvailabilityExceptionRes
 */
const de_NameAvailabilityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAvailabilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NameAvailabilityException(body, context);
  const exception = new NameAvailabilityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationNotFoundExceptionRes
 */
const de_OrganizationNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotFoundException(body, context);
  const exception = new OrganizationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationStateExceptionRes
 */
const de_OrganizationStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationStateException(body, context);
  const exception = new OrganizationStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReservedNameExceptionRes
 */
const de_ReservedNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReservedNameException(body, context);
  const exception = new ReservedNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ActionsList
 */
const se_ActionsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateDelegateToResourceRequest
 */
const se_AssociateDelegateToResourceRequest = (
  input: AssociateDelegateToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1AssociateMemberToGroupRequest
 */
const se_AssociateMemberToGroupRequest = (input: AssociateMemberToGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1AssumeImpersonationRoleRequest
 */
const se_AssumeImpersonationRoleRequest = (input: AssumeImpersonationRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1BookingOptions
 */
const se_BookingOptions = (input: BookingOptions, context: __SerdeContext): any => {
  return {
    ...(input.AutoAcceptRequests != null && { AutoAcceptRequests: input.AutoAcceptRequests }),
    ...(input.AutoDeclineConflictingRequests != null && {
      AutoDeclineConflictingRequests: input.AutoDeclineConflictingRequests,
    }),
    ...(input.AutoDeclineRecurringRequests != null && {
      AutoDeclineRecurringRequests: input.AutoDeclineRecurringRequests,
    }),
  };
};

/**
 * serializeAws_json1_1CancelMailboxExportJobRequest
 */
const se_CancelMailboxExportJobRequest = (input: CancelMailboxExportJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1CreateAliasRequest
 */
const se_CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1CreateAvailabilityConfigurationRequest
 */
const se_CreateAvailabilityConfigurationRequest = (
  input: CreateAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && { EwsProvider: se_EwsAvailabilityProvider(input.EwsProvider, context) }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: se_LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1CreateGroupRequest
 */
const se_CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1CreateImpersonationRoleRequest
 */
const se_CreateImpersonationRoleRequest = (input: CreateImpersonationRoleRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Rules != null && { Rules: se_ImpersonationRuleList(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateMobileDeviceAccessRuleRequest
 */
const se_CreateMobileDeviceAccessRuleRequest = (
  input: CreateMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceModels != null && { DeviceModels: se_DeviceModelList(input.DeviceModels, context) }),
    ...(input.DeviceOperatingSystems != null && {
      DeviceOperatingSystems: se_DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
    }),
    ...(input.DeviceTypes != null && { DeviceTypes: se_DeviceTypeList(input.DeviceTypes, context) }),
    ...(input.DeviceUserAgents != null && {
      DeviceUserAgents: se_DeviceUserAgentList(input.DeviceUserAgents, context),
    }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotDeviceModels != null && { NotDeviceModels: se_DeviceModelList(input.NotDeviceModels, context) }),
    ...(input.NotDeviceOperatingSystems != null && {
      NotDeviceOperatingSystems: se_DeviceOperatingSystemList(input.NotDeviceOperatingSystems, context),
    }),
    ...(input.NotDeviceTypes != null && { NotDeviceTypes: se_DeviceTypeList(input.NotDeviceTypes, context) }),
    ...(input.NotDeviceUserAgents != null && {
      NotDeviceUserAgents: se_DeviceUserAgentList(input.NotDeviceUserAgents, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1CreateOrganizationRequest
 */
const se_CreateOrganizationRequest = (input: CreateOrganizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Domains != null && { Domains: se_Domains(input.Domains, context) }),
    ...(input.EnableInteroperability != null && { EnableInteroperability: input.EnableInteroperability }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

/**
 * serializeAws_json1_1CreateResourceRequest
 */
const se_CreateResourceRequest = (input: CreateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateUserRequest
 */
const se_CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

/**
 * serializeAws_json1_1DeleteAccessControlRuleRequest
 */
const se_DeleteAccessControlRuleRequest = (input: DeleteAccessControlRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteAliasRequest
 */
const se_DeleteAliasRequest = (input: DeleteAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteAvailabilityConfigurationRequest
 */
const se_DeleteAvailabilityConfigurationRequest = (
  input: DeleteAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteEmailMonitoringConfigurationRequest
 */
const se_DeleteEmailMonitoringConfigurationRequest = (
  input: DeleteEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteGroupRequest
 */
const se_DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteImpersonationRoleRequest
 */
const se_DeleteImpersonationRoleRequest = (input: DeleteImpersonationRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteMailboxPermissionsRequest
 */
const se_DeleteMailboxPermissionsRequest = (input: DeleteMailboxPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.GranteeId != null && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteMobileDeviceAccessOverrideRequest
 */
const se_DeleteMobileDeviceAccessOverrideRequest = (
  input: DeleteMobileDeviceAccessOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DeleteMobileDeviceAccessRuleRequest
 */
const se_DeleteMobileDeviceAccessRuleRequest = (
  input: DeleteMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MobileDeviceAccessRuleId != null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteOrganizationRequest
 */
const se_DeleteOrganizationRequest = (input: DeleteOrganizationRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeleteDirectory != null && { DeleteDirectory: input.DeleteDirectory }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceRequest
 */
const se_DeleteResourceRequest = (input: DeleteResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DeleteRetentionPolicyRequest
 */
const se_DeleteRetentionPolicyRequest = (input: DeleteRetentionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DeregisterFromWorkMailRequest
 */
const se_DeregisterFromWorkMailRequest = (input: DeregisterFromWorkMailRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DeregisterMailDomainRequest
 */
const se_DeregisterMailDomainRequest = (input: DeregisterMailDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeEmailMonitoringConfigurationRequest
 */
const se_DescribeEmailMonitoringConfigurationRequest = (
  input: DescribeEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeGroupRequest
 */
const se_DescribeGroupRequest = (input: DescribeGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeInboundDmarcSettingsRequest
 */
const se_DescribeInboundDmarcSettingsRequest = (
  input: DescribeInboundDmarcSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeMailboxExportJobRequest
 */
const se_DescribeMailboxExportJobRequest = (input: DescribeMailboxExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeOrganizationRequest
 */
const se_DescribeOrganizationRequest = (input: DescribeOrganizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1DescribeResourceRequest
 */
const se_DescribeResourceRequest = (input: DescribeResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserRequest
 */
const se_DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1DeviceModelList
 */
const se_DeviceModelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeviceOperatingSystemList
 */
const se_DeviceOperatingSystemList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeviceTypeList
 */
const se_DeviceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeviceUserAgentList
 */
const se_DeviceUserAgentList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DisassociateDelegateFromResourceRequest
 */
const se_DisassociateDelegateFromResourceRequest = (
  input: DisassociateDelegateFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1DisassociateMemberFromGroupRequest
 */
const se_DisassociateMemberFromGroupRequest = (
  input: DisassociateMemberFromGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1Domain
 */
const se_Domain = (input: Domain, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.HostedZoneId != null && { HostedZoneId: input.HostedZoneId }),
  };
};

/**
 * serializeAws_json1_1Domains
 */
const se_Domains = (input: Domain[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Domain(entry, context);
    });
};

/**
 * serializeAws_json1_1EwsAvailabilityProvider
 */
const se_EwsAvailabilityProvider = (input: EwsAvailabilityProvider, context: __SerdeContext): any => {
  return {
    ...(input.EwsEndpoint != null && { EwsEndpoint: input.EwsEndpoint }),
    ...(input.EwsPassword != null && { EwsPassword: input.EwsPassword }),
    ...(input.EwsUsername != null && { EwsUsername: input.EwsUsername }),
  };
};

/**
 * serializeAws_json1_1FolderConfiguration
 */
const se_FolderConfiguration = (input: FolderConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Period != null && { Period: input.Period }),
  };
};

/**
 * serializeAws_json1_1FolderConfigurations
 */
const se_FolderConfigurations = (input: FolderConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FolderConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1GetAccessControlEffectRequest
 */
const se_GetAccessControlEffectRequest = (input: GetAccessControlEffectRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1GetDefaultRetentionPolicyRequest
 */
const se_GetDefaultRetentionPolicyRequest = (input: GetDefaultRetentionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1GetImpersonationRoleEffectRequest
 */
const se_GetImpersonationRoleEffectRequest = (
  input: GetImpersonationRoleEffectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.TargetUser != null && { TargetUser: input.TargetUser }),
  };
};

/**
 * serializeAws_json1_1GetImpersonationRoleRequest
 */
const se_GetImpersonationRoleRequest = (input: GetImpersonationRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1GetMailboxDetailsRequest
 */
const se_GetMailboxDetailsRequest = (input: GetMailboxDetailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1GetMailDomainRequest
 */
const se_GetMailDomainRequest = (input: GetMailDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1GetMobileDeviceAccessEffectRequest
 */
const se_GetMobileDeviceAccessEffectRequest = (
  input: GetMobileDeviceAccessEffectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceModel != null && { DeviceModel: input.DeviceModel }),
    ...(input.DeviceOperatingSystem != null && { DeviceOperatingSystem: input.DeviceOperatingSystem }),
    ...(input.DeviceType != null && { DeviceType: input.DeviceType }),
    ...(input.DeviceUserAgent != null && { DeviceUserAgent: input.DeviceUserAgent }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1GetMobileDeviceAccessOverrideRequest
 */
const se_GetMobileDeviceAccessOverrideRequest = (
  input: GetMobileDeviceAccessOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1ImpersonationRoleIdList
 */
const se_ImpersonationRoleIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ImpersonationRule
 */
const se_ImpersonationRule = (input: ImpersonationRule, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.ImpersonationRuleId != null && { ImpersonationRuleId: input.ImpersonationRuleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotTargetUsers != null && { NotTargetUsers: se_TargetUsers(input.NotTargetUsers, context) }),
    ...(input.TargetUsers != null && { TargetUsers: se_TargetUsers(input.TargetUsers, context) }),
  };
};

/**
 * serializeAws_json1_1ImpersonationRuleList
 */
const se_ImpersonationRuleList = (input: ImpersonationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImpersonationRule(entry, context);
    });
};

/**
 * serializeAws_json1_1IpRangeList
 */
const se_IpRangeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LambdaAvailabilityProvider
 */
const se_LambdaAvailabilityProvider = (input: LambdaAvailabilityProvider, context: __SerdeContext): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
  };
};

/**
 * serializeAws_json1_1ListAccessControlRulesRequest
 */
const se_ListAccessControlRulesRequest = (input: ListAccessControlRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListAliasesRequest
 */
const se_ListAliasesRequest = (input: ListAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListAvailabilityConfigurationsRequest
 */
const se_ListAvailabilityConfigurationsRequest = (
  input: ListAvailabilityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListGroupMembersRequest
 */
const se_ListGroupMembersRequest = (input: ListGroupMembersRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListGroupsRequest
 */
const se_ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListImpersonationRolesRequest
 */
const se_ListImpersonationRolesRequest = (input: ListImpersonationRolesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListMailboxExportJobsRequest
 */
const se_ListMailboxExportJobsRequest = (input: ListMailboxExportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListMailboxPermissionsRequest
 */
const se_ListMailboxPermissionsRequest = (input: ListMailboxPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListMailDomainsRequest
 */
const se_ListMailDomainsRequest = (input: ListMailDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListMobileDeviceAccessOverridesRequest
 */
const se_ListMobileDeviceAccessOverridesRequest = (
  input: ListMobileDeviceAccessOverridesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1ListMobileDeviceAccessRulesRequest
 */
const se_ListMobileDeviceAccessRulesRequest = (
  input: ListMobileDeviceAccessRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListOrganizationsRequest
 */
const se_ListOrganizationsRequest = (input: ListOrganizationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceDelegatesRequest
 */
const se_ListResourceDelegatesRequest = (input: ListResourceDelegatesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1ListResourcesRequest
 */
const se_ListResourcesRequest = (input: ListResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1PermissionValues
 */
const se_PermissionValues = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutAccessControlRuleRequest
 */
const se_PutAccessControlRuleRequest = (input: PutAccessControlRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Actions != null && { Actions: se_ActionsList(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.ImpersonationRoleIds != null && {
      ImpersonationRoleIds: se_ImpersonationRoleIdList(input.ImpersonationRoleIds, context),
    }),
    ...(input.IpRanges != null && { IpRanges: se_IpRangeList(input.IpRanges, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotActions != null && { NotActions: se_ActionsList(input.NotActions, context) }),
    ...(input.NotImpersonationRoleIds != null && {
      NotImpersonationRoleIds: se_ImpersonationRoleIdList(input.NotImpersonationRoleIds, context),
    }),
    ...(input.NotIpRanges != null && { NotIpRanges: se_IpRangeList(input.NotIpRanges, context) }),
    ...(input.NotUserIds != null && { NotUserIds: se_UserIdList(input.NotUserIds, context) }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserIds != null && { UserIds: se_UserIdList(input.UserIds, context) }),
  };
};

/**
 * serializeAws_json1_1PutEmailMonitoringConfigurationRequest
 */
const se_PutEmailMonitoringConfigurationRequest = (
  input: PutEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1PutInboundDmarcSettingsRequest
 */
const se_PutInboundDmarcSettingsRequest = (input: PutInboundDmarcSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Enforced != null && { Enforced: input.Enforced }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1PutMailboxPermissionsRequest
 */
const se_PutMailboxPermissionsRequest = (input: PutMailboxPermissionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.GranteeId != null && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.PermissionValues != null && { PermissionValues: se_PermissionValues(input.PermissionValues, context) }),
  };
};

/**
 * serializeAws_json1_1PutMobileDeviceAccessOverrideRequest
 */
const se_PutMobileDeviceAccessOverrideRequest = (
  input: PutMobileDeviceAccessOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1PutRetentionPolicyRequest
 */
const se_PutRetentionPolicyRequest = (input: PutRetentionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FolderConfigurations != null && {
      FolderConfigurations: se_FolderConfigurations(input.FolderConfigurations, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1RegisterMailDomainRequest
 */
const se_RegisterMailDomainRequest = (input: RegisterMailDomainRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1RegisterToWorkMailRequest
 */
const se_RegisterToWorkMailRequest = (input: RegisterToWorkMailRequest, context: __SerdeContext): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1ResetPasswordRequest
 */
const se_ResetPasswordRequest = (input: ResetPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1StartMailboxExportJobRequest
 */
const se_StartMailboxExportJobRequest = (input: StartMailboxExportJobRequest, context: __SerdeContext): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3Prefix != null && { S3Prefix: input.S3Prefix }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TargetUsers
 */
const se_TargetUsers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TestAvailabilityConfigurationRequest
 */
const se_TestAvailabilityConfigurationRequest = (
  input: TestAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && { EwsProvider: se_EwsAvailabilityProvider(input.EwsProvider, context) }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: se_LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAvailabilityConfigurationRequest
 */
const se_UpdateAvailabilityConfigurationRequest = (
  input: UpdateAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && { EwsProvider: se_EwsAvailabilityProvider(input.EwsProvider, context) }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: se_LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1UpdateDefaultMailDomainRequest
 */
const se_UpdateDefaultMailDomainRequest = (input: UpdateDefaultMailDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1UpdateImpersonationRoleRequest
 */
const se_UpdateImpersonationRoleRequest = (input: UpdateImpersonationRoleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Rules != null && { Rules: se_ImpersonationRuleList(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1UpdateMailboxQuotaRequest
 */
const se_UpdateMailboxQuotaRequest = (input: UpdateMailboxQuotaRequest, context: __SerdeContext): any => {
  return {
    ...(input.MailboxQuota != null && { MailboxQuota: input.MailboxQuota }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

/**
 * serializeAws_json1_1UpdateMobileDeviceAccessRuleRequest
 */
const se_UpdateMobileDeviceAccessRuleRequest = (
  input: UpdateMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceModels != null && { DeviceModels: se_DeviceModelList(input.DeviceModels, context) }),
    ...(input.DeviceOperatingSystems != null && {
      DeviceOperatingSystems: se_DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
    }),
    ...(input.DeviceTypes != null && { DeviceTypes: se_DeviceTypeList(input.DeviceTypes, context) }),
    ...(input.DeviceUserAgents != null && {
      DeviceUserAgents: se_DeviceUserAgentList(input.DeviceUserAgents, context),
    }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.MobileDeviceAccessRuleId != null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotDeviceModels != null && { NotDeviceModels: se_DeviceModelList(input.NotDeviceModels, context) }),
    ...(input.NotDeviceOperatingSystems != null && {
      NotDeviceOperatingSystems: se_DeviceOperatingSystemList(input.NotDeviceOperatingSystems, context),
    }),
    ...(input.NotDeviceTypes != null && { NotDeviceTypes: se_DeviceTypeList(input.NotDeviceTypes, context) }),
    ...(input.NotDeviceUserAgents != null && {
      NotDeviceUserAgents: se_DeviceUserAgentList(input.NotDeviceUserAgents, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1UpdatePrimaryEmailAddressRequest
 */
const se_UpdatePrimaryEmailAddressRequest = (input: UpdatePrimaryEmailAddressRequest, context: __SerdeContext): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

/**
 * serializeAws_json1_1UpdateResourceRequest
 */
const se_UpdateResourceRequest = (input: UpdateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BookingOptions != null && { BookingOptions: se_BookingOptions(input.BookingOptions, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

/**
 * serializeAws_json1_1UserIdList
 */
const se_UserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AccessControlRule
 */
const de_AccessControlRule = (output: any, context: __SerdeContext): AccessControlRule => {
  return {
    Actions: output.Actions != null ? de_ActionsList(output.Actions, context) : undefined,
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    Effect: __expectString(output.Effect),
    ImpersonationRoleIds:
      output.ImpersonationRoleIds != null
        ? de_ImpersonationRoleIdList(output.ImpersonationRoleIds, context)
        : undefined,
    IpRanges: output.IpRanges != null ? de_IpRangeList(output.IpRanges, context) : undefined,
    Name: __expectString(output.Name),
    NotActions: output.NotActions != null ? de_ActionsList(output.NotActions, context) : undefined,
    NotImpersonationRoleIds:
      output.NotImpersonationRoleIds != null
        ? de_ImpersonationRoleIdList(output.NotImpersonationRoleIds, context)
        : undefined,
    NotIpRanges: output.NotIpRanges != null ? de_IpRangeList(output.NotIpRanges, context) : undefined,
    NotUserIds: output.NotUserIds != null ? de_UserIdList(output.NotUserIds, context) : undefined,
    UserIds: output.UserIds != null ? de_UserIdList(output.UserIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccessControlRuleNameList
 */
const de_AccessControlRuleNameList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AccessControlRulesList
 */
const de_AccessControlRulesList = (output: any, context: __SerdeContext): AccessControlRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessControlRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionsList
 */
const de_ActionsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Aliases
 */
const de_Aliases = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateDelegateToResourceResponse
 */
const de_AssociateDelegateToResourceResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegateToResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssociateMemberToGroupResponse
 */
const de_AssociateMemberToGroupResponse = (output: any, context: __SerdeContext): AssociateMemberToGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AssumeImpersonationRoleResponse
 */
const de_AssumeImpersonationRoleResponse = (output: any, context: __SerdeContext): AssumeImpersonationRoleResponse => {
  return {
    ExpiresIn: __expectLong(output.ExpiresIn),
    Token: __expectString(output.Token),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityConfiguration
 */
const de_AvailabilityConfiguration = (output: any, context: __SerdeContext): AvailabilityConfiguration => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    DomainName: __expectString(output.DomainName),
    EwsProvider:
      output.EwsProvider != null ? de_RedactedEwsAvailabilityProvider(output.EwsProvider, context) : undefined,
    LambdaProvider:
      output.LambdaProvider != null ? de_LambdaAvailabilityProvider(output.LambdaProvider, context) : undefined,
    ProviderType: __expectString(output.ProviderType),
  } as any;
};

/**
 * deserializeAws_json1_1AvailabilityConfigurationList
 */
const de_AvailabilityConfigurationList = (output: any, context: __SerdeContext): AvailabilityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailabilityConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BookingOptions
 */
const de_BookingOptions = (output: any, context: __SerdeContext): BookingOptions => {
  return {
    AutoAcceptRequests: __expectBoolean(output.AutoAcceptRequests),
    AutoDeclineConflictingRequests: __expectBoolean(output.AutoDeclineConflictingRequests),
    AutoDeclineRecurringRequests: __expectBoolean(output.AutoDeclineRecurringRequests),
  } as any;
};

/**
 * deserializeAws_json1_1CancelMailboxExportJobResponse
 */
const de_CancelMailboxExportJobResponse = (output: any, context: __SerdeContext): CancelMailboxExportJobResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateAliasResponse
 */
const de_CreateAliasResponse = (output: any, context: __SerdeContext): CreateAliasResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateAvailabilityConfigurationResponse
 */
const de_CreateAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAvailabilityConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return {
    GroupId: __expectString(output.GroupId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateImpersonationRoleResponse
 */
const de_CreateImpersonationRoleResponse = (output: any, context: __SerdeContext): CreateImpersonationRoleResponse => {
  return {
    ImpersonationRoleId: __expectString(output.ImpersonationRoleId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateMobileDeviceAccessRuleResponse
 */
const de_CreateMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateMobileDeviceAccessRuleResponse => {
  return {
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateOrganizationResponse
 */
const de_CreateOrganizationResponse = (output: any, context: __SerdeContext): CreateOrganizationResponse => {
  return {
    OrganizationId: __expectString(output.OrganizationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateResourceResponse
 */
const de_CreateResourceResponse = (output: any, context: __SerdeContext): CreateResourceResponse => {
  return {
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserResponse
 */
const de_CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1Delegate
 */
const de_Delegate = (output: any, context: __SerdeContext): Delegate => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAccessControlRuleResponse
 */
const de_DeleteAccessControlRuleResponse = (output: any, context: __SerdeContext): DeleteAccessControlRuleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAliasResponse
 */
const de_DeleteAliasResponse = (output: any, context: __SerdeContext): DeleteAliasResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAvailabilityConfigurationResponse
 */
const de_DeleteAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAvailabilityConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEmailMonitoringConfigurationResponse
 */
const de_DeleteEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteEmailMonitoringConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteGroupResponse
 */
const de_DeleteGroupResponse = (output: any, context: __SerdeContext): DeleteGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteImpersonationRoleResponse
 */
const de_DeleteImpersonationRoleResponse = (output: any, context: __SerdeContext): DeleteImpersonationRoleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMailboxPermissionsResponse
 */
const de_DeleteMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteMailboxPermissionsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessOverrideResponse
 */
const de_DeleteMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): DeleteMobileDeviceAccessOverrideResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteMobileDeviceAccessRuleResponse
 */
const de_DeleteMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteMobileDeviceAccessRuleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteOrganizationResponse
 */
const de_DeleteOrganizationResponse = (output: any, context: __SerdeContext): DeleteOrganizationResponse => {
  return {
    OrganizationId: __expectString(output.OrganizationId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteResourceResponse
 */
const de_DeleteResourceResponse = (output: any, context: __SerdeContext): DeleteResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyResponse
 */
const de_DeleteRetentionPolicyResponse = (output: any, context: __SerdeContext): DeleteRetentionPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUserResponse
 */
const de_DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterFromWorkMailResponse
 */
const de_DeregisterFromWorkMailResponse = (output: any, context: __SerdeContext): DeregisterFromWorkMailResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterMailDomainResponse
 */
const de_DeregisterMailDomainResponse = (output: any, context: __SerdeContext): DeregisterMailDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeEmailMonitoringConfigurationResponse
 */
const de_DescribeEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmailMonitoringConfigurationResponse => {
  return {
    LogGroupArn: __expectString(output.LogGroupArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeGroupResponse
 */
const de_DescribeGroupResponse = (output: any, context: __SerdeContext): DescribeGroupResponse => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    GroupId: __expectString(output.GroupId),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeInboundDmarcSettingsResponse
 */
const de_DescribeInboundDmarcSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeInboundDmarcSettingsResponse => {
  return {
    Enforced: __expectBoolean(output.Enforced),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMailboxExportJobResponse
 */
const de_DescribeMailboxExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeMailboxExportJobResponse => {
  return {
    Description: __expectString(output.Description),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityId: __expectString(output.EntityId),
    ErrorInfo: __expectString(output.ErrorInfo),
    EstimatedProgress: __expectInt32(output.EstimatedProgress),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    RoleArn: __expectString(output.RoleArn),
    S3BucketName: __expectString(output.S3BucketName),
    S3Path: __expectString(output.S3Path),
    S3Prefix: __expectString(output.S3Prefix),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationResponse
 */
const de_DescribeOrganizationResponse = (output: any, context: __SerdeContext): DescribeOrganizationResponse => {
  return {
    ARN: __expectString(output.ARN),
    Alias: __expectString(output.Alias),
    CompletedDate:
      output.CompletedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletedDate)))
        : undefined,
    DefaultMailDomain: __expectString(output.DefaultMailDomain),
    DirectoryId: __expectString(output.DirectoryId),
    DirectoryType: __expectString(output.DirectoryType),
    ErrorMessage: __expectString(output.ErrorMessage),
    OrganizationId: __expectString(output.OrganizationId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourceResponse
 */
const de_DescribeResourceResponse = (output: any, context: __SerdeContext): DescribeResourceResponse => {
  return {
    BookingOptions: output.BookingOptions != null ? de_BookingOptions(output.BookingOptions, context) : undefined,
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceId: __expectString(output.ResourceId),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserResponse
 */
const de_DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    UserId: __expectString(output.UserId),
    UserRole: __expectString(output.UserRole),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceModelList
 */
const de_DeviceModelList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceOperatingSystemList
 */
const de_DeviceOperatingSystemList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceTypeList
 */
const de_DeviceTypeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceUserAgentList
 */
const de_DeviceUserAgentList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DirectoryInUseException
 */
const de_DirectoryInUseException = (output: any, context: __SerdeContext): DirectoryInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryServiceAuthenticationFailedException
 */
const de_DirectoryServiceAuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): DirectoryServiceAuthenticationFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DirectoryUnavailableException
 */
const de_DirectoryUnavailableException = (output: any, context: __SerdeContext): DirectoryUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateDelegateFromResourceResponse
 */
const de_DisassociateDelegateFromResourceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegateFromResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateMemberFromGroupResponse
 */
const de_DisassociateMemberFromGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateMemberFromGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DnsRecord
 */
const de_DnsRecord = (output: any, context: __SerdeContext): DnsRecord => {
  return {
    Hostname: __expectString(output.Hostname),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1DnsRecords
 */
const de_DnsRecords = (output: any, context: __SerdeContext): DnsRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DnsRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EmailAddressInUseException
 */
const de_EmailAddressInUseException = (output: any, context: __SerdeContext): EmailAddressInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntityAlreadyRegisteredException
 */
const de_EntityAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntityNotFoundException
 */
const de_EntityNotFoundException = (output: any, context: __SerdeContext): EntityNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EntityStateException
 */
const de_EntityStateException = (output: any, context: __SerdeContext): EntityStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FolderConfiguration
 */
const de_FolderConfiguration = (output: any, context: __SerdeContext): FolderConfiguration => {
  return {
    Action: __expectString(output.Action),
    Name: __expectString(output.Name),
    Period: __expectInt32(output.Period),
  } as any;
};

/**
 * deserializeAws_json1_1FolderConfigurations
 */
const de_FolderConfigurations = (output: any, context: __SerdeContext): FolderConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FolderConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAccessControlEffectResponse
 */
const de_GetAccessControlEffectResponse = (output: any, context: __SerdeContext): GetAccessControlEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules: output.MatchedRules != null ? de_AccessControlRuleNameList(output.MatchedRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDefaultRetentionPolicyResponse
 */
const de_GetDefaultRetentionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetDefaultRetentionPolicyResponse => {
  return {
    Description: __expectString(output.Description),
    FolderConfigurations:
      output.FolderConfigurations != null ? de_FolderConfigurations(output.FolderConfigurations, context) : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1GetImpersonationRoleEffectResponse
 */
const de_GetImpersonationRoleEffectResponse = (
  output: any,
  context: __SerdeContext
): GetImpersonationRoleEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules:
      output.MatchedRules != null ? de_ImpersonationMatchedRuleList(output.MatchedRules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GetImpersonationRoleResponse
 */
const de_GetImpersonationRoleResponse = (output: any, context: __SerdeContext): GetImpersonationRoleResponse => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    ImpersonationRoleId: __expectString(output.ImpersonationRoleId),
    Name: __expectString(output.Name),
    Rules: output.Rules != null ? de_ImpersonationRuleList(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1GetMailboxDetailsResponse
 */
const de_GetMailboxDetailsResponse = (output: any, context: __SerdeContext): GetMailboxDetailsResponse => {
  return {
    MailboxQuota: __expectInt32(output.MailboxQuota),
    MailboxSize: __limitedParseDouble(output.MailboxSize),
  } as any;
};

/**
 * deserializeAws_json1_1GetMailDomainResponse
 */
const de_GetMailDomainResponse = (output: any, context: __SerdeContext): GetMailDomainResponse => {
  return {
    DkimVerificationStatus: __expectString(output.DkimVerificationStatus),
    IsDefault: __expectBoolean(output.IsDefault),
    IsTestDomain: __expectBoolean(output.IsTestDomain),
    OwnershipVerificationStatus: __expectString(output.OwnershipVerificationStatus),
    Records: output.Records != null ? de_DnsRecords(output.Records, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessEffectResponse
 */
const de_GetMobileDeviceAccessEffectResponse = (
  output: any,
  context: __SerdeContext
): GetMobileDeviceAccessEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules:
      output.MatchedRules != null ? de_MobileDeviceAccessMatchedRuleList(output.MatchedRules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetMobileDeviceAccessOverrideResponse
 */
const de_GetMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): GetMobileDeviceAccessOverrideResponse => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    DeviceId: __expectString(output.DeviceId),
    Effect: __expectString(output.Effect),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Group(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImpersonationMatchedRule
 */
const de_ImpersonationMatchedRule = (output: any, context: __SerdeContext): ImpersonationMatchedRule => {
  return {
    ImpersonationRuleId: __expectString(output.ImpersonationRuleId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ImpersonationMatchedRuleList
 */
const de_ImpersonationMatchedRuleList = (output: any, context: __SerdeContext): ImpersonationMatchedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImpersonationMatchedRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImpersonationRole
 */
const de_ImpersonationRole = (output: any, context: __SerdeContext): ImpersonationRole => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    ImpersonationRoleId: __expectString(output.ImpersonationRoleId),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ImpersonationRoleIdList
 */
const de_ImpersonationRoleIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImpersonationRoleList
 */
const de_ImpersonationRoleList = (output: any, context: __SerdeContext): ImpersonationRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImpersonationRole(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImpersonationRule
 */
const de_ImpersonationRule = (output: any, context: __SerdeContext): ImpersonationRule => {
  return {
    Description: __expectString(output.Description),
    Effect: __expectString(output.Effect),
    ImpersonationRuleId: __expectString(output.ImpersonationRuleId),
    Name: __expectString(output.Name),
    NotTargetUsers: output.NotTargetUsers != null ? de_TargetUsers(output.NotTargetUsers, context) : undefined,
    TargetUsers: output.TargetUsers != null ? de_TargetUsers(output.TargetUsers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImpersonationRuleList
 */
const de_ImpersonationRuleList = (output: any, context: __SerdeContext): ImpersonationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImpersonationRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidConfigurationException
 */
const de_InvalidConfigurationException = (output: any, context: __SerdeContext): InvalidConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCustomSesConfigurationException
 */
const de_InvalidCustomSesConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidCustomSesConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPasswordException
 */
const de_InvalidPasswordException = (output: any, context: __SerdeContext): InvalidPasswordException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IpRangeList
 */
const de_IpRangeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Jobs
 */
const de_Jobs = (output: any, context: __SerdeContext): MailboxExportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MailboxExportJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LambdaAvailabilityProvider
 */
const de_LambdaAvailabilityProvider = (output: any, context: __SerdeContext): LambdaAvailabilityProvider => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAccessControlRulesResponse
 */
const de_ListAccessControlRulesResponse = (output: any, context: __SerdeContext): ListAccessControlRulesResponse => {
  return {
    Rules: output.Rules != null ? de_AccessControlRulesList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListAliasesResponse
 */
const de_ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? de_Aliases(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListAvailabilityConfigurationsResponse
 */
const de_ListAvailabilityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailabilityConfigurationsResponse => {
  return {
    AvailabilityConfigurations:
      output.AvailabilityConfigurations != null
        ? de_AvailabilityConfigurationList(output.AvailabilityConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupMembersResponse
 */
const de_ListGroupMembersResponse = (output: any, context: __SerdeContext): ListGroupMembersResponse => {
  return {
    Members: output.Members != null ? de_Members(output.Members, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return {
    Groups: output.Groups != null ? de_Groups(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListImpersonationRolesResponse
 */
const de_ListImpersonationRolesResponse = (output: any, context: __SerdeContext): ListImpersonationRolesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Roles: output.Roles != null ? de_ImpersonationRoleList(output.Roles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListMailboxExportJobsResponse
 */
const de_ListMailboxExportJobsResponse = (output: any, context: __SerdeContext): ListMailboxExportJobsResponse => {
  return {
    Jobs: output.Jobs != null ? de_Jobs(output.Jobs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMailboxPermissionsResponse
 */
const de_ListMailboxPermissionsResponse = (output: any, context: __SerdeContext): ListMailboxPermissionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Permissions: output.Permissions != null ? de_Permissions(output.Permissions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListMailDomainsResponse
 */
const de_ListMailDomainsResponse = (output: any, context: __SerdeContext): ListMailDomainsResponse => {
  return {
    MailDomains: output.MailDomains != null ? de_MailDomains(output.MailDomains, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessOverridesResponse
 */
const de_ListMobileDeviceAccessOverridesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessOverridesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Overrides: output.Overrides != null ? de_MobileDeviceAccessOverridesList(output.Overrides, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessRulesResponse
 */
const de_ListMobileDeviceAccessRulesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessRulesResponse => {
  return {
    Rules: output.Rules != null ? de_MobileDeviceAccessRulesList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOrganizationsResponse
 */
const de_ListOrganizationsResponse = (output: any, context: __SerdeContext): ListOrganizationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationSummaries:
      output.OrganizationSummaries != null
        ? de_OrganizationSummaries(output.OrganizationSummaries, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceDelegatesResponse
 */
const de_ListResourceDelegatesResponse = (output: any, context: __SerdeContext): ListResourceDelegatesResponse => {
  return {
    Delegates: output.Delegates != null ? de_ResourceDelegates(output.Delegates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListResourcesResponse
 */
const de_ListResourcesResponse = (output: any, context: __SerdeContext): ListResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Resources: output.Resources != null ? de_Resources(output.Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? de_Users(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MailboxExportJob
 */
const de_MailboxExportJob = (output: any, context: __SerdeContext): MailboxExportJob => {
  return {
    Description: __expectString(output.Description),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    EntityId: __expectString(output.EntityId),
    EstimatedProgress: __expectInt32(output.EstimatedProgress),
    JobId: __expectString(output.JobId),
    S3BucketName: __expectString(output.S3BucketName),
    S3Path: __expectString(output.S3Path),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1MailDomainInUseException
 */
const de_MailDomainInUseException = (output: any, context: __SerdeContext): MailDomainInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MailDomainNotFoundException
 */
const de_MailDomainNotFoundException = (output: any, context: __SerdeContext): MailDomainNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MailDomains
 */
const de_MailDomains = (output: any, context: __SerdeContext): MailDomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MailDomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MailDomainStateException
 */
const de_MailDomainStateException = (output: any, context: __SerdeContext): MailDomainStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MailDomainSummary
 */
const de_MailDomainSummary = (output: any, context: __SerdeContext): MailDomainSummary => {
  return {
    DefaultDomain: __expectBoolean(output.DefaultDomain),
    DomainName: __expectString(output.DomainName),
  } as any;
};

/**
 * deserializeAws_json1_1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Members
 */
const de_Members = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Member(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessMatchedRule
 */
const de_MobileDeviceAccessMatchedRule = (output: any, context: __SerdeContext): MobileDeviceAccessMatchedRule => {
  return {
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessMatchedRuleList
 */
const de_MobileDeviceAccessMatchedRuleList = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessMatchedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MobileDeviceAccessMatchedRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessOverride
 */
const de_MobileDeviceAccessOverride = (output: any, context: __SerdeContext): MobileDeviceAccessOverride => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    DeviceId: __expectString(output.DeviceId),
    Effect: __expectString(output.Effect),
    UserId: __expectString(output.UserId),
  } as any;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessOverridesList
 */
const de_MobileDeviceAccessOverridesList = (output: any, context: __SerdeContext): MobileDeviceAccessOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MobileDeviceAccessOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessRule
 */
const de_MobileDeviceAccessRule = (output: any, context: __SerdeContext): MobileDeviceAccessRule => {
  return {
    DateCreated:
      output.DateCreated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateCreated)))
        : undefined,
    DateModified:
      output.DateModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateModified)))
        : undefined,
    Description: __expectString(output.Description),
    DeviceModels: output.DeviceModels != null ? de_DeviceModelList(output.DeviceModels, context) : undefined,
    DeviceOperatingSystems:
      output.DeviceOperatingSystems != null
        ? de_DeviceOperatingSystemList(output.DeviceOperatingSystems, context)
        : undefined,
    DeviceTypes: output.DeviceTypes != null ? de_DeviceTypeList(output.DeviceTypes, context) : undefined,
    DeviceUserAgents:
      output.DeviceUserAgents != null ? de_DeviceUserAgentList(output.DeviceUserAgents, context) : undefined,
    Effect: __expectString(output.Effect),
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
    Name: __expectString(output.Name),
    NotDeviceModels: output.NotDeviceModels != null ? de_DeviceModelList(output.NotDeviceModels, context) : undefined,
    NotDeviceOperatingSystems:
      output.NotDeviceOperatingSystems != null
        ? de_DeviceOperatingSystemList(output.NotDeviceOperatingSystems, context)
        : undefined,
    NotDeviceTypes: output.NotDeviceTypes != null ? de_DeviceTypeList(output.NotDeviceTypes, context) : undefined,
    NotDeviceUserAgents:
      output.NotDeviceUserAgents != null ? de_DeviceUserAgentList(output.NotDeviceUserAgents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessRulesList
 */
const de_MobileDeviceAccessRulesList = (output: any, context: __SerdeContext): MobileDeviceAccessRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MobileDeviceAccessRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NameAvailabilityException
 */
const de_NameAvailabilityException = (output: any, context: __SerdeContext): NameAvailabilityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationNotFoundException
 */
const de_OrganizationNotFoundException = (output: any, context: __SerdeContext): OrganizationNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationStateException
 */
const de_OrganizationStateException = (output: any, context: __SerdeContext): OrganizationStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationSummaries
 */
const de_OrganizationSummaries = (output: any, context: __SerdeContext): OrganizationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OrganizationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OrganizationSummary
 */
const de_OrganizationSummary = (output: any, context: __SerdeContext): OrganizationSummary => {
  return {
    Alias: __expectString(output.Alias),
    DefaultMailDomain: __expectString(output.DefaultMailDomain),
    ErrorMessage: __expectString(output.ErrorMessage),
    OrganizationId: __expectString(output.OrganizationId),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1Permission
 */
const de_Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    GranteeId: __expectString(output.GranteeId),
    GranteeType: __expectString(output.GranteeType),
    PermissionValues:
      output.PermissionValues != null ? de_PermissionValues(output.PermissionValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Permissions
 */
const de_Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Permission(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PermissionValues
 */
const de_PermissionValues = (output: any, context: __SerdeContext): (PermissionType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutAccessControlRuleResponse
 */
const de_PutAccessControlRuleResponse = (output: any, context: __SerdeContext): PutAccessControlRuleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutEmailMonitoringConfigurationResponse
 */
const de_PutEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutEmailMonitoringConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutInboundDmarcSettingsResponse
 */
const de_PutInboundDmarcSettingsResponse = (output: any, context: __SerdeContext): PutInboundDmarcSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutMailboxPermissionsResponse
 */
const de_PutMailboxPermissionsResponse = (output: any, context: __SerdeContext): PutMailboxPermissionsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutMobileDeviceAccessOverrideResponse
 */
const de_PutMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): PutMobileDeviceAccessOverrideResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutRetentionPolicyResponse
 */
const de_PutRetentionPolicyResponse = (output: any, context: __SerdeContext): PutRetentionPolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RedactedEwsAvailabilityProvider
 */
const de_RedactedEwsAvailabilityProvider = (output: any, context: __SerdeContext): RedactedEwsAvailabilityProvider => {
  return {
    EwsEndpoint: __expectString(output.EwsEndpoint),
    EwsUsername: __expectString(output.EwsUsername),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterMailDomainResponse
 */
const de_RegisterMailDomainResponse = (output: any, context: __SerdeContext): RegisterMailDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RegisterToWorkMailResponse
 */
const de_RegisterToWorkMailResponse = (output: any, context: __SerdeContext): RegisterToWorkMailResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ReservedNameException
 */
const de_ReservedNameException = (output: any, context: __SerdeContext): ReservedNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResetPasswordResponse
 */
const de_ResetPasswordResponse = (output: any, context: __SerdeContext): ResetPasswordResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceDelegates
 */
const de_ResourceDelegates = (output: any, context: __SerdeContext): Delegate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Delegate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StartMailboxExportJobResponse
 */
const de_StartMailboxExportJobResponse = (output: any, context: __SerdeContext): StartMailboxExportJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TargetUsers
 */
const de_TargetUsers = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestAvailabilityConfigurationResponse
 */
const de_TestAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): TestAvailabilityConfigurationResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    TestPassed: __expectBoolean(output.TestPassed),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAvailabilityConfigurationResponse
 */
const de_UpdateAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateAvailabilityConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDefaultMailDomainResponse
 */
const de_UpdateDefaultMailDomainResponse = (output: any, context: __SerdeContext): UpdateDefaultMailDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateImpersonationRoleResponse
 */
const de_UpdateImpersonationRoleResponse = (output: any, context: __SerdeContext): UpdateImpersonationRoleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateMailboxQuotaResponse
 */
const de_UpdateMailboxQuotaResponse = (output: any, context: __SerdeContext): UpdateMailboxQuotaResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateMobileDeviceAccessRuleResponse
 */
const de_UpdateMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateMobileDeviceAccessRuleResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdatePrimaryEmailAddressResponse
 */
const de_UpdatePrimaryEmailAddressResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrimaryEmailAddressResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateResourceResponse
 */
const de_UpdateResourceResponse = (output: any, context: __SerdeContext): UpdateResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return {
    DisabledDate:
      output.DisabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DisabledDate)))
        : undefined,
    DisplayName: __expectString(output.DisplayName),
    Email: __expectString(output.Email),
    EnabledDate:
      output.EnabledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EnabledDate)))
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    UserRole: __expectString(output.UserRole),
  } as any;
};

/**
 * deserializeAws_json1_1UserIdList
 */
const de_UserIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Users
 */
const de_Users = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_User(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `WorkMailService.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
