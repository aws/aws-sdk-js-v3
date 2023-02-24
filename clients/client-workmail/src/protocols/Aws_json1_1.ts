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

export const serializeAws_json1_1AssociateDelegateToResourceCommand = async (
  input: AssociateDelegateToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.AssociateDelegateToResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDelegateToResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateMemberToGroupCommand = async (
  input: AssociateMemberToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.AssociateMemberToGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateMemberToGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssumeImpersonationRoleCommand = async (
  input: AssumeImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.AssumeImpersonationRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssumeImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelMailboxExportJobCommand = async (
  input: CancelMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CancelMailboxExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateAvailabilityConfigurationCommand = async (
  input: CreateAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateAvailabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateImpersonationRoleCommand = async (
  input: CreateImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateImpersonationRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMobileDeviceAccessRuleCommand = async (
  input: CreateMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateMobileDeviceAccessRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateOrganizationCommand = async (
  input: CreateOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateResourceCommand = async (
  input: CreateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.CreateUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAccessControlRuleCommand = async (
  input: DeleteAccessControlRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteAccessControlRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAccessControlRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteAlias",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAvailabilityConfigurationCommand = async (
  input: DeleteAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteAvailabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEmailMonitoringConfigurationCommand = async (
  input: DeleteEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteEmailMonitoringConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteImpersonationRoleCommand = async (
  input: DeleteImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteImpersonationRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMailboxPermissionsCommand = async (
  input: DeleteMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteMailboxPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand = async (
  input: DeleteMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteMobileDeviceAccessOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = async (
  input: DeleteMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteMobileDeviceAccessRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteOrganizationCommand = async (
  input: DeleteOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourceCommand = async (
  input: DeleteResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterFromWorkMailCommand = async (
  input: DeregisterFromWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeregisterFromWorkMail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterFromWorkMailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterMailDomainCommand = async (
  input: DeregisterMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DeregisterMailDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEmailMonitoringConfigurationCommand = async (
  input: DescribeEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeEmailMonitoringConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeGroupCommand = async (
  input: DescribeGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeInboundDmarcSettingsCommand = async (
  input: DescribeInboundDmarcSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeInboundDmarcSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeInboundDmarcSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMailboxExportJobCommand = async (
  input: DescribeMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeMailboxExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeOrganizationCommand = async (
  input: DescribeOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeOrganization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeOrganizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DescribeUser",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDelegateFromResourceCommand = async (
  input: DisassociateDelegateFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DisassociateDelegateFromResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDelegateFromResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateMemberFromGroupCommand = async (
  input: DisassociateMemberFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.DisassociateMemberFromGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateMemberFromGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccessControlEffectCommand = async (
  input: GetAccessControlEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetAccessControlEffect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAccessControlEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDefaultRetentionPolicyCommand = async (
  input: GetDefaultRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetDefaultRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDefaultRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetImpersonationRoleCommand = async (
  input: GetImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetImpersonationRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetImpersonationRoleEffectCommand = async (
  input: GetImpersonationRoleEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetImpersonationRoleEffect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetImpersonationRoleEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMailboxDetailsCommand = async (
  input: GetMailboxDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetMailboxDetails",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMailboxDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMailDomainCommand = async (
  input: GetMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetMailDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMobileDeviceAccessEffectCommand = async (
  input: GetMobileDeviceAccessEffectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetMobileDeviceAccessEffect",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMobileDeviceAccessEffectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMobileDeviceAccessOverrideCommand = async (
  input: GetMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.GetMobileDeviceAccessOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAccessControlRulesCommand = async (
  input: ListAccessControlRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListAccessControlRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAccessControlRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailabilityConfigurationsCommand = async (
  input: ListAvailabilityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListAvailabilityConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAvailabilityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupMembersCommand = async (
  input: ListGroupMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListGroupMembers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupMembersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListImpersonationRolesCommand = async (
  input: ListImpersonationRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListImpersonationRoles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListImpersonationRolesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMailboxExportJobsCommand = async (
  input: ListMailboxExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListMailboxExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMailboxExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMailboxPermissionsCommand = async (
  input: ListMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListMailboxPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMailDomainsCommand = async (
  input: ListMailDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListMailDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMailDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMobileDeviceAccessOverridesCommand = async (
  input: ListMobileDeviceAccessOverridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListMobileDeviceAccessOverrides",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMobileDeviceAccessOverridesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMobileDeviceAccessRulesCommand = async (
  input: ListMobileDeviceAccessRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListMobileDeviceAccessRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMobileDeviceAccessRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOrganizationsCommand = async (
  input: ListOrganizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListOrganizations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOrganizationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourceDelegatesCommand = async (
  input: ListResourceDelegatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListResourceDelegates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourceDelegatesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ListUsers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAccessControlRuleCommand = async (
  input: PutAccessControlRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutAccessControlRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAccessControlRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEmailMonitoringConfigurationCommand = async (
  input: PutEmailMonitoringConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutEmailMonitoringConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEmailMonitoringConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutInboundDmarcSettingsCommand = async (
  input: PutInboundDmarcSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutInboundDmarcSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutInboundDmarcSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMailboxPermissionsCommand = async (
  input: PutMailboxPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutMailboxPermissions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutMailboxPermissionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMobileDeviceAccessOverrideCommand = async (
  input: PutMobileDeviceAccessOverrideCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutMobileDeviceAccessOverride",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutMobileDeviceAccessOverrideRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.PutRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterMailDomainCommand = async (
  input: RegisterMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.RegisterMailDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterToWorkMailCommand = async (
  input: RegisterToWorkMailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.RegisterToWorkMail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterToWorkMailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResetPasswordCommand = async (
  input: ResetPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.ResetPassword",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResetPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartMailboxExportJobCommand = async (
  input: StartMailboxExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.StartMailboxExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartMailboxExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestAvailabilityConfigurationCommand = async (
  input: TestAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.TestAvailabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAvailabilityConfigurationCommand = async (
  input: UpdateAvailabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateAvailabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAvailabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDefaultMailDomainCommand = async (
  input: UpdateDefaultMailDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateDefaultMailDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDefaultMailDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateImpersonationRoleCommand = async (
  input: UpdateImpersonationRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateImpersonationRole",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateImpersonationRoleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMailboxQuotaCommand = async (
  input: UpdateMailboxQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateMailboxQuota",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMailboxQuotaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = async (
  input: UpdateMobileDeviceAccessRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateMobileDeviceAccessRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMobileDeviceAccessRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (
  input: UpdatePrimaryEmailAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdatePrimaryEmailAddress",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePrimaryEmailAddressRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "WorkMailService.UpdateResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateDelegateToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegateToResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDelegateToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDelegateToResourceResponse(data, context);
  const response: AssociateDelegateToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDelegateToResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssociateMemberToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMemberToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateMemberToGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateMemberToGroupResponse(data, context);
  const response: AssociateMemberToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateMemberToGroupCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1AssumeImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssumeImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssumeImpersonationRoleResponse(data, context);
  const response: AssumeImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssumeImpersonationRoleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelMailboxExportJobResponse(data, context);
  const response: CancelMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelMailboxExportJobCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAliasResponse(data, context);
  const response: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAliasCommandError = async (
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
      throw await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAvailabilityConfigurationResponse(data, context);
  const response: CreateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAvailabilityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateGroupCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateImpersonationRoleResponse(data, context);
  const response: CreateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateImpersonationRoleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMobileDeviceAccessRuleResponse(data, context);
  const response: CreateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMobileDeviceAccessRuleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateOrganizationResponse(data, context);
  const response: CreateOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateOrganizationCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryInUseExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateResourceResponse(data, context);
  const response: CreateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateResourceCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUserResponse(data, context);
  const response: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUserCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      throw await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ReservedNameException":
    case "com.amazonaws.workmail#ReservedNameException":
      throw await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAccessControlRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessControlRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAccessControlRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAccessControlRuleResponse(data, context);
  const response: DeleteAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAccessControlRuleCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAliasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAliasResponse(data, context);
  const response: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAliasCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAvailabilityConfigurationResponse(data, context);
  const response: DeleteAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAvailabilityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEmailMonitoringConfigurationResponse(data, context);
  const response: DeleteEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEmailMonitoringConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteGroupResponse(data, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteGroupCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteImpersonationRoleResponse(data, context);
  const response: DeleteImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteImpersonationRoleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMailboxPermissionsResponse(data, context);
  const response: DeleteMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMailboxPermissionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMobileDeviceAccessOverrideResponse(data, context);
  const response: DeleteMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMobileDeviceAccessOverrideCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMobileDeviceAccessRuleResponse(data, context);
  const response: DeleteMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteOrganizationResponse(data, context);
  const response: DeleteOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteOrganizationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteResourceResponse(data, context);
  const response: DeleteResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRetentionPolicyResponse(data, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRetentionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUserResponse(data, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUserCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterFromWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterFromWorkMailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterFromWorkMailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterFromWorkMailResponse(data, context);
  const response: DeregisterFromWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterFromWorkMailCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeregisterMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterMailDomainResponse(data, context);
  const response: DeregisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterMailDomainCommandError = async (
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
      throw await deserializeAws_json1_1InvalidCustomSesConfigurationExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MailDomainInUseException":
    case "com.amazonaws.workmail#MailDomainInUseException":
      throw await deserializeAws_json1_1MailDomainInUseExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEmailMonitoringConfigurationResponse(data, context);
  const response: DescribeEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEmailMonitoringConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeGroupResponse(data, context);
  const response: DescribeGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeGroupCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeInboundDmarcSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInboundDmarcSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeInboundDmarcSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeInboundDmarcSettingsResponse(data, context);
  const response: DescribeInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeInboundDmarcSettingsCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMailboxExportJobResponse(data, context);
  const response: DescribeMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMailboxExportJobCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
  const response: DescribeOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeOrganizationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeUserResponse(data, context);
  const response: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeUserCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateDelegateFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegateFromResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDelegateFromResourceResponse(data, context);
  const response: DisassociateDelegateFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDelegateFromResourceCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateMemberFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMemberFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateMemberFromGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateMemberFromGroupResponse(data, context);
  const response: DisassociateMemberFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateMemberFromGroupCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAccessControlEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccessControlEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccessControlEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccessControlEffectResponse(data, context);
  const response: GetAccessControlEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccessControlEffectCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDefaultRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDefaultRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDefaultRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDefaultRetentionPolicyResponse(data, context);
  const response: GetDefaultRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDefaultRetentionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetImpersonationRoleResponse(data, context);
  const response: GetImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetImpersonationRoleCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetImpersonationRoleEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImpersonationRoleEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetImpersonationRoleEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetImpersonationRoleEffectResponse(data, context);
  const response: GetImpersonationRoleEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetImpersonationRoleEffectCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMailboxDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailboxDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMailboxDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMailboxDetailsResponse(data, context);
  const response: GetMailboxDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMailboxDetailsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMailDomainResponse(data, context);
  const response: GetMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMailDomainCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMobileDeviceAccessEffectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessEffectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMobileDeviceAccessEffectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMobileDeviceAccessEffectResponse(data, context);
  const response: GetMobileDeviceAccessEffectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMobileDeviceAccessEffectCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMobileDeviceAccessOverrideResponse(data, context);
  const response: GetMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMobileDeviceAccessOverrideCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAccessControlRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAccessControlRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAccessControlRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAccessControlRulesResponse(data, context);
  const response: ListAccessControlRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAccessControlRulesCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAliasesResponse(data, context);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAliasesCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAvailabilityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailabilityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAvailabilityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailabilityConfigurationsResponse(data, context);
  const response: ListAvailabilityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailabilityConfigurationsCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGroupMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupMembersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupMembersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupMembersResponse(data, context);
  const response: ListGroupMembersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupMembersCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListGroupsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListImpersonationRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImpersonationRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListImpersonationRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListImpersonationRolesResponse(data, context);
  const response: ListImpersonationRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListImpersonationRolesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMailboxExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMailboxExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMailboxExportJobsResponse(data, context);
  const response: ListMailboxExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMailboxExportJobsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMailboxPermissionsResponse(data, context);
  const response: ListMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMailboxPermissionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMailDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMailDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMailDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMailDomainsResponse(data, context);
  const response: ListMailDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMailDomainsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMobileDeviceAccessOverridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessOverridesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMobileDeviceAccessOverridesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMobileDeviceAccessOverridesResponse(data, context);
  const response: ListMobileDeviceAccessOverridesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMobileDeviceAccessOverridesCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMobileDeviceAccessRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMobileDeviceAccessRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMobileDeviceAccessRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMobileDeviceAccessRulesResponse(data, context);
  const response: ListMobileDeviceAccessRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMobileDeviceAccessRulesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListOrganizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOrganizationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOrganizationsResponse(data, context);
  const response: ListOrganizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOrganizationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourceDelegatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceDelegatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourceDelegatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourceDelegatesResponse(data, context);
  const response: ListResourceDelegatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourceDelegatesCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUsersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAccessControlRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccessControlRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAccessControlRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAccessControlRuleResponse(data, context);
  const response: PutAccessControlRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAccessControlRuleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutEmailMonitoringConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEmailMonitoringConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEmailMonitoringConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEmailMonitoringConfigurationResponse(data, context);
  const response: PutEmailMonitoringConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEmailMonitoringConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutInboundDmarcSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInboundDmarcSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutInboundDmarcSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInboundDmarcSettingsResponse(data, context);
  const response: PutInboundDmarcSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutInboundDmarcSettingsCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutMailboxPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMailboxPermissionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutMailboxPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutMailboxPermissionsResponse(data, context);
  const response: PutMailboxPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMailboxPermissionsCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutMobileDeviceAccessOverrideCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMobileDeviceAccessOverrideCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutMobileDeviceAccessOverrideCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutMobileDeviceAccessOverrideResponse(data, context);
  const response: PutMobileDeviceAccessOverrideCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMobileDeviceAccessOverrideCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRetentionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRetentionPolicyResponse(data, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRetentionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterMailDomainResponse(data, context);
  const response: RegisterMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterMailDomainCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MailDomainInUseException":
    case "com.amazonaws.workmail#MailDomainInUseException":
      throw await deserializeAws_json1_1MailDomainInUseExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RegisterToWorkMailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterToWorkMailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterToWorkMailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterToWorkMailResponse(data, context);
  const response: RegisterToWorkMailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterToWorkMailCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context);
    case "EntityAlreadyRegisteredException":
    case "com.amazonaws.workmail#EntityAlreadyRegisteredException":
      throw await deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ResetPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResetPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResetPasswordResponse(data, context);
  const response: ResetPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResetPasswordCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.workmail#InvalidPasswordException":
      throw await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartMailboxExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMailboxExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartMailboxExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartMailboxExportJobResponse(data, context);
  const response: StartMailboxExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartMailboxExportJobCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.workmail#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestAvailabilityConfigurationResponse(data, context);
  const response: TestAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestAvailabilityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAvailabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAvailabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAvailabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAvailabilityConfigurationResponse(data, context);
  const response: UpdateAvailabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAvailabilityConfigurationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDefaultMailDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultMailDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDefaultMailDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDefaultMailDomainResponse(data, context);
  const response: UpdateDefaultMailDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDefaultMailDomainCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateImpersonationRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImpersonationRoleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateImpersonationRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateImpersonationRoleResponse(data, context);
  const response: UpdateImpersonationRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateImpersonationRoleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.workmail#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.workmail#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMailboxQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMailboxQuotaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMailboxQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMailboxQuotaResponse(data, context);
  const response: UpdateMailboxQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMailboxQuotaCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMobileDeviceAccessRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMobileDeviceAccessRuleResponse(data, context);
  const response: UpdateMobileDeviceAccessRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommandError = async (
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
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrimaryEmailAddressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePrimaryEmailAddressResponse(data, context);
  const response: UpdatePrimaryEmailAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context);
    case "DirectoryUnavailableException":
    case "com.amazonaws.workmail#DirectoryUnavailableException":
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.workmail#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.workmail#UnsupportedOperationException":
      throw await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateResourceCommandError = async (
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
      throw await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context);
    case "EmailAddressInUseException":
    case "com.amazonaws.workmail#EmailAddressInUseException":
      throw await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.workmail#EntityNotFoundException":
      throw await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "EntityStateException":
    case "com.amazonaws.workmail#EntityStateException":
      throw await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context);
    case "InvalidConfigurationException":
    case "com.amazonaws.workmail#InvalidConfigurationException":
      throw await deserializeAws_json1_1InvalidConfigurationExceptionResponse(parsedOutput, context);
    case "MailDomainNotFoundException":
    case "com.amazonaws.workmail#MailDomainNotFoundException":
      throw await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context);
    case "MailDomainStateException":
    case "com.amazonaws.workmail#MailDomainStateException":
      throw await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context);
    case "NameAvailabilityException":
    case "com.amazonaws.workmail#NameAvailabilityException":
      throw await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context);
    case "OrganizationNotFoundException":
    case "com.amazonaws.workmail#OrganizationNotFoundException":
      throw await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context);
    case "OrganizationStateException":
    case "com.amazonaws.workmail#OrganizationStateException":
      throw await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1DirectoryInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryInUseException(body, context);
  const exception = new DirectoryInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryServiceAuthenticationFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryServiceAuthenticationFailedException(body, context);
  const exception = new DirectoryServiceAuthenticationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DirectoryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DirectoryUnavailableException(body, context);
  const exception = new DirectoryUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EmailAddressInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EmailAddressInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EmailAddressInUseException(body, context);
  const exception = new EmailAddressInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityAlreadyRegisteredException(body, context);
  const exception = new EntityAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(body, context);
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1EntityStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityStateException(body, context);
  const exception = new EntityStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidConfigurationException(body, context);
  const exception = new InvalidConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidCustomSesConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCustomSesConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCustomSesConfigurationException(body, context);
  const exception = new InvalidCustomSesConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPasswordException(body, context);
  const exception = new InvalidPasswordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MailDomainInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MailDomainInUseException(body, context);
  const exception = new MailDomainInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MailDomainNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MailDomainNotFoundException(body, context);
  const exception = new MailDomainNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MailDomainStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MailDomainStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MailDomainStateException(body, context);
  const exception = new MailDomainStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NameAvailabilityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NameAvailabilityException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NameAvailabilityException(body, context);
  const exception = new NameAvailabilityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotFoundException(body, context);
  const exception = new OrganizationNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OrganizationStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationStateException(body, context);
  const exception = new OrganizationStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReservedNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReservedNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReservedNameException(body, context);
  const exception = new ReservedNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ActionsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateDelegateToResourceRequest = (
  input: AssociateDelegateToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1AssociateMemberToGroupRequest = (
  input: AssociateMemberToGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1AssumeImpersonationRoleRequest = (
  input: AssumeImpersonationRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1BookingOptions = (input: BookingOptions, context: __SerdeContext): any => {
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

const serializeAws_json1_1CancelMailboxExportJobRequest = (
  input: CancelMailboxExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1CreateAliasRequest = (input: CreateAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1CreateAvailabilityConfigurationRequest = (
  input: CreateAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && {
      EwsProvider: serializeAws_json1_1EwsAvailabilityProvider(input.EwsProvider, context),
    }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: serializeAws_json1_1LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1CreateImpersonationRoleRequest = (
  input: CreateImpersonationRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Rules != null && { Rules: serializeAws_json1_1ImpersonationRuleList(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateMobileDeviceAccessRuleRequest = (
  input: CreateMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceModels != null && {
      DeviceModels: serializeAws_json1_1DeviceModelList(input.DeviceModels, context),
    }),
    ...(input.DeviceOperatingSystems != null && {
      DeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
    }),
    ...(input.DeviceTypes != null && { DeviceTypes: serializeAws_json1_1DeviceTypeList(input.DeviceTypes, context) }),
    ...(input.DeviceUserAgents != null && {
      DeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.DeviceUserAgents, context),
    }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotDeviceModels != null && {
      NotDeviceModels: serializeAws_json1_1DeviceModelList(input.NotDeviceModels, context),
    }),
    ...(input.NotDeviceOperatingSystems != null && {
      NotDeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(
        input.NotDeviceOperatingSystems,
        context
      ),
    }),
    ...(input.NotDeviceTypes != null && {
      NotDeviceTypes: serializeAws_json1_1DeviceTypeList(input.NotDeviceTypes, context),
    }),
    ...(input.NotDeviceUserAgents != null && {
      NotDeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.NotDeviceUserAgents, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1CreateOrganizationRequest = (
  input: CreateOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DirectoryId != null && { DirectoryId: input.DirectoryId }),
    ...(input.Domains != null && { Domains: serializeAws_json1_1Domains(input.Domains, context) }),
    ...(input.EnableInteroperability != null && { EnableInteroperability: input.EnableInteroperability }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  };
};

const serializeAws_json1_1CreateResourceRequest = (input: CreateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateUserRequest = (input: CreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

const serializeAws_json1_1DeleteAccessControlRuleRequest = (
  input: DeleteAccessControlRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteAliasRequest = (input: DeleteAliasRequest, context: __SerdeContext): any => {
  return {
    ...(input.Alias != null && { Alias: input.Alias }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteAvailabilityConfigurationRequest = (
  input: DeleteAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteEmailMonitoringConfigurationRequest = (
  input: DeleteEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteImpersonationRoleRequest = (
  input: DeleteImpersonationRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteMailboxPermissionsRequest = (
  input: DeleteMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.GranteeId != null && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteMobileDeviceAccessOverrideRequest = (
  input: DeleteMobileDeviceAccessOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DeleteMobileDeviceAccessRuleRequest = (
  input: DeleteMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MobileDeviceAccessRuleId != null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteOrganizationRequest = (
  input: DeleteOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DeleteDirectory != null && { DeleteDirectory: input.DeleteDirectory }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteResourceRequest = (input: DeleteResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DeleteRetentionPolicyRequest = (
  input: DeleteRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DeregisterFromWorkMailRequest = (
  input: DeregisterFromWorkMailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DeregisterMailDomainRequest = (
  input: DeregisterMailDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeEmailMonitoringConfigurationRequest = (
  input: DescribeEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeGroupRequest = (input: DescribeGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeInboundDmarcSettingsRequest = (
  input: DescribeInboundDmarcSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeMailboxExportJobRequest = (
  input: DescribeMailboxExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeOrganizationRequest = (
  input: DescribeOrganizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1DescribeResourceRequest = (input: DescribeResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DescribeUserRequest = (input: DescribeUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1DeviceModelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeviceOperatingSystemList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeviceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeviceUserAgentList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DisassociateDelegateFromResourceRequest = (
  input: DisassociateDelegateFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1DisassociateMemberFromGroupRequest = (
  input: DisassociateMemberFromGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MemberId != null && { MemberId: input.MemberId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1Domain = (input: Domain, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.HostedZoneId != null && { HostedZoneId: input.HostedZoneId }),
  };
};

const serializeAws_json1_1Domains = (input: Domain[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Domain(entry, context);
    });
};

const serializeAws_json1_1EwsAvailabilityProvider = (input: EwsAvailabilityProvider, context: __SerdeContext): any => {
  return {
    ...(input.EwsEndpoint != null && { EwsEndpoint: input.EwsEndpoint }),
    ...(input.EwsPassword != null && { EwsPassword: input.EwsPassword }),
    ...(input.EwsUsername != null && { EwsUsername: input.EwsUsername }),
  };
};

const serializeAws_json1_1FolderConfiguration = (input: FolderConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Period != null && { Period: input.Period }),
  };
};

const serializeAws_json1_1FolderConfigurations = (input: FolderConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FolderConfiguration(entry, context);
    });
};

const serializeAws_json1_1GetAccessControlEffectRequest = (
  input: GetAccessControlEffectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1GetDefaultRetentionPolicyRequest = (
  input: GetDefaultRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1GetImpersonationRoleEffectRequest = (
  input: GetImpersonationRoleEffectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.TargetUser != null && { TargetUser: input.TargetUser }),
  };
};

const serializeAws_json1_1GetImpersonationRoleRequest = (
  input: GetImpersonationRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1GetMailboxDetailsRequest = (
  input: GetMailboxDetailsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1GetMailDomainRequest = (input: GetMailDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1GetMobileDeviceAccessEffectRequest = (
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

const serializeAws_json1_1GetMobileDeviceAccessOverrideRequest = (
  input: GetMobileDeviceAccessOverrideRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceId != null && { DeviceId: input.DeviceId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1ImpersonationRoleIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ImpersonationRule = (input: ImpersonationRule, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.ImpersonationRuleId != null && { ImpersonationRuleId: input.ImpersonationRuleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotTargetUsers != null && {
      NotTargetUsers: serializeAws_json1_1TargetUsers(input.NotTargetUsers, context),
    }),
    ...(input.TargetUsers != null && { TargetUsers: serializeAws_json1_1TargetUsers(input.TargetUsers, context) }),
  };
};

const serializeAws_json1_1ImpersonationRuleList = (input: ImpersonationRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ImpersonationRule(entry, context);
    });
};

const serializeAws_json1_1IpRangeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LambdaAvailabilityProvider = (
  input: LambdaAvailabilityProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
  };
};

const serializeAws_json1_1ListAccessControlRulesRequest = (
  input: ListAccessControlRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListAliasesRequest = (input: ListAliasesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListAvailabilityConfigurationsRequest = (
  input: ListAvailabilityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListGroupMembersRequest = (input: ListGroupMembersRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListImpersonationRolesRequest = (
  input: ListImpersonationRolesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListMailboxExportJobsRequest = (
  input: ListMailboxExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListMailboxPermissionsRequest = (
  input: ListMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListMailDomainsRequest = (input: ListMailDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListMobileDeviceAccessOverridesRequest = (
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

const serializeAws_json1_1ListMobileDeviceAccessRulesRequest = (
  input: ListMobileDeviceAccessRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListOrganizationsRequest = (
  input: ListOrganizationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListResourceDelegatesRequest = (
  input: ListResourceDelegatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1ListResourcesRequest = (input: ListResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1PermissionValues = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PutAccessControlRuleRequest = (
  input: PutAccessControlRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_json1_1ActionsList(input.Actions, context) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.ImpersonationRoleIds != null && {
      ImpersonationRoleIds: serializeAws_json1_1ImpersonationRoleIdList(input.ImpersonationRoleIds, context),
    }),
    ...(input.IpRanges != null && { IpRanges: serializeAws_json1_1IpRangeList(input.IpRanges, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotActions != null && { NotActions: serializeAws_json1_1ActionsList(input.NotActions, context) }),
    ...(input.NotImpersonationRoleIds != null && {
      NotImpersonationRoleIds: serializeAws_json1_1ImpersonationRoleIdList(input.NotImpersonationRoleIds, context),
    }),
    ...(input.NotIpRanges != null && { NotIpRanges: serializeAws_json1_1IpRangeList(input.NotIpRanges, context) }),
    ...(input.NotUserIds != null && { NotUserIds: serializeAws_json1_1UserIdList(input.NotUserIds, context) }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserIds != null && { UserIds: serializeAws_json1_1UserIdList(input.UserIds, context) }),
  };
};

const serializeAws_json1_1PutEmailMonitoringConfigurationRequest = (
  input: PutEmailMonitoringConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogGroupArn != null && { LogGroupArn: input.LogGroupArn }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1PutInboundDmarcSettingsRequest = (
  input: PutInboundDmarcSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enforced != null && { Enforced: input.Enforced }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1PutMailboxPermissionsRequest = (
  input: PutMailboxPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.GranteeId != null && { GranteeId: input.GranteeId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.PermissionValues != null && {
      PermissionValues: serializeAws_json1_1PermissionValues(input.PermissionValues, context),
    }),
  };
};

const serializeAws_json1_1PutMobileDeviceAccessOverrideRequest = (
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

const serializeAws_json1_1PutRetentionPolicyRequest = (
  input: PutRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FolderConfigurations != null && {
      FolderConfigurations: serializeAws_json1_1FolderConfigurations(input.FolderConfigurations, context),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1RegisterMailDomainRequest = (
  input: RegisterMailDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1RegisterToWorkMailRequest = (
  input: RegisterToWorkMailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1ResetPasswordRequest = (input: ResetPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1StartMailboxExportJobRequest = (
  input: StartMailboxExportJobRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TargetUsers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TestAvailabilityConfigurationRequest = (
  input: TestAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && {
      EwsProvider: serializeAws_json1_1EwsAvailabilityProvider(input.EwsProvider, context),
    }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: serializeAws_json1_1LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateAvailabilityConfigurationRequest = (
  input: UpdateAvailabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EwsProvider != null && {
      EwsProvider: serializeAws_json1_1EwsAvailabilityProvider(input.EwsProvider, context),
    }),
    ...(input.LambdaProvider != null && {
      LambdaProvider: serializeAws_json1_1LambdaAvailabilityProvider(input.LambdaProvider, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1UpdateDefaultMailDomainRequest = (
  input: UpdateDefaultMailDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1UpdateImpersonationRoleRequest = (
  input: UpdateImpersonationRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ImpersonationRoleId != null && { ImpersonationRoleId: input.ImpersonationRoleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.Rules != null && { Rules: serializeAws_json1_1ImpersonationRuleList(input.Rules, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1UpdateMailboxQuotaRequest = (
  input: UpdateMailboxQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MailboxQuota != null && { MailboxQuota: input.MailboxQuota }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.UserId != null && { UserId: input.UserId }),
  };
};

const serializeAws_json1_1UpdateMobileDeviceAccessRuleRequest = (
  input: UpdateMobileDeviceAccessRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DeviceModels != null && {
      DeviceModels: serializeAws_json1_1DeviceModelList(input.DeviceModels, context),
    }),
    ...(input.DeviceOperatingSystems != null && {
      DeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
    }),
    ...(input.DeviceTypes != null && { DeviceTypes: serializeAws_json1_1DeviceTypeList(input.DeviceTypes, context) }),
    ...(input.DeviceUserAgents != null && {
      DeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.DeviceUserAgents, context),
    }),
    ...(input.Effect != null && { Effect: input.Effect }),
    ...(input.MobileDeviceAccessRuleId != null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NotDeviceModels != null && {
      NotDeviceModels: serializeAws_json1_1DeviceModelList(input.NotDeviceModels, context),
    }),
    ...(input.NotDeviceOperatingSystems != null && {
      NotDeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(
        input.NotDeviceOperatingSystems,
        context
      ),
    }),
    ...(input.NotDeviceTypes != null && {
      NotDeviceTypes: serializeAws_json1_1DeviceTypeList(input.NotDeviceTypes, context),
    }),
    ...(input.NotDeviceUserAgents != null && {
      NotDeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.NotDeviceUserAgents, context),
    }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1UpdatePrimaryEmailAddressRequest = (
  input: UpdatePrimaryEmailAddressRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Email != null && { Email: input.Email }),
    ...(input.EntityId != null && { EntityId: input.EntityId }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
  };
};

const serializeAws_json1_1UpdateResourceRequest = (input: UpdateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.BookingOptions != null && {
      BookingOptions: serializeAws_json1_1BookingOptions(input.BookingOptions, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationId != null && { OrganizationId: input.OrganizationId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_json1_1UserIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_json1_1AccessControlRule = (output: any, context: __SerdeContext): AccessControlRule => {
  return {
    Actions: output.Actions != null ? deserializeAws_json1_1ActionsList(output.Actions, context) : undefined,
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
        ? deserializeAws_json1_1ImpersonationRoleIdList(output.ImpersonationRoleIds, context)
        : undefined,
    IpRanges: output.IpRanges != null ? deserializeAws_json1_1IpRangeList(output.IpRanges, context) : undefined,
    Name: __expectString(output.Name),
    NotActions: output.NotActions != null ? deserializeAws_json1_1ActionsList(output.NotActions, context) : undefined,
    NotImpersonationRoleIds:
      output.NotImpersonationRoleIds != null
        ? deserializeAws_json1_1ImpersonationRoleIdList(output.NotImpersonationRoleIds, context)
        : undefined,
    NotIpRanges:
      output.NotIpRanges != null ? deserializeAws_json1_1IpRangeList(output.NotIpRanges, context) : undefined,
    NotUserIds: output.NotUserIds != null ? deserializeAws_json1_1UserIdList(output.NotUserIds, context) : undefined,
    UserIds: output.UserIds != null ? deserializeAws_json1_1UserIdList(output.UserIds, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AccessControlRuleNameList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AccessControlRulesList = (output: any, context: __SerdeContext): AccessControlRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AccessControlRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ActionsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Aliases = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AssociateDelegateToResourceResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegateToResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssociateMemberToGroupResponse = (
  output: any,
  context: __SerdeContext
): AssociateMemberToGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1AssumeImpersonationRoleResponse = (
  output: any,
  context: __SerdeContext
): AssumeImpersonationRoleResponse => {
  return {
    ExpiresIn: __expectLong(output.ExpiresIn),
    Token: __expectString(output.Token),
  } as any;
};

const deserializeAws_json1_1AvailabilityConfiguration = (
  output: any,
  context: __SerdeContext
): AvailabilityConfiguration => {
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
      output.EwsProvider != null
        ? deserializeAws_json1_1RedactedEwsAvailabilityProvider(output.EwsProvider, context)
        : undefined,
    LambdaProvider:
      output.LambdaProvider != null
        ? deserializeAws_json1_1LambdaAvailabilityProvider(output.LambdaProvider, context)
        : undefined,
    ProviderType: __expectString(output.ProviderType),
  } as any;
};

const deserializeAws_json1_1AvailabilityConfigurationList = (
  output: any,
  context: __SerdeContext
): AvailabilityConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AvailabilityConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BookingOptions = (output: any, context: __SerdeContext): BookingOptions => {
  return {
    AutoAcceptRequests: __expectBoolean(output.AutoAcceptRequests),
    AutoDeclineConflictingRequests: __expectBoolean(output.AutoDeclineConflictingRequests),
    AutoDeclineRecurringRequests: __expectBoolean(output.AutoDeclineRecurringRequests),
  } as any;
};

const deserializeAws_json1_1CancelMailboxExportJobResponse = (
  output: any,
  context: __SerdeContext
): CancelMailboxExportJobResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateAliasResponse = (output: any, context: __SerdeContext): CreateAliasResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAvailabilityConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return {
    GroupId: __expectString(output.GroupId),
  } as any;
};

const deserializeAws_json1_1CreateImpersonationRoleResponse = (
  output: any,
  context: __SerdeContext
): CreateImpersonationRoleResponse => {
  return {
    ImpersonationRoleId: __expectString(output.ImpersonationRoleId),
  } as any;
};

const deserializeAws_json1_1CreateMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): CreateMobileDeviceAccessRuleResponse => {
  return {
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
  } as any;
};

const deserializeAws_json1_1CreateOrganizationResponse = (
  output: any,
  context: __SerdeContext
): CreateOrganizationResponse => {
  return {
    OrganizationId: __expectString(output.OrganizationId),
  } as any;
};

const deserializeAws_json1_1CreateResourceResponse = (output: any, context: __SerdeContext): CreateResourceResponse => {
  return {
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_json1_1CreateUserResponse = (output: any, context: __SerdeContext): CreateUserResponse => {
  return {
    UserId: __expectString(output.UserId),
  } as any;
};

const deserializeAws_json1_1Delegate = (output: any, context: __SerdeContext): Delegate => {
  return {
    Id: __expectString(output.Id),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DeleteAccessControlRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteAccessControlRuleResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAliasResponse = (output: any, context: __SerdeContext): DeleteAliasResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAvailabilityConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteEmailMonitoringConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteGroupResponse = (output: any, context: __SerdeContext): DeleteGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteImpersonationRoleResponse = (
  output: any,
  context: __SerdeContext
): DeleteImpersonationRoleResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): DeleteMailboxPermissionsResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): DeleteMobileDeviceAccessOverrideResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): DeleteMobileDeviceAccessRuleResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DeleteOrganizationResponse => {
  return {
    OrganizationId: __expectString(output.OrganizationId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1DeleteResourceResponse = (output: any, context: __SerdeContext): DeleteResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRetentionPolicyResponse = (
  output: any,
  context: __SerdeContext
): DeleteRetentionPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUserResponse = (output: any, context: __SerdeContext): DeleteUserResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterFromWorkMailResponse = (
  output: any,
  context: __SerdeContext
): DeregisterFromWorkMailResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterMailDomainResponse = (
  output: any,
  context: __SerdeContext
): DeregisterMailDomainResponse => {
  return {} as any;
};

const deserializeAws_json1_1DescribeEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmailMonitoringConfigurationResponse => {
  return {
    LogGroupArn: __expectString(output.LogGroupArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1DescribeGroupResponse = (output: any, context: __SerdeContext): DescribeGroupResponse => {
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

const deserializeAws_json1_1DescribeInboundDmarcSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeInboundDmarcSettingsResponse => {
  return {
    Enforced: __expectBoolean(output.Enforced),
  } as any;
};

const deserializeAws_json1_1DescribeMailboxExportJobResponse = (
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

const deserializeAws_json1_1DescribeOrganizationResponse = (
  output: any,
  context: __SerdeContext
): DescribeOrganizationResponse => {
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

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  return {
    BookingOptions:
      output.BookingOptions != null ? deserializeAws_json1_1BookingOptions(output.BookingOptions, context) : undefined,
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

const deserializeAws_json1_1DescribeUserResponse = (output: any, context: __SerdeContext): DescribeUserResponse => {
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

const deserializeAws_json1_1DeviceModelList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DeviceOperatingSystemList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DeviceTypeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DeviceUserAgentList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DirectoryInUseException = (
  output: any,
  context: __SerdeContext
): DirectoryInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DirectoryServiceAuthenticationFailedException = (
  output: any,
  context: __SerdeContext
): DirectoryServiceAuthenticationFailedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DirectoryUnavailableException = (
  output: any,
  context: __SerdeContext
): DirectoryUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DisassociateDelegateFromResourceResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegateFromResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateMemberFromGroupResponse = (
  output: any,
  context: __SerdeContext
): DisassociateMemberFromGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1DnsRecord = (output: any, context: __SerdeContext): DnsRecord => {
  return {
    Hostname: __expectString(output.Hostname),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1DnsRecords = (output: any, context: __SerdeContext): DnsRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DnsRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EmailAddressInUseException = (
  output: any,
  context: __SerdeContext
): EmailAddressInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntityAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): EntityAlreadyRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1EntityStateException = (output: any, context: __SerdeContext): EntityStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FolderConfiguration = (output: any, context: __SerdeContext): FolderConfiguration => {
  return {
    Action: __expectString(output.Action),
    Name: __expectString(output.Name),
    Period: __expectInt32(output.Period),
  } as any;
};

const deserializeAws_json1_1FolderConfigurations = (output: any, context: __SerdeContext): FolderConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FolderConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetAccessControlEffectResponse = (
  output: any,
  context: __SerdeContext
): GetAccessControlEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules:
      output.MatchedRules != null
        ? deserializeAws_json1_1AccessControlRuleNameList(output.MatchedRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDefaultRetentionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetDefaultRetentionPolicyResponse => {
  return {
    Description: __expectString(output.Description),
    FolderConfigurations:
      output.FolderConfigurations != null
        ? deserializeAws_json1_1FolderConfigurations(output.FolderConfigurations, context)
        : undefined,
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1GetImpersonationRoleEffectResponse = (
  output: any,
  context: __SerdeContext
): GetImpersonationRoleEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules:
      output.MatchedRules != null
        ? deserializeAws_json1_1ImpersonationMatchedRuleList(output.MatchedRules, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GetImpersonationRoleResponse = (
  output: any,
  context: __SerdeContext
): GetImpersonationRoleResponse => {
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
    Rules: output.Rules != null ? deserializeAws_json1_1ImpersonationRuleList(output.Rules, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GetMailboxDetailsResponse = (
  output: any,
  context: __SerdeContext
): GetMailboxDetailsResponse => {
  return {
    MailboxQuota: __expectInt32(output.MailboxQuota),
    MailboxSize: __limitedParseDouble(output.MailboxSize),
  } as any;
};

const deserializeAws_json1_1GetMailDomainResponse = (output: any, context: __SerdeContext): GetMailDomainResponse => {
  return {
    DkimVerificationStatus: __expectString(output.DkimVerificationStatus),
    IsDefault: __expectBoolean(output.IsDefault),
    IsTestDomain: __expectBoolean(output.IsTestDomain),
    OwnershipVerificationStatus: __expectString(output.OwnershipVerificationStatus),
    Records: output.Records != null ? deserializeAws_json1_1DnsRecords(output.Records, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetMobileDeviceAccessEffectResponse = (
  output: any,
  context: __SerdeContext
): GetMobileDeviceAccessEffectResponse => {
  return {
    Effect: __expectString(output.Effect),
    MatchedRules:
      output.MatchedRules != null
        ? deserializeAws_json1_1MobileDeviceAccessMatchedRuleList(output.MatchedRules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetMobileDeviceAccessOverrideResponse = (
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

const deserializeAws_json1_1Group = (output: any, context: __SerdeContext): Group => {
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

const deserializeAws_json1_1Groups = (output: any, context: __SerdeContext): Group[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Group(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImpersonationMatchedRule = (
  output: any,
  context: __SerdeContext
): ImpersonationMatchedRule => {
  return {
    ImpersonationRuleId: __expectString(output.ImpersonationRuleId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ImpersonationMatchedRuleList = (
  output: any,
  context: __SerdeContext
): ImpersonationMatchedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImpersonationMatchedRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImpersonationRole = (output: any, context: __SerdeContext): ImpersonationRole => {
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

const deserializeAws_json1_1ImpersonationRoleIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ImpersonationRoleList = (output: any, context: __SerdeContext): ImpersonationRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImpersonationRole(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ImpersonationRule = (output: any, context: __SerdeContext): ImpersonationRule => {
  return {
    Description: __expectString(output.Description),
    Effect: __expectString(output.Effect),
    ImpersonationRuleId: __expectString(output.ImpersonationRuleId),
    Name: __expectString(output.Name),
    NotTargetUsers:
      output.NotTargetUsers != null ? deserializeAws_json1_1TargetUsers(output.NotTargetUsers, context) : undefined,
    TargetUsers:
      output.TargetUsers != null ? deserializeAws_json1_1TargetUsers(output.TargetUsers, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImpersonationRuleList = (output: any, context: __SerdeContext): ImpersonationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ImpersonationRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidCustomSesConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidCustomSesConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPasswordException = (
  output: any,
  context: __SerdeContext
): InvalidPasswordException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1IpRangeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Jobs = (output: any, context: __SerdeContext): MailboxExportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MailboxExportJob(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LambdaAvailabilityProvider = (
  output: any,
  context: __SerdeContext
): LambdaAvailabilityProvider => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListAccessControlRulesResponse = (
  output: any,
  context: __SerdeContext
): ListAccessControlRulesResponse => {
  return {
    Rules: output.Rules != null ? deserializeAws_json1_1AccessControlRulesList(output.Rules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListAliasesResponse = (output: any, context: __SerdeContext): ListAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1Aliases(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListAvailabilityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAvailabilityConfigurationsResponse => {
  return {
    AvailabilityConfigurations:
      output.AvailabilityConfigurations != null
        ? deserializeAws_json1_1AvailabilityConfigurationList(output.AvailabilityConfigurations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGroupMembersResponse = (
  output: any,
  context: __SerdeContext
): ListGroupMembersResponse => {
  return {
    Members: output.Members != null ? deserializeAws_json1_1Members(output.Members, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return {
    Groups: output.Groups != null ? deserializeAws_json1_1Groups(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListImpersonationRolesResponse = (
  output: any,
  context: __SerdeContext
): ListImpersonationRolesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Roles: output.Roles != null ? deserializeAws_json1_1ImpersonationRoleList(output.Roles, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListMailboxExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListMailboxExportJobsResponse => {
  return {
    Jobs: output.Jobs != null ? deserializeAws_json1_1Jobs(output.Jobs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListMailboxPermissionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Permissions:
      output.Permissions != null ? deserializeAws_json1_1Permissions(output.Permissions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListMailDomainsResponse = (
  output: any,
  context: __SerdeContext
): ListMailDomainsResponse => {
  return {
    MailDomains:
      output.MailDomains != null ? deserializeAws_json1_1MailDomains(output.MailDomains, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMobileDeviceAccessOverridesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessOverridesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Overrides:
      output.Overrides != null
        ? deserializeAws_json1_1MobileDeviceAccessOverridesList(output.Overrides, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListMobileDeviceAccessRulesResponse = (
  output: any,
  context: __SerdeContext
): ListMobileDeviceAccessRulesResponse => {
  return {
    Rules: output.Rules != null ? deserializeAws_json1_1MobileDeviceAccessRulesList(output.Rules, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListOrganizationsResponse = (
  output: any,
  context: __SerdeContext
): ListOrganizationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OrganizationSummaries:
      output.OrganizationSummaries != null
        ? deserializeAws_json1_1OrganizationSummaries(output.OrganizationSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListResourceDelegatesResponse = (
  output: any,
  context: __SerdeContext
): ListResourceDelegatesResponse => {
  return {
    Delegates:
      output.Delegates != null ? deserializeAws_json1_1ResourceDelegates(output.Delegates, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListResourcesResponse = (output: any, context: __SerdeContext): ListResourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Resources: output.Resources != null ? deserializeAws_json1_1Resources(output.Resources, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? deserializeAws_json1_1Users(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MailboxExportJob = (output: any, context: __SerdeContext): MailboxExportJob => {
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

const deserializeAws_json1_1MailDomainInUseException = (
  output: any,
  context: __SerdeContext
): MailDomainInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MailDomainNotFoundException = (
  output: any,
  context: __SerdeContext
): MailDomainNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MailDomains = (output: any, context: __SerdeContext): MailDomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MailDomainSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MailDomainStateException = (
  output: any,
  context: __SerdeContext
): MailDomainStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MailDomainSummary = (output: any, context: __SerdeContext): MailDomainSummary => {
  return {
    DefaultDomain: __expectBoolean(output.DefaultDomain),
    DomainName: __expectString(output.DomainName),
  } as any;
};

const deserializeAws_json1_1Member = (output: any, context: __SerdeContext): Member => {
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

const deserializeAws_json1_1Members = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Member(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MobileDeviceAccessMatchedRule = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessMatchedRule => {
  return {
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1MobileDeviceAccessMatchedRuleList = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessMatchedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MobileDeviceAccessMatchedRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MobileDeviceAccessOverride = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessOverride => {
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

const deserializeAws_json1_1MobileDeviceAccessOverridesList = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MobileDeviceAccessOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MobileDeviceAccessRule = (output: any, context: __SerdeContext): MobileDeviceAccessRule => {
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
    DeviceModels:
      output.DeviceModels != null ? deserializeAws_json1_1DeviceModelList(output.DeviceModels, context) : undefined,
    DeviceOperatingSystems:
      output.DeviceOperatingSystems != null
        ? deserializeAws_json1_1DeviceOperatingSystemList(output.DeviceOperatingSystems, context)
        : undefined,
    DeviceTypes:
      output.DeviceTypes != null ? deserializeAws_json1_1DeviceTypeList(output.DeviceTypes, context) : undefined,
    DeviceUserAgents:
      output.DeviceUserAgents != null
        ? deserializeAws_json1_1DeviceUserAgentList(output.DeviceUserAgents, context)
        : undefined,
    Effect: __expectString(output.Effect),
    MobileDeviceAccessRuleId: __expectString(output.MobileDeviceAccessRuleId),
    Name: __expectString(output.Name),
    NotDeviceModels:
      output.NotDeviceModels != null
        ? deserializeAws_json1_1DeviceModelList(output.NotDeviceModels, context)
        : undefined,
    NotDeviceOperatingSystems:
      output.NotDeviceOperatingSystems != null
        ? deserializeAws_json1_1DeviceOperatingSystemList(output.NotDeviceOperatingSystems, context)
        : undefined,
    NotDeviceTypes:
      output.NotDeviceTypes != null ? deserializeAws_json1_1DeviceTypeList(output.NotDeviceTypes, context) : undefined,
    NotDeviceUserAgents:
      output.NotDeviceUserAgents != null
        ? deserializeAws_json1_1DeviceUserAgentList(output.NotDeviceUserAgents, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MobileDeviceAccessRulesList = (
  output: any,
  context: __SerdeContext
): MobileDeviceAccessRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MobileDeviceAccessRule(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1NameAvailabilityException = (
  output: any,
  context: __SerdeContext
): NameAvailabilityException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationNotFoundException = (
  output: any,
  context: __SerdeContext
): OrganizationNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationStateException = (
  output: any,
  context: __SerdeContext
): OrganizationStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OrganizationSummaries = (output: any, context: __SerdeContext): OrganizationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OrganizationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OrganizationSummary = (output: any, context: __SerdeContext): OrganizationSummary => {
  return {
    Alias: __expectString(output.Alias),
    DefaultMailDomain: __expectString(output.DefaultMailDomain),
    ErrorMessage: __expectString(output.ErrorMessage),
    OrganizationId: __expectString(output.OrganizationId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1Permission = (output: any, context: __SerdeContext): Permission => {
  return {
    GranteeId: __expectString(output.GranteeId),
    GranteeType: __expectString(output.GranteeType),
    PermissionValues:
      output.PermissionValues != null
        ? deserializeAws_json1_1PermissionValues(output.PermissionValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Permissions = (output: any, context: __SerdeContext): Permission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Permission(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PermissionValues = (output: any, context: __SerdeContext): (PermissionType | string)[] => {
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

const deserializeAws_json1_1PutAccessControlRuleResponse = (
  output: any,
  context: __SerdeContext
): PutAccessControlRuleResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutEmailMonitoringConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutEmailMonitoringConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutInboundDmarcSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutInboundDmarcSettingsResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutMailboxPermissionsResponse = (
  output: any,
  context: __SerdeContext
): PutMailboxPermissionsResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutMobileDeviceAccessOverrideResponse = (
  output: any,
  context: __SerdeContext
): PutMobileDeviceAccessOverrideResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutRetentionPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutRetentionPolicyResponse => {
  return {} as any;
};

const deserializeAws_json1_1RedactedEwsAvailabilityProvider = (
  output: any,
  context: __SerdeContext
): RedactedEwsAvailabilityProvider => {
  return {
    EwsEndpoint: __expectString(output.EwsEndpoint),
    EwsUsername: __expectString(output.EwsUsername),
  } as any;
};

const deserializeAws_json1_1RegisterMailDomainResponse = (
  output: any,
  context: __SerdeContext
): RegisterMailDomainResponse => {
  return {} as any;
};

const deserializeAws_json1_1RegisterToWorkMailResponse = (
  output: any,
  context: __SerdeContext
): RegisterToWorkMailResponse => {
  return {} as any;
};

const deserializeAws_json1_1ReservedNameException = (output: any, context: __SerdeContext): ReservedNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResetPasswordResponse = (output: any, context: __SerdeContext): ResetPasswordResponse => {
  return {} as any;
};

const deserializeAws_json1_1Resource = (output: any, context: __SerdeContext): Resource => {
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

const deserializeAws_json1_1ResourceDelegates = (output: any, context: __SerdeContext): Delegate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Delegate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Resources = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1StartMailboxExportJobResponse = (
  output: any,
  context: __SerdeContext
): StartMailboxExportJobResponse => {
  return {
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TargetUsers = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1TestAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): TestAvailabilityConfigurationResponse => {
  return {
    FailureReason: __expectString(output.FailureReason),
    TestPassed: __expectBoolean(output.TestPassed),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateAvailabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateAvailabilityConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDefaultMailDomainResponse = (
  output: any,
  context: __SerdeContext
): UpdateDefaultMailDomainResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateImpersonationRoleResponse = (
  output: any,
  context: __SerdeContext
): UpdateImpersonationRoleResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateMailboxQuotaResponse = (
  output: any,
  context: __SerdeContext
): UpdateMailboxQuotaResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateMobileDeviceAccessRuleResponse = (
  output: any,
  context: __SerdeContext
): UpdateMobileDeviceAccessRuleResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdatePrimaryEmailAddressResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrimaryEmailAddressResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateResourceResponse = (output: any, context: __SerdeContext): UpdateResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1User = (output: any, context: __SerdeContext): User => {
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

const deserializeAws_json1_1UserIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1Users = (output: any, context: __SerdeContext): User[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1User(entry, context);
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
