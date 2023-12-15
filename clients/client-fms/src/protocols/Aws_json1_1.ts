// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
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

import {
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "../commands/AssociateAdminAccountCommand";
import {
  AssociateThirdPartyFirewallCommandInput,
  AssociateThirdPartyFirewallCommandOutput,
} from "../commands/AssociateThirdPartyFirewallCommand";
import {
  BatchAssociateResourceCommandInput,
  BatchAssociateResourceCommandOutput,
} from "../commands/BatchAssociateResourceCommand";
import {
  BatchDisassociateResourceCommandInput,
  BatchDisassociateResourceCommandOutput,
} from "../commands/BatchDisassociateResourceCommand";
import { DeleteAppsListCommandInput, DeleteAppsListCommandOutput } from "../commands/DeleteAppsListCommand";
import {
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "../commands/DeleteNotificationChannelCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import {
  DeleteProtocolsListCommandInput,
  DeleteProtocolsListCommandOutput,
} from "../commands/DeleteProtocolsListCommand";
import { DeleteResourceSetCommandInput, DeleteResourceSetCommandOutput } from "../commands/DeleteResourceSetCommand";
import {
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "../commands/DisassociateAdminAccountCommand";
import {
  DisassociateThirdPartyFirewallCommandInput,
  DisassociateThirdPartyFirewallCommandOutput,
} from "../commands/DisassociateThirdPartyFirewallCommand";
import { GetAdminAccountCommandInput, GetAdminAccountCommandOutput } from "../commands/GetAdminAccountCommand";
import { GetAdminScopeCommandInput, GetAdminScopeCommandOutput } from "../commands/GetAdminScopeCommand";
import { GetAppsListCommandInput, GetAppsListCommandOutput } from "../commands/GetAppsListCommand";
import {
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "../commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "../commands/GetNotificationChannelCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import {
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "../commands/GetProtectionStatusCommand";
import { GetProtocolsListCommandInput, GetProtocolsListCommandOutput } from "../commands/GetProtocolsListCommand";
import { GetResourceSetCommandInput, GetResourceSetCommandOutput } from "../commands/GetResourceSetCommand";
import {
  GetThirdPartyFirewallAssociationStatusCommandInput,
  GetThirdPartyFirewallAssociationStatusCommandOutput,
} from "../commands/GetThirdPartyFirewallAssociationStatusCommand";
import {
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
} from "../commands/GetViolationDetailsCommand";
import {
  ListAdminAccountsForOrganizationCommandInput,
  ListAdminAccountsForOrganizationCommandOutput,
} from "../commands/ListAdminAccountsForOrganizationCommand";
import {
  ListAdminsManagingAccountCommandInput,
  ListAdminsManagingAccountCommandOutput,
} from "../commands/ListAdminsManagingAccountCommand";
import { ListAppsListsCommandInput, ListAppsListsCommandOutput } from "../commands/ListAppsListsCommand";
import {
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "../commands/ListComplianceStatusCommand";
import {
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "../commands/ListDiscoveredResourcesCommand";
import { ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput } from "../commands/ListMemberAccountsCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput } from "../commands/ListProtocolsListsCommand";
import {
  ListResourceSetResourcesCommandInput,
  ListResourceSetResourcesCommandOutput,
} from "../commands/ListResourceSetResourcesCommand";
import { ListResourceSetsCommandInput, ListResourceSetsCommandOutput } from "../commands/ListResourceSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "../commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import { PutAdminAccountCommandInput, PutAdminAccountCommandOutput } from "../commands/PutAdminAccountCommand";
import { PutAppsListCommandInput, PutAppsListCommandOutput } from "../commands/PutAppsListCommand";
import {
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "../commands/PutNotificationChannelCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "../commands/PutPolicyCommand";
import { PutProtocolsListCommandInput, PutProtocolsListCommandOutput } from "../commands/PutProtocolsListCommand";
import { PutResourceSetCommandInput, PutResourceSetCommandOutput } from "../commands/PutResourceSetCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { FMSServiceException as __BaseException } from "../models/FMSServiceException";
import {
  AccountScope,
  AdminScope,
  App,
  AppsListData,
  AssociateAdminAccountRequest,
  AssociateThirdPartyFirewallRequest,
  BatchAssociateResourceRequest,
  BatchDisassociateResourceRequest,
  CustomerPolicyScopeIdType,
  DeleteAppsListRequest,
  DeleteNotificationChannelRequest,
  DeletePolicyRequest,
  DeleteProtocolsListRequest,
  DeleteResourceSetRequest,
  DisassociateAdminAccountRequest,
  DisassociateThirdPartyFirewallRequest,
  GetAdminAccountRequest,
  GetAdminScopeRequest,
  GetAppsListRequest,
  GetAppsListResponse,
  GetComplianceDetailRequest,
  GetComplianceDetailResponse,
  GetNotificationChannelRequest,
  GetPolicyRequest,
  GetProtectionStatusRequest,
  GetProtocolsListRequest,
  GetProtocolsListResponse,
  GetResourceSetRequest,
  GetResourceSetResponse,
  GetThirdPartyFirewallAssociationStatusRequest,
  GetViolationDetailsRequest,
  GetViolationDetailsResponse,
  InternalErrorException,
  InvalidInputException,
  InvalidOperationException,
  InvalidTypeException,
  LimitExceededException,
  ListAdminAccountsForOrganizationRequest,
  ListAdminsManagingAccountRequest,
  ListAppsListsRequest,
  ListComplianceStatusRequest,
  ListComplianceStatusResponse,
  ListDiscoveredResourcesRequest,
  ListMemberAccountsRequest,
  ListPoliciesRequest,
  ListProtocolsListsRequest,
  ListResourceSetResourcesRequest,
  ListResourceSetsRequest,
  ListResourceSetsResponse,
  ListTagsForResourceRequest,
  ListThirdPartyFirewallFirewallPoliciesRequest,
  NetworkFirewallPolicy,
  OrganizationalUnitScope,
  Policy,
  PolicyComplianceDetail,
  PolicyComplianceStatus,
  PolicyOption,
  PolicyTypeScope,
  ProtocolsListData,
  PutAdminAccountRequest,
  PutAppsListRequest,
  PutAppsListResponse,
  PutNotificationChannelRequest,
  PutPolicyRequest,
  PutProtocolsListRequest,
  PutProtocolsListResponse,
  PutResourceSetRequest,
  PutResourceSetResponse,
  RegionScope,
  ResourceNotFoundException,
  ResourceSet,
  ResourceSetSummary,
  ResourceTag,
  SecurityServicePolicyData,
  SecurityServiceType,
  Tag,
  TagResourceRequest,
  ThirdPartyFirewallPolicy,
  UntagResourceRequest,
  ViolationDetail,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateAdminAccountCommand
 */
export const se_AssociateAdminAccountCommand = async (
  input: AssociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateAdminAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateThirdPartyFirewallCommand
 */
export const se_AssociateThirdPartyFirewallCommand = async (
  input: AssociateThirdPartyFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateThirdPartyFirewall");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateResourceCommand
 */
export const se_BatchAssociateResourceCommand = async (
  input: BatchAssociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchAssociateResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateResourceCommand
 */
export const se_BatchDisassociateResourceCommand = async (
  input: BatchDisassociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDisassociateResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppsListCommand
 */
export const se_DeleteAppsListCommand = async (
  input: DeleteAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppsList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotificationChannelCommand
 */
export const se_DeleteNotificationChannelCommand = async (
  input: DeleteNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotificationChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProtocolsListCommand
 */
export const se_DeleteProtocolsListCommand = async (
  input: DeleteProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProtocolsList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceSetCommand
 */
export const se_DeleteResourceSetCommand = async (
  input: DeleteResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateAdminAccountCommand
 */
export const se_DisassociateAdminAccountCommand = async (
  input: DisassociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateAdminAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateThirdPartyFirewallCommand
 */
export const se_DisassociateThirdPartyFirewallCommand = async (
  input: DisassociateThirdPartyFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateThirdPartyFirewall");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAdminAccountCommand
 */
export const se_GetAdminAccountCommand = async (
  input: GetAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAdminAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAdminScopeCommand
 */
export const se_GetAdminScopeCommand = async (
  input: GetAdminScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAdminScope");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppsListCommand
 */
export const se_GetAppsListCommand = async (
  input: GetAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAppsList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceDetailCommand
 */
export const se_GetComplianceDetailCommand = async (
  input: GetComplianceDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComplianceDetail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNotificationChannelCommand
 */
export const se_GetNotificationChannelCommand = async (
  input: GetNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNotificationChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProtectionStatusCommand
 */
export const se_GetProtectionStatusCommand = async (
  input: GetProtectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProtectionStatus");
  let body: any;
  body = JSON.stringify(se_GetProtectionStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProtocolsListCommand
 */
export const se_GetProtocolsListCommand = async (
  input: GetProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProtocolsList");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceSetCommand
 */
export const se_GetResourceSetCommand = async (
  input: GetResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourceSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetThirdPartyFirewallAssociationStatusCommand
 */
export const se_GetThirdPartyFirewallAssociationStatusCommand = async (
  input: GetThirdPartyFirewallAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetThirdPartyFirewallAssociationStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetViolationDetailsCommand
 */
export const se_GetViolationDetailsCommand = async (
  input: GetViolationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetViolationDetails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAdminAccountsForOrganizationCommand
 */
export const se_ListAdminAccountsForOrganizationCommand = async (
  input: ListAdminAccountsForOrganizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAdminAccountsForOrganization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAdminsManagingAccountCommand
 */
export const se_ListAdminsManagingAccountCommand = async (
  input: ListAdminsManagingAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAdminsManagingAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsListsCommand
 */
export const se_ListAppsListsCommand = async (
  input: ListAppsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAppsLists");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceStatusCommand
 */
export const se_ListComplianceStatusCommand = async (
  input: ListComplianceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComplianceStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const se_ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDiscoveredResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMemberAccountsCommand
 */
export const se_ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMemberAccounts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProtocolsListsCommand
 */
export const se_ListProtocolsListsCommand = async (
  input: ListProtocolsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProtocolsLists");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceSetResourcesCommand
 */
export const se_ListResourceSetResourcesCommand = async (
  input: ListResourceSetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceSetResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceSetsCommand
 */
export const se_ListResourceSetsCommand = async (
  input: ListResourceSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceSets");
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
 * serializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand
 */
export const se_ListThirdPartyFirewallFirewallPoliciesCommand = async (
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListThirdPartyFirewallFirewallPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAdminAccountCommand
 */
export const se_PutAdminAccountCommand = async (
  input: PutAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAdminAccount");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppsListCommand
 */
export const se_PutAppsListCommand = async (
  input: PutAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAppsList");
  let body: any;
  body = JSON.stringify(se_PutAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutNotificationChannelCommand
 */
export const se_PutNotificationChannelCommand = async (
  input: PutNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutNotificationChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPolicyCommand
 */
export const se_PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutProtocolsListCommand
 */
export const se_PutProtocolsListCommand = async (
  input: PutProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutProtocolsList");
  let body: any;
  body = JSON.stringify(se_PutProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourceSetCommand
 */
export const se_PutResourceSetCommand = async (
  input: PutResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourceSet");
  let body: any;
  body = JSON.stringify(se_PutResourceSetRequest(input, context));
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
 * deserializeAws_json1_1AssociateAdminAccountCommand
 */
export const de_AssociateAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateAdminAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateAdminAccountCommandError
 */
const de_AssociateAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1AssociateThirdPartyFirewallCommand
 */
export const de_AssociateThirdPartyFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateThirdPartyFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateThirdPartyFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateThirdPartyFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateThirdPartyFirewallCommandError
 */
const de_AssociateThirdPartyFirewallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateThirdPartyFirewallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1BatchAssociateResourceCommand
 */
export const de_BatchAssociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchAssociateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchAssociateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchAssociateResourceCommandError
 */
const de_BatchAssociateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1BatchDisassociateResourceCommand
 */
export const de_BatchDisassociateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDisassociateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: BatchDisassociateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDisassociateResourceCommandError
 */
const de_BatchDisassociateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteAppsListCommand
 */
export const de_DeleteAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppsListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppsListCommandError
 */
const de_DeleteAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteNotificationChannelCommand
 */
export const de_DeleteNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotificationChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotificationChannelCommandError
 */
const de_DeleteNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeletePolicyCommand
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
 * deserializeAws_json1_1DeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteProtocolsListCommand
 */
export const de_DeleteProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtocolsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProtocolsListCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProtocolsListCommandError
 */
const de_DeleteProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteResourceSetCommand
 */
export const de_DeleteResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceSetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourceSetCommandError
 */
const de_DeleteResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DisassociateAdminAccountCommand
 */
export const de_DisassociateAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAdminAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateAdminAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateAdminAccountCommandError
 */
const de_DisassociateAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1DisassociateThirdPartyFirewallCommand
 */
export const de_DisassociateThirdPartyFirewallCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateThirdPartyFirewallCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateThirdPartyFirewallCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateThirdPartyFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateThirdPartyFirewallCommandError
 */
const de_DisassociateThirdPartyFirewallCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateThirdPartyFirewallCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetAdminAccountCommand
 */
export const de_GetAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAdminAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAdminAccountCommandError
 */
const de_GetAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetAdminScopeCommand
 */
export const de_GetAdminScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminScopeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAdminScopeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAdminScopeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAdminScopeCommandError
 */
const de_GetAdminScopeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdminScopeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetAppsListCommand
 */
export const de_GetAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppsListResponse(data, context);
  const response: GetAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAppsListCommandError
 */
const de_GetAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetComplianceDetailCommand
 */
export const de_GetComplianceDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComplianceDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComplianceDetailResponse(data, context);
  const response: GetComplianceDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetComplianceDetailCommandError
 */
const de_GetComplianceDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComplianceDetailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetNotificationChannelCommand
 */
export const de_GetNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNotificationChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetNotificationChannelCommandError
 */
const de_GetNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetPolicyCommand
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
  contents = _json(data);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.fms#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetProtectionStatusCommand
 */
export const de_GetProtectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectionStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProtectionStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetProtectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetProtectionStatusCommandError
 */
const de_GetProtectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetProtocolsListCommand
 */
export const de_GetProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtocolsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProtocolsListResponse(data, context);
  const response: GetProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetProtocolsListCommandError
 */
const de_GetProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetResourceSetCommand
 */
export const de_GetResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourceSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourceSetResponse(data, context);
  const response: GetResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourceSetCommandError
 */
const de_GetResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetThirdPartyFirewallAssociationStatusCommand
 */
export const de_GetThirdPartyFirewallAssociationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyFirewallAssociationStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetThirdPartyFirewallAssociationStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetThirdPartyFirewallAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetThirdPartyFirewallAssociationStatusCommandError
 */
const de_GetThirdPartyFirewallAssociationStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetThirdPartyFirewallAssociationStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetViolationDetailsCommand
 */
export const de_GetViolationDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetViolationDetailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetViolationDetailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetViolationDetailsResponse(data, context);
  const response: GetViolationDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetViolationDetailsCommandError
 */
const de_GetViolationDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetViolationDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListAdminAccountsForOrganizationCommand
 */
export const de_ListAdminAccountsForOrganizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdminAccountsForOrganizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAdminAccountsForOrganizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAdminAccountsForOrganizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAdminAccountsForOrganizationCommandError
 */
const de_ListAdminAccountsForOrganizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdminAccountsForOrganizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListAdminsManagingAccountCommand
 */
export const de_ListAdminsManagingAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdminsManagingAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAdminsManagingAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAdminsManagingAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAdminsManagingAccountCommandError
 */
const de_ListAdminsManagingAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAdminsManagingAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListAppsListsCommand
 */
export const de_ListAppsListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAppsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAppsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAppsListsCommandError
 */
const de_ListAppsListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListComplianceStatusCommand
 */
export const de_ListComplianceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComplianceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComplianceStatusResponse(data, context);
  const response: ListComplianceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListComplianceStatusCommandError
 */
const de_ListComplianceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComplianceStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const de_ListDiscoveredResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDiscoveredResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesCommandError
 */
const de_ListDiscoveredResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoveredResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListMemberAccountsCommand
 */
export const de_ListMemberAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMemberAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMemberAccountsCommandError
 */
const de_ListMemberAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMemberAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListPoliciesCommand
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
  contents = _json(data);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPoliciesCommandError
 */
const de_ListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListProtocolsListsCommand
 */
export const de_ListProtocolsListsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtocolsListsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProtocolsListsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListProtocolsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProtocolsListsCommandError
 */
const de_ListProtocolsListsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtocolsListsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListResourceSetResourcesCommand
 */
export const de_ListResourceSetResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceSetResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourceSetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourceSetResourcesCommandError
 */
const de_ListResourceSetResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListResourceSetsCommand
 */
export const de_ListResourceSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceSetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceSetsResponse(data, context);
  const response: ListResourceSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourceSetsCommandError
 */
const de_ListResourceSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
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
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand
 */
export const de_ListThirdPartyFirewallFirewallPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListThirdPartyFirewallFirewallPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListThirdPartyFirewallFirewallPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommandError
 */
const de_ListThirdPartyFirewallFirewallPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutAdminAccountCommand
 */
export const de_PutAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAdminAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAdminAccountCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAdminAccountCommandError
 */
const de_PutAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutAppsListCommand
 */
export const de_PutAppsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAppsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAppsListResponse(data, context);
  const response: PutAppsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAppsListCommandError
 */
const de_PutAppsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutNotificationChannelCommand
 */
export const de_PutNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutNotificationChannelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutNotificationChannelCommandError
 */
const de_PutNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutPolicyCommand
 */
export const de_PutPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutPolicyCommandError
 */
const de_PutPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidTypeException":
    case "com.amazonaws.fms#InvalidTypeException":
      throw await de_InvalidTypeExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutProtocolsListCommand
 */
export const de_PutProtocolsListCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProtocolsListCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutProtocolsListCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutProtocolsListResponse(data, context);
  const response: PutProtocolsListCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutProtocolsListCommandError
 */
const de_PutProtocolsListCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProtocolsListCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutResourceSetCommand
 */
export const de_PutResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourceSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourceSetResponse(data, context);
  const response: PutResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutResourceSetCommandError
 */
const de_PutResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.fms#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
    case "InternalErrorException":
    case "com.amazonaws.fms#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.fms#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.fms#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fms#ResourceNotFoundException":
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
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTypeExceptionRes
 */
const de_InvalidTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidTypeException({
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

// se_AccountIdList omitted.

// se_AccountScope omitted.

// se_AdminScope omitted.

// se_App omitted.

// se_AppsList omitted.

/**
 * serializeAws_json1_1AppsListData
 */
const se_AppsListData = (input: AppsListData, context: __SerdeContext): any => {
  return take(input, {
    AppsList: _json,
    CreateTime: (_) => Math.round(_.getTime() / 1000),
    LastUpdateTime: (_) => Math.round(_.getTime() / 1000),
    ListId: [],
    ListName: [],
    ListUpdateToken: [],
    PreviousAppsList: _json,
  });
};

// se_AssociateAdminAccountRequest omitted.

// se_AssociateThirdPartyFirewallRequest omitted.

// se_AWSAccountIdList omitted.

// se_AWSRegionList omitted.

// se_BatchAssociateResourceRequest omitted.

// se_BatchDisassociateResourceRequest omitted.

// se_CustomerPolicyScopeIdList omitted.

// se_CustomerPolicyScopeMap omitted.

// se_DeleteAppsListRequest omitted.

// se_DeleteNotificationChannelRequest omitted.

// se_DeletePolicyRequest omitted.

// se_DeleteProtocolsListRequest omitted.

// se_DeleteResourceSetRequest omitted.

// se_DisassociateAdminAccountRequest omitted.

// se_DisassociateThirdPartyFirewallRequest omitted.

// se_GetAdminAccountRequest omitted.

// se_GetAdminScopeRequest omitted.

// se_GetAppsListRequest omitted.

// se_GetComplianceDetailRequest omitted.

// se_GetNotificationChannelRequest omitted.

// se_GetPolicyRequest omitted.

/**
 * serializeAws_json1_1GetProtectionStatusRequest
 */
const se_GetProtectionStatusRequest = (input: GetProtectionStatusRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    MemberAccountId: [],
    NextToken: [],
    PolicyId: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_GetProtocolsListRequest omitted.

// se_GetResourceSetRequest omitted.

// se_GetThirdPartyFirewallAssociationStatusRequest omitted.

// se_GetViolationDetailsRequest omitted.

// se_IdentifierList omitted.

// se_ListAdminAccountsForOrganizationRequest omitted.

// se_ListAdminsManagingAccountRequest omitted.

// se_ListAppsListsRequest omitted.

// se_ListComplianceStatusRequest omitted.

// se_ListDiscoveredResourcesRequest omitted.

// se_ListMemberAccountsRequest omitted.

// se_ListPoliciesRequest omitted.

// se_ListProtocolsListsRequest omitted.

// se_ListResourceSetResourcesRequest omitted.

// se_ListResourceSetsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListThirdPartyFirewallFirewallPoliciesRequest omitted.

// se_NetworkFirewallPolicy omitted.

// se_OrganizationalUnitIdList omitted.

// se_OrganizationalUnitScope omitted.

// se_Policy omitted.

// se_PolicyOption omitted.

// se_PolicyTypeScope omitted.

// se_PreviousAppsList omitted.

// se_PreviousProtocolsList omitted.

// se_ProtocolsList omitted.

/**
 * serializeAws_json1_1ProtocolsListData
 */
const se_ProtocolsListData = (input: ProtocolsListData, context: __SerdeContext): any => {
  return take(input, {
    CreateTime: (_) => Math.round(_.getTime() / 1000),
    LastUpdateTime: (_) => Math.round(_.getTime() / 1000),
    ListId: [],
    ListName: [],
    ListUpdateToken: [],
    PreviousProtocolsList: _json,
    ProtocolsList: _json,
  });
};

// se_PutAdminAccountRequest omitted.

/**
 * serializeAws_json1_1PutAppsListRequest
 */
const se_PutAppsListRequest = (input: PutAppsListRequest, context: __SerdeContext): any => {
  return take(input, {
    AppsList: (_) => se_AppsListData(_, context),
    TagList: _json,
  });
};

// se_PutNotificationChannelRequest omitted.

// se_PutPolicyRequest omitted.

/**
 * serializeAws_json1_1PutProtocolsListRequest
 */
const se_PutProtocolsListRequest = (input: PutProtocolsListRequest, context: __SerdeContext): any => {
  return take(input, {
    ProtocolsList: (_) => se_ProtocolsListData(_, context),
    TagList: _json,
  });
};

/**
 * serializeAws_json1_1PutResourceSetRequest
 */
const se_PutResourceSetRequest = (input: PutResourceSetRequest, context: __SerdeContext): any => {
  return take(input, {
    ResourceSet: (_) => se_ResourceSet(_, context),
    TagList: _json,
  });
};

// se_RegionScope omitted.

/**
 * serializeAws_json1_1ResourceSet
 */
const se_ResourceSet = (input: ResourceSet, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    Id: [],
    LastUpdateTime: (_) => Math.round(_.getTime() / 1000),
    Name: [],
    ResourceSetStatus: [],
    ResourceTypeList: _json,
    UpdateToken: [],
  });
};

// se_ResourceSetIds omitted.

// se_ResourceTag omitted.

// se_ResourceTags omitted.

// se_ResourceTypeList omitted.

// se_SecurityServicePolicyData omitted.

// se_SecurityServiceTypeList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_ThirdPartyFirewallPolicy omitted.

// se_UntagResourceRequest omitted.

// de_AccountIdList omitted.

// de_AccountScope omitted.

// de_ActionTarget omitted.

// de_AdminAccountSummary omitted.

// de_AdminAccountSummaryList omitted.

// de_AdminScope omitted.

// de_App omitted.

// de_AppsList omitted.

/**
 * deserializeAws_json1_1AppsListData
 */
const de_AppsListData = (output: any, context: __SerdeContext): AppsListData => {
  return take(output, {
    AppsList: _json,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ListId: __expectString,
    ListName: __expectString,
    ListUpdateToken: __expectString,
    PreviousAppsList: _json,
  }) as any;
};

// de_AppsListDataSummary omitted.

// de_AppsListsData omitted.

// de_AssociateThirdPartyFirewallResponse omitted.

// de_AwsEc2InstanceViolation omitted.

// de_AwsEc2NetworkInterfaceViolation omitted.

// de_AwsEc2NetworkInterfaceViolations omitted.

// de_AWSRegionList omitted.

// de_AwsVPCSecurityGroupViolation omitted.

// de_BatchAssociateResourceResponse omitted.

// de_BatchDisassociateResourceResponse omitted.

// de_ComplianceViolator omitted.

// de_ComplianceViolatorMetadata omitted.

// de_ComplianceViolators omitted.

// de_CustomerPolicyScopeIdList omitted.

// de_CustomerPolicyScopeMap omitted.

// de_DisassociateThirdPartyFirewallResponse omitted.

// de_DiscoveredResource omitted.

// de_DiscoveredResourceList omitted.

// de_DnsDuplicateRuleGroupViolation omitted.

// de_DnsRuleGroupLimitExceededViolation omitted.

// de_DnsRuleGroupPriorities omitted.

// de_DnsRuleGroupPriorityConflictViolation omitted.

// de_EC2AssociateRouteTableAction omitted.

// de_EC2CopyRouteTableAction omitted.

// de_EC2CreateRouteAction omitted.

// de_EC2CreateRouteTableAction omitted.

// de_EC2DeleteRouteAction omitted.

// de_EC2ReplaceRouteAction omitted.

// de_EC2ReplaceRouteTableAssociationAction omitted.

// de_EvaluationResult omitted.

// de_EvaluationResults omitted.

// de_ExpectedRoute omitted.

// de_ExpectedRoutes omitted.

// de_FailedItem omitted.

// de_FailedItemList omitted.

// de_FirewallSubnetIsOutOfScopeViolation omitted.

// de_FirewallSubnetMissingVPCEndpointViolation omitted.

// de_FMSPolicyUpdateFirewallCreationConfigAction omitted.

// de_GetAdminAccountResponse omitted.

// de_GetAdminScopeResponse omitted.

/**
 * deserializeAws_json1_1GetAppsListResponse
 */
const de_GetAppsListResponse = (output: any, context: __SerdeContext): GetAppsListResponse => {
  return take(output, {
    AppsList: (_: any) => de_AppsListData(_, context),
    AppsListArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailResponse
 */
const de_GetComplianceDetailResponse = (output: any, context: __SerdeContext): GetComplianceDetailResponse => {
  return take(output, {
    PolicyComplianceDetail: (_: any) => de_PolicyComplianceDetail(_, context),
  }) as any;
};

// de_GetNotificationChannelResponse omitted.

// de_GetPolicyResponse omitted.

// de_GetProtectionStatusResponse omitted.

/**
 * deserializeAws_json1_1GetProtocolsListResponse
 */
const de_GetProtocolsListResponse = (output: any, context: __SerdeContext): GetProtocolsListResponse => {
  return take(output, {
    ProtocolsList: (_: any) => de_ProtocolsListData(_, context),
    ProtocolsListArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetResourceSetResponse
 */
const de_GetResourceSetResponse = (output: any, context: __SerdeContext): GetResourceSetResponse => {
  return take(output, {
    ResourceSet: (_: any) => de_ResourceSet(_, context),
    ResourceSetArn: __expectString,
  }) as any;
};

// de_GetThirdPartyFirewallAssociationStatusResponse omitted.

/**
 * deserializeAws_json1_1GetViolationDetailsResponse
 */
const de_GetViolationDetailsResponse = (output: any, context: __SerdeContext): GetViolationDetailsResponse => {
  return take(output, {
    ViolationDetail: (_: any) => de_ViolationDetail(_, context),
  }) as any;
};

// de_InternalErrorException omitted.

// de_InvalidInputException omitted.

// de_InvalidOperationException omitted.

// de_InvalidTypeException omitted.

// de_IssueInfoMap omitted.

// de_LengthBoundedStringList omitted.

// de_LimitExceededException omitted.

// de_ListAdminAccountsForOrganizationResponse omitted.

// de_ListAdminsManagingAccountResponse omitted.

// de_ListAppsListsResponse omitted.

/**
 * deserializeAws_json1_1ListComplianceStatusResponse
 */
const de_ListComplianceStatusResponse = (output: any, context: __SerdeContext): ListComplianceStatusResponse => {
  return take(output, {
    NextToken: __expectString,
    PolicyComplianceStatusList: (_: any) => de_PolicyComplianceStatusList(_, context),
  }) as any;
};

// de_ListDiscoveredResourcesResponse omitted.

// de_ListMemberAccountsResponse omitted.

// de_ListPoliciesResponse omitted.

// de_ListProtocolsListsResponse omitted.

// de_ListResourceSetResourcesResponse omitted.

/**
 * deserializeAws_json1_1ListResourceSetsResponse
 */
const de_ListResourceSetsResponse = (output: any, context: __SerdeContext): ListResourceSetsResponse => {
  return take(output, {
    NextToken: __expectString,
    ResourceSets: (_: any) => de_ResourceSetSummaryList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ListThirdPartyFirewallFirewallPoliciesResponse omitted.

// de_MemberAccounts omitted.

// de_NetworkFirewallActionList omitted.

// de_NetworkFirewallBlackHoleRouteDetectedViolation omitted.

// de_NetworkFirewallInternetTrafficNotInspectedViolation omitted.

// de_NetworkFirewallInvalidRouteConfigurationViolation omitted.

// de_NetworkFirewallMissingExpectedRoutesViolation omitted.

// de_NetworkFirewallMissingExpectedRTViolation omitted.

// de_NetworkFirewallMissingFirewallViolation omitted.

// de_NetworkFirewallMissingSubnetViolation omitted.

// de_NetworkFirewallPolicy omitted.

// de_NetworkFirewallPolicyDescription omitted.

// de_NetworkFirewallPolicyModifiedViolation omitted.

// de_NetworkFirewallStatefulRuleGroupOverride omitted.

// de_NetworkFirewallUnexpectedFirewallRoutesViolation omitted.

// de_NetworkFirewallUnexpectedGatewayRoutesViolation omitted.

// de_OrderedRemediationActions omitted.

// de_OrganizationalUnitIdList omitted.

// de_OrganizationalUnitScope omitted.

// de_PartialMatch omitted.

// de_PartialMatches omitted.

// de_Policy omitted.

/**
 * deserializeAws_json1_1PolicyComplianceDetail
 */
const de_PolicyComplianceDetail = (output: any, context: __SerdeContext): PolicyComplianceDetail => {
  return take(output, {
    EvaluationLimitExceeded: __expectBoolean,
    ExpiredAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IssueInfoMap: _json,
    MemberAccount: __expectString,
    PolicyId: __expectString,
    PolicyOwner: __expectString,
    Violators: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PolicyComplianceStatus
 */
const de_PolicyComplianceStatus = (output: any, context: __SerdeContext): PolicyComplianceStatus => {
  return take(output, {
    EvaluationResults: _json,
    IssueInfoMap: _json,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MemberAccount: __expectString,
    PolicyId: __expectString,
    PolicyName: __expectString,
    PolicyOwner: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PolicyComplianceStatusList
 */
const de_PolicyComplianceStatusList = (output: any, context: __SerdeContext): PolicyComplianceStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyComplianceStatus(entry, context);
    });
  return retVal;
};

// de_PolicyOption omitted.

// de_PolicySummary omitted.

// de_PolicySummaryList omitted.

// de_PolicyTypeScope omitted.

// de_PossibleRemediationAction omitted.

// de_PossibleRemediationActionList omitted.

// de_PossibleRemediationActions omitted.

// de_PreviousAppsList omitted.

// de_PreviousProtocolsList omitted.

// de_ProtocolsList omitted.

/**
 * deserializeAws_json1_1ProtocolsListData
 */
const de_ProtocolsListData = (output: any, context: __SerdeContext): ProtocolsListData => {
  return take(output, {
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ListId: __expectString,
    ListName: __expectString,
    ListUpdateToken: __expectString,
    PreviousProtocolsList: _json,
    ProtocolsList: _json,
  }) as any;
};

// de_ProtocolsListDataSummary omitted.

// de_ProtocolsListsData omitted.

/**
 * deserializeAws_json1_1PutAppsListResponse
 */
const de_PutAppsListResponse = (output: any, context: __SerdeContext): PutAppsListResponse => {
  return take(output, {
    AppsList: (_: any) => de_AppsListData(_, context),
    AppsListArn: __expectString,
  }) as any;
};

// de_PutPolicyResponse omitted.

/**
 * deserializeAws_json1_1PutProtocolsListResponse
 */
const de_PutProtocolsListResponse = (output: any, context: __SerdeContext): PutProtocolsListResponse => {
  return take(output, {
    ProtocolsList: (_: any) => de_ProtocolsListData(_, context),
    ProtocolsListArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PutResourceSetResponse
 */
const de_PutResourceSetResponse = (output: any, context: __SerdeContext): PutResourceSetResponse => {
  return take(output, {
    ResourceSet: (_: any) => de_ResourceSet(_, context),
    ResourceSetArn: __expectString,
  }) as any;
};

// de_RegionScope omitted.

// de_RemediationAction omitted.

// de_RemediationActionWithOrder omitted.

// de_Resource omitted.

// de_ResourceIdList omitted.

// de_ResourceList omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1ResourceSet
 */
const de_ResourceSet = (output: any, context: __SerdeContext): ResourceSet => {
  return take(output, {
    Description: __expectString,
    Id: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ResourceSetStatus: __expectString,
    ResourceTypeList: _json,
    UpdateToken: __expectString,
  }) as any;
};

// de_ResourceSetIds omitted.

/**
 * deserializeAws_json1_1ResourceSetSummary
 */
const de_ResourceSetSummary = (output: any, context: __SerdeContext): ResourceSetSummary => {
  return take(output, {
    Description: __expectString,
    Id: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ResourceSetStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ResourceSetSummaryList
 */
const de_ResourceSetSummaryList = (output: any, context: __SerdeContext): ResourceSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceSetSummary(entry, context);
    });
  return retVal;
};

// de_ResourceTag omitted.

// de_ResourceTags omitted.

// de_ResourceTypeList omitted.

// de_ResourceViolation omitted.

// de_ResourceViolations omitted.

// de_Route omitted.

// de_RouteHasOutOfScopeEndpointViolation omitted.

// de_Routes omitted.

// de_SecurityGroupRemediationAction omitted.

// de_SecurityGroupRemediationActions omitted.

// de_SecurityGroupRuleDescription omitted.

// de_SecurityServicePolicyData omitted.

// de_SecurityServiceTypeList omitted.

// de_StatefulEngineOptions omitted.

// de_StatefulRuleGroup omitted.

// de_StatefulRuleGroupList omitted.

// de_StatelessRuleGroup omitted.

// de_StatelessRuleGroupList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetViolationReasons omitted.

// de_ThirdPartyFirewallFirewallPolicies omitted.

// de_ThirdPartyFirewallFirewallPolicy omitted.

// de_ThirdPartyFirewallMissingExpectedRouteTableViolation omitted.

// de_ThirdPartyFirewallMissingFirewallViolation omitted.

// de_ThirdPartyFirewallMissingSubnetViolation omitted.

// de_ThirdPartyFirewallPolicy omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1ViolationDetail
 */
const de_ViolationDetail = (output: any, context: __SerdeContext): ViolationDetail => {
  return take(output, {
    MemberAccount: __expectString,
    PolicyId: __expectString,
    ResourceDescription: __expectString,
    ResourceId: __expectString,
    ResourceTags: _json,
    ResourceType: __expectString,
    ResourceViolations: _json,
  }) as any;
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
    "x-amz-target": `AWSFMS_20180101.${operation}`,
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
