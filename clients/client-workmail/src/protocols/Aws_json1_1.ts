// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import { DescribeEntityCommandInput, DescribeEntityCommandOutput } from "../commands/DescribeEntityCommand";
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
  ListGroupsForEntityCommandInput,
  ListGroupsForEntityCommandOutput,
} from "../commands/ListGroupsForEntityCommand";
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
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
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
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  AccessControlRule,
  AssociateDelegateToResourceRequest,
  AssociateMemberToGroupRequest,
  AssumeImpersonationRoleRequest,
  AvailabilityConfiguration,
  BookingOptions,
  CancelMailboxExportJobRequest,
  CreateAliasRequest,
  CreateAvailabilityConfigurationRequest,
  CreateGroupRequest,
  CreateImpersonationRoleRequest,
  CreateMobileDeviceAccessRuleRequest,
  CreateOrganizationRequest,
  CreateResourceRequest,
  CreateUserRequest,
  DeleteAccessControlRuleRequest,
  DeleteAliasRequest,
  DeleteAvailabilityConfigurationRequest,
  DeleteEmailMonitoringConfigurationRequest,
  DeleteGroupRequest,
  DeleteImpersonationRoleRequest,
  DeleteMailboxPermissionsRequest,
  DeleteMobileDeviceAccessOverrideRequest,
  DeleteMobileDeviceAccessRuleRequest,
  DeleteOrganizationRequest,
  DeleteResourceRequest,
  DeleteRetentionPolicyRequest,
  DeleteUserRequest,
  DeregisterFromWorkMailRequest,
  DeregisterMailDomainRequest,
  DescribeEmailMonitoringConfigurationRequest,
  DescribeEntityRequest,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeInboundDmarcSettingsRequest,
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
  DisassociateMemberFromGroupRequest,
  Domain,
  EmailAddressInUseException,
  EntityAlreadyRegisteredException,
  EntityNotFoundException,
  EntityStateException,
  EwsAvailabilityProvider,
  FolderConfiguration,
  GetAccessControlEffectRequest,
  GetDefaultRetentionPolicyRequest,
  GetImpersonationRoleEffectRequest,
  GetImpersonationRoleRequest,
  GetImpersonationRoleResponse,
  GetMailboxDetailsRequest,
  GetMailboxDetailsResponse,
  GetMailDomainRequest,
  GetMobileDeviceAccessEffectRequest,
  GetMobileDeviceAccessOverrideRequest,
  GetMobileDeviceAccessOverrideResponse,
  Group,
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
  ListAvailabilityConfigurationsRequest,
  ListAvailabilityConfigurationsResponse,
  ListGroupMembersRequest,
  ListGroupMembersResponse,
  ListGroupsFilters,
  ListGroupsForEntityFilters,
  ListGroupsForEntityRequest,
  ListGroupsRequest,
  ListGroupsResponse,
  ListImpersonationRolesRequest,
  ListImpersonationRolesResponse,
  ListMailboxExportJobsRequest,
  ListMailboxExportJobsResponse,
  ListMailboxPermissionsRequest,
  ListMailDomainsRequest,
  ListMobileDeviceAccessOverridesRequest,
  ListMobileDeviceAccessOverridesResponse,
  ListMobileDeviceAccessRulesRequest,
  ListMobileDeviceAccessRulesResponse,
  ListOrganizationsRequest,
  ListResourceDelegatesRequest,
  ListResourcesFilters,
  ListResourcesRequest,
  ListResourcesResponse,
  ListTagsForResourceRequest,
  ListUsersFilters,
  ListUsersRequest,
  ListUsersResponse,
  MailboxExportJob,
  MailDomainInUseException,
  MailDomainNotFoundException,
  MailDomainStateException,
  Member,
  MobileDeviceAccessOverride,
  MobileDeviceAccessRule,
  NameAvailabilityException,
  OrganizationNotFoundException,
  OrganizationStateException,
  PermissionType,
  PutAccessControlRuleRequest,
  PutEmailMonitoringConfigurationRequest,
  PutInboundDmarcSettingsRequest,
  PutMailboxPermissionsRequest,
  PutMobileDeviceAccessOverrideRequest,
  PutRetentionPolicyRequest,
  RegisterMailDomainRequest,
  RegisterToWorkMailRequest,
  ReservedNameException,
  ResetPasswordRequest,
  Resource,
  ResourceNotFoundException,
  StartMailboxExportJobRequest,
  Tag,
  TagResourceRequest,
  TestAvailabilityConfigurationRequest,
  TooManyTagsException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateAvailabilityConfigurationRequest,
  UpdateDefaultMailDomainRequest,
  UpdateGroupRequest,
  UpdateImpersonationRoleRequest,
  UpdateMailboxQuotaRequest,
  UpdateMobileDeviceAccessRuleRequest,
  UpdatePrimaryEmailAddressRequest,
  UpdateResourceRequest,
  UpdateUserRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEntityCommand
 */
export const se_DescribeEntityCommand = async (
  input: DescribeEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEntity");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsForEntityCommand
 */
export const se_ListGroupsForEntityCommand = async (
  input: ListGroupsForEntityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroupsForEntity");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGroup");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserCommand
 */
export const se_UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUser");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AssociateDelegateToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssociateMemberToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: AssumeImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterFromWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEntityCommand
 */
export const de_DescribeEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEntityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEntityCommandError
 */
const de_DescribeEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEntityCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateDelegateFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateMemberFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAccessControlEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDefaultRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetImpersonationRoleEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetMobileDeviceAccessEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGroupsForEntityCommand
 */
export const de_ListGroupsForEntityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForEntityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsForEntityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListGroupsForEntityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGroupsForEntityCommandError
 */
const de_ListGroupsForEntityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsForEntityCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListMailDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListOrganizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListResourceDelegatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterToWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ResetPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TestAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDefaultMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMailboxQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePrimaryEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserCommand
 */
export const de_UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserCommandError
 */
const de_UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionsList omitted.

// se_AssociateDelegateToResourceRequest omitted.

// se_AssociateMemberToGroupRequest omitted.

// se_AssumeImpersonationRoleRequest omitted.

// se_BookingOptions omitted.

/**
 * serializeAws_json1_1CancelMailboxExportJobRequest
 */
const se_CancelMailboxExportJobRequest = (input: CancelMailboxExportJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    JobId: [],
    OrganizationId: [],
  });
};

// se_CreateAliasRequest omitted.

/**
 * serializeAws_json1_1CreateAvailabilityConfigurationRequest
 */
const se_CreateAvailabilityConfigurationRequest = (
  input: CreateAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DomainName: [],
    EwsProvider: _json,
    LambdaProvider: _json,
    OrganizationId: [],
  });
};

// se_CreateGroupRequest omitted.

/**
 * serializeAws_json1_1CreateImpersonationRoleRequest
 */
const se_CreateImpersonationRoleRequest = (input: CreateImpersonationRoleRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    OrganizationId: [],
    Rules: _json,
    Type: [],
  });
};

/**
 * serializeAws_json1_1CreateMobileDeviceAccessRuleRequest
 */
const se_CreateMobileDeviceAccessRuleRequest = (
  input: CreateMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    DeviceModels: _json,
    DeviceOperatingSystems: _json,
    DeviceTypes: _json,
    DeviceUserAgents: _json,
    Effect: [],
    Name: [],
    NotDeviceModels: _json,
    NotDeviceOperatingSystems: _json,
    NotDeviceTypes: _json,
    NotDeviceUserAgents: _json,
    OrganizationId: [],
  });
};

/**
 * serializeAws_json1_1CreateOrganizationRequest
 */
const se_CreateOrganizationRequest = (input: CreateOrganizationRequest, context: __SerdeContext): any => {
  return take(input, {
    Alias: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DirectoryId: [],
    Domains: _json,
    EnableInteroperability: [],
    KmsKeyArn: [],
  });
};

// se_CreateResourceRequest omitted.

// se_CreateUserRequest omitted.

// se_DeleteAccessControlRuleRequest omitted.

// se_DeleteAliasRequest omitted.

// se_DeleteAvailabilityConfigurationRequest omitted.

// se_DeleteEmailMonitoringConfigurationRequest omitted.

// se_DeleteGroupRequest omitted.

// se_DeleteImpersonationRoleRequest omitted.

// se_DeleteMailboxPermissionsRequest omitted.

// se_DeleteMobileDeviceAccessOverrideRequest omitted.

// se_DeleteMobileDeviceAccessRuleRequest omitted.

/**
 * serializeAws_json1_1DeleteOrganizationRequest
 */
const se_DeleteOrganizationRequest = (input: DeleteOrganizationRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeleteDirectory: [],
    ForceDelete: [],
    OrganizationId: [],
  });
};

// se_DeleteResourceRequest omitted.

// se_DeleteRetentionPolicyRequest omitted.

// se_DeleteUserRequest omitted.

// se_DeregisterFromWorkMailRequest omitted.

// se_DeregisterMailDomainRequest omitted.

// se_DescribeEmailMonitoringConfigurationRequest omitted.

// se_DescribeEntityRequest omitted.

// se_DescribeGroupRequest omitted.

// se_DescribeInboundDmarcSettingsRequest omitted.

// se_DescribeMailboxExportJobRequest omitted.

// se_DescribeOrganizationRequest omitted.

// se_DescribeResourceRequest omitted.

// se_DescribeUserRequest omitted.

// se_DeviceModelList omitted.

// se_DeviceOperatingSystemList omitted.

// se_DeviceTypeList omitted.

// se_DeviceUserAgentList omitted.

// se_DisassociateDelegateFromResourceRequest omitted.

// se_DisassociateMemberFromGroupRequest omitted.

// se_Domain omitted.

// se_Domains omitted.

// se_EwsAvailabilityProvider omitted.

// se_FolderConfiguration omitted.

// se_FolderConfigurations omitted.

// se_GetAccessControlEffectRequest omitted.

// se_GetDefaultRetentionPolicyRequest omitted.

// se_GetImpersonationRoleEffectRequest omitted.

// se_GetImpersonationRoleRequest omitted.

// se_GetMailboxDetailsRequest omitted.

// se_GetMailDomainRequest omitted.

// se_GetMobileDeviceAccessEffectRequest omitted.

// se_GetMobileDeviceAccessOverrideRequest omitted.

// se_ImpersonationRoleIdList omitted.

// se_ImpersonationRule omitted.

// se_ImpersonationRuleList omitted.

// se_IpRangeList omitted.

// se_LambdaAvailabilityProvider omitted.

// se_ListAccessControlRulesRequest omitted.

// se_ListAliasesRequest omitted.

// se_ListAvailabilityConfigurationsRequest omitted.

// se_ListGroupMembersRequest omitted.

// se_ListGroupsFilters omitted.

// se_ListGroupsForEntityFilters omitted.

// se_ListGroupsForEntityRequest omitted.

// se_ListGroupsRequest omitted.

// se_ListImpersonationRolesRequest omitted.

// se_ListMailboxExportJobsRequest omitted.

// se_ListMailboxPermissionsRequest omitted.

// se_ListMailDomainsRequest omitted.

// se_ListMobileDeviceAccessOverridesRequest omitted.

// se_ListMobileDeviceAccessRulesRequest omitted.

// se_ListOrganizationsRequest omitted.

// se_ListResourceDelegatesRequest omitted.

// se_ListResourcesFilters omitted.

// se_ListResourcesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListUsersFilters omitted.

// se_ListUsersRequest omitted.

// se_PermissionValues omitted.

// se_PutAccessControlRuleRequest omitted.

// se_PutEmailMonitoringConfigurationRequest omitted.

// se_PutInboundDmarcSettingsRequest omitted.

// se_PutMailboxPermissionsRequest omitted.

// se_PutMobileDeviceAccessOverrideRequest omitted.

// se_PutRetentionPolicyRequest omitted.

/**
 * serializeAws_json1_1RegisterMailDomainRequest
 */
const se_RegisterMailDomainRequest = (input: RegisterMailDomainRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DomainName: [],
    OrganizationId: [],
  });
};

// se_RegisterToWorkMailRequest omitted.

// se_ResetPasswordRequest omitted.

/**
 * serializeAws_json1_1StartMailboxExportJobRequest
 */
const se_StartMailboxExportJobRequest = (input: StartMailboxExportJobRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    EntityId: [],
    KmsKeyArn: [],
    OrganizationId: [],
    RoleArn: [],
    S3BucketName: [],
    S3Prefix: [],
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetUsers omitted.

// se_TestAvailabilityConfigurationRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAvailabilityConfigurationRequest omitted.

// se_UpdateDefaultMailDomainRequest omitted.

// se_UpdateGroupRequest omitted.

// se_UpdateImpersonationRoleRequest omitted.

// se_UpdateMailboxQuotaRequest omitted.

// se_UpdateMobileDeviceAccessRuleRequest omitted.

// se_UpdatePrimaryEmailAddressRequest omitted.

// se_UpdateResourceRequest omitted.

// se_UpdateUserRequest omitted.

// se_UserIdList omitted.

/**
 * deserializeAws_json1_1AccessControlRule
 */
const de_AccessControlRule = (output: any, context: __SerdeContext): AccessControlRule => {
  return take(output, {
    Actions: _json,
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Effect: __expectString,
    ImpersonationRoleIds: _json,
    IpRanges: _json,
    Name: __expectString,
    NotActions: _json,
    NotImpersonationRoleIds: _json,
    NotIpRanges: _json,
    NotUserIds: _json,
    UserIds: _json,
  }) as any;
};

// de_AccessControlRuleNameList omitted.

/**
 * deserializeAws_json1_1AccessControlRulesList
 */
const de_AccessControlRulesList = (output: any, context: __SerdeContext): AccessControlRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessControlRule(entry, context);
    });
  return retVal;
};

// de_ActionsList omitted.

// de_Aliases omitted.

// de_AssociateDelegateToResourceResponse omitted.

// de_AssociateMemberToGroupResponse omitted.

// de_AssumeImpersonationRoleResponse omitted.

/**
 * deserializeAws_json1_1AvailabilityConfiguration
 */
const de_AvailabilityConfiguration = (output: any, context: __SerdeContext): AvailabilityConfiguration => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    EwsProvider: _json,
    LambdaProvider: _json,
    ProviderType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AvailabilityConfigurationList
 */
const de_AvailabilityConfigurationList = (output: any, context: __SerdeContext): AvailabilityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AvailabilityConfiguration(entry, context);
    });
  return retVal;
};

// de_BookingOptions omitted.

// de_CancelMailboxExportJobResponse omitted.

// de_CreateAliasResponse omitted.

// de_CreateAvailabilityConfigurationResponse omitted.

// de_CreateGroupResponse omitted.

// de_CreateImpersonationRoleResponse omitted.

// de_CreateMobileDeviceAccessRuleResponse omitted.

// de_CreateOrganizationResponse omitted.

// de_CreateResourceResponse omitted.

// de_CreateUserResponse omitted.

// de_Delegate omitted.

// de_DeleteAccessControlRuleResponse omitted.

// de_DeleteAliasResponse omitted.

// de_DeleteAvailabilityConfigurationResponse omitted.

// de_DeleteEmailMonitoringConfigurationResponse omitted.

// de_DeleteGroupResponse omitted.

// de_DeleteImpersonationRoleResponse omitted.

// de_DeleteMailboxPermissionsResponse omitted.

// de_DeleteMobileDeviceAccessOverrideResponse omitted.

// de_DeleteMobileDeviceAccessRuleResponse omitted.

// de_DeleteOrganizationResponse omitted.

// de_DeleteResourceResponse omitted.

// de_DeleteRetentionPolicyResponse omitted.

// de_DeleteUserResponse omitted.

// de_DeregisterFromWorkMailResponse omitted.

// de_DeregisterMailDomainResponse omitted.

// de_DescribeEmailMonitoringConfigurationResponse omitted.

// de_DescribeEntityResponse omitted.

/**
 * deserializeAws_json1_1DescribeGroupResponse
 */
const de_DescribeGroupResponse = (output: any, context: __SerdeContext): DescribeGroupResponse => {
  return take(output, {
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GroupId: __expectString,
    HiddenFromGlobalAddressList: __expectBoolean,
    Name: __expectString,
    State: __expectString,
  }) as any;
};

// de_DescribeInboundDmarcSettingsResponse omitted.

/**
 * deserializeAws_json1_1DescribeMailboxExportJobResponse
 */
const de_DescribeMailboxExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeMailboxExportJobResponse => {
  return take(output, {
    Description: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EntityId: __expectString,
    ErrorInfo: __expectString,
    EstimatedProgress: __expectInt32,
    KmsKeyArn: __expectString,
    RoleArn: __expectString,
    S3BucketName: __expectString,
    S3Path: __expectString,
    S3Prefix: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeOrganizationResponse
 */
const de_DescribeOrganizationResponse = (output: any, context: __SerdeContext): DescribeOrganizationResponse => {
  return take(output, {
    ARN: __expectString,
    Alias: __expectString,
    CompletedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultMailDomain: __expectString,
    DirectoryId: __expectString,
    DirectoryType: __expectString,
    ErrorMessage: __expectString,
    InteroperabilityEnabled: __expectBoolean,
    MigrationAdmin: __expectString,
    OrganizationId: __expectString,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeResourceResponse
 */
const de_DescribeResourceResponse = (output: any, context: __SerdeContext): DescribeResourceResponse => {
  return take(output, {
    BookingOptions: _json,
    Description: __expectString,
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HiddenFromGlobalAddressList: __expectBoolean,
    Name: __expectString,
    ResourceId: __expectString,
    State: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserResponse
 */
const de_DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
  return take(output, {
    City: __expectString,
    Company: __expectString,
    Country: __expectString,
    Department: __expectString,
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FirstName: __expectString,
    HiddenFromGlobalAddressList: __expectBoolean,
    Initials: __expectString,
    JobTitle: __expectString,
    LastName: __expectString,
    MailboxDeprovisionedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MailboxProvisionedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Office: __expectString,
    State: __expectString,
    Street: __expectString,
    Telephone: __expectString,
    UserId: __expectString,
    UserRole: __expectString,
    ZipCode: __expectString,
  }) as any;
};

// de_DeviceModelList omitted.

// de_DeviceOperatingSystemList omitted.

// de_DeviceTypeList omitted.

// de_DeviceUserAgentList omitted.

// de_DirectoryInUseException omitted.

// de_DirectoryServiceAuthenticationFailedException omitted.

// de_DirectoryUnavailableException omitted.

// de_DisassociateDelegateFromResourceResponse omitted.

// de_DisassociateMemberFromGroupResponse omitted.

// de_DnsRecord omitted.

// de_DnsRecords omitted.

// de_EmailAddressInUseException omitted.

// de_EntityAlreadyRegisteredException omitted.

// de_EntityNotFoundException omitted.

// de_EntityStateException omitted.

// de_FolderConfiguration omitted.

// de_FolderConfigurations omitted.

// de_GetAccessControlEffectResponse omitted.

// de_GetDefaultRetentionPolicyResponse omitted.

// de_GetImpersonationRoleEffectResponse omitted.

/**
 * deserializeAws_json1_1GetImpersonationRoleResponse
 */
const de_GetImpersonationRoleResponse = (output: any, context: __SerdeContext): GetImpersonationRoleResponse => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ImpersonationRoleId: __expectString,
    Name: __expectString,
    Rules: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMailboxDetailsResponse
 */
const de_GetMailboxDetailsResponse = (output: any, context: __SerdeContext): GetMailboxDetailsResponse => {
  return take(output, {
    MailboxQuota: __expectInt32,
    MailboxSize: __limitedParseDouble,
  }) as any;
};

// de_GetMailDomainResponse omitted.

// de_GetMobileDeviceAccessEffectResponse omitted.

/**
 * deserializeAws_json1_1GetMobileDeviceAccessOverrideResponse
 */
const de_GetMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): GetMobileDeviceAccessOverrideResponse => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceId: __expectString,
    Effect: __expectString,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return take(output, {
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    State: __expectString,
  }) as any;
};

// de_GroupIdentifier omitted.

// de_GroupIdentifiers omitted.

/**
 * deserializeAws_json1_1Groups
 */
const de_Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Group(entry, context);
    });
  return retVal;
};

// de_ImpersonationMatchedRule omitted.

// de_ImpersonationMatchedRuleList omitted.

/**
 * deserializeAws_json1_1ImpersonationRole
 */
const de_ImpersonationRole = (output: any, context: __SerdeContext): ImpersonationRole => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImpersonationRoleId: __expectString,
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

// de_ImpersonationRoleIdList omitted.

/**
 * deserializeAws_json1_1ImpersonationRoleList
 */
const de_ImpersonationRoleList = (output: any, context: __SerdeContext): ImpersonationRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImpersonationRole(entry, context);
    });
  return retVal;
};

// de_ImpersonationRule omitted.

// de_ImpersonationRuleList omitted.

// de_InvalidConfigurationException omitted.

// de_InvalidCustomSesConfigurationException omitted.

// de_InvalidParameterException omitted.

// de_InvalidPasswordException omitted.

// de_IpRangeList omitted.

/**
 * deserializeAws_json1_1Jobs
 */
const de_Jobs = (output: any, context: __SerdeContext): MailboxExportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MailboxExportJob(entry, context);
    });
  return retVal;
};

// de_LambdaAvailabilityProvider omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListAccessControlRulesResponse
 */
const de_ListAccessControlRulesResponse = (output: any, context: __SerdeContext): ListAccessControlRulesResponse => {
  return take(output, {
    Rules: (_: any) => de_AccessControlRulesList(_, context),
  }) as any;
};

// de_ListAliasesResponse omitted.

/**
 * deserializeAws_json1_1ListAvailabilityConfigurationsResponse
 */
const de_ListAvailabilityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailabilityConfigurationsResponse => {
  return take(output, {
    AvailabilityConfigurations: (_: any) => de_AvailabilityConfigurationList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListGroupMembersResponse
 */
const de_ListGroupMembersResponse = (output: any, context: __SerdeContext): ListGroupMembersResponse => {
  return take(output, {
    Members: (_: any) => de_Members(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListGroupsForEntityResponse omitted.

/**
 * deserializeAws_json1_1ListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return take(output, {
    Groups: (_: any) => de_Groups(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImpersonationRolesResponse
 */
const de_ListImpersonationRolesResponse = (output: any, context: __SerdeContext): ListImpersonationRolesResponse => {
  return take(output, {
    NextToken: __expectString,
    Roles: (_: any) => de_ImpersonationRoleList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListMailboxExportJobsResponse
 */
const de_ListMailboxExportJobsResponse = (output: any, context: __SerdeContext): ListMailboxExportJobsResponse => {
  return take(output, {
    Jobs: (_: any) => de_Jobs(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListMailboxPermissionsResponse omitted.

// de_ListMailDomainsResponse omitted.

/**
 * deserializeAws_json1_1ListMobileDeviceAccessOverridesResponse
 */
const de_ListMobileDeviceAccessOverridesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessOverridesResponse => {
  return take(output, {
    NextToken: __expectString,
    Overrides: (_: any) => de_MobileDeviceAccessOverridesList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListMobileDeviceAccessRulesResponse
 */
const de_ListMobileDeviceAccessRulesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessRulesResponse => {
  return take(output, {
    Rules: (_: any) => de_MobileDeviceAccessRulesList(_, context),
  }) as any;
};

// de_ListOrganizationsResponse omitted.

// de_ListResourceDelegatesResponse omitted.

/**
 * deserializeAws_json1_1ListResourcesResponse
 */
const de_ListResourcesResponse = (output: any, context: __SerdeContext): ListResourcesResponse => {
  return take(output, {
    NextToken: __expectString,
    Resources: (_: any) => de_Resources(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return take(output, {
    NextToken: __expectString,
    Users: (_: any) => de_Users(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MailboxExportJob
 */
const de_MailboxExportJob = (output: any, context: __SerdeContext): MailboxExportJob => {
  return take(output, {
    Description: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EntityId: __expectString,
    EstimatedProgress: __expectInt32,
    JobId: __expectString,
    S3BucketName: __expectString,
    S3Path: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

// de_MailDomainInUseException omitted.

// de_MailDomainNotFoundException omitted.

// de_MailDomains omitted.

// de_MailDomainStateException omitted.

// de_MailDomainSummary omitted.

/**
 * deserializeAws_json1_1Member
 */
const de_Member = (output: any, context: __SerdeContext): Member => {
  return take(output, {
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    State: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Members
 */
const de_Members = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Member(entry, context);
    });
  return retVal;
};

// de_MobileDeviceAccessMatchedRule omitted.

// de_MobileDeviceAccessMatchedRuleList omitted.

/**
 * deserializeAws_json1_1MobileDeviceAccessOverride
 */
const de_MobileDeviceAccessOverride = (output: any, context: __SerdeContext): MobileDeviceAccessOverride => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceId: __expectString,
    Effect: __expectString,
    UserId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessOverridesList
 */
const de_MobileDeviceAccessOverridesList = (output: any, context: __SerdeContext): MobileDeviceAccessOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MobileDeviceAccessOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessRule
 */
const de_MobileDeviceAccessRule = (output: any, context: __SerdeContext): MobileDeviceAccessRule => {
  return take(output, {
    DateCreated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DateModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceModels: _json,
    DeviceOperatingSystems: _json,
    DeviceTypes: _json,
    DeviceUserAgents: _json,
    Effect: __expectString,
    MobileDeviceAccessRuleId: __expectString,
    Name: __expectString,
    NotDeviceModels: _json,
    NotDeviceOperatingSystems: _json,
    NotDeviceTypes: _json,
    NotDeviceUserAgents: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MobileDeviceAccessRulesList
 */
const de_MobileDeviceAccessRulesList = (output: any, context: __SerdeContext): MobileDeviceAccessRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MobileDeviceAccessRule(entry, context);
    });
  return retVal;
};

// de_NameAvailabilityException omitted.

// de_OrganizationNotFoundException omitted.

// de_OrganizationStateException omitted.

// de_OrganizationSummaries omitted.

// de_OrganizationSummary omitted.

// de_Permission omitted.

// de_Permissions omitted.

// de_PermissionValues omitted.

// de_PutAccessControlRuleResponse omitted.

// de_PutEmailMonitoringConfigurationResponse omitted.

// de_PutInboundDmarcSettingsResponse omitted.

// de_PutMailboxPermissionsResponse omitted.

// de_PutMobileDeviceAccessOverrideResponse omitted.

// de_PutRetentionPolicyResponse omitted.

// de_RedactedEwsAvailabilityProvider omitted.

// de_RegisterMailDomainResponse omitted.

// de_RegisterToWorkMailResponse omitted.

// de_ReservedNameException omitted.

// de_ResetPasswordResponse omitted.

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return take(output, {
    Description: __expectString,
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    State: __expectString,
    Type: __expectString,
  }) as any;
};

// de_ResourceDelegates omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Resource(entry, context);
    });
  return retVal;
};

// de_StartMailboxExportJobResponse omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetUsers omitted.

// de_TestAvailabilityConfigurationResponse omitted.

// de_TooManyTagsException omitted.

// de_UnsupportedOperationException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateAvailabilityConfigurationResponse omitted.

// de_UpdateDefaultMailDomainResponse omitted.

// de_UpdateGroupResponse omitted.

// de_UpdateImpersonationRoleResponse omitted.

// de_UpdateMailboxQuotaResponse omitted.

// de_UpdateMobileDeviceAccessRuleResponse omitted.

// de_UpdatePrimaryEmailAddressResponse omitted.

// de_UpdateResourceResponse omitted.

// de_UpdateUserResponse omitted.

/**
 * deserializeAws_json1_1User
 */
const de_User = (output: any, context: __SerdeContext): User => {
  return take(output, {
    DisabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    Email: __expectString,
    EnabledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    Name: __expectString,
    State: __expectString,
    UserRole: __expectString,
  }) as any;
};

// de_UserIdList omitted.

/**
 * deserializeAws_json1_1Users
 */
const de_Users = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
