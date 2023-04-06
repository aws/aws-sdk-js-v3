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
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  ActionTarget,
  App,
  AppsListData,
  AppsListDataSummary,
  AssociateAdminAccountRequest,
  AssociateThirdPartyFirewallRequest,
  AssociateThirdPartyFirewallResponse,
  AwsEc2InstanceViolation,
  AwsEc2NetworkInterfaceViolation,
  AwsVPCSecurityGroupViolation,
  BatchAssociateResourceRequest,
  BatchAssociateResourceResponse,
  BatchDisassociateResourceRequest,
  BatchDisassociateResourceResponse,
  ComplianceViolator,
  CustomerPolicyScopeIdType,
  DeleteAppsListRequest,
  DeleteNotificationChannelRequest,
  DeletePolicyRequest,
  DeleteProtocolsListRequest,
  DeleteResourceSetRequest,
  DependentServiceName,
  DisassociateAdminAccountRequest,
  DisassociateThirdPartyFirewallRequest,
  DisassociateThirdPartyFirewallResponse,
  DiscoveredResource,
  DnsDuplicateRuleGroupViolation,
  DnsRuleGroupLimitExceededViolation,
  DnsRuleGroupPriorityConflictViolation,
  EC2AssociateRouteTableAction,
  EC2CopyRouteTableAction,
  EC2CreateRouteAction,
  EC2CreateRouteTableAction,
  EC2DeleteRouteAction,
  EC2ReplaceRouteAction,
  EC2ReplaceRouteTableAssociationAction,
  EvaluationResult,
  ExpectedRoute,
  FailedItem,
  FirewallSubnetIsOutOfScopeViolation,
  FirewallSubnetMissingVPCEndpointViolation,
  FMSPolicyUpdateFirewallCreationConfigAction,
  GetAdminAccountRequest,
  GetAdminAccountResponse,
  GetAppsListRequest,
  GetAppsListResponse,
  GetComplianceDetailRequest,
  GetComplianceDetailResponse,
  GetNotificationChannelRequest,
  GetNotificationChannelResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetProtectionStatusRequest,
  GetProtectionStatusResponse,
  GetProtocolsListRequest,
  GetProtocolsListResponse,
  GetResourceSetRequest,
  GetResourceSetResponse,
  GetThirdPartyFirewallAssociationStatusRequest,
  GetThirdPartyFirewallAssociationStatusResponse,
  GetViolationDetailsRequest,
  GetViolationDetailsResponse,
  InternalErrorException,
  InvalidInputException,
  InvalidOperationException,
  InvalidTypeException,
  LimitExceededException,
  ListAppsListsRequest,
  ListAppsListsResponse,
  ListComplianceStatusRequest,
  ListComplianceStatusResponse,
  ListDiscoveredResourcesRequest,
  ListDiscoveredResourcesResponse,
  ListMemberAccountsRequest,
  ListMemberAccountsResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListProtocolsListsRequest,
  ListProtocolsListsResponse,
  ListResourceSetResourcesRequest,
  ListResourceSetResourcesResponse,
  ListResourceSetsRequest,
  ListResourceSetsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListThirdPartyFirewallFirewallPoliciesRequest,
  ListThirdPartyFirewallFirewallPoliciesResponse,
  NetworkFirewallBlackHoleRouteDetectedViolation,
  NetworkFirewallInternetTrafficNotInspectedViolation,
  NetworkFirewallInvalidRouteConfigurationViolation,
  NetworkFirewallMissingExpectedRoutesViolation,
  NetworkFirewallMissingExpectedRTViolation,
  NetworkFirewallMissingFirewallViolation,
  NetworkFirewallMissingSubnetViolation,
  NetworkFirewallPolicy,
  NetworkFirewallPolicyDescription,
  NetworkFirewallPolicyModifiedViolation,
  NetworkFirewallStatefulRuleGroupOverride,
  NetworkFirewallUnexpectedFirewallRoutesViolation,
  NetworkFirewallUnexpectedGatewayRoutesViolation,
  PartialMatch,
  Policy,
  PolicyComplianceDetail,
  PolicyComplianceStatus,
  PolicyOption,
  PolicySummary,
  PossibleRemediationAction,
  PossibleRemediationActions,
  ProtocolsListData,
  ProtocolsListDataSummary,
  PutAppsListRequest,
  PutAppsListResponse,
  PutNotificationChannelRequest,
  PutPolicyRequest,
  PutPolicyResponse,
  PutProtocolsListRequest,
  PutProtocolsListResponse,
  PutResourceSetRequest,
  PutResourceSetResponse,
  RemediationAction,
  RemediationActionWithOrder,
  Resource,
  ResourceNotFoundException,
  ResourceSet,
  ResourceSetSummary,
  ResourceTag,
  ResourceViolation,
  Route,
  RouteHasOutOfScopeEndpointViolation,
  SecurityGroupRemediationAction,
  SecurityGroupRuleDescription,
  SecurityServicePolicyData,
  StatefulEngineOptions,
  StatefulRuleGroup,
  StatelessRuleGroup,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  ThirdPartyFirewallFirewallPolicy,
  ThirdPartyFirewallMissingExpectedRouteTableViolation,
  ThirdPartyFirewallMissingFirewallViolation,
  ThirdPartyFirewallMissingSubnetViolation,
  ThirdPartyFirewallPolicy,
  UntagResourceRequest,
  UntagResourceResponse,
  ViolationDetail,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateAdminAccountCommand
 */
export const se_AssociateAdminAccountCommand = async (
  input: AssociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.AssociateAdminAccount",
  };
  let body: any;
  body = JSON.stringify(se_AssociateAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateThirdPartyFirewallCommand
 */
export const se_AssociateThirdPartyFirewallCommand = async (
  input: AssociateThirdPartyFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.AssociateThirdPartyFirewall",
  };
  let body: any;
  body = JSON.stringify(se_AssociateThirdPartyFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchAssociateResourceCommand
 */
export const se_BatchAssociateResourceCommand = async (
  input: BatchAssociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.BatchAssociateResource",
  };
  let body: any;
  body = JSON.stringify(se_BatchAssociateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDisassociateResourceCommand
 */
export const se_BatchDisassociateResourceCommand = async (
  input: BatchDisassociateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.BatchDisassociateResource",
  };
  let body: any;
  body = JSON.stringify(se_BatchDisassociateResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppsListCommand
 */
export const se_DeleteAppsListCommand = async (
  input: DeleteAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteAppsList",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotificationChannelCommand
 */
export const se_DeleteNotificationChannelCommand = async (
  input: DeleteNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(se_DeleteNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeletePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeletePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProtocolsListCommand
 */
export const se_DeleteProtocolsListCommand = async (
  input: DeleteProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteProtocolsList",
  };
  let body: any;
  body = JSON.stringify(se_DeleteProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceSetCommand
 */
export const se_DeleteResourceSetCommand = async (
  input: DeleteResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DeleteResourceSet",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourceSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateAdminAccountCommand
 */
export const se_DisassociateAdminAccountCommand = async (
  input: DisassociateAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DisassociateAdminAccount",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateThirdPartyFirewallCommand
 */
export const se_DisassociateThirdPartyFirewallCommand = async (
  input: DisassociateThirdPartyFirewallCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.DisassociateThirdPartyFirewall",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateThirdPartyFirewallRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAdminAccountCommand
 */
export const se_GetAdminAccountCommand = async (
  input: GetAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetAdminAccount",
  };
  let body: any;
  body = JSON.stringify(se_GetAdminAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppsListCommand
 */
export const se_GetAppsListCommand = async (
  input: GetAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetAppsList",
  };
  let body: any;
  body = JSON.stringify(se_GetAppsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetComplianceDetailCommand
 */
export const se_GetComplianceDetailCommand = async (
  input: GetComplianceDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetComplianceDetail",
  };
  let body: any;
  body = JSON.stringify(se_GetComplianceDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNotificationChannelCommand
 */
export const se_GetNotificationChannelCommand = async (
  input: GetNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(se_GetNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProtectionStatusCommand
 */
export const se_GetProtectionStatusCommand = async (
  input: GetProtectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetProtectionStatus",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetProtocolsList",
  };
  let body: any;
  body = JSON.stringify(se_GetProtocolsListRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourceSetCommand
 */
export const se_GetResourceSetCommand = async (
  input: GetResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetResourceSet",
  };
  let body: any;
  body = JSON.stringify(se_GetResourceSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetThirdPartyFirewallAssociationStatusCommand
 */
export const se_GetThirdPartyFirewallAssociationStatusCommand = async (
  input: GetThirdPartyFirewallAssociationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetThirdPartyFirewallAssociationStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetThirdPartyFirewallAssociationStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetViolationDetailsCommand
 */
export const se_GetViolationDetailsCommand = async (
  input: GetViolationDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.GetViolationDetails",
  };
  let body: any;
  body = JSON.stringify(se_GetViolationDetailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsListsCommand
 */
export const se_ListAppsListsCommand = async (
  input: ListAppsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListAppsLists",
  };
  let body: any;
  body = JSON.stringify(se_ListAppsListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListComplianceStatusCommand
 */
export const se_ListComplianceStatusCommand = async (
  input: ListComplianceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListComplianceStatus",
  };
  let body: any;
  body = JSON.stringify(se_ListComplianceStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesCommand
 */
export const se_ListDiscoveredResourcesCommand = async (
  input: ListDiscoveredResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListDiscoveredResources",
  };
  let body: any;
  body = JSON.stringify(se_ListDiscoveredResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMemberAccountsCommand
 */
export const se_ListMemberAccountsCommand = async (
  input: ListMemberAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListMemberAccounts",
  };
  let body: any;
  body = JSON.stringify(se_ListMemberAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProtocolsListsCommand
 */
export const se_ListProtocolsListsCommand = async (
  input: ListProtocolsListsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListProtocolsLists",
  };
  let body: any;
  body = JSON.stringify(se_ListProtocolsListsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceSetResourcesCommand
 */
export const se_ListResourceSetResourcesCommand = async (
  input: ListResourceSetResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListResourceSetResources",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceSetResourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceSetsCommand
 */
export const se_ListResourceSetsCommand = async (
  input: ListResourceSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListResourceSets",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceSetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesCommand
 */
export const se_ListThirdPartyFirewallFirewallPoliciesCommand = async (
  input: ListThirdPartyFirewallFirewallPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.ListThirdPartyFirewallFirewallPolicies",
  };
  let body: any;
  body = JSON.stringify(se_ListThirdPartyFirewallFirewallPoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppsListCommand
 */
export const se_PutAppsListCommand = async (
  input: PutAppsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutAppsList",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutNotificationChannel",
  };
  let body: any;
  body = JSON.stringify(se_PutNotificationChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPolicyCommand
 */
export const se_PutPolicyCommand = async (
  input: PutPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutProtocolsListCommand
 */
export const se_PutProtocolsListCommand = async (
  input: PutProtocolsListCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutProtocolsList",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.PutResourceSet",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSFMS_20180101.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AssociateThirdPartyFirewallResponse(data, context);
  const response: AssociateThirdPartyFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchAssociateResourceResponse(data, context);
  const response: BatchAssociateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_BatchDisassociateResourceResponse(data, context);
  const response: BatchDisassociateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateThirdPartyFirewallResponse(data, context);
  const response: DisassociateThirdPartyFirewallCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetAdminAccountResponse(data, context);
  const response: GetAdminAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetNotificationChannelResponse(data, context);
  const response: GetNotificationChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetPolicyResponse(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetProtectionStatusResponse(data, context);
  const response: GetProtectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetThirdPartyFirewallAssociationStatusResponse(data, context);
  const response: GetThirdPartyFirewallAssociationStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListAppsListsResponse(data, context);
  const response: ListAppsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListDiscoveredResourcesResponse(data, context);
  const response: ListDiscoveredResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListMemberAccountsResponse(data, context);
  const response: ListMemberAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListPoliciesResponse(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListProtocolsListsResponse(data, context);
  const response: ListProtocolsListsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListResourceSetResourcesResponse(data, context);
  const response: ListResourceSetResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListThirdPartyFirewallFirewallPoliciesResponse(data, context);
  const response: ListThirdPartyFirewallFirewallPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PutPolicyResponse(data, context);
  const response: PutPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_InternalErrorException(body, context);
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
  const deserialized: any = de_InvalidInputException(body, context);
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
  const deserialized: any = de_InvalidOperationException(body, context);
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
  const deserialized: any = de_InvalidTypeException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1App
 */
const se_App = (input: App, context: __SerdeContext): any => {
  return {
    ...(input.AppName != null && { AppName: input.AppName }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

/**
 * serializeAws_json1_1AppsList
 */
const se_AppsList = (input: App[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_App(entry, context);
    });
};

/**
 * serializeAws_json1_1AppsListData
 */
const se_AppsListData = (input: AppsListData, context: __SerdeContext): any => {
  return {
    ...(input.AppsList != null && { AppsList: se_AppsList(input.AppsList, context) }),
    ...(input.CreateTime != null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime != null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId != null && { ListId: input.ListId }),
    ...(input.ListName != null && { ListName: input.ListName }),
    ...(input.ListUpdateToken != null && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousAppsList != null && { PreviousAppsList: se_PreviousAppsList(input.PreviousAppsList, context) }),
  };
};

/**
 * serializeAws_json1_1AssociateAdminAccountRequest
 */
const se_AssociateAdminAccountRequest = (input: AssociateAdminAccountRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminAccount != null && { AdminAccount: input.AdminAccount }),
  };
};

/**
 * serializeAws_json1_1AssociateThirdPartyFirewallRequest
 */
const se_AssociateThirdPartyFirewallRequest = (
  input: AssociateThirdPartyFirewallRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ThirdPartyFirewall != null && { ThirdPartyFirewall: input.ThirdPartyFirewall }),
  };
};

/**
 * serializeAws_json1_1AWSAccountIdList
 */
const se_AWSAccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1BatchAssociateResourceRequest
 */
const se_BatchAssociateResourceRequest = (input: BatchAssociateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Items != null && { Items: se_IdentifierList(input.Items, context) }),
    ...(input.ResourceSetIdentifier != null && { ResourceSetIdentifier: input.ResourceSetIdentifier }),
  };
};

/**
 * serializeAws_json1_1BatchDisassociateResourceRequest
 */
const se_BatchDisassociateResourceRequest = (input: BatchDisassociateResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Items != null && { Items: se_IdentifierList(input.Items, context) }),
    ...(input.ResourceSetIdentifier != null && { ResourceSetIdentifier: input.ResourceSetIdentifier }),
  };
};

/**
 * serializeAws_json1_1CustomerPolicyScopeIdList
 */
const se_CustomerPolicyScopeIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CustomerPolicyScopeMap
 */
const se_CustomerPolicyScopeMap = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [CustomerPolicyScopeIdType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = se_CustomerPolicyScopeIdList(value, context);
      return acc;
    },
    {}
  );
};

/**
 * serializeAws_json1_1DeleteAppsListRequest
 */
const se_DeleteAppsListRequest = (input: DeleteAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListId != null && { ListId: input.ListId }),
  };
};

/**
 * serializeAws_json1_1DeleteNotificationChannelRequest
 */
const se_DeleteNotificationChannelRequest = (input: DeleteNotificationChannelRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DeletePolicyRequest
 */
const se_DeletePolicyRequest = (input: DeletePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAllPolicyResources != null && { DeleteAllPolicyResources: input.DeleteAllPolicyResources }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1DeleteProtocolsListRequest
 */
const se_DeleteProtocolsListRequest = (input: DeleteProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ListId != null && { ListId: input.ListId }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceSetRequest
 */
const se_DeleteResourceSetRequest = (input: DeleteResourceSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
  };
};

/**
 * serializeAws_json1_1DisassociateAdminAccountRequest
 */
const se_DisassociateAdminAccountRequest = (input: DisassociateAdminAccountRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DisassociateThirdPartyFirewallRequest
 */
const se_DisassociateThirdPartyFirewallRequest = (
  input: DisassociateThirdPartyFirewallRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ThirdPartyFirewall != null && { ThirdPartyFirewall: input.ThirdPartyFirewall }),
  };
};

/**
 * serializeAws_json1_1GetAdminAccountRequest
 */
const se_GetAdminAccountRequest = (input: GetAdminAccountRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetAppsListRequest
 */
const se_GetAppsListRequest = (input: GetAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultList != null && { DefaultList: input.DefaultList }),
    ...(input.ListId != null && { ListId: input.ListId }),
  };
};

/**
 * serializeAws_json1_1GetComplianceDetailRequest
 */
const se_GetComplianceDetailRequest = (input: GetComplianceDetailRequest, context: __SerdeContext): any => {
  return {
    ...(input.MemberAccount != null && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1GetNotificationChannelRequest
 */
const se_GetNotificationChannelRequest = (input: GetNotificationChannelRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetPolicyRequest
 */
const se_GetPolicyRequest = (input: GetPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1GetProtectionStatusRequest
 */
const se_GetProtectionStatusRequest = (input: GetProtectionStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MemberAccountId != null && { MemberAccountId: input.MemberAccountId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1GetProtocolsListRequest
 */
const se_GetProtocolsListRequest = (input: GetProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultList != null && { DefaultList: input.DefaultList }),
    ...(input.ListId != null && { ListId: input.ListId }),
  };
};

/**
 * serializeAws_json1_1GetResourceSetRequest
 */
const se_GetResourceSetRequest = (input: GetResourceSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
  };
};

/**
 * serializeAws_json1_1GetThirdPartyFirewallAssociationStatusRequest
 */
const se_GetThirdPartyFirewallAssociationStatusRequest = (
  input: GetThirdPartyFirewallAssociationStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ThirdPartyFirewall != null && { ThirdPartyFirewall: input.ThirdPartyFirewall }),
  };
};

/**
 * serializeAws_json1_1GetViolationDetailsRequest
 */
const se_GetViolationDetailsRequest = (input: GetViolationDetailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MemberAccount != null && { MemberAccount: input.MemberAccount }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1IdentifierList
 */
const se_IdentifierList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListAppsListsRequest
 */
const se_ListAppsListsRequest = (input: ListAppsListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultLists != null && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListComplianceStatusRequest
 */
const se_ListComplianceStatusRequest = (input: ListComplianceStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
  };
};

/**
 * serializeAws_json1_1ListDiscoveredResourcesRequest
 */
const se_ListDiscoveredResourcesRequest = (input: ListDiscoveredResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MemberAccountIds != null && { MemberAccountIds: se_AWSAccountIdList(input.MemberAccountIds, context) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1ListMemberAccountsRequest
 */
const se_ListMemberAccountsRequest = (input: ListMemberAccountsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPoliciesRequest
 */
const se_ListPoliciesRequest = (input: ListPoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListProtocolsListsRequest
 */
const se_ListProtocolsListsRequest = (input: ListProtocolsListsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DefaultLists != null && { DefaultLists: input.DefaultLists }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceSetResourcesRequest
 */
const se_ListResourceSetResourcesRequest = (input: ListResourceSetResourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListResourceSetsRequest
 */
const se_ListResourceSetsRequest = (input: ListResourceSetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesRequest
 */
const se_ListThirdPartyFirewallFirewallPoliciesRequest = (
  input: ListThirdPartyFirewallFirewallPoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ThirdPartyFirewall != null && { ThirdPartyFirewall: input.ThirdPartyFirewall }),
  };
};

/**
 * serializeAws_json1_1NetworkFirewallPolicy
 */
const se_NetworkFirewallPolicy = (input: NetworkFirewallPolicy, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDeploymentModel != null && { FirewallDeploymentModel: input.FirewallDeploymentModel }),
  };
};

/**
 * serializeAws_json1_1Policy
 */
const se_Policy = (input: Policy, context: __SerdeContext): any => {
  return {
    ...(input.DeleteUnusedFMManagedResources != null && {
      DeleteUnusedFMManagedResources: input.DeleteUnusedFMManagedResources,
    }),
    ...(input.ExcludeMap != null && { ExcludeMap: se_CustomerPolicyScopeMap(input.ExcludeMap, context) }),
    ...(input.ExcludeResourceTags != null && { ExcludeResourceTags: input.ExcludeResourceTags }),
    ...(input.IncludeMap != null && { IncludeMap: se_CustomerPolicyScopeMap(input.IncludeMap, context) }),
    ...(input.PolicyDescription != null && { PolicyDescription: input.PolicyDescription }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyUpdateToken != null && { PolicyUpdateToken: input.PolicyUpdateToken }),
    ...(input.RemediationEnabled != null && { RemediationEnabled: input.RemediationEnabled }),
    ...(input.ResourceSetIds != null && { ResourceSetIds: se_ResourceSetIds(input.ResourceSetIds, context) }),
    ...(input.ResourceTags != null && { ResourceTags: se_ResourceTags(input.ResourceTags, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.ResourceTypeList != null && { ResourceTypeList: se_ResourceTypeList(input.ResourceTypeList, context) }),
    ...(input.SecurityServicePolicyData != null && {
      SecurityServicePolicyData: se_SecurityServicePolicyData(input.SecurityServicePolicyData, context),
    }),
  };
};

/**
 * serializeAws_json1_1PolicyOption
 */
const se_PolicyOption = (input: PolicyOption, context: __SerdeContext): any => {
  return {
    ...(input.NetworkFirewallPolicy != null && {
      NetworkFirewallPolicy: se_NetworkFirewallPolicy(input.NetworkFirewallPolicy, context),
    }),
    ...(input.ThirdPartyFirewallPolicy != null && {
      ThirdPartyFirewallPolicy: se_ThirdPartyFirewallPolicy(input.ThirdPartyFirewallPolicy, context),
    }),
  };
};

/**
 * serializeAws_json1_1PreviousAppsList
 */
const se_PreviousAppsList = (input: Record<string, App[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AppsList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1PreviousProtocolsList
 */
const se_PreviousProtocolsList = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ProtocolsList(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ProtocolsList
 */
const se_ProtocolsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ProtocolsListData
 */
const se_ProtocolsListData = (input: ProtocolsListData, context: __SerdeContext): any => {
  return {
    ...(input.CreateTime != null && { CreateTime: Math.round(input.CreateTime.getTime() / 1000) }),
    ...(input.LastUpdateTime != null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.ListId != null && { ListId: input.ListId }),
    ...(input.ListName != null && { ListName: input.ListName }),
    ...(input.ListUpdateToken != null && { ListUpdateToken: input.ListUpdateToken }),
    ...(input.PreviousProtocolsList != null && {
      PreviousProtocolsList: se_PreviousProtocolsList(input.PreviousProtocolsList, context),
    }),
    ...(input.ProtocolsList != null && { ProtocolsList: se_ProtocolsList(input.ProtocolsList, context) }),
  };
};

/**
 * serializeAws_json1_1PutAppsListRequest
 */
const se_PutAppsListRequest = (input: PutAppsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.AppsList != null && { AppsList: se_AppsListData(input.AppsList, context) }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1PutNotificationChannelRequest
 */
const se_PutNotificationChannelRequest = (input: PutNotificationChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.SnsRoleName != null && { SnsRoleName: input.SnsRoleName }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

/**
 * serializeAws_json1_1PutPolicyRequest
 */
const se_PutPolicyRequest = (input: PutPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: se_Policy(input.Policy, context) }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1PutProtocolsListRequest
 */
const se_PutProtocolsListRequest = (input: PutProtocolsListRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProtocolsList != null && { ProtocolsList: se_ProtocolsListData(input.ProtocolsList, context) }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1PutResourceSetRequest
 */
const se_PutResourceSetRequest = (input: PutResourceSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceSet != null && { ResourceSet: se_ResourceSet(input.ResourceSet, context) }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceSet
 */
const se_ResourceSet = (input: ResourceSet, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LastUpdateTime != null && { LastUpdateTime: Math.round(input.LastUpdateTime.getTime() / 1000) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourceTypeList != null && { ResourceTypeList: se_ResourceTypeList(input.ResourceTypeList, context) }),
    ...(input.UpdateToken != null && { UpdateToken: input.UpdateToken }),
  };
};

/**
 * serializeAws_json1_1ResourceSetIds
 */
const se_ResourceSetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ResourceTag
 */
const se_ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ResourceTags
 */
const se_ResourceTags = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceTag(entry, context);
    });
};

/**
 * serializeAws_json1_1ResourceTypeList
 */
const se_ResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SecurityServicePolicyData
 */
const se_SecurityServicePolicyData = (input: SecurityServicePolicyData, context: __SerdeContext): any => {
  return {
    ...(input.ManagedServiceData != null && { ManagedServiceData: input.ManagedServiceData }),
    ...(input.PolicyOption != null && { PolicyOption: se_PolicyOption(input.PolicyOption, context) }),
    ...(input.Type != null && { Type: input.Type }),
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
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagList != null && { TagList: se_TagList(input.TagList, context) }),
  };
};

/**
 * serializeAws_json1_1ThirdPartyFirewallPolicy
 */
const se_ThirdPartyFirewallPolicy = (input: ThirdPartyFirewallPolicy, context: __SerdeContext): any => {
  return {
    ...(input.FirewallDeploymentModel != null && { FirewallDeploymentModel: input.FirewallDeploymentModel }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1ActionTarget
 */
const de_ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    Description: __expectString(output.Description),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

/**
 * deserializeAws_json1_1App
 */
const de_App = (output: any, context: __SerdeContext): App => {
  return {
    AppName: __expectString(output.AppName),
    Port: __expectLong(output.Port),
    Protocol: __expectString(output.Protocol),
  } as any;
};

/**
 * deserializeAws_json1_1AppsList
 */
const de_AppsList = (output: any, context: __SerdeContext): App[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_App(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppsListData
 */
const de_AppsListData = (output: any, context: __SerdeContext): AppsListData => {
  return {
    AppsList: output.AppsList != null ? de_AppsList(output.AppsList, context) : undefined,
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ListUpdateToken: __expectString(output.ListUpdateToken),
    PreviousAppsList:
      output.PreviousAppsList != null ? de_PreviousAppsList(output.PreviousAppsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AppsListDataSummary
 */
const de_AppsListDataSummary = (output: any, context: __SerdeContext): AppsListDataSummary => {
  return {
    AppsList: output.AppsList != null ? de_AppsList(output.AppsList, context) : undefined,
    ListArn: __expectString(output.ListArn),
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
  } as any;
};

/**
 * deserializeAws_json1_1AppsListsData
 */
const de_AppsListsData = (output: any, context: __SerdeContext): AppsListDataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppsListDataSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateThirdPartyFirewallResponse
 */
const de_AssociateThirdPartyFirewallResponse = (
  output: any,
  context: __SerdeContext
): AssociateThirdPartyFirewallResponse => {
  return {
    ThirdPartyFirewallStatus: __expectString(output.ThirdPartyFirewallStatus),
  } as any;
};

/**
 * deserializeAws_json1_1AwsEc2InstanceViolation
 */
const de_AwsEc2InstanceViolation = (output: any, context: __SerdeContext): AwsEc2InstanceViolation => {
  return {
    AwsEc2NetworkInterfaceViolations:
      output.AwsEc2NetworkInterfaceViolations != null
        ? de_AwsEc2NetworkInterfaceViolations(output.AwsEc2NetworkInterfaceViolations, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1AwsEc2NetworkInterfaceViolation
 */
const de_AwsEc2NetworkInterfaceViolation = (output: any, context: __SerdeContext): AwsEc2NetworkInterfaceViolation => {
  return {
    ViolatingSecurityGroups:
      output.ViolatingSecurityGroups != null ? de_ResourceIdList(output.ViolatingSecurityGroups, context) : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1AwsEc2NetworkInterfaceViolations
 */
const de_AwsEc2NetworkInterfaceViolations = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceViolation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AwsEc2NetworkInterfaceViolation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AwsVPCSecurityGroupViolation
 */
const de_AwsVPCSecurityGroupViolation = (output: any, context: __SerdeContext): AwsVPCSecurityGroupViolation => {
  return {
    PartialMatches: output.PartialMatches != null ? de_PartialMatches(output.PartialMatches, context) : undefined,
    PossibleSecurityGroupRemediationActions:
      output.PossibleSecurityGroupRemediationActions != null
        ? de_SecurityGroupRemediationActions(output.PossibleSecurityGroupRemediationActions, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

/**
 * deserializeAws_json1_1BatchAssociateResourceResponse
 */
const de_BatchAssociateResourceResponse = (output: any, context: __SerdeContext): BatchAssociateResourceResponse => {
  return {
    FailedItems: output.FailedItems != null ? de_FailedItemList(output.FailedItems, context) : undefined,
    ResourceSetIdentifier: __expectString(output.ResourceSetIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1BatchDisassociateResourceResponse
 */
const de_BatchDisassociateResourceResponse = (
  output: any,
  context: __SerdeContext
): BatchDisassociateResourceResponse => {
  return {
    FailedItems: output.FailedItems != null ? de_FailedItemList(output.FailedItems, context) : undefined,
    ResourceSetIdentifier: __expectString(output.ResourceSetIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceViolator
 */
const de_ComplianceViolator = (output: any, context: __SerdeContext): ComplianceViolator => {
  return {
    Metadata: output.Metadata != null ? de_ComplianceViolatorMetadata(output.Metadata, context) : undefined,
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    ViolationReason: __expectString(output.ViolationReason),
  } as any;
};

/**
 * deserializeAws_json1_1ComplianceViolatorMetadata
 */
const de_ComplianceViolatorMetadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ComplianceViolators
 */
const de_ComplianceViolators = (output: any, context: __SerdeContext): ComplianceViolator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComplianceViolator(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CustomerPolicyScopeIdList
 */
const de_CustomerPolicyScopeIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1CustomerPolicyScopeMap
 */
const de_CustomerPolicyScopeMap = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string[]>, [key, value]: [CustomerPolicyScopeIdType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_CustomerPolicyScopeIdList(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1DisassociateThirdPartyFirewallResponse
 */
const de_DisassociateThirdPartyFirewallResponse = (
  output: any,
  context: __SerdeContext
): DisassociateThirdPartyFirewallResponse => {
  return {
    ThirdPartyFirewallStatus: __expectString(output.ThirdPartyFirewallStatus),
  } as any;
};

/**
 * deserializeAws_json1_1DiscoveredResource
 */
const de_DiscoveredResource = (output: any, context: __SerdeContext): DiscoveredResource => {
  return {
    AccountId: __expectString(output.AccountId),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_json1_1DiscoveredResourceList
 */
const de_DiscoveredResourceList = (output: any, context: __SerdeContext): DiscoveredResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DiscoveredResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DnsDuplicateRuleGroupViolation
 */
const de_DnsDuplicateRuleGroupViolation = (output: any, context: __SerdeContext): DnsDuplicateRuleGroupViolation => {
  return {
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

/**
 * deserializeAws_json1_1DnsRuleGroupLimitExceededViolation
 */
const de_DnsRuleGroupLimitExceededViolation = (
  output: any,
  context: __SerdeContext
): DnsRuleGroupLimitExceededViolation => {
  return {
    NumberOfRuleGroupsAlreadyAssociated: __expectInt32(output.NumberOfRuleGroupsAlreadyAssociated),
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

/**
 * deserializeAws_json1_1DnsRuleGroupPriorities
 */
const de_DnsRuleGroupPriorities = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DnsRuleGroupPriorityConflictViolation
 */
const de_DnsRuleGroupPriorityConflictViolation = (
  output: any,
  context: __SerdeContext
): DnsRuleGroupPriorityConflictViolation => {
  return {
    ConflictingPolicyId: __expectString(output.ConflictingPolicyId),
    ConflictingPriority: __expectInt32(output.ConflictingPriority),
    UnavailablePriorities:
      output.UnavailablePriorities != null
        ? de_DnsRuleGroupPriorities(output.UnavailablePriorities, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    ViolationTargetDescription: __expectString(output.ViolationTargetDescription),
  } as any;
};

/**
 * deserializeAws_json1_1EC2AssociateRouteTableAction
 */
const de_EC2AssociateRouteTableAction = (output: any, context: __SerdeContext): EC2AssociateRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    GatewayId: output.GatewayId != null ? de_ActionTarget(output.GatewayId, context) : undefined,
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
    SubnetId: output.SubnetId != null ? de_ActionTarget(output.SubnetId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2CopyRouteTableAction
 */
const de_EC2CopyRouteTableAction = (output: any, context: __SerdeContext): EC2CopyRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
    VpcId: output.VpcId != null ? de_ActionTarget(output.VpcId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2CreateRouteAction
 */
const de_EC2CreateRouteAction = (output: any, context: __SerdeContext): EC2CreateRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    GatewayId: output.GatewayId != null ? de_ActionTarget(output.GatewayId, context) : undefined,
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
    VpcEndpointId: output.VpcEndpointId != null ? de_ActionTarget(output.VpcEndpointId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2CreateRouteTableAction
 */
const de_EC2CreateRouteTableAction = (output: any, context: __SerdeContext): EC2CreateRouteTableAction => {
  return {
    Description: __expectString(output.Description),
    VpcId: output.VpcId != null ? de_ActionTarget(output.VpcId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2DeleteRouteAction
 */
const de_EC2DeleteRouteAction = (output: any, context: __SerdeContext): EC2DeleteRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2ReplaceRouteAction
 */
const de_EC2ReplaceRouteAction = (output: any, context: __SerdeContext): EC2ReplaceRouteAction => {
  return {
    Description: __expectString(output.Description),
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    DestinationIpv6CidrBlock: __expectString(output.DestinationIpv6CidrBlock),
    DestinationPrefixListId: __expectString(output.DestinationPrefixListId),
    GatewayId: output.GatewayId != null ? de_ActionTarget(output.GatewayId, context) : undefined,
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EC2ReplaceRouteTableAssociationAction
 */
const de_EC2ReplaceRouteTableAssociationAction = (
  output: any,
  context: __SerdeContext
): EC2ReplaceRouteTableAssociationAction => {
  return {
    AssociationId: output.AssociationId != null ? de_ActionTarget(output.AssociationId, context) : undefined,
    Description: __expectString(output.Description),
    RouteTableId: output.RouteTableId != null ? de_ActionTarget(output.RouteTableId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    ComplianceStatus: __expectString(output.ComplianceStatus),
    EvaluationLimitExceeded: __expectBoolean(output.EvaluationLimitExceeded),
    ViolatorCount: __expectLong(output.ViolatorCount),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResults
 */
const de_EvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExpectedRoute
 */
const de_ExpectedRoute = (output: any, context: __SerdeContext): ExpectedRoute => {
  return {
    AllowedTargets:
      output.AllowedTargets != null ? de_LengthBoundedStringList(output.AllowedTargets, context) : undefined,
    ContributingSubnets:
      output.ContributingSubnets != null ? de_ResourceIdList(output.ContributingSubnets, context) : undefined,
    IpV4Cidr: __expectString(output.IpV4Cidr),
    IpV6Cidr: __expectString(output.IpV6Cidr),
    PrefixListId: __expectString(output.PrefixListId),
    RouteTableId: __expectString(output.RouteTableId),
  } as any;
};

/**
 * deserializeAws_json1_1ExpectedRoutes
 */
const de_ExpectedRoutes = (output: any, context: __SerdeContext): ExpectedRoute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExpectedRoute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailedItem
 */
const de_FailedItem = (output: any, context: __SerdeContext): FailedItem => {
  return {
    Reason: __expectString(output.Reason),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_json1_1FailedItemList
 */
const de_FailedItemList = (output: any, context: __SerdeContext): FailedItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FirewallSubnetIsOutOfScopeViolation
 */
const de_FirewallSubnetIsOutOfScopeViolation = (
  output: any,
  context: __SerdeContext
): FirewallSubnetIsOutOfScopeViolation => {
  return {
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetAvailabilityZoneId: __expectString(output.SubnetAvailabilityZoneId),
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1FirewallSubnetMissingVPCEndpointViolation
 */
const de_FirewallSubnetMissingVPCEndpointViolation = (
  output: any,
  context: __SerdeContext
): FirewallSubnetMissingVPCEndpointViolation => {
  return {
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetAvailabilityZoneId: __expectString(output.SubnetAvailabilityZoneId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1FMSPolicyUpdateFirewallCreationConfigAction
 */
const de_FMSPolicyUpdateFirewallCreationConfigAction = (
  output: any,
  context: __SerdeContext
): FMSPolicyUpdateFirewallCreationConfigAction => {
  return {
    Description: __expectString(output.Description),
    FirewallCreationConfig: __expectString(output.FirewallCreationConfig),
  } as any;
};

/**
 * deserializeAws_json1_1GetAdminAccountResponse
 */
const de_GetAdminAccountResponse = (output: any, context: __SerdeContext): GetAdminAccountResponse => {
  return {
    AdminAccount: __expectString(output.AdminAccount),
    RoleStatus: __expectString(output.RoleStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetAppsListResponse
 */
const de_GetAppsListResponse = (output: any, context: __SerdeContext): GetAppsListResponse => {
  return {
    AppsList: output.AppsList != null ? de_AppsListData(output.AppsList, context) : undefined,
    AppsListArn: __expectString(output.AppsListArn),
  } as any;
};

/**
 * deserializeAws_json1_1GetComplianceDetailResponse
 */
const de_GetComplianceDetailResponse = (output: any, context: __SerdeContext): GetComplianceDetailResponse => {
  return {
    PolicyComplianceDetail:
      output.PolicyComplianceDetail != null
        ? de_PolicyComplianceDetail(output.PolicyComplianceDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNotificationChannelResponse
 */
const de_GetNotificationChannelResponse = (output: any, context: __SerdeContext): GetNotificationChannelResponse => {
  return {
    SnsRoleName: __expectString(output.SnsRoleName),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

/**
 * deserializeAws_json1_1GetPolicyResponse
 */
const de_GetPolicyResponse = (output: any, context: __SerdeContext): GetPolicyResponse => {
  return {
    Policy: output.Policy != null ? de_Policy(output.Policy, context) : undefined,
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

/**
 * deserializeAws_json1_1GetProtectionStatusResponse
 */
const de_GetProtectionStatusResponse = (output: any, context: __SerdeContext): GetProtectionStatusResponse => {
  return {
    AdminAccountId: __expectString(output.AdminAccountId),
    Data: __expectString(output.Data),
    NextToken: __expectString(output.NextToken),
    ServiceType: __expectString(output.ServiceType),
  } as any;
};

/**
 * deserializeAws_json1_1GetProtocolsListResponse
 */
const de_GetProtocolsListResponse = (output: any, context: __SerdeContext): GetProtocolsListResponse => {
  return {
    ProtocolsList: output.ProtocolsList != null ? de_ProtocolsListData(output.ProtocolsList, context) : undefined,
    ProtocolsListArn: __expectString(output.ProtocolsListArn),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourceSetResponse
 */
const de_GetResourceSetResponse = (output: any, context: __SerdeContext): GetResourceSetResponse => {
  return {
    ResourceSet: output.ResourceSet != null ? de_ResourceSet(output.ResourceSet, context) : undefined,
    ResourceSetArn: __expectString(output.ResourceSetArn),
  } as any;
};

/**
 * deserializeAws_json1_1GetThirdPartyFirewallAssociationStatusResponse
 */
const de_GetThirdPartyFirewallAssociationStatusResponse = (
  output: any,
  context: __SerdeContext
): GetThirdPartyFirewallAssociationStatusResponse => {
  return {
    MarketplaceOnboardingStatus: __expectString(output.MarketplaceOnboardingStatus),
    ThirdPartyFirewallStatus: __expectString(output.ThirdPartyFirewallStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetViolationDetailsResponse
 */
const de_GetViolationDetailsResponse = (output: any, context: __SerdeContext): GetViolationDetailsResponse => {
  return {
    ViolationDetail: output.ViolationDetail != null ? de_ViolationDetail(output.ViolationDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTypeException
 */
const de_InvalidTypeException = (output: any, context: __SerdeContext): InvalidTypeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IssueInfoMap
 */
const de_IssueInfoMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [DependentServiceName | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1LengthBoundedStringList
 */
const de_LengthBoundedStringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListAppsListsResponse
 */
const de_ListAppsListsResponse = (output: any, context: __SerdeContext): ListAppsListsResponse => {
  return {
    AppsLists: output.AppsLists != null ? de_AppsListsData(output.AppsLists, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListComplianceStatusResponse
 */
const de_ListComplianceStatusResponse = (output: any, context: __SerdeContext): ListComplianceStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PolicyComplianceStatusList:
      output.PolicyComplianceStatusList != null
        ? de_PolicyComplianceStatusList(output.PolicyComplianceStatusList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListDiscoveredResourcesResponse
 */
const de_ListDiscoveredResourcesResponse = (output: any, context: __SerdeContext): ListDiscoveredResourcesResponse => {
  return {
    Items: output.Items != null ? de_DiscoveredResourceList(output.Items, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMemberAccountsResponse
 */
const de_ListMemberAccountsResponse = (output: any, context: __SerdeContext): ListMemberAccountsResponse => {
  return {
    MemberAccounts: output.MemberAccounts != null ? de_MemberAccounts(output.MemberAccounts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPoliciesResponse
 */
const de_ListPoliciesResponse = (output: any, context: __SerdeContext): ListPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PolicyList: output.PolicyList != null ? de_PolicySummaryList(output.PolicyList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProtocolsListsResponse
 */
const de_ListProtocolsListsResponse = (output: any, context: __SerdeContext): ListProtocolsListsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ProtocolsLists: output.ProtocolsLists != null ? de_ProtocolsListsData(output.ProtocolsLists, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceSetResourcesResponse
 */
const de_ListResourceSetResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListResourceSetResourcesResponse => {
  return {
    Items: output.Items != null ? de_ResourceList(output.Items, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListResourceSetsResponse
 */
const de_ListResourceSetsResponse = (output: any, context: __SerdeContext): ListResourceSetsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceSets: output.ResourceSets != null ? de_ResourceSetSummaryList(output.ResourceSets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListThirdPartyFirewallFirewallPoliciesResponse
 */
const de_ListThirdPartyFirewallFirewallPoliciesResponse = (
  output: any,
  context: __SerdeContext
): ListThirdPartyFirewallFirewallPoliciesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ThirdPartyFirewallFirewallPolicies:
      output.ThirdPartyFirewallFirewallPolicies != null
        ? de_ThirdPartyFirewallFirewallPolicies(output.ThirdPartyFirewallFirewallPolicies, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MemberAccounts
 */
const de_MemberAccounts = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NetworkFirewallActionList
 */
const de_NetworkFirewallActionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1NetworkFirewallBlackHoleRouteDetectedViolation
 */
const de_NetworkFirewallBlackHoleRouteDetectedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallBlackHoleRouteDetectedViolation => {
  return {
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes: output.ViolatingRoutes != null ? de_Routes(output.ViolatingRoutes, context) : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallInternetTrafficNotInspectedViolation
 */
const de_NetworkFirewallInternetTrafficNotInspectedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallInternetTrafficNotInspectedViolation => {
  return {
    ActualFirewallSubnetRoutes:
      output.ActualFirewallSubnetRoutes != null ? de_Routes(output.ActualFirewallSubnetRoutes, context) : undefined,
    ActualInternetGatewayRoutes:
      output.ActualInternetGatewayRoutes != null ? de_Routes(output.ActualInternetGatewayRoutes, context) : undefined,
    CurrentFirewallSubnetRouteTable: __expectString(output.CurrentFirewallSubnetRouteTable),
    CurrentInternetGatewayRouteTable: __expectString(output.CurrentInternetGatewayRouteTable),
    ExpectedFirewallEndpoint: __expectString(output.ExpectedFirewallEndpoint),
    ExpectedFirewallSubnetRoutes:
      output.ExpectedFirewallSubnetRoutes != null
        ? de_ExpectedRoutes(output.ExpectedFirewallSubnetRoutes, context)
        : undefined,
    ExpectedInternetGatewayRoutes:
      output.ExpectedInternetGatewayRoutes != null
        ? de_ExpectedRoutes(output.ExpectedInternetGatewayRoutes, context)
        : undefined,
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    InternetGatewayId: __expectString(output.InternetGatewayId),
    IsRouteTableUsedInDifferentAZ: __expectBoolean(output.IsRouteTableUsedInDifferentAZ),
    RouteTableId: __expectString(output.RouteTableId),
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetId: __expectString(output.SubnetId),
    ViolatingRoutes: output.ViolatingRoutes != null ? de_Routes(output.ViolatingRoutes, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallInvalidRouteConfigurationViolation
 */
const de_NetworkFirewallInvalidRouteConfigurationViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallInvalidRouteConfigurationViolation => {
  return {
    ActualFirewallEndpoint: __expectString(output.ActualFirewallEndpoint),
    ActualFirewallSubnetId: __expectString(output.ActualFirewallSubnetId),
    ActualFirewallSubnetRoutes:
      output.ActualFirewallSubnetRoutes != null ? de_Routes(output.ActualFirewallSubnetRoutes, context) : undefined,
    ActualInternetGatewayRoutes:
      output.ActualInternetGatewayRoutes != null ? de_Routes(output.ActualInternetGatewayRoutes, context) : undefined,
    AffectedSubnets: output.AffectedSubnets != null ? de_ResourceIdList(output.AffectedSubnets, context) : undefined,
    CurrentFirewallSubnetRouteTable: __expectString(output.CurrentFirewallSubnetRouteTable),
    CurrentInternetGatewayRouteTable: __expectString(output.CurrentInternetGatewayRouteTable),
    ExpectedFirewallEndpoint: __expectString(output.ExpectedFirewallEndpoint),
    ExpectedFirewallSubnetId: __expectString(output.ExpectedFirewallSubnetId),
    ExpectedFirewallSubnetRoutes:
      output.ExpectedFirewallSubnetRoutes != null
        ? de_ExpectedRoutes(output.ExpectedFirewallSubnetRoutes, context)
        : undefined,
    ExpectedInternetGatewayRoutes:
      output.ExpectedInternetGatewayRoutes != null
        ? de_ExpectedRoutes(output.ExpectedInternetGatewayRoutes, context)
        : undefined,
    InternetGatewayId: __expectString(output.InternetGatewayId),
    IsRouteTableUsedInDifferentAZ: __expectBoolean(output.IsRouteTableUsedInDifferentAZ),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoute: output.ViolatingRoute != null ? de_Route(output.ViolatingRoute, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallMissingExpectedRoutesViolation
 */
const de_NetworkFirewallMissingExpectedRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingExpectedRoutesViolation => {
  return {
    ExpectedRoutes: output.ExpectedRoutes != null ? de_ExpectedRoutes(output.ExpectedRoutes, context) : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallMissingExpectedRTViolation
 */
const de_NetworkFirewallMissingExpectedRTViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingExpectedRTViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CurrentRouteTable: __expectString(output.CurrentRouteTable),
    ExpectedRouteTable: __expectString(output.ExpectedRouteTable),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallMissingFirewallViolation
 */
const de_NetworkFirewallMissingFirewallViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingFirewallViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallMissingSubnetViolation
 */
const de_NetworkFirewallMissingSubnetViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallMissingSubnetViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallPolicy
 */
const de_NetworkFirewallPolicy = (output: any, context: __SerdeContext): NetworkFirewallPolicy => {
  return {
    FirewallDeploymentModel: __expectString(output.FirewallDeploymentModel),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallPolicyDescription
 */
const de_NetworkFirewallPolicyDescription = (
  output: any,
  context: __SerdeContext
): NetworkFirewallPolicyDescription => {
  return {
    StatefulDefaultActions:
      output.StatefulDefaultActions != null
        ? de_NetworkFirewallActionList(output.StatefulDefaultActions, context)
        : undefined,
    StatefulEngineOptions:
      output.StatefulEngineOptions != null
        ? de_StatefulEngineOptions(output.StatefulEngineOptions, context)
        : undefined,
    StatefulRuleGroups:
      output.StatefulRuleGroups != null ? de_StatefulRuleGroupList(output.StatefulRuleGroups, context) : undefined,
    StatelessCustomActions:
      output.StatelessCustomActions != null
        ? de_NetworkFirewallActionList(output.StatelessCustomActions, context)
        : undefined,
    StatelessDefaultActions:
      output.StatelessDefaultActions != null
        ? de_NetworkFirewallActionList(output.StatelessDefaultActions, context)
        : undefined,
    StatelessFragmentDefaultActions:
      output.StatelessFragmentDefaultActions != null
        ? de_NetworkFirewallActionList(output.StatelessFragmentDefaultActions, context)
        : undefined,
    StatelessRuleGroups:
      output.StatelessRuleGroups != null ? de_StatelessRuleGroupList(output.StatelessRuleGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallPolicyModifiedViolation
 */
const de_NetworkFirewallPolicyModifiedViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallPolicyModifiedViolation => {
  return {
    CurrentPolicyDescription:
      output.CurrentPolicyDescription != null
        ? de_NetworkFirewallPolicyDescription(output.CurrentPolicyDescription, context)
        : undefined,
    ExpectedPolicyDescription:
      output.ExpectedPolicyDescription != null
        ? de_NetworkFirewallPolicyDescription(output.ExpectedPolicyDescription, context)
        : undefined,
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallStatefulRuleGroupOverride
 */
const de_NetworkFirewallStatefulRuleGroupOverride = (
  output: any,
  context: __SerdeContext
): NetworkFirewallStatefulRuleGroupOverride => {
  return {
    Action: __expectString(output.Action),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallUnexpectedFirewallRoutesViolation
 */
const de_NetworkFirewallUnexpectedFirewallRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallUnexpectedFirewallRoutesViolation => {
  return {
    FirewallEndpoint: __expectString(output.FirewallEndpoint),
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes: output.ViolatingRoutes != null ? de_Routes(output.ViolatingRoutes, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkFirewallUnexpectedGatewayRoutesViolation
 */
const de_NetworkFirewallUnexpectedGatewayRoutesViolation = (
  output: any,
  context: __SerdeContext
): NetworkFirewallUnexpectedGatewayRoutesViolation => {
  return {
    GatewayId: __expectString(output.GatewayId),
    RouteTableId: __expectString(output.RouteTableId),
    ViolatingRoutes: output.ViolatingRoutes != null ? de_Routes(output.ViolatingRoutes, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1OrderedRemediationActions
 */
const de_OrderedRemediationActions = (output: any, context: __SerdeContext): RemediationActionWithOrder[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemediationActionWithOrder(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PartialMatch
 */
const de_PartialMatch = (output: any, context: __SerdeContext): PartialMatch => {
  return {
    Reference: __expectString(output.Reference),
    TargetViolationReasons:
      output.TargetViolationReasons != null
        ? de_TargetViolationReasons(output.TargetViolationReasons, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PartialMatches
 */
const de_PartialMatches = (output: any, context: __SerdeContext): PartialMatch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartialMatch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Policy
 */
const de_Policy = (output: any, context: __SerdeContext): Policy => {
  return {
    DeleteUnusedFMManagedResources: __expectBoolean(output.DeleteUnusedFMManagedResources),
    ExcludeMap: output.ExcludeMap != null ? de_CustomerPolicyScopeMap(output.ExcludeMap, context) : undefined,
    ExcludeResourceTags: __expectBoolean(output.ExcludeResourceTags),
    IncludeMap: output.IncludeMap != null ? de_CustomerPolicyScopeMap(output.IncludeMap, context) : undefined,
    PolicyDescription: __expectString(output.PolicyDescription),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyUpdateToken: __expectString(output.PolicyUpdateToken),
    RemediationEnabled: __expectBoolean(output.RemediationEnabled),
    ResourceSetIds: output.ResourceSetIds != null ? de_ResourceSetIds(output.ResourceSetIds, context) : undefined,
    ResourceTags: output.ResourceTags != null ? de_ResourceTags(output.ResourceTags, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
    ResourceTypeList:
      output.ResourceTypeList != null ? de_ResourceTypeList(output.ResourceTypeList, context) : undefined,
    SecurityServicePolicyData:
      output.SecurityServicePolicyData != null
        ? de_SecurityServicePolicyData(output.SecurityServicePolicyData, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PolicyComplianceDetail
 */
const de_PolicyComplianceDetail = (output: any, context: __SerdeContext): PolicyComplianceDetail => {
  return {
    EvaluationLimitExceeded: __expectBoolean(output.EvaluationLimitExceeded),
    ExpiredAt:
      output.ExpiredAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpiredAt))) : undefined,
    IssueInfoMap: output.IssueInfoMap != null ? de_IssueInfoMap(output.IssueInfoMap, context) : undefined,
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    PolicyOwner: __expectString(output.PolicyOwner),
    Violators: output.Violators != null ? de_ComplianceViolators(output.Violators, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PolicyComplianceStatus
 */
const de_PolicyComplianceStatus = (output: any, context: __SerdeContext): PolicyComplianceStatus => {
  return {
    EvaluationResults:
      output.EvaluationResults != null ? de_EvaluationResults(output.EvaluationResults, context) : undefined,
    IssueInfoMap: output.IssueInfoMap != null ? de_IssueInfoMap(output.IssueInfoMap, context) : undefined,
    LastUpdated:
      output.LastUpdated != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdated)))
        : undefined,
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyOwner: __expectString(output.PolicyOwner),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyComplianceStatusList
 */
const de_PolicyComplianceStatusList = (output: any, context: __SerdeContext): PolicyComplianceStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicyComplianceStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PolicyOption
 */
const de_PolicyOption = (output: any, context: __SerdeContext): PolicyOption => {
  return {
    NetworkFirewallPolicy:
      output.NetworkFirewallPolicy != null
        ? de_NetworkFirewallPolicy(output.NetworkFirewallPolicy, context)
        : undefined,
    ThirdPartyFirewallPolicy:
      output.ThirdPartyFirewallPolicy != null
        ? de_ThirdPartyFirewallPolicy(output.ThirdPartyFirewallPolicy, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PolicySummary
 */
const de_PolicySummary = (output: any, context: __SerdeContext): PolicySummary => {
  return {
    DeleteUnusedFMManagedResources: __expectBoolean(output.DeleteUnusedFMManagedResources),
    PolicyArn: __expectString(output.PolicyArn),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    RemediationEnabled: __expectBoolean(output.RemediationEnabled),
    ResourceType: __expectString(output.ResourceType),
    SecurityServiceType: __expectString(output.SecurityServiceType),
  } as any;
};

/**
 * deserializeAws_json1_1PolicySummaryList
 */
const de_PolicySummaryList = (output: any, context: __SerdeContext): PolicySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PolicySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PossibleRemediationAction
 */
const de_PossibleRemediationAction = (output: any, context: __SerdeContext): PossibleRemediationAction => {
  return {
    Description: __expectString(output.Description),
    IsDefaultAction: __expectBoolean(output.IsDefaultAction),
    OrderedRemediationActions:
      output.OrderedRemediationActions != null
        ? de_OrderedRemediationActions(output.OrderedRemediationActions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PossibleRemediationActionList
 */
const de_PossibleRemediationActionList = (output: any, context: __SerdeContext): PossibleRemediationAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PossibleRemediationAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PossibleRemediationActions
 */
const de_PossibleRemediationActions = (output: any, context: __SerdeContext): PossibleRemediationActions => {
  return {
    Actions: output.Actions != null ? de_PossibleRemediationActionList(output.Actions, context) : undefined,
    Description: __expectString(output.Description),
  } as any;
};

/**
 * deserializeAws_json1_1PreviousAppsList
 */
const de_PreviousAppsList = (output: any, context: __SerdeContext): Record<string, App[]> => {
  return Object.entries(output).reduce((acc: Record<string, App[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AppsList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PreviousProtocolsList
 */
const de_PreviousProtocolsList = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ProtocolsList(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ProtocolsList
 */
const de_ProtocolsList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ProtocolsListData
 */
const de_ProtocolsListData = (output: any, context: __SerdeContext): ProtocolsListData => {
  return {
    CreateTime:
      output.CreateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTime))) : undefined,
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ListUpdateToken: __expectString(output.ListUpdateToken),
    PreviousProtocolsList:
      output.PreviousProtocolsList != null
        ? de_PreviousProtocolsList(output.PreviousProtocolsList, context)
        : undefined,
    ProtocolsList: output.ProtocolsList != null ? de_ProtocolsList(output.ProtocolsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProtocolsListDataSummary
 */
const de_ProtocolsListDataSummary = (output: any, context: __SerdeContext): ProtocolsListDataSummary => {
  return {
    ListArn: __expectString(output.ListArn),
    ListId: __expectString(output.ListId),
    ListName: __expectString(output.ListName),
    ProtocolsList: output.ProtocolsList != null ? de_ProtocolsList(output.ProtocolsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProtocolsListsData
 */
const de_ProtocolsListsData = (output: any, context: __SerdeContext): ProtocolsListDataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtocolsListDataSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutAppsListResponse
 */
const de_PutAppsListResponse = (output: any, context: __SerdeContext): PutAppsListResponse => {
  return {
    AppsList: output.AppsList != null ? de_AppsListData(output.AppsList, context) : undefined,
    AppsListArn: __expectString(output.AppsListArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutPolicyResponse
 */
const de_PutPolicyResponse = (output: any, context: __SerdeContext): PutPolicyResponse => {
  return {
    Policy: output.Policy != null ? de_Policy(output.Policy, context) : undefined,
    PolicyArn: __expectString(output.PolicyArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutProtocolsListResponse
 */
const de_PutProtocolsListResponse = (output: any, context: __SerdeContext): PutProtocolsListResponse => {
  return {
    ProtocolsList: output.ProtocolsList != null ? de_ProtocolsListData(output.ProtocolsList, context) : undefined,
    ProtocolsListArn: __expectString(output.ProtocolsListArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourceSetResponse
 */
const de_PutResourceSetResponse = (output: any, context: __SerdeContext): PutResourceSetResponse => {
  return {
    ResourceSet: output.ResourceSet != null ? de_ResourceSet(output.ResourceSet, context) : undefined,
    ResourceSetArn: __expectString(output.ResourceSetArn),
  } as any;
};

/**
 * deserializeAws_json1_1RemediationAction
 */
const de_RemediationAction = (output: any, context: __SerdeContext): RemediationAction => {
  return {
    Description: __expectString(output.Description),
    EC2AssociateRouteTableAction:
      output.EC2AssociateRouteTableAction != null
        ? de_EC2AssociateRouteTableAction(output.EC2AssociateRouteTableAction, context)
        : undefined,
    EC2CopyRouteTableAction:
      output.EC2CopyRouteTableAction != null
        ? de_EC2CopyRouteTableAction(output.EC2CopyRouteTableAction, context)
        : undefined,
    EC2CreateRouteAction:
      output.EC2CreateRouteAction != null ? de_EC2CreateRouteAction(output.EC2CreateRouteAction, context) : undefined,
    EC2CreateRouteTableAction:
      output.EC2CreateRouteTableAction != null
        ? de_EC2CreateRouteTableAction(output.EC2CreateRouteTableAction, context)
        : undefined,
    EC2DeleteRouteAction:
      output.EC2DeleteRouteAction != null ? de_EC2DeleteRouteAction(output.EC2DeleteRouteAction, context) : undefined,
    EC2ReplaceRouteAction:
      output.EC2ReplaceRouteAction != null
        ? de_EC2ReplaceRouteAction(output.EC2ReplaceRouteAction, context)
        : undefined,
    EC2ReplaceRouteTableAssociationAction:
      output.EC2ReplaceRouteTableAssociationAction != null
        ? de_EC2ReplaceRouteTableAssociationAction(output.EC2ReplaceRouteTableAssociationAction, context)
        : undefined,
    FMSPolicyUpdateFirewallCreationConfigAction:
      output.FMSPolicyUpdateFirewallCreationConfigAction != null
        ? de_FMSPolicyUpdateFirewallCreationConfigAction(output.FMSPolicyUpdateFirewallCreationConfigAction, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RemediationActionWithOrder
 */
const de_RemediationActionWithOrder = (output: any, context: __SerdeContext): RemediationActionWithOrder => {
  return {
    Order: __expectInt32(output.Order),
    RemediationAction:
      output.RemediationAction != null ? de_RemediationAction(output.RemediationAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    AccountId: __expectString(output.AccountId),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceIdList
 */
const de_ResourceIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
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
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceSet
 */
const de_ResourceSet = (output: any, context: __SerdeContext): ResourceSet => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Name: __expectString(output.Name),
    ResourceTypeList:
      output.ResourceTypeList != null ? de_ResourceTypeList(output.ResourceTypeList, context) : undefined,
    UpdateToken: __expectString(output.UpdateToken),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceSetIds
 */
const de_ResourceSetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResourceSetSummary
 */
const de_ResourceSetSummary = (output: any, context: __SerdeContext): ResourceSetSummary => {
  return {
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceSetSummaryList
 */
const de_ResourceSetSummaryList = (output: any, context: __SerdeContext): ResourceSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceTag
 */
const de_ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTags
 */
const de_ResourceTags = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceTypeList
 */
const de_ResourceTypeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ResourceViolation
 */
const de_ResourceViolation = (output: any, context: __SerdeContext): ResourceViolation => {
  return {
    AwsEc2InstanceViolation:
      output.AwsEc2InstanceViolation != null
        ? de_AwsEc2InstanceViolation(output.AwsEc2InstanceViolation, context)
        : undefined,
    AwsEc2NetworkInterfaceViolation:
      output.AwsEc2NetworkInterfaceViolation != null
        ? de_AwsEc2NetworkInterfaceViolation(output.AwsEc2NetworkInterfaceViolation, context)
        : undefined,
    AwsVPCSecurityGroupViolation:
      output.AwsVPCSecurityGroupViolation != null
        ? de_AwsVPCSecurityGroupViolation(output.AwsVPCSecurityGroupViolation, context)
        : undefined,
    DnsDuplicateRuleGroupViolation:
      output.DnsDuplicateRuleGroupViolation != null
        ? de_DnsDuplicateRuleGroupViolation(output.DnsDuplicateRuleGroupViolation, context)
        : undefined,
    DnsRuleGroupLimitExceededViolation:
      output.DnsRuleGroupLimitExceededViolation != null
        ? de_DnsRuleGroupLimitExceededViolation(output.DnsRuleGroupLimitExceededViolation, context)
        : undefined,
    DnsRuleGroupPriorityConflictViolation:
      output.DnsRuleGroupPriorityConflictViolation != null
        ? de_DnsRuleGroupPriorityConflictViolation(output.DnsRuleGroupPriorityConflictViolation, context)
        : undefined,
    FirewallSubnetIsOutOfScopeViolation:
      output.FirewallSubnetIsOutOfScopeViolation != null
        ? de_FirewallSubnetIsOutOfScopeViolation(output.FirewallSubnetIsOutOfScopeViolation, context)
        : undefined,
    FirewallSubnetMissingVPCEndpointViolation:
      output.FirewallSubnetMissingVPCEndpointViolation != null
        ? de_FirewallSubnetMissingVPCEndpointViolation(output.FirewallSubnetMissingVPCEndpointViolation, context)
        : undefined,
    NetworkFirewallBlackHoleRouteDetectedViolation:
      output.NetworkFirewallBlackHoleRouteDetectedViolation != null
        ? de_NetworkFirewallBlackHoleRouteDetectedViolation(
            output.NetworkFirewallBlackHoleRouteDetectedViolation,
            context
          )
        : undefined,
    NetworkFirewallInternetTrafficNotInspectedViolation:
      output.NetworkFirewallInternetTrafficNotInspectedViolation != null
        ? de_NetworkFirewallInternetTrafficNotInspectedViolation(
            output.NetworkFirewallInternetTrafficNotInspectedViolation,
            context
          )
        : undefined,
    NetworkFirewallInvalidRouteConfigurationViolation:
      output.NetworkFirewallInvalidRouteConfigurationViolation != null
        ? de_NetworkFirewallInvalidRouteConfigurationViolation(
            output.NetworkFirewallInvalidRouteConfigurationViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingExpectedRTViolation:
      output.NetworkFirewallMissingExpectedRTViolation != null
        ? de_NetworkFirewallMissingExpectedRTViolation(output.NetworkFirewallMissingExpectedRTViolation, context)
        : undefined,
    NetworkFirewallMissingExpectedRoutesViolation:
      output.NetworkFirewallMissingExpectedRoutesViolation != null
        ? de_NetworkFirewallMissingExpectedRoutesViolation(
            output.NetworkFirewallMissingExpectedRoutesViolation,
            context
          )
        : undefined,
    NetworkFirewallMissingFirewallViolation:
      output.NetworkFirewallMissingFirewallViolation != null
        ? de_NetworkFirewallMissingFirewallViolation(output.NetworkFirewallMissingFirewallViolation, context)
        : undefined,
    NetworkFirewallMissingSubnetViolation:
      output.NetworkFirewallMissingSubnetViolation != null
        ? de_NetworkFirewallMissingSubnetViolation(output.NetworkFirewallMissingSubnetViolation, context)
        : undefined,
    NetworkFirewallPolicyModifiedViolation:
      output.NetworkFirewallPolicyModifiedViolation != null
        ? de_NetworkFirewallPolicyModifiedViolation(output.NetworkFirewallPolicyModifiedViolation, context)
        : undefined,
    NetworkFirewallUnexpectedFirewallRoutesViolation:
      output.NetworkFirewallUnexpectedFirewallRoutesViolation != null
        ? de_NetworkFirewallUnexpectedFirewallRoutesViolation(
            output.NetworkFirewallUnexpectedFirewallRoutesViolation,
            context
          )
        : undefined,
    NetworkFirewallUnexpectedGatewayRoutesViolation:
      output.NetworkFirewallUnexpectedGatewayRoutesViolation != null
        ? de_NetworkFirewallUnexpectedGatewayRoutesViolation(
            output.NetworkFirewallUnexpectedGatewayRoutesViolation,
            context
          )
        : undefined,
    PossibleRemediationActions:
      output.PossibleRemediationActions != null
        ? de_PossibleRemediationActions(output.PossibleRemediationActions, context)
        : undefined,
    RouteHasOutOfScopeEndpointViolation:
      output.RouteHasOutOfScopeEndpointViolation != null
        ? de_RouteHasOutOfScopeEndpointViolation(output.RouteHasOutOfScopeEndpointViolation, context)
        : undefined,
    ThirdPartyFirewallMissingExpectedRouteTableViolation:
      output.ThirdPartyFirewallMissingExpectedRouteTableViolation != null
        ? de_ThirdPartyFirewallMissingExpectedRouteTableViolation(
            output.ThirdPartyFirewallMissingExpectedRouteTableViolation,
            context
          )
        : undefined,
    ThirdPartyFirewallMissingFirewallViolation:
      output.ThirdPartyFirewallMissingFirewallViolation != null
        ? de_ThirdPartyFirewallMissingFirewallViolation(output.ThirdPartyFirewallMissingFirewallViolation, context)
        : undefined,
    ThirdPartyFirewallMissingSubnetViolation:
      output.ThirdPartyFirewallMissingSubnetViolation != null
        ? de_ThirdPartyFirewallMissingSubnetViolation(output.ThirdPartyFirewallMissingSubnetViolation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceViolations
 */
const de_ResourceViolations = (output: any, context: __SerdeContext): ResourceViolation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceViolation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Route
 */
const de_Route = (output: any, context: __SerdeContext): Route => {
  return {
    Destination: __expectString(output.Destination),
    DestinationType: __expectString(output.DestinationType),
    Target: __expectString(output.Target),
    TargetType: __expectString(output.TargetType),
  } as any;
};

/**
 * deserializeAws_json1_1RouteHasOutOfScopeEndpointViolation
 */
const de_RouteHasOutOfScopeEndpointViolation = (
  output: any,
  context: __SerdeContext
): RouteHasOutOfScopeEndpointViolation => {
  return {
    CurrentFirewallSubnetRouteTable: __expectString(output.CurrentFirewallSubnetRouteTable),
    CurrentInternetGatewayRouteTable: __expectString(output.CurrentInternetGatewayRouteTable),
    FirewallSubnetId: __expectString(output.FirewallSubnetId),
    FirewallSubnetRoutes:
      output.FirewallSubnetRoutes != null ? de_Routes(output.FirewallSubnetRoutes, context) : undefined,
    InternetGatewayId: __expectString(output.InternetGatewayId),
    InternetGatewayRoutes:
      output.InternetGatewayRoutes != null ? de_Routes(output.InternetGatewayRoutes, context) : undefined,
    RouteTableId: __expectString(output.RouteTableId),
    SubnetAvailabilityZone: __expectString(output.SubnetAvailabilityZone),
    SubnetAvailabilityZoneId: __expectString(output.SubnetAvailabilityZoneId),
    SubnetId: __expectString(output.SubnetId),
    ViolatingRoutes: output.ViolatingRoutes != null ? de_Routes(output.ViolatingRoutes, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1Routes
 */
const de_Routes = (output: any, context: __SerdeContext): Route[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Route(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityGroupRemediationAction
 */
const de_SecurityGroupRemediationAction = (output: any, context: __SerdeContext): SecurityGroupRemediationAction => {
  return {
    Description: __expectString(output.Description),
    IsDefaultAction: __expectBoolean(output.IsDefaultAction),
    RemediationActionType: __expectString(output.RemediationActionType),
    RemediationResult:
      output.RemediationResult != null ? de_SecurityGroupRuleDescription(output.RemediationResult, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupRemediationActions
 */
const de_SecurityGroupRemediationActions = (output: any, context: __SerdeContext): SecurityGroupRemediationAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SecurityGroupRemediationAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecurityGroupRuleDescription
 */
const de_SecurityGroupRuleDescription = (output: any, context: __SerdeContext): SecurityGroupRuleDescription => {
  return {
    FromPort: __expectLong(output.FromPort),
    IPV4Range: __expectString(output.IPV4Range),
    IPV6Range: __expectString(output.IPV6Range),
    PrefixListId: __expectString(output.PrefixListId),
    Protocol: __expectString(output.Protocol),
    ToPort: __expectLong(output.ToPort),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityServicePolicyData
 */
const de_SecurityServicePolicyData = (output: any, context: __SerdeContext): SecurityServicePolicyData => {
  return {
    ManagedServiceData: __expectString(output.ManagedServiceData),
    PolicyOption: output.PolicyOption != null ? de_PolicyOption(output.PolicyOption, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1StatefulEngineOptions
 */
const de_StatefulEngineOptions = (output: any, context: __SerdeContext): StatefulEngineOptions => {
  return {
    RuleOrder: __expectString(output.RuleOrder),
  } as any;
};

/**
 * deserializeAws_json1_1StatefulRuleGroup
 */
const de_StatefulRuleGroup = (output: any, context: __SerdeContext): StatefulRuleGroup => {
  return {
    Override:
      output.Override != null ? de_NetworkFirewallStatefulRuleGroupOverride(output.Override, context) : undefined,
    Priority: __expectInt32(output.Priority),
    ResourceId: __expectString(output.ResourceId),
    RuleGroupName: __expectString(output.RuleGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1StatefulRuleGroupList
 */
const de_StatefulRuleGroupList = (output: any, context: __SerdeContext): StatefulRuleGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatefulRuleGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1StatelessRuleGroup
 */
const de_StatelessRuleGroup = (output: any, context: __SerdeContext): StatelessRuleGroup => {
  return {
    Priority: __expectInt32(output.Priority),
    ResourceId: __expectString(output.ResourceId),
    RuleGroupName: __expectString(output.RuleGroupName),
  } as any;
};

/**
 * deserializeAws_json1_1StatelessRuleGroupList
 */
const de_StatelessRuleGroupList = (output: any, context: __SerdeContext): StatelessRuleGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StatelessRuleGroup(entry, context);
    });
  return retVal;
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
 * deserializeAws_json1_1TargetViolationReasons
 */
const de_TargetViolationReasons = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ThirdPartyFirewallFirewallPolicies
 */
const de_ThirdPartyFirewallFirewallPolicies = (
  output: any,
  context: __SerdeContext
): ThirdPartyFirewallFirewallPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ThirdPartyFirewallFirewallPolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ThirdPartyFirewallFirewallPolicy
 */
const de_ThirdPartyFirewallFirewallPolicy = (
  output: any,
  context: __SerdeContext
): ThirdPartyFirewallFirewallPolicy => {
  return {
    FirewallPolicyId: __expectString(output.FirewallPolicyId),
    FirewallPolicyName: __expectString(output.FirewallPolicyName),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyFirewallMissingExpectedRouteTableViolation
 */
const de_ThirdPartyFirewallMissingExpectedRouteTableViolation = (
  output: any,
  context: __SerdeContext
): ThirdPartyFirewallMissingExpectedRouteTableViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    CurrentRouteTable: __expectString(output.CurrentRouteTable),
    ExpectedRouteTable: __expectString(output.ExpectedRouteTable),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyFirewallMissingFirewallViolation
 */
const de_ThirdPartyFirewallMissingFirewallViolation = (
  output: any,
  context: __SerdeContext
): ThirdPartyFirewallMissingFirewallViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyFirewallMissingSubnetViolation
 */
const de_ThirdPartyFirewallMissingSubnetViolation = (
  output: any,
  context: __SerdeContext
): ThirdPartyFirewallMissingSubnetViolation => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    TargetViolationReason: __expectString(output.TargetViolationReason),
    VPC: __expectString(output.VPC),
    ViolationTarget: __expectString(output.ViolationTarget),
  } as any;
};

/**
 * deserializeAws_json1_1ThirdPartyFirewallPolicy
 */
const de_ThirdPartyFirewallPolicy = (output: any, context: __SerdeContext): ThirdPartyFirewallPolicy => {
  return {
    FirewallDeploymentModel: __expectString(output.FirewallDeploymentModel),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ViolationDetail
 */
const de_ViolationDetail = (output: any, context: __SerdeContext): ViolationDetail => {
  return {
    MemberAccount: __expectString(output.MemberAccount),
    PolicyId: __expectString(output.PolicyId),
    ResourceDescription: __expectString(output.ResourceDescription),
    ResourceId: __expectString(output.ResourceId),
    ResourceTags: output.ResourceTags != null ? de_TagList(output.ResourceTags, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
    ResourceViolations:
      output.ResourceViolations != null ? de_ResourceViolations(output.ResourceViolations, context) : undefined,
  } as any;
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
